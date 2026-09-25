// Italian (Italiano): "core" segment. Same key set as en/core.ts. See
// royaleI18n.ts for the {token} interpolation convention and the "no em dash"
// rule.
//
// Register: INFORMAL "tu" throughout, games/casino Italian rather than
// literal English word order ("punta", "incassa", "auto-vendita").
//
// Terminology (kept consistent across board/misc/onboarding/docs/arena/chat):
//   - "tile" -> "casella"; "bet"/"bid" -> "puntata" / "puntare"; "pack(s)" ->
//     "pack" (English loanword, invariable plural); "pool" -> "montepremi"; "balance" -> "saldo"; "vault" ->
//     "caveau"; "buyback" -> "riacquisto"; "payout split" -> "ripartizione";
//     "draw" -> "estrazione"; "pull" -> "pull" (the invariable loanword the
//     Italian TCG scene uses); "slab" -> "slab" (masculine, invariable).
//   - "auto-sell" -> "auto-vendita" (not "vendita automatica"): the compact
//     form, matching board.ts's "auto-puntata" for auto-bet. The settings
//     rows and section headings are narrow.
//   - "the Chase" -> "la Caccia" (house style: the feature name IS
//     translated, matching misc.chase.label and board.settlement.*).
//   - TIER NAMES Starter / Elite / Legendary / Grail / Mythic stay English
//     and capitalized everywhere, including mid-sentence ("le Grail").
//
// Segment: core (the original Phase-1 flat dictionary) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome) and
// runtime.* (copy produced by the plain, non-component .ts modules). Do NOT
// add new SURFACE keys to this file, add them to the segment file for the
// surface they belong to instead (board, cinema, arena, onboarding, docs,
// pages, chat, misc in this same directory).
export default {
  "settings.language": "Lingua",
  "settings.languageSectionAria": "Impostazioni lingua",
  "settings.languageSearchPlaceholder": "Cerca lingua",
  "settings.languageNoResults": "Nessuna lingua corrispondente",
  "settings.languageHint": "Si applica subito. Cerca per nome o digita per filtrare.",
  "settings.languageInputAria": "Lingua, cerca e seleziona",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Gruppi di impostazioni",
  "settings.searchPlaceholder": "Cerca impostazioni",
  "settings.searchClear": "Cancella ricerca",
  "settings.searchResultsAria": "Impostazioni corrispondenti",
  "settings.searchNoResults": "Nessun risultato per «{query}». Prova con il nome di ciò che vuoi cambiare.",
  "settings.backToGroups": "Tutte le impostazioni",
  "gear.cards.heading": "Carte",
  "gear.cards.sectionAria": "Impostazioni carte",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Puntate {bids} · minimo {amount}",
  "gear.section.summary.display": "Popup {popups} · ritratti {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Musica {music} · effetti {sfx}",
  "gear.section.summary.autosell": "{count} regole di vendita automatica attive",
  "gear.section.summary.hotkeys": "{count} tasti di puntata impostati",

  // Switch-state pills in RoyaleGearSettingsFields: a matched Italian pair,
  // both 6 chars, so they never widen the narrow settings rows.
  "common.on": "ACCESO",
  "common.off": "SPENTO",
  "common.set": "IMPOSTA",
  "common.clear": "CANCELLA",
  "common.tileLabel": "Casella {n}",
  "common.tileShort": "C{n}",

  "gear.betting.heading": "Puntate",
  "gear.betting.sectionAria": "Impostazioni puntate",
  "gear.betting.provider.label": "Fornitore del pack",
  "gear.betting.provider.automatic": "Automatico (preferisce Collector Crypt)",
  "gear.betting.provider.hint": "La modalità automatica preferisce Collector Crypt quando disponibile e usa solo un ripiego verificato. Un fornitore scelto è vincolante: se non è disponibile, la puntata viene rifiutata.",
  "gear.betting.provider.automaticHint": "Automatico · preferisce Collector Crypt",
  "gear.betting.provider.strictHint": "Solo {provider} · nessun ripiego",
  "gear.betting.provider.unavailable": "{provider} (non disponibile)",
  "gear.betting.provider.selectedUnavailable": "{provider} non è disponibile. Le puntate vincolate vengono rifiutate; la scelta non viene mai sostituita.",
  "gear.betting.provider.actual": "Eseguito da {provider}",
  "gear.betting.provider.accepted": "Accettato da {provider}",
  "gear.betting.disableBids.label": "Blocca le puntate",
  "gear.betting.disableBids.hint":
    "Ti blocca le puntate: toccare una casella non piazza più nulla, così puoi guardare (o passare lo schermo a qualcuno) senza puntare per sbaglio. Il resto del gioco continua normalmente.",
  "gear.betting.minBid.label": "Puntata minima",
  "gear.betting.minBid.hint":
    "La puntata più piccola che un tocco può piazzare. Sotto questa soglia non si scende, così un tocco veloce non punta mai meno di quanto volevi (minimo $5, per bloccare le puntate fasulle).",
  "gear.betting.upgradeCap.label": "Tetto costo upgrade",
  "gear.betting.upgradeCap.placeholder": "illimitato",
  "gear.betting.upgradeCap.hint":
    "Il massimo che un clic di upgrade può costarti. Gli upgrade più cari restano in grigio, così una casella affollata non ti presenta un conto a sorpresa.",

  "gear.display.heading": "Schermo",
  "gear.display.sectionAria": "Impostazioni schermo",
  "gear.display.chipFloats.label": "Pop-up puntate",
  "gear.display.chipFloats.hint": "Mostra i piccoli “+$X · nome” che salgono quando qualcuno punta su una casella.",
  "gear.display.floatThreshold.label": "Nascondi sotto",
  "gear.display.floatThreshold.placeholder": "mostra ogni puntata",
  "gear.display.floatThreshold.hint":
    "Fa comparire il pop-up solo da questa cifra in su. Svuota il campo (o metti $0) per vederle tutte: tiene calmo il tabellone quando piovono puntate minuscole.",
  "gear.display.hidePortraits.label": "Nascondi ritratti",
  "gear.display.hidePortraits.hint": "Nasconde i ritratti degli altri giocatori sulle caselle. Il tuo segnaposto resta visibile.",
  "gear.display.fullscreenLandscape.label": "Schermo intero in orizzontale",
  "gear.display.fullscreenLandscape.hint":
    "Su mobile, il prossimo tocco in orizzontale nasconde la barra del browser. Su iPhone resta compatta; Aggiungi alla schermata Home offre il vero schermo intero.",
  "gear.display.replayTour.label": "Ripeti il tour di benvenuto",
  "gear.display.replayTour.hint": "Riapri il tour dal primo passaggio.",
  "gear.display.couch.label": "Testo grande (TV/divano)",
  "gear.display.headerCollapse.label": "Comprimi intestazione",
  "gear.display.headerCollapse.hint": "Ripiega la barra superiore così il tabellone e le carte riempiono lo schermo. La freccia nell'intestazione la riporta indietro.",
  "gear.display.couch.hint":
    "Ingrandisce il testo di lettura in tutto il gioco: chat, documentazione, etichette e importi, pensato per giocare dal divano. Il tabellone mantiene il suo layout. Si attiva anche con ?couch=1 nell'indirizzo.",
  "gear.display.couch.suggested": "Questo browser sembra quello di una TV o di una console. Il testo grande è fatto per questo schermo.",

  "gear.reveals.heading": "Rivelazioni",
  "gear.reveals.sectionAria": "Impostazioni rivelazioni",
  "gear.reveals.turbo.label": "Rivelazioni turbo",
  "gear.reveals.turbo.hint":
    "Manda avanti veloce lo spettacolo della rivelazione e ti porta subito al risultato. I momenti grossi si prendono comunque il loro tempo. Di base è inattivo, per tutti gli altri lo spettacolo resta completo.",

  "gear.sound.heading": "Audio",
  "gear.sound.sectionAria": "Impostazioni audio",
  "gear.sound.sfx.label": "Effetti sonori",
  "gear.sound.sfx.hint":
    "Il tintinnio delle fiche, l'apertura e il blocco del round, la ruota del vincitore e lo spettacolo della rivelazione. Tutto sintetizzato nel browser, niente da scaricare.",
  "gear.sound.music.label": "Musica",
  "gear.sound.music.hint":
    "Segue il round: cresce mentre si punta, esplode negli ultimi secondi e si abbassa per la rivelazione. Parte al tuo primo tocco o tasto e va in pausa quando cambi scheda.",
  "gear.sound.musicStyle.label": "Stile musicale",
  "gear.sound.musicStyle.piano": "Piano calmo",
  "gear.sound.musicStyle.snowmelt": "Disgelo",
  "gear.sound.musicStyle.hearthfire": "Fuoco del focolare",
  "gear.sound.musicStyle.grotto": "Grotta dorata",
  "gear.sound.musicStyle.arcade": "Ritmo arcade",
  "gear.sound.musicStyle.kart": "Rally dei kart",
  "gear.sound.musicStyle.galaxy": "Valzer stellare",
  "gear.sound.musicStyle.hint": "Piano calmo è una melodia morbida e distesa. Ritmo arcade è acceso e veloce. Il cambio scatta alla battuta successiva, anche a round in corso.",
  "gear.sound.musicVolume.label": "Volume musica",
  "gear.sound.sfxVolume.label": "Volume effetti",
  "gear.sound.volume.label": "Volume",
  "gear.sound.volume.aria": "Volume generale",
  "gear.sound.volume.hint": "Un unico volume per effetti e musica insieme.",

  "gear.autosell.heading": "Regole auto-vendita",
  "gear.autosell.sectionAria": "Regole auto-vendita",
  "gear.autosell.intro":
    "Impostale una volta e ogni vincita che rientra nelle regole si rivende da sola, senza chiederti se tenere o vendere. Tutto il resto continua a passare da te, come adesso.",
  "gear.autosell.everyWin.label": "Auto-vendi ogni vincita",
  "gear.autosell.everyWin.hint":
    "Incassa al tasso di riacquisto ogni carta che vinci, appena arriva e senza chiederti nulla. Le Grail non vengono mai vendute in automatico. È la scorciatoia per accendere tutti e quattro gli interruttori di rarità qui sotto.",
  "gear.autosell.belowValue.label": "Vendi sotto il valore di",
  "gear.autosell.placeholderOff": "spento",
  "gear.autosell.rarity.label": "Vendi per rarità",
  "gear.autosell.rarity.aria": "Auto-vendita per rarità",
  "gear.autosell.rarity.hint":
    "Le fasce di rarità CollectorCrypt, lette dalla macchina da cui esce ogni carta. La finestra di prezzo di una fascia cambia da pack a pack, quindi una carta da $200 può essere rara in una macchina e comune in una più cara.",
  "gear.autosell.nonVintage.label": "Vendi le carte non vintage",
  "gear.autosell.belowGrade.label": "Vendi sotto il voto di",
  "gear.autosell.grader.label": "Vendi per perito",
  "gear.autosell.grader.hint":
    "Tieni un perito e auto-vendi solo le sue carte votate sotto il numero che imposti. Togli la spunta a un perito per vendere tutte le sue carte. Toglila a tutti per vendere tutto quello che vinci. Ogni perito usa una scala sua, quindi ogni soglia va per conto proprio.",
  "gear.autosell.grader.aria": "Auto-vendita per perito",
  "gear.autosell.grader.keep": "TIENI",
  "gear.autosell.grader.sellAll": "VENDI TUTTO",
  "gear.autosell.grader.other": "Altre / non gradate",
  "gear.autosell.grader.placeholderKeepAll": "tieni tutto",
  "gear.autosell.grader.placeholderSellAll": "vendi tutto",
  "gear.autosell.grader.ariaGradeSuffix": "vendi sotto questo voto",
  "gear.autosell.summaryActive": "Attive:",
  "gear.autosell.summaryNone": "Nessuna regola di auto-vendita. Ogni vincita continua a chiederti se tenere o vendere.",
  "gear.autosell.turnOffAll": "SPEGNI TUTTO",

  "gear.hotkeys.heading": "Tasti puntata",
  "gear.hotkeys.sectionAria": "Tasti puntata",
  "gear.hotkeys.intro":
    "Premi il tasto di una casella per puntarci la cifra che hai scelto. Niente mouse. Clicca un tasto qui sotto, poi premi quello che vuoi usare. Due caselle non possono avere lo stesso tasto, quindi riassegnarlo lo sposta. Esc annulla, Backspace cancella.",
  "gear.hotkeys.enabled.label": "Puntata con i tasti numerici",
  "gear.hotkeys.enabled.hintOn": "I tasti sono vivi mentre si punta. Premi il tasto di una casella e la puntata parte all'istante.",
  "gear.hotkeys.enabled.hintOff": "I tasti sono spenti. Premere il tasto di una casella non piazza nulla.",
  "gear.hotkeys.enabled.hintUnset": "Ancora da decidere. Accendi i tasti da qui, oppure premi il tasto di una casella mentre punti e scegli Attiva.",
  "gear.hotkeys.listAria": "Tasti puntata per casella",
  "gear.hotkeys.tileLabel": "Casella {n}",
  "gear.hotkeys.pressKeyPrompt": "Premi un tasto…",
  "gear.hotkeys.setKey": "Imposta",
  "gear.hotkeys.clear": "Cancella",
  "gear.hotkeys.ariaPressToBind": "Premi un tasto per assegnarlo alla Casella {n}",
  "gear.hotkeys.ariaShortcut": "Casella {n}, tasto {key}. Clicca per riassegnarlo.",
  "gear.hotkeys.ariaNoShortcut": "La Casella {n} non ha un tasto. Clicca per assegnarne uno.",
  "gear.hotkeys.ariaClearShortcut": "Cancella il tasto della Casella {n}",
  "gear.hotkeys.unboundWarning": "Nessun tasto per {list}. Quelle caselle restano senza scorciatoia finché non gliene assegni una.",
  "gear.hotkeys.resetButton": "Ripristina i predefiniti",

  "nav.ariaLabel": "sezioni attn ROYALE",
  "nav.board": "TABELLONE",
  "nav.results": "RISULTATI",
  "nav.rankingsFull": "CLASSIFICA",
  "nav.rankingsShort": "RANK",
  "nav.collectionFull": "COLLEZIONE",
  "nav.collectionShort": "CARTE",
  "nav.profile": "PROFILO",

  "mobileNav.board": "Tabellone",
  "mobileNav.results": "Risultati",
  "mobileNav.ladder": "Classifica",
  "mobileNav.collection": "Collezione",
  "mobileNav.profile": "Profilo",
  "mobileNav.docs": "Guida",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome. The metrics rail sits in a fixed-width
  // column, so its four labels are kept as tight as Italian allows.
  // "attn ROYALE" is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "Lab attn ROYALE",
  "shell.header.statusAria": "Stato del round",
  "shell.header.collapse": "Nascondi intestazione",
  "shell.header.expand": "Mostra intestazione",
  "shell.header.round": "Round #{n}",
  "shell.header.turboTitle": "Tempi di round accelerati",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Riepilogo del round",
  "shell.metrics.totalPool": "Montepremi",
  "shell.metrics.packsLive": "Pack",
  "shell.metrics.yourStake": "Tua puntata",
  "shell.metrics.selectedBet": "Puntata scelta",
  "shell.board.aria": "Tabellone attn ROYALE",
  "shell.board.label": "Tabellone",
  "shell.board.phaseOpen": "Clicca una casella per puntarci, la puntata si ricompone nel miglior mix di pack",
  "shell.board.phaseLock": "Bloccato · pack in apertura",
  "shell.board.phaseSettled": "Round concluso",
  "shell.board.metaOpen": "{pool} di montepremi · il 3% alimenta la Caccia · i pack si aprono al blocco",
  "shell.board.metaClosed": "Una sola casella si prende il montepremi, con probabilità ponderate verificabili.",
  "shell.board.reopenReveal": "↗ Riapri la rivelazione",
  "shell.connectNudge":
    "Entra in gioco e deposita per iniziare a puntare sulle caselle. I round continuano a girare intanto.",
  "shell.decision.cardFallback": "la tua carta",
  "shell.mobile.close": "Chiudi",
  "shell.mobile.chat": "Chat",
  "shell.mobile.chatOpenAria": "Apri la chat del tavolo",
  "shell.mobile.chatCloseAria": "Chiudi la chat del tavolo",
  "shell.mobile.cards": "Carte",
  "shell.mobile.cardsOpenAria": "Apri le tue carte per venderle o prelevarle",
  "shell.mobile.cardsCloseAria": "Chiudi le tue carte",
  "shell.mobile.players": "Giocatori",
  "shell.mobile.playersOpenAria": "Apri i giocatori, in ordine di puntata",
  "shell.mobile.playersCloseAria": "Chiudi i giocatori",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/, grouped as
  // runtime.<module>.<field>. The failure lines are player-facing: they say
  // what happened and what is safe, never "sorry" and never a dev caveat.
  //
  // runtime.rail.* — royaleRailCopy.ts. "Privy" and "USDC" are BRAND terms.
  "runtime.rail.gameUsdc": "USDC di gioco",
  "runtime.rail.privySessionCredit": "Credito sessione Privy",
  "runtime.rail.houseCredit": "credito del banco",
  "runtime.rail.connectPrivy": "Connetti Privy per aggiungere USDC di gioco",
  "runtime.rail.privySession": "Sessione Privy",
  "runtime.rail.depositAction": "Aggiungi +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Account Privy",
  "runtime.rail.house": "Banco",
  "runtime.rail.depositReceipt": "Ricevuta {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Tocca un pack qualsiasi per puntare {amount}. Ogni casella tiene comunque i suoi +{low} / +{high}.",
  "runtime.rail.sellBack": "Rivendi → +{amount} sul saldo",

  // runtime.recap.* — royaleSpectatorRecap.ts. "ATTN Protocol" is a BRAND term.
  "runtime.recap.you": "Tu",
  "runtime.recap.topBacker": "Maggior sostenitore",
  "runtime.recap.topCardOutcome": "carta migliore · scelta tieni o vendi",
  "runtime.recap.backer": "Sostenitore",
  "runtime.recap.cardWon": "carta vinta",
  "runtime.recap.chaseLootReleased": "Bottino della Caccia rilasciato",
  "runtime.recap.theChase": "La Caccia",
  "runtime.recap.sweptIntoVault": "finita nel caveau",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "commissione di protocollo",
  "runtime.recap.soldBack": "Rivenduta",
  "runtime.recap.intoSplit": "+{amount} nella ripartizione",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "Il collegamento a X non è disponibile.",
  "runtime.xProfile.connected": "Connesso",

  // runtime.sellBack.* — royaleSellBackApi.ts.
  "runtime.sellBack.unknownCard": "Carta sconosciuta",

  // runtime.winShare.* — royaleWinShareModel.ts. "GRAIL" is the pack TIER
  // brand name and stays English; only "PULL" would translate, and Italian
  // keeps the collectors' loanword "pull" anyway (see board.ts).
  "runtime.winShare.headlineWon": "VINTI",
  "runtime.winShare.headlineGrailPull": "PULL GRAIL",
  "runtime.winShare.headlineCardsWon": "CARTE VINTE",
  "runtime.winShare.cardInImage": "La carta è nell'immagine.",
  "runtime.winShare.receiptInImage": "La ricevuta è nell'immagine.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "I prelievi sono offline in questo momento. Nessun fondo si è mosso.",
  "runtime.serverWallet.noSigner": "Nessun wallet collegato per firmare in questa sessione. Nessun fondo si è mosso.",
  "runtime.serverWallet.nonceUnavailable": "Il server non ha rilasciato il nonce di autorizzazione del prelievo.",
  "runtime.serverWallet.signatureUnavailable": "Il wallet non ha restituito la firma sul nonce di prelievo.",
  "runtime.serverWallet.boundaryLabel": "I crediti al tavolo e gli USDC del wallet sul server sono due saldi separati.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Questo browser non consente la cattura dello schermo.",
  "runtime.video.noRecorderFormat": "Questo browser non ha un formato video per MediaRecorder.",
  "runtime.video.canceled": "Render annullato.",
  "runtime.video.unreachable": "Servizio di render non raggiungibile su {url}.",
  "runtime.video.rejected": "Il servizio di render ha rifiutato questo round: {detail}",
  "runtime.video.requestFailed": "Richiesta di render non riuscita ({status}).",
  "runtime.video.noJobId": "Il servizio di render non ha restituito l'id del lavoro.",
  "runtime.video.lostJob": "Lavoro di render perso ({status}).",
  "runtime.video.lostContact": "Contatto perso con il servizio di render a metà render.",
  "runtime.video.renderFailed": "Render non riuscito: {error}.",
  "runtime.video.unknownError": "errore sconosciuto",
  "runtime.video.downloadFailed": "Il video è pronto ma non si è scaricato.",
  "runtime.video.downloadHttpFailed": "Il video è pronto ma il download non è riuscito ({status}).",
  "runtime.video.emptyVideo": "Il servizio di render ha restituito un video vuoto.",
  "runtime.video.shareTagline": "Battaglia di pack con estrazione verificabile. Guardati il round:",

  // runtime.game.* — useRoyaleGame.ts (feed lines and fallback labels). These
  // are pushed into the persisted feed AT EVENT TIME, so a line already
  // written keeps the language it was written in.
  "runtime.game.roomLive": "Sala attiva. I round partono da soli: {seconds}s per puntare, poi la rivelazione.",
  "runtime.game.chaseVault": "Il caveau della Caccia",
  "runtime.game.aTile": "una casella",
  "runtime.game.aPack": "un pack",
  "runtime.game.theCard": "la carta",
  "runtime.game.collectedSplit": "Round {round} · incassati {amount} USDC dalla ripartizione.",
  "runtime.game.chaseDropSplit": "Round {round} · la Caccia ha scaricato {award} sulla tua casella · la tua quota: {amount} USDC.",
  "runtime.game.grailSecured": "Grail al sicuro: {card} ({amount}) è tua, in collezione.",
  "runtime.game.keptCard": "Tenuta {card} ({amount}) → aggiunta alla collezione.",
  "runtime.game.soldCardSettle": "Rivenduta {card} per {amount} USDC ({pct}% di {value}).",
  "runtime.game.roundVoidedRefund":
    "Round {round} annullato. Nessun pack aperto, quindi niente estrazione sul valore delle carte. La tua puntata di {amount} è stata rimborsata.",
  "runtime.game.roundVoidedAll":
    "Round {round} annullato. Nessun pack aperto, quindi niente estrazione sul valore delle carte. Tutte le puntate sono state rimborsate.",
  "runtime.game.chaseFiredYours.one": "La Caccia è scattata: {n} carta ({amount}) rilasciata sulla tua casella {tile}.",
  "runtime.game.chaseFiredYours.other": "La Caccia è scattata: {n} carte ({amount}) rilasciate sulla tua casella {tile}.",
  "runtime.game.chaseFiredTable.one":
    "La Caccia è scattata al Round {round}: su {tile} sono caduti {award} e {n} carta, divisi fra i suoi sostenitori.",
  "runtime.game.chaseFiredTable.other":
    "La Caccia è scattata al Round {round}: su {tile} sono caduti {award} e {n} carte, divisi fra i suoi sostenitori.",
  "runtime.game.cardsAssigned.one": "{n} carta assegnata a te ({amount}) → collezione.",
  "runtime.game.cardsAssigned.other": "{n} carte assegnate a te ({amount}) → collezione.",
  "runtime.game.cardPoolsLive": "Pool di carte attivi: {cards} carte su {pools} pool di macchine CollectorCrypt.",
  "runtime.game.minBid": "La puntata minima è {amount}. Alza la puntata e riprova.",
  "runtime.game.resolveFailed": "Questo round non si è potuto risolvere, quindi non è stato liquidato nulla. Il prossimo round parte normalmente.",
  "runtime.game.stakeRefused": "Questa puntata è troppo grande per {tile}. Non è stato addebitato nulla. Riducila e riprova.",
  "runtime.game.shortfallBack":
    "USDC insufficienti per puntare {amount} su {tile}. Hai {held}. Aggiungi fondi per continuare.",
  "runtime.game.shortfallNextPack":
    "USDC insufficienti per completare il prossimo pack su {tile}. Servono {amount}, hai {held}. Aggiungi fondi per continuare.",
  "runtime.game.youBacked": "Hai puntato {amount} su {tile}.",
  "runtime.game.packCompleted": "Hai completato il prossimo pack su {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Vendute {cards} per {amount} USDC (riacquisto CC) per finanziare una puntata.",
  "runtime.game.backedFunded": "Puntati {amount} su {tile} (presi dall'inventario).",
  "runtime.game.demoStakesRefunded":
    "Puntate demo azzerate: i {amount} che avevi cliccato ti sono stati rimborsati. Riparti da $0.",
  "runtime.game.demoStakesCleared": "Puntate demo azzerate: parti da $0 a ogni round finché non punti su una casella.",
  "runtime.game.deposited": "Depositati {amount} USDC sul tuo wallet.",
  "runtime.game.referralBonus": "Bonus invito accreditato: +{amount} USDC.",
  "runtime.game.signedAndSent": "Firmati e inviati {amount} USDC su {cluster} · firma {sig}….",
  "runtime.game.signedNoBroadcast":
    "Firmati {amount} USDC su {cluster} ({method}, nessuna trasmissione on-chain) · firma {sig}….",
  "runtime.game.soldCard": "Venduta {card} per {amount} USDC ({pct}% di riacquisto).",
} as Record<string, string>;
