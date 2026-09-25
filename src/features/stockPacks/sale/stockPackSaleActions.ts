import { VersionedTransaction } from "@solana/web3.js";
import {
  assertStockPackExecutableQuote, canonicalAuthorizationDigest, stockPackRemainingSaleLeg,
  type StockPackSaleDeliveryReceiptV1, type StockPackActorV1, type StockPackAmountV1,
  type StockPackRecoverV1, type StockPackSalePortV1, type StockPackSaleQuoteV1, type StockPackSaleV1,
} from "@attn-packs/pack-network";

export type StockPackSaleReviewView = Readonly<{
  quote: StockPackSaleQuoteV1; legIds: readonly string[]; unsignedTransaction: string;
  messageDigest: string; reviewDigest: string; blockhash: string; lastValidBlockHeight: number;
  accountSetup?: readonly Readonly<{ address: string; mint: string; rentLamports: string }>[];
  /** Platform route fee bound into this execution; absent only in legacy review digest material. */
  routeFee?: Readonly<{ amount: StockPackAmountV1; destination: string }> | null;
}>;
export type StockPackSalePreparedView = Readonly<{ sale: StockPackSaleV1; review: StockPackSaleReviewView; authorizationRecorded: boolean }>;
export interface StockPackSaleClient extends StockPackSalePortV1 {
  prepare(input: { nonce: string; amount: StockPackAmountV1; deliveryReceipt: StockPackSaleDeliveryReceiptV1 | null }): Promise<StockPackSalePreparedView>;
  review(query: StockPackRecoverV1): Promise<StockPackSalePreparedView>;
  refresh(query: StockPackRecoverV1): Promise<StockPackSalePreparedView>;
  authorize(query: StockPackRecoverV1 & { reviewDigest: string; signedTransaction: string }): Promise<string>;
  reject(query: StockPackRecoverV1 & { reviewDigest: string }): Promise<StockPackSaleV1>;
}
export type StockPackSaleViewState = Readonly<{
  phase: "idle" | "quoting" | "review" | "signing" | "submitting" | "reconciling" | "intermediate_held" | "completed" | "rejected" | "unavailable";
  prepared: StockPackSalePreparedView | null; message: string | null;
}>;
type Journal = { nonce: string; operationId: string | null; requestDigest: string | null; intentDigest: string };

