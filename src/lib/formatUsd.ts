// Canonical customer-facing USD formatter.
//
// Every rendered amount goes through this module so whole dollars stay clean,
// cents stay explicit, and RTL documents keep the currency as an isolated LTR
// island. The document check is deliberately lazy so the same formatter is
// safe in SSR, node tests, canvas labels, and the browser.
//
// ---------------------------------------------------------------------------
// LOCALE (fix 2026-08-15). This module used to build both formatters against
// the literal "en-US", and 97 files in apps/web/src route every customer-facing
// amount through it — so a $1,234 pot painted "$1,234" in all 20 languages.
// In nine of them (de fr it pt-BR id tr vi uk pl) "," is the DECIMAL
// separator, so that string reads as ONE DOLLAR TWENTY-THREE: a 1000x misread
// with the same glyphs, no error and no way for the player to notice.
// (es-419 groups like en-US and was never affected, despite being named in the
// original report; fr/uk/vi/pl were affected and were not named. Measured, not
// assumed — see formatUsdLocale.contract.test.ts.)
//
// The active locale is read from <html lang>, which royaleI18n.stampDocumentLang
// writes on every language switch. Reading the live document (rather than
// importing royaleI18n) is deliberate: this module is imported BY royaleI18n,
// so an import back would be a cycle, and the `dir` read below already uses
// exactly this signal.
//
// THREE OPTIONS ARE LOAD-BEARING, ALL THREE FOR WIDTH:
//   currencyDisplay:"narrowSymbol"  keeps the "$" glyph instead of letting a
//     locale expand it to "US$"/"USD"/"$US". Money strings that grow trigger
//     the owner-banned clipping class ("$200" painting as "$20"); narrowSymbol
//     holds the widest LTR locale to +1 character over en. It also keeps the
//     dollar sign a dollar sign, which the i18n copy rule requires — this is a
//     USD product and the currency is never swapped for a local one.
//   numberingSystem:"latn"          pins Latin digits so width is deterministic
//     across ICU versions (today's ICU already picks latn for ar/hi/th; this
//     stops a future ICU from silently switching them to another digit set and
//     re-flowing every money cell).
//   style:"currency"                keeps the symbol's POSITION per locale
//     (de/fr/vi/uk render it trailing), which is the half of the fix that
//     separators alone do not cover.
//
// Formatters are cached per locale: formatUsd runs on the bid hot path (bots
// bid roughly every 0.85s and the board re-renders), and constructing an
// Intl.NumberFormat per call is expensive enough to show up there.
//
// ---------------------------------------------------------------------------
// WHY THERE IS NO setUsdFormatLocale() PUSH-STATE (reconciliation, 2026-08-15)
//   The i18n-coverage branch reached the same fix through a module-level
//   `activeUsdTag` that royaleI18n pushed into on every switch. That is one
//   more copy of a fact the document already holds: stampDocumentLang() writes
//   <html lang> on the LINE BEFORE, so the pushed tag and the stamped lang can
//   only ever disagree by way of a bug. Reading the document keeps a single
//   source of truth and cannot be left un-pushed by a new caller. Its two tag
//   overrides are preserved without the map: "en" formats byte-identically to
//   "en-US", and "ar" gets Latin digits from numberingSystem:"latn" above —
//   which pins hi/th as well, where the tag override did not.
//
// The pinned per-locale expectations live in
// tools/qa-harness/adapters/royale/i18nContract.mjs (EXPECTED_MONEY) and are
// checked against the real tree by `scripts/royaleI18nGate.mts`.

const DEFAULT_MONEY_LOCALE = "en";

/** The locale royaleI18n stamped onto <html lang>, or "en" before it runs. */
function activeMoneyLocale(): string {
  try {
    if (typeof document !== "undefined") {
      const lang = document.documentElement.lang;
      if (lang) return lang;
    }
  } catch {
    // SSR and node test environments have no document.
  }
  return DEFAULT_MONEY_LOCALE;
}

const WHOLE_FORMATTERS = new Map<string, Intl.NumberFormat>();
const CENTS_FORMATTERS = new Map<string, Intl.NumberFormat>();

function moneyFormatter(locale: string, withCents: boolean): Intl.NumberFormat {
  const cache = withCents ? CENTS_FORMATTERS : WHOLE_FORMATTERS;
  const cached = cache.get(locale);
  if (cached) return cached;
  const digits = withCents ? 2 : 0;
  let made: Intl.NumberFormat;
  try {
    made = new Intl.NumberFormat(locale, {
      currency: "USD",
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: digits,
      minimumFractionDigits: digits,
      numberingSystem: "latn",
      style: "currency",
      useGrouping: locale === "it" ? true : undefined,
    });
  } catch {
    // An engine without narrowSymbol/numberingSystem support, or an unknown
    // tag: fall back rather than let a money string fail to render at all.
    // The first fallback keeps THIS locale's separators (only the symbol shape
    // is surrendered); only an unusable tag falls all the way back to en.
    try {
      made = new Intl.NumberFormat(locale, {
        currency: "USD",
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
        style: "currency",
        useGrouping: locale === "it" ? true : undefined,
      });
    } catch {
      made = new Intl.NumberFormat(DEFAULT_MONEY_LOCALE, {
        currency: "USD",
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
        style: "currency",
        useGrouping: locale === "it" ? true : undefined,
      });
    }
  }
  cache.set(locale, made);
  return made;
}

