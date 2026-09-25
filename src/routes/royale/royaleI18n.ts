// Pack Royale i18n — PHASE 1 (skeleton + pattern).
//
// Owner spec (verbatim, i18n epic kickoff): "translate everything in all
// languages if possible. english french germany mexican japanese chinese
// etc. all pages available. change in the settings as first setting.
// dropdown to type + show the language with country flag. make it easy to
// search."
//
// This phase ships the FOUNDATION + the PATTERN: the locale registry, the
// persisted module-store + hook, the flat-dictionary t() lookup, the
// searchable language combobox (RoyaleLanguageCombobox.tsx), and ONE surface
// wired end-to-end (the gear settings panel + the cross-surface nav + the
// mobile tab bar) to prove real switching in the browser. Later phases fan
// the SAME pattern out across every other Royale surface (board, results,
// ladder, collection, profile, docs, ...) — see "ADDING A NEW STRING" below.
//
// ---------------------------------------------------------------------------
// ADDING A NEW TRANSLATABLE STRING (later phases)
// ---------------------------------------------------------------------------
//   1. Pick a dot-namespaced key that mirrors the surface + field, e.g.
//      "gear.betting.minBid.label" or "profile.wallet.withdraw". Namespaces
//      already in use: settings.*, common.*, gear.<section>.*, nav.*,
//      mobileNav.* — reuse a namespace if the string belongs there.
//   2. Add the key to i18n/en/<segment>.ts FIRST (English is the fallback
//      every other locale falls back to — see `t()` below — so a key missing
//      anywhere else never renders blank). Pick the segment file that owns
//      the surface you're adding to (core/board/cinema/arena/onboarding/
//      docs/pages/chat/misc — see SEGMENT FILES below); every other locale's
//      SAME segment file is the only other file that key touches.
//   3. Add the SAME key to the matching i18n/<locale>/<segment>.ts file for
//      every other locale. A locale is free to ship a machine-translated
//      placeholder (this phase does exactly that for
//      fr/de/es-419/pt-BR/it/ja/ko/zh-Hans/zh-Hant) as long as the key exists — a
//      later phase re-reviews quality, it does not add coverage.
//   4. If the string embeds a dynamic value (a count, a key name, a list),
//      do NOT change the t() signature. Put a literal placeholder token in
//      the dictionary VALUE — {n}, {key}, {list}, whatever reads naturally —
//      and have the CALLING code do a plain `.replace("{n}", String(x))`.
//      This keeps every language free to reorder the sentence around the
//      token (word order varies a lot across this many locales) instead of
//      forcing a fixed params-object interpolation scheme prematurely. See
//      gear.hotkeys.ariaPressToBind for a worked example, and
//      RoyaleGearSettingsFields.tsx's hotkey rows for the call site.
//   5. PLURAL KEYS (pattern introduced 2026-07-25, "pages.results.count"): a
//      count that inflects the noun (never hardcode "{n} ROUNDS") ships as a
//      "<key>.one" / "<key>.other" pair in every locale (identical values in
//      locales that do not inflect, e.g. ja/ko/zh-Hans/zh-Hant), with the calling
//      component choosing `.one` when n === 1 and `.other` otherwise.
//
// SEGMENT FILES (parallel-work structure)
//   Each i18n/<locale>/ directory is split into one file per surface so
//   multiple agents can translate different surfaces at once without
//   touching a shared file: core.ts (the original Phase-1 keys) plus
//   board.ts, cinema.ts, arena.ts, onboarding.ts, docs.ts, pages.ts, chat.ts,
//   misc.ts. Every segment file default-exports a flat
//   Record<string, string>; i18n/<locale>/index.ts spreads all nine into the
//   single dictionary this module imports and should not need to change
//   again once a locale exists. An agent owning one segment only ever edits
//   its own <segment>.ts in each locale it is translating, never index.ts.
//
// ADDING A NEW LOCALE
//   1. Add one entry to LOCALES below: {id, nativeName, englishName, flag}.
//      `id` should be a real BCP-47-ish tag (a bare ISO 639-1 code, or
//      "xx-REGION" when the owner cares which regional flavor/flag — see
//      es-419 and pt-BR below). `flag` is a single emoji, nothing else.
//   2. Create i18n/<id>/ with the same segment files as i18n/en/: a core.ts
//      carrying EVERY key from i18n/en/core.ts (copy it as a starting
//      point), an empty `export default {} as Record<string, string>;`
//      placeholder for each of board/cinema/arena/onboarding/docs/pages/
//      chat/misc, and an index.ts that spreads all nine (copy
//      i18n/en/index.ts and swap the export name).
//   3. Import + register the merged dictionary in DICTIONARIES below.
//   That's it — the combobox, persistence, and fallback all key off LOCALES
//   and DICTIONARIES automatically; no other file needs to change.
//
// RULES THAT APPLY TO EVERY LOCALE, NO EXCEPTIONS
//   - NO EM DASHES ("—") IN ANY LANGUAGE, ANY KEY except the exact
//     owner-directed English label "Automatic — Collector Crypt preferred".
//     Use a comma, a colon, or a full stop everywhere else.
//   - Flags are a single emoji, never an <img> or SVG.
//   - Pack TIER NAMES — Starter / Elite / Legendary / Grail / Mythic — are
//     BRAND TERMS and stay in English in every locale (do not translate or
//     transliterate them). The generic word "pack(s)" DOES translate.
//   - Money is AUTHORED as "$5" / "$200" / "$2.5K" and RE-FORMATTED PER LOCALE
//     at read time (canonicalizeMoneyLiterals below, via lib/formatUsd). Keep
//     authoring the plain en-US literal in every locale's file: the dictionary
//     layer turns it into "1.234,56 $" for de, "1,234.56 US$" for ar, and so
//     on. This replaced the older "no locale re-formats the digits" rule on
//     2026-08-15 — that rule is why all 20 locales printed "$1,234.56", which
//     is simply wrong in the eleven that do not group or place the symbol that
//     way. Do NOT hand-localise a money literal in a translation file; the
//     formatter owns it, and `pnpm qa:royale:i18n` checks the result.
//   - No dev-caveat copy ("beta", "coming soon", "WIP") in shipped strings.
//
// ---------------------------------------------------------------------------
// MODULE API
// ---------------------------------------------------------------------------
//   LOCALES                     — the ordered registry (id/nativeName/englishName/flag).
//   t(key)                      — read the ACTIVE locale's dictionary, falls
//                                  back to en, then to the raw key (so a miss
//                                  is visible in the UI, never blank).
//   getRoyaleLocaleId()         — current locale id (lazy-inits from storage
//                                  / navigator.languages on first call).
//   getRoyaleLocaleInfo()       — the current LOCALES entry.
//   setRoyaleLocale(id)         — switch locale; persists to localStorage
//                                  "royale.lang"; fans out to subscribers.
//   subscribeRoyaleLocale(fn)   — raw subscribe, mirrors royaleMachinePools's
//                                  listener-set pattern.
//   useRoyaleLocale()           — React hook (useSyncExternalStore): returns
//                                  { localeId, locale, setLocale }. A
//                                  component that renders any t()-derived
//                                  text MUST call this (even if it ignores
//                                  the return value) so it re-renders on a
//                                  language switch — t() itself is a plain
//                                  function, not reactive on its own.
//   matchLocale(tags)           — pure best-match of a language-tag list
//                                  against LOCALES (exported for testing).
//
// This module is side-effect-free at import time (no localStorage/navigator
// touch until the first call into it) so it stays safe to import from node
// tests / SSR, matching every other royale*.ts module-store in this codebase
// (royaleAudioEngine.ts, royaleMachinePools.ts).

