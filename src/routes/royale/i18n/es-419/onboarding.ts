// Spanish, Latin America (Español): "onboarding" segment. Same key set as
// en/onboarding.ts. See royaleI18n.ts's file header for the {token}
// interpolation convention and the no-em-dash / brand-terms-stay-English
// rules that apply to every locale.
//
// Segment: onboarding (RoyaleOnboardingGate.tsx, RoyaleWelcomeTour.tsx,
// RoyaleRotateGate.tsx, RoyaleSettingsOverlay.tsx chrome, royaleProfile.ts's
// validation reasons, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx, RoyaleFundShortfallToast.tsx).
//
// Terminology kept in line with board.ts / docs.ts / misc.ts: "back a tile"
// -> apostar (en/a una casilla), never "respaldar"; "pack" -> pack (the
// English loanword IS the owner's brand word, formerly "paquete");
// "graded slab" -> carta/pieza calificada (matching
// misc.cardDetail.theGrader's "el calificador"); "lock" -> bloquear/bloqueo;
// "the Chase" -> la Cacería. "attn ROYALE", "USDC", "X", "Privy" and the pack
// TIER NAMES (Starter and friends) stay English, capitalized, mid-sentence
// included.
export default {
  "onboarding.invite.medallionLabel": "invitación",
  "onboarding.invite.title": "Solo con invitación",
  "onboarding.invite.ledeStake":
    "attn ROYALE es solo con invitación por ahora. Ingresa tu código para reclamar {amount} y sentarte a la mesa.",
  "onboarding.invite.ledeStarter":
    "attn ROYALE es solo con invitación por ahora. Ingresa tu código para reclamar gratis un pack Starter de {amount} y sentarte a la mesa.",
  "onboarding.invite.inputPlaceholder": "CÓDIGO",
  "onboarding.invite.inputAriaLabel": "Código de invitación",
  "onboarding.invite.unlockButton": "Entrar",
  "onboarding.invite.hint": "¿Aún no tienes código? Pídeselo a quien te invitó, o pega tu enlace {link}.",
  "onboarding.invite.errorInvalidCode": "Ingresa el código de invitación que recibiste.",

  "onboarding.welcome.grantLabelCredit": "crédito",
  "onboarding.welcome.grantLabelStarterPack": "pack Starter",
  "onboarding.welcome.titleBack": "Hola de nuevo",
  "onboarding.welcome.title": "Bienvenido a la mesa",
  "onboarding.welcome.backLede": "Retoma donde lo dejaste, {name}. Tu perfil y tu saldo quedaron guardados en este dispositivo.",
  "onboarding.welcome.fallbackName": "jugador",
  "onboarding.welcome.ledeStake": "Tu invitación te da {amount} para apostar. Elige un nombre y toma asiento.",
  "onboarding.welcome.ledeStarter": "Tu invitación te da un pack Starter de {amount} gratis. Apuesta packs y toma asiento.",
  "onboarding.welcome.continueWithX": "Continuar con X",
  "onboarding.welcome.optionalHint": "opcional",
  "onboarding.welcome.connectWallet": "Conectar una billetera",
  "onboarding.welcome.playFreeNote": "Juega gratis ahora mismo. No necesitas billetera ni iniciar sesión.",
  "onboarding.welcome.or": "o",
  "onboarding.welcome.continueAsTemplate": "Continuar como {name}",
  "onboarding.welcome.fallbackProfileName": "tu perfil",
  "onboarding.welcome.close": "Cerrar",
  "onboarding.welcome.createProfile": "Crea tu perfil",
  "onboarding.welcome.skipGuest": "Omitir y jugar como invitado",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Jugar ahora",
  "onboarding.welcome.pickNameFirst": "O elige un nombre primero",

  "onboarding.profile.title": "Arma tu perfil",
  "onboarding.profile.xPhotoAlt": "Tu foto de perfil de X",
  "onboarding.profile.connectedAsTemplate": "Conectado como {handle}",
  "onboarding.profile.xAccountFallback": "cuenta de X",
  "onboarding.profile.walletLabelTemplate": "Billetera {address}",
  "onboarding.profile.displayNameLabel": "Nombre visible",
  "onboarding.profile.displayNamePlaceholder": "¿Cómo quieres que te llamemos?",
  "onboarding.profile.handleLabel": "Usuario",
  "onboarding.profile.handlePlaceholder": "tunombre",
  "onboarding.profile.handleHint": "Tu identificador único en la mesa. Letras, números y guiones bajos.",
  "onboarding.profile.handleTaken": "Ese usuario ya está ocupado en este dispositivo.",
  "onboarding.profile.startButtonTemplate": "Empezar a jugar · {amount} de la casa",
  "onboarding.profile.back": "Atrás",
  "onboarding.profile.skip": "Omitir",

  "onboarding.tour.ariaLabel": "Cómo funciona attn ROYALE",
  "onboarding.tour.skip": "Omitir",
  "onboarding.tour.step1.eyebrow": "01 · Apuesta a una casilla",
  "onboarding.tour.step1.titleUsdc": "Apuesta USDC a las casillas que te gusten",
  "onboarding.tour.step1.titlePacks": "Apuesta packs a las casillas que te gusten",
  "onboarding.tour.step1.bodyUsdc":
    "Cada casilla es un espacio al que le apuestas USDC. Mientras más pongas en una casilla, más grande es tu parte de lo que gane. Cárgale todo a una, o repártelo entre varias.",
  "onboarding.tour.step1.bodyPacks":
    "Cada casilla es un espacio al que le apuestas packs. Mientras más packs le apiles, más grande es tu parte de lo que gane. Cárgale todo a una, o repártelo entre varias.",
  "onboarding.tour.step2.eyebrow": "02 · Bloqueo y apertura",
  "onboarding.tour.step2.title": "Al bloquearse, cada casilla abre sus packs",
  "onboarding.tour.step2.body":
    "Cuando la ronda se bloquea, cada casilla con apuestas rompe sus packs y saca cartas calificadas reales en vivo, con un sorteo verificable, frente a ti.",
  "onboarding.tour.step3.eyebrow": "03 · Gana el mejor valor",
  "onboarding.tour.step3.title": "La casilla más rica se lleva el pozo",
  "onboarding.tour.step3.bodyUsdc":
    "El peso de cada casilla es el valor de las cartas que sacó más su USDC. Mientras más pesada la casilla, mejor su probabilidad. Si gana, te repartes todo el pozo de la ronda.",
  "onboarding.tour.step3.bodyPacks":
    "El peso de cada casilla es el valor de las cartas que sacó más los packs apostados en ella. Mientras más pesada la casilla, mejor su probabilidad. Si gana, te repartes todo el pozo de la ronda.",
  "onboarding.tour.step4.eyebrow": "04 · Conservar, vender, cazar",
  "onboarding.tour.step4.title": "Cobra y sigue la Cacería",
  "onboarding.tour.step4.body":
    "Quédate con tus cartas ganadoras como piezas calificadas o véndelas a su tasa de recompra. Y la Cacería es un pozo acumulado que puede caer en cualquier casilla, en cualquier ronda.",
  "onboarding.tour.back": "Atrás",
  "onboarding.tour.next": "Siguiente",
  "onboarding.tour.enterBoard": "Entrar al tablero",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary (casilla,
  // pack, pozo, ronda, apostar; tuteo).
  "onboarding.tour.stepTag": "Paso {n} de {total}",
  "onboarding.tour.spot1.eyebrow": "Tu apuesta",
  "onboarding.tour.spot1.title": "Elige tu pack",
  "onboarding.tour.spot1.body": "Los packs son tu apuesta. Cada uno es un pack sellado de cartas TCG graduadas, impulsado por Collector Crypt. Elige el pack con el que quieres jugar.",
  "onboarding.tour.spot2.eyebrow": "Tamaño de la pila",
  "onboarding.tour.spot2.title": "Elige cuántos",
  "onboarding.tour.spot2.body": "Este contador define cuántos packs pone cada apuesta. Con uno alcanza para empezar. Súbelo cuando quieras apostar más fuerte.",
  "onboarding.tour.spot3.eyebrow": "Haz tu apuesta",
  "onboarding.tour.spot3.title": "Haz clic en una casilla para apostarla",
  "onboarding.tour.spot3.titleTouch": "Toca una casilla para apostarla",
  "onboarding.tour.spot3.body": "Al hacer clic en una casilla pones tus packs en ella. Cuantos más packs apiles en una casilla, mayor es tu parte si gana. Cárgale todo a una o repártelos entre varias.",
  "onboarding.tour.spot3.bodyTouch": "Toca una casilla para prepararla y tócala de nuevo para confirmar la apuesta. Cuantos más packs apiles en una casilla, mayor es tu parte si gana.",
  "onboarding.tour.spot4.eyebrow": "La ronda",
  "onboarding.tour.spot4.title": "El pozo y el reloj",
  "onboarding.tour.spot4.body": "Cada pack apostado en el tablero alimenta este pozo. Cuando el reloj llega a cero, las apuestas se bloquean y cada casilla apostada abre sus packs en vivo.",
  "onboarding.tour.spot5.eyebrow": "El sorteo",
  "onboarding.tour.spot5.title": "Las casillas pesadas ganan más seguido",
  "onboarding.tour.spot5.body": "Un sorteo aleatorio ponderado por valor elige una casilla. Las casillas perdedoras entregan sus cartas y apuestas; quienes apostaron por la ganadora se reparten el valor distribuible de la ronda en proporción a lo que aportaron.",
  "onboarding.tour.spot6.eyebrow": "Tu dinero",
  "onboarding.tour.spot6.title": "Saldo y depósitos",
  "onboarding.tour.spot6.body": "Tu saldo vive aquí. Agrega fondos con Depositar y retira cuando quieras. Las ganancias llegan aquí apenas se liquida la ronda.",
  "onboarding.tour.spot7.eyebrow": "Por cuenta de la casa",
  "onboarding.tour.spot7.title": "Tu pack Starter de {amount} gratis",
  "onboarding.tour.spot7.body": "Empiezas con un pack Starter de {amount} gratis. Ya está cargado en el selector. Elige una casilla y juega.",
  "onboarding.tour.finish": "Empezar a jugar",
 "onboarding.tour.paused": "La ronda comienza - continuaremos justo después.",
  "onboarding.tour.act2.choice": "Mira una ronda en acción",
  "onboarding.tour.act2.choiceHint": "Unos 30 segundos, con el reveal",
  "onboarding.tour.act2.bettingTitle": "Cada pack apostado forma un solo pozo",
  "onboarding.tour.act2.bettingBody": "Los jugadores apilan packs en las casillas. Cada pack del tablero alimenta un solo pozo, y una casilla se lo lleva todo.",
  "onboarding.tour.act2.drawTitle": "El valor se vuelve probabilidad",
  "onboarding.tour.act2.drawBody": "La parte de cada casilla en el valor de todas las cartas sacadas es su chance. Un único sorteo aleatorio, verificable y ponderado por valor elige a la ganadora.",
  "onboarding.tour.act2.losersTitle": "Cada casilla perdedora entrega sus cartas",
  "onboarding.tour.act2.losersBody": "Las cartas y el efectivo distribuibles de todo el tablero pasan a quienes apostaron por la casilla ganadora.",
  "onboarding.tour.act2.splitTitle": "Tu apuesta define tu tajada",
  "onboarding.tour.act2.splitBody": "Quienes apostaron por la casilla ganadora se reparten el efectivo y las cartas distribuibles de la ronda provenientes de todas las casillas, en proporción a lo que cada uno aportó a esa casilla.",
  "onboarding.tour.act2.grailCaption": "La ceremonia del grail",
  "onboarding.tour.act2.yourTurnEyebrow": "Tu turno",
  "onboarding.tour.act2.yourTurnTitle": "Tu pack Starter está listo",
  "onboarding.tour.act2.yourTurnBody": "El tablero vuelve a estar en vivo. Elige una casilla y coloca tu primera apuesta de pack.",
  "onboarding.tour.act2.continue": "Entrar a la ronda",

  "onboarding.rotate.ariaLabel": "Gira tu teléfono para jugar attn ROYALE",
  "onboarding.rotate.title": "Gira tu teléfono de lado",
  "onboarding.rotate.body": "El tablero se juega mejor en horizontal. Gíralo para entrar a la ronda.",

  "onboarding.settingsTitle": "Ajustes",
  "onboarding.settingsClose": "Cerrar ajustes",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  "onboarding.profileValidation.handleRequired": "Elige un usuario para que otros jugadores te encuentren.",
  "onboarding.profileValidation.handleTooShort": "El usuario lleva al menos 3 caracteres.",
  "onboarding.profileValidation.handleCharset": "Usa solo letras, números y guiones bajos.",
  "onboarding.profileValidation.nameRequired": "Agrega un nombre para mostrar en la mesa.",
  "onboarding.profileValidation.nameTooLong": "Que no pase de {n} caracteres.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  "onboarding.presence.tierWatching": "mirando",
  "onboarding.presence.tierPlaying": "jugando",
  "onboarding.presence.youPlaying": "Estás jugando: {amount} apostados esta ronda",
  "onboarding.presence.youWatching": "Estás mirando",
  "onboarding.presence.youWatchingBackground": "Estás mirando (pestaña en segundo plano)",
  "onboarding.presence.ariaLabel": "{count} {tier} attn ROYALE ahora mismo. {you}.",
  "onboarding.presence.popYou": "Tú: {status}",
  "onboarding.presence.otherTabs.one": "+{n} pestaña tuya más abierta",
  "onboarding.presence.otherTabs.other": "+{n} pestañas tuyas más abiertas",
  "onboarding.presence.othersBacking.one": "{n} persona más apostando a una casilla esta ronda",
  "onboarding.presence.othersBacking.other": "{n} personas más apostando a una casilla esta ronda",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Estado de la transmisión de attn ROYALE",
  "onboarding.streamHud.eyebrow": "Señal",
  "onboarding.streamHud.statusConnecting": "Conectando",
  "onboarding.streamHud.statusLive": "En vivo",
  "onboarding.streamHud.statusReconnecting": "Reconectando",
  "onboarding.streamHud.statusError": "Sin sincronía",
  "onboarding.streamHud.reconnects.one": "{n} reconexión",
  "onboarding.streamHud.reconnects.other": "{n} reconexiones",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "Esta sala liquida en USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Cartas abiertas",
  "onboarding.carousel.prevCard": "Carta anterior",
  "onboarding.carousel.nextCard": "Carta siguiente",
  "onboarding.carousel.showCard": "Mostrar {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "USDC INSUFICIENTE",
  "onboarding.fundShortfall.detail": "Apostar a {slot} necesita {needed}. Tienes {balance}.",
  "onboarding.fundShortfall.addFunds": "Depositar",
  "onboarding.fundShortfall.dismiss": "Descartar",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "Toca {icon} y luego Agregar a la pantalla de inicio para una pantalla completa real.",
  "onboarding.installHint.fullscreen": "Juega en pantalla completa sin la barra del navegador.",
  "onboarding.installHint.fullscreenCta": "Pantalla completa",
  "onboarding.installHint.dismiss": "Descartar",
} as Record<string, string>;
