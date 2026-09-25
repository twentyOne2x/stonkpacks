// Hebrew (עברית): "board" segment. Same key set as en/board.ts. Values are modern Israeli Hebrew.
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
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "שחקנים ורווח והפסד במזומן",
  "board.playerScoreboard.title": "שחקנים",
  "board.playerScoreboard.open": "נתונים והשתקה",
  "board.playerScoreboard.pinnedHint": "מוצמד · Esc לסגירה",
  "board.playerScoreboard.holdHint": "יש להחזיק את Tab כדי להציץ · לחיצה להצמדה",
  "board.playerScoreboard.close": "סגירת טבלת השחקנים",
  "board.playerScoreboard.windowAria": "חלון רווח והפסד",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "הכל",
  "board.playerScoreboard.partialHistory": "היסטוריה חלקית. הדירוגים מבוססים על חלון המזומן שנסגר ונשמר.",
  "board.playerScoreboard.statsUnavailable": "היסטוריית הרווח וההפסד אינה זמינה כאן. ההימורים הנוכחיים עדיין פעילים.",
  "board.playerScoreboard.playerColumn": "שחקן",
  "board.playerScoreboard.pnlColumn": "רווח והפסד במזומן",
  "board.playerScoreboard.voiceColumn": "צ׳אט",
  "board.playerScoreboard.loading": "השחקנים נטענים…",
  "board.playerScoreboard.empty": "אף אחד לא הימר על משבצת בסיבוב הזה.",
  "board.playerScoreboard.bot": "בוט",
  "board.playerScoreboard.tiles": "משבצות {tiles}",
  "board.playerScoreboard.stake": "הימור {amount}",
  "board.playerScoreboard.notAvailable": "לא זמין",
  "board.playerScoreboard.rounds": "{n} סיבובים",
  "board.playerScoreboard.youBadge": "את/ה",
  "board.playerScoreboard.mute": "השתקה",
  "board.playerScoreboard.unmute": "ביטול השתקה",
  "board.playerScoreboard.muteAria": "השתקת {name} בצ׳אט",
  "board.playerScoreboard.unmuteAria": "ביטול ההשתקה של {name} בצ׳אט",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "אתה",
  "board.common.noWin": "ללא ניצחון",
  "board.common.roundSettled": "הסיבוב הסתיים",
  "board.common.youWon": "זכית ב-{amount}",
  "board.common.pack": "פאק",
  "board.common.packs": "פאקים",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "נעול",
  "board.tile.lockedStampSub": "אין יותר הימורים",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: ההימור שלך בסך {bet} גבוה מהיתרה שלך ({balance}). הקטן את ההימור או הפקד.",
  "board.tile.ariaBack": "תמוך ב-{label} בסכום {amount}",
  "board.tile.ariaBackShortcutSuffix": ", קיצור דרך {shortcut}",
  "board.tile.ariaOddsChance": "סיכוי של {pct} לזכות",
  "board.tile.ariaBackers": "{count} תומכים",
  "board.tile.yourPortraitAlt": "הדיוקן שלך",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · אין עדיין פאק",
  "board.tile.noStake": "לא הימור",
  "board.tile.youOwn": "ברשותך {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "הפאקים נפתחים בנעילה",
  "board.tile.resultOpened": "נפתח · {amount} בקלפים",
  "board.tile.resultWinner": "זוכה · {amount} בקלפים",
  "board.tile.resultLost": "הגרלה אבודה · {amount} בקלפים",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "נפתח",
  "board.tile.resultWinnerWord": "זוכה",
  "board.tile.resultLostWord": "הפסיד בהגרלה",
  "board.tile.resultShortWon": "זכה",
  "board.tile.resultShortLost": "אבד",
  "board.tile.overBalance": "מעל היתרה",
  "board.tile.overBalanceTitle": "נדרש {needed} · יש לך {have}. הקטן את ההימור או הפקד.",
  "board.tile.overCap": "מעל תקרת {amount} שלך (בהגדרות)",
  "board.tile.needHave": "צריך {needed} · יש {have}",
  "board.tile.clueExactCardOdds": "הקלף המדויק הזה · {pct} שליפה",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "סכום ההימור",
  "board.stakeControl.packMatchTitle": "כל לחיצה על משבצת מהמרת על פאק שלם אחד מסוג {packName}.",
  "board.stakeControl.packMatchTag": "הימור על פאק אחד מסוג {packName} בכל לחיצה",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural.
  "board.stakeControl.packMatchTitleOne": "כל לחיצה על משבצת מהמרת על {n} פאקים שלמים מסוג {packName}.",
  "board.stakeControl.packMatchTitleOther": "כל לחיצה על משבצת מהמרת על {n} פאקים שלמים מסוג {packName}.",
  "board.stakeControl.packMatchTagOne": "הימור על {n} פאק מסוג {packName} בכל לחיצה",
  "board.stakeControl.packMatchTagOther": "הימור על {n} פאקים מסוג {packName} בכל לחיצה",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} פאקים מסוג {packName} בכל לחיצה",
  "board.stakeControl.bidPackGroupAria": "הימור פאק שלם על משבצת",
  "board.stakeControl.bidPackTag": "המר על פאק",
  "board.stakeControl.bidPackInfoTitle":
    "לחיצה אחת מציבה פאק שלם וסגור על משבצת. הפאק נשאר כפי שהוא ולעולם אינו מתמזג לפאק גדול יותר.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "בחר פאק וכמות. לחיצה אחת מהמרת על כל הערימה במשבצת - פאקים גדולים יותר מאפשרים שליפת קלפים גדולים יותר. מקשי המספרים 1 עד 8 בוחרים את המשבצת.",
  "board.stakeControl.bidPackInfoAria": "מהו הימור על פאק?",
  "board.stakeControl.packSelectedTitle": "נבחר. לחץ שוב כדי לחזור להימור של {amount}.",
  "board.stakeControl.packChipTitle": "כל לחיצה על משבצת מהמרת על פאק אחד מסוג {packName} ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "נבחר. כל לחיצה על משבצת מהמרת על {n} פאק מסוג {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "נבחר. כל לחיצה על משבצת מהמרת על {n} פאקים מסוג {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "כל לחיצה על משבצת מהמרת על {n} פאק מסוג {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "כל לחיצה על משבצת מהמרת על {n} פאקים מסוג {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "מעל היתרה",
  "board.stakeControl.overBalanceBody": "נדרש יותר ממזומן בסך {amount}.",
  "board.stakeControl.bidAmountTag": "הימור בסכום",
  "board.stakeControl.bidAmountInfoTitle":
    "הוסף כל סכום של דולרים למשבצת. עודף קטן מצטבר לפאקים גדולים יותר כשהוא חוצה את מחירו של כל פאק.",
  "board.stakeControl.bidAmountInfoAria": "מהי הצעת סכום?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "הוסף להימור של משבצת",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "הימור סכום על משבצת",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "מספר פאקים להימור בכל לחיצה",
  "board.stakeControl.packCountDecAria": "המר על פחות פאקים בכל לחיצה",
  "board.stakeControl.packCountIncAria": "המר על יותר פאקים בכל לחיצה",
  "board.stakeControl.packCountValueTitleOne": "{n} פאק מהדרג שנבחר בכל לחיצה",
  "board.stakeControl.packCountValueTitleOther": "{n} פאקים מהדרג שנבחר בכל לחיצה",
  "board.stakeControl.incrementTitle": "הגדל את ההימור שנבחר ל-{amount}",
  "board.stakeControl.customAriaLabel": "סכום הימור מותאם אישית ב-USDC, נשמר בלחיצה על Enter או מחוץ לשדה",
  "board.stakeControl.customOverBalanceTitle": "מעל היתרה שלך ({amount}). הפקד או הקטן את ההימור.",
  "board.stakeControl.customTitle": "הקלד סכום כלשהו; Enter או לחיצה מחוץ לשדה יקבעו אותו",
  "board.stakeControl.resetTitle": "אפס הימור שנבחר ל-{amount}",
  "board.stakeControl.reset": "אפס",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "אסטרטגיית הימור אוטומטי, מופעלת בסיום הסיבוב",
  "board.betRail.strategyArmedTip": "מופעלת, תופעל בעוד {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, מופעלת, תופעל בעוד {seconds} שניות",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, מופעלת, תופעל בעוד {seconds} שניות. לחץ כדי להשבית.",
  "board.betRail.strategyAriaClickArm": "{name}. לחץ כדי להפעיל.",
  "board.betRail.moreStrategiesAria": "אסטרטגיות הימור אוטומטי נוספות",
  "board.betRail.moreStrategiesTitle": "אסטרטגיות נוספות",
  "board.betRail.cancelArmedAria": "בטל הימור אוטומטי מופעל",
  "board.betRail.autoBetCancelled": "ההימור האוטומטי בוטל.",
  "board.betRail.roundLockedSkip": "הסיבוב ננעל לפני שההימור האוטומטי יכול היה לפעול.",
  "board.betRail.notEnoughBalanceSkip": "אין מספיק יתרה, ולכן ההימור האוטומטי לא הופעל.",
  "board.betRail.firedAtClose": "{name} הופעל בסיום הסיבוב.",
  "board.betRail.firedAtClosePartial": "{name} הופעל בסיום הסיבוב: {covered} מתוך {total} משבצות.",
  "board.betRail.strategyGuideAria": "מדריך לאסטרטגיות הימור אוטומטי",
  "board.betRail.strategyGuideTitle": "מדריך אסטרטגיה",
  "board.betRail.autoBetEyebrow": "הימור אוטומטי",
  "board.betRail.firesInSeconds": "מופעל בעוד {seconds}s",
  "board.betRail.strategiesDialogAria": "אסטרטגיות הימור אוטומטי",
  "board.betRail.closeStrategiesAria": "סגור אסטרטגיות הימור אוטומטי",
  "board.betRail.strategiesHeading": "אסטרטגיות הימור אוטומטי",
  "board.betRail.strategiesIntro":
    "הקש על אסטרטגיה כדי להפעיל אותה עם ההימור שבחרת ({amount}). היא פועלת ממש לפני נעילת הסיבוב, ומדורגת לפי סכום הכסף שעל כל משבצת באותו רגע - אות הקהל.",
  "board.betRail.contrarianHeading": "בחירות נגד הזרם",
  "board.betRail.contrarianIntro":
    "כשכולם רודפים אחרי המשבצת הנמוכה ביותר היא נעשית צפופה, ולכן המשבצת השנייה מהסוף עשויה לשלם יותר. הבחירות האלה נשארות מחוץ לסרגל הראשי כדי לשמור עליו נקי.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "החשבון שלך וסכום ההימור",
  "board.betRail.balance": "יתרה",
  "board.betRail.activeStakes": "הימורים פעילים",
  "board.betRail.collection": "אוסף",
  "board.betRail.cardCountViewAllSingular": "{count} קלף · הצג הכול",
  "board.betRail.cardCountViewAllPlural": "{count} קלפים · הצג הכול",
  "board.betRail.moreCount": "+{count} עוד",
  "board.betRail.noCardsYet": "אין עדיין קלפים באוסף. זכה במשבצת ושמור את הקלף שלה.",
  "board.betRail.lastResult": "תוצאה אחרונה",
  "board.betRail.eachClickAdds": "כל קליק מוסיף {amount}",
  "board.betRail.depositToPlay": "הפקד כדי לשחק",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "צריך {unit} - יש לך {balance}",
  "board.betRail.allTilesPartialCover": "{name} - מכסה {covered} מתוך 8 משבצות ב-{unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "יתרה",
  "board.betRail.dockStakes": "הימורים",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "הסיבוב הבא בעוד {seconds} שניות",
  "board.core.nextRoundLine": "הסיבוב הבא ב-{secs}",
  "board.core.playersDecidingAria": "{decided} מתוך {total} שחקנים אחרים החליטו",
  "board.core.playersDecidingLine": "שחקנים מחליטים {ratio}",
  "board.core.pastRoundResultsAria": "תוצאות סיבוב קודמות",
  "board.core.pastRounds": "סיבובים קודמים",
  "board.core.winsAmount": "{label} זוכה ב-{amount}",
  "board.core.youLost": "הפסדת!",
  "board.core.didNotStake": "לא הימרת בסיבוב הזה",
  "board.core.keepCard": "שמור קלף ({amount})",
  "board.core.sellAmount": "מכור {amount}",
  "board.core.decideHint": "החלט עכשיו או במהלך הסיבוב הבא",
  "board.core.roundResultLink": "תוצאת סיבוב #{roundId}",
  "board.core.fullReceiptHint": "קבלה מלאה ← סיבוב תוצאות",
  "board.core.splitReceiptHint": "פיצול · קבלה ← סיבוב תוצאות",
  "board.core.eyebrowDrawing": "הזוכה בהגרלה",
  "board.core.eyebrowPullsIn": "השליפות התקבלו",
  "board.core.eyebrowLocked": "נעול",
  "board.core.headlineDrawing": "כרטיס הגרלה אחד מכריע",
  "board.core.headlinePullsIn": "כל פאק פתוח",
  "board.core.headlineRoundLocked": "סיבוב נעול",
  "board.core.headlinePacksOpening": "הפאקים נפתחים...",
  "board.core.subDrawing": "הגרלה משוקללת ניתנת לאימות",
  "board.core.subPullsIn": "הזוכה נשלף עכשיו",
  "board.core.subIntro": "{count} {noun} על הקו",
  "board.core.subOpening": "{count} {noun} נפתחים בלוח",
  "board.core.pool": "קופה",
  "board.core.totalPool": "סה\"כ קופה",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "הסיבוב פתוח",
  "board.core.clockLockedRevealing": "נעול · חשיפה",
  "board.core.clockSettled": "הוסדר",
  "board.core.clockAriaLabel": "{label}, {seconds} שניות",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "קלף מדורג רגיל: התומך המוביל שומר אותו או מוכר אותו בחזרה, בחלוקה יחסית.",
  "board.settlement.dispositionSellBackSplit": "כלל Grail: נמכר בחזרה כברירת מחדל, וה-USDC מתחלק בין תומכי המשבצת.",
  "board.settlement.dispositionTopBackerKeeps": "כלל Grail: התומך המוביל שומר אותו ומשלם לאחרים את חלקם.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s כדי להחליט",
  "board.settlement.panelAria": "פרטי המשבצת וההתחשבנות",
  "board.settlement.collapsePanelAria": "כווץ החלונית",
  "board.settlement.expandPanelAria": "הרחב את החלונית",
  "board.settlement.roundResultsLink": "תוצאות הסיבוב",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "לוח הסיבוב",
  "board.settlement.clickTileToBack": "הזכיות נוחתות כאן. לחץ על משבצת כלשהי כדי לתמוך בה בסכום {amount}.",
  "board.settlement.lastResultLine": "תוצאה אחרונה · סיבוב #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "זכית ב-{amount}",
  "board.settlement.view": "הצג",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "משבצת מפסידה · למה הפסידה",
  "board.settlement.losingTileTitle": "{label} · {amount} על משבצת",
  "board.settlement.loserWhy":
    "נפתח {cardName} ({amount}), וההגרלה נפלה על {winnerLabel}. {pct} מכרטיסי ההגרלה לא שילמו דבר{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", כולל ה-{amount} שלך.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "המשבצת הזו הייתה ריקה - אין הימור ואין כרטיס הגרלה.",
  "board.settlement.backToSettlement": "חזרה להתחשבנות · {winnerLabel} זכה",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · קלף {index}/{total} · {amount} במשבצת",
  "board.settlement.pullCaptionSingle": "{label} · {amount} על משבצת",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "הפאקים נפתחים",
  "board.settlement.revealOpenedTitle": "{label} פתח את {cardName}",
  "board.settlement.revealOddsLine": "{amount} · סיכוי של {pct} לקחת את הקופה בסך {poolAmount}. הזוכה נשלף עכשיו.",
  "board.settlement.revealEmpty": "הפאקים נפתחים על הלוח, והגרלת הזוכה תגיע בעוד רגע.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "תוצאה אחרונה · סיבוב #{roundId}",
  "board.settlement.tileTakesTable": "{label} לוקח את הקופה בסך {amount}",
  "board.settlement.whyWon": "נבחר בהגרלה המשוקללת הניתנת לאימות; {label} החזיק {pct}% מהקופה בזמן הנעילה.",
  "board.settlement.lostNoStakeIn": "הפסדת, אין לך הימור ב-{label}",
  "board.settlement.theWinnerFallback": "המנצח",
  "board.settlement.wonNoStake": "{label} זכה · לא היה לך הימור",
  "board.settlement.aTileFallback": "משבצת",
  "board.settlement.lossNoteWithStake": "ה-{amount} שלך היה במשבצות אחרות; רחף על אחת מהן כדי לקרוא את הסיפור שלה.",
  "board.settlement.lossNoteNone": "לא תמכת במשבצת בסיבוב הזה.",
  "board.settlement.topCardOfRound": "הקלף המוביל בסיבוב · {label}",
  "board.settlement.keepCardTo": "שמור קלף ({amount}) ← לאוסף",
  "board.settlement.sellBackFor": "מכור בחזרה תמורת {amount}",
  "board.settlement.continueNextRound": "המשך לסיבוב הבא",
  "board.settlement.continue": "המשך",
  "board.settlement.keepSellHint":
    "שמור = קלף לאוסף · מכור = {amount} עכשיו ({pct}% מערך הקלף, בתעריף הרכישה החוזרת של פאק זה ב-CC) · {noAction}",
  "board.settlement.noActionKept": "אין פעולה = הקלף נשמר עבורך.",
  "board.settlement.noActionAutoSell": "אין פעולה = מכירה אוטומטית כשהסיבוב הבא מסתיים.",
  "board.settlement.revealOnlyNote":
    "בגרסה הזו המשבצות המפסידות מציגות חשיפה בלבד והשליפות שלהן חוזרות לכספת. רק הקלף של המשבצת הזוכה משולם.",
  "board.settlement.payoutSplit": "חלוקת התשלום",
  "board.settlement.poolChaseFeedLine": "קופה {pool} · הזנת המרדף {feed}",
  "board.settlement.chaseAddSuffix": " · המרדף +{amount}",
  "board.settlement.physicalCardArrow": "קלף פיזי ←",
  "board.settlement.grailSecuredSuffix": " (Grail נשמר)",
  "board.settlement.grailSoldBack": "Grail נמכר בחזרה ({amount}) ← חלוקת USDC למעלה.",
  "board.settlement.cardAssignmentHead": "הקצאת קלפים",
  "board.settlement.cardLabel": "קלף {amount}",
  "board.settlement.soldToVault": "נמכר לכספת · הכנסות בפיצול",
  "board.settlement.decisionTopBackerSuffix": " (תומך מוביל · שמירה או מכירה)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} מתוך ה-USDC שלהם",
  "board.settlement.cardsSpreadNote":
    "קלפים מתחלקים בין כמה שיותר תומכים - קלף מוקצה עולה לפי תעריף הרכישה החוזרת שלו ב-CC (85-93% לפי הפאק) מתוך ה-USDC של אותו תומך (אותו ערך כספי כמו מכירה, אך התומך שומר את העלייה האפשרית). רק קלפים שאי אפשר להקצות נמכרים לכספת.",
  "board.settlement.chaseHitLabel": "פגיעת המרדף!",
  "board.settlement.chasePaidLine": "{amount} שולם לחלוקה הזו.",
  "board.settlement.chaseMissLabel": "אין שליפת מרדף.",
  "board.settlement.chaseNowLine": "המרדף עומד עכשיו על {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "אמת את ההגרלה",
  "board.settlement.verifyDrawSub": "הגרלה הניתנת לאימות · הצג את קבלת ההגרלה",
  "board.settlement.roundIdLabel": "מזהה סיבוב",
  "board.settlement.winningDrawLabel": "הגרלת הזוכה",
  "board.settlement.drawSeedLabel": "זרע ההגרלה",
  "board.settlement.proofIdLabel": "מזהה הוכחה",
  "board.settlement.ticketOfCount": "#{index} מתוך {count}",
  "board.settlement.verifying": "מאמת...",
  "board.settlement.recheckDraw": "בדוק שוב את ההגרלה",
  "board.settlement.verifierLink": "מאמת ↗",
  "board.settlement.verifiedOk": "✓ ההגרלה אומתה; הזוכה תואם מחדש לזרע ההגרלה שפורסם.",
  "board.settlement.verifiedBad": "✗ ההגרלה הזו לא תאמה מחדש לזרע שלה; אין לסמוך עליה.",
  "board.settlement.everyRoundNote": "בכל סיבוב נבחר זוכה אחד מזרע שפורסם שאפשר לבדוק מחדש.",
  "board.settlement.noPacksNote": "לא הימרו על פאקים בסיבוב הזה, לכן אין מה להגריל.",
  "board.settlement.settledHoverHint": "הסיבוב הסתיים; רחף על משבצת כדי לבדוק אותה.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "הימור גדול מדי עבור היתרה שלך",
  "board.betTooBig.dismissAria": "סגור",
  "board.betTooBig.gotIt": "הבנתי",
  "board.betTooBig.body": "תמיכה ב-{slotLabel} דורשת {needed}, ויש לך {held}. חסרים לך {shortfall}.",
  "board.betTooBig.deposit": "הפקד {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "שחקנים, מדורגים לפי ההימור הכולל",
  "board.wagerLadder.title": "שחקנים",
  "board.wagerLadder.countZero": "עדיין אין הימורים",
  "board.wagerLadder.countOther": "{n} בסיבוב · לפי ההימור הכולל",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "כווץ חלונית השחקנים",
  "board.wagerLadder.lastRoundAria": "ראה את תוצאות הסיבוב האחרונות, סיבוב #{n}",
  "board.wagerLadder.lastRoundLabel": "ראה את התוצאות האחרונות של הסיבוב",
  "board.wagerLadder.empty": "אף אחד עדיין לא תמך במשבצת בסיבוב הזה.",
  "board.wagerLadder.leaderAria": "מוביל",
  "board.wagerLadder.openProfileTitle": "פתח את הפרופיל של {name} בכרטיסייה חדשה",
  "board.wagerLadder.miniGridTotal": "{amount} סך הכל",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "המשבצות שעליהן {name} תמך",
  "board.wagerLadder.miniGridTilesAriaYou": "המשבצות שעליהן תמכת",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "מכור מהמלאי כדי לממן את ההימור",
  "board.bidFund.eyebrow": "אין מספיק USDC",
  "board.bidFund.titleOne": "למכור את הקלף שלך כדי לכסות את ההימור הזה?",
  "board.bidFund.titleMany": "למכור את הקלפים האלה כדי לכסות את ההימור הזה?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "מכירת {cards} תניב {buyback}, מספיק כדי לתמוך ב-{tile} בסכום {amount}.",
  "board.bidFund.bodyCardsMany": "הקלפים האלה",
  "board.bidFund.note":
    "חסרים לך {amount}. קלפים נמכרים בתעריף הרכישה החוזרת של הפאק שלהם ב-CC (85 עד 93%). אי אפשר לבטל זאת.",
  "board.bidFund.keepCards": "שמור את הקלפים",
  "board.bidFund.sellAndBid": "מכור והמר {amount}",
  "board.bidFund.autoSellSwitch": "מכור את הזכיות שלי עבור USDC באופן אוטומטי",
  "board.bidFund.autoSellNoteOn":
    "כל זכייה נפדית לפי תעריף הרכישה החוזרת ברגע שהיא מתקבלת. בלי בקשות שמירה או מכירה. קלפי Grail לעולם אינם נמכרים אוטומטית. אפשר לשנות זאת בכל עת בהגדרות.",
  "board.bidFund.autoSellNoteOff":
    "הפעל זאת וכל קלף שתזכה בו ייפדה ל-USDC לפי תעריף הרכישה החוזרת, בלי בקשות. קלפי Grail לעולם אינם נמכרים אוטומטית. אפשר לשנות זאת בכל עת בהגדרות.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "הימור עם מקשי מספרים?",
  "board.hotkeys.optInBody":
    "לחיצה על מקש תתמוך מיד במשבצת עם ההימור הנוכחי שלך. כרגע לא הוצב דבר.",
  "board.hotkeys.notNow": "לא עכשיו",
  "board.hotkeys.enableKeys": "הפעל מקשים",
  "board.hotkeys.turnOff": "כבה",
  "board.hotkeys.turnOffTitle": "המקשים נשארים כבויים עד שתפעיל אותם מחדש בהגדרות.",
  "board.hotkeys.changeKeys": "שנה מקשים",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "פתיחת משבצת",
  "board.boardV1.onTile": "במשבצת",
  "board.boardV1.changeAmount": "עודף {amount}",
  "board.boardV1.oddsSuffix": "{pct} סיכויים",
  "board.boardV1.openedOdds": "נפתח · סיכוי של {pct}",
  "board.boardV1.emptyNeverInDraw": "ריק · לעולם לא בהגרלה",
  "board.boardV1.winnerYourShare": "זוכה · החלק שלך משולם",
  "board.boardV1.winnerNoStake": "זוכה · לא היה לך הימור",
  "board.boardV1.lostOdds": "הגרלה אבודה · סיכוי של {pct}",
  "board.boardV1.tileClickTitle": "לחץ בכל מקום כדי לתמוך ב-{label} בסכום {amount}",
  "board.boardV1.youAmount": "אתה {amount}",
  "board.boardV1.youNone": "אתה -",
  "board.boardV1.pctOfTile": "{pct} של משבצת",
  "board.boardV1.noStakeYet": "עדיין לא הימור",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "מוביל · ",
  "board.boardV1.backerPopStake": "{amount} תמיכה · {pct} מהמשבצת",
  "board.boardV1.statusWaitingDraw": "ממתין להגרלה...",
  "board.boardV1.statusWonSplit": "זכה ב-{amount} מהפיצול",
  "board.boardV1.statusOnWinningTile": "על המשבצת המנצחת",
  "board.boardV1.statusNoPayout": "אין תשלום בסיבוב הזה",
  "board.boardV1.statusYourStake": "ההימור הפעיל שלך",
  "board.boardV1.statusBacking": "תמיכה במשבצת הזו",
  "board.boardV1.backerCount.one": "{n} תומך",
  "board.boardV1.backerCount.other": "{n} תומכים",
  "board.boardV1.noBackersYet": "אין עדיין תומכים",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "תמוך ב-{amount}",
  "board.boardV1.backBtnTitle": "תמוך ב-{label} בסכום {amount} USDC",
  "board.boardV1.evolveTitle": "תמיכה נוספת בדיוק בסך {amount} ב-{label}",
  "board.boardV1.hoverTitle": "{label} · {amount} על משבצת",
  "board.boardV1.opensAs": "נפתח בתור · {summary}",
  "board.boardV1.noPacksYet": "אין עדיין פאקים; תמוך במשבצת כדי לממן את הפאק הראשון",
  "board.boardV1.whyOpenedDrawing":
    "נפתח {cardName} ({amount}) בסיכוי של {pct}; הזוכה נשלף עכשיו.",
  "board.boardV1.whyWon":
    "זכה בהגרלה המשוקללת בסיכוי של {pct}. נפתח {cardName} ({amount}); הקופה חולקה באופן יחסי בין התומכים שלו.",
  "board.boardV1.whyLost":
    "הפסיד בהגרלה המשוקללת, בסיכוי של {pct} ({amount} מתוך קופה של {poolAmount}). הוא עדיין פתח את {cardName} ({cardAmount}), אבל רק המשבצת הזוכה משלמת.",
  "board.boardV1.whyEmpty": "משבצת ריקה - אין הימור ואין כרטיס הגרלה.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " ההימור שלך כאן: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " לא היה לך הימור כאן.",
  "board.boardV1.ifWins": "אם המשבצת הזו תנצח: תקבל בערך ~{amount} מתוך הקופה {poolAmount}.",
  "board.boardV1.clickToBack": "לחץ כדי לתמוך בהימור שנבחר ולפתוח את הפאק הראשון שלה עם הנעילה.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "דירוג {rank}, {name}, הימר {wagered}, נטו {net}, שיעור זכייה {pct} אחוז",
  "board.leaderboard.youTag": "אתה",
  "board.leaderboard.youRankTag": "אתה · #{n}",
  "board.leaderboard.statWagered": "סכום הימורים",
  "board.leaderboard.statNetPl": "רווח והפסד נטו",
  "board.leaderboard.statWinRate": "שיעור זכייה",
  "board.leaderboard.statRounds": "סיבובים",
  "board.leaderboard.statPoolShare": "חלק מהקופה",
  "board.leaderboard.statFirstSeen": "נראה לראשונה",
  "board.leaderboard.statBiggestPull": "שליפה הכי גדולה",
  "board.leaderboard.shareOfToday": "מההימורים של היום",
  "board.leaderboard.shareOfAllTime": "מההימורים בכל הזמנים",
  "board.leaderboard.noneYet": "אין עדיין",
  "board.leaderboard.viewFullProfile": "הצג את הפרופיל המלא",
  "board.leaderboard.live": "בשידור חי",
  "board.leaderboard.fullRankings": "דירוג מלא",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} שחקן",
  "board.leaderboard.playerCount.other": "{n} שחקנים",
  "board.leaderboard.roundCount.one": "{n} סיבוב",
  "board.leaderboard.roundCount.other": "{n} סיבובים",
  "board.leaderboard.colPlayer": "שחקן",
  "board.leaderboard.colWagered": "הימר",
  "board.leaderboard.colNet": "נטו P&L",
  "board.leaderboard.colWin": "זכייה",
  "board.leaderboard.colBiggestPull": "השליפה הגדולה ביותר",
  "board.leaderboard.sortGroupAria": "מיון הדירוג",
  "board.leaderboard.sortBy": "מיון לפי {col}",
  "board.leaderboard.podiumNet": "{amount} נטו",
  "board.leaderboard.podiumTopPull": "השליפה המובילה",
  "board.leaderboard.fullStandings": "דירוג מלא · {n} מהמרים",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} {packName} פאק ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} {packName} פאקים ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "תמונת פרופיל X של {handle}",
  "board.connectX.connectedTitle": "מחובר באמצעות X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "משבצת {packName} (אין במשבצת זו)",
  "board.packChips.fixedChipTitle": "{n} × {packName}, {amount} לכל אחד",
  "board.packChips.fixedChipTitleTotalSuffix": " - {amount} בסך הכול",
  "board.packChips.usdcChange": "USDC {amount}",
  "board.packChips.pooledAll": "נוצר מהכסף המצטבר של המשבצת - אף אחד לא הימר ישירות על הפאק הזה",
  "board.packChips.pooledSome": "{n} מתוך {total} נוצרו מהכסף המצטבר של המשבצת",
  "board.packChips.bidWhole": "הימור על פאק שלם",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "גם במשבצת זו: {list}",
  "board.packChips.morePacks.one": "עוד {n} פאק",
  "board.packChips.morePacks.other": "עוד {n} פאקים",
  "board.packChips.morePacksWithList.one": "עוד {n} פאק: {list}",
  "board.packChips.morePacksWithList.other": "{n} פאקים נוספים: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "הימורים {bids} · קופה {pool}",
  "board.tile.splitAllBids": "כל {bids} הועמד כהימור על פאקים שלמים",
  "board.tile.splitAllPool": "כל ה-{pool} הוא העודף הקטן של המשבצת",
  "board.tile.splitPoolNote": "הפאקים המקווקווים נוצרו מהקופה; אף אחד לא הימר עליהם.",
  "board.tile.evolveLooseTitle": "עודף קטן של {loose} במשבצת הזו מתפתח לפאק {tier} ב-{target}",
  "board.tile.evolveNoLooseTitle":
    "עדיין אין עודף קטן במשבצת הזו. עודף קטן יתפתח לפאק {tier} ב-{target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - מכסה {covered} מתוך {total} משבצות ב-{unit}",
  "board.betRail.allTilesPlanFull": "בסיום הסיבוב יתמוך בכל {total} המשבצות ב-{unit}. סך ההוצאה {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "בסיום הסיבוב הוא יתמוך ב-{covered} מתוך {total} משבצות ב-{unit}. היתרה שלך ({balance}) מכסה {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "בסיום הסיבוב הוא יתמוך ב-{covered} מתוך {total} משבצות ב-{unit}. היתרה שלך ({balance}) מכסה {spend}.",
  "board.betRail.allTilesPlanNone": "היתרה שלך ({balance}) אינה מכסה אפילו הימור אחד של {unit}, לכן לא תהיה תמיכה באף משבצת.",
  "board.betRail.allTilesShortHistory.one":
    "הימור אוטומטי על כל המשבצות דורש {needed} עבור {tiles} משבצות ב-{unit}. יש לך {balance}, לכן הוא תמך ב-{covered} משבצת.",
  "board.betRail.allTilesShortHistory.other":
    "הימור אוטומטי על כל המשבצות דורש {needed} עבור {tiles} משבצות ב-{unit}. יש לך {balance}, לכן הוא תמך ב-{covered} משבצות.",
  "board.betRail.allTilesNoneHistory":
    "הימור אוטומטי על כל המשבצות דורש {needed} עבור {tiles} משבצות ב-{unit}. יש לך {balance}, לכן לא נתמכה אף משבצת.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "בסיום הסיבוב",
  "board.betRail.planTotal": "סך הכול",
  "board.betRail.planMathFull": "{total} משבצות × {amount}",
  "board.betRail.planMathShort": "{covered} מתוך {total} משבצות × {amount}",
  "board.betRail.planPerTile": "{unit} לכל משבצת",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // Extracted from QUICK_BET_STRATEGY_META, which used to hold these sentences
  // inline as a module-level const: built once at import, so the auto-bet rail
  // stayed English in all ten locales (a Japanese board rendered "Top | Bottom
  // | All"). The map now reads each of these through a t() getter at property
  // access. Six keys x five strategies; `glyph` is a symbol, not copy.
  //   .label     the narrow rail chip caption (3 to 6 chars in en, HARD width
  //              budget: it sits three-across in a ~250px rail)
  //   .name      hover tooltip + aria-label, also substituted into the {name}
  //              token of board.betRail.strategyAria* / firedAtClose
  //   .detail    the ⓘ popover's longer explanation
  //   .rowTitle  short tile name, bolded half of the desktop row
  //   .closeLine rendered after rowTitle as "rowTitle, closeLine"
  //   .gridLine  compact plain-words line, must stay a few words
  // ARM framing everywhere: a click ARMS the strategy and it fires itself just
  // before the round locks, so the ranking always resolves "at round close",
  // never "now".
  "board.strategy.highest.label": "גבוהה ביותר",
  "board.strategy.highest.name": "הפעל: תמיכה במשבצת הגבוהה ביותר בסיום הסיבוב",
  "board.strategy.highest.detail":
    "מפעילה את ההימור שלך על המשבצת עם סכום הכסף הגדול ביותר, כפי שייקבע ממש לפני סיום הסיבוב.",
  "board.strategy.highest.rowTitle": "משבצת עליונה",
  "board.strategy.highest.closeLine": "תומכת במשבצת הגדולה ביותר בסיום הסיבוב",
  "board.strategy.highest.gridLine": "הכי הרבה כסף בסיום",

  "board.strategy.lowest.label": "נמוכה ביותר",
  "board.strategy.lowest.name": "הפעל: תמיכה במשבצת הנמוכה ביותר בסיום הסיבוב",
  "board.strategy.lowest.detail":
    "מפעילה את ההימור שלך על המשבצת הכי פחות צפופה, כפי שייקבע ממש לפני סיום הסיבוב. אם כולם יצטופפו על הנמוכה ביותר, היא כבר לא תהיה הנמוכה ביותר באותו רגע.",
  "board.strategy.lowest.rowTitle": "המשבצת הנמוכה ביותר",
  "board.strategy.lowest.closeLine": "תומכת במשבצת הקטנה ביותר בסיום הסיבוב",
  "board.strategy.lowest.gridLine": "הכי מעט כסף בסיום",

  "board.strategy.secondHighest.label": "שנייה בגובהה",
  "board.strategy.secondHighest.name": "הפעל: תמיכה במשבצת השנייה בגובהה בסיום הסיבוב",
  "board.strategy.secondHighest.detail":
    "מפעילה את ההימור שלך מדרגה אחת מתחת למוביל, כפי שייקבע ממש לפני סיום הסיבוב.",
  "board.strategy.secondHighest.rowTitle": "המשבצת השנייה בגובהה",
  "board.strategy.secondHighest.closeLine": "תומכת במשבצת שמתחת למוביל בסיום הסיבוב",
  "board.strategy.secondHighest.gridLine": "מדרגה אחת מתחת למוביל",

  "board.strategy.secondLowest.label": "שנייה מהסוף",
  "board.strategy.secondLowest.name": "הפעל: תמיכה במשבצת השנייה מהסוף בסיום הסיבוב",
  "board.strategy.secondLowest.detail":
    "בחירת תיאוריית הקהל: כשכולם רודפים אחרי המשבצת הנמוכה ביותר היא נעשית צפופה, ולכן השנייה מהסוף עשויה לשלם יותר. מופעלת עכשיו ונקבעת ממש לפני סיום הסיבוב.",
  "board.strategy.secondLowest.rowTitle": "המשבצת השנייה מהסוף",
  "board.strategy.secondLowest.closeLine": "תומכת במשבצת שמעל התחתית הצפופה בסיום הסיבוב",
  "board.strategy.secondLowest.gridLine": "מדרגה אחת מעל התחתית",

  "board.strategy.allTiles.label": "כל",
  "board.strategy.allTiles.name": "הפעל: תמיכה בכל משבצת בסיום הסיבוב",
  "board.strategy.allTiles.detail":
    "מפעילה את ההימור שלך על כל משבצת מתאימה, כפי שייקבע ממש לפני סיום הסיבוב. סך ההוצאה = סכום ההימור שלך × מספר המשבצות באותו רגע.",
  "board.strategy.allTiles.rowTitle": "כל המשבצות",
  "board.strategy.allTiles.closeLine": "פורסת את ההימור שלך בסיום הסיבוב",
  "board.strategy.allTiles.gridLine": "ההימור שלך בכל משבצת",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "הקש שוב: {unit}",
  "board.tile.confirmClickAgain": "לחץ שוב: {unit}",
  "board.tile.betOffNotice": "ההימורים כבויים בהגדרות",
  "board.stakeControl.pickPackHint": "בחר פאק להימור",
  "board.stakeControl.emptyStakeLead": "בחר פאק",
  "board.stakeControl.emptyStakeHint": "זה הופך להימור שלך",
  "gear.betInput.label": "הצבת הימור",
  "gear.betInput.hint":
    "כך לחיצה על משבצת (או על מקש המספר שלה) מציבה את ההימור שלך. במצב הקשה כפולה נדרשת הקשה נוספת לאישור - ברירת המחדל במסך מגע. במצב כבוי זהו מצב צפייה: שום דבר לא יכול להציב הימור.",
  "gear.betInput.optionSingle": "הקשה אחת",
  "gear.betInput.optionDouble": "הקשה כפולה",
  "gear.betInput.optionOff": "כבוי",
  "gear.cardOpen.label": "פתיחת קלפים",
  "gear.cardOpen.hint":
    "במצב הקשה כפולה נדרשת הקשה לאישור לפני שצד הקלף פותח את הדף שלו - ברירת המחדל במסך מגע.",
} as Record<string, string>;
