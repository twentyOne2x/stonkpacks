// Portuguese, Brazil (Português): "onboarding" segment, native editorial pass.
// Same key set as en/onboarding.ts. See royaleI18n.ts for the {token}
// interpolation convention and the "no em dash" rule.
//
// Surfaces: RoyaleOnboardingGate.tsx, RoyaleWelcomeTour.tsx,
// RoyaleRotateGate.tsx, RoyaleSettingsOverlay.tsx chrome, royaleProfile.ts's
// validation reasons, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx, RoyaleFundShortfallToast.tsx.
//
// TERMINOLOGY (see pt-BR/board.ts): pack = pack, tile = casa, back a tile =
// apostar em uma casa, pull = puxada, lock = travar, Chase = Caçada, graded
// card = carta graduada. "attn ROYALE" and the pack tier name "Starter" stay
// English. Register is informal ("você"); "celular", never "telefone".
export default {
  "onboarding.invite.medallionLabel": "convite",
  "onboarding.invite.title": "Só com convite",
  "onboarding.invite.ledeStake":
    "O attn ROYALE é só para convidados por enquanto. Digite seu código para resgatar {amount} e sentar à mesa.",
  "onboarding.invite.ledeStarter":
    "O attn ROYALE é só para convidados por enquanto. Digite seu código para resgatar um pack Starter de {amount} grátis e sentar à mesa.",
  "onboarding.invite.inputPlaceholder": "CÓDIGO DE CONVITE",
  "onboarding.invite.inputAriaLabel": "Código de convite",
  "onboarding.invite.unlockButton": "Liberar",
  "onboarding.invite.hint": "Ainda não tem código? Peça para quem te convidou, ou cole o seu link {link}.",
  "onboarding.invite.errorInvalidCode": "Digite o código de convite que você recebeu.",

  "onboarding.welcome.grantLabelCredit": "crédito",
  "onboarding.welcome.grantLabelStarterPack": "pack Starter",
  "onboarding.welcome.titleBack": "De volta à mesa",
  "onboarding.welcome.title": "Bem-vindo à mesa",
  "onboarding.welcome.backLede": "Continue de onde parou, {name}. Seu perfil e seu saldo estão salvos neste aparelho.",
  "onboarding.welcome.fallbackName": "jogador",
  "onboarding.welcome.ledeStake": "Seu convite vale {amount} para apostar. Escolha um nome e sente à mesa.",
  "onboarding.welcome.ledeStarter": "Seu convite vale um pack Starter de {amount} grátis. Aposte packs e sente à mesa.",
  "onboarding.welcome.continueWithX": "Continuar com X",
  "onboarding.welcome.optionalHint": "opcional",
  "onboarding.welcome.connectWallet": "Conectar uma carteira",
  "onboarding.welcome.playFreeNote": "Jogue grátis agora mesmo. Sem carteira e sem login.",
  "onboarding.welcome.or": "ou",
  "onboarding.welcome.continueAsTemplate": "Continuar como {name}",
  "onboarding.welcome.fallbackProfileName": "seu perfil",
  "onboarding.welcome.close": "Fechar",
  "onboarding.welcome.createProfile": "Criar seu perfil",
  "onboarding.welcome.skipGuest": "Pular e jogar como convidado",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Jogar agora",
  "onboarding.welcome.pickNameFirst": "Ou escolha um nome primeiro",

  "onboarding.profile.title": "Monte seu perfil",
  "onboarding.profile.xPhotoAlt": "Sua foto de perfil do X",
  "onboarding.profile.connectedAsTemplate": "Conectado como {handle}",
  "onboarding.profile.xAccountFallback": "conta do X",
  "onboarding.profile.walletLabelTemplate": "Carteira {address}",
  "onboarding.profile.displayNameLabel": "Nome de exibição",
  "onboarding.profile.displayNamePlaceholder": "Como a gente te chama?",
  "onboarding.profile.handleLabel": "Usuário",
  "onboarding.profile.handlePlaceholder": "seunome",
  "onboarding.profile.handleHint": "Seu nome único na mesa. Letras, números e sublinhados.",
  "onboarding.profile.handleTaken": "Esse usuário já está em uso neste aparelho.",
  "onboarding.profile.startButtonTemplate": "Começar a jogar · {amount} por conta da casa",
  "onboarding.profile.back": "Voltar",
  "onboarding.profile.skip": "Pular",

  "onboarding.tour.ariaLabel": "Como funciona o attn ROYALE",
  "onboarding.tour.skip": "Pular",
  "onboarding.tour.step1.eyebrow": "01 · Aposte em uma casa",
  "onboarding.tour.step1.titleUsdc": "Coloque USDC nas casas que você curtir",
  "onboarding.tour.step1.titlePacks": "Aposte packs nas casas que você curtir",
  "onboarding.tour.step1.bodyUsdc":
    "Cada casa é um espaço em que você aposta USDC. Quanto mais você coloca numa casa, maior a sua fatia do que ela ganhar. Empilhe tudo numa só ou espalhe por várias.",
  "onboarding.tour.step1.bodyPacks":
    "Cada casa é um espaço em que você aposta packs. Quanto mais você empilha numa casa, maior a sua fatia do que ela ganhar. Carregue tudo numa só ou espalhe por várias.",
  "onboarding.tour.step2.eyebrow": "02 · Trava e abre",
  "onboarding.tour.step2.title": "Ao travar, cada casa rasga seus packs",
  "onboarding.tour.step2.body":
    "Quando a rodada trava, cada casa apostada rasga seus packs e puxa cartas graduadas de verdade ao vivo, com um sorteio verificável, bem na sua frente.",
  "onboarding.tour.step3.eyebrow": "03 · O melhor valor vence",
  "onboarding.tour.step3.title": "A casa mais rica leva o pote",
  "onboarding.tour.step3.bodyUsdc":
    "O peso de cada casa é o valor das cartas que ela puxou mais o seu USDC. Quanto mais pesada a casa, melhor a chance dela. Se vencer, você divide o pote inteiro da rodada.",
  "onboarding.tour.step3.bodyPacks":
    "O peso de cada casa é o valor das cartas que ela puxou mais os packs apostados nela. Quanto mais pesada a casa, melhor a chance dela. Se vencer, você divide o pote inteiro da rodada.",
  "onboarding.tour.step4.eyebrow": "04 · Guardar, vender, caçar",
  "onboarding.tour.step4.title": "Saque e fique de olho na Caçada",
  "onboarding.tour.step4.body":
    "Guarde as cartas que você ganhar como slabs graduados ou venda de volta pela taxa de recompra. E a Caçada é um prêmio acumulado que pode cair em qualquer casa, em qualquer rodada.",
  "onboarding.tour.back": "Voltar",
  "onboarding.tour.next": "Próximo",
  "onboarding.tour.enterBoard": "Entrar no tabuleiro",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary (casa,
  // pack, pote, rodada, apostar; você).
  "onboarding.tour.stepTag": "Etapa {n} de {total}",
  "onboarding.tour.spot1.eyebrow": "Sua aposta",
  "onboarding.tour.spot1.title": "Escolha seu pack",
  "onboarding.tour.spot1.body": "Você aposta packs. Cada um é um pack lacrado com cartas TCG graduadas, powered by Collector Crypt. Escolha o pack com que você quer jogar.",
  "onboarding.tour.spot2.eyebrow": "Tamanho da pilha",
  "onboarding.tour.spot2.title": "Escolha quantos",
  "onboarding.tour.spot2.body": "Este contador define quantos packs cada aposta coloca. Um já basta para começar. Aumente quando quiser apostar mais alto.",
  "onboarding.tour.spot3.eyebrow": "Faça sua aposta",
  "onboarding.tour.spot3.title": "Clique em uma casa para apostar nela",
  "onboarding.tour.spot3.titleTouch": "Toque em uma casa para apostar nela",
  "onboarding.tour.spot3.body": "Clicar em uma casa coloca seus packs nela. Quanto mais packs você empilha em uma casa, maior sua parte se ela vencer. Concentre tudo em uma ou espalhe por várias.",
  "onboarding.tour.spot3.bodyTouch": "Toque em uma casa para prepará-la e toque de novo para confirmar a aposta. Quanto mais packs você empilha em uma casa, maior sua parte se ela vencer.",
  "onboarding.tour.spot4.eyebrow": "A rodada",
  "onboarding.tour.spot4.title": "O pote e o relógio",
  "onboarding.tour.spot4.body": "Cada pack apostado no tabuleiro alimenta este pote. Quando o relógio zera, as apostas travam e cada casa apostada rasga seus packs ao vivo.",
  "onboarding.tour.spot5.eyebrow": "O sorteio",
  "onboarding.tour.spot5.title": "Casas pesadas vencem com mais frequência",
  "onboarding.tour.spot5.body": "Um sorteio aleatório ponderado pelo valor escolhe uma casa. As casas perdedoras cedem suas cartas e apostas; os apoiadores da casa vencedora dividem o valor distribuível da rodada na proporção do que cada um colocou.",
  "onboarding.tour.spot6.eyebrow": "Seu dinheiro",
  "onboarding.tour.spot6.title": "Saldo e depósitos",
  "onboarding.tour.spot6.body": "Seu saldo mora aqui. Adicione fundos com Depositar e saque quando quiser. Os ganhos caem aqui assim que a rodada é liquidada.",
  "onboarding.tour.spot7.eyebrow": "Por conta da casa",
  "onboarding.tour.spot7.title": "Seu pack Starter de {amount} grátis",
  "onboarding.tour.spot7.body": "Você começa com um pack Starter de {amount} grátis. Ele já está carregado no seletor. Escolha uma casa e jogue.",
  "onboarding.tour.finish": "Começar a jogar",
 "onboarding.tour.paused": "A rodada vai começar - continuaremos logo depois.",
  "onboarding.tour.act2.choice": "Ver uma rodada acontecendo",
  "onboarding.tour.act2.choiceHint": "Cerca de 30 segundos, com o reveal",
  "onboarding.tour.act2.bettingTitle": "Cada pack apostado vira um único pote",
  "onboarding.tour.act2.bettingBody": "Os jogadores empilham packs nas casas. Cada pack no tabuleiro alimenta um único pote, e uma casa leva tudo.",
  "onboarding.tour.act2.drawTitle": "O valor vira a odds",
  "onboarding.tour.act2.drawBody": "A parcela de cada casa no valor de todas as cartas puxadas é sua chance. Um único sorteio aleatório, verificável e ponderado pelo valor escolhe a vencedora.",
  "onboarding.tour.act2.losersTitle": "Toda casa perdedora cede suas cartas",
  "onboarding.tour.act2.losersBody": "As cartas e o dinheiro distribuíveis de todo o tabuleiro passam aos apoiadores da casa vencedora.",
  "onboarding.tour.act2.splitTitle": "Sua aposta define sua fatia",
  "onboarding.tour.act2.splitBody": "Os apoiadores da casa vencedora dividem o dinheiro e as cartas distribuíveis da rodada vindos de todas as casas, na proporção do que cada um colocou naquela casa.",
  "onboarding.tour.act2.grailCaption": "A cerimônia do grail",
  "onboarding.tour.act2.yourTurnEyebrow": "Sua vez",
  "onboarding.tour.act2.yourTurnTitle": "Seu Starter pack está pronto",
  "onboarding.tour.act2.yourTurnBody": "O tabuleiro está ao vivo de novo. Escolha uma casa e faça sua primeira aposta em pack.",
  "onboarding.tour.act2.continue": "Entrar na rodada",

  "onboarding.rotate.ariaLabel": "Gire o celular para jogar attn ROYALE",
  "onboarding.rotate.title": "Vire o celular de lado",
  "onboarding.rotate.body": "O tabuleiro rende muito mais deitado. Gire a tela para entrar na rodada.",

  "onboarding.settingsTitle": "Configurações",
  "onboarding.settingsClose": "Fechar configurações",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // {n} is the display-name character cap, injected by the validator.
  "onboarding.profileValidation.handleRequired": "Escolha um usuário para os outros jogadores te acharem.",
  "onboarding.profileValidation.handleTooShort": "O usuário precisa ter pelo menos 3 caracteres.",
  "onboarding.profileValidation.handleCharset": "Use só letras, números e sublinhados.",
  "onboarding.profileValidation.nameRequired": "Coloque um nome para aparecer na mesa.",
  "onboarding.profileValidation.nameTooLong": "Deixe com menos de {n} caracteres.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  "onboarding.presence.tierWatching": "assistindo",
  "onboarding.presence.tierPlaying": "jogando",
  "onboarding.presence.youPlaying": "Você está jogando: {amount} apostados nesta rodada",
  "onboarding.presence.youWatching": "Você está assistindo",
  "onboarding.presence.youWatchingBackground": "Você está assistindo (aba em segundo plano)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark.
  "onboarding.presence.ariaLabel": "{count} {tier} attn ROYALE agora. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "Você: {status}",
  "onboarding.presence.otherTabs.one": "+{n} aba sua aberta",
  "onboarding.presence.otherTabs.other": "+{n} abas suas abertas",
  "onboarding.presence.othersBacking.one": "{n} outro apostando numa casa nesta rodada",
  "onboarding.presence.othersBacking.other": "{n} outros apostando numa casa nesta rodada",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Saúde da transmissão do attn ROYALE",
  "onboarding.streamHud.eyebrow": "Sinal",
  "onboarding.streamHud.statusConnecting": "Conectando",
  "onboarding.streamHud.statusLive": "Ao vivo",
  "onboarding.streamHud.statusReconnecting": "Reconectando",
  "onboarding.streamHud.statusError": "Sem sincronia",
  "onboarding.streamHud.reconnects.one": "{n} reconexão",
  "onboarding.streamHud.reconnects.other": "{n} reconexões",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "Esta sala liquida em USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Cartas abertas",
  "onboarding.carousel.prevCard": "Carta anterior",
  "onboarding.carousel.nextCard": "Próxima carta",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Mostrar {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "USDC INSUFICIENTE",
  "onboarding.fundShortfall.detail": "Apostar em {slot} custa {needed}. Você tem {balance}.",
  "onboarding.fundShortfall.addFunds": "Depositar",
  "onboarding.fundShortfall.dismiss": "Dispensar",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "Toque em {icon} e depois em Adicionar à Tela de Início para uma tela cheia de verdade.",
  "onboarding.installHint.fullscreen": "Jogue em tela cheia sem a barra do navegador.",
  "onboarding.installHint.fullscreenCta": "Tela cheia",
  "onboarding.installHint.dismiss": "Dispensar",
} as Record<string, string>;
