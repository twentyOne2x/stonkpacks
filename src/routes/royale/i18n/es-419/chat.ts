// Spanish, Latin America (Español): "chat" segment - every user-visible
// string owned by RoyaleChatPanel.tsx, RoyaleChatMessageBody.tsx,
// royaleChatModel.ts (ambient chatter pool + table-event copy) and
// royaleChatLinks.ts (chatPlatformLinkLabel). Same key set as en/chat.ts.
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-and-currency-stay-literal rules that apply to every locale.
//
// Register note: the chat.chatter.* lines are casual table talk between
// players, not UI copy, so they read as relaxed spoken LatAm Spanish
// (lowercase, contractions, slang) rather than formal UI phrasing. "Snipe" /
// "sniper" and "whale" (a big spender) are kept as established gaming-slang
// loanwords/calques, matching how LatAm trading-card and crypto communities
// already use them ("le hizo snipe", "esa ballena"). The STRUCTURED event
// rows, by contrast, use the app's own vocabulary: "pull" -> tirada (matching
// cinema.grail.pullTitle / misc.nameStats.biggestPull) and "the Chase" ->
// la Cacería (house style in every locale). "Mythic" / "Grail" are pack-tier
// brand names and stay English, capitalized, even mid-sentence; "ladder" ->
// escalera, matching docs.tech.packLadder's "Escalera de packs".
//
// LOCALE-FROZEN NOTE: chat messages (ambient bot lines + table-event rows)
// are composed ONCE at post time and stored as plain strings (live feed +
// the durable localStorage history log). Switching the UI language mid
// session translates all NEW chat activity but never rewrites messages
// already sitting in the feed/history - same as any other historical log.
// This is expected, not a bug.
export default {
  "chat.rooms.table": "Mesa",
  "chat.rooms.sendTo": "Enviar a",
  "chat.rooms.joinHint": "Apuesta en una casilla para desbloquear su sala.",
  "chat.rooms.messageTargets": "Salas del mensaje",
  "chat.composer.sendFailed": "No se envió el mensaje. Intenta de nuevo.",
  "chat.composer.audienceChanged": "La sala cambió. Se borró tu mensaje sin enviar.",
  "chat.composer.sessionUnavailable": "La sesión de chat no está disponible. Actualiza e intenta de nuevo.",
  "chat.auth.tileLeadBold": "Apuesta en una casilla para chatear",
  "chat.auth.tileBody": ". La mesa y las salas de casilla se habilitan después de tu primer pack aceptado.",
  "chat.auth.sessionUnavailableBold": "La sesión de chat no está disponible",
  "chat.auth.sessionUnavailableBody": ". Actualiza para restablecer el envío seguro.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Chat de mesa",
  "chat.header.title": "Chat de mesa",
  "chat.header.fontControlAriaLabel": "Tamaño del texto del chat",
  "chat.header.fontSmaller": "Achicar el texto del chat",
  "chat.header.fontLarger": "Agrandar el texto del chat",
  "chat.header.collapseShow": "Mostrar chat",
  "chat.header.collapseHide": "Ocultar chat",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "TIRADA DE GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "RONDA #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Abre el resultado de la ronda en una pestaña nueva.",
  "chat.event.wonByPrefix": "ganado por",
  "chat.event.wonBy": "ganado por {name}",
  "chat.event.foldedIntoPot": "se sumó al pozo",
  "chat.event.roundWinsTitle": "{tile} gana {pot}",
  "chat.event.bestPull": "mejor tirada {name} ({value})",
  "chat.event.chaseAward": "Cacería +{amount}",
  "chat.event.youWon": "tú +{amount}",
  "chat.event.youLost": "perdiste",
  "chat.message.showOriginal": "traducido · ver original",
  "chat.message.showTranslation": "ver traducción",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Ir a lo último",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Aquí solo se muestran enlaces de attn.",
  "chat.composer.rateLimitNotice": "Vas muy rápido. Intenta de nuevo en un momento.",
  "chat.composer.placeholder": "Escribe algo…",
  "chat.composer.inputAriaLabel": "Mensaje de chat",
  "chat.composer.sendAriaLabel": "Enviar mensaje",
  "chat.composer.sendLabel": "Enviar",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Inicia sesión para chatear",
  "chat.auth.body": ", la sala es de solo lectura hasta que te conectes (arriba a la derecha).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Abre la página de la carta en una pestaña nueva",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Abre la página de la carta en una pestaña en segundo plano.",
  "chat.messageBody.viewCard": "Ver carta",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Página de carta",
  "chat.link.roundResult": "Resultado de ronda",
  "chat.link.profile": "Perfil",
  "chat.link.collection": "Colección",
  "chat.link.theBoard": "El tablero",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "la casilla 3 se está llenando rapidísimo",
  "chat.chatter.line02": "quién le sigue haciendo snipe al líder cada ronda",
  "chat.chatter.line03": "esa tirada de Grail de la ronda pasada fue una locura",
  "chat.chatter.line04": "rally fácil, todos encima del líder",
  "chat.chatter.line05": "la casilla 7 recién abierta se ve barata",
  "chat.chatter.line06": "me guardo los packs para los últimos cinco segundos",
  "chat.chatter.line07": "alguien acaba de tirar $250 en la casilla 2, respeto",
  "chat.chatter.line08": "la parte del pozo en la casilla 6 está carísima ahora",
  "chat.chatter.line09": "un pack más y esa casilla sube a un nivel más caro",
  "chat.chatter.line10": "los snipers arruinándome la probabilidad otra vez",
  "chat.chatter.line11": "puras cartas de piso, ya me toca una tirada grande",
  "chat.chatter.line12": "ojo con la ballena, siempre le atina a la casilla ganadora",
  "chat.chatter.line13": "la casilla 1 no cae en toda la sesión, ya le toca",
  "chat.chatter.line14": "vendí al instante lo último que saqué, la recompra se sintió justa",
  "chat.chatter.line15": "viene un contra-snipe, anótenlo",
  "chat.chatter.line16": "el líder cambió dos veces en los últimos diez segundos",
  "chat.chatter.line17": "¿alguien más va por la escalera Mythic esta noche?",
  "chat.chatter.line18": "me quedé la carta, ese arte estaba demasiado bueno para venderlo",
  "chat.chatter.line19": "los packs de último minuto nunca reinician el reloj, me encanta",
  "chat.chatter.line20": "el pozo de la casilla 8 se acaba de duplicar, algo se cocina",
  "chat.chatter.line21": "packs chicos temprano, grandes al final, es la única forma de jugar",
  "chat.chatter.line22": "ese contador de conservar o vender siempre me agarra",
  "chat.chatter.line23": "los que vienen atrás pagan mejor que el líder ahora mismo",
  "chat.chatter.line24": "snipe limpio en la casilla 5, quirúrgico",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Panel de la mesa",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "Mi actividad",
  "chat.activity.ariaLabel": "Mi actividad privada",
  "chat.activity.filtersAria": "Filtrar actividad",
  "chat.activity.filter.all": "Todo",
  "chat.activity.filter.packs": "Packs",
  "chat.activity.filter.bids": "Apuestas",
  "chat.activity.filter.rewards": "Premios",
  "chat.activity.filter.feats": "Logros",
  "chat.activity.filter.clan": "Clan",
  "chat.activity.today": "Hoy",
  "chat.activity.yesterday": "Ayer",
  "chat.activity.status.pending": "Pendiente",
  "chat.activity.status.finalized": "Finalizado",
  "chat.activity.status.reversed": "Revertido",
  "chat.activity.finalizedAria": "Recibo finalizado",
  "chat.activity.signInTitle": "Inicia sesión para ver tu historial",
  "chat.activity.signInBody": "Aquí aparecen tus recibos privados de packs, apuestas, premios, logros y actividades del clan.",
  "chat.activity.loading": "Cargando tus recibos",
  "chat.activity.loadOlder": "Cargar anteriores",
  "chat.activity.points": "{points} puntos",
  "chat.activity.event.packBid.title": "Pack jugado",
  "chat.activity.event.packBid.detail": "Entrada en la casilla {tile} finalizada.",
  "chat.activity.event.roundWon.title": "Casilla ganadora",
  "chat.activity.event.roundWon.detail": "La casilla {tile} ganó esta ronda.",
  "chat.activity.event.roundLost.title": "Ronda liquidada",
  "chat.activity.event.roundLost.detail": "La casilla {tile} no ganó esta ronda.",
  "chat.activity.event.roundRefunded.title": "Pack reembolsado",
  "chat.activity.event.roundRefunded.detail": "Se devolvió la apuesta de la casilla {tile}.",
  "chat.activity.event.chaseWon.title": "Cacería ganada",
  "chat.activity.event.chaseWon.detail": "La Cacería del tablero pagó el premio.",
  "chat.activity.event.achievementDetail": "Se desbloqueó con tu juego.",
  "chat.activity.event.clanAchievementDetail": "Se desbloqueó con tu clan.",
  "chat.activity.unavailableTitle": "La actividad no está disponible",
  "chat.activity.unavailableBody": "No se pudieron cargar tus recibos. Intenta abrir de nuevo el feed privado en un momento.",
  "chat.activity.retry": "Intentar de nuevo",
  "chat.activity.emptyTitle": "Aún no hay nada",
  "chat.activity.emptyBody": "Aquí aparecerán las acciones finalizadas de packs, apuestas, premios, logros y actividades del clan.",
  "chat.unlock.eyebrow": "Logro desbloqueado",
  "chat.unlock.clanEyebrow": "Logro de clan desbloqueado",
  "chat.unlock.dismiss": "Cerrar logro",
} as Record<string, string>;