import { useSyncExternalStore } from "react";

import { formatUsdIn } from "../../lib/formatUsd";
import { en } from "./i18n/en";
import { fr } from "./i18n/fr";
import { de } from "./i18n/de";
import { es419 } from "./i18n/es-419";
import { ptBR } from "./i18n/pt-BR";
import { it } from "./i18n/it";
import { ja } from "./i18n/ja";
import { ko } from "./i18n/ko";
import { zhHans } from "./i18n/zh-Hans";
import { zhHant } from "./i18n/zh-Hant";
import { id as idDict } from "./i18n/id";
import { hi } from "./i18n/hi";
import { fil } from "./i18n/fil";
import { uk } from "./i18n/uk";
import { vi } from "./i18n/vi";
import { tr } from "./i18n/tr";
import { th } from "./i18n/th";
import { pl } from "./i18n/pl";
import { ar } from "./i18n/ar";
import { he } from "./i18n/he";

/** Every locale id the game can be switched to. Keep in sync with LOCALES. */
export type RoyaleLocaleId =
  | "en"
  | "fr"
  | "de"
  | "es-419"
  | "pt-BR"
  | "it"
  | "ja"
  | "ko"
  | "zh-Hans"
  | "zh-Hant"
  | "id"
  | "fil"
  | "th"
  | "vi"
  | "tr"
  | "hi"
  | "uk"
  | "pl"
  | "ar"
  | "he";

