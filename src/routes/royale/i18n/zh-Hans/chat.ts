// i18n dictionary - "chat" segment (Chinese, Simplified / 简体中文).
// Same key set as en/chat.ts. See royaleI18n.ts's file header for the
// key-naming and {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / numbers-and-currency-stay-literal rules that
// apply to every locale.
//
// LOCALE-FROZEN NOTE (see en/chat.ts): chat messages are composed once at
// post time and stored as plain strings; switching language mid-session
// never rewrites messages already in the feed/history.
//
// "GRAIL" in chat.event.grailTag and "Mythic" in chat.chatter.line17 are the
// Starter/Elite/Legendary/Grail/Mythic PACK TIER brand names (owner hard
// rule: stay English in every locale) - left untranslated, matching the
// casing used in the English source for each.
export default {
  "chat.rooms.table": "大厅",
  "chat.rooms.sendTo": "发送至",
  "chat.rooms.joinHint": "在一个格子下注即可解锁对应房间。",
  "chat.rooms.messageTargets": "消息房间",
  "chat.composer.sendFailed": "消息发送失败，请重试。",
  "chat.composer.audienceChanged": "聊天室已更改，未发送的消息已清除。",
  "chat.composer.sessionUnavailable": "聊天会话不可用，请刷新后重试。",
  "chat.auth.tileLeadBold": "投注一个格子后即可聊天",
  "chat.auth.tileBody": "。首个卡包获接受后，将解锁桌面和格子聊天室。",
  "chat.auth.sessionUnavailableBold": "聊天会话不可用",
  "chat.auth.sessionUnavailableBody": "。请刷新以恢复安全发送。",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "牌桌聊天",
  "chat.header.title": "牌桌聊天",
  "chat.header.fontControlAriaLabel": "聊天文字大小",
  "chat.header.fontSmaller": "缩小聊天文字",
  "chat.header.fontLarger": "放大聊天文字",
  "chat.header.collapseShow": "显示聊天",
  "chat.header.collapseHide": "隐藏聊天",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "GRAIL 拆出",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "回合 #{roundId}",
  "chat.event.ariaOpensResult": "{tag}：{text}。将在新标签页中打开本轮结果。",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "归属",
  "chat.event.wonBy": "归属 {name}",
  "chat.event.foldedIntoPot": "并入奖池",
  "chat.event.roundWinsTitle": "{tile} 赢得 {pot}",
  "chat.event.bestPull": "最佳拆出 {name}（{value}）",
  "chat.event.chaseAward": "追逐奖 +{amount}",
  "chat.event.youWon": "你 +{amount}",
  "chat.event.youLost": "你输了",
  "chat.message.showOriginal": "已翻译 · 查看原文",
  "chat.message.showTranslation": "查看翻译",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "跳到最新",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "这里只会渲染 attn 链接。",
  "chat.composer.rateLimitNotice": "发得有点快，稍等一下再发。",
  "chat.composer.placeholder": "说点什么…",
  "chat.composer.inputAriaLabel": "聊天消息",
  "chat.composer.sendAriaLabel": "发送消息",
  "chat.composer.sendLabel": "发送",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "登录后即可聊天",
  "chat.auth.body": "，在右上角连接账户之前，聊天室只能看不能发。",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "在新标签页中打开卡片页面",
  "chat.messageBody.cardEmbedAriaLabel": "{name}，{value}。将在后台标签页中打开卡片页面。",
  "chat.messageBody.viewCard": "查看卡片",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "卡片页面",
  "chat.link.roundResult": "回合结果",
  "chat.link.profile": "个人资料",
  "chat.link.collection": "收藏",
  "chat.link.theBoard": "棋盘",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "3号格子涨得好快",
  "chat.chatter.line02": "谁一直在偷袭领先格子啊",
  "chat.chatter.line03": "上一轮那张 Grail 拆得真离谱",
  "chat.chatter.line04": "稳了，大伙儿都上车押领先格子",
  "chat.chatter.line05": "感觉7号格子被低估了",
  "chat.chatter.line06": "卡包留到最后五秒再说",
  "chat.chatter.line07": "有人刚往2号格子砸了$250，牛啊",
  "chat.chatter.line08": "6号格子的奖池占比现在贵得离谱",
  "chat.chatter.line09": "再加一个卡包，那格子就能升档了",
  "chat.chatter.line10": "狙击党又在毁我的胜率",
  "chat.chatter.line11": "我一直拆到底价卡，该来发大的了",
  "chat.chatter.line12": "盯紧那条大户，他每次都押中获胜格子",
  "chat.chatter.line13": "1号格子这一整场都没中过，该轮到它了",
  "chat.chatter.line14": "上把拆的卡秒回售了，回购价挺良心",
  "chat.chatter.line15": "反狙击马上来，记好了",
  "chat.chatter.line16": "最后十秒领先格子换了两次",
  "chat.chatter.line17": "今晚还有人在冲 Mythic 这一档吗",
  "chat.chatter.line18": "卡留下了，画面太好看舍不得卖",
  "chat.chatter.line19": "临门加的卡包不会重置倒计时，这点好评",
  "chat.chatter.line20": "8号格子的奖池刚翻倍，有情况",
  "chat.chatter.line21": "前期小包后期大包，只能这么玩",
  "chat.chatter.line22": "保留还是出售那个倒计时每次都坑我",
  "chat.chatter.line23": "现在看，追赶的几个格子比领先格子更划算",
  "chat.chatter.line24": "5号格子这波狙击太精准了",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "牌桌辅助面板",
  "chat.surface.chat": "聊天",
  "chat.surface.activity": "我的活动",
  "chat.activity.ariaLabel": "我的私密活动",
  "chat.activity.filtersAria": "筛选活动",
  "chat.activity.filter.all": "全部",
  "chat.activity.filter.packs": "卡包",
  "chat.activity.filter.bids": "投注",
  "chat.activity.filter.rewards": "奖励",
  "chat.activity.filter.feats": "成就",
  "chat.activity.filter.clan": "战队",
  "chat.activity.today": "今天",
  "chat.activity.yesterday": "昨天",
  "chat.activity.status.pending": "待处理",
  "chat.activity.status.finalized": "已确认",
  "chat.activity.status.reversed": "已撤销",
  "chat.activity.finalizedAria": "已确认凭证",
  "chat.activity.signInTitle": "登录后查看历史记录",
  "chat.activity.signInBody": "你的卡包、投注、奖励、成就和战队凭证只会显示在这里。",
  "chat.activity.loading": "正在加载你的凭证",
  "chat.activity.loadOlder": "加载更早记录",
  "chat.activity.points": "{points} 点",
  "chat.activity.event.packBid.title": "卡包已投入",
  "chat.activity.event.packBid.detail": "已确认投入{tile}号格子。",
  "chat.activity.event.roundWon.title": "获胜格子",
  "chat.activity.event.roundWon.detail": "{tile}号格子赢得了本局。",
  "chat.activity.event.roundLost.title": "本轮已结算",
  "chat.activity.event.roundLost.detail": "{tile}号格子未赢得本局。",
  "chat.activity.event.roundRefunded.title": "卡包已退款",
  "chat.activity.event.roundRefunded.detail": "{tile}号格子的投注已退回。",
  "chat.activity.event.chaseWon.title": "追逐奖命中",
  "chat.activity.event.chaseWon.detail": "本局追逐奖已发放。",
  "chat.activity.event.achievementDetail": "因你的游玩而解锁。",
  "chat.activity.event.clanAchievementDetail": "与你的战队共同解锁。",
  "chat.activity.unavailableTitle": "活动记录暂不可用",
  "chat.activity.unavailableBody": "无法加载你的凭证。请稍后重新加载私密动态。",
  "chat.activity.retry": "重试",
  "chat.activity.emptyTitle": "这里暂时没有内容",
  "chat.activity.emptyBody": "已确认的卡包、投注、奖励、成就和战队操作会显示在这里。",
  "chat.unlock.eyebrow": "成就已解锁",
  "chat.unlock.clanEyebrow": "战队成就已解锁",
  "chat.unlock.dismiss": "关闭成就通知",
} as Record<string, string>;
