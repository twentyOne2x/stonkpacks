// Chinese, Traditional (繁體中文): Phase 2 quality pass over the Phase 1
// zh-Hant BASE: converted from this repo's zh-Hans segment with OpenCC
// (cn->twp: Taiwan phrase conventions, 軟體/資訊/網路/預設/影片/伺服器...)
// plus a manual Taiwan-usage pass (帳 not 賬, 台 not 臺, 綁定, 分頁, 倒數,
// 空白鍵, 亂數, 提領, 自訂, 底線, 「」quotes, ...). MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (same convention as the other non-EN
// locales). House terms are identical to zh-Hans (格子/卡包/押注/獎池/...).
// machine translation. Same key set as en/core.ts. See royaleI18n.ts for the
// {token} interpolation convention and the "no em dash" rule.
//
// House terms (kept in step with board.ts / misc.ts):
//   tile 格子 · pack 卡包 · back/stake 押注 · bet 下注 · bet size 投注額 ·
//   backer 押注者 · pool 獎池 · Chase 追逐獎 · jackpot 累積獎金 ·
//   receipt 憑證 · buyback 回購價 · sell back 回售 · settle 結算 ·
//   collection 收藏 · vault 金庫 · slab 評級卡 · odds 勝率.
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
  "settings.language": "語言",
  "settings.languageSectionAria": "語言設定",
  "settings.languageSearchPlaceholder": "搜尋語言",
  "settings.languageNoResults": "找不到符合的語言",
  "settings.languageHint": "即時生效。按名稱搜尋，或直接輸入篩選。",
  "settings.languageInputAria": "語言，搜尋並選擇",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "設定分組",
  "settings.searchPlaceholder": "搜尋設定",
  "settings.searchClear": "清除搜尋",
  "settings.searchResultsAria": "相符的設定",
  "settings.searchNoResults": "沒有與「{query}」相符的設定。試試你想調整的那一項的名稱。",
  "settings.backToGroups": "全部設定",
  "gear.cards.heading": "卡牌",
  "gear.cards.sectionAria": "卡牌設定",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "下注 {bids} · 最低 {amount}",
  "gear.section.summary.display": "彈窗 {popups} · 頭像 {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "音樂 {music} · 音效 {sfx}",
  "gear.section.summary.autosell": "已啟用 {count} 條自動出售規則",
  "gear.section.summary.hotkeys": "已設定 {count} 個下注快捷鍵",

  // --- Shared words --------------------------------------------------------
  "common.on": "開啟",
  "common.off": "關閉",
  "common.set": "設定",
  "common.clear": "清除",
  "common.tileLabel": "格子{n}",
  "common.tileShort": "T{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "投注",
  "gear.betting.sectionAria": "投注設定",
  "gear.betting.provider.label": "卡包供應商",
  "gear.betting.provider.automatic": "自動（優先 Collector Crypt）",
  "gear.betting.provider.hint": "自動模式會在 Collector Crypt 可用時優先使用它，並且只使用已驗證的備援供應商。指定供應商為嚴格選擇：若無法使用，投注會被拒絕。",
  "gear.betting.provider.automaticHint": "自動 · 優先 Collector Crypt",
  "gear.betting.provider.strictHint": "僅限 {provider} · 不備援",
  "gear.betting.provider.unavailable": "{provider}（無法使用）",
  "gear.betting.provider.selectedUnavailable": "{provider} 目前無法使用。嚴格投注會被拒絕，且不會替換成其他供應商。",
  "gear.betting.provider.actual": "由 {provider} 完成",
  "gear.betting.provider.accepted": "由 {provider} 接受",
  "gear.betting.disableBids.label": "停用投注",
  "gear.betting.disableBids.hint":
    "鎖住你的下注：點格子不再出錢，可以安心觀戰，也可以把螢幕交給別人，不怕誤觸。遊戲其他部分照常進行。",
  "gear.betting.minBid.label": "最低投注額",
  "gear.betting.minBid.hint":
    "單次點選的最小下注額。投注額不會低於這個數，快速連點也不會少下（最低$5，用於防止濫用）。",
  "gear.betting.upgradeCap.label": "升級費用上限",
  "gear.betting.upgradeCap.placeholder": "無限制",
  "gear.betting.upgradeCap.hint":
    "單次升級點選最多花多少錢。超過上限的升級會反灰，熱門格子不會不知不覺給你開出一張大帳單。",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "顯示",
  "gear.display.sectionAria": "顯示設定",
  "gear.display.chipFloats.label": "投注彈出提示",
  "gear.display.chipFloats.hint": "有人往格子上下注時，冒出「+$X·名字」的小氣泡。",
  "gear.display.floatThreshold.label": "隱藏小額投注",
  "gear.display.floatThreshold.placeholder": "顯示所有投注",
  "gear.display.floatThreshold.hint":
    "只有達到這個金額的投注才冒氣泡。清空（或設為$0）就全都顯示。小額投注一多時，棋盤會清爽很多。",
  "gear.display.hidePortraits.label": "隱藏玩家頭像",
  "gear.display.hidePortraits.hint": "隱去格子上其他玩家的頭像圓圈，你自己的標記照常顯示。",
  "gear.display.fullscreenLandscape.label": "橫向全螢幕",
  "gear.display.fullscreenLandscape.hint":
    "在手機上，橫向後的下一次點按會隱藏瀏覽器列。iPhone Safari 會將瀏覽器列收起；加入主畫面即可真正全螢幕。",
  "gear.display.replayTour.label": "再看一次歡迎導覽",
  "gear.display.replayTour.hint": "從第一步重新開啟歡迎導覽。",
  "gear.display.couch.label": "大字體（電視/沙發）",
  "gear.display.headerCollapse.label": "摺疊頂欄",
  "gear.display.headerCollapse.hint": "收起頂部列，讓牌桌和卡牌填滿螢幕。點擊頂欄的箭頭即可恢復。",
  "gear.display.couch.hint":
    "放大整個遊戲的閱讀文字：聊天、說明文件、標籤與金額，適合坐在沙發上遊玩。棋盤版面保持不變。在網址加上 ?couch=1 也可開啟。",
  "gear.display.couch.suggested": "這看起來像電視或遊戲主機的瀏覽器，大字體正適合這種螢幕。",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "開包揭示",
  "gear.reveals.sectionAria": "開包揭示設定",
  "gear.reveals.turbo.label": "極速揭示",
  "gear.reveals.turbo.hint":
    "快轉揭示演出，更快看到結果，關鍵時刻仍留足一拍。預設關閉，其他玩家看到的還是完整演出。",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "聲音",
  "gear.sound.sectionAria": "聲音設定",
  "gear.sound.sfx.label": "音效",
  "gear.sound.sfx.hint":
    "籌碼聲、開局與鎖定、獲勝轉盤、揭示演出的音效，全部在瀏覽器裡即時合成，不用載入任何素材。",
  "gear.sound.music.label": "音樂",
  "gear.sound.music.hint":
    "音樂跟著回合走：投注階段逐漸升溫，最後幾秒推到頂，揭示時落下來。首次點選或按鍵後開始播放，切到其他分頁就暫停。",
  "gear.sound.musicStyle.label": "音樂風格",
  "gear.sound.musicStyle.piano": "靜謐鋼琴",
  "gear.sound.musicStyle.snowmelt": "雪融",
  "gear.sound.musicStyle.hearthfire": "爐火",
  "gear.sound.musicStyle.grotto": "鎏金洞窟",
  "gear.sound.musicStyle.arcade": "街機疾馳",
  "gear.sound.musicStyle.kart": "卡丁車拉力",
  "gear.sound.musicStyle.galaxy": "星光華爾滋",
  "gear.sound.musicStyle.hint": "靜謐鋼琴柔和舒緩，街機疾馳明快急促。下一小節生效，回合中途切換也一樣。",
  "gear.sound.musicVolume.label": "音樂音量",
  "gear.sound.sfxVolume.label": "音效音量",
  "gear.sound.volume.label": "音量",
  "gear.sound.volume.aria": "總音量",
  "gear.sound.volume.hint": "一個總音量同時控制音效與音樂。",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "自動出售規則",
  "gear.autosell.sectionAria": "自動出售規則",
  "gear.autosell.intro":
    "設定一次，之後每張符合條件的中獎卡片都會自動回售，不再跳出保留或出售的提示。不符合條件的照舊問你。",
  "gear.autosell.everyWin.label": "自動出售所有中獎卡片",
  "gear.autosell.everyWin.hint":
    "每張贏來的卡片一到手就按回購價兌現，不再跳出保留或出售的提示。Grail 絕不會被自動出售。這是一鍵開啟下方四個稀有度開關的快捷方式。",
  "gear.autosell.belowValue.label": "價值低於此金額時出售",
  "gear.autosell.placeholderOff": "關閉",
  "gear.autosell.rarity.label": "按稀有度出售",
  "gear.autosell.rarity.aria": "按稀有度自動出售",
  "gear.autosell.rarity.hint":
    "CollectorCrypt的稀有度分檔，取自每張卡片所在的機器。同一檔對應的價格區間因卡包而異，所以一張$200的卡片在某台機器裡算稀有，在更貴的機器裡就很普通。",
  "gear.autosell.nonVintage.label": "出售非年份卡",
  "gear.autosell.belowGrade.label": "評分低於此數值時出售",
  "gear.autosell.grader.label": "按評級機構出售",
  "gear.autosell.grader.hint":
    "勾住某個評級機構，就只自動出售它評分低於設定值的卡片；取消勾選，它名下的卡片全部自動出售；全部取消勾選，贏來的一切都自動出售。各家評分標準不同，所以下限各設各的。",
  "gear.autosell.grader.aria": "按評級機構自動出售",
  "gear.autosell.grader.keep": "保留",
  "gear.autosell.grader.sellAll": "全部出售",
  "gear.autosell.grader.other": "其他 / 未評級",
  "gear.autosell.grader.placeholderKeepAll": "全部保留",
  "gear.autosell.grader.placeholderSellAll": "全部出售",
  "gear.autosell.grader.ariaGradeSuffix": "低於此評分時出售",
  "gear.autosell.summaryActive": "已啟用：",
  "gear.autosell.summaryNone": "還沒有自動出售規則，每次中獎都會問你保留還是出售。",
  "gear.autosell.turnOffAll": "全部關閉",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "投注快捷鍵",
  "gear.hotkeys.sectionAria": "投注快捷鍵",
  "gear.hotkeys.intro":
    "按下格子對應的鍵，就用目前投注額下注，不必碰滑鼠。先點下面的按鍵位，再按你想綁定的鍵。兩個格子不能共用一個鍵，重新綁定會把它移過來。Esc取消，Backspace清除。",
  "gear.hotkeys.enabled.label": "數字鍵投注",
  "gear.hotkeys.enabled.hintOn": "投注階段快捷鍵生效，按下格子對應的鍵立刻下注。",
  "gear.hotkeys.enabled.hintOff": "快捷鍵已關閉，按格子的鍵不會下注。",
  "gear.hotkeys.enabled.hintUnset": "還沒決定。可以在這裡開啟，也可以在投注階段按下某個格子的鍵，再選「啟用」。",
  "gear.hotkeys.listAria": "各格子的投注快捷鍵",
  "gear.hotkeys.tileLabel": "格子{n}",
  "gear.hotkeys.pressKeyPrompt": "請按下一個鍵…",
  "gear.hotkeys.setKey": "設定按鍵",
  "gear.hotkeys.clear": "清除",
  "gear.hotkeys.ariaPressToBind": "按下一個鍵以綁定格子{n}",
  "gear.hotkeys.ariaShortcut": "格子{n}的快捷鍵是{key}，點選可重新綁定。",
  "gear.hotkeys.ariaNoShortcut": "格子{n}還沒有快捷鍵，點選即可設定。",
  "gear.hotkeys.ariaClearShortcut": "清除格子{n}的快捷鍵",
  "gear.hotkeys.unboundWarning": "{list}還沒設按鍵，在你設定之前，這些格子沒有鍵盤快捷鍵。",
  "gear.hotkeys.resetButton": "恢復預設設定",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "attn ROYALE 分區",
  "nav.board": "棋盤",
  "nav.results": "結果",
  "nav.rankingsFull": "排行榜",
  "nav.rankingsShort": "排行",
  "nav.collectionFull": "收藏",
  "nav.collectionShort": "卡片",
  "nav.profile": "個人資料",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "棋盤",
  "mobileNav.results": "結果",
  "mobileNav.ladder": "排行榜",
  "mobileNav.collection": "收藏",
  "mobileNav.profile": "個人資料",
  "mobileNav.docs": "文件",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome. The metrics rail is a fixed-width strip, so
  // every label there stays at 3 to 5 characters.
  "shell.route.aria": "attn ROYALE 實驗室",
  "shell.header.statusAria": "回合狀態",
  "shell.header.collapse": "隱藏頂欄",
  "shell.header.expand": "顯示頂欄",
  "shell.header.round": "回合 #{n}",
  "shell.header.turboTitle": "回合節奏加速",
  "shell.header.turboBadge": "極速",
  "shell.metrics.aria": "回合概覽",
  "shell.metrics.totalPool": "獎池總額",
  "shell.metrics.packsLive": "場上卡包",
  "shell.metrics.yourStake": "你的投注",
  "shell.metrics.selectedBet": "已選投注額",
  "shell.board.aria": "attn ROYALE 棋盤",
  "shell.board.label": "棋盤",
  "shell.board.phaseOpen": "點任意格子押注，投注額會自動湊成最划算的卡包組合",
  "shell.board.phaseLock": "已鎖定 · 卡包開啟中",
  "shell.board.phaseSettled": "回合已結算",
  "shell.board.metaOpen": "獎池{pool} · 3%注入追逐獎 · 鎖定時開包",
  "shell.board.metaClosed": "按可驗證的加權勝率，由一個格子贏下整個獎池。",
  "shell.board.reopenReveal": "↗ 重看揭示",
  "shell.connectNudge": "進入遊戲並存款，就能開始押注格子。回合在後台照常進行。",
  "shell.decision.cardFallback": "你的卡片",
  "shell.mobile.close": "關閉",
  "shell.mobile.chat": "聊天",
  "shell.mobile.chatOpenAria": "開啟牌桌聊天",
  "shell.mobile.chatCloseAria": "關閉牌桌聊天",
  "shell.mobile.cards": "卡片",
  "shell.mobile.cardsOpenAria": "開啟你的卡片，出售或提領",
  "shell.mobile.cardsCloseAria": "關閉你的卡片",
  "shell.mobile.players": "玩家",
  "shell.mobile.playersOpenAria": "開啟玩家榜，按投注額排序",
  "shell.mobile.playersCloseAria": "關閉玩家榜",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // runtime.rail.* - royaleRailCopy.ts (playable-USDC rail + prize modal).
  "runtime.rail.gameUsdc": "遊戲內USDC",
  "runtime.rail.privySessionCredit": "Privy 工作階段額度",
  "runtime.rail.houseCredit": "平台額度",
  "runtime.rail.connectPrivy": "連線 Privy 存入遊戲內USDC",
  "runtime.rail.privySession": "Privy 工作階段",
  "runtime.rail.depositAction": "存入 +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Privy 帳戶",
  "runtime.rail.house": "平台",
  "runtime.rail.depositReceipt": "憑證{id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "點任意卡包押注{amount}。每個格子也保留自己的 +{low} / +{high}。",
  "runtime.rail.sellBack": "回售 → 餘額 +{amount}",

  // runtime.recap.* - royaleSpectatorRecap.ts (spectator gallery rows).
  "runtime.recap.you": "你",
  "runtime.recap.topBacker": "最大押注者",
  "runtime.recap.topCardOutcome": "頭號卡片 · 保留或出售",
  "runtime.recap.backer": "押注者",
  "runtime.recap.cardWon": "贏得卡片",
  "runtime.recap.chaseLootReleased": "追逐獎戰利品已釋放",
  "runtime.recap.theChase": "追逐獎",
  "runtime.recap.sweptIntoVault": "已收進金庫",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "協議費用",
  "runtime.recap.soldBack": "已回售",
  "runtime.recap.intoSplit": "+{amount}計入分配",

  // runtime.xProfile.* - royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "X 連線暫不可用。",
  "runtime.xProfile.connected": "已連線",

  // runtime.sellBack.* - royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "未知卡片",

  // runtime.winShare.* - royaleWinShareModel.ts (share-card headline).
  "runtime.winShare.headlineWon": "贏得",
  "runtime.winShare.headlineGrailPull": "GRAIL 拆出",
  "runtime.winShare.headlineCardsWon": "贏得卡片",
  "runtime.winShare.cardInImage": "卡片見圖。",
  "runtime.winShare.receiptInImage": "憑證見圖。",

  // runtime.serverWallet.* - royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "提領通道目前離線，資金沒有變動。",
  "runtime.serverWallet.noSigner": "目前的登入沒有連線錢包簽名方，資金沒有變動。",
  "runtime.serverWallet.nonceUnavailable": "未能從伺服器取得提領授權nonce。",
  "runtime.serverWallet.signatureUnavailable": "錢包沒有回傳對提領nonce的簽名。",
  "runtime.serverWallet.boundaryLabel": "牌桌額度與伺服器錢包USDC是兩筆獨立餘額。",

  // runtime.video.* - royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "此瀏覽器不支援螢幕錄製。",
  "runtime.video.noRecorderFormat": "此瀏覽器沒有可用的 MediaRecorder 影片格式。",
  "runtime.video.canceled": "渲染已取消。",
  "runtime.video.unreachable": "連不上{url}的渲染服務。",
  "runtime.video.rejected": "渲染服務拒絕了這個回合：{detail}",
  "runtime.video.requestFailed": "渲染請求失敗（{status}）。",
  "runtime.video.noJobId": "渲染服務沒有回傳任務ID。",
  "runtime.video.lostJob": "渲染任務已遺失（{status}）。",
  "runtime.video.lostContact": "渲染途中與渲染服務失去聯絡。",
  "runtime.video.renderFailed": "渲染失敗：{error}。",
  "runtime.video.unknownError": "未知錯誤",
  "runtime.video.downloadFailed": "影片已產生，但未能下載下來。",
  "runtime.video.downloadHttpFailed": "影片已產生，但下載失敗（{status}）。",
  "runtime.video.emptyVideo": "渲染服務回傳了一段空影片。",
  "runtime.video.shareTagline": "抽取可驗證的卡包對決。來看這個回合：",

  // runtime.game.* - useRoyaleGame.ts (feed lines, written at event time).
  "runtime.game.roomLive": "房間已開。回合自動開始：開放{seconds}秒，然後揭示。",
  "runtime.game.chaseVault": "追逐獎金庫",
  "runtime.game.aTile": "某個格子",
  "runtime.game.aPack": "一個卡包",
  "runtime.game.theCard": "這張卡片",
  "runtime.game.collectedSplit": "回合{round} · 從分配中拿到{amount} USDC。",
  "runtime.game.chaseDropSplit": "回合{round} · 追逐獎在你的格子上砸下{award} · 你分到{amount} USDC。",
  "runtime.game.grailSecured": "Grail 已鎖定歸屬：{card}（{amount}）收進你的收藏。",
  "runtime.game.keptCard": "已保留{card}（{amount}）→ 收進你的收藏。",
  "runtime.game.soldCardSettle": "{card}已回售，得{amount} USDC（{value}的{pct}%）。",
  "runtime.game.roundVoidedRefund":
    "回合{round}作廢。沒有開包，也就沒有卡片價值抽取。你的{amount}投注已退回。",
  "runtime.game.roundVoidedAll":
    "回合{round}作廢。沒有開包，也就沒有卡片價值抽取。全部投注已退回。",
  "runtime.game.chaseFiredYours.one": "追逐獎觸發：{n}張卡片（{amount}）釋放到你的格子{tile}。",
  "runtime.game.chaseFiredYours.other": "追逐獎觸發：{n}張卡片（{amount}）釋放到你的格子{tile}。",
  "runtime.game.chaseFiredTable.one":
    "回合{round}追逐獎觸發：{award}外加{n}張卡片砸在{tile}上，由它的押注者分。",
  "runtime.game.chaseFiredTable.other":
    "回合{round}追逐獎觸發：{award}外加{n}張卡片砸在{tile}上，由它的押注者分。",
  "runtime.game.cardsAssigned.one": "{n}張卡片歸你（{amount}）→ 收藏。",
  "runtime.game.cardsAssigned.other": "{n}張卡片歸你（{amount}）→ 收藏。",
  "runtime.game.cardPoolsLive": "卡池已上線：{pools}個CollectorCrypt機器卡池，共{cards}張卡片。",
  "runtime.game.minBid": "最低投注額是{amount}。加碼後再試。",
  "runtime.game.resolveFailed": "本輪無法結算，因此未進行任何結算。下一輪正常開始。",
  "runtime.game.stakeRefused": "該投注額對{tile}來說過大。未扣款。請調低後再試。",
  "runtime.game.shortfallBack":
    "USDC不夠，無法用{amount}押注{tile}。你只有{held}。存款後繼續。",
  "runtime.game.shortfallNextPack":
    "USDC不夠，無法在{tile}上湊齊下一個卡包。需要{amount}，你只有{held}。存款後繼續。",
  "runtime.game.youBacked": "你用{amount}押注了{tile}。",
  "runtime.game.packCompleted": "你在{tile}上湊齊了下一個卡包（+{amount}）→ {tier}。",
  "runtime.game.soldToFundBid": "已出售{cards}換得{amount} USDC（CC回購價），用來下注。",
  "runtime.game.backedFunded": "已用{amount}押注{tile}（資金來自庫存卡片）。",
  "runtime.game.demoStakesRefunded":
    "試玩投注已清空：你點進去的{amount}已退回，從$0重新開始。",
  "runtime.game.demoStakesCleared": "試玩投注已清空：在你押注之前，每回合都從$0開始。",
  "runtime.game.deposited": "已向你的錢包存入{amount} USDC。",
  "runtime.game.referralBonus": "邀請獎勵已到帳：+{amount} USDC。",
  "runtime.game.signedAndSent": "已在{cluster}上簽名並發送{amount} USDC · 簽名{sig}…。",
  "runtime.game.signedNoBroadcast":
    "已在{cluster}上簽名{amount} USDC（{method}，未廣播上鏈）· 簽名{sig}…。",
  "runtime.game.soldCard": "已出售{card}，得{amount} USDC（回購價{pct}%）。",
} as Record<string, string>;
