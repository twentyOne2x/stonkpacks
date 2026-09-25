import { useEffect, useRef, useState } from "react";

import type { RoyaleHostedAuth } from "../../../routes/royale/royaleAuth";
import {
  STOCK_PACKS_LOGIN_DOWN_COPY,
  STOCK_PACKS_WALLET_SETUP_GRACE_MS,
  stockPacksLoginState,
  type StockPacksLoginState,
} from "./stockPacksSiteStatus";
import "./stockPacksSite.css";

/** Why an authenticated Stock session is not ready. Presentation only. */
export type StockPacksSessionIssue =
  | "account"
  | "no_wallet"
  | "wallet_changed"
  | "network"
  | "error";

type AccountAuth = Pick<RoyaleHostedAuth,
  "status" | "ready" | "authenticated" | "login" | "logout" | "walletAddress" | "linkSolanaWallet">;

let loggedLoginDown = false;

/** Logs once per page load why login is unavailable, for operators reading the console. */
function logLoginDownOnce(auth: Pick<RoyaleHostedAuth, "status">) {
  if (loggedLoginDown) return;
  loggedLoginDown = true;
  console.warn(`[stonkpacks] login unavailable: privy status ${auth.status}`);
}

/**
 * True for up to STOCK_PACKS_WALLET_SETUP_GRACE_MS after a login that has no
 * Solana wallet yet: Privy creates the embedded wallet asynchronously, so the
 * page says "Setting up your wallet" instead of flashing a false error.
 */
export function useStockPacksWalletSetupGrace(auth: Pick<RoyaleHostedAuth, "authenticated" | "walletAddress">): boolean {
  const waiting = auth.authenticated && !auth.walletAddress;
  const [inGrace, setInGrace] = useState(waiting);
  const startedAt = useRef<number | null>(null);
  useEffect(() => {
    if (!waiting) {
      startedAt.current = null;
      setInGrace(false);
      return undefined;
    }
    startedAt.current ??= Date.now();
    const remaining = STOCK_PACKS_WALLET_SETUP_GRACE_MS - (Date.now() - startedAt.current);
    if (remaining <= 0) {
      setInGrace(false);
      return undefined;
    }
    setInGrace(true);
    const timer = setTimeout(() => setInGrace(false), remaining);
    return () => clearTimeout(timer);
  }, [waiting]);
  return waiting && inGrace;
}

/** The Connect button, never a silent no-op: loading and down states are disabled and say why. */
export function StockPacksConnectButton({ auth, className = "stockPacksPlayer__primary", label = "Connect with Privy" }: Readonly<{
  auth: Pick<RoyaleHostedAuth, "status" | "ready" | "authenticated" | "login">;
  className?: string;
  label?: string;
}>) {
  const state = stockPacksLoginState(auth);
  if (state === "authenticated") return null;
  if (state === "down") logLoginDownOnce(auth);
  return <>
    <button type="button" className={className} disabled={state !== "ready"}
      onClick={() => { if (state === "ready") auth.login?.(); }}>
      {state === "loading" ? "Loading login..." : label}
    </button>
    {state === "down" ? <small className="stockPacksAccount__note" role="status">{STOCK_PACKS_LOGIN_DOWN_COPY}</small> : null}
  </>;
}

/** Copy an address with the async clipboard, falling back to a no-op where it is unavailable. */
export function StockPacksCopyAddress({ address }: Readonly<{ address: string }>) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1_500);
    return () => clearTimeout(timer);
  }, [copied]);
  return <button type="button" className="stockPacksAccount__button" onClick={() => {
    void navigator.clipboard?.writeText(address).then(() => setCopied(true), () => undefined);
  }}>{copied ? "Copied" : "Copy address"}</button>;
}

/**
 * Account strip for every Stock page body: who is logged in, the full wallet
 * address with copy, Log out, and the exact fix when the session cannot start.
 * Rendered only for an authenticated visitor; logged-out pages show Connect.
 */
export function StockPacksAccountBar({ auth, issue, walletSetup, onRetry }: Readonly<{
  auth: AccountAuth;
  issue: StockPacksSessionIssue | null;
  walletSetup: boolean;
  onRetry?: (() => void) | undefined;
}>) {
  if (!auth.authenticated) return null;
  const logout = auth.logout
    ? <button type="button" className="stockPacksAccount__button" onClick={() => { void auth.logout?.(); }}>Log out</button>
    : null;
  const wallet = auth.walletAddress ?? null;
  if (!wallet) {
    if (walletSetup) {
      return <section className="stockPacksAccount" aria-label="Your account" role="status">
        <strong>Setting up your wallet...</strong>
      </section>;
    }
    return <section className="stockPacksAccount" aria-label="Your account" role="alert">
      <strong>No Solana wallet on this login</strong>
      <small>Connect a Solana wallet, or log out and sign in with email.</small>
      <div className="stockPacksAccount__actions">
        {auth.linkSolanaWallet
          ? <button type="button" className="stockPacksAccount__button" onClick={() => auth.linkSolanaWallet?.()}>Connect Solana wallet</button>
          : null}
        {logout}
      </div>
    </section>;
  }
  if (issue && issue !== "no_wallet") {
    const title = issue === "account" ? "Log in again to continue"
      : issue === "network" ? "Wrong network build"
        : "Could not verify your wallet";
    return <section className="stockPacksAccount" aria-label="Your account" role="alert">
      <strong>{title}</strong>
      <code className="stockPacksAccount__address" title={wallet}>{wallet}</code>
      <div className="stockPacksAccount__actions">
        {onRetry && issue !== "network" ? <button type="button" className="stockPacksAccount__button" onClick={onRetry}>Retry</button> : null}
        {logout}
      </div>
    </section>;
  }
  return <section className="stockPacksAccount" aria-label="Your account">
    <span className="stockPacksAccount__label">Your wallet</span>
    <code className="stockPacksAccount__address">{wallet}</code>
    <div className="stockPacksAccount__actions">
      <StockPacksCopyAddress address={wallet} />
      {logout}
    </div>
  </section>;
}

export type { StockPacksLoginState };
