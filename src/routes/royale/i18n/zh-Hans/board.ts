// Chinese (Simplified) (简体中文): "board" segment. Same key set as
// en/board.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: board - owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1 board),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx, RoyalePackCompositionChips.tsx.
//
// zh-Hans TERMINOLOGY (kept identical across this locale's board/misc/
// onboarding/docs/arena/chat files):
//   tile 格子 · pack 卡包 · back/stake 押注 · bet 下注 · bet size 投注额 ·
//   backer 押注者 · pool 奖池 · Chase 追逐奖 · jackpot 累积奖金 ·
//   draw ticket 抽奖票 · receipt 凭证 · buyback 回购价 · sell back 回售 ·
//   settle 结算 · collection 收藏 · loose money 零散资金 · odds 胜率.
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) are brand terms and
// stay in Latin script everywhere, including mid-sentence.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "玩家和现金盈亏",
  "board.playerScoreboard.title": "玩家",
  "board.playerScoreboard.open": "统计与静音",
  "board.playerScoreboard.pinnedHint": "已固定 · 按 Esc 关闭",
  "board.playerScoreboard.holdHint": "按住 Tab 可快速查看 · 点击固定",
  "board.playerScoreboard.close": "关闭玩家记分板",
  "board.playerScoreboard.windowAria": "盈亏窗口",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "全部",
  "board.playerScoreboard.partialHistory": "历史记录不完整。排名使用保留的已结算现金区间。",
  "board.playerScoreboard.statsUnavailable": "此处不提供盈亏历史记录。当前投注仍在进行中。",
  "board.playerScoreboard.playerColumn": "玩家",
  "board.playerScoreboard.pnlColumn": "现金盈亏",
  "board.playerScoreboard.voiceColumn": "聊天",
  "board.playerScoreboard.loading": "正在加载玩家…",
  "board.playerScoreboard.empty": "本轮还没有人投注任何格子。",
  "board.playerScoreboard.bot": "机器人",
  "board.playerScoreboard.tiles": "格子 {tiles}",
  "board.playerScoreboard.stake": "投注 {amount}",
  "board.playerScoreboard.notAvailable": "不可用",
  "board.playerScoreboard.rounds": "{n} 轮",
  "board.playerScoreboard.youBadge": "你",
  "board.playerScoreboard.mute": "静音",
  "board.playerScoreboard.unmute": "取消静音",
  "board.playerScoreboard.muteAria": "在聊天中将 {name} 静音",
  "board.playerScoreboard.unmuteAria": "在聊天中取消 {name} 的静音",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "你",
  "board.common.noWin": "未获胜",
  "board.common.roundSettled": "回合已结算",
  "board.common.youWon": "你赢得了{amount}",
  "board.common.pack": "卡包",
  "board.common.packs": "卡包",
  "board.common.secondsSuffix": "秒",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "已锁定",
  "board.tile.lockedStampSub": "停止下注",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}：{bet}的投注超出你{balance}的余额。请调低投注额或存款。",
  "board.tile.ariaBack": "用{amount}押注{label}",
  "board.tile.ariaBackShortcutSuffix": "，快捷键{shortcut}",
  "board.tile.ariaOddsChance": "胜率 {pct}",
  "board.tile.ariaBackers": "{count}位押注者",
  "board.tile.yourPortraitAlt": "你的头像",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · 尚未成包",
  "board.tile.noStake": "无投注",
  "board.tile.youOwn": "你持有{amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "卡包将在锁定时开启",
  "board.tile.resultOpened": "已开包 · {amount}卡片",
  "board.tile.resultWinner": "获胜 · {amount}卡片",
  "board.tile.resultLost": "未中奖 · {amount}卡片",
  "board.tile.resultOpenedWord": "已开包",
  "board.tile.resultWinnerWord": "获胜",
  "board.tile.resultLostWord": "未中奖",
  "board.tile.resultShortWon": "胜",
  "board.tile.resultShortLost": "负",
  "board.tile.overBalance": "超出余额",
  "board.tile.overBalanceTitle": "需要{needed} · 你有{have}。请调低投注额或存款。",
  "board.tile.overCap": "超出你的{amount}上限（设置）",
  "board.tile.needHave": "需要{needed} · 你有{have}",
  "board.tile.clueExactCardOdds": "这张卡 · {pct}拆出率",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "投注额",
  "board.stakeControl.packMatchTitle": "每次点击格子投入一整个{packName}卡包。",
  "board.stakeControl.packMatchTag": "每次点击下注1个{packName}卡包",
  "board.stakeControl.packMatchTitleOne": "每次点击格子投入{n}个完整的{packName}卡包。",
  "board.stakeControl.packMatchTitleOther": "每次点击格子投入{n}个完整的{packName}卡包。",
  "board.stakeControl.packMatchTagOne": "每次点击下注{n}个{packName}卡包",
  "board.stakeControl.packMatchTagOther": "每次点击下注{n}个{packName}卡包",
  "board.stakeControl.packAmountSentence": "每次点击 {n} x {packAmount} {packName} 卡包",
  "board.stakeControl.bidPackGroupAria": "在格子上下注一整个卡包",
  "board.stakeControl.bidPackTag": "下注一个卡包",
  "board.stakeControl.bidPackInfoTitle":
    "点一次就把一整个未拆封的卡包放上格子。这个卡包保持原样，不会合并成更大的卡包。",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "选择卡包和数量。一次点击把整叠押到一个格子上，更大的卡包开出更大的卡。数字键1到8选择格子。",
  "board.stakeControl.bidPackInfoAria": "什么是下注一个卡包？",
  "board.stakeControl.packSelectedTitle": "已选中。再点一次可回到{amount}的投注额。",
  "board.stakeControl.packChipTitle": "每次点击格子下注1个{packName}卡包（{amount}）。",
  "board.stakeControl.packSelectedCountOne": "已选中。每次点击格子下注{n}个{packName}卡包（{amount}）。",
  "board.stakeControl.packSelectedCountOther": "已选中。每次点击格子下注{n}个{packName}卡包（{amount}）。",
  "board.stakeControl.packChipTitleCountOne": "每次点击格子下注{n}个{packName}卡包（{amount}）。",
  "board.stakeControl.packChipTitleCountOther": "每次点击格子下注{n}个{packName}卡包（{amount}）。",
  "board.stakeControl.overBalanceHeading": "超出余额",
  "board.stakeControl.overBalanceBody": "超过你{amount}的余额。",
  "board.stakeControl.bidAmountTag": "下注指定金额",
  "board.stakeControl.bidAmountInfoTitle":
    "往格子上加任意金额。零散资金每跨过一档卡包价位，就会长成更大的卡包。",
  "board.stakeControl.bidAmountInfoAria": "什么是下注指定金额？",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "为格子的投注额加码",
  "board.stakeControl.bidAmountGroupAria": "在格子上下注指定金额",
  "board.stakeControl.packCountGroupAria": "每次点击下注的卡包数量",
  "board.stakeControl.packCountDecAria": "减少每次点击下注的卡包数量",
  "board.stakeControl.packCountIncAria": "增加每次点击下注的卡包数量",
  "board.stakeControl.packCountValueTitleOne": "每次点击下注{n}个当前档位的卡包",
  "board.stakeControl.packCountValueTitleOther": "每次点击下注{n}个当前档位的卡包",
  "board.stakeControl.incrementTitle": "把所选投注额提高到{amount}",
  "board.stakeControl.customAriaLabel": "自定义投注金额（USDC），按Enter或点击别处生效",
  "board.stakeControl.customOverBalanceTitle": "超出你{amount}的余额。请存款或调低投注额。",
  "board.stakeControl.customTitle": "输入任意金额，按Enter或点击别处即可设定",
  "board.stakeControl.resetTitle": "把所选投注额重置为{amount}",
  "board.stakeControl.reset": "重置",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "自动投注策略，回合结束时触发",
  "board.betRail.strategyArmedTip": "已预备，{seconds}秒后触发",
  "board.betRail.strategyAriaArmed": "{name}，已预备，{seconds}秒后触发",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}，已预备，{seconds}秒后触发。点击可取消预备。",
  "board.betRail.strategyAriaClickArm": "{name}。点击可预备。",
  "board.betRail.moreStrategiesAria": "更多自动投注策略",
  "board.betRail.moreStrategiesTitle": "更多策略",
  "board.betRail.cancelArmedAria": "取消已预备的自动投注",
  "board.betRail.autoBetCancelled": "自动投注已取消。",
  "board.betRail.roundLockedSkip": "自动投注还没触发，回合就锁定了。",
  "board.betRail.notEnoughBalanceSkip": "余额不足，自动投注没有触发。",
  "board.betRail.firedAtClose": "{name}已在回合结束时触发。",
  "board.betRail.firedAtClosePartial": "{name}已在回合结束时触发：{total}个格子中的{covered}个。",
  "board.betRail.strategyGuideAria": "自动投注策略指南",
  "board.betRail.strategyGuideTitle": "策略指南",
  "board.betRail.autoBetEyebrow": "自动投注",
  "board.betRail.firesInSeconds": "{seconds}秒后触发",
  "board.betRail.strategiesDialogAria": "自动投注策略",
  "board.betRail.closeStrategiesAria": "关闭自动投注策略",
  "board.betRail.strategiesHeading": "自动投注策略",
  "board.betRail.strategiesIntro":
    "点一下即可用你当前的投注额（{amount}）预备该策略。它会在回合锁定前一刻触发，按那一刻各格子上的资金量，也就是大众风向，来排序挑选。",
  "board.betRail.contrarianHeading": "逆势选择",
  "board.betRail.contrarianIntro":
    "人人都去抢资金最少的格子时，那里反而会挤，次少的格子往往赔得更好。这些策略不放进主栏，界面更清爽。",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "你的账户与投注额",
  "board.betRail.balance": "余额",
  "board.betRail.activeStakes": "当前投注",
  "board.betRail.collection": "收藏",
  "board.betRail.cardCountViewAllSingular": "{count}张卡 · 查看全部",
  "board.betRail.cardCountViewAllPlural": "{count}张卡 · 查看全部",
  "board.betRail.moreCount": "+{count}张",
  "board.betRail.noCardsYet": "收藏里还没有卡片，赢下一个格子并保留它的卡片。",
  "board.betRail.lastResult": "上轮结果",
  "board.betRail.eachClickAdds": "每次点击增加{amount}",
  "board.betRail.depositToPlay": "存款后开玩",
  "board.betRail.affordShortfall": "需要{unit}，你只有{balance}",
  "board.betRail.allTilesPartialCover": "{name}，按{unit}可覆盖8个格子中的{covered}个",
  "board.betRail.dockBalance": "余额",
  "board.betRail.dockStakes": "投注",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "{seconds}秒后开始下一回合",
  "board.core.nextRoundLine": "{secs}后开始下一回合",
  "board.core.playersDecidingAria": "其他{total}位玩家中已有{decided}位做出决定",
  "board.core.playersDecidingLine": "玩家决定中 {ratio}",
  "board.core.pastRoundResultsAria": "往期回合结果",
  "board.core.pastRounds": "往期回合",
  "board.core.winsAmount": "{label}赢得{amount}",
  "board.core.youLost": "你输了！",
  "board.core.didNotStake": "你本回合未参与投注",
  "board.core.keepCard": "保留卡片（{amount}）",
  "board.core.sellAmount": "出售{amount}",
  "board.core.decideHint": "现在决定，或留到下一回合再定",
  "board.core.roundResultLink": "回合 #{roundId} 结果",
  "board.core.fullReceiptHint": "完整凭证 → 回合结果",
  "board.core.splitReceiptHint": "分配 · 凭证 → 回合结果",
  "board.core.eyebrowDrawing": "正在抽取获胜者",
  "board.core.eyebrowPullsIn": "拆包结果已出",
  "board.core.eyebrowLocked": "已锁定",
  "board.core.headlineDrawing": "一张抽奖票定胜负",
  "board.core.headlinePullsIn": "所有卡包都已开完",
  "board.core.headlineRoundLocked": "回合已锁定",
  "board.core.headlinePacksOpening": "卡包开启中…",
  "board.core.subDrawing": "可验证的加权抽取",
  "board.core.subPullsIn": "接下来抽取获胜者",
  "board.core.subIntro": "{count} {noun}正在角逐",
  "board.core.subOpening": "棋盘上{count} {noun}正在开包",
  "board.core.pool": "奖池",
  "board.core.totalPool": "奖池总额",
  "board.core.clockRoundOpen": "回合进行中",
  "board.core.clockLockedRevealing": "已锁定 · 揭晓中",
  "board.core.clockSettled": "已结算",
  "board.core.clockAriaLabel": "{label}，{seconds}秒",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "普通评级卡：最大押注者可保留，或回售后按比例分配。",
  "board.settlement.dispositionSellBackSplit": "Grail 规则：默认回售，USDC按格子内比例分配。",
  "board.settlement.dispositionTopBackerKeeps": "Grail 规则：最大押注者保留卡片，并按份额付钱给其他押注者。",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}秒决定",
  "board.settlement.panelAria": "格子详情与结算",
  "board.settlement.collapsePanelAria": "收起面板",
  "board.settlement.expandPanelAria": "展开面板",
  "board.settlement.roundResultsLink": "回合结果",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "回合面板",
  "board.settlement.clickTileToBack": "结果会显示在这里。点任意格子，用{amount}押注。",
  "board.settlement.lastResultLine": "上轮结果 · 回合 #{roundId}，{outcome}",
  "board.settlement.youWonOutcome": "你赢得了{amount}",
  "board.settlement.view": "查看",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "落选格子 · 落选原因",
  "board.settlement.losingTileTitle": "{label} · 格子上有{amount}",
  "board.settlement.loserWhy":
    "开出{cardName}（{amount}），但抽奖落在了{winnerLabel}。{pct}的抽奖票一无所获{suffix}",
  "board.settlement.loserWhySuffixWithStake": "，其中包括你的{amount}。",
  "board.settlement.loserWhySuffixNone": "。",
  "board.settlement.emptyTileNote": "这个格子是空的：没有投注，也没有抽奖票。",
  "board.settlement.backToSettlement": "返回结算 · {winnerLabel}获胜",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · 第{index}/{total}张卡 · 格子上有{amount}",
  "board.settlement.pullCaptionSingle": "{label} · 格子上有{amount}",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "卡包开启中",
  "board.settlement.revealOpenedTitle": "{label}开出了{cardName}",
  "board.settlement.revealOddsLine": "{amount} · 有{pct}的概率拿下{poolAmount}奖池。正在抽取获胜者。",
  "board.settlement.revealEmpty": "棋盘上的卡包正在一个个拆开，抽取马上出结果。",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "上轮结果 · 回合 #{roundId}",
  "board.settlement.tileTakesTable": "{label}以{amount}赢下全场",
  "board.settlement.whyWon": "由可验证的加权抽奖票抽出，{label}在锁定时占奖池的{pct}%。",
  "board.settlement.lostNoStakeIn": "你输了，你没有押{label}",
  "board.settlement.theWinnerFallback": "获胜者",
  "board.settlement.wonNoStake": "{label}获胜 · 你未参与投注",
  "board.settlement.aTileFallback": "某个格子",
  "board.settlement.lossNoteWithStake": "你的{amount}押在了别的格子上，悬停任一格子可看详情。",
  "board.settlement.lossNoteNone": "你本回合没有押注任何格子。",
  "board.settlement.topCardOfRound": "本回合最佳卡片 · {label}",
  "board.settlement.keepCardTo": "保留卡片（{amount}）→ 收藏",
  "board.settlement.sellBackFor": "以{amount}回售",
  "board.settlement.continueNextRound": "继续下一回合",
  "board.settlement.continue": "继续",
  "board.settlement.keepSellHint":
    "保留 = 卡片进收藏 · 出售 = 立刻拿到{amount}（卡片价值的{pct}%，即该卡包的CC回购价）· {noAction}",
  "board.settlement.noActionKept": "不操作 = 卡片自动为你保留。",
  "board.settlement.noActionAutoSell": "不操作 = 下一回合结束时自动出售。",
  "board.settlement.revealOnlyNote":
    "本次灰度测试中，落选格子只做展示，拆出的卡片会退回金库。只有获胜格子的卡片才会派发。",
  "board.settlement.payoutSplit": "派奖分配",
  "board.settlement.poolChaseFeedLine": "奖池{pool} · 追逐奖注入{feed}",
  "board.settlement.chaseAddSuffix": " · 追逐奖 +{amount}",
  "board.settlement.physicalCardArrow": "实体卡片 →",
  "board.settlement.grailSecuredSuffix": "（Grail 已锁定归属）",
  "board.settlement.grailSoldBack": "Grail 已回售（{amount}）→ USDC分配见上方。",
  "board.settlement.cardAssignmentHead": "卡片分配",
  "board.settlement.cardLabel": "{amount}卡片",
  "board.settlement.soldToVault": "已售予金库 · 所得计入分配",
  "board.settlement.decisionTopBackerSuffix": "（最大押注者 · 可保留或出售）",
  "board.settlement.offTheirUsdcSuffix": " · 从其USDC中扣除{amount}",
  "board.settlement.cardsSpreadNote":
    "卡片尽量分给更多押注者：领到卡的人要从自己的USDC里扣掉该卡的CC回购价（按卡包为85-93%），拿到的现金和出售一样多，但保住了升值空间。只有没人领的卡片才卖给金库。",
  "board.settlement.chaseHitLabel": "追逐奖触发！",
  "board.settlement.chasePaidLine": "{amount}已计入本次分配。",
  "board.settlement.chaseMissLabel": "本轮追逐奖未触发。",
  "board.settlement.chaseNowLine": "追逐奖现为{amount}。",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "验证抽取",
  "board.settlement.verifyDrawSub": "抽取可验证 · 查看抽取凭证",
  "board.settlement.roundIdLabel": "回合ID",
  "board.settlement.winningDrawLabel": "获胜抽取",
  "board.settlement.drawSeedLabel": "抽取种子",
  "board.settlement.proofIdLabel": "证明ID",
  "board.settlement.ticketOfCount": "第{index}/{count}",
  "board.settlement.verifying": "验证中…",
  "board.settlement.recheckDraw": "重新核验抽取",
  "board.settlement.verifierLink": "验证工具 ↗",
  "board.settlement.verifiedOk": "✓ 抽取已验证：该结果与公布的抽取种子核对一致。",
  "board.settlement.verifiedBad": "✗ 该结果未通过种子核对，请勿采信。",
  "board.settlement.everyRoundNote": "每回合都用一个公开可核验的种子抽出一名获胜者。",
  "board.settlement.noPacksNote": "本回合没有卡包押注，无需抽取。",
  "board.settlement.settledHoverHint": "已结算，悬停格子可查看详情。",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "投注额超出你的余额",
  "board.betTooBig.dismissAria": "关闭",
  "board.betTooBig.gotIt": "知道了",
  "board.betTooBig.body": "押注{slotLabel}需要{needed}，你持有{held}，还差{shortfall}。",
  "board.betTooBig.deposit": "存款 {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "按总投注额排列的玩家",
  "board.wagerLadder.title": "玩家",
  "board.wagerLadder.countZero": "暂无投注",
  "board.wagerLadder.countOther": "本回合{n}人 · 按总投注额排序",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "收起玩家面板",
  "board.wagerLadder.lastRoundAria": "查看上一回合结果，回合 #{n}",
  "board.wagerLadder.lastRoundLabel": "查看上一回合结果",
  "board.wagerLadder.empty": "本回合还没有人押注格子。",
  "board.wagerLadder.leaderAria": "领先者",
  "board.wagerLadder.openProfileTitle": "在新标签页打开{name}的资料",
  "board.wagerLadder.miniGridTotal": "合计{amount}",
  "board.wagerLadder.miniGridTilesAria": "{name}押注的格子",
  "board.wagerLadder.miniGridTilesAriaYou": "你押注的格子",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "出售库存卡片来支付这次下注",
  "board.bidFund.eyebrow": "USDC不足",
  "board.bidFund.titleOne": "出售这张卡来补足这次下注？",
  "board.bidFund.titleMany": "出售这些卡来补足这次下注？",
  "board.bidFund.body": "出售{cards}可得{buyback}，足够在{tile}上押注{amount}。",
  "board.bidFund.bodyCardsMany": "这些卡",
  "board.bidFund.note":
    "你还差{amount}。卡片按所属卡包的CC回购价（85 to 93%）出售，操作无法撤销。",
  "board.bidFund.keepCards": "保留卡片",
  "board.bidFund.sellAndBid": "出售并下注{amount}",
  "board.bidFund.autoSellSwitch": "自动把赢来的卡片换成USDC",
  "board.bidFund.autoSellNoteOn":
    "每张赢来的卡片一到手就按回购价兑现，不再问你保留还是出售。Grail 绝不会被自动出售。可随时在设置中更改。",
  "board.bidFund.autoSellNoteOff":
    "开启后，每张赢来的卡片都按回购价直接兑成USDC，不再询问。Grail 绝不会被自动出售。可随时在设置中更改。",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "用数字键下注？",
  "board.hotkeys.optInBody":
    "按下按键会立刻用当前投注额押注对应格子。刚才那一下没有下注。",
  "board.hotkeys.notNow": "暂不",
  "board.hotkeys.enableKeys": "启用按键",
  "board.hotkeys.turnOff": "关闭",
  "board.hotkeys.turnOffTitle": "按键会保持关闭，直到你在设置中重新启用。",
  "board.hotkeys.changeKeys": "更改按键",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "空格子",
  "board.boardV1.onTile": "在格子上",
  "board.boardV1.changeAmount": "零散{amount}",
  "board.boardV1.oddsSuffix": "胜率{pct}",
  "board.boardV1.openedOdds": "已开包 · 胜率{pct}",
  "board.boardV1.emptyNeverInDraw": "空格子 · 不参与抽取",
  "board.boardV1.winnerYourShare": "获胜 · 你的份额已派奖",
  "board.boardV1.winnerNoStake": "获胜 · 你未押注",
  "board.boardV1.lostOdds": "未中奖 · 胜率{pct}",
  "board.boardV1.tileClickTitle": "点击任意位置，用{amount}押注{label}",
  "board.boardV1.youAmount": "你 {amount}",
  "board.boardV1.youNone": "你 -",
  "board.boardV1.pctOfTile": "占该格子{pct}",
  "board.boardV1.noStakeYet": "尚无投注",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "最高 · ",
  "board.boardV1.backerPopStake": "押注{amount} · 占该格子{pct}",
  "board.boardV1.statusWaitingDraw": "等待抽取…",
  "board.boardV1.statusWonSplit": "从分配中赢得{amount}",
  "board.boardV1.statusOnWinningTile": "押中了获胜格子",
  "board.boardV1.statusNoPayout": "本回合无派奖",
  "board.boardV1.statusYourStake": "你的进行中投注",
  "board.boardV1.statusBacking": "正在押注该格子",
  "board.boardV1.backerCount.one": "{n}位押注者",
  "board.boardV1.backerCount.other": "{n}位押注者",
  "board.boardV1.noBackersYet": "还没有押注者",
  "board.boardV1.backAmount": "押注{amount}",
  "board.boardV1.backBtnTitle": "用{amount} USDC押注{label}",
  "board.boardV1.evolveTitle": "再向{label}追加{amount}",
  "board.boardV1.hoverTitle": "{label} · 格子上有{amount}",
  "board.boardV1.opensAs": "将开出 · {summary}",
  "board.boardV1.noPacksYet": "还没有卡包，押注它来凑出第一个卡包",
  "board.boardV1.whyOpenedDrawing":
    "以{pct}的胜率开出{cardName}（{amount}），正在抽取获胜者。",
  "board.boardV1.whyWon":
    "以{pct}的胜率赢下加权抽取。开出{cardName}（{amount}），奖池按比例分给它的押注者。",
  "board.boardV1.whyLost":
    "加权抽取未中，胜率{pct}（{poolAmount}奖池中的{amount}）。它同样开出了{cardName}（{cardAmount}），但只有获胜格子才派奖。",
  "board.boardV1.whyEmpty": "空格子：没有投注，也没有抽奖票。",
  "board.boardV1.whyYourStakeSuffix": " 你在这里押了{amount}。",
  "board.boardV1.whyNoStakeSuffix": " 你没有押注这里。",
  "board.boardV1.ifWins": "若该格子获胜：你可从{poolAmount}奖池中拿到约{amount}。",
  "board.boardV1.clickToBack": "点击即可按所选投注额押注，锁定时开出它的第一个卡包。",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "第{rank}名，{name}，投注{wagered}，净盈亏{net}，胜率{pct}%",
  "board.leaderboard.youTag": "你",
  "board.leaderboard.youRankTag": "你 · 第{n}名",
  "board.leaderboard.statWagered": "总投注",
  "board.leaderboard.statNetPl": "净盈亏",
  "board.leaderboard.statWinRate": "胜率",
  "board.leaderboard.statRounds": "回合数",
  "board.leaderboard.statPoolShare": "奖池占比",
  "board.leaderboard.statFirstSeen": "首次出现",
  "board.leaderboard.statBiggestPull": "最佳拆出",
  "board.leaderboard.shareOfToday": "占今日总投注",
  "board.leaderboard.shareOfAllTime": "占历史总投注",
  "board.leaderboard.noneYet": "暂无",
  "board.leaderboard.viewFullProfile": "查看完整资料",
  "board.leaderboard.live": "实时",
  "board.leaderboard.fullRankings": "完整排行",
  "board.leaderboard.playerCount.one": "{n}位玩家",
  "board.leaderboard.playerCount.other": "{n}位玩家",
  "board.leaderboard.roundCount.one": "{n}个回合",
  "board.leaderboard.roundCount.other": "{n}个回合",
  "board.leaderboard.colPlayer": "玩家",
  "board.leaderboard.colWagered": "总投注",
  "board.leaderboard.colNet": "净盈亏",
  "board.leaderboard.colWin": "胜率",
  "board.leaderboard.colBiggestPull": "最佳拆出",
  "board.leaderboard.sortGroupAria": "排序排行榜",
  "board.leaderboard.sortBy": "按{col}排序",
  "board.leaderboard.podiumNet": "净 {amount}",
  "board.leaderboard.podiumTopPull": "最佳拆出",
  "board.leaderboard.fullStandings": "完整榜单 · {n}位玩家",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  "board.betRail.stakeUnitPackOne": "{n}个{packName}卡包（{amount}）",
  "board.betRail.stakeUnitPackOther": "{n}个{packName}卡包（{amount}）",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "{handle}的X头像",
  "board.connectX.connectedTitle": "已通过X关联 · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "{packName}档位（此格子没有）",
  "board.packChips.fixedChipTitle": "{n}个{packName}，每个{amount}",
  "board.packChips.fixedChipTitleTotalSuffix": "，合计{amount}",
  "board.packChips.usdcChange": "USDC {amount}",
  "board.packChips.pooledAll": "由格子累积的资金生成，没有人直接下注这个卡包",
  "board.packChips.pooledSome": "{total}个中有{n}个由格子累积的资金生成",
  "board.packChips.bidWhole": "以整包形式下注",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "{packName} x{n} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "该格子还有：{list}",
  "board.packChips.morePacks.one": "还有{n}个卡包",
  "board.packChips.morePacks.other": "还有{n}个卡包",
  "board.packChips.morePacksWithList.one": "还有{n}个卡包：{list}",
  "board.packChips.morePacksWithList.other": "还有{n}个卡包：{list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "下注 {bids} · 累积 {pool}",
  "board.tile.splitAllBids": "{bids}全部是以整包形式下注的",
  "board.tile.splitAllPool": "{pool}全部是格子上累积的零散资金",
  "board.tile.splitPoolNote": "虚线卡包由累积的零散资金生成，没有人直接下注。",
  "board.tile.evolveLooseTitle": "格子上的{loose}零散资金将在{target}升级为{tier}卡包",
  "board.tile.evolveNoLooseTitle": "该格子暂无零散资金。零散资金将在{target}升级为{tier}卡包",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  "board.betRail.allTilesPartialCoverOf": "{name}，按{unit}可覆盖{total}个格子中的{covered}个",
  "board.betRail.allTilesPlanFull": "回合结束时按{unit}押注全部{total}个格子，合计{spend}。",
  "board.betRail.allTilesPlanShort.one": "回合结束时按{unit}押注{total}个格子中的{covered}个。你的{balance}余额够付{spend}。",
  "board.betRail.allTilesPlanShort.other": "回合结束时按{unit}押注{total}个格子中的{covered}个。你的{balance}余额够付{spend}。",
  "board.betRail.allTilesPlanNone": "你的{balance}余额连一次{unit}都不够，不会押注任何格子。",
  "board.betRail.allTilesShortHistory.one":
    "全格子自动投注需要{needed}（{tiles}个格子，每个{unit}）。你只有{balance}，因此押了{covered}个格子。",
  "board.betRail.allTilesShortHistory.other":
    "全格子自动投注需要{needed}（{tiles}个格子，每个{unit}）。你只有{balance}，因此押了{covered}个格子。",
  "board.betRail.allTilesNoneHistory": "全格子自动投注需要{needed}（{tiles}个格子，每个{unit}）。你只有{balance}，因此没有押注任何格子。",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "回合结束时",
  "board.betRail.planTotal": "合计",
  "board.betRail.planMathFull": "{total} 个格子 × {amount}",
  "board.betRail.planMathShort": "{total} 个中的 {covered} 个 × {amount}",
  "board.betRail.planPerTile": "每格 {unit}",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (two glyphs
  // wide, matching the English chip width), `.name` is also substituted into the
  // {name} token of board.betRail.strategyAria* / firedAtClose, `.closeLine`
  // renders right after `.rowTitle` as "rowTitle, closeLine". Standard gaming
  // register, established vocabulary: 格子, 投注/押注, 回合, 回合结束时,
  // 领先格子, 预备.
  "board.strategy.highest.label": "最多",
  "board.strategy.highest.name": "预备：回合结束时押注资金最多的格子",
  "board.strategy.highest.detail": "把你的投注预备在资金最多的格子上，在回合锁定前一刻确定。",
  "board.strategy.highest.rowTitle": "资金最多的格子",
  "board.strategy.highest.closeLine": "回合结束时押注最大的格子",
  "board.strategy.highest.gridLine": "结束时资金最多",

  "board.strategy.lowest.label": "最少",
  "board.strategy.lowest.name": "预备：回合结束时押注资金最少的格子",
  "board.strategy.lowest.detail":
    "把你的投注预备在最不拥挤的格子上，在回合锁定前一刻确定。如果人人都涌向最少的格子，到那时它就不再是最少的了。",
  "board.strategy.lowest.rowTitle": "资金最少的格子",
  "board.strategy.lowest.closeLine": "回合结束时押注最小的格子",
  "board.strategy.lowest.gridLine": "结束时资金最少",

  "board.strategy.secondHighest.label": "次多",
  "board.strategy.secondHighest.name": "预备：回合结束时押注资金第二多的格子",
  "board.strategy.secondHighest.detail": "把你的投注预备在领先格子的下一档，在回合锁定前一刻确定。",
  "board.strategy.secondHighest.rowTitle": "资金第二多的格子",
  "board.strategy.secondHighest.closeLine": "回合结束时押注领先格子下面那个",
  "board.strategy.secondHighest.gridLine": "领先格子下一档",

  "board.strategy.secondLowest.label": "次少",
  "board.strategy.secondLowest.name": "预备：回合结束时押注资金第二少的格子",
  "board.strategy.secondLowest.detail":
    "逆势选择：人人都去抢资金最少的格子时，那里反而会挤，次少的格子往往赔得更好。现在预备，在回合锁定前一刻确定。",
  "board.strategy.secondLowest.rowTitle": "资金第二少的格子",
  "board.strategy.secondLowest.closeLine": "回合结束时押注拥挤的最少格子上面那个",
  "board.strategy.secondLowest.gridLine": "最少格子上一档",

  "board.strategy.allTiles.label": "全部",
  "board.strategy.allTiles.name": "预备：回合结束时押注每个格子",
  "board.strategy.allTiles.detail":
    "把你的投注预备在每个符合条件的格子上，在回合锁定前一刻确定。总支出 = 你的投注额 x 当时的格子数量。",
  "board.strategy.allTiles.rowTitle": "全部格子",
  "board.strategy.allTiles.closeLine": "回合结束时分散你的投注",
  "board.strategy.allTiles.gridLine": "每个格子都投注",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "再点一次：{unit}",
  "board.tile.confirmClickAgain": "再点击一次：{unit}",
  "board.tile.betOffNotice": "设置里已关闭下注",
  "board.stakeControl.pickPackHint": "选一个卡包来下注",
  "board.stakeControl.emptyStakeLead": "选一个卡包",
  "board.stakeControl.emptyStakeHint": "它就是你的下注",
  "gear.betInput.label": "下注方式",
  "gear.betInput.hint":
    "点格子（以及数字键）如何下注。双击会先要求一次确认点击 - 触屏默认。关闭为观战模式：无法下注。",
  "gear.betInput.optionSingle": "单击",
  "gear.betInput.optionDouble": "双击",
  "gear.betInput.optionOff": "关闭",
  "gear.cardOpen.label": "打开卡牌",
  "gear.cardOpen.hint":
    "双击会在卡牌打开页面前先要求一次确认点击 - 触屏默认。",
} as Record<string, string>;
