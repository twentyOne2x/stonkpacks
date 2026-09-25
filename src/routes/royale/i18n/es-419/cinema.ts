// Spanish, Latin America (Español): "cinema" segment. Same key set as
// en/cinema.ts. See royaleI18n.ts for the {token} interpolation convention
// and the "no em dash" rule.
//
// Segment: cinema - owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (the copy: fields of REVEAL_CINEMA_SEQUENCE),
// RoyaleRoundCardWall.tsx, RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx,
// RoyalePrizeModal.tsx, RoyaleWinShareCard.tsx,
// RoyaleProfilePnlShareCard.tsx, RoyaleSpectatorRecapSection.tsx,
// RoyaleRoundReplay.tsx and ../RoyaleReplayRoute.tsx.
//
// Terminology kept consistent with core.ts/board.ts/misc.ts/arena.ts/docs.ts:
// "pack(s)" -> pack(s), "pot/pool" -> pozo, "jackpot" -> acumulado (never
// "pozo"), "lock" -> bloquear/bloqueo, "settle" -> liquidar/liquidación,
// "draw" -> sorteo, "seed" -> semilla, "provably fair" -> comprobablemente
// justo, "pull" -> tirada, "graded slab" -> carta calificada, "backer" ->
// quien apostó, "top backer" -> quien más apostó, "pro-rata" -> a prorrata,
// "rake"/"protocol fee" -> comisión (del protocolo), "vault" -> bóveda,
// "buyback" -> recompra, "sell back" -> vender de vuelta, "replay" ->
// repetición, "net P&L" -> neto, "the Chase" -> la Cacería (house style,
// translated in every locale).
//
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) stay in English per
// the project-wide rule, mid-sentence included; "GRAIL"/"LEGENDARY"/"MYTHIC"
// as rarity stamps below are left untranslated for the same reason. "attn
// ROYALE", "ATTN", "SLABZ", "USDC", "X" and "CollectorCrypt" are brands.
//
// NBSP note (cinema.tileValue.* keys): the English source has a real
// U+00A0 non-breaking space between the two words in each of these three
// values, to stop an orphan word at a line-wrap. The NBSP is preserved
// verbatim in the Spanish translations below.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "ABRIENDO PACKS",
  "cinema.phaseAnnounce.packsOpening.subtitle": "revelando cartas · repreciando cada casilla",
  "cinema.phaseAnnounce.winnerDraw.title": "SORTEANDO AL GANADOR",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "ponderado por el total de la casilla",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Bloqueado: el tablero es el show",
  "cinema.phase.packsEnter.copy": "Los packs llegan al tablero",
  "cinema.phase.packsOpening.copy": "Los packs se abren: cartas revelándose, casillas repreciando",
  "cinema.phase.cardsByTile.copy": "Cartas reveladas: cada casilla, valor primero",
  "cinema.phase.valueScan.copy": "Leyendo el tablero: las tiradas más grandes brillan",
  "cinema.phase.winnerDraw.copy": "Sorteando al ganador: ponderado por el total de la casilla",
  "cinema.phase.winnerLock.copy": "Ganador bloqueado",
  "cinema.phase.loserValueConverge.copy": "Las tiradas perdedoras vuelven a la bóveda: su valor se resuelve hacia el ganador",
  "cinema.phase.winnerPotCountUp.copy": "El pozo cae en la casilla ganadora",
  "cinema.phase.chaseFeed.copy": "La Cacería se lleva su parte",
  "cinema.phase.chasePayout.copy": "La Cacería cae: una casilla gana en grande",
  "cinema.phase.allocation.copy": "Recibes",
  "cinema.phase.keepSellDecision.copy": "Conservar o vender: la decisión sigue vigente hasta la siguiente ronda",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "EN BÓVEDA",
  "cinema.vaultLock.plateSub": "LA CACERÍA",
  "cinema.vaultLock.status": "BLOQUEADO",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "NINGUNA CARTA ABIERTA ESTA RONDA",
  "cinema.cardWall.won": "GANADA",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "MEJOR TIRADA",
  "cinema.cardWall.rarity.common": "COMÚN",
  "cinema.cardWall.rarity.rare": "RARA",
  "cinema.cardWall.rarity.epic": "ÉPICA",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "CONSERVADA",
  "cinema.cardWall.status.sold": "VENDIDA",
  "cinema.cardWall.status.toTheChase": "A LA CACERÍA",
  "cinema.cardWall.status.rake": "COMISIÓN",
  "cinema.cardWall.owner.vault": "BÓVEDA",
  "cinema.cardWall.owner.you": "TÚ",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter abre los detalles de la carta.",
  "cinema.cardWall.sectionAriaLabel": "Todas las cartas abiertas esta ronda, la más valiosa primero",
  "cinema.cardWall.eyebrow": "Todas las cartas abiertas",
  "cinema.cardWall.rake.title": "Comisión del protocolo",
  "cinema.cardWall.rake.metaOne": "1 carta para la comisión",
  "cinema.cardWall.rake.metaMany": "{n} cartas para la comisión",
  "cinema.cardWall.rake.hide": "Ocultar",
  "cinema.cardWall.rake.show": "Mostrar",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Cerrar la revelación",
  "cinema.close.title": "Cerrar la revelación (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Ganador de registro",
  "cinema.provCaption.round": "Ronda",
  "cinema.provCaption.verifyAt": "Verificar en",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Ronda #{n}",
  "cinema.bar.vrfBadge": "Con tecnología VRF de CollectorCrypt",
  "cinema.bar.chaseFeed": "Cacería +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "ABRIENDO",
  "cinema.phaseShort.drawing": "SORTEANDO",
  "cinema.phaseShort.results": "RESULTADOS",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "GANADOR",
  "cinema.core.tileWins": "{tile} gana",
  "cinema.core.inCards": " EN CARTAS",
  "cinema.core.poolSuffix": " POZO",
  "cinema.core.totalCardValue": "VALOR TOTAL DE CARTAS",
  "cinema.core.totalPool": "POZO TOTAL",
  "cinema.core.tilesLive": "{n} CASILLAS EN VIVO",
  "cinema.core.packsSuffix": " · {n} PACKS",
  "cinema.core.yourStake": "Tu apuesta",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Sin apuesta",
  "cinema.heatOnly.note": "Solo USDC · sin pack esta ronda",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} packs",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Perdió el sorteo. Las cartas van a quienes apostaron en la casilla ganadora.",
  "cinema.vaultNote.heatOnlyNoPack": "Sin pack esta ronda · el cambio pasa al pozo",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "de {pack}",
  "cinema.grail.fromPackRate": "de {pack} · {pct} de probabilidad",
  "cinema.grail.pullTitle": "TIRADA DE GRAIL",
  "cinema.grail.fromPackVisible": "de un pack {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, de un pack {pack}",
  "cinema.grail.multiTitle": "{n} CARTAS GRAIL ESTA RONDA",
  "cinema.grail.galleryTileFromPack": "{tile} · de {pack}",
  "cinema.grail.galleryMore": "+{n} más",
  "cinema.card.openInNewTab": "Abrir la página de la carta {name} en una pestaña nueva",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Del pack {pack}, {pct} de probabilidad de tirada. Enter abre los detalles de la carta.",
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter abre los detalles de la carta.",
  "cinema.card.bandChancePct": "{pct}% de probabilidad en un pack {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "GANA {tile}",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "VENTANA DE VENTA ABIERTA",
  "cinema.sellWindow.secToDecide": "SEG PARA DECIDIR",
  "cinema.sellWindow.noActionAutoSells": "SIN ACCIÓN SE VENDE AUTOMÁTICAMENTE AL SIGUIENTE BLOQUEO",
  "cinema.sellWindow.noActionKeeps": "SIN ACCIÓN CONSERVA LA CARTA · VÉNDELA CUANDO QUIERAS DESDE TUS CARTAS",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "valor de carta" / "en casilla" from breaking to an orphan
  // word at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "valor de carta",
  "cinema.tileValue.onTileLabel": "en casilla",
  "cinema.tileValue.oddsWord": "probabilidad",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "la casilla golpeada",
  "cinema.chase.fires": "LA CACERÍA SE DISPARA",
  "cinema.chase.jackpotReleasingTo": "EL ACUMULADO CAE EN {tile}",
  "cinema.chase.winningTileFallback": "LA CASILLA GANADORA",
  "cinema.chase.feedThisRound": "La Cacería +{value} esta ronda",
  "cinema.chase.cardToChase": "CARTA A LA CACERÍA",
  "cinema.chase.bestLosingCardNamed": "Mejor carta perdedora · {name} · {value} asegurado",
  "cinema.chase.bestLosingCardVault": "Mejor carta perdedora asegurada en la bóveda",
  "cinema.chase.jackpotGrows": "La Cacería +{value} · el acumulado crece",
  "cinema.chase.hitsAriaLabel": "La Cacería golpea {tile} por {value}",
  "cinema.chase.alsoHolds": "La Cacería también tiene",
  "cinema.chase.alsoHoldsAriaOne": "La Cacería también tiene 1 carta valorada en {value}",
  "cinema.chase.alsoHoldsAriaMany": "La Cacería también tiene {n} cartas valoradas en {value}",
  "cinema.chase.more": "más",
  "cinema.chase.cardsTotalOne": "1 carta · {value} en cartas calificadas",
  "cinema.chase.cardsTotalMany": "{n} cartas · {value} en cartas calificadas",
  "cinema.chase.hitsKicker": "LA CACERÍA GOLPEA",
  "cinema.chase.winsBig": "GANA EN GRANDE",
  "cinema.chase.yourCut": "TU PARTE",
  "cinema.chase.otherBackerOne": "{n} otra persona apostando · a prorrata",
  "cinema.chase.otherBackerMany": "{n} otras personas apostando · a prorrata",
  "cinema.chase.backerOne": "{n} persona apostando · a prorrata",
  "cinema.chase.backerMany": "{n} personas apostando · a prorrata",
  "cinema.chase.alsoWonRound": "También ganó la ronda",
  "cinema.chase.backedTileNote": "Una casilla con apuestas · no la ganadora de la ronda",
  "cinema.chase.heldCardsSpillOne": "1 carta en custodia se libera",
  "cinema.chase.heldCardsSpillMany": "{n} cartas en custodia se liberan",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "pozo",
  "cinema.you.get": "Recibes",
  "cinema.you.lost": "¡Perdiste!",
  "cinema.you.noStakeThisRound": "No apostaste esta ronda",
  "cinema.you.mathLine": "{usdc} USDC de tu parte del pozo + {cards} en cartas = {total} para ti",
  "cinema.you.sold": "Vendida por {value}",
  "cinema.you.kept": "Conservada · en tu colección",
  "cinema.you.keepButton": "Conservar",
  "cinema.you.sellButton": "Vender {value}",
  "cinema.you.yours": "tuya",
  "cinema.you.noCardThisRound": "Sin carta esta ronda.",
  "cinema.you.usdcPaidInstantly": "USDC · acreditado a tu saldo",
  "cinema.you.keepAll": "Conservar todas",
  "cinema.you.sellAllButton": "Vender todas por {value}",
  "cinema.you.sellAllConfirm": "¿Seguro? Vender todo {value}",
  "cinema.you.noOtherBackers": "Nadie más apostó esta ronda",
  "cinema.you.oneOtherSplits": "1 persona más se lleva {value}",
  "cinema.you.othersSplit": "{n} personas más se reparten {value}",
  "cinema.you.oneWinningBackerTakes": "1 ganador se lleva {value}",
  "cinema.you.winningBackersSplit": "{n} ganadores se reparten {value}",
  "cinema.you.viewFullResults": "Ver resultados completos",
  "cinema.you.howItWorks": "Cómo funciona",

  // --- RoyaleRoundTheatre.tsx (COMPARTIDO con RoyalePrizeModal.tsx) -------
  // El teatro en línea y el modal de premio muestran el mismo panel liquidado
  // palabra por palabra, así que los dos leen estas claves.
  //
  // Reglas de disposición del Grail, una por RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Carta calificada estándar, quien más apostó la conserva o la vende de vuelta, a prorrata.",
  "cinema.theatre.disposition.sellBackSplit":
    "Regla de Grail: nadie que haya apostado alcanza a cubrir a prorrata a los demás, así que el Grail se vende de vuelta por defecto y el USDC se reparte en toda la casilla.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Regla de Grail: lo que le toca a prorrata a quien más apostó ya alcanza para comprarles su parte a los demás, así que se queda con el Grail y le paga a cada quien su parte de la carta en USDC.",
  // Fila de espera "jugadores decidiendo". {count} es el par "X / N"
  // resaltado; la llamada parte la frase en el token, así que el orden es libre.
  "cinema.theatre.decidingAriaLabel": "{decided} de {total} jugadores más ya decidieron; siguiente ronda en {seconds} segundos",
  "cinema.theatre.playersDeciding": "Jugadores decidiendo {count}",
  "cinema.theatre.nextRoundIn": "siguiente ronda en {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Tira compacta mientras el tablero se revela en su lugar.
  "cinema.theatre.stripAriaLabel": "Ronda resolviéndose",
  "cinema.theatre.stageLockingBoard": "Bloqueando el tablero…",
  "cinema.theatre.stagePacksOpening": "Los packs se abren en el tablero",
  "cinema.theatre.stageWinnerDrawn": "Ganador sorteado",
  "cinema.theatre.headlineNoEntries": "Sin apuestas esta ronda",
  "cinema.theatre.headlineRevealing": "Revelando packs…",
  "cinema.theatre.headlineTileWins": "{tile} gana {value}",
  "cinema.theatre.tileFallback": "Casilla",
  "cinema.theatre.youWon": "Ganaste {value}",
  "cinema.theatre.youLostNoStake": "Perdiste, sin apuesta en {tile}",
  "cinema.theatre.winnerFallback": "el ganador",
  "cinema.theatre.tileWonNoStake": "{tile} ganó · no tenías apuesta",
  "cinema.theatre.aTileFallback": "Una casilla",
  // El separador o espacio inicial es parte del valor (misma convención que
  // cinema.core.inCards): estas dos se pegan a la línea de metadatos.
  "cinema.theatre.stripMeta": "{tiles} casillas jugadas · pozo {pool}",
  "cinema.theatre.stripMetaCards": " · {value} en cartas",
  "cinema.theatre.stripMetaCash": " + {value} en efectivo",
  "cinema.theatre.drawingWinner": "sorteando al ganador",
  // Panel liquidado.
  "cinema.theatre.panelAriaLabel": "Resultado de la ronda",
  "cinema.theatre.roundSettled": "Ronda liquidada",
  "cinema.theatre.winner": "Ganador",
  "cinema.theatre.seedNote":
    "Incluye tu apuesta inicial de {value} en {tile}. Borra las apuestas iniciales en el panel de apuestas para jugar desde $0.",
  "cinema.theatre.lossNoteStaked":
    "Esta ronda apostaste {value} en otras casillas. Pasa el cursor por cualquier casilla detrás de este panel para ver qué abrió y por qué perdió.",
  "cinema.theatre.lossNoteNoStake":
    "Esta ronda no le apostaste a ninguna casilla, así que no hay nada que pagar. Elige un monto y haz clic en una casilla en la próxima ronda.",
  "cinema.theatre.bonusGrails.one":
    "Cayó {n} Grail más esta ronda: va como botín extra para quienes apostaron a la casilla ganadora (se conserva, o se vende de vuelta a prorrata si es demasiado caro para sostenerlo), nunca a la comisión de ATTN ni a la Cacería.",
  "cinema.theatre.bonusGrails.other":
    "Cayeron {n} cartas Grail más esta ronda: van como botín extra para quienes apostaron a la casilla ganadora (se conservan, o se venden de vuelta a prorrata si son demasiado caras para sostenerlas), nunca a la comisión de ATTN ni a la Cacería.",
  "cinema.theatre.noPacksBacked": "Esta ronda nadie apostó packs. La siguiente arranca sola.",
  // Tabla del reparto del pago.
  "cinema.theatre.payoutSplitTitle": "Reparto del pago · {tile}",
  "cinema.theatre.payoutSplitMeta": "Pozo {pool} · aporte a la Cacería {feed}",
  "cinema.theatre.payoutSplitChase": " · CACERÍA +{value}",
  "cinema.theatre.you": "Tú",
  "cinema.theatre.physicalCard": "Carta física →",
  "cinema.theatre.grailSecured": " (Grail asegurado)",
  "cinema.theatre.grailSoldBack": "Grail vendido de vuelta ({value}) → al reparto de USDC de arriba.",
  // Resultado de la Cacería. El encabezado va en negrita en su propia línea;
  // el cuerpo lleva el {value} resaltado dentro de la frase.
  "cinema.theatre.chaseHitLead": "¡Cayó la Cacería!",
  "cinema.theatre.chaseHitBody":
    "La Cacería se disparó con su propio sorteo raro, así que {value} de la Cacería entraron a este premio y se sumaron al reparto de arriba. La próxima Cacería ya empieza a crecer.",
  "cinema.theatre.chaseMissLead": "La Cacería no cayó esta ronda.",
  "cinema.theatre.chaseMissBody": "La Cacería se dispara con su propio sorteo raro, así que sigue creciendo: ahora va en {value}.",
  // Recibo del sorteo / VRF.
  "cinema.theatre.vrfSummary": "Verificar sorteo",
  "cinema.theatre.vrfSummaryNote": "sorteo verificable · ver el recibo del sorteo",
  "cinema.theatre.vrfRoundId": "id de ronda",
  "cinema.theatre.vrfWinningDraw": "sorteo ganador",
  "cinema.theatre.vrfDrawSeed": "semilla del sorteo",
  "cinema.theatre.vrfProofId": "id de prueba",
  "cinema.theatre.vrfTicket": "#{n} de {total}",
  "cinema.theatre.vrfVerifying": "Verificando…",
  "cinema.theatre.vrfRecheck": "Reverificar sorteo",
  "cinema.theatre.vrfVerifierLink": "Verificador ↗",
  "cinema.theatre.vrfVerified": "✓ Sorteo verificado, este ganador coincide con su semilla publicada.",
  "cinema.theatre.vrfFailed": "✗ Este sorteo no coincidió con su semilla, no confíes en él.",
  "cinema.theatre.vrfNote": "Cada ronda sortea un ganador con una semilla publicada que puedes volver a verificar.",
  "cinema.theatre.vrfNoDraw": "Esta ronda no hubo packs apostados, no hay nada que sortear.",
  // Acciones del pie + la ayuda de conservar/vender.
  "cinema.theatre.keepCard": "Conservar carta → colección",
  "cinema.theatre.sellBackFor": "Vender de vuelta por {value}",
  "cinema.theatre.continueNextRound": "Seguir a la siguiente ronda",
  "cinema.theatre.continue": "Continuar",
  "cinema.theatre.settleHint":
    "Conservar manda la carta a tu colección. Vender de vuelta te acredita {sell} al saldo ({pct}% de {value}, la recompra CC de este pack). Sin acción = se vende de vuelta por defecto cuando cierre la ronda.",

  // --- RoyalePrizeModal.tsx: solo lo que el modal NO comparte --------------
  "cinema.prizeModal.stageLocked": "Bloqueado",
  "cinema.prizeModal.stageReveal": "Revelación",
  "cinema.prizeModal.betterLuck": "Más suerte en la próxima ronda",

  // --- Chrome de la ventana de compartir (RoyaleWinShareCard +
  // RoyaleProfilePnlShareCard) --------------------------------------------
  "cinema.share.preparingCard": "Preparando tu carta…",
  "cinema.share.renderingPng": "Generando el PNG…",
  "cinema.share.renderFailed": "No se pudo generar la imagen. Inténtalo de nuevo.",
  "cinema.share.captionOpened": "Se abrió el texto en X. Adjunta el PNG guardado.",
  "cinema.share.close": "Cerrar",
  "cinema.share.downloadPng": "Descargar PNG",
  "cinema.share.shareToX": "Compartir en X",
  "cinema.share.done": "Listo",
  "cinema.share.provablyFair": "BATALLAS DE PACKS · CADA SORTEO VERIFICABLE",

  // --- RoyaleWinShareCard.tsx: las tarjetas de victoria vertical y ancha ---
  // "attn ROYALE", "SLABZ" y "X" son marcas: quedan en inglés dentro de estos
  // valores y el wordmark suelto no lleva clave.
  "cinema.winShare.multiplierAriaLabel": "multiplicador {value}",
  "cinema.winShare.multiplier": "MULTIPLICADOR",
  "cinema.winShare.inCards": "EN CARTAS",
  "cinema.winShare.cashWon": "EFECTIVO GANADO",
  "cinema.winShare.tileHit": "· PEGÓ LA CASILLA",
  "cinema.winShare.entry": "ENTRADA",
  "cinema.winShare.winOdds": "PROBABILIDAD",
  "cinema.winShare.totalValue": "VALOR TOTAL",
  "cinema.winShare.certLine": "CON TECNOLOGÍA SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "RONDA #{n} · SORTEO VRF VERIFICABLE",
  "cinema.winShare.takeHomeAriaLabel": "te llevas {value}",
  "cinema.winShare.totalTakeHome": "TOTAL QUE TE LLEVAS",
  "cinema.winShare.breakdown.one": "{cash} EN EFECTIVO + {n} CARTA ({value})",
  "cinema.winShare.breakdown.other": "{cash} EN EFECTIVO + {n} CARTAS ({value})",
  "cinema.winShare.deposited": "DEPOSITADO",
  "cinema.winShare.wonBy": "GANADO POR {name}",
  "cinema.winShare.theGrail": "EL GRAIL",
  "cinema.winShare.topPull": "MEJOR TIRADA",
  "cinema.winShare.topCardOfRound": "MEJOR CARTA DE LA RONDA",
  "cinema.winShare.poweredBySlabz": "CON TECNOLOGÍA SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // La etiqueta sirve de texto del botón y de aria-label del diálogo.
  "cinema.winShare.shareYourWin": "Comparte tu victoria",
  "cinema.winShare.pngSaved": "PNG guardado. Adjúntalo a tu publicación: X no puede agregarlo por ti.",
  "cinema.winShare.renderingHdVideo": "Generando el video HD de la ronda…",
  // {pct} llega ya armado como " · 42%" (vacío hasta conocer el avance).
  "cinema.winShare.renderingHdVideoProgress": "Generando el video HD de la ronda: {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "Video HD guardado. Adjúntalo a tu publicación en vez de la imagen.",
  "cinema.winShare.hdRenderFailed": "Falló el render en HD. Inténtalo de nuevo.",
  "cinema.winShare.hdVideoButton": "Video HD de la ronda",
  "cinema.winShare.hdVideoTitle": "Genera esta ronda como mp4 en HD (servicio de render local) y guárdala.",
  "cinema.winShare.tweetTriggerLabel": "Compartir la victoria en X",

  // --- RoyaleProfilePnlShareCard.tsx: la tarjeta de neto de tu racha -------
  "cinema.pnlShare.returnAriaLabel": "retorno de {value} sobre lo apostado",
  "cinema.pnlShare.onStake": "SOBRE LO APOSTADO",
  "cinema.pnlShare.certifiedRun": "RACHA CERTIFICADA · NETO",
  "cinema.pnlShare.heroSub.one": "en {n} ronda · {pct}% de victorias",
  "cinema.pnlShare.heroSub.other": "en {n} rondas · {pct}% de victorias",
  "cinema.pnlShare.collection": "COLECCIÓN",
  "cinema.pnlShare.change30d": "CAMBIO EN 30D",
  "cinema.pnlShare.ribbonAriaLabel.one": "Resultado por ronda en la última ronda apostada ({n})",
  "cinema.pnlShare.ribbonAriaLabel.other": "Resultado por ronda en las últimas {n} rondas apostadas",
  "cinema.pnlShare.bestPull": "MEJOR TIRADA",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "COMÚN",
  "cinema.pnlShare.rounds": "RONDAS",
  "cinema.pnlShare.winRate": "% VICTORIAS",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "MEJOR RONDA",
  "cinema.pnlShare.rank": "PUESTO #{n}",
  "cinema.pnlShare.rankOf": "PUESTO #{n} DE {total}",
  "cinema.pnlShare.staked": "{value} APOSTADOS",
  "cinema.pnlShare.overlayAriaLabel": "Comparte tu racha",
  "cinema.pnlShare.saved": "Guardado. Adjúntalo a tu publicación.",
  "cinema.pnlShare.triggerLabel": "Compartir el neto",

  // --- RoyaleSpectatorRecapSection.tsx: "dónde cayó cada carta" ------------
  // El nombre "attn" (la marca en minúscula) queda en inglés y no lleva clave.
  "cinema.recap.keepSell": "Conservar / vender",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Tú decides",
  "cinema.recap.dest.deciding": "Decidiendo",
  "cinema.recap.dest.you": "Tú",
  "cinema.recap.dest.topBacker": "Quien más apostó",
  "cinema.recap.dest.yourCard": "Tu carta",
  "cinema.recap.dest.wonBy": "Ganada por",
  "cinema.recap.dest.aBacker": "Alguien que apostó",
  "cinema.recap.dest.yourChaseLoot": "Tu botín de la Cacería",
  "cinema.recap.dest.chaseLoot": "Botín de la Cacería",
  "cinema.recap.dest.releasedFromVault": "liberado de la bóveda",
  "cinema.recap.dest.sweptTo": "Barrida a",
  "cinema.recap.dest.chaseVault": "La bóveda de la Cacería",
  "cinema.recap.dest.fundsJackpot": "alimenta el acumulado",
  "cinema.recap.dest.protocolFee": "Comisión del protocolo",
  "cinema.recap.dest.tableRake": "comisión de la mesa",
  "cinema.recap.dest.soldBack": "Vendida de vuelta",
  "cinema.recap.dest.intoTheSplit": "Al reparto",
  "cinema.recap.dest.toThePool": "+{value} al pozo",
  "cinema.recap.sublineYours": "Todas las cartas de la mesa en esta ronda. La tuya está marcada abajo.",
  "cinema.recap.sublineLost": "Todas las cartas de la mesa en esta ronda. Ninguna es tuya.",
  "cinema.recap.sublineNoStake": "Todas las cartas de la mesa en esta ronda. Esta te la saltaste.",
  "cinema.recap.sectionAriaLabel": "A dónde fue cada carta de esta ronda",
  "cinema.recap.eyebrow": "Resultados de la ronda",
  "cinema.recap.headline": "Dónde cayó cada carta",
  "cinema.recap.theatreHeader": "Historia de la ronda · el destino de cada carta",
  "cinema.recap.openCardTitle": "Abre la página de la carta en una pestaña nueva",
  "cinema.recap.fromPack": "De {pack}",
  "cinema.recap.railAriaLabel": "Todas las cartas de la ronda, las más valiosas primero",
  "cinema.recap.tierRule.one": "La otra carta · {value}",
  "cinema.recap.tierRule.other": "Las otras {n} cartas · {value}",
  "cinema.recap.showMore": "Ver {n} más",
  "cinema.recap.showAll": "Ver las {n}",
  "cinema.recap.showing": "{n} de {total} cartas · {value} de {totalValue}",
  "cinema.recap.allShown": "Las {n} cartas · {value} en total",

  // --- RoyaleRoundReplay.tsx: la repetición de la ronda completa -----------
  // "GRABAR PESTAÑA" dentro de las dos frases del servicio es el botón de este
  // mismo panel: los tres textos se mueven juntos.
  "cinema.replay.finishingVideo": "Terminando el video...",
  "cinema.replay.recordingEmpty": "La grabación salió vacía. Inténtalo de nuevo.",
  "cinema.replay.checkingService": "Buscando el servicio de render en HD...",
  "cinema.replay.serviceUnreachable":
    "No se puede contactar al servicio de render en HD, así que esto no se puede generar en HD. GRABAR PESTAÑA captura esta pestaña (con el aviso del navegador).",
  // {pct} llega ya armado como " · 42%" (vacío hasta conocer el avance).
  "cinema.replay.renderingHd": "Generando el video HD: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "Falló el render en HD. Inténtalo de nuevo, o usa GRABAR PESTAÑA para capturar esta pestaña.",
  "cinema.replay.cannotRecord":
    "Este navegador no puede grabar video aquí. Guardamos el archivo de la ronda: suéltalo en la página de repetición para volver a verla.",
  "cinema.replay.pickThisTab": "Elige \"Esta pestaña\" para grabar la ronda.",
  "cinema.replay.recorderFailed": "No se pudo iniciar la grabación.",
  "cinema.replay.watermarkAriaLabel": "Repetición de la ronda {n}",
  "cinema.replay.watermarkAriaLabelDated": "Repetición de la ronda {n}, grabada el {date}",
  "cinema.replay.watermarkTag": "REPETICIÓN",
  "cinema.replay.watermarkRound": "RONDA #{n}",
  "cinema.replay.headerSeed": "SEMILLA {seed}",
  "cinema.replay.phaseBidding": "APUESTAS",
  "cinema.replay.phaseReveal": "REVELACIÓN",
  "cinema.replay.phaseDone": "LISTO",
  "cinema.replay.boardAriaLabel": "Tablero de la repetición",
  "cinema.replay.controlsAriaLabel": "Controles de la repetición de la ronda {n}",
  "cinema.replay.pause": "Pausar",
  "cinema.replay.play": "Reproducir",
  "cinema.replay.pauseButton": "PAUSA",
  "cinema.replay.playButton": "REPRODUCIR",
  "cinema.replay.restart": "REINICIAR",
  "cinema.replay.scrubAriaLabel": "Recorrer la ronda completa: de las apuestas a la revelación",
  "cinema.replay.lockMark": "Bloqueo",
  "cinema.replay.seeking": "BUSCANDO",
  "cinema.replay.speedAriaLabel": "Velocidad de reproducción",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "GUARDAR VIDEO",
  "cinema.replay.saveVideoTitle":
    "Genera esta ronda como mp4 en HD (servicio de render local; no se graba nada de tu pantalla)",
  "cinema.replay.recordTab": "GRABAR PESTAÑA",
  "cinema.replay.recordTabTitle":
    "Alternativa: graba esta pestaña con el aviso de captura de tu navegador (calidad en tiempo real)",
  "cinema.replay.saveRound": "GUARDAR RONDA",
  "cinema.replay.saveRoundTitle":
    "Descarga esta ronda como un archivo de datos pequeño: cualquiera puede soltarlo en la página de repetición para ver esta misma ronda",
  "cinema.replay.close": "CERRAR",
  "cinema.replay.backToGame": "VOLVER AL JUEGO",
  "cinema.replay.shareOverlayAriaLabel": "Comparte esta ronda",
  "cinema.replay.videoReady": "VIDEO DE LA RONDA LISTO",
  "cinema.replay.formatWebm": "Guardado como .webm. X necesita mp4 para subirlo, así que comparte el enlace o convierte el archivo primero.",
  "cinema.replay.formatMp4": "Guardado como .mp4, listo para adjuntar en X.",
  "cinema.replay.shareOnX": "Compartir en X",
  "cinema.replay.saveAgain": "Guardar de nuevo",
  "cinema.replay.shareHint": "X no puede adjuntar un video desde la web: tu publicación se abre lista, adjunta el archivo guardado.",
  "cinema.replay.xOpened": "X se abrió con tu texto. Adjunta el archivo guardado ({filename}): el editor web no puede agregarlo por ti.",

  // --- RoyaleReplayRoute.tsx: la página suelta /lab/royale/replay ----------
  "cinema.replayRoute.documentTitle": "Repetición de ronda de attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "No llegó ninguna grabación. Pasa ?rec=<json-o-url-codificado>.",
  "cinema.replayRoute.unreadable": "No se pudo leer la grabación de ?rec=.",
  "cinema.replayRoute.loadFailed": "No se pudo cargar la grabación ({error}).",
  "cinema.replayRoute.badge": "REPETICIÓN DE RONDA",
  "cinema.replayRoute.loading": "CARGANDO LA GRABACIÓN",
  "cinema.replayRoute.noRecording": "No hay ninguna grabación para reproducir.",
  "cinema.replayRoute.hint":
    "Las repeticiones se abren desde la tira de rondas pasadas del tablero (REPETICIÓN en una ronda liquidada) o desde un enlace ?rec= compartido.",
  "cinema.replayRoute.roundResults": "RESULTADOS DE LA RONDA",
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
  "cinema.share.shareFile": "Compartir archivo",
  "cinema.share.shareSheetOpened": "Se abrió la hoja para compartir.",
  "cinema.winShare.lossHeadline": "PERDISTE LA RONDA",
  "cinema.winShare.lossResult": "DERROTA",
  "cinema.winShare.returned": "DEVUELTO",
  "cinema.winShare.bestPull": "MEJOR HALLAZGO",
  "cinema.winShare.playedBy": "JUGÓ {name}",
  "cinema.winShare.lossCaption": "Ronda #{n}: aposté {stake}. No hubo premio esta ronda.",
  "cinema.winShare.lossCardCaption": "El mejor hallazgo de la mesa, pero no mío.",
  "cinema.winShare.lossNoCardCaption": "El resultado de la ronda, registrado con honestidad.",
  "cinema.winShare.roundResultTop": "RONDA",
  "cinema.winShare.roundResultMain": "DERROTA",
  "cinema.winShare.shareRoundCard": "Compartir tarjeta",
  "cinema.replay.shareVideo": "Compartir video",
  "cinema.replay.shareVideoTitle": "Compartir video de la ronda",
  "cinema.replay.shareVideoSheetOpened": "Se abrió la hoja con el video.",
  "cinema.replay.shareVideoFailed": "No se pudo compartir el video. Intenta de nuevo.",
  "cinema.replay.shareSheetHint": "Tu dispositivo puede enviar este video a X desde la hoja para compartir.",
  "cinema.replay.shareRoundTitle": "attn royale · Ronda #{n}",
  "cinema.replay.shareRoundTable": "{amount} en la mesa.",
  "cinema.replay.shareRoundWin": "Mi casilla se lleva la mesa por {pool} · regresaron {amount}.",
  "cinema.replay.shareRoundCardsOnly": "La casilla {tile} se lleva la mesa por {pool} · mi casilla perdió, pero regresaron {amount}.",
  "cinema.replay.shareRoundWinner": "La casilla {tile} se lleva la mesa por {pool}.",
  "cinema.share.shareVideo": "Compartir video",
  "cinema.share.preparingOutput": "Preparando el contenido para compartir…",
  "cinema.share.cancelled": "Compartir cancelado.",
  "cinema.share.shareSheetHint": "Tu dispositivo puede enviar este video a X desde la hoja para compartir.",
  "cinema.personalReveal.sectionAria": "Cartas que abriste",
  "cinema.personalReveal.title": "CARTAS QUE ABRISTE",
  "cinema.personalReveal.progress.eyebrow": "REVELACIÓN SINCRONIZADA",
  "cinema.personalReveal.progress.title": "APERTURAS EN CURSO",
  "cinema.personalReveal.progress.body": "La mesa está abriendo sus cartas. La revelación compartida continúa al terminar esta secuencia.",
  "cinema.personalReveal.normal.label": "REVELADO NORMAL",
  "cinema.personalReveal.normalHint": "Primero ves el reverso de la carta. Haz clic o toca una carta para voltearla; las cartas que abres son tuyas. Las que sigan boca abajo se voltean automáticamente después de 5 segundos.",
  "cinema.personalReveal.hardcore.label": "REVELADO EXTREMO",
  "cinema.personalReveal.hardcoreHint": "Primero ves el reverso de la carta. Haz clic o toca una carta para voltearla; la propiedad se decide después del sorteo. Las que sigan boca abajo se voltean automáticamente después de 5 segundos.",
  "cinema.personalReveal.yourCard": "TU CARTA",
  "cinema.personalReveal.youOpened": "LA ABRISTE",
  "cinema.personalReveal.otherCards": "OTRAS CARTAS",
  "cinema.personalReveal.sort.group": "Orden de cartas",
  "cinema.personalReveal.sort.pack": "Sobre",
  "cinema.personalReveal.sort.packAria": "Ordenar por precio del pack, las más baratas primero",
  "cinema.personalReveal.sort.rarity": "Rareza",
  "cinema.personalReveal.sort.revealFirst": "Ordenar por rareza estará disponible cuando se revelen todas las cartas",
  "cinema.personalReveal.sort.bestAria": "Ordenar por rareza, las mejores primero",
  "cinema.personalReveal.sort.worstAria": "Ordenar por rareza, las peores primero",
  "cinema.personalReveal.sort.packStatus": "Cartas ordenadas por precio del pack, las más baratas primero",
  "cinema.personalReveal.sort.bestStatus": "Cartas ordenadas por rareza, las mejores primero",
  "cinema.personalReveal.sort.worstStatus": "Cartas ordenadas por rareza, las peores primero",
  "cinema.personalReveal.allOpen": "Todas las cartas están reveladas",
  "cinema.personalReveal.autoOpenIn": "Las cartas restantes se revelan automáticamente en {n} s",
  "cinema.personalReveal.revealCardAria": "Voltear carta {n}",
  "cinema.personalReveal.revealedCardAria": "Carta {n} revelada: {name}, {value}",
  "cinema.personalReveal.rarity": "Rareza",
  "cinema.personalReveal.year": "Año",
  "cinema.personalReveal.yearUnknown": "Año desconocido",
  "cinema.personalReveal.grade": "Calificación",
  "cinema.personalReveal.ungraded": "Sin calificar",
  "cinema.personalReveal.pageNavigation": "Páginas de cartas",
  "cinema.personalReveal.previousPage": "Cartas anteriores",
  "cinema.personalReveal.nextPage": "Cartas siguientes",
  "cinema.personalReveal.pageStatus": "Página {page} de {pages}",
  "cinema.personalReveal.live.revealed": "{name} revelada",
  "cinema.personalReveal.live.all": "Las {n} cartas están reveladas",
} as Record<string, string>;
