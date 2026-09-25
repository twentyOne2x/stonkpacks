import type { StockPayoffAcquisitionContext } from "../payoffs";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { PublicKey, VersionedTransaction } from "@solana/web3.js";
/** Commit-reveal randomness commitment as returned by the STONKPACKS API. */
type RandomnessCommitment = {
  id: string;
  batchId: string;
  tierId: string;
  provider: "commit_reveal_no_spend" | "external_vrf_pending";
  candidateTableHash: string;
  serverSeedHash: string;
  clientSeed: string;
  nonce: number;
  state: "committed" | "revealed";
  createdAt: string;
};
import {
  canonicalAuthorizationDigest,
  STOCK_PACK_SALE_ROUTE_FEE_MAX_BPS, stockPackSaleRouteFeeRaw, stockPackSaleQuoteProceeds,
  parseCanonicalChainAssetV1,
  parseCanonicalInventoryLotV1,
  parseCanonicalSettlementReceiptV1,
  parseStockPackCampaignAccessV1,
  parseStockPackCampaignV1,
  parseStockPackOpenV1,
  parseStockPackPreviewV1,
  parseStockPackSaleV1,
  parseStockPackRewardClaimCommandV1,
  parseStockPackRewardClaimV1,
  StockPackErrorCodeSchema,
  StockPackPayoffCardV1Schema,
  StockPackOperationIdentityV1Schema,
  StockPackSaleQuoteV1Schema,
  STOCK_PACK_TOKEN_PROGRAMS,
  type StockPackActorV1,
  type StockPackAmountV1,
  type StockPackErrorCode,
  type StockPackOpenV1,
  type StockPackRecoverV1,
  type StockPackResult,
  type StockPackRewardClaimCommandV1,
} from "@attn-packs/pack-network";

import { assertStockPacksPlayerSnapshot, stockPacksRewardDeliveryCard } from "./stockPacksPlayerModel";
import type {
  StockPacksPlayerClient,
  StockPacksPlayerCampaign,
  StockPacksPlayerSnapshot,
  StockPacksPurchaseReview,
  StockPacksRewardPayout,
} from "./stockPacksPlayerTypes";
import type {
  StockPackSaleClient,
  StockPackSalePreparedView,
} from "../sale/stockPackSaleActions";

const HTTP_BASE = "/api/pack-royale/stock-packs";
const MEMO_PROGRAM = "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr";

type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;
type Auth = Readonly<{
  authenticated: boolean;
  getAccessToken?: () => Promise<string | null>;
  getIdentityToken?: () => Promise<string | null>;
}>;

export type StockPackPaymentEvidenceView = Readonly<{
  commitment: RandomnessCommitment;
  bindingDigest: string;
  disclosure: string;
  revealedInput: string | null;
  terminal: ReturnType<typeof parseCanonicalSettlementReceiptV1> | null;
  paymentRecipient: string;
  paymentMemo: string;
  payable: boolean;
}>;

export type StockPackPaymentTransaction = Readonly<{
  unsignedTransaction: Uint8Array;
  blockhash: string;
  lastValidBlockHeight: number;
}>;

type PurchaseStage = "review_requested" | "reviewed" | "order_submitting" | "order_created"
  | "unsigned_saved" | "signed" | "broadcasting" | "broadcasted" | "payment_reporting";
type PurchaseJournal = Readonly<{
  schema: "attn.stockPacks.playerPurchase.v1";
  actorDigest: string;
  campaignId: string;
  nonce: string;
  stage: PurchaseStage;
  review: StockPacksPurchaseReview | null;
  unsignedTransaction: string | null;
  blockhash: string | null;
  lastValidBlockHeight: number | null;
  signedTransaction: string | null;
  transactionId: string | null;
}>;
type RewardJournal = Readonly<{
  schema: "attn.stockPacks.playerRewardClaim.v1";
  actorDigest: string;
  command: StockPackRewardClaimCommandV1;
}>;

