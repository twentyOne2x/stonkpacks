// German (Deutsch): "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Same key set as en/docs.ts. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / numbers-stay-$-USD rules.
//
// Interpolation tokens ({starter}, {take}, etc.) are filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations) and are kept verbatim here.
//
// BOLD EMPHASIS (docs.howItWorks.* only): the `**bold**` markers render as
// <b>. The pairs stay balanced but sit on whichever German words carry the
// emphasis, which is rarely the same position as in English.
//
// REGISTER: formal (Siezen) throughout.
// TERMINOLOGY: "Chase" IS translated and always reads "die Jagd"; "the house"
// is "die Bank" (the German casino term); loose money / change is
// "Kleingeld"; a ticket is a "Ticket"; "graded" is "gegradet".
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE in every locale; do not
// reintroduce "Heat", a transliteration of it, or a gloss of it into any
// rendered value. The docs.how.heatRemainder.* KEY names are kept only so
// the ten locales stay in key parity; key names are never rendered.
export default {
  "docs.header.title": "Doku",
  "docs.header.back": "← Zurück zum Spielfeld",

  "docs.tabs.ariaLabel": "Doku-Ansicht",
  "docs.tabs.how": "So funktioniert's",
  "docs.tabs.technical": "Technisch",

  "docs.how.intro": "Die einfache Version. Lesen Sie zuerst hier und wechseln Sie dann auf Technisch für die genauen Mechaniken.",
  "docs.technical.intro": "Die genauen Mechaniken, in klaren Zahlen.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "Was ist attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "Ein Live-Pack-Opening-Spiel. In jeder Runde unterstützen Spieler Kacheln mit Packs. Sobald die Runde sperrt, reißt jede unterstützte Kachel ihre Packs live auf, und die Unterstützer einer Kachel teilen sich den ganzen Pool.",

  "docs.how.whatIsPack.q": "Was ist ein Pack?",
  "docs.how.whatIsPack.a":
    "Eine Preisstufe, die in dem Moment, in dem ihre Kachel öffnet, eine echte gegradete Karte freilegt. Die Leiter reicht von {starter} über {elite} und {legendary} bis {grail} und {mythic}. Größere Packs ziehen größere Karten.",

  "docs.how.howBacking.q": "Wie funktioniert das Unterstützen einer Kachel?",
  "docs.how.howBacking.a":
    "Wählen Sie eine Kachel aus und setzen Sie Packs darauf. Setzen andere Spieler auf dieselbe Kachel, teilen Sie sie sich: Ihr Anteil am Gewinn dieser Kachel entspricht dem Anteil der Packs, die Sie selbst beigesteuert haben.",

  "docs.how.heatRemainder.q": "Was passiert, wenn mein Einsatz nicht für ein ganzes Pack reicht?",
  "docs.how.heatRemainder.a":
    "Alles unterhalb des Preises des günstigsten Packs bleibt als Restgeld auf dem Feld liegen. Es läuft mit dem Rest deines Einsatzes mit, öffnet aber keine eigene Karte, bis daraus ein ganzes Pack wird, und über die Chancen entscheiden die geöffneten Karten.",

  "docs.how.howWheelPicks.q": "Wie wählt das Rad einen Gewinner aus?",
  "docs.how.howWheelPicks.a":
    "Beim Sperren öffnet jedes gesetzte Feld seine Packs live. Das Rad bleibt dann auf einem Feld stehen, und je wertvoller die geöffneten Karten dieses Feldes sind, desto größer ist sein Anteil am Rad. Ein einziger großer Zug kann ein kleines Feld zum Favoriten machen. Die Auswahl selbst stammt aus einer überprüfbaren Zufallsziehung, nie von einem Menschen.",

  "docs.how.whatDoIWin.q": "Was gewinne ich?",
  "docs.how.whatDoIWin.aBefore": "Die Unterstützer der Gewinner-Kachel teilen sich den",
  "docs.how.whatDoIWin.aEmphasis": "gesamten Rundenpool",
  "docs.how.whatDoIWin.aAfter":
    ", nicht nur die Einsätze auf dieser einen Kachel, und zwar im Verhältnis zum jeweiligen Einsatz. Der größte Unterstützer der Kachel bekommt außerdem den ersten Zugriff auf ihre beste einzelne Karte.",

  "docs.how.keepOrSell.q": "Behalten oder verkaufen, was ist der Unterschied?",
  "docs.how.keepOrSell.keepLabel": "Behalten",
  "docs.how.keepOrSell.keepBody": "legt die Karte kostenlos in Ihre Sammlung.",
  "docs.how.keepOrSell.sellLabel": "Zurückverkaufen",
  "docs.how.keepOrSell.sellBody": "zahlt Ihnen sofort einen Teil des Kartenwerts in USDC aufs Guthaben, ohne Wartezeit.",

  "docs.how.decisionTimeout.q": "Was passiert, wenn ich mich nicht rechtzeitig entscheide?",
  "docs.how.decisionTimeout.a":
    "Sie haben ein kurzes Zeitfenster für Ihre Wahl. Verstreicht es, wird die Karte automatisch zum aktuellen Satz zurückverkauft, damit nie etwas hängen bleibt, das Sie gewonnen haben.",

  "docs.how.whatIsChase.q": "Was ist die Jagd?",
  "docs.how.whatIsChase.a":
    "Ein wachsender Jackpot, gespeist aus einem kleinen Anteil jedes Rundenpools. Er kann in jeder Runde auslösen, über eine eigene unabhängige Ziehung, und ein Grail-Zug löst ihn nicht aus. Wenn er fällt, fließt der gesamte Jackpot in den Gewinner-Split dieser Runde.",

  "docs.how.howToStartFree.q": "Wie starte ich kostenlos?",
  "docs.how.howToStartFree.a":
    "Treten Sie mit einem Einladungscode bei und sichern Sie sich ein kostenloses Guthaben in Höhe eines Starter-Packs. Keine Wallet, keine Anmeldung, Sie können direkt als Gast loslegen.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Pack-Leiter",
  "docs.tech.packLadder.body":
    "Fünf kaufbare Packs: {starter}, {elite}, {legendary}, {grail}, {mythic}. Ein Einsatz baut die größten Packs, die er bezahlen kann, größte zuerst. Was unter dem Preis des günstigsten Packs übrig bleibt, liegt als Restgeld auf dem Feld und öffnet keine eigene Karte. Ein als bestimmtes Pack gesetzter Einsatz bleibt genau dieses Pack, nur das Restgeld wächst nach oben, wenn mehr dazukommt.",

  "docs.tech.oddsWeighting.title": "Was die Chancen bestimmt: die Karten, die ein Feld öffnet",
  "docs.tech.oddsWeighting.body":
    "Die Gewinnchance eines Feldes hängt nicht davon ab, wie viel darauf gesetzt wurde. Beim Sperren öffnet jedes finanzierte Feld seine Packs, und sein Anteil an der Ziehung ist der Wert der gerade geöffneten Karten, gemessen am Wert aller in dieser Runde geöffneten Karten. Ein großer Zug macht ein kleines Feld zum Favoriten. Ein Feld, das keine Karte geöffnet hat, hat keinerlei Chance, und Restgeld allein öffnet nie eine Karte. Öffnet eine ganze Runde keine Karte, gibt es nichts zu ziehen: die Runde wird annulliert und jeder Einsatz vollständig erstattet.",

  "docs.tech.vrfDraw.title": "Die Gewinnerziehung ist VRF-basiert und deterministisch",
  "docs.tech.vrfDraw.body":
    "Jede Runde leitet eine überprüfbare Zufallszahl aus einem festen Rezept ab: Runden-ID, Deadline, das eingefrorene Board, die Ticketanzahl und die nach dem Sperren gezogene Chain-Entropie. Das Gewinnerfeld ergibt sich aus einem einzigen deterministischen Durchlauf dieser Zahl über die Gewichte der Felder. Gleiche Eingaben ergeben immer denselben Gewinner, die Feldgewichte werden vor dem Durchlauf veröffentlicht und festgeschrieben, und jeder kann die gesamte Ziehung später anhand der Rundenquittung nachprüfen.",

  "docs.tech.settlementMath.title": "Abrechnungsmathematik",
  "docs.tech.settlementMath.body":
    "Die Backer des Gewinnerfeldes teilen den gesamten Rundenpool, nicht nur die Einsätze ihres eigenen Feldes, anteilig zu dem, was jeder auf dieses Feld gesetzt hat. Ein Hausanteil von {take} geht vorab ab: {chaseCut} baut den The-Chase-Jackpot auf, {protocolCut} finanziert das Protokoll. Dieser Anteil wird nach Möglichkeit mit Karten bezahlt, günstigste überzählige Karte zuerst, und eine Karte, die zu wertvoll ist, um in den Anteil zu passen, wird übersprungen statt verkauft, sodass die großen Züge nicht die sind, die weggehen. Nur was die Karten nicht decken, wird dem Bargeld des Pools entnommen.",

  "docs.tech.cardAllocation.title": "Wer die Karten bekommt",
  "docs.tech.cardAllocation.body":
    "Nur die beste einzelne Karte des Gewinnerfeldes trägt eine Behalten-oder-Verkaufen-Entscheidung, und sie gehört dem größten Backer dieses Feldes. Jede weitere Karte, die dieses Feld geöffnet hat, wird unter seinen Backern anteilig zum Einsatz verteilt, beste Karten zuerst. Eine davon zu nehmen zieht ihren Rückkaufpreis von deinem eigenen Bargeldanteil ab, es ist also ein Tausch und kein Kostenpunkt: du beendest die Runde so oder so mit demselben Wert. Kann kein Anteil eine Karte decken, kauft sie das Haus, und dieses Geld bleibt im Split, sodass niemandem je eine Karte aufgezwungen wird. Ein zweiter Grail in derselben Runde wird hier nicht besonders behandelt, er wird mit der übrigen Beute verteilt, und The Chase nimmt nie einen Grail.",

  "docs.tech.sellBackRates.title": "Rückkaufsätze",
  "docs.tech.sellBackRates.body":
    "Jede Karte hat einen festen Rückkaufpreis, den das Pack bestimmt, aus dem sie stammt: {entryRate} auf der Einstiegsstufe, {midRate} in der Mitte, {topRate} an der Spitze. Verkaufen schreibt diesen Preis sofort deinem Guthaben gut, Behalten kostet nichts. Die Sätze entsprechen den von CollectorCrypt veröffentlichten Sofort-Rückkaufsätzen für dieselben Automaten.",

  "docs.tech.chaseJackpot.title": "Der Jagd-Jackpot",
  "docs.tech.chaseJackpot.body":
    "Ein laufender Jackpot, gespeist mit {chaseCut} des Pools jeder Runde. Er löst über eine eigene, unabhängige Ziehung aus, bei normalem Rundentempo etwa einmal pro Woche, und ein Grail-Zug löst ihn nicht aus. Wenn er fällt, fließt der gesamte Jackpot in den Gewinner-Split dieser Runde, danach beginnt er von vorn. The Chase nimmt außerdem nach Möglichkeit eine Karte pro Runde, aber nur von einem Feld, das verloren hat, nie die wertvollste Karte der Runde und nie einen Grail.",

  "docs.tech.decisionWindow.title": "Entscheidungsfenster",
  "docs.tech.decisionWindow.body":
    "Wer die Hauptkarte des Feldes gewinnt, erhält ein Fenster von {window} Sekunden zum Behalten oder Verkaufen. Ohne Antwort bis zum Ende des Fensters oder bis zum Sperren der nächsten Runde wird die Karte zum geltenden Satz verkauft, damit nichts, was du gewinnst, jemals feststeckt.",

  "docs.tech.devnetCustody.title": "Devnet-USDC-Verwahrung",
  "docs.tech.devnetCustody.body":
    "Guthaben bewegen sich als echte USDC-Transaktionen im Solana-Devnet. Die Verwahrung läuft über Ihre eingebettete Privy-Wallet oder, als Rückfallebene, über ein reines Devnet-Schlüsselpaar in Ihrem eigenen Browser; beide signieren genau denselben Transferweg wie die Verwahrung im Produktivbetrieb.",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "Annullierung und Rückerstattung",
  "docs.tech.voidRefund.body":
    "Eine Runde kann nur über geöffnete Karten gewonnen werden; eine Runde, in der keine Kachel eine Karte öffnet, hat also nichts zu ziehen. Diese Runde wird sofort annulliert: Jeder Einsatz auf dem Brett kommt vollständig zurück, das Haus nimmt nichts, und die Jagd wird nicht gespeist. Der veröffentlichte Ziehungsbeleg einer annullierten Runde zeigt einen Kartenwert von null, der Beweis, dass die Annullierung vom Brett erzwungen und von niemandem gewählt wurde.",

  "docs.tech.cardExits.title": "Gewonnene Karten gehen in Ihre Wallet",
  "docs.tech.cardExits.body":
    "Behalten Sie eine Karte, wird sie als signierte Transaktion in Ihre eigene Wallet übertragen, die Netzwerkgebühren übernimmt das Haus. Kann Ihre Wallet sie noch nicht empfangen, wird die Zustellung geparkt und wiederholt, bis sie ankommt, nie verworfen. Verkaufen Sie eine Karte zurück, erhalten Sie exakt den Preis, der im Moment Ihres Gewinns notiert wurde, nie eine neue Notierung, und diese Notierung kann nur einmal eingelöst werden: Sie wird als verbraucht markiert, bevor Geld fließt, dieselbe Karte kann also nie zweimal ausgezahlt werden.",

  "docs.tech.deposits.title": "USDC-Einzahlungen",
  "docs.tech.deposits.body":
    "Eine Einzahlung ist ein USDC-Transfer auf Solana, den Sie aus Ihrer eigenen Wallet signieren. Ihr Guthaben wird erst gutgeschrieben, wenn dieser Transfer on-chain in die Schatzkammer des Spiels bestätigt ist; Betrag und Ziel werden von der Chain selbst gelesen, nie aus der Anfrage. Jede Transaktionssignatur kann genau einmal gutschreiben, ein erneut eingereichter Transfer kann also nie doppelt gutschreiben, und ein Transfer über der Obergrenze pro Transaktion wird als Rückschuld verbucht statt zu verschwinden.",

  "docs.tech.withdrawals.title": "USDC-Auszahlungen",
  "docs.tech.withdrawals.body":
    "Eine Auszahlung belastet zuerst Ihr Guthaben und sendet dann die USDC aus der Schatzkammer an das Ziel, das Sie freigegeben haben: Ihre verifizierte Anmeldung zeichnet genau diesen Betrag und dieses Ziel ab, und eine Anfrage, die nicht zu diesem Nachweis passt, wird abgelehnt. Der Beleg bewahrt die Transaktionssignatur. Lehnt die Chain den Transfer endgültig ab, wird Ihr Guthaben genau einmal erstattet. Ist der Transfer unterwegs, aber noch nicht bestätigt, wird nichts erstattet, bis die Chain eine endgültige Antwort gibt; eine Auszahlung kann also nie doppelt zahlen, selbst über einen Neustart hinweg.",

  "docs.tech.identity.title": "Ein Konto, egal wie Sie sich anmelden",
  "docs.tech.identity.body":
    "Melden Sie sich mit Privy an oder weisen Sie eine Solana-Wallet nach, indem Sie eine einmalige Server-Challenge signieren: Beide Wege führen zum selben dauerhaften Konto, das allein an der verifizierten Identität hängt. Alles, was Geld bewegt, läuft auf dem Konto der Identität, die sich in genau dieser Anfrage nachgewiesen hat; behauptete Namen, Ids und Header werden verworfen, niemand kann also eine Einzahlung, einen Einsatz oder eine Auszahlung auf das Guthaben eines anderen richten.",

  "docs.tech.reconnect.title": "Wiederverbinden und Neustart",
  "docs.tech.reconnect.body":
    "Melden Sie sich ab, steht das Geld still: Auf den USDC-Schienen wird eine Einzahlung, ein Einsatz oder eine Auszahlung ohne Eigentumsnachweis abgelehnt. Melden Sie sich wieder an, wartet dasselbe Konto, mit demselben Guthaben und denselben Karten, denn alles, was Ihnen gehört, lebt in einem dauerhaften Register und nicht in der Seite. Ein Server-Neustart spielt dieses Register nach und landet auf denselben Zahlen, und ein bereits gesendeter Transfer wird nie ein zweites Mal gesendet.",

  "docs.nav.ariaLabel": "Docs-Bereiche",
  "docs.nav.overview": "Überblick",
  "docs.nav.prev": "Zurück",
  "docs.nav.next": "Weiter",

  "docs.nav.section.introduction": "Einführung",
  "docs.nav.section.gameplay": "Spielablauf",
  "docs.nav.section.cards": "Karten und Verwahrung",
  "docs.nav.section.money": "Geld",
  "docs.nav.section.fairness": "Fairness",
  "docs.nav.section.account": "Konto",

  "docs.nav.page.whatIsRoyale": "Was ist attn ROYALE",
  "docs.nav.page.packs": "Packs und die Leiter",
  "docs.nav.page.startFree": "Gratis starten",
  "docs.nav.page.backing": "Eine Kachel unterstützen",
  "docs.nav.page.theDraw": "Die Ziehung",
  "docs.nav.page.winning": "Was Sie gewinnen",
  "docs.nav.page.chase": "Die Jagd",
  "docs.nav.page.keepOrSell": "Behalten oder verkaufen",
  "docs.nav.page.cardAllocation": "Wer die Karten bekommt",
  "docs.nav.page.sellBack": "Rückkaufsätze",
  "docs.nav.page.cardDelivery": "Kartenzustellung",
  "docs.nav.page.deposits": "Einzahlungen",
  "docs.nav.page.withdrawals": "Auszahlungen",
  "docs.nav.page.settlement": "Abrechnungsmathematik",
  "docs.nav.page.custody": "USDC-Verwahrung",
  "docs.nav.page.odds": "Was die Chancen bestimmt",
  "docs.nav.page.vrf": "Die VRF-Ziehung",
  "docs.nav.page.voidRefund": "Annullierung und Rückerstattung",
  "docs.nav.page.identity": "Ein Konto",
  "docs.nav.page.reconnect": "Wiederverbinden und Neustart",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // Section titles render after a hardcoded "1 · " numeral prefix, so the
  // numbering never enters a value. Remember the `**bold**` convention.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - wohin jeder Dollar fließt",
  "docs.howItWorks.lead": "Die vollständigen Spielregeln. Wie der Gewinner gezogen wird, und wer die Karten bekommt.",
  "docs.howItWorks.backToBoard": "Zurück zum Spielfeld →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "So läuft eine Runde",
  "docs.howItWorks.round.pickBet":
    "Einsatzgröße wählen, dann eine Kachel anklicken: Jeder Klick legt diesen Betrag in den Pot der Kachel.",
  "docs.howItWorks.round.yourShare":
    "**Ihr Anteil** an einer Kachel = Ihr Einsatz ÷ Gesamtsumme der Kachel. {stake} auf eine Kachel mit {tile} ergibt einen Anteil von **{pct}**. Gewinnt diese Kachel, bekommen Sie {pct} ihrer Auszahlung.",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**Die Gewinnchance** entscheidet sich beim Aufreißen, nicht beim Einsatz: Beim Sperren öffnet jede unterstützte Kachel ihre Packs, und der Anteil einer Kachel am Rad ist der Wert der gerade geöffneten Karten, gemessen an allen in der Runde geöffneten Karten.",
  "docs.howItWorks.round.tickets":
    "Eine Kachel, die **keine Karte** öffnet, hält gar keinen Anteil, und öffnet eine ganze Runde keine Karten, wird die Runde **annulliert** und jeder Einsatz kommt vollständig zurück.",
  "docs.howItWorks.round.vrf":
    "Bei der Sperre zieht eine **VRF** (überprüfbare Zufallsfunktion) ein Gewinnticket aus den gesperrten Zahlen der Runde: Runden-ID, Deadline, Gesamtsumme jeder Kachel, Ticketanzahl. Niemand kann das lenken, auch die Bank nicht.",
  "docs.howItWorks.round.oddsAreReal": "Die Quoten auf jeder Kachel sind genau diese Ziehungsmathematik, kein Bauchgefühl.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Was Ihr Einsatz kauft",
  "docs.howItWorks.buys.ladderLead": "Die Gesamtsumme einer Kachel setzt sich in Packs um, größte zuerst:",
  "docs.howItWorks.buys.example":
    "Beispiel: Eine Kachel mit **{amount}** kauft ein Legendary, ein Elite und ein Starter.",
  "docs.howItWorks.buys.change":
    "Geld, das für das nächste Pack nicht reicht, ist **Kleingeld**: Es zählt weiter für den Pot und Ihren Anteil an einem Gewinn, öffnet aber kein Pack, und die Chancen bestimmen die geöffneten Karten.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Sie halten schon ein Mythic? Dann zielt die Upgrade-Taste auf **ein weiteres ganzes Mythic** statt auf ein kleineres Pack. Die Leiter geht nie wieder abwärts.",
  "docs.howItWorks.buys.cardsPerPack":
    "Bei der Sperre öffnet jede finanzierte Kachel **eine Karte pro ganzem Pack**, bis zu **{max} Karten** auf dem Spielfeld (der Rest steht auf der Ergebnisseite). Eine Kachel mit reinem Kleingeld öffnet nichts.",
  "docs.howItWorks.buys.undeliverable":
    "Lässt sich ein Pack nicht liefern (ausverkauft, technische Panne, Zeit abgelaufen), bekommen Sie seinen Preis als Bargeld zurück, statt dass er hängen bleibt.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Was der Gewinner bekommt",
  "docs.howItWorks.winner.entirePool":
    "Die Unterstützer der Gewinner-Kachel teilen sich den **gesamten Rundenpool**, nicht nur den Pot dieser einen Kachel.",
  "docs.howItWorks.winner.proRata":
    "Die Aufteilung ist **anteilig**: Wer {pct} der Kachel gestellt hat, bekommt **{pct}** der Auszahlung.",
  "docs.howItWorks.winner.take":
    "**{take}** jedes Pools gehen vorab ab, bevor geteilt wird: **{chaseCut}** speisen den Jagd-Jackpot, **{protocolCut}** finanzieren das Protokoll (Empfehlungen, Kartenkäufe für die Jagd, Betrieb, Token-Rückkäufe).",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "Diese {take} werden nach Möglichkeit mit Karten bezahlt, die günstigste übrige Karte zuerst, und eine Karte, die zu wertvoll für die Gebühr ist, wird übersprungen statt verkauft; die großen Züge sind also nicht die, die gehen. Nur was die Karten nicht decken, kommt aus dem Bargeld des Pools.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "Die Jagd",
  "docs.howItWorks.chase.feed": "Die Jagd ist ein wachsender Jackpot, gespeist mit **{cut}** jedes Pools.",
  "docs.howItWorks.chase.cardCut":
    "Wenn möglich, nimmt die Jagd ihren Anteil als Karte statt als Bargeld, aber nur die Karte einer Verliererkachel im Wert von **höchstens {cut}** des Pools, nie die wertvollste Karte der Runde und nie einen Grail.",
  "docs.howItWorks.chase.independentDraw":
    "Der Jackpot löst über eine **eigene Zufallsziehung** aus, bei üblichem Rundentempo im Schnitt etwa **einmal pro Woche**. Eine Grail-Ziehung löst ihn nicht aus.",
  "docs.howItWorks.chase.payout":
    "Löst sie aus, fließt der **ganze Jackpot** in die Gewinnaufteilung dieser Runde; danach setzt er sich zurück und baut sich aus der Zufuhr der nächsten Runde neu auf.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grails",
  "docs.howItWorks.grails.what":
    "Ein **Grail** ist die seltenste und wertvollste Karte, die ein Pack ausspucken kann. Selbst ein Starter für {price} kann einen treffen.",
  "docs.howItWorks.grails.headlineGrail":
    "Ist die Hauptkarte der Gewinner-Kachel selbst ein Grail: **Behalten** verlangt vom größten Unterstützer, den Anteil der übrigen Unterstützer daran auszubezahlen (abgezogen von deren Bargeld); **Verkaufen** teilt die Auszahlung **anteilig auf die ganze Kachel** auf, nicht nur an den größten Unterstützer.",
  "docs.howItWorks.grails.otherGrails":
    "Jeder weitere Grail dieser Runde (auf einer anderen Kachel oder als Zusatzkarte) ist Bonusbeute für die gewinnenden Unterstützer und wird genau wie jede andere Zusatzkarte behandelt. Er wandert nie in die Jagd, und weil die Gebühr mit der günstigsten Karte zuerst bezahlt wird, wäre ein Grail die letzte Karte, nach der sie greift.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Wer die Karten bekommt",
  "docs.howItWorks.cards.headline":
    "Die **Hauptkarte** der Gewinner-Kachel (ihre wertvollste Ziehung) gehört allein dem größten Unterstützer der Kachel: kostenlos behalten oder zum Rückkaufsatz in bar verkaufen, ausgezahlt an ihn und nicht geteilt mit dem Rest der Kachel.",
  "docs.howItWorks.cards.rest":
    "Jede weitere Karte der Kachel, dazu die Bonusbeute aus Verliererkacheln, wird nach Wert absteigend im Verhältnis zum Einsatz verteilt. Der größte Unterstützer der Kachel bekommt meist das meiste und das beste davon.",
  "docs.howItWorks.cards.deduction":
    "Nehmen Sie eine dieser Karten, wird ihr Rückkaufpreis von Ihrem eigenen Baranteil abgezogen. Das ist genau das Geld, das Sie beim Verkauf bekämen, Sie verlieren also nichts.",
  "docs.howItWorks.cards.neverForced":
    "Zu teuer? Niemand zwingt Sie dazu. Dann kauft die Bank sie, und das Geld bleibt in der Aufteilung.",
  "docs.howItWorks.cards.workedExample":
    "**Beispielrechnung.** Pool {pool}. **{take}** ({takeAmount}: {chaseAmount} Jagd, {protocolAmount} Protokoll) gehen vorab ab, meist bezahlt durch eine übrige Karte statt aus Ihrem Bargeld. Zu verteilen bleiben **{split}**: Sie haben {yourPct} der Kachel gestellt ({yourStake}), Sam {samPct} ({samStake}). Die Kachel zog eine Hauptkarte {headline} (aus einem Legendary-Pack, **{buyback}** Rückkauf) und eine Zusatzkarte {extra}. Die Karte {headline} behalten Sie kostenlos, sie gehört ohnehin Ihnen. Die Karte {extra} geht an Sam: **{buyback}** dafür, also **{samCash}**, gehen von Sams Anteil ab. Unterm Strich: Sie gehen mit **{yourStake} Bargeld + der Karte {headline}** nach Hause, Sam mit **{samCash} Bargeld + der Karte {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Behalten oder verkaufen",
  "docs.howItWorks.keepSell.buttons":
    "Jede Karte, die Sie bekommen, kommt mit zwei Tasten: **Behalten** legt den Slab in Ihre Sammlung, **Verkaufen** zahlt den Rückkaufsatz des Packs in USDC direkt auf Ihr Guthaben.",
  "docs.howItWorks.keepSell.usdc": "USDC ist ein digitaler Dollar: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Der Rückkauf richtet sich nach dem Pack der Karte: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** ab Grail.",
  "docs.howItWorks.keepSell.window":
    "Direkt nach dem Gewinn haben Sie **{seconds} Sekunden** Zeit, und wenn Sie sich nicht entscheiden, läuft das Fenster einfach die ganze nächste Runde weiter: sichtbar unter dem Spielfeld und in Ihren Karten.",
  "docs.howItWorks.keepSell.autoSell":
    "Immer noch unentschieden, wenn die nächste Runde sperrt? Dann **verkauft sich die Karte automatisch** zum Rückkaufsatz. Geld bleibt nie hängen.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Glossar",
  "docs.howItWorks.glossary.change":
    "**Kleingeld**: Geld auf einer Kachel, das für das nächste Pack nicht reicht. Es zählt für den Pot und Ihren Anteil an einem Gewinn, aber nur geöffnete Karten tragen Gewinnchance.",
  "docs.howItWorks.glossary.house":
    "**Die Bank**: der Tresor, der die Kartenrückkäufe finanziert und jede Karte übernimmt, die sich niemand leisten kann.",
  "docs.howItWorks.glossary.chase":
    "**Die Jagd**: ein wachsender Jackpot, gespeist mit {cut} jedes Pools; löst über eine eigene Ziehung aus, nicht über ein bestimmtes Kartenergebnis.",
  "docs.howItWorks.glossary.grail": "**Grail**: die seltenste und wertvollste Karte, die ein Pack ausspucken kann.",
  "docs.howItWorks.glossary.buyback":
    "**Rückkauf**: das stehende Angebot, eine Karte für {low} bis {high} ihres Werts auszuzahlen, je nach Pack-Stufe.",
  "docs.howItWorks.glossary.proRata": "**Anteilig**: aufgeteilt im Verhältnis zum jeweiligen Einsatz.",
  "docs.howItWorks.glossary.vrf": "**VRF**: eine Zufallsziehung, die jeder im Nachhinein überprüfen kann.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "Wett-API (geschlossener Zugang)",
  "docs.howItWorks.api.what":
    "Eine programmierbare API, um eine laufende Runde auszulesen, den Ereignisstrom zu abonnieren und Einsätze aus Code oder von einem Agenten zu platzieren. Sie nutzt dieselben Quoten und dieselbe Abrechnung wie das Spielfeld.",
  "docs.howItWorks.api.access":
    "Der Zugang ist **geschlossen** und nur auf Anfrage: standardmäßig deaktiviert, und jeder Aufruf braucht einen freigeschalteten API-Schlüssel.",
  "docs.howItWorks.api.realBets":
    "Für einen echten Einsatz kommt eine Prüfung dazu: der Nachweis, dass Sie es wirklich sind (dieselbe Anmeldung wie auf der Seite). Es gelten dieselben Einsatzgrenzen wie für jeden Spieler.",
  "docs.howItWorks.api.contact": "Die Entwicklerdoku finden Sie unter {path}; schreiben Sie an {email}, um einen Schlüssel anzufragen.",
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
