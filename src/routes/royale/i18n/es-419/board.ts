// Spanish, Latin America (Español): "board" segment. Same key set as
// en/board.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: board - owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (the legacy v1
// board), RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx.
//
// Terminology kept consistent with core.ts / arena.ts / docs.ts / misc.ts:
// "back a tile" -> apostar a/en una casilla, "pot"/"pool" -> pozo,
// "jackpot" -> acumulado (a different word from "pozo" on purpose),
// "the Chase" -> la Cacería, "lock" -> bloquear/bloqueo, "settle/settlement"
// -> liquidar/liquidación, "draw" (the winner draw) -> sorteo, "pull" (a card
// out of a pack) -> tirada, "buyback" -> recompra, "pack(s)" -> pack(s),
// "a tile's pooled loose money" -> el dinero suelto de la casilla (one term,
// never "fondo"/"acumulado", which now belong to other concepts).
// "Auto-bet" is "auto-apuesta": the long "apuesta automática" overflowed the
// rail chips and the strategy dialog's buttons.
//
// Pack TIER NAMES (Starter / Elite / Legendary / Grail / Mythic) are brand
// terms: English spelling and capitalization everywhere, mid-sentence
// included. The settlement disposition lines previously read "Regla de
// grail", which broke that rule.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Jugadores y PnL en efectivo",
  "board.playerScoreboard.title": "Jugadores",
  "board.playerScoreboard.open": "Estadísticas y silenciar",
  "board.playerScoreboard.pinnedHint": "Fijado · Esc para cerrar",
  "board.playerScoreboard.holdHint": "Mantén Tab para echar un vistazo · haz clic para fijar",
  "board.playerScoreboard.close": "Cerrar clasificación de jugadores",
  "board.playerScoreboard.windowAria": "Ventana de PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Todos",
  "board.playerScoreboard.partialHistory": "Historial parcial. Las clasificaciones usan el intervalo conservado de efectivo liquidado.",
  "board.playerScoreboard.statsUnavailable": "El historial de PnL no está disponible aquí. Las apuestas actuales siguen activas.",
  "board.playerScoreboard.playerColumn": "Jugador",
  "board.playerScoreboard.pnlColumn": "PnL en efectivo",
  "board.playerScoreboard.voiceColumn": "Chat",
  "board.playerScoreboard.loading": "Cargando jugadores…",
  "board.playerScoreboard.empty": "Nadie ha apostado por una casilla en esta ronda.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Casillas {tiles}",
  "board.playerScoreboard.stake": "Apuesta {amount}",
  "board.playerScoreboard.notAvailable": "No disponible",
  "board.playerScoreboard.rounds": "{n} rondas",
  "board.playerScoreboard.youBadge": "Tú",
  "board.playerScoreboard.mute": "Silenciar",
  "board.playerScoreboard.unmute": "Dejar de silenciar",
  "board.playerScoreboard.muteAria": "Silenciar a {name} en el chat",
  "board.playerScoreboard.unmuteAria": "Dejar de silenciar a {name} en el chat",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Tú",
  "board.common.noWin": "sin premio",
  "board.common.roundSettled": "Ronda liquidada",
  "board.common.youWon": "Ganaste {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "BLOQUEADO",
  "board.tile.lockedStampSub": "no va más",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: tu apuesta de {bet} supera tu saldo de {balance}. Baja la apuesta o deposita.",
  "board.tile.ariaBack": "Apostar {amount} a {label}",
  "board.tile.ariaBackShortcutSuffix": ", atajo {shortcut}",
  "board.tile.ariaOddsChance": "{pct} de probabilidad de ganar",
  "board.tile.ariaBackers": "{count} personas apostando",
  "board.tile.yourPortraitAlt": "Tu retrato",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · aún sin pack",
  "board.tile.noStake": "Sin apuesta",
  "board.tile.youOwn": "Tienes {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Se abren al bloqueo",
  "board.tile.resultOpened": "Abierta · {amount} en cartas",
  "board.tile.resultWinner": "GANADORA · {amount} en cartas",
  "board.tile.resultLost": "Perdió el sorteo · {amount} en cartas",
  "board.tile.resultOpenedWord": "Abierta",
  "board.tile.resultWinnerWord": "GANADORA",
  "board.tile.resultLostWord": "Perdió el sorteo",
  "board.tile.resultShortWon": "GANÓ",
  "board.tile.resultShortLost": "Perdió",
  "board.tile.overBalance": "Supera tu saldo",
  "board.tile.overBalanceTitle": "Necesitas {needed} · tienes {have}. Baja la apuesta o deposita.",
  "board.tile.overCap": "supera tu tope de {amount} (ajustes)",
  "board.tile.needHave": "Necesitas {needed} · tienes {have}",
  "board.tile.clueExactCardOdds": "esta carta exacta · {pct} de probabilidad",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Apuesta",
  "board.stakeControl.packMatchTitle": "Cada clic en una casilla apuesta un pack {packName} completo.",
  "board.stakeControl.packMatchTag": "apostando 1 pack {packName} por clic",
  "board.stakeControl.packMatchTitleOne": "Cada clic en una casilla apuesta {n} pack {packName} completo.",
  "board.stakeControl.packMatchTitleOther": "Cada clic en una casilla apuesta {n} packs {packName} completos.",
  "board.stakeControl.packMatchTagOne": "apostando {n} pack {packName} por clic",
  "board.stakeControl.packMatchTagOther": "apostando {n} packs {packName} por clic",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} packs {packName} por clic",
  "board.stakeControl.bidPackGroupAria": "Apostar un pack completo a una casilla",
  "board.stakeControl.bidPackTag": "Apostar pack",
  "board.stakeControl.bidPackInfoTitle":
    "Un clic pone un pack sellado completo en una casilla. Ese pack se queda como está, nunca se fusiona en uno más grande.",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Elige un pack y cuántos. Un clic apuesta toda la pila en una casilla - packs más grandes sacan cartas más grandes. Teclas 1 a 8 eligen la casilla.",
  "board.stakeControl.bidPackInfoAria": "¿Qué significa apostar un pack?",
  "board.stakeControl.packSelectedTitle": "Seleccionado. Haz clic de nuevo para volver a una apuesta de {amount}.",
  "board.stakeControl.packChipTitle": "Cada clic en una casilla apuesta un pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOne": "Seleccionado. Cada clic en una casilla apuesta {n} pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Seleccionado. Cada clic en una casilla apuesta {n} packs {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Cada clic en una casilla apuesta {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Cada clic en una casilla apuesta {n} packs {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "SUPERA TU SALDO",
  "board.stakeControl.overBalanceBody": "Necesita más de tu saldo de {amount}.",
  "board.stakeControl.bidAmountTag": "Apostar monto",
  "board.stakeControl.bidAmountInfoTitle":
    "Agrégale los dólares que quieras a una casilla. El dinero suelto se convierte en packs más grandes a medida que cruza el precio de cada uno.",
  "board.stakeControl.bidAmountInfoAria": "¿Qué significa apostar un monto?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Sumar a la apuesta de una casilla",
  "board.stakeControl.bidAmountGroupAria": "Apostar un monto a una casilla",
  "board.stakeControl.packCountGroupAria": "Packs apostados por clic",
  "board.stakeControl.packCountDecAria": "Apostar menos packs por clic",
  "board.stakeControl.packCountIncAria": "Apostar más packs por clic",
  "board.stakeControl.packCountValueTitleOne": "{n} pack del nivel armado por clic",
  "board.stakeControl.packCountValueTitleOther": "{n} packs del nivel armado por clic",
  "board.stakeControl.incrementTitle": "Subir la apuesta seleccionada a {amount}",
  "board.stakeControl.customAriaLabel": "Monto de apuesta personalizado en USDC, se aplica con Enter o al hacer clic fuera",
  "board.stakeControl.customOverBalanceTitle": "Supera tu saldo de {amount}. Deposita o baja la apuesta.",
  "board.stakeControl.customTitle": "Escribe cualquier monto, Enter o clic fuera lo aplica",
  "board.stakeControl.resetTitle": "Reiniciar la apuesta seleccionada a {amount}",
  "board.stakeControl.reset": "Reiniciar",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Estrategia de auto-apuesta, se arma al cerrar la ronda",
  "board.betRail.strategyArmedTip": "Armada, se dispara en {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, armada, se dispara en {seconds} segundos",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, armada, se dispara en {seconds} segundos. Haz clic para desarmar.",
  "board.betRail.strategyAriaClickArm": "{name}. Haz clic para armar.",
  "board.betRail.moreStrategiesAria": "Más estrategias de auto-apuesta",
  "board.betRail.moreStrategiesTitle": "Más estrategias",
  "board.betRail.cancelArmedAria": "Cancelar la auto-apuesta armada",
  "board.betRail.autoBetCancelled": "Auto-apuesta cancelada.",
  "board.betRail.roundLockedSkip": "La ronda se bloqueó antes de que la auto-apuesta se disparara.",
  "board.betRail.notEnoughBalanceSkip": "Saldo insuficiente, la auto-apuesta no se disparó.",
  "board.betRail.firedAtClose": "{name} se disparó al cerrar la ronda.",
  "board.betRail.firedAtClosePartial": "{name} se disparó al cerrar la ronda: {covered} de {total} casillas.",
  "board.betRail.strategyGuideAria": "Guía de estrategias de auto-apuesta",
  "board.betRail.strategyGuideTitle": "Guía de estrategias",
  "board.betRail.autoBetEyebrow": "Auto-apuesta",
  "board.betRail.firesInSeconds": "se dispara en {seconds}s",
  "board.betRail.strategiesDialogAria": "Estrategias de auto-apuesta",
  "board.betRail.closeStrategiesAria": "Cerrar estrategias de auto-apuesta",
  "board.betRail.strategiesHeading": "Estrategias de auto-apuesta",
  "board.betRail.strategiesIntro":
    "Toca una para armarla con tu apuesta seleccionada ({amount}). Se dispara justo antes de que la ronda se bloquee, según cuánto dinero haya en cada casilla en ese momento, la señal de la multitud.",
  "board.betRail.contrarianHeading": "Jugadas a contramano",
  "board.betRail.contrarianIntro":
    "Cuando todos se van a la casilla más barata, se llena, así que la segunda más barata puede pagar mejor. Estas se quedan fuera de la barra principal para no ensuciarla.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Tu cuenta y tu tamaño de apuesta",
  "board.betRail.balance": "Saldo",
  "board.betRail.activeStakes": "Apuestas activas",
  "board.betRail.collection": "Colección",
  "board.betRail.cardCountViewAllSingular": "{count} CARTA · VER TODAS",
  "board.betRail.cardCountViewAllPlural": "{count} CARTAS · VER TODAS",
  "board.betRail.moreCount": "+{count} MÁS",
  "board.betRail.noCardsYet": "Todavía no tienes cartas en la colección, gana una casilla y quédate con su carta.",
  "board.betRail.lastResult": "Último resultado",
  "board.betRail.eachClickAdds": "Cada clic suma {amount}",
  "board.betRail.depositToPlay": "Deposita para jugar",
  "board.betRail.affordShortfall": "Necesitas {unit}, tienes {balance}",
  "board.betRail.allTilesPartialCover": "{name}, cubre {covered} de 8 casillas a {unit}",
  "board.betRail.dockBalance": "Saldo",
  "board.betRail.dockStakes": "Apuestas",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Siguiente ronda en {seconds} segundos",
  "board.core.nextRoundLine": "Siguiente ronda en {secs}",
  "board.core.playersDecidingAria": "{decided} de {total} jugadores más ya decidieron",
  "board.core.playersDecidingLine": "Jugadores decidiendo {ratio}",
  "board.core.pastRoundResultsAria": "Resultados de rondas pasadas",
  "board.core.pastRounds": "Rondas pasadas",
  "board.core.winsAmount": "{label} gana {amount}",
  "board.core.youLost": "¡Perdiste!",
  "board.core.didNotStake": "No apostaste esta ronda",
  "board.core.keepCard": "Conservar carta ({amount})",
  "board.core.sellAmount": "Vender {amount}",
  "board.core.decideHint": "Decide ahora o durante la siguiente ronda",
  "board.core.roundResultLink": "Resultado de la ronda #{roundId}",
  "board.core.fullReceiptHint": "Recibo completo → Resultados",
  "board.core.splitReceiptHint": "Reparto · recibo → Resultados",
  "board.core.eyebrowDrawing": "Sorteando al ganador",
  "board.core.eyebrowPullsIn": "Tiradas listas",
  "board.core.eyebrowLocked": "Bloqueado",
  "board.core.headlineDrawing": "Un ticket lo decide",
  "board.core.headlinePullsIn": "Packs abiertos",
  "board.core.headlineRoundLocked": "Ronda bloqueada",
  "board.core.headlinePacksOpening": "Abriendo packs…",
  "board.core.subDrawing": "sorteo ponderado verificable",
  "board.core.subPullsIn": "ahora se sortea al ganador",
  "board.core.subIntro": "{count} {noun} en juego",
  "board.core.subOpening": "{count} {noun} abriéndose en el tablero",
  "board.core.pool": "Pozo",
  "board.core.totalPool": "Pozo total",
  "board.core.clockRoundOpen": "Ronda abierta",
  "board.core.clockLockedRevealing": "Bloqueada · revelando",
  "board.core.clockSettled": "Liquidada",
  "board.core.clockAriaLabel": "{label}, {seconds} segundos",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Carta calificada estándar, quien más apostó la conserva o la vende de vuelta, a prorrata.",
  "board.settlement.dispositionSellBackSplit": "Regla de Grail: se vende de vuelta por defecto, el USDC se reparte en la casilla.",
  "board.settlement.dispositionTopBackerKeeps": "Regla de Grail: quien más apostó la conserva y les paga su parte a los demás.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s para decidir",
  "board.settlement.panelAria": "Detalles de la casilla y liquidación",
  "board.settlement.collapsePanelAria": "Contraer panel",
  "board.settlement.expandPanelAria": "Expandir panel",
  "board.settlement.roundResultsLink": "Resultados",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Panel de ronda",
  "board.settlement.clickTileToBack": "Las ganancias caen aquí. Haz clic en cualquier casilla para apostarle {amount}.",
  "board.settlement.lastResultLine": "Último resultado · Ronda #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "ganaste {amount}",
  "board.settlement.view": "ver",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Casilla perdedora · por qué perdió",
  "board.settlement.losingTileTitle": "{label} · {amount} en la casilla",
  "board.settlement.loserWhy":
    "Abrió {cardName} ({amount}), el sorteo cayó en {winnerLabel}. El {pct} de los tickets no pagó nada{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", incluidos tus {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Esta casilla estaba vacía, sin apuesta, sin ticket de sorteo.",
  "board.settlement.backToSettlement": "Volver a la liquidación · ganó {winnerLabel}",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · carta {index}/{total} · {amount} en la casilla",
  "board.settlement.pullCaptionSingle": "{label} · {amount} en la casilla",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Abriendo packs",
  "board.settlement.revealOpenedTitle": "{label} abrió {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} de probabilidad de llevarse el pozo de {poolAmount}. El ganador se está sorteando ahora.",
  "board.settlement.revealEmpty": "Los packs se están abriendo en el tablero, el sorteo del ganador cae en un segundo.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Último resultado · Ronda #{roundId}",
  "board.settlement.tileTakesTable": "{label} se lleva la mesa por {amount}",
  "board.settlement.whyWon": "Salió sorteada por el ticket ponderado verificable, {label} tenía el {pct}% del pozo al bloqueo.",
  "board.settlement.lostNoStakeIn": "Perdiste, sin apuesta en {label}",
  "board.settlement.theWinnerFallback": "el ganador",
  "board.settlement.wonNoStake": "{label} ganó · no tenías apuesta",
  "board.settlement.aTileFallback": "Una casilla",
  "board.settlement.lossNoteWithStake": "Tus {amount} estaban en otras casillas, pasa el cursor por una para ver qué pasó.",
  "board.settlement.lossNoteNone": "Esta ronda no le apostaste a ninguna casilla.",
  "board.settlement.topCardOfRound": "Mejor carta de la ronda · {label}",
  "board.settlement.keepCardTo": "Conservar carta ({amount}) → colección",
  "board.settlement.sellBackFor": "Vender de vuelta por {amount}",
  "board.settlement.continueNextRound": "Seguir a la siguiente ronda",
  "board.settlement.continue": "Continuar",
  "board.settlement.keepSellHint":
    "Conservar = carta a tu colección · vender = {amount} ahora ({pct}% del valor de la carta, la recompra CC de este pack) · {noAction}",
  "board.settlement.noActionKept": "sin acción = la carta se conserva para ti.",
  "board.settlement.noActionAutoSell": "sin acción = se vende sola cuando termine la siguiente ronda.",
  "board.settlement.revealOnlyNote":
    "En esta versión canary, las casillas perdedoras son solo de revelación, sus tiradas vuelven a la bóveda. Solo paga la carta de la casilla ganadora.",
  "board.settlement.payoutSplit": "Reparto del pago",
  "board.settlement.poolChaseFeedLine": "Pozo {pool} · aporte a la Cacería {feed}",
  "board.settlement.chaseAddSuffix": " · CACERÍA +{amount}",
  "board.settlement.physicalCardArrow": "Carta física →",
  "board.settlement.grailSecuredSuffix": " (Grail asegurado)",
  "board.settlement.grailSoldBack": "Grail vendido de vuelta ({amount}) → al reparto de USDC de arriba.",
  "board.settlement.cardAssignmentHead": "Asignación de cartas",
  "board.settlement.cardLabel": "carta de {amount}",
  "board.settlement.soldToVault": "vendida a la bóveda · lo cobrado va al reparto",
  "board.settlement.decisionTopBackerSuffix": " (quien más apostó · conservar o vender)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} de su USDC",
  "board.settlement.cardsSpreadNote":
    "Las cartas se reparten entre la mayor cantidad posible de personas que apostaron, y una carta asignada cuesta su recompra CC (85-93% según el pack) del USDC de esa persona (el mismo efectivo que le daría venderla, pero se queda con el margen). Solo las cartas que nadie absorbe se venden a la bóveda.",
  "board.settlement.chaseHitLabel": "¡CAYÓ LA CACERÍA!",
  "board.settlement.chasePaidLine": "{amount} entraron a este reparto.",
  "board.settlement.chaseMissLabel": "LA CACERÍA NO CAYÓ.",
  "board.settlement.chaseNowLine": "Cacería ahora en {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Verificar sorteo",
  "board.settlement.verifyDrawSub": "sorteo verificable · ver el recibo del sorteo",
  "board.settlement.roundIdLabel": "id de ronda",
  "board.settlement.winningDrawLabel": "sorteo ganador",
  "board.settlement.drawSeedLabel": "semilla",
  "board.settlement.proofIdLabel": "id de prueba",
  "board.settlement.ticketOfCount": "#{index} de {count}",
  "board.settlement.verifying": "Verificando…",
  "board.settlement.recheckDraw": "Reverificar sorteo",
  "board.settlement.verifierLink": "Verificador ↗",
  "board.settlement.verifiedOk": "✓ Sorteo verificado, este ganador coincide con su semilla publicada.",
  "board.settlement.verifiedBad": "✗ Este sorteo no coincidió con su semilla, no confíes en él.",
  "board.settlement.everyRoundNote": "Cada ronda sortea un ganador con una semilla publicada que puedes volver a verificar.",
  "board.settlement.noPacksNote": "Ninguna casilla tuvo apuestas esta ronda, no hay nada que sortear.",
  "board.settlement.settledHoverHint": "Liquidada, pasa el cursor por una casilla para inspeccionarla.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Apuesta muy grande para tu saldo",
  "board.betTooBig.dismissAria": "Descartar",
  "board.betTooBig.gotIt": "Entendido",
  "board.betTooBig.body": "Apostar a {slotLabel} necesita {needed} y tienes {held}. Te faltan {shortfall}.",
  "board.betTooBig.deposit": "Depositar {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Jugadores, ordenados por apuesta total",
  "board.wagerLadder.title": "Jugadores",
  "board.wagerLadder.countZero": "Sin apuestas",
  "board.wagerLadder.countOther": "{n} en la ronda · por apuesta total",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "Contraer el panel de jugadores",
  "board.wagerLadder.lastRoundAria": "Ver los resultados de la última ronda, ronda #{n}",
  "board.wagerLadder.lastRoundLabel": "Ver últimos resultados",
  "board.wagerLadder.empty": "Todavía nadie le apostó a una casilla esta ronda.",
  "board.wagerLadder.leaderAria": "Líder",
  "board.wagerLadder.openProfileTitle": "Abrir el perfil de {name} en una pestaña nueva",
  "board.wagerLadder.miniGridTotal": "{amount} en total",
  "board.wagerLadder.miniGridTilesAria": "Casillas donde apostó {name}",
  "board.wagerLadder.miniGridTilesAriaYou": "Casillas donde apostaste",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "Vender cartas para cubrir esta apuesta",
  "board.bidFund.eyebrow": "SIN USDC",
  "board.bidFund.titleOne": "¿Vender tu carta para cubrir esta apuesta?",
  "board.bidFund.titleMany": "¿Vender estas cartas para cubrir esta apuesta?",
  "board.bidFund.body": "Vender {cards} junta {buyback}, suficiente para apostarle {amount} a {tile}.",
  "board.bidFund.bodyCardsMany": "estas cartas",
  "board.bidFund.note":
    "Te faltan {amount}. Las cartas se venden a la tasa de recompra CC de su pack (85 a 93%). Esto no se puede deshacer.",
  "board.bidFund.keepCards": "Conservar",
  "board.bidFund.sellAndBid": "Vender y apostar {amount}",
  "board.bidFund.autoSellSwitch": "Vender mis premios en USDC automáticamente",
  "board.bidFund.autoSellNoteOn":
    "Cada premio se cobra a la tasa de recompra apenas cae. Sin preguntas de conservar o vender. Los Grail nunca se venden automáticamente. Cámbialo cuando quieras en Ajustes.",
  "board.bidFund.autoSellNoteOff":
    "Actívalo y cada carta que ganes se cobra en USDC a la tasa de recompra, sin preguntas. Los Grail nunca se venden automáticamente. Cámbialo cuando quieras en Ajustes.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "¿Apostar con teclas numéricas?",
  "board.hotkeys.optInBody":
    "Presionar una tecla le apuesta al instante a esa casilla con tu apuesta actual. Ahora mismo no se apostó nada.",
  "board.hotkeys.notNow": "Ahora no",
  "board.hotkeys.enableKeys": "Activar teclas",
  "board.hotkeys.turnOff": "Desactivar",
  "board.hotkeys.turnOffTitle": "Las teclas quedan apagadas hasta que las vuelvas a activar en Ajustes.",
  "board.hotkeys.changeKeys": "Cambiar teclas",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "Casilla abierta",
  "board.boardV1.onTile": "en la casilla",
  "board.boardV1.changeAmount": "cambio {amount}",
  "board.boardV1.oddsSuffix": "{pct} de ganar",
  "board.boardV1.openedOdds": "Abierta · {pct} de ganar",
  "board.boardV1.emptyNeverInDraw": "Vacía · nunca entró al sorteo",
  "board.boardV1.winnerYourShare": "GANADORA · tu parte se paga",
  "board.boardV1.winnerNoStake": "GANADORA · no tenías apuesta",
  "board.boardV1.lostOdds": "Perdió el sorteo · {pct} de ganar",
  "board.boardV1.tileClickTitle": "Haz clic donde sea para apostarle {amount} a {label}",
  "board.boardV1.youAmount": "Tú {amount}",
  "board.boardV1.youNone": "Tú -",
  "board.boardV1.pctOfTile": "{pct} de la casilla",
  "board.boardV1.noStakeYet": "aún sin apuesta",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "MEJOR · ",
  "board.boardV1.backerPopStake": "{amount} apostados · {pct} de la casilla",
  "board.boardV1.statusWaitingDraw": "Esperando el sorteo…",
  "board.boardV1.statusWonSplit": "Ganaste {amount} del reparto",
  "board.boardV1.statusOnWinningTile": "En la casilla ganadora",
  "board.boardV1.statusNoPayout": "Sin pago esta ronda",
  "board.boardV1.statusYourStake": "Tu apuesta en juego",
  "board.boardV1.statusBacking": "Apostando a esta casilla",
  "board.boardV1.backerCount.one": "{n} persona apostando",
  "board.boardV1.backerCount.other": "{n} personas apostando",
  "board.boardV1.noBackersYet": "Todavía nadie apostó",
  "board.boardV1.backAmount": "Apostar {amount}",
  "board.boardV1.backBtnTitle": "Apostar {amount} USDC a {label}",
  "board.boardV1.evolveTitle": "Le apuesta exactamente {amount} más a {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} en la casilla",
  "board.boardV1.opensAs": "Se abre como · {summary}",
  "board.boardV1.noPacksYet": "Aún sin packs, apuéstale para pagar el primero",
  "board.boardV1.whyOpenedDrawing":
    "Abrió {cardName} ({amount}) con {pct} de probabilidad, el ganador se está sorteando ahora.",
  "board.boardV1.whyWon":
    "Ganó el sorteo ponderado con {pct} de probabilidad. Abrió {cardName} ({amount}); el pozo se repartió a prorrata entre quienes le apostaron.",
  "board.boardV1.whyLost":
    "Perdió el sorteo ponderado, {pct} de probabilidad ({amount} del pozo de {poolAmount}). Igual abrió {cardName} ({cardAmount}), pero solo paga la casilla ganadora.",
  "board.boardV1.whyEmpty": "Casilla vacía, sin apuesta, sin ticket de sorteo.",
  "board.boardV1.whyYourStakeSuffix": " Tu apuesta aquí: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Aquí no tenías apuesta.",
  "board.boardV1.ifWins": "Si gana esta casilla: te llevarías ~{amount} del pozo de {poolAmount}.",
  "board.boardV1.clickToBack": "Haz clic para apostar con la apuesta seleccionada y abrir su primer pack al bloqueo.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "Puesto {rank}, {name}, apostado {wagered}, neto {net}, tasa de victorias {pct} por ciento",
  "board.leaderboard.youTag": "TÚ",
  "board.leaderboard.youRankTag": "TÚ · #{n}",
  "board.leaderboard.statWagered": "APOSTADO",
  "board.leaderboard.statNetPl": "NETO",
  "board.leaderboard.statWinRate": "% VICTORIAS",
  "board.leaderboard.statRounds": "RONDAS",
  "board.leaderboard.statPoolShare": "PARTE DEL POZO",
  "board.leaderboard.statFirstSeen": "PRIMERA VEZ",
  "board.leaderboard.statBiggestPull": "MEJOR TIRADA",
  "board.leaderboard.shareOfToday": "de lo apostado hoy",
  "board.leaderboard.shareOfAllTime": "de lo apostado en total",
  "board.leaderboard.noneYet": "AÚN NINGUNA",
  "board.leaderboard.viewFullProfile": "Ver perfil completo",
  "board.leaderboard.live": "EN VIVO",
  "board.leaderboard.fullRankings": "Tabla completa",
  "board.leaderboard.playerCount.one": "{n} jugador",
  "board.leaderboard.playerCount.other": "{n} jugadores",
  "board.leaderboard.roundCount.one": "{n} ronda",
  "board.leaderboard.roundCount.other": "{n} rondas",
  "board.leaderboard.colPlayer": "Jugador",
  "board.leaderboard.colWagered": "Apostado",
  "board.leaderboard.colNet": "Neto",
  "board.leaderboard.colWin": "Ganadas",
  "board.leaderboard.colBiggestPull": "Mejor tirada",
  "board.leaderboard.sortGroupAria": "Ordenar la clasificación",
  "board.leaderboard.sortBy": "Ordenar por {col}",
  "board.leaderboard.podiumNet": "{amount} neto",
  "board.leaderboard.podiumTopPull": "Mejor tirada",
  "board.leaderboard.fullStandings": "Tabla completa · {n} apostadores",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "Apuestas {bids} · suelto {pool}",
  "board.tile.splitAllBids": "Los {bids} completos se apostaron como packs enteros",
  "board.tile.splitAllPool": "Los {pool} completos son dinero suelto de la casilla",
  "board.tile.splitPoolNote": "Los packs punteados se formaron con el dinero suelto, nadie los apostó.",
  "board.tile.evolveLooseTitle":
    "{loose} de dinero suelto en esta casilla se vuelve un pack {tier} al llegar a {target}",
  "board.tile.evolveNoLooseTitle":
    "Aún no hay dinero suelto en esta casilla. El dinero suelto se vuelve un pack {tier} al llegar a {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.stakeUnitPackOne": "{n} pack {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} packs {packName} ({amount})",
  "board.betRail.allTilesPartialCoverOf": "{name}, cubre {covered} de {total} casillas a {unit}",
  "board.betRail.allTilesPlanFull":
    "Al cierre de la ronda le apuesta a las {total} casillas a {unit}. Total {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Al cierre de la ronda le apuesta a {covered} de {total} casillas a {unit}. Tu saldo de {balance} cubre {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "Al cierre de la ronda le apuesta a {covered} de {total} casillas a {unit}. Tu saldo de {balance} cubre {spend}.",
  "board.betRail.allTilesPlanNone":
    "Tu saldo de {balance} no cubre una apuesta de {unit}, así que no se apostará ninguna casilla.",
  "board.betRail.allTilesShortHistory.one":
    "La auto-apuesta a todas las casillas necesita {needed} para {tiles} casillas a {unit}. Tienes {balance}, así que apostó {covered} casilla.",
  "board.betRail.allTilesShortHistory.other":
    "La auto-apuesta a todas las casillas necesita {needed} para {tiles} casillas a {unit}. Tienes {balance}, así que apostó {covered} casillas.",
  "board.betRail.allTilesNoneHistory":
    "La auto-apuesta a todas las casillas necesita {needed} para {tiles} casillas a {unit}. Tienes {balance}, así que no se apostó ninguna casilla.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Al cierre de la ronda",
  "board.betRail.planTotal": "Total",
  "board.betRail.planMathFull": "{total} casillas × {amount}",
  "board.betRail.planMathShort": "{covered} de {total} casillas × {amount}",
  "board.betRail.planPerTile": "{unit} por casilla",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "Foto de perfil de X de {handle}",
  "board.connectX.connectedTitle": "Conectado con X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "Espacio de {packName} (ninguno en esta casilla)",
  "board.packChips.fixedChipTitle": "{n} x {packName} a {amount} cada uno",
  "board.packChips.fixedChipTitleTotalSuffix": ", {amount} en total",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Se formó con el dinero suelto de la casilla, nadie apostó este pack directo",
  "board.packChips.pooledSome": "{n} de {total} se formaron con el dinero suelto de la casilla",
  "board.packChips.bidWhole": "Apostado como pack entero",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "También en esta casilla: {list}",
  "board.packChips.morePacks.one": "{n} pack más",
  "board.packChips.morePacks.other": "{n} packs más",
  "board.packChips.morePacksWithList.one": "{n} pack más: {list}",
  "board.packChips.morePacksWithList.other": "{n} packs más: {list}",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (Max / Min
  // / Todas, kept as short as the English), `.name` is also substituted into
  // the {name} token of board.betRail.strategyAria* / firedAtClose,
  // `.closeLine` renders right after `.rowTitle` as "rowTitle, closeLine".
  // Informal tú, established vocabulary: casilla, apuesta, ronda, cierre de la
  // ronda, líder, armar.
  "board.strategy.highest.label": "Max",
  "board.strategy.highest.name": "Armar: apostarle a la casilla más alta al cierre de la ronda",
  "board.strategy.highest.detail":
    "Arma tu apuesta en la casilla que lleva más dinero, y se resuelve justo antes de que la ronda cierre.",
  "board.strategy.highest.rowTitle": "Casilla más alta",
  "board.strategy.highest.closeLine": "le apuesta a la casilla más grande al cierre de la ronda",
  "board.strategy.highest.gridLine": "más dinero al cierre",

  "board.strategy.lowest.label": "Min",
  "board.strategy.lowest.name": "Armar: apostarle a la casilla más baja al cierre de la ronda",
  "board.strategy.lowest.detail":
    "Arma tu apuesta en la casilla menos llena, y se resuelve justo antes de que la ronda cierre. Si todos se van a la más baja, para entonces ya dejó de ser la más baja.",
  "board.strategy.lowest.rowTitle": "Casilla más baja",
  "board.strategy.lowest.closeLine": "le apuesta a la casilla más chica al cierre de la ronda",
  "board.strategy.lowest.gridLine": "menos dinero al cierre",

  "board.strategy.secondHighest.label": "2ª max",
  "board.strategy.secondHighest.name":
    "Armar: apostarle a la segunda casilla más alta al cierre de la ronda",
  "board.strategy.secondHighest.detail":
    "Arma tu apuesta un escalón debajo del líder, y se resuelve justo antes de que la ronda cierre.",
  "board.strategy.secondHighest.rowTitle": "2ª casilla más alta",
  "board.strategy.secondHighest.closeLine":
    "le apuesta a la casilla justo debajo del líder al cierre de la ronda",
  "board.strategy.secondHighest.gridLine": "un escalón bajo el líder",

  "board.strategy.secondLowest.label": "2ª min",
  "board.strategy.secondLowest.name":
    "Armar: apostarle a la segunda casilla más baja al cierre de la ronda",
  "board.strategy.secondLowest.detail":
    "La jugada a contramano: cuando todos se van a la casilla más barata, se llena, así que la segunda más barata puede pagar mejor. Se arma ahora y se resuelve justo antes de que la ronda cierre.",
  "board.strategy.secondLowest.rowTitle": "2ª casilla más baja",
  "board.strategy.secondLowest.closeLine":
    "le apuesta a la casilla justo arriba del fondo lleno al cierre de la ronda",
  "board.strategy.secondLowest.gridLine": "un escalón sobre el fondo",

  "board.strategy.allTiles.label": "Todas",
  "board.strategy.allTiles.name": "Armar: apostarle a todas las casillas al cierre de la ronda",
  "board.strategy.allTiles.detail":
    "Arma tu apuesta en todas las casillas elegibles, y se resuelve justo antes de que la ronda cierre. Gasto total = tu apuesta x la cantidad de casillas en ese momento.",
  "board.strategy.allTiles.rowTitle": "Todas las casillas",
  "board.strategy.allTiles.closeLine": "reparte tu apuesta al cierre de la ronda",
  "board.strategy.allTiles.gridLine": "tu apuesta en cada casilla",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "Toca de nuevo: {unit}",
  "board.tile.confirmClickAgain": "Haz clic de nuevo: {unit}",
  "board.tile.betOffNotice": "Las apuestas están apagadas en los ajustes",
  "board.stakeControl.pickPackHint": "Elige un pack para apostar",
  "board.stakeControl.emptyStakeLead": "Elige un pack",
  "board.stakeControl.emptyStakeHint": "Se convierte en tu apuesta",
  "gear.betInput.label": "Colocar una apuesta",
  "gear.betInput.hint":
    "Cómo un toque en una casilla (y su tecla numérica) coloca tu apuesta. Doble pide primero un toque de confirmación - lo predeterminado en pantallas táctiles. Apagado es modo espectador: no se puede apostar.",
  "gear.betInput.optionSingle": "Un toque",
  "gear.betInput.optionDouble": "Doble toque",
  "gear.betInput.optionOff": "Apagado",
  "gear.cardOpen.label": "Abrir cartas",
  "gear.cardOpen.hint":
    "Doble pide un toque de confirmación antes de que una carta abra su página - lo predeterminado en pantallas táctiles.",
} as Record<string, string>;