export function createStockPacksHttpClients(deps: {
  auth: () => Auth | null;
  actor: () => StockPackActorV1 | null;
  fetch?: FetchLike;
  apiUrl?: (path: string) => string;
  storage: Pick<Storage, "getItem" | "setItem" | "removeItem">;
  createPaymentTransaction: (input: Readonly<{
    actor: StockPackActorV1;
    operationId: string;
    amount: StockPackAmountV1;
    recipient: string;
    memo: string;
  }>) => Promise<StockPackPaymentTransaction>;
  signOnly: (bytes: Uint8Array) => Promise<{ signedTransaction: Uint8Array }>;
  broadcastSignedTransaction: (input: Readonly<{
    signedTransaction: Uint8Array;
    transactionId: string;
    blockhash: string;
    lastValidBlockHeight: number;
  }>) => Promise<void>;
  nonce?: () => string;
  now?: () => string;
  withPurchaseLock?: <T>(name: string, action: () => Promise<T>) => Promise<T>;
}) {
  const fetchImpl = deps.fetch ?? fetch;
  const apiUrl = deps.apiUrl ?? ((path: string) => path);
  const now = deps.now ?? (() => new Date().toISOString());
  const nonce = deps.nonce ?? (() => crypto.randomUUID());

  async function request(path: string, init: RequestInit = {}): Promise<StockPackResult<unknown>> {
    const auth = deps.auth();
    if (!auth?.authenticated) return failure("unauthorized", "Connect your verified Privy wallet.");
    let accessToken: string | null = null;
    let identityToken: string | null = null;
    try {
      [accessToken, identityToken] = await Promise.all([
        auth.getAccessToken?.() ?? Promise.resolve(null),
        auth.getIdentityToken?.() ?? Promise.resolve(null),
      ]);
    } catch {
      return failure("missing_evidence", "Privy authentication is temporarily unavailable.");
    }
    if (!accessToken || !identityToken) return failure("unauthorized", "Connect your verified Privy wallet.");
    const headers = new Headers(init.headers);
    headers.set("authorization", `Bearer ${accessToken}`);
    headers.set("privy-id-token", identityToken);
    if (init.body !== undefined) headers.set("content-type", "application/json");
    if (["POST", "PUT", "PATCH", "DELETE"].includes((init.method ?? "GET").toUpperCase())) {
      headers.set("x-attn-packs-csrf", "1");
      headers.set("content-type", "application/json");
    }
    try {
      const response = await fetchImpl(apiUrl(`${HTTP_BASE}${path}`), { ...init, headers });
      return parseResult(await response.json());
    } catch {
      return failure("reconciliation_required", "Read the saved operation before retrying.");
    }
  }

  async function session(): Promise<StockPackResult<{ actor: StockPackActorV1; network: string }>> {
    const response = await request("/session");
    if (!response.ok) return response;
    const value = object(response.value);
    if (!value || typeof value.network !== "string") return failure("invalid_contract", "The Stock Packs session could not be verified.");
    try { return { ok: true, value: { actor: parseActor(value), network: value.network } }; }
    catch { return failure("invalid_contract", "The Stock Packs session could not be verified."); }
  }

  async function assertSession(actor: StockPackActorV1): Promise<StockPackResult<{ network: string }>> {
    const response = await session();
    if (!response.ok) return response;
    if (actorDigest(response.value.actor) !== actorDigest(actor)) {
      return failure("unauthorized", "The connected Privy wallet changed.");
    }
    return { ok: true, value: { network: response.value.network } };
  }

  const parsePlayerSnapshot = (response: StockPackResult<unknown>, actor: StockPackActorV1):
  StockPackResult<StockPacksPlayerSnapshot> => {
    if (!response.ok) return response;
    try { return { ok: true, value: parseSnapshot(response.value, actor) }; }
    catch { return failure("invalid_contract", "The Stock Packs player response could not be verified."); }
  };

  const reconcileSavedReward = async (actor: StockPackActorV1, snapshot: StockPacksPlayerSnapshot):
  Promise<StockPackResult<StockPacksPlayerSnapshot>> => {
    clearCompletedReward(actor, snapshot);
    const saved = readRewardJournal(actor);
    if (!saved) return { ok: true, value: snapshot };
    const operationId = saved.command.identity.operationId;
    const recovered = await request(`/player/rewards/${encodeURIComponent(operationId)}/recover`, {
      method: "POST", body: JSON.stringify({ requestDigest: saved.command.identity.requestDigest }),
    });
    if (recovered.ok) {
      const parsed = parsePlayerSnapshot(recovered, actor);
      if (parsed.ok) clearCompletedReward(actor, parsed.value);
      return parsed;
    }
    if (recovered.error.code === "delivery_pending") {
      const refreshed = parsePlayerSnapshot(await request(`/player?${new URLSearchParams({ operationId })}`), actor);
      if (refreshed.ok) clearCompletedReward(actor, refreshed.value);
      return refreshed;
    }
    if (recovered.error.code !== "not_found") return recovered;
    if (Date.parse(saved.command.intent.request.expiresAt) <= Date.parse(now())) {
      deps.storage.removeItem(rewardJournalKey(actor));
      return { ok: true, value: snapshot };
    }
    const retried = await request("/player/rewards/claim", { method: "POST",
      body: JSON.stringify({ command: saved.command }) });
    if (!retried.ok && retried.error.code === "stale_evidence") {
      // Recovery already established that no durable claim exists. Only the
      // server's authoritative expiry rejection may retire this saved intent.
      deps.storage.removeItem(rewardJournalKey(actor));
      return { ok: true, value: snapshot };
    }
    const parsed = parsePlayerSnapshot(retried, actor);
    if (parsed.ok) clearCompletedReward(actor, parsed.value);
    return parsed;
  };

  const player: StockPacksPlayerClient = {
    async load(input) {
      const session = await assertSession(input.actor);
      if (!session.ok) return session;
      const query = new URLSearchParams();
      if (input.campaignId) query.set("campaignId", input.campaignId);
      if (input.operationId) query.set("operationId", input.operationId);
      const response = await request(`/player${query.size ? `?${query.toString()}` : ""}`);
      if (!response.ok) return response;
      try {
        const snapshot = parseSnapshot(response.value, input.actor);
        clearCompletedPurchase(input.actor, snapshot);
        return await reconcileSavedReward(input.actor, snapshot);
      } catch {
        return failure("invalid_contract", "The Stock Packs player response could not be verified.");
      }
    },

    async reviewPurchase(input) {
      const session = await assertSession(input.actor);
      if (!session.ok) return session;
      try {
        let saved = readJournal(input.actor);
        if (saved?.review && saved.campaignId === input.campaignId
          && Date.parse(saved.review.expiresAt) > Date.parse(now())) return { ok: true, value: saved.review };
        if (saved && saved.stage !== "review_requested" && saved.stage !== "reviewed") {
          return failure("reconciliation_required", "Recover the saved purchase before opening another Pack.",
            saved.review?.command.identity.operationId ?? null);
        }
        if (!saved || saved.campaignId !== input.campaignId || saved.review) {
          saved = { schema: "attn.stockPacks.playerPurchase.v1", actorDigest: actorDigest(input.actor),
            campaignId: input.campaignId, nonce: nonce(), stage: "review_requested", review: null,
            unsignedTransaction: null, blockhash: null, lastValidBlockHeight: null,
            signedTransaction: null, transactionId: null };
          saveJournal(input.actor, saved);
        }
        const response = await request("/player/review", { method: "POST",
          body: JSON.stringify({ campaignId: input.campaignId, nonce: saved.nonce }) });
        if (!response.ok) return response;
        const review = parsePurchaseReview(response.value, input.actor);
        if (review.total.asset.chainId !== session.value.network) {
          return failure("invalid_contract", "The purchase network changed.");
        }
        if (review.campaignId !== input.campaignId || review.command.identity.nonce !== saved.nonce) {
          return failure("intent_conflict", "The purchase review does not match the saved request.");
        }
        saveJournal(input.actor, { ...saved, stage: "reviewed", review });
        return { ok: true, value: review };
      } catch {
        return failure("reconciliation_required", "The saved purchase review could not be verified.");
      }
    },

    async purchase(input) {
      const session = await assertSession(input.actor);
      if (!session.ok) return session;
      try {
        let saved = readJournal(input.actor);
        if (!saved?.review || canonicalAuthorizationDigest(saved.review) !== canonicalAuthorizationDigest(input.review)) {
          return failure("intent_conflict", "The confirmed purchase differs from the saved review.");
        }
        const operationId = input.review.command.identity.operationId;
        const requestDigest = input.review.command.identity.requestDigest;
        if (input.review.total.asset.chainId !== session.value.network) {
          return failure("invalid_contract", "The purchase network changed.");
        }
        let open: StockPackOpenV1 | null = null;
        if (saved.stage === "reviewed") {
          saved = { ...saved, stage: "order_submitting" };
          saveJournal(input.actor, saved);
          const opened = await request("/orders", { method: "POST", body: JSON.stringify({ command: input.review.command }) });
          if (!opened.ok) return opened;
          open = parseStockPackOpenV1(opened.value);
        } else if (saved.stage === "order_submitting") {
          const readback = await request(`/orders/${encodeURIComponent(operationId)}`);
          if (!readback.ok) {
            if (readback.error.code !== "not_found") return readback;
            const opened = await request("/orders", { method: "POST", body: JSON.stringify({ command: input.review.command }) });
            if (!opened.ok) return opened;
            open = parseStockPackOpenV1(opened.value);
          } else open = parseStockPackOpenV1(readback.value);
        }
        if (open) assertOpen(open, input.actor, operationId, requestDigest);
        if (saved.stage === "reviewed" || saved.stage === "order_submitting") {
          saved = { ...saved, stage: "order_created" };
          saveJournal(input.actor, saved);
        }
        const evidenceResult = await request(`/orders/${encodeURIComponent(operationId)}/evidence`);
        if (!evidenceResult.ok) return evidenceResult;
        const evidence = parsePaymentEvidence(evidenceResult.value);
        if (evidence.paymentMemo !== requestDigest) return failure("invalid_contract", "The payment memo changed.");
        if (evidence.terminal) return player.load({ actor: input.actor, operationId });
        if (!evidence.payable) {
          await recoverOrder(operationId, requestDigest);
          return player.load({ actor: input.actor, operationId });
        }
        if (!saved.unsignedTransaction) {
          const prepared = await deps.createPaymentTransaction({ actor: input.actor, operationId,
            amount: input.review.total, recipient: evidence.paymentRecipient, memo: evidence.paymentMemo });
          assertUnsignedPayment(prepared, input.actor, input.review.total, evidence);
          saved = { ...saved, stage: "unsigned_saved", unsignedTransaction: encode(prepared.unsignedTransaction),
            blockhash: prepared.blockhash, lastValidBlockHeight: prepared.lastValidBlockHeight };
          saveJournal(input.actor, saved);
        }
        if (!saved.signedTransaction) {
          const currentSession = await assertSession(input.actor);
          if (!currentSession.ok) return currentSession;
          const unsigned = decode(saved.unsignedTransaction);
          const signed = (await deps.signOnly(unsigned.slice())).signedTransaction;
          const transactionId = assertSignedPayment(unsigned, signed);
          saved = { ...saved, stage: "signed", signedTransaction: encode(signed), transactionId };
          saveJournal(input.actor, saved);
        }
        if (saved.stage !== "signed") {
          const recovered = await recoverSignedPayment(input.actor, saved);
          if (!recovered.ok) return recovered;
          return player.load({ actor: input.actor, operationId });
        }
        if (saved.stage === "signed") {
          saved = { ...saved, stage: "broadcasting" };
          saveJournal(input.actor, saved);
          await deps.broadcastSignedTransaction({ signedTransaction: decode(required(saved.signedTransaction)),
            transactionId: required(saved.transactionId), blockhash: required(saved.blockhash),
            lastValidBlockHeight: requiredNumber(saved.lastValidBlockHeight) });
          saved = { ...saved, stage: "broadcasted" };
          saveJournal(input.actor, saved);
        }
        saved = { ...saved, stage: "payment_reporting" };
        saveJournal(input.actor, saved);
        const payment = await request(`/orders/${encodeURIComponent(operationId)}/payment`, { method: "POST",
          body: JSON.stringify({ requestDigest, transactionId: required(saved.transactionId) }) });
        if (!payment.ok) return payment;
        return player.load({ actor: input.actor, operationId });
      } catch {
        return failure("reconciliation_required", "Recover the saved purchase before retrying.",
          input.review.command.identity.operationId);
      }
    },

    async claimReward(input) {
      const session = await assertSession(input.actor);
      if (!session.ok) return session;
      try {
        const command = input.campaign.rewardCommand;
        if (input.campaign.access.mode !== "sponsored_reward"
          || input.campaign.acquisition.mode !== "sponsored_reward"
          || input.campaign.acquisition.state !== "entitled" || !command) {
          return failure("intent_conflict", "This reward is not currently claimable.");
        }
        assertRewardCommand(command, input.actor, input.campaign);
        const saved = readRewardJournal(input.actor);
        if (saved && canonicalAuthorizationDigest(saved.command) !== canonicalAuthorizationDigest(command)) {
          return failure("reconciliation_required", "Recover the saved reward claim before starting another.",
            saved.command.identity.operationId);
        }
        if (!saved) saveRewardJournal(input.actor, { schema: "attn.stockPacks.playerRewardClaim.v1",
          actorDigest: actorDigest(input.actor), command });
        const response = await request("/player/rewards/claim", { method: "POST",
          body: JSON.stringify({ command: saved?.command ?? command }) });
        if (!response.ok) return { ok: false, error: { ...response.error,
          operationId: response.error.operationId ?? command.identity.operationId } };
        const snapshot = parseSnapshot(response.value, input.actor);
        clearCompletedReward(input.actor, snapshot);
        return { ok: true, value: snapshot };
      } catch {
        return failure("reconciliation_required", "Recover the saved reward claim before retrying.",
          input.campaign.rewardCommand?.identity.operationId ?? null);
      }
    },

    async recoverReward(input) {
      const session = await assertSession(input.actor);
      if (!session.ok) return session;
      try {
        assertRewardClaimActor(input.claim, input.actor);
        const response = await request(`/player/rewards/${encodeURIComponent(input.claim.identity.operationId)}/recover`, {
          method: "POST", body: JSON.stringify({ requestDigest: input.claim.identity.requestDigest }),
        });
        if (!response.ok && response.error.code !== "delivery_pending") return response;
        if (!response.ok) return player.load({ actor: input.actor, operationId: input.claim.identity.operationId });
        const snapshot = parseSnapshot(response.value, input.actor);
        clearCompletedReward(input.actor, snapshot);
        return { ok: true, value: snapshot };
      } catch {
        return failure("reconciliation_required", "The saved reward delivery still requires recovery.",
          input.claim.identity.operationId);
      }
    },

    async recover(input) {
      const session = await assertSession(input.actor);
      if (!session.ok) return session;
      try {
        const saved = readJournal(input.actor);
        if (saved?.review?.command.identity.operationId === input.operationId && saved.transactionId) {
          if (saved.review.command.identity.requestDigest !== input.requestDigest
            || saved.review.total.asset.chainId !== session.value.network) {
            return failure("intent_conflict", "The saved payment does not match this operation.");
          }
          const payment = await recoverSignedPayment(input.actor, saved);
          if (!payment.ok && payment.error.code !== "payment_pending") return payment;
        }
        const recovered = await recoverOrder(input.operationId, input.requestDigest);
        if (!recovered.ok && recovered.error.code !== "payment_pending" && recovered.error.code !== "delivery_pending") return recovered;
        return player.load({ actor: input.actor, operationId: input.operationId });
      } catch {
        return failure("reconciliation_required", "The saved operation still requires recovery.", input.operationId);
      }
    },

    async reviewSale() { return failure("route_unavailable", "Use the canonical sale panel."); },
    async sell() { return failure("route_unavailable", "Use the canonical sale panel."); },
    async resumeSale() { return failure("route_unavailable", "Use the canonical sale panel."); },
  };

  async function recoverSignedPayment(actor: StockPackActorV1, saved: PurchaseJournal): Promise<StockPackResult<unknown>> {
    if (!saved.review || !saved.signedTransaction || !saved.transactionId) {
      return failure("missing_evidence", "The signed payment is unavailable.");
    }
    const { operationId, requestDigest } = saved.review.command.identity;
    const report = () => request(`/orders/${encodeURIComponent(operationId)}/payment`, { method: "POST",
      body: JSON.stringify({ requestDigest, transactionId: saved.transactionId }) });
    const payment = await report();
    if (!payment.ok && payment.error.code !== "payment_pending") return payment;
    if (payment.ok) assertOpen(parseStockPackOpenV1(payment.value), actor, operationId, requestDigest);
    const result = await request(`/orders/${encodeURIComponent(operationId)}/evidence`);
    if (!result.ok) return result;
    const evidence = parsePaymentEvidence(result.value);
    if (evidence.paymentMemo !== requestDigest) return failure("invalid_contract", "The payment memo changed.");
    if (evidence.terminal || !evidence.payable) return { ok: true, value: null };
    assertUnsignedPayment({ unsignedTransaction: decode(required(saved.unsignedTransaction)),
      blockhash: required(saved.blockhash), lastValidBlockHeight: requiredNumber(saved.lastValidBlockHeight) },
    actor, saved.review.total, evidence);
    saveJournal(actor, { ...saved, stage: "broadcasting" });
    await deps.broadcastSignedTransaction({ signedTransaction: decode(saved.signedTransaction),
      transactionId: saved.transactionId, blockhash: required(saved.blockhash),
      lastValidBlockHeight: requiredNumber(saved.lastValidBlockHeight) });
    saveJournal(actor, { ...saved, stage: "payment_reporting" });
    return report();
  }

  const sale: StockPackSaleClient = {
    async prepare(input) {
      const actor = requiredActor(deps.actor());
      await requireSession(actor);
      return unwrapPrepared(await request("/sales/prepare", { method: "POST", body: JSON.stringify(input) }), actor);
    },
    async review(query) {
      const actor = actorForQuery(query);
      await requireSession(actor);
      return unwrapPrepared(await request(`/sales/${encodeURIComponent(query.operationId)}/review`), actor);
    },
    async refresh(query) {
      const actor = actorForQuery(query);
      await requireSession(actor);
      return unwrapPrepared(await request(`/sales/${encodeURIComponent(query.operationId)}/refresh`, { method: "POST",
        body: JSON.stringify({ requestDigest: query.requestDigest }) }), actor);
    },
    async authorize(query) {
      const actor = actorForQuery(query);
      await requireSession(actor);
      const result = await request(`/sales/${encodeURIComponent(query.operationId)}/authorize`, { method: "POST",
        body: JSON.stringify({ requestDigest: query.requestDigest, reviewDigest: query.reviewDigest,
          signedTransaction: query.signedTransaction }) });
      const value = unwrap(result);
      if (typeof value !== "string" || !digest(value)) throw new Error("sale_authorization_receipt_invalid");
      return value;
    },
    async reject(query) {
      const actor = actorForQuery(query);
      await requireSession(actor);
      return parseStockPackSaleV1(unwrap(await request(`/sales/${encodeURIComponent(query.operationId)}/reject`, { method: "POST",
        body: JSON.stringify({ requestDigest: query.requestDigest, reviewDigest: query.reviewDigest }) })));
    },
    async sell(command) {
      const actor = requiredActor(deps.actor());
      const session = await assertSession(actor);
      if (!session.ok) return session;
      const result = await request("/sales", { method: "POST", body: JSON.stringify({ command }) });
      return parseCanonicalResult(result, parseStockPackSaleV1);
    },
    async read(query) {
      const actor = actorForRead(query);
      const session = await assertSession(actor);
      if (!session.ok) return session;
      return parseCanonicalResult(await request(`/sales/${encodeURIComponent(query.operationId)}`), parseStockPackSaleV1);
    },
    async recover(query) {
      const actor = actorForQuery(query);
      const session = await assertSession(actor);
      if (!session.ok) return session;
      return parseCanonicalResult(await request(`/sales/${encodeURIComponent(query.operationId)}/recover`, { method: "POST",
        body: JSON.stringify({ requestDigest: query.requestDigest }) }), parseStockPackSaleV1);
    },
    async resumeRemaining(input) {
      const actor = actorForQuery(input);
      const session = await assertSession(actor);
      if (!session.ok) return session;
      return parseCanonicalResult(await request(`/sales/${encodeURIComponent(input.operationId)}/resume`, { method: "POST",
        body: JSON.stringify({ requestDigest: input.requestDigest, remainingLegId: input.remainingLegId,
          quote: input.quote, authorizationReceiptDigest: input.authorizationReceiptDigest }) }), parseStockPackSaleV1);
    },
  };

  function actorForRead(query: { actorAccountId: string }): StockPackActorV1 {
    const actor = requiredActor(deps.actor());
    if (actor.actorAccountId !== query.actorAccountId) throw new Error("stock_pack_actor_changed");
    return actor;
  }
  function actorForQuery(query: StockPackRecoverV1): StockPackActorV1 { return actorForRead(query); }
  async function requireSession(actor: StockPackActorV1) {
    const result = await assertSession(actor);
    if (!result.ok) throw new Error(result.error.message);
  }
  async function recoverOrder(operationId: string, requestDigest: string) {
    return request(`/orders/${encodeURIComponent(operationId)}/recover`, { method: "POST", body: JSON.stringify({ requestDigest }) });
  }
  function readJournal(actor: StockPackActorV1): PurchaseJournal | null {
    const raw = deps.storage.getItem(journalKey(actor));
    if (!raw) return null;
    const value = JSON.parse(raw) as PurchaseJournal;
    if (value.schema !== "attn.stockPacks.playerPurchase.v1" || value.actorDigest !== actorDigest(actor)
      || typeof value.campaignId !== "string" || typeof value.nonce !== "string"
      || !(["review_requested", "reviewed", "order_submitting", "order_created", "unsigned_saved", "signed",
        "broadcasting", "broadcasted", "payment_reporting"] as const).includes(value.stage)) throw new Error("purchase_journal_invalid");
    if (value.review) parsePurchaseReview(value.review, actor);
    if (value.unsignedTransaction) decode(value.unsignedTransaction);
    if (value.signedTransaction) {
      const transactionId = assertSignedPayment(decode(value.unsignedTransaction), decode(value.signedTransaction));
      if (value.transactionId !== transactionId) throw new Error("purchase_signature_changed");
    }
    return value;
  }
  function saveJournal(actor: StockPackActorV1, journal: PurchaseJournal) {
    const encoded = JSON.stringify(journal);
    deps.storage.setItem(journalKey(actor), encoded);
    if (deps.storage.getItem(journalKey(actor)) !== encoded) throw new Error("purchase_journal_write_failed");
  }
  function clearCompletedPurchase(actor: StockPackActorV1, snapshot: StockPacksPlayerSnapshot) {
    const saved = readJournal(actor);
    const operationId = saved?.review?.command.identity.operationId;
    if (!operationId) return;
    const entry = snapshot.history.find(candidate => candidate.operationId === operationId);
    if (entry?.mode === "paid" && entry.open.request.state === "terminal") deps.storage.removeItem(journalKey(actor));
  }
  function readRewardJournal(actor: StockPackActorV1): RewardJournal | null {
    const raw = deps.storage.getItem(rewardJournalKey(actor));
    if (!raw) return null;
    const value = JSON.parse(raw) as RewardJournal;
    if (value.schema !== "attn.stockPacks.playerRewardClaim.v1" || value.actorDigest !== actorDigest(actor)) {
      throw new Error("reward_journal_invalid");
    }
    return { ...value, command: parseStockPackRewardClaimCommandV1(value.command) };
  }
  function saveRewardJournal(actor: StockPackActorV1, journal: RewardJournal) {
    const encoded = JSON.stringify(journal);
    deps.storage.setItem(rewardJournalKey(actor), encoded);
    if (deps.storage.getItem(rewardJournalKey(actor)) !== encoded) throw new Error("reward_journal_write_failed");
  }
  function clearCompletedReward(actor: StockPackActorV1, snapshot: StockPacksPlayerSnapshot) {
    const saved = readRewardJournal(actor);
    if (!saved) return;
    const completed = [snapshot.activeRewardClaim, ...snapshot.history.flatMap(entry =>
      entry.mode === "sponsored_reward" ? [entry.rewardClaim] : [])]
      .some(candidate => candidate !== null && (candidate.state === "delivered" || candidate.state === "rejected")
        && rewardClaimMatchesSavedCommand(actor, saved.command, candidate));
    if (completed) deps.storage.removeItem(rewardJournalKey(actor));
  }
  const withPurchaseLock = async <T>(actor: StockPackActorV1, action: () => Promise<StockPackResult<T>>): Promise<StockPackResult<T>> => {
    try {
      const name = journalKey(actor);
      if (deps.withPurchaseLock) return await deps.withPurchaseLock(name, action);
      if (typeof navigator === "undefined" || !navigator.locks?.request) {
        return failure("reconciliation_required", "Safe purchase locking is unavailable in this browser.");
      }
      return await navigator.locks.request(name, { mode: "exclusive" }, action);
    } catch {
      return failure("reconciliation_required", "The saved purchase could not be locked safely.");
    }
  };
  const lockedPlayer: StockPacksPlayerClient = { ...player,
    reviewPurchase: input => withPurchaseLock(input.actor, () => player.reviewPurchase(input)),
    purchase: input => withPurchaseLock(input.actor, () => player.purchase(input)),
    recover: input => withPurchaseLock(input.actor, () => player.recover(input)),
  };
  return { player: lockedPlayer, sale, session };
}

