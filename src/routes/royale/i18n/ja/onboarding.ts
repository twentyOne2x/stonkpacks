// Japanese (日本語): "onboarding" segment. Same key set as en/onboarding.ts,
// reviewed by a native speaker rather than machine translated. See
// royaleI18n.ts for the {token} interpolation convention and the "no em dash"
// rule. "Starter" is a pack-tier brand name and stays in Latin script (see
// docs.ts precedent: "Starterパック1つ分の無料残高").
//
// REGISTER: polite (です・ます) throughout; tour eyebrows and button labels
// stay in the short noun style.
//
// Terminology (shared with board.ts / docs.ts): back (verb) -> 支援する,
// bet -> ベット, graded -> 鑑定済み (matches docs.how.whatIsPack.a and
// misc.cardDetail.theGrader 鑑定機関), Chase -> チェイス, the "You" badge ->
// 自分.
//
// Segment: onboarding (RoyaleOnboardingGate.tsx, RoyaleWelcomeTour.tsx,
// RoyaleRotateGate.tsx, RoyaleSettingsOverlay.tsx chrome, royaleProfile.ts
// validation, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx, RoyaleFundShortfallToast.tsx).
export default {
  "onboarding.invite.medallionLabel": "招待",
  "onboarding.invite.title": "招待制",
  "onboarding.invite.ledeStake": "attn ROYALEは現在招待制です。コードを入力して{amount}のベット資金を受け取り、席に着きましょう。",
  "onboarding.invite.ledeStarter": "attn ROYALEは現在招待制です。コードを入力して無料の{amount} Starterパックを受け取り、席に着きましょう。",
  "onboarding.invite.inputPlaceholder": "招待コード",
  "onboarding.invite.inputAriaLabel": "招待コード",
  "onboarding.invite.unlockButton": "アンロック",
  "onboarding.invite.hint": "コードがない場合は、招待してくれた人に聞くか、{link}のリンクを貼ってください。",
  "onboarding.invite.errorInvalidCode": "招待状に記載のコードを入力してください。",

  "onboarding.welcome.grantLabelCredit": "残高",
  // The space is LOAD-BEARING, not a typo (round-9 QA loop, 2026-07-25): this
  // label renders inside the welcome medallion, a fixed 78px gold seal that
  // wraps its label onto a second line in every locale by design ("STARTER /
  // PACK" in en). Without a break opportunity the Japanese ran as one 11-char
  // token and broke MID-WORD into an orphan "ク" on line 2, hanging off the
  // bottom of the seal. ko ("Starter 팩") and zh-Hans ("Starter 卡包") already
  // carry the same separator; ja was the only locale missing it.
  "onboarding.welcome.grantLabelStarterPack": "Starter パック",
  "onboarding.welcome.titleBack": "おかえりなさい",
  "onboarding.welcome.title": "テーブルへようこそ",
  "onboarding.welcome.backLede": "{name}さん、続きから再開しましょう。プロフィールと残高はこの端末に保存されています。",
  "onboarding.welcome.fallbackName": "プレイヤー",
  "onboarding.welcome.ledeStake": "招待特典として{amount}のベット資金を受け取れます。名前を設定して席に着きましょう。",
  "onboarding.welcome.ledeStarter": "招待特典として無料の{amount} Starterパックを受け取れます。パックをベットして席に着きましょう。",
  "onboarding.welcome.continueWithX": "Xで続ける",
  "onboarding.welcome.optionalHint": "任意",
  "onboarding.welcome.connectWallet": "ウォレットを接続",
  "onboarding.welcome.playFreeNote": "今すぐ無料でプレイできます。ウォレットもサインインも不要です。",
  "onboarding.welcome.or": "または",
  "onboarding.welcome.continueAsTemplate": "{name}として続ける",
  "onboarding.welcome.fallbackProfileName": "自分のプロフィール",
  "onboarding.welcome.close": "閉じる",
  "onboarding.welcome.createProfile": "プロフィールを作成",
  "onboarding.welcome.skipGuest": "スキップしてゲストでプレイ",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "今すぐプレイ",
  "onboarding.welcome.pickNameFirst": "先に名前を決める",

  "onboarding.profile.title": "プロフィールを設定",
  "onboarding.profile.xPhotoAlt": "自分のXプロフィール写真",
  "onboarding.profile.connectedAsTemplate": "{handle}として接続済み",
  "onboarding.profile.xAccountFallback": "Xアカウント",
  "onboarding.profile.walletLabelTemplate": "ウォレット {address}",
  "onboarding.profile.displayNameLabel": "表示名",
  "onboarding.profile.displayNamePlaceholder": "何とお呼びしましょうか？",
  "onboarding.profile.handleLabel": "ハンドル名",
  "onboarding.profile.handlePlaceholder": "yourname",
  "onboarding.profile.handleHint": "テーブルでの一意のIDです。半角英数字とアンダースコアが使えます。",
  "onboarding.profile.handleTaken": "そのハンドル名はこの端末ですでに使用されています。",
  "onboarding.profile.startButtonTemplate": "プレイ開始・{amount}を無料プレゼント",
  "onboarding.profile.back": "戻る",
  "onboarding.profile.skip": "スキップ",

  "onboarding.tour.ariaLabel": "attn ROYALEの遊び方",
  "onboarding.tour.skip": "スキップ",
  "onboarding.tour.step1.eyebrow": "01・タイルを支援",
  "onboarding.tour.step1.titleUsdc": "好きなタイルにUSDCを乗せよう",
  "onboarding.tour.step1.titlePacks": "好きなタイルをパックで支援しよう",
  "onboarding.tour.step1.bodyUsdc":
    "各タイルはUSDCで支援するスロットです。1つのタイルに多く積むほど、その勝ち分の取り分が大きくなります。1つに集中させても、複数に分散させても構いません。",
  "onboarding.tour.step1.bodyPacks":
    "各タイルはパックで支援するスロットです。1つのタイルに多く積むほど、その勝ち分の取り分が大きくなります。1つに集中させても、複数に分散させても構いません。",
  "onboarding.tour.step2.eyebrow": "02・ロックして開封",
  "onboarding.tour.step2.title": "ロック時、全タイルがパックを開封",
  "onboarding.tour.step2.body":
    "ラウンドがロックされると、支援された各タイルが一斉にパックを開封し、検証可能な公正抽選で本物の鑑定済みカードを目の前で引き当てます。",
  "onboarding.tour.step3.eyebrow": "03・最高価値が勝利",
  "onboarding.tour.step3.title": "最も価値の高いタイルがプールを獲得",
  "onboarding.tour.step3.bodyUsdc":
    "各タイルの重みは、引き当てたカードの価値にそのUSDCを加えたものです。タイルが重いほどオッズは有利になります。勝てば、そのラウンドのプール全体を分け合えます。",
  "onboarding.tour.step3.bodyPacks":
    "各タイルの重みは、引き当てたカードの価値にそのタイルへ積まれたパックを加えたものです。タイルが重いほどオッズは有利になります。勝てば、そのラウンドのプール全体を分け合えます。",
  "onboarding.tour.step4.eyebrow": "04・保持、売却、チェイス",
  "onboarding.tour.step4.title": "現金化しつつ、チェイスにも注目",
  "onboarding.tour.step4.body":
    "獲得したカードは鑑定済みスラブとして保持するか、買い取りレートで売却できます。さらにチェイスは、どのタイル、どのラウンドにも落ちてくる積み上がり式のジャックポットです。",
  "onboarding.tour.back": "戻る",
  "onboarding.tour.next": "次へ",
  "onboarding.tour.enterBoard": "ボードへ進む",

  // --- RoyaleWelcomeTour.tsx v2: spotlight guided tour (2026-07-31 pass).
  // MACHINE-CONSISTENT translation, flagged for native review: EN is the
  // quality bar this pass. Terms follow this file's binding glossary
  // (タイル, パック, プール, ラウンド, ベット).
  "onboarding.tour.stepTag": "ステップ {n} / {total}",
  "onboarding.tour.spot1.eyebrow": "あなたのベット",
  "onboarding.tour.spot1.title": "パックを選ぼう",
  "onboarding.tour.spot1.body": "ベットするのはパックです。どれもCollector Cryptが支える、グレーデッドTCGカード入りの未開封パック。プレイしたいパックを選びましょう。",
  "onboarding.tour.spot2.eyebrow": "スタック数",
  "onboarding.tour.spot2.title": "枚数を決めよう",
  "onboarding.tour.spot2.body": "このカウンターは1回のベットで置くパック数を決めます。最初は1つで十分。大きく賭けたくなったら増やしましょう。",
  "onboarding.tour.spot3.eyebrow": "ベットする",
  "onboarding.tour.spot3.title": "タイルをクリックしてベット",
  "onboarding.tour.spot3.titleTouch": "タイルをタップしてベット",
  "onboarding.tour.spot3.body": "タイルをクリックするとパックがそこに置かれます。積むパックが多いほど、勝ったときの取り分が大きくなります。1つに集中しても、複数に分散してもOKです。",
  "onboarding.tour.spot3.bodyTouch": "タイルを1回タップして構え、もう1回タップでベット確定。積むパックが多いほど、勝ったときの取り分が大きくなります。",
  "onboarding.tour.spot4.eyebrow": "ラウンド",
  "onboarding.tour.spot4.title": "プールとタイマー",
  "onboarding.tour.spot4.body": "ボードにベットされたパックはすべてこのプールに入ります。タイマーがゼロになるとベットはロックされ、ベットされた各タイルがパックをライブで開封します。",
  "onboarding.tour.spot5.eyebrow": "抽選",
  "onboarding.tour.spot5.title": "重いタイルほど勝ちやすい",
  "onboarding.tour.spot5.body": "価値に応じて重み付けされたランダム抽選で、1つのタイルが選ばれます。負けたタイルはカードと賭け金を手放し、勝ったタイルの支援者が分配可能なラウンド価値を各自の投入額に応じて分け合います。",
  "onboarding.tour.spot6.eyebrow": "あなたのお金",
  "onboarding.tour.spot6.title": "残高と入金",
  "onboarding.tour.spot6.body": "残高はここに表示されます。入金で追加、出金はいつでも可能。ラウンドの精算と同時に勝利金がここに入ります。",
  "onboarding.tour.spot7.eyebrow": "ハウスからの贈り物",
  "onboarding.tour.spot7.title": "無料の{amount} Starterパック",
  "onboarding.tour.spot7.body": "無料の{amount} Starterパックからスタート。すでにセレクターにセット済みです。好きなタイルを選んで、さあ勝負。",
  "onboarding.tour.finish": "プレイ開始",
 "onboarding.tour.paused": "ラウンド開始です - すぐ後にツアーを続けます。",
  "onboarding.tour.act2.choice": "ラウンドの展開を見る",
  "onboarding.tour.act2.choiceHint": "リビール込みで約30秒",
  "onboarding.tour.act2.bettingTitle": "賭けたパックはすべて一つのプールに",
  "onboarding.tour.act2.bettingBody": "プレイヤーはタイルにパックを積み上げます。ボード上のすべてのパックが一つのプールを作り、一枚のタイルがその全部を取ります。",
  "onboarding.tour.act2.drawTitle": "価値がそのままオッズになる",
  "onboarding.tour.act2.drawBody": "引かれた全カードの合計価値に占める各タイルの割合が、そのタイルの勝率です。検証可能な価値加重ランダム抽選を1回行い、勝者を選びます。",
  "onboarding.tour.act2.losersTitle": "負けたタイルはすべてカードを手放す",
  "onboarding.tour.act2.losersBody": "ボード全体から集まった分配可能なカードと現金は、勝ったタイルの支援者に渡ります。",
  "onboarding.tour.act2.splitTitle": "賭けた額があなたの分け前を決める",
  "onboarding.tour.act2.splitBody": "勝ったタイルの支援者は、全タイルから集まった分配可能な現金とカードを、そのタイルに各自が投入した額に応じて分け合います。",
  "onboarding.tour.act2.grailCaption": "Grail セレモニー",
  "onboarding.tour.act2.yourTurnEyebrow": "あなたの番",
  "onboarding.tour.act2.yourTurnTitle": "Starter pack の準備ができました",
  "onboarding.tour.act2.yourTurnBody": "ボードが再びライブになりました。タイルを選び、最初の pack ベットを置きましょう。",
  "onboarding.tour.act2.continue": "ラウンドに入る",

  "onboarding.rotate.ariaLabel": "attn ROYALEをプレイするには端末を回転してください",
  "onboarding.rotate.title": "端末を横向きにしてください",
  "onboarding.rotate.body": "ボードは横向きが一番遊びやすい設計です。回転してラウンドに参加しましょう。",

  "onboarding.settingsTitle": "設定",
  "onboarding.settingsClose": "設定を閉じる",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  "onboarding.profileValidation.handleRequired": "他のプレイヤーが見つけられるよう、ハンドル名を決めてください。",
  "onboarding.profileValidation.handleTooShort": "ハンドル名は3文字以上で入力してください。",
  "onboarding.profileValidation.handleCharset": "半角英数字とアンダースコアのみ使用できます。",
  "onboarding.profileValidation.nameRequired": "テーブルに表示する名前を入力してください。",
  "onboarding.profileValidation.nameTooLong": "{n}文字以内で入力してください。",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  "onboarding.presence.tierWatching": "観戦中",
  "onboarding.presence.tierPlaying": "プレイ中",
  "onboarding.presence.youPlaying": "プレイ中です：今ラウンドは{amount}をベット中",
  "onboarding.presence.youWatching": "観戦中です",
  "onboarding.presence.youWatchingBackground": "観戦中です（バックグラウンドタブ）",
  "onboarding.presence.ariaLabel": "現在attn ROYALEを{tier}のユーザーが{count}人います。{you}。",
  "onboarding.presence.popYou": "自分：{status}",
  "onboarding.presence.otherTabs.one": "自分の別タブが他に{n}個開いています",
  "onboarding.presence.otherTabs.other": "自分の別タブが他に{n}個開いています",
  "onboarding.presence.othersBacking.one": "このラウンドは他に{n}人がタイルを支援中",
  "onboarding.presence.othersBacking.other": "このラウンドは他に{n}人がタイルを支援中",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "attn ROYALEの配信状態",
  "onboarding.streamHud.eyebrow": "配信",
  "onboarding.streamHud.statusConnecting": "接続中",
  "onboarding.streamHud.statusLive": "ライブ",
  "onboarding.streamHud.statusReconnecting": "再接続中",
  "onboarding.streamHud.statusError": "同期エラー",
  "onboarding.streamHud.reconnects.one": "再接続{n}回",
  "onboarding.streamHud.reconnects.other": "再接続{n}回",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  "onboarding.devnet.badgeTitle": "このルームはUSDCで精算されます。",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "開封したカード",
  "onboarding.carousel.prevCard": "前のカード",
  "onboarding.carousel.nextCard": "次のカード",
  "onboarding.carousel.showCard": "{name}を表示",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  "onboarding.fundShortfall.title": "USDCが不足しています",
  "onboarding.fundShortfall.detail": "{slot}を支援するには{needed}が必要です。残高は{balance}です。",
  "onboarding.fundShortfall.addFunds": "入金する",
  "onboarding.fundShortfall.dismiss": "閉じる",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  "onboarding.installHint.ios": "{icon} をタップして「ホーム画面に追加」を選ぶと、本当のフルスクリーンでプレイできます。",
  "onboarding.installHint.fullscreen": "ブラウザのバーを隠してフルスクリーンでプレイできます。",
  "onboarding.installHint.fullscreenCta": "フルスクリーン",
  "onboarding.installHint.dismiss": "閉じる",
} as Record<string, string>;
