// i18n dictionary - "chat" segment (Chinese, Traditional / 繁體中文).
// zh-Hant BASE: converted from this repo's zh-Hans segment with OpenCC
// (cn->twp: Taiwan phrase conventions, 軟體/資訊/網路/預設/影片/伺服器...)
// plus a manual Taiwan-usage pass (帳 not 賬, 台 not 臺, 綁定, 分頁, 倒數,
// 空白鍵, 亂數, 提領, 自訂, 底線, 「」quotes, ...). MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (same convention as the other non-EN
// locales). House terms are identical to zh-Hans (格子/卡包/押注/獎池/...).
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
  "chat.rooms.table": "大廳",
  "chat.rooms.sendTo": "傳送至",
  "chat.rooms.joinHint": "在一個格子下注即可解鎖對應房間。",
  "chat.rooms.messageTargets": "訊息房間",
  "chat.composer.sendFailed": "訊息傳送失敗，請再試一次。",
  "chat.composer.audienceChanged": "聊天室已變更，未傳送的訊息已清除。",
  "chat.composer.sessionUnavailable": "聊天工作階段無法使用，請重新整理後再試。",
  "chat.auth.tileLeadBold": "投注一個格子後即可聊天",
  "chat.auth.tileBody": "。首個卡包獲接受後，將解鎖桌面和格子聊天室。",
  "chat.auth.sessionUnavailableBold": "聊天工作階段無法使用",
  "chat.auth.sessionUnavailableBody": "。請重新整理以恢復安全傳送。",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "牌桌聊天",
  "chat.header.title": "牌桌聊天",
  "chat.header.fontControlAriaLabel": "聊天文字大小",
  "chat.header.fontSmaller": "縮小聊天文字",
  "chat.header.fontLarger": "放大聊天文字",
  "chat.header.collapseShow": "顯示聊天",
  "chat.header.collapseHide": "隱藏聊天",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "GRAIL 拆出",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "回合 #{roundId}",
  "chat.event.ariaOpensResult": "{tag}：{text}。將在新分頁中開啟本輪結果。",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "歸屬",
  "chat.event.wonBy": "歸屬 {name}",
  "chat.event.foldedIntoPot": "併入獎池",
  "chat.event.roundWinsTitle": "{tile} 贏得 {pot}",
  "chat.event.bestPull": "最佳拆出 {name}（{value}）",
  "chat.event.chaseAward": "追逐獎 +{amount}",
  "chat.event.youWon": "你 +{amount}",
  "chat.event.youLost": "你輸了",
  "chat.message.showOriginal": "已翻譯 · 查看原文",
  "chat.message.showTranslation": "查看翻譯",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "跳到最新",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "這裡只會顯示 attn 連結。",
  "chat.composer.rateLimitNotice": "發得有點快，稍等一下再發。",
  "chat.composer.placeholder": "說點什麼…",
  "chat.composer.inputAriaLabel": "聊天訊息",
  "chat.composer.sendAriaLabel": "傳送訊息",
  "chat.composer.sendLabel": "傳送",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "登入後即可聊天",
  "chat.auth.body": "，在右上角連線帳戶之前，聊天室只能看不能發。",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "在新分頁中開啟卡片頁面",
  "chat.messageBody.cardEmbedAriaLabel": "{name}，{value}。將在背景分頁中開啟卡片頁面。",
  "chat.messageBody.viewCard": "檢視卡片",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "卡片頁面",
  "chat.link.roundResult": "回合結果",
  "chat.link.profile": "個人資料",
  "chat.link.collection": "收藏",
  "chat.link.theBoard": "棋盤",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "3號格子漲得好快",
  "chat.chatter.line02": "誰一直在偷襲領先格子啊",
  "chat.chatter.line03": "上一輪那張 Grail 拆得真離譜",
  "chat.chatter.line04": "穩了，大家都上車押領先格子",
  "chat.chatter.line05": "感覺7號格子被低估了",
  "chat.chatter.line06": "卡包留到最後五秒再說",
  "chat.chatter.line07": "有人剛往2號格子砸了$250，太狂了",
  "chat.chatter.line08": "6號格子的獎池佔比現在貴得離譜",
  "chat.chatter.line09": "再加一個卡包，那格子就能升檔了",
  "chat.chatter.line10": "狙擊黨又在毀我的勝率",
  "chat.chatter.line11": "我一直拆到底價卡，也該來張大的了",
  "chat.chatter.line12": "盯緊那條大戶，他每次都押中獲勝格子",
  "chat.chatter.line13": "1號格子這一整場都沒中過，該輪到它了",
  "chat.chatter.line14": "上把拆的卡秒回售了，回購價挺佛心",
  "chat.chatter.line15": "反狙擊馬上來，記好了",
  "chat.chatter.line16": "最後十秒領先格子換了兩次",
  "chat.chatter.line17": "今晚還有人在衝 Mythic 這一檔嗎",
  "chat.chatter.line18": "卡留下了，畫面太好看捨不得賣",
  "chat.chatter.line19": "臨門加的卡包不會重置倒數，這點好評",
  "chat.chatter.line20": "8號格子的獎池剛翻倍，有情況",
  "chat.chatter.line21": "前期小包後期大包，只能這麼玩",
  "chat.chatter.line22": "保留還是出售那個倒數每次都坑我",
  "chat.chatter.line23": "現在看，追趕的幾個格子比領先格子更划算",
  "chat.chatter.line24": "5號格子這波狙擊太精準了",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "牌桌輔助面板",
  "chat.surface.chat": "聊天",
  "chat.surface.activity": "我的活動",
  "chat.activity.ariaLabel": "我的私人活動",
  "chat.activity.filtersAria": "篩選活動",
  "chat.activity.filter.all": "全部",
  "chat.activity.filter.packs": "卡包",
  "chat.activity.filter.bids": "投注",
  "chat.activity.filter.rewards": "獎勵",
  "chat.activity.filter.feats": "成就",
  "chat.activity.filter.clan": "戰隊",
  "chat.activity.today": "今天",
  "chat.activity.yesterday": "昨天",
  "chat.activity.status.pending": "待處理",
  "chat.activity.status.finalized": "已確認",
  "chat.activity.status.reversed": "已撤銷",
  "chat.activity.finalizedAria": "已確認憑證",
  "chat.activity.signInTitle": "登入後查看歷史記錄",
  "chat.activity.signInBody": "你的卡包、投注、獎勵、成就和戰隊憑證只會顯示在這裡。",
  "chat.activity.loading": "正在載入你的憑證",
  "chat.activity.loadOlder": "載入更早記錄",
  "chat.activity.points": "{points} 點",
  "chat.activity.event.packBid.title": "卡包已投入",
  "chat.activity.event.packBid.detail": "已確認投入{tile}號格子。",
  "chat.activity.event.roundWon.title": "獲勝格子",
  "chat.activity.event.roundWon.detail": "{tile}號格子贏得了本局。",
  "chat.activity.event.roundLost.title": "本輪已結算",
  "chat.activity.event.roundLost.detail": "{tile}號格子未贏得本局。",
  "chat.activity.event.roundRefunded.title": "卡包已退款",
  "chat.activity.event.roundRefunded.detail": "{tile}號格子的投注已退回。",
  "chat.activity.event.chaseWon.title": "追逐獎命中",
  "chat.activity.event.chaseWon.detail": "本局追逐獎已發放。",
  "chat.activity.event.achievementDetail": "因你的遊玩而解鎖。",
  "chat.activity.event.clanAchievementDetail": "與你的戰隊共同解鎖。",
  "chat.activity.unavailableTitle": "活動記錄暫時無法使用",
  "chat.activity.unavailableBody": "無法載入你的憑證。請稍後重新載入私人動態。",
  "chat.activity.retry": "再試一次",
  "chat.activity.emptyTitle": "這裡暫時沒有內容",
  "chat.activity.emptyBody": "已確認的卡包、投注、獎勵、成就和戰隊操作會顯示在這裡。",
  "chat.unlock.eyebrow": "成就已解鎖",
  "chat.unlock.clanEyebrow": "戰隊成就已解鎖",
  "chat.unlock.dismiss": "關閉成就通知",
} as Record<string, string>;