export type RoyaleLocaleInfo = {
  id: RoyaleLocaleId;
  /** The language's own name for itself, in its own script. Never translated. */
  nativeName: string;
  /** English name, shown as a secondary hint in the combobox's option rows. */
  englishName: string;
  /** A single flag emoji. */
  flag: string;
  /** Text direction. Omitted means "ltr"; only RTL locales (ar, he) set it.
   *  Stamped onto <html dir> alongside <html lang> (see stampDocumentLang) so
   *  the [dir="rtl"] CSS layer and the UA's bidi layout both key off it. */
  dir?: "rtl";
};

/** A flat, dot-namespaced string dictionary (see file header for the key
 *  convention and the {token} interpolation convention). */
export type RoyaleDictionary = Record<string, string>;

/** Values carried by a template-keyed chat message. Keep these primitive so
 * the wire shape stays serializable and the renderer can apply locale-aware
 * bidi isolation around each interpolation. */
export type RoyaleTranslationParams = Readonly<Record<string, string | number>>;

// Registry order is the combobox's default (unfiltered) list order.
export const LOCALES: readonly RoyaleLocaleInfo[] = [
  { id: "en", nativeName: "English", englishName: "English", flag: "🇺🇸" },
  { id: "fr", nativeName: "Français", englishName: "French", flag: "🇫🇷" },
  { id: "de", nativeName: "Deutsch", englishName: "German", flag: "🇩🇪" },
  // Owner asked for "mexican" specifically — es-419 is the standard
  // Latin-America Spanish tag; the flag follows the owner's literal ask.
  { id: "es-419", nativeName: "Español", englishName: "Spanish (Latin America)", flag: "🇲🇽" },
  { id: "pt-BR", nativeName: "Português", englishName: "Portuguese (Brazil)", flag: "🇧🇷" },
  { id: "it", nativeName: "Italiano", englishName: "Italian", flag: "🇮🇹" },
  { id: "ja", nativeName: "日本語", englishName: "Japanese", flag: "🇯🇵" },
  { id: "ko", nativeName: "한국어", englishName: "Korean", flag: "🇰🇷" },
  { id: "zh-Hans", nativeName: "简体中文", englishName: "Chinese (Simplified)", flag: "🇨🇳" },
  { id: "zh-Hant", nativeName: "繁體中文", englishName: "Chinese (Traditional)", flag: "🇹🇼" },
  // LTR locale-expansion lane (owner economy directive, 2026-07-31), priority
  // order id/fil/th/vi/tr/hi/uk/pl (registry order kept in requested priority
  // order for the combobox's default listing, even though the background
  // translation agents that produced these finished out of that sequence).
  { id: "id", nativeName: "Bahasa Indonesia", englishName: "Indonesian", flag: "🇮🇩" },
  { id: "fil", nativeName: "Filipino", englishName: "Filipino", flag: "🇵🇭" },
  { id: "th", nativeName: "ไทย", englishName: "Thai", flag: "🇹🇭" },
  { id: "vi", nativeName: "Tiếng Việt", englishName: "Vietnamese", flag: "🇻🇳" },
  { id: "tr", nativeName: "Türkçe", englishName: "Turkish", flag: "🇹🇷" },
  { id: "hi", nativeName: "हिन्दी", englishName: "Hindi", flag: "🇮🇳" },
  { id: "uk", nativeName: "Українська", englishName: "Ukrainian", flag: "🇺🇦" },
  { id: "pl", nativeName: "Polski", englishName: "Polish", flag: "🇵🇱" },
  // RTL pair (locales 19+20, 2026-08-01 RTL lane). `dir: "rtl"` drives the
  // <html dir> stamp and the royaleRtl.css override layer. The ar flag
  // follows the language-selector convention (Saudi flag for Arabic).
  { id: "ar", nativeName: "العربية", englishName: "Arabic", flag: "🇸🇦", dir: "rtl" },
  { id: "he", nativeName: "עברית", englishName: "Hebrew", flag: "🇮🇱", dir: "rtl" },
];

