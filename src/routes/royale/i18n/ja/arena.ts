// Japanese (日本語): "arena" segment, translated from en/arena.ts — every
// user-visible string from pages/RoyaleArenaRoute.tsx (the /lab/royale/arena
// wheel surface: the rail, the wheel stage + leader-line callouts, the
// clock, the snipe tray, the double-bid opt-in dialog, and the
// lock->reveal cinema's three beats).
//
// {token} interpolation follows royaleI18n.ts's file-header convention: the
// CALLER does a plain .replace("{token}", String(x)) — this file never
// changes shape for a dynamic value.
//
// Terminology choices made for this locale (kept consistent with
// i18n/ja/docs.ts and i18n/ja/chat.ts):
//   pack(s) -> パック, tile -> タイル, pot -> ポット, wheel -> ホイール,
//   card(s) -> カード (Japanese has no plural, so arena.common.card and
//   arena.common.cards are intentionally identical), snipe -> スナイプ,
//   arm/armed -> セット/セット済み, disarm -> 解除, Chase -> チェイス.
//   "arena.you" ("YOU" badge) -> 自分; "arena.youAvatarLetter" mirrors that
//   choice with its leading kanji ("自") instead of the English initial. The
//   same 自分 (never あなた) is used for every first-person label on this
//   surface so the rail heading, the win callout and the badge agree, and so
//   arena.board.youWin stays parallel with arena.board.nameWins.
//
// Cross-segment note (for a later dedup pass): "card"/"cards" (arena.common.*)
// and "YOU" (arena.you) are almost certainly needed verbatim by the board and
// cinema segments too — left duplicated here per the segment-ownership rule
// ("do not create keys in other segments' files"), flagged for a follow-up
// merge into a shared namespace if the other segments grow the same pair.
export default {
  "arena.you": "自分",
  "arena.youAvatarLetter": "自",
  "arena.common.card": "カード",
  "arena.common.cards": "カード",
  "arena.matchLabel": "マッチ #{n}",
  "arena.pageTitle": "カードアリーナ",
  "arena.backToBoard": "← ボードに戻る",

  "arena.rail.ariaLabel": "自分のコレクション",
  "arena.rail.heading": "自分のコレクション",
  "arena.rail.practiceNote": "練習用セットです。ボードでラウンドに勝つと、このレールに自分のカードが並びます。",
  "arena.rail.emptyNote": "手持ちのカードがありません。ポットを勝ち取って自分の取り分を受け取りましょう。",
  "arena.rail.enterWheel": "ホイールに参加",
  "arena.rail.armSnipe": "スナイプをセット",
  "arena.rail.hint": "カードをダブルクリックしてベットします。またはカードを選択して「ホイールに参加」を押してください。スペースキーで選択、Aキーでスナイプをセットします。",

  "arena.railCard.armedSuffix": "スナイプにセット済み。",
  "arena.railCard.hint": "スペースキーで選択、Aキーでスナイプをセットします。ダブルクリックでアリーナにベットします。",
  "arena.railCard.armedTag": "セット済み",

  "arena.snipe.trayHeading": "スナイプセット済み",
  "arena.snipe.disarm": "解除",
  "arena.snipe.firesAt": "残り2秒で発動",
  "arena.snipe.carries": "次のマッチに持ち越し",

  "arena.board.sectionAriaLabel": "アリーナホイール",
  "arena.board.noCap": "カード枚数の上限はありません。締め切るのは時間だけです。",
  "arena.board.wheelDecides": "ホイールが決める",
  "arena.board.nextMatchLabel": "次のマッチまで",
  "arena.board.potLabel": "ポット",
  "arena.board.wheelAriaEnter": "選択した{count}枚の{cardWord}をホイールに投入",
  "arena.board.wheelAriaIdle": "ホイール。コレクションからカードを選択すると投入できます。",
  "arena.board.youWin": "自分の勝利",
  "arena.board.nameWins": "{name}の勝利",
  "arena.board.emptyWheelNote":
    "ホイールは受付中です。賭けるのは現金ではなくカード。価値の取り分がアークと勝率を決めます。チェイスの取り分は0%です。プロトコルはカード単位の7%手数料ルールを適用し、勝者は残りのすべてのカードを受け取ります。",
  "arena.board.tableHint": "投入したカードは価値の取り分としてホイールに乗ります。アークの大きさがそのまま勝率です。",
  "arena.board.resultsLink": "前回のラウンド結果を見る →",

  "arena.clock.locked": "ロック済み",
  "arena.clock.settled": "精算済み",
  "arena.clock.locksIn": "ロックまで",
  "arena.countdown.secondsSuffix": "秒",

  "arena.cinema.closeAriaLabel": "シネマを閉じる",
  "arena.cinema.closeTitle": "閉じる（Esc）",
  "arena.cinema.beatCopy.contestants": "出場者",
  "arena.cinema.beatCopy.spin": "スピン",
  "arena.cinema.beatCopy.settle": "精算",
  "arena.cinema.beatCopyShort.contestants": "プレイヤー",
  "arena.cinema.beatCopyShort.spin": "スピン",
  "arena.cinema.beatCopyShort.settle": "精算",
  "arena.cinema.contestantsAriaLabel": "出場者",
  "arena.cinema.contestantsHeadline": "出場者",
  "arena.cinema.oddsToWin": "勝率{pct}%",
  "arena.cinema.hintContestants": "ホイールが決めます。クリックですぐにスピン。",
  "arena.cinema.spinAriaLabel": "ホイールのスピン",
  "arena.cinema.lockedOn": "ロックオン",
  "arena.cinema.hintSpin": "クリックでスキップ。",
  "arena.cinema.settleAriaLabel": "精算",
  "arena.cinema.winnerTag": "勝者",
  "arena.cinema.youTakePot": "自分がポットを総取り",
  "arena.cinema.takesPot": "がポットを総取り",
  "arena.cinema.shelfWinner": "勝者へ",
  "arena.cinema.shelfChase": "チェイス",
  "arena.cinema.shelfProtocol": "プロトコル",
  "arena.cinema.smallPotNote": "チェイスの取り分はありません。プロトコルの7%ルールで{count}枚の{cardWord}が選ばれ、勝者は残りのすべてのカードを受け取ります。",
  "arena.cinema.resultsLink": "前回のラウンド結果を見る",
  "arena.cinema.hintSettle": "どこかをクリックするとアリーナに戻ります。",
  "arena.cinema.barToWinner": "{value}・{count}枚の{cardWord}が勝者へ",
  "arena.cinema.barOpen": "{value}・{count}枚の{cardWord}",

  "arena.doubleBid.title": "ダブルクリックで自動ベット？",
  "arena.doubleBid.body": "コレクション内のカードをダブルクリックすると、そのままアリーナにベットされます。この機能をオンにしますか？",
  "arena.doubleBid.enable": "有効にする",
  "arena.doubleBid.dismiss": "後で",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "CARD ARENA に接続中",
  "arena.backend.loadingBody": "Arena の配信中バージョンとプレイヤーセッションを確認しています…",
  "arena.backend.loadingCollection": "コレクションを確認しています…",
  "arena.backend.mainnetPreparingTitle": "MAINNET ARENA に接続しました",
  "arena.backend.mainnetPreparingBody": "この読み取り専用の正確なリリースは正常です。資金供給、カード取得、参加、抽選、決済は無効のままです。",
  "arena.backend.mainnetPreparingCollection": "Mainnet カードの購入や移動は行われていません。個別に承認された在庫の準備が整うまで、Arena は読み取り専用です。",
  "arena.backend.mainnetRelease": "リリース {commit} · デプロイ {deployment} · 署名、ブロードキャスト、エフェクト、重複はすべて 0",
  "arena.backend.unavailableTitle": "CARD ARENA は更新中です",
  "arena.backend.unavailableBody": "このバージョンが利用可能になるまで参加は停止しています。カードは動いていません。",
  "arena.backend.unavailableCollection": "Arena の更新中はコレクションを表示できません。",
  "arena.backend.connectTitle": "接続してプレイ",
  "arena.backend.connectBody": "プロバイダー紐付けのカードを読み込みホイールに入るには、検証済みの Privy セッションが必要です。",
  "arena.backend.connectCollection": "プレイヤーセッションを接続するとカードを読み込みます。",
  "arena.backend.retry": "もう一度",
} as Record<string, string>;
