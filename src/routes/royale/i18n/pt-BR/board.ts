// Portuguese, Brazil (Português): "board" segment, native editorial pass.
// Same key set as en/board.ts. See royaleI18n.ts for the {token}
// interpolation convention and the "no em dash" rule.
//
// Segment: board. Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx.
//
// TERMINOLOGY (binding across every pt-BR segment file, see .i18nGlossary):
//   tile = casa · pack = pack · pool = pote · draw = sorteio ·
//   bet/bid/stake = aposta (verbo: apostar em) · backer = apoiador ·
//   pull = puxada · buyback/sell back = recompra / vender de volta ·
//   vault = cofre · lock = travamento (verbo: travar) · odds = chance ·
//   auto-bet = auto-aposta (o termo usado pelos jogos de aposta brasileiros) ·
//   Chase = Caçada (o nome do recurso é traduzido em todos os idiomas).
// Register is INFORMAL ("você") throughout.
//
// Pack tier names (Starter, Elite, Legendary, Grail, Mythic) stay in English
// per the owner rule; they only reach this segment through {packName}/{tier}
// tokens filled in by the caller.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Jogadores e PnL em dinheiro",
  "board.playerScoreboard.title": "Jogadores",
  "board.playerScoreboard.open": "Estatísticas e silenciar",
  "board.playerScoreboard.pinnedHint": "Fixado · Esc para fechar",
  "board.playerScoreboard.holdHint": "Segure Tab para espiar · clique para fixar",
  "board.playerScoreboard.close": "Fechar placar dos jogadores",
  "board.playerScoreboard.windowAria": "Janela de PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Tudo",
  "board.playerScoreboard.partialHistory": "Histórico parcial. As classificações usam a janela preservada de valores liquidados em dinheiro.",
  "board.playerScoreboard.statsUnavailable": "O histórico de PnL não está disponível aqui. As apostas atuais continuam ativas.",
  "board.playerScoreboard.playerColumn": "Jogador",
  "board.playerScoreboard.pnlColumn": "PnL em dinheiro",
  "board.playerScoreboard.voiceColumn": "Chat",
  "board.playerScoreboard.loading": "Carregando jogadores…",
  "board.playerScoreboard.empty": "Ninguém apostou em uma casa nesta rodada.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Casas {tiles}",
  "board.playerScoreboard.stake": "Aposta {amount}",
  "board.playerScoreboard.notAvailable": "Indisponível",
  "board.playerScoreboard.rounds": "{n} rodadas",
  "board.playerScoreboard.youBadge": "Você",
  "board.playerScoreboard.mute": "Silenciar",
  "board.playerScoreboard.unmute": "Deixar de silenciar",
  "board.playerScoreboard.muteAria": "Silenciar {name} no chat",
  "board.playerScoreboard.unmuteAria": "Deixar de silenciar {name} no chat",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Você",
  "board.common.noWin": "sem prêmio",
  "board.common.roundSettled": "Rodada liquidada",
  "board.common.youWon": "Você ganhou {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "TRAVADO",
  "board.tile.lockedStampSub": "sem mais apostas",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: sua aposta de {bet} passa do seu saldo de {balance}. Diminua a aposta ou deposite.",
  "board.tile.ariaBack": "Apostar {amount} em {label}",
  "board.tile.ariaBackShortcutSuffix": ", atalho {shortcut}",
  "board.tile.ariaOddsChance": "{pct} de chance de ganhar",
  "board.tile.ariaBackers": "{count} apoiadores",
  "board.tile.yourPortraitAlt": "Seu retrato",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · ainda sem pack",
  "board.tile.noStake": "Sem aposta",
  // MEGA-AUDIT 2026-07-31 (locale-text-overflow, ownership pill): the tile
  // pill's CSS fit ladder (royaleStyles.css "(5)" block) is calibrated in EN
  // characters ("You own " = 8ch); "Você tem " (9ch) crossed the pill border
  // at tablet. "Aposta " (7ch, < EN) fits every lane EN fits and pairs with
  // the same tile's "Sem aposta" no-stake state.
  "board.tile.youOwn": "Aposta {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Packs abrem ao travar",
  "board.tile.resultOpened": "Aberta · {amount} em cartas",
  "board.tile.resultWinner": "VENCEDORA · {amount} em cartas",
  "board.tile.resultLost": "Perdeu o sorteio · {amount} em cartas",
  "board.tile.resultOpenedWord": "Aberta",
  "board.tile.resultWinnerWord": "VENCEDORA",
  "board.tile.resultLostWord": "Perdeu o sorteio",
  "board.tile.resultShortWon": "VENCEU",
  "board.tile.resultShortLost": "Perdeu",
  "board.tile.overBalance": "Passa do saldo",
  "board.tile.overBalanceTitle": "Precisa de {needed} · você tem {have}. Diminua a aposta ou deposite.",
  "board.tile.overCap": "passa do seu teto de {amount} (configurações)",
  "board.tile.needHave": "Precisa de {needed} · você tem {have}",
  "board.tile.clueExactCardOdds": "esta carta exata · {pct} de puxada",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Valor da aposta",
  "board.stakeControl.packMatchTitle": "Cada clique numa casa aposta um pack {packName} inteiro.",
  "board.stakeControl.packMatchTag": "apostando 1 pack {packName} por clique",
  "board.stakeControl.packMatchTitleOne": "Cada clique numa casa aposta {n} pack {packName} inteiro.",
  "board.stakeControl.packMatchTitleOther": "Cada clique numa casa aposta {n} packs {packName} inteiros.",
  "board.stakeControl.packMatchTagOne": "apostando {n} pack {packName} por clique",
  "board.stakeControl.packMatchTagOther": "apostando {n} packs {packName} por clique",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} packs {packName} por clique",
  "board.stakeControl.bidPackGroupAria": "Apostar um pack inteiro numa casa",
  "board.stakeControl.bidPackTag": "Apostar pack",
  "board.stakeControl.bidPackInfoTitle":
    "Um clique coloca um pack lacrado inteiro na casa. O pack continua sendo aquele pack, nunca vira um maior.",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Escolha um pack e a quantidade. Um clique aposta a pilha inteira em uma casa - packs maiores puxam cartas maiores. Teclas 1 a 8 escolhem a casa.",
  "board.stakeControl.bidPackInfoAria": "O que é apostar um pack?",
  "board.stakeControl.packSelectedTitle": "Selecionado. Clique de novo para voltar à aposta de {amount}.",
  "board.stakeControl.packChipTitle": "Cada clique numa casa aposta um pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOne": "Selecionado. Cada clique numa casa aposta {n} pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Selecionado. Cada clique numa casa aposta {n} packs {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Cada clique numa casa aposta {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Cada clique numa casa aposta {n} packs {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "PASSA DO SALDO",
  "board.stakeControl.overBalanceBody": "Precisa de mais do que o seu saldo de {amount}.",
  "board.stakeControl.bidAmountTag": "Apostar valor",
  "board.stakeControl.bidAmountInfoTitle":
    "Coloque qualquer valor numa casa. O dinheiro solto vira packs maiores conforme passa do preço de cada um.",
  "board.stakeControl.bidAmountInfoAria": "O que é apostar um valor?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Aumentar a aposta numa casa",
  "board.stakeControl.bidAmountGroupAria": "Apostar um valor numa casa",
  "board.stakeControl.packCountGroupAria": "Packs por clique",
  "board.stakeControl.packCountDecAria": "Apostar menos packs por clique",
  "board.stakeControl.packCountIncAria": "Apostar mais packs por clique",
  "board.stakeControl.packCountValueTitleOne": "{n} pack do nível armado por clique",
  "board.stakeControl.packCountValueTitleOther": "{n} packs do nível armado por clique",
  "board.stakeControl.incrementTitle": "Subir a aposta selecionada para {amount}",
  "board.stakeControl.customAriaLabel": "Valor de aposta personalizado em USDC, vale ao apertar Enter ou ao clicar fora",
  "board.stakeControl.customOverBalanceTitle": "Passa do seu saldo de {amount}. Deposite ou diminua a aposta.",
  "board.stakeControl.customTitle": "Digite qualquer valor, Enter ou clique fora para valer",
  "board.stakeControl.resetTitle": "Voltar a aposta selecionada para {amount}",
  "board.stakeControl.reset": "Zerar",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Estratégia de auto-aposta, arma no fim da rodada",
  "board.betRail.strategyArmedTip": "Armada, dispara em {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, armada, dispara em {seconds} segundos",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, armada, dispara em {seconds} segundos. Clique para desarmar.",
  "board.betRail.strategyAriaClickArm": "{name}. Clique para armar.",
  "board.betRail.moreStrategiesAria": "Mais estratégias de auto-aposta",
  "board.betRail.moreStrategiesTitle": "Mais estratégias",
  "board.betRail.cancelArmedAria": "Cancelar auto-aposta armada",
  "board.betRail.autoBetCancelled": "Auto-aposta cancelada.",
  "board.betRail.roundLockedSkip": "A rodada travou antes de a auto-aposta disparar.",
  "board.betRail.notEnoughBalanceSkip": "Saldo insuficiente, a auto-aposta não disparou.",
  "board.betRail.firedAtClose": "{name} disparou no fim da rodada.",
  "board.betRail.firedAtClosePartial": "{name} disparou no fim da rodada: {covered} de {total} blocos.",
  "board.betRail.strategyGuideAria": "Guia de estratégias de auto-aposta",
  "board.betRail.strategyGuideTitle": "Guia de estratégias",
  "board.betRail.autoBetEyebrow": "Auto-aposta",
  "board.betRail.firesInSeconds": "dispara em {seconds}s",
  "board.betRail.strategiesDialogAria": "Estratégias de auto-aposta",
  "board.betRail.closeStrategiesAria": "Fechar estratégias de auto-aposta",
  "board.betRail.strategiesHeading": "Estratégias de auto-aposta",
  "board.betRail.strategiesIntro":
    "Toque numa para armá-la com a sua aposta selecionada ({amount}). Ela dispara pouco antes de a rodada travar e escolhe as casas pelo dinheiro que cada uma tiver naquele instante, o sinal da galera.",
  "board.betRail.contrarianHeading": "Escolhas na contramão",
  "board.betRail.contrarianIntro":
    "Quando todo mundo corre para a casa mais fraca, ela lota, e a segunda mais fraca acaba pagando melhor. Estas ficam fora da barra principal para não poluir.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Sua conta e o valor da aposta",
  "board.betRail.balance": "Saldo",
  "board.betRail.activeStakes": "Apostas ativas",
  "board.betRail.collection": "Coleção",
  "board.betRail.cardCountViewAllSingular": "{count} CARTA · VER TODAS",
  "board.betRail.cardCountViewAllPlural": "{count} CARTAS · VER TODAS",
  "board.betRail.moreCount": "+{count} MAIS",
  "board.betRail.noCardsYet": "Nenhuma carta na coleção ainda. Ganhe com uma casa e fique com a carta dela.",
  "board.betRail.lastResult": "Último resultado",
  "board.betRail.eachClickAdds": "Cada clique soma {amount}",
  "board.betRail.depositToPlay": "Deposite para jogar",
  "board.betRail.affordShortfall": "Precisa de {unit}, você tem {balance}",
  "board.betRail.allTilesPartialCover": "{name}, cobre {covered} de 8 casas a {unit}",
  "board.betRail.dockBalance": "Saldo",
  "board.betRail.dockStakes": "Apostas",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Próxima rodada em {seconds} segundos",
  "board.core.nextRoundLine": "Próxima rodada em {secs}",
  "board.core.playersDecidingAria": "{decided} de {total} outros jogadores já decidiram",
  "board.core.playersDecidingLine": "Jogadores decidindo {ratio}",
  "board.core.pastRoundResultsAria": "Resultados das rodadas anteriores",
  "board.core.pastRounds": "Rodadas passadas",
  "board.core.winsAmount": "{label} leva {amount}",
  "board.core.youLost": "Você perdeu!",
  "board.core.didNotStake": "Você não apostou nesta rodada",
  "board.core.keepCard": "Guardar carta ({amount})",
  "board.core.sellAmount": "Vender {amount}",
  "board.core.decideHint": "Decida agora ou durante a próxima rodada",
  "board.core.roundResultLink": "Resultado da rodada #{roundId}",
  "board.core.fullReceiptHint": "Recibo completo → Resultados da rodada",
  "board.core.splitReceiptHint": "Divisão · recibo → Resultados da rodada",
  "board.core.eyebrowDrawing": "Sorteando o vencedor",
  "board.core.eyebrowPullsIn": "Saíram as puxadas",
  "board.core.eyebrowLocked": "Travada",
  "board.core.headlineDrawing": "Um bilhete decide tudo",
  "board.core.headlinePullsIn": "Todos os packs abertos",
  "board.core.headlineRoundLocked": "Rodada travada",
  "board.core.headlinePacksOpening": "Packs abrindo…",
  "board.core.subDrawing": "sorteio ponderado verificável",
  "board.core.subPullsIn": "agora vem o sorteio do vencedor",
  "board.core.subIntro": "{count} {noun} em jogo",
  "board.core.subOpening": "{count} {noun} abrindo no tabuleiro",
  "board.core.pool": "Pote",
  "board.core.totalPool": "Pote total",
  "board.core.clockRoundOpen": "Rodada aberta",
  "board.core.clockLockedRevealing": "Travada · revelando",
  "board.core.clockSettled": "Liquidada",
  "board.core.clockAriaLabel": "{label}, {seconds} segundos",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Slab padrão, o maior apoiador fica com ela ou vende de volta, proporcional.",
  "board.settlement.dispositionSellBackSplit": "Regra do Grail: vendida de volta por padrão, USDC dividido pela casa.",
  "board.settlement.dispositionTopBackerKeeps": "Regra do Grail: o maior apoiador fica com ela e paga a parte dos outros.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s para decidir",
  "board.settlement.panelAria": "Detalhes da casa e liquidação",
  "board.settlement.collapsePanelAria": "Recolher painel",
  "board.settlement.expandPanelAria": "Expandir painel",
  "board.settlement.roundResultsLink": "Resultados da rodada",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Painel da rodada",
  "board.settlement.clickTileToBack": "As vitórias caem aqui. Clique em qualquer casa para apostar {amount} nela.",
  "board.settlement.lastResultLine": "Último resultado · Rodada #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "você ganhou {amount}",
  "board.settlement.view": "ver",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Casa perdedora · por que perdeu",
  "board.settlement.losingTileTitle": "{label} · {amount} na casa",
  "board.settlement.loserWhy":
    "Abriu {cardName} ({amount}), e o sorteio caiu em {winnerLabel}. {pct} dos bilhetes não pagaram nada{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", incluindo os seus {amount}.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Esta casa estava vazia, sem aposta, sem bilhete de sorteio.",
  "board.settlement.backToSettlement": "Voltar à liquidação · {winnerLabel} venceu",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · carta {index}/{total} · {amount} na casa",
  "board.settlement.pullCaptionSingle": "{label} · {amount} na casa",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Packs abrindo",
  "board.settlement.revealOpenedTitle": "{label} abriu {cardName}",
  "board.settlement.revealOddsLine": "{amount} · {pct} de chance de levar o pote de {poolAmount}. O vencedor está sendo sorteado agora.",
  "board.settlement.revealEmpty": "Os packs estão abrindo no tabuleiro, o sorteio do vencedor sai já já.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Último resultado · Rodada #{roundId}",
  "board.settlement.tileTakesTable": "{label} leva a mesa por {amount}",
  "board.settlement.whyWon": "{label} saiu no bilhete ponderado verificável e tinha {pct}% do pote no travamento.",
  "board.settlement.lostNoStakeIn": "Você perdeu, sem aposta em {label}",
  "board.settlement.theWinnerFallback": "o vencedor",
  "board.settlement.wonNoStake": "{label} venceu · você não tinha aposta",
  "board.settlement.aTileFallback": "Uma casa",
  "board.settlement.lossNoteWithStake": "Seus {amount} estavam em outras casas, passe o mouse numa delas para ver o que rolou.",
  "board.settlement.lossNoteNone": "Você não apostou em nenhuma casa nesta rodada.",
  "board.settlement.topCardOfRound": "Melhor carta da rodada · {label}",
  "board.settlement.keepCardTo": "Guardar carta ({amount}) → coleção",
  "board.settlement.sellBackFor": "Vender de volta por {amount}",
  "board.settlement.continueNextRound": "Ir para a próxima rodada",
  "board.settlement.continue": "Continuar",
  "board.settlement.keepSellHint":
    "Guardar = carta vai para a coleção · vender = {amount} agora ({pct}% do valor da carta, a recompra da CC deste pack) · {noAction}",
  "board.settlement.noActionKept": "sem ação = a carta fica guardada com você.",
  "board.settlement.noActionAutoSell": "sem ação = venda automática quando a próxima rodada acabar.",
  "board.settlement.revealOnlyNote":
    "Nesta fase canário as casas perdedoras só revelam: as puxadas delas voltam para o cofre. Só a carta da casa vencedora paga.",
  "board.settlement.payoutSplit": "Divisão do pagamento",
  "board.settlement.poolChaseFeedLine": "Pote {pool} · Caçada recebe {feed}",
  "board.settlement.chaseAddSuffix": " · CAÇADA +{amount}",
  "board.settlement.physicalCardArrow": "Carta física →",
  "board.settlement.grailSecuredSuffix": " (Grail garantido)",
  "board.settlement.grailSoldBack": "Grail vendido de volta ({amount}) → USDC na divisão acima.",
  "board.settlement.cardAssignmentHead": "Destino das cartas",
  "board.settlement.cardLabel": "carta de {amount}",
  "board.settlement.soldToVault": "vendida ao cofre · valor entra na divisão",
  "board.settlement.decisionTopBackerSuffix": " (maior apoiador · guardar ou vender)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} descontados do USDC",
  "board.settlement.cardsSpreadNote":
    "As cartas se espalham pelo maior número possível de apoiadores. Uma carta atribuída custa a recompra da CC dela (85 a 93% conforme o pack), descontada do USDC daquele apoiador: é o mesmo dinheiro que ele teria vendendo, só que a valorização fica com ele. Só as cartas que ninguém absorve são vendidas ao cofre.",
  "board.settlement.chaseHitLabel": "A CAÇADA CAIU!",
  "board.settlement.chasePaidLine": "{amount} entraram nesta divisão.",
  "board.settlement.chaseMissLabel": "A CAÇADA NÃO CAIU.",
  "board.settlement.chaseNowLine": "Caçada agora em {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Conferir sorteio",
  "board.settlement.verifyDrawSub": "sorteio verificável · veja o recibo do sorteio",
  "board.settlement.roundIdLabel": "id da rodada",
  "board.settlement.winningDrawLabel": "sorteio vencedor",
  "board.settlement.drawSeedLabel": "semente",
  "board.settlement.proofIdLabel": "id da prova",
  "board.settlement.ticketOfCount": "#{index} de {count}",
  "board.settlement.verifying": "Conferindo…",
  "board.settlement.recheckDraw": "Conferir de novo",
  "board.settlement.verifierLink": "Verificador ↗",
  "board.settlement.verifiedOk": "✓ Sorteio conferido, este vencedor bate com a semente publicada.",
  "board.settlement.verifiedBad": "✗ Este sorteio não bateu com a semente dele, não confie.",
  "board.settlement.everyRoundNote": "Toda rodada sorteia um vencedor a partir de uma semente publicada que você mesmo pode conferir.",
  "board.settlement.noPacksNote": "Nenhum pack apostado nesta rodada, nada para sortear.",
  "board.settlement.settledHoverHint": "Liquidada, passe o mouse numa casa para ver os detalhes.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Aposta grande demais para o seu saldo",
  "board.betTooBig.dismissAria": "Dispensar",
  "board.betTooBig.gotIt": "Entendi",
  "board.betTooBig.body": "Apostar em {slotLabel} custa {needed}, e você tem {held}. Faltam {shortfall}.",
  "board.betTooBig.deposit": "Depositar {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Jogadores, classificados por aposta total",
  "board.wagerLadder.title": "Jogadores",
  "board.wagerLadder.countZero": "Nenhuma aposta",
  "board.wagerLadder.countOther": "{n} na rodada · por aposta total",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "Recolher o painel de jogadores",
  "board.wagerLadder.lastRoundAria": "Ver os resultados da última rodada, rodada #{n}",
  "board.wagerLadder.lastRoundLabel": "Ver a última rodada",
  "board.wagerLadder.empty": "Ninguém apostou em nenhuma casa nesta rodada.",
  "board.wagerLadder.leaderAria": "Líder",
  "board.wagerLadder.openProfileTitle": "Abrir o perfil de {name} numa nova aba",
  "board.wagerLadder.miniGridTotal": "{amount} no total",
  // Two keys instead of one {name} token: pt-BR words the third-party line
  // with a proper noun and the self line with "você", exactly like en.
  "board.wagerLadder.miniGridTilesAria": "Casas em que {name} apostou",
  "board.wagerLadder.miniGridTilesAriaYou": "Casas em que você apostou",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "Vender cartas para bancar esta aposta",
  "board.bidFund.eyebrow": "SEM USDC",
  "board.bidFund.titleOne": "Vender sua carta para cobrir esta aposta?",
  "board.bidFund.titleMany": "Vender estas cartas para cobrir esta aposta?",
  "board.bidFund.body": "Vender {cards} rende {buyback}, o suficiente para apostar {amount} em {tile}.",
  "board.bidFund.bodyCardsMany": "estas cartas",
  "board.bidFund.note":
    "Faltam {amount}. As cartas saem pela taxa de recompra da CC do pack delas (85 a 93%). Isso não tem volta.",
  "board.bidFund.keepCards": "Guardar cartas",
  "board.bidFund.sellAndBid": "Vender e apostar {amount}",
  "board.bidFund.autoSellSwitch": "Vender minhas vitórias por USDC automaticamente",
  "board.bidFund.autoSellNoteOn":
    "Toda vitória vira dinheiro pela taxa de recompra assim que cai. Sem perguntar se você quer guardar ou vender. Grails nunca são vendidos automaticamente. Dá para mudar quando quiser nas Configurações.",
  "board.bidFund.autoSellNoteOff":
    "Ligue isto e toda carta que você ganhar vira USDC pela taxa de recompra, sem perguntar nada. Grails nunca são vendidos automaticamente. Dá para mudar quando quiser nas Configurações.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "Apostar com as teclas numéricas?",
  "board.hotkeys.optInBody":
    "Apertar uma tecla aposta naquela casa com a sua aposta atual, na hora. Nada foi apostado agora.",
  "board.hotkeys.notNow": "Agora não",
  "board.hotkeys.enableKeys": "Ativar teclas",
  "board.hotkeys.turnOff": "Desligar",
  "board.hotkeys.turnOffTitle": "As teclas ficam desligadas até você religá-las nas Configurações.",
  "board.hotkeys.changeKeys": "Trocar teclas",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "Casa livre",
  "board.boardV1.onTile": "na casa",
  "board.boardV1.changeAmount": "troco {amount}",
  "board.boardV1.oddsSuffix": "{pct} de chance",
  "board.boardV1.openedOdds": "Aberta · {pct} de chance",
  "board.boardV1.emptyNeverInDraw": "Vazia · fora do sorteio",
  "board.boardV1.winnerYourShare": "VENCEDORA · sua parte é paga",
  "board.boardV1.winnerNoStake": "VENCEDORA · você não tinha aposta",
  "board.boardV1.lostOdds": "Perdeu o sorteio · {pct} de chance",
  "board.boardV1.tileClickTitle": "Clique em qualquer lugar para apostar {amount} em {label}",
  "board.boardV1.youAmount": "Você {amount}",
  "board.boardV1.youNone": "Você -",
  "board.boardV1.pctOfTile": "{pct} da casa",
  "board.boardV1.noStakeYet": "ainda sem aposta",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "{amount} apostados · {pct} da casa",
  "board.boardV1.statusWaitingDraw": "Esperando o sorteio…",
  "board.boardV1.statusWonSplit": "Ganhou {amount} na divisão",
  "board.boardV1.statusOnWinningTile": "Na casa vencedora",
  "board.boardV1.statusNoPayout": "Sem pagamento nesta rodada",
  "board.boardV1.statusYourStake": "Sua aposta ativa",
  "board.boardV1.statusBacking": "Apostando nesta casa",
  "board.boardV1.backerCount.one": "{n} apoiador",
  "board.boardV1.backerCount.other": "{n} apoiadores",
  "board.boardV1.noBackersYet": "Ainda sem apoiadores",
  "board.boardV1.backAmount": "Apostar {amount}",
  "board.boardV1.backBtnTitle": "Apostar {amount} USDC em {label}",
  "board.boardV1.evolveTitle": "Aposta exatamente {amount} a mais em {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} na casa",
  "board.boardV1.opensAs": "Abre como · {summary}",
  "board.boardV1.noPacksYet": "Ainda sem packs, aposte nela para bancar o primeiro",
  "board.boardV1.whyOpenedDrawing":
    "Abriu {cardName} ({amount}) com {pct} de chance, o vencedor está sendo sorteado agora.",
  "board.boardV1.whyWon":
    "Ganhou o sorteio ponderado com {pct} de chance. Abriu {cardName} ({amount}); o pote foi dividido proporcionalmente entre os apoiadores dela.",
  "board.boardV1.whyLost":
    "Perdeu o sorteio ponderado, {pct} de chance ({amount} do pote de {poolAmount}). Ainda assim abriu {cardName} ({cardAmount}), mas só a casa vencedora paga.",
  "board.boardV1.whyEmpty": "Casa vazia, sem aposta, sem bilhete de sorteio.",
  "board.boardV1.whyYourStakeSuffix": " Sua aposta aqui: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Você não apostou aqui.",
  "board.boardV1.ifWins": "Se esta casa vencer: você leva ~{amount} do pote de {poolAmount}.",
  "board.boardV1.clickToBack": "Clique para apostar o valor selecionado e abrir o primeiro pack dela no travamento.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "{rank}º lugar, {name}, apostou {wagered}, líquido {net}, taxa de vitória {pct} por cento",
  "board.leaderboard.youTag": "VOCÊ",
  "board.leaderboard.youRankTag": "VOCÊ · #{n}",
  "board.leaderboard.statWagered": "APOSTADO",
  "board.leaderboard.statNetPl": "LÍQUIDO",
  "board.leaderboard.statWinRate": "TAXA DE VITÓRIA",
  "board.leaderboard.statRounds": "RODADAS",
  "board.leaderboard.statPoolShare": "FATIA DO POTE",
  "board.leaderboard.statFirstSeen": "PRIMEIRA VEZ",
  "board.leaderboard.statBiggestPull": "MAIOR PUXADA",
  "board.leaderboard.shareOfToday": "das apostas de hoje",
  "board.leaderboard.shareOfAllTime": "de todas as apostas",
  "board.leaderboard.noneYet": "NADA AINDA",
  "board.leaderboard.viewFullProfile": "Ver perfil completo",
  "board.leaderboard.live": "AO VIVO",
  "board.leaderboard.fullRankings": "Ranking completo",
  "board.leaderboard.playerCount.one": "{n} jogador",
  "board.leaderboard.playerCount.other": "{n} jogadores",
  "board.leaderboard.roundCount.one": "{n} rodada",
  "board.leaderboard.roundCount.other": "{n} rodadas",
  "board.leaderboard.colPlayer": "Jogador",
  "board.leaderboard.colWagered": "Apostado",
  "board.leaderboard.colNet": "Líquido",
  "board.leaderboard.colWin": "Vit.",
  "board.leaderboard.colBiggestPull": "Maior puxada",
  "board.leaderboard.sortGroupAria": "Ordenar a classificação",
  "board.leaderboard.sortBy": "Ordenar por {col}",
  "board.leaderboard.podiumNet": "{amount} líquido",
  "board.leaderboard.podiumTopPull": "Melhor puxada",
  "board.leaderboard.fullStandings": "Ranking completo · {n} apostadores",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  "board.betRail.stakeUnitPackOne": "{n} pack {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} packs {packName} ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "Foto de perfil de {handle} no X",
  "board.connectX.connectedTitle": "Conectado pelo X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "Espaço de {packName} (nenhum nesta casa)",
  "board.packChips.fixedChipTitle": "{n} x {packName} a {amount} cada",
  "board.packChips.fixedChipTitleTotalSuffix": ", {amount} no total",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Formado pelo dinheiro acumulado da casa, ninguém apostou este pack direto",
  "board.packChips.pooledSome": "{n} de {total} formados pelo dinheiro acumulado da casa",
  "board.packChips.bidWhole": "Apostado como pack inteiro",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Também nesta casa: {list}",
  "board.packChips.morePacks.one": "mais {n} pack",
  "board.packChips.morePacks.other": "mais {n} packs",
  "board.packChips.morePacksWithList.one": "mais {n} pack: {list}",
  "board.packChips.morePacksWithList.other": "mais {n} packs: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). Pack TIER NAMES ({tier}) stay English brand terms.
  "board.tile.splitBidsPool": "Apostas {bids} · acumulado {pool}",
  "board.tile.splitAllBids": "Todos os {bids} foram apostados como packs inteiros",
  "board.tile.splitAllPool": "Todos os {pool} são o dinheiro solto acumulado na casa",
  "board.tile.splitPoolNote": "Os packs tracejados vieram do dinheiro acumulado, ninguém os apostou.",
  "board.tile.evolveLooseTitle": "{loose} de dinheiro solto nesta casa vira um pack {tier} ao chegar a {target}",
  "board.tile.evolveNoLooseTitle":
    "Ainda não há dinheiro solto nesta casa. O dinheiro solto vira um pack {tier} ao chegar a {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name}, cobre {covered} de {total} casas a {unit}",
  "board.betRail.allTilesPlanFull":
    "No fim da rodada aposta nas {total} casas a {unit}. Total {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "No fim da rodada entra em {covered} casa das {total}, a {unit}. Seu saldo de {balance} cobre {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "No fim da rodada entra em {covered} casas das {total}, a {unit}. Seu saldo de {balance} cobre {spend}.",
  "board.betRail.allTilesPlanNone":
    "Seu saldo de {balance} não cobre nem uma aposta de {unit}, então nenhuma casa vai ser apostada.",
  "board.betRail.allTilesShortHistory.one":
    "A auto-aposta em todas as casas precisa de {needed} para {tiles} casas a {unit}. Você tem {balance}, então entrou em {covered} casa.",
  "board.betRail.allTilesShortHistory.other":
    "A auto-aposta em todas as casas precisa de {needed} para {tiles} casas a {unit}. Você tem {balance}, então entrou em {covered} casas.",
  "board.betRail.allTilesNoneHistory":
    "A auto-aposta em todas as casas precisa de {needed} para {tiles} casas a {unit}. Você tem {balance}, então nenhuma casa entrou.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "No fim da rodada",
  "board.betRail.planTotal": "Total",
  "board.betRail.planMathFull": "{total} casas × {amount}",
  "board.betRail.planMathShort": "{covered} de {total} casas × {amount}",
  "board.betRail.planPerTile": "{unit} por casa",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (Max / Min
  // / Todas, kept as short as the English), `.name` is also substituted into
  // the {name} token of board.betRail.strategyAria* / firedAtClose,
  // `.closeLine` renders right after `.rowTitle` as "rowTitle, closeLine".
  // Informal você, established vocabulary: casa, aposta, rodada, fim da rodada,
  // líder, armar.
  "board.strategy.highest.label": "Max",
  "board.strategy.highest.name": "Armar: apostar na casa mais alta no fim da rodada",
  "board.strategy.highest.detail":
    "Arma a sua aposta na casa que tem mais dinheiro, resolvida pouco antes de a rodada fechar.",
  "board.strategy.highest.rowTitle": "Casa mais alta",
  "board.strategy.highest.closeLine": "aposta na maior casa no fim da rodada",
  "board.strategy.highest.gridLine": "mais dinheiro no fim",

  "board.strategy.lowest.label": "Min",
  "board.strategy.lowest.name": "Armar: apostar na casa mais baixa no fim da rodada",
  "board.strategy.lowest.detail":
    "Arma a sua aposta na casa menos disputada, resolvida pouco antes de a rodada fechar. Se todo mundo correr para a mais baixa, nessa hora ela já não é a mais baixa.",
  "board.strategy.lowest.rowTitle": "Casa mais baixa",
  "board.strategy.lowest.closeLine": "aposta na menor casa no fim da rodada",
  "board.strategy.lowest.gridLine": "menos dinheiro no fim",

  "board.strategy.secondHighest.label": "2ª max",
  "board.strategy.secondHighest.name": "Armar: apostar na segunda casa mais alta no fim da rodada",
  "board.strategy.secondHighest.detail":
    "Arma a sua aposta um degrau abaixo do líder, resolvida pouco antes de a rodada fechar.",
  "board.strategy.secondHighest.rowTitle": "2ª casa mais alta",
  "board.strategy.secondHighest.closeLine": "aposta na casa logo abaixo do líder no fim da rodada",
  "board.strategy.secondHighest.gridLine": "um degrau abaixo do líder",

  "board.strategy.secondLowest.label": "2ª min",
  "board.strategy.secondLowest.name": "Armar: apostar na segunda casa mais baixa no fim da rodada",
  "board.strategy.secondLowest.detail":
    "A escolha na contramão: quando todo mundo corre para a casa mais fraca, ela lota, e a segunda mais fraca acaba pagando melhor. Arma agora e resolve pouco antes de a rodada fechar.",
  "board.strategy.secondLowest.rowTitle": "2ª casa mais baixa",
  "board.strategy.secondLowest.closeLine": "aposta na casa logo acima do fundo lotado no fim da rodada",
  "board.strategy.secondLowest.gridLine": "um degrau acima do fundo",

  "board.strategy.allTiles.label": "Todas",
  "board.strategy.allTiles.name": "Armar: apostar em todas as casas no fim da rodada",
  "board.strategy.allTiles.detail":
    "Arma a sua aposta em todas as casas elegíveis, resolvida pouco antes de a rodada fechar. Gasto total = o valor da sua aposta x o número de casas naquele instante.",
  "board.strategy.allTiles.rowTitle": "Todas as casas",
  "board.strategy.allTiles.closeLine": "espalha a sua aposta no fim da rodada",
  "board.strategy.allTiles.gridLine": "sua aposta em cada casa",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "Toque de novo: {unit}",
  "board.tile.confirmClickAgain": "Clique de novo: {unit}",
  "board.tile.betOffNotice": "As apostas estão desligadas nas configurações",
  "board.stakeControl.pickPackHint": "Escolha um pack para apostar",
  "board.stakeControl.emptyStakeLead": "Escolha um pack",
  "board.stakeControl.emptyStakeHint": "Ele vira sua aposta",
  "gear.betInput.label": "Fazer uma aposta",
  "gear.betInput.hint":
    "Como um toque na casa (e sua tecla numérica) faz sua aposta. Duplo pede antes um toque de confirmação - o padrão em telas de toque. Desligado é modo espectador: nada pode apostar.",
  "gear.betInput.optionSingle": "Um toque",
  "gear.betInput.optionDouble": "Toque duplo",
  "gear.betInput.optionOff": "Desligado",
  "gear.cardOpen.label": "Abrir cartas",
  "gear.cardOpen.hint":
    "Duplo pede um toque de confirmação antes de uma carta abrir sua página - o padrão em telas de toque.",
} as Record<string, string>;
