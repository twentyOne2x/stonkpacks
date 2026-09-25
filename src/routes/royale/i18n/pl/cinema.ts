// Polish (Polski): "cinema" segment.
// Owns: RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx, revealCinemaTypes.ts
// (the copy: fields of REVEAL_CINEMA_SEQUENCE), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx. Same key set as en/cinema.ts - see that file's
// header for the shared sub-namespaces (cinema.theatre.*, cinema.share.*).
// See pl/core.ts for the binding terminology glossary (runda, pula, Pościg,
// kafelek, obstawiający, traf/losowanie, skarbiec, drobne, Powtórka, "pack"
// invariant) and the register/gendered-past-tense notes.
//
// RARITY LABELS: "GRAIL", "LEGENDARY" and "MYTHIC" are pack TIER brand names
// and stay English even when used as a card-rarity tag (never declined,
// never given a Polish plural) - "TOP HIT", "COMMON", "RARE" and "EPIC" are
// ordinary words and DO translate (matches misc.ts's cardDetail.rarity.* /
// rarityBand.* precedent).
// NBSP: cinema.tileValue.cardValueLabel/onTileLabel keep the U+00A0 between
// their two words (AUDIT-FIX-4, keeps an orphan word from wrapping alone).
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "OTWIERANIE PACKS",
  "cinema.phaseAnnounce.packsOpening.subtitle": "odsłanianie kart · przeliczanie każdego kafelka",
  "cinema.phaseAnnounce.winnerDraw.title": "LOSOWANIE ZWYCIĘZCY",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "ważone sumą kafelka",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Zablokowane: plansza jest teraz pokazem",
  "cinema.phase.packsEnter.copy": "Packs trafiają na planszę",
  "cinema.phase.packsOpening.copy": "Packs się rozrywają: karty się odsłaniają, kafelki przeliczają szanse",
  "cinema.phase.cardsByTile.copy": "Karty odsłonięte: każdy kafelek, najpierw wartość",
  "cinema.phase.valueScan.copy": "Odczyt planszy: największe trafy się podświetlają",
  "cinema.phase.winnerDraw.copy": "Losowanie zwycięzcy: ważone sumą kafelka",
  "cinema.phase.winnerLock.copy": "Zwycięzca ustalony",
  "cinema.phase.loserValueConverge.copy": "Trafy przegranych wracają do skarbca: ich wartość trafia do zwycięzcy",
  "cinema.phase.winnerPotCountUp.copy": "Pula ląduje na zwycięskim kafelku",
  "cinema.phase.chaseFeed.copy": "Pościg bierze swoją działkę",
  "cinema.phase.chasePayout.copy": "Pościg spuszcza zrzut: kafelek wygrywa wielką kwotę",
  "cinema.phase.allocation.copy": "Otrzymujesz",
  "cinema.phase.keepSellDecision.copy": "Zatrzymaj albo sprzedaj: decyzja przechodzi do następnej rundy",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "W SKARBCU",
  "cinema.vaultLock.plateSub": "POŚCIG",
  "cinema.vaultLock.status": "ZABLOKOWANE",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "BRAK OTWARTYCH KART W TEJ RUNDZIE",
  "cinema.cardWall.won": "WYGRANA",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP TRAF",
  "cinema.cardWall.rarity.common": "POSPOLITA",
  "cinema.cardWall.rarity.rare": "RZADKA",
  "cinema.cardWall.rarity.epic": "EPICKA",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "ZATRZYMANA",
  "cinema.cardWall.status.sold": "SPRZEDANA",
  "cinema.cardWall.status.toTheChase": "DO POŚCIGU",
  "cinema.cardWall.status.rake": "OPŁATA",
  "cinema.cardWall.owner.vault": "SKARBIEC",
  "cinema.cardWall.owner.you": "TY",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter otwiera szczegóły karty.",
  "cinema.cardWall.sectionAriaLabel": "Każda karta otwarta w tej rundzie, od najcenniejszej",
  "cinema.cardWall.eyebrow": "Każda otwarta karta",
  "cinema.cardWall.rake.title": "Opłata protokołu",
  "cinema.cardWall.rake.metaOne": "1 karta do opłaty",
  "cinema.cardWall.rake.metaMany": "{n} kart do opłaty",
  "cinema.cardWall.rake.hide": "Ukryj",
  "cinema.cardWall.rake.show": "Pokaż",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Zamknij odsłonę",
  "cinema.close.title": "Zamknij odsłonę (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Oficjalny zwycięzca",
  "cinema.provCaption.round": "Runda",
  "cinema.provCaption.verifyAt": "Zweryfikuj na",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Runda #{n}",
  "cinema.bar.vrfBadge": "Napędzane przez CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "Pościg +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "OTWIERANIE",
  "cinema.phaseShort.drawing": "LOSOWANIE",
  "cinema.phaseShort.results": "WYNIKI",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "ZWYCIĘZCA",
  "cinema.core.tileWins": "{tile} wygrywa",
  "cinema.core.inCards": " W KARTACH",
  "cinema.core.poolSuffix": " PULA",
  "cinema.core.totalCardValue": "ŁĄCZNA WARTOŚĆ KART",
  "cinema.core.totalPool": "CAŁA PULA",
  "cinema.core.tilesLive": "{n} KAFELKÓW W GRZE",
  "cinema.core.packsSuffix": " · {n} PACKS",
  "cinema.core.yourStake": "Twoja stawka",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Brak stawki",
  "cinema.heatOnly.note": "Tylko USDC · brak pack w tej rundzie",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} packs",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Przegrano losowanie. Karty trafiają do obstawiających zwycięski kafelek.",
  "cinema.vaultNote.heatOnlyNoPack": "Brak pack w tej rundzie · drobne przechodzą do puli",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "z {pack}",
  "cinema.grail.fromPackRate": "z {pack} · {pct} szans na traf",
  "cinema.grail.pullTitle": "TRAF GRAIL",
  "cinema.grail.fromPackVisible": "z pack {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, z pack {pack}",
  "cinema.grail.multiTitle": "{n} GRAIL W TEJ RUNDZIE",
  "cinema.grail.galleryTileFromPack": "{tile} · z {pack}",
  "cinema.grail.galleryMore": "+{n} więcej",
  "cinema.card.openInNewTab": "Otwórz stronę karty {name} w nowej karcie",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Z pack {pack}, {pct} szans na traf. Enter otwiera szczegóły karty.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter otwiera szczegóły karty.",
  "cinema.card.bandChancePct": "{pct}% szans z pack {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} WYGRYWA",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "OKNO SPRZEDAŻY OTWARTE",
  "cinema.sellWindow.secToDecide": "SEK NA DECYZJĘ",
  "cinema.sellWindow.noActionAutoSells": "BRAK AKCJI = AUTOMATYCZNA SPRZEDAŻ PRZY NASTĘPNEJ BLOKADZIE",
  "cinema.sellWindow.noActionKeeps": "BRAK AKCJI ZATRZYMUJE KARTĘ · SPRZEDAJ KIEDYKOLWIEK Z TWOICH KART",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "wartość karty",
  "cinema.tileValue.onTileLabel": "na kafelku",
  "cinema.tileValue.oddsWord": "szanse",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "trafiony kafelek",
  "cinema.chase.fires": "POŚCIG ODPALA",
  "cinema.chase.jackpotReleasingTo": "JACKPOT UWALNIANY NA {tile}",
  "cinema.chase.winningTileFallback": "ZWYCIĘSKI KAFELEK",
  "cinema.chase.feedThisRound": "Pościg +{value} w tej rundzie",
  "cinema.chase.cardToChase": "KARTA DO POŚCIGU",
  "cinema.chase.bestLosingCardNamed": "Najlepsza przegrana karta · {name} · {value} zabezpieczone",
  "cinema.chase.bestLosingCardVault": "Najlepsza przegrana karta zabezpieczona w skarbcu",
  "cinema.chase.jackpotGrows": "Pościg +{value} · jackpot rośnie",
  "cinema.chase.hitsAriaLabel": "Pościg trafia {tile} kwotą {value}",
  "cinema.chase.alsoHolds": "Pościg trzyma też",
  "cinema.chase.alsoHoldsAriaOne": "Pościg trzyma też 1 kartę o wartości {value}",
  "cinema.chase.alsoHoldsAriaMany": "Pościg trzyma też {n} kart o wartości {value}",
  "cinema.chase.more": "więcej",
  "cinema.chase.cardsTotalOne": "1 karta · {value} w ocenionych kartach",
  "cinema.chase.cardsTotalMany": "{n} kart · {value} w ocenionych kartach",
  "cinema.chase.hitsKicker": "POŚCIG TRAFIA",
  "cinema.chase.winsBig": "WIELKA WYGRANA",
  "cinema.chase.yourCut": "TWOJA DZIAŁKA",
  "cinema.chase.otherBackerOne": "{n} inny obstawiający · proporcjonalnie",
  "cinema.chase.otherBackerMany": "{n} innych obstawiających · proporcjonalnie",
  "cinema.chase.backerOne": "{n} obstawiający · proporcjonalnie",
  "cinema.chase.backerMany": "{n} obstawiających · proporcjonalnie",
  "cinema.chase.alsoWonRound": "Wygrał też rundę",
  "cinema.chase.backedTileNote": "Obstawiony kafelek · nie zwycięzca rundy",
  "cinema.chase.heldCardsSpillOne": "1 przechowywana karta wysypuje się",
  "cinema.chase.heldCardsSpillMany": "{n} przechowywanych kart wysypuje się",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "pula",
  "cinema.you.get": "Otrzymujesz",
  "cinema.you.lost": "Przegrana!",
  "cinema.you.noStakeThisRound": "Brak stawki w tej rundzie",
  "cinema.you.mathLine": "{usdc} USDC z udziału w puli + {cards} z kart = {total} dla Ciebie",
  "cinema.you.sold": "Sprzedano {value}",
  "cinema.you.kept": "Zatrzymano · w Twojej kolekcji",
  "cinema.you.keepButton": "Zatrzymaj",
  "cinema.you.sellButton": "Sprzedaj {value}",
  "cinema.you.yours": "Twoje",
  "cinema.you.noCardThisRound": "Brak karty w tej rundzie.",
  "cinema.you.usdcPaidInstantly": "USDC · zaliczone na Twoje saldo",
  "cinema.you.keepAll": "Zatrzymaj wszystko",
  "cinema.you.sellAllButton": "Sprzedaj wszystko {value}",
  "cinema.you.sellAllConfirm": "Na pewno? Sprzedaj wszystko {value}",
  "cinema.you.noOtherBackers": "Brak innych obstawiających w tej rundzie",
  "cinema.you.oneOtherSplits": "1 inny obstawiający dzieli {value}",
  "cinema.you.othersSplit": "{n} innych obstawiających dzieli {value}",
  "cinema.you.oneWinningBackerTakes": "1 zwycięski obstawiający zgarnia {value}",
  "cinema.you.winningBackersSplit": "{n} zwycięskich obstawiających dzieli {value}",
  "cinema.you.viewFullResults": "Zobacz pełne wyniki",
  "cinema.you.howItWorks": "Jak to działa",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Zwykła oceniona karta - największy obstawiający kafelka zatrzymuje ją albo odsprzedaje, proporcjonalnie.",
  "cinema.theatre.disposition.sellBackSplit":
    "Zasada Grail: żaden pojedynczy obstawiający nie pokryje proporcjonalnie pozostałych, więc grail domyślnie zostaje odsprzedany, a USDC dzielone jest na cały kafelek.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Zasada Grail: proporcjonalny udział największego obstawiającego wystarcza, żeby spłacić pozostałych, więc zatrzymuje on grail i wypłaca reszcie ich udział w USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} z {total} pozostałych graczy zdecydowało; następna runda za {seconds} sekund",
  "cinema.theatre.playersDeciding": "Gracze decydują {count}",
  "cinema.theatre.nextRoundIn": "następna runda za {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Runda się rozstrzyga",
  "cinema.theatre.stageLockingBoard": "Blokowanie planszy…",
  "cinema.theatre.stagePacksOpening": "Packs otwierają się na planszy",
  "cinema.theatre.stageWinnerDrawn": "Zwycięzca wylosowany",
  "cinema.theatre.headlineNoEntries": "Brak zgłoszeń w tej rundzie",
  "cinema.theatre.headlineRevealing": "Odsłanianie packs…",
  "cinema.theatre.headlineTileWins": "{tile} wygrywa {value}",
  "cinema.theatre.tileFallback": "Kafelek",
  "cinema.theatre.youWon": "Wygrywasz {value}",
  "cinema.theatre.youLostNoStake": "Przegrana, brak stawki na {tile}",
  "cinema.theatre.winnerFallback": "zwycięzca",
  "cinema.theatre.tileWonNoStake": "{tile} wygrał · bez Twojej stawki",
  "cinema.theatre.aTileFallback": "Kafelek",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} kafelków w grze · pula {pool}",
  "cinema.theatre.stripMetaCards": " · {value} w kartach",
  "cinema.theatre.stripMetaCash": " + {value} gotówki",
  "cinema.theatre.drawingWinner": "losowanie zwycięzcy",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Wynik rundy",
  "cinema.theatre.roundSettled": "Runda rozliczona",
  "cinema.theatre.winner": "Zwycięzca",
  "cinema.theatre.seedNote":
    "Obejmuje Twoją startową stawkę {value} na {tile}, wyczyść startowe stawki w panelu zakładów, żeby grać od $0.",
  "cinema.theatre.lossNoteStaked":
    "Twoja stawka {value} była na innych kafelkach w tej rundzie. Najedź na dowolny kafelek pod tym panelem, żeby zobaczyć, co otworzył i dlaczego przegrał.",
  "cinema.theatre.lossNoteNoStake":
    "Brak obstawionego kafelka w tej rundzie, więc nie ma nic do wypłaty. Wybierz wysokość zakładu i kliknij kafelek w następnej rundzie.",
  "cinema.theatre.bonusGrails.one":
    "{n} kolejny grail wylądował w tej rundzie: trafia do obstawiających zwycięski kafelek jako bonusowy łup (zatrzymany albo odsprzedany proporcjonalnie, jeśli zbyt drogi, by go utrzymać), nigdy do opłaty ATTN ani do Pościgu.",
  "cinema.theatre.bonusGrails.other":
    "{n} kolejnych grail wylądowało w tej rundzie: trafiają do obstawiających zwycięski kafelek jako bonusowy łup (zatrzymane albo odsprzedane proporcjonalnie, jeśli zbyt drogie, by je utrzymać), nigdy do opłaty ATTN ani do Pościgu.",
  "cinema.theatre.noPacksBacked": "Żaden pack nie został obstawiony w tej rundzie. Następna runda startuje automatycznie.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Podział wypłaty · {tile}",
  "cinema.theatre.payoutSplitMeta": "Pula {pool} · zasilenie Pościgu {feed}",
  "cinema.theatre.payoutSplitChase": " · POŚCIG +{value}",
  "cinema.theatre.you": "Ty",
  "cinema.theatre.physicalCard": "Fizyczna karta →",
  "cinema.theatre.grailSecured": " (grail zabezpieczony)",
  "cinema.theatre.grailSoldBack": "Grail odsprzedany ({value}) → podział USDC powyżej.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "POŚCIG TRAFIŁ!",
  "cinema.theatre.chaseHitBody":
    "Pościg odpalił na własnym rzadkim losowaniu, więc {value} z Pościgu zasiliło tę wygraną, dodane do podziału powyżej. Kolejny Pościg znów zaczyna się budować.",
  "cinema.theatre.chaseMissLead": "Brak zrzutu z Pościgu w tej rundzie.",
  "cinema.theatre.chaseMissBody": "Pościg odpala na własnym rzadkim losowaniu, więc wciąż rośnie, teraz {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Zweryfikuj losowanie",
  "cinema.theatre.vrfSummaryNote": "weryfikowalne losowanie · zobacz potwierdzenie losowania",
  "cinema.theatre.vrfRoundId": "id rundy",
  "cinema.theatre.vrfWinningDraw": "zwycięskie losowanie",
  "cinema.theatre.vrfDrawSeed": "ziarno losowania",
  "cinema.theatre.vrfProofId": "id dowodu",
  "cinema.theatre.vrfTicket": "#{n} z {total}",
  "cinema.theatre.vrfVerifying": "Weryfikacja…",
  "cinema.theatre.vrfRecheck": "Sprawdź losowanie ponownie",
  "cinema.theatre.vrfVerifierLink": "Weryfikator ↗",
  "cinema.theatre.vrfVerified": "✓ Losowanie zweryfikowane, ten zwycięzca zgadza się z opublikowanym ziarnem losowania.",
  "cinema.theatre.vrfFailed": "✗ To losowanie nie zgadza się ze swoim ziarnem, nie ufaj mu.",
  "cinema.theatre.vrfNote": "Każda runda losuje jednego zwycięzcę z opublikowanego ziarna, które możesz sprawdzić.",
  "cinema.theatre.vrfNoDraw": "Żaden pack nie został obstawiony w tej rundzie, nie ma czego losować.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Zatrzymaj kartę → kolekcja",
  "cinema.theatre.sellBackFor": "Odsprzedaj za {value}",
  "cinema.theatre.continueNextRound": "Przejdź do następnej rundy",
  "cinema.theatre.continue": "Dalej",
  "cinema.theatre.settleHint":
    "Zatrzymaj dodaje kartę do Twojej kolekcji. Odsprzedaj zalicza {sell} ({pct}% z {value}, odkup CC tego pack) na Twoje saldo. Brak akcji = domyślna odsprzedaż, gdy runda się zamknie.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Zablokowane",
  "cinema.prizeModal.stageReveal": "Odsłona",
  "cinema.prizeModal.betterLuck": "Więcej szczęścia w następnej rundzie",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Przygotowywanie Twojej karty…",
  "cinema.share.renderingPng": "Renderowanie PNG…",
  "cinema.share.renderFailed": "Nie udało się wyrenderować obrazu. Spróbuj ponownie.",
  "cinema.share.captionOpened": "Otworzono opis na X. Dołącz zapisany plik PNG.",
  "cinema.share.close": "Zamknij",
  "cinema.share.downloadPng": "Pobierz PNG",
  "cinema.share.shareToX": "Udostępnij na X",
  "cinema.share.done": "Gotowe",
  "cinema.share.provablyFair": "BITWY PACK · KAŻDE LOSOWANIE DO ZWERYFIKOWANIA",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "mnożnik {value}",
  "cinema.winShare.multiplier": "MNOŻNIK",
  "cinema.winShare.inCards": "W KARTACH",
  "cinema.winShare.cashWon": "WYGRANA GOTÓWKA",
  "cinema.winShare.tileHit": "· TRAFIONY KAFELEK",
  "cinema.winShare.entry": "WEJŚCIE",
  "cinema.winShare.winOdds": "SZANSE NA WYGRANĄ",
  "cinema.winShare.totalValue": "ŁĄCZNA WARTOŚĆ",
  "cinema.winShare.certLine": "NAPĘDZANE PRZEZ SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "RUNDA #{n} · WERYFIKOWALNE LOSOWANIE VRF",
  "cinema.winShare.takeHomeAriaLabel": "do zabrania {value}",
  "cinema.winShare.totalTakeHome": "ŁĄCZNIE DO ZABRANIA",
  "cinema.winShare.breakdown.one": "{cash} GOTÓWKI + {n} KARTA ({value})",
  "cinema.winShare.breakdown.other": "{cash} GOTÓWKI + {n} KART ({value})",
  "cinema.winShare.deposited": "WPŁACONE",
  "cinema.winShare.wonBy": "WYGRANE PRZEZ {name}",
  "cinema.winShare.theGrail": "GRAIL",
  "cinema.winShare.topPull": "NAJLEPSZY TRAF",
  "cinema.winShare.topCardOfRound": "NAJLEPSZA KARTA RUNDY",
  "cinema.winShare.poweredBySlabz": "NAPĘDZANE PRZEZ SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Udostępnij swoją wygraną",
  "cinema.winShare.pngSaved": "Zapisano PNG. Dołącz go do posta - X nie zrobi tego za Ciebie.",
  "cinema.winShare.renderingHdVideo": "Renderowanie wideo rundy w HD…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Renderowanie wideo rundy w HD - {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "Zapisano wideo HD. Dołącz je do posta zamiast obrazu.",
  "cinema.winShare.hdRenderFailed": "Renderowanie HD nie powiodło się. Spróbuj ponownie.",
  "cinema.winShare.hdVideoButton": "Wideo rundy w HD",
  "cinema.winShare.hdVideoTitle": "Wyrenderuj tę rundę jako plik mp4 w HD (lokalna usługa renderowania) i zapisz go.",
  "cinema.winShare.tweetTriggerLabel": "Udostępnij wygraną na X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "zwrot {value} ze stawki",
  "cinema.pnlShare.onStake": "ZE STAWKI",
  "cinema.pnlShare.certifiedRun": "CERTYFIKOWANA SESJA · WYNIK NETTO",
  "cinema.pnlShare.heroSub.one": "w {n} rundzie · {pct}% skuteczności",
  "cinema.pnlShare.heroSub.other": "w {n} rundach · {pct}% skuteczności",
  "cinema.pnlShare.collection": "KOLEKCJA",
  "cinema.pnlShare.change30d": "ZMIANA 30D",
  "cinema.pnlShare.ribbonAriaLabel.one": "Wynik na rundę dla ostatniej {n} obstawionej rundy",
  "cinema.pnlShare.ribbonAriaLabel.other": "Wynik na rundę dla ostatnich {n} obstawionych rund",
  "cinema.pnlShare.bestPull": "NAJLEPSZY TRAF",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "POSPOLITA",
  "cinema.pnlShare.rounds": "RUNDY",
  "cinema.pnlShare.winRate": "SKUTECZNOŚĆ",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "NAJLEPSZA RUNDA",
  "cinema.pnlShare.rank": "POZYCJA #{n}",
  "cinema.pnlShare.rankOf": "POZYCJA #{n} Z {total}",
  "cinema.pnlShare.staked": "OBSTAWIONE {value}",
  "cinema.pnlShare.overlayAriaLabel": "Udostępnij swoją sesję",
  "cinema.pnlShare.saved": "Zapisano. Dołącz do posta.",
  "cinema.pnlShare.triggerLabel": "Udostępnij wynik",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Zatrzymaj / sprzedaj",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Twoja decyzja",
  "cinema.recap.dest.deciding": "Decyzja w toku",
  "cinema.recap.dest.you": "Ty",
  "cinema.recap.dest.topBacker": "Największy obstawiający",
  "cinema.recap.dest.yourCard": "Twoja karta",
  "cinema.recap.dest.wonBy": "Wygrana przez",
  "cinema.recap.dest.aBacker": "Obstawiający",
  "cinema.recap.dest.yourChaseLoot": "Twój łup Pościgu",
  "cinema.recap.dest.chaseLoot": "Łup Pościgu",
  "cinema.recap.dest.releasedFromVault": "uwolniona ze skarbca",
  "cinema.recap.dest.sweptTo": "Trafiła do",
  "cinema.recap.dest.chaseVault": "Skarbiec Pościgu",
  "cinema.recap.dest.fundsJackpot": "zasila jackpot",
  "cinema.recap.dest.protocolFee": "Opłata protokołu",
  "cinema.recap.dest.tableRake": "prowizja stołu",
  "cinema.recap.dest.soldBack": "Odsprzedana",
  "cinema.recap.dest.intoTheSplit": "Do podziału",
  "cinema.recap.dest.toThePool": "+{value} do puli",
  "cinema.recap.sublineYours": "Wszystkie karty stołu w tej rundzie. Twoja jest oznaczona poniżej.",
  "cinema.recap.sublineLost": "Wszystkie karty stołu w tej rundzie. Żadna z nich nie jest Twoja.",
  "cinema.recap.sublineNoStake": "Wszystkie karty stołu w tej rundzie. Ta runda poszła bez Ciebie.",
  "cinema.recap.sectionAriaLabel": "Dokąd trafiła każda karta tej rundy",
  "cinema.recap.eyebrow": "Wyniki rundy",
  "cinema.recap.headline": "Dokąd trafiła każda karta",
  "cinema.recap.theatreHeader": "Historia rundy · przeznaczenie każdej karty",
  "cinema.recap.openCardTitle": "Otwiera stronę karty w nowej karcie",
  "cinema.recap.fromPack": "Z {pack}",
  "cinema.recap.railAriaLabel": "Wszystkie karty tej rundy, od najcenniejszych",
  "cinema.recap.tierRule.one": "Pozostała karta · {value}",
  "cinema.recap.tierRule.other": "Pozostałe karty: {n} · {value}",
  "cinema.recap.showMore": "Pokaż kolejne {n}",
  "cinema.recap.showAll": "Pokaż wszystkie ({n})",
  "cinema.recap.showing": "Widoczne {n} z {total} kart · {value} z {totalValue}",
  "cinema.recap.allShown": "Wszystkie karty: {n} · łącznie {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "Kończenie wideo…",
  "cinema.replay.recordingEmpty": "Nagranie wróciło puste. Spróbuj ponownie.",
  "cinema.replay.checkingService": "Sprawdzanie usługi renderowania HD…",
  "cinema.replay.serviceUnreachable":
    "Usługa renderowania HD jest niedostępna, więc nie da się tego wyrenderować w HD. NAGRAJ KARTĘ przechwyci tę kartę zamiast tego (okno przeglądarki).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Renderowanie wideo HD: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "Renderowanie HD nie powiodło się. Spróbuj ponownie albo użyj NAGRAJ KARTĘ, żeby przechwycić tę kartę.",
  "cinema.replay.cannotRecord":
    "Ta przeglądarka nie może tu nagrywać wideo. Zapisano zamiast tego plik rundy - upuść go na stronie powtórki, żeby obejrzeć ją ponownie.",
  "cinema.replay.pickThisTab": "Wybierz „Ta karta”, żeby nagrać rundę.",
  "cinema.replay.recorderFailed": "Nie udało się uruchomić nagrywania.",
  "cinema.replay.watermarkAriaLabel": "Powtórka rundy {n}",
  "cinema.replay.watermarkAriaLabelDated": "Powtórka rundy {n}, nagrana {date}",
  "cinema.replay.watermarkTag": "POWTÓRKA",
  "cinema.replay.watermarkRound": "RUNDA #{n}",
  "cinema.replay.headerSeed": "ZIARNO {seed}",
  "cinema.replay.phaseBidding": "ZAKŁADY",
  "cinema.replay.phaseReveal": "ODSŁONA",
  "cinema.replay.phaseDone": "KONIEC",
  "cinema.replay.boardAriaLabel": "Plansza powtórki",
  "cinema.replay.controlsAriaLabel": "Sterowanie powtórką rundy {n}",
  "cinema.replay.pause": "Pauza",
  "cinema.replay.play": "Odtwórz",
  "cinema.replay.pauseButton": "PAUZA",
  "cinema.replay.playButton": "ODTWÓRZ",
  "cinema.replay.restart": "OD NOWA",
  "cinema.replay.scrubAriaLabel": "Przewiń całą rundę: od zakładów po odsłonę",
  "cinema.replay.lockMark": "Blokada",
  "cinema.replay.seeking": "PRZEWIJANIE",
  "cinema.replay.speedAriaLabel": "Szybkość odtwarzania",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "ZAPISZ WIDEO",
  "cinema.replay.saveVideoTitle":
    "Wyrenderuj tę rundę jako plik mp4 w HD (lokalna usługa renderowania; nic z Twojego ekranu nie jest nagrywane)",
  "cinema.replay.recordTab": "NAGRAJ KARTĘ",
  "cinema.replay.recordTabTitle":
    "Zapasowo: nagraj tę kartę oknem przechwytywania ekranu Twojej przeglądarki (jakość w czasie rzeczywistym)",
  "cinema.replay.saveRound": "ZAPISZ RUNDĘ",
  "cinema.replay.saveRoundTitle":
    "Pobierz tę rundę jako mały plik danych - każdy może upuścić go na stronie powtórki, żeby obejrzeć dokładnie tę rundę",
  "cinema.replay.close": "ZAMKNIJ",
  "cinema.replay.backToGame": "WRÓĆ DO GRY",
  "cinema.replay.shareOverlayAriaLabel": "Udostępnij tę rundę",
  "cinema.replay.videoReady": "WIDEO RUNDY GOTOWE",
  "cinema.replay.formatWebm": "Zapisano jako .webm - X wymaga mp4 do wysłania, więc udostępnij link albo najpierw przekonwertuj plik.",
  "cinema.replay.formatMp4": "Zapisano jako .mp4 - gotowe do dołączenia na X.",
  "cinema.replay.shareOnX": "Udostępnij na X",
  "cinema.replay.saveAgain": "Zapisz ponownie",
  "cinema.replay.shareHint": "X nie potrafi dołączyć wideo z sieci - Twój post otwiera się już wypełniony; dołącz zapisany plik.",
  "cinema.replay.xOpened": "X otworzył się z Twoim opisem. Dołącz zapisany plik ({filename}) - kreator w przeglądarce nie zrobi tego za Ciebie.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "Powtórka rundy attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "Nie podano nagrania. Przekaż ?rec=<zakodowany-json-lub-url>.",
  "cinema.replayRoute.unreadable": "Nie udało się odczytać nagrania z ?rec=.",
  "cinema.replayRoute.loadFailed": "Nie udało się wczytać nagrania ({error}).",
  "cinema.replayRoute.badge": "POWTÓRKA RUNDY",
  "cinema.replayRoute.loading": "WCZYTYWANIE NAGRANIA",
  "cinema.replayRoute.noRecording": "Brak nagrania do odtworzenia.",
  "cinema.replayRoute.hint":
    "Powtórki otwierają się z paska poprzednich rund na planszy (POWTÓRKA przy rozliczonej rundzie) albo z udostępnionego linku ?rec=.",
  "cinema.replayRoute.roundResults": "WYNIKI RUNDY",
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
  "cinema.share.shareFile": "Udostępnij plik",
  "cinema.share.shareSheetOpened": "Arkusz udostępniania otwarty.",
  "cinema.winShare.lossHeadline": "PRZEGRANA RUNDA",
  "cinema.winShare.lossResult": "PRZEGRANA",
  "cinema.winShare.returned": "ZWRÓCONO",
  "cinema.winShare.bestPull": "NAJLEPSZY PULL",
  "cinema.winShare.playedBy": "GRAŁ {name}",
  "cinema.winShare.lossCaption": "Runda #{n}: postawiłem {stake}. W tej rundzie nic nie wraca.",
  "cinema.winShare.lossCardCaption": "Najlepszy pull na stole, ale nie mój.",
  "cinema.winShare.lossNoCardCaption": "Wynik rundy zapisany uczciwie.",
  "cinema.winShare.roundResultTop": "RUNDA",
  "cinema.winShare.roundResultMain": "PRZEGRANA",
  "cinema.winShare.shareRoundCard": "Udostępnij kartę",
  "cinema.replay.shareVideo": "Udostępnij wideo",
  "cinema.replay.shareVideoTitle": "Udostępnij wideo rundy",
  "cinema.replay.shareVideoSheetOpened": "Arkusz otwarto z wideo.",
  "cinema.replay.shareVideoFailed": "Nie udało się udostępnić wideo. Spróbuj ponownie.",
  "cinema.replay.shareSheetHint": "Twoje urządzenie może wysłać to wideo do X z arkusza udostępniania.",
  "cinema.replay.shareRoundTitle": "attn royale · Runda #{n}",
  "cinema.replay.shareRoundTable": "{amount} na stole.",
  "cinema.replay.shareRoundWin": "Moje pole wygrało stół za {pool} · wróciło {amount}.",
  "cinema.replay.shareRoundCardsOnly": "Pole {tile} wygrało stół za {pool} · moje pole przegrało, ale wróciło {amount}.",
  "cinema.replay.shareRoundWinner": "Pole {tile} wygrało stół za {pool}.",
  "cinema.share.shareVideo": "Udostępnij wideo",
  "cinema.share.preparingOutput": "Przygotowywanie udostępnienia…",
  "cinema.share.cancelled": "Udostępnianie anulowane.",
  "cinema.share.shareSheetHint": "Twoje urządzenie może wysłać to wideo do X z arkusza udostępniania.",
  "cinema.personalReveal.sectionAria": "Karty otwarte przez ciebie",
  "cinema.personalReveal.title": "KARTY OTWARTE PRZEZ CIEBIE",
  "cinema.personalReveal.progress.eyebrow": "SYNCHRONIZOWANE ODKRYWANIE",
  "cinema.personalReveal.progress.title": "OTWIERANIE W TOKU",
  "cinema.personalReveal.progress.body": "Przy stole trwa otwieranie kart. Wspólne odkrywanie będzie kontynuowane po zakończeniu tego etapu.",
  "cinema.personalReveal.normal.label": "ZWYKŁE ODKRYCIE",
  "cinema.personalReveal.normalHint": "Najpierw widać rewers karty. Kliknij lub dotknij kartę, aby ją odwrócić; otwarte przez ciebie karty są twoje. Pozostałe zakryte karty odwrócą się automatycznie po 5 sekundach.",
  "cinema.personalReveal.hardcore.label": "MOCNE ODKRYCIE",
  "cinema.personalReveal.hardcoreHint": "Najpierw widać rewers karty. Kliknij lub dotknij kartę, aby ją odwrócić; właściciela ustala się po losowaniu. Pozostałe zakryte karty odwrócą się automatycznie po 5 sekundach.",
  "cinema.personalReveal.yourCard": "TWOJA KARTA",
  "cinema.personalReveal.youOpened": "OTWARTA PRZEZ CIEBIE",
  "cinema.personalReveal.otherCards": "INNE KARTY",
  "cinema.personalReveal.sort.group": "Kolejność kart",
  "cinema.personalReveal.sort.pack": "Pakiet",
  "cinema.personalReveal.sort.packAria": "Sortuj według ceny packa, od najtańszego",
  "cinema.personalReveal.sort.rarity": "Rzadkość",
  "cinema.personalReveal.sort.revealFirst": "Sortowanie według rzadkości odblokuje się po odkryciu wszystkich kart",
  "cinema.personalReveal.sort.bestAria": "Sortuj według rzadkości, od najwyższej",
  "cinema.personalReveal.sort.worstAria": "Sortuj według rzadkości, od najniższej",
  "cinema.personalReveal.sort.packStatus": "Karty posortowano według ceny packa, od najtańszego",
  "cinema.personalReveal.sort.bestStatus": "Karty posortowano według rzadkości, od najwyższej",
  "cinema.personalReveal.sort.worstStatus": "Karty posortowano według rzadkości, od najniższej",
  "cinema.personalReveal.allOpen": "Wszystkie karty są odkryte",
  "cinema.personalReveal.autoOpenIn": "Pozostałe karty odkryją się automatycznie za {n} s",
  "cinema.personalReveal.revealCardAria": "Odwróć kartę {n}",
  "cinema.personalReveal.revealedCardAria": "Karta {n} odkryta: {name}, {value}",
  "cinema.personalReveal.rarity": "Rzadkość",
  "cinema.personalReveal.year": "Rok",
  "cinema.personalReveal.yearUnknown": "Rok nieznany",
  "cinema.personalReveal.grade": "Ocena",
  "cinema.personalReveal.ungraded": "Bez oceny",
  "cinema.personalReveal.pageNavigation": "Strony kart",
  "cinema.personalReveal.previousPage": "Poprzednie karty",
  "cinema.personalReveal.nextPage": "Następne karty",
  "cinema.personalReveal.pageStatus": "Strona {page} z {pages}",
  "cinema.personalReveal.live.revealed": "Odkryto {name}",
  "cinema.personalReveal.live.all": "Odkryto wszystkie {n} kart",
} as Record<string, string>;
