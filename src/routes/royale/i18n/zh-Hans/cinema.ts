// Chinese, Simplified (简体中文): editorial pass over the Phase 1 machine
// translation. Same key set as en/cinema.ts. See royaleI18n.ts for the
// {token} interpolation convention and the "no em dash" rule (the Chinese
// full-width 破折号 is the SAME character and is banned too).
//
// House terms (kept in step with board.ts / misc.ts / core.ts):
//   tile 格子 · pack 卡包 · back/stake 押注 · bet 下注 · backer 押注者 ·
//   pool 奖池 · jackpot 累积奖金 · Chase 追逐奖 · vault 金库 ·
//   buyback 回购价 · sell back 回售 · settle 结算 · collection 收藏 ·
//   slab 评级卡 · rake 抽成 · odds 胜率 · pull 拆出.
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) stay in Latin
// script, mid-sentence included, as do attn ROYALE / ATTN / SLABZ /
// CollectorCrypt / USDC / X / VRF.
//
// NBSP NOTE: en's cinema.tileValue.cardValueLabel / onTileLabel carry a
// literal NBSP so a two-WORD English label cannot break mid-phrase. Chinese
// writes each as one unbroken run of characters, so there is no space to
// protect and none is used here.
//
// Segment: cinema - owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts (the copy: fields of REVEAL_CINEMA_SEQUENCE),
// RoyaleRoundCardWall.tsx, RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx,
// RoyalePrizeModal.tsx, RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "拆包中",
  "cinema.phaseAnnounce.packsOpening.subtitle": "揭示卡片 · 各格重新计价",
  "cinema.phaseAnnounce.winnerDraw.title": "抽取获胜者",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "依据各格总额加权",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "已锁定，棋盘就是舞台",
  "cinema.phase.packsEnter.copy": "卡包登场",
  "cinema.phase.packsOpening.copy": "卡包撕开：卡片揭示，各格重新计价",
  "cinema.phase.cardsByTile.copy": "卡片揭示：按价值从高到低逐格呈现",
  "cinema.phase.valueScan.copy": "扫读全场：最大的拆出在发光",
  "cinema.phase.winnerDraw.copy": "抽取获胜者：依据各格总额加权",
  "cinema.phase.winnerLock.copy": "获胜者已锁定",
  "cinema.phase.loserValueConverge.copy": "落选卡片退回金库，价值归给获胜方",
  "cinema.phase.winnerPotCountUp.copy": "奖池落到获胜格子上",
  "cinema.phase.chaseFeed.copy": "追逐奖抽走自己那一份",
  "cinema.phase.chasePayout.copy": "追逐奖砸下：一个格子通吃",
  "cinema.phase.allocation.copy": "你将获得",
  "cinema.phase.keepSellDecision.copy": "保留还是出售：决定可以拖到下一回合",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "已入库",
  "cinema.vaultLock.plateSub": "追逐奖",
  "cinema.vaultLock.status": "已锁定",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "本回合没有拆出任何卡片",
  "cinema.cardWall.won": "已获胜",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "顶级命中",
  "cinema.cardWall.rarity.common": "普通",
  "cinema.cardWall.rarity.rare": "稀有",
  "cinema.cardWall.rarity.epic": "史诗",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "已保留",
  "cinema.cardWall.status.sold": "已出售",
  "cinema.cardWall.status.toTheChase": "计入追逐奖",
  "cinema.cardWall.status.rake": "平台抽成",
  "cinema.cardWall.owner.vault": "金库",
  "cinema.cardWall.owner.you": "你",
  "cinema.cardWall.cardAriaLabel": "{name}，{value}。按Enter键打开卡片详情。",
  "cinema.cardWall.sectionAriaLabel": "本回合拆出的所有卡片，按价值从高到低",
  "cinema.cardWall.eyebrow": "全部拆出卡片",
  "cinema.cardWall.rake.title": "协议费用",
  "cinema.cardWall.rake.metaOne": "1张卡片计入抽成",
  "cinema.cardWall.rake.metaMany": "{n}张卡片计入抽成",
  "cinema.cardWall.rake.hide": "隐藏",
  "cinema.cardWall.rake.show": "显示",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "关闭揭示",
  "cinema.close.title": "关闭揭示（Esc）",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "正式获胜者",
  "cinema.provCaption.round": "回合",
  "cinema.provCaption.verifyAt": "验证地址",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "回合 #{n}",
  "cinema.bar.vrfBadge": "由CollectorCrypt VRF提供支持",
  "cinema.bar.chaseFeed": "追逐奖 +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "开启中",
  "cinema.phaseShort.drawing": "抽取中",
  "cinema.phaseShort.results": "结果",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "获胜者",
  "cinema.core.tileWins": "{tile}获胜",
  "cinema.core.inCards": " 卡片价值",
  "cinema.core.poolSuffix": " 奖池",
  "cinema.core.totalCardValue": "卡片总价值",
  "cinema.core.totalPool": "奖池总额",
  "cinema.core.tilesLive": "{n}个格子进行中",
  "cinema.core.packsSuffix": " · {n}个卡包",
  "cinema.core.yourStake": "你的下注",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "无投注",
  "cinema.heatOnly.note": "仅USDC · 本回合未成包",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n}个卡包",
  "cinema.tile.packCountMany": "{n}个卡包",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "未中奖。卡片归获胜格子的押注者所有。",
  "cinema.vaultNote.heatOnlyNoPack": "本回合未成包 · 零散资金计入奖池",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "来自{pack}",
  "cinema.grail.fromPackRate": "来自{pack} · {pct}拆出率",
  "cinema.grail.pullTitle": "GRAIL 拆出",
  "cinema.grail.fromPackVisible": "来自一个{pack}卡包",
  "cinema.grail.provenanceAriaLabel": "{tile}，来自一个{pack}卡包",
  "cinema.grail.multiTitle": "本回合{n}张 GRAIL",
  "cinema.grail.galleryTileFromPack": "{tile} · 来自{pack}",
  "cinema.grail.galleryMore": "还有{n}张",
  "cinema.card.openInNewTab": "在新标签页中打开{name}的卡片页面",
  "cinema.card.ariaLabelWithOdds": "{name}，{value}。来自{pack}卡包，拆出率{pct}。按Enter键打开卡片详情。",
  "cinema.card.ariaLabelWithBand": "{name}，{value}。{bandLine}。按Enter键打开卡片详情。",
  "cinema.card.bandChancePct": "来自{pack}卡包，概率{pct}%",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} 获胜",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "出售窗口开启",
  "cinema.sellWindow.secToDecide": "秒可决定",
  "cinema.sellWindow.noActionAutoSells": "不操作将在下次锁定时自动出售",
  "cinema.sellWindow.noActionKeeps": "不操作即保留 · 随时可在你的卡片里出售",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // en carries a literal NBSP (U+00A0) between the two WORDS of each label so
  // "card value" / "on tile" cannot break to an orphan "card" / "on" at a
  // line end (AUDIT-FIX-4). Chinese writes each label as one unbroken run of
  // characters, so there is no space to protect and none is used here.
  "cinema.tileValue.cardValueLabel": "卡片价值",
  "cinema.tileValue.onTileLabel": "格子上",
  "cinema.tileValue.oddsWord": "胜率",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "被命中的格子",
  "cinema.chase.fires": "追逐奖触发",
  "cinema.chase.jackpotReleasingTo": "累积奖金正释放给{tile}",
  "cinema.chase.winningTileFallback": "获胜格子",
  "cinema.chase.feedThisRound": "本回合追逐奖 +{value}",
  "cinema.chase.cardToChase": "卡片计入追逐奖",
  "cinema.chase.bestLosingCardNamed": "落选卡片里最好的一张 · {name} · {value}已锁定",
  "cinema.chase.bestLosingCardVault": "落选卡片里最好的一张已锁进金库",
  "cinema.chase.jackpotGrows": "追逐奖 +{value} · 累积奖金继续涨",
  "cinema.chase.hitsAriaLabel": "追逐奖命中{tile}，获得{value}",
  "cinema.chase.alsoHolds": "追逐奖同时持有",
  "cinema.chase.alsoHoldsAriaOne": "追逐奖同时持有1张价值{value}的卡片",
  "cinema.chase.alsoHoldsAriaMany": "追逐奖同时持有{n}张价值{value}的卡片",
  "cinema.chase.more": "更多",
  "cinema.chase.cardsTotalOne": "1张卡片 · 评级卡共{value}",
  "cinema.chase.cardsTotalMany": "{n}张卡片 · 评级卡共{value}",
  "cinema.chase.hitsKicker": "追逐奖命中",
  "cinema.chase.winsBig": "大获全胜",
  "cinema.chase.yourCut": "你的份额",
  "cinema.chase.otherBackerOne": "另有{n}位押注者 · 按比例分配",
  "cinema.chase.otherBackerMany": "另有{n}位押注者 · 按比例分配",
  "cinema.chase.backerOne": "{n}位押注者 · 按比例分配",
  "cinema.chase.backerMany": "{n}位押注者 · 按比例分配",
  "cinema.chase.alsoWonRound": "同时赢得本回合",
  "cinema.chase.backedTileNote": "有人押注的格子 · 不是本回合的获胜者",
  "cinema.chase.heldCardsSpillOne": "库存里溢出1张卡片",
  "cinema.chase.heldCardsSpillMany": "库存里溢出{n}张卡片",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "奖池",
  "cinema.you.get": "你将获得",
  "cinema.you.lost": "你输了！",
  "cinema.you.noStakeThisRound": "你本回合未参与投注",
  "cinema.you.mathLine": "奖池分成{usdc} USDC + 卡片{cards} = 共{total}归你",
  "cinema.you.sold": "已出售{value}",
  "cinema.you.kept": "已保留 · 收进你的收藏",
  "cinema.you.keepButton": "保留",
  "cinema.you.sellButton": "出售{value}",
  "cinema.you.yours": "归你所有",
  "cinema.you.noCardThisRound": "本回合没有卡片。",
  "cinema.you.usdcPaidInstantly": "USDC · 计入余额",
  "cinema.you.keepAll": "全部保留",
  "cinema.you.sellAllButton": "全部出售{value}",
  "cinema.you.sellAllConfirm": "确定？全部卖出 {value}",
  "cinema.you.noOtherBackers": "本回合没有别的押注者",
  "cinema.you.oneOtherSplits": "另1人分得{value}",
  "cinema.you.othersSplit": "另{n}人分得{value}",
  "cinema.you.oneWinningBackerTakes": "1位获胜押注者获得{value}",
  "cinema.you.winningBackersSplit": "{n}位获胜押注者分得{value}",
  "cinema.you.viewFullResults": "查看完整结果",
  "cinema.you.howItWorks": "玩法说明",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // GRAIL DISPOSITION rule copy, kept word for word in step with
  // board.settlement.disposition* so the two panels read the same.
  "cinema.theatre.disposition.noGrail": "普通评级卡：格子的最大押注者可保留，或回售后按比例分配。",
  "cinema.theatre.disposition.sellBackSplit":
    "Grail 规则：没有哪个押注者买得起其他人的份额，所以这张 Grail 默认回售，USDC按格子内比例分给大家。",
  "cinema.theatre.disposition.topBackerKeeps":
    "Grail 规则：最大押注者的份额足以买断其他人，所以 Grail 归最大押注者，其他人的卡片份额用USDC结清。",
  // Spectator "players deciding" wait row.
  "cinema.theatre.decidingAriaLabel": "其他{total}位玩家已有{decided}位做出决定，下一回合{seconds}秒后开始",
  "cinema.theatre.playersDeciding": "玩家决定中 {count}",
  "cinema.theatre.nextRoundIn": "下一回合 {seconds}",
  "cinema.theatre.secondsShort": "{n}秒",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "回合结算中",
  "cinema.theatre.stageLockingBoard": "棋盘锁定中…",
  "cinema.theatre.stagePacksOpening": "棋盘上正在开包",
  "cinema.theatre.stageWinnerDrawn": "获胜者已抽出",
  "cinema.theatre.headlineNoEntries": "本回合无人参与",
  "cinema.theatre.headlineRevealing": "卡包揭示中…",
  "cinema.theatre.headlineTileWins": "{tile}赢得{value}",
  "cinema.theatre.tileFallback": "格子",
  "cinema.theatre.youWon": "你赢了{value}",
  "cinema.theatre.youLostNoStake": "你输了，{tile}上没有你的投注",
  "cinema.theatre.winnerFallback": "获胜者",
  "cinema.theatre.tileWonNoStake": "{tile}获胜 · 你没有投注",
  "cinema.theatre.aTileFallback": "某个格子",
  // Leading separator/space is part of the value: these two append to the
  // meta line.
  "cinema.theatre.stripMeta": "{tiles}个格子参战 · 奖池{pool}",
  "cinema.theatre.stripMetaCards": " · 卡片{value}",
  "cinema.theatre.stripMetaCash": " + 现金{value}",
  "cinema.theatre.drawingWinner": "正在抽取获胜者",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "回合结果",
  "cinema.theatre.roundSettled": "回合已结算",
  "cinema.theatre.winner": "获胜者",
  "cinema.theatre.seedNote":
    "其中含你在{tile}上的{value}初始投注。想从$0开打，可在投注面板里清空初始投注。",
  "cinema.theatre.lossNoteStaked":
    "本回合你在其他格子上押了{value}。把鼠标移到面板后的任意格子，就能看到它开出了什么、又为什么输。",
  "cinema.theatre.lossNoteNoStake":
    "本回合你没押任何格子，自然没有派奖。下一回合选好投注额，点一个格子就行。",
  "cinema.theatre.bonusGrails.one":
    "本回合还落下{n}张 Grail：作为额外战利品归获胜格子的押注者（保留，或价格太高拿不动时按比例回售分掉），绝不进ATTN手续费，也不进追逐奖。",
  "cinema.theatre.bonusGrails.other":
    "本回合还落下{n}张 Grail：作为额外战利品归获胜格子的押注者（保留，或价格太高拿不动时按比例回售分掉），绝不进ATTN手续费，也不进追逐奖。",
  "cinema.theatre.noPacksBacked": "本回合没有卡包押注。下一回合会自动开始。",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "派奖分配 · {tile}",
  "cinema.theatre.payoutSplitMeta": "奖池{pool} · 追逐奖注入{feed}",
  "cinema.theatre.payoutSplitChase": " · 追逐奖 +{value}",
  "cinema.theatre.you": "你",
  "cinema.theatre.physicalCard": "实体卡片 →",
  "cinema.theatre.grailSecured": "（Grail 已锁定归属）",
  "cinema.theatre.grailSoldBack": "Grail 已回售（{value}）→ USDC分配见上方。",
  // Chase result.
  "cinema.theatre.chaseHitLead": "追逐奖触发！",
  "cinema.theatre.chaseHitBody":
    "追逐奖在它自己的稀有抽取中触发，因此拿出{value}并入这次获胜，计进上方的分配。新一轮追逐奖重新开始累积。",
  "cinema.theatre.chaseMissLead": "本回合追逐奖未触发。",
  "cinema.theatre.chaseMissBody": "追逐奖由它自己的稀有抽取触发，所以它继续涨，现在是{value}。",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "验证抽取",
  "cinema.theatre.vrfSummaryNote": "抽取可验证 · 查看抽取凭证",
  "cinema.theatre.vrfRoundId": "回合ID",
  "cinema.theatre.vrfWinningDraw": "获胜抽取",
  "cinema.theatre.vrfDrawSeed": "抽取种子",
  "cinema.theatre.vrfProofId": "证明ID",
  "cinema.theatre.vrfTicket": "第{n}/{total}",
  "cinema.theatre.vrfVerifying": "验证中…",
  "cinema.theatre.vrfRecheck": "重新核验抽取",
  "cinema.theatre.vrfVerifierLink": "验证工具 ↗",
  "cinema.theatre.vrfVerified": "✓ 抽取已验证：该结果与公布的抽取种子核对一致。",
  "cinema.theatre.vrfFailed": "✗ 该结果未通过种子核对，请勿采信。",
  "cinema.theatre.vrfNote": "每回合都用一个公开可核验的种子抽出一名获胜者。",
  "cinema.theatre.vrfNoDraw": "本回合没有卡包押注，无需抽取。",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "保留卡片 → 收藏",
  "cinema.theatre.sellBackFor": "以{value}回售",
  "cinema.theatre.continueNextRound": "继续下一回合",
  "cinema.theatre.continue": "继续",
  "cinema.theatre.settleHint":
    "保留就把卡片收进你的收藏。回售会把{sell}（{value}的{pct}%，这个卡包的CC回购价）打进你的余额。不操作的话，回合关闭时默认回售。",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "已锁定",
  "cinema.prizeModal.stageReveal": "揭示",
  "cinema.prizeModal.betterLuck": "下回合再战",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "正在准备你的卡片…",
  "cinema.share.renderingPng": "PNG生成中…",
  "cinema.share.renderFailed": "图片没能生成，再试一次。",
  "cinema.share.captionOpened": "文案已在 X 打开，把保存好的PNG附上去。",
  "cinema.share.close": "关闭",
  "cinema.share.downloadPng": "下载PNG",
  "cinema.share.shareToX": "分享到 X",
  "cinema.share.done": "完成",
  "cinema.share.provablyFair": "卡包对决 · 每次抽取皆可验证",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE", "SLABZ", "GRAIL" and "X" are brand terms and stay English.
  "cinema.winShare.multiplierAriaLabel": "倍数{value}",
  "cinema.winShare.multiplier": "倍数",
  "cinema.winShare.inCards": "卡片价值",
  "cinema.winShare.cashWon": "赢得现金",
  "cinema.winShare.tileHit": "· 命中格子",
  "cinema.winShare.entry": "投入",
  "cinema.winShare.winOdds": "胜率",
  "cinema.winShare.totalValue": "总价值",
  "cinema.winShare.certLine": "由 SLABZ 提供支持 · 证书 #{n}",
  "cinema.winShare.roundLine": "回合 #{n} · 可验证 VRF 抽取",
  "cinema.winShare.takeHomeAriaLabel": "到手{value}",
  "cinema.winShare.totalTakeHome": "到手总额",
  "cinema.winShare.breakdown.one": "现金{cash} + {n}张卡片（{value}）",
  "cinema.winShare.breakdown.other": "现金{cash} + {n}张卡片（{value}）",
  "cinema.winShare.deposited": "已存入",
  "cinema.winShare.wonBy": "{name}赢得",
  "cinema.winShare.theGrail": "GRAIL 卡",
  "cinema.winShare.topPull": "最佳拆出",
  "cinema.winShare.topCardOfRound": "本回合最佳卡片",
  "cinema.winShare.poweredBySlabz": "由 SLABZ 提供支持",
  "cinema.winShare.cert": "证书 #{n}",
  "cinema.winShare.shareYourWin": "分享你的获胜",
  "cinema.winShare.pngSaved": "PNG已保存。把它附到帖子里，X 不会替你加。",
  "cinema.winShare.renderingHdVideo": "正在渲染高清回合视频…",
  "cinema.winShare.renderingHdVideoProgress": "正在渲染高清回合视频，已用{seconds}秒{pct}",
  "cinema.winShare.hdVideoSaved": "高清视频已保存。发帖时用它代替图片。",
  "cinema.winShare.hdRenderFailed": "高清渲染失败，再试一次。",
  "cinema.winShare.hdVideoButton": "高清回合视频",
  "cinema.winShare.hdVideoTitle": "把这个回合渲染成高清mp4（本地渲染服务）并保存。",
  "cinema.winShare.tweetTriggerLabel": "在 X 上分享获胜",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "投注回报{value}",
  "cinema.pnlShare.onStake": "相对投注",
  "cinema.pnlShare.certifiedRun": "认证战绩 · 净盈亏",
  "cinema.pnlShare.heroSub.one": "共{n}个回合 · 胜率{pct}%",
  "cinema.pnlShare.heroSub.other": "共{n}个回合 · 胜率{pct}%",
  "cinema.pnlShare.collection": "收藏",
  "cinema.pnlShare.change30d": "30天变化",
  "cinema.pnlShare.ribbonAriaLabel.one": "最近{n}个有押注回合的逐回合结果",
  "cinema.pnlShare.ribbonAriaLabel.other": "最近{n}个有押注回合的逐回合结果",
  "cinema.pnlShare.bestPull": "最佳拆出",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "顶级",
  "cinema.pnlShare.tier.common": "普通",
  "cinema.pnlShare.rounds": "回合数",
  "cinema.pnlShare.winRate": "胜率",
  "cinema.pnlShare.roi": "回报率",
  "cinema.pnlShare.bestRound": "最佳回合",
  "cinema.pnlShare.rank": "排名 #{n}",
  "cinema.pnlShare.rankOf": "排名 #{n} / 共{total}",
  "cinema.pnlShare.staked": "投注{value}",
  "cinema.pnlShare.overlayAriaLabel": "分享你的战绩",
  "cinema.pnlShare.saved": "已保存。把它附到帖子里。",
  "cinema.pnlShare.triggerLabel": "分享盈亏",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  "cinema.recap.keepSell": "保留 / 出售",
  "cinema.recap.secondsShort": "{n}秒",
  "cinema.recap.dest.yourCall": "你来定",
  "cinema.recap.dest.deciding": "决定中",
  "cinema.recap.dest.you": "你",
  "cinema.recap.dest.topBacker": "最大押注者",
  "cinema.recap.dest.yourCard": "你的卡片",
  "cinema.recap.dest.wonBy": "赢家",
  "cinema.recap.dest.aBacker": "某位押注者",
  "cinema.recap.dest.yourChaseLoot": "你的追逐奖战利品",
  "cinema.recap.dest.chaseLoot": "追逐奖战利品",
  "cinema.recap.dest.releasedFromVault": "从金库释放",
  "cinema.recap.dest.sweptTo": "收进",
  "cinema.recap.dest.chaseVault": "追逐奖金库",
  "cinema.recap.dest.fundsJackpot": "充实累积奖金",
  "cinema.recap.dest.protocolFee": "协议费用",
  "cinema.recap.dest.tableRake": "牌桌抽成",
  "cinema.recap.dest.soldBack": "已回售",
  "cinema.recap.dest.intoTheSplit": "计入分配",
  "cinema.recap.dest.toThePool": "+{value}进奖池",
  "cinema.recap.sublineYours": "本回合全桌的卡片。属于你的已在下方标出。",
  "cinema.recap.sublineLost": "本回合全桌的卡片。没有一张是你的。",
  "cinema.recap.sublineNoStake": "本回合全桌的卡片。这一局你没下场。",
  "cinema.recap.sectionAriaLabel": "本回合每张卡片的去向",
  "cinema.recap.eyebrow": "回合结果",
  "cinema.recap.headline": "每张卡片落到了哪里",
  "cinema.recap.theatreHeader": "回合始末 · 每张卡片的归属",
  "cinema.recap.openCardTitle": "在新标签页打开卡片页面",
  "cinema.recap.fromPack": "来自{pack}",
  "cinema.recap.railAriaLabel": "本回合的全部卡牌，按价值从高到低",
  "cinema.recap.tierRule.one": "另外 1 张 · {value}",
  "cinema.recap.tierRule.other": "另外 {n} 张 · {value}",
  "cinema.recap.showMore": "再显示 {n} 张",
  "cinema.recap.showAll": "显示全部 {n} 张",
  "cinema.recap.showing": "已显示 {total} 张中的 {n} 张 · {totalValue} 中的 {value}",
  "cinema.recap.allShown": "全部 {n} 张 · 合计 {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "录制标签页" inside the two service sentences is this same panel's button
  // label (cinema.replay.recordTab): keep the two in step.
  "cinema.replay.finishingVideo": "视频收尾中…",
  "cinema.replay.recordingEmpty": "录制结果是空的，再试一次。",
  "cinema.replay.checkingService": "正在查找高清渲染服务…",
  "cinema.replay.serviceUnreachable":
    "连不上高清渲染服务，这次没法出高清。改用“录制标签页”直接抓取当前标签页（浏览器会弹提示）。",
  "cinema.replay.renderingHd": "正在渲染高清视频：{seconds}秒{pct}",
  "cinema.replay.hdRenderFailed": "高清渲染失败。再试一次，或者用“录制标签页”抓取当前标签页。",
  "cinema.replay.cannotRecord":
    "此浏览器无法在这里录像，改为保存回合文件。把它拖到回放页面就能重看。",
  "cinema.replay.pickThisTab": "选择“此标签页”来录制这个回合。",
  "cinema.replay.recorderFailed": "录制器没能启动。",
  "cinema.replay.watermarkAriaLabel": "回合{n}的回放",
  "cinema.replay.watermarkAriaLabelDated": "回合{n}的回放，录制于{date}",
  "cinema.replay.watermarkTag": "回放",
  "cinema.replay.watermarkRound": "回合 #{n}",
  "cinema.replay.headerSeed": "种子 {seed}",
  "cinema.replay.phaseBidding": "下注中",
  "cinema.replay.phaseReveal": "揭示",
  "cinema.replay.phaseDone": "结束",
  "cinema.replay.boardAriaLabel": "回放棋盘",
  "cinema.replay.controlsAriaLabel": "回合{n}的回放控制",
  "cinema.replay.pause": "暂停",
  "cinema.replay.play": "播放",
  "cinema.replay.pauseButton": "暂停",
  "cinema.replay.playButton": "播放",
  "cinema.replay.restart": "重播",
  "cinema.replay.scrubAriaLabel": "拖动浏览整个回合：从下注一直到揭示",
  "cinema.replay.lockMark": "锁定",
  "cinema.replay.seeking": "跳转中",
  "cinema.replay.speedAriaLabel": "播放速度",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "保存视频",
  "cinema.replay.saveVideoTitle":
    "把这个回合渲染成高清mp4（本地渲染服务，不会录你的屏幕）",
  "cinema.replay.recordTab": "录制标签页",
  "cinema.replay.recordTabTitle":
    "备选方案：用浏览器的屏幕录制提示抓取当前标签页（实时画质）",
  "cinema.replay.saveRound": "保存回合",
  "cinema.replay.saveRoundTitle":
    "把这个回合下载成一个小数据文件，谁把它拖到回放页面，都能重看这一模一样的回合",
  "cinema.replay.close": "关闭",
  "cinema.replay.backToGame": "返回游戏",
  "cinema.replay.shareOverlayAriaLabel": "分享这个回合",
  "cinema.replay.videoReady": "回合视频已就绪",
  "cinema.replay.formatWebm": "已存为.webm。X 只收mp4，先分享链接，或者把文件转一下。",
  "cinema.replay.formatMp4": "已存为.mp4，可以直接附到 X 上。",
  "cinema.replay.shareOnX": "分享到 X",
  "cinema.replay.saveAgain": "重新保存",
  "cinema.replay.shareHint": "X 不能从网页直接附视频。帖子会带着文案打开，你把保存好的文件附上去。",
  "cinema.replay.xOpened": "X 已带着你的文案打开。把保存好的文件（{filename}）附上去，网页编辑器不会替你加。",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE 回合回放",
  "cinema.replayRoute.noRecordingParam": "没有提供录像。请带上 ?rec=<encoded-json-or-url>。",
  "cinema.replayRoute.unreadable": "无法从 ?rec= 读取录像。",
  "cinema.replayRoute.loadFailed": "录像加载失败（{error}）。",
  "cinema.replayRoute.badge": "回合回放",
  "cinema.replayRoute.loading": "录像加载中",
  "cinema.replayRoute.noRecording": "没有可播放的录像。",
  "cinema.replayRoute.hint":
    "回放可以从棋盘的往期回合条打开（在已结算回合上点“回放”），也可以用别人分享的 ?rec= 链接打开。",
  "cinema.replayRoute.roundResults": "回合结果",
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
  "cinema.share.shareFile": "分享文件",
  "cinema.share.shareSheetOpened": "分享面板已打开。",
  "cinema.winShare.lossHeadline": "本轮失利",
  "cinema.winShare.lossResult": "本轮失利",
  "cinema.winShare.returned": "返还",
  "cinema.winShare.bestPull": "最佳抽取",
  "cinema.winShare.playedBy": "由 {name} 参与",
  "cinema.winShare.lossCaption": "第 {n} 轮：我下注了 {stake}。本轮没有带走收益。",
  "cinema.winShare.lossCardCaption": "牌桌上的最佳抽取，但不是我的。",
  "cinema.winShare.lossNoCardCaption": "如实记录本轮结果。",
  "cinema.winShare.roundResultTop": "回合",
  "cinema.winShare.roundResultMain": "失利",
  "cinema.winShare.shareRoundCard": "分享卡片",
  "cinema.replay.shareVideo": "分享视频",
  "cinema.replay.shareVideoTitle": "分享回合视频",
  "cinema.replay.shareVideoSheetOpened": "已打开带视频的分享面板。",
  "cinema.replay.shareVideoFailed": "无法分享视频，请重试。",
  "cinema.replay.shareSheetHint": "你的设备可以从分享面板将视频发送到 X。",
  "cinema.replay.shareRoundTitle": "attn royale · 第 {n} 轮",
  "cinema.replay.shareRoundTable": "牌桌上有 {amount}。",
  "cinema.replay.shareRoundWin": "我的格子赢下了 {pool} 的牌桌 · 带回 {amount}。",
  "cinema.replay.shareRoundCardsOnly": "格子 {tile} 赢下了 {pool} 的牌桌 · 我的格子输了，但带回 {amount}。",
  "cinema.replay.shareRoundWinner": "格子 {tile} 赢下了 {pool} 的牌桌。",
  "cinema.share.shareVideo": "分享视频",
  "cinema.share.preparingOutput": "正在准备分享…",
  "cinema.share.cancelled": "分享已取消。",
  "cinema.share.shareSheetHint": "你的设备可以从分享面板将视频发送到 X。",
  "cinema.personalReveal.sectionAria": "你开出的卡牌",
  "cinema.personalReveal.title": "你开出的卡牌",
  "cinema.personalReveal.progress.eyebrow": "同步揭晓",
  "cinema.personalReveal.progress.title": "正在开卡",
  "cinema.personalReveal.progress.body": "牌桌正在开卡。本阶段结束后将继续共同揭晓。",
  "cinema.personalReveal.normal.label": "普通揭晓",
  "cinema.personalReveal.normalHint": "首先显示卡牌背面。点击或轻触卡牌即可翻开；你翻开的卡牌归你。仍然背面朝上的卡牌会在5秒后自动翻开。",
  "cinema.personalReveal.hardcore.label": "极限揭晓",
  "cinema.personalReveal.hardcoreHint": "首先显示卡牌背面。点击或轻触卡牌即可翻开；归属将在抽签后结算。仍然背面朝上的卡牌会在5秒后自动翻开。",
  "cinema.personalReveal.yourCard": "你的卡牌",
  "cinema.personalReveal.youOpened": "由你开出",
  "cinema.personalReveal.otherCards": "其他卡牌",
  "cinema.personalReveal.allOpen": "所有卡牌均已揭晓",
  "cinema.personalReveal.autoOpenIn": "剩余卡牌将在{n}秒后自动揭晓",
  "cinema.personalReveal.revealCardAria": "翻开卡牌 {n}",
  "cinema.personalReveal.revealedCardAria": "卡牌 {n} 已揭晓：{name}，{value}",
  "cinema.personalReveal.sort.group": "卡牌排序",
  "cinema.personalReveal.sort.pack": "卡包",
  "cinema.personalReveal.sort.packAria": "按卡包价格排序，最便宜的优先",
  "cinema.personalReveal.sort.rarity": "稀有度",
  "cinema.personalReveal.sort.revealFirst": "所有卡牌揭晓后即可按稀有度排序",
  "cinema.personalReveal.sort.bestAria": "按稀有度排序，最高优先",
  "cinema.personalReveal.sort.worstAria": "按稀有度排序，最低优先",
  "cinema.personalReveal.sort.packStatus": "卡牌已按卡包价格排序，最便宜的优先",
  "cinema.personalReveal.sort.bestStatus": "卡牌已按稀有度排序，最高优先",
  "cinema.personalReveal.sort.worstStatus": "卡牌已按稀有度排序，最低优先",
  "cinema.personalReveal.rarity": "稀有度",
  "cinema.personalReveal.year": "年份",
  "cinema.personalReveal.yearUnknown": "年份未知",
  "cinema.personalReveal.grade": "评级",
  "cinema.personalReveal.ungraded": "未评级",
  "cinema.personalReveal.pageNavigation": "卡牌分页",
  "cinema.personalReveal.previousPage": "上一组卡牌",
  "cinema.personalReveal.nextPage": "下一组卡牌",
  "cinema.personalReveal.pageStatus": "第 {page} 页，共 {pages} 页",
  "cinema.personalReveal.live.revealed": "已揭晓 {name}",
  "cinema.personalReveal.live.all": "已揭晓全部 {n} 张卡牌",
} as Record<string, string>;
