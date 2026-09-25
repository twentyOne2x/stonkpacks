// Italian (Italiano): "arena" segment. Same key set as en/arena.ts (the
// /lab/royale/arena wheel surface: the rail, the wheel stage + leader-line
// callouts, the clock, the snipe tray, the double-bid opt-in dialog, and the
// lock->reveal cinema's three beats). See royaleI18n.ts's file header for
// the key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
//
// Register: INFORMAL "tu" throughout.
//
// Casino/gaming register notes: "snipe" and "spin" are kept as loanwords
// (snipare, lo spin): both are standard, widely-understood terms in Italian
// gaming slang, more natural here than a literal translation. "the Chase" is
// translated as "la Caccia" (house style, same as misc/docs/board). "pot"
// stays "piatto" here, distinct from the board's "montepremi" (the round
// pool), because the arena stakes cards rather than money.
export default {
  "arena.you": "TU",
  "arena.youAvatarLetter": "T",
  "arena.common.card": "carta",
  "arena.common.cards": "carte",
  "arena.matchLabel": "MATCH #{n}",
  "arena.pageTitle": "Arena carte",
  "arena.backToBoard": "← Torna al tabellone",

  "arena.rail.ariaLabel": "La tua collezione",
  "arena.rail.heading": "LA TUA COLLEZIONE",
  "arena.rail.practiceNote": "Set di prova. Vinci qualche round sul tabellone per riempire questa fila con carte tue.",
  "arena.rail.emptyNote": "Non hai carte in mano. Vinci il piatto per riprenderti la tua quota.",
  "arena.rail.enterWheel": "ENTRA NELLA RUOTA",
  "arena.rail.armSnipe": "ARMA LO SNIPE",
  "arena.rail.hint": "Doppio clic su una carta per puntarla. Oppure seleziona le carte e premi ENTRA NELLA RUOTA. Spazio seleziona, A arma lo snipe.",

  "arena.railCard.armedSuffix": "Armata per lo snipe.",
  "arena.railCard.hint": "Spazio la seleziona, A arma lo snipe. Doppio clic per puntarla nell'arena.",
  "arena.railCard.armedTag": "ARMATA",

  "arena.snipe.trayHeading": "SNIPE ARMATO",
  "arena.snipe.disarm": "DISARMA",
  "arena.snipe.firesAt": "Scatta a T-2s",
  "arena.snipe.carries": "Passa al match dopo",

  "arena.board.sectionAriaLabel": "Ruota dell'arena",
  "arena.board.noCap": "Nessun limite di carte: blocca solo il tempo.",
  "arena.board.wheelDecides": "Decide la ruota",
  "arena.board.nextMatchLabel": "Prossimo match tra",
  "arena.board.potLabel": "PIATTO",
  "arena.board.wheelAriaEnter": "Metti nella ruota {count} {cardWord} selezionate",
  "arena.board.wheelAriaIdle": "La ruota. Seleziona le carte dalla tua collezione per metterle in gioco.",
  "arena.board.youWin": "VINCI TU",
  "arena.board.nameWins": "VINCE {name}",
  "arena.board.emptyWheelNote":
    "La ruota è aperta. Punti carte, non contanti: la tua quota di valore determina il tuo spicchio e le tue probabilità. La Caccia prende lo 0%. Il protocollo applica una regola di commissione del 7% in carte intere; chi vince riceve tutte le altre carte.",
  "arena.board.tableHint": "Le carte che metti in gioco pesano sulla ruota per il loro valore. Il tuo spicchio è la tua probabilità.",
  "arena.board.resultsLink": "Risultati dell'ultimo round →",

  "arena.clock.locked": "BLOCCATO",
  "arena.clock.settled": "CONCLUSO",
  "arena.clock.locksIn": "BLOCCO TRA",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Chiudi il cinema",
  "arena.cinema.closeTitle": "Chiudi (Esc)",
  "arena.cinema.beatCopy.contestants": "I CONTENDENTI",
  "arena.cinema.beatCopy.spin": "LO SPIN",
  "arena.cinema.beatCopy.settle": "IL VERDETTO",
  "arena.cinema.beatCopyShort.contestants": "GIOCATORI",
  "arena.cinema.beatCopyShort.spin": "SPIN",
  "arena.cinema.beatCopyShort.settle": "ESITO",
  "arena.cinema.contestantsAriaLabel": "I contendenti",
  "arena.cinema.contestantsHeadline": "I CONTENDENTI",
  "arena.cinema.oddsToWin": "{pct}% DI VITTORIA",
  "arena.cinema.hintContestants": "Decide la ruota. Clicca per farla girare subito.",
  "arena.cinema.spinAriaLabel": "Lo spin della ruota",
  "arena.cinema.lockedOn": "BLOCCATO SU",
  "arena.cinema.hintSpin": "Clicca per saltare lo spin.",
  "arena.cinema.settleAriaLabel": "Il verdetto",
  "arena.cinema.winnerTag": "VINCITORE",
  "arena.cinema.youTakePot": "IL PIATTO È TUO",
  "arena.cinema.takesPot": "PRENDE IL PIATTO",
  "arena.cinema.shelfWinner": "AL VINCITORE",
  "arena.cinema.shelfChase": "LA CACCIA",
  "arena.cinema.shelfProtocol": "PROTOCOLLO",
  "arena.cinema.smallPotNote":
    "La Caccia non prende nulla. La regola del 7% del protocollo ha selezionato {count} {cardWord}; chi vince riceve tutte le altre carte.",
  "arena.cinema.resultsLink": "Risultati dell'ultimo round",
  "arena.cinema.hintSettle": "Clicca ovunque per tornare all'arena.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} a chi vince",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Punto in automatico al doppio clic?",
  "arena.doubleBid.body": "Fai doppio clic su una carta della tua collezione per puntarla dritta nell'arena. Lo attivo?",
  "arena.doubleBid.enable": "Attiva",
  "arena.doubleBid.dismiss": "Non ora",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "CONNESSIONE A CARD ARENA",
  "arena.backend.loadingBody": "Verifica della versione live dell'Arena e della tua sessione da giocatore…",
  "arena.backend.loadingCollection": "Verifica della tua collezione…",
  "arena.backend.mainnetPreparingTitle": "L'ARENA MAINNET È CONNESSA",
  "arena.backend.mainnetPreparingBody": "Questa esatta versione in sola lettura è operativa. Finanziamento, acquisizione delle carte, ingresso, estrazione e regolamento restano disabilitati.",
  "arena.backend.mainnetPreparingCollection": "Nessuna carta Mainnet è stata acquistata o spostata. L'Arena resta in sola lettura finché l'inventario autorizzato separatamente non è pronto.",
  "arena.backend.mainnetRelease": "Versione {commit} · deployment {deployment} · zero firme, trasmissioni, effetti o duplicati",
  "arena.backend.unavailableTitle": "CARD ARENA SI STA AGGIORNANDO",
  "arena.backend.unavailableBody": "Gli ingressi sono sospesi finché non è disponibile questa esatta versione del gioco. Le tue carte non si sono mosse.",
  "arena.backend.unavailableCollection": "Collezione non disponibile durante l'aggiornamento dell'Arena.",
  "arena.backend.connectTitle": "CONNETTITI PER GIOCARE",
  "arena.backend.connectBody": "Serve una sessione Privy verificata per caricare le tue carte legate al provider ed entrare nella ruota.",
  "arena.backend.connectCollection": "Connetti la tua sessione da giocatore per caricare le tue carte.",
  "arena.backend.retry": "RIPROVA",
} as Record<string, string>;
