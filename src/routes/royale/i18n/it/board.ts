// Italian (Italiano): "board" segment. Same key set as en/board.ts. Owns
// RoyaleBoardV2.tsx, RoyaleBoard.tsx (the legacy v1 board),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / packs-framing rules that apply to every locale.
//
// Register: INFORMAL "tu" throughout, casino/table Italian rather than
// literal English word order ("gioco chiuso" for "no more bets", "punta su
// una casella", "incassare").
//
// Terminology (kept consistent across board/misc/onboarding/docs/arena/chat):
//   - "tile" -> "casella"; "bet"/"bid" (noun) -> "puntata", (verb) ->
//     "puntare"; "backer(s)" -> "sostenitore/i"; "pack(s)" -> "pack"
//     (English loanword, invariable plural: "i pack");
//     "pool" -> "montepremi"; "balance" -> "saldo"; "draw" -> "estrazione";
//     "buyback" -> "riacquisto"; "vault" -> "caveau"; "slab" -> "slab"
//     (masculine, invariable, the collectors' loanword).
//   - "auto-bet" -> "auto-puntata" (not "puntata automatica"): the rail, the
//     eyebrow and the strategy dialog are narrow, and the compact form is
//     what Italian betting UIs use.
//   - "pull" (the card a pack yields) -> "pull", the invariable loanword the
//     Italian TCG scene actually uses. The earlier "tiro" read as "a throw".
//   - "loose money"/"change" -> "resto" (one word for both, replaces the
//     earlier "spiccioli").
//   - "payout split" -> "ripartizione"; "settlement" -> "esito".
//   - "the Chase" -> "la Caccia" (house style: the feature name is
//     translated, matching misc.chase.label).
//   - TIER NAMES Starter / Elite / Legendary / Grail / Mythic stay English
//     and capitalized everywhere, including where the English source writes
//     them lowercase as a generic noun ("a grail pull").
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Giocatori e PnL in contanti",
  "board.playerScoreboard.title": "Giocatori",
  "board.playerScoreboard.open": "Statistiche e silenziamento",
  "board.playerScoreboard.pinnedHint": "Fissato · Esc per chiudere",
  "board.playerScoreboard.holdHint": "Tieni premuto Tab per dare un’occhiata · fai clic per fissare",
  "board.playerScoreboard.close": "Chiudi classifica giocatori",
  "board.playerScoreboard.windowAria": "Finestra PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Tutto",
  "board.playerScoreboard.partialHistory": "Cronologia parziale. Le classifiche usano l’intervallo conservato dei risultati in contanti liquidati.",
  "board.playerScoreboard.statsUnavailable": "La cronologia PnL non è disponibile qui. Le puntate attuali sono ancora attive.",
  "board.playerScoreboard.playerColumn": "Giocatore",
  "board.playerScoreboard.pnlColumn": "PnL in contanti",
  "board.playerScoreboard.voiceColumn": "Chat",
  "board.playerScoreboard.loading": "Caricamento giocatori…",
  "board.playerScoreboard.empty": "Nessuno ha puntato su una casella in questo round.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Caselle {tiles}",
  "board.playerScoreboard.stake": "Puntata {amount}",
  "board.playerScoreboard.notAvailable": "Non disponibile",
  "board.playerScoreboard.rounds": "{n} round",
  "board.playerScoreboard.youBadge": "Tu",
  "board.playerScoreboard.mute": "Silenzia",
  "board.playerScoreboard.unmute": "Riattiva messaggi",
  "board.playerScoreboard.muteAria": "Silenzia {name} nella chat",
  "board.playerScoreboard.unmuteAria": "Riattiva i messaggi di {name} nella chat",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Tu",
  "board.common.noWin": "a vuoto",
  "board.common.roundSettled": "Round concluso",
  "board.common.youWon": "Hai vinto {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "pack",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "BLOCCATO",
  "board.tile.lockedStampSub": "gioco chiuso",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: la puntata di {bet} supera i tuoi {balance}. Abbassa la puntata o deposita.",
  "board.tile.ariaBack": "Punta {amount} su {label}",
  "board.tile.ariaBackShortcutSuffix": ", scorciatoia {shortcut}",
  "board.tile.ariaOddsChance": "{pct} di probabilità",
  "board.tile.ariaBackers": "{count} sostenitori",
  "board.tile.yourPortraitAlt": "Il tuo ritratto",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · nessun pack",
  "board.tile.noStake": "Senza puntata",
  "board.tile.youOwn": "Tuoi {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Si aprono al blocco",
  "board.tile.resultOpened": "Aperta · {amount} in carte",
  "board.tile.resultWinner": "VINCENTE · {amount} in carte",
  "board.tile.resultLost": "Estrazione persa · {amount} in carte",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans, so a wide figure never clips mid-digit. These are the WORD-ONLY
  // variants plus the SHORT fallback words the label swaps to when even the
  // plain word would overflow its lane.
  "board.tile.resultOpenedWord": "Aperta",
  "board.tile.resultWinnerWord": "VINCENTE",
  "board.tile.resultLostWord": "Estrazione persa",
  "board.tile.resultShortWon": "VINTA",
  "board.tile.resultShortLost": "Persa",
  "board.tile.overBalance": "Oltre il saldo",
  "board.tile.overBalanceTitle": "Servono {needed} · hai {have}. Abbassa la puntata o deposita.",
  "board.tile.overCap": "oltre il tuo tetto di {amount} (impostazioni)",
  "board.tile.needHave": "Servono {needed} · hai {have}",
  "board.tile.clueExactCardOdds": "questa carta esatta · {pct} di pull",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Puntata",
  "board.stakeControl.packMatchTitle": "Ogni clic su una casella punta un pack {packName} intero.",
  "board.stakeControl.packMatchTag": "1 pack {packName} per clic",
  // PACK COUNT stepper: the count-aware siblings of packMatchTitle/packMatchTag
  // above, used once `packCount` can be > 1.
  "board.stakeControl.packMatchTitleOne": "Ogni clic su una casella punta {n} pack {packName} intero.",
  "board.stakeControl.packMatchTitleOther": "Ogni clic su una casella punta {n} pack {packName} interi.",
  "board.stakeControl.packMatchTagOne": "{n} pack {packName} per clic",
  "board.stakeControl.packMatchTagOther": "{n} pack {packName} per clic",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} pack {packName} per clic",
  "board.stakeControl.bidPackGroupAria": "Punta un pack intero su una casella",
  "board.stakeControl.bidPackTag": "A pack",
  "board.stakeControl.bidPackInfoTitle":
    "Un clic mette un pack sigillato intero su una casella. Quel pack resta com'è, non si fonde mai in uno più grande.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Scegli un pack e quanti. Un clic punta l'intera pila su una casella - pack più grandi pescano carte più grandi. Tasti da 1 a 8 scelgono la casella.",
  "board.stakeControl.bidPackInfoAria": "Cos'è la puntata a pack?",
  "board.stakeControl.packSelectedTitle": "Selezionato. Clicca di nuovo per tornare a una puntata di {amount}.",
  "board.stakeControl.packChipTitle": "Ogni clic su una casella punta un pack {packName} ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle.
  "board.stakeControl.packSelectedCountOne": "Selezionato. Ogni clic su una casella punta {n} pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Selezionato. Ogni clic su una casella punta {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Ogni clic su una casella punta {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Ogni clic su una casella punta {n} pack {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "SALDO SUPERATO",
  "board.stakeControl.overBalanceBody": "Serve più dei tuoi {amount}.",
  "board.stakeControl.bidAmountTag": "A importo",
  "board.stakeControl.bidAmountInfoTitle":
    "Aggiungi la cifra che vuoi a una casella. Il resto cresce in pack più grandi man mano che supera il prezzo di ognuno.",
  "board.stakeControl.bidAmountInfoAria": "Cos'è la puntata a importo?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Aggiungi alla puntata",
  "board.stakeControl.bidAmountGroupAria": "Punta un importo su una casella",
  // PACK COUNT stepper controls.
  "board.stakeControl.packCountGroupAria": "Pack puntati per clic",
  "board.stakeControl.packCountDecAria": "Punta meno pack per clic",
  "board.stakeControl.packCountIncAria": "Punta più pack per clic",
  "board.stakeControl.packCountValueTitleOne": "{n} pack del livello armato per clic",
  "board.stakeControl.packCountValueTitleOther": "{n} pack del livello armato per clic",
  "board.stakeControl.incrementTitle": "Porta la puntata selezionata a {amount}",
  "board.stakeControl.customAriaLabel": "Importo libero in USDC, si conferma con Invio o cliccando fuori",
  "board.stakeControl.customOverBalanceTitle": "Supera i tuoi {amount}. Deposita o abbassa la puntata.",
  "board.stakeControl.customTitle": "Scrivi la cifra che vuoi, Invio o un clic fuori la conferma",
  "board.stakeControl.resetTitle": "Riporta la puntata selezionata a {amount}",
  "board.stakeControl.reset": "Azzera",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Strategia di auto-puntata, si arma alla chiusura del round",
  "board.betRail.strategyArmedTip": "Armata, scatta tra {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, armata, scatta tra {seconds} secondi",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, armata, scatta tra {seconds} secondi. Clicca per disarmarla.",
  "board.betRail.strategyAriaClickArm": "{name}. Clicca per armarla.",
  "board.betRail.moreStrategiesAria": "Altre strategie di auto-puntata",
  "board.betRail.moreStrategiesTitle": "Altre strategie",
  "board.betRail.cancelArmedAria": "Annulla l'auto-puntata armata",
  "board.betRail.autoBetCancelled": "Auto-puntata annullata.",
  "board.betRail.roundLockedSkip": "Il round si è bloccato prima che l'auto-puntata scattasse.",
  "board.betRail.notEnoughBalanceSkip": "Saldo insufficiente, l'auto-puntata non è scattata.",
  "board.betRail.firedAtClose": "{name} è scattata alla chiusura del round.",
  "board.betRail.firedAtClosePartial": "{name} è scattata alla chiusura del round: {covered} caselle su {total}.",
  "board.betRail.strategyGuideAria": "Guida alle strategie di auto-puntata",
  "board.betRail.strategyGuideTitle": "Guida alle strategie",
  "board.betRail.autoBetEyebrow": "Auto-puntata",
  "board.betRail.firesInSeconds": "scatta tra {seconds}s",
  "board.betRail.strategiesDialogAria": "Strategie di auto-puntata",
  "board.betRail.closeStrategiesAria": "Chiudi le strategie di auto-puntata",
  "board.betRail.strategiesHeading": "Strategie di auto-puntata",
  "board.betRail.strategiesIntro":
    "Toccane una per armarla con la puntata selezionata ({amount}). Scatta poco prima che il round si blocchi e segue quanti soldi ci sono su ogni casella in quel momento: il segnale della folla.",
  "board.betRail.contrarianHeading": "Scelte controcorrente",
  "board.betRail.contrarianIntro":
    "Quando tutti inseguono la casella più bassa, quella si affolla e la seconda più bassa può pagare meglio. Restano fuori dalla barra principale per tenerla pulita.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Il tuo conto e la puntata",
  "board.betRail.balance": "Saldo",
  "board.betRail.activeStakes": "Puntate attive",
  "board.betRail.collection": "Collezione",
  "board.betRail.cardCountViewAllSingular": "{count} CARTA · VEDI TUTTE",
  "board.betRail.cardCountViewAllPlural": "{count} CARTE · VEDI TUTTE",
  "board.betRail.moreCount": "+{count} ALTRE",
  "board.betRail.noCardsYet": "Ancora nessuna carta in collezione: vinci una casella e tieniti la sua carta.",
  "board.betRail.lastResult": "Ultimo esito",
  "board.betRail.eachClickAdds": "Ogni clic aggiunge {amount}",
  "board.betRail.depositToPlay": "Deposita per giocare",
  // AFFORDABILITY GATE + COUNT-AWARE copy: the auto-bet strategy row's tooltip
  // when the globally selected stake can't be covered, or when "all tiles" can
  // only afford some of the 8.
  "board.betRail.affordShortfall": "Serve {unit}, hai {balance}",
  "board.betRail.allTilesPartialCover": "{name}, copre {covered} caselle su 8 a {unit}",
  // LANDSCAPE-DOCK account readout: compact labels for the landscape-strip
  // dock stats.
  "board.betRail.dockBalance": "Saldo",
  "board.betRail.dockStakes": "Puntate",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Prossimo round tra {seconds} secondi",
  "board.core.nextRoundLine": "Prossimo round tra {secs}",
  "board.core.playersDecidingAria": "{decided} di {total} altri giocatori hanno deciso",
  "board.core.playersDecidingLine": "Stanno decidendo {ratio}",
  "board.core.pastRoundResultsAria": "Risultati dei round passati",
  "board.core.pastRounds": "Round passati",
  "board.core.winsAmount": "{label} vince {amount}",
  "board.core.youLost": "Hai perso!",
  "board.core.didNotStake": "Non hai puntato in questo round",
  "board.core.keepCard": "Tieni la carta ({amount})",
  "board.core.sellAmount": "Vendi {amount}",
  "board.core.decideHint": "Decidi ora o durante il prossimo round",
  "board.core.roundResultLink": "Risultato del round #{roundId}",
  "board.core.fullReceiptHint": "Ricevuta completa → Risultati del round",
  "board.core.splitReceiptHint": "Ripartizione · ricevuta → Risultati del round",
  "board.core.eyebrowDrawing": "Estrazione",
  "board.core.eyebrowPullsIn": "Carte in tavola",
  "board.core.eyebrowLocked": "Bloccato",
  "board.core.headlineDrawing": "Decide un solo ticket",
  "board.core.headlinePullsIn": "Pack tutti aperti",
  "board.core.headlineRoundLocked": "Round bloccato",
  "board.core.headlinePacksOpening": "Pack in apertura…",
  "board.core.subDrawing": "estrazione ponderata verificabile",
  "board.core.subPullsIn": "ora si estrae il vincitore",
  "board.core.subIntro": "{count} {noun} in palio",
  "board.core.subOpening": "{count} {noun} in apertura sul tabellone",
  "board.core.pool": "Montepremi",
  "board.core.totalPool": "Montepremi totale",

  // --- RoyaleClock.tsx: the round-phase timer leaf ------------------------
  "board.core.clockRoundOpen": "Round aperto",
  "board.core.clockLockedRevealing": "Bloccato · apertura",
  "board.core.clockSettled": "Concluso",
  "board.core.clockAriaLabel": "{label}, {seconds} secondi",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Slab standard: il maggior sostenitore lo tiene o lo rivende, pro-rata.",
  "board.settlement.dispositionSellBackSplit": "Regola Grail: di default si rivende, gli USDC si dividono su tutta la casella.",
  "board.settlement.dispositionTopBackerKeeps": "Regola Grail: il maggior sostenitore la tiene e paga agli altri la loro quota.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s per decidere",
  "board.settlement.panelAria": "Dettagli della casella ed esito",
  "board.settlement.collapsePanelAria": "Comprimi il pannello",
  "board.settlement.expandPanelAria": "Espandi il pannello",
  "board.settlement.roundResultsLink": "Risultati del round",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Pannello round",
  "board.settlement.clickTileToBack": "Le vincite finiscono qui. Clicca una casella per puntarci {amount}.",
  "board.settlement.lastResultLine": "Ultimo esito · Round #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "hai vinto {amount}",
  "board.settlement.view": "vedi",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Casella perdente · perché ha perso",
  "board.settlement.losingTileTitle": "{label} · {amount} sulla casella",
  "board.settlement.loserWhy":
    "Ha aperto {cardName} ({amount}), l'estrazione è finita su {winnerLabel}. Il {pct} dei ticket non ha pagato nulla{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", compresi i tuoi {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Questa casella era vuota: nessuna puntata, nessun ticket in estrazione.",
  "board.settlement.backToSettlement": "Torna all'esito · ha vinto {winnerLabel}",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · carta {index}/{total} · {amount} sulla casella",
  "board.settlement.pullCaptionSingle": "{label} · {amount} sulla casella",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "In apertura",
  "board.settlement.revealOpenedTitle": "{label} ha aperto {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} di probabilità di prendersi il montepremi da {poolAmount}. Il vincitore si sta estraendo ora.",
  "board.settlement.revealEmpty": "I pack si stanno aprendo sul tabellone, tra un attimo si estrae il vincitore.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Ultimo esito · Round #{roundId}",
  "board.settlement.tileTakesTable": "{label} si prende il tavolo per {amount}",
  "board.settlement.whyWon": "Uscita dal ticket ponderato verificabile, {label} teneva il {pct}% del montepremi al blocco.",
  "board.settlement.lostNoStakeIn": "Hai perso, nessuna puntata su {label}",
  "board.settlement.theWinnerFallback": "il vincitore",
  "board.settlement.wonNoStake": "{label} ha vinto · tu non avevi puntato",
  "board.settlement.aTileFallback": "Una casella",
  "board.settlement.lossNoteWithStake": "I tuoi {amount} erano su altre caselle, passaci sopra per vedere com'è andata.",
  "board.settlement.lossNoteNone": "In questo round non hai puntato su nessuna casella.",
  "board.settlement.topCardOfRound": "Carta migliore del round · {label}",
  "board.settlement.keepCardTo": "Tieni la carta ({amount}) → collezione",
  "board.settlement.sellBackFor": "Rivendi per {amount}",
  "board.settlement.continueNextRound": "Vai al prossimo round",
  "board.settlement.continue": "Continua",
  "board.settlement.keepSellHint":
    "Tieni = carta in collezione · vendi = {amount} subito ({pct}% del valore, riacquisto CC di questo pack) · {noAction}",
  "board.settlement.noActionKept": "senza azione = la carta resta tua.",
  "board.settlement.noActionAutoSell": "senza azione = venduta in automatico alla fine del prossimo round.",
  "board.settlement.revealOnlyNote":
    "In questa canary le caselle perdenti si aprono solo per mostrare le carte, che tornano al caveau. Paga solo la carta della casella vincente.",
  "board.settlement.payoutSplit": "Ripartizione",
  "board.settlement.poolChaseFeedLine": "Montepremi {pool} · quota Caccia {feed}",
  "board.settlement.chaseAddSuffix": " · CACCIA +{amount}",
  "board.settlement.physicalCardArrow": "Carta fisica →",
  "board.settlement.grailSecuredSuffix": " (Grail al sicuro)",
  "board.settlement.grailSoldBack": "Grail rivenduta ({amount}) → ripartizione USDC qui sopra.",
  "board.settlement.cardAssignmentHead": "Assegnazione carte",
  "board.settlement.cardLabel": "carta da {amount}",
  "board.settlement.soldToVault": "venduta al caveau · ricavato nella ripartizione",
  "board.settlement.decisionTopBackerSuffix": " (maggior sostenitore · tieni o vendi)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} dai loro USDC",
  "board.settlement.cardsSpreadNote":
    "Le carte si spalmano sul maggior numero possibile di sostenitori: una carta assegnata costa il suo riacquisto CC (85-93% a seconda del pack) e viene scalata dagli USDC di quel sostenitore (stesso valore in contanti della vendita, ma il rialzo resta suo). Solo le carte che nessuno assorbe finiscono vendute al caveau.",
  "board.settlement.chaseHitLabel": "CACCIA SCATTATA!",
  "board.settlement.chasePaidLine": "{amount} versati in questa ripartizione.",
  "board.settlement.chaseMissLabel": "NIENTE CACCIA.",
  "board.settlement.chaseNowLine": "Caccia ora a {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Verifica estrazione",
  "board.settlement.verifyDrawSub": "estrazione verificabile · vedi la ricevuta dell'estrazione",
  "board.settlement.roundIdLabel": "id round",
  "board.settlement.winningDrawLabel": "estrazione vincente",
  "board.settlement.drawSeedLabel": "seed estrazione",
  "board.settlement.proofIdLabel": "id prova",
  "board.settlement.ticketOfCount": "#{index} di {count}",
  "board.settlement.verifying": "Verifica…",
  "board.settlement.recheckDraw": "Riverifica",
  "board.settlement.verifierLink": "Verificatore ↗",
  "board.settlement.verifiedOk": "✓ Estrazione verificata: questo vincitore torna con il seed pubblicato.",
  "board.settlement.verifiedBad": "✗ Questa estrazione non torna con il suo seed, non fidarti.",
  "board.settlement.everyRoundNote": "Ogni round estrae un vincitore da un seed pubblicato che puoi ricontrollare.",
  "board.settlement.noPacksNote": "Nessun pack puntato in questo round, niente da estrarre.",
  "board.settlement.settledHoverHint": "Concluso, passa sopra una casella per guardarla da vicino.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Puntata troppo alta per il tuo saldo",
  "board.betTooBig.dismissAria": "Chiudi",
  "board.betTooBig.gotIt": "Ho capito",
  "board.betTooBig.body": "Puntare su {slotLabel} richiede {needed} e tu hai {held}. Ti mancano {shortfall}.",
  "board.betTooBig.deposit": "Deposita {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Giocatori, in ordine di puntate totali",
  "board.wagerLadder.title": "Giocatori",
  "board.wagerLadder.countZero": "Nessuna puntata",
  "board.wagerLadder.countOther": "{n} nel round · per puntata totale",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "Comprimi il pannello giocatori",
  "board.wagerLadder.lastRoundAria": "Vedi i risultati dell'ultimo round, round #{n}",
  "board.wagerLadder.lastRoundLabel": "Risultati ultimo round",
  "board.wagerLadder.empty": "In questo round nessuno ha ancora puntato su una casella.",
  "board.wagerLadder.leaderAria": "In testa",
  "board.wagerLadder.openProfileTitle": "Apri il profilo di {name} in una nuova scheda",
  "board.wagerLadder.miniGridTotal": "{amount} in totale",
  // The mini-grid's cell-group aria names WHOSE tiles are lit: two keys, not a
  // {name} token plus board.common.you, because Italian needs two different
  // sentences here too.
  "board.wagerLadder.miniGridTilesAria": "Caselle puntate da {name}",
  "board.wagerLadder.miniGridTilesAriaYou": "Caselle su cui hai puntato",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "Vendi carte per coprire questa puntata",
  "board.bidFund.eyebrow": "USDC ESAURITI",
  "board.bidFund.titleOne": "Vendi la tua carta per coprire questa puntata?",
  "board.bidFund.titleMany": "Vendi queste carte per coprire questa puntata?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site.
  "board.bidFund.body": "Vendere {cards} frutta {buyback}, abbastanza per puntare {amount} su {tile}.",
  "board.bidFund.bodyCardsMany": "queste carte",
  "board.bidFund.note":
    "Ti mancano {amount}. Le carte si vendono al tasso di riacquisto CC del loro pack (dall'85 al 93%). Non si torna indietro.",
  "board.bidFund.keepCards": "Tieni le carte",
  "board.bidFund.sellAndBid": "Vendi e punta {amount}",
  "board.bidFund.autoSellSwitch": "Incassa in automatico le mie vincite in USDC",
  "board.bidFund.autoSellNoteOn":
    "Ogni vincita viene incassata al tasso di riacquisto appena arriva. Niente scelta tieni o vendi. Le Grail non vengono mai vendute in automatico. Puoi cambiare idea quando vuoi nelle Impostazioni.",
  "board.bidFund.autoSellNoteOff":
    "Attivalo e ogni carta che vinci viene incassata in USDC al tasso di riacquisto, senza chiederti nulla. Le Grail non vengono mai vendute in automatico. Puoi cambiare idea quando vuoi nelle Impostazioni.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "Punti con i tasti numerici?",
  "board.hotkeys.optInBody":
    "Premendo un tasto punti su quella casella con la puntata corrente, all'istante. Adesso non è stato piazzato nulla.",
  "board.hotkeys.notNow": "Non ora",
  "board.hotkeys.enableKeys": "Attiva i tasti",
  "board.hotkeys.turnOff": "Disattiva",
  "board.hotkeys.turnOffTitle": "I tasti restano spenti finché non li riattivi nelle Impostazioni.",
  "board.hotkeys.changeKeys": "Cambia i tasti",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2): the two
  // surfaces word the same beats differently and must be free to diverge.
  "board.boardV1.openTile": "Apri casella",
  "board.boardV1.onTile": "sulla casella",
  "board.boardV1.changeAmount": "cambia {amount}",
  "board.boardV1.oddsSuffix": "{pct} di probabilità",
  "board.boardV1.openedOdds": "Aperta · {pct} di probabilità",
  "board.boardV1.emptyNeverInDraw": "Vuota · mai in estrazione",
  "board.boardV1.winnerYourShare": "VINCENTE · la tua quota viene pagata",
  "board.boardV1.winnerNoStake": "VINCENTE · non avevi puntato",
  "board.boardV1.lostOdds": "Estrazione persa · {pct} di probabilità",
  "board.boardV1.tileClickTitle": "Clicca ovunque per puntare {amount} su {label}",
  "board.boardV1.youAmount": "Tu {amount}",
  "board.boardV1.youNone": "Tu -",
  "board.boardV1.pctOfTile": "{pct} della casella",
  "board.boardV1.noStakeYet": "nessuna puntata",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "{amount} puntati · {pct} della casella",
  "board.boardV1.statusWaitingDraw": "In attesa dell'estrazione…",
  "board.boardV1.statusWonSplit": "Hai vinto {amount} dalla ripartizione",
  "board.boardV1.statusOnWinningTile": "Sei sulla casella vincente",
  "board.boardV1.statusNoPayout": "Nessun pagamento stavolta",
  "board.boardV1.statusYourStake": "Puntata in gioco",
  "board.boardV1.statusBacking": "Punti su questa casella",
  "board.boardV1.backerCount.one": "{n} sostenitore",
  "board.boardV1.backerCount.other": "{n} sostenitori",
  "board.boardV1.noBackersYet": "Nessun sostenitore",
  // {amount} renders inside its own <b> at the call site.
  "board.boardV1.backAmount": "Punta {amount}",
  "board.boardV1.backBtnTitle": "Punta {amount} USDC su {label}",
  "board.boardV1.evolveTitle": "Punta esattamente {amount} in più su {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} sulla casella",
  "board.boardV1.opensAs": "Si apre come · {summary}",
  "board.boardV1.noPacksYet": "Ancora nessun pack, puntaci sopra per pagare il primo",
  "board.boardV1.whyOpenedDrawing":
    "Ha aperto {cardName} ({amount}) con {pct} di probabilità, il vincitore si sta estraendo ora.",
  "board.boardV1.whyWon":
    "Ha vinto l'estrazione ponderata con {pct} di probabilità. Ha aperto {cardName} ({amount}); il montepremi si è diviso pro-rata tra i suoi sostenitori.",
  "board.boardV1.whyLost":
    "Ha perso l'estrazione ponderata, {pct} di probabilità ({amount} sul montepremi da {poolAmount}). Ha comunque aperto {cardName} ({cardAmount}), ma paga solo la casella vincente.",
  "board.boardV1.whyEmpty": "Casella vuota: nessuna puntata, nessun ticket in estrazione.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " La tua puntata qui: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Qui non avevi puntato.",
  "board.boardV1.ifWins": "Se vince questa casella ti prendi circa {amount} del montepremi da {poolAmount}.",
  "board.boardV1.clickToBack": "Clicca per puntare la cifra selezionata e aprire il suo primo pack al blocco.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "Posizione {rank}, {name}, giocato {wagered}, netto {net}, vittorie {pct} percento",
  "board.leaderboard.youTag": "TU",
  "board.leaderboard.youRankTag": "TU · #{n}",
  "board.leaderboard.statWagered": "GIOCATO",
  "board.leaderboard.statNetPl": "P&L NETTO",
  "board.leaderboard.statWinRate": "% VITTORIE",
  "board.leaderboard.statRounds": "ROUND",
  "board.leaderboard.statPoolShare": "% MONTEPREMI",
  "board.leaderboard.statFirstSeen": "PRIMA VOLTA",
  "board.leaderboard.statBiggestPull": "PULL MIGLIORE",
  "board.leaderboard.shareOfToday": "delle puntate di oggi",
  "board.leaderboard.shareOfAllTime": "delle puntate di sempre",
  "board.leaderboard.noneYet": "NESSUNO",
  "board.leaderboard.viewFullProfile": "Vedi profilo completo",
  "board.leaderboard.live": "LIVE",
  "board.leaderboard.fullRankings": "Classifica",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so the figure may go anywhere.
  "board.leaderboard.playerCount.one": "{n} giocatore",
  "board.leaderboard.playerCount.other": "{n} giocatori",
  "board.leaderboard.roundCount.one": "{n} round giocato",
  "board.leaderboard.roundCount.other": "{n} round giocati",
  "board.leaderboard.colPlayer": "Giocatore",
  "board.leaderboard.colWagered": "Giocato",
  "board.leaderboard.colNet": "P&L netto",
  "board.leaderboard.colWin": "Vitt.",
  "board.leaderboard.colBiggestPull": "Pull migliore",
  "board.leaderboard.sortGroupAria": "Ordina la classifica",
  "board.leaderboard.sortBy": "Ordina per {col}",
  "board.leaderboard.podiumNet": "{amount} netti",
  "board.leaderboard.podiumTopPull": "Miglior pull",
  "board.leaderboard.fullStandings": "Classifica completa · {n} scommettitori",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  "board.betRail.stakeUnitPackOne": "{n} pack {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} pack {packName} ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "Foto profilo X di {handle}",
  "board.connectX.connectedTitle": "Connesso tramite X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "Slot {packName} (nessuno su questa casella)",
  "board.packChips.fixedChipTitle": "{n} x {packName} da {amount} l'uno",
  "board.packChips.fixedChipTitleTotalSuffix": " · {amount} in totale",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Nato dal resto accumulato sulla casella, nessuno ha puntato questo pack",
  "board.packChips.pooledSome": "{n} di {total} nati dal resto accumulato sulla casella",
  "board.packChips.bidWhole": "Puntato come pack intero",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Anche su questa casella: {list}",
  "board.packChips.morePacks.one": "{n} altro pack",
  "board.packChips.morePacks.other": "{n} altri pack",
  "board.packChips.morePacksWithList.one": "{n} altro pack: {list}",
  "board.packChips.morePacksWithList.other": "{n} altri pack: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money, "il
  // resto" (the only money that evolves). Pack TIER NAMES ({tier}) stay
  // English brand terms in every locale.
  "board.tile.splitBidsPool": "Puntate {bids} · resto {pool}",
  "board.tile.splitAllBids": "Tutti i {bids} sono stati puntati come pack interi",
  "board.tile.splitAllPool": "Tutti i {pool} sono resto accumulato sulla casella",
  "board.tile.splitPoolNote": "I pack tratteggiati nascono dal resto, nessuno li ha puntati.",
  "board.tile.evolveLooseTitle": "{loose} di resto su questa casella diventano un pack {tier} a {target}",
  "board.tile.evolveNoLooseTitle":
    "Ancora nessun resto su questa casella. Il resto diventa un pack {tier} a {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // and the rail SAYS what it will do before it fires. {total} is the real
  // board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name}, copre {covered} caselle su {total} a {unit}",
  "board.betRail.allTilesPlanFull":
    "Alla chiusura del round punta su tutte le {total} caselle a {unit}. In totale {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Alla chiusura del round punta su {covered} casella su {total} a {unit}. I tuoi {balance} coprono {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "Alla chiusura del round punta su {covered} caselle su {total} a {unit}. I tuoi {balance} coprono {spend}.",
  "board.betRail.allTilesPlanNone":
    "I tuoi {balance} non coprono nemmeno una puntata da {unit}, quindi nessuna casella verrà puntata.",
  "board.betRail.allTilesShortHistory.one":
    "L'auto-puntata su tutte le caselle richiede {needed} per {tiles} caselle a {unit}. Hai {balance}, quindi ha puntato su {covered} casella.",
  "board.betRail.allTilesShortHistory.other":
    "L'auto-puntata su tutte le caselle richiede {needed} per {tiles} caselle a {unit}. Hai {balance}, quindi ha puntato su {covered} caselle.",
  "board.betRail.allTilesNoneHistory":
    "L'auto-puntata su tutte le caselle richiede {needed} per {tiles} caselle a {unit}. Hai {balance}, quindi non ha puntato su nessuna casella.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Alla chiusura del round",
  "board.betRail.planTotal": "In totale",
  "board.betRail.planMathFull": "{total} caselle × {amount}",
  "board.betRail.planMathShort": "{covered} di {total} caselle × {amount}",
  "board.betRail.planPerTile": "{unit} per casella",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (Max / Min
  // / Tutte, kept as short as the English), `.name` is also substituted into
  // the {name} token of board.betRail.strategyAria* / firedAtClose,
  // `.closeLine` renders right after `.rowTitle` as "rowTitle, closeLine".
  // Informal tu, established vocabulary: casella, puntata, round, chiusura del
  // round, leader, armare.
  "board.strategy.highest.label": "Max",
  "board.strategy.highest.name": "Arma: punta sulla casella più alta alla chiusura del round",
  "board.strategy.highest.detail":
    "Arma la tua puntata sulla casella con più soldi, decisa poco prima che il round chiuda.",
  "board.strategy.highest.rowTitle": "Casella più alta",
  "board.strategy.highest.closeLine": "punta sulla casella più grande alla chiusura del round",
  "board.strategy.highest.gridLine": "più soldi alla chiusura",

  "board.strategy.lowest.label": "Min",
  "board.strategy.lowest.name": "Arma: punta sulla casella più bassa alla chiusura del round",
  "board.strategy.lowest.detail":
    "Arma la tua puntata sulla casella meno affollata, decisa poco prima che il round chiuda. Se tutti si buttano sulla più bassa, a quel punto non è più la più bassa.",
  "board.strategy.lowest.rowTitle": "Casella più bassa",
  "board.strategy.lowest.closeLine": "punta sulla casella più piccola alla chiusura del round",
  "board.strategy.lowest.gridLine": "meno soldi alla chiusura",

  "board.strategy.secondHighest.label": "2ª max",
  "board.strategy.secondHighest.name":
    "Arma: punta sulla seconda casella più alta alla chiusura del round",
  "board.strategy.secondHighest.detail":
    "Arma la tua puntata un gradino sotto il leader, decisa poco prima che il round chiuda.",
  "board.strategy.secondHighest.rowTitle": "2ª casella più alta",
  "board.strategy.secondHighest.closeLine":
    "punta sulla casella subito sotto il leader alla chiusura del round",
  "board.strategy.secondHighest.gridLine": "un gradino sotto il leader",

  "board.strategy.secondLowest.label": "2ª min",
  "board.strategy.secondLowest.name":
    "Arma: punta sulla seconda casella più bassa alla chiusura del round",
  "board.strategy.secondLowest.detail":
    "La scelta controcorrente: quando tutti inseguono la casella più bassa, quella si affolla e la seconda più bassa può pagare meglio. Si arma ora e si decide poco prima che il round chiuda.",
  "board.strategy.secondLowest.rowTitle": "2ª casella più bassa",
  "board.strategy.secondLowest.closeLine":
    "punta sulla casella subito sopra il fondo affollato alla chiusura del round",
  "board.strategy.secondLowest.gridLine": "un gradino sopra il fondo",

  "board.strategy.allTiles.label": "Tutte",
  "board.strategy.allTiles.name": "Arma: punta su tutte le caselle alla chiusura del round",
  "board.strategy.allTiles.detail":
    "Arma la tua puntata su tutte le caselle ammesse, decisa poco prima che il round chiuda. Spesa totale = la tua puntata x il numero di caselle in quel momento.",
  "board.strategy.allTiles.rowTitle": "Tutte le caselle",
  "board.strategy.allTiles.closeLine": "distribuisce la tua puntata alla chiusura del round",
  "board.strategy.allTiles.gridLine": "puntata su ogni casella",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "Tocca ancora: {unit}",
  "board.tile.confirmClickAgain": "Clicca ancora: {unit}",
  "board.tile.betOffNotice": "Le puntate sono disattivate nelle impostazioni",
  "board.stakeControl.pickPackHint": "Scegli un pack per puntare",
  "board.stakeControl.emptyStakeLead": "Scegli un pack",
  "board.stakeControl.emptyStakeHint": "Diventa la tua puntata",
  "gear.betInput.label": "Piazzare una puntata",
  "gear.betInput.hint":
    "Come un tocco sulla casella (e il suo tasto numerico) piazza la puntata. Doppio chiede prima un tocco di conferma - impostazione predefinita sugli schermi touch. Disattivato è modalità spettatore: nessuna puntata possibile.",
  "gear.betInput.optionSingle": "Tocco singolo",
  "gear.betInput.optionDouble": "Doppio tocco",
  "gear.betInput.optionOff": "Disattivato",
  "gear.cardOpen.label": "Aprire le carte",
  "gear.cardOpen.hint":
    "Doppio chiede un tocco di conferma prima che una carta apra la sua pagina - impostazione predefinita sugli schermi touch.",
} as Record<string, string>;
