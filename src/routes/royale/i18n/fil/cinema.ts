// Filipino: "cinema" segment. Machine-consistent first pass (flagged for a
// native editorial review, same bar as the other freshly-added locales).
// Owns: RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx, revealCinemaTypes.ts
// (the copy: fields of REVEAL_CINEMA_SEQUENCE), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx. See royaleI18n.ts's file header for the key-naming
// and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
//
// Terminology: matches the fil/core.ts glossary block ("ronda" = round,
// "pondo" = pool/pot, "kahon" = tile, "tagataya" = backer(s), "The Chase" =
// kept as its English proper name, "kaban" = vault, "sorteo" = the winner
// draw, "bunot" = a card pull, "binhi" = seed, "na-grade na card" = a slab).
// "Replay" is a deliberate kept-English loanword, applied identically in
// cinema.replay.watermarkTag here and in pages.common.replay /
// pages.results.replayLink (pages segment) - never partially translated.
// "Reveal" is likewise a deliberate kept loanword for the reveal-cinema
// mechanic name. The five pack-tier brand names (Starter, Elite, Legendary,
// Grail, Mythic) stay in English, including the ALL-CAPS rarity stamps below
// that reuse those exact names, as do attn ROYALE, ATTN, USDC, X, SLABZ and
// CollectorCrypt.
//
// NBSP NOTE: cinema.tileValue.cardValueLabel and cinema.tileValue.onTileLabel
// carry a literal NBSP (U+00A0, not a plain space) between their two words in
// en.ts, to stop an orphan word at a line break. Preserved here as well, do
// not replace with a normal space.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "NAGBUBUKAS ANG MGA PACK",
  "cinema.phaseAnnounce.packsOpening.subtitle": "nire-reveal ang mga card · muling pinepresyuhan ang bawat kahon",
  "cinema.phaseAnnounce.winnerDraw.title": "SINOSORTEO ANG PANALO",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "tinimbang ayon sa kabuuan ng kahon",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Naka-lock: ang tablero na ang show",
  "cinema.phase.packsEnter.copy": "Dumarating ang mga pack sa tablero",
  "cinema.phase.packsOpening.copy": "Nagbubukasan ang mga pack: nire-reveal ang mga card, muling pinepresyuhan ang mga kahon",
  "cinema.phase.cardsByTile.copy": "Na-reveal na ang mga card: bawat kahon, halaga muna",
  "cinema.phase.valueScan.copy": "Binabasa ang tablero: nagniningning ang pinakamalaking bunot",
  "cinema.phase.winnerDraw.copy": "Sinosorteo ang panalo: tinimbang ayon sa kabuuan ng kahon",
  "cinema.phase.winnerLock.copy": "Naka-lock na ang panalo",
  "cinema.phase.loserValueConverge.copy": "Bumabalik sa kaban ang mga natalong bunot: napupunta ang halaga nito sa panalo",
  "cinema.phase.winnerPotCountUp.copy": "Bumabagsak ang pondo sa nanalong kahon",
  "cinema.phase.chaseFeed.copy": "Kumukuha ng parte ang The Chase",
  "cinema.phase.chasePayout.copy": "Bumabagsak ang The Chase: malaking panalo ang isang kahon",
  "cinema.phase.allocation.copy": "Nakukuha mo",
  "cinema.phase.keepSellDecision.copy": "Panatilihin o ibenta: dadala ang desisyon hanggang susunod na ronda",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "NASA KABAN",
  "cinema.vaultLock.plateSub": "THE CHASE",
  "cinema.vaultLock.status": "NAKA-LOCK",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "WALANG NABUKSANG CARD SA RONDANG ITO",
  "cinema.cardWall.won": "NANALO",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP NA BUNOT",
  "cinema.cardWall.rarity.common": "KARANIWAN",
  "cinema.cardWall.rarity.rare": "BIHIRA",
  "cinema.cardWall.rarity.epic": "EPIKO",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "PINANATILI",
  "cinema.cardWall.status.sold": "NAIBENTA",
  "cinema.cardWall.status.toTheChase": "SA THE CHASE",
  "cinema.cardWall.status.rake": "BAWAS",
  "cinema.cardWall.owner.vault": "KABAN",
  "cinema.cardWall.owner.you": "IKAW",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Bubuksan ng Enter ang detalye ng card.",
  "cinema.cardWall.sectionAriaLabel": "Lahat ng card na nabuksan ngayong ronda, pinakamahal muna",
  "cinema.cardWall.eyebrow": "Lahat ng card na nabuksan",
  "cinema.cardWall.rake.title": "Bayad sa protocol",
  "cinema.cardWall.rake.metaOne": "1 card ang binawasan",
  "cinema.cardWall.rake.metaMany": "{n} card ang binawasan",
  "cinema.cardWall.rake.hide": "Itago",
  "cinema.cardWall.rake.show": "Ipakita",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Isara ang reveal",
  "cinema.close.title": "Isara ang reveal (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Opisyal na panalo",
  "cinema.provCaption.round": "Ronda",
  "cinema.provCaption.verifyAt": "Patunayan sa",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Ronda #{n}",
  "cinema.bar.vrfBadge": "Pinapatakbo ng CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "Chase +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "NAGBUBUKAS",
  "cinema.phaseShort.drawing": "SORTEO",
  "cinema.phaseShort.results": "RESULTA",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "PANALO",
  "cinema.core.tileWins": "Nanalo ang {tile}",
  "cinema.core.inCards": " SA CARDS",
  "cinema.core.poolSuffix": " NA PONDO",
  "cinema.core.totalCardValue": "KABUUANG HALAGA NG CARD",
  "cinema.core.totalPool": "KABUUANG PONDO",
  "cinema.core.tilesLive": "{n} KAHON ANG LIVE",
  "cinema.core.packsSuffix": " · {n} PACK",
  "cinema.core.yourStake": "Taya mo",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Walang taya",
  "cinema.heatOnly.note": "USDC lang · walang pack ngayong ronda",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} pack",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Natalo sa sorteo. Napupunta ang mga card sa mga tagataya ng nanalong kahon.",
  "cinema.vaultNote.heatOnlyNoPack": "Walang pack ngayong ronda · napupunta ang sukli sa pondo",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "mula sa {pack}",
  "cinema.grail.fromPackRate": "mula sa {pack} · {pct} na bunot",
  "cinema.grail.pullTitle": "BUNOT NA GRAIL",
  "cinema.grail.fromPackVisible": "mula sa {pack} pack",
  "cinema.grail.provenanceAriaLabel": "{tile}, mula sa {pack} pack",
  "cinema.grail.multiTitle": "{n} GRAIL NGAYONG RONDA",
  "cinema.grail.galleryTileFromPack": "{tile} · mula sa {pack}",
  "cinema.grail.galleryMore": "+{n} pa",
  "cinema.card.openInNewTab": "Buksan ang pahina ng card na {name} sa bagong tab",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Mula sa {pack} pack, {pct} na bunot rate. Bubuksan ng Enter ang detalye ng card.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Bubuksan ng Enter ang detalye ng card.",
  "cinema.card.bandChancePct": "{pct}% na tsansa mula sa {pack} pack",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "NANALO ANG {tile}",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "BUKAS ANG SELL WINDOW",
  "cinema.sellWindow.secToDecide": "SEG BAGO MAGDESISYON",
  "cinema.sellWindow.noActionAutoSells": "AUTO-SELL SA SUSUNOD NA LOCK KUNG WALANG AKSYON",
  "cinema.sellWindow.noActionKeeps": "MAPAPANATILI ANG CARD KUNG WALANG AKSYON · IBENTA ANUMANG ORAS SA MGA CARD MO",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "halaga ng card",
  "cinema.tileValue.onTileLabel": "sa kahon",
  "cinema.tileValue.oddsWord": "tsansa",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "ang tinamaang kahon",
  "cinema.chase.fires": "TUMATAMA ANG THE CHASE",
  "cinema.chase.jackpotReleasingTo": "NAGLALABAS ANG JACKPOT PARA SA {tile}",
  "cinema.chase.winningTileFallback": "ANG NANALONG KAHON",
  "cinema.chase.feedThisRound": "The Chase +{value} ngayong ronda",
  "cinema.chase.cardToChase": "CARD PAPUNTA SA THE CHASE",
  "cinema.chase.bestLosingCardNamed": "Pinakamahal na natalong card · {name} · {value} nakalock",
  "cinema.chase.bestLosingCardVault": "Pinakamahal na natalong card, nakalock sa kaban",
  "cinema.chase.jackpotGrows": "The Chase +{value} · lumalaki ang jackpot",
  "cinema.chase.hitsAriaLabel": "Tumama ang The Chase sa {tile} ng {value}",
  "cinema.chase.alsoHolds": "Hawak din ng The Chase",
  "cinema.chase.alsoHoldsAriaOne": "Hawak din ng The Chase ang 1 card na nagkakahalaga ng {value}",
  "cinema.chase.alsoHoldsAriaMany": "Hawak din ng The Chase ang {n} card na nagkakahalaga ng {value}",
  "cinema.chase.more": "pa",
  "cinema.chase.cardsTotalOne": "1 card · {value} sa mga na-grade na card",
  "cinema.chase.cardsTotalMany": "{n} card · {value} sa mga na-grade na card",
  "cinema.chase.hitsKicker": "TUMATAMA ANG THE CHASE",
  "cinema.chase.winsBig": "MALAKING PANALO",
  "cinema.chase.yourCut": "PARTE MO",
  "cinema.chase.otherBackerOne": "{n} pang tagataya · pro-rata",
  "cinema.chase.otherBackerMany": "{n} pang tagataya · pro-rata",
  "cinema.chase.backerOne": "{n} tagataya · pro-rata",
  "cinema.chase.backerMany": "{n} na tagataya · pro-rata",
  "cinema.chase.alsoWonRound": "Nanalo rin sa ronda",
  "cinema.chase.backedTileNote": "Isang na-back na kahon · hindi ang panalo ng ronda",
  "cinema.chase.heldCardsSpillOne": "1 hawak na card ang lumabas",
  "cinema.chase.heldCardsSpillMany": "{n} hawak na card ang lumabas",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "pondo",
  "cinema.you.get": "Nakukuha mo",
  "cinema.you.lost": "Natalo ka!",
  "cinema.you.noStakeThisRound": "Hindi ka nagtaya sa rondang ito",
  "cinema.you.mathLine": "{usdc} USDC na parte sa pondo + {cards} mula sa mga card = {total} para sa iyo",
  "cinema.you.sold": "Naibenta ng {value}",
  "cinema.you.kept": "Pinanatili · nasa koleksyon mo",
  "cinema.you.keepButton": "Panatilihin",
  "cinema.you.sellButton": "Ibenta {value}",
  "cinema.you.yours": "sa iyo",
  "cinema.you.noCardThisRound": "Walang card ngayong ronda.",
  "cinema.you.usdcPaidInstantly": "USDC · na-credit sa balanse mo",
  "cinema.you.keepAll": "Panatilihin lahat",
  "cinema.you.sellAllButton": "Ibenta lahat ng {value}",
  "cinema.you.sellAllConfirm": "Sigurado ka? Ibenta lahat ng {value}",
  "cinema.you.noOtherBackers": "Walang ibang tagataya ngayong ronda",
  "cinema.you.oneOtherSplits": "1 pa ang naghahati ng {value}",
  "cinema.you.othersSplit": "{n} pa ang naghahati ng {value}",
  "cinema.you.oneWinningBackerTakes": "1 nanalong tagataya ang kumuha ng {value}",
  "cinema.you.winningBackersSplit": "{n} nanalong tagataya ang naghahati ng {value}",
  "cinema.you.viewFullResults": "Tingnan ang buong resulta",
  "cinema.you.howItWorks": "Paano ito gumagana",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Standard na card, ipapanatili o ibebenta pabalik ito ng pinakamalaking tagataya ng kahon, pro-rata.",
  "cinema.theatre.disposition.sellBackSplit":
    "Panuntunan ng Grail: walang iisang tagatayang kayang bilhin pabalik ang parte ng iba pro-rata, kaya naibebenta pabalik ang grail bilang default at nahahati ang USDC sa buong kahon.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Panuntunan ng Grail: sapat na ang pro-rata na parte ng pinakamalaking tagataya para bilhin ang iba, kaya pinapanatili niya ang grail at binabayaran ang parte ng lahat sa USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} sa {total} ibang manlalaro ang nagdesisyon na; susunod na ronda sa loob ng {seconds} segundo",
  "cinema.theatre.playersDeciding": "Nagdedesisyon ang mga manlalaro {count}",
  "cinema.theatre.nextRoundIn": "susunod na ronda sa {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Nire-resolba ang ronda",
  "cinema.theatre.stageLockingBoard": "Nilo-lock ang tablero…",
  "cinema.theatre.stagePacksOpening": "Nagbubukas ang mga pack sa tablero",
  "cinema.theatre.stageWinnerDrawn": "Nasortio na ang panalo",
  "cinema.theatre.headlineNoEntries": "Walang entry ngayong ronda",
  "cinema.theatre.headlineRevealing": "Nire-reveal ang mga pack…",
  "cinema.theatre.headlineTileWins": "Nanalo ang {tile} ng {value}",
  "cinema.theatre.tileFallback": "Kahon",
  "cinema.theatre.youWon": "Nanalo ka ng {value}",
  "cinema.theatre.youLostNoStake": "Natalo ka, walang taya sa {tile}",
  "cinema.theatre.winnerFallback": "ang panalo",
  "cinema.theatre.tileWonNoStake": "Nanalo ang {tile} · wala kang taya",
  "cinema.theatre.aTileFallback": "Isang kahon",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} kahon ang naglaro · pondo {pool}",
  "cinema.theatre.stripMetaCards": " · {value} sa cards",
  "cinema.theatre.stripMetaCash": " + {value} sa cash",
  "cinema.theatre.drawingWinner": "sinosorteo ang panalo",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Resulta ng ronda",
  "cinema.theatre.roundSettled": "Nasettle na ang ronda",
  "cinema.theatre.winner": "Panalo",
  "cinema.theatre.seedNote":
    "Kasama ang starter stake mong {value} sa {tile}, burahin ang mga starter stake sa panel ng taya para maglaro mula sa $0.",
  "cinema.theatre.lossNoteStaked":
    "Nagtaya ka ng {value} sa ibang kahon ngayong ronda. I-hover ang kahit anong kahon sa likod ng panel na ito para makita kung ano ang nabuksan dito at bakit ito natalo.",
  "cinema.theatre.lossNoteNoStake":
    "Hindi ka nag-back ng kahon ngayong ronda, kaya walang ibabayad. Pumili ng laki ng taya at i-click ang isang kahon sa susunod na ronda.",
  "cinema.theatre.bonusGrails.one":
    "{n} pang Grail ang bumagsak ngayong ronda: napupunta ito sa mga tagataya ng nanalong kahon bilang bonus na loot (pinapanatili, o ibinebenta pabalik pro-rata kung sobrang mahal para panatilihin), hindi kailanman napupunta sa bayad ng ATTN o sa The Chase.",
  "cinema.theatre.bonusGrails.other":
    "{n} pang Grail ang bumagsak ngayong ronda: napupunta ito sa mga tagataya ng nanalong kahon bilang bonus na loot (pinapanatili, o ibinebenta pabalik pro-rata kung sobrang mahal para panatilihin), hindi kailanman napupunta sa bayad ng ATTN o sa The Chase.",
  "cinema.theatre.noPacksBacked": "Walang na-back na pack ngayong ronda. Awtomatikong magsisimula ang susunod na ronda.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Hatian ng payout · {tile}",
  "cinema.theatre.payoutSplitMeta": "Pondo {pool} · ambag sa Chase {feed}",
  "cinema.theatre.payoutSplitChase": " · CHASE +{value}",
  "cinema.theatre.you": "Ikaw",
  "cinema.theatre.physicalCard": "Pisikal na card →",
  "cinema.theatre.grailSecured": " (Grail naseguro)",
  "cinema.theatre.grailSoldBack": "Naibenta pabalik ang Grail ({value}) → hatian ng USDC sa itaas.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "TUMAMA ANG THE CHASE!",
  "cinema.theatre.chaseHitBody":
    "Tumama ang The Chase sa sarili nitong bihirang sorteo, kaya ang {value} mula sa The Chase ay nailagay sa panalong ito, idinagdag sa hatian sa itaas. Nagsisimula nang muling mabuo ang susunod na Chase.",
  "cinema.theatre.chaseMissLead": "Walang bumagsak na Chase ngayong ronda.",
  "cinema.theatre.chaseMissBody": "Tumatama ang The Chase sa sarili nitong bihirang sorteo, kaya patuloy itong lumalaki, ngayon ay {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Patunayan ang sorteo",
  "cinema.theatre.vrfSummaryNote": "mapatutunayang sorteo · tingnan ang resibo ng sorteo",
  "cinema.theatre.vrfRoundId": "id ng ronda",
  "cinema.theatre.vrfWinningDraw": "nanalong sorteo",
  "cinema.theatre.vrfDrawSeed": "binhi ng sorteo",
  "cinema.theatre.vrfProofId": "id ng patunay",
  "cinema.theatre.vrfTicket": "#{n} sa {total}",
  "cinema.theatre.vrfVerifying": "Pinapatunayan…",
  "cinema.theatre.vrfRecheck": "Suriin ulit ang sorteo",
  "cinema.theatre.vrfVerifierLink": "Tagapatunay ↗",
  "cinema.theatre.vrfVerified": "✓ Napatunayan ang sorteo, tugma ang panalong ito sa naka-publish na binhi ng sorteo.",
  "cinema.theatre.vrfFailed": "✗ Hindi tumugma ang sorteong ito sa binhi nito, huwag itong pagkatiwalaan.",
  "cinema.theatre.vrfNote": "Sinosorteo ng bawat ronda ang isang panalo mula sa naka-publish na binhi na puwede mong suriin.",
  "cinema.theatre.vrfNoDraw": "Walang pack na na-back sa rondang ito, walang isosorteo.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Panatilihin ang card → koleksyon",
  "cinema.theatre.sellBackFor": "Ibenta pabalik para sa {value}",
  "cinema.theatre.continueNextRound": "Magpatuloy sa susunod na ronda",
  "cinema.theatre.continue": "Magpatuloy",
  "cinema.theatre.settleHint":
    "Ang Panatilihin ay nagdaragdag ng card sa koleksyon mo. Ang Ibenta Pabalik ay nagcre-credit ng {sell} ({pct}% ng {value}, ang CC buyback ng pack na ito) sa balanse mo. Walang aksyon = ibebenta pabalik bilang default pagsara ng ronda.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Naka-lock",
  "cinema.prizeModal.stageReveal": "Reveal",
  "cinema.prizeModal.betterLuck": "Sa susunod na ronda na lang",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Inihahanda ang card mo…",
  "cinema.share.renderingPng": "Ginagawa ang PNG…",
  "cinema.share.renderFailed": "Hindi nagawa ang larawan. Subukan ulit.",
  "cinema.share.captionOpened": "Nabuksan ang caption sa X. I-attach ang na-save na PNG.",
  "cinema.share.close": "Isara",
  "cinema.share.downloadPng": "I-download ang PNG",
  "cinema.share.shareToX": "I-share sa X",
  "cinema.share.done": "Tapos na",
  "cinema.share.provablyFair": "LABANAN NG PACK · MAPAPATUNAYAN ANG BAWAT SORTEO",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "multiplier {value}",
  "cinema.winShare.multiplier": "MULTIPLIER",
  "cinema.winShare.inCards": "SA CARDS",
  "cinema.winShare.cashWon": "NAPANALUNANG CASH",
  "cinema.winShare.tileHit": "· TINAMAANG KAHON",
  "cinema.winShare.entry": "TAYA",
  "cinema.winShare.winOdds": "TSANSANG MANALO",
  "cinema.winShare.totalValue": "KABUUANG HALAGA",
  "cinema.winShare.certLine": "PINAPATAKBO NG SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "RONDA #{n} · MAPATUTUNAYANG VRF DRAW",
  "cinema.winShare.takeHomeAriaLabel": "dala-uwi {value}",
  "cinema.winShare.totalTakeHome": "KABUUANG DALA-UWI",
  "cinema.winShare.breakdown.one": "{cash} CASH + {n} CARD ({value})",
  "cinema.winShare.breakdown.other": "{cash} CASH + {n} CARD ({value})",
  "cinema.winShare.deposited": "NA-DEPOSITO",
  "cinema.winShare.wonBy": "NANALO SI {name}",
  "cinema.winShare.theGrail": "ANG GRAIL",
  "cinema.winShare.topPull": "PINAKAMAHAL NA BUNOT",
  "cinema.winShare.topCardOfRound": "PINAKAMAHAL NA CARD NG RONDA",
  "cinema.winShare.poweredBySlabz": "PINAPATAKBO NG SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "I-share ang panalo mo",
  "cinema.winShare.pngSaved": "Na-save ang PNG. I-attach ito sa post mo - hindi ito madadagdag ng X para sa iyo.",
  "cinema.winShare.renderingHdVideo": "Ginagawa ang HD video ng ronda…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Ginagawa ang HD video ng ronda - {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "Na-save ang HD video. I-attach ito sa post mo sa halip na ang larawan.",
  "cinema.winShare.hdRenderFailed": "Nabigo ang HD render. Subukan ulit.",
  "cinema.winShare.hdVideoButton": "HD video ng ronda",
  "cinema.winShare.hdVideoTitle": "I-render ang rondang ito bilang HD mp4 (local render service) at i-save ito.",
  "cinema.winShare.tweetTriggerLabel": "I-share ang panalo sa X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "kita {value} sa taya",
  "cinema.pnlShare.onStake": "SA TAYA",
  "cinema.pnlShare.certifiedRun": "SERTIPIKADONG RUN · KITA NETO",
  "cinema.pnlShare.heroSub.one": "sa {n} ronda · {pct}% win rate",
  "cinema.pnlShare.heroSub.other": "sa {n} ronda · {pct}% win rate",
  "cinema.pnlShare.collection": "KOLEKSYON",
  "cinema.pnlShare.change30d": "PAGBABAGO SA 30 ARAW",
  "cinema.pnlShare.ribbonAriaLabel.one": "Resulta bawat ronda para sa huling {n} nag-stake na ronda",
  "cinema.pnlShare.ribbonAriaLabel.other": "Resulta bawat ronda para sa huling {n} nag-stake na ronda",
  "cinema.pnlShare.bestPull": "PINAKAMAHAL NA BUNOT",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "KARANIWAN",
  "cinema.pnlShare.rounds": "RONDA",
  "cinema.pnlShare.winRate": "% PANALO",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "PINAKAMAGANDANG RONDA",
  "cinema.pnlShare.rank": "RANGGO #{n}",
  "cinema.pnlShare.rankOf": "RANGGO #{n} SA {total}",
  "cinema.pnlShare.staked": "{value} ANG NAITAYA",
  "cinema.pnlShare.overlayAriaLabel": "I-share ang run mo",
  "cinema.pnlShare.saved": "Na-save na. I-attach ito sa post mo.",
  "cinema.pnlShare.triggerLabel": "I-share ang Kita Neto",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Panatilihin / ibenta",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Desisyon mo",
  "cinema.recap.dest.deciding": "Nagdedesisyon",
  "cinema.recap.dest.you": "Ikaw",
  "cinema.recap.dest.topBacker": "Pinakamalaking tagataya",
  "cinema.recap.dest.yourCard": "Card mo",
  "cinema.recap.dest.wonBy": "Napanalunan ni",
  "cinema.recap.dest.aBacker": "Isang tagataya",
  "cinema.recap.dest.yourChaseLoot": "Loot mo mula sa The Chase",
  "cinema.recap.dest.chaseLoot": "Loot ng The Chase",
  "cinema.recap.dest.releasedFromVault": "inilabas mula sa kaban",
  "cinema.recap.dest.sweptTo": "Kinuha ni",
  "cinema.recap.dest.chaseVault": "Kaban ng The Chase",
  "cinema.recap.dest.fundsJackpot": "pinopondohan ang jackpot",
  "cinema.recap.dest.protocolFee": "Bayad sa protocol",
  "cinema.recap.dest.tableRake": "bawas ng table",
  "cinema.recap.dest.soldBack": "Naibenta pabalik",
  "cinema.recap.dest.intoTheSplit": "Sa hatian",
  "cinema.recap.dest.toThePool": "+{value} sa pondo",
  "cinema.recap.sublineYours": "Ang mga card ng buong table ngayong ronda. Naka-mark sa ibaba kung alin ang sa iyo.",
  "cinema.recap.sublineLost": "Ang mga card ng buong table ngayong ronda. Wala sa mga ito ang sa iyo.",
  "cinema.recap.sublineNoStake": "Ang mga card ng buong table ngayong ronda. Hindi ka nakisali sa rondang ito.",
  "cinema.recap.sectionAriaLabel": "Kung saan napunta ang bawat card ngayong ronda",
  "cinema.recap.eyebrow": "Resulta ng ronda",
  "cinema.recap.headline": "Kung saan napunta ang bawat card",
  "cinema.recap.theatreHeader": "Kwento ng ronda · destinasyon ng bawat card",
  "cinema.recap.openCardTitle": "Binubuksan ang pahina ng card sa bagong tab",
  "cinema.recap.fromPack": "Mula sa {pack}",
  "cinema.recap.railAriaLabel": "Lahat ng kard ngayong round, pinakamahal muna",
  "cinema.recap.tierRule.one": "Ang isa pang kard · {value}",
  "cinema.recap.tierRule.other": "Ang {n} pang kard · {value}",
  "cinema.recap.showMore": "Magpakita ng {n} pa",
  "cinema.recap.showAll": "Ipakita lahat ({n})",
  "cinema.recap.showing": "Ipinapakita ang {n} sa {total} kard · {value} sa {totalValue}",
  "cinema.recap.allShown": "Lahat ng {n} kard · {value} kabuuan",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "Tinatapos ang video...",
  "cinema.replay.recordingEmpty": "Walang laman ang recording. Subukan ulit.",
  "cinema.replay.checkingService": "Chine-check ang HD render service...",
  "cinema.replay.serviceUnreachable":
    "Hindi maabot ang HD render service, kaya hindi ito puwedeng i-render sa HD. Ku-capture ng I-RECORD ANG TAB ang tab na ito sa halip (prompt ng browser).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Ginagawa ang HD video: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "Nabigo ang HD render. Subukan ulit, o gamitin ang I-RECORD ANG TAB para i-capture na lang ang tab na ito.",
  "cinema.replay.cannotRecord":
    "Hindi makapag-record ng video dito ang browser na ito. Ang file ng ronda na lang ang isesave - i-drop ito sa replay page para panoorin ulit.",
  "cinema.replay.pickThisTab": "Piliin ang \"This tab\" para i-record ang ronda.",
  "cinema.replay.recorderFailed": "Hindi nasimulan ang recorder.",
  "cinema.replay.watermarkAriaLabel": "Replay ng ronda {n}",
  "cinema.replay.watermarkAriaLabelDated": "Replay ng ronda {n}, na-record noong {date}",
  "cinema.replay.watermarkTag": "REPLAY",
  "cinema.replay.watermarkRound": "RONDA #{n}",
  "cinema.replay.headerSeed": "BINHI {seed}",
  "cinema.replay.phaseBidding": "NAGTATAYA",
  "cinema.replay.phaseReveal": "REVEAL",
  "cinema.replay.phaseDone": "TAPOS NA",
  "cinema.replay.boardAriaLabel": "Tablero ng replay",
  "cinema.replay.controlsAriaLabel": "Mga kontrol sa replay ng ronda {n}",
  "cinema.replay.pause": "I-pause",
  "cinema.replay.play": "I-play",
  "cinema.replay.pauseButton": "PAUSE",
  "cinema.replay.playButton": "PLAY",
  "cinema.replay.restart": "ULITIN",
  "cinema.replay.scrubAriaLabel": "Maghanap sa buong ronda: mula sa pagtaya hanggang sa reveal",
  "cinema.replay.lockMark": "Lock",
  "cinema.replay.seeking": "HINAHANAP",
  "cinema.replay.speedAriaLabel": "Bilis ng playback",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "I-SAVE ANG VIDEO",
  "cinema.replay.saveVideoTitle":
    "I-render ang rondang ito bilang HD mp4 (local render service; walang naka-record sa screen mo)",
  "cinema.replay.recordTab": "I-RECORD ANG TAB",
  "cinema.replay.recordTabTitle":
    "Fallback: i-record ang tab na ito gamit ang screen-capture prompt ng browser mo (realtime quality)",
  "cinema.replay.saveRound": "I-SAVE ANG RONDA",
  "cinema.replay.saveRoundTitle":
    "I-download ang rondang ito bilang maliit na data file - puwedeng i-drop ito ng kahit sino sa replay page para panoorin ang eksaktong rondang ito",
  "cinema.replay.close": "ISARA",
  "cinema.replay.backToGame": "BUMALIK SA LARO",
  "cinema.replay.shareOverlayAriaLabel": "I-share ang rondang ito",
  "cinema.replay.videoReady": "HANDA NA ANG VIDEO NG RONDA",
  "cinema.replay.formatWebm": "Na-save bilang .webm - kailangan ng X ng mp4 para mag-upload, kaya i-share ang link o i-convert muna ang file.",
  "cinema.replay.formatMp4": "Na-save bilang .mp4 - handa nang i-attach sa X.",
  "cinema.replay.shareOnX": "I-share sa X",
  "cinema.replay.saveAgain": "I-save ulit",
  "cinema.replay.shareHint": "Hindi makaka-attach ang X ng video mula sa web - bubukas ang post mo na naka-prefill; i-attach ang na-save na file.",
  "cinema.replay.xOpened": "Nabuksan ang X kasama ang caption mo. I-attach ang na-save na file ({filename}) - hindi ito madadagdag ng web composer para sa iyo.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "Replay ng Ronda ng attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "Walang ibinigay na recording. Ipasa ang ?rec=<encoded-json-or-url>.",
  "cinema.replayRoute.unreadable": "Hindi mabasa ang recording mula sa ?rec=.",
  "cinema.replayRoute.loadFailed": "Hindi na-load ang recording ({error}).",
  "cinema.replayRoute.badge": "REPLAY NG RONDA",
  "cinema.replayRoute.loading": "NILO-LOAD ANG RECORDING",
  "cinema.replayRoute.noRecording": "Walang recording na papatugtugin.",
  "cinema.replayRoute.hint":
    "Bumubukas ang mga replay mula sa strip ng nakaraang ronda sa tablero (REPLAY sa isang nasettle nang ronda) o sa isang shinareng ?rec= link.",
  "cinema.replayRoute.roundResults": "RESULTA NG RONDA",
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
  "cinema.share.shareFile": "Ibahagi ang file",
  "cinema.share.shareSheetOpened": "Bukas ang share sheet.",
  "cinema.winShare.lossHeadline": "TALO SA ROUND",
  "cinema.winShare.lossResult": "TALO",
  "cinema.winShare.returned": "IBINALIK",
  "cinema.winShare.bestPull": "PINAKAMAGANDANG PULL",
  "cinema.winShare.playedBy": "GINAMIT NI {name}",
  "cinema.winShare.lossCaption": "Round #{n}: tumaya ako ng {stake}. Walang naiuwi sa round na ito.",
  "cinema.winShare.lossCardCaption": "Pinakamagandang pull sa mesa, pero hindi akin.",
  "cinema.winShare.lossNoCardCaption": "Tapat na naitala ang resulta ng round.",
  "cinema.winShare.roundResultTop": "ROUND",
  "cinema.winShare.roundResultMain": "TALO",
  "cinema.winShare.shareRoundCard": "Ibahagi ang card",
  "cinema.replay.shareVideo": "Ibahagi ang video",
  "cinema.replay.shareVideoTitle": "Ibahagi ang video ng round",
  "cinema.replay.shareVideoSheetOpened": "Bukas ang share sheet kasama ang video.",
  "cinema.replay.shareVideoFailed": "Hindi maibahagi ang video. Subukan ulit.",
  "cinema.replay.shareSheetHint": "Maaaring ipadala ng device mo ang video na ito sa X mula sa share sheet.",
  "cinema.replay.shareRoundTitle": "attn royale · Round #{n}",
  "cinema.replay.shareRoundTable": "{amount} sa mesa.",
  "cinema.replay.shareRoundWin": "Kinuha ng tile ko ang mesa na {pool} · bumalik ang {amount}.",
  "cinema.replay.shareRoundCardsOnly": "Kinuha ng tile {tile} ang mesa na {pool} · natalo ang tile ko pero bumalik ang {amount}.",
  "cinema.replay.shareRoundWinner": "Kinuha ng tile {tile} ang mesa na {pool}.",
  "cinema.share.shareVideo": "Ibahagi ang video",
  "cinema.share.preparingOutput": "Inihahanda ang pagbabahagi…",
  "cinema.share.cancelled": "Kinansela ang pagbabahagi.",
  "cinema.share.shareSheetHint": "Maaaring ipadala ng device mo ang video na ito sa X mula sa share sheet.",
  "cinema.personalReveal.sectionAria": "Mga card na binuksan mo",
  "cinema.personalReveal.title": "MGA CARD NA BINUKSAN MO",
  "cinema.personalReveal.progress.eyebrow": "SABAY-SABAY NA REVEAL",
  "cinema.personalReveal.progress.title": "BINUBUKSAN ANG MGA CARD",
  "cinema.personalReveal.progress.body": "Binubuksan na ng mesa ang mga card. Magpapatuloy ang sabayang reveal matapos ang bahaging ito.",
  "cinema.personalReveal.normal.label": "KARANIWANG PAGBUKAS",
  "cinema.personalReveal.normalHint": "Ang likod ng card ang unang makikita. I-click o i-tap ang card para baliktarin; sa iyo ang mga card na binuksan mo. Awtomatikong babaliktad pagkalipas ng 5 segundo ang mga nakataob pa.",
  "cinema.personalReveal.hardcore.label": "MATINDING PAGBUKAS",
  "cinema.personalReveal.hardcoreHint": "Ang likod ng card ang unang makikita. I-click o i-tap ang card para baliktarin; malalaman ang may-ari pagkatapos ng draw. Awtomatikong babaliktad pagkalipas ng 5 segundo ang mga nakataob pa.",
  "cinema.personalReveal.yourCard": "CARD MO",
  "cinema.personalReveal.youOpened": "IKAW ANG NAGBUKAS",
  "cinema.personalReveal.otherCards": "IBA PANG MGA CARD",
  "cinema.personalReveal.sort.group": "Ayos ng mga card",
  "cinema.personalReveal.sort.pack": "Pakete",
  "cinema.personalReveal.sort.packAria": "Ayusin ayon sa presyo ng pack, pinakamura muna",
  "cinema.personalReveal.sort.rarity": "Antas ng dalang",
  "cinema.personalReveal.sort.revealFirst": "Magiging available ang pag-aayos ayon sa antas ng dalang kapag nailantad na ang lahat ng card",
  "cinema.personalReveal.sort.bestAria": "Ayusin ayon sa antas ng dalang, pinakamahusay muna",
  "cinema.personalReveal.sort.worstAria": "Ayusin ayon sa antas ng dalang, pinakamababa muna",
  "cinema.personalReveal.sort.packStatus": "Nakaayos ang mga card ayon sa presyo ng pack, pinakamura muna",
  "cinema.personalReveal.sort.bestStatus": "Nakaayos ang mga card ayon sa antas ng dalang, pinakamahusay muna",
  "cinema.personalReveal.sort.worstStatus": "Nakaayos ang mga card ayon sa antas ng dalang, pinakamababa muna",
  "cinema.personalReveal.allOpen": "Bukas na ang lahat ng card",
  "cinema.personalReveal.autoOpenIn": "Awtomatikong bubukas ang natitirang mga card pagkalipas ng {n} segundo",
  "cinema.personalReveal.revealCardAria": "Baliktarin ang card {n}",
  "cinema.personalReveal.revealedCardAria": "Nailantad ang card {n}: {name}, {value}",
  "cinema.personalReveal.rarity": "Antas ng dalang",
  "cinema.personalReveal.year": "Taon",
  "cinema.personalReveal.yearUnknown": "Hindi alam ang taon",
  "cinema.personalReveal.grade": "Marka",
  "cinema.personalReveal.ungraded": "Hindi pa na-grade",
  "cinema.personalReveal.pageNavigation": "Mga pahina ng card",
  "cinema.personalReveal.previousPage": "Nakaraang mga card",
  "cinema.personalReveal.nextPage": "Susunod na mga card",
  "cinema.personalReveal.pageStatus": "Pahina {page} sa {pages}",
  "cinema.personalReveal.live.revealed": "Nailantad ang {name}",
  "cinema.personalReveal.live.all": "Nailantad ang lahat ng {n} card",
} as Record<string, string>;
