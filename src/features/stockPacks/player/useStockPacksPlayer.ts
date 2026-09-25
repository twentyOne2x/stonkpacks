import { useCallback, useEffect, useRef, useState } from "react";
import type {
  StockPackActorV1,
  StockPackResult,
} from "@attn-packs/pack-network";

import {
  assertStockPacksPurchaseReview,
  assertStockPacksSaleReview,
  reconcileStockPacksPlayerSnapshot,
  stockPacksActorKey,
} from "./stockPacksPlayerModel";
import type {
  StockPacksPlayerAction,
  StockPacksPlayerClient,
  StockPacksPlayerError,
  StockPacksPlayerSnapshot,
  StockPacksPurchaseReview,
  StockPacksSaleReview,
} from "./stockPacksPlayerTypes";

type JourneyState = Readonly<{
  snapshot: StockPacksPlayerSnapshot | null;
  purchaseReview: StockPacksPurchaseReview | null;
  saleReview: StockPacksSaleReview | null;
  pendingAction: StockPacksPlayerAction | null;
  error: StockPacksPlayerError | null;
  replayNonce: number;
}>;

type RequestContext = Readonly<{
  generation: number;
  actorKey: string;
}>;

const EMPTY_STATE: JourneyState = {
  snapshot: null,
  purchaseReview: null,
  saleReview: null,
  pendingAction: null,
  error: null,
  replayNonce: 0,
};

function resultError<T>(result: StockPackResult<T>): StockPacksPlayerError | null {
  return result.ok ? null : result.error;
}

