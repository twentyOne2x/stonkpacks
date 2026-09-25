// Portuguese, Brazil (Português): "arena" segment. Same key set as
// i18n/en/arena.ts (the /lab/royale/arena wheel surface: the rail, the wheel
// stage + leader-line callouts, the clock, the snipe tray, the double-bid
// opt-in dialog, and the lock->reveal cinema's three beats).
//
// {token} interpolation follows royaleI18n.ts's file-header convention: the
// CALLER does a plain .replace("{token}", String(x)) - this file never
// changes shape for a dynamic value.
//
// "arena.board.wheelAriaEnter" uses the "selecionada(s)" convention (a
// parenthesized plural suffix) since {cardWord} is filled in with either the
// singular or plural noun by the caller and Portuguese adjectives must agree
// in number with the noun they modify - this keeps the aria string correct
// for both without changing the t() signature.
//
// "Chase" (the rolling jackpot feature) IS translated in pt-BR, like in every
// other locale: "a Caçada", feminine. Only the pack tier names and the other
// brand terms (attn ROYALE, USDC, X, CollectorCrypt) stay English.
//
// TERMINOLOGY (see pt-BR/board.ts): tile = casa, pot/pool = pote, card =
// carta, auto-bid = auto-aposta, lock = travar. Register is informal ("você").
export default {
  "arena.you": "VOCÊ",
  "arena.youAvatarLetter": "V",
  "arena.common.card": "carta",
  "arena.common.cards": "cartas",
  "arena.matchLabel": "PARTIDA #{n}",
  "arena.pageTitle": "Arena de cartas",
  "arena.backToBoard": "← Voltar ao tabuleiro",

  "arena.rail.ariaLabel": "Sua coleção",
  "arena.rail.heading": "SUA COLEÇÃO",
  "arena.rail.practiceNote": "Baralho de treino. Vença rodadas no tabuleiro para encher esta fileira com cartas suas.",
  "arena.rail.emptyNote": "Sem cartas na mão. Vença o pote para trazer a sua parte de volta.",
  "arena.rail.enterWheel": "ENTRAR NA ROLETA",
  "arena.rail.armSnipe": "ARMAR SNIPE",
  "arena.rail.hint": "Dê dois cliques numa carta para apostar nela. Ou selecione cartas e aperte ENTRAR NA ROLETA. Espaço seleciona, A arma o snipe.",

  "arena.railCard.armedSuffix": "Armada para snipe.",
  "arena.railCard.hint": "Espaço seleciona, A arma o snipe. Dois cliques para jogá-la na arena.",
  "arena.railCard.armedTag": "ARMADA",

  "arena.snipe.trayHeading": "SNIPE ARMADO",
  "arena.snipe.disarm": "DESARMAR",
  "arena.snipe.firesAt": "Dispara faltando 2s",
  "arena.snipe.carries": "Vale para a próxima partida",

  "arena.board.sectionAriaLabel": "Roleta da arena",
  "arena.board.noCap": "Sem limite de cartas. O relógio é a única trava.",
  "arena.board.wheelDecides": "A roleta decide",
  "arena.board.nextMatchLabel": "Próxima partida em",
  "arena.board.potLabel": "POTE",
  "arena.board.wheelAriaEnter": "Colocar {count} {cardWord} selecionada(s) na roleta",
  "arena.board.wheelAriaIdle": "A roleta. Selecione cartas da sua coleção para colocá-las nela.",
  "arena.board.youWin": "VOCÊ VENCE",
  "arena.board.nameWins": "{name} VENCE",
  "arena.board.emptyWheelNote": "A roleta está aberta. Aposte cartas, não dinheiro: sua fatia de valor determina seu arco e sua chance. A Caçada recebe 0%. O protocolo aplica uma regra de 7% em cartas inteiras; o vencedor recebe todas as outras cartas.",
  "arena.board.tableHint": "As suas cartas correm na roleta como fatia de valor. O seu arco é a sua chance.",
  "arena.board.resultsLink": "Ver resultados da última rodada →",

  "arena.clock.locked": "TRAVADO",
  "arena.clock.settled": "LIQUIDADO",
  "arena.clock.locksIn": "TRAVA EM",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Fechar cinema",
  "arena.cinema.closeTitle": "Fechar (Esc)",
  "arena.cinema.beatCopy.contestants": "OS PARTICIPANTES",
  "arena.cinema.beatCopy.spin": "O GIRO",
  "arena.cinema.beatCopy.settle": "A LIQUIDAÇÃO",
  "arena.cinema.beatCopyShort.contestants": "JOGADORES",
  "arena.cinema.beatCopyShort.spin": "GIRO",
  "arena.cinema.beatCopyShort.settle": "LIQUIDAÇÃO",
  "arena.cinema.contestantsAriaLabel": "Os participantes",
  "arena.cinema.contestantsHeadline": "OS PARTICIPANTES",
  "arena.cinema.oddsToWin": "{pct}% PARA VENCER",
  "arena.cinema.hintContestants": "A roleta decide. Clique para girar agora.",
  "arena.cinema.spinAriaLabel": "O giro da roleta",
  "arena.cinema.lockedOn": "ALVO TRAVADO",
  "arena.cinema.hintSpin": "Clique para pular o giro.",
  "arena.cinema.settleAriaLabel": "A liquidação",
  "arena.cinema.winnerTag": "VENCEDOR",
  "arena.cinema.youTakePot": "VOCÊ LEVA O POTE",
  "arena.cinema.takesPot": "LEVA O POTE",
  "arena.cinema.shelfWinner": "PARA O VENCEDOR",
  "arena.cinema.shelfChase": "A CAÇADA",
  "arena.cinema.shelfProtocol": "PROTOCOLO",
  "arena.cinema.smallPotNote": "A Caçada não recebe nada. A regra de 7% do protocolo selecionou {count} {cardWord}; o vencedor recebe todas as outras cartas.",
  "arena.cinema.resultsLink": "Ver resultados da última rodada",
  "arena.cinema.hintSettle": "Clique em qualquer lugar para voltar à arena.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} para o vencedor",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Auto-aposta no duplo clique?",
  "arena.doubleBid.body": "Dê dois cliques numa carta da sua coleção para jogá-la direto na arena. Quer ativar?",
  "arena.doubleBid.enable": "Ativar",
  "arena.doubleBid.dismiss": "Agora não",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "CONECTANDO À CARD ARENA",
  "arena.backend.loadingBody": "Verificando a versão ao vivo da Arena e sua sessão de jogador…",
  "arena.backend.loadingCollection": "Verificando sua coleção…",
  "arena.backend.mainnetPreparingTitle": "A ARENA MAINNET ESTÁ CONECTADA",
  "arena.backend.mainnetPreparingBody": "Esta versão exata somente para leitura está íntegra. Financiamento, aquisição de cartas, entrada, sorteio e liquidação continuam desativados.",
  "arena.backend.mainnetPreparingCollection": "Nenhuma carta Mainnet foi comprada ou movimentada. A Arena permanece somente para leitura até que o inventário autorizado separadamente esteja pronto.",
  "arena.backend.mainnetRelease": "Versão {commit} · implantação {deployment} · zero assinaturas, transmissões, efeitos ou duplicatas",
  "arena.backend.unavailableTitle": "A CARD ARENA ESTÁ ATUALIZANDO",
  "arena.backend.unavailableBody": "As entradas estão pausadas até que esta versão exata do jogo fique disponível. Suas cartas não saíram do lugar.",
  "arena.backend.unavailableCollection": "Coleção indisponível enquanto a Arena atualiza.",
  "arena.backend.connectTitle": "CONECTE-SE PARA JOGAR",
  "arena.backend.connectBody": "É necessária uma sessão Privy verificada para carregar suas cartas vinculadas ao provedor e entrar na roleta.",
  "arena.backend.connectCollection": "Conecte sua sessão de jogador para carregar suas cartas.",
  "arena.backend.retry": "TENTAR DE NOVO",
} as Record<string, string>;
