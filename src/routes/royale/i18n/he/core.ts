// Hebrew (עברית): "core" segment. Same key set as en/core.ts. Values are modern Israeli Hebrew.
//
// GLOSSARY (binding across all he segments, fixed before translation):
//   round = סיבוב; pool/pot = קופה; tile = משבצת; backer(s) = תומך/תומכים;
//   bet/bid/stake = הימור; sell back = מכירה חזרה; buyback = רכישה חוזרת;
//   a pack's pull = שליפה; winner draw = הגרלת הזוכה; The Chase = המרדף;
//   vault = כספת; graded/slab card = קלף מדורג; rake = עמלה; the house = הבית;
//   payout split = חלוקת התשלום; replay = שידור חוזר; loose change = עודף קטן;
//   odds = סיכויים.
// PACK BRAND: פאק / פאקים is the established Israeli gaming loanword, used by
// FIFA and gaming communities in phrases such as פתיחת פאקים. It is the
// English-slang homograph, but game context disambiguates it. It is never the
// native parcel/deck words חבילה / חבילות or חפיסה / חפיסת, which are banned
// for the game pack. Tier names Starter, Elite, Legendary, Grail, Mythic stay English.
// REGISTER: modern Israeli Hebrew, informal and direct. Prefer gender-neutral
// constructions, especially infinitive imperatives on buttons, noun phrases, and
// present tense without a pronoun. Where direct address is unavoidable, use masculine
// singular consistently, the mainstream Israeli consumer-app convention.
// PLURALS: the schema has only .one / .other. Hebrew maps singular to .one and
// plural to .other, using the plural form for n=2 as well, with no dual form.
// BIDI-WATCH: none.
// QUALITY: machine-assisted single-pass translation (codex worker, 2026-07-31),
// glossary-enforced; flagged for native-speaker review.
// QUALITY PASS 2 (2026-08-01): full re-read against en; homonym/calque/MT-artifact fixes.
//