function bidiIsolateMoneyIfRtl(formatted: string): string {
  try {
    if (typeof document !== "undefined" && document.documentElement.dir === "rtl") {
      return "⁨" + formatted + "⁩";
    }
  } catch {
    // SSR and node test environments have no document.
  }
  return formatted;
}

/**
 * Full USD display in an EXPLICIT locale. Never abbreviates, rounds away cents,
 * or leaks bidi order.
 *
 * REQUIRED BY THE DICTIONARY LAYER, and not a convenience. royaleI18n's
 * canonicalizeMoneyLiterals rewrites the "$5"/"$200" literals authored into
 * translation values, and it CACHES the processed table per locale — while
 * translateRoyaleText may build ANY locale's table at ANY time, including
 * while another locale is the active one. Formatting those through the ambient
 * <html lang> would pin German separators into the cached English table for
 * the rest of the session. The active-locale reader below is right for the 97
 * files that render the CURRENT locale; this one is right when the locale is
 * known independently of it.
 */
export function formatUsdIn(value: number, localeId: string): string {
  const hasCents = Math.round(value * 100) % 100 !== 0;
  return bidiIsolateMoneyIfRtl(moneyFormatter(localeId || DEFAULT_MONEY_LOCALE, hasCents).format(value));
}

/** Full USD display in the ACTIVE locale. */
export function formatUsd(value: number): string {
  const hasCents = Math.round(value * 100) % 100 !== 0;
  return bidiIsolateMoneyIfRtl(moneyFormatter(activeMoneyLocale(), hasCents).format(value));
}

/**
 * Where the active locale puts the currency symbol, as a [prefix, suffix] pair.
 * Derived from the formatter rather than guessed, so the compact helper below
 * cannot disagree with formatUsd about which side the "$" belongs on.
 */
function currencyAffixes(locale: string): [string, string] {
  try {
    const parts = moneyFormatter(locale, false).formatToParts(0);
    // Everything BEFORE the first numeric part and everything AFTER the last one. Slicing at the
    // currency part instead drops the separator beside it: de writes "0 $" as
    // [integer, literal(nbsp), currency], so a slice starting at `currency` returns "$" and the
    // compact helper prints "35,0K$" where formatUsd prints "1.234 $" — two formatters
    // disagreeing about the same amount, which is the whole thing this module exists to prevent.
    const isNumber = (p: Intl.NumberFormatPart) => p.type !== "currency" && p.type !== "literal";
    const first = parts.findIndex(isNumber);
    if (first < 0) return ["$", ""];
    let last = first;
    for (let i = parts.length - 1; i >= 0; i -= 1) {
      if (isNumber(parts[i]!)) {
        last = i;
        break;
      }
    }
    return [parts.slice(0, first).map((p) => p.value).join(""), parts.slice(last + 1).map((p) => p.value).join("")];
  } catch {
    /* fall through to the en-US shape */
  }
  return ["$", ""];
}

/**
 * Legacy compact helper kept for non-rendering compatibility. Customer-facing
 * surfaces must use formatUsd so a displayed amount is always complete.
 *
 * The abbreviation itself ("K"/"M") stays English on purpose: it is a fixed
 * two-character ledger token, not prose. What DOES follow the locale is the
 * decimal separator and which side the "$" sits on, so this helper can never
 * disagree with formatUsd about the shape of an amount. Left en-US-only (as it
 * was until this fix) it would print "$35.0K" beside formatUsd's "35.000 $" on
 * the same German screen.
 */
export function formatUsdCompact(value: number): string {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  const locale = activeMoneyLocale();
  const [prefix, suffix] = currencyAffixes(locale);
  const abbreviate = (scaled: number, digits: 0 | 1) => {
    try {
      return new Intl.NumberFormat(locale, {
        maximumFractionDigits: digits,
        minimumFractionDigits: digits,
        numberingSystem: "latn",
      }).format(scaled);
    } catch {
      return scaled.toFixed(digits);
    }
  };
  if (abs >= 1_000_000) {
    return bidiIsolateMoneyIfRtl(`${sign}${prefix}${abbreviate(abs / 1_000_000, abs >= 10_000_000 ? 0 : 1)}M${suffix}`);
  }
  if (abs >= 10_000) {
    return bidiIsolateMoneyIfRtl(`${sign}${prefix}${abbreviate(abs / 1000, abs >= 100_000 ? 0 : 1)}K${suffix}`);
  }
  return formatUsd(value);
}