const DICTIONARIES: Record<RoyaleLocaleId, RoyaleDictionary> = {
  en,
  fr,
  de,
  "es-419": es419,
  "pt-BR": ptBR,
  it,
  ja,
  ko,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  id: idDict,
  fil,
  th,
  vi,
  tr,
  hi,
  uk,
  pl,
  ar,
  he,
};

export const ROYALE_LOCALE_STORAGE_KEY = "royale.lang";
const STORAGE_KEY = ROYALE_LOCALE_STORAGE_KEY;

function findLocale(id: string): RoyaleLocaleInfo | undefined {
  const lower = id.toLowerCase();
  return LOCALES.find((l) => l.id.toLowerCase() === lower);
}

function primarySubtag(tag: string): string {
  return (tag.split("-")[0] ?? tag).toLowerCase();
}

/** Chinese needs a script decision the generic primary-subtag walk cannot
 *  make (both zh-Hans and zh-Hant share the "zh" primary): Traditional-script
 *  tags ("zh-Hant", and the regions that conventionally write Traditional:
 *  TW / HK / MO, incl. "zh-Hant-TW" style compounds) land on zh-Hant; every
 *  other zh tag ("zh", "zh-CN", "zh-SG", "zh-Hans-*") lands on zh-Hans. */
function matchChinese(tag: string): RoyaleLocaleId {
  const subtags = tag.toLowerCase().split("-").slice(1);
  return subtags.some((s) => s === "hant" || s === "tw" || s === "hk" || s === "mo") ? "zh-Hant" : "zh-Hans";
}

/** Pure best-match: exact id match first (case-insensitive), then a match on
 *  the primary language subtag (so "fr-CA" lands on "fr", "zh" lands on
 *  "zh-Hans" and "zh-TW" on "zh-Hant"), else "en". Exported for unit
 *  testing. */
export function matchLocale(tags: readonly string[]): RoyaleLocaleId {
  for (const tag of tags) {
    const exact = findLocale(tag);
    if (exact) return exact.id;
  }
  for (const tag of tags) {
    let primary = primarySubtag(tag);
    if (primary === "zh") return matchChinese(tag);
    // Legacy Hebrew tag: Java-era stacks (and some Android WebViews) still
    // report "iw" for Hebrew; ISO retired it in favor of "he" in 1989.
    if (primary === "iw") primary = "he";
    const match = LOCALES.find((l) => primarySubtag(l.id) === primary);
    if (match) return match.id;
  }
  return "en";
}

function detectDefaultLocale(): RoyaleLocaleId {
  try {
    const nav = (globalThis as { navigator?: { languages?: readonly string[]; language?: string } }).navigator;
    const tags = nav?.languages && nav.languages.length > 0 ? nav.languages : nav?.language ? [nav.language] : [];
    return matchLocale(tags);
  } catch {
    return "en";
  }
}

