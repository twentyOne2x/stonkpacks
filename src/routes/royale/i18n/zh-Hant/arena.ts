// Chinese, Traditional (繁體中文): "arena" segment - every user-visible string
// zh-Hant BASE: converted from this repo's zh-Hans segment with OpenCC
// (cn->twp: Taiwan phrase conventions, 軟體/資訊/網路/預設/影片/伺服器...)
// plus a manual Taiwan-usage pass (帳 not 賬, 台 not 臺, 綁定, 分頁, 倒數,
// 空白鍵, 亂數, 提領, 自訂, 底線, 「」quotes, ...). MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (same convention as the other non-EN
// locales). House terms are identical to zh-Hans (格子/卡包/押注/獎池/...).
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
  "arena.common.card": "張卡",
  "arena.common.cards": "張卡",
  "arena.matchLabel": "對局 #{n}",
  "arena.pageTitle": "卡牌競技場",
  "arena.backToBoard": "← 返回棋盤",

  "arena.rail.ariaLabel": "你的收藏",
  "arena.rail.heading": "你的收藏",
  "arena.rail.practiceNote": "練習卡組。在棋盤上贏下回合，就能用你自己的卡片填滿這裡。",
  "arena.rail.emptyNote": "手上沒有卡片。贏下獎池就能拿回你的份額。",
  "arena.rail.enterWheel": "進入轉盤",
  "arena.rail.armSnipe": "預備狙擊",
  "arena.rail.hint": "雙擊卡片即可下注，或選中卡片後點「進入轉盤」。空白鍵選中，A鍵預備狙擊。",

  "arena.railCard.armedSuffix": "已預備狙擊。",
  "arena.railCard.hint": "空白鍵選中，A鍵預備狙擊。雙擊可把它下注進競技場。",
  "arena.railCard.armedTag": "已預備",

  "arena.snipe.trayHeading": "狙擊已就緒",
  "arena.snipe.disarm": "取消狙擊",
  "arena.snipe.firesAt": "倒數2秒時觸發",
  "arena.snipe.carries": "會延續到下一場對局",

  "arena.board.sectionAriaLabel": "競技場轉盤",
  "arena.board.noCap": "卡片數量沒有上限，唯一的限制是時間。",
  "arena.board.wheelDecides": "轉盤說了算",
  "arena.board.nextMatchLabel": "下一場對局倒數",
  "arena.board.potLabel": "獎池",
  "arena.board.wheelAriaEnter": "將已選中的{count}{cardWord}投入轉盤",
  "arena.board.wheelAriaIdle": "轉盤。從你的收藏裡選卡片投進去。",
  "arena.board.youWin": "你贏了",
  "arena.board.nameWins": "{name} 獲勝",
  "arena.board.emptyWheelNote": "轉盤已開啟。押的是卡片，不是現金：你的價值佔比決定弧長和勝率。追逐獎抽成為 0%。協議方按整張卡執行 7% 費用規則；獲勝者獲得其餘所有卡片。",
  "arena.board.tableHint": "你投進去的卡片按價值佔比呈現在轉盤上，弧長就是你的勝率。",
  "arena.board.resultsLink": "檢視上一輪結果 →",

  "arena.clock.locked": "已鎖定",
  "arena.clock.settled": "已結算",
  "arena.clock.locksIn": "鎖定倒數",
  "arena.countdown.secondsSuffix": "秒",

  "arena.cinema.closeAriaLabel": "關閉劇場",
  "arena.cinema.closeTitle": "關閉（Esc）",
  "arena.cinema.beatCopy.contestants": "參賽者",
  "arena.cinema.beatCopy.spin": "旋轉",
  "arena.cinema.beatCopy.settle": "結算",
  "arena.cinema.beatCopyShort.contestants": "玩家",
  "arena.cinema.beatCopyShort.spin": "旋轉",
  "arena.cinema.beatCopyShort.settle": "結算",
  "arena.cinema.contestantsAriaLabel": "參賽者",
  "arena.cinema.contestantsHeadline": "參賽者",
  "arena.cinema.oddsToWin": "勝率 {pct}%",
  "arena.cinema.hintContestants": "轉盤說了算，點選立即旋轉。",
  "arena.cinema.spinAriaLabel": "轉盤旋轉",
  "arena.cinema.lockedOn": "已鎖定",
  "arena.cinema.hintSpin": "點選可跳過旋轉。",
  "arena.cinema.settleAriaLabel": "結算",
  "arena.cinema.winnerTag": "獲勝者",
  "arena.cinema.youTakePot": "你贏得了獎池",
  "arena.cinema.takesPot": "贏得獎池",
  "arena.cinema.shelfWinner": "歸獲勝者",
  "arena.cinema.shelfChase": "追逐獎",
  "arena.cinema.shelfProtocol": "協議方",
  "arena.cinema.smallPotNote": "追逐獎不抽成。協議方的 7% 規則選中了 {count} 張{cardWord}；獲勝者獲得其餘所有卡片。",
  "arena.cinema.resultsLink": "檢視上一輪結果",
  "arena.cinema.hintSettle": "點選任意位置返回競技場。",
  "arena.cinema.barToWinner": "{value} · {count}{cardWord}歸獲勝者",
  "arena.cinema.barOpen": "{value} · {count}{cardWord}",

  "arena.doubleBid.title": "雙擊自動下注？",
  "arena.doubleBid.body": "雙擊收藏裡的卡片，就能直接把它下注進競技場。要開啟嗎？",
  "arena.doubleBid.enable": "啟用",
  "arena.doubleBid.dismiss": "暫不",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "正在連線 CARD ARENA",
  "arena.backend.loadingBody": "正在檢查 Arena 的線上版本與你的玩家工作階段…",
  "arena.backend.loadingCollection": "正在檢查你的收藏…",
  "arena.backend.mainnetPreparingTitle": "MAINNET ARENA 已連線",
  "arena.backend.mainnetPreparingBody": "這一精確的唯讀版本運作正常。資金、卡牌取得、入場、抽籤和結算仍處於停用狀態。",
  "arena.backend.mainnetPreparingCollection": "尚未購買或移動任何 Mainnet 卡牌。在另行授權的庫存準備就緒前，Arena 將維持唯讀。",
  "arena.backend.mainnetRelease": "版本 {commit} · 部署 {deployment} · 簽名、廣播、效果和重複均為零",
  "arena.backend.unavailableTitle": "CARD ARENA 正在更新",
  "arena.backend.unavailableBody": "在這一版本就緒之前暫停入場。你的卡牌沒有變動。",
  "arena.backend.unavailableCollection": "Arena 更新期間無法檢視收藏。",
  "arena.backend.connectTitle": "連線後開始遊戲",
  "arena.backend.connectBody": "載入與供應商綁定的卡牌並進入轉盤，需要一個已驗證的 Privy 工作階段。",
  "arena.backend.connectCollection": "連線你的玩家工作階段以載入卡牌。",
  "arena.backend.retry": "重試",
} as Record<string, string>;
