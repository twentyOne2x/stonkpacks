// Portuguese, Brazil (Português): "docs" segment, native editorial pass.
// Two surfaces, same key set as i18n/en/docs.ts:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx)
//   docs.howItWorks.*            -> /lab/royale/how-it-works
// See royaleI18n.ts's file header for the {token} convention and the
// no-em-dash / brand-terms-stay-English / numbers-stay-$-USD rules.
//
// Interpolation tokens ({starter}, {take}, etc.) are filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations), never translated text.
//
// BOLD EMPHASIS (docs.howItWorks.* only): the `**bold**` markers render as
// <b>. The pairs stay balanced but sit on whichever words carry the emphasis
// in Portuguese, which is not always the same word as in English.
//
// TERMINOLOGY (see pt-BR/board.ts): tile = casa, pack = pack, pool = pote,
// backer = apoiador, pull = puxada, buyback = recompra, lock = travamento,
// jackpot = prêmio, Chase = Caçada, pro-rata = proporcional, change = troco.
// "The house" (the operator's vault) is "a banca", NEVER "a casa": "casa" is
// already the board tile in every pt-BR string. "Grail" stays an English
// proper noun, same as the Starter/Elite/Legendary/Grail/Mythic ladder.
// Register is informal ("você").
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29).
// The mechanic is described as LOOSE CHANGE in every locale; do not
// reintroduce "Heat", a transliteration of it, or a gloss of it into any
// rendered value. The docs.how.heatRemainder.* KEY names are kept only so
// the ten locales stay in key parity; key names are never rendered. The Portuguese word is "troco".
export default {
  "docs.header.title": "Guia",
  "docs.header.back": "← Voltar ao tabuleiro",

  "docs.tabs.ariaLabel": "Seções do guia",
  "docs.tabs.how": "Como funciona",
  "docs.tabs.technical": "Técnico",

  "docs.how.intro": "A versão em linguagem simples. Leia isto primeiro e depois vá em Técnico para a mecânica exata.",
  "docs.technical.intro": "As mecânicas exatas, em números claros.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "O que é o attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "Um jogo de abertura de packs ao vivo. A cada rodada, os jogadores apostam em casas com packs. Quando a rodada trava, toda casa apostada rasga seus packs ao vivo, e os apoiadores de uma delas dividem o pote inteiro.",

  "docs.how.whatIsPack.q": "O que é um pack?",
  "docs.how.whatIsPack.a":
    "Um nível com preço que vira uma carta graduada de verdade no instante em que a casa dele abre. A escada tem {starter}, {elite}, {legendary}, {grail} e {mythic}. Pack maior puxa carta maior.",

  "docs.how.howBacking.q": "Como funciona apostar em uma casa?",
  "docs.how.howBacking.a":
    "Escolha uma casa que você curtir e aposte packs nela. Se apostar junto com outros jogadores na mesma casa, vocês dividem: a sua fatia da vitória daquela casa é do tamanho dos packs que você mesmo colocou.",

  "docs.how.heatRemainder.q": "E se a minha aposta não fechar um pack inteiro?",
  "docs.how.heatRemainder.a":
    "Qualquer valor abaixo do preço do pack mais barato fica no tile como troco. Ele acompanha o resto da sua aposta, mas não abre carta nenhuma sozinho até virar um pack inteiro, e são as cartas abertas que decidem as chances.",

  "docs.how.howWheelPicks.q": "Como a roleta escolhe o vencedor?",
  "docs.how.howWheelPicks.a":
    "No fechamento, todo tile apostado abre seus packs ao vivo. A roleta então para em um tile, e quanto mais valiosas as cartas que aquele tile abriu, maior a fatia dele na roleta. Um único puxão grande pode tornar um tile pequeno o favorito. A escolha em si vem de um sorteio aleatório verificável, nunca de uma pessoa.",

  "docs.how.whatDoIWin.q": "O que eu ganho?",
  "docs.how.whatDoIWin.aBefore": "Os apoiadores da casa vencedora dividem",
  "docs.how.whatDoIWin.aEmphasis": "o pote inteiro da rodada",
  "docs.how.whatDoIWin.aAfter":
    ", não só as apostas daquela casa, na proporção do que cada um apostou nela. O maior apoiador da casa ainda tem a primeira escolha sobre a melhor carta dela.",

  "docs.how.keepOrSell.q": "Guardar ou vender, qual é a diferença?",
  "docs.how.keepOrSell.keepLabel": "Guardar",
  "docs.how.keepOrSell.keepBody": "põe a carta na sua coleção de graça.",
  "docs.how.keepOrSell.sellLabel": "Vender de volta",
  "docs.how.keepOrSell.sellBody": "paga uma parte do valor da carta direto no seu saldo em USDC, sem espera.",

  "docs.how.decisionTimeout.q": "O que acontece se eu não decidir a tempo?",
  "docs.how.decisionTimeout.a":
    "Você tem uma janela curta para escolher. Se deixar passar, a carta é vendida de volta automaticamente pela taxa vigente, então nada que você ganhar fica parado.",

  "docs.how.whatIsChase.q": "O que é a Caçada?",
  "docs.how.whatIsChase.a":
    "Um prêmio acumulado, alimentado por uma parte pequena do pote de cada rodada. Ele pode cair em qualquer rodada, em um sorteio independente próprio, e um grail não dispara ele. Quando cai, o prêmio inteiro entra na divisão vencedora daquela rodada.",

  "docs.how.howToStartFree.q": "Como eu começo de graça?",
  "docs.how.howToStartFree.a":
    "Entre com um código de convite e resgate um saldo grátis do tamanho de um pack Starter. Sem carteira e sem login, você entra direto como convidado.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Escada de packs",
  "docs.tech.packLadder.body":
    "Cinco packs que você pode comprar: {starter}, {elite}, {legendary}, {grail}, {mythic}. Uma aposta monta os maiores packs que conseguir pagar, do maior para o menor. O que sobrar abaixo do preço do pack mais barato fica no tile como troco e não abre carta alguma. Uma aposta feita como um pack específico continua exatamente aquele pack, só o troco vai se juntando para cima conforme mais é adicionado.",

  "docs.tech.oddsWeighting.title": "O que define as chances: as cartas que o tile abre",
  "docs.tech.oddsWeighting.body":
    "A chance de um tile não é o que foi apostado nele. No fechamento cada tile financiado abre seus packs, e a fatia dele no sorteio é o valor das cartas que acabou de abrir, medido contra o valor de todas as cartas abertas na rodada. Um único puxão grande torna um tile pequeno o favorito. Um tile que não abriu carta nenhuma não tem chance alguma, e o troco sozinho nunca abre uma carta. Se uma rodada inteira não abrir nenhuma carta, não há o que sortear: a rodada é anulada e toda aposta é devolvida integralmente.",

  "docs.tech.vrfDraw.title": "O sorteio do vencedor vem de VRF e é determinístico",
  "docs.tech.vrfDraw.body":
    "Cada rodada deriva um número aleatório verificável a partir de uma receita fixa: o id da rodada, seu prazo, o tabuleiro congelado, a contagem de tickets e a entropia da chain colhida após o fechamento. O tile vencedor sai de uma única varredura determinística desse número sobre os pesos dos tiles. As mesmas entradas sempre produzem o mesmo vencedor, os pesos são publicados e travados antes da varredura, e qualquer pessoa pode reconferir o sorteio inteiro pelo recibo da rodada.",

  "docs.tech.settlementMath.title": "Contas da liquidação",
  "docs.tech.settlementMath.body":
    "Quem apostou no tile vencedor divide o pote inteiro da rodada, não só as apostas do próprio tile, na proporção do que cada um colocou nele. Uma taxa da casa de {take} sai primeiro: {chaseCut} alimenta o prêmio do The Chase, {protocolCut} financia o protocolo. Essa taxa é paga com cartas sempre que dá, começando pela carta sobrando mais barata, e uma carta valiosa demais para caber na taxa é pulada em vez de vendida, então os puxões grandes não são os que saem. Só o que as cartas não cobrem sai do dinheiro do pote.",

  "docs.tech.cardAllocation.title": "Quem fica com as cartas",
  "docs.tech.cardAllocation.body":
    "Só a melhor carta do tile vencedor traz uma decisão de ficar ou vender, e ela pertence ao maior apostador daquele tile. Cada outra carta que o tile abriu é repartida entre os apostadores na proporção do que cada um apostou, as melhores primeiro. Ficar com uma desconta o preço de recompra dela da sua própria parte em dinheiro, então é uma troca e não um custo: você termina a rodada com o mesmo valor de qualquer jeito. Se a parte de ninguém cobrir uma carta, a casa compra e esse dinheiro fica dentro da divisão, então nunca se impõe uma carta a ninguém. Um segundo grail na mesma rodada não tem tratamento especial aqui, ele é repartido junto com o resto do espólio, e o The Chase nunca leva um grail.",

  "docs.tech.sellBackRates.title": "Taxas de recompra",
  "docs.tech.sellBackRates.body":
    "Cada carta tem um preço de venda permanente definido pelo pack de onde ela saiu: {entryRate} no degrau de entrada, {midRate} no meio, {topRate} no topo. Vender credita esse preço no seu saldo na hora, e ficar com a carta não custa nada. As taxas espelham as taxas de recompra instantânea publicadas pela CollectorCrypt para as mesmas máquinas.",

  "docs.tech.chaseJackpot.title": "O prêmio da Caçada",
  "docs.tech.chaseJackpot.body":
    "Um prêmio acumulado alimentado por {chaseCut} do pote de cada rodada. Ele dispara em um sorteio independente próprio, mais ou menos uma vez por semana no ritmo normal de rodadas, e um grail não dispara ele. Quando cai, o prêmio inteiro entra na divisão vencedora daquela rodada, e depois ele zera e recomeça. O The Chase também leva uma carta por rodada quando dá, mas só de um tile que perdeu, nunca a carta mais valiosa da rodada e nunca um grail.",

  "docs.tech.decisionWindow.title": "Janela de decisão",
  "docs.tech.decisionWindow.body":
    "Ganhar a carta principal do tile abre uma janela de {window} segundos para ficar ou vender. Sem resposta até ela fechar, ou até o fechamento da rodada seguinte, a carta é vendida pela taxa vigente, para que nada do que você ganha fique preso.",

  "docs.tech.devnetCustody.title": "Custódia de USDC na devnet",
  "docs.tech.devnetCustody.body":
    "Os saldos se movem como transações reais de USDC na devnet da Solana. A custódia passa pela sua carteira embutida da Privy ou, como alternativa, por um par de chaves só de devnet guardado no seu próprio navegador, os dois assinando exatamente o mesmo caminho de transferência que a custódia de produção usa.",

  // --- Technical: lifecycle cards + docs nav (2026-07-29 restructure) ------
  // Machine-consistent translation of the new EN keys, house-style-matched
  // (no em dashes, brand terms and figures untranslated). FLAG FOR NATIVE PASS.
  "docs.tech.voidRefund.title": "Anulação e reembolso",
  "docs.tech.voidRefund.body":
    "Uma rodada só pode ser vencida por cartas abertas, então uma rodada em que nenhum tile abre carta não tem o que sortear. Essa rodada é anulada na hora: cada aposta do tabuleiro volta integralmente, a casa não leva nada e o The Chase não recebe nada. O registro publicado do sorteio de uma rodada anulada mostra um total de cartas em zero, a prova de que a anulação foi forçada pelo tabuleiro e não escolhida por ninguém.",

  "docs.tech.cardExits.title": "Cartas ganhas vão para a sua carteira",
  "docs.tech.cardExits.body":
    "Fique com uma carta e ela é transferida para a sua própria carteira como uma transação assinada, com as tarifas de rede pagas pela casa. Se a sua carteira ainda não puder recebê-la, a entrega fica parada e é tentada de novo até chegar, nunca descartada. Venda uma carta de volta e você recebe o preço exato cotado no momento em que a ganhou, nunca uma nova cotação, e essa cotação só pode ser exercida uma vez: ela é marcada como usada antes de o dinheiro se mover, então a mesma carta nunca pode ser paga duas vezes.",

  "docs.tech.deposits.title": "Depósitos de USDC",
  "docs.tech.deposits.body":
    "Um depósito é uma transferência de USDC na Solana que você assina da sua própria carteira. Seu saldo só é creditado depois que essa transferência é confirmada on-chain para a tesouraria do jogo, com o valor e o destino lidos da própria chain, nunca da requisição. Cada assinatura de transação pode creditar exatamente uma vez, então reenviar um depósito não credita em dobro, e uma transferência que chega acima do teto por transação é registrada como devida de volta a você em vez de sumir.",

  "docs.tech.withdrawals.title": "Saques de USDC",
  "docs.tech.withdrawals.body":
    "Um saque debita seu saldo primeiro e depois envia os USDC da tesouraria para o destino que você aprovou: seu login verificado assina exatamente esse valor e esse destino, e uma requisição que não bata com essa prova é recusada. O recibo guarda a assinatura da transação. Se a chain rejeitar a transferência em definitivo, seu saldo é reembolsado exatamente uma vez. Se a transferência saiu mas ainda não confirmou, nada é reembolsado até a chain dar uma resposta final, então um saque nunca pode pagar duas vezes, mesmo depois de um reinício.",

  "docs.tech.identity.title": "Uma conta só, não importa como você entra",
  "docs.tech.identity.body":
    "Entre com a Privy ou prove uma carteira Solana assinando um desafio de servidor de uso único: os dois caminhos levam à mesma conta durável, presa à identidade verificada e a nada mais. Tudo que move dinheiro roda na conta da identidade que se provou naquela mesma requisição, e nomes, ids e cabeçalhos declarados são descartados, então ninguém consegue apontar um depósito, uma aposta ou um saque para o saldo de outra pessoa.",

  "docs.tech.reconnect.title": "Reconexão e reinício",
  "docs.tech.reconnect.body":
    "Saia da conta e o dinheiro para: nos trilhos de USDC, um depósito, uma aposta ou um saque sem prova de propriedade é recusado. Entre de novo e a mesma conta está esperando, com o mesmo saldo e as mesmas cartas, porque tudo que é seu vive num livro-razão durável e não na página. Um reinício do servidor reproduz esse livro e cai nos mesmos números, e uma transferência que já saiu nunca é enviada uma segunda vez.",

  "docs.nav.ariaLabel": "Seções dos docs",
  "docs.nav.overview": "Visão geral",
  "docs.nav.prev": "Anterior",
  "docs.nav.next": "Próximo",

  "docs.nav.section.introduction": "Introdução",
  "docs.nav.section.gameplay": "Jogo",
  "docs.nav.section.cards": "Cartas e custódia",
  "docs.nav.section.money": "Dinheiro",
  "docs.nav.section.fairness": "Jogo justo",
  "docs.nav.section.account": "Conta",

  "docs.nav.page.whatIsRoyale": "O que é o attn ROYALE",
  "docs.nav.page.packs": "Packs e a escada",
  "docs.nav.page.startFree": "Comece de graça",
  "docs.nav.page.backing": "Apostar num tile",
  "docs.nav.page.theDraw": "O sorteio",
  "docs.nav.page.winning": "O que você ganha",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "Ficar ou vender",
  "docs.nav.page.cardAllocation": "Quem fica com as cartas",
  "docs.nav.page.sellBack": "Taxas de recompra",
  "docs.nav.page.cardDelivery": "Entrega de cartas",
  "docs.nav.page.deposits": "Depósitos",
  "docs.nav.page.withdrawals": "Saques",
  "docs.nav.page.settlement": "Contas da liquidação",
  "docs.nav.page.custody": "Custódia de USDC",
  "docs.nav.page.odds": "O que define as chances",
  "docs.nav.page.vrf": "O sorteio VRF",
  "docs.nav.page.voidRefund": "Anulação e reembolso",
  "docs.nav.page.identity": "Uma conta só",
  "docs.nav.page.reconnect": "Reconexão e reinício",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // Section titles render after a hardcoded "1 · " numeral prefix, so the
  // numbering never enters a value. Remember the `**bold**` convention.
  // =========================================================================

  // --- page header ---------------------------------------------------------
  "docs.howItWorks.title": "attn ROYALE: para onde vai cada dólar",
  "docs.howItWorks.lead": "As regras completas do jogo. Como o vencedor é sorteado e quem fica com as cartas.",
  "docs.howItWorks.backToBoard": "Voltar ao tabuleiro →",

  // --- 1 · How a round works -----------------------------------------------
  "docs.howItWorks.round.title": "Como funciona uma rodada",
  "docs.howItWorks.round.pickBet":
    "Escolha o valor da aposta e clique numa casa: cada clique soma esse valor ao pote dela.",
  "docs.howItWorks.round.yourShare":
    "**Sua fatia** de uma casa = a sua aposta ÷ o total daquela casa. {stake} numa casa de {tile} dá uma fatia de **{pct}**. Se ela vencer, você leva {pct} do pagamento dela.",
  // ODDS CORRECTION (2026-07-29, machine-consistent, flag for native pass):
  // aligned with the corrected /docs copy - draw weighted by revealed card
  // value, card-less boards voided and refunded.
  "docs.howItWorks.round.winChance":
    "**A chance de vitória** se decide na abertura, não na aposta: quando a rodada fecha, cada casa apostada abre seus packs, e a fatia da roda de uma casa é o valor das cartas que ela acabou de abrir, medido contra todas as cartas abertas na rodada.",
  "docs.howItWorks.round.tickets":
    "Uma casa que não abre **carta nenhuma** não tem fatia alguma, e se uma rodada inteira não abrir cartas, a rodada é **anulada** e cada aposta volta integralmente.",
  "docs.howItWorks.round.vrf":
    "No travamento, uma **VRF** (função aleatória verificável) sorteia um bilhete vencedor a partir dos números travados da rodada: o id da rodada, o prazo, o total de cada casa e a contagem de bilhetes. Ninguém, nem a banca, consegue mexer nisso.",
  "docs.howItWorks.round.oddsAreReal": "As chances que aparecem em cada casa são essa conta exata do sorteio, não um chute.",

  // --- 2 · What your bet buys ----------------------------------------------
  "docs.howItWorks.buys.title": "O que a sua aposta compra",
  "docs.howItWorks.buys.ladderLead": "O total de uma casa se recompõe em packs, do maior para o menor:",
  "docs.howItWorks.buys.example":
    "Exemplo: uma casa de **{amount}** compra um Legendary, um Elite e um Starter.",
  "docs.howItWorks.buys.change":
    "Dinheiro que não dá para o próximo pack é **troco**: ele conta para o pote e para a sua parte numa vitória, mas não abre pack, e são as cartas abertas que definem as chances.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Já tem um Mythic? O botão de upgrade mira **outro Mythic inteiro** em vez de um pack menor. A escada nunca desce um degrau.",
  "docs.howItWorks.buys.cardsPerPack":
    "No travamento, toda casa bancada abre **uma carta por pack inteiro** que tiver, até **{max} cartas** mostradas no tabuleiro (o resto aparece na página de resultados). Uma casa só com troco não abre nada.",
  "docs.howItWorks.buys.undeliverable":
    "Se um pack não puder ser entregue de verdade (esgotou, deu problema técnico, faltou tempo), o valor dele volta para você em dinheiro em vez de ficar preso.",

  // --- 3 · What the winner gets --------------------------------------------
  "docs.howItWorks.winner.title": "O que o vencedor leva",
  "docs.howItWorks.winner.entirePool":
    "Os apoiadores da casa vencedora dividem o **pote inteiro da rodada**, não só o pote daquela casa.",
  "docs.howItWorks.winner.proRata":
    "A divisão é **proporcional**: entrou com {pct} da casa, leva **{pct}** do pagamento.",
  "docs.howItWorks.winner.take":
    "**{take}** de todo pote sai do topo antes da divisão: **{chaseCut}** alimenta o prêmio da Caçada e **{protocolCut}** banca o protocolo (indicações, compra de cartas da Caçada, operação, recompra de token).",
  // TAKE CORRECTION (2026-07-29): cheapest spare card first, oversized cards
  // skipped; no explicit headline/grail protection rule exists in the engine.
  "docs.howItWorks.winner.takeFunding":
    "Esses {take} são pagos com cartas sempre que dá, começando pela carta sobrando mais barata, e uma carta valiosa demais para caber na taxa é pulada em vez de vendida, então os puxões grandes não são os que saem. Só o que as cartas não cobrem sai do dinheiro do pote.",

  // --- 4 · The Chase --------------------------------------------------------
  "docs.howItWorks.chase.title": "A Caçada",
  "docs.howItWorks.chase.feed": "A Caçada é um prêmio acumulado, alimentado com **{cut}** de todo pote.",
  "docs.howItWorks.chase.cardCut":
    "Quando dá, a Caçada leva a parte dela em carta em vez de dinheiro, mas só uma carta de casa perdedora que valha **no máximo {cut}** do pote, nunca a carta mais valiosa da rodada e nunca um grail.",
  "docs.howItWorks.chase.independentDraw":
    "O prêmio cai num **sorteio aleatório próprio e independente**, mais ou menos **uma vez por semana** no ritmo normal das rodadas. Puxar um grail não dispara nada disso.",
  "docs.howItWorks.chase.payout":
    "Quando cai, o **prêmio inteiro** entra na divisão vencedora daquela rodada, depois zera e volta a encher já com a rodada seguinte.",

  // --- 5 · Grails -----------------------------------------------------------
  "docs.howItWorks.grails.title": "Grails",
  "docs.howItWorks.grails.what":
    "Um **grail** é a puxada mais rara e mais valiosa que um pack pode soltar. Até um Starter de {price} pode tirar um.",
  "docs.howItWorks.grails.headlineGrail":
    "Se a carta principal da casa vencedora for um grail: **Guardar** exige que o maior apoiador compre a parte dos outros apoiadores da casa (descontada do dinheiro deles); **Vender** divide o pagamento **proporcionalmente pela casa inteira**, e não só com o maior apoiador.",
  "docs.howItWorks.grails.otherGrails":
    "Qualquer outro grail puxado na rodada (em outra casa, ou como carta extra) é bônus para os apoiadores vencedores e é tratado igual a qualquer outra carta extra. Ele nunca é recolhido para a Caçada, e como a taxa é paga começando pela carta mais barata, um grail é a última carta que ela alcançaria.",

  // --- 6 · Who gets the cards -----------------------------------------------
  "docs.howItWorks.cards.title": "Quem fica com as cartas",
  "docs.howItWorks.cards.headline":
    "A **carta principal** da casa vencedora (a puxada de maior valor dela) é só do maior apoiador da casa: ele Guarda de graça, ou Vende pela taxa de recompra em dinheiro, que vai para ele e não é dividida com o resto da casa.",
  "docs.howItWorks.cards.rest":
    "Todas as outras cartas que a casa puxou, mais o bônus que vier das casas perdedoras, são distribuídas da mais valiosa para a menos valiosa, na proporção da aposta. O maior apoiador da casa costuma sair com mais cartas, e com as melhores.",
  "docs.howItWorks.cards.deduction":
    "Ficar com uma dessas cartas desconta a recompra dela da sua parte em dinheiro. É exatamente o que você receberia vendendo, então você não perde nada.",
  "docs.howItWorks.cards.neverForced":
    "Não tem saldo para uma? Ninguém te obriga. A banca compra no seu lugar, e esse dinheiro fica dentro da divisão.",
  "docs.howItWorks.cards.workedExample":
    "**Exemplo na prática.** Pote {pool}. **{take}** ({takeAmount}: {chaseAmount} para a Caçada, {protocolAmount} para o protocolo) sai do topo, normalmente pago por uma carta sobrando e não pelo seu dinheiro. Sobram **{split}** para dividir: você apostou {yourPct} da casa ({yourStake}) e o Sam apostou {samPct} ({samStake}). A casa puxou uma carta principal {headline} (pack Legendary, recompra de **{buyback}**) e uma carta extra {extra}. Você guarda a carta {headline} de graça, ela é sua de qualquer jeito. A carta {extra} fica com o Sam, e **{buyback}** dela, ou seja **{samCash}**, sai da parte do Sam. No fim: você sai com **{yourStake} em dinheiro + a carta {headline}**; o Sam fica com **{samCash} em dinheiro + a carta {extra}**.",

  // --- 7 · Keep or sell -----------------------------------------------------
  "docs.howItWorks.keepSell.title": "Guardar ou vender",
  "docs.howItWorks.keepSell.buttons":
    "Toda carta que você recebe vem com dois botões: **Guardar** põe o slab na sua coleção; **Vender** paga a taxa de recompra do pack em USDC, direto no seu saldo.",
  "docs.howItWorks.keepSell.usdc": "USDC é um dólar digital: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "A recompra vem do pack da própria carta: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** de Grail para cima.",
  "docs.howItWorks.keepSell.window":
    "Você tem uma janela de **{seconds} segundos** logo depois de ganhar, e se não decidir ela simplesmente atravessa a rodada seguinte inteira: fica ativa embaixo do tabuleiro e em Suas cartas.",
  "docs.howItWorks.keepSell.autoSell":
    "Ainda na dúvida quando a próxima rodada travar? Aí a carta é **vendida automaticamente** pela taxa de recompra dela. Dinheiro nunca fica preso.",

  // --- 8 · Glossary ---------------------------------------------------------
  "docs.howItWorks.glossary.title": "Glossário",
  "docs.howItWorks.glossary.change":
    "**Troco**: dinheiro numa casa que não dá para comprar o próximo pack. Conta para o pote e para a sua parte numa vitória, mas só cartas abertas carregam chance.",
  "docs.howItWorks.glossary.house":
    "**A banca**: o cofre que paga as recompras de cartas e absorve qualquer carta que ninguém puder bancar.",
  "docs.howItWorks.glossary.chase":
    "**A Caçada**: um prêmio acumulado alimentado com {cut} de todo pote; cai num sorteio próprio e independente, não por causa de uma carta específica.",
  "docs.howItWorks.glossary.grail": "**Grail**: a carta mais rara e mais valiosa que um pack pode soltar.",
  "docs.howItWorks.glossary.buyback":
    "**Recompra**: a oferta permanente de trocar uma carta por {low} a {high} do valor dela, conforme o nível do pack.",
  "docs.howItWorks.glossary.proRata": "**Proporcional**: divisão na medida do que cada um colocou.",
  "docs.howItWorks.glossary.vrf": "**VRF**: um sorteio aleatório que qualquer um pode conferir depois.",

  // --- 9 · Betting API ------------------------------------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component and stay untranslated.
  "docs.howItWorks.api.title": "API de apostas (acesso fechado)",
  "docs.howItWorks.api.what":
    "Uma API para ler uma rodada ao vivo, assinar o fluxo de eventos e apostar por código ou por um agente. Ela roda as mesmas chances e a mesma liquidação do tabuleiro.",
  "docs.howItWorks.api.access":
    "O acesso é **fechado** e só por solicitação: vem desativado por padrão, e toda chamada precisa de uma chave de API na lista de permissões.",
  "docs.howItWorks.api.realBets":
    "Fazer uma aposta de verdade pede mais uma checagem: a prova de que é você mesmo (o mesmo login do site), e valem os mesmos limites de aposta de qualquer jogador.",
  "docs.howItWorks.api.contact": "Veja a documentação para devs em {path} e escreva para {email} para pedir uma chave.",
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