function rewardClaimMatchesSavedCommand(actor: StockPackActorV1, command: StockPackRewardClaimCommandV1,
  claim: ReturnType<typeof parseStockPackRewardClaimV1>): boolean {
  return command.identity.actorAccountId === actor.actorAccountId
    && command.intent.request.actorAccountId === actor.actorAccountId
    && command.intent.request.recipientWallet === actor.wallet
    && claim.identity.operationId === command.identity.operationId
    && claim.identity.requestDigest === command.identity.requestDigest
    && claim.identity.actorAccountId === actor.actorAccountId
    && claim.campaignId === command.intent.campaignId
    && claim.request.requestDigest === command.intent.request.requestDigest
    && claim.request.actorAccountId === actor.actorAccountId
    && claim.request.recipientWallet === actor.wallet;
}

function parseSnapshot(value: unknown, actor: StockPackActorV1): StockPacksPlayerSnapshot {
  const root = requiredObject(value, "player_snapshot_invalid");
  const parsedActor = parseActor(root.actor);
  const campaigns = requiredArray(root.campaigns).map((entry) => {
    const row = requiredObject(entry, "player_campaign_invalid");
    if (typeof row.title !== "string" || typeof row.description !== "string") throw new Error("player_campaign_copy_invalid");
    const campaign = parseStockPackCampaignV1(row.campaign), access = parseStockPackCampaignAccessV1(row.access);
    const acquisition = parseAcquisition(row.acquisition);
    const rewardPreview = row.rewardPreview == null ? null : parseStockPackPreviewV1(row.rewardPreview);
    const rewardPayout = row.rewardPayout == null ? null : parseRewardPayout(row.rewardPayout);
    const rewardCommand = row.rewardCommand === null ? null : parseStockPackRewardClaimCommandV1(row.rewardCommand);
    const result = {
      campaign, access, title: row.title, description: row.description,
      acquisition, rewardPreview, rewardPayout, rewardCommand,
    };
    assertCampaignAccess(result, parsedActor);
    return result;
  });
  const history = requiredArray(root.history).map((entry) => {
    const row = requiredObject(entry, "player_history_invalid");
    if (typeof row.operationId !== "string" || typeof row.updatedAt !== "string"
      || (row.mode !== "paid" && row.mode !== "sponsored_reward")) throw new Error("player_history_identity_invalid");
    const preview = parseStockPackPreviewV1(row.preview);
    const sale = row.sale === null ? null : parseStockPackSaleV1(row.sale);
    const rewardPayout = row.rewardPayout == null ? null : parseRewardPayout(row.rewardPayout);
    const common = { operationId: row.operationId, preview, sale, updatedAt: row.updatedAt };
    if (row.mode === "paid") {
      if (rewardPayout !== null || row.deliveryLot !== null) throw new Error("player_paid_delivery_lot_invalid");
      return { ...common, mode: "paid" as const, open: parseStockPackOpenV1(row.open), rewardClaim: null,
        rewardPayout: null, deliveryLot: null,
        card: row.card === null ? null : StockPackPayoffCardV1Schema.parse(row.card) };
    }
    if (row.card !== null) throw new Error("player_reward_wire_card_invalid");
    if (!rewardPayout) throw new Error("player_reward_payout_missing");
    const rewardClaim = parseStockPackRewardClaimV1(row.rewardClaim);
    const deliveryLot = parseCanonicalInventoryLotV1(row.deliveryLot);
    assertRewardPayout(rewardPayout, rewardClaim.request.entitlement);
    return { ...common, mode: "sponsored_reward" as const, open: null, rewardClaim, rewardPayout, deliveryLot,
      card: stockPacksRewardDeliveryCard(preview, rewardClaim, deliveryLot) };
  });
  const activeRewardClaim = root.activeRewardClaim === null ? null : parseStockPackRewardClaimV1(root.activeRewardClaim);
  if (activeRewardClaim && root.selectedCard !== null) throw new Error("player_reward_wire_card_invalid");
  const activeRewardCard = activeRewardClaim
    ? history.find((entry) => entry.mode === "sponsored_reward"
      && entry.operationId === activeRewardClaim.identity.operationId)?.card ?? null
    : null;
  const snapshot: StockPacksPlayerSnapshot = {
    actor: parsedActor, campaigns,
    selectedCampaignId: nullableString(root.selectedCampaignId),
    walletBalance: root.walletBalance === null ? null : parseAmount(root.walletBalance),
    activeOpen: root.activeOpen === null ? null : parseStockPackOpenV1(root.activeOpen),
    activeRewardClaim,
    activePreview: root.activePreview === null ? null : parseStockPackPreviewV1(root.activePreview),
    selectedCard: activeRewardCard ?? (root.selectedCard === null ? null : StockPackPayoffCardV1Schema.parse(root.selectedCard)),
    sale: root.sale === null ? null : parseStockPackSaleV1(root.sale), history,
    observedAt: requiredString(root.observedAt),
  };
  assertStockPacksPlayerSnapshot(snapshot, actor);
  return snapshot;
}

