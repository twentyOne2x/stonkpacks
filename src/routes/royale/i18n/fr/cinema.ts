// French (Français): reviewed and re-edited by a native-speaker editorial
// pass (i18n epic, fr cinema segment). Register is FORMAL throughout
// (vouvoiement, never tutoiement). Same key set as en/cinema.ts. See
// royaleI18n.ts for the {token} interpolation convention and the
// "no em dash" rule.
//
// Segment: cinema. Owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (the copy: fields of REVEAL_CINEMA_SEQUENCE),
// RoyaleRoundCardWall.tsx, RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx,
// RoyalePrizeModal.tsx, RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx.
//
// Terminology: matches the core/board/arena/docs/chat/misc segments already
// shipped for this locale ("manche" = round, "cagnotte" = pool/pot,
// "jackpot" = the Chase's rolling jackpot, "tuile" = tile, "parieurs" =
// backers, "le plus gros parieur" = top backer, "la Chasse" = The Chase,
// "tirage" = draw/pull, "coffre" = vault, "carte gradée" = slab, "graine" =
// seed, "équité prouvable" = provably fair, "rediffusion" = replay).
// cinema.theatre.* deliberately mirrors board.settlement.*'s wording word for
// word wherever the English is the same sentence, so the settlement panel and
// the round theatre never disagree. The five pack-tier brand names (Starter,
// Elite, Legendary, Grail, Mythic) stay in English, including the ALL-CAPS
// rarity stamps below that reuse those exact names, as do attn ROYALE, ATTN,
// USDC, X, SLABZ and CollectorCrypt.
//
// NBSP NOTE: cinema.tileValue.cardValueLabel and cinema.tileValue.onTileLabel
// carry a literal NBSP (U+00A0, not a plain space) between their two words in
// en.ts, to stop an orphan word at a line break. Preserved here between the
// French pair as well, do not replace with a normal space.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "OUVERTURE DES PACKS",
  "cinema.phaseAnnounce.packsOpening.subtitle": "révélation des cartes · réévaluation de chaque tuile",
  "cinema.phaseAnnounce.winnerDraw.title": "TIRAGE DU GAGNANT",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "pondéré par le total des tuiles",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Verrouillé : le plateau devient le spectacle",
  "cinema.phase.packsEnter.copy": "Les packs débarquent",
  "cinema.phase.packsOpening.copy": "Les packs se déchirent : les cartes se révèlent, les tuiles se réévaluent",
  "cinema.phase.cardsByTile.copy": "Cartes révélées : chaque tuile, la valeur d'abord",
  "cinema.phase.valueScan.copy": "Lecture du plateau : les plus gros tirages s'allument",
  "cinema.phase.winnerDraw.copy": "Tirage du gagnant : pondéré par le total des tuiles",
  "cinema.phase.winnerLock.copy": "Gagnant verrouillé",
  "cinema.phase.loserValueConverge.copy": "Les tirages perdants repartent au coffre : leur valeur revient au gagnant",
  "cinema.phase.winnerPotCountUp.copy": "La cagnotte atterrit sur la tuile gagnante",
  "cinema.phase.chaseFeed.copy": "La Chasse prend sa part",
  "cinema.phase.chasePayout.copy": "La Chasse tombe : une tuile gagne gros",
  "cinema.phase.allocation.copy": "Vous obtenez",
  "cinema.phase.keepSellDecision.copy": "Garder ou vendre : la décision court jusqu'à la manche suivante",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "AU COFFRE",
  "cinema.vaultLock.plateSub": "LA CHASSE",
  "cinema.vaultLock.status": "VERROUILLÉ",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "AUCUNE CARTE OUVERTE CETTE MANCHE",
  "cinema.cardWall.won": "GAGNÉ",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP TIRAGE",
  "cinema.cardWall.rarity.common": "COMMUNE",
  "cinema.cardWall.rarity.rare": "RARE",
  "cinema.cardWall.rarity.epic": "ÉPIQUE",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "GARDÉE",
  "cinema.cardWall.status.sold": "VENDUE",
  "cinema.cardWall.status.toTheChase": "VERS LA CHASSE",
  "cinema.cardWall.status.rake": "FRAIS",
  "cinema.cardWall.owner.vault": "COFFRE",
  "cinema.cardWall.owner.you": "VOUS",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Entrée ouvre les détails de la carte.",
  "cinema.cardWall.sectionAriaLabel": "Toutes les cartes ouvertes cette manche, les plus chères en premier",
  "cinema.cardWall.eyebrow": "Cartes ouvertes",
  "cinema.cardWall.rake.title": "Frais de protocole",
  "cinema.cardWall.rake.metaOne": "1 carte prélevée",
  "cinema.cardWall.rake.metaMany": "{n} cartes prélevées",
  "cinema.cardWall.rake.hide": "Masquer",
  "cinema.cardWall.rake.show": "Afficher",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Fermer la révélation",
  "cinema.close.title": "Fermer la révélation (Échap)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Gagnant officiel",
  "cinema.provCaption.round": "Manche",
  "cinema.provCaption.verifyAt": "Vérifier sur",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Manche #{n}",
  "cinema.bar.vrfBadge": "Propulsé par le VRF de CollectorCrypt",
  "cinema.bar.chaseFeed": "Chasse +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "OUVERTURE",
  "cinema.phaseShort.drawing": "TIRAGE",
  "cinema.phaseShort.results": "RÉSULTATS",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "GAGNANT",
  "cinema.core.tileWins": "{tile} gagne",
  "cinema.core.inCards": " EN CARTES",
  "cinema.core.poolSuffix": " CAGNOTTE",
  "cinema.core.totalCardValue": "VALEUR DES CARTES",
  "cinema.core.totalPool": "CAGNOTTE TOTALE",
  "cinema.core.tilesLive": "{n} TUILES EN JEU",
  "cinema.core.packsSuffix": " · {n} PACKS",
  "cinema.core.yourStake": "Votre mise",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Aucune mise",
  "cinema.heatOnly.note": "USDC seul · aucun pack cette manche",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} packs",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "A perdu au tirage. Les cartes reviennent aux parieurs de la tuile gagnante.",
  "cinema.vaultNote.heatOnlyNoPack": "Aucun pack cette manche · la monnaie part dans la cagnotte",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "depuis {pack}",
  "cinema.grail.fromPackRate": "depuis {pack} · {pct} de tirage",
  "cinema.grail.pullTitle": "TIRAGE GRAIL",
  "cinema.grail.fromPackVisible": "depuis un pack {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, depuis un pack {pack}",
  "cinema.grail.multiTitle": "{n} GRAILS CETTE MANCHE",
  "cinema.grail.galleryTileFromPack": "{tile} · depuis {pack}",
  "cinema.grail.galleryMore": "+{n} de plus",
  "cinema.card.openInNewTab": "Ouvrir la fiche de la carte {name} dans un nouvel onglet",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Depuis un pack {pack}, {pct} de taux de tirage. Entrée ouvre les détails de la carte.",
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Entrée ouvre les détails de la carte.",
  "cinema.card.bandChancePct": "{pct}% de chances depuis un pack {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} GAGNE",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "FENÊTRE DE VENTE",
  "cinema.sellWindow.secToDecide": "SEC POUR DÉCIDER",
  "cinema.sellWindow.noActionAutoSells": "SANS ACTION = VENTE AUTOMATIQUE AU PROCHAIN VERROUILLAGE",
  "cinema.sellWindow.noActionKeeps": "SANS ACTION = LA CARTE VOUS RESTE · VENDEZ QUAND VOUS VOULEZ DEPUIS VOS CARTES",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "valeur carte",
  "cinema.tileValue.onTileLabel": "sur tuile",
  "cinema.tileValue.oddsWord": "chances",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "la tuile touchée",
  "cinema.chase.fires": "LA CHASSE TOMBE",
  "cinema.chase.jackpotReleasingTo": "JACKPOT LIBÉRÉ VERS {tile}",
  "cinema.chase.winningTileFallback": "LA TUILE GAGNANTE",
  "cinema.chase.feedThisRound": "La Chasse +{value} cette manche",
  "cinema.chase.cardToChase": "CARTE VERS LA CHASSE",
  "cinema.chase.bestLosingCardNamed": "Meilleure carte perdante · {name} · {value} verrouillés",
  "cinema.chase.bestLosingCardVault": "Meilleure carte perdante verrouillée au coffre",
  "cinema.chase.jackpotGrows": "La Chasse +{value} · le jackpot grossit",
  "cinema.chase.hitsAriaLabel": "La Chasse frappe {tile} pour {value}",
  "cinema.chase.alsoHolds": "La Chasse détient aussi",
  "cinema.chase.alsoHoldsAriaOne": "La Chasse détient aussi 1 carte d'une valeur de {value}",
  "cinema.chase.alsoHoldsAriaMany": "La Chasse détient aussi {n} cartes d'une valeur de {value}",
  "cinema.chase.more": "de plus",
  "cinema.chase.cardsTotalOne": "1 carte · {value} en cartes gradées",
  "cinema.chase.cardsTotalMany": "{n} cartes · {value} en cartes gradées",
  "cinema.chase.hitsKicker": "LA CHASSE FRAPPE",
  "cinema.chase.winsBig": "GAGNE GROS",
  "cinema.chase.yourCut": "VOTRE PART",
  "cinema.chase.otherBackerOne": "{n} autre parieur · au prorata",
  "cinema.chase.otherBackerMany": "{n} autres parieurs · au prorata",
  "cinema.chase.backerOne": "{n} parieur · au prorata",
  "cinema.chase.backerMany": "{n} parieurs · au prorata",
  "cinema.chase.alsoWonRound": "A aussi gagné la manche",
  "cinema.chase.backedTileNote": "Une tuile misée · pas la gagnante de la manche",
  "cinema.chase.heldCardsSpillOne": "1 carte détenue s'échappe",
  "cinema.chase.heldCardsSpillMany": "{n} cartes détenues s'échappent",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "cagnotte",
  "cinema.you.get": "Vous obtenez",
  "cinema.you.lost": "Perdu !",
  "cinema.you.noStakeThisRound": "Vous n'avez pas misé cette manche",
  "cinema.you.mathLine": "{usdc} de part de cagnotte USDC + {cards} en cartes = {total} pour vous",
  "cinema.you.sold": "Vendue {value}",
  "cinema.you.kept": "Gardée · dans votre collection",
  "cinema.you.keepButton": "Garder",
  "cinema.you.sellButton": "Vendre {value}",
  "cinema.you.yours": "à vous",
  "cinema.you.noCardThisRound": "Aucune carte cette manche.",
  "cinema.you.usdcPaidInstantly": "USDC · crédité sur votre solde",
  "cinema.you.keepAll": "Tout garder",
  "cinema.you.sellAllButton": "Tout vendre {value}",
  "cinema.you.sellAllConfirm": "Sûr ? Tout vendre {value}",
  "cinema.you.noOtherBackers": "Aucun autre parieur cette manche",
  "cinema.you.oneOtherSplits": "1 autre se partage {value}",
  "cinema.you.othersSplit": "{n} autres se partagent {value}",
  "cinema.you.oneWinningBackerTakes": "1 parieur gagnant rafle {value}",
  "cinema.you.winningBackersSplit": "{n} parieurs gagnants se partagent {value}",
  "cinema.you.viewFullResults": "Voir tous les résultats",
  "cinema.you.howItWorks": "Comment ça marche",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys. Wording mirrors
  // board.settlement.* wherever the English sentence is the same.
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Carte standard : le plus gros parieur de la tuile la garde ou la revend, au prorata.",
  "cinema.theatre.disposition.sellBackSplit":
    "Règle Grail : aucun parieur ne peut racheter les autres au prorata, le Grail est donc revendu par défaut et l'USDC se partage sur toute la tuile.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Règle Grail : la part au prorata du plus gros parieur couvre déjà le rachat des autres, il garde donc le Grail et verse à chacun sa part de carte en USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} autres joueurs sur {total} ont décidé ; prochaine manche dans {seconds} secondes",
  "cinema.theatre.playersDeciding": "Joueurs en décision {count}",
  "cinema.theatre.nextRoundIn": "prochaine manche dans {seconds}",
  "cinema.theatre.secondsShort": "{n} s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Manche en cours de règlement",
  "cinema.theatre.stageLockingBoard": "Verrouillage…",
  "cinema.theatre.stagePacksOpening": "Les packs s'ouvrent sur le plateau",
  "cinema.theatre.stageWinnerDrawn": "Gagnant tiré",
  "cinema.theatre.headlineNoEntries": "Aucune entrée cette manche",
  "cinema.theatre.headlineRevealing": "Révélation des packs…",
  "cinema.theatre.headlineTileWins": "{tile} remporte {value}",
  "cinema.theatre.tileFallback": "Tuile",
  "cinema.theatre.youWon": "Vous gagnez {value}",
  "cinema.theatre.youLostNoStake": "Perdu, vous n'aviez rien sur {tile}",
  "cinema.theatre.winnerFallback": "le gagnant",
  "cinema.theatre.tileWonNoStake": "{tile} l'emporte · vous n'aviez pas misé",
  "cinema.theatre.aTileFallback": "Une tuile",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} tuiles jouées · cagnotte {pool}",
  "cinema.theatre.stripMetaCards": " · {value} en cartes",
  "cinema.theatre.stripMetaCash": " + {value} en cash",
  "cinema.theatre.drawingWinner": "tirage du gagnant",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Résultat de la manche",
  "cinema.theatre.roundSettled": "Manche réglée",
  "cinema.theatre.winner": "Gagnant",
  "cinema.theatre.seedNote":
    "Comprend votre mise de départ de {value} sur {tile} : effacez les mises de départ dans le panneau de mise pour jouer à partir de $0.",
  "cinema.theatre.lossNoteStaked":
    "Vous aviez misé {value} sur d'autres tuiles cette manche. Survolez une tuile derrière ce panneau pour voir ce qu'elle a ouvert et pourquoi elle a perdu.",
  "cinema.theatre.lossNoteNoStake":
    "Vous n'avez misé sur aucune tuile cette manche, il n'y a donc rien à verser. Choisissez un montant et cliquez sur une tuile à la manche suivante.",
  "cinema.theatre.bonusGrails.one":
    "{n} Grail de plus est tombé cette manche : il revient aux parieurs de la tuile gagnante en butin bonus (gardé, ou revendu au prorata s'il vaut trop cher pour être conservé), jamais aux frais ATTN ni à la Chasse.",
  "cinema.theatre.bonusGrails.other":
    "{n} Grails de plus sont tombés cette manche : ils reviennent aux parieurs de la tuile gagnante en butin bonus (gardés, ou revendus au prorata s'ils valent trop cher pour être conservés), jamais aux frais ATTN ni à la Chasse.",
  "cinema.theatre.noPacksBacked": "Aucun pack misé cette manche. La manche suivante démarre toute seule.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Répartition du versement · {tile}",
  "cinema.theatre.payoutSplitMeta": "Cagnotte {pool} · apport Chasse {feed}",
  "cinema.theatre.payoutSplitChase": " · CHASSE +{value}",
  "cinema.theatre.you": "Vous",
  "cinema.theatre.physicalCard": "Carte physique →",
  "cinema.theatre.grailSecured": " (Grail sécurisé)",
  "cinema.theatre.grailSoldBack": "Grail revendu ({value}) → partage USDC ci-dessus.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "La Chasse a frappé !",
  "cinema.theatre.chaseHitBody":
    "La Chasse s'est déclenchée sur son propre tirage rare : {value} de la Chasse sont donc entrés dans ce gain, ajoutés au partage ci-dessus. La prochaine Chasse recommence aussitôt à se remplir.",
  "cinema.theatre.chaseMissLead": "La Chasse n'est pas tombée cette manche.",
  "cinema.theatre.chaseMissBody": "La Chasse se déclenche sur son propre tirage rare, elle continue donc de grossir : {value} pour l'instant.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Vérifier le tirage",
  "cinema.theatre.vrfSummaryNote": "tirage vérifiable · voir le reçu du tirage",
  "cinema.theatre.vrfRoundId": "id de manche",
  "cinema.theatre.vrfWinningDraw": "tirage gagnant",
  "cinema.theatre.vrfDrawSeed": "graine du tirage",
  "cinema.theatre.vrfProofId": "id de preuve",
  "cinema.theatre.vrfTicket": "#{n} sur {total}",
  "cinema.theatre.vrfVerifying": "Vérification…",
  "cinema.theatre.vrfRecheck": "Revérifier le tirage",
  "cinema.theatre.vrfVerifierLink": "Vérificateur ↗",
  "cinema.theatre.vrfVerified": "✓ Tirage vérifié, ce gagnant se confirme à partir de sa graine publiée.",
  "cinema.theatre.vrfFailed": "✗ Ce tirage ne correspond pas à sa graine, ne vous y fiez pas.",
  "cinema.theatre.vrfNote": "Chaque manche tire un gagnant à partir d'une graine publiée que vous pouvez revérifier.",
  "cinema.theatre.vrfNoDraw": "Aucun pack misé cette manche, rien à tirer.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Garder la carte → collection",
  "cinema.theatre.sellBackFor": "Revendre pour {value}",
  "cinema.theatre.continueNextRound": "Passer à la manche suivante",
  "cinema.theatre.continue": "Continuer",
  "cinema.theatre.settleHint":
    "Garder envoie la carte dans votre collection. Revendre crédite {sell} sur votre solde ({pct}% de {value}, le taux de rachat CC de ce pack). Sans action, la carte est revendue par défaut à la clôture de la manche.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Verrouillé",
  "cinema.prizeModal.stageReveal": "Révélation",
  "cinema.prizeModal.betterLuck": "Ce sera pour la prochaine",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Préparation de votre carte…",
  "cinema.share.renderingPng": "Génération du PNG…",
  "cinema.share.renderFailed": "L'image n'a pas pu être générée. Réessayez.",
  "cinema.share.captionOpened": "La légende est ouverte sur X. Joignez le PNG enregistré.",
  "cinema.share.close": "Fermer",
  "cinema.share.downloadPng": "Télécharger le PNG",
  "cinema.share.shareToX": "Partager sur X",
  "cinema.share.done": "Terminé",
  "cinema.share.provablyFair": "BATAILLES DE PACKS · CHAQUE TIRAGE VÉRIFIABLE",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "multiplicateur {value}",
  "cinema.winShare.multiplier": "MULTIPLICATEUR",
  "cinema.winShare.inCards": "EN CARTES",
  "cinema.winShare.cashWon": "CASH GAGNÉ",
  "cinema.winShare.tileHit": "· TUILE TOUCHÉE",
  "cinema.winShare.entry": "ENTRÉE",
  "cinema.winShare.winOdds": "CHANCES",
  "cinema.winShare.totalValue": "VALEUR TOTALE",
  "cinema.winShare.certLine": "PROPULSÉ PAR SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "MANCHE #{n} · TIRAGE VRF VÉRIFIABLE",
  "cinema.winShare.takeHomeAriaLabel": "gain net {value}",
  "cinema.winShare.totalTakeHome": "TOTAL EMPOCHÉ",
  "cinema.winShare.breakdown.one": "{cash} EN CASH + {n} CARTE ({value})",
  "cinema.winShare.breakdown.other": "{cash} EN CASH + {n} CARTES ({value})",
  "cinema.winShare.deposited": "DÉPOSÉ",
  "cinema.winShare.wonBy": "GAGNÉ PAR {name}",
  "cinema.winShare.theGrail": "LE GRAIL",
  "cinema.winShare.topPull": "TOP TIRAGE",
  "cinema.winShare.topCardOfRound": "MEILLEURE CARTE DE LA MANCHE",
  "cinema.winShare.poweredBySlabz": "PROPULSÉ PAR SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Partagez votre gain",
  "cinema.winShare.pngSaved": "PNG enregistré. Joignez-le à votre publication, X ne peut pas le faire à votre place.",
  "cinema.winShare.renderingHdVideo": "Génération de la vidéo HD de la manche…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Génération de la vidéo HD de la manche : {seconds} s{pct}",
  "cinema.winShare.hdVideoSaved": "Vidéo HD enregistrée. Joignez-la à votre publication à la place de l'image.",
  "cinema.winShare.hdRenderFailed": "Le rendu HD a échoué. Réessayez.",
  "cinema.winShare.hdVideoButton": "Vidéo HD de la manche",
  "cinema.winShare.hdVideoTitle": "Générer cette manche en mp4 HD (service de rendu local) et l'enregistrer.",
  "cinema.winShare.tweetTriggerLabel": "Partager le gain sur X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "rendement {value} sur la mise",
  "cinema.pnlShare.onStake": "SUR LA MISE",
  "cinema.pnlShare.certifiedRun": "PARCOURS CERTIFIÉ · GAIN NET",
  "cinema.pnlShare.heroSub.one": "sur {n} manche · {pct}% de victoires",
  "cinema.pnlShare.heroSub.other": "sur {n} manches · {pct}% de victoires",
  "cinema.pnlShare.collection": "COLLECTION",
  "cinema.pnlShare.change30d": "VARIATION 30 J",
  "cinema.pnlShare.ribbonAriaLabel.one": "Résultat par manche, {n} dernière manche misée",
  "cinema.pnlShare.ribbonAriaLabel.other": "Résultat par manche, {n} dernières manches misées",
  "cinema.pnlShare.bestPull": "MEILLEUR TIRAGE",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "COMMUNE",
  "cinema.pnlShare.rounds": "MANCHES",
  "cinema.pnlShare.winRate": "% VICTOIRES",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "MEILLEURE MANCHE",
  "cinema.pnlShare.rank": "RANG #{n}",
  "cinema.pnlShare.rankOf": "RANG #{n} SUR {total}",
  "cinema.pnlShare.staked": "{value} MISÉS",
  "cinema.pnlShare.overlayAriaLabel": "Partagez votre parcours",
  "cinema.pnlShare.saved": "Enregistré. Joignez-le à votre publication.",
  "cinema.pnlShare.triggerLabel": "Partager le gain net",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Garder / vendre",
  "cinema.recap.secondsShort": "{n} s",
  "cinema.recap.dest.yourCall": "Votre choix",
  "cinema.recap.dest.deciding": "En décision",
  "cinema.recap.dest.you": "Vous",
  "cinema.recap.dest.topBacker": "Plus gros parieur",
  "cinema.recap.dest.yourCard": "Votre carte",
  "cinema.recap.dest.wonBy": "Gagnée par",
  "cinema.recap.dest.aBacker": "Un parieur",
  "cinema.recap.dest.yourChaseLoot": "Votre butin de la Chasse",
  "cinema.recap.dest.chaseLoot": "Butin de la Chasse",
  "cinema.recap.dest.releasedFromVault": "libéré du coffre",
  "cinema.recap.dest.sweptTo": "Raflée par",
  "cinema.recap.dest.chaseVault": "Le coffre de la Chasse",
  "cinema.recap.dest.fundsJackpot": "alimente le jackpot",
  "cinema.recap.dest.protocolFee": "Frais de protocole",
  "cinema.recap.dest.tableRake": "commission de table",
  "cinema.recap.dest.soldBack": "Revendue",
  "cinema.recap.dest.intoTheSplit": "Dans le partage",
  "cinema.recap.dest.toThePool": "+{value} dans la cagnotte",
  "cinema.recap.sublineYours": "Toutes les cartes de la table cette manche. La vôtre est signalée ci-dessous.",
  "cinema.recap.sublineLost": "Toutes les cartes de la table cette manche. Aucune n'est à vous.",
  "cinema.recap.sublineNoStake": "Toutes les cartes de la table cette manche. Vous avez passé votre tour.",
  "cinema.recap.sectionAriaLabel": "Où est partie chaque carte de cette manche",
  "cinema.recap.eyebrow": "Résultats de la manche",
  "cinema.recap.headline": "Où chaque carte a atterri",
  "cinema.recap.theatreHeader": "L'histoire de la manche · la destination de chaque carte",
  "cinema.recap.openCardTitle": "Ouvre la fiche de la carte dans un nouvel onglet",
  "cinema.recap.fromPack": "Depuis {pack}",
  "cinema.recap.railAriaLabel": "Toutes les cartes de la manche, les plus chères d'abord",
  "cinema.recap.tierRule.one": "L'autre carte · {value}",
  "cinema.recap.tierRule.other": "Les {n} autres cartes · {value}",
  "cinema.recap.showMore": "Afficher {n} de plus",
  "cinema.recap.showAll": "Tout afficher ({n})",
  "cinema.recap.showing": "{n} cartes sur {total} · {value} sur {totalValue}",
  "cinema.recap.allShown": "Les {n} cartes · {value} au total",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "CAPTURER L'ONGLET" inside the two service sentences is this same panel's
  // button label (cinema.replay.recordTab): keep the two in step.
  "cinema.replay.finishingVideo": "Finalisation de la vidéo...",
  "cinema.replay.recordingEmpty": "L'enregistrement est revenu vide. Réessayez.",
  "cinema.replay.checkingService": "Recherche du service de rendu HD...",
  "cinema.replay.serviceUnreachable":
    "Le service de rendu HD est injoignable, impossible de générer en HD. CAPTURER L'ONGLET capture cet onglet à la place (le navigateur vous le demandera).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Génération de la vidéo HD : {seconds} s{pct}",
  "cinema.replay.hdRenderFailed": "Le rendu HD a échoué. Réessayez, ou passez par CAPTURER L'ONGLET pour capturer cet onglet.",
  "cinema.replay.cannotRecord":
    "Ce navigateur ne peut pas enregistrer de vidéo ici. Le fichier de la manche est enregistré à la place : déposez-le sur la page de rediffusion pour la revoir.",
  "cinema.replay.pickThisTab": "Choisissez « Cet onglet » pour enregistrer la manche.",
  "cinema.replay.recorderFailed": "L'enregistreur n'a pas pu démarrer.",
  "cinema.replay.watermarkAriaLabel": "Rediffusion de la manche {n}",
  "cinema.replay.watermarkAriaLabelDated": "Rediffusion de la manche {n}, enregistrée le {date}",
  "cinema.replay.watermarkTag": "REDIFFUSION",
  "cinema.replay.watermarkRound": "MANCHE #{n}",
  "cinema.replay.headerSeed": "GRAINE {seed}",
  "cinema.replay.phaseBidding": "MISES",
  "cinema.replay.phaseReveal": "RÉVÉLATION",
  "cinema.replay.phaseDone": "TERMINÉ",
  "cinema.replay.boardAriaLabel": "Plateau de la rediffusion",
  "cinema.replay.controlsAriaLabel": "Commandes de rediffusion de la manche {n}",
  "cinema.replay.pause": "Pause",
  "cinema.replay.play": "Lecture",
  "cinema.replay.pauseButton": "PAUSE",
  "cinema.replay.playButton": "LECTURE",
  "cinema.replay.restart": "RECOMMENCER",
  "cinema.replay.scrubAriaLabel": "Parcourir toute la manche : des mises jusqu'à la révélation",
  "cinema.replay.lockMark": "Verrou",
  "cinema.replay.seeking": "RECHERCHE",
  "cinema.replay.speedAriaLabel": "Vitesse de lecture",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "ENREGISTRER LA VIDÉO",
  "cinema.replay.saveVideoTitle":
    "Générer cette manche en mp4 HD (service de rendu local, rien de votre écran n'est enregistré)",
  "cinema.replay.recordTab": "CAPTURER L'ONGLET",
  "cinema.replay.recordTabTitle":
    "Solution de repli : enregistrer cet onglet via la capture d'écran de votre navigateur (qualité temps réel)",
  "cinema.replay.saveRound": "ENREGISTRER LA MANCHE",
  "cinema.replay.saveRoundTitle":
    "Télécharger cette manche sous forme de petit fichier de données : n'importe qui peut le déposer sur la page de rediffusion pour revoir exactement cette manche",
  "cinema.replay.close": "FERMER",
  "cinema.replay.backToGame": "RETOUR AU JEU",
  "cinema.replay.shareOverlayAriaLabel": "Partager cette manche",
  "cinema.replay.videoReady": "VIDÉO DE LA MANCHE PRÊTE",
  "cinema.replay.formatWebm": "Enregistrée en .webm. X exige du mp4 à l'envoi : partagez le lien, ou convertissez d'abord le fichier.",
  "cinema.replay.formatMp4": "Enregistrée en .mp4, prête à joindre sur X.",
  "cinema.replay.shareOnX": "Partager sur X",
  "cinema.replay.saveAgain": "Enregistrer à nouveau",
  "cinema.replay.shareHint": "X ne peut pas joindre une vidéo depuis le web : votre publication s'ouvre pré-remplie, joignez le fichier enregistré.",
  "cinema.replay.xOpened": "X s'est ouvert avec votre légende. Joignez le fichier enregistré ({filename}), l'éditeur web ne peut pas le faire à votre place.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "Rediffusion de manche attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "Aucun enregistrement fourni. Passez ?rec=<encoded-json-or-url>.",
  "cinema.replayRoute.unreadable": "Impossible de lire l'enregistrement depuis ?rec=.",
  "cinema.replayRoute.loadFailed": "Impossible de charger l'enregistrement ({error}).",
  "cinema.replayRoute.badge": "REDIFFUSION DE MANCHE",
  "cinema.replayRoute.loading": "CHARGEMENT DE L'ENREGISTREMENT",
  "cinema.replayRoute.noRecording": "Aucun enregistrement à lire.",
  "cinema.replayRoute.hint":
    "Les rediffusions s'ouvrent depuis le bandeau des manches passées du plateau (REJOUER sur une manche réglée) ou depuis un lien ?rec= partagé.",
  "cinema.replayRoute.roundResults": "RÉSULTATS DE LA MANCHE",
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
  "cinema.share.shareFile": "Partager le fichier",
  "cinema.share.shareSheetOpened": "La feuille de partage est ouverte.",
  "cinema.winShare.lossHeadline": "PERTE DE LA MANCHE",
  "cinema.winShare.lossResult": "PERDU",
  "cinema.winShare.returned": "RETOUR",
  "cinema.winShare.bestPull": "MEILLEUR TIR",
  "cinema.winShare.playedBy": "JOUE PAR {name}",
  "cinema.winShare.lossCaption": "Manche n°{n} : j’ai misé {stake}. Aucun gain cette manche.",
  "cinema.winShare.lossCardCaption": "Meilleur tir de la table, mais pas le mien.",
  "cinema.winShare.lossNoCardCaption": "Le résultat de la manche, honnêtement enregistré.",
  "cinema.winShare.roundResultTop": "MANCHE",
  "cinema.winShare.roundResultMain": "PERTE",
  "cinema.winShare.shareRoundCard": "Partager la carte",
  "cinema.replay.shareVideo": "Partager la vidéo",
  "cinema.replay.shareVideoTitle": "Partager la vidéo de la manche",
  "cinema.replay.shareVideoSheetOpened": "La feuille de partage est ouverte avec la vidéo.",
  "cinema.replay.shareVideoFailed": "Impossible de partager la vidéo. Réessayez.",
  "cinema.replay.shareSheetHint": "Votre appareil peut envoyer cette vidéo à X depuis la feuille de partage.",
  "cinema.replay.shareRoundTitle": "attn royale · Manche n°{n}",
  "cinema.replay.shareRoundTable": "{amount} sur la table.",
  "cinema.replay.shareRoundWin": "Ma case prend la table pour {pool} · {amount} revient.",
  "cinema.replay.shareRoundCardsOnly": "La case {tile} prend la table pour {pool} · ma case perd, mais {amount} revient.",
  "cinema.replay.shareRoundWinner": "La case {tile} prend la table pour {pool}.",
  "cinema.share.shareVideo": "Partager la vidéo",
  "cinema.share.preparingOutput": "Préparation du partage…",
  "cinema.share.cancelled": "Partage annulé.",
  "cinema.share.shareSheetHint": "Votre appareil peut envoyer cette vidéo à X depuis la feuille de partage.",
  "cinema.personalReveal.sectionAria": "Cartes que vous avez ouvertes",
  "cinema.personalReveal.title": "CARTES QUE VOUS AVEZ OUVERTES",
  "cinema.personalReveal.progress.eyebrow": "RÉVÉLATION SYNCHRONISÉE",
  "cinema.personalReveal.progress.title": "OUVERTURES EN COURS",
  "cinema.personalReveal.progress.body": "La table ouvre ses cartes. La révélation commune reprend à la fin de cette séquence.",
  "cinema.personalReveal.normal.label": "RÉVÉLATION NORMALE",
  "cinema.personalReveal.normalHint": "Le dos de la carte apparaît d’abord. Cliquez ou touchez une carte pour la retourner ; les cartes que vous ouvrez sont à vous. Toute carte encore face cachée se retourne automatiquement après 5 secondes.",
  "cinema.personalReveal.hardcore.label": "RÉVÉLATION EXTRÊME",
  "cinema.personalReveal.hardcoreHint": "Le dos de la carte apparaît d’abord. Cliquez ou touchez une carte pour la retourner ; le propriétaire est déterminé après le tirage. Toute carte encore face cachée se retourne automatiquement après 5 secondes.",
  "cinema.personalReveal.yourCard": "VOTRE CARTE",
  "cinema.personalReveal.youOpened": "OUVERTE PAR VOUS",
  "cinema.personalReveal.otherCards": "AUTRES CARTES",
  "cinema.personalReveal.allOpen": "Toutes les cartes sont révélées",
  "cinema.personalReveal.autoOpenIn": "Révélation automatique des cartes restantes dans {n} s",
  "cinema.personalReveal.revealCardAria": "Retourner la carte {n}",
  "cinema.personalReveal.revealedCardAria": "Carte {n} révélée : {name}, {value}",
  "cinema.personalReveal.sort.group": "Ordre des cartes",
  "cinema.personalReveal.sort.pack": "Paquet",
  "cinema.personalReveal.sort.packAria": "Trier par prix du pack, du moins cher au plus cher",
  "cinema.personalReveal.sort.rarity": "Rareté",
  "cinema.personalReveal.sort.revealFirst": "Le tri par rareté se débloque après la révélation de toutes les cartes",
  "cinema.personalReveal.sort.bestAria": "Trier par rareté, les plus rares d’abord",
  "cinema.personalReveal.sort.worstAria": "Trier par rareté, les moins rares d’abord",
  "cinema.personalReveal.sort.packStatus": "Cartes classées par prix du pack, du moins cher au plus cher",
  "cinema.personalReveal.sort.bestStatus": "Cartes classées par rareté, les plus rares d’abord",
  "cinema.personalReveal.sort.worstStatus": "Cartes classées par rareté, les moins rares d’abord",
  "cinema.personalReveal.rarity": "Rareté",
  "cinema.personalReveal.year": "Année",
  "cinema.personalReveal.yearUnknown": "Année inconnue",
  "cinema.personalReveal.grade": "Note",
  "cinema.personalReveal.ungraded": "Non notée",
  "cinema.personalReveal.pageNavigation": "Pages de cartes",
  "cinema.personalReveal.previousPage": "Cartes précédentes",
  "cinema.personalReveal.nextPage": "Cartes suivantes",
  "cinema.personalReveal.pageStatus": "Page {page} sur {pages}",
  "cinema.personalReveal.live.revealed": "{name} révélée",
  "cinema.personalReveal.live.all": "Les {n} cartes sont révélées",
} as Record<string, string>;
