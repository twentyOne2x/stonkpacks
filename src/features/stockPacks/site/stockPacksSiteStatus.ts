import type { RoyaleHostedAuth } from "../../../routes/royale/royaleAuth";

/**
 * STONKPACKS site status for the Stock host (stonkpacks.xyz). Presentation
 * only: nothing here authorizes a purchase, payment, delivery or sale. The
 * server stays the only authority and still refuses paused campaigns.
 */

/** Launch page on the Stock host (added by the launch lane as its own route). */
export const STOCK_PACKS_LAUNCH_HREF = "/stock-packs/launch";
export const STOCK_PACKS_TERMS_HREF = "/terms";

type SiteEnv = Readonly<{ VITE_STOCK_PACKS_PURCHASES_OPEN?: string | undefined }>;

function readViteEnv(): SiteEnv {
  try {
    return (import.meta as unknown as { env?: SiteEnv }).env ?? {};
  } catch {
    return {};
  }
}

/**
 * Pack sales show as open only when the web build says so. Default closed, so
 * a build that forgets the flag tells visitors the truth ("Packs open soon")
 * instead of offering a Buy button the server answers with 409 campaign_paused.
 */
export function stockPacksPurchasesOpen(env: SiteEnv = readViteEnv()): boolean {
  return env.VITE_STOCK_PACKS_PURCHASES_OPEN?.trim().toLowerCase() === "true";
}

export const STOCK_PACKS_PURCHASES_OPEN = stockPacksPurchasesOpen();

export type StockPacksCampaignState = "draft" | "published" | "paused" | "exhausted";

export type StockPacksCampaignAction = Readonly<{
  label: string;
  blocked: boolean;
  note: string | null;
}>;

/** Label for the pack button. Only a published campaign on an open site can start a review. */
export function stockPacksCampaignAction(state: StockPacksCampaignState, purchasesOpen: boolean): StockPacksCampaignAction {
  if (!purchasesOpen) return { label: "Packs open soon", blocked: true, note: null };
  if (state === "exhausted") return { label: "Sold out", blocked: true, note: "Back soon." };
  if (state === "paused") return { label: "Paused", blocked: true, note: "Back soon." };
  if (state === "draft") return { label: "Packs open soon", blocked: true, note: null };
  return { label: "Review pack", blocked: false, note: null };
}

/** Phases where a paid open is still moving. A second purchase must not start here. */
export function stockPacksOpenInFlight(phase: string): boolean {
  return phase === "payment_pending" || phase === "selected"
    || phase === "delivery_pending" || phase === "delivery_reconciling";
}

/** The HTTP client reports a failed fetch or unreadable body with this exact message. */
export const STOCK_PACKS_TRANSPORT_FAILURE_MESSAGE = "Read the saved operation before retrying.";
const STOCK_MONEY_KILLED = "Stock money kill switch is engaged or unreadable.";

/**
 * Short user copy for a Stock API or client error, chosen by code. Server
 * wording never reaches the page for the codes below; anything else keeps
 * its specific message.
 */
export function stockPacksErrorCopy(error: Readonly<{ code: string; message: string }>): string {
  if (error.message === STOCK_MONEY_KILLED) return "Paused for safety. Try again later.";
  switch (error.code) {
    case "transport_unavailable":
    case "invalid_contract":
      return "Can't reach STONKPACKS. Try again.";
    case "reconciliation_required":
      return error.message === STOCK_PACKS_TRANSPORT_FAILURE_MESSAGE
        ? "Can't reach STONKPACKS. Try again."
        : "Check your saved pack before starting another.";
    case "not_found":
      return "Packs are offline.";
    case "campaign_paused":
      return "Packs open soon.";
    case "rate_limited":
      return "Too many tries. Wait a moment.";
    case "missing_evidence":
      return "Service busy. Try again.";
    case "unauthorized":
      return "Log in again to continue.";
    default:
      return error.message;
  }
}

export type StockPacksLoginState = "loading" | "down" | "ready" | "authenticated";

/** One login state for every Stock page, so no Connect button is ever a silent no-op. */
export function stockPacksLoginState(auth: Pick<RoyaleHostedAuth, "status" | "ready" | "authenticated" | "login">): StockPacksLoginState {
  if (auth.authenticated) return "authenticated";
  if (auth.status === "blocked_missing_public_config" || auth.status === "sdk_error") return "down";
  if (!auth.ready || auth.status === "sdk_initializing") return "loading";
  return typeof auth.login === "function" ? "ready" : "down";
}

export const STOCK_PACKS_LOGIN_DOWN_COPY = "Login is down. Try again soon.";

/** Exact shortfall in raw units, or null when the wallet already covers the total. */
export function stockPacksShortfallRaw(availableRaw: string, totalRaw: string): string | null {
  const available = BigInt(availableRaw), total = BigInt(totalRaw);
  return available >= total ? null : (total - available).toString();
}

/** Time after login during which a missing Solana wallet is still being created. */
export const STOCK_PACKS_WALLET_SETUP_GRACE_MS = 10_000;