function readStoredLocale(): RoyaleLocaleId | null {
  try {
    const storage = (globalThis as { localStorage?: Storage }).localStorage;
    const raw = storage?.getItem(STORAGE_KEY);
    if (!raw) return null;
    return findLocale(raw)?.id ?? null;
  } catch {
    return null;
  }
}

function writeStoredLocale(id: RoyaleLocaleId): void {
  try {
    (globalThis as { localStorage?: Storage }).localStorage?.setItem(STORAGE_KEY, id);
  } catch {
    /* storage unavailable — keep the in-memory value only */
  }
}

// Lazy-initialized so importing this module never touches localStorage or
// navigator (SSR/test-safe — see file header).
let currentLocaleId: RoyaleLocaleId | null = null;
const listeners = new Set<() => void>();

/** stonkpacks.xyz ships English copy only; its 19 other locale tables carry
 *  stale Royale-era Stock strings, so the Stock host never auto-selects them. */
function stockHostPinnedLocale(): RoyaleLocaleId | null {
  try {
    const doc = (globalThis as { document?: { documentElement?: { dataset?: Record<string, string | undefined> } } }).document;
    return doc?.documentElement?.dataset?.brand === "stonkpacks" ? "en" : null;
  } catch {
    return null;
  }
}

function ensureInitialized(): RoyaleLocaleId {
  if (currentLocaleId === null) {
    currentLocaleId = stockHostPinnedLocale() ?? readStoredLocale() ?? detectDefaultLocale();
    stampDocumentLang(currentLocaleId);
  }
  return currentLocaleId;
}

/** Current locale id, initializing from storage / navigator.languages on the
 *  first call. */
export function getRoyaleLocaleId(): RoyaleLocaleId {
  return ensureInitialized();
}

/** The current LOCALES entry (never undefined — falls back to English). */
export function getRoyaleLocaleInfo(): RoyaleLocaleInfo {
  const id = ensureInitialized();
  return findLocale(id) ?? LOCALES[0]!;
}

/** Text direction for a locale without touching the active locale store. */
export function getRoyaleLocaleDirection(id: RoyaleLocaleId): "rtl" | "ltr" {
  return findLocale(id)?.dir ?? "ltr";
}

/** Switch the active locale: persists, and fans out to every subscriber
 *  (React components re-render via useRoyaleLocale below). Unknown ids fall
 *  back to English rather than throwing. */
export function setRoyaleLocale(id: string): void {
  const normalized = findLocale(id)?.id ?? "en";
  if (normalized === currentLocaleId) return;
  currentLocaleId = normalized;
  writeStoredLocale(normalized);
  // MONEY FOLLOWS THE LANGUAGE, and this is the line that makes it do so.
  // stampDocumentLang writes <html lang>, which lib/formatUsd reads on every
  // call — so switching the copy to German switches the amounts to
  // "1.234,56 $" with nothing further to keep in sync. Until 2026-08-15 the
  // copy switched and the amounts stayed "$1,234.56".
  stampDocumentLang(normalized);
  for (const listener of listeners) {
    try {
      listener();
    } catch {
      /* a broken subscriber must never break another one */
    }
  }
}

