// Chinese, Simplified (简体中文): "arena" segment - every user-visible string
// from pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel surface: the
// rail, the wheel stage + leader-line callouts, the clock, the snipe tray,
// the double-bid opt-in dialog, and the lock->reveal cinema's three beats).
// Same key set as en/arena.ts. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English rules that apply to every locale.
// This is the ONLY file an agent working on the "arena" surface should
// need to touch for this locale, index.ts already spreads it in and should
// not need to change again.
export default {
  "arena.you": "你",
  "arena.youAvatarLetter": "你",
  "arena.common.card": "张卡",
  "arena.common.cards": "张卡",
  "arena.matchLabel": "对局 #{n}",
  "arena.pageTitle": "卡牌竞技场",
  "arena.backToBoard": "← 返回棋盘",

  "arena.rail.ariaLabel": "你的收藏",
  "arena.rail.heading": "你的收藏",
  "arena.rail.practiceNote": "练习卡组。在棋盘上赢下回合，就能用你自己的卡片填满这里。",
  "arena.rail.emptyNote": "手上没有卡片。赢下奖池就能拿回你的份额。",
  "arena.rail.enterWheel": "进入转盘",
  "arena.rail.armSnipe": "预备狙击",
  "arena.rail.hint": "双击卡片即可下注，或选中卡片后点“进入转盘”。空格键选中，A键预备狙击。",

  "arena.railCard.armedSuffix": "已预备狙击。",
  "arena.railCard.hint": "空格键选中，A键预备狙击。双击可把它下注进竞技场。",
  "arena.railCard.armedTag": "已预备",

  "arena.snipe.trayHeading": "狙击已就绪",
  "arena.snipe.disarm": "取消狙击",
  "arena.snipe.firesAt": "倒计时2秒时触发",
  "arena.snipe.carries": "会延续到下一场对局",

  "arena.board.sectionAriaLabel": "竞技场转盘",
  "arena.board.noCap": "卡片数量没有上限，唯一的限制是时间。",
  "arena.board.wheelDecides": "转盘说了算",
  "arena.board.nextMatchLabel": "下一场对局倒计时",
  "arena.board.potLabel": "奖池",
  "arena.board.wheelAriaEnter": "将已选中的{count}{cardWord}投入转盘",
  "arena.board.wheelAriaIdle": "转盘。从你的收藏里选卡片投进去。",
  "arena.board.youWin": "你赢了",
  "arena.board.nameWins": "{name} 获胜",
  "arena.board.emptyWheelNote": "转盘已开启。押的是卡片，不是现金：你的价值占比决定弧长和胜率。追逐奖抽成为 0%。协议方按整张卡执行 7% 费用规则；获胜者获得其余所有卡片。",
  "arena.board.tableHint": "你投进去的卡片按价值占比呈现在转盘上，弧长就是你的胜率。",
  "arena.board.resultsLink": "查看上一轮结果 →",

  "arena.clock.locked": "已锁定",
  "arena.clock.settled": "已结算",
  "arena.clock.locksIn": "锁定倒计时",
  "arena.countdown.secondsSuffix": "秒",

  "arena.cinema.closeAriaLabel": "关闭剧场",
  "arena.cinema.closeTitle": "关闭（Esc）",
  "arena.cinema.beatCopy.contestants": "参赛者",
  "arena.cinema.beatCopy.spin": "旋转",
  "arena.cinema.beatCopy.settle": "结算",
  "arena.cinema.beatCopyShort.contestants": "玩家",
  "arena.cinema.beatCopyShort.spin": "旋转",
  "arena.cinema.beatCopyShort.settle": "结算",
  "arena.cinema.contestantsAriaLabel": "参赛者",
  "arena.cinema.contestantsHeadline": "参赛者",
  "arena.cinema.oddsToWin": "胜率 {pct}%",
  "arena.cinema.hintContestants": "转盘说了算，点击立即旋转。",
  "arena.cinema.spinAriaLabel": "转盘旋转",
  "arena.cinema.lockedOn": "已锁定",
  "arena.cinema.hintSpin": "点击可跳过旋转。",
  "arena.cinema.settleAriaLabel": "结算",
  "arena.cinema.winnerTag": "获胜者",
  "arena.cinema.youTakePot": "你赢得了奖池",
  "arena.cinema.takesPot": "赢得奖池",
  "arena.cinema.shelfWinner": "归获胜者",
  "arena.cinema.shelfChase": "追逐奖",
  "arena.cinema.shelfProtocol": "协议方",
  "arena.cinema.smallPotNote": "追逐奖不抽成。协议方的 7% 规则选中了 {count} 张{cardWord}；获胜者获得其余所有卡片。",
  "arena.cinema.resultsLink": "查看上一轮结果",
  "arena.cinema.hintSettle": "点击任意位置返回竞技场。",
  "arena.cinema.barToWinner": "{value} · {count}{cardWord}归获胜者",
  "arena.cinema.barOpen": "{value} · {count}{cardWord}",

  "arena.doubleBid.title": "双击自动下注？",
  "arena.doubleBid.body": "双击收藏里的卡片，就能直接把它下注进竞技场。要开启吗？",
  "arena.doubleBid.enable": "启用",
  "arena.doubleBid.dismiss": "暂不",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "正在连接 CARD ARENA",
  "arena.backend.loadingBody": "正在检查 Arena 的线上版本和你的玩家会话…",
  "arena.backend.loadingCollection": "正在检查你的收藏…",
  "arena.backend.mainnetPreparingTitle": "MAINNET ARENA 已连接",
  "arena.backend.mainnetPreparingBody": "这一精确的只读版本运行正常。资金、卡牌获取、入场、抽签和结算仍处于禁用状态。",
  "arena.backend.mainnetPreparingCollection": "尚未购买或移动任何 Mainnet 卡牌。在单独授权的库存准备就绪前，Arena 将保持只读。",
  "arena.backend.mainnetRelease": "版本 {commit} · 部署 {deployment} · 签名、广播、效果和重复均为零",
  "arena.backend.unavailableTitle": "CARD ARENA 正在更新",
  "arena.backend.unavailableBody": "在这一版本就绪之前暂停入场。你的卡牌没有变动。",
  "arena.backend.unavailableCollection": "Arena 更新期间无法查看收藏。",
  "arena.backend.connectTitle": "连接后开始游戏",
  "arena.backend.connectBody": "载入与供应商绑定的卡牌并进入转盘，需要一个已验证的 Privy 会话。",
  "arena.backend.connectCollection": "连接你的玩家会话以载入卡牌。",
  "arena.backend.retry": "重试",
} as Record<string, string>;
