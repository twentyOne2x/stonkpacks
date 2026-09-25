// Italian (Italiano): "onboarding" segment. Same key set as en/onboarding.ts.
// Owns RoyaleOnboardingGate.tsx (invite + Starter pack + profile gate),
// RoyaleWelcomeTour.tsx (the 4-step how-it-works tour), RoyaleRotateGate.tsx,
// RoyaleSettingsOverlay.tsx's chrome, plus royaleProfile.ts's validation
// reasons, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx and
// RoyaleFundShortfallToast.tsx. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
//
// Register: INFORMAL "tu" throughout.
//
// NOTE: the "attn ROYALE" wordmark is never translated. "Starter" (the pack
// tier name) is a brand term and stays English inside
// onboarding.invite.ledeStarter / onboarding.welcome.ledeStarter, as do the
// other four tier names.
//
// Terminology (kept consistent with board/misc/docs/arena/chat): "pack(s)" ->
// "pack" (the English loanword is the owner's brand word; invariable in the
// plural like every consonant-final loanword: "i pack"), "tile" -> "casella", "bet" ->
// "puntata/puntare", "pool" -> "montepremi", "the Chase" -> "la Caccia",
// "handle" -> "nickname" (what an Italian player actually calls it, and it
// fits the field label better than "nome utente").
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step ----------------------------
  "onboarding.invite.medallionLabel": "invito",
  "onboarding.invite.title": "Solo su invito",
  // {amount} is the ONLY token - the component bolds just the dollar figure,
  // so the surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake":
    "Per ora si entra in attn ROYALE solo su invito. Inserisci il codice per prenderti {amount} di puntata e sederti al tavolo.",
  "onboarding.invite.ledeStarter":
    "Per ora si entra in attn ROYALE solo su invito. Inserisci il codice per prenderti un pack Starter da {amount} gratis e sederti al tavolo.",
  "onboarding.invite.inputPlaceholder": "CODICE INVITO",
  "onboarding.invite.inputAriaLabel": "Codice invito",
  "onboarding.invite.unlockButton": "Sblocca",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated).
  "onboarding.invite.hint": "Non ce l'hai? Chiedilo a chi ti ha invitato, oppure incolla il tuo link {link}.",
  "onboarding.invite.errorInvalidCode": "Inserisci il codice che hai ricevuto con l'invito.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "credito",
  "onboarding.welcome.grantLabelStarterPack": "pack Starter",
  "onboarding.welcome.titleBack": "Bentornato",
  "onboarding.welcome.title": "Benvenuto al tavolo",
  "onboarding.welcome.backLede": "Riparti da dove eri rimasto, {name}. Profilo e saldo sono salvati su questo dispositivo.",
  "onboarding.welcome.fallbackName": "giocatore",
  "onboarding.welcome.ledeStake": "Il tuo invito vale {amount} di puntata. Scegli un nome e siediti al tavolo.",
  "onboarding.welcome.ledeStarter": "Il tuo invito vale un pack Starter da {amount} gratis. Punta pack e siediti al tavolo.",
  "onboarding.welcome.continueWithX": "Continua con X",
  "onboarding.welcome.optionalHint": "facoltativo",
  "onboarding.welcome.connectWallet": "Connetti un wallet",
  "onboarding.welcome.playFreeNote": "Gioca gratis subito. Non serve né wallet né registrazione.",
  "onboarding.welcome.or": "oppure",
  "onboarding.welcome.continueAsTemplate": "Continua come {name}",
  "onboarding.welcome.fallbackProfileName": "il tuo profilo",
  "onboarding.welcome.close": "Chiudi",
  "onboarding.welcome.createProfile": "Crea il tuo profilo",
  "onboarding.welcome.skipGuest": "Salta e gioca come ospite",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Gioca ora",
  "onboarding.welcome.pickNameFirst": "Oppure scegli prima un nome",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Crea il tuo profilo",
  "onboarding.profile.xPhotoAlt": "La tua foto profilo X",
  "onboarding.profile.connectedAsTemplate": "Connesso come {handle}",
  "onboarding.profile.xAccountFallback": "account X",
  "onboarding.profile.walletLabelTemplate": "Wallet {address}",
  "onboarding.profile.displayNameLabel": "Nome visualizzato",
  "onboarding.profile.displayNamePlaceholder": "Come ti chiamiamo?",
  "onboarding.profile.handleLabel": "Nickname",
  "onboarding.profile.handlePlaceholder": "iltuonome",
  "onboarding.profile.handleHint": "Il tuo identificativo unico al tavolo. Lettere, numeri e trattini bassi.",
  "onboarding.profile.handleTaken": "Questo nickname è già in uso su questo dispositivo.",
  "onboarding.profile.startButtonTemplate": "Inizia a giocare · {amount} offerti dal banco",
  "onboarding.profile.back": "Indietro",
  "onboarding.profile.skip": "Salta",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "Come funziona attn ROYALE",
  "onboarding.tour.skip": "Salta",
  "onboarding.tour.step1.eyebrow": "01 · Punta una casella",
  "onboarding.tour.step1.titleUsdc": "Metti USDC sulle caselle che ti piacciono",
  "onboarding.tour.step1.titlePacks": "Punta pack sulle caselle che ti piacciono",
  "onboarding.tour.step1.bodyUsdc":
    "Ogni casella è una postazione su cui punti USDC. Più metti su una casella, più grande è la tua quota delle sue vincite. Carica tutto su una sola, oppure spargi su qualcuna.",
  "onboarding.tour.step1.bodyPacks":
    "Ogni casella è una postazione su cui punti pack. Più ne accumuli su una casella, più grande è la tua quota delle sue vincite. Carica tutto su una sola, oppure spargi su qualcuna.",
  "onboarding.tour.step2.eyebrow": "02 · Blocco e apertura",
  "onboarding.tour.step2.title": "Al blocco ogni casella apre i suoi pack",
  "onboarding.tour.step2.body":
    "Quando il round si blocca, ogni casella puntata strappa i suoi pack e tira fuori vere carte gradate dal vivo, con un'estrazione verificabile, proprio davanti a te.",
  "onboarding.tour.step3.eyebrow": "03 · Vince chi vale di più",
  "onboarding.tour.step3.title": "La casella più ricca si prende il montepremi",
  "onboarding.tour.step3.bodyUsdc":
    "Il peso di una casella è il valore delle carte che ha aperto più i suoi USDC. Più pesa, migliori sono le sue probabilità. Se vince, ti dividi l'intero montepremi del round.",
  "onboarding.tour.step3.bodyPacks":
    "Il peso di una casella è il valore delle carte che ha aperto più i pack puntati su di essa. Più pesa, migliori sono le sue probabilità. Se vince, ti dividi l'intero montepremi del round.",
  "onboarding.tour.step4.eyebrow": "04 · Tieni, vendi, caccia",
  "onboarding.tour.step4.title": "Incassa e tieni d'occhio la Caccia",
  "onboarding.tour.step4.body":
    "Tieniti le carte vinte come slab gradati oppure rivendile al loro tasso di riacquisto. E la Caccia è un jackpot progressivo che può cadere su qualsiasi casella, in qualsiasi round.",
  "onboarding.tour.back": "Indietro",
  "onboarding.tour.next": "Avanti",
  "onboarding.tour.enterBoard": "Entra nel tabellone",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary (casella,
  // pack, montepremi, round, puntare; tu).
  "onboarding.tour.stepTag": "Passo {n} di {total}",
  "onboarding.tour.spot1.eyebrow": "La tua puntata",
  "onboarding.tour.spot1.title": "Scegli il tuo pack",
  "onboarding.tour.spot1.body": "Scommetti con i pack. Ognuno è un pack sigillato di carte TCG certificate, powered by Collector Crypt. Scegli il pack con cui vuoi giocare.",
  "onboarding.tour.spot2.eyebrow": "Dimensione della pila",
  "onboarding.tour.spot2.title": "Scegli quanti",
  "onboarding.tour.spot2.body": "Questo contatore decide quanti pack posa ogni puntata. Uno basta per iniziare. Alzalo quando vuoi puntare di più.",
  "onboarding.tour.spot3.eyebrow": "Piazza la puntata",
  "onboarding.tour.spot3.title": "Clicca una casella per puntarla",
  "onboarding.tour.spot3.titleTouch": "Tocca una casella per puntarla",
  "onboarding.tour.spot3.body": "Cliccando una casella ci metti i tuoi pack. Più pack impili su una casella, più grande è la tua parte se vince. Carica tutto su una o distribuisci su più caselle.",
  "onboarding.tour.spot3.bodyTouch": "Tocca una casella per prepararla, poi toccala di nuovo per confermare la puntata. Più pack impili su una casella, più grande è la tua parte se vince.",
  "onboarding.tour.spot4.eyebrow": "Il round",
  "onboarding.tour.spot4.title": "Il montepremi e il timer",
  "onboarding.tour.spot4.body": "Ogni pack puntato sul tabellone alimenta questo montepremi. Quando il timer arriva a zero, le puntate si bloccano e ogni casella puntata apre i suoi pack in diretta.",
  "onboarding.tour.spot5.eyebrow": "L'estrazione",
  "onboarding.tour.spot5.title": "Le caselle pesanti vincono più spesso",
  "onboarding.tour.spot5.body": "Un'estrazione casuale ponderata per valore sceglie una casella. Le caselle perdenti cedono carte e puntate; i sostenitori della casella vincente si dividono il valore distribuibile del round in proporzione a quanto hanno puntato.",
  "onboarding.tour.spot6.eyebrow": "I tuoi soldi",
  "onboarding.tour.spot6.title": "Saldo e depositi",
  "onboarding.tour.spot6.body": "Il tuo saldo vive qui. Aggiungi fondi con Deposita e preleva quando vuoi. Le vincite arrivano qui appena il round viene liquidato.",
  "onboarding.tour.spot7.eyebrow": "Offerto dalla casa",
  "onboarding.tour.spot7.title": "Il tuo pack Starter da {amount} gratis",
  "onboarding.tour.spot7.body": "Parti con un pack Starter da {amount} gratis. È già caricato nel selettore. Scegli una casella e gioca.",
  "onboarding.tour.finish": "Inizia a giocare",
 "onboarding.tour.paused": "Il round sta iniziando - riprenderemo subito dopo.",
  "onboarding.tour.act2.choice": "Guarda un round in azione",
  "onboarding.tour.act2.choiceHint": "Circa 30 secondi, reveal incluso",
  "onboarding.tour.act2.bettingTitle": "Ogni pack puntato forma un solo montepremi",
  "onboarding.tour.act2.bettingBody": "I giocatori accumulano pack sulle caselle. Ogni pack sul tavolo alimenta un solo montepremi, e una casella si prende tutto.",
  "onboarding.tour.act2.drawTitle": "Il valore diventa la quota",
  "onboarding.tour.act2.drawBody": "La quota di ogni casella sul valore di tutte le carte estratte è la sua probabilità. Un'unica estrazione casuale, verificabile e ponderata per valore, sceglie la vincitrice.",
  "onboarding.tour.act2.losersTitle": "Ogni casella perdente cede le proprie carte",
  "onboarding.tour.act2.losersBody": "Le carte e i contanti distribuibili dell'intero tabellone passano ai sostenitori della casella vincente.",
  "onboarding.tour.act2.splitTitle": "La tua puntata decide la tua fetta",
  "onboarding.tour.act2.splitBody": "I sostenitori della casella vincente si dividono i contanti e le carte distribuibili del round provenienti da tutte le caselle, in proporzione a quanto ciascuno ha puntato su quella casella.",
  "onboarding.tour.act2.grailCaption": "La cerimonia del grail",
  "onboarding.tour.act2.yourTurnEyebrow": "Tocca a te",
  "onboarding.tour.act2.yourTurnTitle": "Il tuo Starter pack è pronto",
  "onboarding.tour.act2.yourTurnBody": "Il tabellone è di nuovo live. Scegli una casella e piazza la tua prima puntata pack.",
  "onboarding.tour.act2.continue": "Entra nel round",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "Ruota il telefono per giocare a attn ROYALE",
  "onboarding.rotate.title": "Gira il telefono di lato",
  "onboarding.rotate.body": "Il tabellone si gioca meglio in orizzontale. Gira lo schermo per entrare nel round.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only) --------------
  "onboarding.settingsTitle": "Impostazioni",
  "onboarding.settingsClose": "Chiudi impostazioni",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "Scegli un nickname così gli altri giocatori ti trovano.",
  "onboarding.profileValidation.handleTooShort": "Il nickname deve avere almeno 3 caratteri.",
  "onboarding.profileValidation.handleCharset": "Usa solo lettere, numeri e trattini bassi.",
  "onboarding.profileValidation.nameRequired": "Aggiungi un nome da mostrare al tavolo.",
  "onboarding.profileValidation.nameTooLong": "Resta sotto i {n} caratteri.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "spettatori",
  "onboarding.presence.tierPlaying": "in gioco",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "Stai giocando: {amount} puntati in questo round",
  "onboarding.presence.youWatching": "Stai guardando",
  "onboarding.presence.youWatchingBackground": "Stai guardando (scheda in secondo piano)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark.
  "onboarding.presence.ariaLabel": "{count} {tier} su attn ROYALE in questo momento. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "Tu: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} tua scheda aperta",
  "onboarding.presence.otherTabs.other": "+{n} tue schede aperte",
  "onboarding.presence.othersBacking.one": "{n} altro sta puntando su una casella in questo round",
  "onboarding.presence.othersBacking.other": "{n} altri stanno puntando su una casella in questo round",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Stato dello stream di attn ROYALE",
  "onboarding.streamHud.eyebrow": "Stream",
  "onboarding.streamHud.statusConnecting": "Connessione",
  "onboarding.streamHud.statusLive": "Live",
  "onboarding.streamHud.statusReconnecting": "Riconnessione",
  "onboarding.streamHud.statusError": "Problema sync",
  "onboarding.streamHud.reconnects.one": "{n} riconnessione",
  "onboarding.streamHud.reconnects.other": "{n} riconnessioni",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "Questa sala paga in USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Carte aperte",
  "onboarding.carousel.prevCard": "Carta precedente",
  "onboarding.carousel.nextCard": "Carta successiva",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Mostra {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "USDC INSUFFICIENTI",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "Puntare su {slot} richiede {needed}. Tu hai {balance}.",
  "onboarding.fundShortfall.addFunds": "Ricarica",
  "onboarding.fundShortfall.dismiss": "Chiudi",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "Tocca {icon} e poi Aggiungi alla schermata Home per il vero schermo intero.",
  "onboarding.installHint.fullscreen": "Gioca a schermo intero senza la barra del browser.",
  "onboarding.installHint.fullscreenCta": "Schermo intero",
  "onboarding.installHint.dismiss": "Chiudi",
} as Record<string, string>;
