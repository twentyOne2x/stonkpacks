import { STOCK_PACKS_DEFAULT_PRICE_LABEL } from "./stockPacksCopy";
import type { RoyaleDocsEntry, RoyaleDocsSection } from "../../../routes/royale/pages/royaleDocsContent";

export function buildStockPacksDocsEntries(): RoyaleDocsEntry[] {
  return [
    {
      id: "how.whatIsStonkpacks",
      tab: "how",
      title: "What is STONKPACKS?",
      body:
        "LPs add tokens to pools. Creators fund paid packs with verified tokens. After payment, your stock token or community token is sent to your Privy wallet.",
    },
    {
      id: "how.paidPack",
      tab: "how",
      title: "What does a paid Stock Pack cost?",
      body:
        `A paid pack costs ${STOCK_PACKS_DEFAULT_PRICE_LABEL}. That is the pack price. Token price estimates and swap quotes are separate.`,
    },
    {
      id: "how.assets",
      tab: "how",
      title: "What can a pack deliver?",
      body:
        "A pack can send a verified stock token such as xStock, or a community token paired with a stock-token quote. The quote only shows a price. Community tokens are not company stock. Verified tokens back paid packs.",
    },
    {
      id: "how.packRewards",
      tab: "how",
      title: "Launcher pack rewards",
      body:
        "Eligible StonkFun launches can add a verified token to a managed pool for sponsored pack rewards. Pool policy caps this at 200 bps of pool liquidity. The deposit earns no LP fees. The token joins paid pack odds only after the server adds it to a live pack. It is not an attn Board reward or a free claim.",
    },
    {
      id: "how.keepOrSell",
      tab: "how",
      title: "Do I have to sell the token?",
      body:
        "No. Your token goes to your wallet. Swapping is optional. Each swap needs a fresh quote and your approval.",
    },
    {
      id: "tech.selection",
      tab: "tech",
      title: "How pulls are picked",
      body:
        "Paid packs use server commit/reveal. The saved input and rewards can be checked after payment. The server can withhold fulfillment. This is not external VRF. The server checks the token and amount before delivery.",
    },
    {
      id: "tech.amounts",
      tab: "tech",
      title: "xStock display amounts",
      body:
        "We show the server-verified xStock amount after its display multiplier. Receipt details keep exact raw transfer units. The display never rounds the transfer amount.",
    },
    {
      id: "tech.valuation",
      tab: "tech",
      title: "Token price estimates",
      body:
        `Every price estimate shows its source time and availability. It can become stale or disappear. It is not the ${STOCK_PACKS_DEFAULT_PRICE_LABEL} pack price, a guaranteed payout, or a promise about what a later sale pays.`,
    },
    {
      id: "tech.delivery",
      tab: "tech",
      title: "Wallet delivery",
      body:
        "Pulls and delivery use separate states. A pending pull stays pending until the server records a finalized transfer for the exact token and amount. Retrying a request cannot send it twice.",
    },
    {
      id: "tech.sale",
      tab: "tech",
      title: "Swaps need a fresh quote",
      body:
        "Each swap has its own quote ID, output amount, minimum and expiry. Expired quotes cannot use the pack price or token estimate. Approve each swap in your wallet.",
    },
    {
      id: "tech.identity",
      tab: "tech",
      title: "Privy wallet and retries",
      body:
        "Each action uses your Privy account and wallet. Refreshing resumes the same payment, delivery or swap without another transfer.",
    },
  ];
}

export const STOCK_PACKS_DOCS_SECTIONS: readonly RoyaleDocsSection[] = [
  {
    id: "introduction",
    label: "Introduction",
    labelKey: "docs.nav.section.introduction",
    pages: [
      { id: "what-is-stonkpacks", title: "What is STONKPACKS", titleKey: "docs.nav.page.whatIsRoyale", entryIds: ["how.whatIsStonkpacks"] },
      { id: "paid-packs", title: `${STOCK_PACKS_DEFAULT_PRICE_LABEL} paid packs`, titleKey: "docs.nav.page.packs", entryIds: ["how.paidPack"] },
      { id: "pack-rewards", title: "Pack rewards", titleKey: "docs.nav.page.startFree", entryIds: ["how.packRewards"] },
    ],
  },
  {
    id: "assets",
    label: "Tokens and quotes",
    labelKey: "docs.nav.section.cards",
    pages: [
      { id: "stock-tokens-and-coins", title: "Stock and community tokens", titleKey: "docs.nav.page.cardAllocation", entryIds: ["how.assets"] },
      { id: "display-amounts", title: "xStock display amounts", titleKey: "docs.nav.page.cardDelivery", entryIds: ["tech.amounts"] },
      { id: "reference-values", title: "Token prices", titleKey: "docs.nav.page.sellBack", entryIds: ["tech.valuation"] },
    ],
  },
  {
    id: "receipts",
    label: "Selection and delivery",
    labelKey: "docs.nav.section.fairness",
    pages: [
      { id: "selection", title: "How pulls work", titleKey: "docs.nav.page.vrf", entryIds: ["tech.selection"] },
      { id: "delivery", title: "Delivery receipts", titleKey: "docs.nav.page.voidRefund", entryIds: ["tech.delivery"] },
    ],
  },
  {
    id: "ownership",
    label: "Keep or sell",
    labelKey: "docs.nav.section.money",
    pages: [
      { id: "keep-or-sell", title: "Keep or sell", titleKey: "docs.nav.page.keepOrSell", entryIds: ["how.keepOrSell"] },
      { id: "sale-quotes", title: "Swap quotes", titleKey: "docs.nav.page.settlement", entryIds: ["tech.sale"] },
      { id: "privy-and-retries", title: "Privy and retry safety", titleKey: "docs.nav.page.identity", entryIds: ["tech.identity"] },
    ],
  },
];
