// Polish (Polski): "arena" segment - every user-visible string from
// pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel surface: the rail,
// the wheel stage + leader-line callouts, the clock, the snipe tray, the
// double-bid opt-in dialog, and the lock->reveal cinema's three beats).
//
// See pl/core.ts for the binding terminology glossary and the register /
// gendered-past-tense notes. "Snipe" (a last-second targeted bid) is
// translated as "zasadzka" (ambush) throughout this segment - arm/disarm =
// uzbroić/rozbroić, matching board.ts's auto-bet "arm" vocabulary.
export default {
  "arena.you": "TY",
  "arena.youAvatarLetter": "T",
  "arena.common.card": "karta",
  "arena.common.cards": "karty",
  "arena.matchLabel": "MECZ #{n}",
  "arena.pageTitle": "Arena kart",
  "arena.backToBoard": "← Wróć do planszy",

  "arena.rail.ariaLabel": "Twoja kolekcja",
  "arena.rail.heading": "TWOJA KOLEKCJA",
  "arena.rail.practiceNote": "Zestaw treningowy. Wygrywaj rundy na planszy, żeby zapełnić ten pasek własnymi kartami.",
  "arena.rail.emptyNote": "Brak kart w ręku. Wygraj pulę, żeby odzyskać swój udział.",
  "arena.rail.enterWheel": "WEJDŹ NA KOŁO",
  "arena.rail.armSnipe": "UZBRÓJ ZASADZKĘ",
  "arena.rail.hint": "Kliknij dwukrotnie kartę, żeby ją postawić. Albo zaznacz karty i naciśnij WEJDŹ NA KOŁO. Spacja zaznacza, A uzbraja zasadzkę.",

  "arena.railCard.armedSuffix": "Uzbrojona do zasadzki.",
  "arena.railCard.hint": "Spacja ją zaznacza, A uzbraja zasadzkę. Kliknij dwukrotnie, żeby postawić ją na arenie.",
  "arena.railCard.armedTag": "UZBROJONA",

  "arena.snipe.trayHeading": "ZASADZKA UZBROJONA",
  "arena.snipe.disarm": "ROZBRÓJ",
  "arena.snipe.firesAt": "Odpala na T-minus 2s",
  "arena.snipe.carries": "Przechodzi do następnego meczu",

  "arena.board.sectionAriaLabel": "Koło areny",
  "arena.board.noCap": "Bez limitu kart. Jedyną blokadą jest zegar.",
  "arena.board.wheelDecides": "Koło decyduje",
  "arena.board.nextMatchLabel": "Następny mecz za",
  "arena.board.potLabel": "PULA",
  "arena.board.wheelAriaEnter": "Wprowadź na koło zaznaczone {cardWord} ({count})",
  "arena.board.wheelAriaIdle": "Koło. Zaznacz karty z Twojej kolekcji, żeby je wprowadzić.",
  "arena.board.youWin": "WYGRYWASZ",
  "arena.board.nameWins": "{name} WYGRYWA",
  "arena.board.emptyWheelNote": "Koło jest otwarte. Stawką są karty, nie gotówka: udział wartości wyznacza Twój łuk i szanse. Pościg bierze 0%. Protokół stosuje regułę opłaty 7% w całych kartach; zwycięzca otrzymuje wszystkie pozostałe karty.",
  "arena.board.tableHint": "Twoje zgłoszenia jadą na kole jako Twój udział wartości. Twój łuk to Twoje szanse.",
  "arena.board.resultsLink": "Zobacz wyniki ostatniej rundy →",

  "arena.clock.locked": "ZABLOKOWANE",
  "arena.clock.settled": "ROZLICZONE",
  "arena.clock.locksIn": "BLOKADA ZA",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Zamknij pokaz",
  "arena.cinema.closeTitle": "Zamknij (Esc)",
  "arena.cinema.beatCopy.contestants": "ZAWODNICY",
  "arena.cinema.beatCopy.spin": "OBRÓT",
  "arena.cinema.beatCopy.settle": "ROZLICZENIE",
  "arena.cinema.beatCopyShort.contestants": "GRACZE",
  "arena.cinema.beatCopyShort.spin": "OBRÓT",
  "arena.cinema.beatCopyShort.settle": "ROZLICZENIE",
  "arena.cinema.contestantsAriaLabel": "Zawodnicy",
  "arena.cinema.contestantsHeadline": "ZAWODNICY",
  "arena.cinema.oddsToWin": "{pct}% SZANS NA WYGRANĄ",
  "arena.cinema.hintContestants": "Koło decyduje. Kliknij, żeby zakręcić już teraz.",
  "arena.cinema.spinAriaLabel": "Obrót koła",
  "arena.cinema.lockedOn": "ZABLOKOWANO NA",
  "arena.cinema.hintSpin": "Kliknij, żeby pominąć obrót.",
  "arena.cinema.settleAriaLabel": "Rozliczenie",
  "arena.cinema.winnerTag": "ZWYCIĘZCA",
  "arena.cinema.youTakePot": "ZGARNIASZ PULĘ",
  "arena.cinema.takesPot": "ZGARNIA PULĘ",
  "arena.cinema.shelfWinner": "DO ZWYCIĘZCY",
  "arena.cinema.shelfChase": "POŚCIG",
  "arena.cinema.shelfProtocol": "PROTOKÓŁ",
  "arena.cinema.smallPotNote": "Pościg nic nie bierze. Reguła protokołu 7% wybrała {count} {cardWord}; zwycięzca otrzymuje wszystkie pozostałe karty.",
  "arena.cinema.resultsLink": "Zobacz wyniki ostatniej rundy",
  "arena.cinema.hintSettle": "Kliknij gdziekolwiek, żeby wrócić na arenę.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} do zwycięzcy",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Automatyczny zakład przy podwójnym kliknięciu?",
  "arena.doubleBid.body": "Kliknij dwukrotnie kartę w Twojej kolekcji, żeby postawić ją prosto na arenie. Włączyć to?",
  "arena.doubleBid.enable": "Włącz",
  "arena.doubleBid.dismiss": "Nie teraz",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "ŁĄCZENIE Z CARD ARENA",
  "arena.backend.loadingBody": "Sprawdzamy działające wydanie Areny i twoją sesję gracza…",
  "arena.backend.loadingCollection": "Sprawdzamy twoją kolekcję…",
  "arena.backend.mainnetPreparingTitle": "ARENA MAINNET JEST POŁĄCZONA",
  "arena.backend.mainnetPreparingBody": "Ta dokładna wersja tylko do odczytu działa prawidłowo. Finansowanie, pozyskiwanie kart, wejście, losowanie i rozliczenie pozostają wyłączone.",
  "arena.backend.mainnetPreparingCollection": "Nie kupiono ani nie przeniesiono żadnych kart Mainnet. Arena pozostaje tylko do odczytu, dopóki osobno autoryzowany zasób nie będzie gotowy.",
  "arena.backend.mainnetRelease": "Wersja {commit} · wdrożenie {deployment} · zero podpisów, transmisji, efektów lub duplikatów",
  "arena.backend.unavailableTitle": "CARD ARENA SIĘ AKTUALIZUJE",
  "arena.backend.unavailableBody": "Wejścia są wstrzymane, dopóki dokładnie to wydanie gry nie będzie dostępne. Twoje karty nie zmieniły miejsca.",
  "arena.backend.unavailableCollection": "Kolekcja niedostępna w trakcie aktualizacji Areny.",
  "arena.backend.connectTitle": "POŁĄCZ SIĘ, ABY GRAĆ",
  "arena.backend.connectBody": "Do wczytania kart powiązanych z dostawcą i wejścia na koło potrzebna jest zweryfikowana sesja Privy.",
  "arena.backend.connectCollection": "Połącz sesję gracza, aby wczytać swoje karty.",
  "arena.backend.retry": "SPRÓBUJ PONOWNIE",
} as Record<string, string>;
