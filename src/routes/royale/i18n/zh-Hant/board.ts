// Chinese, Traditional (繁體中文): "board" segment. Same key set as
// zh-Hant BASE: converted from this repo's zh-Hans segment with OpenCC
// (cn->twp: Taiwan phrase conventions, 軟體/資訊/網路/預設/影片/伺服器...)
// plus a manual Taiwan-usage pass (帳 not 賬, 台 not 臺, 綁定, 分頁, 倒數,
// 空白鍵, 亂數, 提領, 自訂, 底線, 「」quotes, ...). MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (same convention as the other non-EN
// locales). House terms are identical to zh-Hans (格子/卡包/押注/獎池/...).
// en/board.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: board - owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1 board),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx, RoyalePackCompositionChips.tsx.
//
// zh-Hant TERMINOLOGY (kept identical across this locale's board/misc/
// onboarding/docs/arena/chat files):
//   tile 格子 · pack 卡包 · back/stake 押注 · bet 下注 · bet size 投注額 ·
//   backer 押注者 · pool 獎池 · Chase 追逐獎 · jackpot 累積獎金 ·
//   draw ticket 抽獎票 · receipt 憑證 · buyback 回購價 · sell back 回售 ·
//   settle 結算 · collection 收藏 · loose money 零散資金 · odds 勝率.
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) are brand terms and
// stay in Latin script everywhere, including mid-sentence.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "玩家和現金損益",
  "board.playerScoreboard.title": "玩家",
  "board.playerScoreboard.open": "統計與靜音",
  "board.playerScoreboard.pinnedHint": "已固定 · 按 Esc 關閉",
  "board.playerScoreboard.holdHint": "按住 Tab 可快速查看 · 按一下以固定",
  "board.playerScoreboard.close": "關閉玩家計分板",
  "board.playerScoreboard.windowAria": "損益視窗",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "全部",
  "board.playerScoreboard.partialHistory": "歷史記錄不完整。排名使用保留的已結算現金區間。",
  "board.playerScoreboard.statsUnavailable": "此處不提供損益歷史記錄。目前的投注仍在進行中。",
  "board.playerScoreboard.playerColumn": "玩家",
  "board.playerScoreboard.pnlColumn": "現金損益",
  "board.playerScoreboard.voiceColumn": "聊天",
  "board.playerScoreboard.loading": "正在載入玩家…",
  "board.playerScoreboard.empty": "本回合還沒有人投注任何格子。",
  "board.playerScoreboard.bot": "機器人",
  "board.playerScoreboard.tiles": "格子 {tiles}",
  "board.playerScoreboard.stake": "投注 {amount}",
  "board.playerScoreboard.notAvailable": "無法使用",
  "board.playerScoreboard.rounds": "{n} 回合",
  "board.playerScoreboard.youBadge": "你",
  "board.playerScoreboard.mute": "靜音",
  "board.playerScoreboard.unmute": "取消靜音",
  "board.playerScoreboard.muteAria": "在聊天中將 {name} 靜音",
  "board.playerScoreboard.unmuteAria": "在聊天中取消 {name} 的靜音",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "你",
  "board.common.noWin": "未獲勝",
  "board.common.roundSettled": "回合已結算",
  "board.common.youWon": "你贏得了{amount}",
  "board.common.pack": "卡包",
  "board.common.packs": "卡包",
  "board.common.secondsSuffix": "秒",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "已鎖定",
  "board.tile.lockedStampSub": "停止下注",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}：{bet}的投注超出你{balance}的餘額。請調低投注額或存款。",
  "board.tile.ariaBack": "用{amount}押注{label}",
  "board.tile.ariaBackShortcutSuffix": "，快捷鍵{shortcut}",
  "board.tile.ariaOddsChance": "勝率 {pct}",
  "board.tile.ariaBackers": "{count}位押注者",
  "board.tile.yourPortraitAlt": "你的頭像",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · 尚未成包",
  "board.tile.noStake": "無投注",
  "board.tile.youOwn": "你持有{amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "卡包將在鎖定時開啟",
  "board.tile.resultOpened": "已開包 · {amount}卡片",
  "board.tile.resultWinner": "獲勝 · {amount}卡片",
  "board.tile.resultLost": "未中獎 · {amount}卡片",
  "board.tile.resultOpenedWord": "已開包",
  "board.tile.resultWinnerWord": "獲勝",
  "board.tile.resultLostWord": "未中獎",
  "board.tile.resultShortWon": "勝",
  "board.tile.resultShortLost": "負",
  "board.tile.overBalance": "超出餘額",
  "board.tile.overBalanceTitle": "需要{needed} · 你有{have}。請調低投注額或存款。",
  "board.tile.overCap": "超出你的{amount}上限（設定）",
  "board.tile.needHave": "需要{needed} · 你有{have}",
  "board.tile.clueExactCardOdds": "這張卡 · {pct}拆出率",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "投注額",
  "board.stakeControl.packMatchTitle": "每次點選格子投入一整個{packName}卡包。",
  "board.stakeControl.packMatchTag": "每次點選下注1個{packName}卡包",
  "board.stakeControl.packMatchTitleOne": "每次點選格子投入{n}個完整的{packName}卡包。",
  "board.stakeControl.packMatchTitleOther": "每次點選格子投入{n}個完整的{packName}卡包。",
  "board.stakeControl.packMatchTagOne": "每次點選下注{n}個{packName}卡包",
  "board.stakeControl.packMatchTagOther": "每次點選下注{n}個{packName}卡包",
  "board.stakeControl.packAmountSentence": "每次點選 {n} x {packAmount} {packName} 卡包",
  "board.stakeControl.bidPackGroupAria": "在格子上下注一整個卡包",
  "board.stakeControl.bidPackTag": "下注一個卡包",
  "board.stakeControl.bidPackInfoTitle":
    "點一次就把一整個未拆封的卡包放上格子。這個卡包保持原樣，不會合併成更大的卡包。",
  "board.stakeControl.bidPackInfoTitleDetailed":
    "選擇卡包和數量。一次點選把整疊押到一個格子上，更大的卡包開出更大的卡。數字鍵1到8選擇格子。",
  "board.stakeControl.bidPackInfoAria": "什麼是下注一個卡包？",
  "board.stakeControl.packSelectedTitle": "已選中。再點一次可回到{amount}的投注額。",
  "board.stakeControl.packChipTitle": "每次點選格子下注1個{packName}卡包（{amount}）。",
  "board.stakeControl.packSelectedCountOne": "已選中。每次點選格子下注{n}個{packName}卡包（{amount}）。",
  "board.stakeControl.packSelectedCountOther": "已選中。每次點選格子下注{n}個{packName}卡包（{amount}）。",
  "board.stakeControl.packChipTitleCountOne": "每次點選格子下注{n}個{packName}卡包（{amount}）。",
  "board.stakeControl.packChipTitleCountOther": "每次點選格子下注{n}個{packName}卡包（{amount}）。",
  "board.stakeControl.overBalanceHeading": "超出餘額",
  "board.stakeControl.overBalanceBody": "超過你{amount}的餘額。",
  "board.stakeControl.bidAmountTag": "下注指定金額",
  "board.stakeControl.bidAmountInfoTitle":
    "往格子上加任意金額。零散資金每跨過一檔卡包價位，就會長成更大的卡包。",
  "board.stakeControl.bidAmountInfoAria": "什麼是下注指定金額？",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "為格子的投注額加碼",
  "board.stakeControl.bidAmountGroupAria": "在格子上下注指定金額",
  "board.stakeControl.packCountGroupAria": "每次點選下注的卡包數量",
  "board.stakeControl.packCountDecAria": "減少每次點選下注的卡包數量",
  "board.stakeControl.packCountIncAria": "增加每次點選下注的卡包數量",
  "board.stakeControl.packCountValueTitleOne": "每次點選下注{n}個目前檔位的卡包",
  "board.stakeControl.packCountValueTitleOther": "每次點選下注{n}個目前檔位的卡包",
  "board.stakeControl.incrementTitle": "把所選投注額提高到{amount}",
  "board.stakeControl.customAriaLabel": "自訂投注金額（USDC），按Enter或點選別處生效",
  "board.stakeControl.customOverBalanceTitle": "超出你{amount}的餘額。請存款或調低投注額。",
  "board.stakeControl.customTitle": "輸入任意金額，按Enter或點選別處即可設定",
  "board.stakeControl.resetTitle": "把所選投注額重置為{amount}",
  "board.stakeControl.reset": "重置",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "自動投注策略，回合結束時觸發",
  "board.betRail.strategyArmedTip": "已預備，{seconds}秒後觸發",
  "board.betRail.strategyAriaArmed": "{name}，已預備，{seconds}秒後觸發",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}，已預備，{seconds}秒後觸發。點選可取消預備。",
  "board.betRail.strategyAriaClickArm": "{name}。點選可預備。",
  "board.betRail.moreStrategiesAria": "更多自動投注策略",
  "board.betRail.moreStrategiesTitle": "更多策略",
  "board.betRail.cancelArmedAria": "取消已預備的自動投注",
  "board.betRail.autoBetCancelled": "自動投注已取消。",
  "board.betRail.roundLockedSkip": "自動投注還沒觸發，回合就鎖定了。",
  "board.betRail.notEnoughBalanceSkip": "餘額不足，自動投注沒有觸發。",
  "board.betRail.firedAtClose": "{name}已在回合結束時觸發。",
  "board.betRail.firedAtClosePartial": "{name}已在回合結束時觸發：{total}個格子中的{covered}個。",
  "board.betRail.strategyGuideAria": "自動投注策略指南",
  "board.betRail.strategyGuideTitle": "策略指南",
  "board.betRail.autoBetEyebrow": "自動投注",
  "board.betRail.firesInSeconds": "{seconds}秒後觸發",
  "board.betRail.strategiesDialogAria": "自動投注策略",
  "board.betRail.closeStrategiesAria": "關閉自動投注策略",
  "board.betRail.strategiesHeading": "自動投注策略",
  "board.betRail.strategiesIntro":
    "點一下即可用你目前的投注額（{amount}）預備該策略。它會在回合鎖定前一刻觸發，按那一刻各格子上的資金量，也就是大眾風向，來排序挑選。",
  "board.betRail.contrarianHeading": "逆勢選擇",
  "board.betRail.contrarianIntro":
    "人人都去搶資金最少的格子時，那裡反而會擠，次少的格子往往賠得更好。這些策略不放進主欄，介面更清爽。",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "你的帳戶與投注額",
  "board.betRail.balance": "餘額",
  "board.betRail.activeStakes": "目前投注",
  "board.betRail.collection": "收藏",
  "board.betRail.cardCountViewAllSingular": "{count}張卡 · 檢視全部",
  "board.betRail.cardCountViewAllPlural": "{count}張卡 · 檢視全部",
  "board.betRail.moreCount": "+{count}張",
  "board.betRail.noCardsYet": "收藏裡還沒有卡片，贏下一個格子並保留它的卡片。",
  "board.betRail.lastResult": "上輪結果",
  "board.betRail.eachClickAdds": "每次點選增加{amount}",
  "board.betRail.depositToPlay": "存款後開玩",
  "board.betRail.affordShortfall": "需要{unit}，你只有{balance}",
  "board.betRail.allTilesPartialCover": "{name}，按{unit}可覆蓋8個格子中的{covered}個",
  "board.betRail.dockBalance": "餘額",
  "board.betRail.dockStakes": "投注",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "{seconds}秒後開始下一回合",
  "board.core.nextRoundLine": "{secs}後開始下一回合",
  "board.core.playersDecidingAria": "其他{total}位玩家中已有{decided}位做出決定",
  "board.core.playersDecidingLine": "玩家決定中 {ratio}",
  "board.core.pastRoundResultsAria": "往期回合結果",
  "board.core.pastRounds": "往期回合",
  "board.core.winsAmount": "{label}贏得{amount}",
  "board.core.youLost": "你輸了！",
  "board.core.didNotStake": "你本回合未參與投注",
  "board.core.keepCard": "保留卡片（{amount}）",
  "board.core.sellAmount": "出售{amount}",
  "board.core.decideHint": "現在決定，或留到下一回合再定",
  "board.core.roundResultLink": "回合 #{roundId} 結果",
  "board.core.fullReceiptHint": "完整憑證 → 回合結果",
  "board.core.splitReceiptHint": "分配 · 憑證 → 回合結果",
  "board.core.eyebrowDrawing": "正在抽取獲勝者",
  "board.core.eyebrowPullsIn": "拆包結果已出",
  "board.core.eyebrowLocked": "已鎖定",
  "board.core.headlineDrawing": "一張抽獎票定勝負",
  "board.core.headlinePullsIn": "所有卡包都已開完",
  "board.core.headlineRoundLocked": "回合已鎖定",
  "board.core.headlinePacksOpening": "卡包開啟中…",
  "board.core.subDrawing": "可驗證的加權抽取",
  "board.core.subPullsIn": "接下來抽取獲勝者",
  "board.core.subIntro": "{count} {noun}正在角逐",
  "board.core.subOpening": "棋盤上{count} {noun}正在開包",
  "board.core.pool": "獎池",
  "board.core.totalPool": "獎池總額",
  "board.core.clockRoundOpen": "回合進行中",
  "board.core.clockLockedRevealing": "已鎖定 · 揭曉中",
  "board.core.clockSettled": "已結算",
  "board.core.clockAriaLabel": "{label}，{seconds}秒",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "普通評級卡：最大押注者可保留，或回售後按比例分配。",
  "board.settlement.dispositionSellBackSplit": "Grail 規則：預設回售，USDC按格子內比例分配。",
  "board.settlement.dispositionTopBackerKeeps": "Grail 規則：最大押注者保留卡片，並按份額付錢給其他押注者。",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}秒決定",
  "board.settlement.panelAria": "格子詳情與結算",
  "board.settlement.collapsePanelAria": "收起面板",
  "board.settlement.expandPanelAria": "展開面板",
  "board.settlement.roundResultsLink": "回合結果",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "回合面板",
  "board.settlement.clickTileToBack": "結果會顯示在這裡。點任意格子，用{amount}押注。",
  "board.settlement.lastResultLine": "上輪結果 · 回合 #{roundId}，{outcome}",
  "board.settlement.youWonOutcome": "你贏得了{amount}",
  "board.settlement.view": "檢視",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "落選格子 · 落選原因",
  "board.settlement.losingTileTitle": "{label} · 格子上有{amount}",
  "board.settlement.loserWhy":
    "開出{cardName}（{amount}），但抽獎落在了{winnerLabel}。{pct}的抽獎票一無所獲{suffix}",
  "board.settlement.loserWhySuffixWithStake": "，其中包括你的{amount}。",
  "board.settlement.loserWhySuffixNone": "。",
  "board.settlement.emptyTileNote": "這個格子是空的：沒有投注，也沒有抽獎票。",
  "board.settlement.backToSettlement": "返回結算 · {winnerLabel}獲勝",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · 第{index}/{total}張卡 · 格子上有{amount}",
  "board.settlement.pullCaptionSingle": "{label} · 格子上有{amount}",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "卡包開啟中",
  "board.settlement.revealOpenedTitle": "{label}開出了{cardName}",
  "board.settlement.revealOddsLine": "{amount} · 有{pct}的機率拿下{poolAmount}獎池。正在抽取獲勝者。",
  "board.settlement.revealEmpty": "棋盤上的卡包正在一個個拆開，抽取馬上出結果。",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "上輪結果 · 回合 #{roundId}",
  "board.settlement.tileTakesTable": "{label}以{amount}贏下全場",
  "board.settlement.whyWon": "由可驗證的加權抽獎票抽出，{label}在鎖定時佔獎池的{pct}%。",
  "board.settlement.lostNoStakeIn": "你輸了，你沒有押{label}",
  "board.settlement.theWinnerFallback": "獲勝者",
  "board.settlement.wonNoStake": "{label}獲勝 · 你未參與投注",
  "board.settlement.aTileFallback": "某個格子",
  "board.settlement.lossNoteWithStake": "你的{amount}押在了別的格子上，游標移到任一格子上可看詳情。",
  "board.settlement.lossNoteNone": "你本回合沒有押注任何格子。",
  "board.settlement.topCardOfRound": "本回合最佳卡片 · {label}",
  "board.settlement.keepCardTo": "保留卡片（{amount}）→ 收藏",
  "board.settlement.sellBackFor": "以{amount}回售",
  "board.settlement.continueNextRound": "繼續下一回合",
  "board.settlement.continue": "繼續",
  "board.settlement.keepSellHint":
    "保留 = 卡片進收藏 · 出售 = 立刻拿到{amount}（卡片價值的{pct}%，即該卡包的CC回購價）· {noAction}",
  "board.settlement.noActionKept": "不操作 = 卡片自動為你保留。",
  "board.settlement.noActionAutoSell": "不操作 = 下一回合結束時自動出售。",
  "board.settlement.revealOnlyNote":
    "在目前的測試階段，落選格子只做展示，拆出的卡片會退回金庫。只有獲勝格子的卡片才會派發。",
  "board.settlement.payoutSplit": "派獎分配",
  "board.settlement.poolChaseFeedLine": "獎池{pool} · 追逐獎注入{feed}",
  "board.settlement.chaseAddSuffix": " · 追逐獎 +{amount}",
  "board.settlement.physicalCardArrow": "實體卡片 →",
  "board.settlement.grailSecuredSuffix": "（Grail 已鎖定歸屬）",
  "board.settlement.grailSoldBack": "Grail 已回售（{amount}）→ USDC分配見上方。",
  "board.settlement.cardAssignmentHead": "卡片分配",
  "board.settlement.cardLabel": "{amount}卡片",
  "board.settlement.soldToVault": "已售予金庫 · 所得計入分配",
  "board.settlement.decisionTopBackerSuffix": "（最大押注者 · 可保留或出售）",
  "board.settlement.offTheirUsdcSuffix": " · 從其USDC中扣除{amount}",
  "board.settlement.cardsSpreadNote":
    "卡片儘量分給更多押注者：領到卡的人要從自己的USDC裡扣掉該卡的CC回購價（按卡包為85-93%），拿到的現金和出售一樣多，但保住了升值空間。只有沒人領的卡片才賣給金庫。",
  "board.settlement.chaseHitLabel": "追逐獎觸發！",
  "board.settlement.chasePaidLine": "{amount}已計入本次分配。",
  "board.settlement.chaseMissLabel": "本輪追逐獎未觸發。",
  "board.settlement.chaseNowLine": "追逐獎現為{amount}。",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "驗證抽取",
  "board.settlement.verifyDrawSub": "抽取可驗證 · 檢視抽取憑證",
  "board.settlement.roundIdLabel": "回合ID",
  "board.settlement.winningDrawLabel": "獲勝抽取",
  "board.settlement.drawSeedLabel": "抽取種子",
  "board.settlement.proofIdLabel": "證明ID",
  "board.settlement.ticketOfCount": "第{index}/{count}",
  "board.settlement.verifying": "驗證中…",
  "board.settlement.recheckDraw": "重新核驗抽取",
  "board.settlement.verifierLink": "驗證工具 ↗",
  "board.settlement.verifiedOk": "✓ 抽取已驗證：該結果與公佈的抽取種子核對一致。",
  "board.settlement.verifiedBad": "✗ 該結果未通過種子核對，請勿採信。",
  "board.settlement.everyRoundNote": "每回合都用一個公開可核驗的種子抽出一名獲勝者。",
  "board.settlement.noPacksNote": "本回合沒有卡包押注，無需抽取。",
  "board.settlement.settledHoverHint": "已結算，游標移到格子上可檢視詳情。",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "投注額超出你的餘額",
  "board.betTooBig.dismissAria": "關閉",
  "board.betTooBig.gotIt": "知道了",
  "board.betTooBig.body": "押注{slotLabel}需要{needed}，你持有{held}，還差{shortfall}。",
  "board.betTooBig.deposit": "存款 {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "按總投注額排列的玩家",
  "board.wagerLadder.title": "玩家",
  "board.wagerLadder.countZero": "暫無投注",
  "board.wagerLadder.countOther": "本回合{n}人 · 按總投注額排序",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  "board.wagerLadder.collapseAria": "收起玩家面板",
  "board.wagerLadder.lastRoundAria": "檢視上一回合結果，回合 #{n}",
  "board.wagerLadder.lastRoundLabel": "檢視上一回合結果",
  "board.wagerLadder.empty": "本回合還沒有人押注格子。",
  "board.wagerLadder.leaderAria": "領先者",
  "board.wagerLadder.openProfileTitle": "在新分頁開啟{name}的資料",
  "board.wagerLadder.miniGridTotal": "合計{amount}",
  "board.wagerLadder.miniGridTilesAria": "{name}押注的格子",
  "board.wagerLadder.miniGridTilesAriaYou": "你押注的格子",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  "board.bidFund.dialogAria": "出售庫存卡片來支付這次下注",
  "board.bidFund.eyebrow": "USDC不足",
  "board.bidFund.titleOne": "出售這張卡來補足這次下注？",
  "board.bidFund.titleMany": "出售這些卡來補足這次下注？",
  "board.bidFund.body": "出售{cards}可得{buyback}，足夠在{tile}上押注{amount}。",
  "board.bidFund.bodyCardsMany": "這些卡",
  "board.bidFund.note":
    "你還差{amount}。卡片按所屬卡包的CC回購價（85至93%）出售，操作無法撤銷。",
  "board.bidFund.keepCards": "保留卡片",
  "board.bidFund.sellAndBid": "出售並下注{amount}",
  "board.bidFund.autoSellSwitch": "自動把贏來的卡片換成USDC",
  "board.bidFund.autoSellNoteOn":
    "每張贏來的卡片一到手就按回購價兌現，不再問你保留還是出售。Grail 絕不會被自動出售。可隨時在設定中更改。",
  "board.bidFund.autoSellNoteOff":
    "開啟後，每張贏來的卡片都按回購價直接兌成USDC，不再詢問。Grail 絕不會被自動出售。可隨時在設定中更改。",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  "board.hotkeys.optInTitle": "用數字鍵下注？",
  "board.hotkeys.optInBody":
    "按下按鍵會立刻用目前投注額押注對應格子。剛才那一下沒有下注。",
  "board.hotkeys.notNow": "暫不",
  "board.hotkeys.enableKeys": "啟用按鍵",
  "board.hotkeys.turnOff": "關閉",
  "board.hotkeys.turnOffTitle": "按鍵會保持關閉，直到你在設定中重新啟用。",
  "board.hotkeys.changeKeys": "更改按鍵",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  "board.boardV1.openTile": "空格子",
  "board.boardV1.onTile": "在格子上",
  "board.boardV1.changeAmount": "零散{amount}",
  "board.boardV1.oddsSuffix": "勝率{pct}",
  "board.boardV1.openedOdds": "已開包 · 勝率{pct}",
  "board.boardV1.emptyNeverInDraw": "空格子 · 不參與抽取",
  "board.boardV1.winnerYourShare": "獲勝 · 你的份額已派獎",
  "board.boardV1.winnerNoStake": "獲勝 · 你未押注",
  "board.boardV1.lostOdds": "未中獎 · 勝率{pct}",
  "board.boardV1.tileClickTitle": "點選任意位置，用{amount}押注{label}",
  "board.boardV1.youAmount": "你 {amount}",
  "board.boardV1.youNone": "你 -",
  "board.boardV1.pctOfTile": "佔該格子{pct}",
  "board.boardV1.noStakeYet": "尚無投注",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "最高 · ",
  "board.boardV1.backerPopStake": "押注{amount} · 佔該格子{pct}",
  "board.boardV1.statusWaitingDraw": "等待抽取…",
  "board.boardV1.statusWonSplit": "從分配中贏得{amount}",
  "board.boardV1.statusOnWinningTile": "押中了獲勝格子",
  "board.boardV1.statusNoPayout": "本回合無派獎",
  "board.boardV1.statusYourStake": "你的進行中投注",
  "board.boardV1.statusBacking": "正在押注該格子",
  "board.boardV1.backerCount.one": "{n}位押注者",
  "board.boardV1.backerCount.other": "{n}位押注者",
  "board.boardV1.noBackersYet": "還沒有押注者",
  "board.boardV1.backAmount": "押注{amount}",
  "board.boardV1.backBtnTitle": "用{amount} USDC押注{label}",
  "board.boardV1.evolveTitle": "再向{label}追加{amount}",
  "board.boardV1.hoverTitle": "{label} · 格子上有{amount}",
  "board.boardV1.opensAs": "將開出 · {summary}",
  "board.boardV1.noPacksYet": "還沒有卡包，押注它來湊出第一個卡包",
  "board.boardV1.whyOpenedDrawing":
    "以{pct}的勝率開出{cardName}（{amount}），正在抽取獲勝者。",
  "board.boardV1.whyWon":
    "以{pct}的勝率贏下加權抽取。開出{cardName}（{amount}），獎池按比例分給它的押注者。",
  "board.boardV1.whyLost":
    "加權抽取未中，勝率{pct}（{poolAmount}獎池中的{amount}）。它同樣開出了{cardName}（{cardAmount}），但只有獲勝格子才派獎。",
  "board.boardV1.whyEmpty": "空格子：沒有投注，也沒有抽獎票。",
  "board.boardV1.whyYourStakeSuffix": " 你在這裡押了{amount}。",
  "board.boardV1.whyNoStakeSuffix": " 你沒有押注這裡。",
  "board.boardV1.ifWins": "若該格子獲勝：你可從{poolAmount}獎池中拿到約{amount}。",
  "board.boardV1.clickToBack": "點選即可按所選投注額押注，鎖定時開出它的第一個卡包。",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  "board.leaderboard.rowAria": "第{rank}名，{name}，投注{wagered}，淨盈虧{net}，勝率{pct}%",
  "board.leaderboard.youTag": "你",
  "board.leaderboard.youRankTag": "你 · 第{n}名",
  "board.leaderboard.statWagered": "總投注",
  "board.leaderboard.statNetPl": "淨盈虧",
  "board.leaderboard.statWinRate": "勝率",
  "board.leaderboard.statRounds": "回合數",
  "board.leaderboard.statPoolShare": "獎池佔比",
  "board.leaderboard.statFirstSeen": "首次出現",
  "board.leaderboard.statBiggestPull": "最佳拆出",
  "board.leaderboard.shareOfToday": "佔今日總投注",
  "board.leaderboard.shareOfAllTime": "佔歷史總投注",
  "board.leaderboard.noneYet": "暫無",
  "board.leaderboard.viewFullProfile": "檢視完整資料",
  "board.leaderboard.live": "即時",
  "board.leaderboard.fullRankings": "完整排行",
  "board.leaderboard.playerCount.one": "{n}位玩家",
  "board.leaderboard.playerCount.other": "{n}位玩家",
  "board.leaderboard.roundCount.one": "{n}個回合",
  "board.leaderboard.roundCount.other": "{n}個回合",
  "board.leaderboard.colPlayer": "玩家",
  "board.leaderboard.colWagered": "總投注",
  "board.leaderboard.colNet": "淨盈虧",
  "board.leaderboard.colWin": "勝率",
  "board.leaderboard.colBiggestPull": "最佳拆出",
  "board.leaderboard.sortGroupAria": "排序排行榜",
  "board.leaderboard.sortBy": "按{col}排序",
  "board.leaderboard.podiumNet": "淨 {amount}",
  "board.leaderboard.podiumTopPull": "最佳拆出",
  "board.leaderboard.fullStandings": "完整排行榜 · {n}位玩家",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  "board.betRail.stakeUnitPackOne": "{n}個{packName}卡包（{amount}）",
  "board.betRail.stakeUnitPackOther": "{n}個{packName}卡包（{amount}）",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  "board.connectX.avatarAlt": "{handle}的X頭像",
  "board.connectX.connectedTitle": "已透過X關聯 · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  "board.packChips.slotEmptyTitle": "{packName}檔位（此格子沒有）",
  "board.packChips.fixedChipTitle": "{n}個{packName}，每個{amount}",
  "board.packChips.fixedChipTitleTotalSuffix": "，合計{amount}",
  "board.packChips.usdcChange": "USDC {amount}",
  "board.packChips.pooledAll": "由格子累積的資金產生，沒有人直接下注這個卡包",
  "board.packChips.pooledSome": "{total}個中有{n}個由格子累積的資金產生",
  "board.packChips.bidWhole": "以整包形式下注",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "{packName} x{n} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "該格子還有：{list}",
  "board.packChips.morePacks.one": "還有{n}個卡包",
  "board.packChips.morePacks.other": "還有{n}個卡包",
  "board.packChips.morePacksWithList.one": "還有{n}個卡包：{list}",
  "board.packChips.morePacksWithList.other": "還有{n}個卡包：{list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "下注 {bids} · 累積 {pool}",
  "board.tile.splitAllBids": "{bids}全部是以整包形式下注的",
  "board.tile.splitAllPool": "{pool}全部是格子上累積的零散資金",
  "board.tile.splitPoolNote": "虛線卡包由累積的零散資金產生，沒有人直接下注。",
  "board.tile.evolveLooseTitle": "格子上的{loose}零散資金將在{target}升級為{tier}卡包",
  "board.tile.evolveNoLooseTitle": "該格子暫無零散資金。零散資金將在{target}升級為{tier}卡包",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  "board.betRail.allTilesPartialCoverOf": "{name}，按{unit}可覆蓋{total}個格子中的{covered}個",
  "board.betRail.allTilesPlanFull": "回合結束時按{unit}押注全部{total}個格子，合計{spend}。",
  "board.betRail.allTilesPlanShort.one": "回合結束時按{unit}押注{total}個格子中的{covered}個。你的{balance}餘額夠付{spend}。",
  "board.betRail.allTilesPlanShort.other": "回合結束時按{unit}押注{total}個格子中的{covered}個。你的{balance}餘額夠付{spend}。",
  "board.betRail.allTilesPlanNone": "你的{balance}餘額連一次{unit}都不夠，不會押注任何格子。",
  "board.betRail.allTilesShortHistory.one":
    "全格子自動投注需要{needed}（{tiles}個格子，每個{unit}）。你只有{balance}，因此押了{covered}個格子。",
  "board.betRail.allTilesShortHistory.other":
    "全格子自動投注需要{needed}（{tiles}個格子，每個{unit}）。你只有{balance}，因此押了{covered}個格子。",
  "board.betRail.allTilesNoneHistory": "全格子自動投注需要{needed}（{tiles}個格子，每個{unit}）。你只有{balance}，因此沒有押注任何格子。",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "回合結束時",
  "board.betRail.planTotal": "合計",
  "board.betRail.planMathFull": "{total} 個格子 × {amount}",
  "board.betRail.planMathShort": "{total} 個中的 {covered} 個 × {amount}",
  "board.betRail.planPerTile": "每格 {unit}",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // The rail's five strategies. `.label` is the narrow chip caption (two glyphs
  // wide, matching the English chip width), `.name` is also substituted into the
  // {name} token of board.betRail.strategyAria* / firedAtClose, `.closeLine`
  // renders right after `.rowTitle` as "rowTitle, closeLine". Standard gaming
  // register, established vocabulary: 格子, 投注/押注, 回合, 回合結束時,
  // 領先格子, 預備.
  "board.strategy.highest.label": "最多",
  "board.strategy.highest.name": "預備：回合結束時押注資金最多的格子",
  "board.strategy.highest.detail": "把你的投注預備在資金最多的格子上，在回合鎖定前一刻確定。",
  "board.strategy.highest.rowTitle": "資金最多的格子",
  "board.strategy.highest.closeLine": "回合結束時押注最大的格子",
  "board.strategy.highest.gridLine": "結束時資金最多",

  "board.strategy.lowest.label": "最少",
  "board.strategy.lowest.name": "預備：回合結束時押注資金最少的格子",
  "board.strategy.lowest.detail":
    "把你的投注預備在最不擁擠的格子上，在回合鎖定前一刻確定。如果人人都湧向最少的格子，到那時它就不再是最少的了。",
  "board.strategy.lowest.rowTitle": "資金最少的格子",
  "board.strategy.lowest.closeLine": "回合結束時押注最小的格子",
  "board.strategy.lowest.gridLine": "結束時資金最少",

  "board.strategy.secondHighest.label": "次多",
  "board.strategy.secondHighest.name": "預備：回合結束時押注資金第二多的格子",
  "board.strategy.secondHighest.detail": "把你的投注預備在領先格子的下一檔，在回合鎖定前一刻確定。",
  "board.strategy.secondHighest.rowTitle": "資金第二多的格子",
  "board.strategy.secondHighest.closeLine": "回合結束時押注領先格子下面那個",
  "board.strategy.secondHighest.gridLine": "領先格子下一檔",

  "board.strategy.secondLowest.label": "次少",
  "board.strategy.secondLowest.name": "預備：回合結束時押注資金第二少的格子",
  "board.strategy.secondLowest.detail":
    "逆勢選擇：人人都去搶資金最少的格子時，那裡反而會擠，次少的格子往往賠得更好。現在預備，在回合鎖定前一刻確定。",
  "board.strategy.secondLowest.rowTitle": "資金第二少的格子",
  "board.strategy.secondLowest.closeLine": "回合結束時押注擁擠的最少格子上面那個",
  "board.strategy.secondLowest.gridLine": "最少格子上一檔",

  "board.strategy.allTiles.label": "全部",
  "board.strategy.allTiles.name": "預備：回合結束時押注每個格子",
  "board.strategy.allTiles.detail":
    "把你的投注預備在每個符合條件的格子上，在回合鎖定前一刻確定。總支出 = 你的投注額 x 當時的格子數量。",
  "board.strategy.allTiles.rowTitle": "全部格子",
  "board.strategy.allTiles.closeLine": "回合結束時分散你的投注",
  "board.strategy.allTiles.gridLine": "每個格子都投注",
  "board.packStackCursor.stack": "{packName} ×{n}",
  "board.tile.confirmTapAgain": "再點一次：{unit}",
  "board.tile.confirmClickAgain": "再點擊一次：{unit}",
  "board.tile.betOffNotice": "設定裡已關閉下注",
  "board.stakeControl.pickPackHint": "選一個卡包來下注",
  "board.stakeControl.emptyStakeLead": "選一個卡包",
  "board.stakeControl.emptyStakeHint": "它就是你的下注",
  "gear.betInput.label": "下注方式",
  "gear.betInput.hint":
    "點格子（以及數字鍵）如何下注。雙擊會先要求一次確認點擊 - 觸控螢幕預設。關閉為觀戰模式：無法下注。",
  "gear.betInput.optionSingle": "單擊",
  "gear.betInput.optionDouble": "雙擊",
  "gear.betInput.optionOff": "關閉",
  "gear.cardOpen.label": "打開卡牌",
  "gear.cardOpen.hint":
    "雙擊會在卡牌打開頁面前先要求一次確認點擊 - 觸控螢幕預設。",
} as Record<string, string>;
