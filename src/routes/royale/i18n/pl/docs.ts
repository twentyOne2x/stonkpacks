// Polish (Polski): "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Same key set as en/docs.ts. See pl/core.ts for the binding terminology
// glossary (runda, pula, Pościg, kafelek, obstawiający, drobne, "pack"
// invariant) and the register / gendered-past-tense notes.
//
// BOLD EMPHASIS (docs.howItWorks.* only): values keep the inline `**bold**`
// markers from en, moved onto whichever Polish words carry the emphasis,
// pairs kept balanced.
//
// NO SOURCE-FILE CITATIONS and NO "HEAT": per the en header, nothing here
// names a file/path/module, and the loose-money mechanic (key names keep
// their historical "heatRemainder" spelling, never rendered) is always
// "drobne" (loose change), never "heat" / "upał".
export default {
  "docs.header.title": "Zasady",
  "docs.header.back": "← Wróć do planszy",

  "docs.tabs.ariaLabel": "Widok zasad",
  "docs.tabs.how": "Jak to działa",
  "docs.tabs.technical": "Techniczne",

  "docs.how.intro": "Wersja w prostym języku. Przeczytaj to najpierw, a potem przejdź do zakładki Techniczne po dokładne mechaniki.",
  "docs.technical.intro": "Dokładne mechaniki, w prostych liczbach.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "Czym jest attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "Gra na żywo w otwieranie packs. W każdej rundzie gracze stawiają packs na kafelkach. Gdy runda się blokuje, każdy obstawiony kafelek na żywo rozrywa swoje packs, a obstawiający jednego kafelka dzielą się całą pulą.",

  "docs.how.whatIsPack.q": "Czym jest pack?",
  "docs.how.whatIsPack.a":
    "Wyceniony poziom, który w chwili otwarcia swojego kafelka rozrywa się w jedną prawdziwą, ocenioną kartę. Drabinka poziomów to {starter}, {elite}, {legendary}, {grail} i {mythic}. Większe packs dają większe karty.",

  "docs.how.howBacking.q": "Jak działa obstawianie kafelka?",
  "docs.how.howBacking.a":
    "Wybierz kafelek, który lubisz, i postaw na niego packs. Jeśli obstawiasz ten sam kafelek razem z innymi graczami, dzielicie się nim: Twój kawałek wygranej tego kafelka odpowiada udziałowi packs, które osobiście dołożyłeś.",

  "docs.how.heatRemainder.q": "Co, jeśli mój zakład nie sumuje się do całego pack?",
  "docs.how.heatRemainder.a":
    "Wszystko poniżej ceny najtańszego pack zostaje na kafelku jako drobne. Jedzie razem z resztą Twojej stawki, ale nie otwiera własnej karty, dopóki nie uzbiera się w cały pack, a to właśnie otwarte karty decydują o szansach.",

  "docs.how.howWheelPicks.q": "Jak koło wybiera zwycięzcę?",
  "docs.how.howWheelPicks.a":
    "Przy blokadzie każdy obstawiony kafelek na żywo rozrywa swoje packs. Koło ląduje potem na jednym kafelku, a im cenniejsze otwarte karty tego kafelka, tym większy jego kawałek koła. Jeden wielki traf może zrobić z małego kafelka faworyta. Sam wybór pochodzi z weryfikowalnego losowego losowania, nigdy od człowieka.",

  "docs.how.whatDoIWin.q": "Co wygrywam?",
  "docs.how.whatDoIWin.aBefore": "Obstawiający zwycięski kafelek dzielą się",
  "docs.how.whatDoIWin.aEmphasis": "całą pulą rundy",
  "docs.how.whatDoIWin.aAfter":
    ", a nie tylko zakładami na ten jeden kafelek, proporcjonalnie do tego, ile każdy z was na niego postawił. Największy obstawiający kafelka ma też pierwszeństwo do jego jednej najlepszej karty.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Zatrzymać czy sprzedać, jaka jest różnica?",
  "docs.how.keepOrSell.keepLabel": "Zatrzymaj",
  "docs.how.keepOrSell.keepBody": "dodaje kartę do Twojej kolekcji za darmo.",
  "docs.how.keepOrSell.sellLabel": "Odsprzedaj",
  "docs.how.keepOrSell.sellBody": "wypłaca Ci część wartości karty prosto na saldo w USDC, bez czekania.",

  "docs.how.decisionTimeout.q": "Co się stanie, jeśli nie zdecyduję na czas?",
  "docs.how.decisionTimeout.a":
    "Masz krótkie okno na wybór. Jeśli je przegapisz, karta odsprzedaje się automatycznie po swojej stałej stawce, więc nic, co wygrasz, nigdy nie utknie.",

  "docs.how.whatIsChase.q": "Czym jest Pościg?",
  "docs.how.whatIsChase.a":
    "Narastający jackpot zasilany małą częścią puli każdej rundy. Może odpalić w dowolnej rundzie, na własnym niezależnym losowaniu, a traf grail go nie uruchamia. Gdy odpali, cały jackpot trafia do zwycięskiego podziału tej rundy.",

  "docs.how.howToStartFree.q": "Jak zacząć za darmo?",
  "docs.how.howToStartFree.a":
    "Dołącz z kodem zaproszenia i odbierz darmowe saldo w wysokości pack Starter. Bez portfela i bez logowania - możesz wejść od razu jako gość.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Drabinka pack",
  "docs.tech.packLadder.body":
    "Pięć packs do kupienia: {starter}, {elite}, {legendary}, {grail}, {mythic}. Zakład buduje największe packs, na jakie go stać, od największego. To, co zostanie poniżej ceny najtańszego pack, zostaje na kafelku jako drobne i nie otwiera własnej karty. Zakład postawiony jako jeden konkretny pack pozostaje dokładnie tym pack, tylko drobne rosną w górę, gdy dokłada się więcej.",

  "docs.tech.oddsWeighting.title": "Co ustala szanse: karty, które otwiera kafelek",
  "docs.tech.oddsWeighting.body":
    "Szansa kafelka na wygraną to nie to, ile na niego postawiono. Przy blokadzie każdy sfinansowany kafelek otwiera swoje packs, a kawałek losowania kafelka to wartość kart, które właśnie otworzył, zmierzona względem wartości wszystkich kart otwartych w tej rundzie. Jeden wielki traf robi z małego kafelka faworyta. Kafelek, który nie otworzył żadnej karty, nie ma żadnej szansy, a same drobne nigdy nie otwierają karty. Jeśli cała runda nie otworzy żadnych kart, nie ma na czym losować: runda zostaje unieważniona, a każda stawka zwracana jest w całości.",

  "docs.tech.vrfDraw.title": "Losowanie zwycięzcy jest oparte na ziarnie VRF i deterministyczne",
  "docs.tech.vrfDraw.body":
    "Każda runda wyprowadza jedną weryfikowalną losową liczbę ze stałej receptury: id rundy, jej terminu, zamrożonej planszy, liczby losów i entropii łańcucha pobranej po blokadzie. Zwycięski kafelek to pojedyncze, deterministyczne przejście tej liczby przez wagi kafelków. Te same dane wejściowe zawsze dają tego samego zwycięzcę, wagi kafelków są publikowane i zablokowane, zanim przejście się odbędzie, a każdy może później ponownie sprawdzić całe losowanie na podstawie potwierdzenia rundy.",

  "docs.tech.settlementMath.title": "Matematyka rozliczenia",
  "docs.tech.settlementMath.body":
    "Obstawiający zwycięski kafelek dzielą się całą pulą rundy, a nie tylko zakładami na swój kafelek, proporcjonalnie do tego, ile każdy z nich na niego postawił. Z góry schodzi działka banku w wysokości {take}: {chaseCut} buduje jackpot Pościgu, {protocolCut} finansuje protokół. Ta działka opłacana jest kartami, gdziekolwiek to możliwe, najpierw najtańszą wolną kartą, a karta zbyt cenna, by się zmieścić w działce, zostaje pominięta zamiast sprzedana, więc to nie największe trafy są zabierane. Tylko to, czego karty nie pokryją, pochodzi z gotówki puli.",

  "docs.tech.cardAllocation.title": "Kto dostaje karty",
  "docs.tech.cardAllocation.body":
    "Tylko jedna najlepsza karta zwycięskiego kafelka niesie decyzję zatrzymaj-lub-sprzedaj i należy do jego największego obstawiającego. Każda inna karta otwarta przez ten kafelek rozchodzi się między jego obstawiających proporcjonalnie do tego, ile każdy postawił, najpierw najlepsze karty. Wzięcie jednej odejmuje jej cenę odsprzedaży z Twojego podziału gotówki, więc to zamiana, a nie koszt: kończysz rundę z tą samą wartością tak czy inaczej. Jeśli podział nikogo nie pokrywa karty, kupuje ją bank, a ta gotówka zostaje w podziale, więc karta nigdy nie jest nikomu narzucana. Drugi grail w tej samej rundzie nie jest tu traktowany specjalnie, rozchodzi się razem z resztą łupu, a Pościg nigdy nie bierze grail.",

  "docs.tech.sellBackRates.title": "Stawki odsprzedaży",
  "docs.tech.sellBackRates.body":
    "Każda karta ma stałą cenę odsprzedaży ustaloną przez pack, z którego pochodzi: {entryRate} na najniższym szczeblu, {midRate} w środku, {topRate} na szczycie. Sprzedaż od razu wypłaca tę cenę na Twoje saldo, a zatrzymanie karty nic nie kosztuje. Stawki odzwierciedlają opublikowane stawki natychmiastowego odkupu tych samych automatów na CollectorCrypt.",

  "docs.tech.chaseJackpot.title": "Jackpot Pościgu",
  "docs.tech.chaseJackpot.body":
    "Narastający jackpot zasilany {chaseCut} puli każdej rundy. Odpala na własnym niezależnym losowaniu, mniej więcej raz w tygodniu przy normalnym tempie rund, a traf grail go nie uruchamia. Gdy odpali, cały jackpot trafia do zwycięskiego podziału tej rundy, po czym resetuje się i zaczyna się budować od nowa. Pościg bierze też jedną kartę na rundę, gdy może, ale tylko z przegranego kafelka, nigdy najcenniejszej karty rundy i nigdy grail.",

  "docs.tech.decisionWindow.title": "Okno decyzyjne",
  "docs.tech.decisionWindow.body":
    "Wygranie głównej karty kafelka otwiera {window}-sekundowe okno zatrzymaj-lub-sprzedaj. Brak odpowiedzi do momentu jego zamknięcia albo do blokady następnej rundy sprzedaje kartę po jej stałej stawce, więc nic, co wygrasz, nigdy nie utknie.",

  "docs.tech.devnetCustody.title": "Powiernictwo USDC na devnet",
  "docs.tech.devnetCustody.body":
    "Salda przemieszczają się jako prawdziwe transakcje USDC na Solana devnet. Powiernictwo działa przez Twój wbudowany portfel Privy albo, zapasowo, przez parę kluczy tylko dla devnet trzymaną w Twojej przeglądarce - obie podpisują dokładnie tę samą ścieżkę przelewu, której używa powiernictwo produkcyjne.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "Unieważnienie i zwrot",
  "docs.tech.voidRefund.body":
    "Rundę można wygrać tylko przez otwarte karty, więc runda, w której żaden kafelek nie otworzy karty, nie ma na czym losować. Taka runda jest natychmiast unieważniana: każda stawka na planszy wraca w całości, bank nic nie bierze, a Pościg nie jest niczym zasilany. Opublikowany zapis losowania unieważnionej rundy pokazuje zerową łączną liczbę kart, co jest dowodem, że unieważnienie zostało wymuszone przez planszę, a nie wybrane przez kogokolwiek.",

  "docs.tech.cardExits.title": "Wygrane karty trafiają do Twojego portfela",
  "docs.tech.cardExits.body":
    "Zatrzymaj kartę, a zostanie przeniesiona do Twojego portfela jako podpisana transakcja, z opłatami sieciowymi opłaconymi za Ciebie. Jeśli Twój portfel nie może jej jeszcze przyjąć, dostawa zostaje wstrzymana i ponawiana, aż dotrze, nigdy nie ginie. Odsprzedaj kartę, a otrzymasz dokładnie tę cenę, która została wyceniona w chwili wygranej, nigdy nową wycenę, a ta wycena może zostać wykorzystana tylko raz: zostaje oznaczona jako zużyta, zanim pieniądze się przesuną, więc ta sama karta nigdy nie zostanie wypłacona dwa razy.",

  "docs.tech.deposits.title": "Wpłaty USDC",
  "docs.tech.deposits.body":
    "Wpłata to przelew USDC na Solanie, który podpisujesz z własnego portfela. Twoje saldo jest zasilane dopiero po potwierdzeniu tego przelewu w łańcuchu do skarbca gry, z kwotą i miejscem docelowym odczytanymi z samego łańcucha, nigdy z żądania. Każdy podpis transakcji może zasilić saldo dokładnie raz, więc powtórzenie wpłaty nie może podwoić zasilenia, a przelew, który przekracza limit na transakcję, jest zapisywany jako należny Tobie z powrotem, zamiast po prostu zniknąć.",

  "docs.tech.withdrawals.title": "Wypłaty USDC",
  "docs.tech.withdrawals.body":
    "Wypłata najpierw obciąża Twoje saldo, a potem wysyła USDC ze skarbca do miejsca docelowego, które zatwierdziłeś: Twoje zweryfikowane logowanie potwierdza dokładnie tę kwotę i miejsce docelowe, a żądanie, które nie zgadza się ze swoim dowodem, zostaje odrzucone. Potwierdzenie zachowuje podpis transakcji. Jeśli łańcuch ostatecznie odrzuci przelew, Twoje saldo zostaje zwrócone dokładnie raz. Jeśli przelew wyszedł, ale jeszcze się nie potwierdził, nic nie jest zwracane, dopóki łańcuch nie da ostatecznej odpowiedzi, więc wypłata nigdy nie może zapłacić dwa razy, nawet po ponownym uruchomieniu.",

  "docs.tech.identity.title": "Jedno konto, niezależnie jak się logujesz",
  "docs.tech.identity.body":
    "Zaloguj się przez Privy albo udowodnij posiadanie portfela Solana, podpisując jednorazowe wyzwanie serwera: obie drogi prowadzą do tego samego trwałego konta, kluczowanego wyłącznie przez zweryfikowaną tożsamość. Wszystko, co porusza pieniądze, działa na koncie tożsamości, która potwierdziła się w danym żądaniu, a deklarowane nazwy, identyfikatory i nagłówki są odrzucane, więc nikt nie może skierować wpłaty, zakładu ani wypłaty na saldo kogoś innego.",

  "docs.tech.reconnect.title": "Ponowne połączenie i restart",
  "docs.tech.reconnect.body":
    "Wyloguj się, a pieniądze stają: w torach USDC wpłata, zakład albo wypłata bez dowodu własności zostają odrzucone. Zaloguj się z powrotem, a to samo konto czeka, z tym samym saldem i tymi samymi kartami, bo wszystko, co posiadasz, żyje w trwałym rejestrze, a nie na stronie. Restart serwera odtwarza ten rejestr i trafia w te same liczby, a przelew, który już wyszedł, nigdy nie zostanie wysłany po raz drugi.",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "Sekcje zasad",
  "docs.nav.overview": "Przegląd",
  "docs.nav.prev": "Poprzednie",
  "docs.nav.next": "Następne",

  "docs.nav.section.introduction": "Wprowadzenie",
  "docs.nav.section.gameplay": "Rozgrywka",
  "docs.nav.section.cards": "Karty i powiernictwo",
  "docs.nav.section.money": "Pieniądze",
  "docs.nav.section.fairness": "Uczciwość",
  "docs.nav.section.account": "Konto",

  "docs.nav.page.whatIsRoyale": "Czym jest attn ROYALE",
  "docs.nav.page.packs": "Packs i drabinka",
  "docs.nav.page.startFree": "Zacznij za darmo",
  "docs.nav.page.backing": "Obstawianie kafelka",
  "docs.nav.page.theDraw": "Losowanie",
  "docs.nav.page.winning": "Co wygrywasz",
  "docs.nav.page.chase": "Pościg",
  "docs.nav.page.keepOrSell": "Zatrzymaj albo sprzedaj",
  "docs.nav.page.cardAllocation": "Kto dostaje karty",
  "docs.nav.page.sellBack": "Stawki odsprzedaży",
  "docs.nav.page.cardDelivery": "Dostawa kart",
  "docs.nav.page.deposits": "Wpłaty",
  "docs.nav.page.withdrawals": "Wypłaty",
  "docs.nav.page.settlement": "Matematyka rozliczenia",
  "docs.nav.page.custody": "Powiernictwo USDC",
  "docs.nav.page.odds": "Co ustala szanse",
  "docs.nav.page.vrf": "Losowanie VRF",
  "docs.nav.page.voidRefund": "Unieważnienie i zwrot",
  "docs.nav.page.identity": "Jedno konto",
  "docs.nav.page.reconnect": "Ponowne połączenie i restart",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - jak porusza się każdy dolar",
  "docs.howItWorks.lead": "Pełne zasady gry. Jak losowany jest zwycięzca i kto dostaje karty.",
  "docs.howItWorks.backToBoard": "Wróć do planszy →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Jak działa runda",
  "docs.howItWorks.round.pickBet":
    "Wybierz wysokość zakładu, a potem kliknij kafelek: każde kliknięcie dodaje tę kwotę do puli kafelka.",
  "docs.howItWorks.round.yourShare":
    "**Twój udział** w kafelku = Twoja stawka ÷ suma tego kafelka. {stake} w kafelek {tile} to udział **{pct}**. Jeśli ten kafelek wygra, dostajesz {pct} jego wypłaty.",
  "docs.howItWorks.round.winChance":
    "**Szansa na wygraną** rozstrzyga się przy otwarciu, nie przy zakładzie: gdy runda się blokuje, każdy obstawiony kafelek otwiera swoje packs, a kawałek koła danego kafelka to wartość kart, które właśnie otworzył, zmierzona względem wszystkich kart otwartych w tej rundzie.",
  "docs.howItWorks.round.tickets":
    "Kafelek, który nie otworzy **żadnej karty**, nie ma żadnego kawałka, a jeśli cała runda nie otworzy żadnych kart, runda zostaje **unieważniona**, a każda stawka wraca w całości.",
  "docs.howItWorks.round.vrf":
    "Przy blokadzie **VRF** (weryfikowalna funkcja losowa) losuje jeden zwycięski los z zablokowanych liczb rundy: id rundy, terminu, sumy każdego kafelka, liczby losów. Nikt, nawet bank, nie może tym sterować.",
  "docs.howItWorks.round.oddsAreReal": "Szanse pokazane na każdym kafelku to dokładnie ta matematyka losowania, nie przeczucie.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Co kupuje Twój zakład",
  "docs.howItWorks.buys.ladderLead": "Suma kafelka przekłada się na packs, od największego:",
  "docs.howItWorks.buys.example":
    "Przykład: kafelek za **{amount}** kupuje jeden Legendary, jeden Elite i jeden Starter.",
  "docs.howItWorks.buys.change":
    "Pieniądze zbyt małe na kolejny pack to **drobne**: nadal liczą się do puli i Twojego udziału w wygranej, ale nie otwierają pack, a to otwarte karty ustalają szanse.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Masz już Mythic? Przycisk ulepszenia celuje w **kolejny cały Mythic** zamiast mniejszy pack. Drabinka nigdy nie cofa się w dół.",
  "docs.howItWorks.buys.cardsPerPack":
    "Przy blokadzie każdy sfinansowany kafelek otwiera **jedną kartę na każdy cały pack**, który trzyma, do **{max} kart** pokazanych na planszy (reszta jest wypisana na stronie wyników). Kafelek trzymający tylko drobne nie otwiera nic.",
  "docs.howItWorks.buys.undeliverable":
    "Jeśli pack faktycznie nie może zostać dostarczony (wyprzedany, techniczna usterka, brak czasu), jego koszt wraca do Ciebie jako gotówka zamiast utknąć.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Co dostaje zwycięzca",
  "docs.howItWorks.winner.entirePool":
    "Obstawiający zwycięski kafelek dzielą się **całą pulą rundy**, a nie tylko pulą tego jednego kafelka.",
  "docs.howItWorks.winner.proRata":
    "Podział jest **proporcjonalny**: włóż {pct} kafelka, dostań **{pct}** wypłaty.",
  "docs.howItWorks.winner.take":
    "**{take}** z każdej puli schodzi z góry przed podziałem: **{chaseCut}** zasila jackpot Pościgu, **{protocolCut}** finansuje protokół (polecenia, zakupy kart Pościgu, operacje, odkupy tokenów).",
  "docs.howItWorks.winner.takeFunding":
    "Ta działka {take} opłacana jest kartami, gdziekolwiek to możliwe, najpierw najtańszą wolną kartą, a karta zbyt cenna, by się zmieścić w działce, zostaje pominięta zamiast sprzedana, więc to nie największe trafy są zabierane. Tylko to, czego karty nie pokryją, pochodzi z gotówki puli.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "Pościg",
  "docs.howItWorks.chase.feed": "Pościg to narastający jackpot, zasilany **{cut}** każdej puli.",
  "docs.howItWorks.chase.cardCut":
    "Gdy może, Pościg bierze swoją działkę jako kartę zamiast gotówki, ale tylko kartę przegranego kafelka wartą **nie więcej niż {cut}** puli, nigdy jedynej najcenniejszej karty rundy i nigdy grail.",
  "docs.howItWorks.chase.independentDraw":
    "Jackpot odpala na własnym **niezależnym losowym losowaniu**, średnio mniej więcej **raz w tygodniu** przy typowym tempie rund. Traf grail go nie uruchamia.",
  "docs.howItWorks.chase.payout":
    "Gdy odpali, **cały jackpot** trafia do zwycięskiego podziału tej rundy, po czym resetuje się i odbudowuje z zasilania kolejnych rund.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grail",
  "docs.howItWorks.grails.what":
    "**Grail** to najrzadszy, najcenniejszy traf, jaki może wypaść z pack. Nawet Starter za {price} może na niego trafić.",
  "docs.howItWorks.grails.headlineGrail":
    "Jeśli główna karta zwycięskiego kafelka to grail: **Zatrzymaj** wymaga, żeby największy obstawiający wykupił udziały pozostałych obstawiających kafelka (odjęte z ich gotówki); **Sprzedaj** dzieli wypłatę **proporcjonalnie na cały kafelek**, a nie tylko dla największego obstawiającego.",
  "docs.howItWorks.grails.otherGrails":
    "Każdy inny grail wyciągnięty w tej rundzie (na innym kafelku albo jako dodatkowa karta) jest bonusowym łupem dla zwycięskich obstawiających, traktowanym dokładnie jak każda inna dodatkowa karta. Nigdy nie trafia do Pościgu, a ponieważ działka opłacana jest najpierw najtańszą kartą, grail jest ostatnią kartą, po którą by sięgnęła.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Kto dostaje karty",
  "docs.howItWorks.cards.headline":
    "**Główna karta** zwycięskiego kafelka (jego jedyny najcenniejszy traf) należy wyłącznie do jego największego obstawiającego: Zatrzymaj ją za darmo albo Sprzedaj po cenie odkupu w gotówce, wypłaconej jemu, bez dzielenia się z resztą kafelka.",
  "docs.howItWorks.cards.rest":
    "Każda inna karta wyciągnięta przez kafelek, plus każdy bonusowy łup przekazany z przegranych kafelków, rozchodzi się od największej wartości, proporcjonalnie do stawki. Największy obstawiający kafelka zwykle kończy z największą ich liczbą i tymi najlepszymi.",
  "docs.howItWorks.cards.deduction":
    "Wzięcie jednej z tych kart odejmuje jej cenę odkupu z Twojego podziału gotówki. To ta sama gotówka, jaką dostałbyś, sprzedając ją, więc nic nie tracisz.",
  "docs.howItWorks.cards.neverForced":
    "Nie stać Cię na jedną? Nigdy nie jest Ci narzucana. Zamiast tego kupuje ją bank, a ta gotówka zostaje w podziale.",
  "docs.howItWorks.cards.workedExample":
    "**Przykład na liczbach.** Pula {pool}. **{take}** ({takeAmount}: {chaseAmount} Pościg, {protocolAmount} protokół) schodzi z góry, zwykle opłacone wolną kartą, a nie Twoją gotówką. Do podziału zostaje **{split}**: Ty postawiłeś {yourPct} kafelka ({yourStake}), Sam postawił {samPct} ({samStake}). Kafelek wyciągnął główną kartę {headline} (pack Legendary, odkup **{buyback}**) i jedną dodatkową kartę {extra}. Zatrzymujesz kartę {headline} za darmo. Jest Twoja tak czy inaczej. Karta {extra} trafia do Sama: **{buyback}** jej wartości, czyli **{samCash}**, schodzi z podziału Sama. Wynik końcowy: wychodzisz z **{yourStake} gotówki + kartą {headline}**; Sam dostaje **{samCash} gotówki + kartę {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Zatrzymaj albo sprzedaj",
  "docs.howItWorks.keepSell.buttons":
    "Każda karta, którą otrzymujesz, przychodzi z dwoma przyciskami: **Zatrzymaj** kładzie ocenioną kartę w Twojej kolekcji; **Sprzedaj** wypłaca stawkę odkupu pack w USDC, prosto na Twoje saldo.",
  "docs.howItWorks.keepSell.usdc": "USDC to cyfrowy dolar: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Odkup ustala pack samej karty: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** Grail i wyżej.",
  "docs.howItWorks.keepSell.window":
    "Dostajesz **{seconds}-sekundowe** okno zaraz po wygranej, a jeśli nie zdecydujesz, po prostu przechodzi na całą następną rundę: aktywne pod planszą i w Twoich kartach.",
  "docs.howItWorks.keepSell.autoSell":
    "Wciąż niezdecydowane, gdy zablokuje się następna runda? Karta **sprzedaje się automatycznie** po cenie odkupu. Pieniądze nigdy nie utykają.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Słowniczek",
  "docs.howItWorks.glossary.change":
    "**Drobne**: pieniądze na kafelku zbyt małe, by kupić kolejny pack. Liczą się do puli i Twojego udziału w wygranej, ale tylko otwarte karty niosą szansę na wygraną.",
  "docs.howItWorks.glossary.house":
    "**Bank**: skarbiec, który finansuje odkupy kart i przejmuje każdą kartę, na którą nikogo nie stać.",
  "docs.howItWorks.glossary.chase":
    "**Pościg**: narastający jackpot zasilany {cut} każdej puli; odpala na własnym niezależnym losowaniu, nie na podstawie konkretnego wyniku karty.",
  "docs.howItWorks.glossary.grail": "**Grail**: najrzadsza, najcenniejsza karta, jaka może wypaść z pack.",
  "docs.howItWorks.glossary.buyback":
    "**Odkup**: stała oferta wymiany karty na gotówkę za {low} do {high} jej wartości, zależnie od poziomu pack.",
  "docs.howItWorks.glossary.proRata": "**Proporcjonalnie**: podział zależny od tego, ile każda osoba włożyła.",
  "docs.howItWorks.glossary.vrf": "**VRF**: losowanie, które każdy może później zweryfikować.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "API zakładów (zamknięta beta)",
  "docs.howItWorks.api.what":
    "Programistyczne API do odczytu rundy na żywo, subskrypcji strumienia zdarzeń i stawiania zakładów z kodu albo agenta. Działa na tych samych szansach i rozliczeniach co plansza.",
  "docs.howItWorks.api.access":
    "Dostęp jest **zamknięty** i tylko na żądanie: domyślnie wyłączony, a każde wywołanie wymaga klucza API na białej liście.",
  "docs.howItWorks.api.realBets":
    "Postawienie prawdziwego zakładu wymaga jeszcze jednej weryfikacji: dowodu, że to naprawdę Ty (to samo logowanie co na stronie), i podlega tym samym limitom zakładów co każdy gracz.",
  "docs.howItWorks.api.contact": "Zobacz dokumentację dla programistów pod {path} i napisz na {email}, żeby poprosić o klucz.",
  "docs.how.controls.q": "How do I control a bet?",
  "docs.how.controls.a":
    "Open Gear to find grouped settings. On wide screens, each section can collapse. In Display, the landscape fullscreen toggle helps hide browser chrome where the browser allows it. The bet rail puts the full dollar total first, then the pack name and count. Tap the selected pack again to un-arm it without placing another bet.",
  "docs.how.chat.q": "Can I read table chat in my language?",
  "docs.how.chat.a":
    "Chat auto-translates bot and round messages into your selected language. Use \"show original\" on a translated line to see its source wording. Player-written messages stay as written.",
  "docs.how.collectors.q": "Where can I see the collector leaderboard?",
  "docs.how.collectors.a":
    "Open Ladder and choose Collectors. Top betters stays the first tab. Collectors ranks held cards by collection value and shows cards held, Grails pulled, and each collector's best pull.",
  "docs.how.replay.q": "Can I replay a finished round?",
  "docs.how.replay.a":
    "Yes. Open a finished round's replay to scrub from betting through the reveal, pause or restart it, and choose up to 5x speed.",

  "docs.tech.controls.title": "Settings, pack selection, and bet labels",
  "docs.tech.controls.body":
    "Gear groups Language, Betting, Display, Reveals, Sound, Auto-sell, and Hotkeys into sections. On wide screens each section can collapse, and the collapsed state is remembered. Display includes a landscape fullscreen toggle that requests the browser's supported chrome-free mode, with a compact-bar fallback on iPhone Safari. The bet rail makes the full dollar total the headline before the pack name and count. A pack button sets one exact pack choice; clicking that same selected pack again clears the armed choice and its persisted intent, so the next tile click cannot place that pack by accident.",
  "docs.tech.chat.title": "Chat translation and original copy",
  "docs.tech.chat.body":
    "Chat auto-translates keyed bot and table-event messages into the selected locale without rewriting the stored history. A translated row exposes a \"show original\" control that switches that row back to its source wording. Player-authored free text remains exactly as written when no translation service is available, so the feature never invents a translation.",
  "docs.tech.collectors.title": "Collector leaderboard",
  "docs.tech.collectors.body":
    "The Ladder surface keeps Top betters as its default tab and adds a Collectors tab. Collector rows rank the held cards in a player's collection by collection value and expose cards held, Grails pulled, and the best pull name with its value. The client builds the view from stored rounds, the local collection, and the signed-in profile, then keeps the player's row linked to their profile.",
  "docs.tech.replay.title": "Full-round replay speeds",
  "docs.tech.replay.body":
    "A finished round replay covers the recorded betting timeline and the reveal cinema on one playhead. Play, pause, seek, restart, and export remain available, with playback choices of 1x, 2x, 4x, and 5x. A speed click changes the playback rate for the timeline and the next reveal entry; it does not remount or rewrite a reveal already in progress.",

  "docs.nav.section.tools": "Tools",
  "docs.nav.page.controls": "Settings and controls",
  "docs.nav.page.chat": "Table chat",
  "docs.nav.page.collectors": "Collector leaderboard",
  "docs.nav.page.replay": "Round replay",

  "docs.howItWorks.tools.title": "Controls and extras",
  "docs.howItWorks.tools.controls":
    "Gear keeps the settings readable: wide layouts let you collapse sections, Display owns the landscape fullscreen toggle, and the bet rail leads with the full dollar total before the pack name and count. Tap the selected pack again to un-arm it.",
  "docs.howItWorks.tools.chat":
    "Chat auto-translates bot and round messages into your selected language. Use show original on a translated row to return to its source wording; player-written lines stay as written.",
  "docs.howItWorks.tools.collectors":
    "Ladder keeps Top betters first and adds Collectors as a second tab, ranking held cards by collection value with cards held, Grails pulled, and best-pull detail.",
  "docs.howItWorks.tools.replay":
    "Finished rounds replay from betting through the reveal with play, pause, seek, restart, and 1x, 2x, 4x, or 5x speed.",
} as Record<string, string>;
