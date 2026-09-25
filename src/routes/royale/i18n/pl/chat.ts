// Polish (Polski): "chat" segment. Source of truth for every user-visible
// string owned by RoyaleChatPanel.tsx, RoyaleChatMessageBody.tsx,
// royaleChatModel.ts (ambient chatter pool + table-event copy) and
// royaleChatLinks.ts. Same key set as en/chat.ts. See pl/core.ts for the
// binding terminology glossary (Pościg, traf, "pack" invariant) and the
// register / gendered-past-tense notes. "Snipe"/"sniping" (ambient chatter
// slang for a last-second bid) is translated as "zasadzka" (ambush),
// matching arena.ts's choice.
//
// LOCALE-FROZEN NOTE: chat messages are composed ONCE at post time and stored
// as plain strings - switching languages mid-session never rewrites already
// posted lines. This is expected, not a bug.
export default {
  "chat.rooms.table": "Stół",
  "chat.rooms.sendTo": "Wyślij do",
  "chat.rooms.joinHint": "Postaw na polu, aby odblokować jego pokój.",
  "chat.rooms.messageTargets": "Pokoje wiadomości",
  "chat.composer.sendFailed": "Nie wysłano wiadomości. Spróbuj ponownie.",
  "chat.composer.audienceChanged": "Pokój się zmienił. Niewysłana wiadomość została usunięta.",
  "chat.composer.sessionUnavailable": "Sesja czatu jest niedostępna. Odśwież stronę i spróbuj ponownie.",
  "chat.auth.tileLeadBold": "Postaw na pole, aby czatować",
  "chat.auth.tileBody": ". Stół i pokoje pól odblokują się po pierwszym zaakceptowanym packu.",
  "chat.auth.sessionUnavailableBold": "Sesja czatu jest niedostępna",
  "chat.auth.sessionUnavailableBody": ". Odśwież stronę, aby przywrócić bezpieczne wysyłanie.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Czat stolika",
  "chat.header.title": "Czat stolika",
  "chat.header.fontControlAriaLabel": "Rozmiar tekstu czatu",
  "chat.header.fontSmaller": "Zmniejsz rozmiar tekstu czatu",
  "chat.header.fontLarger": "Zwiększ rozmiar tekstu czatu",
  "chat.header.collapseShow": "Pokaż czat",
  "chat.header.collapseHide": "Ukryj czat",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "TRAF GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "RUNDA #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Otwiera wynik rundy w nowej karcie.",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "wygrana przez",
  "chat.event.wonBy": "wygrana przez {name}",
  "chat.event.foldedIntoPot": "wliczona do puli",
  "chat.event.roundWinsTitle": "{tile} wygrywa {pot}",
  "chat.event.bestPull": "najlepszy traf {name} ({value})",
  "chat.event.chaseAward": "Pościg +{amount}",
  "chat.event.youWon": "Ty +{amount}",
  "chat.event.youLost": "przegrana",
  "chat.message.showOriginal": "przetłumaczono · pokaż oryginał",
  "chat.message.showTranslation": "pokaż tłumaczenie",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Przejdź do najnowszych",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Tylko linki attn wyświetlają się tutaj.",
  "chat.composer.rateLimitNotice": "Wysyłasz trochę za szybko. Spróbuj ponownie za chwilę.",
  "chat.composer.placeholder": "Napisz coś…",
  "chat.composer.inputAriaLabel": "Wiadomość czatu",
  "chat.composer.sendAriaLabel": "Wyślij wiadomość",
  "chat.composer.sendLabel": "Wyślij",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Zaloguj się, żeby pisać na czacie",
  "chat.auth.body": ", pokój jest tylko do odczytu, dopóki się nie połączysz (prawy górny róg).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Otwiera stronę karty w nowej karcie",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Otwiera stronę karty w karcie w tle.",
  "chat.messageBody.viewCard": "Zobacz kartę",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Strona karty",
  "chat.link.roundResult": "Wynik rundy",
  "chat.link.profile": "Profil",
  "chat.link.collection": "Kolekcja",
  "chat.link.theBoard": "Plansza",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "kafelek 3 zapełnia się szybko",
  "chat.chatter.line02": "kto ciągle robi zasadzkę na liderze co rundę",
  "chat.chatter.line03": "ten traf grail w zeszłej rundzie był nierealny",
  "chat.chatter.line04": "łatwa fala - wszyscy na lidera",
  "chat.chatter.line05": "świeży kafelek 7 wygląda na niedowartościowany",
  "chat.chatter.line06": "trzymam swoje packs na ostatnie pięć sekund",
  "chat.chatter.line07": "ktoś właśnie rzucił $250 na kafelek 2, szacunek",
  "chat.chatter.line08": "udział w puli na kafelku 6 jest teraz mocno przewartościowany",
  "chat.chatter.line09": "jeszcze jeden pack i ten kafelek przechodzi na bogatszy poziom",
  "chat.chatter.line10": "znowu ktoś psuje mi szanse zasadzką",
  "chat.chatter.line11": "ciągle łapię najsłabsze karty, czas na wielki traf",
  "chat.chatter.line12": "patrz na wieloryba - zawsze wskazuje zwycięski kafelek",
  "chat.chatter.line13": "kafelek 1 nie trafił przez całą sesję, czas na niego",
  "chat.chatter.line14": "sprzedałem ostatni traf od razu, odkup wydawał się uczciwy",
  "chat.chatter.line15": "kontr-zasadzka nadchodzi, zapamiętajcie",
  "chat.chatter.line16": "lider zmienił się dwa razy w ostatnich dziesięciu sekundach",
  "chat.chatter.line17": "ktoś jeszcze goni dziś za drabinką Mythic",
  "chat.chatter.line18": "zatrzymałem kartę - ta grafika była zbyt czysta, żeby sprzedać",
  "chat.chatter.line19": "późne packs nigdy nie resetują zegara, uwielbiam to",
  "chat.chatter.line20": "pula kafelka 8 właśnie się podwoiła, coś się szykuje",
  "chat.chatter.line21": "małe packs na start, duże packs na koniec - jedyny słuszny sposób gry",
  "chat.chatter.line22": "ten zegar zatrzymaj/sprzedaj zawsze mnie łapie",
  "chat.chatter.line23": "pretendenci wyglądają teraz na lepszą wartość niż lider",
  "chat.chatter.line24": "czysta zasadzka na kafelku 5, chirurgicznie",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Panel stołu",
  "chat.surface.chat": "Czat",
  "chat.surface.activity": "Moja aktywność",
  "chat.activity.ariaLabel": "Moja prywatna aktywność",
  "chat.activity.filtersAria": "Filtruj aktywność",
  "chat.activity.filter.all": "Wszystko",
  "chat.activity.filter.packs": "Packs",
  "chat.activity.filter.bids": "Zakłady",
  "chat.activity.filter.rewards": "Nagrody",
  "chat.activity.filter.feats": "Osiągnięcia",
  "chat.activity.filter.clan": "Klan",
  "chat.activity.today": "Dzisiaj",
  "chat.activity.yesterday": "Wczoraj",
  "chat.activity.status.pending": "Oczekuje",
  "chat.activity.status.finalized": "Sfinalizowane",
  "chat.activity.status.reversed": "Cofnięte",
  "chat.activity.finalizedAria": "Sfinalizowane potwierdzenie",
  "chat.activity.signInTitle": "Zaloguj się, aby zobaczyć historię",
  "chat.activity.signInBody": "Tu pojawią się Twoje prywatne potwierdzenia z kategorii Packs, Zakłady, Nagrody, Osiągnięcia i Klan.",
  "chat.activity.loading": "Ładowanie potwierdzeń",
  "chat.activity.loadOlder": "Wczytaj starsze",
  "chat.activity.points": "{points} pkt",
  "chat.activity.event.packBid.title": "Zagrany pack",
  "chat.activity.event.packBid.detail": "Zakład na polu {tile} został sfinalizowany.",
  "chat.activity.event.roundWon.title": "Zwycięskie pole",
  "chat.activity.event.roundWon.detail": "Pole {tile} wygrało tę rundę.",
  "chat.activity.event.roundLost.title": "Runda rozliczona",
  "chat.activity.event.roundLost.detail": "Pole {tile} nie wygrało tej rundy.",
  "chat.activity.event.roundRefunded.title": "Pack zwrócony",
  "chat.activity.event.roundRefunded.detail": "Stawka na polu {tile} została zwrócona.",
  "chat.activity.event.chaseWon.title": "Trafienie Pościgu",
  "chat.activity.event.chaseWon.detail": "Pościg na planszy wypłacił nagrodę.",
  "chat.activity.event.achievementDetail": "Odblokowane dzięki Twojej grze.",
  "chat.activity.event.clanAchievementDetail": "Odblokowane wspólnie z Twoim klanem.",
  "chat.activity.unavailableTitle": "Aktywność jest niedostępna",
  "chat.activity.unavailableBody": "Nie udało się wczytać Twoich potwierdzeń. Spróbuj ponownie wczytać prywatny dziennik za chwilę.",
  "chat.activity.retry": "Spróbuj ponownie",
  "chat.activity.emptyTitle": "Na razie nic tu nie ma",
  "chat.activity.emptyBody": "Tu pojawią się sfinalizowane działania z kategorii Packs, Zakłady, Nagrody, Osiągnięcia i Klan.",
  "chat.unlock.eyebrow": "Odblokowano osiągnięcie",
  "chat.unlock.clanEyebrow": "Odblokowano osiągnięcie klanu",
  "chat.unlock.dismiss": "Zamknij osiągnięcie",
} as Record<string, string>;
