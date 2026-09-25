// Chinese, Traditional (繁體中文): "onboarding" segment. Same key set as
// zh-Hant BASE: converted from this repo's zh-Hans segment with OpenCC
// (cn->twp: Taiwan phrase conventions, 軟體/資訊/網路/預設/影片/伺服器...)
// plus a manual Taiwan-usage pass (帳 not 賬, 台 not 臺, 綁定, 分頁, 倒數,
// 空白鍵, 亂數, 提領, 自訂, 底線, 「」quotes, ...). MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (same convention as the other non-EN
// locales). House terms are identical to zh-Hans (格子/卡包/押注/獎池/...).
// en/onboarding.ts. See royaleI18n.ts for the {token} interpolation convention
// and the "no em dash" rule. "attn ROYALE" is the wordmark and "Starter" is a
// pack-tier brand name: both stay in Latin script, including mid-sentence.
//
// Segment: onboarding (RoyaleOnboardingGate.tsx, RoyaleWelcomeTour.tsx,
// RoyaleRotateGate.tsx, RoyaleSettingsOverlay.tsx chrome, royaleProfile.ts
// validation reasons, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx, RoyaleFundShortfallToast.tsx).
export default {
  "onboarding.invite.medallionLabel": "邀請",
  "onboarding.invite.title": "僅限邀請",
  "onboarding.invite.ledeStake": "attn ROYALE 目前僅限邀請。輸入邀請碼即可領取{amount}本金，入座開玩。",
  "onboarding.invite.ledeStarter": "attn ROYALE 目前僅限邀請。輸入邀請碼即可免費領取{amount}的 Starter 卡包，入座開玩。",
  "onboarding.invite.inputPlaceholder": "邀請碼",
  "onboarding.invite.inputAriaLabel": "邀請碼",
  "onboarding.invite.unlockButton": "解鎖",
  "onboarding.invite.hint": "還沒有邀請碼？找邀請你的人要，或貼上你的{link}連結。",
  "onboarding.invite.errorInvalidCode": "請輸入你收到的邀請碼。",

  "onboarding.welcome.grantLabelCredit": "餘額",
  "onboarding.welcome.grantLabelStarterPack": "Starter 卡包",
  "onboarding.welcome.titleBack": "歡迎回來",
  "onboarding.welcome.title": "歡迎入座",
  "onboarding.welcome.backLede": "{name}，接著上次繼續。你的資料和餘額都存在這台裝置上。",
  "onboarding.welcome.fallbackName": "玩家",
  "onboarding.welcome.ledeStake": "憑邀請可領取{amount}本金。取個名字就能入座。",
  "onboarding.welcome.ledeStarter": "憑邀請可免費領取{amount}的 Starter 卡包。用卡包下注，入座開玩。",
  "onboarding.welcome.continueWithX": "使用X繼續",
  "onboarding.welcome.optionalHint": "可選",
  "onboarding.welcome.connectWallet": "連線錢包",
  "onboarding.welcome.playFreeNote": "現在就能免費玩，不用錢包，也不用登入。",
  "onboarding.welcome.or": "或",
  "onboarding.welcome.continueAsTemplate": "以{name}的身份繼續",
  "onboarding.welcome.fallbackProfileName": "你的資料",
  "onboarding.welcome.close": "關閉",
  "onboarding.welcome.createProfile": "建立你的資料",
  "onboarding.welcome.skipGuest": "跳過，以訪客身份玩",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "立即遊玩",
  "onboarding.welcome.pickNameFirst": "或先取個名字",

  "onboarding.profile.title": "設定你的資料",
  "onboarding.profile.xPhotoAlt": "你的X頭像",
  "onboarding.profile.connectedAsTemplate": "已連線為{handle}",
  "onboarding.profile.xAccountFallback": "X帳戶",
  "onboarding.profile.walletLabelTemplate": "錢包{address}",
  "onboarding.profile.displayNameLabel": "顯示名稱",
  "onboarding.profile.displayNamePlaceholder": "該怎麼稱呼你？",
  "onboarding.profile.handleLabel": "使用者名稱",
  "onboarding.profile.handlePlaceholder": "yourname",
  "onboarding.profile.handleHint": "你在牌桌上的唯一ID，只能用字母、數字和底線。",
  "onboarding.profile.handleTaken": "這個使用者名稱在本裝置上已被佔用。",
  "onboarding.profile.startButtonTemplate": "開始遊戲 · 平台送{amount}",
  "onboarding.profile.back": "返回",
  "onboarding.profile.skip": "跳過",

  "onboarding.tour.ariaLabel": "attn ROYALE 玩法說明",
  "onboarding.tour.skip": "跳過",
  "onboarding.tour.step1.eyebrow": "01 · 押注一個格子",
  "onboarding.tour.step1.titleUsdc": "用USDC押注你看好的格子",
  "onboarding.tour.step1.titlePacks": "用卡包押注你看好的格子",
  "onboarding.tour.step1.bodyUsdc":
    "每個格子都是一個位置，用USDC押注它。押得越多，你在它獎金裡的份額就越大。可以只押一個，也可以分散押幾個。",
  "onboarding.tour.step1.bodyPacks":
    "每個格子都是一個位置，用卡包押注它。堆得越多，你在它獎金裡的份額就越大。可以只押一個，也可以分散押幾個。",
  "onboarding.tour.step2.eyebrow": "02 · 鎖定與拆包",
  "onboarding.tour.step2.title": "鎖定時，每個格子都拆開自己的卡包",
  "onboarding.tour.step2.body":
    "回合一鎖定，每個被押注的格子都會拆開卡包，當著你的面即時拆出真實的評級卡片，全程抽取可驗證。",
  "onboarding.tour.step3.eyebrow": "03 · 價值最高者勝",
  "onboarding.tour.step3.title": "最值錢的格子拿下獎池",
  "onboarding.tour.step3.bodyUsdc":
    "格子的權重 = 拆出卡片的價值 + 它的USDC。格子越重，勝率越高。贏了，就分整輪的獎池。",
  "onboarding.tour.step3.bodyPacks":
    "格子的權重 = 拆出卡片的價值 + 押在上面的卡包。格子越重，勝率越高。贏了，就分整輪的獎池。",
  "onboarding.tour.step4.eyebrow": "04 · 保留、出售、追逐",
  "onboarding.tour.step4.title": "變現，然後盯住追逐獎",
  "onboarding.tour.step4.body":
    "贏來的卡片可以當評級卡收著，也可以按回購價回售變現。追逐獎則是一個滾動累積的獎金，任意回合、任意格子都可能中。",
  "onboarding.tour.back": "返回",
  "onboarding.tour.next": "下一步",
  "onboarding.tour.enterBoard": "進入棋盤",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary
  // (格子, 卡包, 獎池, 回合, 押注; Taiwan conventions).
  "onboarding.tour.stepTag": "第 {n} 步，共 {total} 步",
  "onboarding.tour.spot1.eyebrow": "你的注",
  "onboarding.tour.spot1.title": "挑一個卡包",
  "onboarding.tour.spot1.body": "你押的是卡包。每個都是裝有評級 TCG 卡牌的未拆封卡包，由 Collector Crypt 支持。選好你想用來玩的卡包。",
  "onboarding.tour.spot2.eyebrow": "疊加數量",
  "onboarding.tour.spot2.title": "選好數量",
  "onboarding.tour.spot2.body": "這個計數器決定每次下注放幾個卡包。開局一個就夠。想押大一點時再調高。",
  "onboarding.tour.spot3.eyebrow": "下注",
  "onboarding.tour.spot3.title": "點擊格子下注",
  "onboarding.tour.spot3.titleTouch": "點按格子下注",
  "onboarding.tour.spot3.body": "點擊格子就把你的卡包押上去。同一格疊的卡包越多，贏時分成越大。可以全押一格，也可以分散幾格。",
  "onboarding.tour.spot3.bodyTouch": "點按一次格子先選取，再點一次確認下注。同一格疊的卡包越多，贏時分成越大。",
  "onboarding.tour.spot4.eyebrow": "本回合",
  "onboarding.tour.spot4.title": "獎池與倒數",
  "onboarding.tour.spot4.body": "棋盤上押出的每個卡包都會進入這個獎池。倒數歸零後下注鎖定，每個被押的格子都會現場拆開自己的卡包。",
  "onboarding.tour.spot5.eyebrow": "開獎",
  "onboarding.tour.spot5.title": "越重的格子越常贏",
  "onboarding.tour.spot5.body": "一次按價值加權的隨機抽籤會選出一個格子。落敗格子交出卡片和押注，獲勝格子的押注者按各自投入比例瓜分本回合可分配價值。",
  "onboarding.tour.spot6.eyebrow": "你的資金",
  "onboarding.tour.spot6.title": "餘額與儲值",
  "onboarding.tour.spot6.body": "你的餘額就在這裡。用儲值加錢，隨時可以提領。回合結算後獎金立刻到帳。",
  "onboarding.tour.spot7.eyebrow": "免費贈送",
  "onboarding.tour.spot7.title": "你的免費{amount} Starter 卡包",
  "onboarding.tour.spot7.body": "你有一個免費的{amount} Starter 卡包，已經裝進選擇器。挑一個格子，開玩吧。",
  "onboarding.tour.finish": "開始遊戲",
 "onboarding.tour.paused": "回合即將開始 - 我們會在之後立即繼續。",
  "onboarding.tour.act2.choice": "觀看一回合展開",
  "onboarding.tour.act2.choiceHint": "約 30 秒，含開卡環節",
  "onboarding.tour.act2.bettingTitle": "所有押注的卡包匯成一個獎池",
  "onboarding.tour.act2.bettingBody": "玩家把卡包押在格子上。棋盤上的每個卡包都匯入同一個獎池，而只有一個格子會拿走全部。",
  "onboarding.tour.act2.drawTitle": "價值直接變成勝率",
  "onboarding.tour.act2.drawBody": "每個格子拆出卡片的價值占全部卡片總價值的比例，就是它的勝率。一次可驗證、按價值加權的隨機抽籤選出獲勝格子。",
  "onboarding.tour.act2.losersTitle": "每個落敗格子都要交出卡片",
  "onboarding.tour.act2.losersBody": "全盤可分配的卡片和現金都轉給獲勝格子的押注者。",
  "onboarding.tour.act2.splitTitle": "你的押注決定你的分成",
  "onboarding.tour.act2.splitBody": "獲勝格子的押注者按各自在該格子的投入比例，瓜分本回合來自所有格子的可分配現金和卡片。",
  "onboarding.tour.act2.grailCaption": "Grail 儀式",
  "onboarding.tour.act2.yourTurnEyebrow": "輪到你了",
  "onboarding.tour.act2.yourTurnTitle": "你的 Starter pack 已準備好",
  "onboarding.tour.act2.yourTurnBody": "棋盤再次即時運行。選一格，放下你的第一份 pack 投注。",
  "onboarding.tour.act2.continue": "進入回合",

  "onboarding.rotate.ariaLabel": "旋轉手機以遊玩 attn ROYALE",
  "onboarding.rotate.title": "請把手機橫過來",
  "onboarding.rotate.body": "棋盤橫向體驗最佳，轉過來即可進入回合。",

  "onboarding.settingsTitle": "設定",
  "onboarding.settingsClose": "關閉設定",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  "onboarding.profileValidation.handleRequired": "取個使用者名稱，方便其他玩家找到你。",
  "onboarding.profileValidation.handleTooShort": "使用者名稱至少3個字元。",
  "onboarding.profileValidation.handleCharset": "只能使用字母、數字和底線。",
  "onboarding.profileValidation.nameRequired": "填一個在牌桌上顯示的名字。",
  "onboarding.profileValidation.nameTooLong": "請控制在{n}個字元以內。",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  "onboarding.presence.tierWatching": "觀戰中",
  "onboarding.presence.tierPlaying": "遊戲中",
  "onboarding.presence.youPlaying": "你在局中：本回合押了{amount}",
  "onboarding.presence.youWatching": "你在觀戰",
  "onboarding.presence.youWatchingBackground": "你在觀戰（背景分頁）",
  "onboarding.presence.ariaLabel": "此刻有{count}人在 attn ROYALE {tier}。{you}。",
  "onboarding.presence.popYou": "你：{status}",
  "onboarding.presence.otherTabs.one": "另有{n}個你自己的分頁開著",
  "onboarding.presence.otherTabs.other": "另有{n}個你自己的分頁開著",
  "onboarding.presence.othersBacking.one": "本回合另有{n}人押注了格子",
  "onboarding.presence.othersBacking.other": "本回合另有{n}人押注了格子",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "attn ROYALE 資料流狀態",
  "onboarding.streamHud.eyebrow": "資料流",
  "onboarding.streamHud.statusConnecting": "連線中",
  "onboarding.streamHud.statusLive": "即時",
  "onboarding.streamHud.statusReconnecting": "重連中",
  "onboarding.streamHud.statusError": "同步異常",
  "onboarding.streamHud.reconnects.one": "重連{n}次",
  "onboarding.streamHud.reconnects.other": "重連{n}次",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "本房間以USDC結算。",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "已開出的卡片",
  "onboarding.carousel.prevCard": "上一張",
  "onboarding.carousel.nextCard": "下一張",
  "onboarding.carousel.showCard": "顯示{name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "USDC不足",
  "onboarding.fundShortfall.detail": "押注{slot}需要{needed}，你只有{balance}。",
  "onboarding.fundShortfall.addFunds": "去存款",
  "onboarding.fundShortfall.dismiss": "關閉",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "點按{icon}，再選擇加入主畫面，即可真正全螢幕遊玩。",
  "onboarding.installHint.fullscreen": "隱藏瀏覽器列，全螢幕遊玩。",
  "onboarding.installHint.fullscreenCta": "進入全螢幕",
  "onboarding.installHint.dismiss": "關閉",
} as Record<string, string>;
