// French (Français): "board" segment, reviewed end to end by a native
// speaker (editorial pass, not a machine translation). Same key set as
// en/board.ts. See royaleI18n.ts for the {token} interpolation convention
// and the "no em dash" rule.
//
// Segment: board. Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx.
//
// Terminology (binding across every fr segment): "manche" for round,
// "cagnotte" for pool/pot, "tuile" for tile, "parieur(s)" for backer(s),
// "le plus gros parieur" for the top backer, "mise/miser" for bet/bid/stake,
// "verrouille/verrouillage" for lock, "tirage" for pull/draw, "rachat" for
// buyback, "monnaie" for the loose change sitting on a tile. The generic
// noun "pack(s)" keeps the English loanword "pack/packs" (owner 2026-07:
// "pack" is the brand word, masculine in French); the five pack-tier brand names
// (Starter, Elite, Legendary, Grail, Mythic) stay English and are never
// inflected. Percentages keep the source spacing ({pct}%, 85 à 93%) per the
// "numbers stay exactly as authored" rule.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Joueurs et PnL en espèces",
  "board.playerScoreboard.title": "Joueurs",
  "board.playerScoreboard.open": "Statistiques et mise en sourdine",
  "board.playerScoreboard.pinnedHint": "Épinglé · Échap pour fermer",
  "board.playerScoreboard.holdHint": "Maintenez Tab pour jeter un œil · cliquez pour épingler",
  "board.playerScoreboard.close": "Fermer le classement des joueurs",
  "board.playerScoreboard.windowAria": "Fenêtre de PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Tout",
  "board.playerScoreboard.partialHistory": "Historique partiel. Le classement utilise la fenêtre conservée des résultats en espèces réglés.",
  "board.playerScoreboard.statsUnavailable": "L’historique du PnL n’est pas disponible ici. Les mises actuelles restent actives.",
  "board.playerScoreboard.playerColumn": "Joueur",
  "board.playerScoreboard.pnlColumn": "PnL en espèces",
  "board.playerScoreboard.voiceColumn": "Chat",
  "board.playerScoreboard.loading": "Chargement des joueurs…",
  "board.playerScoreboard.empty": "Personne n’a misé sur une case pendant cette manche.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Cases {tiles}",
  "board.playerScoreboard.stake": "Mise {amount}",
  "board.playerScoreboard.notAvailable": "Indisponible",
  "board.playerScoreboard.rounds": "{n} manches",
  "board.playerScoreboard.youBadge": "Vous",
  "board.playerScoreboard.mute": "Masquer",
  "board.playerScoreboard.unmute": "Réafficher",
  "board.playerScoreboard.muteAria": "Masquer les messages de {name} dans le chat",
  "board.playerScoreboard.unmuteAria": "Réafficher les messages de {name} dans le chat",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Vous",
  "board.common.noWin": "aucun gain",
  "board.common.roundSettled": "Manche réglée",
  "board.common.youWon": "Vous gagnez {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "VERROUILLÉ",
  "board.tile.lockedStampSub": "rien ne va plus",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label} : votre mise de {bet} dépasse votre solde de {balance}. Baissez la mise ou déposez.",
  "board.tile.ariaBack": "Miser {amount} sur {label}",
  "board.tile.ariaBackShortcutSuffix": ", raccourci {shortcut}",
  "board.tile.ariaOddsChance": "{pct} de chances de gagner",
  "board.tile.ariaBackers": "{count} parieurs",
  "board.tile.yourPortraitAlt": "Votre portrait",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · aucun pack",
  "board.tile.noStake": "Aucune mise",
  // MEGA-AUDIT 2026-07-31 (locale-text-overflow, ownership pill): the tile
  // pill's CSS fit ladder (royaleStyles.css "(5)" block) is calibrated in EN
  // characters ("You own " = 8ch); "Vous détenez " (13ch) overflowed the pill
  // at desktop-1440/tablet/landscape. "Mise " (5ch) is shorter than EN, so
  // every lane that fits EN fits this — and it pairs with the same tile's
  // "Aucune mise" no-stake state ("Mise $25 · 10%" = your stake + share).
  "board.tile.youOwn": "Mise {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Ouverture au verrouillage",
  "board.tile.resultOpened": "Ouverte · {amount} en cartes",
  "board.tile.resultWinner": "GAGNANTE · {amount} en cartes",
  "board.tile.resultLost": "Perdue au tirage · {amount} en cartes",
  // MONEY IS SACRED split (2026-07-24): word-only variants + the short
  // fallbacks the label swaps to when even the plain word would overflow.
  "board.tile.resultOpenedWord": "Ouverte",
  "board.tile.resultWinnerWord": "GAGNANTE",
  "board.tile.resultLostWord": "Perdue au tirage",
  "board.tile.resultShortWon": "GAGNÉ",
  "board.tile.resultShortLost": "Perdu",
  "board.tile.overBalance": "Solde dépassé",
  "board.tile.overBalanceTitle": "Il faut {needed} · vous avez {have}. Baissez la mise ou déposez.",
  "board.tile.overCap": "dépasse votre plafond de {amount} (paramètres)",
  "board.tile.needHave": "Il faut {needed} · vous avez {have}",
  "board.tile.clueExactCardOdds": "cette carte précise · {pct} de tirage",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Mise",
  "board.stakeControl.packMatchTitle": "Chaque clic sur une tuile mise un pack {packName} entier.",
  "board.stakeControl.packMatchTag": "1 pack {packName} par clic",
  // PACK COUNT stepper (owner ask 2026-07-24): count-aware siblings.
  "board.stakeControl.packMatchTitleOne": "Chaque clic sur une tuile mise {n} pack {packName} entier.",
  "board.stakeControl.packMatchTitleOther": "Chaque clic sur une tuile mise {n} packs {packName} entiers.",
  "board.stakeControl.packMatchTagOne": "{n} pack {packName} par clic",
  "board.stakeControl.packMatchTagOther": "{n} packs {packName} par clic",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} packs {packName} par clic",
  "board.stakeControl.bidPackGroupAria": "Miser un pack entier sur une tuile",
  "board.stakeControl.bidPackTag": "Miser un pack",
  "board.stakeControl.bidPackInfoTitle":
    "Un clic pose un pack scellé entier sur une tuile. Le pack reste ce pack, il ne fusionne jamais dans un plus gros.",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Choisissez un pack et la quantité. Un clic mise toute la pile sur une case - les plus gros packs tirent de plus grosses cartes. Touches 1 à 8 pour choisir la case.",
  "board.stakeControl.bidPackInfoAria": "Miser un pack, comment ça marche ?",
  "board.stakeControl.packSelectedTitle": "Sélectionné. Cliquez encore pour revenir à une mise de {amount}.",
  "board.stakeControl.packChipTitle": "Chaque clic sur une tuile mise un pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOne": "Sélectionné. Chaque clic sur une tuile mise {n} pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Sélectionné. Chaque clic sur une tuile mise {n} packs {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Chaque clic sur une tuile mise {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Chaque clic sur une tuile mise {n} packs {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "SOLDE DÉPASSÉ",
  "board.stakeControl.overBalanceBody": "Dépasse votre solde de {amount}.",
  "board.stakeControl.bidAmountTag": "Miser un montant",
  "board.stakeControl.bidAmountInfoTitle":
    "Posez le montant que vous voulez sur une tuile. La monnaie se transforme en packs plus gros à mesure qu'elle franchit chaque prix de pack.",
  "board.stakeControl.bidAmountInfoAria": "Miser un montant, comment ça marche ?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Ajouter à la mise d'une tuile",
  "board.stakeControl.bidAmountGroupAria": "Miser un montant sur une tuile",
  "board.stakeControl.packCountGroupAria": "Packs misés par clic",
  "board.stakeControl.packCountDecAria": "Miser moins de packs par clic",
  "board.stakeControl.packCountIncAria": "Miser plus de packs par clic",
  "board.stakeControl.packCountValueTitleOne": "{n} pack du palier armé par clic",
  "board.stakeControl.packCountValueTitleOther": "{n} packs du palier armé par clic",
  "board.stakeControl.incrementTitle": "Passer la mise à {amount}",
  "board.stakeControl.customAriaLabel": "Montant de mise libre en USDC, validé avec Entrée ou en cliquant ailleurs",
  "board.stakeControl.customOverBalanceTitle": "Dépasse votre solde de {amount}. Déposez ou baissez la mise.",
  "board.stakeControl.customTitle": "Tapez un montant, Entrée ou un clic ailleurs le valide",
  "board.stakeControl.resetTitle": "Remettre la mise à {amount}",
  "board.stakeControl.reset": "Rétablir",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Stratégie de mise automatique, s'arme à la clôture de la manche",
  "board.betRail.strategyArmedTip": "Armée, part dans {seconds} s",
  "board.betRail.strategyAriaArmed": "{name}, armée, part dans {seconds} secondes",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, armée, part dans {seconds} secondes. Cliquez pour désarmer.",
  "board.betRail.strategyAriaClickArm": "{name}. Cliquez pour armer.",
  "board.betRail.moreStrategiesAria": "Plus de stratégies de mise auto",
  "board.betRail.moreStrategiesTitle": "Plus de stratégies",
  "board.betRail.cancelArmedAria": "Annuler la mise auto armée",
  "board.betRail.autoBetCancelled": "Mise auto annulée.",
  "board.betRail.roundLockedSkip": "La manche s'est verrouillée avant le départ de la mise auto.",
  "board.betRail.notEnoughBalanceSkip": "Solde insuffisant, la mise auto n'est pas partie.",
  "board.betRail.firedAtClose": "{name} est partie à la clôture de la manche.",
  "board.betRail.firedAtClosePartial": "{name} est partie à la clôture de la manche : {covered} tuiles sur {total}.",
  "board.betRail.strategyGuideAria": "Guide des stratégies de mise auto",
  "board.betRail.strategyGuideTitle": "Guide des stratégies",
  "board.betRail.autoBetEyebrow": "Mise auto",
  "board.betRail.firesInSeconds": "part dans {seconds} s",
  "board.betRail.strategiesDialogAria": "Stratégies de mise auto",
  "board.betRail.closeStrategiesAria": "Fermer les stratégies",
  "board.betRail.strategiesHeading": "Stratégies de mise auto",
  "board.betRail.strategiesIntro":
    "Touchez-en une pour l'armer avec votre mise sélectionnée ({amount}). Elle part juste avant le verrouillage et classe les tuiles selon l'argent posé dessus à cet instant, le signal de la foule.",
  "board.betRail.contrarianHeading": "Choix à contre-courant",
  "board.betRail.contrarianIntro":
    "Quand tout le monde se rue sur la tuile la plus basse, elle devient bondée : la deuxième plus basse paie souvent mieux. Ces stratégies restent hors de la barre principale pour la garder lisible.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Votre compte et votre mise",
  "board.betRail.balance": "Solde",
  "board.betRail.activeStakes": "Mises actives",
  "board.betRail.collection": "Collection",
  "board.betRail.cardCountViewAllSingular": "{count} CARTE · TOUT VOIR",
  "board.betRail.cardCountViewAllPlural": "{count} CARTES · TOUT VOIR",
  "board.betRail.moreCount": "+{count} DE PLUS",
  "board.betRail.noCardsYet": "Collection vide pour l'instant : gagnez une tuile et gardez sa carte.",
  "board.betRail.lastResult": "Dernier coup",
  "board.betRail.eachClickAdds": "Chaque clic ajoute {amount}",
  "board.betRail.depositToPlay": "Déposez pour jouer",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (2026-07-24).
  "board.betRail.affordShortfall": "Il faut {unit}, vous avez {balance}",
  "board.betRail.allTilesPartialCover": "{name}, couvre {covered} tuiles sur 8 à {unit}",
  // LANDSCAPE-DOCK account readout: compact stats for the landscape strip.
  "board.betRail.dockBalance": "Solde",
  "board.betRail.dockStakes": "Mises",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Prochaine manche dans {seconds} secondes",
  "board.core.nextRoundLine": "Prochaine manche dans {secs}",
  "board.core.playersDecidingAria": "{decided} sur {total} autres joueurs ont décidé",
  "board.core.playersDecidingLine": "Joueurs décidés {ratio}",
  "board.core.pastRoundResultsAria": "Résultats des manches passées",
  "board.core.pastRounds": "Manches passées",
  "board.core.winsAmount": "{label} remporte {amount}",
  "board.core.youLost": "Perdu !",
  "board.core.didNotStake": "Vous n'avez pas misé cette manche",
  "board.core.keepCard": "Garder la carte ({amount})",
  "board.core.sellAmount": "Vendre {amount}",
  "board.core.decideHint": "Décidez maintenant ou pendant la prochaine manche",
  "board.core.roundResultLink": "Résultat de la manche #{roundId}",
  "board.core.fullReceiptHint": "Reçu complet → Résultats",
  "board.core.splitReceiptHint": "Partage · reçu → Résultats",
  "board.core.eyebrowDrawing": "Tirage du gagnant",
  "board.core.eyebrowPullsIn": "Tirages faits",
  "board.core.eyebrowLocked": "Verrouillé",
  "board.core.headlineDrawing": "Un seul ticket décide",
  "board.core.headlinePullsIn": "Packs tous ouverts",
  "board.core.headlineRoundLocked": "Manche verrouillée",
  "board.core.headlinePacksOpening": "Ouverture des packs…",
  "board.core.subDrawing": "tirage pondéré vérifiable",
  "board.core.subPullsIn": "tirage du gagnant à suivre",
  "board.core.subIntro": "{count} {noun} en jeu",
  "board.core.subOpening": "{count} {noun} s'ouvrent sur le plateau",
  "board.core.pool": "Cagnotte",
  "board.core.totalPool": "Cagnotte totale",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  "board.core.clockRoundOpen": "Manche ouverte",
  "board.core.clockLockedRevealing": "Verrouillé · révélation",
  "board.core.clockSettled": "Réglée",
  "board.core.clockAriaLabel": "{label}, {seconds} secondes",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Carte standard, le plus gros parieur la garde ou la revend, au prorata.",
  "board.settlement.dispositionSellBackSplit": "Règle Grail : revendue par défaut, USDC partagé sur toute la tuile.",
  "board.settlement.dispositionTopBackerKeeps": "Règle Grail : le plus gros parieur la garde et verse sa part à chacun.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds} s pour décider",
  "board.settlement.panelAria": "Détails de la tuile et règlement",
  "board.settlement.collapsePanelAria": "Réduire le panneau",
  "board.settlement.expandPanelAria": "Ouvrir le panneau",
  "board.settlement.roundResultsLink": "Résultats",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Panneau de manche",
  "board.settlement.clickTileToBack": "Les gains arrivent ici. Cliquez sur une tuile pour miser {amount} dessus.",
  "board.settlement.lastResultLine": "Dernier coup · Manche #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "vous gagnez {amount}",
  "board.settlement.view": "voir",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Tuile perdante · pourquoi",
  "board.settlement.losingTileTitle": "{label} · {amount} sur la tuile",
  "board.settlement.loserWhy":
    "A ouvert {cardName} ({amount}), le tirage est tombé sur {winnerLabel}. {pct} des tickets n'ont rien rapporté{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", dont vos {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Cette tuile était vide, aucune mise, aucun ticket de tirage.",
  "board.settlement.backToSettlement": "Retour au règlement · {winnerLabel} l'emporte",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · carte {index}/{total} · {amount} sur la tuile",
  "board.settlement.pullCaptionSingle": "{label} · {amount} sur la tuile",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Packs en ouverture",
  "board.settlement.revealOpenedTitle": "{label} a ouvert {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} de chances de rafler la cagnotte de {poolAmount}. Le tirage du gagnant est lancé.",
  "board.settlement.revealEmpty": "Les packs s'ouvrent sur le plateau, le tirage du gagnant tombe dans un instant.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Dernier coup · Manche #{roundId}",
  "board.settlement.tileTakesTable": "{label} rafle la table pour {amount}",
  "board.settlement.whyWon": "Désignée par le ticket pondéré vérifiable, {label} détenait {pct}% de la cagnotte au verrouillage.",
  "board.settlement.lostNoStakeIn": "Perdu, vous n'aviez rien sur {label}",
  "board.settlement.theWinnerFallback": "le gagnant",
  "board.settlement.wonNoStake": "{label} l'emporte · vous n'aviez pas misé",
  "board.settlement.aTileFallback": "Une tuile",
  "board.settlement.lossNoteWithStake": "Vos {amount} étaient sur d'autres tuiles, survolez-en une pour voir ce qui s'y est passé.",
  "board.settlement.lossNoteNone": "Vous n'avez misé sur aucune tuile cette manche.",
  "board.settlement.topCardOfRound": "Meilleure carte de la manche · {label}",
  "board.settlement.keepCardTo": "Garder la carte ({amount}) → collection",
  "board.settlement.sellBackFor": "Revendre pour {amount}",
  "board.settlement.continueNextRound": "Passer à la manche suivante",
  "board.settlement.continue": "Continuer",
  "board.settlement.keepSellHint":
    "Garder = la carte part en collection · vendre = {amount} tout de suite ({pct}% de sa valeur, le taux de rachat CC de ce pack) · {noAction}",
  "board.settlement.noActionKept": "sans action = la carte vous est conservée.",
  "board.settlement.noActionAutoSell": "sans action = vente automatique à la fin de la prochaine manche.",
  "board.settlement.revealOnlyNote":
    "Les tuiles perdantes sont en révélation seule sur ce canari, leurs tirages repartent au coffre. Seule la carte de la tuile gagnante est versée.",
  "board.settlement.payoutSplit": "Répartition du versement",
  "board.settlement.poolChaseFeedLine": "Cagnotte {pool} · apport Chasse {feed}",
  "board.settlement.chaseAddSuffix": " · CHASSE +{amount}",
  "board.settlement.physicalCardArrow": "Carte physique →",
  "board.settlement.grailSecuredSuffix": " (Grail sécurisé)",
  "board.settlement.grailSoldBack": "Grail revendu ({amount}) → partage USDC ci-dessus.",
  "board.settlement.cardAssignmentHead": "Attribution des cartes",
  "board.settlement.cardLabel": "carte {amount}",
  "board.settlement.soldToVault": "revendue au coffre · produit dans le partage",
  "board.settlement.decisionTopBackerSuffix": " (plus gros parieur · garder ou vendre)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} déduits de son USDC",
  "board.settlement.cardsSpreadNote":
    "Les cartes sont réparties entre le plus de parieurs possible : une carte attribuée coûte son taux de rachat CC (85 à 93% selon le pack), prélevé sur l'USDC de ce parieur (même somme qu'une revente, et il garde le potentiel de hausse). Seules les cartes que personne n'absorbe repartent au coffre.",
  "board.settlement.chaseHitLabel": "La Chasse a frappé !",
  "board.settlement.chasePaidLine": "{amount} versés dans ce partage.",
  "board.settlement.chaseMissLabel": "PAS DE CHASSE.",
  "board.settlement.chaseNowLine": "Chasse : {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Vérifier le tirage",
  "board.settlement.verifyDrawSub": "tirage vérifiable · voir le reçu du tirage",
  "board.settlement.roundIdLabel": "id de manche",
  "board.settlement.winningDrawLabel": "tirage gagnant",
  "board.settlement.drawSeedLabel": "graine du tirage",
  "board.settlement.proofIdLabel": "id de preuve",
  "board.settlement.ticketOfCount": "#{index} sur {count}",
  "board.settlement.verifying": "Vérification…",
  "board.settlement.recheckDraw": "Revérifier",
  "board.settlement.verifierLink": "Vérificateur ↗",
  "board.settlement.verifiedOk": "✓ Tirage vérifié, ce gagnant se confirme à partir de sa graine publiée.",
  "board.settlement.verifiedBad": "✗ Ce tirage ne correspond pas à sa graine, ne vous y fiez pas.",
  "board.settlement.everyRoundNote": "Chaque manche tire un gagnant à partir d'une graine publiée que vous pouvez revérifier.",
  "board.settlement.noPacksNote": "Aucun pack misé cette manche, rien à tirer.",
  "board.settlement.settledHoverHint": "Réglée, survolez une tuile pour l'inspecter.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Mise trop élevée pour votre solde",
  "board.betTooBig.dismissAria": "Ignorer",
  "board.betTooBig.gotIt": "Compris",
  "board.betTooBig.body": "Miser sur {slotLabel} demande {needed}, vous avez {held}. Il vous manque {shortfall}.",
  "board.betTooBig.deposit": "Déposer {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Joueurs, classés par mise totale",
  "board.wagerLadder.title": "Joueurs",
  "board.wagerLadder.countZero": "Aucune mise",
  "board.wagerLadder.countOther": "{n} dans la manche · par mise totale",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "Réduire le panneau des joueurs",
  "board.wagerLadder.lastRoundAria": "Voir les résultats de la manche précédente, manche #{n}",
  "board.wagerLadder.lastRoundLabel": "Résultats de la manche précédente",
  "board.wagerLadder.empty": "Personne n'a encore misé sur une tuile cette manche.",
  "board.wagerLadder.leaderAria": "Leader",
  "board.wagerLadder.openProfileTitle": "Ouvrir le profil de {name} dans un nouvel onglet",
  "board.wagerLadder.miniGridTotal": "{amount} au total",
  // Two keys, not one {name} token: French also resolves "your tiles" and
  // "someone else's tiles" with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "Tuiles misées par {name}",
  "board.wagerLadder.miniGridTilesAriaYou": "Tuiles que vous avez misées",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "Vendre des cartes pour financer cette mise",
  "board.bidFund.eyebrow": "PLUS D'USDC",
  "board.bidFund.titleOne": "Vendre votre carte pour couvrir cette mise ?",
  "board.bidFund.titleMany": "Vendre ces cartes pour couvrir cette mise ?",
  // {buyback} and {amount} each render inside their own <b> at the call site,
  // so the emphasis survives this word order.
  "board.bidFund.body": "Vendre {cards} rapporte {buyback}, de quoi miser {amount} sur {tile}.",
  "board.bidFund.bodyCardsMany": "ces cartes",
  "board.bidFund.note":
    "Il vous manque {amount}. Les cartes partent au taux de rachat CC de leur pack (85 à 93%). C'est définitif.",
  "board.bidFund.keepCards": "Garder les cartes",
  "board.bidFund.sellAndBid": "Vendre et miser {amount}",
  "board.bidFund.autoSellSwitch": "Encaisser mes gains en USDC automatiquement",
  "board.bidFund.autoSellNoteOn":
    "Chaque gain est encaissé au taux de rachat dès qu'il tombe. Plus de choix garder ou vendre. Les cartes Grail ne sont jamais vendues automatiquement. Modifiable à tout moment dans les paramètres.",
  "board.bidFund.autoSellNoteOff":
    "Activez cette option et chaque carte gagnée est encaissée en USDC au taux de rachat, sans question posée. Les cartes Grail ne sont jamais vendues automatiquement. Modifiable à tout moment dans les paramètres.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "Miser au clavier ?",
  "board.hotkeys.optInBody":
    "Une touche mise instantanément sur sa tuile, au montant en cours. Rien n'a été misé à l'instant.",
  "board.hotkeys.notNow": "Plus tard",
  "board.hotkeys.enableKeys": "Activer les touches",
  "board.hotkeys.turnOff": "Désactiver",
  "board.hotkeys.turnOffTitle": "Les touches restent inactives jusqu'à réactivation dans les paramètres.",
  "board.hotkeys.changeKeys": "Changer les touches",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "Tuile ouverte",
  "board.boardV1.onTile": "sur la tuile",
  "board.boardV1.changeAmount": "monnaie {amount}",
  "board.boardV1.oddsSuffix": "{pct} de chances",
  "board.boardV1.openedOdds": "Ouverte · {pct} de chances",
  "board.boardV1.emptyNeverInDraw": "Vide · jamais dans le tirage",
  "board.boardV1.winnerYourShare": "GAGNANTE · votre part est versée",
  "board.boardV1.winnerNoStake": "GAGNANTE · vous n'aviez pas misé",
  "board.boardV1.lostOdds": "Perdue au tirage · {pct} de chances",
  "board.boardV1.tileClickTitle": "Cliquez n'importe où pour miser {amount} sur {label}",
  "board.boardV1.youAmount": "Vous {amount}",
  "board.boardV1.youNone": "Vous -",
  "board.boardV1.pctOfTile": "{pct} de la tuile",
  "board.boardV1.noStakeYet": "aucune mise",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "{amount} misés · {pct} de la tuile",
  "board.boardV1.statusWaitingDraw": "En attente du tirage…",
  "board.boardV1.statusWonSplit": "{amount} gagnés sur le partage",
  "board.boardV1.statusOnWinningTile": "Sur la tuile gagnante",
  "board.boardV1.statusNoPayout": "Aucun gain cette manche",
  "board.boardV1.statusYourStake": "Votre mise en cours",
  "board.boardV1.statusBacking": "Vous misez sur cette tuile",
  "board.boardV1.backerCount.one": "{n} parieur",
  "board.boardV1.backerCount.other": "{n} parieurs",
  "board.boardV1.noBackersYet": "Aucun parieur",
  // {amount} renders inside its own <b> at the call site.
  "board.boardV1.backAmount": "Miser {amount}",
  "board.boardV1.backBtnTitle": "Miser {amount} USDC sur {label}",
  "board.boardV1.evolveTitle": "Ajoute exactement {amount} sur {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} sur la tuile",
  "board.boardV1.opensAs": "S'ouvre en · {summary}",
  "board.boardV1.noPacksYet": "Aucun pack, misez pour financer le premier",
  "board.boardV1.whyOpenedDrawing":
    "A ouvert {cardName} ({amount}) à {pct} de chances, le gagnant est en cours de tirage.",
  "board.boardV1.whyWon":
    "A remporté le tirage pondéré à {pct} de chances. A ouvert {cardName} ({amount}) ; la cagnotte se partage au prorata entre ses parieurs.",
  "board.boardV1.whyLost":
    "A perdu le tirage pondéré, {pct} de chances ({amount} sur la cagnotte de {poolAmount}). Elle a bien ouvert {cardName} ({cardAmount}), mais seule la tuile gagnante paie.",
  "board.boardV1.whyEmpty": "Tuile vide, aucune mise, aucun ticket de tirage.",
  // Both suffixes are appended to a whyX sentence above, hence the leading space.
  "board.boardV1.whyYourStakeSuffix": " Votre mise ici : {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Vous n'aviez rien misé ici.",
  "board.boardV1.ifWins": "Si cette tuile gagne : vous prenez ~{amount} sur la cagnotte de {poolAmount}.",
  "board.boardV1.clickToBack": "Cliquez pour miser le montant sélectionné et ouvrir son premier pack au verrouillage.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "Rang {rank}, {name}, misé {wagered}, net {net}, taux de victoire {pct} pour cent",
  "board.leaderboard.youTag": "VOUS",
  "board.leaderboard.youRankTag": "VOUS · #{n}",
  "board.leaderboard.statWagered": "MISÉ",
  "board.leaderboard.statNetPl": "GAIN NET",
  "board.leaderboard.statWinRate": "% VICTOIRES",
  "board.leaderboard.statRounds": "MANCHES",
  "board.leaderboard.statPoolShare": "PART DE CAGNOTTE",
  "board.leaderboard.statFirstSeen": "ARRIVÉ LE",
  "board.leaderboard.statBiggestPull": "MEILLEUR TIRAGE",
  "board.leaderboard.shareOfToday": "des mises du jour",
  "board.leaderboard.shareOfAllTime": "des mises cumulées",
  "board.leaderboard.noneYet": "AUCUN",
  "board.leaderboard.viewFullProfile": "Voir le profil complet",
  "board.leaderboard.live": "EN DIRECT",
  "board.leaderboard.fullRankings": "Classement complet",
  // The count line renders each number inside its own <b>.
  "board.leaderboard.playerCount.one": "{n} joueur",
  "board.leaderboard.playerCount.other": "{n} joueurs",
  "board.leaderboard.roundCount.one": "{n} manche",
  "board.leaderboard.roundCount.other": "{n} manches",
  "board.leaderboard.colPlayer": "Joueur",
  "board.leaderboard.colWagered": "Misé",
  "board.leaderboard.colNet": "Net",
  "board.leaderboard.colWin": "Victoires",
  "board.leaderboard.colBiggestPull": "Meilleur tirage",
  "board.leaderboard.sortGroupAria": "Trier le classement",
  "board.leaderboard.sortBy": "Trier par {col}",
  "board.leaderboard.podiumNet": "{amount} net",
  "board.leaderboard.podiumTopPull": "Meilleur tirage",
  "board.leaderboard.fullStandings": "Classement complet · {n} parieurs",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  "board.betRail.stakeUnitPackOne": "{n} pack {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} packs {packName} ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "Photo de profil X de {handle}",
  "board.connectX.connectedTitle": "Connecté via X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "Emplacement {packName} (aucun sur cette tuile)",
  "board.packChips.fixedChipTitle": "{n} x {packName} à {amount} pièce",
  "board.packChips.fixedChipTitleTotalSuffix": " · {amount} au total",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Formé par la cagnotte de la tuile, personne n'a misé ce pack directement",
  "board.packChips.pooledSome": "{n} sur {total} formés par la cagnotte de la tuile",
  "board.packChips.bidWhole": "Misé en pack entier",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Aussi sur cette tuile : {list}",
  "board.packChips.morePacks.one": "{n} pack de plus",
  "board.packChips.morePacks.other": "{n} packs de plus",
  "board.packChips.morePacksWithList.one": "{n} pack de plus : {list}",
  "board.packChips.morePacksWithList.other": "{n} packs de plus : {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). Pack TIER NAMES ({tier}) stay English brand terms.
  "board.tile.splitBidsPool": "Mises {bids} · cagnotte {pool}",
  "board.tile.splitAllBids": "Les {bids} ont tous été misés en packs entiers",
  "board.tile.splitAllPool": "Les {pool} viennent tous de la cagnotte de la tuile",
  "board.tile.splitPoolNote": "Les packs en pointillés viennent de la cagnotte, personne ne les a misés.",
  "board.tile.evolveLooseTitle": "{loose} de monnaie sur cette tuile deviennent un pack {tier} à {target}",
  "board.tile.evolveNoLooseTitle":
    "Pas encore de monnaie sur cette tuile. La monnaie devient un pack {tier} à {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name}, couvre {covered} tuiles sur {total} à {unit}",
  "board.betRail.allTilesPlanFull":
    "À la clôture, mise sur les {total} tuiles à {unit}. Total {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "À la clôture, mise sur {covered} tuile sur {total} à {unit}. Votre solde de {balance} couvre {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "À la clôture, mise sur {covered} tuiles sur {total} à {unit}. Votre solde de {balance} couvre {spend}.",
  "board.betRail.allTilesPlanNone":
    "Votre solde de {balance} ne couvre même pas une mise de {unit}, aucune tuile ne sera misée.",
  "board.betRail.allTilesShortHistory.one":
    "La mise auto sur toutes les tuiles demande {needed} pour {tiles} tuiles à {unit}. Vous avez {balance}, donc {covered} tuile a été misée.",
  "board.betRail.allTilesShortHistory.other":
    "La mise auto sur toutes les tuiles demande {needed} pour {tiles} tuiles à {unit}. Vous avez {balance}, donc {covered} tuiles ont été misées.",
  "board.betRail.allTilesNoneHistory":
    "La mise auto sur toutes les tuiles demande {needed} pour {tiles} tuiles à {unit}. Vous avez {balance}, donc aucune tuile n'a été misée.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "À la clôture",
  "board.betRail.planTotal": "Total",
  "board.betRail.planMathFull": "{total} tuiles × {amount}",
  "board.betRail.planMathShort": "{covered} tuiles sur {total} × {amount}",
  "board.betRail.planPerTile": "{unit} par tuile",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (Max / Min
  // / Tous, kept as short as the English), `.name` is also substituted into the
  // {name} token of board.betRail.strategyAria* / firedAtClose, `.closeLine`
  // renders right after `.rowTitle` as "rowTitle, closeLine". Vous register,
  // established vocabulary: tuile, mise, manche, clôture de la manche, leader,
  // armer.
  "board.strategy.highest.label": "Max",
  "board.strategy.highest.name": "Armer : miser sur la tuile la plus haute à la clôture de la manche",
  "board.strategy.highest.detail":
    "Arme votre mise sur la tuile qui porte le plus d'argent, résolue juste avant la clôture de la manche.",
  "board.strategy.highest.rowTitle": "Tuile la plus haute",
  "board.strategy.highest.closeLine": "mise sur la plus grosse tuile à la clôture de la manche",
  "board.strategy.highest.gridLine": "plus d'argent à la clôture",

  "board.strategy.lowest.label": "Min",
  "board.strategy.lowest.name": "Armer : miser sur la tuile la plus basse à la clôture de la manche",
  "board.strategy.lowest.detail":
    "Arme votre mise sur la tuile la moins bondée, résolue juste avant la clôture de la manche. Si tout le monde se rue sur la plus basse, elle n'est plus la plus basse à ce moment-là.",
  "board.strategy.lowest.rowTitle": "Tuile la plus basse",
  "board.strategy.lowest.closeLine": "mise sur la plus petite tuile à la clôture de la manche",
  "board.strategy.lowest.gridLine": "moins d'argent à la clôture",

  "board.strategy.secondHighest.label": "2e max",
  "board.strategy.secondHighest.name":
    "Armer : miser sur la deuxième tuile la plus haute à la clôture de la manche",
  "board.strategy.secondHighest.detail":
    "Arme votre mise un cran sous le leader, résolue juste avant la clôture de la manche.",
  "board.strategy.secondHighest.rowTitle": "2e tuile la plus haute",
  "board.strategy.secondHighest.closeLine": "mise sur la tuile juste sous le leader à la clôture de la manche",
  "board.strategy.secondHighest.gridLine": "un cran sous le leader",

  "board.strategy.secondLowest.label": "2e min",
  "board.strategy.secondLowest.name":
    "Armer : miser sur la deuxième tuile la plus basse à la clôture de la manche",
  "board.strategy.secondLowest.detail":
    "Le choix à contre-courant : quand tout le monde se rue sur la tuile la plus basse, elle devient bondée, donc la deuxième plus basse paie souvent mieux. S'arme maintenant, se résout juste avant la clôture de la manche.",
  "board.strategy.secondLowest.rowTitle": "2e tuile la plus basse",
  "board.strategy.secondLowest.closeLine":
    "mise sur la tuile juste au-dessus du bas bondé à la clôture de la manche",
  "board.strategy.secondLowest.gridLine": "un cran au-dessus du bas",

  "board.strategy.allTiles.label": "Tous",
  "board.strategy.allTiles.name": "Armer : miser sur toutes les tuiles à la clôture de la manche",
  "board.strategy.allTiles.detail":
    "Arme votre mise sur toutes les tuiles éligibles, résolue juste avant la clôture de la manche. Dépense totale = votre mise x le nombre de tuiles à cet instant.",
  "board.strategy.allTiles.rowTitle": "Toutes les tuiles",
  "board.strategy.allTiles.closeLine": "répartit votre mise à la clôture de la manche",
  "board.strategy.allTiles.gridLine": "votre mise sur chaque tuile",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "Touchez encore : {unit}",
  "board.tile.confirmClickAgain": "Cliquez encore : {unit}",
  "board.tile.betOffNotice": "Les mises sont désactivées dans les réglages",
  "board.stakeControl.pickPackHint": "Choisissez un pack pour miser",
  "board.stakeControl.emptyStakeLead": "Choisissez un pack",
  "board.stakeControl.emptyStakeHint": "Il devient votre mise",
  "gear.betInput.label": "Placer une mise",
  "gear.betInput.hint":
    "Comment une pression sur une tuile (et sa touche numérique) place votre mise. Double demande d'abord un toucher de confirmation - le réglage par défaut sur écran tactile. Désactivé passe en mode spectateur : aucune mise possible.",
  "gear.betInput.optionSingle": "Un toucher",
  "gear.betInput.optionDouble": "Double toucher",
  "gear.betInput.optionOff": "Désactivé",
  "gear.cardOpen.label": "Ouvrir les cartes",
  "gear.cardOpen.hint":
    "Double demande un toucher de confirmation avant qu'une carte n'ouvre sa page - le réglage par défaut sur écran tactile.",
} as Record<string, string>;
