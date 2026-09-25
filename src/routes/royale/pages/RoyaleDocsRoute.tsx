// /lab/royale/docs - onboarding FAQ + technical docs.
//
// Owner ask (2026-07-24): "add an faq / question/docs link in the header/
// navigator so we can onboard. add both an eli5 and a technical docs." Two
// tabs: "How it works" is the plain-language ELI5 a brand-new player reads
// first; "Technical" is the exact mechanics in plain numbers.
//
// DOCS RESTRUCTURE (owner directive, 2026-07-29, verbatim: "i think we need
// to make them like real docs like attn markets docs repo i think / although
// on mobile keep those views"). Two presentations of ONE content source
// (royaleDocsContent.tsx):
//   - DESKTOP (>=1024px): a real docs layout - persistent left sidebar with
//     ordered sections and page links, one topic per page, prev/next pager at
//     the bottom, deep-linkable sub-routes /lab/royale/docs/<section>/<page>
//     (routeFromPath in main.tsx parses them via royaleDocsPath.ts and passes
//     section/page down as props). Sidebar clicks push history entries and
//     re-enter main.tsx's routing via a popstate dispatch, so back/forward
//     walk the pages without a reload.
//   - MOBILE (<1024px): the tab view below is KEPT EXACTLY (owner explicit) -
//     same markup, same testids, same lists, with the 2026-07-29 lifecycle
//     cards appended at the end of the Technical tab. A deep link opened on
//     mobile lands on the tab that carries that page's content.
//
// NO SOURCE-FILE CITATIONS (owner directive, 2026-07-29, verbatim: "i dont
// understand why we refer to each file? lets not do that"): a player reading
// the rules of a game must never be shown the repository's file layout. The
// rules themselves are still derived from the shipped engine - see
// royaleDocsContent.tsx for the copy provenance notes.
//
// Static content only - no live game data, so this route (like
// royaleHowItWorks) skips the storefront bootstrap and wallet-deposit fetch
// (see main.tsx routeFromPath / isRoyaleLabRoute).
//
// i18n: every user-visible string is sourced from the "docs.*" dictionary
// (apps/web/src/routes/royale/i18n/en/docs.ts) via t(). Pack tier names + USD
// prices and bare percentages/durations are supplied as literal,
// locale-invariant tokens (royaleDocsContent.tsx) per the i18n epic's hard
// rule that those never translate.
import { useEffect, useState, useSyncExternalStore, type MouseEvent, type ReactNode } from "react";

import { useStockPacksBrand } from "../../../features/stockPacks/branding/stockPacksBrand";
import {
  buildStockPacksDocsEntries,
  STOCK_PACKS_DOCS_SECTIONS,
} from "../../../features/stockPacks/branding/stockPacksDocsContent";
import { RoyaleBrandMark } from "../RoyaleBrandMark";
import { t, useRoyaleLocale } from "../royaleI18n";
import { RoyaleSurfaceNav } from "./RoyaleSurfaceNav";
import {
  buildRoyaleDocsEntries,
  findRoyaleDocsPage,
  ROYALE_DOCS_SECTIONS,
  royaleDocsPagerFor,
  type RoyaleDocsEntry,
  type RoyaleDocsPageRef,
  type RoyaleDocsSection,
} from "./royaleDocsContent";
import { royaleDocsHref } from "./royaleDocsPath";
import "../royaleStyles.css";
import "../royaleDarkTheme.css";
import "./royalePages.css";
import "./royaleDocsPage.css";

type DocsTab = "how" | "technical";