function parseAcquisition(value: unknown): StockPayoffAcquisitionContext {
  const root = requiredObject(value, "player_acquisition_invalid");
  const mode = requiredString(root.mode), providerLabel = requiredString(root.providerLabel).trim();
  if (providerLabel.length === 0 || providerLabel.length > 80) throw new Error("player_acquisition_provider_invalid");
  const state = requiredString(root.state);
  if (mode === "paid") {
    if (!exactKeys(root, ["mode", "providerLabel", "price", "state"])) throw new Error("player_paid_acquisition_shape_invalid");
    if (!["payment_pending", "paid", "delivery_pending", "delivered"].includes(state)) {
      throw new Error("player_paid_acquisition_state_invalid");
    }
    return { mode, providerLabel, price: parseAmount(root.price),
      state: state as Extract<StockPayoffAcquisitionContext, { mode: "paid" }>["state"] };
  }
  if (mode === "sponsored_reward") {
    if (!exactKeys(root, ["mode", "providerLabel", "rewardCampaignId", "state"])) {
      throw new Error("player_reward_acquisition_shape_invalid");
    }
    if (!["entitled", "ineligible", "claim_pending", "claimed", "delivery_pending", "delivered"].includes(state)) {
      throw new Error("player_reward_acquisition_state_invalid");
    }
    return { mode, providerLabel, rewardCampaignId: requiredString(root.rewardCampaignId),
      state: state as Extract<StockPayoffAcquisitionContext, { mode: "sponsored_reward" }>["state"] };
  }
  throw new Error("player_acquisition_mode_invalid");
}

