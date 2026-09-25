// Chinese, Simplified (简体中文): Phase 2 quality pass over the Phase 1
// machine translation. Same key set as en/core.ts. See royaleI18n.ts for the
// {token} interpolation convention and the "no em dash" rule.
//
// House terms (kept in step with board.ts / misc.ts):
//   tile 格子 · pack 卡包 · back/stake 押注 · bet 下注 · bet size 投注额 ·
//   backer 押注者 · pool 奖池 · Chase 追逐奖 · jackpot 累积奖金 ·
//   receipt 凭证 · buyback 回购价 · sell back 回售 · settle 结算 ·
//   collection 收藏 · vault 金库 · slab 评级卡 · odds 胜率.
// Pack TIER NAMES (Starter/Elite/Legendary/Grail/Mythic) are brand terms and
// stay in Latin script, mid-sentence included. So do attn ROYALE, ATTN
// Protocol, USDC, X, Privy and CollectorCrypt.
//
// Segment: core (the original Phase-1 flat dictionary, moved here
// verbatim as part of the i18n parallel-work restructure) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome) and
// runtime.* (copy built by the plain, non-component .ts modules). Do NOT add
// new SURFACE keys to this file, add them to the segment file for the surface
// they belong to instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this same directory).
// See royaleI18n.ts's file header for the key/interpolation convention.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "语言",
  "settings.languageSectionAria": "语言设置",
  "settings.languageSearchPlaceholder": "搜索语言",
  "settings.languageNoResults": "未找到匹配的语言",
  "settings.languageHint": "即时生效。按名称搜索，或直接输入筛选。",
  "settings.languageInputAria": "语言，搜索并选择",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "设置分组",
  "settings.searchPlaceholder": "搜索设置",
  "settings.searchClear": "清除搜索",
  "settings.searchResultsAria": "匹配的设置",
  "settings.searchNoResults": "没有与“{query}”匹配的设置。试试你想改动的那一项的名称。",
  "settings.backToGroups": "全部设置",
  "gear.cards.heading": "卡牌",
  "gear.cards.sectionAria": "卡牌设置",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "下注 {bids} · 最低 {amount}",
  "gear.section.summary.display": "弹窗 {popups} · 头像 {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "音乐 {music} · 音效 {sfx}",
  "gear.section.summary.autosell": "已启用 {count} 条自动出售规则",
  "gear.section.summary.hotkeys": "已设置 {count} 个下注快捷键",

  // --- Shared words --------------------------------------------------------
  "common.on": "开启",
  "common.off": "关闭",
  "common.set": "设置",
  "common.clear": "清除",
  "common.tileLabel": "格子{n}",
  "common.tileShort": "T{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "投注",
  "gear.betting.sectionAria": "投注设置",
  "gear.betting.provider.label": "卡包提供商",
  "gear.betting.provider.automatic": "自动（优先 Collector Crypt）",
  "gear.betting.provider.hint": "自动模式会在 Collector Crypt 可用时优先使用它，并且只使用已验证的备用提供商。指定提供商为严格选择：若不可用，投注会被拒绝。",
  "gear.betting.provider.automaticHint": "自动 · 优先 Collector Crypt",
  "gear.betting.provider.strictHint": "仅限 {provider} · 不备用",
  "gear.betting.provider.unavailable": "{provider}（不可用）",
  "gear.betting.provider.selectedUnavailable": "{provider} 当前不可用。严格投注会被拒绝，且不会替换为其他提供商。",
  "gear.betting.provider.actual": "由 {provider} 完成",
  "gear.betting.provider.accepted": "由 {provider} 接受",
  "gear.betting.disableBids.label": "禁用投注",
  "gear.betting.disableBids.hint":
    "锁住你的下注：点格子不再出钱，可以安心观战，也可以把屏幕交给别人，不怕误触。游戏其他部分照常进行。",
  "gear.betting.minBid.label": "最低投注额",
  "gear.betting.minBid.hint":
    "单次点击的最小下注额。投注额不会低于这个数，快速连点也不会少下（最低$5，用于防止刷单）。",
  "gear.betting.upgradeCap.label": "升级费用上限",
  "gear.betting.upgradeCap.placeholder": "无限制",
  "gear.betting.upgradeCap.hint":
    "单次升级点击最多花多少钱。超过上限的升级会置灰，热门格子不会不知不觉给你开出一张大账单。",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "显示",
  "gear.display.sectionAria": "显示设置",
  "gear.display.chipFloats.label": "投注弹出提示",
  "gear.display.chipFloats.hint": "有人往格子上下注时，冒出“+$X·名字”的小气泡。",
  "gear.display.floatThreshold.label": "隐藏小额投注",
  "gear.display.floatThreshold.placeholder": "显示所有投注",
  "gear.display.floatThreshold.hint":
    "只有达到这个金额的投注才冒气泡。清空（或设为$0）就全都显示。小额投注扎堆时，棋盘会清爽很多。",
  "gear.display.hidePortraits.label": "隐藏玩家头像",
  "gear.display.hidePortraits.hint": "隐去格子上其他玩家的头像圆圈，你自己的标记照常显示。",
  "gear.display.fullscreenLandscape.label": "横屏全屏",
  "gear.display.fullscreenLandscape.hint":
    "在手机上，横屏后的下一次点按会隐藏浏览器栏。iPhone Safari 会将浏览器栏收起；添加到主屏幕即可真正全屏。",
  "gear.display.replayTour.label": "重播欢迎导览",
  "gear.display.replayTour.hint": "从第一步重新打开欢迎导览。",
  "gear.display.couch.label": "大字体（电视/沙发）",
  "gear.display.headerCollapse.label": "折叠顶栏",
  "gear.display.headerCollapse.hint": "收起顶部栏，让牌桌和卡牌填满屏幕。点击顶栏的箭头即可恢复。",
  "gear.display.couch.hint":
    "放大整个游戏的阅读文字：聊天、文档、标签和金额，适合坐在沙发上游玩。棋盘布局保持不变。在地址中加上 ?couch=1 也可开启。",
  "gear.display.couch.suggested": "这看起来像电视或游戏主机的浏览器，大字体正适合这种屏幕。",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "开包揭示",
  "gear.reveals.sectionAria": "开包揭示设置",
  "gear.reveals.turbo.label": "极速揭示",
  "gear.reveals.turbo.hint":
    "快进揭示演出，更快看到结果，关键时刻仍留足一拍。默认关闭，其他玩家看到的还是完整演出。",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "声音",
  "gear.sound.sectionAria": "声音设置",
  "gear.sound.sfx.label": "音效",
  "gear.sound.sfx.hint":
    "筹码声、开局与锁定、获胜转盘、揭示演出的音效，全部在浏览器里实时合成，不用加载任何素材。",
  "gear.sound.music.label": "音乐",
  "gear.sound.music.hint":
    "音乐跟着回合走：投注阶段逐渐升温，最后几秒推到顶，揭示时落下来。首次点击或按键后开始播放，切走标签页就暂停。",
  "gear.sound.musicStyle.label": "音乐风格",
  "gear.sound.musicStyle.piano": "静谧钢琴",
  "gear.sound.musicStyle.snowmelt": "雪融",
  "gear.sound.musicStyle.hearthfire": "炉火",
  "gear.sound.musicStyle.grotto": "鎏金洞窟",
  "gear.sound.musicStyle.arcade": "街机疾驰",
  "gear.sound.musicStyle.kart": "卡丁车拉力",
  "gear.sound.musicStyle.galaxy": "星光华尔兹",
  "gear.sound.musicStyle.hint": "静谧钢琴柔和舒缓，街机疾驰明快急促。下一小节生效，回合中途切换也一样。",
  "gear.sound.musicVolume.label": "音乐音量",
  "gear.sound.sfxVolume.label": "音效音量",
  "gear.sound.volume.label": "音量",
  "gear.sound.volume.aria": "总音量",
  "gear.sound.volume.hint": "一个总音量同时控制音效与音乐。",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "自动出售规则",
  "gear.autosell.sectionAria": "自动出售规则",
  "gear.autosell.intro":
    "设置一次，之后每张符合条件的中奖卡片都会自动回售，不再弹保留或出售的提示。不符合条件的照旧问你。",
  "gear.autosell.everyWin.label": "自动出售所有中奖卡片",
  "gear.autosell.everyWin.hint":
    "每张赢来的卡片一到手就按回购价兑现，不再弹保留或出售的提示。Grail 绝不会被自动出售。这是一键开启下方四个稀有度开关的快捷方式。",
  "gear.autosell.belowValue.label": "价值低于此金额时出售",
  "gear.autosell.placeholderOff": "关闭",
  "gear.autosell.rarity.label": "按稀有度出售",
  "gear.autosell.rarity.aria": "按稀有度自动出售",
  "gear.autosell.rarity.hint":
    "CollectorCrypt的稀有度分档，取自每张卡片所在的机器。同一档对应的价格区间因卡包而异，所以一张$200的卡片在某台机器里算稀有，在更贵的机器里就很普通。",
  "gear.autosell.nonVintage.label": "出售非年份卡",
  "gear.autosell.belowGrade.label": "评分低于此数值时出售",
  "gear.autosell.grader.label": "按评级机构出售",
  "gear.autosell.grader.hint":
    "勾住某个评级机构，就只自动出售它评分低于设定值的卡片；取消勾选，它名下的卡片全部自动出售；全部取消勾选，赢来的一切都自动出售。各家评分标准不同，所以下限各设各的。",
  "gear.autosell.grader.aria": "按评级机构自动出售",
  "gear.autosell.grader.keep": "保留",
  "gear.autosell.grader.sellAll": "全部出售",
  "gear.autosell.grader.other": "其他 / 未评级",
  "gear.autosell.grader.placeholderKeepAll": "全部保留",
  "gear.autosell.grader.placeholderSellAll": "全部出售",
  "gear.autosell.grader.ariaGradeSuffix": "低于此评分时出售",
  "gear.autosell.summaryActive": "已启用：",
  "gear.autosell.summaryNone": "还没有自动出售规则，每次中奖都会问你保留还是出售。",
  "gear.autosell.turnOffAll": "全部关闭",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "投注快捷键",
  "gear.hotkeys.sectionAria": "投注快捷键",
  "gear.hotkeys.intro":
    "按下格子对应的键，就用当前投注额下注，不必碰鼠标。先点下面的按键位，再按你想绑定的键。两个格子不能共用一个键，重新绑定会把它挪过来。Esc取消，Backspace清除。",
  "gear.hotkeys.enabled.label": "数字键投注",
  "gear.hotkeys.enabled.hintOn": "投注阶段快捷键生效，按下格子对应的键立刻下注。",
  "gear.hotkeys.enabled.hintOff": "快捷键已关闭，按格子的键不会下注。",
  "gear.hotkeys.enabled.hintUnset": "还没决定。可以在这里开启，也可以在投注阶段按下某个格子的键，再选“启用”。",
  "gear.hotkeys.listAria": "各格子的投注快捷键",
  "gear.hotkeys.tileLabel": "格子{n}",
  "gear.hotkeys.pressKeyPrompt": "请按下一个键…",
  "gear.hotkeys.setKey": "设置按键",
  "gear.hotkeys.clear": "清除",
  "gear.hotkeys.ariaPressToBind": "按下一个键以绑定格子{n}",
  "gear.hotkeys.ariaShortcut": "格子{n}的快捷键是{key}，点击可重新绑定。",
  "gear.hotkeys.ariaNoShortcut": "格子{n}还没有快捷键，点击即可设置。",
  "gear.hotkeys.ariaClearShortcut": "清除格子{n}的快捷键",
  "gear.hotkeys.unboundWarning": "{list}还没设按键，在你设定之前，这些格子没有键盘快捷键。",
  "gear.hotkeys.resetButton": "恢复默认设置",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "attn ROYALE 分区",
  "nav.board": "棋盘",
  "nav.results": "结果",
  "nav.rankingsFull": "排行榜",
  "nav.rankingsShort": "排行",
  "nav.collectionFull": "收藏",
  "nav.collectionShort": "卡片",
  "nav.profile": "个人资料",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "棋盘",
  "mobileNav.results": "结果",
  "mobileNav.ladder": "排行榜",
  "mobileNav.collection": "收藏",
  "mobileNav.profile": "个人资料",
  "mobileNav.docs": "文档",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome. The metrics rail is a fixed-width strip, so
  // every label there stays at 3 to 5 characters.
  "shell.route.aria": "attn ROYALE 实验室",
  "shell.header.statusAria": "回合状态",
  "shell.header.collapse": "隐藏顶栏",
  "shell.header.expand": "显示顶栏",
  "shell.header.round": "回合 #{n}",
  "shell.header.turboTitle": "回合节奏加速",
  "shell.header.turboBadge": "极速",
  "shell.metrics.aria": "回合概览",
  "shell.metrics.totalPool": "奖池总额",
  "shell.metrics.packsLive": "场上卡包",
  "shell.metrics.yourStake": "你的投注",
  "shell.metrics.selectedBet": "已选投注额",
  "shell.board.aria": "attn ROYALE 棋盘",
  "shell.board.label": "棋盘",
  "shell.board.phaseOpen": "点任意格子押注，投注额会自动凑成最划算的卡包组合",
  "shell.board.phaseLock": "已锁定 · 卡包开启中",
  "shell.board.phaseSettled": "回合已结算",
  "shell.board.metaOpen": "奖池{pool} · 3%注入追逐奖 · 锁定时开包",
  "shell.board.metaClosed": "按可验证的加权胜率，由一个格子赢下整个奖池。",
  "shell.board.reopenReveal": "↗ 重看揭示",
  "shell.connectNudge": "进入游戏并存款，就能开始押注格子。回合在后台照常进行。",
  "shell.decision.cardFallback": "你的卡片",
  "shell.mobile.close": "关闭",
  "shell.mobile.chat": "聊天",
  "shell.mobile.chatOpenAria": "打开牌桌聊天",
  "shell.mobile.chatCloseAria": "关闭牌桌聊天",
  "shell.mobile.cards": "卡片",
  "shell.mobile.cardsOpenAria": "打开你的卡片，出售或提现",
  "shell.mobile.cardsCloseAria": "关闭你的卡片",
  "shell.mobile.players": "玩家",
  "shell.mobile.playersOpenAria": "打开玩家榜，按投注额排序",
  "shell.mobile.playersCloseAria": "关闭玩家榜",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // runtime.rail.* - royaleRailCopy.ts (playable-USDC rail + prize modal).
  "runtime.rail.gameUsdc": "游戏内USDC",
  "runtime.rail.privySessionCredit": "Privy 会话额度",
  "runtime.rail.houseCredit": "平台额度",
  "runtime.rail.connectPrivy": "连接 Privy 存入游戏内USDC",
  "runtime.rail.privySession": "Privy 会话",
  "runtime.rail.depositAction": "存入 +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Privy 账户",
  "runtime.rail.house": "平台",
  "runtime.rail.depositReceipt": "凭证{id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "点任意卡包押注{amount}。每个格子也保留自己的 +{low} / +{high}。",
  "runtime.rail.sellBack": "回售 → 余额 +{amount}",

  // runtime.recap.* - royaleSpectatorRecap.ts (spectator gallery rows).
  "runtime.recap.you": "你",
  "runtime.recap.topBacker": "最大押注者",
  "runtime.recap.topCardOutcome": "头号卡片 · 保留或出售",
  "runtime.recap.backer": "押注者",
  "runtime.recap.cardWon": "赢得卡片",
  "runtime.recap.chaseLootReleased": "追逐奖战利品已释放",
  "runtime.recap.theChase": "追逐奖",
  "runtime.recap.sweptIntoVault": "已收进金库",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "协议费用",
  "runtime.recap.soldBack": "已回售",
  "runtime.recap.intoSplit": "+{amount}计入分配",

  // runtime.xProfile.* - royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "X 连接暂不可用。",
  "runtime.xProfile.connected": "已连接",

  // runtime.sellBack.* - royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "未知卡片",

  // runtime.winShare.* - royaleWinShareModel.ts (share-card headline).
  "runtime.winShare.headlineWon": "赢得",
  "runtime.winShare.headlineGrailPull": "GRAIL 拆出",
  "runtime.winShare.headlineCardsWon": "赢得卡片",
  "runtime.winShare.cardInImage": "卡片见图。",
  "runtime.winShare.receiptInImage": "凭证见图。",

  // runtime.serverWallet.* - royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "提现通道当前离线，资金没有变动。",
  "runtime.serverWallet.noSigner": "本次会话没有连接钱包签名方，资金没有变动。",
  "runtime.serverWallet.nonceUnavailable": "未能从服务器取得提现授权nonce。",
  "runtime.serverWallet.signatureUnavailable": "钱包没有返回对提现nonce的签名。",
  "runtime.serverWallet.boundaryLabel": "牌桌额度与服务器钱包USDC是两笔独立余额。",

  // runtime.video.* - royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "此浏览器不支持屏幕录制。",
  "runtime.video.noRecorderFormat": "此浏览器没有可用的 MediaRecorder 视频格式。",
  "runtime.video.canceled": "渲染已取消。",
  "runtime.video.unreachable": "连不上{url}的渲染服务。",
  "runtime.video.rejected": "渲染服务拒绝了这个回合：{detail}",
  "runtime.video.requestFailed": "渲染请求失败（{status}）。",
  "runtime.video.noJobId": "渲染服务没有返回任务ID。",
  "runtime.video.lostJob": "渲染任务已丢失（{status}）。",
  "runtime.video.lostContact": "渲染途中与渲染服务失去联系。",
  "runtime.video.renderFailed": "渲染失败：{error}。",
  "runtime.video.unknownError": "未知错误",
  "runtime.video.downloadFailed": "视频已生成，但没能下载下来。",
  "runtime.video.downloadHttpFailed": "视频已生成，但下载失败（{status}）。",
  "runtime.video.emptyVideo": "渲染服务返回了一段空视频。",
  "runtime.video.shareTagline": "抽取可验证的卡包对决。来看这个回合：",

  // runtime.game.* - useRoyaleGame.ts (feed lines, written at event time).
  "runtime.game.roomLive": "房间已开。回合自动开始：开放{seconds}秒，然后揭示。",
  "runtime.game.chaseVault": "追逐奖金库",
  "runtime.game.aTile": "某个格子",
  "runtime.game.aPack": "一个卡包",
  "runtime.game.theCard": "这张卡片",
  "runtime.game.collectedSplit": "回合{round} · 从分配中拿到{amount} USDC。",
  "runtime.game.chaseDropSplit": "回合{round} · 追逐奖在你的格子上砸下{award} · 你分到{amount} USDC。",
  "runtime.game.grailSecured": "Grail 已锁定归属：{card}（{amount}）收进你的收藏。",
  "runtime.game.keptCard": "已保留{card}（{amount}）→ 收进你的收藏。",
  "runtime.game.soldCardSettle": "{card}已回售，得{amount} USDC（{value}的{pct}%）。",
  "runtime.game.roundVoidedRefund":
    "回合{round}作废。没有开包，也就没有卡片价值抽取。你的{amount}投注已退回。",
  "runtime.game.roundVoidedAll":
    "回合{round}作废。没有开包，也就没有卡片价值抽取。全部投注已退回。",
  "runtime.game.chaseFiredYours.one": "追逐奖触发：{n}张卡片（{amount}）释放到你的格子{tile}。",
  "runtime.game.chaseFiredYours.other": "追逐奖触发：{n}张卡片（{amount}）释放到你的格子{tile}。",
  "runtime.game.chaseFiredTable.one":
    "回合{round}追逐奖触发：{award}外加{n}张卡片砸在{tile}上，由它的押注者分。",
  "runtime.game.chaseFiredTable.other":
    "回合{round}追逐奖触发：{award}外加{n}张卡片砸在{tile}上，由它的押注者分。",
  "runtime.game.cardsAssigned.one": "{n}张卡片归你（{amount}）→ 收藏。",
  "runtime.game.cardsAssigned.other": "{n}张卡片归你（{amount}）→ 收藏。",
  "runtime.game.cardPoolsLive": "卡池已上线：{pools}个CollectorCrypt机器卡池，共{cards}张卡片。",
  "runtime.game.minBid": "最低投注额是{amount}。加码后再试。",
  "runtime.game.resolveFailed": "本轮无法结算，因此未进行任何结算。下一轮正常开始。",
  "runtime.game.stakeRefused": "该投注额对{tile}来说过大。未扣款。请调低后再试。",
  "runtime.game.shortfallBack":
    "USDC不够，无法用{amount}押注{tile}。你只有{held}。存款后继续。",
  "runtime.game.shortfallNextPack":
    "USDC不够，无法在{tile}上凑齐下一个卡包。需要{amount}，你只有{held}。存款后继续。",
  "runtime.game.youBacked": "你用{amount}押注了{tile}。",
  "runtime.game.packCompleted": "你在{tile}上凑齐了下一个卡包（+{amount}）→ {tier}。",
  "runtime.game.soldToFundBid": "已出售{cards}换得{amount} USDC（CC回购价），用来下注。",
  "runtime.game.backedFunded": "已用{amount}押注{tile}（资金来自库存卡片）。",
  "runtime.game.demoStakesRefunded":
    "演示投注已清空：你点进去的{amount}已退回，从$0重新开始。",
  "runtime.game.demoStakesCleared": "演示投注已清空：在你押注之前，每回合都从$0开始。",
  "runtime.game.deposited": "已向你的钱包存入{amount} USDC。",
  "runtime.game.referralBonus": "邀请奖励已到账：+{amount} USDC。",
  "runtime.game.signedAndSent": "已在{cluster}上签名并发送{amount} USDC · 签名{sig}…。",
  "runtime.game.signedNoBroadcast":
    "已在{cluster}上签名{amount} USDC（{method}，未广播上链）· 签名{sig}…。",
  "runtime.game.soldCard": "已出售{card}，得{amount} USDC（回购价{pct}%）。",
} as Record<string, string>;
