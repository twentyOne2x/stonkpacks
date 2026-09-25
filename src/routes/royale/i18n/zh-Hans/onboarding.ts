// Chinese, Simplified (简体中文): "onboarding" segment. Same key set as
// en/onboarding.ts. See royaleI18n.ts for the {token} interpolation convention
// and the "no em dash" rule. "attn ROYALE" is the wordmark and "Starter" is a
// pack-tier brand name: both stay in Latin script, including mid-sentence.
//
// Segment: onboarding (RoyaleOnboardingGate.tsx, RoyaleWelcomeTour.tsx,
// RoyaleRotateGate.tsx, RoyaleSettingsOverlay.tsx chrome, royaleProfile.ts
// validation reasons, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx, RoyaleFundShortfallToast.tsx).
export default {
  "onboarding.invite.medallionLabel": "邀请",
  "onboarding.invite.title": "仅限邀请",
  "onboarding.invite.ledeStake": "attn ROYALE 目前仅限邀请。输入邀请码即可领取{amount}本金，入座开玩。",
  "onboarding.invite.ledeStarter": "attn ROYALE 目前仅限邀请。输入邀请码即可免费领取{amount}的 Starter 卡包，入座开玩。",
  "onboarding.invite.inputPlaceholder": "邀请码",
  "onboarding.invite.inputAriaLabel": "邀请码",
  "onboarding.invite.unlockButton": "解锁",
  "onboarding.invite.hint": "还没有邀请码？找邀请你的人要，或粘贴你的{link}链接。",
  "onboarding.invite.errorInvalidCode": "请输入你收到的邀请码。",

  "onboarding.welcome.grantLabelCredit": "余额",
  "onboarding.welcome.grantLabelStarterPack": "Starter 卡包",
  "onboarding.welcome.titleBack": "欢迎回来",
  "onboarding.welcome.title": "欢迎入座",
  "onboarding.welcome.backLede": "{name}，接着上次继续。你的资料和余额都存在这台设备上。",
  "onboarding.welcome.fallbackName": "玩家",
  "onboarding.welcome.ledeStake": "凭邀请可领取{amount}本金。取个名字就能入座。",
  "onboarding.welcome.ledeStarter": "凭邀请可免费领取{amount}的 Starter 卡包。用卡包下注，入座开玩。",
  "onboarding.welcome.continueWithX": "使用X继续",
  "onboarding.welcome.optionalHint": "可选",
  "onboarding.welcome.connectWallet": "连接钱包",
  "onboarding.welcome.playFreeNote": "现在就能免费玩，不用钱包，也不用登录。",
  "onboarding.welcome.or": "或",
  "onboarding.welcome.continueAsTemplate": "以{name}的身份继续",
  "onboarding.welcome.fallbackProfileName": "你的资料",
  "onboarding.welcome.close": "关闭",
  "onboarding.welcome.createProfile": "创建你的资料",
  "onboarding.welcome.skipGuest": "跳过，以访客身份玩",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "立即游玩",
  "onboarding.welcome.pickNameFirst": "或先取个名字",

  "onboarding.profile.title": "设置你的资料",
  "onboarding.profile.xPhotoAlt": "你的X头像",
  "onboarding.profile.connectedAsTemplate": "已连接为{handle}",
  "onboarding.profile.xAccountFallback": "X账户",
  "onboarding.profile.walletLabelTemplate": "钱包{address}",
  "onboarding.profile.displayNameLabel": "显示名称",
  "onboarding.profile.displayNamePlaceholder": "该怎么称呼你？",
  "onboarding.profile.handleLabel": "用户名",
  "onboarding.profile.handlePlaceholder": "yourname",
  "onboarding.profile.handleHint": "你在牌桌上的唯一ID，只能用字母、数字和下划线。",
  "onboarding.profile.handleTaken": "这个用户名在本设备上已被占用。",
  "onboarding.profile.startButtonTemplate": "开始游戏 · 平台送{amount}",
  "onboarding.profile.back": "返回",
  "onboarding.profile.skip": "跳过",

  "onboarding.tour.ariaLabel": "attn ROYALE 玩法说明",
  "onboarding.tour.skip": "跳过",
  "onboarding.tour.step1.eyebrow": "01 · 押注一个格子",
  "onboarding.tour.step1.titleUsdc": "用USDC押注你看好的格子",
  "onboarding.tour.step1.titlePacks": "用卡包押注你看好的格子",
  "onboarding.tour.step1.bodyUsdc":
    "每个格子都是一个位置，用USDC押注它。押得越多，你在它奖金里的份额就越大。可以只押一个，也可以分散押几个。",
  "onboarding.tour.step1.bodyPacks":
    "每个格子都是一个位置，用卡包押注它。堆得越多，你在它奖金里的份额就越大。可以只押一个，也可以分散押几个。",
  "onboarding.tour.step2.eyebrow": "02 · 锁定与拆包",
  "onboarding.tour.step2.title": "锁定时，每个格子都拆开自己的卡包",
  "onboarding.tour.step2.body":
    "回合一锁定，每个被押注的格子都会拆开卡包，当着你的面实时拆出真实的评级卡片，全程抽取可验证。",
  "onboarding.tour.step3.eyebrow": "03 · 价值最高者胜",
  "onboarding.tour.step3.title": "最值钱的格子拿下奖池",
  "onboarding.tour.step3.bodyUsdc":
    "格子的权重 = 拆出卡片的价值 + 它的USDC。格子越重，胜率越高。赢了，就分整轮的奖池。",
  "onboarding.tour.step3.bodyPacks":
    "格子的权重 = 拆出卡片的价值 + 押在上面的卡包。格子越重，胜率越高。赢了，就分整轮的奖池。",
  "onboarding.tour.step4.eyebrow": "04 · 保留、出售、追逐",
  "onboarding.tour.step4.title": "变现，然后盯住追逐奖",
  "onboarding.tour.step4.body":
    "赢来的卡片可以当评级卡收着，也可以按回购价回售变现。追逐奖则是一个滚动累积的奖金，任意回合、任意格子都可能中。",
  "onboarding.tour.back": "返回",
  "onboarding.tour.next": "下一步",
  "onboarding.tour.enterBoard": "进入棋盘",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary
  // (格子, 卡包, 奖池, 回合, 押注).
  "onboarding.tour.stepTag": "第 {n} 步，共 {total} 步",
  "onboarding.tour.spot1.eyebrow": "你的注",
  "onboarding.tour.spot1.title": "挑一个卡包",
  "onboarding.tour.spot1.body": "你押的是卡包。每个都是装有评级 TCG 卡牌的未拆封卡包，由 Collector Crypt 支持。选好你想用来玩的卡包。",
  "onboarding.tour.spot2.eyebrow": "叠加数量",
  "onboarding.tour.spot2.title": "选好数量",
  "onboarding.tour.spot2.body": "这个计数器决定每次下注放几个卡包。开局一个就够。想押大一点时再调高。",
  "onboarding.tour.spot3.eyebrow": "下注",
  "onboarding.tour.spot3.title": "点击格子下注",
  "onboarding.tour.spot3.titleTouch": "点按格子下注",
  "onboarding.tour.spot3.body": "点击格子就把你的卡包押上去。同一格叠的卡包越多，赢时分成越大。可以全押一格，也可以分散几格。",
  "onboarding.tour.spot3.bodyTouch": "点按一次格子先选中，再点一次确认下注。同一格叠的卡包越多，赢时分成越大。",
  "onboarding.tour.spot4.eyebrow": "本回合",
  "onboarding.tour.spot4.title": "奖池与倒计时",
  "onboarding.tour.spot4.body": "棋盘上押出的每个卡包都会进入这个奖池。倒计时归零后下注锁定，每个被押的格子都会现场拆开自己的卡包。",
  "onboarding.tour.spot5.eyebrow": "开奖",
  "onboarding.tour.spot5.title": "越重的格子越常赢",
  "onboarding.tour.spot5.body": "一次按价值加权的随机抽签会选出一个格子。落败格子交出卡片和押注，获胜格子的押注者按各自投入比例瓜分本回合可分配价值。",
  "onboarding.tour.spot6.eyebrow": "你的资金",
  "onboarding.tour.spot6.title": "余额与充值",
  "onboarding.tour.spot6.body": "你的余额就在这里。用充值加钱，随时可以提现。回合结算后奖金立刻到账。",
  "onboarding.tour.spot7.eyebrow": "免费赠送",
  "onboarding.tour.spot7.title": "你的免费{amount} Starter 卡包",
  "onboarding.tour.spot7.body": "你有一个免费的{amount} Starter 卡包，已经装进选择器。挑一个格子，开玩吧。",
  "onboarding.tour.finish": "开始游戏",
 "onboarding.tour.paused": "回合即将开始 - 我们会在之后立即继续。",
  "onboarding.tour.act2.choice": "观看一回合展开",
  "onboarding.tour.act2.choiceHint": "约 30 秒，含开卡环节",
  "onboarding.tour.act2.bettingTitle": "所有押注的卡包汇成一个奖池",
  "onboarding.tour.act2.bettingBody": "玩家把卡包押在格子上。棋盘上的每个卡包都汇入同一个奖池，而只有一个格子会拿走全部。",
  "onboarding.tour.act2.drawTitle": "价值直接变成胜率",
  "onboarding.tour.act2.drawBody": "每个格子拆出卡片的价值占全部卡片总价值的比例，就是它的胜率。一次可验证、按价值加权的随机抽签选出获胜格子。",
  "onboarding.tour.act2.losersTitle": "每个落败格子都要交出卡片",
  "onboarding.tour.act2.losersBody": "全盘可分配的卡片和现金都转给获胜格子的押注者。",
  "onboarding.tour.act2.splitTitle": "你的押注决定你的分成",
  "onboarding.tour.act2.splitBody": "获胜格子的押注者按各自在该格子的投入比例，瓜分本回合来自所有格子的可分配现金和卡片。",
  "onboarding.tour.act2.grailCaption": "Grail 仪式",
  "onboarding.tour.act2.yourTurnEyebrow": "轮到你了",
  "onboarding.tour.act2.yourTurnTitle": "你的 Starter pack 已准备好",
  "onboarding.tour.act2.yourTurnBody": "棋盘再次实时运行。选择一个格子，放下你的第一份 pack 下注。",
  "onboarding.tour.act2.continue": "进入回合",

  "onboarding.rotate.ariaLabel": "旋转手机以游玩 attn ROYALE",
  "onboarding.rotate.title": "请把手机横过来",
  "onboarding.rotate.body": "棋盘横屏体验最佳，转过来即可进入回合。",

  "onboarding.settingsTitle": "设置",
  "onboarding.settingsClose": "关闭设置",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  "onboarding.profileValidation.handleRequired": "取个用户名，方便其他玩家找到你。",
  "onboarding.profileValidation.handleTooShort": "用户名至少3个字符。",
  "onboarding.profileValidation.handleCharset": "只能使用字母、数字和下划线。",
  "onboarding.profileValidation.nameRequired": "填一个在牌桌上显示的名字。",
  "onboarding.profileValidation.nameTooLong": "请控制在{n}个字符以内。",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  "onboarding.presence.tierWatching": "观战中",
  "onboarding.presence.tierPlaying": "游戏中",
  "onboarding.presence.youPlaying": "你在局中：本回合押了{amount}",
  "onboarding.presence.youWatching": "你在观战",
  "onboarding.presence.youWatchingBackground": "你在观战（后台标签页）",
  "onboarding.presence.ariaLabel": "此刻有{count}人在 attn ROYALE {tier}。{you}。",
  "onboarding.presence.popYou": "你：{status}",
  "onboarding.presence.otherTabs.one": "另有{n}个你自己的标签页开着",
  "onboarding.presence.otherTabs.other": "另有{n}个你自己的标签页开着",
  "onboarding.presence.othersBacking.one": "本回合另有{n}人押注了格子",
  "onboarding.presence.othersBacking.other": "本回合另有{n}人押注了格子",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "attn ROYALE 数据流状态",
  "onboarding.streamHud.eyebrow": "数据流",
  "onboarding.streamHud.statusConnecting": "连接中",
  "onboarding.streamHud.statusLive": "实时",
  "onboarding.streamHud.statusReconnecting": "重连中",
  "onboarding.streamHud.statusError": "同步异常",
  "onboarding.streamHud.reconnects.one": "重连{n}次",
  "onboarding.streamHud.reconnects.other": "重连{n}次",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "本房间以USDC结算。",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "已开出的卡片",
  "onboarding.carousel.prevCard": "上一张",
  "onboarding.carousel.nextCard": "下一张",
  "onboarding.carousel.showCard": "显示{name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "USDC不足",
  "onboarding.fundShortfall.detail": "押注{slot}需要{needed}，你只有{balance}。",
  "onboarding.fundShortfall.addFunds": "去存款",
  "onboarding.fundShortfall.dismiss": "关闭",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "点按{icon}，再选择添加到主屏幕，即可真正全屏游玩。",
  "onboarding.installHint.fullscreen": "隐藏浏览器栏，全屏游玩。",
  "onboarding.installHint.fullscreenCta": "进入全屏",
  "onboarding.installHint.dismiss": "关闭",
} as Record<string, string>;