function parseRewardPayout(value: unknown): StockPacksRewardPayout {
  const root = requiredObject(value, "player_reward_payout_invalid");
  if (!exactKeys(root, ["roundId", "roundNumber", "epochId", "epochSequence", "exactAmount", "asset"])) {
    throw new Error("player_reward_payout_shape_invalid");
  }
  const amount = parseAmount({ asset: root.asset, rawAmount: root.exactAmount });
  const payout = {
    roundId: requiredString(root.roundId),
    roundNumber: requiredString(root.roundNumber),
    epochId: requiredString(root.epochId),
    epochSequence: requiredString(root.epochSequence),
    exactAmount: amount.rawAmount,
    asset: amount.asset,
  };
  if (!/^(?:0|[1-9][0-9]*)$/u.test(payout.roundNumber)
    || !/^(?:0|[1-9][0-9]*)$/u.test(payout.epochSequence)) {
    throw new Error("player_reward_payout_sequence_invalid");
  }
  return payout;
}

function assertCampaignAccess(campaign: StockPacksPlayerCampaign, actor: StockPackActorV1): void {
  if (campaign.access.mode !== campaign.acquisition.mode) throw new Error("player_acquisition_mode_mismatch");
  if (campaign.access.mode === "paid") {
    if (campaign.rewardPreview != null || campaign.rewardPayout != null
      || campaign.rewardCommand !== null || campaign.acquisition.mode !== "paid"
      || campaign.acquisition.price.asset.identityDigest !== campaign.campaign.preview.recipe.quoteAsset.identityDigest
      || campaign.acquisition.price.rawAmount !== campaign.campaign.preview.recipe.exactPackPrincipalQuoteUnits) {
      throw new Error("player_paid_acquisition_binding_invalid");
    }
    return;
  }
  if (campaign.acquisition.mode !== "sponsored_reward"
    || campaign.acquisition.rewardCampaignId !== campaign.access.rewardCampaignId
    || (campaign.rewardPreview !== null && campaign.rewardPreview !== undefined
      && campaign.rewardPreview.campaignId !== campaign.campaign.campaignId)
    || (campaign.acquisition.state === "ineligible") !== (campaign.rewardPayout == null)
    || (campaign.acquisition.state === "entitled") !== (campaign.rewardCommand !== null)) {
    throw new Error("player_reward_acquisition_binding_invalid");
  }
  if (campaign.rewardCommand) {
    assertRewardCommand(campaign.rewardCommand, actor, campaign);
    assertRewardPayout(campaign.rewardPayout, campaign.rewardCommand.intent.request.entitlement);
  }
}

