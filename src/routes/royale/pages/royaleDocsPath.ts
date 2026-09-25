// /docs deep-link path grammar - PURE, dependency-free on purpose.
//
// The docs restructure (owner directive, 2026-07-29: "make them like real docs
// like attn markets docs repo") gives the docs surface client-side sub-routes,
// one topic per page: /docs/<section>/<page>. Three consumers share this
// module so the grammar can never drift between them:
//   - main.tsx routeFromPath        (URL -> AppRoute {kind:"royaleDocs",...})
//   - RoyaleDocsRoute.tsx           (sidebar links + prev/next hrefs)
//   - royaleDocsCopy.contract.test  (the deep-link contract cases)
//
// 2026-08-13 (root-canonical): docs moved off /lab/royale/docs. The MATCHER
// still accepts the retired prefix - shared links and the QA estate's preview
// URLs must keep resolving where vercel.json's 308 does not run - but every
// href this module GENERATES is canonical.
//
// Kept free of imports (no react, no i18n) so main.tsx can import it eagerly
// without pulling the lazy docs bundle forward, and node:test can unit-test it
// without a DOM.

export const ROYALE_DOCS_BASE_PATH = "/docs";

/** The retired spelling. Still matched, never generated. */
export const ROYALE_DOCS_LEGACY_BASE_PATH = "/lab/royale/docs";

export type RoyaleDocsPathMatch = {
  /** Section slug, e.g. "fairness". Absent on the bare /docs. */
  section?: string;
  /** Page slug, e.g. "odds". Absent on the bare docs path or a bare section. */
  page?: string;
};

/**
 * Matches /docs, /docs/<section> and /docs/<section>/<page> - and the same
 * three under the retired /lab/royale/docs prefix (trailing slashes tolerated,
 * same as routeFromPath's own normalization). Returns null for every non-docs
 * path so the caller's route table falls through untouched. Slugs are
 * validated to the [a-z0-9-] shape the section map uses; anything else is NOT
 * a docs path.
 */
export function matchRoyaleDocsPath(pathname: string): RoyaleDocsPathMatch | null {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === ROYALE_DOCS_BASE_PATH || path === ROYALE_DOCS_LEGACY_BASE_PATH) return {};
  const match = path.match(/^(?:\/lab\/royale)?\/docs\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/);
  if (!match) return null;
  const result: RoyaleDocsPathMatch = { section: match[1]! };
  if (match[2]) result.page = match[2];
  return result;
}

/** Canonical href for a docs page (or a section, or the docs landing page). */
export function royaleDocsHref(section?: string, page?: string): string {
  if (!section) return ROYALE_DOCS_BASE_PATH;
  if (!page) return `${ROYALE_DOCS_BASE_PATH}/${section}`;
  return `${ROYALE_DOCS_BASE_PATH}/${section}/${page}`;
}