// ---------------------------------------------------------------------------
// Desktop/mobile split. 1024px is the owner-specified breakpoint: at and above
// it the sidebar layout renders; below it the kept tab view renders. A resize
// or rotation across the line swaps presentations live (useSyncExternalStore
// on the media query, same idiom as royaleI18n's locale store).
// ---------------------------------------------------------------------------
const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribeDesktop(onChange: () => void): () => void {
  const media = window.matchMedia(DESKTOP_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function useIsDesktop(): boolean {
  return useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );
}

/**
 * Client-side docs navigation: push the new URL and re-enter main.tsx's
 * routing (its popstate listener re-reads window.location.pathname). Real
 * back/forward then work for free - the browser pops the entry and the same
 * listener fires naturally.
 */
function navigateDocs(event: MouseEvent<HTMLAnchorElement>, href: string): void {
  // Let modified clicks (new tab / window) behave like the plain links they are.
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)
    return;
  event.preventDefault();
  if (window.location.pathname !== href) {
    window.history.pushState(null, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}

/** Group consecutive entries of the same tab so a mixed page renders each run
 *  with its own idiom (Q&A rows vs Technical cards) and the CSS is reused
 *  verbatim from the tab view. */
function groupEntryRuns(entries: RoyaleDocsEntry[]): { tab: "how" | "tech"; entries: RoyaleDocsEntry[] }[] {
  const runs: { tab: "how" | "tech"; entries: RoyaleDocsEntry[] }[] = [];
  for (const entry of entries) {
    const last = runs[runs.length - 1];
    if (last && last.tab === entry.tab) last.entries.push(entry);
    else runs.push({ tab: entry.tab, entries: [entry] });
  }
  return runs;
}

function FaqRows({ entries }: { entries: RoyaleDocsEntry[] }) {
  return (
    <dl className="royaleDocsFaq">
      {entries.map((entry) => (
        <div className="royaleDocsFaqRow" key={entry.id}>
          <dt>{entry.title}</dt>
          <dd>{entry.body}</dd>
        </div>
      ))}
    </dl>
  );
}

function TechCards({ entries }: { entries: RoyaleDocsEntry[] }) {
  return (
    <ol className="royaleDocsTechList">
      {entries.map((entry) => (
        <li className="royaleDocsTechRow" key={entry.id}>
          <h2>{entry.title}</h2>
          <p>{entry.body}</p>
        </li>
      ))}
    </ol>
  );
}

function pagerLabel(ref: RoyaleDocsPageRef, sections: readonly RoyaleDocsSection[], overview: string): string {
  if (!ref.sectionId || !ref.pageId) return overview;
  const resolved = findRoyaleDocsPage(ref.sectionId, ref.pageId, sections);
  return resolved ? (resolved.page.title ?? t(resolved.page.titleKey)) : overview;
}

function pagerHref(ref: RoyaleDocsPageRef): string {
  return royaleDocsHref(ref.sectionId ?? undefined, ref.pageId ?? undefined);
}

/** /lab/royale/docs - the DOCS surface. Desktop: sidebar docs; mobile: the
 *  kept ELI5 "How it works" + "Technical" tab view. */
export function RoyaleDocsRoute({ section, page }: { section?: string | undefined; page?: string | undefined } = {}) {
  useRoyaleLocale();
  const brand = useStockPacksBrand();
  const isDesktop = useIsDesktop();
  const stockBranded = brand.id === "stonkpacks";
  const entries = stockBranded ? buildStockPacksDocsEntries() : buildRoyaleDocsEntries();
  const sections = stockBranded ? STOCK_PACKS_DOCS_SECTIONS : ROYALE_DOCS_SECTIONS;
  const copy = stockBranded
    ? brand.docs
    : {
        title: t("docs.header.title"),
        backLabel: t("docs.header.back"),
        viewLabel: t("docs.tabs.ariaLabel"),
        howLabel: t("docs.tabs.how"),
        technicalLabel: t("docs.tabs.technical"),
        howIntro: t("docs.how.intro"),
        technicalIntro: t("docs.technical.intro"),
        navigationLabel: t("docs.nav.ariaLabel"),
        overviewLabel: t("docs.nav.overview"),
        previousLabel: t("docs.nav.prev"),
        nextLabel: t("docs.nav.next"),
      };
  const resolved = findRoyaleDocsPage(section, page, sections);

  // MOBILE deep-link courtesy: a link to a Technical-only page opens the
  // Technical tab (the tab that actually carries that content).
  const [tab, setTab] = useState<DocsTab>(() => {
    if (!section) return "how";
    const target = findRoyaleDocsPage(section, page, sections);
    const targetEntries = target ? entries.filter((entry) => target.page.entryIds.includes(entry.id)) : [];
    return targetEntries.length > 0 && targetEntries.every((entry) => entry.tab === "tech") ? "technical" : "how";
  });

  // A page change (sidebar click, pager, back/forward) starts reading at the
  // top, like any docs site.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section, page]);

  const header = (
    <header className="royaleResultsHead">
      <RoyaleBrandMark variant="page" />
      <strong>{copy.title}</strong>
      <RoyaleSurfaceNav current="docs" />
      <a href="/">{copy.backLabel}</a>
    </header>
  );

  // -------------------------------------------------------------------------
  // MOBILE (<1024px): the kept tab view - markup unchanged.
  // -------------------------------------------------------------------------
  if (!isDesktop) {
    const howEntries = entries.filter((entry) => entry.tab === "how");
    const techEntries = entries.filter((entry) => entry.tab === "tech");
    return (
      // a11y (axe landmark-no-duplicate-main / landmark-main-is-top-level /
      // landmark-unique): a <section>, not a nested <main> - main.tsx already
      // wraps every royale route in its own top-level <main class="siteShell">.
      // Matches the RoyaleProfileRoute / RoyaleHowItWorksRoute precedent.
      <section
        className="royaleV2Route royaleV2Route--simplified royaleResultsRoute royaleDocsRoute"
        data-testid="royale-docs-route"
      >
        {header}

        <div className="royaleDocsTabs" role="tablist" aria-label={copy.viewLabel}>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "how"}
            className="royaleDocsTab"
            data-active={tab === "how" || undefined}
            data-testid="royale-docs-tab-how"
            onClick={() => setTab("how")}
          >
            {copy.howLabel}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "technical"}
            className="royaleDocsTab"
            data-active={tab === "technical" || undefined}
            data-testid="royale-docs-tab-technical"
            onClick={() => setTab("technical")}
          >
            {copy.technicalLabel}
          </button>
        </div>

        {tab === "how" ? (
          <section aria-label={copy.howLabel} data-testid="royale-docs-panel-how">
            <p className="royaleDocsIntro">{copy.howIntro}</p>
            <FaqRows entries={howEntries} />
          </section>
        ) : (
          <section aria-label={copy.technicalLabel} data-testid="royale-docs-panel-technical">
            <p className="royaleDocsIntro">{copy.technicalIntro}</p>
            <TechCards entries={techEntries} />
          </section>
        )}
      </section>
    );
  }

  // -------------------------------------------------------------------------
  // DESKTOP (>=1024px): sidebar + one topic per page + pager.
  // -------------------------------------------------------------------------
  const pager = royaleDocsPagerFor(resolved ? resolved.section.id : null, resolved ? resolved.page.id : null, sections);
  const pageEntries: RoyaleDocsEntry[] = resolved
    ? resolved.page.entryIds
        .map((id) => entries.find((entry) => entry.id === id))
        .filter((entry): entry is RoyaleDocsEntry => entry !== undefined)
    : [];

  let content: ReactNode;
  if (resolved) {
    content = (
      <article data-testid="royale-docs-page" data-docs-page={`${resolved.section.id}/${resolved.page.id}`}>
        <p className="royaleDocsCrumb">{resolved.section.label ?? t(resolved.section.labelKey)}</p>
        <h1 className="royaleDocsPageTitle">{resolved.page.title ?? t(resolved.page.titleKey)}</h1>
        {groupEntryRuns(pageEntries).map((run, index) =>
          run.tab === "how" ? (
            <FaqRows key={`run${index}`} entries={run.entries} />
          ) : (
            <TechCards key={`run${index}`} entries={run.entries} />
          ),
        )}
      </article>
    );
  } else {
    // The landing page: the plain-language intro plus a directory of every
    // section and page, like a docs site's index.
    content = (
      <article data-testid="royale-docs-page" data-docs-page="overview">
        <h1 className="royaleDocsPageTitle">{copy.title}</h1>
        <p className="royaleDocsIntro">{copy.howIntro}</p>
        <p className="royaleDocsIntro">{copy.technicalIntro}</p>
        <div className="royaleDocsDirectory">
          {sections.map((sectionEntry) => (
            <div className="royaleDocsDirectorySection" key={sectionEntry.id}>
              <h2>{sectionEntry.label ?? t(sectionEntry.labelKey)}</h2>
              <ul>
                {sectionEntry.pages.map((pageEntry) => {
                  const href = royaleDocsHref(sectionEntry.id, pageEntry.id);
                  return (
                    <li key={pageEntry.id}>
                      <a href={href} onClick={(event) => navigateDocs(event, href)}>
                        {pageEntry.title ?? t(pageEntry.titleKey)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <section
      className="royaleV2Route royaleV2Route--simplified royaleResultsRoute royaleDocsRoute"
      data-testid="royale-docs-route"
    >
      {header}

      <div className="royaleDocsShell">
        <nav className="royaleDocsSidebar" aria-label={copy.navigationLabel} data-testid="royale-docs-sidebar">
          <a
            href={royaleDocsHref()}
            className="royaleDocsSidebarOverview"
            aria-current={resolved ? undefined : "page"}
            data-active={!resolved || undefined}
            onClick={(event) => navigateDocs(event, royaleDocsHref())}
          >
            {copy.overviewLabel}
          </a>
          {sections.map((sectionEntry) => (
            <div className="royaleDocsSidebarSection" key={sectionEntry.id}>
              <h2>{sectionEntry.label ?? t(sectionEntry.labelKey)}</h2>
              <ul>
                {sectionEntry.pages.map((pageEntry) => {
                  const isCurrent = resolved?.section.id === sectionEntry.id && resolved?.page.id === pageEntry.id;
                  const href = royaleDocsHref(sectionEntry.id, pageEntry.id);
                  return (
                    <li key={pageEntry.id}>
                      <a
                        href={href}
                        aria-current={isCurrent ? "page" : undefined}
                        data-active={isCurrent || undefined}
                        onClick={(event) => navigateDocs(event, href)}
                      >
                        {pageEntry.title ?? t(pageEntry.titleKey)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="royaleDocsContent">
          {content}
          <nav className="royaleDocsPager" aria-label={copy.navigationLabel} data-testid="royale-docs-pager">
            {pager.prev ? (
              <a
                className="royaleDocsPagerLink royaleDocsPagerPrev"
                href={pagerHref(pager.prev)}
                data-testid="royale-docs-prev"
                onClick={(event) => navigateDocs(event, pagerHref(pager.prev!))}
              >
                <span>{copy.previousLabel}</span>
                <strong>{pagerLabel(pager.prev, sections, copy.overviewLabel)}</strong>
              </a>
            ) : (
              <span className="royaleDocsPagerSpacer" />
            )}
            {pager.next ? (
              <a
                className="royaleDocsPagerLink royaleDocsPagerNext"
                href={pagerHref(pager.next)}
                data-testid="royale-docs-next"
                onClick={(event) => navigateDocs(event, pagerHref(pager.next!))}
              >
                <span>{copy.nextLabel}</span>
                <strong>{pagerLabel(pager.next, sections, copy.overviewLabel)}</strong>
              </a>
            ) : (
              <span className="royaleDocsPagerSpacer" />
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
