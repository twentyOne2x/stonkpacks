// Italian (Italiano): "pages" segment. Same key set as en/pages.ts. See
// royaleI18n.ts for the {token} interpolation convention and the "no em dash"
// rule.
//
// Segment: pages. Covers the standalone-route surfaces: RoyaleProfileRoute,
// RoyaleLadderRoute, RoyaleRoundResultsRoute, RoyaleCollectionRoute,
// RoyaleWinningsStrip, RoyaleSessionHistory, plus RoyaleWithdrawPanel,
// RoyaleSellBackPanel, RoyaleStatsPanel, RoyaleArenaResultsRoute and
// RoyaleCardDetailRoute.
//
// Register: INFORMAL "tu" throughout, games/casino Italian rather than
// literal English word order ("a vuoto", "punta su una casella", "incassare").
//
// Terminology (kept consistent across core/board/misc/onboarding/docs/arena):
//   - "tile" -> "casella"; "backer(s)" -> "sostenitore/i"; "pack(s)" ->
//     "pack" (English loanword, invariable plural); "stake" -> "puntata"; "settled" -> "concluso";
//     "payout split" -> "ripartizione"; "buyback" -> "riacquisto";
//     "vault" -> "caveau"; "slab" -> "slab" (masculine, invariable).
//   - "pull" (the card a pack yields) -> "pull", the invariable loanword the
//     Italian TCG scene uses (matches board.ts and misc.ts; the earlier
//     "tiro" read as "a throw").
//   - "the Chase" -> "la Caccia" (house style: the feature name IS
//     translated, matching misc.chase.label and board.settlement.*).
//   - "pot" (the arena's card pot) -> "piatto", the Italian poker word; it is
//     kept distinct from "montepremi", the round's money pool.
//   - "pool" in pages.ladder.* refers to a CollectorCrypt machine's card
//     inventory (a different sense from the round's money pool): kept as the
//     English loanword "pool", common in Italian collector/gacha slang.
//   - "Grail" and the other TIER NAMES stay English and capitalized
//     everywhere, including mid-sentence.
//   - W/L record abbreviations (pages.profile.formW/formL and the {wins}W
//     {losses}L pair) become V/P (Vittorie/Perdite).
export default {
  // ===== pages.common.*, reused across 2+ files in this segment ============
  "pages.common.goToBoard": "VAI AL TABELLONE",
  "pages.common.backToBoard": "← Torna al tabellone",
  "pages.common.replay": "REPLAY",
  "pages.common.replayTitle": "Rivedi il round {n}, dalla prima puntata alla rivelazione",
  "pages.common.you": "Tu",
  "pages.common.cancel": "Annulla",
  "pages.common.close": "×",
  "pages.common.withdrawToWallet": "Preleva sul wallet",
  "pages.common.withdrawnToWallet": "Prelevato sul wallet",
  "pages.common.chase": "CACCIA",
  "pages.common.roundNumber": "Round #{n}",
  "pages.common.share": "Condividi",
  "pages.common.noCardsKeptTitle": "ANCORA NESSUNA CARTA",
  "pages.common.noCardsKeptBody": "Tieniti un pull vincente invece di rivenderlo e finisce qui, come slab gradato.",

  // ===== pages.sessionHistory.* (RoyaleSessionHistory.tsx) ==================
  "pages.sessionHistory.log.ariaLabel": "Cronologia sessione",
  "pages.sessionHistory.log.title": "Cronologia sessione",
  "pages.sessionHistory.log.emptyHint": "Le tue ricevute compaiono qui",
  "pages.sessionHistory.log.hint": "Le tue ricevute e mosse",

  "pages.sessionHistory.ledger.ariaLabel": "Cronologia di round e caselle",
  "pages.sessionHistory.ledger.title": "Cronologia round e caselle",
  "pages.sessionHistory.ledger.empty": "I round passati compaiono qui",
  "pages.sessionHistory.ledger.summaryOne": "{n} round concluso · clicca una riga per i dettagli",
  "pages.sessionHistory.ledger.summaryOther": "{n} round conclusi · clicca una riga per i dettagli",
  "pages.sessionHistory.ledger.emptyBody":
    "Ancora nessun round chiuso: la prima rivelazione arriva qui con tutte le caselle, la casella vincente e la ripartizione.",
  "pages.sessionHistory.ledger.showMore": "MOSTRA ALTRI {n} · {hidden} PIÙ VECCHI",

  "pages.sessionHistory.row.noWinner": "-",
  "pages.sessionHistory.row.wonSuffix": "{label} vince",
  "pages.sessionHistory.row.pull": "{name} · {amount}",
  "pages.sessionHistory.row.poolSuffix": "montepremi {amount}",
  "pages.sessionHistory.row.noPull": "nessun pull",
  "pages.sessionHistory.row.youWon": "tu +{amount}",
  "pages.sessionHistory.row.noWin": "a vuoto",

  "pages.sessionHistory.detail.splitAria": "Ripartizione",
  "pages.sessionHistory.detail.splitOf": "Ripartizione di {amount}",
  "pages.sessionHistory.detail.yourStake": "La tua puntata {amount}",
  "pages.sessionHistory.detail.noStakeFromYou": "Non hai puntato",
  "pages.sessionHistory.detail.cardKeptGrail": "Carta → {name} (Grail tenuta)",
  "pages.sessionHistory.detail.cardSoldBack": "Carta → {name} · rivenduta",
  "pages.sessionHistory.detail.cardKept": "Carta → {name} · tenuta",
  "pages.sessionHistory.detail.grailSoldSplit": "Grail rivenduta → ripartizione qui sopra",

  "pages.sessionHistory.tile.labelAmount": "{label} · {amount}",
  "pages.sessionHistory.tile.grailPrefix": "GRAIL · ",
  "pages.sessionHistory.tile.topPrefix": "TOP · ",
  "pages.sessionHistory.tile.wonSuffix": " · VINTA",
  "pages.sessionHistory.tile.lostSuffix": " · estrazione persa",

  // ===== pages.winningsStrip.* (RoyaleWinningsStrip.tsx) ====================
  "pages.winningsStrip.ariaLabel": "Le tue vincite",
  "pages.winningsStrip.title": "Le tue vincite",
  "pages.winningsStrip.decisionClock": "{n}s per decidere",
  "pages.winningsStrip.withdrawBalance": "Preleva saldo {amount}",
  "pages.winningsStrip.howItWorks": "Come funziona il gioco: probabilità, VRF, carte →",
  "pages.winningsStrip.decisionOpen": "Tocca a te decidere sulla carta",
  "pages.winningsStrip.decisionNoActionKeep": "se non fai nulla resta tua (la vendi quando vuoi dalle tue carte)",
  "pages.winningsStrip.decisionNoActionSell": "se non fai nulla si vende da sola al prossimo blocco",
  "pages.winningsStrip.keep": "Tieni ({amount})",
  "pages.winningsStrip.sell": "Vendi {amount}",
  "pages.winningsStrip.sellWithPct": "Vendi {amount} · {pct}%",
  "pages.winningsStrip.yourCards": "Le tue carte",
  "pages.winningsStrip.heldValue": "{amount} in mano",
  "pages.winningsStrip.keptByDefault": "Tenuta di default",
  "pages.winningsStrip.withdrawAllOne": "Preleva tutta {n} carta · {amount}",
  "pages.winningsStrip.withdrawAllOther": "Preleva tutte {n} carte · {amount}",
  "pages.winningsStrip.withdrawAllConfirm": "Sicuro? Ritira {n} carte",
  "pages.winningsStrip.selectToWithdraw": "Seleziona per prelevare",
  "pages.winningsStrip.sellAll": "Vendi tutto {amount} · {pct}%",
  "pages.winningsStrip.selectedForWithdrawal": "Selezionata per il prelievo",
  "pages.winningsStrip.tapCardToSelect": "Tocca per selezionare",
  "pages.winningsStrip.selectCardsToWithdraw": "Scegli le carte da prelevare",
  "pages.winningsStrip.selectedSummaryOne": "{n} carta selezionata · {amount}",
  "pages.winningsStrip.selectedSummaryOther": "{n} carte selezionate · {amount}",
  "pages.winningsStrip.withdrawSelectedOne": "Preleva {n} carta · {amount}",
  "pages.winningsStrip.withdrawSelectedOther": "Preleva {n} carte · {amount}",
  "pages.winningsStrip.withdrawBalanceDialogAria": "Preleva saldo",
  "pages.winningsStrip.closeWithdrawAria": "Chiudi il prelievo",
  "pages.winningsStrip.pastRounds": "Round passati",
  "pages.winningsStrip.shareLastWin": "Condividi la vincita",
  "pages.winningsStrip.roundId": "R{n}",
  "pages.winningsStrip.tileTook": "La casella {n} si prende il tavolo · {amount}",
  "pages.winningsStrip.chaseAward": "Caccia +{amount}",
  "pages.winningsStrip.noRound": "nessun round",
  "pages.winningsStrip.roundNetWin": "+{amount}",
  "pages.winningsStrip.roundNetLost": "Persa",
  "pages.winningsStrip.kept": "Tenuta",
  "pages.winningsStrip.sold": "Venduta",
  "pages.winningsStrip.activity": "Attività",

  // ===== pages.sellConfirm.* (RoyaleSellCardConfirm.tsx) ====================
  // First confirmation in front of the per-card sell back in "Your cards"
  // (owner 2026-08-15). {value} is the card's face value, {amount}/{pct} the
  // HONORED buyback quote the sale actually pays.
  "pages.sellConfirm.dialogAria": "Conferma la rivendita della carta",
  "pages.sellConfirm.eyebrow": "Rivendita",
  "pages.sellConfirm.title": "Vendere {name}?",
  "pages.sellConfirm.payoutLabel": "Ricevi",
  "pages.sellConfirm.rateNote": "{pct}% di {value}",
  "pages.sellConfirm.irreversible": "La carta esce dalla tua collezione. Non puoi annullare.",
  "pages.sellConfirm.keep": "Tieni la carta",
  "pages.sellConfirm.confirm": "Vendi per {amount}",

  // ===== pages.collection.* (RoyaleCollectionRoute.tsx) =====================
  "pages.collection.title": "La tua collezione",
  "pages.collection.summaryCardOne": "carta",
  "pages.collection.summaryCardOther": "carte",
  "pages.collection.totalValueSuffix": "valore totale",
  "pages.collection.tierGrail": "GRAIL",
  "pages.collection.tierTop": "TOP",
  "pages.collection.tierCommon": "COMUNE",
  "pages.collection.viaKept": "TENUTA",
  "pages.collection.viaWon": "VINTA",
  "pages.collection.cardAriaLabel": "{name}, {amount}. Invio apre i dettagli della carta.",

  // ===== pages.ladder.* (RoyaleLadderRoute.tsx) ==============================
  "pages.ladder.title": "Classifica",
  "pages.ladder.tabAriaLabel": "Vista classifica",
  "pages.ladder.tabBetters": "Scommettitori",
  "pages.ladder.tabPacks": "Probabilità",
  "pages.ladder.tabCollectors": "Collectors",
  "pages.ladder.sectionAriaLabel": "Classifica pack",
  "pages.ladder.intro":
    "Ogni dollaro riempie il pack più grande che riesce. Ogni gradino è una macchina CollectorCrypt vera: sbircia le carte migliori, poi apri tutto il pool.",
  "pages.ladder.sourceLive": "Pool CollectorCrypt dal vivo ({count}/{total} macchine) · aggiornato {age}{backlogNote}",
  "pages.ladder.sourceBundled": "Pool di riferimento: slab CollectorCrypt inclusi nel gioco, valori assicurati reali (non annunci dal vivo)",
  "pages.ladder.sourceFixtures": "Esempi di riferimento: dati inclusi nel gioco",
  "pages.ladder.footNote": "Probabilità, fasce di valore e riacquisto rispecchiano le specifiche pubblicate da CollectorCrypt per le macchine gacha (istantanea del {date}).",
  "pages.ladder.footNoteLive":
    "Le carte sono inventario di mercato dal vivo dentro le fasce di ogni macchina, aggiornato ogni 5 minuti fra un round e l'altro.",
  "pages.ladder.footNoteBundled": "Le carte che vedi sono un set di slab CollectorCrypt gradati veri, non annunci dal vivo.",
  "pages.ladder.stepUp": "Sali",
  "pages.ladder.stepUpFromPrefix": "da {name}",
  "pages.ladder.stepUpEntryPrefix": "gradino base, sotto",
  "pages.ladder.stepUpEntrySuffix": "è resto",
  "pages.ladder.valueRange": "Fascia di valore",
  "pages.ladder.ceiling": "tetto",
  "pages.ladder.floor": "minimo",
  "pages.ladder.machineOdds": "Probabilità macchina",
  "pages.ladder.buybackPrefix": "riacquisto",
  "pages.ladder.grailOddsPrefix": "Grail",
  "pages.ladder.poolLoading": "Pool in arrivo…",
  "pages.ladder.viewMore": "Vedi altre {n}",
  "pages.ladder.cardPool": "pool da {n} carte",
  "pages.ladder.priciestFirst": "dalla più cara",
  "pages.ladder.machineCardsOnly": "{n} carte",
  "pages.ladder.machineNameCards": "{shortName} · {n} carte",
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

  // ===== pages.ladder.leaderboard.* (RoyaleLeaderboard.tsx) =================
  "pages.ladder.leaderboard.ariaLabel": "Classifica dei migliori scommettitori",
  "pages.ladder.leaderboard.title": "Migliori scommettitori",
  "pages.ladder.leaderboard.emptyNoSettled": "Ancora nessun round concluso",
  "pages.ladder.leaderboard.emptyNoBetsToday": "Oggi non si è ancora chiusa nessuna puntata.",
  "pages.ladder.leaderboard.emptyNoBetsAll": "Non si è ancora chiusa nessuna puntata.",
  "pages.ladder.leaderboard.emptyCta": "Punta sul tabellone per entrarci",
  "pages.ladder.leaderboard.timeframeAriaLabel": "Periodo",
  "pages.ladder.leaderboard.today": "Oggi",
  "pages.ladder.leaderboard.allTime": "Da sempre",

  // ===== pages.ladderViewer.* (pages/RoyaleLadderCardViewer.tsx, the modal a
  // ladder row's "Vedi altre {n}" button opens over the full machine pool) ===
  "pages.ladderViewer.eyebrow": "Pool pack",
  "pages.ladderViewer.showing": "Mostrate {n} di {total}",
  "pages.ladderViewer.closeAria": "Chiudi il pool del pack",
  "pages.ladderViewer.remainingFoot": "{n} ancora da vedere · minimo {amount}",
  "pages.ladderViewer.wholePool": "Questo è tutto il pool da {n} carte.",

  // ===== pages.results.* (RoyaleRoundResultsRoute.tsx) ======================
  "pages.results.title": "Risultati round",
  // "round" is an invariable loanword in Italian, so the two plural forms
  // coincide; the pair is kept for the .one/.other contract.
  "pages.results.count.one": "{n} ROUND",
  "pages.results.count.other": "{n} ROUND",
  "pages.results.emptyTitle": "ANCORA NESSUN ROUND CONCLUSO",
  "pages.results.emptyBody": "Gioca un round sul tabellone e ogni carta che apre finisce qui, round dopo round.",
  "pages.results.tileWins": "{winner} vince {amount}",
  "pages.results.tileFallback": "Casella",
  "pages.results.youWon": "hai vinto {amount}",
  "pages.results.noWinForYou": "niente per te",
  "pages.results.replayLink": "Replay",
  "pages.results.payoutSplitLabel": "Ripartizione",
  "pages.results.payoutSplit": "Ripartizione · montepremi {amount}",
  "pages.results.yourPullPrefix": "Il tuo pull ·",
  "pages.results.noPull": "nessuno",
  "pages.results.youKeptIt": "te la sei tenuta",
  "pages.results.youSoldItForCash": "l'hai venduta per contanti",
  "pages.results.chaseAward": "CACCIA +{amount}",
  "pages.results.potLedgerFull": "{amount} di montepremi pagati per intero",
  "pages.results.pool": "montepremi",
  "pages.results.potLedgerWithheld": "trattenuto",
  "pages.results.potLedgerPaidIn": "versato",
  "pages.results.potLedgerCashToBackers": "contanti ai sostenitori",
  "pages.results.theChase": "La Caccia",
  "pages.results.protocol": "protocollo",
  "pages.results.jackpot": "jackpot",
  "pages.results.cardTrades": "scambi di carte",
  "pages.results.statsAriaLabel": "Totali sessione",
  "pages.results.roundsPlayed": "ROUND GIOCATI",
  "pages.results.winRate": "% VITTORIE",
  "pages.results.cashWon": "CONTANTI VINTI",
  "pages.results.biggestPackPull": "MIGLIOR PULL",
  "pages.results.noneYet": "NESSUNO",

  // --- ROUNDS-LIST UI WAVE (owner burst 2026-07-29): the winning tile's draw
  // odds, the per-round collapse toggle, and the "other participants" disclosure.
  "pages.results.tileOdds": "{pct} di probabilità",
  "pages.results.oddsUnavailable": "probabilità non disponibile",
  "pages.results.collapseRoundAria": "Comprimi il round {n}",
  "pages.results.expandRoundAria": "Espandi il round {n}",
  "pages.results.playersTitle": "ALTRI GIOCATORI",
  "pages.results.playersCount.one": "{n} giocatore",
  "pages.results.playersCount.other": "{n} giocatori",
  "pages.results.playersShow": "Mostra",
  "pages.results.playersHide": "Nascondi",
  "pages.results.playerBid": "PUNTATA",
  "pages.results.playerResult": "RISULTATO",
  "pages.results.playerCash": "{amount} in contanti",
  "pages.results.playerNoCards": "nessuna carta",

  // ===== pages.sellBack.* (RoyaleSellBackPanel.tsx header banner) ===========
  "pages.sellBack.ariaLabel": "Rivendi le tue carte",
  "pages.sellBack.title": "Rivendita",
  "pages.sellBack.hint": "Prezzo bloccato dal momento in cui hai vinto, mai riquotato.",
  "pages.sellBack.quietState": "La rivendita si apre insieme ai round dal vivo.",

  // --- royaleSellBack.ts: the quote countdown (formatSellBackCountdown). The
  // {d}/{h}/{m} tokens are already-formatted integers: Italian reorders the
  // sentence around them, it never re-formats the digits.
  "pages.sellBack.countdownExpired": "Scaduta",
  "pages.sellBack.countdownDaysHours": "{d}g {h}h rimasti",
  "pages.sellBack.countdownHoursMinutes": "{h}h {m}m rimasti",
  "pages.sellBack.countdownMinutes": "{m}m rimasti",
  "pages.sellBack.countdownSubMinute": "<1m rimasto",

  // --- royaleSellBack.ts: custody badges. Informational only, the sell-back
  // stays allowed in both states.
  "pages.sellBack.badgeDeliveryPending": "Consegna in corso",
  "pages.sellBack.badgeNeedsWallet": "Serve il wallet",

  // --- royaleSellBack.ts: player-facing copy for every domain error code.
  // Each pair is a title plus the detail rendered under it: they say what
  // happened and what is safe, never "sorry".
  "pages.sellBack.error.quoteExpired.title": "Offerta scaduta",
  "pages.sellBack.error.quoteExpired.detail":
    "La finestra di rivendita si è chiusa. La carta resta tua. Da qui in poi l'uscita è il mercato aperto.",
  "pages.sellBack.error.alreadyExercised.title": "Già rivenduta",
  "pages.sellBack.error.alreadyExercised.detail": "Questa carta è già stata rivenduta. Qui trovi la ricevuta di quella vendita.",
  "pages.sellBack.error.quoteVoid.title": "Offerta ritirata",
  "pages.sellBack.error.quoteVoid.detail":
    "Questa offerta di rivendita è stata ritirata dalla gestione. Scrivi al supporto se ti aspettavi un pagamento.",
  "pages.sellBack.error.notQuoteOwner.title": "Non è la tua carta",
  "pages.sellBack.error.notQuoteOwner.detail": "Questa offerta di rivendita è di un altro account.",
  "pages.sellBack.error.cardNotDelivered.title": "Carta ancora in viaggio",
  "pages.sellBack.error.cardNotDelivered.detail":
    "La carta non è ancora arrivata del tutto nel tuo wallet. Riprova fra un attimo.",
  "pages.sellBack.error.cardNotHeld.title": "Carta fuori dal tuo wallet",
  "pages.sellBack.error.cardNotHeld.detail":
    "Il tuo wallet non tiene più questa carta esatta. Solo la carta originale sblocca questa offerta.",
  "pages.sellBack.error.returnTxRequired.title": "Serve la tua firma",
  "pages.sellBack.error.returnTxRequired.detail":
    "Questa rivendita ha bisogno della tua firma per restituire la carta. Firma e riprova.",
  "pages.sellBack.error.returnNotConfirmed.title": "Reso non confermato",
  "pages.sellBack.error.returnNotConfirmed.detail":
    "Il reso della carta non si è confermato on-chain. L'offerta è ancora viva. Riprova quando vuoi.",
  "pages.sellBack.error.rateLimited.title": "Troppi tentativi",
  "pages.sellBack.error.rateLimited.detail": "Rallenta un attimo e riprova.",
  "pages.sellBack.error.accountRequired.title": "Serve l'accesso",
  "pages.sellBack.error.accountRequired.detail": "Collega il tuo account per rivendere una carta.",
  "pages.sellBack.error.quoteNotFound.title": "Offerta non trovata",
  "pages.sellBack.error.quoteNotFound.detail": "Questa offerta di rivendita non esiste più.",
  "pages.sellBack.error.quoteIdRequired.title": "Qualcosa non ha funzionato",
  "pages.sellBack.error.quoteIdRequired.detail": "Alla richiesta di rivendita mancavano dei dati necessari.",
  "pages.sellBack.error.unknown.title": "Rivendita non riuscita",
  "pages.sellBack.error.unknown.detail": "Qualcosa non ha funzionato dalla nostra parte. Riprova fra un attimo.",

  // --- RoyaleSellBackPanel.tsx: load/empty states.
  "pages.sellBack.syncNote": "La sincronizzazione riprova da sola. Le offerte bloccate tengono il loro prezzo.",
  "pages.sellBack.offlineTitle": "Sei offline",
  "pages.sellBack.offlineBody": "Riconnettiti e le tue offerte bloccate sono di nuovo qui.",
  "pages.sellBack.loadFailedTitle": "Offerte non caricate",
  "pages.sellBack.loadFailedBody": "Le offerte bloccate tengono il loro prezzo. Richiamale fra un attimo.",
  "pages.sellBack.tryAgain": "Riprova",
  "pages.sellBack.emptyTitle": "Ancora niente da rivendere",
  "pages.sellBack.emptyBody": "Vinci un pack e la sua offerta di riacquisto arriva qui appena il round si chiude.",
  "pages.sellBack.pastSellBacks": "Rivendite passate",

  // --- RoyaleSellBackPanel.tsx: one ticket, from offer to receipt.
  "pages.sellBack.localOffer": "Offerta locale",
  "pages.sellBack.noExpiry": "Senza scadenza",
  "pages.sellBack.preparing": "Preparazione…",
  "pages.sellBack.sellBackAmount": "Rivendi {amount}",
  "pages.sellBack.waitingSignature": "In attesa della tua firma…",
  "pages.sellBack.signatureUnwired": "Per rivendere questa carta serve una firma dal wallet. La tua offerta bloccata resta viva.",
  "pages.sellBack.confirmInWallet": "Conferma nel tuo wallet…",
  "pages.sellBack.sellingBack": "Rivendita in corso…",
  "pages.sellBack.receiptAlreadySold": "Già rivenduta",
  "pages.sellBack.receiptSoldBack": "Rivenduta",
  // {rail} is either "USDC" (a brand term, English everywhere) or
  // pages.sellBack.railGameBalance below.
  "pages.sellBack.receiptPaid": "{amount} pagati · {rail}",
  "pages.sellBack.railGameBalance": "saldo di gioco",

  // --- RoyaleSellBackPanel.tsx: the "Rivendite passate" history rows.
  "pages.sellBack.historySoldBack": "Rivenduta · {amount}",
  "pages.sellBack.historyExpired": "Offerta scaduta",
  "pages.sellBack.historyWithdrawn": "Offerta ritirata",

  // ===== pages.profile.* (RoyaleProfileRoute.tsx) ============================
  "pages.profile.relTime.never": "mai",
  "pages.profile.relTime.justNow": "adesso",
  "pages.profile.relTime.minutesAgo": "{n} min fa",
  "pages.profile.relTime.hoursAgo": "{n} h fa",
  "pages.profile.relTime.daysAgo": "{n} g fa",
  "pages.profile.relTime.monthsAgo": "{n} mesi fa",
  "pages.profile.noDate": "–",

  "pages.profile.count.settledRoundOne": "{n} round concluso",
  "pages.profile.count.settledRoundOther": "{n} round conclusi",
  "pages.profile.count.roundOne": "{n} round",
  "pages.profile.count.roundOther": "{n} round",
  "pages.profile.count.settledOutcomeOne": "{n} esito chiuso",
  "pages.profile.count.settledOutcomeOther": "{n} esiti chiusi",
  "pages.profile.xOfRoundsOne": "{x} di {n} round",
  "pages.profile.xOfRoundsOther": "{x} di {n} round",

  "pages.profile.follow": "Segui",
  "pages.profile.following": "Segui già",
  "pages.profile.linkCopied": "Link copiato",
  "pages.profile.headlineStatsAria": "Statistiche chiave",

  "pages.profile.chartWindow7d": "7G",
  "pages.profile.chartWindow30d": "30G",
  "pages.profile.chartWindowAll": "Tutto",
  "pages.profile.chartValueAria": "Valore della collezione da {from} a {to} in questo periodo",
  // Right-hand end of the value chart's x-axis caption (the left end is a date).
  "pages.profile.chartFootNow": "adesso",
  "pages.profile.viewRoundResultsAria": "Vedi i risultati del round #{n}",

  "pages.profile.collectionViewAll": "Tutte",
  "pages.profile.collectionViewVault": "Nel caveau",
  "pages.profile.collectionViewOffers": "Offerte",
  "pages.profile.collectionViewHistory": "Cronologia",
  "pages.profile.collectionStateAria": "Stato della collezione",
  "pages.profile.openCollection": "Apri la collezione ↗",
  "pages.profile.collectionEmptyHistoryTitle": "ANCORA NESSUNA RIVENDITA",
  "pages.profile.collectionEmptyHistoryBody": "Rivendi una carta che ti sei tenuto e la ricevuta arriva qui.",
  "pages.profile.inVault": "Nel caveau · Round #{n}",
  "pages.profile.sellBackOffer": "Offerta di riacquisto · {amount}",
  "pages.profile.soldBack": "Rivenduta",
  "pages.profile.soldAtSettlement": "Venduta alla chiusura",
  "pages.profile.soldFooter": "{via} · {amount} · {rel}",
  "pages.profile.sellBackNote": "Le rivendite e le offerte dal vivo si gestiscono nella pagina della collezione.",

  "pages.profile.pnlByRound": "P&L PER ROUND",
  "pages.profile.pnlSubtitle": "ultimi {n} round puntati · vittorie in alto, sconfitte in basso · {wins}V {losses}P",
  "pages.profile.pnlAria": "Risultato netto per round, ultimi {n} round",
  "pages.profile.pnlColAria": "Round {n}: {signed}",
  "pages.profile.pnlTooltip": "R{n} · {signed}",

  "pages.profile.recentForm": "FORMA RECENTE",
  "pages.profile.recentFormSubtitle": "ultimi {n} round puntati, dal più vecchio",
  "pages.profile.formColAria": "Round {n}: {result} {amount}",
  "pages.profile.won": "vinto",
  "pages.profile.lost": "perso",
  "pages.profile.formW": "V",
  "pages.profile.formL": "P",

  "pages.profile.leaderboardEyebrow": "CLASSIFICA · {mode}",
  "pages.profile.modeMostProfitable": "PIÙ REDDITIZI",
  "pages.profile.modeHighestVolume": "VOLUME PIÙ ALTO",
  "pages.profile.topPlayers": "top {n} giocatori",
  "pages.profile.metricProfit": "PROFITTO",
  "pages.profile.metricVolume": "VOLUME",
  "pages.profile.metricNetPnl": "P&L NETTO",
  "pages.profile.filtersAria": "Filtri della classifica",
  "pages.profile.metricFilterAria": "Metrica",
  "pages.profile.windowFilterAria": "Periodo",
  "pages.profile.window1d": "1G",
  "pages.profile.window7d": "7G",
  "pages.profile.window30d": "30G",
  "pages.profile.windowAll": "TUTTO",
  "pages.profile.thRank": "#",
  "pages.profile.thPlayer": "GIOCATORE",
  "pages.profile.thRounds": "ROUND",
  "pages.profile.you": "TU",
  "pages.profile.leaderboardEmpty": "ANCORA NESSUN GIOCATORE IN QUESTO PERIODO. La classifica si riempie man mano che puntate e pagamenti vengono registrati.",

  "pages.profile.notFoundTitle": "NESSUN ROUND INDICIZZATO",
  "pages.profile.notFoundBody": "{wallet} non ha ancora chiuso un round che il server abbia indicizzato.",
  "pages.profile.offlineTitle": "PROFILO IRRAGGIUNGIBILE",
  "pages.profile.offlineBody": "Per cercare un giocatore serve una connessione attiva. Riprova per tirare su questa scheda.",
  "pages.profile.retry": "RIPROVA",

  "pages.profile.collectorSince": "Colleziona da {month}",
  "pages.profile.lastActive": "ultima attività {rel}",
  "pages.profile.rankAllTime": "Posizione #{n} · di sempre",
  "pages.profile.netPnl": "P&L netto",
  "pages.profile.lifetime": "da sempre",
  "pages.profile.bidWinRate": "% vittorie sulle puntate",
  "pages.profile.cardsWon": "Carte vinte",
  "pages.profile.grailsOne": "{n} Grail",
  "pages.profile.grailsOther": "{n} Grail",
  "pages.profile.totalStaked": "Totale puntato",
  "pages.profile.betsCount": "{n} puntate",
  "pages.profile.biggestRound": "Round più grosso",
  "pages.profile.singleRoundSwing": "in un solo round",
  "pages.profile.playerStatsAria": "Statistiche giocatore",
  "pages.profile.winsLosses": "VINTE / PERSE",
  "pages.profile.roundsPlayed": "ROUND GIOCATI",
  "pages.profile.betsPlaced": "PUNTATE",
  "pages.profile.voidedRounds": "ROUND ANNULLATI",

  "pages.profile.tablePlayer": "Giocatore al tavolo",
  "pages.profile.playerFallback": "Giocatore",
  "pages.profile.localEmptyTitle": "NESSUN ROUND IN QUESTA SESSIONE",
  "pages.profile.localEmptyBody": "{name} non ha ancora puntato su una casella in questa sessione.",
  "pages.profile.sessionNet": "Netto sessione",
  "pages.profile.cashSplitsOnly": "solo contanti",
  "pages.profile.thisSession": "questa sessione",
  "pages.profile.packsOpened": "Pack aperti",
  "pages.profile.onBackedTiles": "sulle caselle puntate",
  "pages.profile.biggestPull": "Miglior pull",
  "pages.profile.noneYet": "Nessuno",
  "pages.profile.recentActivity": "Attività recente",
  "pages.profile.noSettledOutcomesPlayer": "Per questo giocatore non si è ancora chiuso nessun esito in questa sessione.",

  "pages.profile.pageTitle": "Profilo",
  "pages.profile.followingCount": "Seguiti {n}",
  "pages.profile.collectionValue": "Valore della collezione",
  "pages.profile.updatedAgo": "aggiornato {rel}",
  "pages.profile.noCardsYet": "nessuna carta",
  "pages.profile.change30d": "variazione 30G",
  "pages.profile.allNewIn30": "tutto nuovo in 30 giorni",
  "pages.profile.noChange": "invariato",
  "pages.profile.cardsOwned": "Carte possedute",
  "pages.profile.realizedProceeds": "Ricavi realizzati",
  "pages.profile.sellBackOne": "{n} rivendita",
  "pages.profile.sellBackOther": "{n} rivendite",
  "pages.profile.tabHighlights": "In evidenza",
  "pages.profile.tabCollection": "Collezione",
  "pages.profile.tabActivity": "Attività",
  "pages.profile.tabStats": "Statistiche",
  "pages.profile.tabsAria": "Sezioni del profilo",
  "pages.profile.emptyHighlightsTitle": "ANCORA NESSUN ROUND A REFERTO",
  "pages.profile.emptyHighlightsBody":
    "Punta su una casella del tabellone e il tuo passaporto si riempie: curva di valore, attività, collezione e posizione.",
  "pages.profile.collectionPerformance": "Andamento della collezione",
  "pages.profile.chartWindowAria": "Periodo del grafico",
  "pages.profile.chartEmpty": "La collezione non vale ancora nulla. Tieniti un pull vincente e la curva parte da qui.",
  "pages.profile.thisWindow": "nel periodo",
  "pages.profile.chartNoChanges": "Nessuna variazione della collezione in questo periodo.",
  "pages.profile.viewAll": "Vedi tutte {n}",
  "pages.profile.collectionHighlights": "Pezzi migliori",
  "pages.profile.seeAll": "Vedi tutte {n}",
  "pages.profile.noCardsInVault": "Caveau ancora vuoto. Tieniti un pull e compare qui come slab.",
  "pages.profile.activityAria": "Attività",
  "pages.profile.roundHistoryAria": "Cronologia round",
  "pages.profile.onThisDevice": "{count} su questo dispositivo",
  "pages.profile.noActivityYet": "Ancora nessuna attività. I round in cui punti e le carte che tieni o vendi finiscono qui.",
  "pages.profile.performanceAria": "Andamento",
  "pages.profile.walletAria": "Wallet",
  "pages.profile.walletEyebrow": "WALLET",
  "pages.profile.emptyStatsBody": "Punta su una casella del tabellone e qui si costruiscono il tuo P&L, le vittorie e il registro dei round.",
  "pages.profile.findPlayerAria": "Trova un giocatore",
  "pages.profile.lookUpWallet": "CERCA UN WALLET",
  "pages.profile.walletPlaceholder": "Incolla un indirizzo wallet o un id ospite",
  "pages.profile.view": "VEDI",
  "pages.profile.myProfile": "IL MIO PROFILO",

  // ===== pages.profile.withdraw.* (pages/RoyaleWithdrawPanel.tsx) ===========
  // Digits and currency stay exactly as authored, Italian does not re-punctuate
  // them: "0.01 A 10,000" mirrors the English source.
  "pages.profile.withdraw.ariaLabel": "Preleva le tue vincite",
  "pages.profile.withdraw.title": "Preleva",
  "pages.profile.withdraw.subtitle": "Incassa una parte o tutto il saldo su un wallet Solana.",
  "pages.profile.withdraw.available": "Disponibile",
  "pages.profile.withdraw.amountLabel": "Importo (USDC)",
  "pages.profile.withdraw.presetsAriaLabel": "Importi di prelievo rapidi",
  "pages.profile.withdraw.destinationLabel": "Wallet di destinazione",
  "pages.profile.withdraw.destinationPlaceholder": "Indirizzo Solana",
  "pages.profile.withdraw.submit": "Preleva",
  "pages.profile.withdraw.submitBusy": "In corso...",
  "pages.profile.withdraw.note":
    "Ogni prelievo lo approvi tu con una firma dal wallet, e i tuoi USDC finiscono sull'indirizzo Solana che indichi.",
  "pages.profile.withdraw.errorInvalidAmount": "INSERISCI UN IMPORTO VALIDO (0.01 A 10,000).",
  "pages.profile.withdraw.errorInvalidDestination": "INSERISCI UN INDIRIZZO SOLANA DI DESTINAZIONE VALIDO.",
  "pages.profile.withdraw.requesting": "PRELIEVO DI {amount} IN RICHIESTA...",
  "pages.profile.withdraw.sent": "PRELIEVO INVIATO - {amount} A {destShort}...",
  "pages.profile.withdraw.signatureRequired":
    "SERVE LA FIRMA DAL WALLET - FIRMA IL NONCE DI PRELIEVO CON IL TUO WALLET (UN TOKEN PRIVY DA SOLO VIENE RIFIUTATO).",
  "pages.profile.withdraw.refused": "PRELIEVO RIFIUTATO ({error}).",

  // ===== pages.stats.* (RoyaleStatsPanel.tsx, the collapsible STATISTICHE
  // GIOCATORE dashboard mounted by the profile route's Stats tab). The CAPS
  // micro-labels are house style and stay CAPS in Italian too. The GRAIL tier
  // row keeps its brand name in English and needs no key. ===================
  "pages.stats.title": "STATISTICHE GIOCATORE",
  // Two independent counts in one line, so this is a single tokenized string
  // rather than a .one/.other pair (a pair cannot inflect two nouns at once).
  "pages.stats.summaryMeta": "{rounds} ROUND · {packs} PACK",
  "pages.stats.noRoundsYet": "ANCORA NESSUN ROUND",
  "pages.stats.emptyBody": "ANCORA NESSUN ROUND. Punta su una casella e partono i conti su P&L netto, vittorie e pull.",
  "pages.stats.netPnl": "P&L NETTO",
  "pages.stats.roi": "ROI",
  "pages.stats.winRate": "% VITTORIE",
  "pages.stats.totalStaked": "TOTALE PUNTATO",
  "pages.stats.totalWon": "TOTALE VINTO",
  "pages.stats.holdings": "IN COLLEZIONE",
  "pages.stats.cardsHeld.one": "{n} carta",
  "pages.stats.cardsHeld.other": "{n} carte",
  "pages.stats.packsOpened": "PACK APERTI",
  "pages.stats.chaseHits": "CACCE SCATTATE",
  "pages.stats.bestRound": "ROUND MIGLIORE",
  "pages.stats.worstRound": "ROUND PEGGIORE",
  "pages.stats.biggestPackPull": "MIGLIOR PULL",
  "pages.stats.noneYet": "NESSUNO",
  "pages.stats.perTierHits": "USCITE PER FASCIA",
  "pages.stats.tierTop": "TOP",
  "pages.stats.tierCommon": "COMUNE",

  // ===== pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx, the CARD
  // ARENA's "vedi i risultati dell'ultimo round" record page) ================
  "pages.arenaResults.title": "Risultati arena",
  "pages.arenaResults.backToArena": "← Torna all'arena",
  "pages.arenaResults.emptyBody": "Nessun round d'arena si è ancora chiuso.",
  "pages.arenaResults.enterArena": "Entra nell'arena →",
  "pages.arenaResults.matchNumber": "MATCH #{n}",
  // The headline reads "<nome giocatore> si prende il piatto"; the self view
  // uses the second-person verb. The name is rendered as a separate node.
  "pages.arenaResults.youTakeThePot": "ti prendi il piatto",
  "pages.arenaResults.takesThePot": "si prende il piatto",
  "pages.arenaResults.potCards.one": "piatto · {n} carta",
  "pages.arenaResults.potCards.other": "piatto · {n} carte",
  "pages.arenaResults.winner": "VINCITORE",
  "pages.arenaResults.theChase": "LA CACCIA",
  "pages.arenaResults.protocol": "PROTOCOLLO",
  "pages.arenaResults.cardsValue.one": "{n} carta · {amount}",
  "pages.arenaResults.cardsValue.other": "{n} carte · {amount}",
  "pages.arenaResults.cardsWonAria": "Carte vinte",
  "pages.arenaResults.toTheWinner": "AL VINCITORE",
  "pages.arenaResults.smallPot": "Piatto sotto le {n} carte: il vincitore ha preso tutto. Gli scaffali della Caccia e del protocollo restano vuoti.",

  // ===== pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx, the
  // shareable standalone /lab/royale/card/<key> dossier page. Its back link and
  // empty-state CTA reuse pages.common.backToBoard / pages.common.goToBoard.)
  "pages.cardDetailRoute.title": "Dossier della carta",
  "pages.cardDetailRoute.notFoundTitle": "CARTA NON TROVATA",
  "pages.cardDetailRoute.notFoundBody":
    "Questo link punta a una carta che questo browser non ha ancora visto. Le carte si risolvono dai tuoi round e dall'istantanea attuale del pool CollectorCrypt.",
  "pages.collection.viewRound": "Vedi round ↗",
  "pages.sellBack.showAllOffers": "Mostra tutte le {n} offerte",
  "pages.sellBack.showFewerOffers": "Mostra meno offerte",
  "pages.common.shareCard": "Condividi carta",
} as Record<string, string>;
