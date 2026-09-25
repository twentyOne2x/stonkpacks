// Italian (Italiano): "docs" segment. Same key set as en/docs.ts, two
// surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-stay-$-USD rules that apply to every locale.
//
// Register: INFORMAL "tu" throughout.
//
// Interpolation tokens ({starter}, {take}, etc.) are filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations), never translated.
//
// BOLD EMPHASIS (docs.howItWorks.* only): the explainer bolds key phrases
// mid-sentence with inline `**bold**` markers that the route renders as <b>.
// The pairs are kept BALANCED here but moved onto whichever words carry the
// emphasis in Italian. `**{token}**` (a bolded number) is normal. `**` has no
// meaning in the other docs.* keys.
//
// Terminology (kept consistent with board/misc/onboarding/arena/chat):
//   - "pool" (the whole round's staked money) -> "montepremi"; "pot" (the
//     money sitting on ONE tile) -> "piatto", so the two stay distinct in the
//     same sentence.
//   - "change" / "loose money" -> "resto" (one word for both).
//   - "the Chase" -> "la Caccia" (house style: the feature name IS
//     translated). "jackpot" stays "jackpot" so it never collides with
//     "montepremi".
//   - "pull" -> "pull" (the invariable loanword the Italian TCG scene uses);
//     "buyback" -> "riacquisto"; "payout split" -> "ripartizione"; "the
//     house" -> "il banco"; "slab" -> "slab" (masculine, invariable).
//   - "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
//     The mechanic is described as LOOSE CHANGE in every locale; do not
//     reintroduce "Heat", a transliteration of it, or a gloss of it into any
//     rendered value. The docs.how.heatRemainder.* KEY names are kept only so
//     the ten locales stay in key parity; key names are never rendered. The Italian word is "resto".
//   - "Motherlode" is a proper noun of this game and stays verbatim.
//   - TIER NAMES Starter / Elite / Legendary / Grail / Mythic stay English,
//     capitalized and UNINFLECTED, including where the English source writes
//     them lowercase as a generic noun ("a grail pull" -> "un pull di una
//     Grail") and in the plural ("Grails" -> "le Grail").
export default {
  "docs.header.title": "Guida",
  "docs.header.back": "← Torna al tabellone",

  "docs.tabs.ariaLabel": "Vista della guida",
  "docs.tabs.how": "Come funziona",
  "docs.tabs.technical": "Tecnico",

  "docs.how.intro": "La versione in parole semplici. Leggi prima questa, poi passa a Tecnico per i meccanismi esatti.",
  "docs.technical.intro": "Le meccaniche esatte, in numeri chiari.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "Cos'è attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "Un gioco di apertura pack dal vivo. A ogni round i giocatori puntano pack sulle caselle. Quando il round si blocca, ogni casella puntata strappa i suoi pack in diretta, e chi ha puntato su una sola casella si divide tutto il montepremi.",

  "docs.how.whatIsPack.q": "Cos'è un pack?",
  "docs.how.whatIsPack.a":
    "Un livello a prezzo fisso che si apre in una vera carta gradata nel momento in cui la sua casella si apre. La scala è {starter}, {elite}, {legendary}, {grail} e {mythic}. Più il pack è grande, più grosse sono le carte che tira fuori.",

  "docs.how.howBacking.q": "Come funziona puntare su una casella?",
  "docs.how.howBacking.a":
    "Scegli la casella che ti piace e puntaci sopra dei pack. Se ci punti insieme ad altri giocatori la dividete: la tua fetta della vincita di quella casella è pari alla quota di pack che hai messo tu.",

  "docs.how.heatRemainder.q": "E se la mia puntata non arriva a un pack intero?",
  "docs.how.heatRemainder.a":
    "Qualsiasi importo sotto il prezzo del pack più economico resta sulla casella come resto. Accompagna il resto della tua puntata, ma non apre alcuna carta finché non diventa un pack intero, e sono le carte aperte a decidere le probabilità.",

  "docs.how.howWheelPicks.q": "Come sceglie il vincitore la ruota?",
  "docs.how.howWheelPicks.a":
    "Alla chiusura ogni casella puntata apre i suoi pack dal vivo. La ruota si ferma poi su una casella, e più valgono le carte che quella casella ha aperto, più grande è la sua fetta di ruota. Una sola grande pescata può rendere favorita una casella piccola. La scelta arriva da un sorteggio casuale verificabile, mai da una persona.",

  "docs.how.whatDoIWin.q": "Cosa vinco?",
  "docs.how.whatDoIWin.aBefore": "Chi ha puntato sulla casella vincente si divide",
  "docs.how.whatDoIWin.aEmphasis": "l'intero montepremi",
  "docs.how.whatDoIWin.aAfter":
    ", non solo le puntate di quella casella, in proporzione a quanto ci ha messo ciascuno. Chi ha puntato di più su quella casella ha anche il primo diritto sulla sua carta migliore.",

  // NOTE: "Tieni" / "Rivendi" duplicate the card-decision action labels used
  // elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys, flagged for a later
  // cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Tenere o vendere, che differenza c'è?",
  "docs.how.keepOrSell.keepLabel": "Tieni",
  "docs.how.keepOrSell.keepBody": "aggiunge la carta alla tua collezione, gratis.",
  "docs.how.keepOrSell.sellLabel": "Rivendi",
  "docs.how.keepOrSell.sellBody": "ti versa una parte del valore della carta dritta sul saldo in USDC, senza attese.",

  "docs.how.decisionTimeout.q": "E se non decido in tempo?",
  "docs.how.decisionTimeout.a":
    "Hai una breve finestra per scegliere. Se la lasci scadere, la carta si rivende da sola al tasso corrente, così quello che vinci non resta mai bloccato.",

  "docs.how.whatIsChase.q": "Cos'è la Caccia?",
  "docs.how.whatIsChase.a":
    "Un jackpot progressivo alimentato da una piccola fetta del montepremi di ogni round. Può scattare in qualsiasi round, su un proprio sorteggio indipendente, e una pescata grail non lo fa scattare. Quando scatta, l'intero jackpot confluisce nella divisione vincente di quel round.",

  "docs.how.howToStartFree.q": "Come inizio gratis?",
  "docs.how.howToStartFree.a":
    "Entra con un codice invito e prenditi un saldo gratuito grande quanto un pack Starter. Non serve né wallet né registrazione, puoi buttarti subito come ospite.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Scala dei pack",
  "docs.tech.packLadder.body":
    "Cinque pack acquistabili: {starter}, {elite}, {legendary}, {grail}, {mythic}. Una puntata compone i pack più grandi che riesce a pagare, dal più grande in giù. Quello che resta sotto il prezzo del pack più economico rimane sulla casella come resto e non apre alcuna carta. Una puntata piazzata come un pack specifico resta esattamente quel pack, solo il resto si ricompone verso l'alto man mano che se ne aggiunge.",

  "docs.tech.oddsWeighting.title": "Cosa determina le probabilità: le carte che una casella apre",
  "docs.tech.oddsWeighting.body":
    "La probabilità di una casella non è quanto ci è stato puntato sopra. Alla chiusura ogni casella finanziata apre i suoi pack, e la sua fetta del sorteggio è il valore delle carte appena aperte, rapportato al valore di tutte le carte aperte nel round. Una sola grande pescata rende favorita una casella piccola. Una casella che non ha aperto nessuna carta non ha alcuna probabilità, e il resto da solo non apre mai una carta. Se un intero round non apre nessuna carta non c'è nulla da sorteggiare: il round viene annullato e ogni puntata rimborsata per intero.",

  "docs.tech.vrfDraw.title": "L'estrazione del vincitore nasce da VRF ed è deterministica",
  "docs.tech.vrfDraw.body":
    "Ogni round ricava un numero casuale verificabile da una ricetta fissa: l'id del round, la sua scadenza, il tabellone congelato, il conteggio dei ticket e l'entropia della chain presa dopo la chiusura. La casella vincente nasce da un'unica scansione deterministica di quel numero sui pesi delle caselle. Gli stessi input producono sempre lo stesso vincitore, i pesi vengono pubblicati e fissati prima della scansione, e chiunque può riverificare l'intero sorteggio dalla ricevuta del round.",

  "docs.tech.settlementMath.title": "Calcolo dei pagamenti",
  "docs.tech.settlementMath.body":
    "Chi ha puntato sulla casella vincente si divide l'intero montepremi del round, non solo le puntate della propria casella, in proporzione a quanto ciascuno ci ha messo. Una trattenuta della casa del {take} viene tolta per prima: {chaseCut} alimenta il jackpot The Chase, {protocolCut} finanzia il protocollo. Quella trattenuta viene pagata con le carte ovunque possibile, partendo dalla carta in più meno costosa, e una carta troppo preziosa per rientrare nella trattenuta viene saltata invece che venduta, così le grandi pescate non sono quelle che se ne vanno. Solo ciò che le carte non coprono esce dal contante del montepremi.",

  "docs.tech.cardAllocation.title": "Chi prende le carte",
  "docs.tech.cardAllocation.body":
    "Solo la singola carta migliore della casella vincente porta una decisione tieni o vendi, e appartiene al maggiore puntatore di quella casella. Ogni altra carta aperta da quella casella viene distribuita tra i suoi puntatori in proporzione a quanto ha puntato ciascuno, prima le migliori. Prenderne una scala il suo prezzo di riacquisto dalla tua quota in contanti, quindi è uno scambio e non un costo: chiudi il round con lo stesso valore in entrambi i casi. Se nessuna quota copre una carta, la casa la compra e quel denaro resta dentro la divisione, così una carta non viene mai imposta a nessuno. Un secondo grail nello stesso round non ha un trattamento speciale qui, viene distribuito con il resto del bottino, e The Chase non prende mai un grail.",

  "docs.tech.sellBackRates.title": "Tassi di riacquisto",
  "docs.tech.sellBackRates.body":
    "Ogni carta ha un prezzo di rivendita stabile fissato dal pack da cui è uscita: {entryRate} al gradino d'ingresso, {midRate} a metà scala, {topRate} in cima. Vendere accredita subito quel prezzo sul tuo saldo, e tenere la carta non costa nulla. Le percentuali rispecchiano i tassi di riacquisto istantaneo pubblicati da CollectorCrypt per le stesse macchine.",

  "docs.tech.chaseJackpot.title": "Il jackpot della Caccia",
  "docs.tech.chaseJackpot.body":
    "Un jackpot progressivo alimentato dal {chaseCut} del montepremi di ogni round. Scatta su un proprio sorteggio indipendente, all'incirca una volta a settimana al ritmo normale dei round, e una pescata grail non lo fa scattare. Quando scatta, l'intero jackpot confluisce nella divisione vincente di quel round, poi si azzera e ricomincia. The Chase prende anche una carta per round quando può, ma solo da una casella perdente, mai la carta più preziosa del round e mai un grail.",

  "docs.tech.decisionWindow.title": "Finestra di decisione",
  "docs.tech.decisionWindow.body":
    "Vincere la carta di punta della casella apre una finestra di {window} secondi per tenere o vendere. Nessuna risposta entro la chiusura, o entro il blocco del round successivo, vende la carta al tasso corrente, così nulla di ciò che vinci resta bloccato.",

  "docs.tech.devnetCustody.title": "Custodia USDC su devnet",
  "docs.tech.devnetCustody.body":
    "I saldi si muovono come vere transazioni USDC sulla devnet di Solana. La custodia passa dal tuo wallet integrato Privy oppure, in alternativa, da una keypair solo-devnet tenuta nel tuo browser: entrambi firmano esattamente lo stesso percorso di trasferimento della custodia in produzione.",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "Annullamento e rimborso",
  "docs.tech.voidRefund.body":
    "Un round si può vincere solo con carte aperte, quindi un round in cui nessuna casella apre una carta non ha nulla da sorteggiare. Quel round viene annullato all'istante: ogni puntata sul tabellone torna per intero, la casa non trattiene nulla e The Chase non riceve nulla. Il registro del sorteggio pubblicato di un round annullato mostra un totale carte pari a zero, la prova che l'annullamento è stato imposto dal tabellone e non scelto da qualcuno.",

  "docs.tech.cardExits.title": "Le carte vinte vanno nel tuo wallet",
  "docs.tech.cardExits.body":
    "Tieni una carta e viene trasferita nel tuo wallet come transazione firmata, con le commissioni di rete pagate dalla casa. Se il tuo wallet non può ancora riceverla, la consegna resta in attesa e viene ritentata finché non arriva, mai scartata. Rivendi una carta e ti viene pagato il prezzo esatto quotato nel momento in cui l'hai vinta, mai una nuova quotazione, e quella quotazione si può esercitare una sola volta: viene marcata come usata prima che il denaro si muova, quindi la stessa carta non può mai essere pagata due volte.",

  "docs.tech.deposits.title": "Depositi in USDC",
  "docs.tech.deposits.body":
    "Un deposito è un trasferimento USDC su Solana che firmi dal tuo wallet. Il tuo saldo viene accreditato solo dopo che quel trasferimento è confermato on-chain verso la tesoreria del gioco, con importo e destinazione letti dalla chain stessa, mai dalla richiesta. Ogni firma di transazione può accreditare esattamente una volta, quindi ripresentare un deposito non può accreditare due volte, e un trasferimento che arriva sopra il tetto per transazione viene registrato come dovuto in restituzione invece di sparire.",

  "docs.tech.withdrawals.title": "Prelievi in USDC",
  "docs.tech.withdrawals.body":
    "Un prelievo addebita prima il tuo saldo, poi invia gli USDC dalla tesoreria alla destinazione che hai approvato: il tuo accesso verificato firma esattamente quell'importo e quella destinazione, e una richiesta che non corrisponde alla sua prova viene rifiutata. La ricevuta conserva la firma della transazione. Se la chain rifiuta il trasferimento in via definitiva, il tuo saldo viene rimborsato esattamente una volta. Se il trasferimento è partito ma non è ancora confermato, non si rimborsa nulla finché la chain non dà una risposta definitiva, quindi un prelievo non può mai pagare due volte, nemmeno dopo un riavvio.",

  "docs.tech.identity.title": "Un solo account, comunque tu entri",
  "docs.tech.identity.body":
    "Accedi con Privy o dimostra un wallet Solana firmando una sfida del server monouso: entrambe le strade portano allo stesso account durevole, legato all'identità verificata e a nient'altro. Tutto ciò che muove denaro gira sull'account dell'identità che si è dimostrata in quella stessa richiesta, e nomi, id e header dichiarati vengono scartati, quindi nessuno può puntare un deposito, una puntata o un prelievo sul saldo di qualcun altro.",

  "docs.tech.reconnect.title": "Riconnessione e riavvio",
  "docs.tech.reconnect.body":
    "Esci e il denaro si ferma: sui binari USDC, un deposito, una puntata o un prelievo senza prova di proprietà viene rifiutato. Rientra e lo stesso account ti aspetta, con lo stesso saldo e le stesse carte, perché tutto ciò che possiedi vive in un registro durevole e non nella pagina. Un riavvio del server rigioca quel registro e atterra sugli stessi numeri, e un trasferimento già partito non viene mai inviato una seconda volta.",

  "docs.nav.ariaLabel": "Sezioni dei docs",
  "docs.nav.overview": "Panoramica",
  "docs.nav.prev": "Precedente",
  "docs.nav.next": "Successivo",

  "docs.nav.section.introduction": "Introduzione",
  "docs.nav.section.gameplay": "Gioco",
  "docs.nav.section.cards": "Carte e custodia",
  "docs.nav.section.money": "Denaro",
  "docs.nav.section.fairness": "Correttezza",
  "docs.nav.section.account": "Account",

  "docs.nav.page.whatIsRoyale": "Cos'è attn ROYALE",
  "docs.nav.page.packs": "Pack e la scala",
  "docs.nav.page.startFree": "Inizia gratis",
  "docs.nav.page.backing": "Puntare su una casella",
  "docs.nav.page.theDraw": "Il sorteggio",
  "docs.nav.page.winning": "Cosa vinci",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "Tenere o vendere",
  "docs.nav.page.cardAllocation": "Chi prende le carte",
  "docs.nav.page.sellBack": "Tassi di riacquisto",
  "docs.nav.page.cardDelivery": "Consegna delle carte",
  "docs.nav.page.deposits": "Depositi",
  "docs.nav.page.withdrawals": "Prelievi",
  "docs.nav.page.settlement": "Calcolo dei pagamenti",
  "docs.nav.page.custody": "Custodia USDC",
  "docs.nav.page.odds": "Cosa determina le probabilità",
  "docs.nav.page.vrf": "Il sorteggio VRF",
  "docs.nav.page.voidRefund": "Annullamento e rimborso",
  "docs.nav.page.identity": "Un solo account",
  "docs.nav.page.reconnect": "Riconnessione e riavvio",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE, dove finisce ogni dollaro",
  "docs.howItWorks.lead": "Le regole complete del gioco. Come si estrae il vincitore e a chi vanno le carte.",
  "docs.howItWorks.backToBoard": "Torna al tabellone →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Come funziona un round",
  "docs.howItWorks.round.pickBet":
    "Scegli l'importo della puntata, poi clicca una casella: ogni clic aggiunge quella cifra al piatto della casella.",
  "docs.howItWorks.round.yourShare":
    "**La tua quota** di una casella = la tua puntata ÷ il totale di quella casella. {stake} su una casella da {tile} fanno una quota del **{pct}**. Se quella casella vince, prendi il {pct} del suo pagamento.",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**La probabilità di vincita** si decide all'apertura, non alla puntata: alla chiusura del round ogni casella puntata apre i suoi pack, e la fetta di ruota di una casella è il valore delle carte appena aperte, rapportato a tutte le carte aperte nel round.",
  "docs.howItWorks.round.tickets":
    "Una casella che non apre **nessuna carta** non ha alcuna fetta, e se un intero round non apre carte, il round viene **annullato** e ogni puntata torna per intero.",
  "docs.howItWorks.round.vrf":
    "Al blocco una **VRF** (funzione casuale verificabile) estrae un solo ticket vincente dai numeri congelati del round: l'id del round, la scadenza, il totale di ogni casella, il conteggio dei ticket. Nessuno, banco compreso, può indirizzarla.",
  "docs.howItWorks.round.oddsAreReal": "Le probabilità che vedi su ogni casella sono esattamente quel calcolo, non una sensazione.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Cosa ti compra la puntata",
  "docs.howItWorks.buys.ladderLead": "Il totale di una casella si ricompone in pack, dal più grande:",
  "docs.howItWorks.buys.example":
    "Esempio: una casella da **{amount}** compra un Legendary, un Elite e uno Starter.",
  "docs.howItWorks.buys.change":
    "I soldi che non bastano per il pack successivo restano **resto**: contano lo stesso per il piatto e per la tua quota in caso di vincita, ma non aprono nessun pack, e sono le carte aperte a determinare le probabilità.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Hai già un Mythic? Il pulsante di upgrade punta a **un altro Mythic intero** invece che a un pack più piccolo. La scala non torna mai indietro.",
  "docs.howItWorks.buys.cardsPerPack":
    "Al blocco ogni casella finanziata apre **una carta per ogni pack intero** che ha, fino a **{max} carte** mostrate sul tabellone (le altre le trovi elencate nella pagina dei risultati). Una casella con solo resto non apre niente.",
  "docs.howItWorks.buys.undeliverable":
    "Se un pack non si può consegnare davvero (esaurito, intoppo tecnico, tempo scaduto), il suo costo ti torna indietro in contanti invece di restare bloccato.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Cosa si prende il vincitore",
  "docs.howItWorks.winner.entirePool":
    "Chi ha puntato sulla casella vincente si divide **tutto il montepremi del round**, non solo il piatto di quella casella.",
  "docs.howItWorks.winner.proRata":
    "La divisione è **pro-rata**: se hai messo il {pct} della casella, prendi il **{pct}** del pagamento.",
  "docs.howItWorks.winner.take":
    "Da ogni montepremi si toglie **{take}** prima della divisione: **{chaseCut}** alimenta il jackpot della Caccia, **{protocolCut}** finanzia il protocollo (inviti, acquisto carte per la Caccia, gestione, riacquisti di token).",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "Quel {take} viene pagato con le carte ovunque possibile, partendo dalla carta di scorta meno costosa, e una carta troppo preziosa per rientrare nella trattenuta viene saltata invece che venduta, così le grandi pescate non sono quelle che se ne vanno. Solo ciò che le carte non coprono esce dal contante del montepremi.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "La Caccia",
  "docs.howItWorks.chase.feed": "La Caccia è un jackpot progressivo, alimentato dal **{cut}** di ogni montepremi.",
  "docs.howItWorks.chase.cardCut":
    "Quando può, la Caccia si prende la sua fetta in carte invece che in contanti, ma solo una carta di una casella perdente che valga **non più del {cut}** del montepremi, mai la carta più preziosa del round e mai una Grail.",
  "docs.howItWorks.chase.independentDraw":
    "Il jackpot scatta con una **estrazione casuale indipendente**, in media circa **una volta a settimana** alla velocità tipica dei round. Il pull di una Grail non lo fa scattare.",
  "docs.howItWorks.chase.payout":
    "Quando scatta, **tutto il jackpot** finisce nella ripartizione vincente di quel round, poi si azzera e ricomincia a crescere dal round successivo.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Le Grail",
  "docs.howItWorks.grails.what":
    "Una **Grail** è il pull più raro e prezioso che un pack possa dare. Può uscire anche da uno Starter da {price}.",
  "docs.howItWorks.grails.headlineGrail":
    "Se la carta principale della casella vincente è una Grail: con **Tieni** il maggior sostenitore deve liquidare agli altri sostenitori la loro quota (scalata dai suoi contanti); con **Vendi** il pagamento si divide **pro-rata su tutta la casella**, non solo al maggior sostenitore.",
  "docs.howItWorks.grails.otherGrails":
    "Ogni altra Grail uscita in quel round (su un'altra casella, o come carta extra) è bottino in più per i sostenitori vincenti, trattato come qualsiasi altra carta extra. Non finisce mai nella Caccia, e siccome la trattenuta si paga partendo dalla carta meno costosa, una Grail è l'ultima carta che andrebbe a toccare.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "A chi vanno le carte",
  "docs.howItWorks.cards.headline":
    "La **carta principale** della casella vincente (il suo pull di valore più alto) è solo del maggior sostenitore: la tiene gratis, oppure la vende al suo tasso di riacquisto in contanti, che vanno a lui e non si dividono con il resto della casella.",
  "docs.howItWorks.cards.rest":
    "Tutte le altre carte uscite sulla casella, più il bottino passato dalle caselle perdenti, si distribuiscono partendo dalle più preziose, in proporzione alla puntata. Di solito il maggior sostenitore della casella finisce per prendersene di più, e le migliori.",
  "docs.howItWorks.cards.deduction":
    "Prendere una di quelle carte ti scala il suo prezzo di riacquisto dalla tua parte in contanti. È la stessa cifra che prenderesti vendendola, quindi non ci rimetti niente.",
  "docs.howItWorks.cards.neverForced":
    "Non te la puoi permettere? Non ti viene mai imposta. La compra il banco, e quei contanti restano dentro la ripartizione.",
  "docs.howItWorks.cards.workedExample":
    "**Esempio pratico.** Montepremi {pool}. **{take}** ({takeAmount}: {chaseAmount} alla Caccia, {protocolAmount} al protocollo) viene tolto prima, di solito pagato con una carta di scorta e non con i tuoi contanti. Restano **{split}** da dividere: tu hai puntato il {yourPct} della casella ({yourStake}), Sam ha puntato il {samPct} ({samStake}). La casella ha aperto una carta principale da {headline} (pack Legendary, **{buyback}** di riacquisto) e una carta extra da {extra}. La carta da {headline} te la tieni gratis: è tua comunque. La carta da {extra} va a Sam, e i suoi **{buyback}**, cioè **{samCash}**, escono dalla parte di Sam. Risultato: tu porti a casa **{yourStake} in contanti + la carta da {headline}**; Sam si prende **{samCash} in contanti + la carta da {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Tenere o vendere",
  "docs.howItWorks.keepSell.buttons":
    "Ogni carta che ricevi arriva con due pulsanti: **Tieni** mette lo slab nella tua collezione; **Vendi** ti paga il tasso di riacquisto del pack in USDC, dritto sul tuo saldo.",
  "docs.howItWorks.keepSell.usdc": "USDC è un dollaro digitale: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Il riacquisto lo decide il pack della carta: **{entryRate}** per Starter/Elite, **{midRate}** per Legendary, **{topRate}** da Grail in su.",
  "docs.howItWorks.keepSell.window":
    "Appena vinci hai una finestra di **{seconds} secondi**, e se non decidi si trascina semplicemente per tutto il round successivo: la trovi sotto il tabellone e in Le tue carte.",
  "docs.howItWorks.keepSell.autoSell":
    "Ancora indeciso quando quel round si blocca? Lì la carta **si vende da sola** al suo tasso di riacquisto. I soldi non restano mai bloccati.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Glossario",
  "docs.howItWorks.glossary.change":
    "**Resto**: soldi su una casella che non bastano per il pack successivo. Contano per il piatto e per la tua quota in caso di vincita, ma solo le carte aperte portano probabilità.",
  "docs.howItWorks.glossary.house":
    "**Il banco**: la cassa che finanzia i riacquisti delle carte e assorbe qualsiasi carta che nessuno può permettersi.",
  "docs.howItWorks.glossary.chase":
    "**La Caccia**: un jackpot progressivo alimentato dal {cut} di ogni montepremi; scatta con una sua estrazione indipendente, non per come è andata una carta.",
  "docs.howItWorks.glossary.grail": "**Grail**: la carta più rara e preziosa che un pack possa dare.",
  "docs.howItWorks.glossary.buyback":
    "**Riacquisto**: l'offerta sempre valida per incassare una carta dal {low} al {high} del suo valore, a seconda del livello del pack.",
  "docs.howItWorks.glossary.proRata": "**Pro-rata**: diviso in proporzione a quanto ci ha messo ciascuno.",
  "docs.howItWorks.glossary.vrf": "**VRF**: un'estrazione casuale che chiunque può verificare a posteriori.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component and stay untranslated.
  "docs.howItWorks.api.title": "API di scommessa (accesso chiuso)",
  "docs.howItWorks.api.what":
    "Un'API per leggere un round dal vivo, iscriversi allo stream di eventi e piazzare puntate da codice o da un agente. Usa le stesse probabilità e la stessa chiusura del tabellone.",
  "docs.howItWorks.api.access":
    "L'accesso è **chiuso** e solo su richiesta: disattivato di default, e ogni chiamata richiede una chiave API in allowlist.",
  "docs.howItWorks.api.realBets":
    "Per piazzare una puntata vera serve un controllo in più: la prova che sei davvero tu (lo stesso accesso del sito), e valgono gli stessi limiti di puntata che ha ogni giocatore.",
  "docs.howItWorks.api.contact": "Guarda la documentazione per sviluppatori in {path} e scrivi a {email} per chiedere una chiave.",
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
