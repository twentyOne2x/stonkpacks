// Spanish, Latin America (Español): "core" segment. Same key set as
// en/core.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: core (the original Phase-1 flat dictionary) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome:
// header status, round-metrics rail, board region labels, the logged-out
// invitation and the phone drawer toggles) and runtime.* (copy built by the
// plain, non-component .ts modules: rail / recap / xProfile / sellBack /
// winShare / serverWallet / video / game). Do NOT add new SURFACE keys to
// this file, add them to the segment file for the surface they belong to
// instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this
// same directory).
//
// Terminology kept in line with board.ts / misc.ts / docs.ts / arena.ts:
// "settings" -> ajustes, "pot"/"pool" -> pozo, "jackpot" -> acumulado,
// "the Chase" -> la Cacería, "lock" -> bloquear/bloqueo, "settle" ->
// liquidar/liquidación, "draw" -> sorteo, "pull" -> tirada, "buyback" ->
// recompra, "graded slab" -> carta calificada, "vault" -> bóveda, "wallet"
// -> billetera, "balance" -> saldo, "back a tile" -> apostarle a una casilla
// (never "respaldar"), "top backer" -> quien más apostó, "pro-rata" -> a
// prorrata, "rake"/"protocol fee" -> comisión (del protocolo).
//
// Pack TIER NAMES (Starter / Elite / Legendary / Grail / Mythic) are brand
// terms: English spelling and capitalization everywhere, mid-sentence
// included, and they never take a Spanish plural ("los Grail"). "attn
// ROYALE", "ATTN Protocol", "USDC", "X", "Privy" and "CollectorCrypt" are
// brand terms too and stay verbatim.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Idioma",
  "settings.languageSectionAria": "Ajustes de idioma",
  "settings.languageSearchPlaceholder": "Buscar idioma",
  "settings.languageNoResults": "Ningún idioma coincide",
  "settings.languageHint": "Se aplica al instante. Busca por nombre o escribe para filtrar.",
  "settings.languageInputAria": "Idioma, buscar y seleccionar",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Grupos de configuración",
  "settings.searchPlaceholder": "Buscar configuración",
  "settings.searchClear": "Borrar búsqueda",
  "settings.searchResultsAria": "Configuraciones que coinciden",
  "settings.searchNoResults": "Nada coincide con «{query}». Prueba con el nombre de lo que quieres cambiar.",
  "settings.backToGroups": "Toda la configuración",
  "gear.cards.heading": "Cartas",
  "gear.cards.sectionAria": "Configuración de cartas",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Apuestas {bids} · mínimo {amount}",
  "gear.section.summary.display": "Avisos {popups} · retratos {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Música {music} · efectos {sfx}",
  "gear.section.summary.autosell": "{count} reglas de venta automática activas",
  "gear.section.summary.hotkeys": "{count} atajos de apuesta configurados",

  // --- Shared words --------------------------------------------------------
  "common.on": "SÍ",
  "common.off": "NO",
  "common.set": "FIJAR",
  "common.clear": "BORRAR",
  "common.tileLabel": "Casilla {n}",
  "common.tileShort": "C{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Apuestas",
  "gear.betting.sectionAria": "Ajustes de apuestas",
  "gear.betting.provider.label": "Proveedor del pack",
  "gear.betting.provider.automatic": "Automático (prefiere Collector Crypt)",
  "gear.betting.provider.hint": "Automático prefiere Collector Crypt cuando está disponible y solo puede usar un respaldo verificado. Elegir un proveedor es estricto: si no está disponible, se rechaza la apuesta.",
  "gear.betting.provider.automaticHint": "Automático · prefiere Collector Crypt",
  "gear.betting.provider.strictHint": "Solo {provider} · sin respaldo",
  "gear.betting.provider.unavailable": "{provider} (no disponible)",
  "gear.betting.provider.selectedUnavailable": "{provider} no está disponible. Las apuestas estrictas se rechazan; la elección nunca se sustituye.",
  "gear.betting.provider.actual": "Procesado por {provider}",
  "gear.betting.provider.accepted": "Aceptado por {provider}",
  "gear.betting.disableBids.label": "Desactivar apuestas",
  "gear.betting.disableBids.hint":
    "Traba tus apuestas: tocar una casilla deja de apostar, así puedes mirar (o pasarle la pantalla a alguien) sin arriesgar sin querer. El resto del juego sigue en vivo.",
  "gear.betting.minBid.label": "Apuesta mínima",
  "gear.betting.minBid.hint":
    "Lo mínimo que apuesta un toque. Tu apuesta nunca baja de ahí, así un toque rápido no apuesta menos de lo que querías (piso de $5 para frenar apuestas falsas).",
  "gear.betting.upgradeCap.label": "Tope por mejora",
  "gear.betting.upgradeCap.placeholder": "sin límite",
  "gear.betting.upgradeCap.hint":
    "Lo máximo que te puede costar un clic de mejora. Las mejoras más caras se ven atenuadas, así una casilla movida no te sorprende con una cuenta enorme.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Pantalla",
  "gear.display.sectionAria": "Ajustes de pantalla",
  "gear.display.chipFloats.label": "Burbujas de apuesta",
  "gear.display.chipFloats.hint": "Muestra las burbujitas “+$X · nombre” que suben cuando alguien le apuesta a una casilla.",
  "gear.display.floatThreshold.label": "Ocultar apuestas menores a",
  "gear.display.floatThreshold.placeholder": "mostrar todas",
  "gear.display.floatThreshold.hint":
    "Solo salta una burbuja para apuestas de ese tamaño o más. Bórralo (o pon $0) para verlas todas: mantiene el tablero tranquilo cuando caen muchas apuestas pequeñas.",
  "gear.display.hidePortraits.label": "Ocultar retratos",
  "gear.display.hidePortraits.hint": "Esconde los círculos con la foto de los demás jugadores en las casillas. Tu propio marcador sigue visible.",
  "gear.display.fullscreenLandscape.label": "Pantalla completa en horizontal",
  "gear.display.fullscreenLandscape.hint":
    "En el móvil, el siguiente toque en horizontal oculta la barra del navegador. En iPhone se mantiene compacta; Agregar a la pantalla de inicio ofrece pantalla completa real.",
  "gear.display.replayTour.label": "Repetir el recorrido de bienvenida",
  "gear.display.replayTour.hint": "Vuelve a abrir el recorrido desde el primer paso.",
  "gear.display.couch.label": "Texto grande (TV/sofá)",
  "gear.display.headerCollapse.label": "Contraer encabezado",
  "gear.display.headerCollapse.hint": "Pliega la barra superior para que el tablero y las cartas llenen la pantalla. La flecha del encabezado la trae de vuelta.",
  "gear.display.couch.hint":
    "Agranda el texto de lectura en todo el juego: chat, docs, etiquetas y cifras de dinero, pensado para jugar desde el sofá. El tablero mantiene su diseño. También se activa con ?couch=1 en la dirección.",
  "gear.display.couch.suggested": "Este navegador parece de TV o consola. El texto grande está hecho para esta pantalla.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Revelaciones",
  "gear.reveals.sectionAria": "Ajustes de revelación",
  "gear.reveals.turbo.label": "Revelaciones turbo",
  "gear.reveals.turbo.hint":
    "Acelera el show de revelación para que llegues antes a tu resultado. Los momentos grandes igual tienen su pausa. Viene apagado, y para los demás corre el show completo.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Sonido",
  "gear.sound.sectionAria": "Ajustes de sonido",
  "gear.sound.sfx.label": "Efectos de sonido",
  "gear.sound.sfx.hint":
    "Clics de fichas, apertura y bloqueo de la ronda, la rueda del ganador y el show de revelación. Todo se sintetiza en tu navegador, no hay nada que descargar.",
  "gear.sound.music.label": "Música",
  "gear.sound.music.hint":
    "Sigue la ronda: crece mientras se apuesta, se dispara en los últimos segundos y baja para la revelación. Arranca con tu primer toque o tecla y se pausa cuando cambias de pestaña.",
  "gear.sound.musicStyle.label": "Estilo de música",
  "gear.sound.musicStyle.piano": "Piano tranquilo",
  "gear.sound.musicStyle.snowmelt": "Deshielo",
  "gear.sound.musicStyle.hearthfire": "Fuego del hogar",
  "gear.sound.musicStyle.grotto": "Gruta dorada",
  "gear.sound.musicStyle.arcade": "Ritmo arcade",
  "gear.sound.musicStyle.kart": "Rally de karts",
  "gear.sound.musicStyle.galaxy": "Vals estelar",
  "gear.sound.musicStyle.hint": "Piano tranquilo es una melodía suave, sin apuro. Ritmo arcade es brillante y veloz. El cambio entra en el siguiente compás, en plena ronda.",
  "gear.sound.musicVolume.label": "Volumen de música",
  "gear.sound.sfxVolume.label": "Volumen de efectos",
  "gear.sound.volume.label": "Volumen",
  "gear.sound.volume.aria": "Volumen general",
  "gear.sound.volume.hint": "Un solo volumen general para los efectos y la música.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Venta automática",
  "gear.autosell.sectionAria": "Reglas de venta automática",
  "gear.autosell.intro":
    "Configúralo una vez y cada premio que coincida se vende solo: sin preguntarte conservar o vender. Lo que no coincida te sigue preguntando, igual que ahora.",
  "gear.autosell.everyWin.label": "Auto-vender cada premio",
  "gear.autosell.everyWin.hint":
    "Cobra cada carta que ganes a la tasa de recompra apenas cae, sin preguntarte conservar o vender. Los Grail nunca se venden automáticamente. Es el atajo para activar los cuatro interruptores de rareza de abajo.",
  "gear.autosell.belowValue.label": "Vender si vale menos de",
  "gear.autosell.placeholderOff": "apagado",
  "gear.autosell.rarity.label": "Vender por rareza",
  "gear.autosell.rarity.aria": "Venta automática por rareza",
  "gear.autosell.rarity.hint":
    "Bandas de rareza de CollectorCrypt, tomadas de la máquina de la que salió cada carta. El rango exacto de una banda cambia con cada pack, así una carta de $200 puede ser rara en una máquina y común en otra más cara.",
  "gear.autosell.nonVintage.label": "Vender cartas no vintage",
  "gear.autosell.belowGrade.label": "Vender bajo calificación",
  "gear.autosell.grader.label": "Vender por calificadora",
  "gear.autosell.grader.hint":
    "Deja marcada una calificadora y solo se venden solas sus cartas por debajo del número que pongas. Desmárcala para vender todas sus cartas. Desmárcalas todas para vender todo lo que ganes. Cada calificadora usa su propia escala, así que cada piso va por separado.",
  "gear.autosell.grader.aria": "Venta automática por calificadora",
  "gear.autosell.grader.keep": "CONSERVAR",
  "gear.autosell.grader.sellAll": "VENDER TODO",
  "gear.autosell.grader.other": "Otras / sin calificar",
  "gear.autosell.grader.placeholderKeepAll": "conservar todo",
  "gear.autosell.grader.placeholderSellAll": "vender todo",
  "gear.autosell.grader.ariaGradeSuffix": "vender bajo calificación",
  "gear.autosell.summaryActive": "Activo:",
  "gear.autosell.summaryNone": "No hay reglas de venta automática. Cada premio te sigue preguntando si lo conservas o lo vendes.",
  "gear.autosell.turnOffAll": "APAGAR TODO",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Atajos de apuesta",
  "gear.hotkeys.sectionAria": "Atajos de apuesta",
  "gear.hotkeys.intro":
    "Presiona la tecla de una casilla para apostarle con tu apuesta actual. Sin mouse. Haz clic en una tecla de abajo y después presiona la que quieras. Dos casillas no pueden compartir tecla: si la reasignas, se la quitas a la otra. Esc cancela, Retroceso borra.",
  "gear.hotkeys.enabled.label": "Apostar con números",
  "gear.hotkeys.enabled.hintOn": "Las teclas están vivas mientras se apuesta. Presionar la tecla de una casilla apuesta al instante.",
  "gear.hotkeys.enabled.hintOff": "Las teclas están apagadas. Presionar la tecla de una casilla no apuesta nada.",
  "gear.hotkeys.enabled.hintUnset": "Todavía sin decidir. Activa las teclas aquí, o presiona la tecla de una casilla mientras apuestas y elige Activar.",
  "gear.hotkeys.listAria": "Atajos de apuesta por casilla",
  "gear.hotkeys.tileLabel": "Casilla {n}",
  "gear.hotkeys.pressKeyPrompt": "Presiona una tecla…",
  "gear.hotkeys.setKey": "Fijar tecla",
  "gear.hotkeys.clear": "Borrar",
  "gear.hotkeys.ariaPressToBind": "Presiona una tecla para asignarla a la Casilla {n}",
  "gear.hotkeys.ariaShortcut": "Atajo de la Casilla {n}: {key}. Haz clic para reasignarlo.",
  "gear.hotkeys.ariaNoShortcut": "La Casilla {n} no tiene atajo. Haz clic para ponerle uno.",
  "gear.hotkeys.ariaClearShortcut": "Borrar el atajo de la Casilla {n}",
  "gear.hotkeys.unboundWarning": "{list} se quedó sin tecla. Esas casillas no tienen atajo hasta que les pongas uno.",
  "gear.hotkeys.resetButton": "Restablecer",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "secciones de attn ROYALE",
  "nav.board": "TABLERO",
  "nav.results": "RESULTADOS",
  "nav.rankingsFull": "CLASIFICACIÓN",
  "nav.rankingsShort": "PUESTOS",
  "nav.collectionFull": "COLECCIÓN",
  "nav.collectionShort": "CARTAS",
  "nav.profile": "PERFIL",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Tablero",
  "mobileNav.results": "Resultados",
  "mobileNav.ladder": "Puestos",
  "mobileNav.collection": "Colección",
  "mobileNav.profile": "Perfil",
  "mobileNav.docs": "Guías",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // Route chrome: header status cluster, the KPI rail (TIGHT labels, fixed
  // width), the board panel's region label + phase line, the logged-out
  // invitation and the phone-only drawer toggles.
  "shell.route.aria": "Laboratorio attn ROYALE",
  "shell.header.statusAria": "Estado de la ronda",
  "shell.header.collapse": "Ocultar encabezado",
  "shell.header.expand": "Mostrar encabezado",
  "shell.header.round": "Ronda #{n}",
  "shell.header.turboTitle": "Ritmo de ronda acelerado",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Resumen de la ronda",
  "shell.metrics.totalPool": "Pozo total",
  "shell.metrics.packsLive": "Packs en vivo",
  "shell.metrics.yourStake": "Tu apuesta",
  "shell.metrics.selectedBet": "Apuesta elegida",
  "shell.board.aria": "Tablero de attn ROYALE",
  "shell.board.label": "Tablero",
  "shell.board.phaseOpen": "Haz clic en cualquier casilla para apostarle, el dinero se rearma en la mejor pila de packs",
  "shell.board.phaseLock": "Bloqueada · abriendo packs",
  "shell.board.phaseSettled": "Ronda liquidada",
  "shell.board.metaOpen": "Pozo de {pool} · el 3% alimenta la Cacería · los packs se abren al bloqueo",
  "shell.board.metaClosed": "Una sola casilla se lleva el pozo por sorteo ponderado verificable.",
  "shell.board.reopenReveal": "↗ Reabrir la revelación",
  "shell.connectNudge":
    "Entra al juego y deposita para empezar a apostarle a las casillas. Las rondas siguen corriendo de fondo.",
  "shell.decision.cardFallback": "tu carta",
  "shell.mobile.close": "Cerrar",
  "shell.mobile.chat": "Chat",
  "shell.mobile.chatOpenAria": "Abrir el chat de la mesa",
  "shell.mobile.chatCloseAria": "Cerrar el chat de la mesa",
  "shell.mobile.cards": "Cartas",
  "shell.mobile.cardsOpenAria": "Abrir tus cartas para venderlas o retirarlas",
  "shell.mobile.cardsCloseAria": "Cerrar tus cartas",
  "shell.mobile.players": "Jugadores",
  "shell.mobile.playersOpenAria": "Abrir jugadores, ordenados por apuesta",
  "shell.mobile.playersCloseAria": "Cerrar jugadores",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" stay verbatim.
  "runtime.rail.gameUsdc": "USDC de juego",
  "runtime.rail.privySessionCredit": "crédito de sesión Privy",
  "runtime.rail.houseCredit": "crédito de la casa",
  "runtime.rail.connectPrivy": "Conecta Privy para sumar USDC de juego",
  "runtime.rail.privySession": "Sesión Privy",
  "runtime.rail.depositAction": "Sumar +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Cuenta Privy",
  "runtime.rail.house": "Casa",
  "runtime.rail.depositReceipt": "Recibo {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Toca cualquier pack para apostar {amount}. Cada casilla también tiene su propio +{low} / +{high}.",
  "runtime.rail.sellBack": "Vender de vuelta → +{amount} al saldo",

  // runtime.recap.* — royaleSpectatorRecap.ts (spectator gallery: who holds
  // each settled card and what happened to it). "ATTN Protocol" is a brand.
  "runtime.recap.you": "Tú",
  "runtime.recap.topBacker": "Quien más apostó",
  "runtime.recap.topCardOutcome": "mejor carta · conservar o vender",
  "runtime.recap.backer": "Quien apostó",
  "runtime.recap.cardWon": "carta ganada",
  "runtime.recap.chaseLootReleased": "Botín de la Cacería liberado",
  "runtime.recap.theChase": "La Cacería",
  "runtime.recap.sweptIntoVault": "barrida a la bóveda",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "comisión del protocolo",
  "runtime.recap.soldBack": "Vendida de vuelta",
  "runtime.recap.intoSplit": "+{amount} al reparto",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "La conexión con X todavía no está disponible.",
  "runtime.xProfile.connected": "Conectado",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Carta desconocida",

  // runtime.winShare.* — royaleWinShareModel.ts (share-card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name.
  "runtime.winShare.headlineWon": "GANASTE",
  "runtime.winShare.headlineGrailPull": "TIRADA DE GRAIL",
  "runtime.winShare.headlineCardsWon": "CARTAS GANADAS",
  "runtime.winShare.cardInImage": "La carta va en la imagen.",
  "runtime.winShare.receiptInImage": "El recibo va en la imagen.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Los retiros están fuera de línea ahora mismo. No se movió nada de dinero.",
  "runtime.serverWallet.noSigner": "Esta sesión no tiene una billetera que firme. No se movió nada de dinero.",
  "runtime.serverWallet.nonceUnavailable": "El servidor no entregó el nonce que autoriza el retiro.",
  "runtime.serverWallet.signatureUnavailable": "La billetera no devolvió una firma sobre el nonce del retiro.",
  "runtime.serverWallet.boundaryLabel": "Los créditos de mesa y el USDC de la billetera del servidor son saldos distintos.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Este navegador no puede capturar la pantalla.",
  "runtime.video.noRecorderFormat": "Este navegador no tiene ningún formato de video para MediaRecorder.",
  "runtime.video.canceled": "Renderizado cancelado.",
  "runtime.video.unreachable": "No se pudo contactar al servicio de renderizado en {url}.",
  "runtime.video.rejected": "El servicio de renderizado rechazó esta ronda: {detail}",
  "runtime.video.requestFailed": "Falló la solicitud de renderizado ({status}).",
  "runtime.video.noJobId": "El servicio de renderizado no devolvió un id de trabajo.",
  "runtime.video.lostJob": "Se perdió el trabajo de renderizado ({status}).",
  "runtime.video.lostContact": "Se perdió el contacto con el servicio de renderizado a mitad del render.",
  "runtime.video.renderFailed": "Falló el renderizado: {error}.",
  "runtime.video.unknownError": "error desconocido",
  "runtime.video.downloadFailed": "El video quedó listo, pero no se pudo descargar.",
  "runtime.video.downloadHttpFailed": "El video quedó listo, pero falló la descarga ({status}).",
  "runtime.video.emptyVideo": "El servicio de renderizado devolvió un video vacío.",
  "runtime.video.shareTagline": "Batalla de packs con sorteo verificable. Mira la ronda:",

  // runtime.game.* — useRoyaleGame.ts (feed lines + fallback labels). These
  // are pushed into the persisted feed AT EVENT TIME, so a line already
  // written keeps the language it was written in.
  "runtime.game.roomLive": "Sala en vivo. Las rondas arrancan solas: {seconds}s abiertas y después la revelación.",
  "runtime.game.chaseVault": "la bóveda de la Cacería",
  "runtime.game.aTile": "una casilla",
  "runtime.game.aPack": "un pack",
  "runtime.game.theCard": "la carta",
  "runtime.game.collectedSplit": "Ronda {round} · cobraste {amount} USDC del reparto.",
  "runtime.game.chaseDropSplit": "Ronda {round} · la Cacería soltó {award} en tu casilla · tu parte: {amount} USDC.",
  "runtime.game.grailSecured": "Grail asegurado: {card} ({amount}) se queda en tu colección.",
  "runtime.game.keptCard": "Conservaste {card} ({amount}) → a tu colección.",
  "runtime.game.soldCardSettle": "Vendiste {card} de vuelta por {amount} USDC ({pct}% de {value}).",
  "runtime.game.roundVoidedRefund":
    "Ronda {round} anulada. No se abrió ningún pack, así que no hubo sorteo por valor de carta. Te devolvimos tu apuesta de {amount}.",
  "runtime.game.roundVoidedAll":
    "Ronda {round} anulada. No se abrió ningún pack, así que no hubo sorteo por valor de carta. Se devolvieron todas las apuestas.",
  "runtime.game.chaseFiredYours.one": "Se disparó la Cacería: {n} carta ({amount}) liberada a tu casilla {tile}.",
  "runtime.game.chaseFiredYours.other": "Se disparó la Cacería: {n} cartas ({amount}) liberadas a tu casilla {tile}.",
  "runtime.game.chaseFiredTable.one":
    "La Cacería se disparó en la ronda {round}: {award} + {n} carta cayeron en {tile}, repartidos entre quienes le apostaron.",
  "runtime.game.chaseFiredTable.other":
    "La Cacería se disparó en la ronda {round}: {award} + {n} cartas cayeron en {tile}, repartidos entre quienes le apostaron.",
  "runtime.game.cardsAssigned.one": "{n} carta asignada a ti ({amount}) → colección.",
  "runtime.game.cardsAssigned.other": "{n} cartas asignadas a ti ({amount}) → colección.",
  "runtime.game.cardPoolsLive": "Fondos de cartas en vivo: {cards} cartas en {pools} máquinas de CollectorCrypt.",
  "runtime.game.minBid": "La apuesta mínima es {amount}. Súbela e inténtalo de nuevo.",
  "runtime.game.resolveFailed": "Esta ronda no se pudo resolver, así que no se liquidó nada. La siguiente ronda empieza normal.",
  "runtime.game.stakeRefused": "Esa apuesta es demasiado grande para {tile}. No se cobró nada. Redúcela e inténtalo de nuevo.",
  "runtime.game.shortfallBack":
    "No te alcanza el USDC para apostarle {amount} a {tile}. Tienes {held}. Deposita para seguir.",
  "runtime.game.shortfallNextPack":
    "No te alcanza el USDC para completar el siguiente pack en {tile}. Hacen falta {amount} y tienes {held}. Deposita para seguir.",
  "runtime.game.youBacked": "Le apostaste {amount} a {tile}.",
  "runtime.game.packCompleted": "Completaste el siguiente pack en {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Vendiste {cards} por {amount} USDC (recompra CC) para pagar una apuesta.",
  "runtime.game.backedFunded": "Le apostaste {amount} a {tile} (pagado con tu inventario).",
  "runtime.game.demoStakesRefunded":
    "Apuestas de demo borradas: te devolvimos los {amount} que habías puesto. Empiezas en $0.",
  "runtime.game.demoStakesCleared": "Apuestas de demo borradas: empiezas cada ronda en $0 hasta que le apuestes a una casilla.",
  "runtime.game.deposited": "Depositaste {amount} USDC en tu billetera.",
  "runtime.game.referralBonus": "Bono de referido acreditado: +{amount} USDC.",
  "runtime.game.signedAndSent": "Firmaste y enviaste {amount} USDC en {cluster} · firma {sig}….",
  "runtime.game.signedNoBroadcast":
    "Firmaste {amount} USDC en {cluster} ({method}, sin transmitir a la cadena) · firma {sig}….",
  "runtime.game.soldCard": "Vendiste {card} por {amount} USDC ({pct}% de recompra).",
} as Record<string, string>;
