import type { StockPayoffAcquisitionContext } from "../payoffs";
import type {
  StockPackActorV1,
  StockPackAmountV1,
  StockPackCampaignAccessV1,
  StockPackCampaignV1,
  StockPackOpenV1,
  StockPackOrderPortV1,
  StockPackPayoffCardV1,
  StockPackPreviewV1,
  StockPackResult,
  StockPackRewardClaimCommandV1,
  StockPackRewardClaimV1,
  StockPackSaleQuoteV1,
  StockPackSaleV1,
  PackInventoryLotV1,
} from "@attn-packs/pack-network";

export type StockPacksPlayerCampaign = Readonly<{
  campaign: StockPackCampaignV1;
  title: string;
  description: string;
  access: StockPackCampaignAccessV1;
  /** Server-derived access and lifecycle state; the browser never infers reward eligibility. */
  acquisition: StockPayoffAcquisitionContext;
  /** Original approved preview for an earned reward; never replaces the currently published campaign preview. */
  rewardPreview?: StockPackPreviewV1 | null;
  /** Server-projected earning round and exact payout; absent when no Board entitlement exists. */
  rewardPayout?: StockPacksRewardPayout | null;
  rewardCommand: StockPackRewardClaimCommandV1 | null;
}>;

export type StockPacksRewardPayout = Readonly<{
  roundId: string;
  roundNumber: string;
  epochId: string;
  epochSequence: string;
  exactAmount: string;
  asset: StockPackAmountV1["asset"];
}>;

type StockPacksPlayerHistoryCommon = Readonly<{
  operationId: string;
  preview: StockPackPreviewV1;
  card: StockPackPayoffCardV1 | null;
  sale: StockPackSaleV1 | null;
  updatedAt: string;
}>;
export type StockPacksPlayerHistoryEntry =
  | (StockPacksPlayerHistoryCommon & Readonly<{
      mode: "paid"; open: StockPackOpenV1; rewardClaim: null; rewardPayout: null; deliveryLot: null;
    }>)
  | (StockPacksPlayerHistoryCommon & Readonly<{
      mode: "sponsored_reward"; open: null; rewardClaim: StockPackRewardClaimV1;
      rewardPayout: StockPacksRewardPayout;
      /** Canonical actual Board-earned lot; card is only its presentation projection. */
      deliveryLot: PackInventoryLotV1;
    }>);

/**
 * Player projection assembled by the authoritative API. It is presentation
 * state over canonical Pack Network records, never a second economic ledger.
 */
export type StockPacksPlayerSnapshot = Readonly<{
  actor: StockPackActorV1;
  campaigns: readonly StockPacksPlayerCampaign[];
  selectedCampaignId: string | null;
  walletBalance: StockPackAmountV1 | null;
  activeOpen: StockPackOpenV1 | null;
  activeRewardClaim: StockPackRewardClaimV1 | null;
  activePreview: StockPackPreviewV1 | null;
  selectedCard: StockPackPayoffCardV1 | null;
  sale: StockPackSaleV1 | null;
  history: readonly StockPacksPlayerHistoryEntry[];
  observedAt: string;
}>;

export type StockPacksPurchaseReview = Readonly<{
  bonusChanceBps?: number;
  reviewId: string;
  campaignId: string;
  previewId: string;
  previewDigest: string;
  actor: StockPackActorV1;
  principal: StockPackAmountV1;
  fees: readonly StockPackAmountV1[];
  total: StockPackAmountV1;
  availableBalance: StockPackAmountV1;
  expiresAt: string;
  command: Parameters<StockPackOrderPortV1["open"]>[0];
}>;

export type StockPacksSaleReview = Readonly<{
  cardId: string;
  quote: StockPackSaleQuoteV1;
}>;

/**
 * Injected UI client. SP-10 owns HTTP paths and envelope parsing. Each method
 * represents a typed reviewed action; it is not a generic signing endpoint.
 */
export interface StockPacksPlayerClient {
  load(input: Readonly<{
    actor: StockPackActorV1;
    campaignId?: string;
    operationId?: string;
  }>): Promise<StockPackResult<StockPacksPlayerSnapshot>>;
  reviewPurchase(input: Readonly<{
    actor: StockPackActorV1;
    campaignId: string;
  }>): Promise<StockPackResult<StockPacksPurchaseReview>>;
  purchase(input: Readonly<{
    actor: StockPackActorV1;
    review: StockPacksPurchaseReview;
  }>): Promise<StockPackResult<StockPacksPlayerSnapshot>>;
  claimReward(input: Readonly<{
    actor: StockPackActorV1;
    campaign: StockPacksPlayerCampaign;
  }>): Promise<StockPackResult<StockPacksPlayerSnapshot>>;
  recoverReward(input: Readonly<{
    actor: StockPackActorV1;
    claim: StockPackRewardClaimV1;
  }>): Promise<StockPackResult<StockPacksPlayerSnapshot>>;
  recover(input: Readonly<{
    actor: StockPackActorV1;
    operationId: string;
    requestDigest: string;
  }>): Promise<StockPackResult<StockPacksPlayerSnapshot>>;
  reviewSale(input: Readonly<{
    actor: StockPackActorV1;
    card: StockPackPayoffCardV1;
  }>): Promise<StockPackResult<StockPacksSaleReview>>;
  sell(input: Readonly<{
    actor: StockPackActorV1;
    review: StockPacksSaleReview;
  }>): Promise<StockPackResult<StockPacksPlayerSnapshot>>;
  resumeSale(input: Readonly<{
    actor: StockPackActorV1;
    sale: StockPackSaleV1;
  }>): Promise<StockPackResult<StockPacksPlayerSnapshot>>;
}

export type StockPacksPlayerAction =
  | "load"
  | "review_purchase"
  | "purchase"
  | "claim_reward"
  | "recover_reward"
  | "recover"
  | "review_sale"
  | "sell"
  | "resume_sale";

export type StockPacksPlayerError = Readonly<{
  code: string;
  message: string;
  operationId: string | null;
}>;
