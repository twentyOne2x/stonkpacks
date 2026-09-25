// Hebrew (עברית): "arena" segment. Same key set as en/arena.ts. Values are modern Israeli Hebrew.
//
// See he/core.ts for the binding GLOSSARY, register, and brand-term decisions.
// REGISTER: modern Israeli Hebrew consumer-software register. Prefer gender-neutral
// infinitive imperatives, noun phrases, and present tense without a pronoun. Where
// direct address is unavoidable, use masculine singular, the mainstream Israeli app convention.
// PLURALS: the schema has only .one / .other. Hebrew maps singular to .one and plural
// to .other, using the plural form for n=2 as well, with no dual form.
// PACK BRAND: the game loanword is פאק / פאקים, never חבילה / חבילות or חפיסה / חפיסת.
// Tier names Starter, Elite, Legendary, Grail, Mythic and brand names stay in Latin.
// BIDI-WATCH: none.
// QUALITY: machine-assisted single-pass translation (codex worker, 2026-07-31),
// glossary-enforced; flagged for native-speaker review.
// QUALITY PASS 2 (2026-08-01): full re-read against en; homonym/calque/MT-artifact fixes.
//

export default {
  "arena.you": "אתה",
  "arena.youAvatarLetter": "Y",
  "arena.common.card": "קלף",
  "arena.common.cards": "קלפים",
  "arena.matchLabel": "משחק #{n}",
  "arena.pageTitle": "זירת קלפים",
  "arena.backToBoard": "→ חזרה ללוח",

  "arena.rail.ariaLabel": "האוסף שלך",
  "arena.rail.heading": "האוסף שלך",
  "arena.rail.practiceNote": "ערכת תרגול. זכה בסיבובים בלוח כדי למלא את הסרגל הזה בקלפים שלך.",
  "arena.rail.emptyNote": "אין קלפים ביד. זכה בקופה כדי לקבל את חלקך בחזרה.",
  "arena.rail.enterWheel": "הכנס לגלגל",
  "arena.rail.armSnipe": "הפעל צליפה",
  "arena.rail.hint": "לחץ פעמיים על קלף כדי להמר עליו. לחלופין, בחר קלפים ולחץ על \"הכנס לגלגל\". מקש הרווח בוחר, ו-A מפעיל את הצליפה.",

  "arena.railCard.armedSuffix": "מוכן לצליפה.",
  "arena.railCard.hint": "מקש הרווח בוחר אותו, A מפעיל את הצליפה. לחץ פעמיים כדי להמר עליו בזירה.",
  "arena.railCard.armedTag": "חמוש",

  "arena.snipe.trayHeading": "צליפה מוכנה",
  "arena.snipe.disarm": "השבת",
  "arena.snipe.firesAt": "מופעלת בעוד 2s",
  "arena.snipe.carries": "עוברת למשחק הבא",

  "arena.board.sectionAriaLabel": "גלגל הזירה",
  "arena.board.noCap": "אין תקרת קלפים. השעון הוא הנעילה היחידה.",
  "arena.board.wheelDecides": "הגלגל מחליט",
  "arena.board.nextMatchLabel": "המשחק הבא בעוד",
  "arena.board.potLabel": "קופה",
  "arena.board.wheelAriaEnter": "הכנס לגלגל {count} {cardWord} שנבחרו",
  "arena.board.wheelAriaIdle": "הגלגל. בחר קלפים מהאוסף שלך כדי להכניס אותם.",
  "arena.board.youWin": "אתה מנצח",
  "arena.board.nameWins": "{name} זוכה",
  "arena.board.emptyWheelNote": "הגלגל פתוח. הימר על קלפים, לא על מזומן: חלקך בערך קובע את הקשת ואת הסיכוי שלך. המרדף מקבל 0%. הפרוטוקול מחיל כלל עמלה של 7% בקלפים שלמים; הזוכה מקבל את כל שאר הקלפים.",
  "arena.board.tableHint": "הקלפים שלך נעים על הגלגל ומייצגים את חלקך בערך. הקשת שלך קובעת את הסיכוי שלך.",
  "arena.board.resultsLink": "ראה תוצאות סיבוב אחרונות ←",

  "arena.clock.locked": "נעול",
  "arena.clock.settled": "התחשבנן",
  "arena.clock.locksIn": "ננעל ב-",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "סגור את הקולנוע",
  "arena.cinema.closeTitle": "סגור (Esc)",
  "arena.cinema.beatCopy.contestants": "המתמודדים",
  "arena.cinema.beatCopy.spin": "הסיבוב",
  "arena.cinema.beatCopy.settle": "ההתחשבנות",
  "arena.cinema.beatCopyShort.contestants": "שחקנים",
  "arena.cinema.beatCopyShort.spin": "סיבוב",
  "arena.cinema.beatCopyShort.settle": "התחשבנות",
  "arena.cinema.contestantsAriaLabel": "המתמודדים",
  "arena.cinema.contestantsHeadline": "המתמודדים",
  "arena.cinema.oddsToWin": "{pct}% סיכוי לזכות",
  "arena.cinema.hintContestants": "הגלגל מחליט. לחץ כדי להסתובב עכשיו.",
  "arena.cinema.spinAriaLabel": "סיבוב הגלגל",
  "arena.cinema.lockedOn": "נעול על",
  "arena.cinema.hintSpin": "לחץ כדי לדלג על הסיבוב.",
  "arena.cinema.settleAriaLabel": "הסדר",
  "arena.cinema.winnerTag": "זוכה",
  "arena.cinema.youTakePot": "אתה מקבל את הקופה",
  "arena.cinema.takesPot": "מקבל את הקופה",
  "arena.cinema.shelfWinner": "לזוכה",
  "arena.cinema.shelfChase": "המרדף",
  "arena.cinema.shelfProtocol": "פרוטוקול",
  "arena.cinema.smallPotNote": "המרדף לא מקבל דבר. כלל ה-7% של הפרוטוקול בחר {count} {cardWord}; הזוכה מקבל את כל שאר הקלפים.",
  "arena.cinema.resultsLink": "ראה את התוצאות האחרונות של הסיבוב",
  "arena.cinema.hintSettle": "לחץ בכל מקום כדי לחזור לזירה.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} לזוכה",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "הימור אוטומטי בלחיצה כפולה?",
  "arena.doubleBid.body": "לחץ פעמיים על קלף באוסף שלך כדי להמר עליו ישירות בזירה. להפעיל זאת?",
  "arena.doubleBid.enable": "הפעל",
  "arena.doubleBid.dismiss": "לא עכשיו",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "מתחבר אל CARD ARENA",
  "arena.backend.loadingBody": "בודקים את הגרסה הפעילה של Arena ואת מושב השחקן שלך…",
  "arena.backend.loadingCollection": "בודקים את האוסף שלך…",
  "arena.backend.mainnetPreparingTitle": "זירת MAINNET מחוברת",
  "arena.backend.mainnetPreparingBody": "הגרסה המדויקת הזו לקריאה בלבד תקינה. מימון, רכישת קלפים, כניסה, הגרלה וסליקה נשארים מושבתים.",
  "arena.backend.mainnetPreparingCollection": "לא נרכשו ולא הועברו קלפים ב-Mainnet. הזירה תישאר לקריאה בלבד עד שהמלאי שאושר בנפרד יהיה מוכן.",
  "arena.backend.mainnetRelease": "גרסה {commit} · פריסה {deployment} · אפס חתימות, שידורים, השפעות או כפילויות",
  "arena.backend.unavailableTitle": "CARD ARENA בעדכון",
  "arena.backend.unavailableBody": "הכניסה מושהית עד שגרסת המשחק המדויקת הזו תהיה זמינה. הקלפים שלך לא זזו.",
  "arena.backend.unavailableCollection": "האוסף אינו זמין בזמן שהארנה מתעדכנת.",
  "arena.backend.connectTitle": "התחברו כדי לשחק",
  "arena.backend.connectBody": "כדי לטעון את הקלפים המשויכים לספק ולהיכנס לגלגל נדרש מושב Privy מאומת.",
  "arena.backend.connectCollection": "חברו את מושב השחקן שלכם כדי לטעון את הקלפים.",
  "arena.backend.retry": "נסו שוב",
} as Record<string, string>;