function assertRewardPayout(
  payout: StockPacksRewardPayout | null | undefined,
  entitlement: StockPackRewardClaimCommandV1["intent"]["request"]["entitlement"],
): asserts payout is StockPacksRewardPayout {
  if (!payout || payout.epochId !== entitlement.epochId
    || payout.epochSequence !== entitlement.entitlementVersion
    || payout.asset.identityDigest !== entitlement.asset.identityDigest
    || payout.exactAmount !== entitlement.rawAmount) {
    throw new Error("player_reward_payout_binding_invalid");
  }
}

function assertRewardCommand(command: StockPackRewardClaimCommandV1, actor: StockPackActorV1,
  campaign: StockPacksPlayerCampaign): void {
  const parsed = parseStockPackRewardClaimCommandV1(command), request = parsed.intent.request;
  const rewardPreview = campaign.rewardPreview;
  if (campaign.access.mode !== "sponsored_reward" || !rewardPreview
    || parsed.intent.campaignId !== campaign.campaign.campaignId
    || request.campaignId !== campaign.campaign.campaignId || request.actorAccountId !== actor.actorAccountId
    || request.recipientWallet !== actor.wallet || request.snapshotId !== rewardPreview.snapshot.snapshotId
    || request.snapshotDigest !== rewardPreview.snapshot.snapshotDigest
    || request.entitlement.sourceCampaignId !== campaign.access.rewardCampaignId) {
    throw new Error("player_reward_command_binding_invalid");
  }
}

function assertRewardClaimActor(claim: ReturnType<typeof parseStockPackRewardClaimV1>, actor: StockPackActorV1): void {
  if (claim.identity.actorAccountId !== actor.actorAccountId || claim.request.actorAccountId !== actor.actorAccountId
    || claim.request.recipientWallet !== actor.wallet) throw new Error("reward_claim_actor_mismatch");
}

function parsePurchaseReview(value: unknown, actor: StockPackActorV1): StockPacksPurchaseReview {
  const root = requiredObject(value, "purchase_review_invalid");
  const command = requiredObject(root.command, "purchase_command_invalid");
  const intent = requiredObject(command.intent, "purchase_intent_invalid");
  if (!exactKeys(command, ["identity", "intent"]) || !exactKeys(intent, ["campaignId", "previewId", "previewDigest", "inventoryRevision", "request"])) {
    throw new Error("purchase_command_shape_invalid");
  }
  const identity = StockPackOperationIdentityV1Schema.parse(command.identity);
  if (identity.kind !== "open") throw new Error("purchase_command_kind_invalid");
  const bonus = root.bonus == null ? null : requiredObject(root.bonus, "purchase_bonus_invalid");
  const bonusChanceBps = bonus?.chanceBps ?? root.bonusChanceBps ?? 0;
  if (typeof bonusChanceBps !== "number" || !Number.isInteger(bonusChanceBps) || bonusChanceBps < 0 || bonusChanceBps > 10_000) throw new Error("purchase_bonus_invalid");
  const parsed: StockPacksPurchaseReview = { bonusChanceBps,
    reviewId: requiredString(root.reviewId), campaignId: requiredString(root.campaignId),
    previewId: requiredString(root.previewId), previewDigest: requiredDigest(root.previewDigest),
    actor: parseActor(root.actor), principal: parseAmount(root.principal),
    fees: requiredArray(root.fees).map(parseAmount), total: parseAmount(root.total),
    availableBalance: parseAmount(root.availableBalance), expiresAt: requiredString(root.expiresAt),
    command: { identity: { ...identity, kind: "open" }, intent: {
      campaignId: requiredString(intent.campaignId),
      previewId: requiredString(intent.previewId), previewDigest: requiredDigest(intent.previewDigest),
      inventoryRevision: requiredString(intent.inventoryRevision),
      request: intent.request as StockPacksPurchaseReview["command"]["intent"]["request"],
    } },
  };
  const open = parseStockPackOpenV1({ identity: (parsed.command as { identity: unknown }).identity,
    campaignId: parsed.campaignId, reservationId: "review", request: parsed.command.intent.request,
    selection: null, delivery: null });
  if (actorDigest(parsed.actor) !== actorDigest(actor) || parsed.command.identity.kind !== "open"
    || parsed.command.identity.operationId !== open.request.operationId
    || parsed.command.identity.requestDigest !== canonicalAuthorizationDigest(parsed.command.intent)
    || parsed.command.intent.campaignId !== parsed.campaignId || parsed.command.intent.previewId !== parsed.previewId
    || parsed.command.intent.previewDigest !== parsed.previewDigest) throw new Error("purchase_review_binding_invalid");
  return parsed;
}

