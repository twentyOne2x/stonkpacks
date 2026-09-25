// Spanish, Latin America (Español): "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// Same key set as en/docs.ts. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / numbers-stay-$-USD rules that apply to every
// locale.
//
// Terminology locked for this segment (kept consistent with board.ts /
// arena.ts / misc.ts / core.ts): "back a tile" -> apostar a/en una casilla
// (this game's "backing" a tile is the same action as betting packs on it),
// "pot"/"pool" -> pozo, "jackpot" -> acumulado / pozo acumulado (a DIFFERENT
// word from "pozo" so the Chase total never reads as the round pool), "lock"
// (round lock) -> bloquear/bloqueo, "settle" -> liquidar/liquidación,
// "buyback/sell-back rate" -> tasa de recompra, "pull" (a card out of a pack)
// -> tirada, "graded slab" -> carta/pieza calificada, "wallet" -> billetera
// (LatAm term, not "cartera"). "The Chase" IS translated, "la Cacería",
// matching misc.chase.* and every other locale's house style.
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE in every locale; do not
// reintroduce "Heat", a transliteration of it, or a gloss of it into any
// rendered value. The docs.how.heatRemainder.* KEY names are kept only so
// the ten locales stay in key parity; key names are never rendered.
//
// CollectorCrypt/Privy/Solana/USDC/VRF and the five pack TIER NAMES
// (Starter / Elite / Legendary / Grail / Mythic) stay English and
// capitalized, mid-sentence included.
//
// BOLD EMPHASIS (docs.howItWorks.* only): those values carry inline `**bold**`
// markers the route renders as <b>. The pairs stay balanced here but sit on
// whichever words carry the emphasis in Spanish, which is not always the same
// word English bolds.
//
// NO SOURCE-FILE CITATIONS (owner directive 2026-07-29): the per-file
// <code> chip under each Technical card was deleted from the component.
// Never reintroduce a file name, path or module into player copy.
//
// This is the ONLY file an agent working on the "docs" surface should need
// to touch for this locale; index.ts already spreads it in and should not
// need to change again.
export default {
  "docs.header.title": "Guías",
  "docs.header.back": "← Volver al tablero",

  "docs.tabs.ariaLabel": "Vista de guías",
  "docs.tabs.how": "Cómo funciona",
  "docs.tabs.technical": "Técnico",

  "docs.how.intro": "La versión en palabras simples. Léela primero y luego pásate a Técnico para la mecánica exacta.",
  "docs.technical.intro": "Las mecánicas exactas, en números claros.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "¿Qué es attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "Un juego en vivo de abrir packs. En cada ronda los jugadores apuestan packs a las casillas. Cuando la ronda se bloquea, cada casilla con apuestas rompe sus packs en vivo, y quienes apostaron a una sola casilla se reparten todo el pozo.",

  "docs.how.whatIsPack.q": "¿Qué es un pack?",
  "docs.how.whatIsPack.a":
    "Un nivel con precio que se abre en una carta calificada real en cuanto abre su casilla. La escalera va de {starter} a {elite}, {legendary}, {grail} y {mythic}. Mientras más grande el pack, más grande la carta.",

  "docs.how.howBacking.q": "¿Cómo funciona apostar a una casilla?",
  "docs.how.howBacking.a":
    "Elige la casilla que te guste y apuéstale packs. Si apuestas junto a otros jugadores en la misma casilla, la comparten: tu tajada de lo que gane esa casilla es igual a la parte de packs que pusiste tú.",

  "docs.how.heatRemainder.q": "¿Y si mi apuesta no completa un pack entero?",
  "docs.how.heatRemainder.a":
    "Todo lo que quede por debajo del precio del pack más barato se queda en la casilla como cambio suelto. Acompaña al resto de tu apuesta, pero no abre ninguna carta propia hasta que crece hasta un pack entero, y son las cartas abiertas las que deciden las probabilidades.",

  "docs.how.howWheelPicks.q": "¿Cómo elige la rueda al ganador?",
  "docs.how.howWheelPicks.a":
    "Al cerrarse la ronda, cada casilla apostada abre sus packs en vivo. La rueda entonces cae en una casilla, y cuanto más valen las cartas que esa casilla abrió, mayor es su porción de la rueda. Un solo golpe grande puede volver favorita a una casilla pequeña. La elección viene de un sorteo aleatorio verificable, nunca de una persona.",

  "docs.how.whatDoIWin.q": "¿Qué gano?",
  "docs.how.whatDoIWin.aBefore": "Quienes apostaron a la casilla ganadora se reparten",
  "docs.how.whatDoIWin.aEmphasis": "todo el pozo de la ronda",
  "docs.how.whatDoIWin.aAfter":
    ", no solo las apuestas de esa casilla, en proporción a lo que puso cada uno. Quien más apostó a la casilla también tiene el primer derecho sobre su mejor carta.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Conservar o vender, ¿cuál es la diferencia?",
  "docs.how.keepOrSell.keepLabel": "Conservar",
  "docs.how.keepOrSell.keepBody": "suma la carta a tu colección, gratis.",
  "docs.how.keepOrSell.sellLabel": "Vender",
  "docs.how.keepOrSell.sellBody": "te paga una parte del valor de la carta directo a tu saldo en USDC, sin esperas.",

  "docs.how.decisionTimeout.q": "¿Qué pasa si no decido a tiempo?",
  "docs.how.decisionTimeout.a":
    "Tienes una ventana corta para elegir. Si la dejas pasar, la carta se vende sola a su tasa vigente, así nada de lo que ganas se queda atascado.",

  "docs.how.whatIsChase.q": "¿Qué es la Cacería?",
  "docs.how.whatIsChase.a":
    "Un pozo acumulado que crece con una parte chica del pozo de cada ronda. Puede caer en cualquier ronda, con su propio sorteo independiente, y un grail no lo dispara. Cuando cae, el pozo entero se paga dentro del reparto ganador de esa ronda.",

  "docs.how.howToStartFree.q": "¿Cómo empiezo gratis?",
  "docs.how.howToStartFree.a":
    "Entra con un código de invitación y reclama un saldo gratis del tamaño de un pack Starter. No necesitas billetera ni iniciar sesión, puedes jugar de una como invitado.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Escalera de packs",
  "docs.tech.packLadder.body":
    "Cinco packs que puedes comprar: {starter}, {elite}, {legendary}, {grail}, {mythic}. Una apuesta arma los packs más grandes que pueda pagar, del mayor al menor. Lo que quede por debajo del precio del pack más barato se queda en la casilla como cambio suelto y no abre ninguna carta. Una apuesta hecha como un pack específico sigue siendo ese pack exacto, solo el cambio suelto se va combinando hacia arriba a medida que se suma más.",

  "docs.tech.oddsWeighting.title": "Qué define las probabilidades: las cartas que abre una casilla",
  "docs.tech.oddsWeighting.body":
    "La probabilidad de una casilla no es lo que se apostó en ella. Al cerrarse la ronda cada casilla financiada abre sus packs, y su porción del sorteo es el valor de las cartas que acaba de abrir, medido contra el valor de todas las cartas abiertas en la ronda. Un solo golpe grande vuelve favorita a una casilla pequeña. Una casilla que no abrió ninguna carta no tiene probabilidad alguna, y el cambio suelto por sí solo nunca abre una carta. Si una ronda entera no abre ninguna carta, no hay nada que sortear: la ronda se anula y toda apuesta se devuelve íntegra.",

  "docs.tech.vrfDraw.title": "El sorteo del ganador usa semilla VRF y es determinista",
  "docs.tech.vrfDraw.body":
    "Cada ronda deriva un número aleatorio verificable a partir de una receta fija: el id de la ronda, su fecha límite, el tablero congelado, la cantidad de tickets y la entropía de la cadena tomada después del cierre. La casilla ganadora sale de un único recorrido determinista de ese número sobre los pesos de las casillas. Las mismas entradas siempre producen el mismo ganador, los pesos se publican y quedan fijados antes del recorrido, y cualquiera puede volver a verificar todo el sorteo con el recibo de la ronda.",

  "docs.tech.settlementMath.title": "Cuentas de la liquidación",
  "docs.tech.settlementMath.body":
    "Quienes apostaron a la casilla ganadora se reparten todo el pozo de la ronda, no solo las apuestas de su casilla, en proporción a lo que cada uno puso en ella. Una comisión de la casa de {take} sale primero: {chaseCut} alimenta el pozo de The Chase, {protocolCut} financia el protocolo. Esa comisión se paga con cartas siempre que se pueda, empezando por la carta sobrante más barata, y una carta demasiado valiosa para caber en la comisión se omite en vez de venderse, así que los golpes grandes no son los que se van. Solo lo que las cartas no alcanzan a cubrir sale del efectivo del pozo.",

  "docs.tech.cardAllocation.title": "Quién se queda con las cartas",
  "docs.tech.cardAllocation.body":
    "Solo la mejor carta de la casilla ganadora trae una decisión de quedársela o venderla, y le pertenece al mayor apostador de esa casilla. Cada otra carta que esa casilla abrió se reparte entre sus apostadores en proporción a lo que puso cada uno, primero las mejores. Quedarte con una descuenta su precio de recompra de tu propia parte en efectivo, así que es un intercambio y no un costo: terminas la ronda con el mismo valor de cualquier forma. Si la parte de nadie alcanza para cubrir una carta, la casa la compra y ese dinero se queda dentro del reparto, así que nunca se le impone una carta a nadie. Un segundo grail en la misma ronda no recibe trato especial aquí, se reparte con el resto del botín, y The Chase nunca se lleva un grail.",

  "docs.tech.sellBackRates.title": "Tasas de recompra",
  "docs.tech.sellBackRates.body":
    "Cada carta tiene un precio de venta vigente que fija el pack del que salió: {entryRate} en el escalón de entrada, {midRate} en el medio, {topRate} en la cima. Vender acredita ese precio a tu saldo al instante, y quedarte con la carta no cuesta nada. Las tasas reflejan las tasas de recompra instantánea publicadas por CollectorCrypt para las mismas máquinas.",

  "docs.tech.chaseJackpot.title": "El acumulado de la Cacería",
  "docs.tech.chaseJackpot.body":
    "Un pozo acumulado alimentado con {chaseCut} del pozo de cada ronda. Se dispara con su propio sorteo independiente, más o menos una vez por semana al ritmo normal de rondas, y un grail no lo dispara. Cuando cae, el pozo entero se paga dentro del reparto ganador de esa ronda, y después se reinicia. The Chase además se lleva una carta por ronda cuando puede, pero solo de una casilla perdedora, nunca la carta más valiosa de la ronda y nunca un grail.",

  "docs.tech.decisionWindow.title": "Ventana de decisión",
  "docs.tech.decisionWindow.body":
    "Ganar la carta principal de la casilla abre una ventana de {window} segundos para quedártela o venderla. Si no respondes antes de que cierre, o antes del cierre de la ronda siguiente, la carta se vende a su tasa vigente, así nada de lo que ganas queda trabado.",

  "docs.tech.devnetCustody.title": "Custodia de USDC en devnet",
  "docs.tech.devnetCustody.body":
    "Los saldos se mueven como transacciones reales de USDC en la devnet de Solana. La custodia corre por tu billetera integrada de Privy o, como respaldo, por un par de claves exclusivo de devnet guardado en tu propio navegador; ambos firman exactamente la misma ruta de transferencia que usa la custodia de producción.",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "Anulación y reembolso",
  "docs.tech.voidRefund.body":
    "Una ronda solo puede ganarse con cartas abiertas, así que una ronda en la que ninguna casilla abre una carta no tiene nada que sortear. Esa ronda se anula en el acto: cada apuesta del tablero se devuelve íntegra, la casa no toma nada y The Chase no recibe nada. El registro publicado del sorteo de una ronda anulada muestra un total de cartas en cero, la prueba de que la anulación la forzó el tablero y no la eligió nadie.",

  "docs.tech.cardExits.title": "Las cartas ganadas van a tu billetera",
  "docs.tech.cardExits.body":
    "Quédate con una carta y se transfiere a tu propia billetera como una transacción firmada, con las comisiones de red cubiertas por la casa. Si tu billetera todavía no puede recibirla, la entrega queda en espera y se reintenta hasta completarse, nunca se descarta. Véndela de vuelta y se te paga el precio exacto cotizado en el momento en que la ganaste, nunca una nueva cotización, y esa cotización solo puede ejercerse una vez: se marca usada antes de que el dinero se mueva, así que la misma carta nunca puede pagarse dos veces.",

  "docs.tech.deposits.title": "Depósitos de USDC",
  "docs.tech.deposits.body":
    "Un depósito es una transferencia de USDC en Solana que firmas desde tu propia billetera. Tu saldo se acredita solo después de que esa transferencia se confirma en la cadena hacia la tesorería del juego, con el monto y el destino leídos de la cadena misma, nunca de la solicitud. Cada firma de transacción puede acreditar exactamente una vez, así que reenviar un depósito no puede acreditar doble, y una transferencia que llega por encima del tope por transacción se registra como deuda a tu favor en vez de desaparecer.",

  "docs.tech.withdrawals.title": "Retiros de USDC",
  "docs.tech.withdrawals.body":
    "Un retiro debita tu saldo primero y luego envía los USDC desde la tesorería al destino que aprobaste: tu inicio de sesión verificado firma ese monto y ese destino exactos, y una solicitud que no coincida con su prueba se rechaza. El recibo conserva la firma de la transacción. Si la cadena rechaza la transferencia de forma definitiva, tu saldo se reembolsa exactamente una vez. Si la transferencia salió pero aún no se confirma, no se reembolsa nada hasta que la cadena dé una respuesta final, así que un retiro nunca puede pagar dos veces, incluso tras un reinicio.",

  "docs.tech.identity.title": "Una sola cuenta, entres como entres",
  "docs.tech.identity.body":
    "Inicia sesión con Privy o demuestra una billetera de Solana firmando un desafío de servidor de un solo uso: los dos caminos llevan a la misma cuenta duradera, atada a la identidad verificada y a nada más. Todo lo que mueve dinero corre sobre la cuenta de la identidad que se probó en esa misma solicitud, y los nombres, ids y encabezados declarados se descartan, así que nadie puede apuntar un depósito, una apuesta o un retiro al saldo de otra persona.",

  "docs.tech.reconnect.title": "Reconexión y reinicio",
  "docs.tech.reconnect.body":
    "Cierra sesión y el dinero se detiene: en los rieles de USDC, un depósito, una apuesta o un retiro sin prueba de propiedad se rechaza. Vuelve a entrar y la misma cuenta te espera, con el mismo saldo y las mismas cartas, porque todo lo tuyo vive en un libro contable duradero y no en la página. Un reinicio del servidor reproduce ese libro y cae en los mismos números, y una transferencia que ya salió nunca se envía por segunda vez.",

  "docs.nav.ariaLabel": "Secciones de los docs",
  "docs.nav.overview": "Resumen",
  "docs.nav.prev": "Anterior",
  "docs.nav.next": "Siguiente",

  "docs.nav.section.introduction": "Introducción",
  "docs.nav.section.gameplay": "Juego",
  "docs.nav.section.cards": "Cartas y custodia",
  "docs.nav.section.money": "Dinero",
  "docs.nav.section.fairness": "Juego limpio",
  "docs.nav.section.account": "Cuenta",

  "docs.nav.page.whatIsRoyale": "Qué es attn ROYALE",
  "docs.nav.page.packs": "Packs y la escalera",
  "docs.nav.page.startFree": "Empieza gratis",
  "docs.nav.page.backing": "Apostar a una casilla",
  "docs.nav.page.theDraw": "El sorteo",
  "docs.nav.page.winning": "Qué ganas",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "Quedarse o vender",
  "docs.nav.page.cardAllocation": "Quién se queda con las cartas",
  "docs.nav.page.sellBack": "Tasas de recompra",
  "docs.nav.page.cardDelivery": "Entrega de cartas",
  "docs.nav.page.deposits": "Depósitos",
  "docs.nav.page.withdrawals": "Retiros",
  "docs.nav.page.settlement": "Cuentas de la liquidación",
  "docs.nav.page.custody": "Custodia de USDC",
  "docs.nav.page.odds": "Qué define las probabilidades",
  "docs.nav.page.vrf": "El sorteo VRF",
  "docs.nav.page.voidRefund": "Anulación y reembolso",
  "docs.nav.page.identity": "Una sola cuenta",
  "docs.nav.page.reconnect": "Reconexión y reinicio",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE, cómo se mueve cada dólar",
  "docs.howItWorks.lead": "Las reglas completas del juego. Cómo se sortea al ganador y quién se queda con las cartas.",
  "docs.howItWorks.backToBoard": "Volver al tablero →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Cómo funciona una ronda",
  "docs.howItWorks.round.pickBet":
    "Elige el tamaño de tu apuesta y haz clic en una casilla: cada clic le suma ese monto al pozo de la casilla.",
  "docs.howItWorks.round.yourShare":
    "**Tu parte** de una casilla = tu apuesta ÷ el total de esa casilla. {stake} en una casilla de {tile} es una parte del **{pct}**. Si esa casilla gana, te llevas el {pct} de su pago.",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**La probabilidad de ganar** se decide al abrir, no al apostar: cuando la ronda se cierra, cada casilla apostada abre sus packs, y la porción de la rueda de una casilla es el valor de las cartas que acaba de abrir, medido contra todas las cartas abiertas en la ronda.",
  "docs.howItWorks.round.tickets":
    "Una casilla que no abre **ninguna carta** no tiene porción alguna, y si una ronda entera no abre cartas, la ronda se **anula** y cada apuesta se devuelve íntegra.",
  "docs.howItWorks.round.vrf":
    "Al bloquearse la ronda, un **VRF** (función aleatoria verificable) saca un ticket ganador de los números que quedaron congelados: el id de la ronda, la fecha límite, el total de cada casilla y la cantidad de tickets. Nadie, ni la casa, puede desviarlo.",
  "docs.howItWorks.round.oddsAreReal": "La probabilidad que ves en cada casilla es esa misma cuenta del sorteo, no una corazonada.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Qué compra tu apuesta",
  "docs.howItWorks.buys.ladderLead": "El total de una casilla se recompone en packs, del más grande al más chico:",
  "docs.howItWorks.buys.example":
    "Ejemplo: una casilla de **{amount}** compra un Legendary, un Elite y un Starter.",
  "docs.howItWorks.buys.change":
    "El dinero que no alcanza para el siguiente pack es **cambio**: igual cuenta para el pozo y para tu parte si ganas, pero no abre ningún pack, y son las cartas abiertas las que definen las probabilidades.",
  "docs.howItWorks.buys.mythicUpgrade":
    "¿Ya tienes un Mythic? El botón de mejora apunta a **otro Mythic completo**, no a un pack más chico. La escalera nunca baja.",
  "docs.howItWorks.buys.cardsPerPack":
    "Al bloquearse la ronda, cada casilla con fondos abre **una carta por cada pack completo** que tenga, hasta **{max} cartas** visibles en el tablero (el resto queda listado en la página de resultados). Una casilla que solo tiene cambio no abre nada.",
  "docs.howItWorks.buys.undeliverable":
    "Si un pack no se puede entregar (agotado, una falla técnica, se acabó el tiempo), su costo te vuelve en efectivo en lugar de quedarse atascado.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Qué se lleva el ganador",
  "docs.howItWorks.winner.entirePool":
    "Quienes apostaron a la casilla ganadora se reparten **todo el pozo de la ronda**, no solo el pozo de esa casilla.",
  "docs.howItWorks.winner.proRata":
    "El reparto es **a prorrata**: si pusiste el {pct} de la casilla, te llevas el **{pct}** del pago.",
  "docs.howItWorks.winner.take":
    "Antes del reparto se descuenta el **{take}** de cada pozo: **{chaseCut}** alimenta el acumulado de la Cacería y **{protocolCut}** financia el protocolo (referidos, compra de cartas para la Cacería, operación, recompra de tokens).",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "Ese {take} se paga con cartas siempre que se puede, empezando por la carta sobrante más barata, y una carta demasiado valiosa para caber en la comisión se omite en vez de venderse, así que los golpes grandes no son los que se van. Solo lo que las cartas no alcanzan a cubrir sale del efectivo del pozo.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "La Cacería",
  "docs.howItWorks.chase.feed": "La Cacería es un pozo acumulado que crece con el **{cut}** de cada pozo.",
  "docs.howItWorks.chase.cardCut":
    "Cuando puede, la Cacería cobra su parte en carta y no en efectivo, pero solo una carta de una casilla perdedora que valga **no más del {cut}** del pozo, nunca la carta más valiosa de la ronda ni un Grail.",
  "docs.howItWorks.chase.independentDraw":
    "El acumulado se dispara con su propio **sorteo aleatorio independiente**, en promedio **una vez por semana** al ritmo normal de rondas. Sacar un Grail no lo activa.",
  "docs.howItWorks.chase.payout":
    "Cuando cae, **todo el acumulado** entra al reparto ganador de esa ronda, después se reinicia y vuelve a crecer con lo que aporte la ronda siguiente.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grails",
  "docs.howItWorks.grails.what":
    "Un **Grail** es la tirada más rara y valiosa que puede soltar un pack. Hasta un Starter de {price} puede sacar uno.",
  "docs.howItWorks.grails.headlineGrail":
    "Si la carta principal de la casilla ganadora es un Grail: **Conservar** obliga a quien más apostó a comprarle su parte al resto de la casilla (se le descuenta de su efectivo); **Vender** reparte el pago **a prorrata en toda la casilla**, no solo a quien más apostó.",
  "docs.howItWorks.grails.otherGrails":
    "Cualquier otro Grail que salga esa ronda (en otra casilla, o como carta extra) es botín adicional para quienes ganaron, y se maneja igual que cualquier otra carta extra. Nunca se lo lleva la Cacería, y como la comisión se paga empezando por la carta más barata, un Grail es la última carta que tocaría.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Quién se queda con las cartas",
  "docs.howItWorks.cards.headline":
    "La **carta principal** de la casilla ganadora (su tirada de mayor valor) es solo de quien más apostó a esa casilla: la conserva gratis, o la vende a su tasa de recompra en efectivo, y ese dinero es suyo, no se reparte con el resto de la casilla.",
  "docs.howItWorks.cards.rest":
    "Todas las demás cartas que sacó la casilla, más el botín que llegue de las casillas perdedoras, se reparten de mayor a menor valor, en proporción a lo apostado. Quien más apostó suele quedarse con la mayor cantidad, y con las mejores.",
  "docs.howItWorks.cards.deduction":
    "Quedarte con una de esas cartas te descuenta su precio de recompra de tu parte en efectivo. Es el mismo dinero que te daría venderla, así que no pierdes nada.",
  "docs.howItWorks.cards.neverForced":
    "¿No te alcanza para una? Nunca te la imponen. La casa la compra y ese dinero se queda dentro del reparto.",
  "docs.howItWorks.cards.workedExample":
    "**Ejemplo resuelto.** Pozo {pool}. Se descuenta primero el **{take}** ({takeAmount}: {chaseAmount} para la Cacería, {protocolAmount} para el protocolo), normalmente pagado con una carta sobrante y no con tu efectivo. Quedan **{split}** para repartir: tú apostaste el {yourPct} de la casilla ({yourStake}) y Sam el {samPct} ({samStake}). La casilla sacó una carta principal {headline} (de un pack Legendary, **{buyback}** de recompra) y una carta extra {extra}. Tú conservas la carta {headline} gratis. Es tuya igual. La carta {extra} va para Sam: su **{buyback}**, o sea **{samCash}**, sale del reparto de Sam. Resultado: te vas con **{yourStake} en efectivo + la carta {headline}**; Sam se lleva **{samCash} en efectivo + la carta {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Conservar o vender",
  "docs.howItWorks.keepSell.buttons":
    "Cada carta que recibes trae dos botones: **Conservar** manda la pieza a tu colección; **Vender** te paga la tasa de recompra del pack en USDC, directo a tu saldo.",
  "docs.howItWorks.keepSell.usdc": "USDC es un dólar digital: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "La recompra la fija el pack del que salió la carta: **{entryRate}** en Starter/Elite, **{midRate}** en Legendary, **{topRate}** de Grail para arriba.",
  "docs.howItWorks.keepSell.window":
    "Tienes una ventana de **{seconds} segundos** apenas ganas y, si no decides, se traslada a toda la ronda siguiente: sigue viva debajo del tablero y en Tus cartas.",
  "docs.howItWorks.keepSell.autoSell":
    "¿Sigues sin decidir cuando esa ronda se bloquea? Ahí la carta **se vende sola** a su tasa de recompra. El dinero nunca se queda atascado.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Glosario",
  "docs.howItWorks.glossary.change":
    "**Cambio**: dinero en una casilla que no alcanza para el siguiente pack. Cuenta para el pozo y para tu parte si ganas, pero solo las cartas abiertas llevan probabilidad.",
  "docs.howItWorks.glossary.house":
    "**La casa**: la bóveda que financia las recompras de cartas y absorbe cualquier carta que nadie pueda pagar.",
  "docs.howItWorks.glossary.chase":
    "**La Cacería**: un pozo acumulado que crece con {cut} de cada pozo; se dispara con su propio sorteo independiente, no por lo que salga en una carta.",
  "docs.howItWorks.glossary.grail": "**Grail**: la carta más rara y valiosa que puede soltar un pack.",
  "docs.howItWorks.glossary.buyback":
    "**Recompra**: la oferta permanente de cambiar una carta por efectivo, entre {low} y {high} de su valor según el nivel del pack.",
  "docs.howItWorks.glossary.proRata": "**A prorrata**: reparto en proporción a lo que puso cada quien.",
  "docs.howItWorks.glossary.vrf": "**VRF**: un sorteo aleatorio que cualquiera puede verificar después.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "API de apuestas (acceso cerrado)",
  "docs.howItWorks.api.what":
    "Una API programática para leer una ronda en vivo, suscribirte al flujo de eventos y apostar desde código o desde un agente. Corre con las mismas probabilidades y la misma liquidación que el tablero.",
  "docs.howItWorks.api.access":
    "El acceso está **cerrado** y solo por solicitud: viene desactivado por defecto y cada llamada necesita una clave de API en la lista de permitidos.",
  "docs.howItWorks.api.realBets":
    "Hacer una apuesta real pide una verificación más: comprobar que de verdad eres tú (el mismo inicio de sesión del sitio), y respeta los mismos límites de apuesta que tiene cualquier jugador.",
  "docs.howItWorks.api.contact": "Revisa la documentación para desarrolladores en {path} y escribe a {email} para pedir una clave.",
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
