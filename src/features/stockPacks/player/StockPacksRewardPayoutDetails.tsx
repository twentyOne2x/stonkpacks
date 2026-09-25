import type { StockPackAmountV1 } from "@attn-packs/pack-network";

import type { StockPacksPlayerCampaign } from "./stockPacksPlayerTypes";
import { stockPacksRewardPayoutAmountLabel } from "./stockPacksPlayerRouteModel";

export function stockPacksFormatAmount(amount: StockPackAmountV1): string {
  const raw = BigInt(amount.rawAmount);
  const decimals = amount.asset.decimals;
  const symbol = amount.asset.displayMetadata?.symbol ?? "units";
  if (decimals === 0) return `${raw.toString()} ${symbol}`;
  const scale = 10n ** BigInt(decimals);
  const whole = raw / scale;
  const fraction = (raw % scale).toString().padStart(decimals, "0").replace(/0+$/u, "");
  return `${whole.toString()}${fraction ? `.${fraction}` : ""} ${symbol}`;
}

export function StockPacksRewardPayoutDetails({ campaign }: Readonly<{
  campaign: StockPacksPlayerCampaign;
}>) {
  const payout = campaign.rewardPayout;
  const acquisition = campaign.acquisition;
  if (!payout || acquisition.mode !== "sponsored_reward") return null;
  return (
    <>
      <div><dt>Earned round</dt><dd>{payout.roundNumber}</dd></div>
      <div><dt>{stockPacksRewardPayoutAmountLabel(acquisition.state)}</dt><dd>{stockPacksFormatAmount({
        asset: payout.asset,
        rawAmount: payout.exactAmount,
      })}</dd></div>
      <div><dt>Payout mint</dt><dd>{payout.asset.assetAddress}</dd></div>
    </>
  );
}
