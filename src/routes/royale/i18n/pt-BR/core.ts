// Portuguese, Brazil (Português): native editorial pass. Same key set as
// en/core.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: core (the original Phase-1 flat dictionary, moved here
// verbatim as part of the i18n parallel-work restructure) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome) and
// runtime.* (copy built by the non-component .ts modules). Do NOT add new
// SURFACE keys to this file, add them to the segment file for the surface they
// belong to instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
// See royaleI18n.ts's file header for the key/interpolation convention.
//
// TERMINOLOGY (binding across every pt-BR segment file, mirrors board.ts):
//   tile = casa · pack = pack · pool = pote · draw = sorteio ·
//   bet/bid/stake = aposta (verbo: apostar em) · backer = apoiador ·
//   pull = puxada · buyback/sell back = recompra / vender de volta ·
//   vault = cofre · lock = travamento (verbo: travar) · odds = chance ·
//   house (a banca do jogo) = banca, NUNCA "casa" (casa = tile) ·
//   Chase = Caçada (o nome do recurso é traduzido em todos os idiomas).
// Register is INFORMAL ("você") throughout.
//
// Pack tier names (Starter, Elite, Legendary, Grail, Mythic) stay in English
// per the owner rule, including in the middle of a sentence and in the plural
// ("Grails"). "attn ROYALE", "ATTN Protocol", "USDC", "X", "Privy" and
// "CollectorCrypt" are brand terms and stay verbatim.
export default {
  "settings.language": "Idioma",
  "settings.languageSectionAria": "Configurações de idioma",
  "settings.languageSearchPlaceholder": "Buscar idioma",
  "settings.languageNoResults": "Nenhum idioma encontrado",
  "settings.languageHint": "Aplica na hora. Busque pelo nome ou digite para filtrar.",
  "settings.languageInputAria": "Idioma, buscar e selecionar",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Grupos de configurações",
  "settings.searchPlaceholder": "Buscar configurações",
  "settings.searchClear": "Limpar busca",
  "settings.searchResultsAria": "Configurações correspondentes",
  "settings.searchNoResults": "Nada corresponde a “{query}”. Tente o nome do que você quer mudar.",
  "settings.backToGroups": "Todas as configurações",
  "gear.cards.heading": "Cartas",
  "gear.cards.sectionAria": "Configurações de cartas",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Apostas {bids} · mínimo {amount}",
  "gear.section.summary.display": "Pop-ups {popups} · retratos {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Música {music} · efeitos {sfx}",
  "gear.section.summary.autosell": "{count} regras de venda automática ativas",
  "gear.section.summary.hotkeys": "{count} atalhos de aposta definidos",

  "common.on": "ATIVO",
  "common.off": "INATIVO",
  "common.set": "APLICAR",
  "common.clear": "LIMPAR",
  "common.tileLabel": "Casa {n}",
  "common.tileShort": "C{n}",

  "gear.betting.heading": "Apostas",
  "gear.betting.sectionAria": "Configurações de apostas",
  "gear.betting.provider.label": "Provedor do pack",
  "gear.betting.provider.automatic": "Automático (prefere Collector Crypt)",
  "gear.betting.provider.hint": "O modo automático prefere Collector Crypt quando disponível e usa apenas um fallback verificado. Escolher um provedor é estrito: se estiver indisponível, a aposta é recusada.",
  "gear.betting.provider.automaticHint": "Automático · prefere Collector Crypt",
  "gear.betting.provider.strictHint": "Somente {provider} · sem fallback",
  "gear.betting.provider.unavailable": "{provider} (indisponível)",
  "gear.betting.provider.selectedUnavailable": "{provider} está indisponível. Apostas estritas são recusadas; a escolha nunca é substituída.",
  "gear.betting.provider.actual": "Processado por {provider}",
  "gear.betting.provider.accepted": "Aceito por {provider}",
  "gear.betting.disableBids.label": "Desativar apostas",
  "gear.betting.disableBids.hint":
    "Trava suas apostas: tocar nas casas para de apostar, então dá para só assistir (ou passar o celular para alguém) sem risco de apostar sem querer. O resto do jogo continua ao vivo.",
  "gear.betting.minBid.label": "Aposta mínima",
  "gear.betting.minBid.hint":
    "A menor aposta que um toque pode fazer. Sua aposta nunca cai abaixo disso, então um toque rápido não aposta menos do que você queria (mínimo de $5 para barrar aposta fantasma).",
  "gear.betting.upgradeCap.label": "Teto do upgrade",
  "gear.betting.upgradeCap.placeholder": "sem limite",
  "gear.betting.upgradeCap.hint":
    "O máximo que um clique de upgrade pode te custar. Upgrade mais caro que isso fica apagado, então uma casa movimentada não te surpreende com uma conta alta.",

  "gear.display.heading": "Exibição",
  "gear.display.sectionAria": "Configurações de exibição",
  "gear.display.chipFloats.label": "Balões de aposta",
  "gear.display.chipFloats.hint": "Mostra os balõezinhos “+$X · nome” que sobem quando alguém aposta numa casa.",
  "gear.display.floatThreshold.label": "Ocultar abaixo de",
  "gear.display.floatThreshold.placeholder": "mostrar toda aposta",
  "gear.display.floatThreshold.hint":
    "Só solta balão para aposta desse tamanho para cima. Limpe o campo (ou coloque $0) para mostrar toda aposta. Assim o tabuleiro fica calmo quando chove aposta pequena.",
  "gear.display.hidePortraits.label": "Ocultar retratos dos jogadores",
  "gear.display.hidePortraits.hint": "Esconde os círculos de retrato dos outros jogadores nas casas. Seu marcador continua à vista.",
  "gear.display.fullscreenLandscape.label": "Tela cheia no modo paisagem",
  "gear.display.fullscreenLandscape.hint":
    "No celular, o próximo toque no modo paisagem oculta a barra do navegador. No iPhone ela fica compacta; Adicionar à Tela de Início oferece tela cheia de verdade.",
  "gear.display.replayTour.label": "Repetir tour de boas-vindas",
  "gear.display.replayTour.hint": "Abra o tour novamente desde o primeiro passo.",
  "gear.display.couch.label": "Texto grande (TV/sofá)",
  "gear.display.headerCollapse.label": "Recolher cabeçalho",
  "gear.display.headerCollapse.hint": "Recolhe a barra superior para o tabuleiro e as cartas preencherem a tela. A seta no cabeçalho traz de volta.",
  "gear.display.couch.hint":
    "Aumenta o texto de leitura no jogo todo: chat, docs, rótulos e valores em dinheiro, pensado para jogar do sofá. O tabuleiro mantém o layout. Também liga com ?couch=1 no endereço.",
  "gear.display.couch.suggested": "Este navegador parece de TV ou console. O texto grande foi feito para essa tela.",

  "gear.reveals.heading": "Revelações",
  "gear.reveals.sectionAria": "Configurações de revelação",
  "gear.reveals.turbo.label": "Revelações turbo",
  "gear.reveals.turbo.hint":
    "Acelera o show da revelação para você chegar no seu resultado mais rápido. Os grandes momentos ainda ganham seu tempo. Vem desligado, e o show completo continua rolando para todo mundo.",

  "gear.sound.heading": "Som",
  "gear.sound.sectionAria": "Configurações de som",
  "gear.sound.sfx.label": "Efeitos sonoros",
  "gear.sound.sfx.hint":
    "Clique das fichas, abertura e travamento da rodada, a roda do vencedor e o show da revelação. Tudo sintetizado no seu navegador, nada para baixar.",
  "gear.sound.music.label": "Música",
  "gear.sound.music.hint":
    "Ela acompanha a rodada: cresce durante as apostas, dispara nos segundos finais e baixa para a revelação. Começa depois do seu primeiro toque ou tecla e pausa quando você troca de aba.",
  "gear.sound.musicStyle.label": "Estilo da música",
  "gear.sound.musicStyle.piano": "Piano calmo",
  "gear.sound.musicStyle.snowmelt": "Degelo",
  "gear.sound.musicStyle.hearthfire": "Fogo da lareira",
  "gear.sound.musicStyle.grotto": "Gruta dourada",
  "gear.sound.musicStyle.arcade": "Corrida arcade",
  "gear.sound.musicStyle.kart": "Rali de kart",
  "gear.sound.musicStyle.galaxy": "Valsa estelar",
  "gear.sound.musicStyle.hint": "Piano calmo é uma melodia suave, sem pressa. Corrida arcade é animada e veloz. A troca entra no próximo compasso, no meio da rodada.",
  "gear.sound.musicVolume.label": "Volume da música",
  "gear.sound.sfxVolume.label": "Volume dos efeitos",
  "gear.sound.volume.label": "Volume",
  "gear.sound.volume.aria": "Volume principal",
  "gear.sound.volume.hint": "Um volume principal só, para efeitos e música juntos.",

  "gear.autosell.heading": "Venda automática",
  "gear.autosell.sectionAria": "Regras de venda automática",
  "gear.autosell.intro":
    "Ajuste uma vez e toda vitória que se encaixar já vende sozinha, sem perguntar se você quer guardar ou vender. O que não se encaixar continua perguntando, igual hoje.",
  "gear.autosell.everyWin.label": "Vender toda vitória",
  "gear.autosell.everyWin.hint":
    "Toda carta que você ganhar vira dinheiro pela taxa de recompra na hora que ela cai, sem perguntar se você quer guardar ou vender. Grails nunca são vendidos automaticamente. Este é o atalho para ligar as quatro chaves de raridade aqui embaixo.",
  "gear.autosell.belowValue.label": "Vender abaixo do valor",
  "gear.autosell.placeholderOff": "inativo",
  "gear.autosell.rarity.label": "Vender por raridade",
  "gear.autosell.rarity.aria": "Venda automática por raridade",
  "gear.autosell.rarity.hint":
    "Faixas de raridade da CollectorCrypt, lidas da máquina de packs de onde cada carta saiu. A faixa de preço de uma raridade muda de pack para pack, então uma carta de $200 pode ser rara numa máquina e comum numa mais cara.",
  "gear.autosell.nonVintage.label": "Vender cartas não vintage",
  "gear.autosell.belowGrade.label": "Vender abaixo da nota",
  "gear.autosell.grader.label": "Vender por avaliadora",
  "gear.autosell.grader.hint":
    "Marque uma avaliadora para vender só as cartas dela que ficarem abaixo da nota que você definir. Desmarque a avaliadora para vender toda carta dela. Desmarque todas para vender tudo que você ganhar. Cada avaliadora usa uma escala diferente, então cada piso é independente.",
  "gear.autosell.grader.aria": "Venda automática por avaliadora",
  "gear.autosell.grader.keep": "MANTER",
  "gear.autosell.grader.sellAll": "VENDER TUDO",
  "gear.autosell.grader.other": "Outras / sem nota",
  "gear.autosell.grader.placeholderKeepAll": "manter tudo",
  "gear.autosell.grader.placeholderSellAll": "vender tudo",
  "gear.autosell.grader.ariaGradeSuffix": "vender abaixo desta nota",
  "gear.autosell.summaryActive": "Ativo:",
  "gear.autosell.summaryNone": "Nenhuma regra de venda automática definida. Toda vitória ainda pergunta se você quer guardar ou vender.",
  "gear.autosell.turnOffAll": "DESLIGAR TUDO",

  "gear.hotkeys.heading": "Atalhos de aposta",
  "gear.hotkeys.sectionAria": "Atalhos de aposta",
  "gear.hotkeys.intro":
    "Aperte a tecla de uma casa para apostar nela com a sua aposta atual, sem precisar de mouse. Clique numa tecla aqui embaixo e depois aperte a tecla que você quer. Duas casas não dividem a mesma tecla, então reatribuir muda o atalho de lugar. Esc cancela, Backspace limpa.",
  "gear.hotkeys.enabled.label": "Aposta por tecla numérica",
  "gear.hotkeys.enabled.hintOn": "As teclas estão valendo durante as apostas. Apertar a tecla de uma casa faz sua aposta na hora.",
  "gear.hotkeys.enabled.hintOff": "As teclas estão desligadas. Apertar a tecla de uma casa não aposta nada.",
  "gear.hotkeys.enabled.hintUnset": "Você ainda não decidiu. Ligue as teclas aqui, ou aperte a tecla de uma casa durante as apostas e escolha Ativar.",
  "gear.hotkeys.listAria": "Atalhos de aposta por casa",
  "gear.hotkeys.tileLabel": "Casa {n}",
  "gear.hotkeys.pressKeyPrompt": "Aperte uma tecla…",
  "gear.hotkeys.setKey": "Definir",
  "gear.hotkeys.clear": "Limpar",
  "gear.hotkeys.ariaPressToBind": "Aperte uma tecla para vincular à Casa {n}",
  "gear.hotkeys.ariaShortcut": "Atalho da Casa {n}: {key}. Clique para reatribuir.",
  "gear.hotkeys.ariaNoShortcut": "A Casa {n} não tem atalho. Clique para definir um.",
  "gear.hotkeys.ariaClearShortcut": "Limpar o atalho da Casa {n}",
  "gear.hotkeys.unboundWarning": "Nenhuma tecla definida para {list}. Essas casas ficam sem atalho de teclado até você definir um.",
  "gear.hotkeys.resetButton": "Restaurar padrões",

  "nav.ariaLabel": "seções attn ROYALE",
  "nav.board": "TABULEIRO",
  "nav.results": "RESULTADOS",
  "nav.rankingsFull": "RANKING",
  "nav.rankingsShort": "RANK",
  "nav.collectionFull": "COLEÇÃO",
  "nav.collectionShort": "CARTAS",
  "nav.profile": "PERFIL",

  "mobileNav.board": "Tabuleiro",
  "mobileNav.results": "Resultados",
  "mobileNav.ladder": "Ranking",
  "mobileNav.collection": "Coleção",
  "mobileNav.profile": "Perfil",
  "mobileNav.docs": "Docs",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // Metric labels sit in a fixed-width rail: keep them short.
  "shell.route.aria": "laboratório attn ROYALE",
  "shell.header.statusAria": "Status da rodada",
  "shell.header.collapse": "Ocultar cabeçalho",
  "shell.header.expand": "Mostrar cabeçalho",
  "shell.header.round": "Rodada #{n}",
  "shell.header.turboTitle": "Rodada em ritmo acelerado",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Resumo da rodada",
  "shell.metrics.totalPool": "Pote total",
  "shell.metrics.packsLive": "Packs ativos",
  "shell.metrics.yourStake": "Sua aposta",
  "shell.metrics.selectedBet": "Aposta atual",
  "shell.board.aria": "tabuleiro attn ROYALE",
  "shell.board.label": "Tabuleiro",
  "shell.board.phaseOpen": "Clique em qualquer casa para apostar nela, a aposta se recompõe na melhor pilha de packs",
  "shell.board.phaseLock": "Travada · packs abrindo",
  "shell.board.phaseSettled": "Rodada liquidada",
  "shell.board.metaOpen": "Pote {pool} · 3% vai para a Caçada · packs abrem no travamento",
  "shell.board.metaClosed": "Uma casa leva o pote por chance ponderada verificável.",
  "shell.board.reopenReveal": "↗ Reabrir revelação",
  "shell.connectNudge":
    "Entre no jogo e deposite para começar a apostar nas casas. As rodadas seguem rolando no fundo.",
  "shell.decision.cardFallback": "sua carta",
  "shell.mobile.close": "Fechar",
  "shell.mobile.chat": "Chat",
  "shell.mobile.chatOpenAria": "Abrir o chat da mesa",
  "shell.mobile.chatCloseAria": "Fechar o chat da mesa",
  "shell.mobile.cards": "Cartas",
  "shell.mobile.cardsOpenAria": "Abrir suas cartas para vender ou sacar",
  "shell.mobile.cardsCloseAria": "Fechar suas cartas",
  "shell.mobile.players": "Jogadores",
  "shell.mobile.playersOpenAria": "Abrir jogadores, classificados por aposta",
  "shell.mobile.playersCloseAria": "Fechar jogadores",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // runtime.rail.* — royaleRailCopy.ts. "house" here is the GAME's bank, so it
  // is "banca", never "casa" (casa = tile).
  "runtime.rail.gameUsdc": "USDC do jogo",
  "runtime.rail.privySessionCredit": "Crédito da sessão Privy",
  "runtime.rail.houseCredit": "crédito da banca",
  "runtime.rail.connectPrivy": "Conecte a Privy para adicionar USDC do jogo",
  "runtime.rail.privySession": "Sessão Privy",
  "runtime.rail.depositAction": "Adicionar +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Conta Privy",
  "runtime.rail.house": "Banca",
  "runtime.rail.depositReceipt": "Recibo {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Toque em qualquer pack para apostar {amount}. Cada casa também guarda os próprios +{low} / +{high}.",
  "runtime.rail.sellBack": "Vender de volta → +{amount} no saldo",

  // runtime.recap.* — royaleSpectatorRecap.ts.
  "runtime.recap.you": "Você",
  "runtime.recap.topBacker": "Maior apoiador",
  "runtime.recap.topCardOutcome": "melhor carta · guardar ou vender",
  "runtime.recap.backer": "Apoiador",
  "runtime.recap.cardWon": "carta ganha",
  "runtime.recap.chaseLootReleased": "Prêmio da Caçada liberado",
  "runtime.recap.theChase": "A Caçada",
  "runtime.recap.sweptIntoVault": "recolhida para o cofre",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "taxa do protocolo",
  "runtime.recap.soldBack": "Vendida de volta",
  "runtime.recap.intoSplit": "+{amount} na divisão",

  // runtime.xProfile.* — royaleXProfile.ts.
  "runtime.xProfile.connectUnavailable": "A conexão com o X não está disponível.",
  "runtime.xProfile.connected": "Conectado",

  // runtime.sellBack.* — royaleSellBackApi.ts.
  "runtime.sellBack.unknownCard": "Carta desconhecida",

  // runtime.winShare.* — royaleWinShareModel.ts.
  "runtime.winShare.headlineWon": "GANHOU",
  "runtime.winShare.headlineGrailPull": "PUXADA DE GRAIL",
  "runtime.winShare.headlineCardsWon": "CARTAS GANHAS",
  "runtime.winShare.cardInImage": "A carta está na imagem.",
  "runtime.winShare.receiptInImage": "O recibo está na imagem.",

  // runtime.serverWallet.* — royaleServerWallet.ts.
  "runtime.serverWallet.withdrawalsOffline": "Os saques estão fora do ar agora. Nenhum valor saiu do lugar.",
  "runtime.serverWallet.noSigner": "Nenhuma carteira assinante está conectada nesta sessão. Nenhum valor saiu do lugar.",
  "runtime.serverWallet.nonceUnavailable": "O servidor não devolveu o nonce de autorização do saque.",
  "runtime.serverWallet.signatureUnavailable": "A carteira não devolveu a assinatura do nonce do saque.",
  "runtime.serverWallet.boundaryLabel": "Os créditos da mesa e o USDC da carteira do servidor são saldos separados.",

  // runtime.video.* — royaleRoundVideoExport.ts.
  "runtime.video.noScreenCapture": "Este navegador não faz captura de tela.",
  "runtime.video.noRecorderFormat": "Este navegador não tem nenhum formato de vídeo do MediaRecorder.",
  "runtime.video.canceled": "Renderização cancelada.",
  "runtime.video.unreachable": "Não deu para alcançar o serviço de renderização em {url}.",
  "runtime.video.rejected": "O serviço de renderização recusou esta rodada: {detail}",
  "runtime.video.requestFailed": "A solicitação de renderização falhou ({status}).",
  "runtime.video.noJobId": "O serviço de renderização não devolveu um id de tarefa.",
  "runtime.video.lostJob": "A tarefa de renderização se perdeu ({status}).",
  "runtime.video.lostContact": "O contato com o serviço de renderização caiu no meio da renderização.",
  "runtime.video.renderFailed": "A renderização falhou: {error}.",
  "runtime.video.unknownError": "erro desconhecido",
  "runtime.video.downloadFailed": "O vídeo ficou pronto, mas não deu para baixar.",
  "runtime.video.downloadHttpFailed": "O vídeo ficou pronto, mas o download falhou ({status}).",
  "runtime.video.emptyVideo": "O serviço de renderização devolveu um vídeo vazio.",
  "runtime.video.shareTagline": "Batalha de packs com sorteio verificável. Assista à rodada:",

  // runtime.game.* — useRoyaleGame.ts feed lines.
  "runtime.game.roomLive": "Sala ao vivo. As rodadas começam sozinhas: {seconds}s de apostas e depois a revelação.",
  "runtime.game.chaseVault": "o cofre da Caçada",
  "runtime.game.aTile": "uma casa",
  "runtime.game.aPack": "um pack",
  "runtime.game.theCard": "a carta",
  "runtime.game.collectedSplit": "Rodada {round} · você recebeu {amount} USDC da divisão.",
  "runtime.game.chaseDropSplit": "Rodada {round} · a Caçada soltou {award} na sua casa · sua parte: {amount} USDC.",
  "runtime.game.grailSecured": "Grail garantido: {card} ({amount}) ficou na sua coleção.",
  "runtime.game.keptCard": "Você guardou {card} ({amount}) → foi para a sua coleção.",
  "runtime.game.soldCardSettle": "Você vendeu {card} de volta por {amount} USDC ({pct}% de {value}).",
  "runtime.game.roundVoidedRefund":
    "Rodada {round} anulada. Nenhum pack abriu, então não teve sorteio por valor de carta. Sua aposta de {amount} voltou para você.",
  "runtime.game.roundVoidedAll":
    "Rodada {round} anulada. Nenhum pack abriu, então não teve sorteio por valor de carta. Todas as apostas voltaram.",
  "runtime.game.chaseFiredYours.one": "A Caçada disparou: {n} carta ({amount}) liberada na sua casa {tile}.",
  "runtime.game.chaseFiredYours.other": "A Caçada disparou: {n} cartas ({amount}) liberadas na sua casa {tile}.",
  "runtime.game.chaseFiredTable.one":
    "A Caçada disparou na Rodada {round}: {award} + {n} carta caíram em {tile}, divididos entre os apoiadores dela.",
  "runtime.game.chaseFiredTable.other":
    "A Caçada disparou na Rodada {round}: {award} + {n} cartas caíram em {tile}, divididos entre os apoiadores dela.",
  "runtime.game.cardsAssigned.one": "{n} carta foi para você ({amount}) → coleção.",
  "runtime.game.cardsAssigned.other": "{n} cartas foram para você ({amount}) → coleção.",
  "runtime.game.cardPoolsLive": "Potes de cartas ao vivo: {cards} cartas em {pools} potes de máquinas da CollectorCrypt.",
  "runtime.game.minBid": "A aposta mínima é {amount}. Aumente a aposta e tente de novo.",
  "runtime.game.resolveFailed": "Esta rodada não pôde ser resolvida, então nada foi liquidado. A próxima rodada começa normalmente.",
  "runtime.game.stakeRefused": "Essa aposta é grande demais para {tile}. Nada foi cobrado. Reduza e tente de novo.",
  "runtime.game.shortfallBack":
    "USDC insuficiente para apostar {amount} em {tile}. Você tem {held}. Deposite para continuar.",
  "runtime.game.shortfallNextPack":
    "USDC insuficiente para fechar o próximo pack em {tile}. Precisa de {amount} e você tem {held}. Deposite para continuar.",
  "runtime.game.youBacked": "Você apostou {amount} em {tile}.",
  "runtime.game.packCompleted": "Você fechou o próximo pack em {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Você vendeu {cards} por {amount} USDC (recompra da CC) para bancar uma aposta.",
  "runtime.game.backedFunded": "Você apostou {amount} em {tile} (bancado pelo estoque).",
  "runtime.game.demoStakesRefunded":
    "Apostas de demonstração zeradas: os {amount} que você tinha clicado voltaram. Você começa em $0.",
  "runtime.game.demoStakesCleared": "Apostas de demonstração zeradas: você começa cada rodada em $0 até apostar numa casa.",
  "runtime.game.deposited": "Você depositou {amount} USDC na sua carteira.",
  "runtime.game.referralBonus": "Bônus de indicação creditado: +{amount} USDC.",
  "runtime.game.signedAndSent": "Assinou e enviou {amount} USDC em {cluster} · assinatura {sig}….",
  "runtime.game.signedNoBroadcast":
    "Assinou {amount} USDC em {cluster} ({method}, sem transmitir na rede) · assinatura {sig}….",
  "runtime.game.soldCard": "Você vendeu {card} por {amount} USDC ({pct}% de recompra).",
} as Record<string, string>;