export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "שפה",
  "settings.languageSectionAria": "הגדרות שפה",
  "settings.languageSearchPlaceholder": "חיפוש שפות",
  "settings.languageNoResults": "אין שפות תואמות",
  "settings.languageHint": "השינוי חל מיד. חפש לפי שם או סוג כדי לסנן.",
  "settings.languageInputAria": "שפה, חיפוש ובחירה",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "קבוצות הגדרות",
  "settings.searchPlaceholder": "חיפוש בהגדרות",
  "settings.searchClear": "ניקוי החיפוש",
  "settings.searchResultsAria": "הגדרות תואמות",
  "settings.searchNoResults": "אין התאמה ל־„{query}”. נסו את שם הדבר שאתם רוצים לשנות.",
  "settings.backToGroups": "כל ההגדרות",
  "gear.cards.heading": "קלפים",
  "gear.cards.sectionAria": "הגדרות קלפים",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "הימורים {bids} · מינימום {amount}",
  "gear.section.summary.display": "חלוניות {popups} · דיוקנאות {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "מוזיקה {music} · אפקטים {sfx}",
  "gear.section.summary.autosell": "{count} כללי מכירה אוטומטית פעילים",
  "gear.section.summary.hotkeys": "{count} קיצורי הימור מוגדרים",

  // --- Shared words --------------------------------------------------------
  "common.on": "מופעל",
  "common.off": "כבוי",
  "common.set": "הגדר",
  "common.clear": "נקה",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "משבצת {n}",
  "common.tileShort": "מ{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "הימורים",
  "gear.betting.sectionAria": "הגדרות הימורים",
  "gear.betting.provider.label": "ספק החבילה",
  "gear.betting.provider.automatic": "אוטומטי (Collector Crypt מועדף)",
  "gear.betting.provider.hint": "המצב האוטומטי מעדיף את Collector Crypt כשהוא זמין ויכול להשתמש רק בחלופה מאומתת. בחירה בספק מסוים היא מחייבת: אם הוא אינו זמין, ההימור נדחה.",
  "gear.betting.provider.automaticHint": "אוטומטי · Collector Crypt מועדף",
  "gear.betting.provider.strictHint": "{provider} בלבד · ללא חלופה",
  "gear.betting.provider.unavailable": "{provider} (לא זמין)",
  "gear.betting.provider.selectedUnavailable": "{provider} אינו זמין. הימורים מחייבים נדחים והבחירה לעולם אינה מוחלפת.",
  "gear.betting.provider.actual": "בוצע על ידי {provider}",
  "gear.betting.provider.accepted": "התקבל על ידי {provider}",
  "gear.betting.disableBids.label": "השבת הימורים",
  "gear.betting.disableBids.hint":
    "נועל את ההימורים שלך: הקשות על משבצות מפסיקות להציב הימורים, כך שאפשר לצפות (או להעביר את המסך) בלי לחתום או להמר בטעות. שאר המשחק נשאר פעיל.",
  "gear.betting.minBid.label": "מינימום הימור",
  "gear.betting.minBid.hint":
    "ההימור הקטן ביותר שאפשר להציב בהקשה. סכום ההימור שלך לא יכול לרדת מזה, כך שהקשה מהירה לא תהמר על פחות ממה שהתכוונת (מינימום $5 למניעת הימורי זיוף).",
  "gear.betting.upgradeCap.label": "תקרת עלות שדרוג",
  "gear.betting.upgradeCap.placeholder": "ללא הגבלה",
  "gear.betting.upgradeCap.hint":
    "הסכום המרבי שעלול לעלות לך קליק אחד על שדרוג. שדרוגים יקרים יותר יופיעו באפור, כך שמשבצת עמוסה לא תפתיע אותך בחשבון ענק.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "תצוגה",
  "gear.display.sectionAria": "הגדרות תצוגה",
  "gear.display.chipFloats.label": "בועות הימורים",
  "gear.display.chipFloats.hint": "הצג את הבועות הקטנות \"+$X · שם\" שצפות מעלה כשמישהו מהמר על משבצת.",
  "gear.display.floatThreshold.label": "הסתר הימורים מתחת ל-",
  "gear.display.floatThreshold.placeholder": "הצג כל הימור",
  "gear.display.floatThreshold.hint":
    "הצג בועה רק עבור הימורים בסכום הזה ומעלה. נקה את השדה (או הגדר $0) כדי להציג כל הימור, וכך הלוח יישאר רגוע כשנוחתים עליו הרבה הימורים קטנים.",
  "gear.display.hidePortraits.label": "הסתר דיוקנאות של שחקנים",
  "gear.display.hidePortraits.hint": "מסתיר את מעגלי הדיוקן של השחקנים האחרים במשבצות. הסמן שלך נשאר גלוי.",
  "gear.display.fullscreenLandscape.label": "מסך מלא לרוחב",
  "gear.display.fullscreenLandscape.hint":
    "בנייד, ההקשה הבאה לרוחב מסתירה את סרגל הדפדפן. ב-Safari באייפון הסרגל רק מצטמצם; הוספה למסך הבית מעניקה מסך מלא אמיתי.",
  "gear.display.replayTour.label": "הפעלת סיור הפתיחה מחדש",
  "gear.display.replayTour.hint": "פותח שוב את סיור הפתיחה מהשלב הראשון.",
  "gear.display.couch.label": "טקסט גדול (טלוויזיה/ספה)",
  "gear.display.headerCollapse.label": "כווץ את הכותרת",
  "gear.display.headerCollapse.hint": "מקפל את הסרגל העליון כך שהלוח והקלפים ימלאו את המסך. החץ בכותרת מחזיר אותו.",
  "gear.display.couch.hint":
    "טקסט גדול יותר לקריאה ברחבי המשחק: צ'אט, מסמכים, תוויות ונתוני סכומים, בגודל שמתאים למשחק מהספה. הלוח שומר על הפריסה שלו. מופעל גם באמצעות ?couch=1 בכתובת.",
  "gear.display.couch.suggested": "זה נראה כמו דפדפן טלוויזיה או קונסולה. טקסט גדול נוצר עבור מסך זה.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "חשיפות",
  "gear.reveals.sectionAria": "הגדרות חשיפה",
  "gear.reveals.turbo.label": "חשיפת טורבו",
  "gear.reveals.turbo.hint":
    "מאיץ את מופע החשיפה כדי להגיע לתוצאה מהר יותר. רגעים גדולים עדיין מקבלים את הזמן שלהם. כבוי כברירת מחדל; לכל השאר מתנגנת ההצגה המלאה.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "צליל",
  "gear.sound.sectionAria": "הגדרות סאונד",
  "gear.sound.sfx.label": "אפקטים קוליים",
  "gear.sound.sfx.hint":
    "קליקים של צ'יפים, פתיחה ונעילה של סיבוב, גלגל הזוכה ומופע החשיפה. הכול מסונתז בדפדפן, בלי טעינה.",
  "gear.sound.music.label": "מוזיקה",
  "gear.sound.music.hint":
    "מלווה את הסיבוב: נבנית במהלך ההימורים, מתגברת בשניות האחרונות ונחלשת לקראת החשיפה. מתחילה אחרי ההקשה או לחיצת המקש הראשונה ומושהית במעבר בין כרטיסיות.",
  "gear.sound.musicStyle.label": "סגנון מוזיקה",
  "gear.sound.musicStyle.piano": "פסנתר רגוע",
  "gear.sound.musicStyle.snowmelt": "הפשרת שלגים",
  "gear.sound.musicStyle.hearthfire": "אש האח",
  "gear.sound.musicStyle.grotto": "מערה מוזהבת",
  "gear.sound.musicStyle.arcade": "ארקייד מהיר",
  "gear.sound.musicStyle.kart": "מרוץ קארטינג",
  "gear.sound.musicStyle.galaxy": "ואלס כוכבים",
  "gear.sound.musicStyle.hint": "פסנתר רגוע הוא מנגינה רכה ונינוחה. ארקייד מהיר הוא בהיר וקצבי. הסגנון מתחלף בתיבה הבאה, באמצע הסיבוב.",
  "gear.sound.musicVolume.label": "עוצמת הקול של מוזיקה",
  "gear.sound.sfxVolume.label": "עוצמת הקול של אפקטים",
  "gear.sound.volume.label": "עוצמה",
  "gear.sound.volume.aria": "עוצמה ראשית",
  "gear.sound.volume.hint": "עוצמה ראשית אחת לאפקטים ולמוזיקה יחד.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "כללי מכירה אוטומטית",
  "gear.autosell.sectionAria": "כללי מכירה אוטומטית",
  "gear.autosell.intro":
    "הגדר פעם אחת, וכל זכייה שעומדת בתנאים תימכר אוטומטית בחזרה: בלי בקשת שמירה או מכירה. כל מה שלא עומד בתנאים עדיין ישאל אותך, כמו היום.",
  "gear.autosell.everyWin.label": "מכירה אוטומטית בכל ניצחון",
  "gear.autosell.everyWin.hint":
    "פדה כל קלף שזכית בו לפי תעריף הרכישה החוזרת ברגע שהוא מתקבל, בלי בקשה לבחור שמירה או מכירה. קלפי Grail לעולם אינם נמכרים אוטומטית. זהו קיצור הדרך להפעלת כל ארבעת מתגי הנדירות שלמטה.",
  "gear.autosell.belowValue.label": "מכור אם הערך נמוך מ-",
  "gear.autosell.placeholderOff": "כבוי",
  "gear.autosell.rarity.label": "מכירה לפי נדירות",
  "gear.autosell.rarity.aria": "מכירה אוטומטית לפי נדירות",
  "gear.autosell.rarity.hint":
    "רצועות הנדירות של CollectorCrypt נקראות ממכונת הפאק שממנה הגיע כל קלף. טווח הדולר המדויק של רצועה משתנה לפי פאק, לכן קלף של $200 יכול להיות נדיר במכונה אחת ונפוץ במכונה יקרה יותר.",
  "gear.autosell.nonVintage.label": "מכור קלפים שאינם וינטג'",
  "gear.autosell.belowGrade.label": "מכור אם הדירוג נמוך מ-",
  "gear.autosell.grader.label": "מכירה לפי מדרג",
  "gear.autosell.grader.hint":
    "השאר מדרג מסוים ובצע מכירה אוטומטית רק של הקלפים שלו שדורגו מתחת למספר שהגדרת. בטל סימון של מדרג כדי למכור אוטומטית כל קלף שלו. בטל סימון של כולם כדי למכור אוטומטית כל מה שתזכה בו. מדרגים משתמשים בסולמות שונים, לכן סף המכירה של כל אחד עומד בפני עצמו.",
  "gear.autosell.grader.aria": "מכירה אוטומטית לפי מדרג",
  "gear.autosell.grader.keep": "שמור",
  "gear.autosell.grader.sellAll": "מכור הכול",
  "gear.autosell.grader.other": "אחר / לא מדורג",
  "gear.autosell.grader.placeholderKeepAll": "שמור את כל",
  "gear.autosell.grader.placeholderSellAll": "מכור הכול",
  "gear.autosell.grader.ariaGradeSuffix": "מכור מתחת לדירוג",
  "gear.autosell.summaryActive": "פעיל:",
  "gear.autosell.summaryNone": "לא נקבעו כללי מכירה אוטומטית. כל ניצחון עדיין מבקש ממך לשמור או למכור.",
  "gear.autosell.turnOffAll": "כבה הכול",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "מקשי קיצור להימורים",
  "gear.hotkeys.sectionAria": "מקשי קיצור להימורים",
  "gear.hotkeys.intro":
    "לחץ על מקש המשבצת כדי להמר עליה בסכום ההימור הנוכחי. אין צורך בעכבר. לחץ על מקש למטה, ואז לחץ על המקש הרצוי. שתי משבצות לא יכולות לחלוק מקש, לכן הקצאה מחדש מעבירה אותו. Esc מבטל, Backspace מנקה.",
  "gear.hotkeys.enabled.label": "הימורים במקשי מספרים",
  "gear.hotkeys.enabled.hintOn": "המקשים פעילים בזמן ההימורים. לחיצה על מקש של משבצת מציבה את ההימור מיד.",
  "gear.hotkeys.enabled.hintOff": "המקשים כבויים. לחיצה על מקש של משבצת אינה מציבה הימור.",
  "gear.hotkeys.enabled.hintUnset": "עדיין לא הוחלט. הפעל מקשים כאן, או הקש על מקש משבצת במהלך הימורים ובחר הפעל.",
  "gear.hotkeys.listAria": "מקשי קיצור להימורים במשבצות",
  "gear.hotkeys.tileLabel": "משבצת {n}",
  "gear.hotkeys.pressKeyPrompt": "הקש על מקש...",
  "gear.hotkeys.setKey": "הגדר מפתח",
  "gear.hotkeys.clear": "נקה",
  "gear.hotkeys.ariaPressToBind": "הקש על מקש כדי לאגד משבצת {n}",
  "gear.hotkeys.ariaShortcut": "קיצור הדרך של משבצת {n}: {key}. לחץ כדי להחליף.",
  "gear.hotkeys.ariaNoShortcut": "למשבצת {n} אין קיצור דרך. לחץ כדי להגדיר.",
  "gear.hotkeys.ariaClearShortcut": "נקה את קיצור הדרך של משבצת {n}",
  "gear.hotkeys.unboundWarning": "לא הוגדר מפתח עבור {list}. למשבצות האלה אין קיצור מקלדת עד שתגדיר אחד.",
  "gear.hotkeys.resetButton": "איפוס לברירות המחדל",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "מקטעי attn ROYALE",
  "nav.board": "לוח",
  "nav.results": "תוצאות",
  "nav.rankingsFull": "דירוגים",
  "nav.rankingsShort": "דירוג",
  "nav.collectionFull": "אוסף",
  "nav.collectionShort": "קלפים",
  "nav.profile": "פרופיל",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "לוח",
  "mobileNav.results": "תוצאות",
  "mobileNav.ladder": "סולם",
  "mobileNav.collection": "אוסף",
  "mobileNav.profile": "פרופיל",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "מסמכים",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "מעבדת attn ROYALE",
  "shell.header.statusAria": "סטטוס הסיבוב",
  "shell.header.collapse": "הסתר את הכותרת",
  "shell.header.expand": "הצג את הכותרת",
  "shell.header.round": "סיבוב #{n}",
  "shell.header.turboTitle": "תזמון סיבוב מואץ",
  "shell.header.turboBadge": "טורבו",
  "shell.metrics.aria": "סיכום הסיבוב",
  "shell.metrics.totalPool": "סה\"כ קופה",
  "shell.metrics.packsLive": "פאקים בשידור חי",
  "shell.metrics.yourStake": "הימור שלך",
  "shell.metrics.selectedBet": "הימור שנבחר",
  "shell.board.aria": "לוח attn ROYALE",
  "shell.board.label": "לוח",
  "shell.board.phaseOpen": "לחץ על משבצת כלשהי כדי לתמוך בה; ההימור ייבנה מחדש לערימת הפאק הטובה ביותר",
  "shell.board.phaseLock": "נעול · הפאקים נפתחים",
  "shell.board.phaseSettled": "הסיבוב הסתיים",
  "shell.board.metaOpen": "{pool} קופה · 3% מזינים את המרדף · הפאקים נפתחים עם הנעילה",
  "shell.board.metaClosed": "משבצת אחת זוכה בקופה לפי סיכויים משוקללים שניתן לאמת.",
  "shell.board.reopenReveal": "↗ פתח מחדש את הגילוי",
  "shell.connectNudge":
    "היכנס למשחק והפקד כדי להתחיל לתמוך במשבצות. הסיבובים ממשיכים לרוץ ברקע.",
  "shell.decision.cardFallback": "הקלף שלך",
  "shell.mobile.close": "סגור",
  "shell.mobile.chat": "צ'אט",
  "shell.mobile.chatOpenAria": "פתח צ'אט שולחן",
  "shell.mobile.chatCloseAria": "סגור צ'אט שולחן",
  "shell.mobile.cards": "קלפים",
  "shell.mobile.cardsOpenAria": "פתח את הקלפים שלך כדי למכור או למשוך",
  "shell.mobile.cardsCloseAria": "סגור את הקלפים שלך",
  "shell.mobile.players": "שחקנים",
  "shell.mobile.playersOpenAria": "שחקנים פתוחים, מדורגים לפי הימור",
  "shell.mobile.playersCloseAria": "סגור שחקנים",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "משחק ב-USDC",
  "runtime.rail.privySessionCredit": "זיכוי לסשן Privy",
  "runtime.rail.houseCredit": "זיכוי הבית",
  "runtime.rail.connectPrivy": "חבר את Privy כדי להוסיף USDC למשחק",
  "runtime.rail.privySession": "סשן Privy",
  "runtime.rail.depositAction": "הוסף +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "חשבון Privy",
  "runtime.rail.house": "הבית",
  "runtime.rail.depositReceipt": "קבלה {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "הקש על פאק כלשהו כדי להמר {amount}. כל משבצת שומרת גם על +{low} / +{high} משלה.",
  "runtime.rail.sellBack": "מכירה חזרה ← +{amount} ליתרה",

  // runtime.recap.* — royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "אתה",
  "runtime.recap.topBacker": "תומך מוביל",
  "runtime.recap.topCardOutcome": "קלף מוביל · בחירת שמירה/מכירה",
  "runtime.recap.backer": "תומך",
  "runtime.recap.cardWon": "קלף זוכה",
  "runtime.recap.chaseLootReleased": "שלל המרדף שוחרר",
  "runtime.recap.theChase": "המרדף",
  "runtime.recap.sweptIntoVault": "נסחף לתוך הכספת",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "עמלת פרוטוקול",
  "runtime.recap.soldBack": "נמכר במכירה חזרה",
  "runtime.recap.intoSplit": "+{amount} לחלוקה",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "X אינו זמין עדיין.",
  "runtime.xProfile.connected": "מחובר",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "קלף לא ידוע",

  // runtime.winShare.* — royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "זכייה",
  "runtime.winShare.headlineGrailPull": "שליפת GRAIL",
  "runtime.winShare.headlineCardsWon": "קלפים שזכית בהם",
  "runtime.winShare.cardInImage": "קלף בתמונה.",
  "runtime.winShare.receiptInImage": "קבלה בתמונה.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "משיכות לא מקוונות כרגע. לא הועברו כספים.",
  "runtime.serverWallet.noSigner": "אין חותם ארנק מחובר להפעלה זו. לא הועברו כספים.",
  "runtime.serverWallet.nonceUnavailable": "לא ניתן להשיג מהשרת nonce לאישור כספי המשיכה.",
  "runtime.serverWallet.signatureUnavailable": "הארנק לא החזיר חתימה עבור nonce המשיכה.",
  "runtime.serverWallet.boundaryLabel": "זיכויי השולחן ו-USDC בארנק השרת הם יתרות נפרדות.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "לכידת מסך אינה זמינה בדפדפן זה.",
  "runtime.video.noRecorderFormat": "לדפדפן זה אין פורמט וידאו של MediaRecorder.",
  "runtime.video.canceled": "העיבוד בוטל.",
  "runtime.video.unreachable": "לא ניתן היה להגיע לשירות העיבוד ב-{url}.",
  "runtime.video.rejected": "שירות העיבוד דחה את הסיבוב הזה: {detail}",
  "runtime.video.requestFailed": "בקשת העיבוד נכשלה ({status}).",
  "runtime.video.noJobId": "שירות העיבוד לא החזיר מזהה עבודה.",
  "runtime.video.lostJob": "איבד את עבודת העיבוד ({status}).",
  "runtime.video.lostContact": "איבד קשר עם שירות העיבוד באמצע העיבוד.",
  "runtime.video.renderFailed": "עיבוד נכשל: {error}.",
  "runtime.video.unknownError": "שגיאה לא ידועה",
  "runtime.video.downloadFailed": "הסרטון הסתיים אך לא ניתן היה להוריד אותו.",
  "runtime.video.downloadHttpFailed": "הסרטון הסתיים אך ההורדה נכשלה ({status}).",
  "runtime.video.emptyVideo": "שירות העיבוד החזיר סרטון ריק.",
  "runtime.video.shareTagline": "קרב פאקים, כל הגרלה ניתנת לאימות. צפה בסיבוב:",

  // runtime.game.* — useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "החדר פעיל. הסיבובים מתחילים אוטומטית - פתוחים במשך {seconds}s ואז נחשפים.",
  "runtime.game.chaseVault": "כספת המרדף",
  "runtime.game.aTile": "משבצת",
  "runtime.game.aPack": "פאק",
  "runtime.game.theCard": "הקלף",
  "runtime.game.collectedSplit": "סיבוב {round} · נאספו {amount} USDC מהחלוקה.",
  "runtime.game.chaseDropSplit": "סיבוב {round} · המרדף העניק {award} למשבצת שלך · החלק שלך: {amount} USDC.",
  "runtime.game.grailSecured": "Grail נשמר: {card} ({amount}) נוסף לאוסף שלך.",
  "runtime.game.keptCard": "נשמר {card} ({amount}) ← נוסף לאוסף שלך.",
  "runtime.game.soldCardSettle": "נמכר {card} במכירה חזרה תמורת {amount} USDC ({pct}% מ-{value}).",
  "runtime.game.roundVoidedRefund":
    "סיבוב {round} בוטל. לא נפתחו פאקים, לכן לא הייתה הגרלת ערך קלף. ההימור שלך בסך {amount} הוחזר.",
  "runtime.game.roundVoidedAll":
    "סיבוב {round} בוטל. לא נפתחו פאקים, לכן לא הייתה הגרלת ערך קלף. כל ההימורים הוחזרו.",
  "runtime.game.chaseFiredYours.one": "המרדף הופעל: {n} קלף ({amount}) שוחרר למשבצת {tile} שלך.",
  "runtime.game.chaseFiredYours.other": "המרדף הופעל: {n} קלפים ({amount}) שוחררו למשבצת {tile} שלך.",
  "runtime.game.chaseFiredTable.one":
    "המרדף הופעל בסיבוב {round}: {award} + {n} קלף הוענקו למשבצת {tile}, בחלוקה בין התומכים שלה.",
  "runtime.game.chaseFiredTable.other":
    "המרדף הופעל בסיבוב {round}: {award} + {n} קלפים הוענקו למשבצת {tile}, בחלוקה בין התומכים שלה.",
  "runtime.game.cardsAssigned.one": "{n} קלף הוקצה לך ({amount}) ← לאוסף.",
  "runtime.game.cardsAssigned.other": "{n} קלפים הוקצו לך ({amount}) ← לאוסף.",
  "runtime.game.cardPoolsLive": "קופות קלפים פעילות: {cards} קלפים על פני {pools} קופות מכונות של CollectorCrypt.",
  "runtime.game.minBid": "ההימור המינימלי הוא {amount}. הגדל את הסכום ונסה שוב.",
  "runtime.game.resolveFailed": "לא ניתן היה לסגור את הסיבוב הזה, ולכן לא בוצעה התחשבנות. הסיבוב הבא יתחיל כרגיל.",
  "runtime.game.stakeRefused": "ההימור הזה גדול מדי עבור {tile}. לא חויבת. הקטן אותו ונסה שוב.",
  "runtime.game.shortfallBack":
    "אין מספיק USDC כדי לתמוך ב-{tile} בסכום {amount}. יש לך {held}. הוסף כספים כדי להמשיך.",
  "runtime.game.shortfallNextPack":
    "אין מספיק USDC כדי להשלים את הפאק הבא ב-{tile}. נדרשים {amount}, ויש לך {held}. הוסף כספים כדי להמשיך.",
  "runtime.game.youBacked": "תמכת ב-{tile} בסכום {amount}.",
  "runtime.game.packCompleted": "השלמת את הפאק הבא ב-{tile} (+{amount}) ← {tier}.",
  "runtime.game.soldToFundBid": "נמכרו {cards} תמורת {amount} USDC (רכישה חוזרת של CC) למימון הימור.",
  "runtime.game.backedFunded": "תמכת ב-{tile} בסכום {amount} (ממומן מהמלאי).",
  "runtime.game.demoStakesRefunded":
    "הימורי ההדגמה נוקו: {amount} שהוספת בלחיצה הוחזרו. ההתחלה היא ב-$0.",
  "runtime.game.demoStakesCleared": "הימורי ההדגמה נוקו: מתחילים כל סיבוב ב-$0 עד שתתמוך במשבצת.",
  "runtime.game.deposited": "הופקדו {amount} USDC בארנק שלך.",
  "runtime.game.referralBonus": "זיכוי בונוס מהפניה: +{amount} USDC.",
  "runtime.game.signedAndSent": "נחתם ונשלח {amount} USDC ב-{cluster} · חתימה {sig}….",
  "runtime.game.signedNoBroadcast":
    "נחתם {amount} USDC ב-{cluster} ({method}, ללא שידור בשרשרת) · חתימה {sig}….",
  "runtime.game.soldCard": "נמכר {card} תמורת {amount} USDC (רכישה חוזרת של {pct}%).",
} as Record<string, string>;
