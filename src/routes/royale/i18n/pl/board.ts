// Polish (Polski): "board" segment. Same key set as en/board.ts - see that
// file's header for the surface breakdown (RoyaleBoardV2, the legacy v1
// board, RoyaleStakeControl, RoyaleBetRail, RoyaleRoundCore, RoyaleClock,
// RoyaleSettlementPanel, RoyaleBetTooBigPopover, RoyaleWagerLadder,
// RoyaleBidFundConfirm, RoyaleHotkeyOptIn, RoyaleLeaderboard,
// RoyaleConnectXControl, RoyalePackCompositionChips).
//
// See royaleI18n.ts for the {token} interpolation convention and the
// no-em-dash / brand-terms-stay-English / numbers-stay-literal rules, and
// pl/core.ts for the binding terminology glossary (runda, pula, Pościg,
// kafelek, obstawiający, zakład/stawka, odsprzedać, traf/losowanie, skarbiec,
// drobne, "pack"/"packs" invariant).
//
// REGISTER: informal "Ty" throughout. Past-tense narration of the player's
// own action uses the impersonal -no/-to form (e.g. "obstawiono", "wygrano")
// to dodge Polish's gendered past tense, same as pl/core.ts.
// SHELL LABELS: values in the tile/rail/stakeControl namespaces stay short on
// purpose, those render on the narrow board rail.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Gracze i gotówkowy PnL",
  "board.playerScoreboard.title": "Gracze",
  "board.playerScoreboard.open": "Statystyki i wyciszenie",
  "board.playerScoreboard.pinnedHint": "Przypięto · Esc zamyka",
  "board.playerScoreboard.holdHint": "Przytrzymaj Tab, aby podejrzeć · kliknij, aby przypiąć",
  "board.playerScoreboard.close": "Zamknij tabelę wyników graczy",
  "board.playerScoreboard.windowAria": "Okno PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Wszystkie",
  "board.playerScoreboard.partialHistory": "Historia jest częściowa. Rankingi korzystają z zachowanego zakresu rozliczonej gotówki.",
  "board.playerScoreboard.statsUnavailable": "Historia PnL nie jest tutaj dostępna. Obecne stawki są nadal aktywne.",
  "board.playerScoreboard.playerColumn": "Gracz",
  "board.playerScoreboard.pnlColumn": "Gotówkowy PnL",
  "board.playerScoreboard.voiceColumn": "Czat",
  "board.playerScoreboard.loading": "Wczytywanie graczy…",
  "board.playerScoreboard.empty": "Nikt nie postawił na żadne pole w tej rundzie.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Pola {tiles}",
  "board.playerScoreboard.stake": "Stawka {amount}",
  "board.playerScoreboard.notAvailable": "Niedostępne",
  "board.playerScoreboard.rounds": "{n} rund",
  "board.playerScoreboard.youBadge": "Ty",
  "board.playerScoreboard.mute": "Wycisz",
  "board.playerScoreboard.unmute": "Wyłącz wyciszenie",
  "board.playerScoreboard.muteAria": "Wycisz użytkownika {name} na czacie",
  "board.playerScoreboard.unmuteAria": "Wyłącz wyciszenie użytkownika {name} na czacie",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Ty",
  "board.common.noWin": "brak wygranej",
  "board.common.roundSettled": "Runda rozliczona",
  "board.common.youWon": "Wygrywasz {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "ZABLOKOWANE",
  "board.tile.lockedStampSub": "koniec zakładów",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: Twój zakład {bet} przekracza Twoje środki {balance}. Zmniejsz zakład albo wpłać środki.",
  "board.tile.ariaBack": "Obstaw {label} kwotą {amount}",
  "board.tile.ariaBackShortcutSuffix": ", skrót {shortcut}",
  "board.tile.ariaOddsChance": "{pct} szans na wygraną",
  "board.tile.ariaBackers": "{count} obstawiających",
  "board.tile.yourPortraitAlt": "Twój portret",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · jeszcze bez pack",
  "board.tile.noStake": "Brak stawki",
  "board.tile.youOwn": "Masz {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Packs otwierają się przy blokadzie",
  "board.tile.resultOpened": "Otwarto · {amount} w kartach",
  "board.tile.resultWinner": "ZWYCIĘZCA · {amount} w kartach",
  "board.tile.resultLost": "Przegrano losowanie · {amount} w kartach",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "Otwarto",
  "board.tile.resultWinnerWord": "ZWYCIĘZCA",
  "board.tile.resultLostWord": "Przegrano losowanie",
  "board.tile.resultShortWon": "WYGRANA",
  "board.tile.resultShortLost": "Przegrana",
  "board.tile.overBalance": "Ponad saldo",
  "board.tile.overBalanceTitle": "Potrzeba {needed} · masz {have}. Zmniejsz zakład albo wpłać środki.",
  "board.tile.overCap": "ponad Twój limit {amount} (ustawienia)",
  "board.tile.needHave": "Potrzeba {needed} · masz {have}",
  "board.tile.clueExactCardOdds": "dokładnie ta karta · {pct} szans na traf",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Wysokość zakładu",
  "board.stakeControl.packMatchTitle": "Każde kliknięcie kafelka stawia jeden cały pack {packName}.",
  "board.stakeControl.packMatchTag": "1 pack {packName} na kliknięcie",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural.
  "board.stakeControl.packMatchTitleOne": "Każde kliknięcie kafelka stawia {n} pack {packName}.",
  "board.stakeControl.packMatchTitleOther": "Każde kliknięcie kafelka stawia {n} packs {packName}.",
  "board.stakeControl.packMatchTagOne": "{n} pack {packName} na kliknięcie",
  "board.stakeControl.packMatchTagOther": "{n} packs {packName} na kliknięcie",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} pakietów {packName} na kliknięcie",
  "board.stakeControl.bidPackGroupAria": "Postaw cały pack na kafelek",
  "board.stakeControl.bidPackTag": "Postaw pack",
  "board.stakeControl.bidPackInfoTitle":
    "Jedno kliknięcie kładzie na kafelku cały zapieczętowany pack. Pack pozostaje dokładnie taki, jaki jest - nigdy nie łączy się w większy.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Wybierz pack i ich liczbę. Jedno kliknięcie stawia cały ten stos na kafelku - większe packs dają większe karty. Klawisze numeryczne od 1 do 8 wybierają kafelek.",
  "board.stakeControl.bidPackInfoAria": "Co to znaczy postawić pack?",
  "board.stakeControl.packSelectedTitle": "Wybrano. Kliknij ponownie, żeby wrócić do zakładu {amount}.",
  "board.stakeControl.packChipTitle": "Każde kliknięcie kafelka stawia jeden pack {packName} ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "Wybrano. Każde kliknięcie kafelka stawia {n} pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Wybrano. Każde kliknięcie kafelka stawia {n} packs {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Każde kliknięcie kafelka stawia {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Każde kliknięcie kafelka stawia {n} packs {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "PONAD SALDO",
  "board.stakeControl.overBalanceBody": "Wymaga więcej niż Twoje środki {amount}.",
  "board.stakeControl.bidAmountTag": "Postaw kwotę",
  "board.stakeControl.bidAmountInfoTitle":
    "Dodaj dowolną kwotę do kafelka. Drobne rosną w większe packs, gdy przekraczają kolejne progi cenowe pack.",
  "board.stakeControl.bidAmountInfoAria": "Co to znaczy postawić kwotę?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Dodaj do zakładu kafelka",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "Postaw kwotę na kafelek",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "Packs stawiane na kliknięcie",
  "board.stakeControl.packCountDecAria": "Stawiaj mniej packs na kliknięcie",
  "board.stakeControl.packCountIncAria": "Stawiaj więcej packs na kliknięcie",
  "board.stakeControl.packCountValueTitleOne": "{n} pack wybranego poziomu na kliknięcie",
  "board.stakeControl.packCountValueTitleOther": "{n} packs wybranego poziomu na kliknięcie",
  "board.stakeControl.incrementTitle": "Zwiększ wybrany zakład do {amount}",
  "board.stakeControl.customAriaLabel": "Własna kwota zakładu w USDC, zatwierdzana Enterem albo kliknięciem gdzie indziej",
  "board.stakeControl.customOverBalanceTitle": "Ponad Twoje środki {amount}. Wpłać środki albo zmniejsz zakład.",
  "board.stakeControl.customTitle": "Wpisz dowolną kwotę, Enter albo kliknięcie gdzie indziej ją ustawia",
  "board.stakeControl.resetTitle": "Przywróć wybrany zakład do {amount}",
  "board.stakeControl.reset": "Przywróć",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Strategia auto-zakładu, uzbraja się przy zamknięciu rundy",
  "board.betRail.strategyArmedTip": "Uzbrojona, odpali za {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, uzbrojona, odpali za {seconds} sekund",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, uzbrojona, odpali za {seconds} sekund. Kliknij, żeby rozbroić.",
  "board.betRail.strategyAriaClickArm": "{name}. Kliknij, żeby uzbroić.",
  "board.betRail.moreStrategiesAria": "Więcej strategii auto-zakładu",
  "board.betRail.moreStrategiesTitle": "Więcej strategii",
  "board.betRail.cancelArmedAria": "Anuluj uzbrojony auto-zakład",
  "board.betRail.autoBetCancelled": "Auto-zakład anulowany.",
  "board.betRail.roundLockedSkip": "Runda zablokowała się, zanim auto-zakład zdążył odpalić.",
  "board.betRail.notEnoughBalanceSkip": "Za mało środków, auto-zakład nie odpalił.",
  "board.betRail.firedAtClose": "{name} odpaliła przy zamknięciu rundy.",
  "board.betRail.firedAtClosePartial": "{name} odpaliła przy zamknięciu rundy: {covered} z {total} kafelków.",
  "board.betRail.strategyGuideAria": "Przewodnik po strategiach auto-zakładu",
  "board.betRail.strategyGuideTitle": "Przewodnik po strategiach",
  "board.betRail.autoBetEyebrow": "Auto-zakład",
  "board.betRail.firesInSeconds": "odpali za {seconds}s",
  "board.betRail.strategiesDialogAria": "Strategie auto-zakładu",
  "board.betRail.closeStrategiesAria": "Zamknij strategie auto-zakładu",
  "board.betRail.strategiesHeading": "Strategie auto-zakładu",
  "board.betRail.strategiesIntro":
    "Dotknij jedną, żeby uzbroić ją Twoim wybranym zakładem ({amount}). Odpala tuż przed zablokowaniem rundy, według tego, ile pieniędzy jest wtedy na każdym kafelku - sygnału tłumu.",
  "board.betRail.contrarianHeading": "Typy kontrariańskie",
  "board.betRail.contrarianIntro":
    "Gdy wszyscy gonią za najniższym kafelkiem, robi się na nim tłoczno, więc drugi najniższy może wypłacić lepiej. Te typy zostają poza głównym paskiem, żeby było czysto.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Twoje konto i wysokość zakładu",
  "board.betRail.balance": "Saldo",
  "board.betRail.activeStakes": "Aktywne stawki",
  "board.betRail.collection": "Kolekcja",
  "board.betRail.cardCountViewAllSingular": "{count} KARTA · ZOBACZ WSZYSTKIE",
  "board.betRail.cardCountViewAllPlural": "{count} KART · ZOBACZ WSZYSTKIE",
  "board.betRail.moreCount": "+{count} WIĘCEJ",
  "board.betRail.noCardsYet": "Jeszcze brak kart w kolekcji - wygraj kafelek i zatrzymaj jego kartę.",
  "board.betRail.lastResult": "Ostatni wynik",
  "board.betRail.eachClickAdds": "Każde kliknięcie dodaje {amount}",
  "board.betRail.depositToPlay": "Wpłać środki, żeby grać",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "Potrzeba {unit} - masz {balance}",
  "board.betRail.allTilesPartialCover": "{name} - pokrywa {covered} z 8 kafelków po {unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "Sal",
  "board.betRail.dockStakes": "Stawki",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Następna runda za {seconds} sekund",
  "board.core.nextRoundLine": "Następna runda za {secs}",
  "board.core.playersDecidingAria": "{decided} z {total} pozostałych graczy zdecydowało",
  "board.core.playersDecidingLine": "Gracze decydują {ratio}",
  "board.core.pastRoundResultsAria": "Wyniki poprzednich rund",
  "board.core.pastRounds": "Poprzednie rundy",
  "board.core.winsAmount": "{label} wygrywa {amount}",
  "board.core.youLost": "Przegrana!",
  "board.core.didNotStake": "Brak stawki w tej rundzie",
  "board.core.keepCard": "Zatrzymaj kartę ({amount})",
  "board.core.sellAmount": "Sprzedaj {amount}",
  "board.core.decideHint": "Zdecyduj teraz albo w trakcie następnej rundy",
  "board.core.roundResultLink": "Wynik rundy #{roundId}",
  "board.core.fullReceiptHint": "Pełne potwierdzenie → Wyniki rund",
  "board.core.splitReceiptHint": "Podział · potwierdzenie → Wyniki rund",
  "board.core.eyebrowDrawing": "Losowanie zwycięzcy",
  "board.core.eyebrowPullsIn": "Trafy zebrane",
  "board.core.eyebrowLocked": "Zablokowane",
  "board.core.headlineDrawing": "Jeden los decyduje",
  "board.core.headlinePullsIn": "Każdy pack otwarty",
  "board.core.headlineRoundLocked": "Runda zablokowana",
  "board.core.headlinePacksOpening": "Packs się otwierają…",
  "board.core.subDrawing": "weryfikowalne ważone losowanie",
  "board.core.subPullsIn": "zaraz losowanie zwycięzcy",
  "board.core.subIntro": "{count} {noun} w grze",
  "board.core.subOpening": "{count} {noun} otwiera się na planszy",
  "board.core.pool": "Pula",
  "board.core.totalPool": "Cała pula",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "Runda otwarta",
  "board.core.clockLockedRevealing": "Zablokowane · odsłona",
  "board.core.clockSettled": "Rozliczona",
  "board.core.clockAriaLabel": "{label}, {seconds} sekund",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Zwykła oceniona karta, największy obstawiający zatrzymuje ją albo odsprzedaje, proporcjonalnie.",
  "board.settlement.dispositionSellBackSplit": "Zasada Grail: domyślnie odsprzedawany, USDC dzielone na cały kafelek.",
  "board.settlement.dispositionTopBackerKeeps": "Zasada Grail: największy obstawiający zatrzymuje go i spłaca pozostałym ich udziały.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s na decyzję",
  "board.settlement.panelAria": "Szczegóły kafelka i rozliczenie",
  "board.settlement.collapsePanelAria": "Zwiń panel",
  "board.settlement.expandPanelAria": "Rozwiń panel",
  "board.settlement.roundResultsLink": "Wyniki rund",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Panel rundy",
  "board.settlement.clickTileToBack": "Wygrane lądują tutaj. Kliknij dowolny kafelek, żeby obstawić go kwotą {amount}.",
  "board.settlement.lastResultLine": "Ostatni wynik · Runda #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "wygrana {amount}",
  "board.settlement.view": "zobacz",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Przegrany kafelek · dlaczego przegrał",
  "board.settlement.losingTileTitle": "{label} · {amount} na kafelku",
  "board.settlement.loserWhy":
    "Otworzył {cardName} ({amount}), losowanie padło na {winnerLabel}. {pct} losów nie wypłaciło nic{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", w tym Twoje {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Ten kafelek był pusty - bez stawki, bez losu.",
  "board.settlement.backToSettlement": "Wróć do rozliczenia · {winnerLabel} wygrał",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · karta {index}/{total} · {amount} na kafelku",
  "board.settlement.pullCaptionSingle": "{label} · {amount} na kafelku",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Packs się otwierają",
  "board.settlement.revealOpenedTitle": "{label} otworzył {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} szans na zgarnięcie puli {poolAmount}. Trwa losowanie zwycięzcy.",
  "board.settlement.revealEmpty": "Packs otwierają się na planszy, losowanie zwycięzcy zaraz się rozstrzygnie.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Ostatni wynik · Runda #{roundId}",
  "board.settlement.tileTakesTable": "{label} zgarnia stół za {amount}",
  "board.settlement.whyWon": "Wylosowany dzięki weryfikowalnemu ważonemu losowi, {label} miał {pct}% puli przy blokadzie.",
  "board.settlement.lostNoStakeIn": "Przegrana, brak stawki na {label}",
  "board.settlement.theWinnerFallback": "zwycięzca",
  "board.settlement.wonNoStake": "{label} wygrał · bez Twojej stawki",
  "board.settlement.aTileFallback": "Kafelek",
  "board.settlement.lossNoteWithStake": "Twoje {amount} było na innych kafelkach, najedź na jeden, żeby zobaczyć jego historię.",
  "board.settlement.lossNoteNone": "Brak obstawionego kafelka w tej rundzie.",
  "board.settlement.topCardOfRound": "Najlepsza karta rundy · {label}",
  "board.settlement.keepCardTo": "Zatrzymaj kartę ({amount}) → kolekcja",
  "board.settlement.sellBackFor": "Odsprzedaj za {amount}",
  "board.settlement.continueNextRound": "Przejdź do następnej rundy",
  "board.settlement.continue": "Dalej",
  "board.settlement.keepSellHint":
    "Zatrzymaj = karta do kolekcji · sprzedaj = {amount} od razu ({pct}% wartości karty, odkup CC tego pack) · {noAction}",
  "board.settlement.noActionKept": "brak akcji = karta zostaje zatrzymana dla Ciebie.",
  "board.settlement.noActionAutoSell": "brak akcji = automatyczna sprzedaż, gdy skończy się następna runda.",
  "board.settlement.revealOnlyNote":
    "W tej wersji testowej przegrane kafelki służą tylko do odsłony, ich trafy wracają do skarbca. Wypłaca tylko karta zwycięskiego kafelka.",
  "board.settlement.payoutSplit": "Podział wypłaty",
  "board.settlement.poolChaseFeedLine": "Pula {pool} · zasilenie Pościgu {feed}",
  "board.settlement.chaseAddSuffix": " · POŚCIG +{amount}",
  "board.settlement.physicalCardArrow": "Fizyczna karta →",
  "board.settlement.grailSecuredSuffix": " (grail zabezpieczony)",
  "board.settlement.grailSoldBack": "Grail odsprzedany ({amount}) → podział USDC powyżej.",
  "board.settlement.cardAssignmentHead": "Przydział kart",
  "board.settlement.cardLabel": "karta {amount}",
  "board.settlement.soldToVault": "sprzedana do skarbca · wpływy w podziale",
  "board.settlement.decisionTopBackerSuffix": " (największy obstawiający · zatrzymaj albo sprzedaj)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} z jego USDC",
  "board.settlement.cardsSpreadNote":
    "Karty rozkładają się na jak najwięcej obstawiających - przydzielona karta kosztuje swój odkup CC (85-93% zależnie od pack) z USDC tego obstawiającego (ta sama wartość gotówkowa co przy sprzedaży, ale zostaje mu potencjał wzrostu). Do skarbca trafiają tylko karty, których nikt nie przejął.",
  "board.settlement.chaseHitLabel": "POŚCIG TRAFIŁ!",
  "board.settlement.chasePaidLine": "{amount} wpłacone do tego podziału.",
  "board.settlement.chaseMissLabel": "BRAK ZRZUTU Z POŚCIGU.",
  "board.settlement.chaseNowLine": "Pościg teraz {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Zweryfikuj losowanie",
  "board.settlement.verifyDrawSub": "weryfikowalne losowanie · zobacz potwierdzenie losowania",
  "board.settlement.roundIdLabel": "id rundy",
  "board.settlement.winningDrawLabel": "zwycięskie losowanie",
  "board.settlement.drawSeedLabel": "ziarno losowania",
  "board.settlement.proofIdLabel": "id dowodu",
  "board.settlement.ticketOfCount": "#{index} z {count}",
  "board.settlement.verifying": "Weryfikacja…",
  "board.settlement.recheckDraw": "Sprawdź losowanie ponownie",
  "board.settlement.verifierLink": "Weryfikator ↗",
  "board.settlement.verifiedOk": "✓ Losowanie zweryfikowane, ten zwycięzca zgadza się z opublikowanym ziarnem losowania.",
  "board.settlement.verifiedBad": "✗ To losowanie nie zgadza się ze swoim ziarnem, nie ufaj mu.",
  "board.settlement.everyRoundNote": "Każda runda losuje jednego zwycięzcę z opublikowanego ziarna, które możesz sprawdzić.",
  "board.settlement.noPacksNote": "Żaden pack nie został obstawiony w tej rundzie, nie ma czego losować.",
  "board.settlement.settledHoverHint": "Rozliczona, najedź na kafelek, żeby go sprawdzić.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Zakład za duży na Twoje saldo",
  "board.betTooBig.dismissAria": "Zamknij",
  "board.betTooBig.gotIt": "Rozumiem",
  "board.betTooBig.body": "Obstawienie {slotLabel} wymaga {needed}, a masz {held}. Brakuje Ci {shortfall}.",
  "board.betTooBig.deposit": "Wpłać {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Gracze, uszeregowani według łącznej stawki",
  "board.wagerLadder.title": "Gracze",
  "board.wagerLadder.countZero": "Jeszcze brak zakładów",
  "board.wagerLadder.countOther": "{n} w rundzie · według łącznej stawki",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "Zwiń panel graczy",
  "board.wagerLadder.lastRoundAria": "Zobacz wyniki ostatniej rundy, runda #{n}",
  "board.wagerLadder.lastRoundLabel": "Zobacz wyniki ostatniej rundy",
  "board.wagerLadder.empty": "Nikt jeszcze nie obstawił kafelka w tej rundzie.",
  "board.wagerLadder.leaderAria": "Lider",
  "board.wagerLadder.openProfileTitle": "Otwórz profil {name} w nowej karcie",
  "board.wagerLadder.miniGridTotal": "łącznie {amount}",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "Kafelki obstawione przez {name}",
  "board.wagerLadder.miniGridTilesAriaYou": "Kafelki obstawione przez Ciebie",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "Sprzedaj karty z inwentarza, żeby sfinansować ten zakład",
  "board.bidFund.eyebrow": "BRAK USDC",
  "board.bidFund.titleOne": "Sprzedać Twoją kartę, żeby pokryć ten zakład?",
  "board.bidFund.titleMany": "Sprzedać te karty, żeby pokryć ten zakład?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "Sprzedaż {cards} daje {buyback} - wystarczy, żeby obstawić {amount} na {tile}.",
  "board.bidFund.bodyCardsMany": "te karty",
  "board.bidFund.note":
    "Brakuje Ci {amount}. Karty sprzedają się po cenie odkupu CC swojego pack (85 do 93%). Tego nie da się cofnąć.",
  "board.bidFund.keepCards": "Zatrzymaj karty",
  "board.bidFund.sellAndBid": "Sprzedaj i postaw {amount}",
  "board.bidFund.autoSellSwitch": "Automatycznie sprzedawaj moje wygrane za USDC",
  "board.bidFund.autoSellNoteOn":
    "Każda wygrana wypłaca się po cenie odkupu w chwili, gdy trafi do Ciebie. Bez pytań o zatrzymanie czy sprzedaż. Grail nigdy nie jest sprzedawany automatycznie. Zmień to w dowolnym momencie w Ustawieniach.",
  "board.bidFund.autoSellNoteOff":
    "Włącz to, a każda wygrana karta wypłaci się w USDC po cenie odkupu, bez pytań. Grail nigdy nie jest sprzedawany automatycznie. Zmień to w dowolnym momencie w Ustawieniach.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "Stawiać zakłady klawiszami numerycznymi?",
  "board.hotkeys.optInBody":
    "Naciśnięcie klawisza natychmiast obstawia dany kafelek Twoim aktualnym zakładem. Przed chwilą nic nie zostało postawione.",
  "board.hotkeys.notNow": "Nie teraz",
  "board.hotkeys.enableKeys": "Włącz klawisze",
  "board.hotkeys.turnOff": "Wyłącz",
  "board.hotkeys.turnOffTitle": "Klawisze pozostają wyłączone, dopóki nie włączysz ich ponownie w Ustawieniach.",
  "board.hotkeys.changeKeys": "Zmień klawisze",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "Otwórz kafelek",
  "board.boardV1.onTile": "na kafelku",
  "board.boardV1.changeAmount": "drobne {amount}",
  "board.boardV1.oddsSuffix": "{pct} szans",
  "board.boardV1.openedOdds": "Otwarto · {pct} szans",
  "board.boardV1.emptyNeverInDraw": "Pusty · nigdy w losowaniu",
  "board.boardV1.winnerYourShare": "ZWYCIĘZCA · Twój udział się wypłaca",
  "board.boardV1.winnerNoStake": "ZWYCIĘZCA · bez Twojej stawki",
  "board.boardV1.lostOdds": "Przegrano losowanie · {pct} szans",
  "board.boardV1.tileClickTitle": "Kliknij gdziekolwiek, żeby obstawić {label} kwotą {amount}",
  "board.boardV1.youAmount": "Ty {amount}",
  "board.boardV1.youNone": "Ty -",
  "board.boardV1.pctOfTile": "{pct} kafelka",
  "board.boardV1.noStakeYet": "jeszcze brak stawki",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "obstawiono {amount} · {pct} kafelka",
  "board.boardV1.statusWaitingDraw": "Oczekiwanie na losowanie…",
  "board.boardV1.statusWonSplit": "Wygrano {amount} z podziału",
  "board.boardV1.statusOnWinningTile": "Na zwycięskim kafelku",
  "board.boardV1.statusNoPayout": "Brak wypłaty w tej rundzie",
  "board.boardV1.statusYourStake": "Twoja aktywna stawka",
  "board.boardV1.statusBacking": "Obstawiasz ten kafelek",
  "board.boardV1.backerCount.one": "{n} obstawiający",
  "board.boardV1.backerCount.other": "{n} obstawiających",
  "board.boardV1.noBackersYet": "Jeszcze brak obstawiających",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "Postaw {amount}",
  "board.boardV1.backBtnTitle": "Obstaw {label} kwotą {amount} USDC",
  "board.boardV1.evolveTitle": "Dokłada dokładnie {amount} więcej do {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} na kafelku",
  "board.boardV1.opensAs": "Otworzy się jako · {summary}",
  "board.boardV1.noPacksYet": "Jeszcze bez pack, obstaw, żeby sfinansować pierwszy pack",
  "board.boardV1.whyOpenedDrawing":
    "Otworzył {cardName} ({amount}) przy {pct} szans, trwa losowanie zwycięzcy.",
  "board.boardV1.whyWon":
    "Wygrał ważone losowanie przy {pct} szans. Otworzył {cardName} ({amount}); pula podzielona proporcjonalnie między jego obstawiających.",
  "board.boardV1.whyLost":
    "Przegrał ważone losowanie, {pct} szans ({amount} z puli {poolAmount}). Mimo to otworzył {cardName} ({cardAmount}), ale wypłaca tylko zwycięski kafelek.",
  "board.boardV1.whyEmpty": "Pusty kafelek - bez stawki, bez losu.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " Twoja stawka tutaj: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Brak Twojej stawki tutaj.",
  "board.boardV1.ifWins": "Jeśli ten kafelek wygra: zgarniesz ~{amount} z puli {poolAmount}.",
  "board.boardV1.clickToBack": "Kliknij, żeby obstawić wybranym zakładem i otworzyć jego pierwszy pack przy blokadzie.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "Pozycja {rank}, {name}, obstawiono {wagered}, netto {net}, skuteczność {pct} procent",
  "board.leaderboard.youTag": "TY",
  "board.leaderboard.youRankTag": "TY · #{n}",
  "board.leaderboard.statWagered": "OBSTAWIONE",
  "board.leaderboard.statNetPl": "WYNIK NETTO",
  "board.leaderboard.statWinRate": "SKUTECZNOŚĆ",
  "board.leaderboard.statRounds": "RUNDY",
  "board.leaderboard.statPoolShare": "UDZIAŁ W PULI",
  "board.leaderboard.statFirstSeen": "PIERWSZA WIZYTA",
  "board.leaderboard.statBiggestPull": "NAJWIĘKSZY TRAF",
  "board.leaderboard.shareOfToday": "dzisiejszych zakładów",
  "board.leaderboard.shareOfAllTime": "wszystkich zakładów",
  "board.leaderboard.noneYet": "JESZCZE BRAK",
  "board.leaderboard.viewFullProfile": "Zobacz pełny profil",
  "board.leaderboard.live": "NA ŻYWO",
  "board.leaderboard.fullRankings": "Pełny ranking",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} gracz",
  "board.leaderboard.playerCount.other": "{n} graczy",
  "board.leaderboard.roundCount.one": "{n} runda",
  "board.leaderboard.roundCount.other": "{n} rund",
  "board.leaderboard.colPlayer": "Gracz",
  "board.leaderboard.colWagered": "Obstawione",
  "board.leaderboard.colNet": "Wynik netto",
  "board.leaderboard.colWin": "Wygrane",
  "board.leaderboard.colBiggestPull": "Największy traf",
  "board.leaderboard.sortGroupAria": "Sortuj ranking",
  "board.leaderboard.sortBy": "Sortuj według {col}",
  "board.leaderboard.podiumNet": "{amount} netto",
  "board.leaderboard.podiumTopPull": "Najlepszy traf",
  "board.leaderboard.fullStandings": "Pełna tabela · {n} obstawiających",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} pack {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} packs {packName} ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "Zdjęcie profilowe {handle} na X",
  "board.connectX.connectedTitle": "Połączono przez X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "Slot {packName} (brak na tym kafelku)",
  "board.packChips.fixedChipTitle": "{n} x {packName} po {amount} każdy",
  "board.packChips.fixedChipTitleTotalSuffix": " - łącznie {amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Utworzony ze zgromadzonych drobnych kafelka - nikt nie postawił tego pack bezpośrednio",
  "board.packChips.pooledSome": "{n} z {total} utworzone ze zgromadzonych drobnych kafelka",
  "board.packChips.bidWhole": "Postawiony jako cały pack",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Także na tym kafelku: {list}",
  "board.packChips.morePacks.one": "{n} kolejny pack",
  "board.packChips.morePacks.other": "{n} kolejnych packs",
  "board.packChips.morePacksWithList.one": "{n} kolejny pack: {list}",
  "board.packChips.morePacksWithList.other": "{n} kolejnych packs: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "Zakłady {bids} · pula {pool}",
  "board.tile.splitAllBids": "Całe {bids} postawiono jako całe packs",
  "board.tile.splitAllPool": "Całe {pool} to zgromadzone drobne kafelka",
  "board.tile.splitPoolNote": "Przerywane packs powstały z puli - nikt ich nie postawił.",
  "board.tile.evolveLooseTitle": "{loose} drobnych na tym kafelku przerodzi się w pack {tier} przy {target}",
  "board.tile.evolveNoLooseTitle":
    "Jeszcze brak drobnych na tym kafelku. Drobne przeradzają się w pack {tier} przy {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - pokrywa {covered} z {total} kafelków po {unit}",
  "board.betRail.allTilesPlanFull": "Przy zamknięciu rundy obstawi wszystkie {total} kafelków po {unit}. Łącznie {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Przy zamknięciu rundy obstawi {covered} z {total} kafelków po {unit}. Twoje {balance} pokryje {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "Przy zamknięciu rundy obstawi {covered} z {total} kafelków po {unit}. Twoje {balance} pokryje {spend}.",
  "board.betRail.allTilesPlanNone": "Twoje {balance} nie pokrywa nawet jednego zakładu {unit}, więc żaden kafelek nie zostanie obstawiony.",
  "board.betRail.allTilesShortHistory.one":
    "Auto-zakład na wszystkie kafelki wymaga {needed} na {tiles} kafelków po {unit}. Masz {balance}, więc obstawiono {covered} kafelek.",
  "board.betRail.allTilesShortHistory.other":
    "Auto-zakład na wszystkie kafelki wymaga {needed} na {tiles} kafelków po {unit}. Masz {balance}, więc obstawiono {covered} kafelków.",
  "board.betRail.allTilesNoneHistory":
    "Auto-zakład na wszystkie kafelki wymaga {needed} na {tiles} kafelków po {unit}. Masz {balance}, więc żaden kafelek nie został obstawiony.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Przy zamknięciu rundy",
  "board.betRail.planTotal": "Łącznie",
  "board.betRail.planMathFull": "{total} kafelków × {amount}",
  "board.betRail.planMathShort": "{covered} z {total} kafelków × {amount}",
  "board.betRail.planPerTile": "{unit} na kafelek",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // Extracted from QUICK_BET_STRATEGY_META, which used to hold these sentences
  // inline as a module-level const: built once at import, so the auto-bet rail
  // stayed English in all ten locales (a Japanese board rendered "Top | Bottom
  // | All"). The map now reads each of these through a t() getter at property
  // access. Six keys x five strategies; `glyph` is a symbol, not copy.
  //   .label     the narrow rail chip caption (3 to 6 chars in en, HARD width
  //              budget: it sits three-across in a ~250px rail)
  //   .name      hover tooltip + aria-label, also substituted into the {name}
  //              token of board.betRail.strategyAria* / firedAtClose
  //   .detail    the ⓘ popover's longer explanation
  //   .rowTitle  short tile name, bolded half of the desktop row
  //   .closeLine rendered after rowTitle as "rowTitle, closeLine"
  //   .gridLine  compact plain-words line, must stay a few words
  // ARM framing everywhere: a click ARMS the strategy and it fires itself just
  // before the round locks, so the ranking always resolves "at round close",
  // never "now".
  "board.strategy.highest.label": "Góra",
  "board.strategy.highest.name": "Uzbrój: obstaw najwyższy kafelek przy zamknięciu rundy",
  "board.strategy.highest.detail":
    "Uzbraja Twój zakład na kafelku z największą kwotą, rozstrzygane tuż przed zamknięciem rundy.",
  "board.strategy.highest.rowTitle": "Najwyższy kafelek",
  "board.strategy.highest.closeLine": "obstawia największy kafelek przy zamknięciu rundy",
  "board.strategy.highest.gridLine": "najwięcej pieniędzy na zamknięciu",

  "board.strategy.lowest.label": "Dół",
  "board.strategy.lowest.name": "Uzbrój: obstaw najniższy kafelek przy zamknięciu rundy",
  "board.strategy.lowest.detail":
    "Uzbraja Twój zakład na najmniej zatłoczonym kafelku, rozstrzygane tuż przed zamknięciem rundy. Jeśli wszyscy rzucą się na najniższy, przestanie być najniższym, zanim to nastąpi.",
  "board.strategy.lowest.rowTitle": "Najniższy kafelek",
  "board.strategy.lowest.closeLine": "obstawia najmniejszy kafelek przy zamknięciu rundy",
  "board.strategy.lowest.gridLine": "najmniej pieniędzy na zamknięciu",

  "board.strategy.secondHighest.label": "2. góra",
  "board.strategy.secondHighest.name": "Uzbrój: obstaw drugi najwyższy kafelek przy zamknięciu rundy",
  "board.strategy.secondHighest.detail":
    "Uzbraja Twój zakład o jeden stopień poniżej lidera, rozstrzygane tuż przed zamknięciem rundy.",
  "board.strategy.secondHighest.rowTitle": "Drugi najwyższy kafelek",
  "board.strategy.secondHighest.closeLine": "obstawia kafelek tuż poniżej lidera przy zamknięciu rundy",
  "board.strategy.secondHighest.gridLine": "jeden stopień poniżej lidera",

  "board.strategy.secondLowest.label": "2. dół",
  "board.strategy.secondLowest.name": "Uzbrój: obstaw drugi najniższy kafelek przy zamknięciu rundy",
  "board.strategy.secondLowest.detail":
    "Typ oparty na teorii tłumu: gdy wszyscy gonią za najniższym kafelkiem, robi się na nim tłoczno, więc drugi najniższy może wypłacić lepiej. Uzbraja się od razu, rozstrzyga tuż przed zamknięciem rundy.",
  "board.strategy.secondLowest.rowTitle": "Drugi najniższy kafelek",
  "board.strategy.secondLowest.closeLine": "obstawia kafelek tuż nad zatłoczonym dołem przy zamknięciu rundy",
  "board.strategy.secondLowest.gridLine": "jeden stopień nad dołem",

  "board.strategy.allTiles.label": "Wszystkie",
  "board.strategy.allTiles.name": "Uzbrój: obstaw każdy kafelek przy zamknięciu rundy",
  "board.strategy.allTiles.detail":
    "Uzbraja Twój zakład na każdym kwalifikującym się kafelku, rozstrzygane tuż przed zamknięciem rundy. Łączny wydatek = wysokość Twojego zakładu x liczba kafelków w tym momencie.",
  "board.strategy.allTiles.rowTitle": "Wszystkie kafelki",
  "board.strategy.allTiles.closeLine": "rozkłada Twój zakład przy zamknięciu rundy",
  "board.strategy.allTiles.gridLine": "Twój zakład na każdym kafelku",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "Dotknij ponownie: {unit}",
  "board.tile.confirmClickAgain": "Kliknij ponownie: {unit}",
  "board.tile.betOffNotice": "Zakłady są wyłączone w ustawieniach",
  "board.stakeControl.pickPackHint": "Wybierz pack, żeby zagrać",
  "board.stakeControl.emptyStakeLead": "Wybierz pack",
  "board.stakeControl.emptyStakeHint": "To Twój zakład",
  "gear.betInput.label": "Stawianie zakładu",
  "gear.betInput.hint":
    "Jak dotknięcie kafelka (i jego klawisz numeryczny) stawia Twój zakład. Podwójne wymaga najpierw potwierdzającego dotknięcia - domyślne dla ekranów dotykowych. Wyłączone to tryb obserwatora: nic nie stawia zakładu.",
  "gear.betInput.optionSingle": "Pojedyncze dotknięcie",
  "gear.betInput.optionDouble": "Podwójne dotknięcie",
  "gear.betInput.optionOff": "Wyłączone",
  "gear.cardOpen.label": "Otwieranie kart",
  "gear.cardOpen.hint":
    "Podwójne wymaga potwierdzającego dotknięcia, zanim awers karty otworzy jej stronę - domyślne dla ekranów dotykowych.",
} as Record<string, string>;