function parsePaymentEvidence(value: unknown): StockPackPaymentEvidenceView {
  const root = requiredObject(value, "payment_evidence_invalid");
  const recipient = requiredString(root.paymentRecipient);
  new PublicKey(recipient);
  return { commitment: parseRandomnessCommitment(root.commitment), bindingDigest: requiredDigest(root.bindingDigest),
    disclosure: requiredString(root.disclosure), revealedInput: nullableString(root.revealedInput),
    terminal: root.terminal === null ? null : parseCanonicalSettlementReceiptV1(root.terminal),
    paymentRecipient: recipient, paymentMemo: requiredDigest(root.paymentMemo), payable: requiredBoolean(root.payable) };
}

function parseRandomnessCommitment(value: unknown): RandomnessCommitment {
  const root = requiredObject(value, "randomness_commitment_invalid");
  if (!exactKeys(root, ["id", "batchId", "tierId", "provider", "candidateTableHash", "serverSeedHash",
    "clientSeed", "nonce", "state", "createdAt"])) throw new Error("randomness_commitment_shape_invalid");
  const provider = requiredString(root.provider);
  const state = requiredString(root.state);
  const nonce = requiredNumber(root.nonce);
  if ((provider !== "commit_reveal_no_spend" && provider !== "external_vrf_pending")
    || (state !== "committed" && state !== "revealed") || nonce < 0) {
    throw new Error("randomness_commitment_state_invalid");
  }
  return {
    id: requiredString(root.id),
    batchId: requiredString(root.batchId),
    tierId: requiredString(root.tierId),
    provider,
    candidateTableHash: requiredDigest(root.candidateTableHash),
    serverSeedHash: requiredDigest(root.serverSeedHash),
    clientSeed: requiredString(root.clientSeed),
    nonce,
    state,
    createdAt: requiredString(root.createdAt),
  };
}

function assertUnsignedPayment(prepared: StockPackPaymentTransaction, actor: StockPackActorV1,
  amount: StockPackAmountV1, evidence: StockPackPaymentEvidenceView) {
  if (!Number.isSafeInteger(prepared.lastValidBlockHeight) || prepared.lastValidBlockHeight < 1) throw new Error("payment_block_height_invalid");
  const transaction = VersionedTransaction.deserialize(prepared.unsignedTransaction);
  const message = paymentMessage(transaction);
  if (message.hasAddressLookups || message.requiredSignatures !== 1
    || message.accountKeys[0] !== actor.wallet || message.recentBlockhash !== prepared.blockhash
    || transaction.signatures.length !== 1 || transaction.signatures[0]?.some(byte => byte !== 0)) throw new Error("payment_signer_invalid");
  if (amount.asset.namespace !== "solana" || amount.asset.assetStandard === "native") throw new Error("payment_asset_invalid");
  const tokenProgram = STOCK_PACK_TOKEN_PROGRAMS[amount.asset.assetStandard];
  const mint = new PublicKey(amount.asset.assetAddress);
  const program = new PublicKey(tokenProgram);
  const sourceTokenAccount = getAssociatedTokenAddressSync(mint, new PublicKey(actor.wallet), false, program).toBase58();
  const recipientTokenAccount = getAssociatedTokenAddressSync(mint, new PublicKey(evidence.paymentRecipient), false, program).toBase58();
  const instructions = message.instructions;
  if (instructions.length !== 2) throw new Error("payment_instruction_count_invalid");
  const transfer = instructions.find(instruction => message.accountKeys[instruction.programIdIndex] === tokenProgram);
  const memo = instructions.find(instruction => message.accountKeys[instruction.programIdIndex] === MEMO_PROGRAM);
  if (!transfer || !memo || transfer.accountKeyIndexes.length !== 4 || memo.accountKeyIndexes.length !== 0
    || message.accountKeys[transfer.accountKeyIndexes[0] ?? -1] !== sourceTokenAccount
    || message.accountKeys[transfer.accountKeyIndexes[1] ?? -1] !== amount.asset.assetAddress
    || message.accountKeys[transfer.accountKeyIndexes[2] ?? -1] !== recipientTokenAccount
    || message.accountKeys[transfer.accountKeyIndexes[3] ?? -1] !== actor.wallet
    || new TextDecoder().decode(memo.data) !== evidence.paymentMemo) throw new Error("payment_instruction_binding_invalid");
  const data = transfer.data;
  if (data.length !== 10 || data[0] !== 12 || data[9] !== amount.asset.decimals
    || readU64(data.slice(1, 9)) !== BigInt(amount.rawAmount)) throw new Error("payment_amount_invalid");
}

function assertSignedPayment(unsigned: Uint8Array, signed: Uint8Array): string {
  const before = VersionedTransaction.deserialize(unsigned), after = VersionedTransaction.deserialize(signed);
  if (encode(before.message.serialize()) !== encode(after.message.serialize())
    || paymentMessage(before).format !== paymentMessage(after).format || after.signatures.length !== 1
    || !after.signatures[0]?.some(byte => byte !== 0)) throw new Error("signed_payment_changed");
  return base58(after.signatures[0]);
}

type PaymentMessage = Readonly<{
  format: "legacy" | 0;
  requiredSignatures: number;
  recentBlockhash: string;
  accountKeys: readonly string[];
  hasAddressLookups: boolean;
  instructions: readonly Readonly<{
    programIdIndex: number;
    accountKeyIndexes: readonly number[];
    data: Uint8Array;
  }>[];
}>;

function paymentMessage(transaction: VersionedTransaction): PaymentMessage {
  const message = transaction.message;
  return {
    format: message.version,
    requiredSignatures: message.header.numRequiredSignatures,
    recentBlockhash: message.recentBlockhash,
    accountKeys: message.staticAccountKeys.map(key => key.toBase58()),
    hasAddressLookups: message.addressTableLookups.length !== 0,
    instructions: message.compiledInstructions.map(instruction => ({
      programIdIndex: instruction.programIdIndex,
      accountKeyIndexes: [...instruction.accountKeyIndexes],
      data: Uint8Array.from(instruction.data),
    })),
  };
}

