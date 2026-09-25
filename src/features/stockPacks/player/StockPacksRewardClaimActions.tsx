import type { StockPackRewardClaimV1 } from "@attn-packs/pack-network";

import type {
  StockPacksPlayerAction,
  StockPacksPlayerCampaign,
  StockPacksRewardPayout,
} from "./stockPacksPlayerTypes";

export function StockPacksRewardClaimActions({
  campaign,
  pendingClaim,
  pendingPayout,
  pendingAction,
  busy,
  onClaim,
  onRecover,
}: Readonly<{
  campaign: StockPacksPlayerCampaign;
  pendingClaim: StockPackRewardClaimV1 | null;
  pendingPayout: StockPacksRewardPayout | null;
  pendingAction: StockPacksPlayerAction | null;
  busy: boolean;
  onClaim: () => void | Promise<void>;
  onRecover: () => void | Promise<void>;
}>) {
  const acquisition = campaign.acquisition;
  if (acquisition.mode !== "sponsored_reward") return null;
  const savedClaimPending = pendingClaim !== null
    && pendingClaim.state !== "delivered"
    && pendingClaim.state !== "rejected";
  return (
    <>
      {savedClaimPending ? (
        <div className="stockPacksPlayer__savedOperation" role="status">
          <strong>Saved reward claim in progress{pendingPayout ? ` · Round ${pendingPayout.roundNumber}` : ""}</strong>
          <span>Refresh this sponsored claim without consuming the entitlement again.</span>
          <button type="button" disabled={busy} onClick={() => void onRecover()}>
            {pendingAction === "recover_reward" ? "Checking reward delivery…" : "Check reward delivery"}
          </button>
        </div>
      ) : null}
      {acquisition.state === "entitled" ? (
        <button type="button" className="stockPacksPlayer__primary" disabled={busy || !campaign.rewardCommand} onClick={() => void onClaim()}>
          {pendingAction === "claim_reward" ? "Claiming reward…" : "Claim reward pack"}
        </button>
      ) : savedClaimPending ? null : acquisition.state === "ineligible" ? (
        <button type="button" className="stockPacksPlayer__primary" disabled>Reward unavailable for this account</button>
      ) : acquisition.state !== "delivered" ? (
        <button type="button" className="stockPacksPlayer__primary" disabled>Reward claim recorded</button>
      ) : null}
    </>
  );
}
