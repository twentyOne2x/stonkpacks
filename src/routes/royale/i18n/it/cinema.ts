// Italian (Italiano): "cinema" segment. Same key set as en/cinema.ts. See
// royaleI18n.ts for the {token} interpolation convention and the "no em dash"
// rule.
//
// Segment: cinema. Owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (REVEAL_CINEMA_SEQUENCE copy), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx.
//
// Register: INFORMAL "tu" throughout, games/casino Italian rather than
// literal English word order ("vince grosso", "a vuoto", "si prende").
//
// Terminology (kept consistent across core/board/misc/onboarding/docs/arena):
//   - "tile" -> "casella"; "pack(s)" -> "pack" (English loanword, invariable plural); "backer(s)" ->
//     "sostenitore/i"; "pool" -> "montepremi"; "pot" -> "piatto";
//     "draw" -> "estrazione"; "vault" -> "caveau"; "buyback" ->
//     "riacquisto"; "payout split" -> "ripartizione"; "settled" ->
//     "concluso"; "slab" -> "slab" (masculine, invariable).
//   - "pull" (the card a pack yields) -> "pull", the invariable loanword the
//     Italian TCG scene uses (matches board.ts and misc.ts; the earlier
//     "tiro" read as "a throw").
//   - "rake" stays "rake": it is the standard Italian casino/poker word, and
//     the status badge it labels is far too narrow for "commissione", which
//     is kept for the full "Commissione protocollo" heading.
//   - "the Chase" -> "la Caccia" (house style: the feature name IS
//     translated, matching misc.chase.label and board.settlement.*).
//   - "Powered by X" -> "Basato su X", matching cinema.bar.vrfBadge.
//   - TIER NAMES Starter / Elite / Legendary / Grail / Mythic stay English
//     and capitalized everywhere, including inside the cardWall rarity
//     badges and mid-sentence ("le Grail", "una Grail rara").
//   - cinema.tileValue.cardValueLabel / onTileLabel carry a real NBSP
//     (U+00A0) between their two words, same as the English source, to
//     keep the phrase from breaking to an orphan word at a line end.
//     Preserved verbatim here, do not replace with a plain space.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "APERTURA PACK",
  "cinema.phaseAnnounce.packsOpening.subtitle": "escono le carte · ogni casella si riprezza",
  "cinema.phaseAnnounce.winnerDraw.title": "ESTRAZIONE VINCITORE",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "ponderata sul totale casella",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Bloccato: lo spettacolo è il tabellone",
  "cinema.phase.packsEnter.copy": "Pack sul tabellone",
  "cinema.phase.packsOpening.copy": "I pack si strappano: escono le carte, le caselle si riprezzano",
  "cinema.phase.cardsByTile.copy": "Carte scoperte: ogni casella, prima il valore",
  "cinema.phase.valueScan.copy": "Si legge il tabellone: i pull più grossi si accendono",
  "cinema.phase.winnerDraw.copy": "Si estrae il vincitore: ponderata sul totale della casella",
  "cinema.phase.winnerLock.copy": "Vincitore bloccato",
  "cinema.phase.loserValueConverge.copy": "I pull perdenti tornano nel caveau: il loro valore va al vincitore",
  "cinema.phase.winnerPotCountUp.copy": "Il montepremi atterra sulla casella vincente",
  "cinema.phase.chaseFeed.copy": "La Caccia si prende la sua quota",
  "cinema.phase.chasePayout.copy": "La Caccia scatta: una casella vince grosso",
  "cinema.phase.allocation.copy": "Ti spetta",
  "cinema.phase.keepSellDecision.copy": "Tieni o vendi: la scelta resta aperta per tutto il prossimo round",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "IN CAVEAU",
  "cinema.vaultLock.plateSub": "LA CACCIA",
  "cinema.vaultLock.status": "BLOCCATO",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "NESSUNA CARTA APERTA IN QUESTO ROUND",
  "cinema.cardWall.won": "VINTA",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP PULL",
  "cinema.cardWall.rarity.common": "COMUNE",
  "cinema.cardWall.rarity.rare": "RARA",
  "cinema.cardWall.rarity.epic": "EPICA",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "TENUTA",
  "cinema.cardWall.status.sold": "VENDUTA",
  "cinema.cardWall.status.toTheChase": "ALLA CACCIA",
  "cinema.cardWall.status.rake": "RAKE",
  "cinema.cardWall.owner.vault": "CAVEAU",
  "cinema.cardWall.owner.you": "TU",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Invio apre i dettagli della carta.",
  "cinema.cardWall.sectionAriaLabel": "Tutte le carte aperte in questo round, dalla più preziosa",
  "cinema.cardWall.eyebrow": "Tutte le carte aperte",
  "cinema.cardWall.rake.title": "Commissione protocollo",
  "cinema.cardWall.rake.metaOne": "1 carta al rake",
  "cinema.cardWall.rake.metaMany": "{n} carte al rake",
  "cinema.cardWall.rake.hide": "Nascondi",
  "cinema.cardWall.rake.show": "Mostra",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Chiudi rivelazione",
  "cinema.close.title": "Chiudi rivelazione (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Vincitore ufficiale",
  "cinema.provCaption.round": "Round",
  "cinema.provCaption.verifyAt": "Verifica su",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Round #{n}",
  "cinema.bar.vrfBadge": "Basato su VRF di CollectorCrypt",
  "cinema.bar.chaseFeed": "Caccia +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "APERTURA",
  "cinema.phaseShort.drawing": "ESTRAZIONE",
  "cinema.phaseShort.results": "RISULTATI",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "VINCITORE",
  "cinema.core.tileWins": "{tile} vince",
  "cinema.core.inCards": " IN CARTE",
  "cinema.core.poolSuffix": " MONTEPREMI",
  "cinema.core.totalCardValue": "VALORE TOTALE CARTE",
  "cinema.core.totalPool": "MONTEPREMI TOTALE",
  "cinema.core.tilesLive": "{n} CASELLE ATTIVE",
  "cinema.core.packsSuffix": " · {n} PACK",
  "cinema.core.yourStake": "La tua puntata",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Nessuna puntata",
  "cinema.heatOnly.note": "Solo USDC · nessun pack in questo round",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} pack",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Estrazione persa. Le carte vanno ai sostenitori della casella vincente.",
  "cinema.vaultNote.heatOnlyNoPack": "Nessun pack in questo round · il resto va nel montepremi",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "da {pack}",
  "cinema.grail.fromPackRate": "da {pack} · {pct} di pull",
  "cinema.grail.pullTitle": "PULL GRAIL",
  "cinema.grail.fromPackVisible": "da un pack {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, da un pack {pack}",
  "cinema.grail.multiTitle": "{n} GRAIL IN QUESTO ROUND",
  "cinema.grail.galleryTileFromPack": "{tile} · da {pack}",
  "cinema.grail.galleryMore": "+{n} in più",
  "cinema.card.openInNewTab": "Apri la pagina della carta {name} in una nuova scheda",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Da un pack {pack}, {pct} di pull. Invio apre i dettagli della carta.",
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Invio apre i dettagli della carta.",
  "cinema.card.bandChancePct": "{pct}% di probabilità da un pack {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} VINCE",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "VENDITA APERTA",
  "cinema.sellWindow.secToDecide": "SEC PER DECIDERE",
  "cinema.sellWindow.noActionAutoSells": "SE NON FAI NULLA SI VENDE AL PROSSIMO BLOCCO",
  "cinema.sellWindow.noActionKeeps": "SE NON FAI NULLA LA CARTA RESTA TUA · LA VENDI QUANDO VUOI DALLE TUE CARTE",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "valore carta" / "sulla casella" from breaking to an
  // orphan word at a line end. Preserve the NBSP in every locale's
  // translation.
  "cinema.tileValue.cardValueLabel": "valore carta",
  "cinema.tileValue.onTileLabel": "sulla casella",
  "cinema.tileValue.oddsWord": "probabilità",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "la casella colpita",
  "cinema.chase.fires": "LA CACCIA SCATTA",
  "cinema.chase.jackpotReleasingTo": "JACKPOT IN USCITA SU {tile}",
  "cinema.chase.winningTileFallback": "LA CASELLA VINCENTE",
  "cinema.chase.feedThisRound": "Caccia +{value} in questo round",
  "cinema.chase.cardToChase": "CARTA ALLA CACCIA",
  "cinema.chase.bestLosingCardNamed": "Migliore carta perdente · {name} · {value} bloccati",
  "cinema.chase.bestLosingCardVault": "Migliore carta perdente chiusa nel caveau",
  "cinema.chase.jackpotGrows": "Caccia +{value} · il jackpot cresce",
  "cinema.chase.hitsAriaLabel": "La Caccia colpisce {tile} per {value}",
  "cinema.chase.alsoHolds": "La Caccia tiene anche",
  "cinema.chase.alsoHoldsAriaOne": "La Caccia tiene anche 1 carta da {value}",
  "cinema.chase.alsoHoldsAriaMany": "La Caccia tiene anche {n} carte da {value}",
  "cinema.chase.more": "in più",
  "cinema.chase.cardsTotalOne": "1 carta · {value} in slab",
  "cinema.chase.cardsTotalMany": "{n} carte · {value} in slab",
  "cinema.chase.hitsKicker": "LA CACCIA COLPISCE",
  "cinema.chase.winsBig": "VINCE GROSSO",
  "cinema.chase.yourCut": "LA TUA QUOTA",
  "cinema.chase.otherBackerOne": "{n} altro sostenitore · pro-rata",
  "cinema.chase.otherBackerMany": "{n} altri sostenitori · pro-rata",
  "cinema.chase.backerOne": "{n} sostenitore · pro-rata",
  "cinema.chase.backerMany": "{n} sostenitori · pro-rata",
  "cinema.chase.alsoWonRound": "Ha vinto anche il round",
  "cinema.chase.backedTileNote": "Una casella puntata · non la vincitrice del round",
  "cinema.chase.heldCardsSpillOne": "1 carta esce dal caveau",
  "cinema.chase.heldCardsSpillMany": "{n} carte escono dal caveau",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "piatto",
  "cinema.you.get": "Ti spetta",
  "cinema.you.lost": "Hai perso!",
  "cinema.you.noStakeThisRound": "Non hai puntato in questo round",
  "cinema.you.mathLine": "{usdc} USDC di montepremi + {cards} dalle carte = {total} per te",
  "cinema.you.sold": "Venduta {value}",
  "cinema.you.kept": "Tenuta · in collezione",
  "cinema.you.keepButton": "Tieni",
  "cinema.you.sellButton": "Vendi {value}",
  "cinema.you.yours": "tua",
  "cinema.you.noCardThisRound": "Nessuna carta questo round.",
  "cinema.you.usdcPaidInstantly": "USDC · accreditati sul saldo",
  "cinema.you.keepAll": "Tieni tutto",
  "cinema.you.sellAllButton": "Vendi tutto {value}",
  "cinema.you.sellAllConfirm": "Sicuro? Vendi tutto {value}",
  "cinema.you.noOtherBackers": "Nessun altro sostenitore in questo round",
  "cinema.you.oneOtherSplits": "1 altro si divide {value}",
  "cinema.you.othersSplit": "{n} altri si dividono {value}",
  "cinema.you.oneWinningBackerTakes": "1 sostenitore vincente si prende {value}",
  "cinema.you.winningBackersSplit": "{n} sostenitori vincenti si dividono {value}",
  "cinema.you.viewFullResults": "Risultati completi",
  "cinema.you.howItWorks": "Come funziona",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys.
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Slab standard: il maggior sostenitore della casella lo tiene o lo rivende, pro-rata.",
  "cinema.theatre.disposition.sellBackSplit":
    "Regola Grail: nessun sostenitore da solo riesce a liquidare gli altri pro-rata, quindi la Grail di default si rivende e gli USDC si dividono su tutta la casella.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Regola Grail: la quota pro-rata del maggior sostenitore copre già la liquidazione degli altri, quindi si tiene la Grail e paga a tutti la loro parte di carta in USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} di {total} altri giocatori hanno deciso, prossimo round tra {seconds} secondi",
  "cinema.theatre.playersDeciding": "Stanno decidendo {count}",
  "cinema.theatre.nextRoundIn": "prossimo round tra {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Round in chiusura",
  "cinema.theatre.stageLockingBoard": "Tabellone in blocco…",
  "cinema.theatre.stagePacksOpening": "Pack in apertura sul tabellone",
  "cinema.theatre.stageWinnerDrawn": "Vincitore estratto",
  "cinema.theatre.headlineNoEntries": "Nessuna puntata in questo round",
  "cinema.theatre.headlineRevealing": "Si aprono i pack…",
  "cinema.theatre.headlineTileWins": "{tile} vince {value}",
  "cinema.theatre.tileFallback": "Casella",
  "cinema.theatre.youWon": "Hai vinto {value}",
  "cinema.theatre.youLostNoStake": "Hai perso, nessuna puntata su {tile}",
  "cinema.theatre.winnerFallback": "il vincitore",
  "cinema.theatre.tileWonNoStake": "{tile} ha vinto · tu non avevi puntato",
  "cinema.theatre.aTileFallback": "Una casella",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} caselle giocate · montepremi {pool}",
  "cinema.theatre.stripMetaCards": " · {value} in carte",
  "cinema.theatre.stripMetaCash": " + {value} in contanti",
  "cinema.theatre.drawingWinner": "si estrae il vincitore",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Esito del round",
  "cinema.theatre.roundSettled": "Round concluso",
  "cinema.theatre.winner": "Vincitore",
  "cinema.theatre.seedNote":
    "Comprende la tua puntata iniziale di {value} su {tile}, azzera le puntate iniziali nel pannello puntate per partire da $0.",
  "cinema.theatre.lossNoteStaked":
    "In questo round hai puntato {value} su altre caselle. Passa sopra una casella dietro questo pannello per vedere cosa ha aperto e perché ha perso.",
  "cinema.theatre.lossNoteNoStake":
    "In questo round non hai puntato su nessuna casella, quindi non c'è nulla da pagarti. Scegli la puntata e clicca una casella al prossimo round.",
  "cinema.theatre.bonusGrails.one":
    "In questo round è uscita {n} Grail in più: va ai sostenitori della casella vincente come bottino extra (tenuta, oppure rivenduta pro-rata se troppo cara da tenere), mai alla commissione ATTN o alla Caccia.",
  "cinema.theatre.bonusGrails.other":
    "In questo round sono uscite {n} Grail in più: vanno ai sostenitori della casella vincente come bottino extra (tenute, oppure rivendute pro-rata se troppo care da tenere), mai alla commissione ATTN o alla Caccia.",
  "cinema.theatre.noPacksBacked": "In questo round nessuno ha puntato sui pack. Il prossimo round parte da solo.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Ripartizione · {tile}",
  "cinema.theatre.payoutSplitMeta": "Montepremi {pool} · quota Caccia {feed}",
  "cinema.theatre.payoutSplitChase": " · CACCIA +{value}",
  "cinema.theatre.you": "Tu",
  "cinema.theatre.physicalCard": "Carta fisica →",
  "cinema.theatre.grailSecured": " (Grail al sicuro)",
  "cinema.theatre.grailSoldBack": "Grail rivenduta ({value}) → ripartizione USDC qui sopra.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "CACCIA SCATTATA!",
  "cinema.theatre.chaseHitBody":
    "La Caccia è scattata sulla sua estrazione rara indipendente, quindi {value} dalla Caccia sono entrati in questa vincita e si aggiungono alla ripartizione qui sopra. La prossima Caccia riparte a costruirsi.",
  "cinema.theatre.chaseMissLead": "Niente Caccia in questo round.",
  "cinema.theatre.chaseMissBody": "La Caccia scatta sulla sua estrazione rara indipendente, quindi continua a crescere: ora è a {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Verifica estrazione",
  "cinema.theatre.vrfSummaryNote": "estrazione verificabile · vedi la ricevuta dell'estrazione",
  "cinema.theatre.vrfRoundId": "id round",
  "cinema.theatre.vrfWinningDraw": "estrazione vincente",
  "cinema.theatre.vrfDrawSeed": "seed estrazione",
  "cinema.theatre.vrfProofId": "id prova",
  "cinema.theatre.vrfTicket": "#{n} di {total}",
  "cinema.theatre.vrfVerifying": "Verifica…",
  "cinema.theatre.vrfRecheck": "Ricontrolla l'estrazione",
  "cinema.theatre.vrfVerifierLink": "Verificatore ↗",
  "cinema.theatre.vrfVerified": "✓ Estrazione verificata, questo vincitore torna con il seed pubblicato.",
  "cinema.theatre.vrfFailed": "✗ Questa estrazione non torna con il suo seed, non fidarti.",
  "cinema.theatre.vrfNote": "Ogni round estrae un solo vincitore da un seed pubblicato che puoi ricontrollare.",
  "cinema.theatre.vrfNoDraw": "Nessun pack puntato in questo round, niente da estrarre.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Tieni la carta → collezione",
  "cinema.theatre.sellBackFor": "Rivendi per {value}",
  "cinema.theatre.continueNextRound": "Vai al prossimo round",
  "cinema.theatre.continue": "Continua",
  "cinema.theatre.settleHint":
    "Tieni mette la carta in collezione. Rivendi ti accredita {sell} sul saldo ({pct}% di {value}, il riacquisto CC di questo pack). Se non fai nulla, alla chiusura del round si rivende di default.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Bloccato",
  "cinema.prizeModal.stageReveal": "Rivelazione",
  "cinema.prizeModal.betterLuck": "Andrà meglio al prossimo round",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Preparo la tua immagine…",
  "cinema.share.renderingPng": "Rendering del PNG…",
  "cinema.share.renderFailed": "Immagine non generata. Riprova.",
  "cinema.share.captionOpened": "Testo aperto su X. Allega il PNG che hai salvato.",
  "cinema.share.close": "Chiudi",
  "cinema.share.downloadPng": "Scarica PNG",
  "cinema.share.shareToX": "Condividi su X",
  "cinema.share.done": "Fatto",
  "cinema.share.provablyFair": "BATTAGLIE DI PACK · OGNI ESTRAZIONE VERIFICABILE",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all. "Powered by" itself translates, see cinema.bar.vrfBadge.
  "cinema.winShare.multiplierAriaLabel": "moltiplicatore {value}",
  "cinema.winShare.multiplier": "MOLTIPLICATORE",
  "cinema.winShare.inCards": "IN CARTE",
  "cinema.winShare.cashWon": "CONTANTI VINTI",
  "cinema.winShare.tileHit": "· CASELLA CENTRATA",
  "cinema.winShare.entry": "PUNTATA",
  "cinema.winShare.winOdds": "PROBABILITÀ",
  "cinema.winShare.totalValue": "VALORE TOTALE",
  "cinema.winShare.certLine": "BASATO SU SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "ROUND #{n} · ESTRAZIONE VRF VERIFICABILE",
  "cinema.winShare.takeHomeAriaLabel": "portati a casa {value}",
  "cinema.winShare.totalTakeHome": "TOTALE INCASSATO",
  "cinema.winShare.breakdown.one": "{cash} IN CONTANTI + {n} CARTA ({value})",
  "cinema.winShare.breakdown.other": "{cash} IN CONTANTI + {n} CARTE ({value})",
  "cinema.winShare.deposited": "DEPOSITATO",
  "cinema.winShare.wonBy": "VINTO DA {name}",
  "cinema.winShare.theGrail": "LA GRAIL",
  "cinema.winShare.topPull": "TOP PULL",
  "cinema.winShare.topCardOfRound": "CARTA MIGLIORE DEL ROUND",
  "cinema.winShare.poweredBySlabz": "BASATO SU SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Condividi la vincita",
  "cinema.winShare.pngSaved": "PNG salvato. Allegalo al tuo post, X non può farlo al posto tuo.",
  "cinema.winShare.renderingHdVideo": "Rendering del video HD del round…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Rendering del video HD del round: {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "Video HD salvato. Allega questo al tuo post al posto dell'immagine.",
  "cinema.winShare.hdRenderFailed": "Il render HD non è riuscito. Riprova.",
  "cinema.winShare.hdVideoButton": "Video HD del round",
  "cinema.winShare.hdVideoTitle": "Genera questo round come mp4 in HD (servizio di render locale) e salvalo.",
  "cinema.winShare.tweetTriggerLabel": "Condividi la vincita su X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "rendimento {value} sul puntato",
  "cinema.pnlShare.onStake": "SUL PUNTATO",
  "cinema.pnlShare.certifiedRun": "RUN CERTIFICATA · P&L NETTO",
  "cinema.pnlShare.heroSub.one": "in {n} round giocato · {pct}% di vittorie",
  "cinema.pnlShare.heroSub.other": "in {n} round giocati · {pct}% di vittorie",
  "cinema.pnlShare.collection": "COLLEZIONE",
  "cinema.pnlShare.change30d": "VARIAZIONE 30G",
  "cinema.pnlShare.ribbonAriaLabel.one": "Risultato per round, ultimo {n} round puntato",
  "cinema.pnlShare.ribbonAriaLabel.other": "Risultato per round, ultimi {n} round puntati",
  "cinema.pnlShare.bestPull": "MIGLIOR PULL",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "COMUNE",
  "cinema.pnlShare.rounds": "ROUND",
  "cinema.pnlShare.winRate": "% VITTORIE",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "ROUND MIGLIORE",
  "cinema.pnlShare.rank": "POSIZIONE #{n}",
  "cinema.pnlShare.rankOf": "POSIZIONE #{n} SU {total}",
  "cinema.pnlShare.staked": "{value} PUNTATI",
  "cinema.pnlShare.overlayAriaLabel": "Condividi la tua run",
  "cinema.pnlShare.saved": "Salvato. Allegalo al tuo post.",
  "cinema.pnlShare.triggerLabel": "Condividi il PnL",

  // --- RoyaleSpectatorRecapSection.tsx: "dove è finita ogni carta" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Tieni / vendi",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Decidi tu",
  "cinema.recap.dest.deciding": "Sta decidendo",
  "cinema.recap.dest.you": "Tu",
  "cinema.recap.dest.topBacker": "Maggior sostenitore",
  "cinema.recap.dest.yourCard": "La tua carta",
  "cinema.recap.dest.wonBy": "Vinta da",
  "cinema.recap.dest.aBacker": "Un sostenitore",
  "cinema.recap.dest.yourChaseLoot": "Il tuo bottino della Caccia",
  "cinema.recap.dest.chaseLoot": "Bottino della Caccia",
  "cinema.recap.dest.releasedFromVault": "uscita dal caveau",
  "cinema.recap.dest.sweptTo": "Finita a",
  "cinema.recap.dest.chaseVault": "Il caveau della Caccia",
  "cinema.recap.dest.fundsJackpot": "alimenta il jackpot",
  "cinema.recap.dest.protocolFee": "Commissione di protocollo",
  "cinema.recap.dest.tableRake": "rake del tavolo",
  "cinema.recap.dest.soldBack": "Rivenduta",
  "cinema.recap.dest.intoTheSplit": "Nella ripartizione",
  "cinema.recap.dest.toThePool": "+{value} nel montepremi",
  "cinema.recap.sublineYours": "Tutte le carte del tavolo in questo round. La tua è segnata qui sotto.",
  "cinema.recap.sublineLost": "Tutte le carte del tavolo in questo round. Nessuna è tua.",
  "cinema.recap.sublineNoStake": "Tutte le carte del tavolo in questo round. Questo giro l'hai saltato.",
  "cinema.recap.sectionAriaLabel": "Dove è finita ogni carta di questo round",
  "cinema.recap.eyebrow": "Risultati del round",
  "cinema.recap.headline": "Dove è finita ogni carta",
  "cinema.recap.theatreHeader": "La storia del round · dove finisce ogni carta",
  "cinema.recap.openCardTitle": "Apre la pagina della carta in una nuova scheda",
  "cinema.recap.fromPack": "Da {pack}",
  "cinema.recap.railAriaLabel": "Tutte le carte del round, le più preziose per prime",
  "cinema.recap.tierRule.one": "L'altra carta · {value}",
  "cinema.recap.tierRule.other": "Le altre {n} carte · {value}",
  "cinema.recap.showMore": "Mostra altre {n}",
  "cinema.recap.showAll": "Mostra tutte ({n})",
  "cinema.recap.showing": "{n} di {total} carte · {value} di {totalValue}",
  "cinema.recap.allShown": "Tutte le {n} carte · {value} in totale",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "REGISTRA SCHEDA" inside the two service sentences is this same panel's
  // button label (cinema.replay.recordTab): keep the two in step.
  "cinema.replay.finishingVideo": "Chiusura del video...",
  "cinema.replay.recordingEmpty": "La registrazione è tornata vuota. Riprova.",
  "cinema.replay.checkingService": "Cerco il servizio di render HD...",
  "cinema.replay.serviceUnreachable":
    "Il servizio di render HD non risponde, quindi qui non si genera in HD. REGISTRA SCHEDA cattura invece questa scheda (con richiesta del browser).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Rendering del video HD: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "Il render HD non è riuscito. Riprova, oppure usa REGISTRA SCHEDA per catturare questa scheda.",
  "cinema.replay.cannotRecord":
    "Questo browser non riesce a registrare video qui. Salvo invece il file del round: trascinalo sulla pagina replay per rivederlo.",
  "cinema.replay.pickThisTab": "Scegli \"Questa scheda\" per registrare il round.",
  "cinema.replay.recorderFailed": "Il registratore non è partito.",
  "cinema.replay.watermarkAriaLabel": "Replay del round {n}",
  "cinema.replay.watermarkAriaLabelDated": "Replay del round {n}, registrato il {date}",
  "cinema.replay.watermarkTag": "REPLAY",
  "cinema.replay.watermarkRound": "ROUND #{n}",
  "cinema.replay.headerSeed": "SEED {seed}",
  "cinema.replay.phaseBidding": "PUNTATE",
  "cinema.replay.phaseReveal": "RIVELAZIONE",
  "cinema.replay.phaseDone": "FINITO",
  "cinema.replay.boardAriaLabel": "Tabellone del replay",
  "cinema.replay.controlsAriaLabel": "Comandi del replay per il round {n}",
  "cinema.replay.pause": "Pausa",
  "cinema.replay.play": "Riproduci",
  "cinema.replay.pauseButton": "PAUSA",
  "cinema.replay.playButton": "AVVIA",
  "cinema.replay.restart": "RIAVVIA",
  "cinema.replay.scrubAriaLabel": "Scorri tutto il round: dalle puntate alla rivelazione",
  "cinema.replay.lockMark": "Blocco",
  "cinema.replay.seeking": "RICERCA",
  "cinema.replay.speedAriaLabel": "Velocità di riproduzione",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "SALVA VIDEO",
  "cinema.replay.saveVideoTitle":
    "Genera questo round come mp4 in HD (servizio di render locale, del tuo schermo non si registra nulla)",
  "cinema.replay.recordTab": "REGISTRA SCHEDA",
  "cinema.replay.recordTabTitle":
    "Alternativa: registra questa scheda con la richiesta di cattura schermo del browser (qualità in tempo reale)",
  "cinema.replay.saveRound": "SALVA ROUND",
  "cinema.replay.saveRoundTitle":
    "Scarica questo round come piccolo file di dati, chiunque può trascinarlo sulla pagina replay per rivedere esattamente questo round",
  "cinema.replay.close": "CHIUDI",
  "cinema.replay.backToGame": "TORNA AL GIOCO",
  "cinema.replay.shareOverlayAriaLabel": "Condividi questo round",
  "cinema.replay.videoReady": "VIDEO DEL ROUND PRONTO",
  "cinema.replay.formatWebm": "Salvato in .webm, X carica solo mp4: condividi il link oppure converti prima il file.",
  "cinema.replay.formatMp4": "Salvato in .mp4, pronto da allegare su X.",
  "cinema.replay.shareOnX": "Condividi su X",
  "cinema.replay.saveAgain": "Salva di nuovo",
  "cinema.replay.shareHint": "X non può allegare un video dal web: il tuo post si apre già compilato, allega il file salvato.",
  "cinema.replay.xOpened": "X si è aperto con il tuo testo. Allega il file salvato ({filename}), il compositore web non può farlo al posto tuo.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "Replay del round attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "Nessuna registrazione fornita. Passa ?rec=<encoded-json-or-url>.",
  "cinema.replayRoute.unreadable": "Non si legge la registrazione da ?rec=.",
  "cinema.replayRoute.loadFailed": "Registrazione non caricata ({error}).",
  "cinema.replayRoute.badge": "REPLAY DEL ROUND",
  "cinema.replayRoute.loading": "CARICAMENTO REGISTRAZIONE",
  "cinema.replayRoute.noRecording": "Nessuna registrazione da riprodurre.",
  "cinema.replayRoute.hint":
    "I replay si aprono dalla striscia dei round passati sul tabellone (REPLAY su un round concluso) o da un link ?rec= condiviso.",
  "cinema.replayRoute.roundResults": "RISULTATI DEL ROUND",
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
  "cinema.share.shareFile": "Condividi file",
  "cinema.share.shareSheetOpened": "Foglio di condivisione aperto.",
  "cinema.winShare.lossHeadline": "SCONFITTA DEL ROUND",
  "cinema.winShare.lossResult": "SCONFITTA",
  "cinema.winShare.returned": "RESTITUITO",
  "cinema.winShare.bestPull": "MIGLIOR PULL",
  "cinema.winShare.playedBy": "GIOCATO DA {name}",
  "cinema.winShare.lossCaption": "Round #{n}: ho puntato {stake}. Nessuna vincita in questo round.",
  "cinema.winShare.lossCardCaption": "Il miglior pull sul tavolo, ma non il mio.",
  "cinema.winShare.lossNoCardCaption": "Il risultato del round, registrato con onestà.",
  "cinema.winShare.roundResultTop": "ROUND",
  "cinema.winShare.roundResultMain": "SCONFITTA",
  "cinema.winShare.shareRoundCard": "Condividi carta",
  "cinema.replay.shareVideo": "Condividi video",
  "cinema.replay.shareVideoTitle": "Condividi video del round",
  "cinema.replay.shareVideoSheetOpened": "Foglio aperto con il video.",
  "cinema.replay.shareVideoFailed": "Impossibile condividere il video. Riprova.",
  "cinema.replay.shareSheetHint": "Il tuo dispositivo può inviare questo video a X dal foglio di condivisione.",
  "cinema.replay.shareRoundTitle": "attn royale · Round #{n}",
  "cinema.replay.shareRoundTable": "{amount} sul tavolo.",
  "cinema.replay.shareRoundWin": "La mia casella prende il tavolo per {pool} · tornano {amount}.",
  "cinema.replay.shareRoundCardsOnly": "La casella {tile} prende il tavolo per {pool} · la mia perde, ma tornano {amount}.",
  "cinema.replay.shareRoundWinner": "La casella {tile} prende il tavolo per {pool}.",
  "cinema.share.shareVideo": "Condividi video",
  "cinema.share.preparingOutput": "Preparazione della condivisione…",
  "cinema.share.cancelled": "Condivisione annullata.",
  "cinema.share.shareSheetHint": "Il tuo dispositivo può inviare questo video a X dal foglio di condivisione.",
  "cinema.personalReveal.sectionAria": "Carte che hai aperto",
  "cinema.personalReveal.title": "CARTE CHE HAI APERTO",
  "cinema.personalReveal.progress.eyebrow": "RIVELAZIONE SINCRONIZZATA",
  "cinema.personalReveal.progress.title": "APERTURE IN CORSO",
  "cinema.personalReveal.progress.body": "Il tavolo sta aprendo le sue carte. La rivelazione condivisa continua al termine di questa fase.",
  "cinema.personalReveal.normal.label": "RIVELAZIONE NORMALE",
  "cinema.personalReveal.normalHint": "All’inizio vedi il retro della carta. Fai clic o tocca una carta per girarla; le carte che apri sono tue. Quelle ancora coperte si girano automaticamente dopo 5 secondi.",
  "cinema.personalReveal.hardcore.label": "RIVELAZIONE ESTREMA",
  "cinema.personalReveal.hardcoreHint": "All’inizio vedi il retro della carta. Fai clic o tocca una carta per girarla; la proprietà viene decisa dopo l’estrazione. Quelle ancora coperte si girano automaticamente dopo 5 secondi.",
  "cinema.personalReveal.yourCard": "LA TUA CARTA",
  "cinema.personalReveal.youOpened": "APERTA DA TE",
  "cinema.personalReveal.otherCards": "ALTRE CARTE",
  "cinema.personalReveal.allOpen": "Tutte le carte sono rivelate",
  "cinema.personalReveal.autoOpenIn": "Le carte restanti si rivelano automaticamente tra {n} s",
  "cinema.personalReveal.revealCardAria": "Gira la carta {n}",
  "cinema.personalReveal.revealedCardAria": "Carta {n} rivelata: {name}, {value}",
  "cinema.personalReveal.sort.group": "Ordine delle carte",
  "cinema.personalReveal.sort.pack": "Busta",
  "cinema.personalReveal.sort.packAria": "Ordina per prezzo del pack, dal meno caro al più caro",
  "cinema.personalReveal.sort.rarity": "Rarità",
  "cinema.personalReveal.sort.revealFirst": "L’ordinamento per rarità si sblocca dopo che tutte le carte sono state rivelate",
  "cinema.personalReveal.sort.bestAria": "Ordina per rarità, le più rare per prime",
  "cinema.personalReveal.sort.worstAria": "Ordina per rarità, le meno rare per prime",
  "cinema.personalReveal.sort.packStatus": "Carte ordinate per prezzo del pack, dal meno caro al più caro",
  "cinema.personalReveal.sort.bestStatus": "Carte ordinate per rarità, le più rare per prime",
  "cinema.personalReveal.sort.worstStatus": "Carte ordinate per rarità, le meno rare per prime",
  "cinema.personalReveal.rarity": "Rarità",
  "cinema.personalReveal.year": "Anno",
  "cinema.personalReveal.yearUnknown": "Anno sconosciuto",
  "cinema.personalReveal.grade": "Voto",
  "cinema.personalReveal.ungraded": "Non valutata",
  "cinema.personalReveal.pageNavigation": "Pagine delle carte",
  "cinema.personalReveal.previousPage": "Carte precedenti",
  "cinema.personalReveal.nextPage": "Carte successive",
  "cinema.personalReveal.pageStatus": "Pagina {page} di {pages}",
  "cinema.personalReveal.live.revealed": "{name} rivelata",
  "cinema.personalReveal.live.all": "Tutte le {n} carte sono rivelate",
} as Record<string, string>;