/** Pure actions: the existing Privy host injects sign-only, authenticated client and account identity. */
export function createStockPackSaleActions(deps: {
  stockCopy?: boolean;
  actor: () => StockPackActorV1 | null; client: StockPackSaleClient;
  amount: StockPackAmountV1; deliveryReceipt: StockPackSaleDeliveryReceiptV1 | null; usdcDigest: string;
  signOnly: (bytes: Uint8Array) => Promise<{ signedTransaction: Uint8Array }>;
  storage: Pick<Storage, "getItem" | "setItem">;
  withLock: <T>(name: string, work: () => Promise<T>) => Promise<T>;
  onChange: (state: StockPackSaleViewState) => void;
  now?: () => string; nonce?: () => string;
}) {
  let state: StockPackSaleViewState = { phase: "idle", prepared: null, message: null }, busy = false;
  const now = deps.now ?? (() => new Date().toISOString());
  const copy = (stock: string, royale: string) => deps.stockCopy ? stock : royale;
  const actor = deps.actor();
  const sameActor = () => actor !== null && canonicalAuthorizationDigest(actor) === canonicalAuthorizationDigest(deps.actor());
  const intentDigest = canonicalAuthorizationDigest({ actor, amount: deps.amount, receipt: deps.deliveryReceipt?.terminalDigest ?? null });
  const key = `attn.stock-pack.sale.v1:${intentDigest}`;
  const ensureActor = () => { if (!sameActor()) throw new Error(copy(
    "Wallet changed. Return to the original wallet to recover this swap.",
    "Wallet changed. Return to the original wallet to recover this sale.",
  )); };
  const emit = (patch: Partial<StockPackSaleViewState>) => { ensureActor(); state = { ...state, ...patch }; deps.onChange(state); };
  const journal = (): Journal | null => {
    const saved = deps.storage.getItem(key); if (!saved) return null;
    const value = JSON.parse(saved) as Journal;
    if (value.intentDigest !== intentDigest || typeof value.nonce !== "string"
      || (value.operationId !== null && typeof value.operationId !== "string")
      || (value.requestDigest !== null && typeof value.requestDigest !== "string")) throw new Error(copy(
        "Saved swap cannot be verified.", "Saved sale cannot be verified.",
      ));
    return value;
  };
  const save = (value: Journal) => {
    deps.storage.setItem(key, JSON.stringify(value));
    if (deps.storage.getItem(key) !== JSON.stringify(value)) throw new Error(copy(
      "Swap status could not be saved.", "Sale recovery could not be saved.",
    ));
  };
  const query = (): StockPackRecoverV1 => {
    const saved = journal(); if (!actor || !saved?.operationId || !saved.requestDigest) throw new Error(copy(
      "No saved swap to check.", "No saved sale to recover.",
    ));
    return { actorAccountId: actor.actorAccountId, operationId: saved.operationId, requestDigest: saved.requestDigest };
  };
  const adopt = (prepared: StockPackSalePreparedView) => {
    ensureActor();
    const saved = journal(), sale = prepared.sale;
    if (!actor || !saved || sale.identity.kind !== "sale" || sale.wallet !== actor.wallet || sale.identity.actorAccountId !== actor.actorAccountId
      || sale.identity.nonce !== saved.nonce || (saved.operationId && sale.identity.operationId !== saved.operationId)
      || (saved.requestDigest && sale.identity.requestDigest !== saved.requestDigest)) throw new Error(copy(
        "Swap details changed.", "Sale identity changed.",
      ));
    const { reviewDigest, ...material } = prepared.review;
    if (canonicalAuthorizationDigest(material) !== reviewDigest) throw new Error(copy(
      "Swap review changed.", "Sale review changed.",
    ));
    save({ ...saved, operationId: sale.identity.operationId, requestDigest: sale.identity.requestDigest });
    const phase = prepared.authorizationRecorded ? "reconciling" : sale.state === "prepared" ? "review" : sale.state === "pending" ? "reconciling" : sale.state;
    emit({ prepared, phase, message: null });
  };
  const run = async (work: () => Promise<void>) => {
    if (busy) return; busy = true;
    try { ensureActor(); await deps.withLock(key, async () => { ensureActor(); await work(); }); }
    catch (error) {
      if (sameActor()) emit({ phase: state.prepared?.sale.state === "completed" ? "completed"
        : state.phase === "submitting" || state.phase === "reconciling" ? "reconciling"
          : state.prepared?.sale.state === "intermediate_held" ? "intermediate_held" : "unavailable",
      message: error instanceof Error ? error.message : copy(
        "Swap unavailable. Check its saved status before retrying.",
        "Sale unavailable. Your saved operation can be recovered.",
      ) });
    } finally { busy = false; }
  };
  const prepare = () => run(async () => {
    emit({ phase: "quoting", message: null });
    let saved = journal();
    if (!saved) { saved = { nonce: deps.nonce?.() ?? crypto.randomUUID(), operationId: null, requestDigest: null, intentDigest }; save(saved); }
    if (saved.operationId) { adopt(await deps.client.review(query())); return; }
    adopt(await deps.client.prepare({ nonce: saved.nonce, amount: deps.amount, deliveryReceipt: deps.deliveryReceipt }));
  });
  const refresh = () => run(async () => { emit({ phase: "quoting", message: null }); adopt(await deps.client.refresh(query())); });
  const recover = () => run(async () => {
    emit({ phase: "reconciling", message: null });
    const result = await deps.client.recover(query()); if (!result.ok) throw new Error(result.error.message);
    adopt(await deps.client.review(query()));
  });
  const confirm = () => run(async () => {
    const accepted = state.prepared; if (!accepted || !actor) throw new Error(copy(
      "Get a fresh quote before swapping.", "Get a fresh quote before selling.",
    ));
    const latest = await deps.client.review(query()); ensureActor();
    if (latest.review.reviewDigest !== accepted.review.reviewDigest) throw new Error("Quote changed. Review the fresh quote before signing.");
    if (latest.authorizationRecorded || !["prepared", "intermediate_held"].includes(latest.sale.state)) { adopt(latest); return; }
    const remaining = stockPackRemainingSaleLeg(latest.sale);
    const amount = remaining ? latest.sale.actualHolding : deps.amount;
    if (!amount || (remaining && (latest.review.legIds.length !== 1 || latest.review.legIds[0] !== remaining))) throw new Error(copy(
      "Get a fresh quote for the next swap.", "Get a fresh quote for the remaining conversion.",
    ));
    assertStockPackExecutableQuote(latest.review.quote, { ...actor, amount, outputAssetDigest: deps.usdcDigest, now: now() });
    const unsigned = decode(latest.review.unsignedTransaction), transaction = VersionedTransaction.deserialize(unsigned);
    if (transaction.message.staticAccountKeys[0]?.toBase58() !== actor.wallet || transaction.message.header.numRequiredSignatures !== 1
      || await sha256(transaction.message.serialize()) !== latest.review.messageDigest) throw new Error("Transaction review cannot be verified.");
    emit({ phase: "signing", message: null });
    let signed: Uint8Array;
    try { signed = (await deps.signOnly(unsigned.slice())).signedTransaction; }
    catch {
      ensureActor(); await deps.client.reject({ ...query(), reviewDigest: latest.review.reviewDigest });
      adopt(await deps.client.review(query())); emit({ message: "Signature declined. Your wallet assets are unchanged." }); return;
    }
    ensureActor();
    const signedTx = VersionedTransaction.deserialize(signed);
    if (await sha256(signedTx.message.serialize()) !== latest.review.messageDigest) throw new Error("Signed transaction changed. Nothing submitted.");
    assertStockPackExecutableQuote(latest.review.quote, { ...actor, amount, outputAssetDigest: deps.usdcDigest, now: now() });
    emit({ phase: "submitting" });
    const receipt = await deps.client.authorize({ ...query(), reviewDigest: latest.review.reviewDigest, signedTransaction: encode(signed) });
    ensureActor();
    const result = remaining ? await deps.client.resumeRemaining({ ...query(), remainingLegId: remaining,
      quote: latest.review.quote, authorizationReceiptDigest: receipt })
      : await deps.client.sell({ identity: { ...latest.sale.identity, kind: "sale" }, intent: {
        quote: latest.review.quote, authorizationReceiptDigest: receipt, deliveryReceipt: deps.deliveryReceipt } });
    if (!result.ok) throw new Error(result.error.message);
    adopt(await deps.client.review(query()));
  });
  return { prepare, refresh, recover, confirm, getState: () => state };
}

function decode(value: string): Uint8Array {
  const binary = atob(value); const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
  if (encode(bytes) !== value || bytes.length > 1232) throw new Error("Invalid transaction encoding."); return bytes;
}
function encode(value: Uint8Array): string { return btoa(String.fromCharCode(...value)); }
async function sha256(value: Uint8Array): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new Uint8Array(value).buffer);
  return Array.from(new Uint8Array(digest), v => v.toString(16).padStart(2, "0")).join("");
}

export function formatStockPackSaleAmount(amount: StockPackAmountV1): string {
  const decimals = amount.asset.decimals, raw = amount.rawAmount;
  if (!/^(0|[1-9][0-9]*)$/.test(raw)) throw new Error("Invalid amount");
  if (!decimals) return raw;
  const padded = raw.padStart(decimals + 1, "0");
  return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
}
