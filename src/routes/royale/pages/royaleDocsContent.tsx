/** @jsxRuntime automatic @jsxImportSource react */
// The docs CONTENT MODEL - one source of truth, two presentations.
//
// Owner directive (2026-07-29, verbatim): "i think we need to make them like
// real docs like attn markets docs repo i think / although on mobile keep
// those views". The attn markets docs repo is a sidebar docs site: ordered
// sections, one topic per page, an index landing page. This module mirrors
// that SHAPE with no new framework:
//
//   - buildRoyaleDocsEntries() builds every docs entry (the ELI5 Q&As and the
//     Technical cards) exactly once, each with a stable id. Call it during
//     render: values come from t() so a locale switch re-renders them.
//   - The MOBILE presentation (RoyaleDocsRoute's tab view, kept exactly per
//     the owner) renders the entries filtered by `tab`, in array order - the
//     same lists the route always rendered, with the 2026-07-29 lifecycle
//     additions appended at the end of the Technical tab.
//   - The DESKTOP presentation (sidebar + one topic per page) renders the
//     SAME entries grouped by ROYALE_DOCS_SECTIONS below. Every entry id a
//     page references must exist, and every entry must be reachable from some
//     page - the contract test (royaleDocsCopy.contract.test.ts) enforces
//     both, so the two presentations can never fork.
//
// The copy rules of the 2026-07-29 rewrite apply to everything here: no
// source-file names in player copy, no "Heat" (the mechanic is loose change),
// no em dashes, pack tier names and dollar amounts stay literal English
// tokens in every locale. The 2026-07-29 lifecycle entries (deposits,
// withdrawals, card delivery, identity, reconnect, void/refund) were derived
// from the COMMITTED engine at HEAD, per the same ground-truth-over-spec rule
// as the Technical rewrite.

import type { ReactNode } from "react";

import { formatUsd } from "../../../lib/formatUsd";
import { t } from "../royaleI18n";

/** One docs entry: an ELI5 Q&A (`tab: "how"`) or a Technical card
 *  (`tab: "tech"`). `title` is the question / card title; `body` the answer /
 *  card body. There is deliberately NO source field (owner directive). */
export type RoyaleDocsEntry = {
  id: string;
  tab: "how" | "tech";
  title: string;
  body: ReactNode;
};

/**
 * Splits a dictionary template like "The ladder runs {starter} and {mythic}."
 * on its `{token}` placeholders and renders each token as a bold span filled
 * in by the caller with a literal (never-translated) value - pack tier
 * names, USD prices, and bare percentages/durations. This keeps the
 * dictionary's plain-string + `{token}` contract (see royaleI18n.ts) while
 * preserving the bold emphasis the design uses for those call-outs.
 */
export function interpolateBold(template: string, tokens: Record<string, ReactNode>): ReactNode {
  const pieces = template.split(/\{(\w+)\}/g);
  return pieces.map((piece, index) => (index % 2 === 1 ? <b key={index}>{tokens[piece] ?? `{${piece}}`}</b> : piece));
}

export function packTierTokens(): Record<string, ReactNode> {
  return {
    starter: `Starter ${formatUsd(25)}`,
    elite: `Elite ${formatUsd(50)}`,
    legendary: `Legendary ${formatUsd(250)}`,
    grail: `Grail ${formatUsd(1_000)}`,
    mythic: `Mythic ${formatUsd(2_500)}`,
  };
}

/**
 * Every docs entry, in MOBILE TAB ORDER (filter by `tab` to get each tab's
 * list). The "how" list and the first nine "tech" entries are the exact
 * lists the tab view has always rendered; the remaining "tech" entries are
 * the 2026-07-29 lifecycle additions, appended at the end so the kept mobile
 * view stays familiar.
 */
