// Japanese (日本語): reviewed by a native editor (wave 2). Same key set as
// en/core.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: core (the original Phase-1 flat dictionary, moved here verbatim as
// part of the i18n parallel-work restructure) PLUS the two cross-surface
// namespaces shell.* (the /lab/royale board-route chrome) and runtime.* (copy
// produced by the plain, non-component .ts modules). Do NOT add new SURFACE
// keys to this file, add them to the segment file for the surface they belong
// to instead (board, cinema, arena, onboarding, docs, pages, chat, misc in
// this same directory).
//
// Register: polite です・ます for anything addressed to the player; short noun
// style for labels, column headers and metric rails. Terminology is shared
// with i18n/ja/board.ts, cinema.ts, docs.ts, misc.ts: bet -> ベット,
// pack -> パック, open (a pack) -> 開封, sell back -> 売却, buyback rate ->
// 買い取りレート, cash out -> 換金, refund -> 払い戻し, backer -> 支援者,
// vault -> ボールト, Chase -> チェイス, keep -> 保持. Pack TIER names
// (Starter / Elite / Legendary / Grail / Mythic) are BRAND terms and stay in
// Latin script even mid-sentence, never katakana.
export default {
  "settings.language": "言語",
  "settings.languageSectionAria": "言語設定",
  "settings.languageSearchPlaceholder": "言語を検索",
  "settings.languageNoResults": "一致する言語がありません",
  "settings.languageHint": "選ぶとすぐに反映されます。名前を入力して絞り込めます。",
  "settings.languageInputAria": "言語の検索と選択",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "設定グループ",
  "settings.searchPlaceholder": "設定を検索",
  "settings.searchClear": "検索をクリア",
  "settings.searchResultsAria": "一致する設定",
  "settings.searchNoResults": "「{query}」に一致する設定はありません。変えたいものの名前で試してください。",
  "settings.backToGroups": "すべての設定",
  "gear.cards.heading": "カード",
  "gear.cards.sectionAria": "カード設定",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "ベット {bids} · 最低額 {amount}",
  "gear.section.summary.display": "ポップアップ {popups} · ポートレート {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "音楽 {music} · 効果音 {sfx}",
  "gear.section.summary.autosell": "自動売却ルール {count} 件が有効",
  "gear.section.summary.hotkeys": "ホットキー {count} 件を設定",

  "common.on": "オン",
  "common.off": "オフ",
  "common.set": "設定",
  "common.clear": "クリア",
  "common.tileLabel": "タイル{n}",
  "common.tileShort": "T{n}",

  "gear.betting.heading": "ベット",
  "gear.betting.sectionAria": "ベット設定",
  "gear.betting.provider.label": "パックプロバイダー",
  "gear.betting.provider.automatic": "自動（Collector Cryptを優先）",
  "gear.betting.provider.hint": "自動では利用可能な場合にCollector Cryptを優先し、検証済みの代替先だけを使用します。指定したプロバイダーが利用できない場合、ベットは拒否されます。",
  "gear.betting.provider.automaticHint": "自動 · Collector Cryptを優先",
  "gear.betting.provider.strictHint": "{provider}のみ · 代替なし",
  "gear.betting.provider.unavailable": "{provider}（利用不可）",
  "gear.betting.provider.selectedUnavailable": "{provider}は利用できません。厳密指定のベットは拒否され、別のプロバイダーには置き換えられません。",
  "gear.betting.provider.actual": "実行元: {provider}",
  "gear.betting.provider.accepted": "受付元: {provider}",
  "gear.betting.disableBids.label": "ベットを無効化",
  "gear.betting.disableBids.hint":
    "ベットをロックします。タイルをタップしてもベットは入らないので、誤って賭ける心配なく観戦したり、画面を人に渡したりできます。ゲームの他の部分はそのまま進行します。",
  "gear.betting.minBid.label": "最小ベット額",
  "gear.betting.minBid.hint":
    "1回のタップで置けるベットの最小額です。これを下回る額は入らないため、素早くタップしても意図より少なく賭けてしまうことはありません（不正ベット防止のため下限は$5です）。",
  "gear.betting.upgradeCap.label": "アップグレード上限額",
  "gear.betting.upgradeCap.placeholder": "上限なし",
  "gear.betting.upgradeCap.hint":
    "1回のアップグレードにかけられる最大額です。これより高いアップグレードはグレーアウトされるので、勢いのあるタイルで思わぬ高額を支払うことがありません。",

  "gear.display.heading": "表示",
  "gear.display.sectionAria": "表示設定",
  "gear.display.chipFloats.label": "ベットの吹き出し",
  "gear.display.chipFloats.hint": "誰かがタイルにベットしたときに浮かび上がる「+$X・名前」の小さな吹き出しを表示します。",
  "gear.display.floatThreshold.label": "この額未満は非表示",
  "gear.display.floatThreshold.placeholder": "すべて表示",
  "gear.display.floatThreshold.hint":
    "この金額以上のベットだけ吹き出しを出します。空にする（または$0にする）とすべて表示されます。小口のベットが大量に入ってもボードが静かなままです。",
  "gear.display.hidePortraits.label": "ポートレートを非表示",
  "gear.display.hidePortraits.hint": "タイル上の他プレイヤーのポートレートを隠します。自分のマーカーは残ります。",
  "gear.display.fullscreenLandscape.label": "横向きで全画面",
  "gear.display.fullscreenLandscape.hint":
    "スマートフォンでは、横向きで次にタップするとブラウザバーを隠します。iPhone Safariではバーが最小表示になり、「ホーム画面に追加」で本当の全画面になります。",
  "gear.display.replayTour.label": "ウェルカムツアーを再表示",
  "gear.display.replayTour.hint": "ウェルカムツアーを最初のステップからもう一度開きます。",
  "gear.display.couch.label": "大きな文字（TV・ソファ）",
  "gear.display.headerCollapse.label": "ヘッダーを折りたたむ",
  "gear.display.headerCollapse.hint": "上部バーを折りたたみ、ボードとカードが画面いっぱいに広がります。ヘッダーの矢印で元に戻せます。",
  "gear.display.couch.hint":
    "チャット、ドキュメント、ラベル、金額など、ゲーム全体の読みやすさに関わる文字を大きくします。ソファからのプレイに合わせたサイズで、ボードのレイアウトは変わりません。アドレスに ?couch=1 を付けても有効になります。",
  "gear.display.couch.suggested": "TVまたはゲーム機のブラウザのようです。大きな文字はこの画面のための機能です。",

  "gear.reveals.heading": "リビール",
  "gear.reveals.sectionAria": "リビール設定",
  "gear.reveals.turbo.label": "ターボリビール",
  "gear.reveals.turbo.hint":
    "リビール演出を早送りして、結果まで一気に進みます。大きな見せ場はしっかり残ります。初期状態はオフで、他のプレイヤーにはフル演出が流れます。",

  "gear.sound.heading": "サウンド",
  "gear.sound.sectionAria": "サウンド設定",
  "gear.sound.sfx.label": "効果音",
  "gear.sound.sfx.hint":
    "チップの音、ラウンドの開始とロック、勝者ホイール、リビール演出の音です。すべてブラウザ内で合成するので、読み込む素材はありません。",
  "gear.sound.music.label": "音楽",
  "gear.sound.music.hint":
    "ラウンドの流れに合わせて変化します。ベット中に高まり、残り数秒でさらに加速し、リビールで静まります。最初のタップかキー操作で鳴り始め、タブを切り替えると一時停止します。",
  "gear.sound.musicStyle.label": "音楽スタイル",
  "gear.sound.musicStyle.piano": "穏やかなピアノ",
  "gear.sound.musicStyle.snowmelt": "雪どけ",
  "gear.sound.musicStyle.hearthfire": "炉辺の火",
  "gear.sound.musicStyle.grotto": "黄金の洞窟",
  "gear.sound.musicStyle.arcade": "アーケード疾走",
  "gear.sound.musicStyle.kart": "カートラリー",
  "gear.sound.musicStyle.galaxy": "星屑のワルツ",
  "gear.sound.musicStyle.hint": "穏やかなピアノはゆったりとしたメロディ、アーケード疾走は明るく速い曲調です。ラウンド途中でも次の小節から切り替わります。",
  "gear.sound.musicVolume.label": "音楽の音量",
  "gear.sound.sfxVolume.label": "効果音の音量",
  "gear.sound.volume.label": "音量",
  "gear.sound.volume.aria": "マスター音量",
  "gear.sound.volume.hint": "効果音と音楽をまとめて調整するマスター音量です。",

  "gear.autosell.heading": "自動売却ルール",
  "gear.autosell.sectionAria": "自動売却ルール",
  "gear.autosell.intro":
    "一度設定すれば、条件に合ったカードは自動で売却され、保持か売却かの確認は表示されません。条件に合わないカードは、これまでどおり確認が表示されます。",
  "gear.autosell.everyWin.label": "すべての勝利を自動売却",
  "gear.autosell.everyWin.hint":
    "獲得したカードは、届いた瞬間に買い取りレートで換金されます。保持か売却かの確認は表示されません。Grailが自動売却されることはありません。下のレアリティ切り替え4つをまとめてオンにするショートカットです。",
  "gear.autosell.belowValue.label": "価値がこの額未満なら売却",
  "gear.autosell.placeholderOff": "オフ",
  "gear.autosell.rarity.label": "レアリティで売却",
  "gear.autosell.rarity.aria": "レアリティ別の自動売却",
  "gear.autosell.rarity.hint":
    "各カードの出所であるパックマシンから読み取ったCollectorCryptのレアリティ帯です。帯ごとの価格幅はパックによって変わるため、同じ$200のカードでもあるマシンではレア、より高額なマシンでは普通の扱いになります。",
  "gear.autosell.nonVintage.label": "ヴィンテージ以外を売却",
  "gear.autosell.belowGrade.label": "このグレード未満なら売却",
  "gear.autosell.grader.label": "鑑定機関で売却",
  "gear.autosell.grader.hint":
    "残した鑑定機関については、設定した数値未満のグレードのカードだけを自動売却します。チェックを外した鑑定機関は、そのカードをすべて自動売却します。すべて外すと、獲得したカードはすべて自動売却されます。鑑定機関ごとに基準が異なるため、下限値もそれぞれ独立しています。",
  "gear.autosell.grader.aria": "鑑定機関別の自動売却",
  "gear.autosell.grader.keep": "保持",
  "gear.autosell.grader.sellAll": "すべて売却",
  "gear.autosell.grader.other": "その他 / グレードなし",
  "gear.autosell.grader.placeholderKeepAll": "すべて保持",
  "gear.autosell.grader.placeholderSellAll": "すべて売却",
  "gear.autosell.grader.ariaGradeSuffix": "指定グレード未満で売却",
  "gear.autosell.summaryActive": "有効：",
  "gear.autosell.summaryNone": "自動売却ルールは未設定です。勝利のたびに保持か売却かを確認します。",
  "gear.autosell.turnOffAll": "すべてオフにする",

  "gear.hotkeys.heading": "ベットのホットキー",
  "gear.hotkeys.sectionAria": "ベットのホットキー",
  "gear.hotkeys.intro":
    "タイルのキーを押すと、現在のベット額でそのタイルに賭けられます。マウスは不要です。下のキーをクリックしてから、割り当てたいキーを押してください。同じキーを2つのタイルで共有はできないため、割り当て直すとキーは移動します。Escでキャンセル、Backspaceでクリアします。",
  "gear.hotkeys.enabled.label": "数字キーでのベット",
  "gear.hotkeys.enabled.hintOn": "ベット受付中はキーが有効です。タイルのキーを押すと即座にベットが入ります。",
  "gear.hotkeys.enabled.hintOff": "キーはオフです。タイルのキーを押してもベットは入りません。",
  "gear.hotkeys.enabled.hintUnset": "まだ設定されていません。ここでキーをオンにするか、ベット中にタイルのキーを押して「有効にする」を選んでください。",
  "gear.hotkeys.listAria": "タイル別ベットホットキー",
  "gear.hotkeys.tileLabel": "タイル{n}",
  "gear.hotkeys.pressKeyPrompt": "キーを押してください…",
  "gear.hotkeys.setKey": "キーを設定",
  "gear.hotkeys.clear": "クリア",
  "gear.hotkeys.ariaPressToBind": "タイル{n}に割り当てるキーを押してください",
  "gear.hotkeys.ariaShortcut": "タイル{n}のショートカットは{key}です。クリックで再割り当てします。",
  "gear.hotkeys.ariaNoShortcut": "タイル{n}にはショートカットがありません。クリックで設定します。",
  "gear.hotkeys.ariaClearShortcut": "タイル{n}のショートカットをクリア",
  "gear.hotkeys.unboundWarning": "{list}にキーが未設定です。設定するまで、これらのタイルにキーボードショートカットはありません。",
  "gear.hotkeys.resetButton": "初期設定に戻す",

  "nav.ariaLabel": "attn ROYALEのセクション",
  "nav.board": "ボード",
  "nav.results": "結果",
  "nav.rankingsFull": "ランキング",
  "nav.rankingsShort": "順位",
  "nav.collectionFull": "コレクション",
  "nav.collectionShort": "カード",
  "nav.profile": "プロフィール",

  "mobileNav.board": "ボード",
  "mobileNav.results": "結果",
  "mobileNav.ladder": "ランキング",
  "mobileNav.collection": "コレクション",
  "mobileNav.profile": "プロフィール",
  "mobileNav.docs": "ドキュメント",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // Header status cluster, the KPI rail, the board panel's region label and
  // phase line, the logged-out invitation and the phone drawer toggles.
  // "attn ROYALE" is a BRAND term and stays verbatim. The metric labels sit in
  // a fixed-width rail: keep them short.
  "shell.route.aria": "attn ROYALEラボ",
  "shell.header.statusAria": "ラウンドの状況",
  "shell.header.collapse": "ヘッダーを隠す",
  "shell.header.expand": "ヘッダーを表示",
  "shell.header.round": "ラウンド #{n}",
  "shell.header.turboTitle": "ラウンド進行を高速化",
  "shell.header.turboBadge": "ターボ",
  "shell.metrics.aria": "ラウンド概要",
  "shell.metrics.totalPool": "合計プール",
  "shell.metrics.packsLive": "進行中パック",
  "shell.metrics.yourStake": "自分のベット",
  "shell.metrics.selectedBet": "選択ベット額",
  "shell.board.aria": "attn ROYALEのボード",
  "shell.board.label": "ボード",
  "shell.board.phaseOpen": "タイルをクリックして支援すると、ベット額は最適なパック構成に組み直されます",
  "shell.board.phaseLock": "ロック済み・パック開封中",
  "shell.board.phaseSettled": "ラウンド精算済み",
  "shell.board.metaOpen": "プール{pool}・3%はチェイスへ・ロック時にパック開封",
  "shell.board.metaClosed": "検証可能な重み付き抽選で、1つのタイルがプールを獲得します。",
  "shell.board.reopenReveal": "↗ リビールを開き直す",
  "shell.connectNudge":
    "ゲームに参加して入金すると、タイルへの支援を始められます。ラウンドはその間も動き続けています。",
  "shell.decision.cardFallback": "自分のカード",
  "shell.mobile.close": "閉じる",
  "shell.mobile.chat": "チャット",
  "shell.mobile.chatOpenAria": "テーブルチャットを開く",
  "shell.mobile.chatCloseAria": "テーブルチャットを閉じる",
  "shell.mobile.cards": "カード",
  "shell.mobile.cardsOpenAria": "自分のカードを開いて売却または出金する",
  "shell.mobile.cardsCloseAria": "自分のカードを閉じる",
  "shell.mobile.players": "プレイヤー",
  "shell.mobile.playersOpenAria": "ベット額順のプレイヤーを開く",
  "shell.mobile.playersCloseAria": "プレイヤーを閉じる",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // runtime.rail.* — royaleRailCopy.ts. "Privy" and "USDC" stay verbatim.
  "runtime.rail.gameUsdc": "ゲーム内USDC",
  "runtime.rail.privySessionCredit": "Privyセッションクレジット",
  "runtime.rail.houseCredit": "ハウスクレジット",
  "runtime.rail.connectPrivy": "Privyを接続してゲーム内USDCを追加",
  "runtime.rail.privySession": "Privyセッション",
  "runtime.rail.depositAction": "+{amount} {label}を追加・{source}",
  "runtime.rail.privyAccount": "Privyアカウント",
  "runtime.rail.house": "ハウス",
  "runtime.rail.depositReceipt": "レシート{id}・{backing}・+{amount} {label}",
  "runtime.rail.selectedChip": "パックをタップすると{amount}を賭けます。各タイルには +{low} / +{high} のボタンも残ります。",
  "runtime.rail.sellBack": "売却 → 残高に +{amount}",

  // runtime.recap.* — royaleSpectatorRecap.ts (round theatre spectator rows).
  "runtime.recap.you": "自分",
  "runtime.recap.topBacker": "最大支援者",
  "runtime.recap.topCardOutcome": "最高カード・保持か売却かの判断",
  "runtime.recap.backer": "支援者",
  "runtime.recap.cardWon": "獲得カード",
  "runtime.recap.chaseLootReleased": "チェイスの戦利品を放出",
  "runtime.recap.theChase": "チェイス",
  "runtime.recap.sweptIntoVault": "ボールトへ回収",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "プロトコル手数料",
  "runtime.recap.soldBack": "売却済み",
  "runtime.recap.intoSplit": "配分へ +{amount}",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "X連携は現在ご利用いただけません。",
  "runtime.xProfile.connected": "連携済み",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "不明なカード",

  // runtime.winShare.* — royaleWinShareModel.ts (share card headline + image
  // caption). GRAIL is the pack TIER brand name and stays English.
  "runtime.winShare.headlineWon": "獲得",
  "runtime.winShare.headlineGrailPull": "GRAIL的中",
  "runtime.winShare.headlineCardsWon": "獲得カード",
  "runtime.winShare.cardInImage": "カードは画像のとおりです。",
  "runtime.winShare.receiptInImage": "レシートは画像のとおりです。",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "出金は現在停止しています。資金は動いていません。",
  "runtime.serverWallet.noSigner": "このセッションには署名できるウォレットが接続されていません。資金は動いていません。",
  "runtime.serverWallet.nonceUnavailable": "サーバーから出金認証用のナンスを取得できませんでした。",
  "runtime.serverWallet.signatureUnavailable": "ウォレットから出金ナンスへの署名が返りませんでした。",
  "runtime.serverWallet.boundaryLabel": "テーブルのクレジットとサーバーウォレットのUSDCは別々の残高です。",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "このブラウザでは画面キャプチャを利用できません。",
  "runtime.video.noRecorderFormat": "このブラウザにはMediaRecorderが対応する動画形式がありません。",
  "runtime.video.canceled": "書き出しを中止しました。",
  "runtime.video.unreachable": "{url}の書き出しサービスに接続できませんでした。",
  "runtime.video.rejected": "書き出しサービスがこのラウンドを受け付けませんでした：{detail}",
  "runtime.video.requestFailed": "書き出しのリクエストが失敗しました（{status}）。",
  "runtime.video.noJobId": "書き出しサービスからジョブIDが返りませんでした。",
  "runtime.video.lostJob": "書き出しジョブを見失いました（{status}）。",
  "runtime.video.lostContact": "書き出し中にサービスとの接続が切れました。",
  "runtime.video.renderFailed": "書き出しに失敗しました：{error}。",
  "runtime.video.unknownError": "不明なエラー",
  "runtime.video.downloadFailed": "動画は完成しましたが、ダウンロードできませんでした。",
  "runtime.video.downloadHttpFailed": "動画は完成しましたが、ダウンロードに失敗しました（{status}）。",
  "runtime.video.emptyVideo": "書き出しサービスから空の動画が返りました。",
  "runtime.video.shareTagline": "抽選を検証できるパックバトル。ラウンドはこちら：",

  // runtime.game.* — useRoyaleGame.ts (feed lines + fallback labels). These are
  // written into the persisted feed AT EVENT TIME, so an existing line keeps
  // the language it was written in.
  "runtime.game.roomLive": "ルームが稼働中です。ラウンドは自動で始まり、{seconds}秒のベット受付のあとリビールに入ります。",
  "runtime.game.chaseVault": "チェイスのボールト",
  "runtime.game.aTile": "タイル",
  "runtime.game.aPack": "パック",
  "runtime.game.theCard": "カード",
  "runtime.game.collectedSplit": "ラウンド{round}・配分から{amount} USDCを受け取りました。",
  "runtime.game.chaseDropSplit": "ラウンド{round}・チェイスが自分のタイルに{award}を放出・取り分は{amount} USDCです。",
  "runtime.game.grailSecured": "Grail確保：{card}（{amount}）をコレクションに保持しました。",
  "runtime.game.keptCard": "{card}（{amount}）を保持 → コレクションに追加しました。",
  "runtime.game.soldCardSettle": "{card}を{amount} USDCで売却しました（{value}の{pct}%）。",
  "runtime.game.roundVoidedRefund":
    "ラウンド{round}は無効です。パックが開封されず、カード価値の抽選も行われませんでした。ベット額{amount}は払い戻しました。",
  "runtime.game.roundVoidedAll":
    "ラウンド{round}は無効です。パックが開封されず、カード価値の抽選も行われませんでした。すべてのベットを払い戻しました。",
  "runtime.game.chaseFiredYours.one": "チェイス発動：カード{n}枚（{amount}）が自分のタイル{tile}へ放出されました。",
  "runtime.game.chaseFiredYours.other": "チェイス発動：カード{n}枚（{amount}）が自分のタイル{tile}へ放出されました。",
  "runtime.game.chaseFiredTable.one":
    "ラウンド{round}でチェイス発動：{award}とカード{n}枚が{tile}に落ち、その支援者で分配されました。",
  "runtime.game.chaseFiredTable.other":
    "ラウンド{round}でチェイス発動：{award}とカード{n}枚が{tile}に落ち、その支援者で分配されました。",
  "runtime.game.cardsAssigned.one": "カード{n}枚（{amount}）を獲得 → コレクションに追加しました。",
  "runtime.game.cardsAssigned.other": "カード{n}枚（{amount}）を獲得 → コレクションに追加しました。",
  "runtime.game.cardPoolsLive": "カードプール稼働中：CollectorCryptのマシンプール{pools}件、計{cards}枚です。",
  "runtime.game.minBid": "最小ベット額は{amount}です。ベット額を上げてもう一度お試しください。",
  "runtime.game.resolveFailed": "このラウンドは確定できなかったため、精算は行われていません。次のラウンドは通常どおり開始します。",
  "runtime.game.stakeRefused": "このベット額は{tile}には大きすぎます。請求はされていません。額を下げてもう一度お試しください。",
  "runtime.game.shortfallBack":
    "{tile}に{amount}を賭けるにはUSDCが足りません。残高は{held}です。入金すると続けられます。",
  "runtime.game.shortfallNextPack":
    "{tile}で次のパックを完成させるにはUSDCが足りません。必要額は{amount}、残高は{held}です。入金すると続けられます。",
  "runtime.game.youBacked": "{tile}に{amount}を賭けました。",
  "runtime.game.packCompleted": "{tile}で次のパックが完成しました（+{amount}）→ {tier}。",
  "runtime.game.soldToFundBid": "ベットの資金にするため、{cards}を{amount} USDCで売却しました（CC買い取り）。",
  "runtime.game.backedFunded": "{tile}に{amount}を賭けました（手持ちカードから調達）。",
  "runtime.game.demoStakesRefunded":
    "デモのベットをクリアしました。投じていた{amount}は払い戻され、$0から再開します。",
  "runtime.game.demoStakesCleared": "デモのベットをクリアしました。タイルに賭けるまで、毎ラウンド$0から始まります。",
  "runtime.game.deposited": "ウォレットに{amount} USDCを入金しました。",
  "runtime.game.referralBonus": "紹介ボーナスを付与しました：+{amount} USDC。",
  "runtime.game.signedAndSent": "{cluster}で{amount} USDCに署名して送信しました・署名{sig}…。",
  "runtime.game.signedNoBroadcast":
    "{cluster}で{amount} USDCに署名しました（{method}、チェーンには未送信）・署名{sig}…。",
  "runtime.game.soldCard": "{card}を{amount} USDCで売却しました（買い取り{pct}%）。",
} as Record<string, string>;
