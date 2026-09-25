// Portuguese, Brazil (Português): "chat" segment. Same key set as
// i18n/en/chat.ts, owned by RoyaleChatPanel.tsx, RoyaleChatMessageBody.tsx,
// royaleChatModel.ts and royaleChatLinks.ts. See royaleI18n.ts's file header
// for the key-naming and {token} interpolation convention, and the
// no-em-dash / brand-terms-stay-English / numbers-and-currency-stay-literal
// rules that apply to every locale.
//
// "chat.event.wonByPrefix" / "chat.event.wonBy" describe a Grail pull's
// sub-line ("<card>, won by <Name>"): "ganho por", masculine, agreeing with
// the implicit "o Grail" (kept English, masculine by default per the
// brand-terms rule). NOT "vencido por", which in pt-BR reads as "defeated
// by" / "expired".
//
// "Chase" is translated, like in every other locale: "a Caçada" (see
// misc.chase.label). Only brand terms stay English.
//
// "chat.chatter.*" is the 24-line ambient table-talk pool: lowercase,
// casual chat register on purpose (mirrors en's lowercase, no-punctuation
// bar-chat voice) - not sentence case like the rest of the UI. "Mythic" in
// line17 is the pack-tier brand name and stays English per the owner rule.
// "whale" (line12) is translated as "baleia", an already-standard Brazilian
// gambling/high-roller term, not a literal-only rendering.
export default {
  "chat.rooms.table": "Mesa",
  "chat.rooms.sendTo": "Enviar para",
  "chat.rooms.joinHint": "Aposte em um espaço para desbloquear a sala.",
  "chat.rooms.messageTargets": "Salas da mensagem",
  "chat.composer.sendFailed": "A mensagem não foi enviada. Tente novamente.",
  "chat.composer.audienceChanged": "A sala mudou. Sua mensagem não enviada foi apagada.",
  "chat.composer.sessionUnavailable": "Sessão de chat indisponível. Atualize e tente novamente.",
  "chat.auth.tileLeadBold": "Aposte em um bloco para conversar",
  "chat.auth.tileBody": ". A mesa e as salas dos blocos são liberadas após seu primeiro pack aceito.",
  "chat.auth.sessionUnavailableBold": "Sessão de chat indisponível",
  "chat.auth.sessionUnavailableBody": ". Atualize para restaurar o envio seguro.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Chat da mesa",
  "chat.header.title": "Chat da mesa",
  "chat.header.fontControlAriaLabel": "Tamanho do texto do chat",
  "chat.header.fontSmaller": "Diminuir o tamanho do texto do chat",
  "chat.header.fontLarger": "Aumentar o tamanho do texto do chat",
  "chat.header.collapseShow": "Mostrar chat",
  "chat.header.collapseHide": "Ocultar chat",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "PUXADA DE GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "RODADA #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Abre o resultado da rodada em uma nova aba.",
  "chat.event.wonByPrefix": "ganho por",
  "chat.event.wonBy": "ganho por {name}",
  "chat.event.foldedIntoPot": "voltou para o pote",
  "chat.event.roundWinsTitle": "{tile} vence {pot}",
  "chat.event.bestPull": "melhor puxada {name} ({value})",
  "chat.event.chaseAward": "Caçada +{amount}",
  "chat.event.youWon": "você +{amount}",
  "chat.event.youLost": "você perdeu",
  "chat.message.showOriginal": "traduzido · ver original",
  "chat.message.showTranslation": "ver tradução",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Ir para o fim",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Só links da attn aparecem aqui.",
  "chat.composer.rateLimitNotice": "Calma aí, tá indo rápido demais. Tente de novo em instantes.",
  "chat.composer.placeholder": "Diga algo…",
  "chat.composer.inputAriaLabel": "Mensagem do chat",
  "chat.composer.sendAriaLabel": "Enviar mensagem",
  "chat.composer.sendLabel": "Enviar",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Entre para conversar",
  "chat.auth.body": ", a sala fica somente para leitura até você se conectar (canto superior direito).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Abre a página da carta em uma nova aba",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Abre a página da carta em uma aba em segundo plano.",
  "chat.messageBody.viewCard": "Ver carta",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Página da carta",
  "chat.link.roundResult": "Resultado da rodada",
  "chat.link.profile": "Perfil",
  "chat.link.collection": "Coleção",
  "chat.link.theBoard": "O tabuleiro",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "a casa 3 tá enchendo rápido demais",
  "chat.chatter.line02": "quem que fica dando snipe no líder toda rodada",
  "chat.chatter.line03": "aquela puxada de grail da rodada passada foi surreal",
  "chat.chatter.line04": "vai ser fácil, todo mundo em cima do líder",
  "chat.chatter.line05": "casa 7 novinha parece barata pra mim",
  "chat.chatter.line06": "segurando meus packs pros últimos cinco segundos",
  "chat.chatter.line07": "alguém acabou de soltar $250 na casa 2, respeito",
  "chat.chatter.line08": "a fatia do pote na casa 6 tá cara demais agora",
  "chat.chatter.line09": "mais um pack e essa casa evolui pra um nível mais rico",
  "chat.chatter.line10": "os sniper acabando com a minha chance de novo",
  "chat.chatter.line11": "só saem cartas de piso pra mim, tá na hora de uma puxada grande",
  "chat.chatter.line12": "fica de olho na baleia, ele sempre acerta a casa vencedora",
  "chat.chatter.line13": "a casa 1 não paga a sessão toda, tá na hora dela",
  "chat.chatter.line14": "vendi minha última puxada na hora, a recompra foi justa",
  "chat.chatter.line15": "contra-snipe chegando, pode anotar",
  "chat.chatter.line16": "o líder trocou duas vezes nos últimos dez segundos",
  "chat.chatter.line17": "mais alguém subindo até o Mythic hoje à noite",
  "chat.chatter.line18": "guardei a carta, a arte tava boa demais pra vender",
  "chat.chatter.line19": "pack no fim nunca reseta o relógio, amo isso",
  "chat.chatter.line20": "o pote da casa 8 dobrou, tá rolando alguma coisa",
  "chat.chatter.line21": "packs pequenos cedo, packs grandes tarde, único jeito de jogar",
  "chat.chatter.line22": "esse relógio de guardar ou vender sempre me pega",
  "chat.chatter.line23": "os de trás tão pagando melhor que o líder agora",
  "chat.chatter.line24": "snipe limpo na casa 5, cirúrgico",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Painel da mesa",
  "chat.surface.chat": "Chat",
  "chat.surface.activity": "Minha atividade",
  "chat.activity.ariaLabel": "Minha atividade privada",
  "chat.activity.filtersAria": "Filtrar atividade",
  "chat.activity.filter.all": "Tudo",
  "chat.activity.filter.packs": "Packs",
  "chat.activity.filter.bids": "Apostas",
  "chat.activity.filter.rewards": "Prêmios",
  "chat.activity.filter.feats": "Conquistas",
  "chat.activity.filter.clan": "Clã",
  "chat.activity.today": "Hoje",
  "chat.activity.yesterday": "Ontem",
  "chat.activity.status.pending": "Pendente",
  "chat.activity.status.finalized": "Finalizado",
  "chat.activity.status.reversed": "Revertido",
  "chat.activity.finalizedAria": "Recibo finalizado",
  "chat.activity.signInTitle": "Faça login para ver seu histórico",
  "chat.activity.signInBody": "Aqui aparecem seus recibos privados de packs, apostas, prêmios, conquistas e atividades do clã.",
  "chat.activity.loading": "Carregando seus recibos",
  "chat.activity.loadOlder": "Carregar anteriores",
  "chat.activity.points": "{points} pontos",
  "chat.activity.event.packBid.title": "Pack jogado",
  "chat.activity.event.packBid.detail": "Entrada na casa {tile} finalizada.",
  "chat.activity.event.roundWon.title": "Casa vencedora",
  "chat.activity.event.roundWon.detail": "A casa {tile} venceu esta rodada.",
  "chat.activity.event.roundLost.title": "Rodada liquidada",
  "chat.activity.event.roundLost.detail": "A casa {tile} não venceu esta rodada.",
  "chat.activity.event.roundRefunded.title": "Pack reembolsado",
  "chat.activity.event.roundRefunded.detail": "A aposta na casa {tile} foi devolvida.",
  "chat.activity.event.chaseWon.title": "Caçada premiada",
  "chat.activity.event.chaseWon.detail": "A Caçada do tabuleiro pagou o prêmio.",
  "chat.activity.event.achievementDetail": "Desbloqueada pelo seu jogo.",
  "chat.activity.event.clanAchievementDetail": "Desbloqueada com seu clã.",
  "chat.activity.unavailableTitle": "Atividade indisponível",
  "chat.activity.unavailableBody": "Não foi possível carregar seus recibos. Tente acessar o feed privado novamente em instantes.",
  "chat.activity.retry": "Tentar novamente",
  "chat.activity.emptyTitle": "Nada por aqui ainda",
  "chat.activity.emptyBody": "Aqui aparecerão as ações finalizadas de packs, apostas, prêmios, conquistas e atividades do clã.",
  "chat.unlock.eyebrow": "Conquista desbloqueada",
  "chat.unlock.clanEyebrow": "Conquista do clã desbloqueada",
  "chat.unlock.dismiss": "Fechar conquista",
} as Record<string, string>;