export function buildRoyaleDocsEntries(): RoyaleDocsEntry[] {
  const tierTokens = packTierTokens();
  return [
    // --- How it works (ELI5) - unchanged list, unchanged order -------------
    { id: "how.whatIsRoyale", tab: "how", title: t("docs.how.whatIsRoyale.q"), body: t("docs.how.whatIsRoyale.a") },
    {
      id: "how.whatIsPack",
      tab: "how",
      title: t("docs.how.whatIsPack.q"),
      body: interpolateBold(t("docs.how.whatIsPack.a"), tierTokens),
    },
    { id: "how.howBacking", tab: "how", title: t("docs.how.howBacking.q"), body: t("docs.how.howBacking.a") },
    { id: "how.heatRemainder", tab: "how", title: t("docs.how.heatRemainder.q"), body: t("docs.how.heatRemainder.a") },
    { id: "how.howWheelPicks", tab: "how", title: t("docs.how.howWheelPicks.q"), body: t("docs.how.howWheelPicks.a") },
    {
      id: "how.whatDoIWin",
      tab: "how",
      title: t("docs.how.whatDoIWin.q"),
      body: (
        <>
          {t("docs.how.whatDoIWin.aBefore")} <b>{t("docs.how.whatDoIWin.aEmphasis")}</b>
          {t("docs.how.whatDoIWin.aAfter")}
        </>
      ),
    },
    {
      id: "how.keepOrSell",
      tab: "how",
      title: t("docs.how.keepOrSell.q"),
      body: (
        <>
          <b>{t("docs.how.keepOrSell.keepLabel")}</b> {t("docs.how.keepOrSell.keepBody")}{" "}
          <b>{t("docs.how.keepOrSell.sellLabel")}</b> {t("docs.how.keepOrSell.sellBody")}
        </>
      ),
    },
    {
      id: "how.decisionTimeout",
      tab: "how",
      title: t("docs.how.decisionTimeout.q"),
      body: t("docs.how.decisionTimeout.a"),
    },
    { id: "how.whatIsChase", tab: "how", title: t("docs.how.whatIsChase.q"), body: t("docs.how.whatIsChase.a") },
    { id: "how.howToStartFree", tab: "how", title: t("docs.how.howToStartFree.q"), body: t("docs.how.howToStartFree.a") },
    { id: "how.controls", tab: "how", title: t("docs.how.controls.q"), body: t("docs.how.controls.a") },
    { id: "how.chat", tab: "how", title: t("docs.how.chat.q"), body: t("docs.how.chat.a") },
    { id: "how.collectors", tab: "how", title: t("docs.how.collectors.q"), body: t("docs.how.collectors.a") },
    { id: "how.replay", tab: "how", title: t("docs.how.replay.q"), body: t("docs.how.replay.a") },

    // --- Technical - the nine standing cards, unchanged order --------------
    {
      id: "tech.packLadder",
      tab: "tech",
      title: t("docs.tech.packLadder.title"),
      body: interpolateBold(t("docs.tech.packLadder.body"), tierTokens),
    },
    {
      id: "tech.oddsWeighting",
      tab: "tech",
      title: t("docs.tech.oddsWeighting.title"),
      body: t("docs.tech.oddsWeighting.body"),
    },
    { id: "tech.vrfDraw", tab: "tech", title: t("docs.tech.vrfDraw.title"), body: t("docs.tech.vrfDraw.body") },
    {
      id: "tech.settlementMath",
      tab: "tech",
      title: t("docs.tech.settlementMath.title"),
      body: interpolateBold(t("docs.tech.settlementMath.body"), {
        take: "10%",
        chaseCut: "3%",
        protocolCut: "7%",
      }),
    },
    {
      id: "tech.cardAllocation",
      tab: "tech",
      title: t("docs.tech.cardAllocation.title"),
      body: t("docs.tech.cardAllocation.body"),
    },
    {
      id: "tech.sellBackRates",
      tab: "tech",
      title: t("docs.tech.sellBackRates.title"),
      body: interpolateBold(t("docs.tech.sellBackRates.body"), {
        entryRate: "85%",
        midRate: "90%",
        topRate: "93%",
      }),
    },
    {
      id: "tech.chaseJackpot",
      tab: "tech",
      title: t("docs.tech.chaseJackpot.title"),
      body: interpolateBold(t("docs.tech.chaseJackpot.body"), { chaseCut: "3%" }),
    },
    {
      id: "tech.decisionWindow",
      tab: "tech",
      title: t("docs.tech.decisionWindow.title"),
      // Bare number per the interpolation convention (unit word lives in each
      // locale's body) — "15-second" leaked English into all nine non-en
      // locales (mega-audit 2026-07-31, class untranslated-text).
      body: interpolateBold(t("docs.tech.decisionWindow.body"), { window: "15" }),
    },
    {
      id: "tech.devnetCustody",
      tab: "tech",
      title: t("docs.tech.devnetCustody.title"),
      body: t("docs.tech.devnetCustody.body"),
    },

    // --- Technical - 2026-07-29 lifecycle additions (committed engine) -----
    { id: "tech.voidRefund", tab: "tech", title: t("docs.tech.voidRefund.title"), body: t("docs.tech.voidRefund.body") },
    { id: "tech.cardExits", tab: "tech", title: t("docs.tech.cardExits.title"), body: t("docs.tech.cardExits.body") },
    { id: "tech.deposits", tab: "tech", title: t("docs.tech.deposits.title"), body: t("docs.tech.deposits.body") },
    {
      id: "tech.withdrawals",
      tab: "tech",
      title: t("docs.tech.withdrawals.title"),
      body: t("docs.tech.withdrawals.body"),
    },
    { id: "tech.identity", tab: "tech", title: t("docs.tech.identity.title"), body: t("docs.tech.identity.body") },
    { id: "tech.reconnect", tab: "tech", title: t("docs.tech.reconnect.title"), body: t("docs.tech.reconnect.body") },
    { id: "tech.controls", tab: "tech", title: t("docs.tech.controls.title"), body: t("docs.tech.controls.body") },
    { id: "tech.chat", tab: "tech", title: t("docs.tech.chat.title"), body: t("docs.tech.chat.body") },
    { id: "tech.collectors", tab: "tech", title: t("docs.tech.collectors.title"), body: t("docs.tech.collectors.body") },
    { id: "tech.replay", tab: "tech", title: t("docs.tech.replay.title"), body: t("docs.tech.replay.body") },
  ];
}

