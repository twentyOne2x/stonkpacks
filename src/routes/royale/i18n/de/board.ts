// German (Deutsch): "board" segment. Same key set as en/board.ts - see that
// file's header for the surface breakdown (RoyaleBoardV2, the legacy v1
// board, RoyaleStakeControl, RoyaleBetRail, RoyaleRoundCore, RoyaleClock,
// RoyaleSettlementPanel, RoyaleBetTooBigPopover, RoyaleWagerLadder,
// RoyaleBidFundConfirm, RoyaleHotkeyOptIn, RoyaleLeaderboard,
// RoyaleConnectXControl, RoyalePackCompositionChips).
//
// See royaleI18n.ts for the {token} interpolation convention and the
// no-em-dash / brand-terms-stay-English / numbers-stay-literal rules.
//
// REGISTER: formal (Siezen) throughout.
// TERMINOLOGY: a board square is a "Kachel"; loose money / change is
// "Kleingeld"; a pull is a "Ziehung"; "Chase" IS translated and reads "die
// Jagd"; the five pack tier names, "Grail", "Slab" and "USDC" stay English.
// Values stay short in the tile/rail/stakeControl namespaces on purpose,
// those render on the narrow board rail where long German compounds overflow.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Spieler und Cash-PnL",
  "board.playerScoreboard.title": "Spieler",
  "board.playerScoreboard.open": "Statistiken und Stummschaltung",
  "board.playerScoreboard.pinnedHint": "Angeheftet · Esc schließt",
  "board.playerScoreboard.holdHint": "Tab gedrückt halten für Vorschau · zum Anheften klicken",
  "board.playerScoreboard.close": "Spieler-Rangliste schließen",
  "board.playerScoreboard.windowAria": "PnL-Fenster",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Alle",
  "board.playerScoreboard.partialHistory": "Unvollständiger Verlauf. Die Rangliste nutzt das gespeicherte Zeitfenster mit abgerechneten Cash-Ergebnissen.",
  "board.playerScoreboard.statsUnavailable": "Der PnL-Verlauf ist hier nicht verfügbar. Aktuelle Einsätze sind weiterhin live.",
  "board.playerScoreboard.playerColumn": "Spieler",
  "board.playerScoreboard.pnlColumn": "Cash-PnL",
  "board.playerScoreboard.voiceColumn": "Chat",
  "board.playerScoreboard.loading": "Spieler werden geladen…",
  "board.playerScoreboard.empty": "Niemand hat in dieser Runde auf ein Feld gesetzt.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Felder {tiles}",
  "board.playerScoreboard.stake": "Einsatz {amount}",
  "board.playerScoreboard.notAvailable": "Nicht verfügbar",
  "board.playerScoreboard.rounds": "{n} Runden",
  "board.playerScoreboard.youBadge": "Du",
  "board.playerScoreboard.mute": "Stummschalten",
  "board.playerScoreboard.unmute": "Stummschaltung aufheben",
  "board.playerScoreboard.muteAria": "{name} im Chat stummschalten",
  "board.playerScoreboard.unmuteAria": "Stummschaltung von {name} im Chat aufheben",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Sie",
  "board.common.noWin": "kein Gewinn",
  "board.common.roundSettled": "Runde abgerechnet",
  "board.common.youWon": "Sie gewinnen {amount}",
  "board.common.pack": "Pack",
  "board.common.packs": "Packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "GESPERRT",
  "board.tile.lockedStampSub": "nichts geht mehr",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: Ihr Einsatz von {bet} übersteigt Ihr Guthaben von {balance}. Einsatz verringern oder einzahlen.",
  "board.tile.ariaBack": "{label} mit {amount} unterstützen",
  "board.tile.ariaBackShortcutSuffix": ", Kürzel {shortcut}",
  "board.tile.ariaOddsChance": "{pct} Gewinnchance",
  "board.tile.ariaBackers": "{count} Unterstützer",
  "board.tile.yourPortraitAlt": "Ihr Porträt",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · noch kein Pack",
  "board.tile.noStake": "Kein Einsatz",
  // MEGA-AUDIT 2026-07-31 (locale-text-overflow, ownership pill): the tile
  // pill's CSS fit ladder (royaleStyles.css "(5)" block) is calibrated in EN
  // characters ("You own " = 8ch); "Sie halten " (11ch) clipped the pill at
  // tablet/landscape. "Einsatz " (8ch, = EN) fits every lane EN fits and
  // pairs with the same tile's "Kein Einsatz" no-stake state.
  "board.tile.youOwn": "Einsatz {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Packs öffnen bei Sperre",
  "board.tile.resultOpened": "Geöffnet · {amount} in Karten",
  "board.tile.resultWinner": "GEWINNER · {amount} in Karten",
  "board.tile.resultLost": "Ziehung verloren · {amount} in Karten",
  // WORD-ONLY variants (no amount) plus the SHORT fallback words the label
  // swaps to when even the plain word would overflow its lane - hence "SIEG"
  // rather than the full "GEWONNEN".
  "board.tile.resultOpenedWord": "Geöffnet",
  "board.tile.resultWinnerWord": "GEWINNER",
  "board.tile.resultLostWord": "Ziehung verloren",
  "board.tile.resultShortWon": "SIEG",
  "board.tile.resultShortLost": "Verloren",
  "board.tile.overBalance": "Über Guthaben",
  "board.tile.overBalanceTitle": "Braucht {needed} · vorhanden {have}. Einsatz verringern oder einzahlen.",
  "board.tile.overCap": "über Ihrer {amount}-Obergrenze (Einstellungen)",
  "board.tile.needHave": "Braucht {needed} · vorhanden {have}",
  "board.tile.clueExactCardOdds": "genau diese Karte · {pct} Ziehchance",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Einsatzgröße",
  "board.stakeControl.packMatchTitle": "Jeder Klick auf eine Kachel setzt ein ganzes {packName}-Pack.",
  "board.stakeControl.packMatchTag": "setzt 1 {packName}-Pack pro Klick",
  "board.stakeControl.packMatchTitleOne": "Jeder Klick auf eine Kachel setzt {n} ganzes {packName}-Pack.",
  "board.stakeControl.packMatchTitleOther": "Jeder Klick auf eine Kachel setzt {n} ganze {packName}-Packs.",
  "board.stakeControl.packMatchTagOne": "setzt {n} {packName}-Pack pro Klick",
  "board.stakeControl.packMatchTagOther": "setzt {n} {packName}-Packs pro Klick",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} {packName}-Packs pro Klick",
  "board.stakeControl.bidPackGroupAria": "Ein ganzes Pack auf eine Kachel setzen",
  "board.stakeControl.bidPackTag": "Pack setzen",
  "board.stakeControl.bidPackInfoTitle":
    "Ein Klick legt ein ganzes versiegeltes Pack auf eine Kachel. Das Pack bleibt genau dieses Pack, es wächst nie zu einem größeren zusammen.",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Pack und Anzahl wählen. Ein Klick setzt den ganzen Stapel auf eine Kachel - größere Packs ziehen größere Karten. Tasten 1 bis 8 wählen die Kachel.",
  "board.stakeControl.bidPackInfoAria": "Was heißt ein Pack setzen?",
  "board.stakeControl.packSelectedTitle": "Ausgewählt. Erneut klicken für einen Einsatz von {amount}.",
  "board.stakeControl.packChipTitle": "Jeder Klick auf eine Kachel setzt ein {packName}-Pack ({amount}).",
  "board.stakeControl.packSelectedCountOne": "Ausgewählt. Jeder Klick auf eine Kachel setzt {n} {packName}-Pack ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Ausgewählt. Jeder Klick auf eine Kachel setzt {n} {packName}-Packs ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Jeder Klick auf eine Kachel setzt {n} {packName}-Pack ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Jeder Klick auf eine Kachel setzt {n} {packName}-Packs ({amount}).",
  "board.stakeControl.overBalanceHeading": "ÜBER GUTHABEN",
  "board.stakeControl.overBalanceBody": "Braucht mehr als Ihr Guthaben von {amount}.",
  "board.stakeControl.bidAmountTag": "Betrag setzen",
  "board.stakeControl.bidAmountInfoTitle":
    "Legen Sie einen beliebigen Dollarbetrag auf eine Kachel. Kleingeld wächst zu größeren Packs, sobald es den jeweiligen Pack-Preis übersteigt.",
  "board.stakeControl.bidAmountInfoAria": "Was heißt einen Betrag setzen?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Zum Einsatz einer Kachel hinzufügen",
  "board.stakeControl.bidAmountGroupAria": "Einen Betrag auf eine Kachel setzen",
  "board.stakeControl.packCountGroupAria": "Packs pro Klick",
  "board.stakeControl.packCountDecAria": "Weniger Packs pro Klick setzen",
  "board.stakeControl.packCountIncAria": "Mehr Packs pro Klick setzen",
  "board.stakeControl.packCountValueTitleOne": "{n} Pack der aktiven Stufe pro Klick",
  "board.stakeControl.packCountValueTitleOther": "{n} Packs der aktiven Stufe pro Klick",
  "board.stakeControl.incrementTitle": "Ausgewählten Einsatz auf {amount} erhöhen",
  "board.stakeControl.customAriaLabel": "Eigener Einsatzbetrag in USDC, wird mit Enter oder beim Wegklicken übernommen",
  "board.stakeControl.customOverBalanceTitle": "Über Ihrem Guthaben von {amount}. Einzahlen oder Einsatz verringern.",
  "board.stakeControl.customTitle": "Beliebigen Betrag eingeben, Enter oder Wegklicken übernimmt ihn",
  "board.stakeControl.resetTitle": "Ausgewählten Einsatz auf {amount} zurücksetzen",
  "board.stakeControl.reset": "Zurücksetzen",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Auto-Einsatz-Strategie, wird zum Rundenschluss scharf",
  "board.betRail.strategyArmedTip": "Scharf, löst in {seconds}s aus",
  "board.betRail.strategyAriaArmed": "{name}, scharf, löst in {seconds} Sekunden aus",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, scharf, löst in {seconds} Sekunden aus. Klicken zum Entschärfen.",
  "board.betRail.strategyAriaClickArm": "{name}. Klicken zum Scharfmachen.",
  "board.betRail.moreStrategiesAria": "Weitere Auto-Einsatz-Strategien",
  "board.betRail.moreStrategiesTitle": "Weitere Strategien",
  "board.betRail.cancelArmedAria": "Scharfen Auto-Einsatz abbrechen",
  "board.betRail.autoBetCancelled": "Auto-Einsatz abgebrochen.",
  "board.betRail.roundLockedSkip": "Die Runde sperrte, bevor der Auto-Einsatz auslösen konnte.",
  "board.betRail.notEnoughBalanceSkip": "Zu wenig Guthaben, der Auto-Einsatz hat nicht ausgelöst.",
  "board.betRail.firedAtClose": "{name} hat zum Rundenschluss ausgelöst.",
  "board.betRail.firedAtClosePartial": "{name} hat zum Rundenschluss ausgelöst: {covered} von {total} Feldern.",
  "board.betRail.strategyGuideAria": "Auto-Einsatz-Strategieführer",
  "board.betRail.strategyGuideTitle": "Strategieführer",
  "board.betRail.autoBetEyebrow": "Auto-Einsatz",
  "board.betRail.firesInSeconds": "löst in {seconds}s aus",
  "board.betRail.strategiesDialogAria": "Auto-Einsatz-Strategien",
  "board.betRail.closeStrategiesAria": "Auto-Einsatz-Strategien schließen",
  "board.betRail.strategiesHeading": "Auto-Einsatz-Strategien",
  "board.betRail.strategiesIntro":
    "Tippen Sie eine an, um sie mit Ihrem ausgewählten Einsatz ({amount}) scharf zu machen. Sie löst kurz vor der Rundensperre aus, sortiert danach, wie viel Geld in diesem Moment auf jeder Kachel liegt, also nach dem Stimmungsbild der Menge.",
  "board.betRail.contrarianHeading": "Konträre Wahl",
  "board.betRail.contrarianIntro":
    "Wenn alle der niedrigsten Kachel hinterherjagen, wird sie voll, und die zweitniedrigste kann besser auszahlen. Diese Strategien bleiben außerhalb der Hauptleiste, damit sie übersichtlich bleibt.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Ihr Konto und Ihre Einsatzgröße",
  "board.betRail.balance": "Guthaben",
  "board.betRail.activeStakes": "Aktive Einsätze",
  "board.betRail.collection": "Sammlung",
  "board.betRail.cardCountViewAllSingular": "{count} KARTE · ALLE ANSEHEN",
  "board.betRail.cardCountViewAllPlural": "{count} KARTEN · ALLE ANSEHEN",
  "board.betRail.moreCount": "+{count} WEITERE",
  "board.betRail.noCardsYet": "Noch keine Karten in der Sammlung, gewinnen Sie eine Kachel und behalten Sie ihre Karte.",
  "board.betRail.lastResult": "Letztes Ergebnis",
  "board.betRail.eachClickAdds": "Jeder Klick legt {amount} drauf",
  "board.betRail.depositToPlay": "Zum Spielen einzahlen",
  "board.betRail.affordShortfall": "Braucht {unit}, Sie haben {balance}",
  "board.betRail.allTilesPartialCover": "{name}, deckt {covered} von 8 Kacheln zu {unit}",
  "board.betRail.dockBalance": "Guth.",
  "board.betRail.dockStakes": "Einsätze",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Nächste Runde in {seconds} Sekunden",
  "board.core.nextRoundLine": "Nächste Runde in {secs}",
  "board.core.playersDecidingAria": "{decided} von {total} anderen Spielern haben entschieden",
  "board.core.playersDecidingLine": "Spieler entscheiden {ratio}",
  "board.core.pastRoundResultsAria": "Ergebnisse vergangener Runden",
  "board.core.pastRounds": "Vergangene Runden",
  "board.core.winsAmount": "{label} gewinnt {amount}",
  "board.core.youLost": "Verloren!",
  "board.core.didNotStake": "Sie haben diese Runde nicht gesetzt",
  "board.core.keepCard": "Karte behalten ({amount})",
  "board.core.sellAmount": "Verkaufen {amount}",
  "board.core.decideHint": "Jetzt oder während der nächsten Runde entscheiden",
  "board.core.roundResultLink": "Ergebnis von Runde #{roundId}",
  "board.core.fullReceiptHint": "Vollständige Quittung → Rundenergebnisse",
  "board.core.splitReceiptHint": "Aufteilung · Quittung → Rundenergebnisse",
  "board.core.eyebrowDrawing": "Ziehung läuft",
  "board.core.eyebrowPullsIn": "Ziehungen sind da",
  "board.core.eyebrowLocked": "Gesperrt",
  "board.core.headlineDrawing": "Ein Ticket entscheidet",
  "board.core.headlinePullsIn": "Jedes Pack ist offen",
  "board.core.headlineRoundLocked": "Runde gesperrt",
  "board.core.headlinePacksOpening": "Packs öffnen sich…",
  "board.core.subDrawing": "überprüfbare gewichtete Ziehung",
  "board.core.subPullsIn": "Gewinnerziehung folgt",
  "board.core.subIntro": "{count} {noun} im Einsatz",
  "board.core.subOpening": "{count} {noun} öffnen sich auf dem Spielfeld",
  "board.core.pool": "Pool",
  "board.core.totalPool": "Gesamtpool",

  // --- RoyaleClock.tsx: the round-phase timer leaf -------------------------
  "board.core.clockRoundOpen": "Runde offen",
  "board.core.clockLockedRevealing": "Gesperrt · Enthüllung",
  "board.core.clockSettled": "Abgerechnet",
  "board.core.clockAriaLabel": "{label}, {seconds} Sekunden",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Standard-Slab, der größte Unterstützer behält sie oder verkauft anteilig zurück.",
  "board.settlement.dispositionSellBackSplit": "Grail-Regel: wird standardmäßig zurückverkauft, das USDC wird auf die Kachel aufgeteilt.",
  "board.settlement.dispositionTopBackerKeeps": "Grail-Regel: der größte Unterstützer behält sie und zahlt den anderen ihren Anteil aus.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s zum Entscheiden",
  "board.settlement.panelAria": "Kacheldetails und Abrechnung",
  "board.settlement.collapsePanelAria": "Panel einklappen",
  "board.settlement.expandPanelAria": "Panel ausklappen",
  "board.settlement.roundResultsLink": "Rundenergebnisse",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Rundenpanel",
  "board.settlement.clickTileToBack": "Gewinne landen hier. Klicken Sie eine Kachel an, um sie mit {amount} zu unterstützen.",
  "board.settlement.lastResultLine": "Letztes Ergebnis · Runde #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "Sie gewinnen {amount}",
  "board.settlement.view": "ansehen",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Verlierer-Kachel · warum",
  "board.settlement.losingTileTitle": "{label} · {amount} auf der Kachel",
  "board.settlement.loserWhy":
    "Öffnete {cardName} ({amount}), die Ziehung landete auf {winnerLabel}. {pct} der Tickets gingen leer aus{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", darunter Ihre {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Diese Kachel war leer: kein Einsatz, kein Ziehungsticket.",
  "board.settlement.backToSettlement": "Zurück zur Abrechnung · {winnerLabel} hat gewonnen",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · Karte {index}/{total} · {amount} auf der Kachel",
  "board.settlement.pullCaptionSingle": "{label} · {amount} auf der Kachel",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Packs öffnen sich",
  "board.settlement.revealOpenedTitle": "{label} öffnete {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} Chance auf den Pool von {poolAmount}. Der Gewinner wird gerade gezogen.",
  "board.settlement.revealEmpty": "Auf dem Spielfeld springen gerade Packs auf, gleich fällt die Gewinnerziehung.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Letztes Ergebnis · Runde #{roundId}",
  "board.settlement.tileTakesTable": "{label} räumt den Tisch ab für {amount}",
  "board.settlement.whyWon": "Vom überprüfbaren gewichteten Ticket gezogen, {label} hielt bei der Sperre {pct}% des Pools.",
  "board.settlement.lostNoStakeIn": "Verloren, kein Einsatz auf {label}",
  "board.settlement.theWinnerFallback": "der Gewinner",
  "board.settlement.wonNoStake": "{label} gewinnt · Sie hatten keinen Einsatz",
  "board.settlement.aTileFallback": "Eine Kachel",
  "board.settlement.lossNoteWithStake": "Ihre {amount} lagen auf anderen Kacheln, fahren Sie über eine für ihre Geschichte.",
  "board.settlement.lossNoteNone": "Sie haben diese Runde keine Kachel unterstützt.",
  "board.settlement.topCardOfRound": "Beste Karte der Runde · {label}",
  "board.settlement.keepCardTo": "Karte behalten ({amount}) → Sammlung",
  "board.settlement.sellBackFor": "Für {amount} zurückverkaufen",
  "board.settlement.continueNextRound": "Weiter zur nächsten Runde",
  "board.settlement.continue": "Weiter",
  "board.settlement.keepSellHint":
    "Behalten = Karte in die Sammlung · Verkaufen = {amount} sofort ({pct}% des Kartenwerts, CC-Rückkauf dieses Packs) · {noAction}",
  "board.settlement.noActionKept": "keine Aktion = die Karte wird für Sie behalten.",
  "board.settlement.noActionAutoSell": "keine Aktion = automatischer Verkauf, wenn die nächste Runde endet.",
  "board.settlement.revealOnlyNote":
    "Verlierer-Kacheln sind in diesem Canary nur zur Ansicht, ihre Ziehungen gehen zurück in den Tresor. Nur die Karte der Gewinner-Kachel zahlt aus.",
  "board.settlement.payoutSplit": "Auszahlungsaufteilung",
  "board.settlement.poolChaseFeedLine": "Pool {pool} · Jagd-Zufuhr {feed}",
  "board.settlement.chaseAddSuffix": " · JAGD +{amount}",
  "board.settlement.physicalCardArrow": "Physische Karte →",
  "board.settlement.grailSecuredSuffix": " (Grail gesichert)",
  "board.settlement.grailSoldBack": "Grail zurückverkauft ({amount}) → USDC-Aufteilung oben.",
  "board.settlement.cardAssignmentHead": "Kartenzuteilung",
  "board.settlement.cardLabel": "{amount}-Karte",
  "board.settlement.soldToVault": "an den Tresor verkauft · Erlös in der Aufteilung",
  "board.settlement.decisionTopBackerSuffix": " (größter Unterstützer · behalten oder verkaufen)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} von ihrem USDC",
  "board.settlement.cardsSpreadNote":
    "Karten gehen an so viele Unterstützer wie möglich: Eine zugeteilte Karte kostet ihren CC-Rückkaufwert (85-93% je nach Pack) aus dem USDC dieses Unterstützers (gleicher Barwert wie beim Verkauf, die Chance auf mehr bleibt bei ihm). Nur nicht zugeteilte Karten gehen an den Tresor.",
  "board.settlement.chaseHitLabel": "JAGD-TREFFER!",
  "board.settlement.chasePaidLine": "{amount} in diese Aufteilung eingezahlt.",
  "board.settlement.chaseMissLabel": "KEIN JAGD-DROP.",
  "board.settlement.chaseNowLine": "Jagd jetzt {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Ziehung prüfen",
  "board.settlement.verifyDrawSub": "überprüfbare Ziehung · Ziehungsquittung ansehen",
  "board.settlement.roundIdLabel": "Runden-ID",
  "board.settlement.winningDrawLabel": "Gewinnziehung",
  "board.settlement.drawSeedLabel": "Ziehungs-Seed",
  "board.settlement.proofIdLabel": "Beweis-ID",
  "board.settlement.ticketOfCount": "#{index} von {count}",
  "board.settlement.verifying": "Prüfe…",
  "board.settlement.recheckDraw": "Erneut prüfen",
  "board.settlement.verifierLink": "Prüftool ↗",
  "board.settlement.verifiedOk": "✓ Ziehung geprüft, dieser Gewinner passt zu seinem veröffentlichten Ziehungs-Seed.",
  "board.settlement.verifiedBad": "✗ Diese Ziehung passt nicht zu ihrem Seed, nicht vertrauenswürdig.",
  "board.settlement.everyRoundNote": "Jede Runde zieht einen Gewinner aus einem veröffentlichten Seed, den Sie nachprüfen können.",
  "board.settlement.noPacksNote": "Diese Runde wurden keine Packs unterstützt, nichts zu ziehen.",
  "board.settlement.settledHoverHint": "Abgerechnet, fahren Sie über eine Kachel, um sie zu prüfen.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Einsatz zu groß für Ihr Guthaben",
  "board.betTooBig.dismissAria": "Schließen",
  "board.betTooBig.gotIt": "Verstanden",
  "board.betTooBig.body": "{slotLabel} zu unterstützen kostet {needed}, Sie halten {held}. Es fehlen {shortfall}.",
  "board.betTooBig.deposit": "{amount}+ einzahlen",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Spieler, sortiert nach Gesamteinsatz",
  "board.wagerLadder.title": "Spieler",
  "board.wagerLadder.countZero": "Noch keine Wetten",
  "board.wagerLadder.countOther": "{n} in der Runde · nach Gesamteinsatz",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "Spielerpanel einklappen",
  "board.wagerLadder.lastRoundAria": "Ergebnisse der letzten Runde ansehen, Runde #{n}",
  "board.wagerLadder.lastRoundLabel": "Letzte Rundenergebnisse",
  "board.wagerLadder.empty": "Diese Runde hat noch niemand eine Kachel unterstützt.",
  "board.wagerLadder.leaderAria": "Führend",
  "board.wagerLadder.openProfileTitle": "Profil von {name} in einem neuen Tab öffnen",
  "board.wagerLadder.miniGridTotal": "{amount} gesamt",
  // Two keys, not one {name} token: German also resolves "Tiles you backed"
  // and "Tiles Mika Vale backed" as two different sentences.
  "board.wagerLadder.miniGridTilesAria": "Kacheln, die {name} unterstützt hat",
  "board.wagerLadder.miniGridTilesAriaYou": "Kacheln, die Sie unterstützt haben",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "Bestand verkaufen, um diesen Einsatz zu decken",
  "board.bidFund.eyebrow": "KEIN USDC",
  "board.bidFund.titleOne": "Ihre Karte verkaufen, um diesen Einsatz zu decken?",
  "board.bidFund.titleMany": "Diese Karten verkaufen, um diesen Einsatz zu decken?",
  "board.bidFund.body": "Der Verkauf von {cards} bringt {buyback}, genug für {amount} auf {tile}.",
  "board.bidFund.bodyCardsMany": "diesen Karten",
  "board.bidFund.note":
    "Ihnen fehlen {amount}. Karten gehen zum CC-Rückkaufsatz ihres Packs weg (85 bis 93%). Das lässt sich nicht rückgängig machen.",
  "board.bidFund.keepCards": "Karten behalten",
  "board.bidFund.sellAndBid": "Verkaufen und {amount} setzen",
  "board.bidFund.autoSellSwitch": "Gewinne automatisch in USDC auszahlen",
  "board.bidFund.autoSellNoteOn":
    "Jeder Gewinn wird sofort zum Rückkaufsatz ausgezahlt. Keine Behalten-oder-Verkaufen-Abfrage. Grails werden nie automatisch verkauft. Jederzeit in den Einstellungen änderbar.",
  "board.bidFund.autoSellNoteOff":
    "Schalten Sie das ein, und jede gewonnene Karte wird zum Rückkaufsatz in USDC ausgezahlt, ohne Abfrage. Grails werden nie automatisch verkauft. Jederzeit in den Einstellungen änderbar.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "Mit Zifferntasten setzen?",
  "board.hotkeys.optInBody":
    "Ein Tastendruck unterstützt diese Kachel sofort mit Ihrem aktuellen Einsatz. Gerade wurde nichts platziert.",
  "board.hotkeys.notNow": "Nicht jetzt",
  "board.hotkeys.enableKeys": "Tasten aktivieren",
  "board.hotkeys.turnOff": "Ausschalten",
  "board.hotkeys.turnOffTitle": "Die Tasten bleiben aus, bis Sie sie in den Einstellungen wieder aktivieren.",
  "board.hotkeys.changeKeys": "Tasten ändern",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "Kachel öffnen",
  "board.boardV1.onTile": "auf der Kachel",
  "board.boardV1.changeAmount": "Kleingeld {amount}",
  "board.boardV1.oddsSuffix": "{pct} Quote",
  "board.boardV1.openedOdds": "Geöffnet · {pct} Quote",
  "board.boardV1.emptyNeverInDraw": "Leer · nie in der Ziehung",
  "board.boardV1.winnerYourShare": "GEWINNER · Ihr Anteil wird ausgezahlt",
  "board.boardV1.winnerNoStake": "GEWINNER · Sie hatten keinen Einsatz",
  "board.boardV1.lostOdds": "Ziehung verloren · {pct} Quote",
  "board.boardV1.tileClickTitle": "Irgendwo klicken, um {label} mit {amount} zu unterstützen",
  "board.boardV1.youAmount": "Sie {amount}",
  "board.boardV1.youNone": "Sie -",
  "board.boardV1.pctOfTile": "{pct} der Kachel",
  "board.boardV1.noStakeYet": "noch kein Einsatz",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "{amount} gesetzt · {pct} der Kachel",
  "board.boardV1.statusWaitingDraw": "Warten auf die Ziehung…",
  "board.boardV1.statusWonSplit": "{amount} aus der Aufteilung gewonnen",
  "board.boardV1.statusOnWinningTile": "Auf der Gewinner-Kachel",
  "board.boardV1.statusNoPayout": "Keine Auszahlung diese Runde",
  "board.boardV1.statusYourStake": "Ihr laufender Einsatz",
  "board.boardV1.statusBacking": "Unterstützt diese Kachel",
  // German "Unterstützer" is identical in singular and plural, so the pair
  // carries the same noun; only the {n} in front of it changes.
  "board.boardV1.backerCount.one": "{n} Unterstützer",
  "board.boardV1.backerCount.other": "{n} Unterstützer",
  "board.boardV1.noBackersYet": "Noch keine Unterstützer",
  "board.boardV1.backAmount": "{amount} setzen",
  "board.boardV1.backBtnTitle": "{label} mit {amount} USDC unterstützen",
  "board.boardV1.evolveTitle": "Setzt genau {amount} mehr auf {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} auf der Kachel",
  "board.boardV1.opensAs": "Öffnet als · {summary}",
  "board.boardV1.noPacksYet": "Noch keine Packs, unterstützen Sie sie für das erste Pack",
  "board.boardV1.whyOpenedDrawing":
    "Öffnete {cardName} ({amount}) bei {pct} Quote, der Gewinner wird gerade gezogen.",
  "board.boardV1.whyWon":
    "Hat die gewichtete Ziehung bei {pct} Quote gewonnen. Öffnete {cardName} ({amount}); der Pool ging anteilig an ihre Unterstützer.",
  "board.boardV1.whyLost":
    "Gewichtete Ziehung verloren, {pct} Quote ({amount} des Pools von {poolAmount}). Sie öffnete zwar {cardName} ({cardAmount}), aber nur die Gewinner-Kachel zahlt.",
  "board.boardV1.whyEmpty": "Leere Kachel: kein Einsatz, kein Ziehungsticket.",
  "board.boardV1.whyYourStakeSuffix": " Ihr Einsatz hier: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Sie hatten hier keinen Einsatz.",
  "board.boardV1.ifWins": "Gewinnt diese Kachel: Sie bekämen ~{amount} des Pools von {poolAmount}.",
  "board.boardV1.clickToBack": "Klicken, um mit dem ausgewählten Einsatz zu unterstützen und bei der Sperre ihr erstes Pack zu öffnen.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "Rang {rank}, {name}, {wagered} gesetzt, netto {net}, Siegquote {pct} Prozent",
  "board.leaderboard.youTag": "SIE",
  "board.leaderboard.youRankTag": "SIE · #{n}",
  "board.leaderboard.statWagered": "GESETZT",
  "board.leaderboard.statNetPl": "NETTO G/V",
  "board.leaderboard.statWinRate": "SIEGQUOTE",
  "board.leaderboard.statRounds": "RUNDEN",
  "board.leaderboard.statPoolShare": "POOL-ANTEIL",
  "board.leaderboard.statFirstSeen": "ERSTMALS",
  "board.leaderboard.statBiggestPull": "GRÖSSTE ZIEHUNG",
  "board.leaderboard.shareOfToday": "der heutigen Einsätze",
  "board.leaderboard.shareOfAllTime": "aller Einsätze insgesamt",
  "board.leaderboard.noneYet": "NOCH KEINE",
  "board.leaderboard.viewFullProfile": "Profil ansehen",
  "board.leaderboard.live": "LIVE",
  "board.leaderboard.fullRankings": "Gesamtrangliste",
  // German "Spieler" is identical in singular and plural; only the {n}
  // in front of it changes.
  "board.leaderboard.playerCount.one": "{n} Spieler",
  "board.leaderboard.playerCount.other": "{n} Spieler",
  "board.leaderboard.roundCount.one": "{n} Runde",
  "board.leaderboard.roundCount.other": "{n} Runden",
  "board.leaderboard.colPlayer": "Spieler",
  "board.leaderboard.colWagered": "Gesetzt",
  "board.leaderboard.colNet": "Netto G/V",
  "board.leaderboard.colWin": "Sieg",
  "board.leaderboard.colBiggestPull": "Größte Ziehung",
  "board.leaderboard.sortGroupAria": "Rangliste sortieren",
  "board.leaderboard.sortBy": "Nach {col} sortieren",
  "board.leaderboard.podiumNet": "{amount} netto",
  "board.leaderboard.podiumTopPull": "Top-Ziehung",
  "board.leaderboard.fullStandings": "Gesamttabelle · {n} Spieler",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "X-Profilfoto von {handle}",
  "board.connectX.connectedTitle": "Über X verbunden · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "{packName}-Slot (keins auf dieser Kachel)",
  "board.packChips.fixedChipTitle": "{n} x {packName} zu je {amount}",
  "board.packChips.fixedChipTitleTotalSuffix": " - {amount} gesamt",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Aus dem Kleingeld der Kachel gebildet, niemand hat dieses Pack direkt gesetzt",
  "board.packChips.pooledSome": "{n} von {total} aus dem Kleingeld der Kachel gebildet",
  "board.packChips.bidWhole": "Als ganzes Pack gesetzt",
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Außerdem auf dieser Kachel: {list}",
  "board.packChips.morePacks.one": "{n} weiteres Pack",
  "board.packChips.morePacks.other": "{n} weitere Packs",
  "board.packChips.morePacksWithList.one": "{n} weiteres Pack: {list}",
  "board.packChips.morePacksWithList.other": "{n} weitere Packs: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). Pack TIER NAMES ({tier}) stay English brand terms.
  "board.tile.splitBidsPool": "Einsätze {bids} · Pool {pool}",
  "board.tile.splitAllBids": "Die gesamten {bids} wurden als ganze Packs gesetzt",
  "board.tile.splitAllPool": "Die gesamten {pool} sind das Kleingeld der Kachel",
  "board.tile.splitPoolNote": "Gestrichelte Packs entstanden aus dem Pool, niemand hat sie gesetzt.",
  "board.tile.evolveLooseTitle": "{loose} Kleingeld auf dieser Kachel wird bei {target} zu einem {tier} Pack",
  "board.tile.evolveNoLooseTitle":
    "Noch kein Kleingeld auf dieser Kachel. Kleingeld wird bei {target} zu einem {tier} Pack",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // and the rail SAYS what it will do before it fires. {total} is the real
  // board size, never a baked 8. stakeUnitPack* feeds the {unit} token above.
  "board.betRail.stakeUnitPackOne": "{n} {packName} Pack ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} {packName} Packs ({amount})",
  "board.betRail.allTilesPartialCoverOf": "{name}, deckt {covered} von {total} Kacheln zu {unit}",
  "board.betRail.allTilesPlanFull":
    "Zum Rundenschluss setzt es auf alle {total} Kacheln zu {unit}. Insgesamt {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Zum Rundenschluss setzt es auf {covered} von {total} Kacheln zu {unit}. Ihr Guthaben von {balance} deckt {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "Zum Rundenschluss setzt es auf {covered} von {total} Kacheln zu {unit}. Ihr Guthaben von {balance} deckt {spend}.",
  "board.betRail.allTilesPlanNone":
    "Ihr Guthaben von {balance} deckt keinen Einsatz von {unit}, es wird keine Kachel gesetzt.",
  "board.betRail.allTilesShortHistory.one":
    "Auto-Einsatz auf alle Kacheln braucht {needed} für {tiles} Kacheln zu {unit}. Sie haben {balance}, also wurde {covered} Kachel gesetzt.",
  "board.betRail.allTilesShortHistory.other":
    "Auto-Einsatz auf alle Kacheln braucht {needed} für {tiles} Kacheln zu {unit}. Sie haben {balance}, also wurden {covered} Kacheln gesetzt.",
  "board.betRail.allTilesNoneHistory":
    "Auto-Einsatz auf alle Kacheln braucht {needed} für {tiles} Kacheln zu {unit}. Sie haben {balance}, also wurde keine Kachel gesetzt.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Zum Rundenschluss",
  "board.betRail.planTotal": "Insgesamt",
  "board.betRail.planMathFull": "{total} Kacheln × {amount}",
  "board.betRail.planMathShort": "{covered} von {total} Kacheln × {amount}",
  "board.betRail.planPerTile": "{unit} pro Kachel",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (Max / Min
  // / Alle, kept as short as the English), `.name` is also substituted into the
  // {name} token of board.betRail.strategyAria* / firedAtClose, `.closeLine`
  // renders right after `.rowTitle` as "rowTitle, closeLine". Sie register,
  // established vocabulary: Kachel, Einsatz, Runde, Rundenschluss, führend,
  // scharf machen.
  "board.strategy.highest.label": "Max",
  "board.strategy.highest.name": "Scharf machen: zum Rundenschluss auf die höchste Kachel setzen",
  "board.strategy.highest.detail":
    "Macht Ihren Einsatz auf der Kachel mit dem meisten Geld scharf, entschieden kurz vor dem Rundenschluss.",
  "board.strategy.highest.rowTitle": "Höchste Kachel",
  "board.strategy.highest.closeLine": "setzt zum Rundenschluss auf die größte Kachel",
  "board.strategy.highest.gridLine": "größter Betrag zum Schluss",

  "board.strategy.lowest.label": "Min",
  "board.strategy.lowest.name": "Scharf machen: zum Rundenschluss auf die niedrigste Kachel setzen",
  "board.strategy.lowest.detail":
    "Macht Ihren Einsatz auf der am wenigsten vollen Kachel scharf, entschieden kurz vor dem Rundenschluss. Wenn alle auf die niedrigste drängen, ist sie es bis dahin nicht mehr.",
  "board.strategy.lowest.rowTitle": "Niedrigste Kachel",
  "board.strategy.lowest.closeLine": "setzt zum Rundenschluss auf die kleinste Kachel",
  "board.strategy.lowest.gridLine": "kleinster Betrag zum Schluss",

  "board.strategy.secondHighest.label": "2. max",
  "board.strategy.secondHighest.name":
    "Scharf machen: zum Rundenschluss auf die zweithöchste Kachel setzen",
  "board.strategy.secondHighest.detail":
    "Macht Ihren Einsatz eine Stufe unter der führenden Kachel scharf, entschieden kurz vor dem Rundenschluss.",
  "board.strategy.secondHighest.rowTitle": "Zweithöchste Kachel",
  "board.strategy.secondHighest.closeLine":
    "setzt zum Rundenschluss auf die Kachel direkt unter der führenden",
  "board.strategy.secondHighest.gridLine": "eine Stufe unter der Führung",

  "board.strategy.secondLowest.label": "2. min",
  "board.strategy.secondLowest.name":
    "Scharf machen: zum Rundenschluss auf die zweitniedrigste Kachel setzen",
  "board.strategy.secondLowest.detail":
    "Die konträre Wahl: wenn alle der niedrigsten Kachel hinterherjagen, wird sie voll, und die zweitniedrigste kann besser auszahlen. Wird jetzt scharf und entscheidet sich kurz vor dem Rundenschluss.",
  "board.strategy.secondLowest.rowTitle": "Zweitniedrigste Kachel",
  "board.strategy.secondLowest.closeLine":
    "setzt zum Rundenschluss auf die Kachel direkt über der vollen niedrigsten",
  "board.strategy.secondLowest.gridLine": "eine Stufe über dem Boden",

  "board.strategy.allTiles.label": "Alle",
  "board.strategy.allTiles.name": "Scharf machen: zum Rundenschluss auf jede Kachel setzen",
  "board.strategy.allTiles.detail":
    "Macht Ihren Einsatz auf jeder zulässigen Kachel scharf, entschieden kurz vor dem Rundenschluss. Gesamtausgabe = Ihre Einsatzhöhe x die Anzahl der Kacheln in diesem Moment.",
  "board.strategy.allTiles.rowTitle": "Alle Kacheln",
  "board.strategy.allTiles.closeLine": "verteilt Ihren Einsatz zum Rundenschluss",
  "board.strategy.allTiles.gridLine": "Ihr Einsatz auf jeder Kachel",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "Erneut tippen: {unit}",
  "board.tile.confirmClickAgain": "Erneut klicken: {unit}",
  "board.tile.betOffNotice": "Wetten ist in den Einstellungen ausgeschaltet",
  "board.stakeControl.pickPackHint": "Wählen Sie ein Pack zum Wetten",
  "board.stakeControl.emptyStakeLead": "Wählen Sie ein Pack",
  "board.stakeControl.emptyStakeHint": "Es wird Ihr Einsatz",
  "gear.betInput.label": "Einsatz platzieren",
  "gear.betInput.hint":
    "Wie ein Tipp auf eine Kachel (und ihre Zifferntaste) Ihren Einsatz platziert. Doppelt verlangt zuerst ein bestätigendes Tippen - Standard auf Touchscreens. Aus ist Zuschauermodus: Es kann nichts gesetzt werden.",
  "gear.betInput.optionSingle": "Einmal tippen",
  "gear.betInput.optionDouble": "Doppelt tippen",
  "gear.betInput.optionOff": "Aus",
  "gear.cardOpen.label": "Karten öffnen",
  "gear.cardOpen.hint":
    "Doppelt verlangt ein bestätigendes Tippen, bevor eine Karte ihre Seite öffnet - Standard auf Touchscreens.",
} as Record<string, string>;