/** Subscribe to locale changes. Returns an unsubscribe function. */
export function subscribeRoyaleLocale(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
/** Test-only page-reload seam. A real reload recreates this module singleton;
 * contract tests use this hook to exercise the same storage hydration path. */
export function __resetRoyaleLocaleForTests(): void {
  currentLocaleId = null;
  listeners.clear();
  unstampDocumentLangForTest();
}


/** Stamp <html lang> so the browser applies locale typography rules — most
 *  importantly Japanese kinsoku shori line breaking (the 2026-07-25 locale
 *  audit caught コレクション wrapping mid-word with a small ョ starting the
 *  next line; royaleStyles.css pairs this with `html[lang="ja"] { line-break:
 *  strict }`). Also correct a11y: screen readers pick the right voice.
 *
 *  RTL (2026-07-31): also stamp <html dir> from the locale registry's `dir`
 *  field. This single attribute is the whole direction switch: the UA flips
 *  every logical property (margin-inline-*, inset-inline-*, text-align:
 *  start/end) and the [dir="rtl"] override layer in royaleRtl.css handles the
 *  few physical holdouts (chevrons, directional transforms, progress
 *  directions). Deliberately PHYSICAL surfaces (the 3x3 board grid, the vault
 *  wheel) pin their own direction locally — see royaleRtl.css's header. */
function stampDocumentLang(id: string): void {
  try {
    if (typeof document !== "undefined") {
      document.documentElement.lang = id;
      document.documentElement.dir = findLocale(id)?.dir ?? "ltr";
    }
  } catch {
    /* SSR/test environments have no document */
  }
}

/** Test-only counterpart to stampDocumentLang. <html lang> is what
 *  lib/formatUsd reads to pick a money locale, so clearing the module's
 *  `currentLocaleId` without clearing the stamp would leave a test that
 *  switched to German handing German separators to the NEXT test. Clearing the
 *  stamp puts formatUsd back on its unannounced "en" default, which is what the
 *  reset seams below promise. */
function unstampDocumentLangForTest(): void {
  try {
    if (typeof document !== "undefined") {
      document.documentElement.lang = "";
      document.documentElement.dir = "ltr";
    }
  } catch {
    /* SSR/test environments have no document */
  }
}

// ---------------------------------------------------------------------------
// RTL LTR-ISLANDS (2026-07-31 RTL lane). In an RTL sentence, an interpolated
// LTR run can scramble visually: Arabic text around "$25 x10" renders the
// pieces out of order because "$", digits and "x" carry weak/mixed bidi
// classes. The fix is FIRST-STRONG ISOLATES around every interpolation point:
// FSI (U+2068) ... PDI (U+2069) makes the substituted value (a dollar amount,
// an English tier name, a player handle — possibly itself Arabic) order
// itself by its own first strong character without reordering the sentence
// around it. The wrap happens at the DICTIONARY layer, around the literal
// "{token}" placeholder, BEFORE the caller's plain .replace("{token}", x) —
// the braces stay intact inside the isolates, so every existing call site
// keeps working unchanged. LTR locales are returned untouched (zero cost, and
// their pinned byte-identical tests stay valid). JSX-composed runs get the
// same guarantee from the .royaleLtrIsland utility class (royaleRtl.css).

// A leading "#" joins the island: "#{n}" must render as "#1", never "1#"
// (the hash is bidi-neutral and hops sides on its own — caught on the ar
// cinema bar, "الجولة #{n}").
const TOKEN_RE = /#?\{[a-zA-Z0-9_]+\}/g;
/** Literal dollar amounts authored directly in dictionary values ($5, $25+,
 *  $2.5K, $1,000): the same scramble risk as interpolations ("$" is a weak
 *  bidi class and hops to the other side of the digits next to RTL text), so
 *  RTL locales isolate them too. */
const MONEY_RE = /\$\d[\d,.]*[kKmM]?\+?/g;

/** Wrap every literal {token} placeholder AND literal $-amount in FSI..PDI.
 *  Exported for the contract tests; production code reaches it through t(). */
export function isolateBidiTokens(value: string): string {
  return value
    .replace(TOKEN_RE, (m) => "\u2068" + m + "\u2069")
    .replace(MONEY_RE, (m) => "\u2068" + m + "\u2069");
}

/** Rewrite a literal "$5" / "$2.5K" authored into a dictionary value as the
 *  full amount THAT LOCALE writes. Takes the locale explicitly rather than
 *  reading the active one: dictionaryFor() may build any locale's table at any
 *  time (translateRoyaleText accepts an explicit localeId), and a cache built
 *  under the wrong ambient locale would pin German separators into the English
 *  table for the rest of the session.
 *
 *  RTL locales get the FSI..PDI island applied HERE, around the formatted
 *  result, because the formatted result no longer matches MONEY_RE: "1.234,56 $"
 *  and "1,234.56 US$" have no "$" glued to a digit for the second pass to find. */
function canonicalizeMoneyLiterals(value: string, localeId: RoyaleLocaleId, rtl: boolean): string {
  return value.replace(MONEY_RE, (literal) => {
    const match = /^\$([\d,.]+)([kKmM])?(\+)?$/.exec(literal);
    if (!match) return literal;
    const scale = match[2]?.toLowerCase() === "m" ? 1_000_000 : match[2] ? 1_000 : 1;
    const amount = Number(match[1]!.replaceAll(",", "")) * scale;
    if (!Number.isFinite(amount)) return literal;
    const formatted = `${formatUsdIn(amount, localeId).replace(/[\u2068\u2069]/g, "")}${match[3] ?? ""}`;
    return rtl ? "\u2068" + formatted + "\u2069" : formatted;
  });
}

/** Lazily built, per-locale cache with canonical full USD literals. */
const processedDictionaryCache: Partial<Record<RoyaleLocaleId, RoyaleDictionary>> = {};

function dictionaryFor(id: RoyaleLocaleId): RoyaleDictionary {
  const base = DICTIONARIES[id];
  let processed = processedDictionaryCache[id];
  if (!processed) {
    processed = {};
    const rtl = findLocale(id)?.dir === "rtl";
    for (const [k, v] of Object.entries(base)) {
      const canonical = canonicalizeMoneyLiterals(v, id, rtl);
      processed[k] = rtl ? isolateBidiTokens(canonical) : canonical;
    }
    processedDictionaryCache[id] = processed;
  }
  return processed;
}

/**
 * Read a key from the ACTIVE locale's dictionary, falling back to English,
 * then to the raw key itself (so a missing translation is visibly wrong in
 * the UI rather than silently blank). Plain function, not a hook — call it
 * from anywhere, any number of times per render. A component that displays
 * t()-derived text must separately call useRoyaleLocale() so it re-renders
 * when the locale changes (see MODULE API note above). RTL locales read
 * through the token-isolating layer above.
 */
export function translateRoyaleText(
  key: string,
  params: RoyaleTranslationParams = {},
  localeId: RoyaleLocaleId = ensureInitialized(),
): string {
  const dict = dictionaryFor(localeId);
  const value = dict[key];
  const fallback = DICTIONARIES.en[key];
  let translated = value ?? fallback ?? key;
  for (const [name, rawValue] of Object.entries(params)) {
    const renderedValue = String(rawValue);
    const cleanValue = renderedValue.replace(/[\u2068\u2069]/g, "");
    const isolatedToken = `\u2068{${name}}\u2069`;
    translated = translated.split(isolatedToken).join(`\u2068${cleanValue}\u2069`);
    translated = translated.split(`{${name}}`).join(renderedValue);
  }
  return translated;
}

/** Read a key from the active dictionary, preserving the original t() API. */
export function t(key: string): string {
  return translateRoyaleText(key);
}

/** React hook: subscribes to locale changes (useSyncExternalStore) and
 *  returns the current locale id/info plus the setter. Any component that
 *  renders t()-derived text should call this to force a re-render on
 *  switch, even if it never reads the returned value. */
export function useRoyaleLocale(): {
  localeId: RoyaleLocaleId;
  locale: RoyaleLocaleInfo;
  setLocale: (id: string) => void;
} {
  const localeId = useSyncExternalStore(subscribeRoyaleLocale, getRoyaleLocaleId, getRoyaleLocaleId);
  const locale = findLocale(localeId) ?? LOCALES[0]!;
  return { localeId, locale, setLocale: setRoyaleLocale };
}

/** Test-only: reset the module store between unit tests. Also puts the money
 *  formatter back to its unannounced default, so a test that switched to de
 *  cannot leave the next test's amounts in German separators. */
export function resetRoyaleLocaleForTest(): void {
  currentLocaleId = null;
  listeners.clear();
  unstampDocumentLangForTest();
}