// ---------------------------------------------------------------------------
// The desktop section map: ordered sections -> ordered pages -> entry ids.
// ---------------------------------------------------------------------------

export type RoyaleDocsPage = {
  /** URL slug ([a-z0-9-], see royaleDocsPath.ts). */
  id: string;
  /** i18n key for the sidebar label / page heading / pager label. */
  titleKey: string;
  /** Direct profile copy for host-specific docs. ATTN continues to use titleKey. */
  title?: string;
  /** The entries this page renders, in order. Must exist in buildRoyaleDocsEntries(). */
  entryIds: readonly string[];
};

export type RoyaleDocsSection = {
  /** URL slug ([a-z0-9-]). */
  id: string;
  /** i18n key for the sidebar section heading. */
  labelKey: string;
  /** Direct profile copy for host-specific docs. ATTN continues to use labelKey. */
  label?: string;
  pages: readonly RoyaleDocsPage[];
};

export const ROYALE_DOCS_SECTIONS: readonly RoyaleDocsSection[] = [
  {
    id: "introduction",
    labelKey: "docs.nav.section.introduction",
    pages: [
      { id: "what-is-royale", titleKey: "docs.nav.page.whatIsRoyale", entryIds: ["how.whatIsRoyale"] },
      { id: "packs", titleKey: "docs.nav.page.packs", entryIds: ["how.whatIsPack", "tech.packLadder"] },
      { id: "start-free", titleKey: "docs.nav.page.startFree", entryIds: ["how.howToStartFree"] },
    ],
  },
  {
    id: "gameplay",
    labelKey: "docs.nav.section.gameplay",
    pages: [
      { id: "backing", titleKey: "docs.nav.page.backing", entryIds: ["how.howBacking", "how.heatRemainder"] },
      { id: "the-draw", titleKey: "docs.nav.page.theDraw", entryIds: ["how.howWheelPicks"] },
      { id: "winning", titleKey: "docs.nav.page.winning", entryIds: ["how.whatDoIWin"] },
      { id: "the-chase", titleKey: "docs.nav.page.chase", entryIds: ["how.whatIsChase", "tech.chaseJackpot"] },
    ],
  },
  {
    id: "cards",
    labelKey: "docs.nav.section.cards",
    pages: [
      {
        id: "keep-or-sell",
        titleKey: "docs.nav.page.keepOrSell",
        entryIds: ["how.keepOrSell", "how.decisionTimeout", "tech.decisionWindow"],
      },
      { id: "who-gets-the-cards", titleKey: "docs.nav.page.cardAllocation", entryIds: ["tech.cardAllocation"] },
      { id: "sell-back", titleKey: "docs.nav.page.sellBack", entryIds: ["tech.sellBackRates"] },
      { id: "card-delivery", titleKey: "docs.nav.page.cardDelivery", entryIds: ["tech.cardExits"] },
    ],
  },
  {
    id: "money",
    labelKey: "docs.nav.section.money",
    pages: [
      { id: "deposits", titleKey: "docs.nav.page.deposits", entryIds: ["tech.deposits"] },
      { id: "withdrawals", titleKey: "docs.nav.page.withdrawals", entryIds: ["tech.withdrawals"] },
      { id: "settlement", titleKey: "docs.nav.page.settlement", entryIds: ["tech.settlementMath"] },
      { id: "custody", titleKey: "docs.nav.page.custody", entryIds: ["tech.devnetCustody"] },
    ],
  },
  {
    id: "fairness",
    labelKey: "docs.nav.section.fairness",
    pages: [
      { id: "odds", titleKey: "docs.nav.page.odds", entryIds: ["tech.oddsWeighting"] },
      { id: "vrf", titleKey: "docs.nav.page.vrf", entryIds: ["tech.vrfDraw"] },
      { id: "void-and-refund", titleKey: "docs.nav.page.voidRefund", entryIds: ["tech.voidRefund"] },
    ],
  },
  {
    id: "account",
    labelKey: "docs.nav.section.account",
    pages: [
      { id: "identity", titleKey: "docs.nav.page.identity", entryIds: ["tech.identity"] },
      { id: "reconnect", titleKey: "docs.nav.page.reconnect", entryIds: ["tech.reconnect"] },
    ],
  },
  {
    id: "tools",
    labelKey: "docs.nav.section.tools",
    pages: [
      { id: "controls", titleKey: "docs.nav.page.controls", entryIds: ["how.controls", "tech.controls"] },
      { id: "chat", titleKey: "docs.nav.page.chat", entryIds: ["how.chat", "tech.chat"] },
      { id: "collectors", titleKey: "docs.nav.page.collectors", entryIds: ["how.collectors", "tech.collectors"] },
      { id: "replay", titleKey: "docs.nav.page.replay", entryIds: ["how.replay", "tech.replay"] },
    ],
  },
];

