// Spanish, Latin America (Español): "arena" segment - every user-visible
// string from pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel
// surface: the rail, the wheel stage + leader-line callouts, the clock, the
// snipe tray, the double-bid opt-in dialog, and the lock->reveal cinema's
// three beats). Same key set as en/arena.ts. See royaleI18n.ts's file header
// for the {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
//
// Word choices kept consistent across this segment (and mirrored into
// board.ts / docs.ts / chat.ts / misc.ts for the same mechanics): "lock" ->
// bloquear/bloqueo, "match" -> partida, "pot"/"pool" -> pozo, "jackpot" ->
// acumulado (a separate word from "pozo" so the two amounts never read as the
// same thing), "odds" -> probabilidad (de ganar), "rail" -> fila,
// "settle"/"settled" -> liquidar/liquidación (financial-settlement register),
// with "REPARTO" as the SHORT beat label so it fits the cinema chip.
// "The Chase" (the rolling jackpot feature, not a pack tier) IS translated,
// "la Cacería", matching misc.chase.* / board.settlement.chase* and every
// other locale's house style. "Snipe" is kept as gaming-slang loanword
// ("armar snipe", "desarmar"), matching how LatAm gaming communities already
// use "snipear".
//
// This is the ONLY file an agent working on the "arena" surface should
// need to touch for this locale, index.ts already spreads it in and should
// not need to change again.
export default {
  "arena.you": "TÚ",
  "arena.youAvatarLetter": "T",
  "arena.common.card": "carta",
  "arena.common.cards": "cartas",
  "arena.matchLabel": "PARTIDA #{n}",
  "arena.pageTitle": "Arena de cartas",
  "arena.backToBoard": "← Volver al tablero",

  "arena.rail.ariaLabel": "Tu colección",
  "arena.rail.heading": "TU COLECCIÓN",
  "arena.rail.practiceNote": "Mazo de práctica. Gana rondas en el tablero para llenar esta fila con tus propias cartas.",
  "arena.rail.emptyNote": "No te quedan cartas en mano. Gana el pozo para recuperar tu parte.",
  "arena.rail.enterWheel": "ENTRAR A LA RUEDA",
  "arena.rail.armSnipe": "ARMAR SNIPE",
  "arena.rail.hint": "Haz doble clic en una carta para apostarla. O selecciona cartas y presiona ENTRAR A LA RUEDA. Espacio selecciona, A arma el snipe.",

  "arena.railCard.armedSuffix": "Armada para snipe.",
  "arena.railCard.hint": "Espacio la selecciona, A arma el snipe. Doble clic para apostarla en la arena.",
  "arena.railCard.armedTag": "ARMADA",

  "arena.snipe.trayHeading": "SNIPE ARMADO",
  "arena.snipe.disarm": "DESARMAR",
  "arena.snipe.firesAt": "Se dispara en T-menos 2s",
  "arena.snipe.carries": "Pasa a la siguiente partida",

  "arena.board.sectionAriaLabel": "Rueda de la arena",
  "arena.board.noCap": "Sin tope de cartas. El reloj es el único bloqueo.",
  "arena.board.wheelDecides": "La rueda decide",
  "arena.board.nextMatchLabel": "Próxima partida en",
  "arena.board.potLabel": "POZO",
  "arena.board.wheelAriaEnter": "Meter {count} {cardWord} seleccionadas a la rueda",
  "arena.board.wheelAriaIdle": "La rueda. Selecciona cartas de tu colección para meterlas.",
  "arena.board.youWin": "GANAS TÚ",
  "arena.board.nameWins": "GANA {name}",
  "arena.board.emptyWheelNote": "La rueda está abierta. Apuesta cartas, no dinero: tu parte del valor determina tu arco y tus probabilidades. La Cacería toma 0 %. El protocolo aplica una regla del 7 % en cartas enteras; el ganador recibe todas las demás cartas.",
  "arena.board.tableHint": "Tus cartas giran en la rueda según tu parte del valor. Tu arco es tu probabilidad de ganar.",
  "arena.board.resultsLink": "Ver últimos resultados →",

  "arena.clock.locked": "BLOQUEADO",
  "arena.clock.settled": "LIQUIDADO",
  "arena.clock.locksIn": "BLOQUEO EN",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Cerrar la revelación",
  "arena.cinema.closeTitle": "Cerrar (Esc)",
  "arena.cinema.beatCopy.contestants": "LOS CONCURSANTES",
  "arena.cinema.beatCopy.spin": "EL GIRO",
  "arena.cinema.beatCopy.settle": "LA LIQUIDACIÓN",
  "arena.cinema.beatCopyShort.contestants": "JUGADORES",
  "arena.cinema.beatCopyShort.spin": "GIRO",
  "arena.cinema.beatCopyShort.settle": "REPARTO",
  "arena.cinema.contestantsAriaLabel": "Los concursantes",
  "arena.cinema.contestantsHeadline": "LOS CONCURSANTES",
  "arena.cinema.oddsToWin": "{pct}% PARA GANAR",
  "arena.cinema.hintContestants": "La rueda decide. Haz clic para girar ya.",
  "arena.cinema.spinAriaLabel": "El giro de la rueda",
  "arena.cinema.lockedOn": "SE DETUVO EN",
  "arena.cinema.hintSpin": "Haz clic para saltarte el giro.",
  "arena.cinema.settleAriaLabel": "La liquidación",
  "arena.cinema.winnerTag": "GANADOR",
  "arena.cinema.youTakePot": "TE LLEVAS EL POZO",
  "arena.cinema.takesPot": "SE LLEVA EL POZO",
  "arena.cinema.shelfWinner": "AL GANADOR",
  "arena.cinema.shelfChase": "LA CACERÍA",
  "arena.cinema.shelfProtocol": "PROTOCOLO",
  "arena.cinema.smallPotNote": "La Cacería no toma nada. La regla del 7 % del protocolo seleccionó {count} {cardWord}; el ganador recibe todas las demás cartas.",
  "arena.cinema.resultsLink": "Ver últimos resultados",
  "arena.cinema.hintSettle": "Haz clic donde sea para volver a la arena.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} para el ganador",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "¿Auto-apostar con doble clic?",
  "arena.doubleBid.body": "Haz doble clic en una carta de tu colección para apostarla directo en la arena. ¿La activamos?",
  "arena.doubleBid.enable": "Activar",
  "arena.doubleBid.dismiss": "Ahora no",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "CONECTANDO CON CARD ARENA",
  "arena.backend.loadingBody": "Revisando la versión en vivo de la Arena y tu sesión de jugador…",
  "arena.backend.loadingCollection": "Revisando tu colección…",
  "arena.backend.mainnetPreparingTitle": "LA ARENA DE MAINNET ESTÁ CONECTADA",
  "arena.backend.mainnetPreparingBody": "Esta versión exacta de solo lectura está operativa. El financiamiento, la compra de cartas, la entrada, el sorteo y la liquidación siguen desactivados.",
  "arena.backend.mainnetPreparingCollection": "No se compraron ni movieron cartas en Mainnet. La Arena seguirá en modo de solo lectura hasta que esté listo el inventario autorizado por separado.",
  "arena.backend.mainnetRelease": "Versión {commit} · despliegue {deployment} · cero firmas, transmisiones, efectos o duplicados",
  "arena.backend.unavailableTitle": "CARD ARENA SE ESTÁ ACTUALIZANDO",
  "arena.backend.unavailableBody": "Las entradas están pausadas hasta que esta versión exacta del juego esté disponible. Tus cartas no se movieron.",
  "arena.backend.unavailableCollection": "Colección no disponible mientras la Arena se actualiza.",
  "arena.backend.connectTitle": "CONÉCTATE PARA JUGAR",
  "arena.backend.connectBody": "Se necesita una sesión Privy verificada para cargar tus cartas vinculadas al proveedor y entrar a la ruleta.",
  "arena.backend.connectCollection": "Conecta tu sesión de jugador para cargar tus cartas.",
  "arena.backend.retry": "INTENTAR DE NUEVO",
} as Record<string, string>;
