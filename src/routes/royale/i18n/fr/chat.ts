// French (Français): "chat" segment. Same key set as en/chat.ts. See
// royaleI18n.ts's file header for the key-naming and {token} interpolation
// convention, and the no-em-dash / brand-terms-stay-English rules that
// apply to every locale.
//
// Terminology notes: "pull" (TCG slang for the card a pack opening reveals)
// renders as "tirage", matching French collector/TCG usage. "pot"/"Chase"
// follow the same choices as the arena segment ("cagnotte" / "la Chasse").
// "attn" is the product's own lowercase brand name and is never
// translated. "snipe"/"sniper" are kept as the established French bidding
// loanword (see arena.ts's note).
//
// RESOLVED (fr editorial pass): chat.chatter.line03's lowercase "grail"
// now renders as the English brand spelling "Grail", like every other
// occurrence in this locale (chat.event.grailTag, misc.chase.pill.*,
// docs.*). The five pack-tier names are brand terms and are never
// translated or inflected, so no fr segment says "graal" any more.
export default {
  "chat.rooms.table": "Table générale",
  "chat.rooms.sendTo": "Envoyer à",
  "chat.rooms.joinHint": "Misez sur une tuile pour déverrouiller son salon.",
  "chat.rooms.messageTargets": "Salons du message",
  "chat.composer.sendFailed": "Échec de l'envoi. Réessayez.",
  "chat.composer.audienceChanged": "Le salon a changé. Votre message non envoyé a été effacé.",
  "chat.composer.sessionUnavailable": "Session de chat indisponible. Actualisez la page et réessayez.",
  "chat.auth.tileLeadBold": "Misez sur une case pour discuter",
  "chat.auth.tileBody": ". La table et les salons des cases se débloquent après votre premier pack accepté.",
  "chat.auth.sessionUnavailableBold": "Session de chat indisponible",
  "chat.auth.sessionUnavailableBody": ". Actualisez la page pour rétablir l'envoi sécurisé.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Chat de table",
  "chat.header.title": "Chat de table",
  "chat.header.fontControlAriaLabel": "Taille du texte du chat",
  "chat.header.fontSmaller": "Réduire la taille du texte du chat",
  "chat.header.fontLarger": "Augmenter la taille du texte du chat",
  "chat.header.collapseShow": "Afficher le chat",
  "chat.header.collapseHide": "Masquer le chat",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "TIRAGE GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "MANCHE #{roundId}",
  "chat.event.ariaOpensResult": "{tag} : {text}. Ouvre le résultat de la manche dans un nouvel onglet.",
  "chat.event.wonByPrefix": "remporté par",
  "chat.event.wonBy": "remporté par {name}",
  "chat.event.foldedIntoPot": "reversé dans la cagnotte",
  "chat.event.roundWinsTitle": "{tile} remporte {pot}",
  "chat.event.bestPull": "meilleur tirage {name} ({value})",
  "chat.event.chaseAward": "Chasse +{amount}",
  "chat.event.youWon": "vous +{amount}",
  "chat.event.youLost": "vous avez perdu",
  "chat.message.showOriginal": "traduit · voir l’original",
  "chat.message.showTranslation": "voir la traduction",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Dernier message",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Seuls les liens attn s'affichent ici.",
  "chat.composer.rateLimitNotice": "Vous envoyez un peu vite. Réessayez dans un instant.",
  "chat.composer.placeholder": "Dites quelque chose…",
  "chat.composer.inputAriaLabel": "Message de chat",
  "chat.composer.sendAriaLabel": "Envoyer le message",
  "chat.composer.sendLabel": "Envoyer",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Connectez-vous pour discuter",
  "chat.auth.body": ", le salon est en lecture seule tant que vous n'êtes pas connecté (en haut à droite).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Ouvre la fiche de la carte dans un nouvel onglet",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Ouvre la fiche de la carte dans un onglet en arrière-plan.",
  "chat.messageBody.viewCard": "Voir la carte",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Fiche carte",
  "chat.link.roundResult": "Résultat de la manche",
  "chat.link.profile": "Profil",
  "chat.link.collection": "Collection",
  "chat.link.theBoard": "Le plateau",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "la tuile 3 se remplit vite",
  "chat.chatter.line02": "qui snipe le leader à chaque manche",
  "chat.chatter.line03": "ce tirage Grail de la dernière manche était dingue",
  "chat.chatter.line04": "argent facile, tout le monde sur le leader",
  "chat.chatter.line05": "la nouvelle tuile 7 me semble sous-évaluée",
  "chat.chatter.line06": "je garde mes packs pour les cinq dernières secondes",
  "chat.chatter.line07": "quelqu'un vient de lâcher $250 sur la tuile 2, respect",
  "chat.chatter.line08": "la part de cagnotte sur la tuile 6 est bien trop chère maintenant",
  "chat.chatter.line09": "encore un pack et cette tuile grimpe à un palier plus riche",
  "chat.chatter.line10": "encore les snipers qui plombent mes chances",
  "chat.chatter.line11": "je n'enchaîne que des cartes plancher, ça sent le gros tirage",
  "chat.chatter.line12": "surveillez la baleine, elle penche toujours vers la tuile gagnante",
  "chat.chatter.line13": "la tuile 1 n'est pas sortie de toute la session, elle est mûre",
  "chat.chatter.line14": "j'ai revendu mon dernier tirage instantanément, le rachat m'a semblé juste",
  "chat.chatter.line15": "contre-snipe en approche, c'est couru d'avance",
  "chat.chatter.line16": "le leader a changé deux fois dans les dix dernières secondes",
  "chat.chatter.line17": "qui d'autre vise l'échelle Mythic ce soir",
  "chat.chatter.line18": "j'ai gardé la carte : ce visuel était trop stylé pour la vendre",
  "chat.chatter.line19": "les packs de dernière minute ne relancent jamais l'horloge, j'adore",
  "chat.chatter.line20": "la cagnotte de la tuile 8 vient de doubler, ça sent le coup",
  "chat.chatter.line21": "petits packs tôt, gros packs tard, la seule façon de jouer",
  "chat.chatter.line22": "ce chrono garder/vendre me piège à chaque fois",
  "chat.chatter.line23": "les poursuivants offrent plus de valeur que le leader en ce moment",
  "chat.chatter.line24": "snipe propre sur la tuile 5, chirurgical",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Panneau de la table",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "Mon activité",
  "chat.activity.ariaLabel": "Mon activité privée",
  "chat.activity.filtersAria": "Filtrer l’activité",
  "chat.activity.filter.all": "Tout",
  "chat.activity.filter.packs": "Packs",
  "chat.activity.filter.bids": "Mises",
  "chat.activity.filter.rewards": "Récompenses",
  "chat.activity.filter.feats": "Exploits",
  "chat.activity.filter.clan": "Clan",
  "chat.activity.today": "Aujourd’hui",
  "chat.activity.yesterday": "Hier",
  "chat.activity.status.pending": "En attente",
  "chat.activity.status.finalized": "Finalisé",
  "chat.activity.status.reversed": "Annulé",
  "chat.activity.finalizedAria": "Reçu finalisé",
  "chat.activity.signInTitle": "Connectez-vous pour voir votre historique",
  "chat.activity.signInBody": "Vos reçus privés de packs, mises, récompenses, exploits et actions de clan apparaissent ici.",
  "chat.activity.loading": "Chargement de vos reçus",
  "chat.activity.loadOlder": "Charger les plus anciens",
  "chat.activity.points": "{points} points",
  "chat.activity.event.packBid.title": "Pack joué",
  "chat.activity.event.packBid.detail": "Participation sur la tuile {tile} finalisée.",
  "chat.activity.event.roundWon.title": "Tuile gagnante",
  "chat.activity.event.roundWon.detail": "La tuile {tile} a remporté la manche.",
  "chat.activity.event.roundLost.title": "Manche réglée",
  "chat.activity.event.roundLost.detail": "La tuile {tile} n’a pas gagné cette manche.",
  "chat.activity.event.roundRefunded.title": "Pack remboursé",
  "chat.activity.event.roundRefunded.detail": "La mise sur la tuile {tile} a été remboursée.",
  "chat.activity.event.chaseWon.title": "Chasse gagnée",
  "chat.activity.event.chaseWon.detail": "La Chasse du plateau a versé le gain.",
  "chat.activity.event.achievementDetail": "Débloqué grâce à votre jeu.",
  "chat.activity.event.clanAchievementDetail": "Débloqué avec votre clan.",
  "chat.activity.unavailableTitle": "Activité indisponible",
  "chat.activity.unavailableBody": "Impossible de charger vos reçus. Réessayez d’ouvrir le fil privé dans un instant.",
  "chat.activity.retry": "Réessayer",
  "chat.activity.emptyTitle": "Rien pour le moment",
  "chat.activity.emptyBody": "Les actions finalisées liées aux packs, mises, récompenses, exploits et clans apparaîtront ici.",
  "chat.unlock.eyebrow": "Haut fait débloqué",
  "chat.unlock.clanEyebrow": "Haut fait de clan débloqué",
  "chat.unlock.dismiss": "Fermer le haut fait",
} as Record<string, string>;
