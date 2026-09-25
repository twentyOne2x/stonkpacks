// French (Français): reviewed and re-edited by a native-speaker editorial
// pass (i18n epic, fr core segment). Register is FORMAL throughout
// (vouvoiement, never tutoiement). Same key set as en/core.ts. See
// royaleI18n.ts for the {token} interpolation convention and the
// "no em dash" rule.
//
// Segment: core (the original Phase-1 flat dictionary) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome:
// header status, round-metrics rail, board region labels, the logged-out
// invitation, the phone drawer toggles) and runtime.* (copy produced by the
// plain, non-component .ts modules: rail / recap / xProfile / sellBack /
// winShare / serverWallet / video / game). Do NOT add new SURFACE keys to
// this file, add them to the segment file for the surface they belong to
// instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
//
// Terminology (binding across every fr segment): "manche" = round,
// "cagnotte" = the round's pool/pot, "jackpot" = the Chase's rolling
// jackpot, "tuile" = tile, "parieur(s)" = backer(s), "le plus gros parieur"
// = top backer, "mise/miser" = bet/bid/stake, "revendre/revente" = sell
// back, "tirage" = pull/draw, "coffre" = vault, "carte gradée" = slab, "la
// Chasse" = The Chase, "équité prouvable" = provably fair. The metrics-rail
// labels under shell.metrics.* sit in a FIXED-WIDTH rail: keep them short.
// The five pack-tier brand names (Starter, Elite, Legendary, Grail, Mythic)
// plus attn ROYALE, ATTN Protocol, USDC, X, Privy and CollectorCrypt stay in
// English everywhere, including mid-sentence.
export default {
  "settings.language": "Langue",
  "settings.languageSectionAria": "Paramètres de langue",
  "settings.languageSearchPlaceholder": "Rechercher une langue",
  "settings.languageNoResults": "Aucune langue correspondante",
  "settings.languageHint": "S'applique aussitôt. Cherchez par nom, ou tapez pour filtrer.",
  "settings.languageInputAria": "Langue, rechercher et sélectionner",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Groupes de paramètres",
  "settings.searchPlaceholder": "Rechercher un paramètre",
  "settings.searchClear": "Effacer la recherche",
  "settings.searchResultsAria": "Paramètres correspondants",
  "settings.searchNoResults": "Rien ne correspond à « {query} ». Essayez le nom de ce que vous voulez changer.",
  "settings.backToGroups": "Tous les paramètres",
  "gear.cards.heading": "Cartes",
  "gear.cards.sectionAria": "Paramètres des cartes",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Mises {bids} · minimum {amount}",
  "gear.section.summary.display": "Bulles {popups} · portraits {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Musique {music} · effets {sfx}",
  "gear.section.summary.autosell": "{count} règles de revente automatique actives",
  "gear.section.summary.hotkeys": "{count} raccourcis de mise définis",

  "common.on": "ACTIF",
  "common.off": "INACTIF",
  "common.set": "DÉFINIR",
  "common.clear": "EFFACER",
  "common.tileLabel": "Tuile {n}",
  "common.tileShort": "T{n}",

  "gear.betting.heading": "Mises",
  "gear.betting.sectionAria": "Paramètres des mises",
  "gear.betting.provider.label": "Fournisseur du pack",
  "gear.betting.provider.automatic": "Automatique (Collector Crypt préféré)",
  "gear.betting.provider.hint": "Le mode automatique préfère Collector Crypt lorsqu'il est disponible et utilise uniquement un repli vérifié. Un fournisseur nommé est strict : s'il est indisponible, la mise est refusée.",
  "gear.betting.provider.automaticHint": "Automatique · Collector Crypt préféré",
  "gear.betting.provider.strictHint": "{provider} uniquement · aucun repli",
  "gear.betting.provider.unavailable": "{provider} (indisponible)",
  "gear.betting.provider.selectedUnavailable": "{provider} est indisponible. Les mises strictes sont refusées; ce choix n'est jamais remplacé.",
  "gear.betting.provider.actual": "Exécuté par {provider}",
  "gear.betting.provider.accepted": "Accepté par {provider}",
  "gear.betting.disableBids.label": "Bloquer les mises",
  "gear.betting.disableBids.hint":
    "Verrouille vos mises : un appui sur une tuile ne mise plus rien, vous pouvez donc regarder (ou passer l'écran à quelqu'un) sans miser par accident. Le reste de la partie continue normalement.",
  "gear.betting.minBid.label": "Mise minimale",
  "gear.betting.minBid.hint":
    "La plus petite mise qu'un appui peut poser. Votre mise ne descend jamais sous ce montant, donc un appui trop rapide ne mise jamais moins que prévu (plancher à $5 pour couper court aux fausses mises).",
  "gear.betting.upgradeCap.label": "Plafond d'amélioration",
  "gear.betting.upgradeCap.placeholder": "sans limite",
  "gear.betting.upgradeCap.hint":
    "Ce qu'un clic d'amélioration peut vous coûter au maximum. Les améliorations plus chères passent en grisé, une tuile très active ne peut donc pas vous coller une grosse facture par surprise.",

  "gear.display.heading": "Affichage",
  "gear.display.sectionAria": "Paramètres d'affichage",
  "gear.display.chipFloats.label": "Bulles de mise",
  "gear.display.chipFloats.hint": "Affiche les petites bulles « +$X · nom » qui montent quand quelqu'un mise sur une tuile.",
  "gear.display.floatThreshold.label": "Masquer les mises sous",
  "gear.display.floatThreshold.placeholder": "toutes les mises",
  "gear.display.floatThreshold.hint":
    "Ne fait monter une bulle qu'à partir de ce montant. Videz le champ (ou mettez $0) pour toutes les afficher : le plateau reste calme quand les petites mises pleuvent.",
  "gear.display.hidePortraits.label": "Masquer les portraits",
  "gear.display.hidePortraits.hint": "Masque les portraits des autres joueurs sur les tuiles. Votre propre marqueur reste visible.",
  "gear.display.fullscreenLandscape.label": "Plein écran en paysage",
  "gear.display.fullscreenLandscape.hint":
    "Sur mobile, le prochain geste en paysage masque la barre du navigateur. Sur iPhone, elle reste compacte, et Ajouter à l'écran d'accueil offre le vrai plein écran.",
  "gear.display.replayTour.label": "Rejouer la visite de bienvenue",
  "gear.display.replayTour.hint": "Rouvrez la visite depuis la première étape.",
  "gear.display.couch.label": "Grand texte (TV/canapé)",
  "gear.display.headerCollapse.label": "Replier l'en-tête",
  "gear.display.headerCollapse.hint": "Replie la barre du haut pour que le plateau et les cartes remplissent l'écran. La flèche de l'en-tête la fait revenir.",
  "gear.display.couch.hint":
    "Agrandit le texte de lecture dans tout le jeu : chat, docs, libellés et montants, pensé pour jouer depuis un canapé. Le plateau garde sa disposition. S'active aussi avec ?couch=1 dans l'adresse.",
  "gear.display.couch.suggested": "Ce navigateur ressemble à celui d'une TV ou d'une console. Le grand texte est fait pour cet écran.",

  "gear.reveals.heading": "Révélations",
  "gear.reveals.sectionAria": "Paramètres de révélation",
  "gear.reveals.turbo.label": "Révélations turbo",
  "gear.reveals.turbo.hint":
    "Passe le spectacle en accéléré pour arriver plus vite à votre résultat. Les grands moments gardent quand même leur temps fort. Inactif par défaut, le spectacle complet continue de tourner pour les autres.",

  "gear.sound.heading": "Son",
  "gear.sound.sectionAria": "Paramètres de son",
  "gear.sound.sfx.label": "Effets sonores",
  "gear.sound.sfx.hint":
    "Clics de jetons, ouverture et verrouillage de la manche, roue du gagnant et spectacle de révélation. Tout est synthétisé dans votre navigateur, rien à télécharger.",
  "gear.sound.music.label": "Musique",
  "gear.sound.music.hint":
    "Elle suit la manche : elle monte pendant les mises, s'emballe dans les dernières secondes et retombe pour la révélation. Elle démarre à votre premier appui ou à votre première touche, et se met en pause dès que vous changez d'onglet.",
  "gear.sound.musicStyle.label": "Style musical",
  "gear.sound.musicStyle.piano": "Piano calme",
  "gear.sound.musicStyle.snowmelt": "Fonte des neiges",
  "gear.sound.musicStyle.hearthfire": "Feu de l'âtre",
  "gear.sound.musicStyle.grotto": "Grotte dorée",
  "gear.sound.musicStyle.arcade": "Ruée arcade",
  "gear.sound.musicStyle.kart": "Rallye de karts",
  "gear.sound.musicStyle.galaxy": "Valse stellaire",
  "gear.sound.musicStyle.hint": "Piano calme, c'est une mélodie douce et posée. Ruée arcade, c'est vif et rapide. Le changement se fait à la mesure suivante, en pleine manche.",
  "gear.sound.musicVolume.label": "Volume musique",
  "gear.sound.sfxVolume.label": "Volume effets",
  "gear.sound.volume.label": "Volume",
  "gear.sound.volume.aria": "Volume principal",
  "gear.sound.volume.hint": "Un seul volume principal pour les effets et la musique.",

  "gear.autosell.heading": "Revente automatique",
  "gear.autosell.sectionAria": "Règles de revente automatique",
  "gear.autosell.intro":
    "Réglez-les une fois : tout gain qui correspond se revend tout seul, sans question garder ou vendre. Ce qui ne correspond à rien continue de vous demander, comme aujourd'hui.",
  "gear.autosell.everyWin.label": "Revendre chaque gain",
  "gear.autosell.everyWin.hint":
    "Encaisse chaque carte gagnée au taux de rachat dès qu'elle tombe, sans question garder ou vendre. Les cartes Grail ne sont jamais vendues automatiquement. C'est le raccourci pour activer les quatre options de rareté ci-dessous.",
  "gear.autosell.belowValue.label": "Revendre en dessous de",
  "gear.autosell.placeholderOff": "aucun",
  "gear.autosell.rarity.label": "Revendre par rareté",
  "gear.autosell.rarity.aria": "Revente auto par rareté",
  "gear.autosell.rarity.hint":
    "Les paliers de rareté CollectorCrypt, lus sur la machine à packs d'où sort chaque carte. La fourchette de prix d'un palier bouge selon le pack : une carte à $200 peut être rare sur une machine et courante sur une plus chère.",
  "gear.autosell.nonVintage.label": "Revendre les cartes non vintage",
  "gear.autosell.belowGrade.label": "Revendre sous la note",
  "gear.autosell.grader.label": "Revendre par organisme",
  "gear.autosell.grader.hint":
    "Gardez un organisme de notation et ne revendez d'office que ses cartes notées sous le chiffre choisi. Décochez un organisme pour revendre toutes ses cartes. Décochez-les tous pour revendre tout ce que vous gagnez. Chaque organisme a sa propre échelle, chaque seuil est donc indépendant.",
  "gear.autosell.grader.aria": "Revente auto par organisme de notation",
  "gear.autosell.grader.keep": "GARDER",
  "gear.autosell.grader.sellAll": "TOUT VENDRE",
  "gear.autosell.grader.other": "Autres / non notées",
  "gear.autosell.grader.placeholderKeepAll": "tout garder",
  "gear.autosell.grader.placeholderSellAll": "tout vendre",
  "gear.autosell.grader.ariaGradeSuffix": "revendre sous cette note",
  "gear.autosell.summaryActive": "Actif :",
  "gear.autosell.summaryNone": "Aucune règle de revente automatique. Chaque gain vous demande encore de garder ou de vendre.",
  "gear.autosell.turnOffAll": "TOUT DÉSACTIVER",

  "gear.hotkeys.heading": "Raccourcis de mise",
  "gear.hotkeys.sectionAria": "Raccourcis de mise",
  "gear.hotkeys.intro":
    "Appuyez sur la touche d'une tuile pour miser dessus au montant en cours. Sans toucher la souris. Cliquez sur une touche ci-dessous, puis appuyez sur celle que vous voulez. Deux tuiles ne partagent jamais la même touche : la réassigner la déplace. Échap annule, Retour arrière efface.",
  "gear.hotkeys.enabled.label": "Touches numériques",
  "gear.hotkeys.enabled.hintOn": "Les touches sont actives pendant les mises. Appuyer sur la touche d'une tuile mise aussitôt.",
  "gear.hotkeys.enabled.hintOff": "Les touches sont coupées. Appuyer sur la touche d'une tuile ne mise rien.",
  "gear.hotkeys.enabled.hintUnset": "Rien de décidé pour l'instant. Activez les touches ici, ou appuyez sur la touche d'une tuile pendant les mises et choisissez Activer.",
  "gear.hotkeys.listAria": "Raccourcis de mise par tuile",
  "gear.hotkeys.tileLabel": "Tuile {n}",
  "gear.hotkeys.pressKeyPrompt": "Une touche…",
  "gear.hotkeys.setKey": "Définir",
  "gear.hotkeys.clear": "Effacer",
  "gear.hotkeys.ariaPressToBind": "Appuyez sur une touche pour l'associer à la Tuile {n}",
  "gear.hotkeys.ariaShortcut": "Raccourci de la Tuile {n} : {key}. Cliquez pour réassigner.",
  "gear.hotkeys.ariaNoShortcut": "La Tuile {n} n'a pas de raccourci. Cliquez pour en définir un.",
  "gear.hotkeys.ariaClearShortcut": "Effacer le raccourci de la Tuile {n}",
  "gear.hotkeys.unboundWarning": "Aucune touche pour {list}. Ces tuiles n'ont pas de raccourci clavier tant que vous n'en définissez pas un.",
  "gear.hotkeys.resetButton": "Réinitialiser",

  "nav.ariaLabel": "sections attn ROYALE",
  "nav.board": "PLATEAU",
  "nav.results": "RÉSULTATS",
  "nav.rankingsFull": "CLASSEMENTS",
  "nav.rankingsShort": "RANGS",
  "nav.collectionFull": "COLLECTION",
  "nav.collectionShort": "CARTES",
  "nav.profile": "PROFIL",

  "mobileNav.board": "Plateau",
  "mobileNav.results": "Résultats",
  "mobileNav.ladder": "Classement",
  "mobileNav.collection": "Collection",
  "mobileNav.profile": "Profil",
  "mobileNav.docs": "Docs",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome. shell.metrics.* sits in a FIXED-WIDTH rail:
  // these four labels stay as short as French allows.
  "shell.route.aria": "labo attn ROYALE",
  "shell.header.statusAria": "Statut de la manche",
  "shell.header.collapse": "Masquer l'en-tête",
  "shell.header.expand": "Afficher l'en-tête",
  "shell.header.round": "Manche #{n}",
  "shell.header.turboTitle": "Manches accélérées",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Résumé de la manche",
  "shell.metrics.totalPool": "Cagnotte totale",
  "shell.metrics.packsLive": "Packs en jeu",
  "shell.metrics.yourStake": "Votre mise",
  "shell.metrics.selectedBet": "Mise choisie",
  "shell.board.aria": "plateau attn ROYALE",
  "shell.board.label": "Plateau",
  "shell.board.phaseOpen": "Cliquez sur une tuile pour la miser, la mise se recompose en la meilleure pile de packs",
  "shell.board.phaseLock": "Verrouillé · ouverture",
  "shell.board.phaseSettled": "Manche réglée",
  "shell.board.metaOpen": "Cagnotte {pool} · 3% alimentent la Chasse · les packs s'ouvrent au verrouillage",
  "shell.board.metaClosed": "Une seule tuile rafle la cagnotte, sur des chances pondérées vérifiables.",
  "shell.board.reopenReveal": "↗ Rouvrir la révélation",
  "shell.connectNudge":
    "Entrez dans la partie et déposez pour commencer à miser sur les tuiles. Les manches continuent de tourner en attendant.",
  "shell.decision.cardFallback": "votre carte",
  "shell.mobile.close": "Fermer",
  "shell.mobile.chat": "Chat",
  "shell.mobile.chatOpenAria": "Ouvrir le chat de table",
  "shell.mobile.chatCloseAria": "Fermer le chat de table",
  "shell.mobile.cards": "Cartes",
  "shell.mobile.cardsOpenAria": "Ouvrir vos cartes pour les vendre ou les retirer",
  "shell.mobile.cardsCloseAria": "Fermer vos cartes",
  "shell.mobile.players": "Joueurs",
  "shell.mobile.playersOpenAria": "Ouvrir les joueurs, classés par mise",
  "shell.mobile.playersCloseAria": "Fermer les joueurs",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // runtime.rail.* : royaleRailCopy.ts (playable-USDC rail + prize-modal money
  // copy). "Privy" and "USDC" are brand terms and stay verbatim.
  "runtime.rail.gameUsdc": "USDC de jeu",
  "runtime.rail.privySessionCredit": "Crédit de session Privy",
  "runtime.rail.houseCredit": "crédit maison",
  "runtime.rail.connectPrivy": "Connectez Privy pour ajouter de l'USDC de jeu",
  "runtime.rail.privySession": "Session Privy",
  "runtime.rail.depositAction": "Ajouter +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Compte Privy",
  "runtime.rail.house": "Maison",
  "runtime.rail.depositReceipt": "Reçu {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Touchez un pack pour miser {amount}. Chaque tuile garde aussi ses propres +{low} / +{high}.",
  "runtime.rail.sellBack": "Revendre → +{amount} sur le solde",

  // runtime.recap.* : royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery). "ATTN Protocol" is a brand term.
  "runtime.recap.you": "Vous",
  "runtime.recap.topBacker": "Plus gros parieur",
  "runtime.recap.topCardOutcome": "carte phare · à garder ou à vendre",
  "runtime.recap.backer": "Parieur",
  "runtime.recap.cardWon": "carte gagnée",
  "runtime.recap.chaseLootReleased": "Butin de la Chasse libéré",
  "runtime.recap.theChase": "La Chasse",
  "runtime.recap.sweptIntoVault": "raflée par le coffre",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "frais de protocole",
  "runtime.recap.soldBack": "Revendue",
  "runtime.recap.intoSplit": "+{amount} dans le partage",

  // runtime.xProfile.* : royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "La connexion X n'est pas encore ouverte.",
  "runtime.xProfile.connected": "Connecté",

  // runtime.sellBack.* : royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Carte inconnue",

  // runtime.winShare.* : royaleWinShareModel.ts (share-card headline + the
  // image-share caption lines). "GRAIL" is a pack-tier brand name and stays
  // English, only "PULL" is translated.
  "runtime.winShare.headlineWon": "GAGNÉ",
  "runtime.winShare.headlineGrailPull": "TIRAGE GRAIL",
  "runtime.winShare.headlineCardsWon": "CARTES GAGNÉES",
  "runtime.winShare.cardInImage": "La carte est sur l'image.",
  "runtime.winShare.receiptInImage": "Le reçu est sur l'image.",

  // runtime.serverWallet.* : royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Les retraits sont hors ligne pour l'instant. Aucun fonds n'a bougé.",
  "runtime.serverWallet.noSigner": "Aucun portefeuille signataire n'est connecté sur cette session. Aucun fonds n'a bougé.",
  "runtime.serverWallet.nonceUnavailable": "Le serveur n'a pas délivré de nonce d'autorisation pour ce retrait.",
  "runtime.serverWallet.signatureUnavailable": "Le portefeuille n'a pas renvoyé de signature sur le nonce de retrait.",
  "runtime.serverWallet.boundaryLabel": "Les crédits de table et l'USDC du portefeuille serveur sont deux soldes distincts.",

  // runtime.video.* : royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "La capture d'écran n'est pas disponible dans ce navigateur.",
  "runtime.video.noRecorderFormat": "Ce navigateur ne propose aucun format vidéo MediaRecorder.",
  "runtime.video.canceled": "Rendu annulé.",
  "runtime.video.unreachable": "Service de rendu injoignable à l'adresse {url}.",
  "runtime.video.rejected": "Le service de rendu a refusé cette manche : {detail}",
  "runtime.video.requestFailed": "La demande de rendu a échoué ({status}).",
  "runtime.video.noJobId": "Le service de rendu n'a renvoyé aucun identifiant de tâche.",
  "runtime.video.lostJob": "Tâche de rendu perdue ({status}).",
  "runtime.video.lostContact": "Contact perdu avec le service de rendu en plein rendu.",
  "runtime.video.renderFailed": "Échec du rendu : {error}.",
  "runtime.video.unknownError": "erreur inconnue",
  "runtime.video.downloadFailed": "La vidéo est terminée mais n'a pas pu être téléchargée.",
  "runtime.video.downloadHttpFailed": "La vidéo est terminée mais le téléchargement a échoué ({status}).",
  "runtime.video.emptyVideo": "Le service de rendu a renvoyé une vidéo vide.",
  "runtime.video.shareTagline": "Bataille de packs au tirage vérifiable. Regardez la manche :",

  // runtime.game.* : useRoyaleGame.ts (the game hook's feed lines and fallback
  // labels). These are written into the persisted feed AT EVENT TIME, so a line
  // already written keeps the language it was written in.
  "runtime.game.roomLive": "Salle en direct. Les manches s'enchaînent toutes seules : {seconds} s d'ouverture, puis la révélation.",
  "runtime.game.chaseVault": "Le coffre de la Chasse",
  "runtime.game.aTile": "une tuile",
  "runtime.game.aPack": "un pack",
  "runtime.game.theCard": "la carte",
  "runtime.game.collectedSplit": "Manche {round} · {amount} USDC encaissés sur le partage.",
  "runtime.game.chaseDropSplit": "Manche {round} · la Chasse a lâché {award} sur votre tuile · votre part : {amount} USDC.",
  "runtime.game.grailSecured": "Grail sécurisé : {card} ({amount}) reste dans votre collection.",
  "runtime.game.keptCard": "{card} ({amount}) gardée → ajoutée à votre collection.",
  "runtime.game.soldCardSettle": "{card} revendue pour {amount} USDC ({pct}% de {value}).",
  "runtime.game.roundVoidedRefund":
    "Manche {round} annulée. Aucun pack ouvert, donc aucun tirage sur la valeur des cartes. Votre mise de {amount} vous a été remboursée.",
  "runtime.game.roundVoidedAll":
    "Manche {round} annulée. Aucun pack ouvert, donc aucun tirage sur la valeur des cartes. Toutes les mises sont remboursées.",
  "runtime.game.chaseFiredYours.one": "La Chasse est tombée : {n} carte ({amount}) libérée sur votre tuile {tile}.",
  "runtime.game.chaseFiredYours.other": "La Chasse est tombée : {n} cartes ({amount}) libérées sur votre tuile {tile}.",
  "runtime.game.chaseFiredTable.one":
    "La Chasse est tombée à la manche {round} : {award} et {n} carte lâchés sur {tile}, partagés entre ses parieurs.",
  "runtime.game.chaseFiredTable.other":
    "La Chasse est tombée à la manche {round} : {award} et {n} cartes lâchés sur {tile}, partagés entre ses parieurs.",
  "runtime.game.cardsAssigned.one": "{n} carte vous est attribuée ({amount}) → collection.",
  "runtime.game.cardsAssigned.other": "{n} cartes vous sont attribuées ({amount}) → collection.",
  "runtime.game.cardPoolsLive": "Réserves de cartes en ligne : {cards} cartes sur {pools} machines CollectorCrypt.",
  "runtime.game.minBid": "La mise minimale est de {amount}. Montez la mise et réessayez.",
  "runtime.game.resolveFailed": "Ce tour n'a pas pu être résolu, rien n'a été réglé. Le tour suivant démarre normalement.",
  "runtime.game.stakeRefused": "Cette mise est trop grande pour {tile}. Rien n'a été débité. Réduisez-la et réessayez.",
  "runtime.game.shortfallBack":
    "Pas assez d'USDC pour miser {amount} sur {tile}. Vous avez {held}. Ajoutez des fonds pour continuer.",
  "runtime.game.shortfallNextPack":
    "Pas assez d'USDC pour compléter le pack suivant sur {tile}. Il faut {amount}, vous avez {held}. Ajoutez des fonds pour continuer.",
  "runtime.game.youBacked": "Vous avez misé {amount} sur {tile}.",
  "runtime.game.packCompleted": "Vous avez complété le pack suivant sur {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "{cards} revendues pour {amount} USDC (rachat CC) pour financer une mise.",
  "runtime.game.backedFunded": "{amount} misés sur {tile} (financés sur votre inventaire).",
  "runtime.game.demoStakesRefunded":
    "Mises de démo effacées : les {amount} que vous aviez engagés sont remboursés. Vous repartez de $0.",
  "runtime.game.demoStakesCleared": "Mises de démo effacées : vous démarrez chaque manche à $0 tant que vous n'avez pas misé sur une tuile.",
  "runtime.game.deposited": "{amount} USDC déposés sur votre portefeuille.",
  "runtime.game.referralBonus": "Bonus de parrainage crédité : +{amount} USDC.",
  "runtime.game.signedAndSent": "{amount} USDC signés et envoyés sur {cluster} · sig {sig}….",
  "runtime.game.signedNoBroadcast":
    "{amount} USDC signés sur {cluster} ({method}, sans diffusion sur la chaîne) · sig {sig}….",
  "runtime.game.soldCard": "{card} revendue pour {amount} USDC (rachat à {pct}%).",
} as Record<string, string>;
