// Hebrew (עברית): "cinema" segment. Same key set as en/cinema.ts. Values are modern Israeli Hebrew.
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
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "פתיחת פאקים",
  "cinema.phaseAnnounce.packsOpening.subtitle": "חשיפת קלפים · תמחור מחדש של כל משבצת",
  "cinema.phaseAnnounce.winnerDraw.title": "הגרלת הזוכה",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "משוקללת לפי סכום המשבצת",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "נעול: הלוח הוא התוכנית",
  "cinema.phase.packsEnter.copy": "הפאקים מגיעים ללוח",
  "cinema.phase.packsOpening.copy": "הפאקים נפתחים: הקלפים נחשפים והמשבצות מתומחרות מחדש",
  "cinema.phase.cardsByTile.copy": "הקלפים נחשפו: בכל משבצת, קודם הערך",
  "cinema.phase.valueScan.copy": "סריקת הלוח: השליפות הגדולות זוהרות",
  "cinema.phase.winnerDraw.copy": "הגרלת הזוכה: משוקללת לפי סכום המשבצת",
  "cinema.phase.winnerLock.copy": "הזוכה ננעל",
  "cinema.phase.loserValueConverge.copy": "שליפות מהמשבצות המפסידות חוזרות לכספת: הערך שלהן עובר לזוכה",
  "cinema.phase.winnerPotCountUp.copy": "הקופה נוחתת על המשבצת המנצחת",
  "cinema.phase.chaseFeed.copy": "המרדף מקבל את חלקו",
  "cinema.phase.chasePayout.copy": "המרדף משחרר: משבצת אחת זוכה בגדול",
  "cinema.phase.allocation.copy": "אתה מקבל",
  "cinema.phase.keepSellDecision.copy": "שמור או מכור: ההחלטה נשמרת עד הסיבוב הבא",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "בכספת",
  "cinema.vaultLock.plateSub": "המרדף",
  "cinema.vaultLock.status": "נעול",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "לא נפתחו קלפים בסיבוב הזה",
  "cinema.cardWall.won": "זכייה",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "פגיעה מובילה",
  "cinema.cardWall.rarity.common": "נפוץ",
  "cinema.cardWall.rarity.rare": "נדיר",
  "cinema.cardWall.rarity.epic": "אפי",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "שמור",
  "cinema.cardWall.status.sold": "נמכר",
  "cinema.cardWall.status.toTheChase": "למרדף",
  "cinema.cardWall.status.rake": "עמלה",
  "cinema.cardWall.owner.vault": "כספת",
  "cinema.cardWall.owner.you": "אתה",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter פותח את פרטי הקלף.",
  "cinema.cardWall.sectionAriaLabel": "כל קלף שנפתח בסיבוב הזה, מהיקר ביותר ועד הזול ביותר",
  "cinema.cardWall.eyebrow": "כל קלף שנפתח",
  "cinema.cardWall.rake.title": "עמלת פרוטוקול",
  "cinema.cardWall.rake.metaOne": "קלף אחד לעמלה",
  "cinema.cardWall.rake.metaMany": "{n} קלפים לעמלה",
  "cinema.cardWall.rake.hide": "הסתר",
  "cinema.cardWall.rake.show": "הצג",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "סגור חשיפה",
  "cinema.close.title": "סגור חשיפה (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "הזוכה המתועד",
  "cinema.provCaption.round": "סיבוב",
  "cinema.provCaption.verifyAt": "אימות ב-",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "סיבוב #{n}",
  "cinema.bar.vrfBadge": "מופעל על ידי CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "המרדף +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "פתיחה",
  "cinema.phaseShort.drawing": "הגרלה",
  "cinema.phaseShort.results": "תוצאות",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "זוכה",
  "cinema.core.tileWins": "{tile} זוכה",
  "cinema.core.inCards": " בקלפים",
  "cinema.core.poolSuffix": " קופה",
  "cinema.core.totalCardValue": "ערך הקלפים הכולל",
  "cinema.core.totalPool": "הקופה הכוללת",
  "cinema.core.tilesLive": "{n} משבצות בשידור חי",
  "cinema.core.packsSuffix": " · {n} פאקים",
  "cinema.core.yourStake": "ההימור שלך",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "אין הימור",
  "cinema.heatOnly.note": "USDC בלבד · אין פאק בסיבוב הזה",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} פאק",
  "cinema.tile.packCountMany": "{n} פאקים",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "הגרלה אבודה. הקלפים עוברים לתומכי המשבצת הזוכה.",
  "cinema.vaultNote.heatOnlyNoPack": "אין פאק בסיבוב הזה · העודף הקטן עובר לקופה",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "מ-{pack}",
  "cinema.grail.fromPackRate": "מ-{pack} · סיכוי של {pct} לשליפה",
  "cinema.grail.pullTitle": "שליפת GRAIL",
  "cinema.grail.fromPackVisible": "מ-{pack} פאק",
  "cinema.grail.provenanceAriaLabel": "{tile}, מ-{pack} פאק",
  "cinema.grail.multiTitle": "{n} קלפי GRAIL בסיבוב הזה",
  "cinema.grail.galleryTileFromPack": "{tile} · מ-{pack}",
  "cinema.grail.galleryMore": "+{n} נוספים",
  "cinema.card.openInNewTab": "פתח את דף הקלף {name} בכרטיסייה חדשה",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. מפאק {pack}, סיכוי של {pct} לשליפה. Enter פותח את פרטי הקלף.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter פותח את פרטי הקלף.",
  "cinema.card.bandChancePct": "סיכוי של {pct}% מפאק {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} זוכה ב-",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "חלון המכירה פתוח",
  "cinema.sellWindow.secToDecide": "שניות להחלטה",
  "cinema.sellWindow.noActionAutoSells": "ללא פעולה, מכירה אוטומטית בנעילה הבאה",
  "cinema.sellWindow.noActionKeeps": "ללא פעולה, הקלף נשמר · אפשר למכור בכל עת מהקלפים שלך",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "ערך קלף",
  "cinema.tileValue.onTileLabel": "במשבצת",
  "cinema.tileValue.oddsWord": "סיכויים",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "המשבצת שנפגעה",
  "cinema.chase.fires": "המרדף מופעל",
  "cinema.chase.jackpotReleasingTo": "קופת הפרס משתחררת ל-{tile}",
  "cinema.chase.winningTileFallback": "המשבצת המנצחת",
  "cinema.chase.feedThisRound": "המרדף +{value} בסיבוב הזה",
  "cinema.chase.cardToChase": "קלף למרדף",
  "cinema.chase.bestLosingCardNamed": "הקלף המפסיד הטוב ביותר · {name} · {value} נשמר ב-",
  "cinema.chase.bestLosingCardVault": "הקלף המפסיד הטוב ביותר נשמר בכספת",
  "cinema.chase.jackpotGrows": "המרדף +{value} · הקופה גדלה",
  "cinema.chase.hitsAriaLabel": "המרדף פוגע ב-{tile} תמורת {value}",
  "cinema.chase.alsoHolds": "המרדף מחזיק גם",
  "cinema.chase.alsoHoldsAriaOne": "המרדף מחזיק גם קלף אחד בשווי {value}",
  "cinema.chase.alsoHoldsAriaMany": "המרדף מחזיק גם {n} קלפים בשווי {value}",
  "cinema.chase.more": "נוספים",
  "cinema.chase.cardsTotalOne": "קלף אחד · {value} בקלפים המדורגים",
  "cinema.chase.cardsTotalMany": "{n} קלפים · {value} בקלפים המדורגים",
  "cinema.chase.hitsKicker": "המרדף פוגע",
  "cinema.chase.winsBig": "זכייה גדולה",
  "cinema.chase.yourCut": "החלק שלך",
  "cinema.chase.otherBackerOne": "{n} תומך נוסף · בחלוקה יחסית",
  "cinema.chase.otherBackerMany": "{n} תומכים נוספים · בחלוקה יחסית",
  "cinema.chase.backerOne": "{n} תומך · בחלוקה יחסית",
  "cinema.chase.backerMany": "{n} תומכים · בחלוקה יחסית",
  "cinema.chase.alsoWonRound": "זכה גם בסיבוב",
  "cinema.chase.backedTileNote": "משבצת שנתמכה · לא זוכת הסיבוב",
  "cinema.chase.heldCardsSpillOne": "קלף מוחזק אחד משתחרר",
  "cinema.chase.heldCardsSpillMany": "{n} קלפים מוחזקים משתחררים",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "קופה",
  "cinema.you.get": "אתה מקבל",
  "cinema.you.lost": "הפסדת!",
  "cinema.you.noStakeThisRound": "לא הימרת בסיבוב הזה",
  "cinema.you.mathLine": "חלק של {usdc} USDC מהקופה + {cards} מהקלפים = {total} אליך",
  "cinema.you.sold": "נמכר {value}",
  "cinema.you.kept": "נשמר · באוסף שלך",
  "cinema.you.keepButton": "שמור",
  "cinema.you.sellButton": "מכור {value}",
  "cinema.you.yours": "שלך",
  "cinema.you.noCardThisRound": "אין קלף בסיבוב הזה.",
  "cinema.you.usdcPaidInstantly": "USDC · זוכה ליתרה שלך",
  "cinema.you.keepAll": "שמור הכול",
  "cinema.you.sellAllButton": "מכור הכול ({value})",
  "cinema.you.sellAllConfirm": "בטוח? למכור הכול תמורת {value}",
  "cinema.you.noOtherBackers": "אין תומכים אחרים בסיבוב הזה",
  "cinema.you.oneOtherSplits": "תומך נוסף אחד חולק {value}",
  "cinema.you.othersSplit": "{n} תומכים נוספים חולקים {value}",
  "cinema.you.oneWinningBackerTakes": "תומך זוכה אחד מקבל {value}",
  "cinema.you.winningBackersSplit": "{n} תומכים זוכים חולקים {value}",
  "cinema.you.viewFullResults": "הצג את התוצאות המלאות",
  "cinema.you.howItWorks": "איך זה עובד",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "קלף מדורג רגיל - התומך המוביל של המשבצת שומר אותו או מוכר אותו בחזרה, בחלוקה יחסית.",
  "cinema.theatre.disposition.sellBackSplit":
    "כלל Grail: אף תומך יחיד אינו יכול לכסות את חלקם של האחרים, לכן ה-Grail נמכר בחזרה כברירת מחדל וה-USDC מתחלק בין תומכי המשבצת.",
  "cinema.theatre.disposition.topBackerKeeps":
    "כלל Grail: החלק היחסי של התומך המוביל כבר מכסה את רכישת חלקם של האחרים, לכן הוא שומר את ה-Grail ומשלם לכולם את חלקם ב-USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} מתוך {total} שחקנים אחרים החליטו; הסיבוב הבא בעוד {seconds} שניות",
  "cinema.theatre.playersDeciding": "שחקנים מחליטים {count}",
  "cinema.theatre.nextRoundIn": "הסיבוב הבא ב-{seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "התחשבנות הסיבוב",
  "cinema.theatre.stageLockingBoard": "נועל את הלוח...",
  "cinema.theatre.stagePacksOpening": "הפאקים נפתחים על הלוח",
  "cinema.theatre.stageWinnerDrawn": "הזוכה הוגרל",
  "cinema.theatre.headlineNoEntries": "אין ערכים בסיבוב הזה",
  "cinema.theatre.headlineRevealing": "חשיפת פאקים...",
  "cinema.theatre.headlineTileWins": "{tile} זוכה ב-{value}",
  "cinema.theatre.tileFallback": "משבצת",
  "cinema.theatre.youWon": "זכית ב-{value}",
  "cinema.theatre.youLostNoStake": "הפסדת, אין לך הימור ב-{tile}",
  "cinema.theatre.winnerFallback": "המנצח",
  "cinema.theatre.tileWonNoStake": "{tile} זכה · לא היה לך הימור",
  "cinema.theatre.aTileFallback": "משבצת",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} משבצות שוחקו · קופה {pool}",
  "cinema.theatre.stripMetaCards": " · {value} קלפים",
  "cinema.theatre.stripMetaCash": " + {value} מזומן",
  "cinema.theatre.drawingWinner": "הגרלת הזוכה",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "תוצאת הסיבוב",
  "cinema.theatre.roundSettled": "הסיבוב הסתיים",
  "cinema.theatre.winner": "הזוכה",
  "cinema.theatre.seedNote":
    "כולל את הימור הפתיחה שלך בסך {value} על {tile}; נקה את הימורי הפתיחה בחלונית ההימורים כדי לשחק מ-$0.",
  "cinema.theatre.lossNoteStaked":
    "הימרת {value} על משבצות אחרות בסיבוב הזה. רחף על משבצת כלשהי מאחורי הלוח כדי לראות מה נפתח בה ולמה הפסידה.",
  "cinema.theatre.lossNoteNoStake":
    "לא תמכת במשבצת בסיבוב הזה, לכן אין מה לשלם. בחר סכום הימור ולחץ על משבצת בסיבוב הבא.",
  "cinema.theatre.bonusGrails.one":
    "{n} Grail נוסף נשלף בסיבוב הזה: הוא עובר לתומכי המשבצת הזוכה כשלל בונוס (נשמר, או נמכר בחזרה בחלוקה יחסית אם יקר מדי להחזקה), ולעולם לא לעמלת ATTN או למרדף.",
  "cinema.theatre.bonusGrails.other":
    "{n} קלפי GRAIL נוספים נחתו בסיבוב הזה: הם עוברים לתומכי המשבצת הזוכה כשלל בונוס (נשמרים, או נמכרים בחזרה בחלוקה יחסית אם יקרים מדי להחזקה), לעולם לא לעמלת ATTN או למרדף.",
  "cinema.theatre.noPacksBacked": "לא הימרו על פאקים בסיבוב הזה. הסיבוב הבא מתחיל אוטומטית.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "חלוקת התשלום · {tile}",
  "cinema.theatre.payoutSplitMeta": "קופה {pool} · הזנת המרדף {feed}",
  "cinema.theatre.payoutSplitChase": " · המרדף +{value}",
  "cinema.theatre.you": "אתה",
  "cinema.theatre.physicalCard": "קלף פיזי ←",
  "cinema.theatre.grailSecured": " (Grail נשמר)",
  "cinema.theatre.grailSoldBack": "Grail נמכר בחזרה ({value}) ← חלוקת USDC למעלה.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "המרדף פגע!",
  "cinema.theatre.chaseHitBody":
    "המרדף הופעל בהגרלה הנדירה שלו, לכן {value} מהמרדף נוספו לזכייה הזו ולחלוקה שלמעלה. המרדף הבא מתחיל להיבנות מחדש.",
  "cinema.theatre.chaseMissLead": "אין שחרור מהמרדף בסיבוב הזה.",
  "cinema.theatre.chaseMissBody": "המרדף מופעל בהגרלה הנדירה שלו, לכן הוא ממשיך לגדול ועומד עכשיו על {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "אמת את ההגרלה",
  "cinema.theatre.vrfSummaryNote": "הגרלה הניתנת לאימות · הצג את קבלת ההגרלה",
  "cinema.theatre.vrfRoundId": "מזהה סיבוב",
  "cinema.theatre.vrfWinningDraw": "הגרלת הזוכה",
  "cinema.theatre.vrfDrawSeed": "זרע ההגרלה",
  "cinema.theatre.vrfProofId": "מזהה הוכחה",
  "cinema.theatre.vrfTicket": "#{n} מתוך {total}",
  "cinema.theatre.vrfVerifying": "מאמת...",
  "cinema.theatre.vrfRecheck": "בדוק שוב את ההגרלה",
  "cinema.theatre.vrfVerifierLink": "מאמת ↗",
  "cinema.theatre.vrfVerified": "✓ ההגרלה אומתה; הזוכה תואם מחדש לזרע ההגרלה שפורסם.",
  "cinema.theatre.vrfFailed": "✗ ההגרלה הזו לא תאמה מחדש לזרע שלה; אין לסמוך עליה.",
  "cinema.theatre.vrfNote": "בכל סיבוב נבחר זוכה אחד מזרע שפורסם שאפשר לבדוק מחדש.",
  "cinema.theatre.vrfNoDraw": "לא הימרו על פאקים בסיבוב הזה, לכן אין מה להגריל.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "שמור קלף ← לאוסף",
  "cinema.theatre.sellBackFor": "מכור בחזרה תמורת {value}",
  "cinema.theatre.continueNextRound": "המשך לסיבוב הבא",
  "cinema.theatre.continue": "המשך",
  "cinema.theatre.settleHint":
    "שמור מוסיף את הקלף לאוסף שלך. מכור בחזרה מזכה את היתרה שלך ב-{sell} ({pct}% מ-{value}, תעריף הרכישה החוזרת של פאק זה ב-CC). ללא פעולה = מכירה חזרה כברירת מחדל כשהסיבוב נסגר.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "נעול",
  "cinema.prizeModal.stageReveal": "חשוף",
  "cinema.prizeModal.betterLuck": "מזל טוב יותר בסיבוב הבא",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "מכין את הקלף שלך...",
  "cinema.share.renderingPng": "עיבוד PNG...",
  "cinema.share.renderFailed": "לא ניתן היה לעבד את התמונה. נסה שוב.",
  "cinema.share.captionOpened": "הכיתוב נפתח ב-X. צרף את ה-PNG השמור.",
  "cinema.share.close": "סגור",
  "cinema.share.downloadPng": "הורד את PNG",
  "cinema.share.shareToX": "שתף עם X",
  "cinema.share.done": "בוצע",
  "cinema.share.provablyFair": "קרבות פאקים · כל הגרלה ניתנת לאימות",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "מכפיל {value}",
  "cinema.winShare.multiplier": "מכפיל",
  "cinema.winShare.inCards": "בקלפים",
  "cinema.winShare.cashWon": "מזומן שזכית בו",
  "cinema.winShare.tileHit": "· פגיעה במשבצת",
  "cinema.winShare.entry": "כניסה",
  "cinema.winShare.winOdds": "סיכויי זכייה",
  "cinema.winShare.totalValue": "הערך הכולל",
  "cinema.winShare.certLine": "מופעל על ידי SLABZ · אישור #{n}",
  "cinema.winShare.roundLine": "סיבוב #{n} · הגרלת VRF ניתנת לאימות",
  "cinema.winShare.takeHomeAriaLabel": "קח הביתה {value}",
  "cinema.winShare.totalTakeHome": "הסכום הכולל שקיבלת",
  "cinema.winShare.breakdown.one": "{cash} מזומן + קלף {n} ({value})",
  "cinema.winShare.breakdown.other": "{cash} מזומן + {n} קלפים ({value})",
  "cinema.winShare.deposited": "הופקד",
  "cinema.winShare.wonBy": "זכה ב-{name}",
  "cinema.winShare.theGrail": "ה-GRAIL",
  "cinema.winShare.topPull": "השליפה המובילה",
  "cinema.winShare.topCardOfRound": "הקלף המוביל בסיבוב",
  "cinema.winShare.poweredBySlabz": "מופעל על ידי SLABZ",
  "cinema.winShare.cert": "תעודה #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "שתף את הניצחון שלך",
  "cinema.winShare.pngSaved": "PNG נשמר. צרף אותו לפוסט שלך - X לא יכול להוסיף אותו עבורך.",
  "cinema.winShare.renderingHdVideo": "מעבד סרטון HD של הסיבוב...",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "מעבד סרטון HD של הסיבוב - {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "סרטון HD נשמר. צרף אותו לפוסט שלך במקום לתמונה.",
  "cinema.winShare.hdRenderFailed": "העיבוד של HD נכשל. נסה שוב.",
  "cinema.winShare.hdVideoButton": "סרטון HD של הסיבוב",
  "cinema.winShare.hdVideoTitle": "עבד את הסיבוב הזה כקובץ mp4 באיכות HD ושמור אותו.",
  "cinema.winShare.tweetTriggerLabel": "שתף את הזכייה ב-X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "החזר {value} על הימור",
  "cinema.pnlShare.onStake": "על ההימור",
  "cinema.pnlShare.certifiedRun": "סיבוב מאומת · רווח והפסד נטו",
  "cinema.pnlShare.heroSub.one": "ב-{n} סיבוב · שיעור זכייה {pct}%",
  "cinema.pnlShare.heroSub.other": "לאורך {n} סיבובים · שיעור זכייה {pct}%",
  "cinema.pnlShare.collection": "אוסף",
  "cinema.pnlShare.change30d": "שינוי ב-30 הימים",
  "cinema.pnlShare.ribbonAriaLabel.one": "תוצאה לסיבוב עבור סיבוב ההימור האחרון ({n})",
  "cinema.pnlShare.ribbonAriaLabel.other": "תוצאה לסיבוב עבור {n} סיבובי ההימור האחרונים",
  "cinema.pnlShare.bestPull": "השליפה הטובה ביותר",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "מוביל",
  "cinema.pnlShare.tier.common": "נפוץ",
  "cinema.pnlShare.rounds": "סיבובים",
  "cinema.pnlShare.winRate": "שיעור זכייה",
  "cinema.pnlShare.roi": "תשואה",
  "cinema.pnlShare.bestRound": "הסיבוב הטוב ביותר",
  "cinema.pnlShare.rank": "דירוג #{n}",
  "cinema.pnlShare.rankOf": "דירוג #{n} של {total}",
  "cinema.pnlShare.staked": "הימור בסך {value}",
  "cinema.pnlShare.overlayAriaLabel": "שתף את הריצה שלך",
  "cinema.pnlShare.saved": "נשמר. צרף את זה לפוסט שלך.",
  "cinema.pnlShare.triggerLabel": "שתף PnL",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "שמור / מכור",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "הבחירה שלך",
  "cinema.recap.dest.deciding": "מחליט",
  "cinema.recap.dest.you": "אתה",
  "cinema.recap.dest.topBacker": "תומך מוביל",
  "cinema.recap.dest.yourCard": "הקלף שלך",
  "cinema.recap.dest.wonBy": "ניצחון של",
  "cinema.recap.dest.aBacker": "תומך",
  "cinema.recap.dest.yourChaseLoot": "שלל המרדף שלך",
  "cinema.recap.dest.chaseLoot": "שלל המרדף",
  "cinema.recap.dest.releasedFromVault": "שוחרר מהכספת",
  "cinema.recap.dest.sweptTo": "הועבר אל",
  "cinema.recap.dest.chaseVault": "כספת המרדף",
  "cinema.recap.dest.fundsJackpot": "מממן את הקופה",
  "cinema.recap.dest.protocolFee": "עמלת פרוטוקול",
  "cinema.recap.dest.tableRake": "עמלת השולחן",
  "cinema.recap.dest.soldBack": "נמכר במכירה חזרה",
  "cinema.recap.dest.intoTheSplit": "לחלוקה",
  "cinema.recap.dest.toThePool": "+{value} לקופה",
  "cinema.recap.sublineYours": "כל הקלפים של השולחן בסיבוב הזה. שלך מסומן למטה.",
  "cinema.recap.sublineLost": "כל הקלפים של השולחן בסיבוב הזה. אף אחד מהם אינו שלך.",
  "cinema.recap.sublineNoStake": "כל הקלפים של השולחן בסיבוב הזה. ישבת בצד הפעם.",
  "cinema.recap.sectionAriaLabel": "לאן הלך כל קלף מהסיבוב הזה",
  "cinema.recap.eyebrow": "תוצאות הסיבוב",
  "cinema.recap.headline": "לאן הגיע כל קלף",
  "cinema.recap.theatreHeader": "סיפור הסיבוב · היעד של כל קלף",
  "cinema.recap.openCardTitle": "פותח את דף הקלף בכרטיסייה חדשה",
  "cinema.recap.fromPack": "מ-{pack}",
  "cinema.recap.railAriaLabel": "כל הקלפים בסיבוב, היקרים ביותר קודם",
  "cinema.recap.tierRule.one": "הקלף הנוסף · {value}",
  "cinema.recap.tierRule.other": "{n} הקלפים הנוספים · {value}",
  "cinema.recap.showMore": "הצג עוד {n}",
  "cinema.recap.showAll": "הצג הכול ({n})",
  "cinema.recap.showing": "מוצגים {n} מתוך {total} קלפים · {value} מתוך {totalValue}",
  "cinema.recap.allShown": "כל {n} הקלפים · {value} בסך הכול",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "מסיים את הסרטון...",
  "cinema.replay.recordingEmpty": "ההקלטה חזרה ריקה. נסה שוב.",
  "cinema.replay.checkingService": "בודק את שירות עיבוד ה-HD...",
  "cinema.replay.serviceUnreachable":
    "שירות עיבוד ה-HD אינו נגיש, לכן אי אפשר לעבד ב-HD. הקלטת כרטיסייה תצלם את הכרטיסייה הזו במקום זאת (באמצעות בקשת דפדפן).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "עיבוד סרטון HD: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "עיבוד ה-HD נכשל. נסה שוב, או הקלט כרטיסייה כדי לצלם את הכרטיסייה הזו במקום זאת.",
  "cinema.replay.cannotRecord":
    "הדפדפן הזה אינו יכול להקליט כאן וידאו. במקום זאת נשמור את קובץ הסיבוב - גרור אותו לדף השידור החוזר כדי לצפות בו שוב.",
  "cinema.replay.pickThisTab": "בחר \"כרטיסייה זו\" כדי להקליט את הסיבוב.",
  "cinema.replay.recorderFailed": "לא ניתן להפעיל את המקליט.",
  "cinema.replay.watermarkAriaLabel": "שידור חוזר של סיבוב {n}",
  "cinema.replay.watermarkAriaLabelDated": "שידור חוזר של סיבוב {n}, הוקלט בתאריך {date}",
  "cinema.replay.watermarkTag": "שידור חוזר",
  "cinema.replay.watermarkRound": "סיבוב #{n}",
  "cinema.replay.headerSeed": "זרע {seed}",
  "cinema.replay.phaseBidding": "הימורים",
  "cinema.replay.phaseReveal": "חשיפה",
  "cinema.replay.phaseDone": "הסתיים",
  "cinema.replay.boardAriaLabel": "לוח השידור החוזר",
  "cinema.replay.controlsAriaLabel": "פקדי השידור החוזר לסיבוב {n}",
  "cinema.replay.pause": "השהה",
  "cinema.replay.play": "הפעל",
  "cinema.replay.pauseButton": "השהה",
  "cinema.replay.playButton": "הפעלה",
  "cinema.replay.restart": "התחל מחדש",
  "cinema.replay.scrubAriaLabel": "נווט בסיבוב המלא: מההימורים ועד החשיפה",
  "cinema.replay.lockMark": "נעילה",
  "cinema.replay.seeking": "מנווט",
  "cinema.replay.speedAriaLabel": "מהירות השמעה",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "שמור סרטון",
  "cinema.replay.saveVideoTitle":
    "עבד את הסיבוב הזה כקובץ mp4 באיכות HD, בלי להקליט דבר מהמסך שלך",
  "cinema.replay.recordTab": "הקלט כרטיסייה",
  "cinema.replay.recordTabTitle":
    "הקלט את הכרטיסייה הזו באמצעות בקשת לכידת המסך של הדפדפן (איכות בזמן אמת)",
  "cinema.replay.saveRound": "שמור סיבוב",
  "cinema.replay.saveRoundTitle":
    "הורד את הסיבוב הזה כקובץ נתונים קטן - כל אחד יכול לגרור אותו לדף השידור החוזר כדי לצפות בדיוק בסיבוב הזה",
  "cinema.replay.close": "סגור",
  "cinema.replay.backToGame": "חזרה למשחק",
  "cinema.replay.shareOverlayAriaLabel": "שתף את הסיבוב הזה",
  "cinema.replay.videoReady": "סיבוב וידאו מוכן",
  "cinema.replay.formatWebm": "נשמר כ-.webm - X דורש mp4 להעלאה, לכן שתף את הקישור או המר את הקובץ קודם.",
  "cinema.replay.formatMp4": "נשמר כ-.mp4 - מוכן לצירוף ב-X.",
  "cinema.replay.shareOnX": "שתף ב-X",
  "cinema.replay.saveAgain": "שמור שוב",
  "cinema.replay.shareHint": "X לא יכול לצרף סרטון מהאינטרנט - הפוסט שלך ייפתח עם טקסט מוכן; צרף את הקובץ השמור.",
  "cinema.replay.xOpened": "X נפתח עם הכיתוב שלך. צרף את הקובץ השמור ({filename}) - עורך הפוסט באינטרנט לא יכול להוסיף אותו עבורך.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE סיבוב שידור חוזר",
  "cinema.replayRoute.noRecordingParam": "לא סופקה הקלטה. העבר את ?rec=<encoded-json-or-url>.",
  "cinema.replayRoute.unreadable": "לא ניתן לקרוא את ההקלטה מתוך ?rec=.",
  "cinema.replayRoute.loadFailed": "לא ניתן לטעון את ההקלטה ({error}).",
  "cinema.replayRoute.badge": "שידור חוזר של סיבוב",
  "cinema.replayRoute.loading": "טוען הקלטה",
  "cinema.replayRoute.noRecording": "אין הקלטה להפעלה.",
  "cinema.replayRoute.hint":
    "שידורים חוזרים נפתחים מרצועת הסיבובים הקודמים בלוח (שידור חוזר בסיבוב שהסתיים) או מקישור ?rec= משותף.",
  "cinema.replayRoute.roundResults": "תוצאות הסיבוב",
  "cinema.replay.viewpointLabel": "VIEWPOINT",
  "cinema.replay.viewpointAriaLabel": "Choose a replay viewpoint",
  "cinema.replay.viewpointTable": "TABLE VIEW",
  "cinema.replay.viewpointTickerAriaLabel": "{name}'s bid timeline",
  "cinema.replay.viewpointStory": "{name}'s story",
  "cinema.replay.viewpointTile": "Tile {n}",
  "cinema.replay.viewpointStake": "Stake",
  "cinema.replay.viewpointBidAction": "{tile} · {pack} x{count} · {amount}",
  "cinema.replay.viewpointBidTotal": "{time} · total {total}",
  "cinema.replay.viewpointNoBids": "No bids yet",
  "cinema.share.shareFile": "שיתוף קובץ",
  "cinema.share.shareSheetOpened": "גיליון השיתוף נפתח.",
  "cinema.winShare.lossHeadline": "הפסד בסיבוב",
  "cinema.winShare.lossResult": "הפסד",
  "cinema.winShare.returned": "הוחזר",
  "cinema.winShare.bestPull": "השליפה הטובה ביותר",
  "cinema.winShare.playedBy": "שוחק על ידי {name}",
  "cinema.winShare.lossCaption": "סיבוב #{n}: הימרתי {stake}. אין החזר בסיבוב הזה.",
  "cinema.winShare.lossCardCaption": "השליפה הטובה ביותר בשולחן, אבל לא שלי.",
  "cinema.winShare.lossNoCardCaption": "תוצאת הסיבוב נרשמה בכנות.",
  "cinema.winShare.roundResultTop": "סיבוב",
  "cinema.winShare.roundResultMain": "הפסד",
  "cinema.winShare.shareRoundCard": "שיתוף קלף",
  "cinema.replay.shareVideo": "שיתוף סרטון",
  "cinema.replay.shareVideoTitle": "שיתוף סרטון הסיבוב",
  "cinema.replay.shareVideoSheetOpened": "גיליון השיתוף נפתח עם הסרטון.",
  "cinema.replay.shareVideoFailed": "לא ניתן לשתף את הסרטון. נסה שוב.",
  "cinema.replay.shareSheetHint": "המכשיר שלך יכול לשלוח את הסרטון ל-X מגיליון השיתוף.",
  "cinema.replay.shareRoundTitle": "attn royale · סיבוב #{n}",
  "cinema.replay.shareRoundTable": "{amount} על השולחן.",
  "cinema.replay.shareRoundWin": "האריח שלי לקח את השולחן של {pool} · {amount} חזרו.",
  "cinema.replay.shareRoundCardsOnly": "אריח {tile} לקח את השולחן של {pool} · האריח שלי הפסיד אבל {amount} חזרו.",
  "cinema.replay.shareRoundWinner": "אריח {tile} לקח את השולחן של {pool}.",
  "cinema.share.shareVideo": "שיתוף סרטון",
  "cinema.share.preparingOutput": "מכינים את השיתוף…",
  "cinema.share.cancelled": "השיתוף בוטל.",
  "cinema.share.shareSheetHint": "המכשיר שלך יכול לשלוח את הסרטון ל-X מגיליון השיתוף.",
  "cinema.personalReveal.sectionAria": "הקלפים שפתחת",
  "cinema.personalReveal.title": "הקלפים שפתחת",
  "cinema.personalReveal.progress.eyebrow": "חשיפה מסונכרנת",
  "cinema.personalReveal.progress.title": "פתיחת הקלפים בעיצומה",
  "cinema.personalReveal.progress.body": "הקלפים נפתחים כעת בשולחן. החשיפה המשותפת תמשיך בסיום השלב.",
  "cinema.personalReveal.normal.label": "חשיפה רגילה",
  "cinema.personalReveal.normalHint": "קודם מוצג גב הקלף. לחצו או הקישו על קלף כדי להפוך אותו; הקלפים שפתחתם שייכים לכם. קלפים שיישארו הפוכים יתהפכו אוטומטית אחרי 5 שניות.",
  "cinema.personalReveal.hardcore.label": "חשיפה קשוחה",
  "cinema.personalReveal.hardcoreHint": "קודם מוצג גב הקלף. לחצו או הקישו על קלף כדי להפוך אותו; הבעלות נקבעת אחרי ההגרלה. קלפים שיישארו הפוכים יתהפכו אוטומטית אחרי 5 שניות.",
  "cinema.personalReveal.yourCard": "הקלף שלך",
  "cinema.personalReveal.youOpened": "נפתח על ידך",
  "cinema.personalReveal.otherCards": "קלפים אחרים",
  "cinema.personalReveal.allOpen": "כל הקלפים נחשפו",
  "cinema.personalReveal.autoOpenIn": "שאר הקלפים ייחשפו אוטומטית בעוד {n} שנ׳",
  "cinema.personalReveal.revealCardAria": "הפיכת קלף {n}",
  "cinema.personalReveal.revealedCardAria": "קלף {n} נחשף: {name}, {value}",
  "cinema.personalReveal.sort.group": "סדר הקלפים",
  "cinema.personalReveal.sort.pack": "חבילה",
  "cinema.personalReveal.sort.packAria": "מיון לפי מחיר החבילה, מהנמוך לגבוה",
  "cinema.personalReveal.sort.rarity": "נדירות",
  "cinema.personalReveal.sort.revealFirst": "המיון לפי נדירות ייפתח לאחר חשיפת כל הקלפים",
  "cinema.personalReveal.sort.bestAria": "מיון לפי נדירות, הנדירים ביותר תחילה",
  "cinema.personalReveal.sort.worstAria": "מיון לפי נדירות, הפחות נדירים תחילה",
  "cinema.personalReveal.sort.packStatus": "הקלפים ממוינים לפי מחיר החבילה, מהנמוך לגבוה",
  "cinema.personalReveal.sort.bestStatus": "הקלפים ממוינים לפי נדירות, הנדירים ביותר תחילה",
  "cinema.personalReveal.sort.worstStatus": "הקלפים ממוינים לפי נדירות, הפחות נדירים תחילה",
  "cinema.personalReveal.rarity": "נדירות",
  "cinema.personalReveal.year": "שנה",
  "cinema.personalReveal.yearUnknown": "שנה לא ידועה",
  "cinema.personalReveal.grade": "דירוג",
  "cinema.personalReveal.ungraded": "ללא דירוג",
  "cinema.personalReveal.pageNavigation": "דפי קלפים",
  "cinema.personalReveal.previousPage": "קלפים קודמים",
  "cinema.personalReveal.nextPage": "קלפים הבאים",
  "cinema.personalReveal.pageStatus": "עמוד {page} מתוך {pages}",
  "cinema.personalReveal.live.revealed": "{name} נחשף",
  "cinema.personalReveal.live.all": "כל {n} הקלפים נחשפו",
} as Record<string, string>;
