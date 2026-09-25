// Polish (Polski): "core" segment. Same key set as en/core.ts - see that
// file's header for the full namespace breakdown (settings.*, common.*,
// gear.<section>.*, nav.*, mobileNav.*, plus the two cross-surface
// namespaces shell.* and runtime.*).
//
// See royaleI18n.ts for the {token} interpolation convention and the
// no-em-dash / brand-terms-stay-English / numbers-stay-literal rules.
//
// Terminology (binding across every pl segment - core, board, cinema, arena,
// onboarding, docs, pages, chat, misc):
//   runda = round · pula = the round's pool/pot · Pościg = "The Chase" (the
//   rolling jackpot mechanic, translated and capitalized as a proper name,
//   held identical in all ~50 occurrences across every segment) · kafelek =
//   tile · obstawiający = backer(s) (a substantivized participle, identical
//   in singular and plural, "największy obstawiający" = top backer) ·
//   zakład/stawka = bet/bid/stake (obstawić/postawić = to bet or bid) ·
//   odsprzedać/odsprzedaż = sell back · traf = pull (the card a pack opens),
//   losowanie = draw (the VRF winner draw - a deliberately different word
//   from "traf" so "card pull" and "winner draw" never collide) · skarbiec =
//   vault · oceniona karta = graded/slab card · weryfikowalnie uczciwe =
//   provably fair · drobne = loose change · Powtórka = Replay (REPLAY /
//   POWTÓRKA in all-caps contexts) · bank = "the house" · szanse = odds ·
//   grading = the card-grading industry/process (an already-lexicalized loan
//   in Polish collector jargon, not one of the invariant brand terms below).
//   REGISTER: informal "Ty" throughout (not "Pan/Pani") - the standard
//   register for Polish consumer software and games. Past-tense narration of
//   the player's OWN action (round-log lines: "you backed", "you kept",
//   "deposited $X"...) uses Polish's impersonal -no/-to verb form ("obstawiono
//   {tile} kwotą {amount}") instead of a gendered second-person past tense
//   ("obstawiłeś" vs "obstawiłaś") - Polish past tense and conditional mood
//   are grammatically gendered and the app never learns the player's gender,
//   so the impersonal form is the correct, natural fix and reads exactly like
//   ordinary Polish game-log copy ("Otwarto pack", "Zdobyto kartę"). Present
//   tense, future tense and imperative "Ty" forms are gender-invariant in
//   Polish and used freely everywhere else (buttons, hints, settings).
//   BRAND TERMS staying English everywhere, mid-sentence included: the five
//   pack tier names (Starter, Elite, Legendary, Grail, Mythic - never given a
//   Polish case ending), "pack"/"packs" (the invariant loanword - never
//   "paczka/paczki", never case-inflected as "packa/packiem/packów"), "attn
//   ROYALE", "ATTN Protocol", "USDC", "X", "Privy", "CollectorCrypt".
//
// Segment: core (the original Phase-1 flat dictionary, moved here
// verbatim as part of the i18n parallel-work restructure) PLUS the two
// cross-surface namespaces shell.* and runtime.*, which belong to no single
// game surface. Do NOT add new SURFACE keys to this file, add them to the
// segment file for the surface they belong to instead (board, cinema, arena,
// onboarding, docs, pages, chat, misc in this same directory).
// See royaleI18n.ts's file header for the key/interpolation convention.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Język",
  "settings.languageSectionAria": "Ustawienia języka",
  "settings.languageSearchPlaceholder": "Szukaj języków",
  "settings.languageNoResults": "Brak pasujących języków",
  "settings.languageHint": "Działa natychmiast. Szukaj po nazwie albo wpisz, żeby filtrować.",
  "settings.languageInputAria": "Język, szukaj i wybierz",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Grupy ustawień",
  "settings.searchPlaceholder": "Szukaj ustawień",
  "settings.searchClear": "Wyczyść wyszukiwanie",
  "settings.searchResultsAria": "Pasujące ustawienia",
  "settings.searchNoResults": "Nic nie pasuje do „{query}”. Spróbuj nazwy tego, co chcesz zmienić.",
  "settings.backToGroups": "Wszystkie ustawienia",
  "gear.cards.heading": "Karty",
  "gear.cards.sectionAria": "Ustawienia kart",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Zakłady {bids} · minimum {amount}",
  "gear.section.summary.display": "Wyskakujące okna {popups} · portrety {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Muzyka {music} · efekty {sfx}",
  "gear.section.summary.autosell": "{count} aktywnych reguł automatycznej sprzedaży",
  "gear.section.summary.hotkeys": "{count} skrótów ustawionych",

  // --- Shared words --------------------------------------------------------
  "common.on": "WŁ",
  "common.off": "WYŁ",
  "common.set": "USTAW",
  "common.clear": "WYCZYŚĆ",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "Kafelek {n}",
  "common.tileShort": "K{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Zakłady",
  "gear.betting.sectionAria": "Ustawienia zakładów",
  "gear.betting.provider.label": "Dostawca paczki",
  "gear.betting.provider.automatic": "Automatycznie (preferuje Collector Crypt)",
  "gear.betting.provider.hint": "Tryb automatyczny preferuje Collector Crypt, gdy jest dostępny, i może użyć wyłącznie zweryfikowanego dostawcy rezerwowego. Wybór konkretnego dostawcy jest ścisły: jeśli nie jest dostępny, zakład zostanie odrzucony.",
  "gear.betting.provider.automaticHint": "Automatycznie · preferuje Collector Crypt",
  "gear.betting.provider.strictHint": "Tylko {provider} · bez dostawcy rezerwowego",
  "gear.betting.provider.unavailable": "{provider} (niedostępny)",
  "gear.betting.provider.selectedUnavailable": "{provider} jest niedostępny. Ścisłe zakłady są odrzucane, a wybór nigdy nie jest zastępowany.",
  "gear.betting.provider.actual": "Zrealizowano przez {provider}",
  "gear.betting.provider.accepted": "Przyjęto przez {provider}",
  "gear.betting.disableBids.label": "Wyłącz zakłady",
  "gear.betting.disableBids.hint":
    "Blokuje Twoje zakłady: dotknięcie kafelka przestaje stawiać zakłady, więc możesz oglądać (albo oddać ekran komuś innemu) bez przypadkowego obstawienia. Reszta gry toczy się dalej normalnie.",
  "gear.betting.minBid.label": "Minimalny zakład",
  "gear.betting.minBid.hint":
    "Najmniejszy zakład, jaki może postawić dotknięcie. Wysokość zakładu nie spadnie poniżej tej wartości, więc szybkie dotknięcie nigdy nie postawi mniej, niż zamierzałeś (dolny limit to $5, żeby zapobiec fałszywym zakładom).",
  "gear.betting.upgradeCap.label": "Limit kosztu ulepszenia",
  "gear.betting.upgradeCap.placeholder": "brak limitu",
  "gear.betting.upgradeCap.hint":
    "Maksymalna kwota, jaką może Cię kosztować jedno kliknięcie ulepszenia. Droższe ulepszenia są wyszarzone, więc ruchliwy kafelek nie zaskoczy Cię wysokim rachunkiem.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Wyświetlanie",
  "gear.display.sectionAria": "Ustawienia wyświetlania",
  "gear.display.chipFloats.label": "Dymki zakładów",
  "gear.display.chipFloats.hint": "Pokazuje małe dymki „+$X · imię”, które unoszą się w górę, gdy ktoś obstawia kafelek.",
  "gear.display.floatThreshold.label": "Ukryj zakłady poniżej",
  "gear.display.floatThreshold.placeholder": "pokaż każdy zakład",
  "gear.display.floatThreshold.hint":
    "Dymek pojawia się tylko dla zakładów tej wielkości lub większych. Wyczyść pole (albo ustaw $0), żeby pokazywać każdy zakład - to utrzymuje spokój na planszy, gdy spływa dużo drobnych zakładów.",
  "gear.display.hidePortraits.label": "Ukryj portrety graczy",
  "gear.display.hidePortraits.hint": "Ukrywa okrągłe portrety innych graczy na kafelkach. Twój własny znacznik pozostaje widoczny.",
  "gear.display.fullscreenLandscape.label": "Pełny ekran w poziomie",
  "gear.display.fullscreenLandscape.hint":
    "Na telefonie następne dotknięcie w poziomie ukrywa pasek przeglądarki. W Safari na iPhonie pasek tylko się zwija; Dodaj do ekranu głównego daje prawdziwy pełny ekran.",
  "gear.display.replayTour.label": "Odtwórz samouczek powitalny",
  "gear.display.replayTour.hint": "Otwórz samouczek ponownie od pierwszego kroku.",
  "gear.display.couch.label": "Duży tekst (TV/kanapa)",
  "gear.display.headerCollapse.label": "Zwiń nagłówek",
  "gear.display.headerCollapse.hint": "Zwija górny pasek, aby plansza i karty wypełniły ekran. Strzałka w nagłówku go przywraca.",
  "gear.display.couch.hint":
    "Powiększa tekst czytany w całej grze: czat, dokumentację, etykiety i kwoty pieniędzy, w rozmiarze dopasowanym do grania z kanapy. Plansza zachowuje swój układ. Można też włączyć przez ?couch=1 w adresie.",
  "gear.display.couch.suggested": "To wygląda jak przeglądarka telewizora albo konsoli. Duży tekst jest stworzony właśnie dla takiego ekranu.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Odsłony",
  "gear.reveals.sectionAria": "Ustawienia odsłon",
  "gear.reveals.turbo.label": "Turbo odsłony",
  "gear.reveals.turbo.hint":
    "Przyspiesza pokaz odsłony, żebyś szybciej poznał swój wynik. Ważne momenty wciąż mają swoją chwilę. Domyślnie wyłączone, dla reszty graczy leci pełny pokaz.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Dźwięk",
  "gear.sound.sectionAria": "Ustawienia dźwięku",
  "gear.sound.sfx.label": "Efekty dźwiękowe",
  "gear.sound.sfx.hint":
    "Kliknięcia żetonów, otwarcie i blokada rundy, koło zwycięzcy i pokaz odsłony. Wszystko generowane w Twojej przeglądarce, nic do wczytania.",
  "gear.sound.music.label": "Muzyka",
  "gear.sound.music.hint":
    "Podąża za rundą: narasta w fazie zakładów, przyspiesza w ostatnich sekundach i opada przy odsłonie. Zaczyna grać po pierwszym dotknięciu lub naciśnięciu klawisza i pauzuje, gdy przełączysz kartę przeglądarki.",
  "gear.sound.musicStyle.label": "Styl muzyki",
  "gear.sound.musicStyle.piano": "Spokojne pianino",
  "gear.sound.musicStyle.snowmelt": "Roztopy",
  "gear.sound.musicStyle.hearthfire": "Ogień w palenisku",
  "gear.sound.musicStyle.grotto": "Złota grota",
  "gear.sound.musicStyle.arcade": "Arcade'owy pęd",
  "gear.sound.musicStyle.kart": "Rajd gokartów",
  "gear.sound.musicStyle.galaxy": "Walc gwiazd",
  "gear.sound.musicStyle.hint": "Spokojne pianino to delikatna, niespieszna melodia. Arcade'owy pęd jest żywy i szybki. Zmiana następuje na kolejnym takcie, w trakcie rundy.",
  "gear.sound.musicVolume.label": "Głośność muzyki",
  "gear.sound.sfxVolume.label": "Głośność efektów",
  "gear.sound.volume.label": "Głośność",
  "gear.sound.volume.aria": "Głośność główna",
  "gear.sound.volume.hint": "Jedna główna głośność dla efektów i muzyki razem.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Reguły automatycznej sprzedaży",
  "gear.autosell.sectionAria": "Reguły automatycznej sprzedaży",
  "gear.autosell.intro":
    "Ustaw to raz, a każda pasująca wygrana odsprzeda się automatycznie: bez pytania o zatrzymanie albo sprzedaż. Wszystko, co nie pasuje, nadal Cię zapyta, tak jak dziś.",
  "gear.autosell.everyWin.label": "Automatycznie sprzedawaj każdą wygraną",
  "gear.autosell.everyWin.hint":
    "Wypłaca każdą wygraną kartę po cenie odkupu w chwili, gdy trafi do Ciebie, bez pytania o zatrzymanie albo sprzedaż. Grail nigdy nie jest sprzedawany automatycznie. To skrót, który włącza wszystkie cztery przełączniki rzadkości poniżej.",
  "gear.autosell.belowValue.label": "Sprzedaj, jeśli wartość jest poniżej",
  "gear.autosell.placeholderOff": "wyłączone",
  "gear.autosell.rarity.label": "Sprzedawaj według rzadkości",
  "gear.autosell.rarity.aria": "Automatyczna sprzedaż według rzadkości",
  "gear.autosell.rarity.hint":
    "Przedziały rzadkości CollectorCrypt, odczytane z automatu pack, z którego pochodzi każda karta. Dokładny przedział cenowy zmienia się w zależności od pack, więc karta za $200 może być rzadka w jednym automacie, a pospolita w droższym.",
  "gear.autosell.nonVintage.label": "Sprzedawaj karty spoza roczników vintage",
  "gear.autosell.belowGrade.label": "Sprzedaj, jeśli ocena jest poniżej",
  "gear.autosell.grader.label": "Sprzedawaj według firmy gradingowej",
  "gear.autosell.grader.hint":
    "Zostaw zaznaczoną firmę gradingową, żeby automatycznie sprzedawać tylko jej karty ocenione poniżej ustawionej liczby. Odznacz firmę, żeby automatycznie sprzedawać wszystkie jej karty. Odznacz je wszystkie, żeby automatycznie sprzedawać wszystko, co wygrasz. Różne firmy gradingowe używają różnych skal, więc każdy próg jest niezależny.",
  "gear.autosell.grader.aria": "Automatyczna sprzedaż według firmy gradingowej",
  "gear.autosell.grader.keep": "ZATRZYMAJ",
  "gear.autosell.grader.sellAll": "SPRZEDAJ WSZYSTKO",
  "gear.autosell.grader.other": "Inne / bez oceny",
  "gear.autosell.grader.placeholderKeepAll": "zatrzymaj wszystko",
  "gear.autosell.grader.placeholderSellAll": "sprzedaj wszystko",
  "gear.autosell.grader.ariaGradeSuffix": "sprzedaj poniżej oceny",
  "gear.autosell.summaryActive": "Aktywne:",
  "gear.autosell.summaryNone": "Brak ustawionych reguł automatycznej sprzedaży. Każda wygrana nadal pyta o zatrzymanie lub sprzedaż.",
  "gear.autosell.turnOffAll": "WYŁĄCZ WSZYSTKO",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Skróty zakładów",
  "gear.hotkeys.sectionAria": "Skróty zakładów",
  "gear.hotkeys.intro":
    "Naciśnij klawisz kafelka, żeby go obstawić aktualną wysokością zakładu. Bez myszki. Kliknij klawisz poniżej, a potem naciśnij ten, który chcesz przypisać. Dwa kafelki nie mogą dzielić jednego klawisza, więc przypisanie go od nowa przenosi go. Esc anuluje, Backspace czyści.",
  "gear.hotkeys.enabled.label": "Zakłady klawiszami numerycznymi",
  "gear.hotkeys.enabled.hintOn": "Klawisze działają podczas fazy zakładów. Naciśnięcie klawisza kafelka natychmiast stawia Twój zakład.",
  "gear.hotkeys.enabled.hintOff": "Klawisze są wyłączone. Naciśnięcie klawisza kafelka nie stawia żadnego zakładu.",
  "gear.hotkeys.enabled.hintUnset": "Jeszcze nie zdecydowano. Włącz klawisze tutaj, albo naciśnij klawisz kafelka podczas fazy zakładów i wybierz Włącz.",
  "gear.hotkeys.listAria": "Skróty zakładów na kafelki",
  "gear.hotkeys.tileLabel": "Kafelek {n}",
  "gear.hotkeys.pressKeyPrompt": "Naciśnij klawisz…",
  "gear.hotkeys.setKey": "Ustaw klawisz",
  "gear.hotkeys.clear": "Wyczyść",
  "gear.hotkeys.ariaPressToBind": "Naciśnij klawisz, żeby przypisać go do kafelka {n}",
  "gear.hotkeys.ariaShortcut": "Kafelek {n}, skrót {key}. Kliknij, żeby zmienić przypisanie.",
  "gear.hotkeys.ariaNoShortcut": "Kafelek {n} nie ma skrótu. Kliknij, żeby go ustawić.",
  "gear.hotkeys.ariaClearShortcut": "Wyczyść skrót kafelka {n}",
  "gear.hotkeys.unboundWarning": "Brak klawisza dla {list}. Te kafelki nie mają skrótu klawiszowego, dopóki go nie ustawisz.",
  "gear.hotkeys.resetButton": "Przywróć domyślne",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "Sekcje attn ROYALE",
  "nav.board": "PLANSZA",
  "nav.results": "WYNIKI",
  "nav.rankingsFull": "RANKINGI",
  "nav.rankingsShort": "RANKI",
  "nav.collectionFull": "KOLEKCJA",
  "nav.collectionShort": "KARTY",
  "nav.profile": "PROFIL",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Plansza",
  "mobileNav.results": "Wyniki",
  "mobileNav.ladder": "Ranking",
  "mobileNav.collection": "Kolekcja",
  "mobileNav.profile": "Profil",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "Zasady",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "Laboratorium attn ROYALE",
  "shell.header.statusAria": "Status rundy",
  "shell.header.collapse": "Ukryj nagłówek",
  "shell.header.expand": "Pokaż nagłówek",
  "shell.header.round": "Runda #{n}",
  "shell.header.turboTitle": "Przyspieszony rytm rundy",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Podsumowanie rundy",
  "shell.metrics.totalPool": "Cała pula",
  "shell.metrics.packsLive": "Packs w grze",
  "shell.metrics.yourStake": "Twoja stawka",
  "shell.metrics.selectedBet": "Wybrany zakład",
  "shell.board.aria": "Plansza attn ROYALE",
  "shell.board.label": "Plansza",
  "shell.board.phaseOpen": "Kliknij dowolny kafelek, żeby go obstawić - stawka układa się w najlepszy możliwy stos pack",
  "shell.board.phaseLock": "Zablokowane · packs się otwierają",
  "shell.board.phaseSettled": "Runda rozliczona",
  "shell.board.metaOpen": "{pool} pula · 3% zasila Pościg · packs otwierają się przy blokadzie",
  "shell.board.metaClosed": "Jeden kafelek wygrywa pulę zgodnie z weryfikowalnie ważonymi szansami.",
  "shell.board.reopenReveal": "↗ Otwórz odsłonę ponownie",
  "shell.connectNudge":
    "Wejdź do gry i wpłać środki, żeby zacząć obstawiać kafelki. Rundy toczą się dalej w tle.",
  "shell.decision.cardFallback": "Twoja karta",
  "shell.mobile.close": "Zamknij",
  "shell.mobile.chat": "Czat",
  "shell.mobile.chatOpenAria": "Otwórz czat stolika",
  "shell.mobile.chatCloseAria": "Zamknij czat stolika",
  "shell.mobile.cards": "Karty",
  "shell.mobile.cardsOpenAria": "Otwórz swoje karty, żeby je sprzedać albo wypłacić",
  "shell.mobile.cardsCloseAria": "Zamknij swoje karty",
  "shell.mobile.players": "Gracze",
  "shell.mobile.playersOpenAria": "Otwórz graczy, uszeregowanych według obstawionej kwoty",
  "shell.mobile.playersCloseAria": "Zamknij graczy",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "USDC w grze",
  "runtime.rail.privySessionCredit": "Kredyt sesji Privy",
  "runtime.rail.houseCredit": "kredyt banku",
  "runtime.rail.connectPrivy": "Połącz Privy, żeby dodać USDC w grze",
  "runtime.rail.privySession": "Sesja Privy",
  "runtime.rail.depositAction": "Dodaj +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Konto Privy",
  "runtime.rail.house": "Bank",
  "runtime.rail.depositReceipt": "Potwierdzenie {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Dotknij dowolny pack, żeby postawić {amount}. Każdy kafelek ma też własne +{low} / +{high}.",
  "runtime.rail.sellBack": "Odsprzedaj → +{amount} do salda",

  // runtime.recap.* — royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "Ty",
  "runtime.recap.topBacker": "Największy obstawiający",
  "runtime.recap.topCardOutcome": "najlepsza karta · decyzja: zatrzymaj/sprzedaj",
  "runtime.recap.backer": "Obstawiający",
  "runtime.recap.cardWon": "wygrana karta",
  "runtime.recap.chaseLootReleased": "Łup Pościgu uwolniony",
  "runtime.recap.theChase": "Pościg",
  "runtime.recap.sweptIntoVault": "trafiła do skarbca",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "opłata protokołu",
  "runtime.recap.soldBack": "Odsprzedana",
  "runtime.recap.intoSplit": "+{amount} do podziału",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "Połączenie z X nie jest jeszcze dostępne.",
  "runtime.xProfile.connected": "Połączono",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Nieznana karta",

  // runtime.winShare.* — royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "WYGRANA",
  "runtime.winShare.headlineGrailPull": "TRAF GRAIL",
  "runtime.winShare.headlineCardsWon": "WYGRANE KARTY",
  "runtime.winShare.cardInImage": "Karta na obrazie.",
  "runtime.winShare.receiptInImage": "Potwierdzenie na obrazie.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Wypłaty są teraz offline. Żadne środki się nie przesunęły.",
  "runtime.serverWallet.noSigner": "Do tej sesji nie podłączono portfela do podpisu. Żadne środki się nie przesunęły.",
  "runtime.serverWallet.nonceUnavailable": "Nie udało się pobrać z serwera nonce autoryzacji wypłaty.",
  "runtime.serverWallet.signatureUnavailable": "Portfel nie zwrócił podpisu dla nonce wypłaty.",
  "runtime.serverWallet.boundaryLabel": "Kredyty stolika i USDC portfela serwera to osobne salda.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Nagrywanie ekranu nie jest dostępne w tej przeglądarce.",
  "runtime.video.noRecorderFormat": "Ta przeglądarka nie ma żadnego formatu wideo MediaRecorder.",
  "runtime.video.canceled": "Renderowanie anulowane.",
  "runtime.video.unreachable": "Nie udało się połączyć z usługą renderowania pod adresem {url}.",
  "runtime.video.rejected": "Usługa renderowania odrzuciła tę rundę: {detail}",
  "runtime.video.requestFailed": "Żądanie renderowania nie powiodło się ({status}).",
  "runtime.video.noJobId": "Usługa renderowania nie zwróciła identyfikatora zadania.",
  "runtime.video.lostJob": "Utracono zadanie renderowania ({status}).",
  "runtime.video.lostContact": "Utracono kontakt z usługą renderowania w trakcie renderowania.",
  "runtime.video.renderFailed": "Renderowanie nie powiodło się: {error}.",
  "runtime.video.unknownError": "nieznany błąd",
  "runtime.video.downloadFailed": "Wideo zostało ukończone, ale nie udało się go pobrać.",
  "runtime.video.downloadHttpFailed": "Wideo zostało ukończone, ale pobieranie nie powiodło się ({status}).",
  "runtime.video.emptyVideo": "Usługa renderowania zwróciła puste wideo.",
  "runtime.video.shareTagline": "Bitwa pack, każde losowanie do zweryfikowania. Obejrzyj rundę:",

  // runtime.game.* — useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "Pokój aktywny. Rundy startują automatycznie - {seconds}s otwarcia, potem odsłona.",
  "runtime.game.chaseVault": "Skarbiec Pościgu",
  "runtime.game.aTile": "kafelek",
  "runtime.game.aPack": "pack",
  "runtime.game.theCard": "karta",
  "runtime.game.collectedSplit": "Runda {round} · odebrano {amount} USDC z podziału.",
  "runtime.game.chaseDropSplit": "Runda {round} · Pościg spuścił {award} na Twój kafelek · Twój udział: {amount} USDC.",
  "runtime.game.grailSecured": "Grail zabezpieczony: zatrzymano {card} ({amount}) w Twojej kolekcji.",
  "runtime.game.keptCard": "Zatrzymano {card} ({amount}) → dodano do Twojej kolekcji.",
  "runtime.game.soldCardSettle": "Odsprzedano {card} za {amount} USDC ({pct}% z {value}).",
  "runtime.game.roundVoidedRefund":
    "Runda {round} unieważniona. Żaden pack się nie otworzył, więc nie było losowania na podstawie wartości kart. Twoja stawka {amount} została zwrócona.",
  "runtime.game.roundVoidedAll":
    "Runda {round} unieważniona. Żaden pack się nie otworzył, więc nie było losowania na podstawie wartości kart. Wszystkie stawki zostały zwrócone.",
  "runtime.game.chaseFiredYours.one": "Pościg odpalił: {n} karta ({amount}) trafiła na Twój kafelek {tile}.",
  "runtime.game.chaseFiredYours.other": "Pościg odpalił: {n} kart ({amount}) trafiło na Twój kafelek {tile}.",
  "runtime.game.chaseFiredTable.one":
    "Pościg odpalił w rundzie {round}: {award} + {n} karta spadła na {tile}, podzielona między jego obstawiających.",
  "runtime.game.chaseFiredTable.other":
    "Pościg odpalił w rundzie {round}: {award} + {n} kart spadło na {tile}, podzielone między jego obstawiających.",
  "runtime.game.cardsAssigned.one": "{n} karta przypisana do Ciebie ({amount}) → kolekcja.",
  "runtime.game.cardsAssigned.other": "{n} kart przypisanych do Ciebie ({amount}) → kolekcja.",
  "runtime.game.cardPoolsLive": "Pule kart aktywne: {cards} kart w {pools} pulach automatów CollectorCrypt.",
  "runtime.game.minBid": "Minimalny zakład to {amount}. Podnieś stawkę i spróbuj ponownie.",
  "runtime.game.resolveFailed": "Tej rundy nie udało się rozstrzygnąć, więc nic nie rozliczono. Następna runda zacznie się normalnie.",
  "runtime.game.stakeRefused": "Ten zakład jest za duży na {tile}. Nic nie pobrano. Zmniejsz go i spróbuj ponownie.",
  "runtime.game.shortfallBack":
    "Za mało USDC, żeby obstawić {tile} kwotą {amount}. Masz {held}. Dodaj środki, żeby kontynuować.",
  "runtime.game.shortfallNextPack":
    "Za mało USDC, żeby dopełnić kolejny pack na {tile}. Potrzeba {amount}, masz {held}. Dodaj środki, żeby kontynuować.",
  "runtime.game.youBacked": "Obstawiono {tile} kwotą {amount}.",
  "runtime.game.packCompleted": "Dopełniono kolejny pack na {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Sprzedano {cards} za {amount} USDC (odkup CC), żeby sfinansować zakład.",
  "runtime.game.backedFunded": "Obstawiono {tile} kwotą {amount} (sfinansowano z inwentarza).",
  "runtime.game.demoStakesRefunded":
    "Wyzerowano stawki demo: {amount}, które kliknięto, zostało zwrócone. Start od $0.",
  "runtime.game.demoStakesCleared": "Wyzerowano stawki demo: każda runda zaczyna się od $0, dopóki nie obstawisz kafelka.",
  "runtime.game.deposited": "Wpłacono {amount} USDC na Twój portfel.",
  "runtime.game.referralBonus": "Naliczono bonus za polecenie: +{amount} USDC.",
  "runtime.game.signedAndSent": "Podpisano i wysłano {amount} USDC w {cluster} · podpis {sig}….",
  "runtime.game.signedNoBroadcast":
    "Podpisano {amount} USDC w {cluster} ({method}, bez transmisji na łańcuch) · podpis {sig}….",
  "runtime.game.soldCard": "Sprzedano {card} za {amount} USDC (odkup {pct}%).",
} as Record<string, string>;
