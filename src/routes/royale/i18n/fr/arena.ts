// French (Français): "arena" segment. Same key set as en/arena.ts. See
// royaleI18n.ts's file header for the key-naming and {token} interpolation
// convention, and the no-em-dash / brand-terms-stay-English rules that
// apply to every locale.
//
// Terminology notes for this segment: "pot" and "pool" (the round's shared
// prize) both render as "cagnotte" (the standard French term for a pooled
// prize). "The Chase" (the rolling jackpot feature, not one of the five
// pack-tier brand terms) is translated as "la Chasse", chosen for both
// meaning and its phonetic echo of the English name. "Snipe" (the
// last-second auto-bet mechanic) is kept as an established loanword, the
// way French bidding culture already says "sniper une enchère" for a
// last-second bid. The wheel's SPIN renders as "le lancer", deliberately
// NOT "le tirage", which every other segment reserves for a card pull or
// the winner draw.
export default {
  "arena.you": "VOUS",
  "arena.youAvatarLetter": "V",
  "arena.common.card": "carte",
  "arena.common.cards": "cartes",
  "arena.matchLabel": "MATCH #{n}",
  "arena.pageTitle": "Arène de cartes",
  "arena.backToBoard": "← Retour au plateau",

  "arena.rail.ariaLabel": "Votre collection",
  "arena.rail.heading": "VOTRE COLLECTION",
  "arena.rail.practiceNote": "Ensemble d'entraînement. Gagnez des manches sur le plateau pour garnir ce rail de vos propres cartes.",
  "arena.rail.emptyNote": "Plus de cartes en main. Raflez la cagnotte pour récupérer votre part.",
  "arena.rail.enterWheel": "ENTRER DANS LA ROUE",
  "arena.rail.armSnipe": "ARMER SNIPE",
  "arena.rail.hint": "Double-cliquez sur une carte pour la miser. Ou sélectionnez des cartes puis appuyez sur ENTRER DANS LA ROUE. Espace sélectionne, A arme le snipe.",

  "arena.railCard.armedSuffix": "Armée pour le snipe.",
  "arena.railCard.hint": "Espace la sélectionne, A arme le snipe. Double-cliquez pour la miser dans l'arène.",
  "arena.railCard.armedTag": "ARMÉE",

  "arena.snipe.trayHeading": "SNIPE ARMÉ",
  "arena.snipe.disarm": "DÉSARMER",
  "arena.snipe.firesAt": "Part à T-moins 2s",
  "arena.snipe.carries": "Se reporte au prochain match",

  "arena.board.sectionAriaLabel": "Roue de l'arène",
  "arena.board.noCap": "Aucun plafond de cartes. Seule l'horloge verrouille la manche.",
  "arena.board.wheelDecides": "La roue décide",
  "arena.board.nextMatchLabel": "Prochain match dans",
  "arena.board.potLabel": "CAGNOTTE",
  "arena.board.wheelAriaEnter": "Faire entrer votre sélection ({count} {cardWord}) dans la roue",
  "arena.board.wheelAriaIdle": "La roue. Sélectionnez des cartes de votre collection pour les y faire entrer.",
  "arena.board.youWin": "VOUS GAGNEZ",
  "arena.board.nameWins": "{name} GAGNE",
  "arena.board.emptyWheelNote": "La roue est ouverte. Misez des cartes, pas du cash : votre part de valeur détermine votre arc et vos chances. La Chasse prend 0 %. Le protocole applique une règle de frais de 7 % en cartes entières ; le gagnant reçoit toutes les autres cartes.",
  "arena.board.tableHint": "Vos entrées occupent la roue au prorata de votre part de valeur. Votre arc fait vos chances.",
  "arena.board.resultsLink": "Résultats de la dernière manche →",

  "arena.clock.locked": "VERROUILLÉ",
  "arena.clock.settled": "RÉGLÉ",
  "arena.clock.locksIn": "VERROUILLAGE DANS",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Fermer le cinéma",
  "arena.cinema.closeTitle": "Fermer (Échap)",
  "arena.cinema.beatCopy.contestants": "LES CONCURRENTS",
  "arena.cinema.beatCopy.spin": "LE LANCER",
  "arena.cinema.beatCopy.settle": "LE RÈGLEMENT",
  "arena.cinema.beatCopyShort.contestants": "JOUEURS",
  "arena.cinema.beatCopyShort.spin": "LANCER",
  "arena.cinema.beatCopyShort.settle": "RÈGLEMENT",
  "arena.cinema.contestantsAriaLabel": "Les concurrents",
  "arena.cinema.contestantsHeadline": "LES CONCURRENTS",
  "arena.cinema.oddsToWin": "{pct}% POUR GAGNER",
  "arena.cinema.hintContestants": "La roue décide. Cliquez pour la lancer maintenant.",
  "arena.cinema.spinAriaLabel": "Le lancer de la roue",
  "arena.cinema.lockedOn": "VERROUILLÉ SUR",
  "arena.cinema.hintSpin": "Cliquez pour passer le lancer.",
  "arena.cinema.settleAriaLabel": "Le règlement",
  "arena.cinema.winnerTag": "GAGNANT",
  "arena.cinema.youTakePot": "VOUS RAFLEZ LA CAGNOTTE",
  "arena.cinema.takesPot": "RAFLE LA CAGNOTTE",
  "arena.cinema.shelfWinner": "AU GAGNANT",
  "arena.cinema.shelfChase": "LA CHASSE",
  "arena.cinema.shelfProtocol": "PROTOCOLE",
  "arena.cinema.smallPotNote": "La Chasse ne prend rien. La règle de 7 % du protocole a sélectionné {count} {cardWord} ; le gagnant reçoit toutes les autres cartes.",
  "arena.cinema.resultsLink": "Résultats de la dernière manche",
  "arena.cinema.hintSettle": "Cliquez n'importe où pour revenir à l'arène.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} pour le gagnant",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Miser au double-clic ?",
  "arena.doubleBid.body": "Double-cliquez sur une carte de votre collection pour la miser directement dans l'arène. On active ?",
  "arena.doubleBid.enable": "Activer",
  "arena.doubleBid.dismiss": "Plus tard",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "CONNEXION À CARD ARENA",
  "arena.backend.loadingBody": "Vérification de la version en direct de l'Arena et de votre session de joueur…",
  "arena.backend.loadingCollection": "Vérification de votre collection…",
  "arena.backend.mainnetPreparingTitle": "L'ARENA MAINNET EST CONNECTÉE",
  "arena.backend.mainnetPreparingBody": "Cette version exacte en lecture seule est opérationnelle. Le financement, l'acquisition des cartes, l'entrée, le tirage et le règlement restent désactivés.",
  "arena.backend.mainnetPreparingCollection": "Aucune carte Mainnet n'a été achetée ni déplacée. L'Arena reste en lecture seule jusqu'à ce que l'inventaire autorisé séparément soit prêt.",
  "arena.backend.mainnetRelease": "Version {commit} · déploiement {deployment} · aucune signature, diffusion, opération ou duplication",
  "arena.backend.unavailableTitle": "CARD ARENA SE MET À JOUR",
  "arena.backend.unavailableBody": "Les entrées sont suspendues jusqu'à ce que cette version exacte du jeu soit disponible. Vos cartes n'ont pas bougé.",
  "arena.backend.unavailableCollection": "Collection indisponible pendant la mise à jour de l'Arena.",
  "arena.backend.connectTitle": "CONNECTEZ-VOUS POUR JOUER",
  "arena.backend.connectBody": "Une session Privy vérifiée est nécessaire pour charger vos cartes liées au fournisseur et entrer dans la roue.",
  "arena.backend.connectCollection": "Connectez votre session de joueur pour charger vos cartes.",
  "arena.backend.retry": "RÉESSAYER",
} as Record<string, string>;