function parsePrepared(value: unknown, actor: StockPackActorV1): StockPackSalePreparedView {
  const root = requiredObject(value, "sale_prepared_invalid"), review = requiredObject(root.review, "sale_review_invalid");
  const sale = parseStockPackSaleV1(root.sale), quote = StockPackSaleQuoteV1Schema.parse(review.quote);
  const { platformFee } = stockPackSaleQuoteProceeds(quote);
  const accountSetup = Object.hasOwn(review, "accountSetup")
    ? requiredArray(review.accountSetup).map((value) => {
      const setup = requiredObject(value, "sale_account_setup_invalid");
      if (!exactKeys(setup, ["address", "mint", "rentLamports"])) throw new Error("sale_account_setup_shape_invalid");
      const address = canonicalPublicKey(setup.address), mint = canonicalPublicKey(setup.mint);
      const rentLamports = requiredString(setup.rentLamports);
      if (!/^[1-9][0-9]{0,15}$/u.test(rentLamports) || !Number.isSafeInteger(Number(rentLamports))) {
        throw new Error("sale_account_setup_rent_invalid");
      }
      return { address, mint, rentLamports };
    })
    : undefined;
  // Legacy reviews omit the fee key from their digest; a quoted fee can never use that shape.
  const hasRouteFee = Object.hasOwn(review, "routeFee");
  if (!hasRouteFee && platformFee.rawAmount !== "0") throw new Error("sale_route_fee_missing");
  const routeFee = !hasRouteFee ? undefined : review.routeFee === null ? null : (() => {
    const fee = requiredObject(review.routeFee, "sale_route_fee_invalid");
    if (!exactKeys(fee, ["amount", "destination"])) throw new Error("sale_route_fee_shape_invalid");
    const amount = parseAmount(fee.amount), destination = canonicalPublicKey(fee.destination);
    if (amount.rawAmount === "0" || amount.asset.identityDigest !== quote.minimumOutput.asset.identityDigest
      || BigInt(amount.rawAmount) > BigInt(stockPackSaleRouteFeeRaw(quote.minimumOutput.rawAmount, STOCK_PACK_SALE_ROUTE_FEE_MAX_BPS))
      || BigInt(amount.rawAmount) >= BigInt(quote.minimumOutput.rawAmount) || destination === quote.wallet) throw new Error("sale_route_fee_invalid");
    return { amount, destination };
  })();
  const prepared: StockPackSalePreparedView = { sale, review: { quote,
    legIds: requiredArray(review.legIds).map(requiredString), unsignedTransaction: requiredString(review.unsignedTransaction),
    messageDigest: requiredDigest(review.messageDigest), reviewDigest: requiredDigest(review.reviewDigest),
    blockhash: requiredString(review.blockhash), lastValidBlockHeight: requiredNumber(review.lastValidBlockHeight),
    ...(accountSetup === undefined ? {} : { accountSetup }), ...(routeFee === undefined ? {} : { routeFee }) },
    authorizationRecorded: requiredBoolean(root.authorizationRecorded) };
  if (sale.identity.actorAccountId !== actor.actorAccountId || sale.wallet !== actor.wallet) throw new Error("sale_actor_mismatch");
  const { reviewDigest, ...material } = prepared.review;
  if (canonicalAuthorizationDigest(material) !== reviewDigest) throw new Error("sale_review_digest_mismatch");
  decode(prepared.review.unsignedTransaction);
  return prepared;
}

function unwrapPrepared(result: StockPackResult<unknown>, actor: StockPackActorV1) { return parsePrepared(unwrap(result), actor); }
function unwrap(result: StockPackResult<unknown>) { if (!result.ok) throw new Error(result.error.message); return result.value; }
function parseCanonicalResult<T>(result: StockPackResult<unknown>, parse: (value: unknown) => T): StockPackResult<T> {
  if (!result.ok) return result;
  try { return { ok: true, value: parse(result.value) }; }
  catch { return failure("invalid_contract", "The Stock Packs response could not be verified."); }
}
function parseResult(value: unknown): StockPackResult<unknown> {
  const root = object(value);
  if (!root || typeof root.ok !== "boolean") return failure("invalid_contract", "Invalid Stock Packs response.");
  if (root.ok) return Object.hasOwn(root, "value") ? { ok: true, value: root.value } : failure("invalid_contract", "Invalid Stock Packs response.");
  const error = object(root.error), code = StockPackErrorCodeSchema.safeParse(error?.code);
  if (!error || !code.success || typeof error.message !== "string"
    || (error.operationId !== null && typeof error.operationId !== "string")) return failure("invalid_contract", "Invalid Stock Packs error.");
  return { ok: false, error: { code: code.data, message: error.message, operationId: error.operationId as string | null } };
}
function failure(code: StockPackErrorCode, message: string, operationId: string | null = null): StockPackResult<never> {
  return { ok: false, error: { code, message, operationId } };
}
function assertOpen(open: StockPackOpenV1, actor: StockPackActorV1, operationId: string, requestDigest: string) {
  if (open.identity.operationId !== operationId || open.identity.requestDigest !== requestDigest
    || open.identity.actorAccountId !== actor.actorAccountId || open.request.payerWallet !== actor.wallet) throw new Error("order_identity_changed");
}
function parseActor(value: unknown): StockPackActorV1 {
  const root = requiredObject(value, "actor_invalid");
  return { actorAccountId: requiredString(root.actorAccountId), wallet: new PublicKey(requiredString(root.wallet)).toBase58() };
}
function canonicalPublicKey(value: unknown): string {
  const text = requiredString(value);
  if (new PublicKey(text).toBase58() !== text) throw new Error("public_key_noncanonical");
  return text;
}
function parseAmount(value: unknown): StockPackAmountV1 {
  const root = requiredObject(value, "amount_invalid"), asset = parseCanonicalChainAssetV1(root.asset);
  const rawAmount = requiredString(root.rawAmount);
  if (!/^(?:0|[1-9][0-9]*)$/u.test(rawAmount)) throw new Error("amount_invalid");
  return { asset, rawAmount };
}
function actorDigest(actor: StockPackActorV1) { return canonicalAuthorizationDigest(actor); }
function journalKey(actor: StockPackActorV1) { return `attn.stock-pack.purchase.v1:${actorDigest(actor)}`; }
function rewardJournalKey(actor: StockPackActorV1) { return `attn.stock-pack.reward-claim.v1:${actorDigest(actor)}`; }
function requiredActor(actor: StockPackActorV1 | null) { if (!actor) throw new Error("stock_pack_actor_missing"); return actor; }
function required<T>(value: T | null): T { if (value === null) throw new Error("required_value_missing"); return value; }
function requiredNumber(value: unknown): number { if (typeof value !== "number" || !Number.isSafeInteger(value)) throw new Error("number_invalid"); return value; }
function requiredBoolean(value: unknown): boolean { if (typeof value !== "boolean") throw new Error("boolean_invalid"); return value; }
function requiredString(value: unknown): string { if (typeof value !== "string" || value.length === 0) throw new Error("string_invalid"); return value; }
function requiredDigest(value: unknown): string { const text = requiredString(value); if (!digest(text)) throw new Error("digest_invalid"); return text; }
function nullableString(value: unknown): string | null { if (value === null) return null; return requiredString(value); }
function requiredObject(value: unknown, error: string) { const result = object(value); if (!result) throw new Error(error); return result; }
function requiredArray(value: unknown): unknown[] { if (!Array.isArray(value)) throw new Error("array_invalid"); return value; }
function object(value: unknown): Record<string, unknown> | null { return value !== null && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : null; }
function exactKeys(value: Record<string, unknown>, keys: readonly string[]) { return Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key)); }
function digest(value: string): boolean { return /^[a-f0-9]{64}$/u.test(value); }
function encode(value: Uint8Array): string { return btoa(String.fromCharCode(...value)); }
function decode(value: string | null): Uint8Array {
  if (!value) throw new Error("transaction_missing");
  const bytes = Uint8Array.from(atob(value), character => character.charCodeAt(0));
  if (encode(bytes) !== value || bytes.length > 1232) throw new Error("transaction_encoding_invalid");
  return bytes;
}
function readU64(bytes: Uint8Array): bigint { return bytes.reduceRight((value, byte) => (value << 8n) + BigInt(byte), 0n); }
function base58(bytes: Uint8Array): string {
  const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let value = bytes.reduce((total, byte) => (total << 8n) + BigInt(byte), 0n), encoded = "";
  while (value > 0n) { encoded = alphabet[Number(value % 58n)] + encoded; value /= 58n; }
  for (const byte of bytes) { if (byte !== 0) break; encoded = `1${encoded}`; }
  return encoded;
}