export function useStockPacksPlayer(input: Readonly<{
  actor: StockPackActorV1 | null;
  stockCopy?: boolean;
  campaignId?: string;
  operationId?: string;
  client: StockPacksPlayerClient;
  now?: () => string;
}>) {
  const [state, setState] = useState<JourneyState>(EMPTY_STATE);
  // Bumped by reload() to re-run the read-only load after a failed load.
  const [loadAttempt, setLoadAttempt] = useState(0);
  const generationRef = useRef(0);
  const pendingRef = useRef<StockPacksPlayerAction | null>(null);
  const actorKey = input.actor ? stockPacksActorKey(input.actor) : null;
  const now = input.now ?? (() => new Date().toISOString());

  const isCurrent = useCallback((generation: number, expectedActorKey: string) =>
    generationRef.current === generation
      && actorKey === expectedActorKey,
  [actorKey]);

  const requestContext = useCallback((actor: StockPackActorV1): RequestContext => ({
    generation: generationRef.current,
    actorKey: stockPacksActorKey(actor),
  }), []);

  const clearPending = useCallback((action: StockPacksPlayerAction) => {
    if (pendingRef.current === action) pendingRef.current = null;
    setState((current) => current.pendingAction === action
      ? { ...current, pendingAction: null }
      : current);
  }, []);

  const begin = useCallback((action: StockPacksPlayerAction): boolean => {
    if (pendingRef.current !== null) return false;
    pendingRef.current = action;
    setState((current) => ({ ...current, pendingAction: action, error: null }));
    return true;
  }, []);

  useEffect(() => {
    void loadAttempt; // reload() re-runs this read-only load
    generationRef.current += 1;
    const generation = generationRef.current;
    pendingRef.current = null;
    setState(EMPTY_STATE);
    const actor = input.actor;
    if (!actor) return undefined;
    const expectedActorKey = stockPacksActorKey(actor);
    pendingRef.current = "load";
    setState((current) => ({ ...current, pendingAction: "load" }));
    let cancelled = false;
    void input.client.load({
      actor,
      ...(input.campaignId ? { campaignId: input.campaignId } : {}),
      ...(input.operationId ? { operationId: input.operationId } : {}),
    }).then((result) => {
      if (cancelled || !isCurrent(generation, expectedActorKey)) return;
      pendingRef.current = null;
      if (!result.ok) {
        setState((current) => ({ ...current, pendingAction: null, error: result.error }));
        return;
      }
      const snapshot = reconcileStockPacksPlayerSnapshot(null, result.value, actor);
      setState((current) => ({ ...current, snapshot, pendingAction: null, error: null }));
    }).catch(() => {
      if (cancelled || !isCurrent(generation, expectedActorKey)) return;
      pendingRef.current = null;
      setState((current) => ({
        ...current,
        pendingAction: null,
        error: { code: "transport_unavailable", message: "Stock Packs are temporarily unavailable.", operationId: null },
      }));
    });
    return () => { cancelled = true; };
  }, [input.actor, input.campaignId, input.operationId, input.client, isCurrent, loadAttempt]);

  /** Re-run the read-only load; ignored while any action is pending. */
  const reload = useCallback(() => {
    if (pendingRef.current !== null) return;
    setLoadAttempt((attempt) => attempt + 1);
  }, []);

  const commitSnapshot = useCallback((
    result: StockPackResult<StockPacksPlayerSnapshot>,
    action: StockPacksPlayerAction,
    actor: StockPackActorV1,
    context: RequestContext,
  ) => {
    if (!isCurrent(context.generation, context.actorKey)) return;
    const error = resultError(result);
    if (error) {
      setState((current) => ({ ...current, pendingAction: null, error }));
      clearPending(action);
      return;
    }
    if (!result.ok) return;
    setState((current) => ({
      ...current,
      snapshot: reconcileStockPacksPlayerSnapshot(current.snapshot, result.value, actor),
      purchaseReview: action === "purchase" ? null : current.purchaseReview,
      saleReview: action === "sell" || action === "resume_sale" ? null : current.saleReview,
      pendingAction: null,
      error: null,
    }));
    clearPending(action);
  }, [clearPending, isCurrent]);

  const reviewPurchase = useCallback(async (campaignId: string) => {
    const actor = input.actor;
    const snapshot = state.snapshot;
    if (!actor || !snapshot || !begin("review_purchase")) return;
    const context = requestContext(actor);
    try {
      const result = await input.client.reviewPurchase({ actor, campaignId });
      if (!isCurrent(context.generation, context.actorKey)) return;
      if (!result.ok) {
        setState((current) => ({ ...current, error: result.error }));
        return;
      }
      assertStockPacksPurchaseReview(result.value, snapshot, now());
      setState((current) => ({ ...current, purchaseReview: result.value, error: null }));
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, error: {
        code: "purchase_review_invalid",
        message: input.stockCopy ? "Pack payment details changed. Refresh before continuing."
          : "The purchase review changed. Refresh it before continuing.",
        operationId: null,
      } }));
    } finally {
      if (isCurrent(context.generation, context.actorKey)) clearPending("review_purchase");
    }
  }, [begin, clearPending, input.actor, input.client, input.stockCopy, isCurrent, now, requestContext, state.snapshot]);

  const purchase = useCallback(async () => {
    const actor = input.actor;
    const review = state.purchaseReview;
    const snapshot = state.snapshot;
    if (!actor || !review || !snapshot || !begin("purchase")) return;
    const context = requestContext(actor);
    try {
      assertStockPacksPurchaseReview(review, snapshot, now());
      commitSnapshot(await input.client.purchase({ actor, review }), "purchase", actor, context);
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, error: {
        code: "purchase_rejected",
        message: input.stockCopy ? "Payment did not start. Review the pack and try again."
          : "The purchase was not started. Review the current pack and try again.",
        operationId: null,
      } }));
      clearPending("purchase");
    }
  }, [begin, clearPending, commitSnapshot, input.actor, input.client, input.stockCopy, isCurrent, now, requestContext, state.purchaseReview, state.snapshot]);

  const recover = useCallback(async () => {
    const actor = input.actor;
    const open = state.snapshot?.activeOpen;
    if (!actor || !open || !begin("recover")) return;
    const context = requestContext(actor);
    try {
      commitSnapshot(await input.client.recover({
        actor,
        operationId: open.identity.operationId,
        requestDigest: open.identity.requestDigest,
      }), "recover", actor, context);
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, error: {
        code: "recovery_unavailable",
        message: input.stockCopy ? "Saved payment status could not refresh yet."
          : "The saved operation could not be refreshed yet.",
        operationId: open.identity.operationId,
      } }));
      clearPending("recover");
    }
  }, [begin, clearPending, commitSnapshot, input.actor, input.client, input.stockCopy, isCurrent, requestContext, state.snapshot]);

  const claimReward = useCallback(async () => {
    const actor = input.actor;
    const snapshot = state.snapshot;
    const campaign = snapshot?.campaigns.find(candidate =>
      candidate.campaign.campaignId === snapshot.selectedCampaignId) ?? snapshot?.campaigns[0];
    if (!actor || !snapshot || !campaign || !begin("claim_reward")) return;
    const context = requestContext(actor);
    try {
      commitSnapshot(await input.client.claimReward({ actor, campaign }), "claim_reward", actor, context);
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, error: {
        code: "reward_claim_rejected",
        message: input.stockCopy ? "Reward claim did not start. Refresh eligibility and try again."
          : "The reward claim was not started. Refresh eligibility before trying again.",
        operationId: campaign.rewardCommand?.identity.operationId ?? null,
      } }));
      clearPending("claim_reward");
    }
  }, [begin, clearPending, commitSnapshot, input.actor, input.client, input.stockCopy, isCurrent, requestContext, state.snapshot]);

  const recoverReward = useCallback(async () => {
    const actor = input.actor;
    const claim = state.snapshot?.activeRewardClaim;
    if (!actor || !claim || !begin("recover_reward")) return;
    const context = requestContext(actor);
    try {
      commitSnapshot(await input.client.recoverReward({ actor, claim }), "recover_reward", actor, context);
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, error: {
        code: "reward_recovery_unavailable",
        message: input.stockCopy ? "Saved reward status could not refresh yet."
          : "The saved reward delivery could not be refreshed yet.",
        operationId: claim.identity.operationId,
      } }));
      clearPending("recover_reward");
    }
  }, [begin, clearPending, commitSnapshot, input.actor, input.client, input.stockCopy, isCurrent, requestContext, state.snapshot]);

  const reviewSale = useCallback(async () => {
    const actor = input.actor;
    const snapshot = state.snapshot;
    const card = snapshot?.selectedCard;
    if (!actor || !snapshot || !card || !begin("review_sale")) return;
    const context = requestContext(actor);
    try {
      const result = await input.client.reviewSale({ actor, card });
      if (!isCurrent(context.generation, context.actorKey)) return;
      if (!result.ok) {
        setState((current) => ({ ...current, saleReview: null, error: result.error }));
        return;
      }
      assertStockPacksSaleReview(result.value, snapshot, now());
      setState((current) => ({ ...current, saleReview: result.value, error: null }));
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, saleReview: null, error: {
        code: "sale_quote_invalid",
        message: input.stockCopy ? "A fresh swap quote is required."
          : "A fresh executable sale quote is required.",
        operationId: null,
      } }));
    } finally {
      if (isCurrent(context.generation, context.actorKey)) clearPending("review_sale");
    }
  }, [begin, clearPending, input.actor, input.client, input.stockCopy, isCurrent, now, requestContext, state.snapshot]);

  const sell = useCallback(async () => {
    const actor = input.actor;
    const snapshot = state.snapshot;
    const review = state.saleReview;
    if (!actor || !snapshot || !review || !begin("sell")) return;
    const context = requestContext(actor);
    try {
      assertStockPacksSaleReview(review, snapshot, now());
      commitSnapshot(await input.client.sell({ actor, review }), "sell", actor, context);
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, error: {
        code: "sale_rejected",
        message: input.stockCopy ? "Your token stays in your wallet. Get a fresh quote to retry."
          : "The token remains in your wallet. Request a fresh quote to try again.",
        operationId: snapshot.sale?.identity.operationId ?? null,
      } }));
      clearPending("sell");
    }
  }, [begin, clearPending, commitSnapshot, input.actor, input.client, input.stockCopy, isCurrent, now, requestContext, state.saleReview, state.snapshot]);

  const resumeSale = useCallback(async () => {
    const actor = input.actor;
    const sale = state.snapshot?.sale;
    if (!actor || sale?.state !== "intermediate_held" || !begin("resume_sale")) return;
    const context = requestContext(actor);
    try {
      commitSnapshot(await input.client.resumeSale({ actor, sale }), "resume_sale", actor, context);
    } catch {
      if (!isCurrent(context.generation, context.actorKey)) return;
      setState((current) => ({ ...current, error: {
        code: "sale_recovery_unavailable",
        message: input.stockCopy ? "Your token balance is unchanged. Try the next swap with a fresh quote."
          : "Your intermediate token holding is unchanged. Retry the remaining route when a fresh quote is available.",
        operationId: sale.identity.operationId,
      } }));
      clearPending("resume_sale");
    }
  }, [begin, clearPending, commitSnapshot, input.actor, input.client, input.stockCopy, isCurrent, requestContext, state.snapshot]);

  const replayReveal = useCallback(() => {
    setState((current) => ({ ...current, replayNonce: current.replayNonce + 1 }));
  }, []);

  const selectCampaign = useCallback((campaignId: string) => {
    setState((current) => {
      if (!current.snapshot?.campaigns.some(({ campaign }) => campaign.campaignId === campaignId)) return current;
      if (current.snapshot.activeOpen || current.snapshot.activeRewardClaim) return current;
      return {
        ...current,
        snapshot: { ...current.snapshot, selectedCampaignId: campaignId },
        purchaseReview: null,
        saleReview: null,
        error: null,
      };
    });
  }, []);

  const viewHistory = useCallback((operationId: string) => {
    setState((current) => {
      const entry = current.snapshot?.history.find((candidate) => candidate.operationId === operationId);
      if (!current.snapshot || !entry) return current;
      return {
        ...current,
        snapshot: {
          ...current.snapshot,
          selectedCampaignId: entry.preview.campaignId,
          activeOpen: entry.mode === "paid" ? entry.open : null,
          activeRewardClaim: entry.mode === "sponsored_reward" ? entry.rewardClaim : null,
          activePreview: entry.preview,
          selectedCard: entry.card,
          sale: entry.sale,
        },
        purchaseReview: null,
        saleReview: null,
        error: null,
      };
    });
  }, []);

  const openAnother = useCallback(() => {
    setState((current) => current.snapshot ? {
      ...current,
      snapshot: {
        ...current.snapshot,
        activeOpen: null,
        activeRewardClaim: null,
        activePreview: null,
        selectedCard: null,
        sale: null,
      },
      purchaseReview: null,
      saleReview: null,
      error: null,
    } : current);
  }, []);

  return {
    ...state,
    reload,
    reviewPurchase,
    purchase,
    recover,
    claimReward,
    recoverReward,
    reviewSale,
    sell,
    resumeSale,
    replayReveal,
    selectCampaign,
    viewHistory,
    openAnother,
  } as const;
}

export type StockPacksPlayerJourney = ReturnType<typeof useStockPacksPlayer>;
