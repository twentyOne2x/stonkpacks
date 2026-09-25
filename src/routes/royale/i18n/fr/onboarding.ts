// French (Français): "onboarding" segment, reviewed end to end by a native
// speaker (editorial pass, not a machine translation). Same key set as
// en/onboarding.ts. See royaleI18n.ts for the {token} interpolation
// convention and the "no em dash" rule.
//
// Segment: onboarding (RoyaleOnboardingGate.tsx, RoyaleWelcomeTour.tsx,
// RoyaleRotateGate.tsx, RoyaleSettingsOverlay.tsx chrome, royaleProfile.ts
// validation, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx, RoyaleFundShortfallToast.tsx).
//
// Terminology (binding across every fr segment, realigned in this pass):
// "tuile" for tile (this file previously said "case", which clashed with
// board/docs/cinema/chat), the English loanword "pack" for the generic pack
// noun (owner brand word, formerly "paquet"), "manche" for round, "cagnotte"
// for pool, "mise/miser" for
// bet/stake, "pseudo" for the handle. The "attn ROYALE" wordmark and the
// five pack-tier brand names (Starter, Elite, Legendary, Grail, Mythic)
// stay English inside translated sentences.
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "invitation",
  "onboarding.invite.title": "Sur invitation",
  // {amount} is the ONLY token: the component bolds just the dollar figure.
  "onboarding.invite.ledeStake":
    "attn ROYALE est encore sur invitation. Entrez votre code pour récupérer une mise de {amount} et vous asseoir à la table.",
  "onboarding.invite.ledeStarter":
    "attn ROYALE est encore sur invitation. Entrez votre code pour récupérer un pack Starter de {amount} offert et vous asseoir à la table.",
  "onboarding.invite.inputPlaceholder": "CODE D'INVITATION",
  "onboarding.invite.inputAriaLabel": "Code d'invitation",
  "onboarding.invite.unlockButton": "Débloquer",
  // {link} is replaced with the bolded literal "attn.markets/r/..." fragment.
  "onboarding.invite.hint":
    "Pas encore de code ? Demandez à la personne qui vous a invité, ou collez votre lien {link}.",
  "onboarding.invite.errorInvalidCode": "Entrez le code figurant sur votre invitation.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "crédit",
  "onboarding.welcome.grantLabelStarterPack": "pack Starter",
  "onboarding.welcome.titleBack": "Bon retour",
  "onboarding.welcome.title": "Bienvenue à la table",
  "onboarding.welcome.backLede":
    "Reprenez là où vous vous étiez arrêté, {name}. Votre profil et votre solde sont enregistrés sur cet appareil.",
  "onboarding.welcome.fallbackName": "joueur",
  "onboarding.welcome.ledeStake": "Votre invitation vous donne une mise de {amount}. Choisissez un nom et prenez place.",
  "onboarding.welcome.ledeStarter":
    "Votre invitation vous donne un pack Starter de {amount} offert. Misez des packs et prenez place.",
  "onboarding.welcome.continueWithX": "Continuer avec X",
  "onboarding.welcome.optionalHint": "facultatif",
  "onboarding.welcome.connectWallet": "Connecter un portefeuille",
  "onboarding.welcome.playFreeNote": "Jouez gratuitement dès maintenant. Aucun portefeuille ni connexion requis.",
  "onboarding.welcome.or": "ou",
  "onboarding.welcome.continueAsTemplate": "Continuer comme {name}",
  "onboarding.welcome.fallbackProfileName": "votre profil",
  "onboarding.welcome.close": "Fermer",
  "onboarding.welcome.createProfile": "Créer votre profil",
  "onboarding.welcome.skipGuest": "Jouer en invité",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Jouer maintenant",
  "onboarding.welcome.pickNameFirst": "Ou choisir un nom d'abord",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Configurez votre profil",
  "onboarding.profile.xPhotoAlt": "Votre photo de profil X",
  "onboarding.profile.connectedAsTemplate": "Connecté comme {handle}",
  "onboarding.profile.xAccountFallback": "compte X",
  "onboarding.profile.walletLabelTemplate": "Portefeuille {address}",
  "onboarding.profile.displayNameLabel": "Nom affiché",
  "onboarding.profile.displayNamePlaceholder": "Comment doit-on vous appeler ?",
  "onboarding.profile.handleLabel": "Pseudo",
  "onboarding.profile.handlePlaceholder": "votrepseudo",
  "onboarding.profile.handleHint": "Votre pseudo unique à la table. Lettres, chiffres et tirets bas.",
  "onboarding.profile.handleTaken": "Ce pseudo est déjà pris sur cet appareil.",
  "onboarding.profile.startButtonTemplate": "Commencer à jouer · {amount} offerts",
  "onboarding.profile.back": "Retour",
  "onboarding.profile.skip": "Passer",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "Comment fonctionne attn ROYALE",
  "onboarding.tour.skip": "Passer",
  "onboarding.tour.step1.eyebrow": "01 · Misez sur une tuile",
  "onboarding.tour.step1.titleUsdc": "Posez de l'USDC sur les tuiles qui vous plaisent",
  "onboarding.tour.step1.titlePacks": "Misez des packs sur les tuiles qui vous plaisent",
  "onboarding.tour.step1.bodyUsdc":
    "Chaque tuile est un emplacement que vous misez en USDC. Plus vous en posez dessus, plus votre part de ses gains est grande. Concentrez tout sur une seule, ou répartissez sur plusieurs.",
  "onboarding.tour.step1.bodyPacks":
    "Chaque tuile est un emplacement que vous misez en packs. Plus vous en empilez dessus, plus votre part de ses gains est grande. Concentrez tout sur une seule, ou répartissez sur plusieurs.",
  "onboarding.tour.step2.eyebrow": "02 · Verrouillage",
  "onboarding.tour.step2.title": "Au verrouillage, chaque tuile ouvre ses packs",
  "onboarding.tour.step2.body":
    "Quand la manche se verrouille, chaque tuile misée déchire ses packs et tire de vraies cartes gradées en direct, de façon vérifiable, sous vos yeux.",
  "onboarding.tour.step3.eyebrow": "03 · La valeur gagne",
  "onboarding.tour.step3.title": "La tuile la plus riche rafle la cagnotte",
  "onboarding.tour.step3.bodyUsdc":
    "Le poids d'une tuile, c'est la valeur de ses cartes tirées plus son USDC. Plus une tuile est lourde, meilleures sont ses chances. Si elle gagne, vous partagez toute la cagnotte de la manche.",
  "onboarding.tour.step3.bodyPacks":
    "Le poids d'une tuile, c'est la valeur de ses cartes tirées plus les packs misés dessus. Plus une tuile est lourde, meilleures sont ses chances. Si elle gagne, vous partagez toute la cagnotte de la manche.",
  "onboarding.tour.step4.eyebrow": "04 · Garder, vendre, chasser",
  "onboarding.tour.step4.title": "Encaissez, et surveillez la Chasse",
  "onboarding.tour.step4.body":
    "Gardez vos cartes gagnantes sous forme de slabs gradés ou revendez-les à leur taux de rachat. Et la Chasse, c'est un jackpot progressif qui peut tomber sur n'importe quelle tuile, à n'importe quelle manche.",
  "onboarding.tour.back": "Retour",
  "onboarding.tour.next": "Suivant",
  "onboarding.tour.enterBoard": "Entrer sur le plateau",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary (tuile,
  // pack, cagnotte, manche, mise/miser).
  "onboarding.tour.stepTag": "Étape {n} sur {total}",
  "onboarding.tour.spot1.eyebrow": "Votre mise",
  "onboarding.tour.spot1.title": "Choisissez votre pack",
  "onboarding.tour.spot1.body": "Les packs sont votre mise. Chacun est un pack scellé de cartes TCG gradées, propulsé par Collector Crypt. Choisissez le pack avec lequel vous voulez jouer.",
  "onboarding.tour.spot2.eyebrow": "Taille de la pile",
  "onboarding.tour.spot2.title": "Choisissez la quantité",
  "onboarding.tour.spot2.body": "Ce compteur règle le nombre de packs posés à chaque mise. Un seul suffit pour commencer. Augmentez-le quand vous voulez miser plus gros.",
  "onboarding.tour.spot3.eyebrow": "Placez votre mise",
  "onboarding.tour.spot3.title": "Cliquez sur une tuile pour miser",
  "onboarding.tour.spot3.titleTouch": "Touchez une tuile pour miser",
  "onboarding.tour.spot3.body": "Cliquer sur une tuile y pose vos packs. Plus vous empilez de packs sur une tuile, plus votre part est grande si elle gagne. Chargez-en une à fond ou répartissez sur plusieurs.",
  "onboarding.tour.spot3.bodyTouch": "Touchez une tuile pour la préparer, puis touchez-la à nouveau pour confirmer la mise. Plus vous empilez de packs sur une tuile, plus votre part est grande si elle gagne.",
  "onboarding.tour.spot4.eyebrow": "La manche",
  "onboarding.tour.spot4.title": "La cagnotte et le chrono",
  "onboarding.tour.spot4.body": "Chaque pack misé sur le plateau alimente cette cagnotte. Quand le chrono atteint zéro, les mises se verrouillent et chaque tuile misée ouvre ses packs en direct.",
  "onboarding.tour.spot5.eyebrow": "Le tirage",
  "onboarding.tour.spot5.title": "Les tuiles lourdes gagnent plus souvent",
  "onboarding.tour.spot5.body": "Un tirage aléatoire pondéré par la valeur choisit une tuile. Les tuiles perdantes cèdent leurs cartes et leurs mises ; les parieurs de la tuile gagnante se partagent la valeur distribuable de la manche au prorata de leur apport.",
  "onboarding.tour.spot6.eyebrow": "Votre argent",
  "onboarding.tour.spot6.title": "Solde et dépôts",
  "onboarding.tour.spot6.body": "Votre solde vit ici. Ajoutez des fonds avec Déposer et retirez quand vous voulez. Les gains arrivent ici dès que la manche est réglée.",
  "onboarding.tour.spot7.eyebrow": "Offert par la maison",
  "onboarding.tour.spot7.title": "Votre pack Starter de {amount} offert",
  "onboarding.tour.spot7.body": "Vous commencez avec un pack Starter de {amount} offert. Il est déjà chargé dans le sélecteur. Choisissez une tuile et lancez-vous.",
  "onboarding.tour.finish": "Commencer à jouer",
 "onboarding.tour.paused": "La manche commence - nous reprenons juste après.",
  "onboarding.tour.act2.choice": "Voir une manche en action",
  "onboarding.tour.act2.choiceHint": "Environ 30 secondes, reveal compris",
  "onboarding.tour.act2.bettingTitle": "Chaque pack misé alimente une cagnotte",
  "onboarding.tour.act2.bettingBody": "Les joueurs empilent des packs sur les tuiles. Chaque pack sur le plateau alimente une seule cagnotte, et une tuile prend le tout.",
  "onboarding.tour.act2.drawTitle": "La valeur devient la cote",
  "onboarding.tour.act2.drawBody": "La part de chaque tuile dans la valeur de toutes les cartes tirées correspond à sa chance. Un unique tirage aléatoire, vérifiable et pondéré par la valeur, désigne la gagnante.",
  "onboarding.tour.act2.losersTitle": "Chaque tuile perdante cède ses cartes",
  "onboarding.tour.act2.losersBody": "Les cartes et le cash distribuables de tout le plateau reviennent aux parieurs de la tuile gagnante.",
  "onboarding.tour.act2.splitTitle": "Ta mise fixe ta part",
  "onboarding.tour.act2.splitBody": "Les parieurs de la tuile gagnante se partagent le cash et les cartes distribuables de la manche provenant de toutes les tuiles, au prorata de la mise de chacun sur cette tuile.",
  "onboarding.tour.act2.grailCaption": "La cérémonie du grail",
  "onboarding.tour.act2.yourTurnEyebrow": "À vous de jouer",
  "onboarding.tour.act2.yourTurnTitle": "Votre pack Starter est prêt",
  "onboarding.tour.act2.yourTurnBody": "Le plateau est de nouveau en direct. Choisissez une tuile et placez votre premier pack.",
  "onboarding.tour.act2.continue": "Entrer dans la manche",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "Tournez votre téléphone pour jouer à attn ROYALE",
  "onboarding.rotate.title": "Tournez votre téléphone",
  "onboarding.rotate.body": "Le plateau se joue mieux en paysage. Tournez l'écran pour entrer dans la manche.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only) --------------
  "onboarding.settingsTitle": "Paramètres",
  "onboarding.settingsClose": "Fermer les paramètres",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // {n} is the display-name character cap, injected by the validator.
  "onboarding.profileValidation.handleRequired": "Choisissez un pseudo pour que les autres joueurs vous retrouvent.",
  "onboarding.profileValidation.handleTooShort": "Un pseudo fait au moins 3 caractères.",
  "onboarding.profileValidation.handleCharset": "Uniquement des lettres, des chiffres et des tirets bas.",
  "onboarding.profileValidation.nameRequired": "Ajoutez un nom à afficher à la table.",
  "onboarding.profileValidation.nameTooLong": "Restez sous {n} caractères.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // French reads the headline word as a noun after the count ("42 joueurs"),
  // which is also what reads best inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "spectateurs",
  "onboarding.presence.tierPlaying": "joueurs",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "Vous jouez : {amount} misés cette manche",
  "onboarding.presence.youWatching": "Vous regardez",
  "onboarding.presence.youWatchingBackground": "Vous regardez (onglet en arrière-plan)",
  // "attn ROYALE" is the wordmark, never translated.
  "onboarding.presence.ariaLabel": "{count} {tier} sur attn ROYALE en ce moment. {you}.",
  // The component bolds the part before {status}.
  "onboarding.presence.popYou": "Vous : {status}",
  // Plural pairs: ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} autre onglet à vous ouvert",
  "onboarding.presence.otherTabs.other": "+{n} autres onglets à vous ouverts",
  "onboarding.presence.othersBacking.one": "{n} autre joueur mise sur une tuile cette manche",
  "onboarding.presence.othersBacking.other": "{n} autres joueurs misent sur une tuile cette manche",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "État du flux attn ROYALE",
  "onboarding.streamHud.eyebrow": "Flux",
  "onboarding.streamHud.statusConnecting": "Connexion",
  "onboarding.streamHud.statusLive": "En direct",
  "onboarding.streamHud.statusReconnecting": "Reconnexion",
  "onboarding.streamHud.statusError": "Souci de synchro",
  "onboarding.streamHud.reconnects.one": "{n} reconnexion",
  "onboarding.streamHud.reconnects.other": "{n} reconnexions",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "Cette table se règle en USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Cartes ouvertes",
  "onboarding.carousel.prevCard": "Carte précédente",
  "onboarding.carousel.nextCard": "Carte suivante",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Afficher {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "PAS ASSEZ D'USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "Miser sur {slot} demande {needed}. Vous avez {balance}.",
  "onboarding.fundShortfall.addFunds": "Ajouter des fonds",
  "onboarding.fundShortfall.dismiss": "Ignorer",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "Touchez {icon} puis Ajouter à l'écran d'accueil pour le vrai plein écran.",
  "onboarding.installHint.fullscreen": "Jouez en plein écran, sans la barre du navigateur.",
  "onboarding.installHint.fullscreenCta": "Plein écran",
  "onboarding.installHint.dismiss": "Ignorer",
} as Record<string, string>;
