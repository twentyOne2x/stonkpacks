// Polish (Polski): "onboarding" segment. Owns RoyaleOnboardingGate.tsx (the
// invite + $25 Starter pack + profile gate), RoyaleWelcomeTour.tsx (the
// 4-step how-it-works tour), RoyaleRotateGate.tsx (the mobile-portrait rotate
// prompt), and RoyaleSettingsOverlay.tsx's two chrome strings, plus
// royaleProfile.ts's profile-form validation reasons, RoyalePresenceChip.tsx,
// RoyaleLiveStreamHud.tsx, RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx and
// RoyaleFundShortfallToast.tsx. Same key set as en/onboarding.ts.
// See pl/core.ts for the binding terminology glossary and the register /
// gendered-past-tense notes. "attn ROYALE" and "Starter" (the pack tier name)
// stay English verbatim, mid-sentence included.
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "zaproszenie",
  "onboarding.invite.title": "Tylko na zaproszenie",
  "onboarding.invite.ledeStake": "attn ROYALE jest na razie tylko na zaproszenia. Wpisz swój kod, żeby odebrać stawkę {amount} i zająć miejsce przy stole.",
  "onboarding.invite.ledeStarter": "attn ROYALE jest na razie tylko na zaproszenia. Wpisz swój kod, żeby odebrać darmowy pack Starter za {amount} i zająć miejsce przy stole.",
  "onboarding.invite.inputPlaceholder": "KOD ZAPROSZENIA",
  "onboarding.invite.inputAriaLabel": "Kod zaproszenia",
  "onboarding.invite.unlockButton": "Odblokuj",
  "onboarding.invite.hint": "Nie masz jeszcze kodu? Zapytaj osobę, która Cię zaprosiła, albo wklej swój link {link}.",
  "onboarding.invite.errorInvalidCode": "Wpisz kod zaproszenia z Twojego zaproszenia.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "kredyt",
  "onboarding.welcome.grantLabelStarterPack": "pack Starter",
  "onboarding.welcome.titleBack": "Witaj ponownie",
  "onboarding.welcome.title": "Witaj przy stole",
  "onboarding.welcome.backLede": "Wróć tam, gdzie skończyłeś, {name}. Twój profil i saldo są zapisane na tym urządzeniu.",
  "onboarding.welcome.fallbackName": "gracz",
  "onboarding.welcome.ledeStake": "Twoje zaproszenie daje stawkę {amount}. Ustaw nazwę i zajmij miejsce.",
  "onboarding.welcome.ledeStarter": "Twoje zaproszenie daje darmowy pack Starter za {amount}. Stawiaj packs i zajmij miejsce.",
  "onboarding.welcome.continueWithX": "Kontynuuj z X",
  "onboarding.welcome.optionalHint": "opcjonalnie",
  "onboarding.welcome.connectWallet": "Połącz portfel",
  "onboarding.welcome.playFreeNote": "Graj za darmo już teraz. Bez portfela i logowania.",
  "onboarding.welcome.or": "albo",
  "onboarding.welcome.continueAsTemplate": "Kontynuuj jako {name}",
  "onboarding.welcome.fallbackProfileName": "Twój profil",
  "onboarding.welcome.close": "Zamknij",
  "onboarding.welcome.createProfile": "Utwórz swój profil",
  "onboarding.welcome.skipGuest": "Pomiń i graj jako gość",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Zagraj teraz",
  "onboarding.welcome.pickNameFirst": "Albo najpierw wybierz nazwę",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Skonfiguruj swój profil",
  "onboarding.profile.xPhotoAlt": "Twoje zdjęcie profilowe z X",
  "onboarding.profile.connectedAsTemplate": "Połączono jako {handle}",
  "onboarding.profile.xAccountFallback": "Konto X",
  "onboarding.profile.walletLabelTemplate": "Portfel {address}",
  "onboarding.profile.displayNameLabel": "Wyświetlana nazwa",
  "onboarding.profile.displayNamePlaceholder": "Jak mamy Cię nazywać?",
  "onboarding.profile.handleLabel": "Identyfikator",
  "onboarding.profile.handlePlaceholder": "twojanazwa",
  "onboarding.profile.handleHint": "Twój unikalny identyfikator przy stole. Litery, cyfry i podkreślenia.",
  "onboarding.profile.handleTaken": "Ten identyfikator jest już używany na tym urządzeniu.",
  "onboarding.profile.startButtonTemplate": "Zacznij grać · {amount} od banku",
  "onboarding.profile.back": "Wstecz",
  "onboarding.profile.skip": "Pomiń",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "Jak działa attn ROYALE",
  "onboarding.tour.skip": "Pomiń",
  "onboarding.tour.step1.eyebrow": "01 · Obstaw kafelek",
  "onboarding.tour.step1.titleUsdc": "Dokładaj USDC do kafelków, które lubisz",
  "onboarding.tour.step1.titlePacks": "Obstawiaj packs na kafelkach, które lubisz",
  "onboarding.tour.step1.bodyUsdc": "Każdy kafelek to slot, który obstawiasz USDC. Im więcej dołożysz do kafelka, tym większy Twój udział w jego wygranej. Postaw wszystko na jeden albo rozłóż na kilka.",
  "onboarding.tour.step1.bodyPacks": "Każdy kafelek to slot, na który stawiasz packs. Im więcej packs dołożysz do kafelka, tym większy Twój udział w jego wygranej. Załaduj wszystko na jeden albo rozłóż na kilka.",
  "onboarding.tour.step2.eyebrow": "02 · Blokada i otwarcie",
  "onboarding.tour.step2.title": "Przy blokadzie każdy kafelek rozrywa swoje packs",
  "onboarding.tour.step2.body": "Gdy runda się blokuje, każdy obstawiony kafelek rozrywa swoje packs i na żywo wyciąga prawdziwe, ocenione karty, w weryfikowalnym losowaniu, na Twoich oczach.",
  "onboarding.tour.step3.eyebrow": "03 · Wygrywa największa wartość",
  "onboarding.tour.step3.title": "Najbogatszy kafelek zgarnia pulę",
  "onboarding.tour.step3.bodyUsdc": "Waga każdego kafelka to wartość wyciągniętych kart plus jego USDC. Im cięższy kafelek, tym lepsze jego szanse. Wygraj, a podzielisz się całą pulą rundy.",
  "onboarding.tour.step3.bodyPacks": "Waga każdego kafelka to wartość wyciągniętych kart plus packs na nim postawione. Im cięższy kafelek, tym lepsze jego szanse. Wygraj, a podzielisz się całą pulą rundy.",
  "onboarding.tour.step4.eyebrow": "04 · Zatrzymaj, sprzedaj, ścigaj",
  "onboarding.tour.step4.title": "Wypłać się i obserwuj Pościg",
  "onboarding.tour.step4.body": "Zatrzymaj wygrane karty jako ocenione karty albo odsprzedaj je po cenie odkupu. A Pościg to narastający jackpot, który może spaść na dowolny kafelek, w dowolnej rundzie.",
  "onboarding.tour.back": "Wstecz",
  "onboarding.tour.next": "Dalej",
  "onboarding.tour.enterBoard": "Wejdź na planszę",

  // --- RoyaleWelcomeTour.tsx v2: SPOTLIGHT guided tour (owner 2026-07-31:
  // "highlight the sections, darken the others that arent being introduced,
  // and show the items with an arrow and a description"). Seven coach-mark
  // steps anchored to the LIVE board. The v1 step1-step4 keys above stay
  // (append-only contract) but are no longer rendered. {amount} in spot7 is
  // the free Starter grant (FREE_PLAY_STARTING_USD, currency-formatted by the
  // component). spot3 ships touch variants: the component picks *Touch on
  // coarse pointers, where betting is tap-to-arm then tap-to-confirm.
  // PACKS framing only (owner: "its not chip usdc for now ... its bet packs");
  // a USDC-live pass would add Usdc variants like the v1 keys had.
  "onboarding.tour.stepTag": "Krok {n} z {total}",
  "onboarding.tour.spot1.eyebrow": "Twój zakład",
  "onboarding.tour.spot1.title": "Wybierz swój pack",
  "onboarding.tour.spot1.body": "Stawiasz packi. Każdy to zapieczętowany pack z ocenianymi kartami TCG, wspierany przez Collector Crypt. Wybierz pack, którym chcesz zagrać.",
  "onboarding.tour.spot2.eyebrow": "Wielkość stosu",
  "onboarding.tour.spot2.title": "Wybierz ile",
  "onboarding.tour.spot2.body": "Ten licznik ustawia, ile packs stawia każdy zakład. Jeden w zupełności wystarczy na początek. Zwiększ go, gdy zechcesz postawić więcej.",
  "onboarding.tour.spot3.eyebrow": "Postaw zakład",
  "onboarding.tour.spot3.title": "Kliknij kafelek, żeby go obstawić",
  "onboarding.tour.spot3.titleTouch": "Dotknij kafelek, żeby go obstawić",
  "onboarding.tour.spot3.body": "Kliknięcie kafelka kładzie na nim Twoje packs. Im więcej packs dołożysz do kafelka, tym większy Twój udział, jeśli wygra. Obstaw jeden mocno albo rozłóż na kilka.",
  "onboarding.tour.spot3.bodyTouch": "Dotknij kafelek raz, żeby go przygotować, potem dotknij ponownie, żeby potwierdzić zakład. Im więcej packs dołożysz do kafelka, tym większy Twój udział, jeśli wygra.",
  "onboarding.tour.spot4.eyebrow": "Runda",
  "onboarding.tour.spot4.title": "Pula i zegar",
  "onboarding.tour.spot4.body": "Każdy pack postawiony na planszy zasila tę pulę. Gdy zegar dobije do zera, zakłady się blokują, a każdy obstawiony kafelek na żywo rozrywa swoje packs.",
  "onboarding.tour.spot5.eyebrow": "Losowanie",
  "onboarding.tour.spot5.title": "Ciężkie kafelki wygrywają częściej",
  "onboarding.tour.spot5.body": "Losowe, ważone wartością losowanie wybiera jeden kafelek. Przegrane kafelki oddają karty i stawki; obstawiający zwycięski kafelek dzielą wartość rundy przeznaczoną do podziału proporcjonalnie do swoich wkładów.",
  "onboarding.tour.spot6.eyebrow": "Twoje pieniądze",
  "onboarding.tour.spot6.title": "Saldo i wpłaty",
  "onboarding.tour.spot6.body": "Tutaj mieszka Twoje saldo. Dodaj środki przyciskiem Wpłać i wypłacaj, kiedy chcesz. Wygrane lądują tutaj w chwili rozliczenia rundy.",
  "onboarding.tour.spot7.eyebrow": "Od banku",
  "onboarding.tour.spot7.title": "Twój darmowy pack Starter za {amount}",
  "onboarding.tour.spot7.body": "Zaczynasz z darmowym pack Starter za {amount}. Jest już wczytany w selektorze. Wybierz kafelek, który lubisz, i zaczynaj.",
  "onboarding.tour.finish": "Zacznij grać",
 "onboarding.tour.paused": "Runda się zaczyna - wrócimy do trasy zaraz potem.",
  "onboarding.tour.act2.choice": "Zobacz przebieg rundy",
  "onboarding.tour.act2.choiceHint": "Około 30 sekund, razem z odsłoną",
  "onboarding.tour.act2.bettingTitle": "Każdy postawiony pack tworzy jedną pulę",
  "onboarding.tour.act2.bettingBody": "Gracze układają packs na kafelkach. Każdy pack na planszy zasila jedną pulę, a jeden kafelek bierze wszystko.",
  "onboarding.tour.act2.drawTitle": "Wartość staje się szansą",
  "onboarding.tour.act2.drawBody": "Udział każdego kafelka w wartości wszystkich wyciągniętych kart to jego szansa. Jedno weryfikowalne, ważone wartością losowanie wybiera zwycięzcę.",
  "onboarding.tour.act2.losersTitle": "Każdy przegrany kafelek oddaje swoje karty",
  "onboarding.tour.act2.losersBody": "Karty i gotówka przeznaczone do podziału z całej planszy trafiają do obstawiających zwycięski kafelek.",
  "onboarding.tour.act2.splitTitle": "Twoja stawka wyznacza twój kawałek",
  "onboarding.tour.act2.splitBody": "Obstawiający zwycięski kafelek dzielą gotówkę i karty rundy przeznaczone do podziału ze wszystkich kafelków, proporcjonalnie do wkładu każdego z nich w ten kafelek.",
  "onboarding.tour.act2.grailCaption": "Ceremonia graila",
  "onboarding.tour.act2.yourTurnEyebrow": "Twoja kolej",
  "onboarding.tour.act2.yourTurnTitle": "Twój Starter pack jest gotowy",
  "onboarding.tour.act2.yourTurnBody": "Plansza znów jest na żywo. Wybierz pole i połóż swój pierwszy zakład packiem.",
  "onboarding.tour.act2.continue": "Wejdź do rundy",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "Obróć telefon, żeby zagrać w attn ROYALE",
  "onboarding.rotate.title": "Obróć telefon bokiem",
  "onboarding.rotate.body": "Plansza działa najlepiej w poziomie. Obróć telefon, żeby wejść do rundy.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "Ustawienia",
  "onboarding.settingsClose": "Zamknij ustawienia",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "Wybierz identyfikator, żeby inni gracze mogli Cię znaleźć.",
  "onboarding.profileValidation.handleTooShort": "Identyfikator musi mieć co najmniej 3 znaki.",
  "onboarding.profileValidation.handleCharset": "Używaj tylko liter, cyfr i podkreśleń.",
  "onboarding.profileValidation.nameRequired": "Dodaj nazwę, która pojawi się przy stole.",
  "onboarding.profileValidation.nameTooLong": "Zmieść się poniżej {n} znaków.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "oglądających",
  "onboarding.presence.tierPlaying": "grających",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "Grasz: {amount} postawione w tej rundzie",
  "onboarding.presence.youWatching": "Oglądasz",
  "onboarding.presence.youWatchingBackground": "Oglądasz (karta w tle)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "{count} {tier} attn ROYALE w tej chwili. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "Ty: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} kolejna Twoja otwarta karta",
  "onboarding.presence.otherTabs.other": "+{n} kolejnych Twoich otwartych kart",
  "onboarding.presence.othersBacking.one": "{n} inny obstawia kafelek w tej rundzie",
  "onboarding.presence.othersBacking.other": "{n} innych obstawia kafelek w tej rundzie",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Stan transmisji attn ROYALE",
  "onboarding.streamHud.eyebrow": "Transmisja",
  "onboarding.streamHud.statusConnecting": "Łączenie",
  "onboarding.streamHud.statusLive": "Na żywo",
  "onboarding.streamHud.statusReconnecting": "Ponowne łączenie",
  "onboarding.streamHud.statusError": "Problem z synchronizacją",
  "onboarding.streamHud.reconnects.one": "{n} ponowne połączenie",
  "onboarding.streamHud.reconnects.other": "{n} ponownych połączeń",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "Ten pokój rozlicza się w USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Otwarte karty",
  "onboarding.carousel.prevCard": "Poprzednia karta",
  "onboarding.carousel.nextCard": "Następna karta",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Pokaż {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "ZA MAŁO USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "Obstawienie {slot} wymaga {needed}. Masz {balance}.",
  "onboarding.fundShortfall.addFunds": "Dodaj środki",
  "onboarding.fundShortfall.dismiss": "Zamknij",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "Dotknij {icon}, a potem Dodaj do ekranu głównego, żeby uzyskać prawdziwy pełny ekran.",
  "onboarding.installHint.fullscreen": "Przejdź na pełny ekran i ukryj pasek przeglądarki.",
  "onboarding.installHint.fullscreenCta": "Pełny ekran",
  "onboarding.installHint.dismiss": "Zamknij",
} as Record<string, string>;
