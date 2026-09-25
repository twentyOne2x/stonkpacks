// Portuguese, Brazil (Português): native editorial pass. Same key set as
// en/cinema.ts. See royaleI18n.ts for the {token} interpolation convention
// and the "no em dash" rule.
//
// Segment: cinema. Owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (the copy: fields of REVEAL_CINEMA_SEQUENCE),
// RoyaleRoundCardWall.tsx, RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx,
// RoyalePrizeModal.tsx, RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and RoyaleReplayRoute.tsx.
//
// TERMINOLOGY (binding across every pt-BR segment file, mirrors board.ts):
//   tile = casa · pack = pack · pool = pote · draw = sorteio ·
//   bet/bid/stake = aposta (verbo: apostar em) · backer = apoiador ·
//   pull = puxada · buyback/sell back = recompra / vender de volta ·
//   vault = cofre · lock = travamento (verbo: travar) · odds = chance ·
//   pro-rata = proporcional · seed = semente · jackpot = prêmio ·
//   Chase = Caçada (o nome do recurso é traduzido em todos os idiomas).
// Register is INFORMAL ("você") throughout.
//
// Pack tier names (Starter, Elite, Legendary, Grail, Mythic) stay in English
// per the owner rule, mid-sentence and in the plural ("Grails") too. "attn
// ROYALE", "ATTN", "USDC", "X", "SLABZ" and "CollectorCrypt" are brand terms
// and stay verbatim.
//
// cinema.tileValue.cardValueLabel / onTileLabel carry a NBSP (U+00A0, not a
// plain space) between two of their words, same AUDIT-FIX-4 reason as the
// English source: keeps the phrase from breaking to an orphan word at a
// line end. Preserved here between "valor" and "da" and between "na" and
// "casa" respectively.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "ABRINDO PACKS",
  "cinema.phaseAnnounce.packsOpening.subtitle": "revelando cartas · reprecificando cada casa",
  "cinema.phaseAnnounce.winnerDraw.title": "SORTEANDO VENCEDOR",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "ponderado pelo total da casa",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Travado: o tabuleiro é o show",
  "cinema.phase.packsEnter.copy": "Os packs chegam ao tabuleiro",
  "cinema.phase.packsOpening.copy": "Packs rasgando: cartas se revelando, casas reprecificando",
  "cinema.phase.cardsByTile.copy": "Cartas reveladas: toda casa, valor primeiro",
  "cinema.phase.valueScan.copy": "Lendo o tabuleiro: as maiores puxadas brilhando",
  "cinema.phase.winnerDraw.copy": "Sorteando o vencedor: ponderado pelo total da casa",
  "cinema.phase.winnerLock.copy": "Vencedor travado",
  "cinema.phase.loserValueConverge.copy": "As puxadas perdedoras voltam para o cofre: o valor delas se resolve para o vencedor",
  "cinema.phase.winnerPotCountUp.copy": "O pote cai na casa vencedora",
  "cinema.phase.chaseFeed.copy": "A Caçada leva a parte dela",
  "cinema.phase.chasePayout.copy": "A Caçada cai: uma casa fatura alto",
  "cinema.phase.allocation.copy": "Você recebe",
  "cinema.phase.keepSellDecision.copy": "Guardar ou vender: a decisão corre até a próxima rodada",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "NO COFRE",
  "cinema.vaultLock.plateSub": "A CAÇADA",
  "cinema.vaultLock.status": "TRAVADO",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "NENHUMA CARTA ABERTA NESTA RODADA",
  "cinema.cardWall.won": "GANHOU",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TOP",
  "cinema.cardWall.rarity.common": "COMUM",
  "cinema.cardWall.rarity.rare": "RARA",
  "cinema.cardWall.rarity.epic": "ÉPICA",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "GUARDADA",
  "cinema.cardWall.status.sold": "VENDIDA",
  "cinema.cardWall.status.toTheChase": "PARA A CAÇADA",
  "cinema.cardWall.status.rake": "TAXA",
  "cinema.cardWall.owner.vault": "COFRE",
  "cinema.cardWall.owner.you": "VOCÊ",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter abre os detalhes da carta.",
  "cinema.cardWall.sectionAriaLabel": "Toda carta aberta nesta rodada, da mais valiosa para a menos valiosa",
  "cinema.cardWall.eyebrow": "Toda carta aberta",
  "cinema.cardWall.rake.title": "Taxa do protocolo",
  "cinema.cardWall.rake.metaOne": "1 carta para a taxa",
  "cinema.cardWall.rake.metaMany": "{n} cartas para a taxa",
  "cinema.cardWall.rake.hide": "Ocultar",
  "cinema.cardWall.rake.show": "Mostrar",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Fechar revelação",
  "cinema.close.title": "Fechar revelação (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Vencedor oficial",
  "cinema.provCaption.round": "Rodada",
  "cinema.provCaption.verifyAt": "Confira em",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Rodada #{n}",
  "cinema.bar.vrfBadge": "Sorteio por CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "Caçada +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "ABRINDO",
  "cinema.phaseShort.drawing": "SORTEANDO",
  "cinema.phaseShort.results": "RESULTADOS",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "VENCEDOR",
  "cinema.core.tileWins": "{tile} vence",
  "cinema.core.inCards": " EM CARTAS",
  "cinema.core.poolSuffix": " POTE",
  "cinema.core.totalCardValue": "VALOR TOTAL DAS CARTAS",
  "cinema.core.totalPool": "POTE TOTAL",
  "cinema.core.tilesLive": "{n} CASAS AO VIVO",
  "cinema.core.packsSuffix": " · {n} PACKS",
  "cinema.core.yourStake": "Sua aposta",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Sem aposta",
  "cinema.heatOnly.note": "só USDC · sem pack nesta rodada",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} packs",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Perdeu o sorteio. As cartas vão para os apoiadores da casa vencedora.",
  "cinema.vaultNote.heatOnlyNoPack": "Sem pack nesta rodada · o troco segue para o pote",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "de {pack}",
  "cinema.grail.fromPackRate": "de {pack} · {pct} de puxada",
  "cinema.grail.pullTitle": "PUXADA DE GRAIL",
  "cinema.grail.fromPackVisible": "de um pack {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, de um pack {pack}",
  "cinema.grail.multiTitle": "{n} GRAILS NESTA RODADA",
  "cinema.grail.galleryTileFromPack": "{tile} · de {pack}",
  "cinema.grail.galleryMore": "+{n} mais",
  "cinema.card.openInNewTab": "Abrir a página da carta {name} numa nova aba",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. De um pack {pack}, taxa de puxada de {pct}. Enter abre os detalhes da carta.",
  // Provider RARITY-BAND variant: {bandLine} is the pre-composed sentence from
  // rarityBandLine (royaleRarityBands.ts). That helper is NOT locale-wired, so
  // the token still arrives in English until a future pass reaches it.
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter abre os detalhes da carta.",
  "cinema.card.bandChancePct": "{pct}% de chance num pack {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} VENCE",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "JANELA DE VENDA ABERTA",
  "cinema.sellWindow.secToDecide": "SEG PARA DECIDIR",
  "cinema.sellWindow.noActionAutoSells": "SEM AÇÃO VENDE SOZINHA NO PRÓXIMO TRAVAMENTO",
  "cinema.sellWindow.noActionKeeps": "SEM AÇÃO GUARDA A CARTA · VENDA QUANDO QUISER NAS SUAS CARTAS",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between two words in each, AUDIT-FIX-4:
  // keeps "valor da carta" / "na casa" from breaking to an orphan word at a
  // line end. Preserve the NBSP in this translation.
  "cinema.tileValue.cardValueLabel": "valor da carta",
  "cinema.tileValue.onTileLabel": "na casa",
  "cinema.tileValue.oddsWord": "chance",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "a casa atingida",
  "cinema.chase.fires": "A CAÇADA DISPARA",
  "cinema.chase.jackpotReleasingTo": "PRÊMIO INDO PARA {tile}",
  "cinema.chase.winningTileFallback": "A CASA VENCEDORA",
  "cinema.chase.feedThisRound": "Caçada +{value} nesta rodada",
  "cinema.chase.cardToChase": "CARTA PARA A CAÇADA",
  "cinema.chase.bestLosingCardNamed": "Melhor carta perdedora · {name} · {value} travados",
  "cinema.chase.bestLosingCardVault": "Melhor carta perdedora travada no cofre",
  "cinema.chase.jackpotGrows": "Caçada +{value} · o prêmio cresce",
  "cinema.chase.hitsAriaLabel": "A Caçada acerta {tile} por {value}",
  "cinema.chase.alsoHolds": "A Caçada também guarda",
  "cinema.chase.alsoHoldsAriaOne": "A Caçada também guarda 1 carta de {value}",
  "cinema.chase.alsoHoldsAriaMany": "A Caçada também guarda {n} cartas de {value}",
  "cinema.chase.more": "mais",
  "cinema.chase.cardsTotalOne": "1 carta · {value} em slabs",
  "cinema.chase.cardsTotalMany": "{n} cartas · {value} em slabs",
  "cinema.chase.hitsKicker": "A CAÇADA ACERTA",
  "cinema.chase.winsBig": "FATURA ALTO",
  "cinema.chase.yourCut": "SUA PARTE",
  "cinema.chase.otherBackerOne": "{n} outro apoiador · proporcional",
  "cinema.chase.otherBackerMany": "{n} outros apoiadores · proporcional",
  "cinema.chase.backerOne": "{n} apoiador · proporcional",
  "cinema.chase.backerMany": "{n} apoiadores · proporcional",
  "cinema.chase.alsoWonRound": "Também venceu a rodada",
  "cinema.chase.backedTileNote": "Uma casa apostada · não a vencedora da rodada",
  "cinema.chase.heldCardsSpillOne": "1 carta guardada transborda",
  "cinema.chase.heldCardsSpillMany": "{n} cartas guardadas transbordam",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "pote",
  "cinema.you.get": "Você recebe",
  "cinema.you.lost": "Você perdeu!",
  "cinema.you.noStakeThisRound": "Você não apostou nesta rodada",
  "cinema.you.mathLine": "{usdc} USDC da parte do pote + {cards} das cartas = {total} para você",
  "cinema.you.sold": "Vendida {value}",
  "cinema.you.kept": "Guardada · na sua coleção",
  "cinema.you.keepButton": "Guardar",
  "cinema.you.sellButton": "Vender {value}",
  "cinema.you.yours": "sua",
  "cinema.you.noCardThisRound": "Nenhuma carta nesta rodada.",
  "cinema.you.usdcPaidInstantly": "USDC · creditado no seu saldo",
  "cinema.you.keepAll": "Guardar tudo",
  "cinema.you.sellAllButton": "Vender tudo por {value}",
  "cinema.you.sellAllConfirm": "Certeza? Vender tudo {value}",
  "cinema.you.noOtherBackers": "Nenhum outro apoiador nesta rodada",
  "cinema.you.oneOtherSplits": "1 outro divide {value}",
  "cinema.you.othersSplit": "{n} outros dividem {value}",
  "cinema.you.oneWinningBackerTakes": "1 apoiador vencedor leva {value}",
  "cinema.you.winningBackersSplit": "{n} apoiadores vencedores dividem {value}",
  "cinema.you.viewFullResults": "Ver resultados completos",
  "cinema.you.howItWorks": "Como funciona",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // Wording is kept in step with board.settlement.* in pt-BR/board.ts, which
  // renders the same settled panel word for word.
  "cinema.theatre.disposition.noGrail": "Slab padrão, o maior apoiador da casa fica com ela ou vende de volta, proporcional.",
  "cinema.theatre.disposition.sellBackSplit":
    "Regra do Grail: nenhum apoiador sozinho consegue pagar a parte dos outros, então o Grail é vendido de volta por padrão e o USDC é dividido pela casa.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Regra do Grail: a parte proporcional do maior apoiador já cobre a compra da parte dos outros, então ele fica com o Grail e paga a fatia de carta de cada um em USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} de {total} outros jogadores já decidiram; próxima rodada em {seconds} segundos",
  "cinema.theatre.playersDeciding": "Jogadores decidindo {count}",
  "cinema.theatre.nextRoundIn": "próxima rodada em {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Rodada se resolvendo",
  "cinema.theatre.stageLockingBoard": "Travando o tabuleiro…",
  "cinema.theatre.stagePacksOpening": "Packs abrindo no tabuleiro",
  "cinema.theatre.stageWinnerDrawn": "Vencedor sorteado",
  "cinema.theatre.headlineNoEntries": "Ninguém entrou nesta rodada",
  "cinema.theatre.headlineRevealing": "Revelando os packs…",
  "cinema.theatre.headlineTileWins": "{tile} leva {value}",
  "cinema.theatre.tileFallback": "Casa",
  "cinema.theatre.youWon": "Você ganhou {value}",
  "cinema.theatre.youLostNoStake": "Você perdeu, sem aposta em {tile}",
  "cinema.theatre.winnerFallback": "o vencedor",
  "cinema.theatre.tileWonNoStake": "{tile} venceu · você não tinha aposta",
  "cinema.theatre.aTileFallback": "Uma casa",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} casas em jogo · pote {pool}",
  "cinema.theatre.stripMetaCards": " · {value} em cartas",
  "cinema.theatre.stripMetaCash": " + {value} em dinheiro",
  "cinema.theatre.drawingWinner": "sorteando o vencedor",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Resultado da rodada",
  "cinema.theatre.roundSettled": "Rodada liquidada",
  "cinema.theatre.winner": "Vencedor",
  "cinema.theatre.seedNote":
    "Inclui sua aposta inicial de {value} em {tile}, zere as apostas iniciais no painel de aposta para jogar a partir do $0.",
  "cinema.theatre.lossNoteStaked":
    "Você apostou {value} em outras casas nesta rodada. Passe o mouse em qualquer casa atrás deste painel para ver o que ela abriu e por que perdeu.",
  "cinema.theatre.lossNoteNoStake":
    "Você não apostou em nenhuma casa nesta rodada, então não tem nada a receber. Escolha o tamanho da aposta e clique numa casa na próxima rodada.",
  "cinema.theatre.bonusGrails.one":
    "Mais {n} Grail caiu nesta rodada: ele vai para os apoiadores da casa vencedora como bônus (guardado, ou vendido de volta proporcionalmente se for caro demais para segurar), nunca para a taxa ATTN nem para a Caçada.",
  "cinema.theatre.bonusGrails.other":
    "Mais {n} Grails caíram nesta rodada: eles vão para os apoiadores da casa vencedora como bônus (guardados, ou vendidos de volta proporcionalmente se forem caros demais para segurar), nunca para a taxa ATTN nem para a Caçada.",
  "cinema.theatre.noPacksBacked": "Nenhum pack foi apostado nesta rodada. A próxima começa sozinha.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Divisão do pagamento · {tile}",
  "cinema.theatre.payoutSplitMeta": "Pote {pool} · Caçada recebe {feed}",
  "cinema.theatre.payoutSplitChase": " · CAÇADA +{value}",
  "cinema.theatre.you": "Você",
  "cinema.theatre.physicalCard": "Carta física →",
  "cinema.theatre.grailSecured": " (Grail garantido)",
  "cinema.theatre.grailSoldBack": "Grail vendido de volta ({value}) → USDC na divisão acima.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "A CAÇADA CAIU!",
  "cinema.theatre.chaseHitBody":
    "A Caçada disparou no seu próprio sorteio raro, então {value} da Caçada entraram nesta vitória, somados à divisão acima. A próxima Caçada já começa a crescer.",
  "cinema.theatre.chaseMissLead": "A Caçada não caiu nesta rodada.",
  "cinema.theatre.chaseMissBody": "A Caçada dispara no seu próprio sorteio raro, então ela segue crescendo, agora em {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Conferir sorteio",
  "cinema.theatre.vrfSummaryNote": "sorteio verificável · veja o recibo do sorteio",
  "cinema.theatre.vrfRoundId": "id da rodada",
  "cinema.theatre.vrfWinningDraw": "sorteio vencedor",
  "cinema.theatre.vrfDrawSeed": "semente",
  "cinema.theatre.vrfProofId": "id da prova",
  "cinema.theatre.vrfTicket": "#{n} de {total}",
  "cinema.theatre.vrfVerifying": "Conferindo…",
  "cinema.theatre.vrfRecheck": "Conferir de novo",
  "cinema.theatre.vrfVerifierLink": "Verificador ↗",
  "cinema.theatre.vrfVerified": "✓ Sorteio conferido, este vencedor bate com a semente publicada.",
  "cinema.theatre.vrfFailed": "✗ Este sorteio não bateu com a semente dele, não confie.",
  "cinema.theatre.vrfNote": "Toda rodada sorteia um vencedor a partir de uma semente publicada que você mesmo pode conferir.",
  "cinema.theatre.vrfNoDraw": "Nenhum pack apostado nesta rodada, nada para sortear.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Guardar carta → coleção",
  "cinema.theatre.sellBackFor": "Vender de volta por {value}",
  "cinema.theatre.continueNextRound": "Ir para a próxima rodada",
  "cinema.theatre.continue": "Continuar",
  "cinema.theatre.settleHint":
    "Guardar leva a carta para a sua coleção. Vender de volta credita {sell} no seu saldo ({pct}% de {value}, a recompra da CC deste pack). Sem ação = venda de volta por padrão quando a rodada fechar.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Travada",
  "cinema.prizeModal.stageReveal": "Revelação",
  "cinema.prizeModal.betterLuck": "Mais sorte na próxima rodada",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Preparando sua imagem…",
  "cinema.share.renderingPng": "Gerando o PNG…",
  "cinema.share.renderFailed": "Não deu para gerar a imagem. Tente de novo.",
  "cinema.share.captionOpened": "A legenda abriu no X. Anexe o PNG que você salvou.",
  "cinema.share.close": "Fechar",
  "cinema.share.downloadPng": "Baixar PNG",
  "cinema.share.shareToX": "Compartilhar no X",
  "cinema.share.done": "Pronto",
  "cinema.share.provablyFair": "BATALHAS DE PACKS · CADA SORTEIO VERIFICÁVEL",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "multiplicador {value}",
  "cinema.winShare.multiplier": "MULTIPLICADOR",
  "cinema.winShare.inCards": "EM CARTAS",
  "cinema.winShare.cashWon": "DINHEIRO GANHO",
  "cinema.winShare.tileHit": "· CASA ACERTADA",
  "cinema.winShare.entry": "ENTRADA",
  "cinema.winShare.winOdds": "CHANCE DE VITÓRIA",
  "cinema.winShare.totalValue": "VALOR TOTAL",
  "cinema.winShare.certLine": "COM TECNOLOGIA SLABZ · CERT #{n}",
  "cinema.winShare.roundLine": "RODADA #{n} · SORTEIO VRF VERIFICÁVEL",
  "cinema.winShare.takeHomeAriaLabel": "levou para casa {value}",
  "cinema.winShare.totalTakeHome": "TOTAL EMBOLSADO",
  "cinema.winShare.breakdown.one": "{cash} EM DINHEIRO + {n} CARTA ({value})",
  "cinema.winShare.breakdown.other": "{cash} EM DINHEIRO + {n} CARTAS ({value})",
  "cinema.winShare.deposited": "DEPOSITADO",
  "cinema.winShare.wonBy": "GANHO POR {name}",
  "cinema.winShare.theGrail": "O GRAIL",
  "cinema.winShare.topPull": "MELHOR PUXADA",
  "cinema.winShare.topCardOfRound": "MELHOR CARTA DA RODADA",
  "cinema.winShare.poweredBySlabz": "COM TECNOLOGIA SLABZ",
  "cinema.winShare.cert": "CERT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Compartilhe sua vitória",
  "cinema.winShare.pngSaved": "PNG salvo. Anexe ele no seu post, o X não faz isso por você.",
  "cinema.winShare.renderingHdVideo": "Gerando o vídeo HD da rodada…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Gerando o vídeo HD da rodada: {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "Vídeo HD salvo. Anexe ele no seu post no lugar da imagem.",
  "cinema.winShare.hdRenderFailed": "A renderização em HD falhou. Tente de novo.",
  "cinema.winShare.hdVideoButton": "Vídeo HD da rodada",
  "cinema.winShare.hdVideoTitle": "Gere esta rodada como um mp4 em HD (serviço de renderização local) e salve.",
  "cinema.winShare.tweetTriggerLabel": "Compartilhar a vitória no X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "retorno de {value} sobre a aposta",
  "cinema.pnlShare.onStake": "SOBRE A APOSTA",
  "cinema.pnlShare.certifiedRun": "RUN CERTIFICADA · LUCRO LÍQUIDO",
  "cinema.pnlShare.heroSub.one": "em {n} rodada · {pct}% de vitórias",
  "cinema.pnlShare.heroSub.other": "em {n} rodadas · {pct}% de vitórias",
  "cinema.pnlShare.collection": "COLEÇÃO",
  "cinema.pnlShare.change30d": "VARIAÇÃO 30D",
  "cinema.pnlShare.ribbonAriaLabel.one": "Resultado por rodada, última {n} rodada apostada",
  "cinema.pnlShare.ribbonAriaLabel.other": "Resultado por rodada, últimas {n} rodadas apostadas",
  "cinema.pnlShare.bestPull": "MELHOR PUXADA",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "COMUM",
  "cinema.pnlShare.rounds": "RODADAS",
  "cinema.pnlShare.winRate": "TAXA DE VITÓRIA",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "MELHOR RODADA",
  "cinema.pnlShare.rank": "RANK #{n}",
  "cinema.pnlShare.rankOf": "RANK #{n} DE {total}",
  "cinema.pnlShare.staked": "{value} APOSTADOS",
  "cinema.pnlShare.overlayAriaLabel": "Compartilhe sua run",
  "cinema.pnlShare.saved": "Salvo. Anexe no seu post.",
  "cinema.pnlShare.triggerLabel": "Compartilhar PnL",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Guardar / vender",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Você decide",
  "cinema.recap.dest.deciding": "Decidindo",
  "cinema.recap.dest.you": "Você",
  "cinema.recap.dest.topBacker": "Maior apoiador",
  "cinema.recap.dest.yourCard": "Sua carta",
  "cinema.recap.dest.wonBy": "Ganha por",
  "cinema.recap.dest.aBacker": "Um apoiador",
  "cinema.recap.dest.yourChaseLoot": "Seu prêmio da Caçada",
  "cinema.recap.dest.chaseLoot": "Prêmio da Caçada",
  "cinema.recap.dest.releasedFromVault": "liberada do cofre",
  "cinema.recap.dest.sweptTo": "Recolhida para",
  "cinema.recap.dest.chaseVault": "O cofre da Caçada",
  "cinema.recap.dest.fundsJackpot": "alimenta o prêmio",
  "cinema.recap.dest.protocolFee": "Taxa do protocolo",
  "cinema.recap.dest.tableRake": "taxa da mesa",
  "cinema.recap.dest.soldBack": "Vendida de volta",
  "cinema.recap.dest.intoTheSplit": "Entra na divisão",
  "cinema.recap.dest.toThePool": "+{value} no pote",
  "cinema.recap.sublineYours": "As cartas da mesa inteira nesta rodada. A sua está marcada aqui embaixo.",
  "cinema.recap.sublineLost": "As cartas da mesa inteira nesta rodada. Nenhuma delas é sua.",
  "cinema.recap.sublineNoStake": "As cartas da mesa inteira nesta rodada. Você ficou de fora dessa.",
  "cinema.recap.sectionAriaLabel": "Para onde foi cada carta desta rodada",
  "cinema.recap.eyebrow": "Resultados da rodada",
  "cinema.recap.headline": "Onde cada carta parou",
  "cinema.recap.theatreHeader": "A história da rodada · o destino de cada carta",
  "cinema.recap.openCardTitle": "Abre a página da carta numa nova aba",
  "cinema.recap.fromPack": "De {pack}",
  "cinema.recap.railAriaLabel": "Todas as cartas da rodada, as mais valiosas primeiro",
  "cinema.recap.tierRule.one": "A outra carta · {value}",
  "cinema.recap.tierRule.other": "As outras {n} cartas · {value}",
  "cinema.recap.showMore": "Ver mais {n}",
  "cinema.recap.showAll": "Ver todas as {n}",
  "cinema.recap.showing": "{n} de {total} cartas · {value} de {totalValue}",
  "cinema.recap.allShown": "Todas as {n} cartas · {value} no total",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "GRAVAR ABA" inside the two service sentences is this same panel's button
  // label (cinema.replay.recordTab): keep the two in step.
  "cinema.replay.finishingVideo": "Finalizando o vídeo...",
  "cinema.replay.recordingEmpty": "A gravação voltou vazia. Tente de novo.",
  "cinema.replay.checkingService": "Procurando o serviço de renderização em HD...",
  "cinema.replay.serviceUnreachable":
    "O serviço de renderização em HD não responde, então não dá para gerar em HD. GRAVAR ABA captura esta aba no lugar (o navegador vai pedir permissão).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Gerando o vídeo HD: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "A renderização em HD falhou. Tente de novo, ou use GRAVAR ABA para capturar esta aba.",
  "cinema.replay.cannotRecord":
    "Este navegador não consegue gravar vídeo aqui. Salvando o arquivo da rodada no lugar: solte ele na página de replay para assistir de novo.",
  "cinema.replay.pickThisTab": "Escolha “Esta aba” para gravar a rodada.",
  "cinema.replay.recorderFailed": "Não deu para iniciar o gravador.",
  "cinema.replay.watermarkAriaLabel": "Replay da rodada {n}",
  "cinema.replay.watermarkAriaLabelDated": "Replay da rodada {n}, gravado em {date}",
  "cinema.replay.watermarkTag": "REPLAY",
  "cinema.replay.watermarkRound": "RODADA #{n}",
  "cinema.replay.headerSeed": "SEMENTE {seed}",
  "cinema.replay.phaseBidding": "APOSTAS",
  "cinema.replay.phaseReveal": "REVELAÇÃO",
  "cinema.replay.phaseDone": "FIM",
  "cinema.replay.boardAriaLabel": "Tabuleiro do replay",
  "cinema.replay.controlsAriaLabel": "Controles do replay da rodada {n}",
  "cinema.replay.pause": "Pausar",
  "cinema.replay.play": "Reproduzir",
  "cinema.replay.pauseButton": "PAUSAR",
  "cinema.replay.playButton": "REPRODUZIR",
  "cinema.replay.restart": "RECOMEÇAR",
  "cinema.replay.scrubAriaLabel": "Navegue pela rodada inteira: das apostas até a revelação",
  "cinema.replay.lockMark": "Travamento",
  "cinema.replay.seeking": "BUSCANDO",
  "cinema.replay.speedAriaLabel": "Velocidade de reprodução",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "SALVAR VÍDEO",
  "cinema.replay.saveVideoTitle":
    "Gere esta rodada como um mp4 em HD (serviço de renderização local; nada da sua tela é gravado)",
  "cinema.replay.recordTab": "GRAVAR ABA",
  "cinema.replay.recordTabTitle":
    "Alternativa: grave esta aba pela captura de tela do navegador (qualidade em tempo real)",
  "cinema.replay.saveRound": "SALVAR RODADA",
  "cinema.replay.saveRoundTitle":
    "Baixe esta rodada como um arquivinho de dados, qualquer pessoa pode soltar ele na página de replay para assistir exatamente esta rodada",
  "cinema.replay.close": "FECHAR",
  "cinema.replay.backToGame": "VOLTAR AO JOGO",
  "cinema.replay.shareOverlayAriaLabel": "Compartilhar esta rodada",
  "cinema.replay.videoReady": "VÍDEO DA RODADA PRONTO",
  "cinema.replay.formatWebm": "Salvo em .webm, o X só aceita mp4 no upload, então compartilhe o link ou converta o arquivo antes.",
  "cinema.replay.formatMp4": "Salvo em .mp4, pronto para anexar no X.",
  "cinema.replay.shareOnX": "Compartilhar no X",
  "cinema.replay.saveAgain": "Salvar de novo",
  "cinema.replay.shareHint": "O X não anexa vídeo direto da web. Seu post abre já preenchido, é só anexar o arquivo salvo.",
  "cinema.replay.xOpened": "O X abriu com a sua legenda. Anexe o arquivo salvo ({filename}), o editor da web não faz isso por você.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "Replay de Rodada attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "Nenhuma gravação informada. Passe ?rec=<json-ou-url-codificado>.",
  "cinema.replayRoute.unreadable": "Não deu para ler a gravação do ?rec=.",
  "cinema.replayRoute.loadFailed": "Não deu para carregar a gravação ({error}).",
  "cinema.replayRoute.badge": "REPLAY DA RODADA",
  "cinema.replayRoute.loading": "CARREGANDO A GRAVAÇÃO",
  "cinema.replayRoute.noRecording": "Nenhuma gravação para reproduzir.",
  "cinema.replayRoute.hint":
    "Os replays abrem pela faixa de rodadas passadas do tabuleiro (REPLAY numa rodada liquidada) ou por um link ?rec= compartilhado.",
  "cinema.replayRoute.roundResults": "RESULTADOS DA RODADA",
  "cinema.replay.viewpointLabel": "VIEWPOINT",
  "cinema.replay.viewpointAriaLabel": "Choose a replay viewpoint",
  "cinema.replay.viewpointTable": "TABLE VIEW",
  "cinema.replay.viewpointTickerAriaLabel": "{name}'s bid timeline",
  "cinema.replay.viewpointStory": "{name}'s story",
  "cinema.replay.viewpointTile": "Tile {n}",
  "cinema.replay.viewpointStake": "Stake",
  "cinema.replay.viewpointBidAction": "{tile} · {pack} x{count} · {amount}",
  "cinema.replay.viewpointBidTotal": "{time} · total {total}",
  "cinema.replay.viewpointNoBids": "No bids yet",
  "cinema.share.shareFile": "Compartilhar arquivo",
  "cinema.share.shareSheetOpened": "A folha de compartilhamento foi aberta.",
  "cinema.winShare.lossHeadline": "DERROTA NA RODADA",
  "cinema.winShare.lossResult": "DERROTA",
  "cinema.winShare.returned": "DEVOLVIDO",
  "cinema.winShare.bestPull": "MELHOR PULL",
  "cinema.winShare.playedBy": "JOGADO POR {name}",
  "cinema.winShare.lossCaption": "Rodada #{n}: apostei {stake}. Não levei nada nesta rodada.",
  "cinema.winShare.lossCardCaption": "O melhor pull da mesa, mas não meu.",
  "cinema.winShare.lossNoCardCaption": "O resultado da rodada, registrado com honestidade.",
  "cinema.winShare.roundResultTop": "RODADA",
  "cinema.winShare.roundResultMain": "DERROTA",
  "cinema.winShare.shareRoundCard": "Compartilhar cartão",
  "cinema.replay.shareVideo": "Compartilhar vídeo",
  "cinema.replay.shareVideoTitle": "Compartilhar vídeo da rodada",
  "cinema.replay.shareVideoSheetOpened": "A folha foi aberta com o vídeo.",
  "cinema.replay.shareVideoFailed": "Não foi possível compartilhar o vídeo. Tente novamente.",
  "cinema.replay.shareSheetHint": "Seu dispositivo pode enviar este vídeo para o X pela folha de compartilhamento.",
  "cinema.replay.shareRoundTitle": "attn royale · Rodada #{n}",
  "cinema.replay.shareRoundTable": "{amount} na mesa.",
  "cinema.replay.shareRoundWin": "Minha casa levou a mesa por {pool} · {amount} voltou.",
  "cinema.replay.shareRoundCardsOnly": "A casa {tile} levou a mesa por {pool} · minha casa perdeu, mas {amount} voltou.",
  "cinema.replay.shareRoundWinner": "A casa {tile} levou a mesa por {pool}.",
  "cinema.share.shareVideo": "Compartilhar vídeo",
  "cinema.share.preparingOutput": "Preparando o compartilhamento…",
  "cinema.share.cancelled": "Compartilhamento cancelado.",
  "cinema.share.shareSheetHint": "Seu dispositivo pode enviar este vídeo para o X pela folha de compartilhamento.",
  "cinema.personalReveal.sectionAria": "Cartas que você abriu",
  "cinema.personalReveal.title": "CARTAS QUE VOCÊ ABRIU",
  "cinema.personalReveal.progress.eyebrow": "REVELAÇÃO SINCRONIZADA",
  "cinema.personalReveal.progress.title": "ABERTURAS EM ANDAMENTO",
  "cinema.personalReveal.progress.body": "A mesa está abrindo as cartas. A revelação compartilhada continua ao fim desta etapa.",
  "cinema.personalReveal.normal.label": "REVELAÇÃO NORMAL",
  "cinema.personalReveal.normalHint": "Primeiro, você vê o verso da carta. Clique ou toque para virá-la; as cartas que você abre são suas. As que ainda estiverem viradas para baixo serão abertas automaticamente após 5 segundos.",
  "cinema.personalReveal.hardcore.label": "REVELAÇÃO EXTREMA",
  "cinema.personalReveal.hardcoreHint": "Primeiro, você vê o verso da carta. Clique ou toque para virá-la; a propriedade é definida após o sorteio. As que ainda estiverem viradas para baixo serão abertas automaticamente após 5 segundos.",
  "cinema.personalReveal.yourCard": "SUA CARTA",
  "cinema.personalReveal.youOpened": "ABERTA POR VOCÊ",
  "cinema.personalReveal.otherCards": "OUTRAS CARTAS",
  "cinema.personalReveal.sort.group": "Ordem das cartas",
  "cinema.personalReveal.sort.pack": "Pacote",
  "cinema.personalReveal.sort.packAria": "Ordenar por preço do pack, mais barato primeiro",
  "cinema.personalReveal.sort.rarity": "Raridade",
  "cinema.personalReveal.sort.revealFirst": "A ordenação por raridade é liberada após revelar todas as cartas",
  "cinema.personalReveal.sort.bestAria": "Ordenar por raridade, melhores primeiro",
  "cinema.personalReveal.sort.worstAria": "Ordenar por raridade, piores primeiro",
  "cinema.personalReveal.sort.packStatus": "Cartas ordenadas por preço do pack, mais barato primeiro",
  "cinema.personalReveal.sort.bestStatus": "Cartas ordenadas por raridade, melhores primeiro",
  "cinema.personalReveal.sort.worstStatus": "Cartas ordenadas por raridade, piores primeiro",
  "cinema.personalReveal.allOpen": "Todas as cartas estão reveladas",
  "cinema.personalReveal.autoOpenIn": "As cartas restantes são reveladas automaticamente em {n} s",
  "cinema.personalReveal.revealCardAria": "Virar carta {n}",
  "cinema.personalReveal.revealedCardAria": "Carta {n} revelada: {name}, {value}",
  "cinema.personalReveal.rarity": "Raridade",
  "cinema.personalReveal.year": "Ano",
  "cinema.personalReveal.yearUnknown": "Ano desconhecido",
  "cinema.personalReveal.grade": "Nota",
  "cinema.personalReveal.ungraded": "Sem nota",
  "cinema.personalReveal.pageNavigation": "Páginas de cartas",
  "cinema.personalReveal.previousPage": "Cartas anteriores",
  "cinema.personalReveal.nextPage": "Próximas cartas",
  "cinema.personalReveal.pageStatus": "Página {page} de {pages}",
  "cinema.personalReveal.live.revealed": "{name} revelada",
  "cinema.personalReveal.live.all": "Todas as {n} cartas foram reveladas",
} as Record<string, string>;
