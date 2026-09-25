// Hebrew (עברית): "pages" segment. Same key set as en/pages.ts. Values are modern Israeli Hebrew.
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
  // ===== pages.common.* — reused across 2+ files in this segment ===========
  "pages.common.goToBoard": "עבור אל הלוח",
  "pages.common.backToBoard": "→ חזרה ללוח",
  "pages.common.replay": "שידור חוזר",
  "pages.common.replayTitle": "צפו שוב בסיבוב {n}, מההימור הראשון ועד לגילוי",
  "pages.common.you": "אתה",
  "pages.common.cancel": "בטל",
  "pages.common.close": "×",
  "pages.common.withdrawToWallet": "משיכה לארנק",
  "pages.common.withdrawnToWallet": "נמשך לארנק",
  "pages.common.chase": "המרדף",
  "pages.common.roundNumber": "סיבוב #{n}",
  "pages.common.share": "שתף",
  "pages.common.noCardsKeptTitle": "עדיין לא נשמרו קלפים",
  "pages.common.noCardsKeptBody": "שמרו שליפה מנצחת במקום למכור אותה בחזרה, והיא תופיע כאן כקלף מדורג.",

  // ===== pages.sessionHistory.* (RoyaleSessionHistory.tsx) ==================
  "pages.sessionHistory.log.ariaLabel": "היסטוריית הפעלות",
  "pages.sessionHistory.log.title": "היסטוריית הפעלות",
  "pages.sessionHistory.log.emptyHint": "הקבלות שלך מופיעות כאן",
  "pages.sessionHistory.log.hint": "הקבלות והפעולות שלך",

  "pages.sessionHistory.ledger.ariaLabel": "היסטוריית סיבובים ומשבצות",
  "pages.sessionHistory.ledger.title": "היסטוריית סיבובים ומשבצות",
  "pages.sessionHistory.ledger.empty": "סיבובים קודמים מופיעים כאן",
  "pages.sessionHistory.ledger.summaryOne": "{n} סיבוב שהתחשבנן · לחצו על שורה לפרטים",
  "pages.sessionHistory.ledger.summaryOther": "{n} סיבובים שהתחשבנו · לחצו על שורה לפרטים",
  "pages.sessionHistory.ledger.emptyBody":
    "עדיין אין סיבובים שהסתיימו. הסיבוב הראשון שיוכרע יופיע כאן עם כל המשבצות, המשבצת הזוכה וחלוקת הפרס.",
  "pages.sessionHistory.ledger.showMore": "הצג {n} נוספים · {hidden} ישנים יותר",

  "pages.sessionHistory.row.noWinner": "-",
  "pages.sessionHistory.row.wonSuffix": "{label} זכה ב-",
  "pages.sessionHistory.row.pull": "{name} · {amount}",
  "pages.sessionHistory.row.poolSuffix": "{amount} קופה",
  "pages.sessionHistory.row.noPull": "לא שליפה",
  "pages.sessionHistory.row.youWon": "אתה +{amount}",
  "pages.sessionHistory.row.noWin": "ללא ניצחון",

  "pages.sessionHistory.detail.splitAria": "פיצול תשלום",
  "pages.sessionHistory.detail.splitOf": "פיצול של {amount}",
  "pages.sessionHistory.detail.yourStake": "הימור שלך {amount}",
  "pages.sessionHistory.detail.noStakeFromYou": "לא הימור ממך",
  "pages.sessionHistory.detail.cardKeptGrail": "קלף ← {name} (Grail נשמר)",
  "pages.sessionHistory.detail.cardSoldBack": "קלף ← {name} · נמכר במכירה חזרה",
  "pages.sessionHistory.detail.cardKept": "קלף ← {name} · נשמר",
  "pages.sessionHistory.detail.grailSoldSplit": "Grail נמכר במכירה חזרה ← החלוקה למעלה",

  "pages.sessionHistory.tile.labelAmount": "{label} · {amount}",
  "pages.sessionHistory.tile.grailPrefix": "GRAIL · ",
  "pages.sessionHistory.tile.topPrefix": "TOP · ",
  "pages.sessionHistory.tile.wonSuffix": " · זכה",
  "pages.sessionHistory.tile.lostSuffix": " · איבד את הגרלה",

  // ===== pages.winningsStrip.* (RoyaleWinningsStrip.tsx) ====================
  "pages.winningsStrip.ariaLabel": "הזכיות שלך",
  "pages.winningsStrip.title": "הזכיות שלך",
  "pages.winningsStrip.decisionClock": "{n}s כדי להחליט",
  "pages.winningsStrip.withdrawBalance": "משיכת יתרה {amount}",
  "pages.winningsStrip.howItWorks": "איך המשחק עובד - סיכויים, VRF, קלפים ←",
  "pages.winningsStrip.decisionOpen": "החלטת הקלף שלך פתוחה",
  "pages.winningsStrip.decisionNoActionKeep": "בלי פעולה הקלף נשמר (אפשר למכור בכל עת מאזור הקלפים)",
  "pages.winningsStrip.decisionNoActionSell": "בלי פעולה הקלף יימכר אוטומטית בנעילה הבאה",
  "pages.winningsStrip.keep": "שמור ({amount})",
  "pages.winningsStrip.sell": "מכור {amount}",
  "pages.winningsStrip.sellWithPct": "מכור {amount} · {pct}%",
  "pages.winningsStrip.yourCards": "הקלפים שלך",
  "pages.winningsStrip.heldValue": "{amount} הוחזק",
  "pages.winningsStrip.keptByDefault": "נשמר כברירת מחדל",
  "pages.winningsStrip.withdrawAllOne": "משוך את כל הקלף ({n}) · {amount}",
  "pages.winningsStrip.withdrawAllOther": "משוך את כל {n} הקלפים · {amount}",
  "pages.winningsStrip.withdrawAllConfirm": "בטוחים? משיכת {n} קלפים",
  "pages.winningsStrip.selectToWithdraw": "בחרו קלפים למשיכה",
  "pages.winningsStrip.sellAll": "מכור הכול · {amount} · {pct}%",
  "pages.winningsStrip.selectedForWithdrawal": "נבחר למשיכה",
  "pages.winningsStrip.tapCardToSelect": "הקש על קלף כדי לבחור",
  "pages.winningsStrip.selectCardsToWithdraw": "בחרו קלפים למשיכה",
  "pages.winningsStrip.selectedSummaryOne": "{n} קלף נבחר · {amount}",
  "pages.winningsStrip.selectedSummaryOther": "{n} קלפים נבחרו · {amount}",
  "pages.winningsStrip.withdrawSelectedOne": "משיכת {n} קלף · {amount}",
  "pages.winningsStrip.withdrawSelectedOther": "משיכת {n} קלפים · {amount}",
  "pages.winningsStrip.withdrawBalanceDialogAria": "משיכת יתרה",
  "pages.winningsStrip.closeWithdrawAria": "סגור משיכה",
  "pages.winningsStrip.pastRounds": "סיבובים קודמים",
  "pages.winningsStrip.shareLastWin": "שתף את הניצחון האחרון",
  "pages.winningsStrip.roundId": "R{n}",
  "pages.winningsStrip.tileTook": "משבצת {n} תפסה את הטבלה · {amount}",
  "pages.winningsStrip.chaseAward": "המרדף +{amount}",
  "pages.winningsStrip.noRound": "אין סיבוב",
  "pages.winningsStrip.roundNetWin": "+{amount}",
  "pages.winningsStrip.roundNetLost": "אבד",
  "pages.winningsStrip.kept": "נשמר",
  "pages.winningsStrip.sold": "נמכר",
  "pages.winningsStrip.activity": "פעילות",

  // ===== pages.sellConfirm.* (RoyaleSellCardConfirm.tsx) ====================
  // First confirmation in front of the per-card sell back in "Your cards"
  // (owner 2026-08-15). {value} is the card's face value, {amount}/{pct} the
  // HONORED buyback quote the sale actually pays.
  "pages.sellConfirm.dialogAria": "אישור מכירה חוזרת של הקלף",
  "pages.sellConfirm.eyebrow": "מכירה חוזרת",
  "pages.sellConfirm.title": "למכור את {name}?",
  "pages.sellConfirm.payoutLabel": "תקבל",
  "pages.sellConfirm.rateNote": "{pct}% מתוך {value}",
  "pages.sellConfirm.irreversible": "הקלף יוצא מהאוסף שלך. אי אפשר לבטל את זה.",
  "pages.sellConfirm.keep": "לשמור את הקלף",
  "pages.sellConfirm.confirm": "למכור תמורת {amount}",

  // ===== pages.collection.* (RoyaleCollectionRoute.tsx) =====================
  "pages.collection.title": "האוסף שלך",
  "pages.collection.summaryCardOne": "קלף",
  "pages.collection.summaryCardOther": "קלפים",
  "pages.collection.totalValueSuffix": "ערך כולל",
  "pages.collection.tierGrail": "GRAIL",
  "pages.collection.tierTop": "TOP",
  "pages.collection.tierCommon": "נפוצה",
  "pages.collection.viaKept": "שמור",
  "pages.collection.viaWon": "זכה",
  "pages.collection.cardAriaLabel": "{name}, {amount}. Enter פותח את פרטי הקלף.",

  // ===== pages.ladder.* (RoyaleLadderRoute.tsx) ==============================
  "pages.ladder.title": "דירוג",
  "pages.ladder.tabAriaLabel": "תצוגת דירוג",
  "pages.ladder.tabBetters": "הטובים ביותר",
  "pages.ladder.tabPacks": "סיכויי פאקים",
  "pages.ladder.tabCollectors": "Collectors",
  "pages.ladder.sectionAriaLabel": "דירוג פאקים",
  "pages.ladder.intro":
    "כל דולר ממלא את הפאק הגדול ביותר שהוא יכול. כל שלב הוא מכונת CollectorCrypt אמיתית. הציצו בקלפים המובילים ואז פתחו את הקופה המלאה.",
  "pages.ladder.sourceLive": "קופות CollectorCrypt חיות ({count}/{total} מכונות) · עודכן לפני {age}{backlogNote}",
  "pages.ladder.sourceBundled": "קופות ייחוס: קלפים מדורגים של CollectorCrypt שנארזו מראש, עם ערכים מבוטחים אמיתיים (לא הצעות חיות)",
  "pages.ladder.sourceFixtures": "דוגמאות ייחוס: נתוני בדיקה שנארזו מראש",
  "pages.ladder.footNote": "הסיכויים, טווחי הערך והרכישה החוזרת משקפים את מפרטי מכונות ה-gacha שפורסמו על ידי CollectorCrypt (תמונת מצב {date}).",
  "pages.ladder.footNoteLive":
    "הקלפים הם מלאי שוק חי בתוך טווחי הערך של כל מכונה, ומתעדכנים כל 5 דקות בין סיבובים.",
  "pages.ladder.footNoteBundled": "הקלפים המוצגים הם אוסף ארוז מראש של קלפי CollectorCrypt מדורגים ואמיתיים, לא הצעות חיות.",
  "pages.ladder.stepUp": "עלייה בדרגה",
  "pages.ladder.stepUpFromPrefix": "מ-{name}",
  "pages.ladder.stepUpEntryPrefix": "דרגת כניסה, עודף קטן מתחת ל-",
  "pages.ladder.stepUpEntrySuffix": "נשאר עודף",
  "pages.ladder.valueRange": "טווח ערכים",
  "pages.ladder.ceiling": "תקרה",
  "pages.ladder.floor": "רצפה",
  "pages.ladder.machineOdds": "סיכויי המכונה",
  "pages.ladder.buybackPrefix": "רכישה חוזרת",
  "pages.ladder.grailOddsPrefix": "Grail",
  "pages.ladder.poolLoading": "טוען את הקופה...",
  "pages.ladder.viewMore": "הצג עוד {n}",
  "pages.ladder.cardPool": "קופה של {n} קלפים",
  "pages.ladder.priciestFirst": "היקר ביותר קודם",
  "pages.ladder.machineCardsOnly": "{n} קלפים",
  "pages.ladder.machineNameCards": "{shortName} · {n} קלפים",
  "pages.ladder.collector.ariaLabel": "Collector leaderboard",
  "pages.ladder.collector.title": "Collector leaderboard",
  "pages.ladder.collector.description": "Collection value leads. Hold more cards, chase Grails, and show your best pull.",
  "pages.ladder.collector.playerCount.one": "{n} collector",
  "pages.ladder.collector.playerCount.other": "{n} collectors",
  "pages.ladder.collector.cardCount.one": "{n} card held",
  "pages.ladder.collector.cardCount.other": "{n} cards held",
  "pages.ladder.collector.tableAriaLabel": "Collector standings by collection value",
  "pages.ladder.collector.collectionValue": "Collection value",
  "pages.ladder.collector.cardsHeld": "Cards held",
  "pages.ladder.collector.cardsShort": "cards",
  "pages.ladder.collector.grailsPulled": "Grails pulled",
  "pages.ladder.collector.grailsShort": "Grails",
  "pages.ladder.collector.bestPull": "Best pull",
  "pages.ladder.collector.noPull": "None yet",
  "pages.ladder.collector.youRankTag": "YOU · #{n}",
  "pages.ladder.collector.viewCollection": "View collection",
  "pages.ladder.collector.empty": "No cards are held yet.",
  "pages.ladder.collector.emptyCta": "Open a pack to enter the standings",
  "pages.ladder.collector.footnote": "Collection value is the sum of cards still held on this device. Rankings refresh as rounds settle.",
  "pages.ladder.collector.rowAria": "Rank {rank}, {name}, collection value {value}, {cards} cards held, {grails} Grails pulled",

  // ===== pages.ladder.leaderboard.* (RoyaleLeaderboard.tsx, the "Top betters"
  // panel this route's "betters" tab renders - also mounted as a compact rail
  // on the board landing, see board segment's usage) =========================
  "pages.ladder.leaderboard.ariaLabel": "טבלת דירוג ההימורים המובילים",
  "pages.ladder.leaderboard.title": "הטובים ביותר",
  "pages.ladder.leaderboard.emptyNoSettled": "עדיין אין סיבובים שהתחשבנו בהם",
  "pages.ladder.leaderboard.emptyNoBetsToday": "עדיין אין הימורים שהתחשבנו בהם היום.",
  "pages.ladder.leaderboard.emptyNoBetsAll": "עדיין אין הימורים שהתחשבנו בהם.",
  "pages.ladder.leaderboard.emptyCta": "תמכו בלוח כדי להופיע כאן",
  "pages.ladder.leaderboard.timeframeAriaLabel": "מסגרת זמן",
  "pages.ladder.leaderboard.today": "היום",
  "pages.ladder.leaderboard.allTime": "כל הזמנים",

  // ===== pages.ladderViewer.* (pages/RoyaleLadderCardViewer.tsx, the modal a
  // ladder row's "View {n} more" button opens over the full machine pool). Its
  // own "view more" button reuses pages.ladder.viewMore above (same wording,
  // same surface). Counts arrive pre-formatted, digits stay as authored. ======
  "pages.ladderViewer.eyebrow": "קופת פאקים",
  "pages.ladderViewer.showing": "מציג {n} מתוך {total}",
  "pages.ladderViewer.closeAria": "סגור את קופת הפאקים",
  "pages.ladderViewer.remainingFoot": "עוד {n} קלפים להצגה · רצפה {amount}",
  "pages.ladderViewer.wholePool": "זוהי כל הקופה של {n} קלפים.",

  // ===== pages.results.* (RoyaleRoundResultsRoute.tsx) ======================
  "pages.results.title": "תוצאות הסיבוב",
  // Plural pair (see royaleI18n.ts header, "PLURAL KEYS"): ".one" for n===1,
  // ".other" for every other count, chosen by the calling component.
  "pages.results.count.one": "{n} סיבוב",
  "pages.results.count.other": "{n} סיבובים",
  "pages.results.emptyTitle": "עדיין אין סיבובים שהתחשבנו בהם",
  "pages.results.emptyBody": "שחקו סיבוב בלוח, וכל קלף שייפתח בו יופיע כאן, סיבוב אחר סיבוב.",
  "pages.results.tileWins": "{winner} זוכה ב-{amount}",
  "pages.results.tileFallback": "משבצת",
  "pages.results.youWon": "זכית ב-{amount}",
  "pages.results.noWinForYou": "אין ניצחון עבורך",
  "pages.results.replayLink": "שידור חוזר",
  // Bare "Payout split" (no amount) — the upgraded payout-split header (owner
  // 2026-07-22) shows the eyebrow label and the pool amount as two separate
  // nodes, unlike pages.results.payoutSplit below which bakes the amount in.
  "pages.results.payoutSplitLabel": "פיצול תשלום",
  "pages.results.payoutSplit": "חלוקת תשלום · קופה {amount}",
  "pages.results.yourPullPrefix": "שליפה שלך ·",
  "pages.results.noPull": "אין",
  "pages.results.youKeptIt": "שמרת את זה",
  "pages.results.youSoldItForCash": "מכרת אותו במזומן",
  "pages.results.chaseAward": "המרדף +{amount}",
  "pages.results.potLedgerFull": "{amount} מהקופה ששולמו במלואם",
  "pages.results.pool": "קופה",
  "pages.results.potLedgerWithheld": "נוכה",
  "pages.results.potLedgerPaidIn": "הוזרמו",
  "pages.results.potLedgerCashToBackers": "מזומן לתומכים",
  "pages.results.theChase": "המרדף",
  "pages.results.protocol": "פרוטוקול",
  "pages.results.jackpot": "קופת הפרס",
  "pages.results.cardTrades": "עסקאות קלפים",
  "pages.results.statsAriaLabel": "סכומי הפעלה",
  "pages.results.roundsPlayed": "סיבובים ששוחקו",
  "pages.results.winRate": "שיעור זכייה",
  "pages.results.cashWon": "מזומן שזכית בו",
  "pages.results.biggestPackPull": "השליפה הגדולה ביותר מפאק",
  "pages.results.noneYet": "אין עדיין",

  // --- ROUNDS-LIST UI WAVE (owner burst 2026-07-29): the winning tile's draw
  // odds, the per-round collapse toggle, and the "other participants" disclosure.
  "pages.results.tileOdds": "סיכוי של {pct}",
  "pages.results.oddsUnavailable": "סיכויים לא זמינים",
  "pages.results.collapseRoundAria": "כווץ סיבוב {n}",
  "pages.results.expandRoundAria": "הרחב סיבוב {n}",
  "pages.results.playersTitle": "שחקנים אחרים",
  "pages.results.playersCount.one": "{n} שחקן",
  "pages.results.playersCount.other": "{n} שחקנים",
  "pages.results.playersShow": "הצג",
  "pages.results.playersHide": "הסתר",
  "pages.results.playerBid": "הימור",
  "pages.results.playerResult": "תוצאה",
  "pages.results.playerCash": "{amount} מזומן",
  "pages.results.playerNoCards": "ללא קלפים",

  // ===== pages.sellBack.* (RoyaleSellBackPanel.tsx header banner - mounted by
  // both RoyaleCollectionRoute and RoyaleWinningsStrip) ======================
  "pages.sellBack.ariaLabel": "מכירה חזרה של הקלפים שלך",
  "pages.sellBack.title": "מכירה חזרה",
  "pages.sellBack.hint": "המחיר נקבע ברגע הזכייה ונשאר נעול, בלי הצעת מחיר חדשה.",
  "pages.sellBack.quietState": "מכירה חזרה נפתחת עם סיבובים חיים.",

  // --- royaleSellBack.ts: the quote countdown (formatSellBackCountdown). The
  // {d}/{h}/{m} tokens are already-formatted integers - a locale reorders the
  // sentence around them, it never re-formats the digits.
  "pages.sellBack.countdownExpired": "פג תוקף",
  "pages.sellBack.countdownDaysHours": "נשארו {d}d {h}h",
  "pages.sellBack.countdownHoursMinutes": "נשארו {h}h {m}m",
  "pages.sellBack.countdownMinutes": "נשארו {m}m",
  "pages.sellBack.countdownSubMinute": "נשארה פחות מדקה",

  // --- royaleSellBack.ts: custody badges (sellBackCustodyBadge). Informational
  // only, sell-back stays allowed in both states.
  "pages.sellBack.badgeDeliveryPending": "משלוח ממתין",
  "pages.sellBack.badgeNeedsWallet": "צריך ארנק",

  // --- royaleSellBack.ts: player-facing copy for every domain error code
  // (sellBackErrorCopy). Each pair is a title + the detail rendered under it.
  "pages.sellBack.error.quoteExpired.title": "תוקף ההצעה הזו פג",
  "pages.sellBack.error.quoteExpired.detail":
    "חלון המכירה החוזרת הסתיים. הקלף עדיין שלך, והמסחר הפתוח הוא אפשרות היציאה עכשיו.",
  "pages.sellBack.error.alreadyExercised.title": "כבר נמכר במכירה חזרה",
  "pages.sellBack.error.alreadyExercised.detail": "הקלף הזה כבר נמכר במכירה חזרה. מוצגת הקבלה מאותה מכירה.",
  "pages.sellBack.error.quoteVoid.title": "ההצעה בוטלה",
  "pages.sellBack.error.quoteVoid.detail":
    "הצעת המכירה החוזרת הזו בוטלה על ידי התפעול. פנו לתמיכה אם ציפיתם לתשלום.",
  "pages.sellBack.error.notQuoteOwner.title": "זה לא הקלף שלך",
  "pages.sellBack.error.notQuoteOwner.detail": "הצעת המכירה החוזרת הזו שייכת לחשבון אחר.",
  "pages.sellBack.error.cardNotDelivered.title": "הקלף עדיין בדרך",
  "pages.sellBack.error.cardNotDelivered.detail":
    "הקלף עדיין לא הועבר לארנק שלך. נסה שוב בעוד רגע.",
  "pages.sellBack.error.cardNotHeld.title": "הקלף לא נמצא בארנק שלך",
  "pages.sellBack.error.cardNotHeld.detail":
    "הארנק שלך כבר לא מכיל את הקלף המדויק הזה. רק הקלף המקורי יכול לממש את ההצעה.",
  "pages.sellBack.error.returnTxRequired.title": "נדרשת חתימה",
  "pages.sellBack.error.returnTxRequired.detail":
    "המכירה החוזרת דורשת חתימה כדי להחזיר את הקלף. חתום ונסה שוב.",
  "pages.sellBack.error.returnNotConfirmed.title": "ההחזרה לא אושרה",
  "pages.sellBack.error.returnNotConfirmed.detail":
    "החזרת הקלף עדיין לא אושרה בשרשרת. ההצעה נשארת פעילה, ואפשר לנסות שוב כשתהיה מוכן.",
  "pages.sellBack.error.rateLimited.title": "יותר מדי ניסיונות",
  "pages.sellBack.error.rateLimited.detail": "האט לרגע ונסה שוב.",
  "pages.sellBack.error.accountRequired.title": "נדרשת כניסה",
  "pages.sellBack.error.accountRequired.detail": "חבר את החשבון כדי למכור קלף במכירה חזרה.",
  "pages.sellBack.error.quoteNotFound.title": "ההצעה לא נמצאה",
  "pages.sellBack.error.quoteNotFound.detail": "הצעת המכירה החוזרת הזו כבר אינה קיימת.",
  "pages.sellBack.error.quoteIdRequired.title": "משהו השתבש",
  "pages.sellBack.error.quoteIdRequired.detail": "בבקשת המכירה החוזרת חסר מידע נדרש.",
  "pages.sellBack.error.unknown.title": "המכירה החוזרת נכשלה",
  "pages.sellBack.error.unknown.detail": "משהו השתבש אצלנו. נסה שוב בעוד רגע.",

  // --- RoyaleSellBackPanel.tsx: load/empty states.
  "pages.sellBack.syncNote": "הסנכרון החי מנסה שוב אוטומטית. הצעות נעולות שומרות על המחיר שלהן.",
  "pages.sellBack.offlineTitle": "אתה לא מקוון",
  "pages.sellBack.offlineBody": "התחבר מחדש וההצעות הנעולות שלך נמצאות ממש כאן.",
  "pages.sellBack.loadFailedTitle": "ההצעות לא נטענו",
  "pages.sellBack.loadFailedBody": "ההצעות הנעולות שומרות על המחיר. נסה לטעון אותן שוב בעוד רגע.",
  "pages.sellBack.tryAgain": "נסה שוב",
  "pages.sellBack.emptyTitle": "עדיין אין קלפים למכירה חזרה",
  "pages.sellBack.emptyBody": "זכה בפאק, והצעת הרכישה החוזרת שלו תופיע כאן ברגע שהסיבוב יסתיים.",
  "pages.sellBack.pastSellBacks": "מכירות חזרה קודמות",

  // --- RoyaleSellBackPanel.tsx: one ticket, from offer to receipt.
  "pages.sellBack.localOffer": "הצעה מקומית",
  "pages.sellBack.noExpiry": "אין תפוגה",
  "pages.sellBack.preparing": "מכין...",
  "pages.sellBack.sellBackAmount": "מכור בחזרה {amount}",
  "pages.sellBack.waitingSignature": "ממתין לחתימה שלך...",
  "pages.sellBack.signatureUnwired": "מכירת הקלף בחזרה דורשת חתימת ארנק. ההצעה הנעולה שלך נשארת פעילה.",
  "pages.sellBack.confirmInWallet": "אשר בארנק שלך...",
  "pages.sellBack.sellingBack": "מוכר בחזרה...",
  "pages.sellBack.receiptAlreadySold": "כבר נמכר במכירה חזרה",
  "pages.sellBack.receiptSoldBack": "נמכר במכירה חזרה",
  // {rail} is either "USDC" (a brand term, English everywhere) or
  // pages.sellBack.railGameBalance below.
  "pages.sellBack.receiptPaid": "{amount} בתשלום · {rail}",
  "pages.sellBack.railGameBalance": "יתרת משחק",

  // --- RoyaleSellBackPanel.tsx: the "Past sell-backs" history rows.
  "pages.sellBack.historySoldBack": "נמכר במכירה חזרה · {amount}",
  "pages.sellBack.historyExpired": "פג תוקף ההצעה",
  "pages.sellBack.historyWithdrawn": "ההצעה בוטלה",

  // ===== pages.profile.* (RoyaleProfileRoute.tsx) ============================
  "pages.profile.relTime.never": "לעולם לא",
  "pages.profile.relTime.justNow": "כרגע",
  "pages.profile.relTime.minutesAgo": "לפני {n}m",
  "pages.profile.relTime.hoursAgo": "לפני {n}h",
  "pages.profile.relTime.daysAgo": "לפני {n}d",
  "pages.profile.relTime.monthsAgo": "לפני {n}mo",
  "pages.profile.noDate": "–",

  "pages.profile.count.settledRoundOne": "{n} סיבוב שהתחשבנן",
  "pages.profile.count.settledRoundOther": "{n} סיבובים שהתחשבנו",
  "pages.profile.count.roundOne": "{n} סיבוב",
  "pages.profile.count.roundOther": "{n} סיבובים",
  "pages.profile.count.settledOutcomeOne": "{n} תוצאה שהתחשבנה",
  "pages.profile.count.settledOutcomeOther": "{n} תוצאות שהתחשבנו",
  "pages.profile.xOfRoundsOne": "{x} מתוך {n} סיבוב",
  "pages.profile.xOfRoundsOther": "{x} מתוך {n} סיבובים",

  "pages.profile.follow": "עקוב",
  "pages.profile.following": "במעקב",
  "pages.profile.linkCopied": "הקישור הועתק",
  "pages.profile.headlineStatsAria": "סטטיסטיקות מובילות",

  "pages.profile.chartWindow7d": "7D",
  "pages.profile.chartWindow30d": "30D",
  "pages.profile.chartWindowAll": "הכול",
  "pages.profile.chartValueAria": "ערך אוסף מ-{from} עד {to} בחלון זה",
  // Right-hand end of the value chart's x-axis caption (the left end is a date).
  "pages.profile.chartFootNow": "עכשיו",
  "pages.profile.viewRoundResultsAria": "הצג תוצאות של סיבוב #{n}",

  "pages.profile.collectionViewAll": "כל הקלפים",
  "pages.profile.collectionViewVault": "בכספת",
  "pages.profile.collectionViewOffers": "הצעות",
  "pages.profile.collectionViewHistory": "היסטוריה",
  "pages.profile.collectionStateAria": "מצב האוסף",
  "pages.profile.openCollection": "פתח אוסף ↗",
  "pages.profile.collectionEmptyHistoryTitle": "אין עדיין מכירה חוזרת",
  "pages.profile.collectionEmptyHistoryBody": "מכור קלף שמור בחזרה, והקבלה תופיע כאן.",
  "pages.profile.inVault": "בכספת · סיבוב #{n}",
  "pages.profile.sellBackOffer": "הצעת מכירה חזרה · {amount}",
  "pages.profile.soldBack": "נמכר במכירה חזרה",
  "pages.profile.soldAtSettlement": "נמכר בהסדר",
  "pages.profile.soldFooter": "{via} · {amount} · {rel}",
  "pages.profile.sellBackNote": "פעולות מכירה חזרה והצעות חיות זמינות בדף האוסף.",

  "pages.profile.pnlByRound": "רווח והפסד לפי סיבוב",
  "pages.profile.pnlSubtitle": "{n} הסיבובים האחרונים שבהם הימרת · ניצחונות למעלה, הפסדים למטה · {wins}W {losses}L",
  "pages.profile.pnlAria": "תוצאה נטו לסיבוב, {n} סיבובים אחרונים",
  "pages.profile.pnlColAria": "סיבוב {n}: {signed}",
  "pages.profile.pnlTooltip": "R{n} · {signed}",

  "pages.profile.recentForm": "כושר אחרון",
  "pages.profile.recentFormSubtitle": "{n} הסיבובים האחרונים, מהישן לחדש",
  "pages.profile.formColAria": "סיבוב {n}: {result} {amount}",
  "pages.profile.won": "זכה ב-",
  "pages.profile.lost": "הפסיד",
  "pages.profile.formW": "W",
  "pages.profile.formL": "L",

  "pages.profile.leaderboardEyebrow": "טבלת דירוג · {mode}",
  "pages.profile.modeMostProfitable": "הרווחי ביותר",
  "pages.profile.modeHighestVolume": "הנפח הגבוה ביותר",
  "pages.profile.topPlayers": "{n} השחקנים המובילים",
  "pages.profile.metricProfit": "רווח",
  "pages.profile.metricVolume": "נפח",
  "pages.profile.metricNetPnl": "רווח והפסד נטו",
  "pages.profile.filtersAria": "מסנני טבלת הדירוג",
  "pages.profile.metricFilterAria": "מדד",
  "pages.profile.windowFilterAria": "חלון",
  "pages.profile.window1d": "1D",
  "pages.profile.window7d": "7D",
  "pages.profile.window30d": "30D",
  "pages.profile.windowAll": "כל",
  "pages.profile.thRank": "#",
  "pages.profile.thPlayer": "שחקן",
  "pages.profile.thRounds": "סיבובים",
  "pages.profile.you": "אתה",
  "pages.profile.leaderboardEmpty": "עדיין אין שחקנים בחלון הזה. הלוח יתמלא כשהימורים ותשלומים יירשמו.",

  "pages.profile.notFoundTitle": "אין עדיין סיבובים באינדקס",
  "pages.profile.notFoundBody": "{wallet} עדיין לא השתתף בסיבוב שהשרת הוסיף לאינדקס.",
  "pages.profile.offlineTitle": "פרופיל מחוץ להישג יד",
  "pages.profile.offlineBody": "חיפוש שחקנים דורש חיבור חי. נסה שוב כדי לטעון את הרשומה הזו.",
  "pages.profile.retry": "נסה שוב",

  "pages.profile.collectorSince": "אספן מאז {month}",
  "pages.profile.lastActive": "פעילות אחרונה {rel}",
  "pages.profile.rankAllTime": "דירוג #{n} · כל הזמנים",
  "pages.profile.netPnl": "נטו P&L",
  "pages.profile.lifetime": "כל החיים",
  "pages.profile.bidWinRate": "שיעור זכייה בהימורים",
  "pages.profile.cardsWon": "קלפים שזכית בהם",
  "pages.profile.grailsOne": "{n} קלף Grail",
  "pages.profile.grailsOther": "{n} קלפי Grail",
  "pages.profile.totalStaked": "סך ההימור",
  "pages.profile.betsCount": "{n} הימורים",
  "pages.profile.biggestRound": "הסיבוב הגדול ביותר",
  "pages.profile.singleRoundSwing": "סיבוב בודד",
  "pages.profile.playerStatsAria": "סטטיסטיקת שחקן",
  "pages.profile.winsLosses": "ניצחונות / הפסדים",
  "pages.profile.roundsPlayed": "סיבובים ששוחקו",
  "pages.profile.betsPlaced": "הימורים הוצבו",
  "pages.profile.voidedRounds": "סיבובים שבוטלו",

  "pages.profile.tablePlayer": "שחקן בלוח",
  "pages.profile.playerFallback": "שחקן",
  "pages.profile.localEmptyTitle": "עדיין אין סיבובים במפגש הזה",
  "pages.profile.localEmptyBody": "{name} עדיין לא תמך במשבצת במפגש הזה.",
  "pages.profile.sessionNet": "רווח והפסד במפגש",
  "pages.profile.cashSplitsOnly": "חלוקות מזומן בלבד",
  "pages.profile.thisSession": "במפגש הזה",
  "pages.profile.packsOpened": "פאקים שנפתחו",
  "pages.profile.onBackedTiles": "במשבצות שנתמכו",
  "pages.profile.biggestPull": "השליפה הגדולה ביותר",
  "pages.profile.noneYet": "אין עדיין",
  "pages.profile.recentActivity": "פעילות אחרונה",
  "pages.profile.noSettledOutcomesPlayer": "עדיין אין תוצאות שהתחשבנו בהן לשחקן הזה במפגש הזה.",

  "pages.profile.pageTitle": "פרופיל",
  "pages.profile.followingCount": "במעקב אחרי {n}",
  "pages.profile.collectionValue": "ערך אוסף",
  "pages.profile.updatedAgo": "עודכן {rel}",
  "pages.profile.noCardsYet": "עדיין אין קלפים",
  "pages.profile.change30d": "שינוי 30D",
  "pages.profile.allNewIn30": "הכול חדש ב-30 הימים האחרונים",
  "pages.profile.noChange": "ללא שינוי",
  "pages.profile.cardsOwned": "קלפים בבעלות",
  "pages.profile.realizedProceeds": "מימוש הכנסות",
  "pages.profile.sellBackOne": "{n} מכירה חזרה",
  "pages.profile.sellBackOther": "{n} מכירות חזרה",
  "pages.profile.tabHighlights": "דגשים",
  "pages.profile.tabCollection": "אוסף",
  "pages.profile.tabActivity": "פעילות",
  "pages.profile.tabStats": "סטטיסטיקות",
  "pages.profile.tabsAria": "מקטעי פרופיל",
  "pages.profile.emptyHighlightsTitle": "אין עדיין סיבובים בספרים",
  "pages.profile.emptyHighlightsBody":
    "תמוך במשבצת בלוח והפרופיל שלך יתמלא: עקומת ערך, פעילות, אוסף ודירוג.",
  "pages.profile.collectionPerformance": "ביצועי אוסף",
  "pages.profile.chartWindowAria": "חלון תרשים",
  "pages.profile.chartEmpty": "עדיין אין ערך לאוסף. שמור שליפה מנצחת והעקומה תתחיל כאן.",
  "pages.profile.thisWindow": "חלון זה",
  "pages.profile.chartNoChanges": "אין שינויים באוסף בחלון זה.",
  "pages.profile.viewAll": "הצג את כל {n}",
  "pages.profile.collectionHighlights": "הדגשים באוסף",
  "pages.profile.seeAll": "הצג את כל {n}",
  "pages.profile.noCardsInVault": "עדיין אין קלפים בכספת. שמור שליפה והיא תופיע כאן כקלף מדורג.",
  "pages.profile.activityAria": "פעילות",
  "pages.profile.roundHistoryAria": "היסטוריית סיבובים",
  "pages.profile.onThisDevice": "{count} במכשיר הזה",
  "pages.profile.noActivityYet": "עדיין אין פעילות. סיבובים שבהם הימרת וקלפים ששמרת או מכרת יופיעו כאן.",
  "pages.profile.performanceAria": "ביצועים",
  "pages.profile.walletAria": "ארנק",
  "pages.profile.walletEyebrow": "ארנק",
  "pages.profile.emptyStatsBody": "תמוך במשבצת בלוח, והרווח וההפסד, שיעור הזכייה ופנקס הסיבובים שלך ייבנו כאן.",
  "pages.profile.findPlayerAria": "מצא שחקן",
  "pages.profile.lookUpWallet": "חפש ארנק",
  "pages.profile.walletPlaceholder": "הדבק כתובת ארנק או מזהה אורח",
  "pages.profile.view": "הצג",
  "pages.profile.myProfile": "הפרופיל שלי",

  // ===== pages.profile.withdraw.* (pages/RoyaleWithdrawPanel.tsx, mounted in
  // the #wallet section right below the walletEyebrow/walletAria header
  // above) - LOCAL/PROOF ONLY, no money moves off a money runtime, but the
  // copy is written in real-money voice since it is the real-money flow's UI.
  "pages.profile.withdraw.ariaLabel": "משיכת זכיות",
  "pages.profile.withdraw.title": "משיכה",
  "pages.profile.withdraw.subtitle": "משוך חלק מהיתרה או את כולה לארנק Solana.",
  "pages.profile.withdraw.available": "זמין",
  "pages.profile.withdraw.amountLabel": "סכום (USDC)",
  "pages.profile.withdraw.presetsAriaLabel": "סכומי משיכה מוכנים",
  "pages.profile.withdraw.destinationLabel": "ארנק יעד",
  "pages.profile.withdraw.destinationPlaceholder": "כתובת Solana",
  "pages.profile.withdraw.submit": "משוך",
  "pages.profile.withdraw.submitBusy": "מבקש משיכה...",
  "pages.profile.withdraw.note":
    "כל משיכה מאושרת בחתימת ארנק, וה-USDC משולמים לכתובת Solana שסיפקת.",
  "pages.profile.withdraw.errorInvalidAmount": "הזן סכום תקף (0.01 עד 10,000).",
  "pages.profile.withdraw.errorInvalidDestination": "הזן כתובת יעד חוקית של סולנה.",
  "pages.profile.withdraw.requesting": "מבקש משיכה של {amount}...",
  "pages.profile.withdraw.sent": "המשיכה נשלחה - {amount} אל {destShort}...",
  "pages.profile.withdraw.signatureRequired":
    "נדרשת חתימת ארנק - חתום על ה-nonce של המשיכה בארנק שלך (אסימון Privy לבדו נדחה).",
  "pages.profile.withdraw.refused": "המשיכה נדחתה ({error}).",

  // ===== pages.stats.* (RoyaleStatsPanel.tsx, the collapsible PLAYER STATS
  // dashboard mounted by the profile route's Stats tab). CAPS micro-labels are
  // a deliberate house style: keep a locale's own caps convention, never
  // lowercase them just because the source shouts. The GRAIL tier row keeps its
  // brand name in English and needs no key (see royaleI18n.ts's rules). ======
  "pages.stats.title": "סטטיסטיקת שחקנים",
  // Two independent counts in one line, so this is a single tokenized string
  // rather than a .one/.other pair (a pair cannot inflect two nouns at once).
  "pages.stats.summaryMeta": "{rounds} סיבובים · {packs} פאקים",
  "pages.stats.noRoundsYet": "אין סיבובים עדיין",
  "pages.stats.emptyBody": "עדיין אין סיבובים. תמוך במשבצת כדי להתחיל לעקוב אחר הרווח וההפסד, שיעור הזכייה והשליפות שלך.",
  "pages.stats.netPnl": "רווח והפסד נטו",
  "pages.stats.roi": "החזר ROI",
  "pages.stats.winRate": "שיעור זכייה",
  "pages.stats.totalStaked": "סה\"כ הימורים",
  "pages.stats.totalWon": "סה\"כ זכיות",
  "pages.stats.holdings": "החזקות",
  "pages.stats.cardsHeld.one": "{n} קלף",
  "pages.stats.cardsHeld.other": "{n} קלפים",
  "pages.stats.packsOpened": "פאקים שנפתחו",
  "pages.stats.chaseHits": "פגיעות במרדף",
  "pages.stats.bestRound": "הסיבוב הטוב ביותר",
  "pages.stats.worstRound": "הסיבוב הגרוע ביותר",
  "pages.stats.biggestPackPull": "השליפה הגדולה ביותר מפאק",
  "pages.stats.noneYet": "אין עדיין",
  "pages.stats.perTierHits": "להיטים לפי שכבה",
  "pages.stats.tierTop": "TOP",
  "pages.stats.tierCommon": "נפוצה",

  // ===== pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx, the CARD
  // ARENA's "see last round results" record page) ============================
  "pages.arenaResults.title": "תוצאות זירה",
  "pages.arenaResults.backToArena": "→ חזרה לזירה",
  "pages.arenaResults.emptyBody": "אין עדיין סיבוב זירה.",
  "pages.arenaResults.enterArena": "היכנס לזירה ←",
  "pages.arenaResults.matchNumber": "משחק #{n}",
  // The headline reads "<player name> takes the pot"; the self view uses the
  // second-person verb. The name itself is rendered as a separate node.
  "pages.arenaResults.youTakeThePot": "קח את הקופה",
  "pages.arenaResults.takesThePot": "לוקח את הקופה",
  "pages.arenaResults.potCards.one": "קופה · {n} קלף",
  "pages.arenaResults.potCards.other": "קופה · {n} קלפים",
  "pages.arenaResults.winner": "זוכה",
  "pages.arenaResults.theChase": "המרדף",
  "pages.arenaResults.protocol": "פרוטוקול",
  "pages.arenaResults.cardsValue.one": "{n} קלף · {amount}",
  "pages.arenaResults.cardsValue.other": "{n} קלפים · {amount}",
  "pages.arenaResults.cardsWonAria": "קלפים שזכית בהם",
  "pages.arenaResults.toTheWinner": "לזוכה",
  "pages.arenaResults.smallPot": "קופה של פחות מ-{n} קלפים: הזוכה לקח הכול. המרדף והפרוטוקול לא לקחו דבר.",

  // ===== pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx, the
  // shareable standalone /lab/royale/card/<key> dossier page. Its back link and
  // empty-state CTA reuse pages.common.backToBoard / pages.common.goToBoard.)
  "pages.cardDetailRoute.title": "תיק קלף",
  "pages.cardDetailRoute.notFoundTitle": "הקלף לא נמצא",
  "pages.cardDetailRoute.notFoundBody":
    "הקישור מפנה לקלף שהדפדפן הזה עדיין לא ראה. הקלפים נטענים מהסיבובים שלך ומתמונת הקופה הנוכחית של CollectorCrypt.",
  "pages.collection.viewRound": "הצג סיבוב ↗",
  "pages.sellBack.showAllOffers": "הצג את כל ההצעות של {n}",
  "pages.sellBack.showFewerOffers": "הצג פחות הצעות",
  "pages.common.shareCard": "שיתוף קלף",
} as Record<string, string>;
