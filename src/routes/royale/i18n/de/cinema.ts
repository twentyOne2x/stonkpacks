// German (Deutsch): "cinema" segment. Same key set as en/cinema.ts - see that
// file's header for the full surface breakdown (RoyaleRevealCinema,
// RoyalePhaseAnnounce, revealCinemaTypes, RoyaleRoundCardWall,
// RoyaleVaultLockBand, RoyaleRoundTheatre, RoyalePrizeModal,
// RoyaleWinShareCard, RoyaleProfilePnlShareCard, RoyaleSpectatorRecapSection,
// RoyaleRoundReplay and RoyaleReplayRoute) and the two SHARED sub-namespaces
// cinema.theatre.* and cinema.share.*.
//
// See royaleI18n.ts for the {token} interpolation convention and the
// no-em-dash / brand-terms-stay-English / numbers-stay-literal rules.
//
// REGISTER: formal (Siezen) throughout.
// TERMINOLOGY: "Chase" IS translated and always reads "die Jagd" (house style,
// see de/misc.ts, de/docs.ts); a board square is a "Kachel" (never "Feld"), the
// board is das "Spielfeld"; "provably fair" is "nachweislich fair"; "backer" is
// "Unterstützer"; "pull" is "Ziehung"; "change" (loose money) is "Kleingeld".
// The five pack tier names (Starter / Elite / Legendary / Grail / Mythic) plus
// "Slab", "SLABZ" and the "POWERED BY SLABZ" lockup stay English and are NEVER
// inflected into German (ein "Grail", nie ein "Gral").
//
// BUTTON-LABEL ECHO: "TAB AUFNEHMEN" inside cinema.replay.serviceUnreachable /
// .hdRenderFailed is this same panel's cinema.replay.recordTab button label -
// keep the three in step.
//
// NBSP note (cinema.tileValue.* keys): the English source keeps a
// non-breaking space (U+00A0) between the two words of "on tile" so the
// phrase never wraps to an orphan line. "card value" collapses to one
// German compound word (Kartenwert) so the wrap risk, and the NBSP, does
// not apply there; "auf Kachel" keeps two words and keeps the NBSP.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "PACKS ÖFFNEN SICH",
  "cinema.phaseAnnounce.packsOpening.subtitle": "Karten werden enthüllt · Kacheln neu bewertet",
  "cinema.phaseAnnounce.winnerDraw.title": "GEWINNERZIEHUNG",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "gewichtet nach Kachelsumme",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  "cinema.phase.lockFreeze.copy": "Gesperrt: Das Spielfeld ist die Show",
  "cinema.phase.packsEnter.copy": "Packs landen auf dem Spielfeld",
  "cinema.phase.packsOpening.copy": "Packs reißen auf: Karten werden enthüllt, Kacheln neu bewertet",
  "cinema.phase.cardsByTile.copy": "Karten enthüllt: jede Kachel, Wert zuerst",
  "cinema.phase.valueScan.copy": "Das Spielfeld wird gelesen: die größten Ziehungen leuchten",
  "cinema.phase.winnerDraw.copy": "Der Gewinner wird gezogen: gewichtet nach Kachelsumme",
  "cinema.phase.winnerLock.copy": "Gewinner steht fest",
  "cinema.phase.loserValueConverge.copy": "Verlierer-Ziehungen kehren in den Tresor zurück: ihr Wert fließt dem Gewinner zu",
  "cinema.phase.winnerPotCountUp.copy": "Der Pool landet auf der Gewinner-Kachel",
  "cinema.phase.chaseFeed.copy": "Die Jagd nimmt ihren Anteil",
  "cinema.phase.chasePayout.copy": "Die Jagd löst aus: eine Kachel gewinnt groß",
  "cinema.phase.allocation.copy": "Sie bekommen",
  "cinema.phase.keepSellDecision.copy": "Behalten oder verkaufen: die Entscheidung läuft bis in die nächste Runde mit",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "VERWAHRT",
  "cinema.vaultLock.plateSub": "DIE JAGD",
  "cinema.vaultLock.status": "GESPERRT",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "KEINE KARTEN IN DIESER RUNDE GEÖFFNET",
  "cinema.cardWall.won": "GEWONNEN",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP-TREFFER",
  "cinema.cardWall.rarity.common": "GEWÖHNLICH",
  "cinema.cardWall.rarity.rare": "SELTEN",
  "cinema.cardWall.rarity.epic": "EPISCH",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "BEHALTEN",
  "cinema.cardWall.status.sold": "VERKAUFT",
  "cinema.cardWall.status.toTheChase": "AN DIE JAGD",
  "cinema.cardWall.status.rake": "GEBÜHR",
  "cinema.cardWall.owner.vault": "TRESOR",
  "cinema.cardWall.owner.you": "SIE",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Eingabetaste öffnet die Kartendetails.",
  "cinema.cardWall.sectionAriaLabel": "Jede in dieser Runde geöffnete Karte, wertvollste zuerst",
  "cinema.cardWall.eyebrow": "Jede geöffnete Karte",
  "cinema.cardWall.rake.title": "Protokollgebühr",
  "cinema.cardWall.rake.metaOne": "1 Karte als Gebühr",
  "cinema.cardWall.rake.metaMany": "{n} Karten als Gebühr",
  "cinema.cardWall.rake.hide": "Ausblenden",
  "cinema.cardWall.rake.show": "Anzeigen",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Enthüllung schließen",
  "cinema.close.title": "Enthüllung schließen (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Offizieller Gewinner",
  "cinema.provCaption.round": "Runde",
  "cinema.provCaption.verifyAt": "Prüfen unter",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Runde #{n}",
  "cinema.bar.vrfBadge": "Mit CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "Jagd +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "ÖFFNUNG",
  "cinema.phaseShort.drawing": "ZIEHUNG",
  "cinema.phaseShort.results": "ERGEBNISSE",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "GEWINNER",
  "cinema.core.tileWins": "{tile} gewinnt",
  "cinema.core.inCards": " IN KARTEN",
  "cinema.core.poolSuffix": " POOL",
  "cinema.core.totalCardValue": "KARTENWERT GESAMT",
  "cinema.core.totalPool": "GESAMTPOOL",
  "cinema.core.tilesLive": "{n} KACHELN LIVE",
  "cinema.core.packsSuffix": " · {n} PACKS",
  "cinema.core.yourStake": "Ihr Einsatz",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Kein Einsatz",
  "cinema.heatOnly.note": "Nur USDC · kein Pack in dieser Runde",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} Pack",
  "cinema.tile.packCountMany": "{n} Packs",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Ziehung verloren. Die Karten gehen an die Unterstützer der Gewinner-Kachel.",
  "cinema.vaultNote.heatOnlyNoPack": "Kein Pack in dieser Runde · Kleingeld wandert in den Pool",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "aus {pack}",
  "cinema.grail.fromPackRate": "aus {pack} · {pct} Ziehchance",
  "cinema.grail.pullTitle": "GRAIL-ZIEHUNG",
  "cinema.grail.fromPackVisible": "aus einem {pack}-Pack",
  "cinema.grail.provenanceAriaLabel": "{tile}, aus einem {pack}-Pack",
  "cinema.grail.multiTitle": "{n} GRAILS IN DIESER RUNDE",
  "cinema.grail.galleryTileFromPack": "{tile} · aus {pack}",
  "cinema.grail.galleryMore": "+{n} weitere",
  "cinema.card.openInNewTab": "Kartenseite von {name} in neuem Tab öffnen",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Aus {pack}-Pack, {pct} Ziehchance. Eingabetaste öffnet die Kartendetails.",
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Eingabetaste öffnet die Kartendetails.",
  "cinema.card.bandChancePct": "{pct}% Chance aus einem {pack}-Pack",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} GEWINNT",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "VERKAUFSFENSTER OFFEN",
  "cinema.sellWindow.secToDecide": "SEK. ZUM ENTSCHEIDEN",
  "cinema.sellWindow.noActionAutoSells": "OHNE AKTION: AUTO-VERKAUF BEI NÄCHSTER SPERRE",
  "cinema.sellWindow.noActionKeeps": "OHNE AKTION BLEIBT DIE KARTE · JEDERZEIT AUS IHREN KARTEN VERKAUFEN",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words, AUDIT-FIX-4:
  // keeps "auf Kachel" from breaking to an orphan "auf" / "Kachel" at a
  // line end. "card value" translates to one compound word (Kartenwert)
  // so no NBSP is needed there.
  "cinema.tileValue.cardValueLabel": "Kartenwert",
  "cinema.tileValue.onTileLabel": "auf Kachel",
  "cinema.tileValue.oddsWord": "Quote",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "die getroffene Kachel",
  "cinema.chase.fires": "DIE JAGD LÖST AUS",
  "cinema.chase.jackpotReleasingTo": "JACKPOT FLIESST AN {tile}",
  "cinema.chase.winningTileFallback": "DIE GEWINNER-KACHEL",
  "cinema.chase.feedThisRound": "Die Jagd +{value} in dieser Runde",
  "cinema.chase.cardToChase": "KARTE AN DIE JAGD",
  "cinema.chase.bestLosingCardNamed": "Beste Verliererkarte · {name} · {value} gesichert",
  "cinema.chase.bestLosingCardVault": "Beste Verliererkarte im Tresor gesichert",
  "cinema.chase.jackpotGrows": "Die Jagd +{value} · Jackpot wächst",
  "cinema.chase.hitsAriaLabel": "Die Jagd trifft {tile} für {value}",
  "cinema.chase.alsoHolds": "Die Jagd hält außerdem",
  "cinema.chase.alsoHoldsAriaOne": "Die Jagd hält außerdem 1 Karte im Wert von {value}",
  "cinema.chase.alsoHoldsAriaMany": "Die Jagd hält außerdem {n} Karten im Wert von {value}",
  "cinema.chase.more": "weitere",
  "cinema.chase.cardsTotalOne": "1 Karte · {value} in Slabs",
  "cinema.chase.cardsTotalMany": "{n} Karten · {value} in Slabs",
  "cinema.chase.hitsKicker": "DIE JAGD TRIFFT",
  "cinema.chase.winsBig": "GEWINNT GROSS",
  "cinema.chase.yourCut": "IHR ANTEIL",
  "cinema.chase.otherBackerOne": "{n} weiterer Unterstützer · anteilig",
  "cinema.chase.otherBackerMany": "{n} weitere Unterstützer · anteilig",
  "cinema.chase.backerOne": "{n} Unterstützer · anteilig",
  "cinema.chase.backerMany": "{n} Unterstützer · anteilig",
  "cinema.chase.alsoWonRound": "Gewann auch die Runde",
  "cinema.chase.backedTileNote": "Eine unterstützte Kachel · nicht der Rundengewinner",
  "cinema.chase.heldCardsSpillOne": "1 gehaltene Karte fällt heraus",
  "cinema.chase.heldCardsSpillMany": "{n} gehaltene Karten fallen heraus",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "Pot",
  "cinema.you.get": "Sie bekommen",
  "cinema.you.lost": "Sie haben verloren!",
  "cinema.you.noStakeThisRound": "Sie haben diese Runde nicht gesetzt",
  "cinema.you.mathLine": "{usdc} USDC-Poolanteil + {cards} aus Karten = {total} für Sie",
  "cinema.you.sold": "Verkauft {value}",
  "cinema.you.kept": "Behalten · in Ihrer Sammlung",
  "cinema.you.keepButton": "Behalten",
  "cinema.you.sellButton": "Verkaufen {value}",
  "cinema.you.yours": "gehört Ihnen",
  "cinema.you.noCardThisRound": "Keine Karte diese Runde.",
  "cinema.you.usdcPaidInstantly": "USDC · dem Guthaben gutgeschrieben",
  "cinema.you.keepAll": "Alle behalten",
  "cinema.you.sellAllButton": "Alle verkaufen {value}",
  "cinema.you.sellAllConfirm": "Sicher? Alles verkaufen {value}",
  "cinema.you.noOtherBackers": "Keine weiteren Unterstützer in dieser Runde",
  "cinema.you.oneOtherSplits": "1 weiterer teilt sich {value}",
  "cinema.you.othersSplit": "{n} weitere teilen sich {value}",
  "cinema.you.oneWinningBackerTakes": "1 gewinnender Unterstützer nimmt {value}",
  "cinema.you.winningBackersSplit": "{n} gewinnende Unterstützer teilen sich {value}",
  "cinema.you.viewFullResults": "Alle Ergebnisse ansehen",
  "cinema.you.howItWorks": "So funktioniert's",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Standard-Slab, der größte Unterstützer der Kachel behält sie oder verkauft sie anteilig zurück.",
  "cinema.theatre.disposition.sellBackSplit":
    "Grail-Regel: Kein einzelner Unterstützer kann die anderen anteilig auszahlen, also wird der Grail standardmäßig zurückverkauft und das USDC auf die ganze Kachel aufgeteilt.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Grail-Regel: Der anteilige Pool des größten Unterstützers deckt die Auszahlung der anderen bereits, also behält er den Grail und zahlt allen anderen ihren Kartenanteil in USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} von {total} anderen Spielern haben entschieden; nächste Runde in {seconds} Sekunden",
  "cinema.theatre.playersDeciding": "Spieler entscheiden {count}",
  "cinema.theatre.nextRoundIn": "nächste Runde in {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Runde wird aufgelöst",
  "cinema.theatre.stageLockingBoard": "Spielfeld wird gesperrt…",
  "cinema.theatre.stagePacksOpening": "Packs öffnen auf dem Spielfeld",
  "cinema.theatre.stageWinnerDrawn": "Gewinner gezogen",
  "cinema.theatre.headlineNoEntries": "Keine Einsätze in dieser Runde",
  "cinema.theatre.headlineRevealing": "Packs werden geöffnet…",
  "cinema.theatre.headlineTileWins": "{tile} gewinnt {value}",
  "cinema.theatre.tileFallback": "Kachel",
  "cinema.theatre.youWon": "Sie gewinnen {value}",
  "cinema.theatre.youLostNoStake": "Verloren, kein Einsatz auf {tile}",
  "cinema.theatre.winnerFallback": "der Gewinner",
  "cinema.theatre.tileWonNoStake": "{tile} gewinnt · Sie hatten keinen Einsatz",
  "cinema.theatre.aTileFallback": "Eine Kachel",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} Kacheln gespielt · Pool {pool}",
  "cinema.theatre.stripMetaCards": " · {value} Karten",
  "cinema.theatre.stripMetaCash": " + {value} bar",
  "cinema.theatre.drawingWinner": "Ziehung läuft",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Rundenergebnis",
  "cinema.theatre.roundSettled": "Runde abgerechnet",
  "cinema.theatre.winner": "Gewinner",
  "cinema.theatre.seedNote":
    "Enthält Ihren Start-Einsatz von {value} auf {tile}. Löschen Sie die Start-Einsätze im Einsatzpanel, um ab $0 zu spielen.",
  "cinema.theatre.lossNoteStaked":
    "Sie hatten in dieser Runde {value} auf anderen Kacheln liegen. Fahren Sie über eine Kachel hinter diesem Panel, um zu sehen, was sie geöffnet hat und warum sie verloren hat.",
  "cinema.theatre.lossNoteNoStake":
    "Sie haben in dieser Runde keine Kachel unterstützt, also gibt es nichts auszuzahlen. Wählen Sie in der nächsten Runde eine Einsatzgröße und klicken Sie eine Kachel an.",
  "cinema.theatre.bonusGrails.one":
    "{n} weiterer Grail ist in dieser Runde gefallen: Er geht als Bonusbeute an die Unterstützer der Gewinner-Kachel (behalten, oder anteilig zurückverkauft, wenn er zu teuer zum Halten ist), nie an die ATTN-Gebühr oder die Jagd.",
  "cinema.theatre.bonusGrails.other":
    "{n} weitere Grails sind in dieser Runde gefallen: Sie gehen als Bonusbeute an die Unterstützer der Gewinner-Kachel (behalten, oder anteilig zurückverkauft, wenn sie zu teuer zum Halten sind), nie an die ATTN-Gebühr oder die Jagd.",
  "cinema.theatre.noPacksBacked": "In dieser Runde wurden keine Packs unterstützt. Die nächste Runde startet automatisch.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Auszahlungsaufteilung · {tile}",
  "cinema.theatre.payoutSplitMeta": "Pool {pool} · Jagd-Zufuhr {feed}",
  "cinema.theatre.payoutSplitChase": " · JAGD +{value}",
  "cinema.theatre.you": "Sie",
  "cinema.theatre.physicalCard": "Physische Karte →",
  "cinema.theatre.grailSecured": " (Grail gesichert)",
  "cinema.theatre.grailSoldBack": "Grail zurückverkauft ({value}) → USDC-Aufteilung oben.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "JAGD-TREFFER!",
  "cinema.theatre.chaseHitBody":
    "Die Jagd hat auf ihrer eigenen seltenen Ziehung ausgelöst, also flossen {value} aus der Jagd in diesen Gewinn und stehen in der Aufteilung oben. Die nächste Jagd baut sich ab jetzt neu auf.",
  "cinema.theatre.chaseMissLead": "Kein Jagd-Treffer in dieser Runde.",
  "cinema.theatre.chaseMissBody": "Die Jagd löst auf ihrer eigenen seltenen Ziehung aus, also wächst sie weiter, jetzt {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Ziehung prüfen",
  "cinema.theatre.vrfSummaryNote": "überprüfbare Ziehung · Ziehungsquittung ansehen",
  "cinema.theatre.vrfRoundId": "Runden-ID",
  "cinema.theatre.vrfWinningDraw": "Gewinnziehung",
  "cinema.theatre.vrfDrawSeed": "Ziehungs-Seed",
  "cinema.theatre.vrfProofId": "Beweis-ID",
  "cinema.theatre.vrfTicket": "#{n} von {total}",
  "cinema.theatre.vrfVerifying": "Prüfe…",
  "cinema.theatre.vrfRecheck": "Erneut prüfen",
  "cinema.theatre.vrfVerifierLink": "Prüftool ↗",
  "cinema.theatre.vrfVerified": "✓ Ziehung geprüft, dieser Gewinner passt zu seinem veröffentlichten Ziehungs-Seed.",
  "cinema.theatre.vrfFailed": "✗ Diese Ziehung passt nicht zu ihrem Seed, nicht vertrauenswürdig.",
  "cinema.theatre.vrfNote": "Jede Runde zieht einen Gewinner aus einem veröffentlichten Seed, den Sie nachprüfen können.",
  "cinema.theatre.vrfNoDraw": "Diese Runde wurden keine Packs unterstützt, nichts zu ziehen.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Karte behalten → Sammlung",
  "cinema.theatre.sellBackFor": "Für {value} zurückverkaufen",
  "cinema.theatre.continueNextRound": "Weiter zur nächsten Runde",
  "cinema.theatre.continue": "Weiter",
  "cinema.theatre.settleHint":
    "Behalten legt die Karte in Ihre Sammlung. Zurückverkaufen schreibt {sell} ({pct}% von {value}, der CC-Rückkauf dieses Packs) Ihrem Guthaben gut. Keine Aktion = die Karte wird beim Rundenschluss zurückverkauft.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Gesperrt",
  "cinema.prizeModal.stageReveal": "Enthüllung",
  "cinema.prizeModal.betterLuck": "Mehr Glück in der nächsten Runde",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Ihre Karte wird vorbereitet…",
  "cinema.share.renderingPng": "PNG wird gerendert…",
  "cinema.share.renderFailed": "Das Bild ließ sich nicht rendern. Versuchen Sie es erneut.",
  "cinema.share.captionOpened": "Der Text ist auf X geöffnet. Hängen Sie das gespeicherte PNG an.",
  "cinema.share.close": "Schließen",
  "cinema.share.downloadPng": "PNG herunterladen",
  "cinema.share.shareToX": "Auf X teilen",
  "cinema.share.done": "Fertig",
  "cinema.share.provablyFair": "PACK-SCHLACHTEN · JEDE ZIEHUNG ÜBERPRÜFBAR",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "Multiplikator {value}",
  "cinema.winShare.multiplier": "MULTIPLIKATOR",
  "cinema.winShare.inCards": "IN KARTEN",
  "cinema.winShare.cashWon": "BARGEWINN",
  "cinema.winShare.tileHit": "· KACHEL-TREFFER",
  "cinema.winShare.entry": "EINSATZ",
  "cinema.winShare.winOdds": "GEWINNQUOTE",
  "cinema.winShare.totalValue": "GESAMTWERT",
  "cinema.winShare.certLine": "POWERED BY SLABZ · ZERT. #{n}",
  "cinema.winShare.roundLine": "RUNDE #{n} · ÜBERPRÜFBARE VRF-ZIEHUNG",
  "cinema.winShare.takeHomeAriaLabel": "Reingewinn {value}",
  "cinema.winShare.totalTakeHome": "REINGEWINN GESAMT",
  "cinema.winShare.breakdown.one": "{cash} BAR + {n} KARTE ({value})",
  "cinema.winShare.breakdown.other": "{cash} BAR + {n} KARTEN ({value})",
  "cinema.winShare.deposited": "EINGEZAHLT",
  "cinema.winShare.wonBy": "GEWONNEN VON {name}",
  "cinema.winShare.theGrail": "DER GRAIL",
  "cinema.winShare.topPull": "TOP-ZIEHUNG",
  "cinema.winShare.topCardOfRound": "TOPKARTE DER RUNDE",
  "cinema.winShare.poweredBySlabz": "POWERED BY SLABZ",
  "cinema.winShare.cert": "ZERT. #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Gewinn teilen",
  "cinema.winShare.pngSaved": "PNG gespeichert. Hängen Sie es an Ihren Post an, X kann das nicht für Sie tun.",
  "cinema.winShare.renderingHdVideo": "HD-Rundenvideo wird gerendert…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "HD-Rundenvideo wird gerendert, {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "HD-Video gespeichert. Hängen Sie es statt des Bildes an Ihren Post an.",
  "cinema.winShare.hdRenderFailed": "Das HD-Rendern ist fehlgeschlagen. Versuchen Sie es erneut.",
  "cinema.winShare.hdVideoButton": "HD-Rundenvideo",
  "cinema.winShare.hdVideoTitle": "Diese Runde als HD-mp4 rendern (lokaler Render-Dienst) und speichern.",
  "cinema.winShare.tweetTriggerLabel": "Gewinn auf X teilen",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "Rendite {value} auf den Einsatz",
  "cinema.pnlShare.onStake": "AUF EINSATZ",
  "cinema.pnlShare.certifiedRun": "ZERTIFIZIERTER LAUF · NETTO G/V",
  "cinema.pnlShare.heroSub.one": "über {n} Runde · {pct}% Siegquote",
  "cinema.pnlShare.heroSub.other": "über {n} Runden · {pct}% Siegquote",
  "cinema.pnlShare.collection": "SAMMLUNG",
  "cinema.pnlShare.change30d": "30T-VERÄNDERUNG",
  "cinema.pnlShare.ribbonAriaLabel.one": "Ergebnis pro Runde für die letzte {n} Runde mit Einsatz",
  "cinema.pnlShare.ribbonAriaLabel.other": "Ergebnis pro Runde für die letzten {n} Runden mit Einsatz",
  "cinema.pnlShare.bestPull": "BESTE ZIEHUNG",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "GEWÖHNLICH",
  "cinema.pnlShare.rounds": "RUNDEN",
  "cinema.pnlShare.winRate": "SIEGQUOTE",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "BESTE RUNDE",
  "cinema.pnlShare.rank": "RANG #{n}",
  "cinema.pnlShare.rankOf": "RANG #{n} VON {total}",
  "cinema.pnlShare.staked": "{value} GESETZT",
  "cinema.pnlShare.overlayAriaLabel": "Ihren Lauf teilen",
  "cinema.pnlShare.saved": "Gespeichert. Hängen Sie es an Ihren Post an.",
  "cinema.pnlShare.triggerLabel": "G/V teilen",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Behalten / verkaufen",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Ihre Wahl",
  "cinema.recap.dest.deciding": "Entscheidet",
  "cinema.recap.dest.you": "Sie",
  "cinema.recap.dest.topBacker": "Größter Unterstützer",
  "cinema.recap.dest.yourCard": "Ihre Karte",
  "cinema.recap.dest.wonBy": "Gewonnen von",
  "cinema.recap.dest.aBacker": "Ein Unterstützer",
  "cinema.recap.dest.yourChaseLoot": "Ihre Jagd-Beute",
  "cinema.recap.dest.chaseLoot": "Jagd-Beute",
  "cinema.recap.dest.releasedFromVault": "aus dem Tresor freigegeben",
  "cinema.recap.dest.sweptTo": "Gewandert an",
  "cinema.recap.dest.chaseVault": "Der Jagd-Tresor",
  "cinema.recap.dest.fundsJackpot": "speist den Jackpot",
  "cinema.recap.dest.protocolFee": "Protokollgebühr",
  "cinema.recap.dest.tableRake": "Tischgebühr",
  "cinema.recap.dest.soldBack": "Zurückverkauft",
  "cinema.recap.dest.intoTheSplit": "In die Aufteilung",
  "cinema.recap.dest.toThePool": "+{value} in den Pool",
  "cinema.recap.sublineYours": "Alle Karten des Tisches in dieser Runde. Ihre ist unten markiert.",
  "cinema.recap.sublineLost": "Alle Karten des Tisches in dieser Runde. Keine davon gehört Ihnen.",
  "cinema.recap.sublineNoStake": "Alle Karten des Tisches in dieser Runde. Sie haben ausgesetzt.",
  "cinema.recap.sectionAriaLabel": "Wohin jede Karte dieser Runde gegangen ist",
  "cinema.recap.eyebrow": "Rundenergebnisse",
  "cinema.recap.headline": "Wo jede Karte gelandet ist",
  "cinema.recap.theatreHeader": "Rundengeschichte · das Ziel jeder Karte",
  "cinema.recap.openCardTitle": "Öffnet die Kartenseite in einem neuen Tab",
  "cinema.recap.fromPack": "Aus {pack}",
  "cinema.recap.railAriaLabel": "Jede Karte dieser Runde, wertvollste zuerst",
  "cinema.recap.tierRule.one": "Die andere Karte · {value}",
  "cinema.recap.tierRule.other": "Die anderen {n} Karten · {value}",
  "cinema.recap.showMore": "{n} weitere anzeigen",
  "cinema.recap.showAll": "Alle {n} anzeigen",
  "cinema.recap.showing": "{n} von {total} Karten · {value} von {totalValue}",
  "cinema.recap.allShown": "Alle {n} Karten · {value} gesamt",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "TAB AUFNEHMEN" inside the two service sentences is this same panel's
  // button label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "Video wird fertiggestellt...",
  "cinema.replay.recordingEmpty": "Die Aufnahme kam leer zurück. Versuchen Sie es erneut.",
  "cinema.replay.checkingService": "HD-Render-Dienst wird gesucht...",
  "cinema.replay.serviceUnreachable":
    "Der HD-Render-Dienst ist nicht erreichbar, in HD lässt sich das also nicht rendern. TAB AUFNEHMEN nimmt stattdessen diesen Tab auf (Browser-Abfrage).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "HD-Video wird gerendert: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "Das HD-Rendern ist fehlgeschlagen. Versuchen Sie es erneut, oder nehmen Sie mit TAB AUFNEHMEN diesen Tab auf.",
  "cinema.replay.cannotRecord":
    "Dieser Browser kann hier kein Video aufnehmen. Stattdessen wird die Rundendatei gespeichert, ziehen Sie sie auf die Wiederholungsseite, um sie erneut anzusehen.",
  "cinema.replay.pickThisTab": "Wählen Sie „Dieser Tab“, um die Runde aufzunehmen.",
  "cinema.replay.recorderFailed": "Die Aufnahme ließ sich nicht starten.",
  "cinema.replay.watermarkAriaLabel": "Wiederholung von Runde {n}",
  "cinema.replay.watermarkAriaLabelDated": "Wiederholung von Runde {n}, aufgenommen {date}",
  "cinema.replay.watermarkTag": "WIEDERHOLUNG",
  "cinema.replay.watermarkRound": "RUNDE #{n}",
  "cinema.replay.headerSeed": "SEED {seed}",
  "cinema.replay.phaseBidding": "WETTEN",
  "cinema.replay.phaseReveal": "ENTHÜLLUNG",
  "cinema.replay.phaseDone": "FERTIG",
  "cinema.replay.boardAriaLabel": "Wiederholungs-Spielfeld",
  "cinema.replay.controlsAriaLabel": "Wiedergabesteuerung für Runde {n}",
  "cinema.replay.pause": "Pause",
  "cinema.replay.play": "Abspielen",
  "cinema.replay.pauseButton": "PAUSE",
  "cinema.replay.playButton": "ABSPIELEN",
  "cinema.replay.restart": "NEU STARTEN",
  "cinema.replay.scrubAriaLabel": "Durch die ganze Runde spulen: von den Wetten bis zur Enthüllung",
  "cinema.replay.lockMark": "Sperre",
  "cinema.replay.seeking": "SPULT",
  "cinema.replay.speedAriaLabel": "Wiedergabegeschwindigkeit",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "VIDEO SPEICHERN",
  "cinema.replay.saveVideoTitle":
    "Diese Runde als HD-mp4 rendern (lokaler Render-Dienst; von Ihrem Bildschirm wird nichts aufgenommen)",
  "cinema.replay.recordTab": "TAB AUFNEHMEN",
  "cinema.replay.recordTabTitle":
    "Rückfallebene: diesen Tab über die Bildschirmaufnahme-Abfrage Ihres Browsers aufnehmen (Echtzeitqualität)",
  "cinema.replay.saveRound": "RUNDE SPEICHERN",
  "cinema.replay.saveRoundTitle":
    "Diese Runde als kleine Datendatei herunterladen, jeder kann sie auf die Wiederholungsseite ziehen und genau diese Runde ansehen",
  "cinema.replay.close": "SCHLIESSEN",
  "cinema.replay.backToGame": "ZURÜCK INS SPIEL",
  "cinema.replay.shareOverlayAriaLabel": "Diese Runde teilen",
  "cinema.replay.videoReady": "RUNDENVIDEO FERTIG",
  "cinema.replay.formatWebm": "Als .webm gespeichert. X braucht mp4 zum Hochladen, teilen Sie also den Link oder wandeln Sie die Datei erst um.",
  "cinema.replay.formatMp4": "Als .mp4 gespeichert, bereit zum Anhängen auf X.",
  "cinema.replay.shareOnX": "Auf X teilen",
  "cinema.replay.saveAgain": "Erneut speichern",
  "cinema.replay.shareHint": "X kann kein Video aus dem Web anhängen. Ihr Post öffnet sich vorausgefüllt, hängen Sie die gespeicherte Datei an.",
  "cinema.replay.xOpened": "X ist mit Ihrem Text geöffnet. Hängen Sie die gespeicherte Datei ({filename}) an, der Web-Editor kann das nicht für Sie tun.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE Rundenwiederholung",
  "cinema.replayRoute.noRecordingParam": "Keine Aufnahme übergeben. Übergeben Sie ?rec=<encoded-json-or-url>.",
  "cinema.replayRoute.unreadable": "Die Aufnahme aus ?rec= ließ sich nicht lesen.",
  "cinema.replayRoute.loadFailed": "Die Aufnahme ließ sich nicht laden ({error}).",
  "cinema.replayRoute.badge": "RUNDENWIEDERHOLUNG",
  "cinema.replayRoute.loading": "AUFNAHME WIRD GELADEN",
  "cinema.replayRoute.noRecording": "Keine Aufnahme zum Abspielen.",
  "cinema.replayRoute.hint":
    "Wiederholungen öffnen sich über die Leiste vergangener Runden auf dem Spielfeld (WIEDERHOLUNG bei einer abgerechneten Runde) oder über einen geteilten ?rec=-Link.",
  "cinema.replayRoute.roundResults": "RUNDENERGEBNISSE",
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
  "cinema.share.shareFile": "Datei teilen",
  "cinema.share.shareSheetOpened": "Teilen-Menü geöffnet.",
  "cinema.winShare.lossHeadline": "RUNDE VERLOREN",
  "cinema.winShare.lossResult": "RUNDE VERLOREN",
  "cinema.winShare.returned": "ZURÜCK",
  "cinema.winShare.bestPull": "BESTER PULL",
  "cinema.winShare.playedBy": "GESPIELT VON {name}",
  "cinema.winShare.lossCaption": "Runde #{n}: Ich habe {stake} eingesetzt. Keine Auszahlung in dieser Runde.",
  "cinema.winShare.lossCardCaption": "Bester Pull auf dem Tisch, aber nicht meiner.",
  "cinema.winShare.lossNoCardCaption": "Das Rundenergebnis, ehrlich festgehalten.",
  "cinema.winShare.roundResultTop": "RUNDE",
  "cinema.winShare.roundResultMain": "VERLUST",
  "cinema.winShare.shareRoundCard": "Karte teilen",
  "cinema.replay.shareVideo": "Video teilen",
  "cinema.replay.shareVideoTitle": "Rundenvideo teilen",
  "cinema.replay.shareVideoSheetOpened": "Teilen-Menü mit dem Video geöffnet.",
  "cinema.replay.shareVideoFailed": "Video konnte nicht geteilt werden. Erneut versuchen.",
  "cinema.replay.shareSheetHint": "Dein Gerät kann dieses Video über das Teilen-Menü an X senden.",
  "cinema.replay.shareRoundTitle": "attn royale · Runde #{n}",
  "cinema.replay.shareRoundTable": "{amount} auf dem Tisch.",
  "cinema.replay.shareRoundWin": "Meine Kachel gewinnt den Tisch für {pool} · {amount} kommt zurück.",
  "cinema.replay.shareRoundCardsOnly": "Kachel {tile} gewinnt den Tisch für {pool} · meine Kachel verliert, aber {amount} kommt zurück.",
  "cinema.replay.shareRoundWinner": "Kachel {tile} gewinnt den Tisch für {pool}.",
  "cinema.share.shareVideo": "Video teilen",
  "cinema.share.preparingOutput": "Teilen wird vorbereitet…",
  "cinema.share.cancelled": "Teilen abgebrochen.",
  "cinema.share.shareSheetHint": "Dein Gerät kann dieses Video über das Teilen-Menü an X senden.",
  "cinema.personalReveal.sectionAria": "Von dir geöffnete Karten",
  "cinema.personalReveal.title": "VON DIR GEÖFFNETE KARTEN",
  "cinema.personalReveal.progress.eyebrow": "SYNCHRONISIERTE ENTHÜLLUNG",
  "cinema.personalReveal.progress.title": "ÖFFNUNGEN LAUFEN",
  "cinema.personalReveal.progress.body": "Am Tisch werden gerade die Karten geöffnet. Danach geht die gemeinsame Enthüllung weiter.",
  "cinema.personalReveal.normal.label": "NORMALE ENTHÜLLUNG",
  "cinema.personalReveal.normalHint": "Zuerst ist die Kartenrückseite zu sehen. Klicke oder tippe auf eine Karte, um sie umzudrehen; geöffnete Karten gehören dir. Alle noch verdeckten Karten drehen sich nach 5 Sekunden automatisch um.",
  "cinema.personalReveal.hardcore.label": "HARDCORE-ENTHÜLLUNG",
  "cinema.personalReveal.hardcoreHint": "Zuerst ist die Kartenrückseite zu sehen. Klicke oder tippe auf eine Karte, um sie umzudrehen; der Besitzer wird nach der Ziehung bestimmt. Alle noch verdeckten Karten drehen sich nach 5 Sekunden automatisch um.",
  "cinema.personalReveal.yourCard": "DEINE KARTE",
  "cinema.personalReveal.youOpened": "VON DIR GEÖFFNET",
  "cinema.personalReveal.otherCards": "ANDERE KARTEN",
  "cinema.personalReveal.sort.group": "Kartenreihenfolge",
  "cinema.personalReveal.sort.pack": "Kartenpack",
  "cinema.personalReveal.sort.packAria": "Nach Packpreis sortieren, günstigster zuerst",
  "cinema.personalReveal.sort.rarity": "Seltenheit",
  "cinema.personalReveal.sort.revealFirst": "Die Sortierung nach Seltenheit wird verfügbar, sobald alle Karten enthüllt sind",
  "cinema.personalReveal.sort.bestAria": "Nach Seltenheit sortieren, beste zuerst",
  "cinema.personalReveal.sort.worstAria": "Nach Seltenheit sortieren, schlechteste zuerst",
  "cinema.personalReveal.sort.packStatus": "Karten nach Packpreis sortiert, günstigster zuerst",
  "cinema.personalReveal.sort.bestStatus": "Karten nach Seltenheit sortiert, beste zuerst",
  "cinema.personalReveal.sort.worstStatus": "Karten nach Seltenheit sortiert, schlechteste zuerst",
  "cinema.personalReveal.allOpen": "Alle Karten sind enthüllt",
  "cinema.personalReveal.autoOpenIn": "Übrige Karten werden in {n} s automatisch enthüllt",
  "cinema.personalReveal.revealCardAria": "Karte {n} umdrehen",
  "cinema.personalReveal.revealedCardAria": "Karte {n} enthüllt: {name}, {value}",
  "cinema.personalReveal.rarity": "Seltenheit",
  "cinema.personalReveal.year": "Jahr",
  "cinema.personalReveal.yearUnknown": "Jahr unbekannt",
  "cinema.personalReveal.grade": "Bewertung",
  "cinema.personalReveal.ungraded": "Unbewertet",
  "cinema.personalReveal.pageNavigation": "Kartenseiten",
  "cinema.personalReveal.previousPage": "Vorherige Karten",
  "cinema.personalReveal.nextPage": "Nächste Karten",
  "cinema.personalReveal.pageStatus": "Seite {page} von {pages}",
  "cinema.personalReveal.live.revealed": "{name} enthüllt",
  "cinema.personalReveal.live.all": "Alle {n} Karten enthüllt",
} as Record<string, string>;