/** A position in the docs: a concrete page, or the landing page (both null). */
export type RoyaleDocsPageRef = { sectionId: string | null; pageId: string | null };

/** Every page in reading order (the sidebar order, flattened). */
export function flattenRoyaleDocsPages(
  sections: readonly RoyaleDocsSection[] = ROYALE_DOCS_SECTIONS,
): { sectionId: string; pageId: string; titleKey: string; title?: string }[] {
  return sections.flatMap((section) =>
    section.pages.map((page) => ({
      sectionId: section.id,
      pageId: page.id,
      titleKey: page.titleKey,
      ...(page.title ? { title: page.title } : {}),
    })),
  );
}

/** Resolve a deep link to its page, or null (unknown slugs -> the landing). */
export function findRoyaleDocsPage(
  sectionId: string | null | undefined,
  pageId: string | null | undefined,
  sections: readonly RoyaleDocsSection[] = ROYALE_DOCS_SECTIONS,
): { section: RoyaleDocsSection; page: RoyaleDocsPage } | null {
  if (!sectionId) return null;
  const section = sections.find((candidate) => candidate.id === sectionId);
  if (!section) return null;
  // A bare /docs/<section> link lands on the section's first page.
  const page = pageId ? section.pages.find((candidate) => candidate.id === pageId) : section.pages[0];
  return page ? { section, page } : null;
}

/**
 * Prev/next for the bottom-of-page pager. The reading chain is the landing
 * page followed by every page in sidebar order, so the landing's next is the
 * first page and the first page's prev is the landing (sectionId/pageId null).
 */
export function royaleDocsPagerFor(
  sectionId: string | null,
  pageId: string | null,
  sections: readonly RoyaleDocsSection[] = ROYALE_DOCS_SECTIONS,
): {
  prev: RoyaleDocsPageRef | null;
  next: RoyaleDocsPageRef | null;
} {
  const pages = flattenRoyaleDocsPages(sections);
  if (!sectionId || !pageId) {
    const first = pages[0];
    return { prev: null, next: first ? { sectionId: first.sectionId, pageId: first.pageId } : null };
  }
  const index = pages.findIndex((page) => page.sectionId === sectionId && page.pageId === pageId);
  if (index < 0) return { prev: null, next: null };
  const prev = index === 0 ? { sectionId: null, pageId: null } : { sectionId: pages[index - 1]!.sectionId, pageId: pages[index - 1]!.pageId };
  const next = index + 1 < pages.length ? { sectionId: pages[index + 1]!.sectionId, pageId: pages[index + 1]!.pageId } : null;
  return { prev, next };
}
