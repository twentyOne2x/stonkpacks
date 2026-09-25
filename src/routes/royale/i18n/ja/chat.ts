// Japanese (日本語): "chat" segment, translated from en/chat.ts.
//
// Source of truth for every user-visible string owned by:
//   apps/web/src/routes/royale/RoyaleChatPanel.tsx
//   apps/web/src/routes/royale/RoyaleChatMessageBody.tsx
//   apps/web/src/routes/royale/royaleChatModel.ts     (ambient chatter pool +
//     the table-event copy composed into chatMessageForEvent's flat text)
//   apps/web/src/routes/royale/royaleChatLinks.ts      (chatPlatformLinkLabel
//     — the anchor text shown for an inline platform link in the chat feed)
// royaleChatEvents.ts and royaleChatHistory.ts carry no literal UI copy of
// their own (pure event-bus / persistence plumbing) and were left untouched.
//
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-and-currency-stay-literal rules that apply to every locale.
//
// TRANSLATOR NOTE on chat.event.wonByPrefix / chat.event.foldedIntoPot: in
// English these are literal prefix/suffix fragments concatenated in JSX
// directly against an interactive name element with no {name} token
// (e.g. "<tag> " + wonByPrefix + " " + <NamePopover/>). Japanese normally
// needs a particle glued to the preceding noun for that to read as one
// sentence, which a fixed English-word-order prefix/suffix cannot guarantee.
// wonByPrefix is translated as a short label ("獲得者") that still reads
// correctly as "獲得者 <name>" ("winner: <name>"); foldedIntoPot is
// translated as a suffix ("がポットに繰り入れられた") that reads correctly
// only when concatenated directly after a bare noun/name with no separating
// space. chat.event.wonBy (the flat-text {name}-token version used for aria
// labels/persisted history) has no such constraint and is translated as a
// normal Japanese sentence ("{name}が獲得"). Flagged for the calling
// components to double-check spacing once wired.
//
// CROSS-SEGMENT DUPLICATES (flagged for a later dedup pass, per the epic's
// "put it in your own segment and note it" instruction): "won by <name>",
// "folded into the pot" and the "GRAIL PULL" tag also appear in
// RoyaleRevealCinema.tsx, RoyaleSpectatorRecapSection.tsx,
// RoyaleRoundTheatre.tsx, RoyaleSessionHistory.tsx, RoyalePrizeModal.tsx and
// RoyaleNameStatsPopover.tsx — all owned by other segments. Keys here
// (chat.event.wonBy / chat.event.foldedIntoPot / chat.event.grailTag) are
// this segment's own copies; do not import them cross-segment — each surface
// should get its own key in its own segment file, later reconciled for
// wording consistency.
//
// LOCALE-FROZEN NOTE: chat messages (ambient bot lines + table-event rows)
// are composed ONCE at post time and stored as plain strings (live feed +
// the durable localStorage history log). Switching the UI language mid
// session translates all NEW chat activity but never rewrites messages
// already sitting in the feed/history — same as any other historical log.
// This is expected, not a bug.
//
// "Mythic" and "Grail" in the ambient chatter lines are the Starter/Elite/
// Legendary/Grail/Mythic PACK TIER brand names (owner hard rule: stay
// English in every locale) and are kept in Latin script mid-sentence.
export default {
  "chat.rooms.table": "テーブル",
  "chat.rooms.sendTo": "送信先",
  "chat.rooms.joinHint": "タイルにベットするとそのルームが開きます。",
  "chat.rooms.messageTargets": "メッセージのルーム",
  "chat.composer.sendFailed": "メッセージを送信できませんでした。もう一度お試しください。",
  "chat.composer.audienceChanged": "ルームが変わりました。未送信のメッセージは消去されました。",
  "chat.composer.sessionUnavailable": "チャットセッションを利用できません。再読み込みしてもう一度お試しください。",
  "chat.auth.tileLeadBold": "チャットするにはタイルにベットしてください",
  "chat.auth.tileBody": "。最初のパックが承認されると、テーブルとタイルルームが開放されます。",
  "chat.auth.sessionUnavailableBold": "チャットセッションを利用できません",
  "chat.auth.sessionUnavailableBody": "。安全な送信を復元するには再読み込みしてください。",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "テーブルチャット",
  "chat.header.title": "テーブルチャット",
  "chat.header.fontControlAriaLabel": "チャットの文字サイズ",
  "chat.header.fontSmaller": "チャットの文字サイズを小さくする",
  "chat.header.fontLarger": "チャットの文字サイズを大きくする",
  "chat.header.collapseShow": "チャットを表示",
  "chat.header.collapseHide": "チャットを非表示",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  // Matches the reveal cinema's own GRAIL tag wording (cinema.grail.pullTitle
  // "GRAIL的中") and the Chase header pill, so the same event reads the same
  // way on every surface. GRAIL is a tier brand name: Latin script, always.
  "chat.event.grailTag": "GRAIL的中",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "ラウンド #{roundId}",
  "chat.event.ariaOpensResult": "{tag}：{text}。新しいタブでラウンド結果を開きます。",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "獲得者",
  "chat.event.wonBy": "{name}が獲得",
  "chat.event.foldedIntoPot": "がポットに繰り入れられた",
  "chat.event.roundWinsTitle": "{tile}が{pot}を獲得",
  "chat.event.bestPull": "最高の当たり：{name}（{value}）",
  "chat.event.chaseAward": "チェイス +{amount}",
  "chat.event.youWon": "自分 +{amount}",
  "chat.event.youLost": "自分の負け",
  "chat.message.showOriginal": "翻訳済み · 原文を表示",
  "chat.message.showTranslation": "翻訳を表示",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "最新へ移動",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "ここではattnのリンクのみ表示されます。",
  "chat.composer.rateLimitNotice": "送信が少し早すぎます。しばらく待ってからもう一度お試しください。",
  "chat.composer.placeholder": "何か話してみましょう…",
  "chat.composer.inputAriaLabel": "チャットメッセージ",
  "chat.composer.sendAriaLabel": "メッセージを送信",
  "chat.composer.sendLabel": "送信",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "チャットにはサインインが必要です",
  "chat.auth.body": "。接続する（右上）までルームは閲覧のみです。",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "新しいタブでカードページを開きます",
  "chat.messageBody.cardEmbedAriaLabel": "{name}、{value}。バックグラウンドのタブでカードページを開きます。",
  "chat.messageBody.viewCard": "カードを見る",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "カードページ",
  "chat.link.roundResult": "ラウンド結果",
  "chat.link.profile": "プロフィール",
  "chat.link.collection": "コレクション",
  "chat.link.theBoard": "ボード",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "タイル3、埋まるの早すぎ",
  "chat.chatter.line02": "毎回リーダーをスナイプしてくるの誰だよ",
  "chat.chatter.line03": "さっきのGrail、マジで嘘だろってレベル",
  "chat.chatter.line04": "楽勝だ、みんなリーダーに乗っかろう",
  "chat.chatter.line05": "新しいタイル7、割安に見える",
  "chat.chatter.line06": "残り5秒までパックは温存",
  "chat.chatter.line07": "誰かがタイル2に$250突っ込んだ、リスペクト",
  "chat.chatter.line08": "タイル6のプール、今は割高すぎる",
  "chat.chatter.line09": "あと1パックでそのタイル、上位ティアに進化する",
  "chat.chatter.line10": "またスナイパーに勝率荒らされた",
  "chat.chatter.line11": "ずっと下位カードばかり、そろそろ大当たり来るはず",
  "chat.chatter.line12": "あのクジラ見とけ、いつも勝つタイルに寄せてくる",
  "chat.chatter.line13": "タイル1、今セッションまだ一度も来てない、そろそろだ",
  "chat.chatter.line14": "さっきの当たりは即売却、買い取り額は妥当だった",
  "chat.chatter.line15": "カウンタースナイプ来るぞ、覚えとけ",
  "chat.chatter.line16": "この10秒でリーダーが2回入れ替わった",
  "chat.chatter.line17": "今夜Mythicを狙ってる人いる？",
  "chat.chatter.line18": "カードはキープした、絵が綺麗すぎて売れない",
  "chat.chatter.line19": "終盤のパックでも時計はリセットされない、これ好き",
  "chat.chatter.line20": "タイル8のプールが倍になった、何か来るぞ",
  "chat.chatter.line21": "序盤は小さく、終盤で大きく、これが勝ち筋",
  "chat.chatter.line22": "あの保持・売却のタイマー、毎回焦る",
  "chat.chatter.line23": "今は対抗馬の方がリーダーより価値ありそう",
  "chat.chatter.line24": "タイル5への綺麗なスナイプ、正確すぎる",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "テーブル補助パネル",
  "chat.surface.chat": "チャット",
  "chat.surface.activity": "マイアクティビティ",
  "chat.activity.ariaLabel": "自分だけのアクティビティ",
  "chat.activity.filtersAria": "アクティビティを絞り込む",
  "chat.activity.filter.all": "すべて",
  "chat.activity.filter.packs": "パック",
  "chat.activity.filter.bids": "ベット",
  "chat.activity.filter.rewards": "報酬",
  "chat.activity.filter.feats": "実績",
  "chat.activity.filter.clan": "クラン",
  "chat.activity.today": "今日",
  "chat.activity.yesterday": "昨日",
  "chat.activity.status.pending": "保留中",
  "chat.activity.status.finalized": "確定済み",
  "chat.activity.status.reversed": "取り消し済み",
  "chat.activity.finalizedAria": "確定済みレシート",
  "chat.activity.signInTitle": "履歴を見るにはサインイン",
  "chat.activity.signInBody": "パック、ベット、報酬、実績、クランの非公開レシートがここに表示されます。",
  "chat.activity.loading": "レシートを読み込み中",
  "chat.activity.loadOlder": "過去のレシートを読み込む",
  "chat.activity.points": "{points}ポイント",
  "chat.activity.event.packBid.title": "パックをプレイ",
  "chat.activity.event.packBid.detail": "タイル{tile}へのエントリーが確定しました。",
  "chat.activity.event.roundWon.title": "勝利タイル",
  "chat.activity.event.roundWon.detail": "タイル{tile}がこのボードで勝利しました。",
  "chat.activity.event.roundLost.title": "ラウンド確定",
  "chat.activity.event.roundLost.detail": "タイル{tile}はこのボードで勝利しませんでした。",
  "chat.activity.event.roundRefunded.title": "パック返金",
  "chat.activity.event.roundRefunded.detail": "タイル{tile}へのベットが返金されました。",
  "chat.activity.event.chaseWon.title": "チェイス的中",
  "chat.activity.event.chaseWon.detail": "ボードのチェイス報酬が支払われました。",
  "chat.activity.event.achievementDetail": "あなたのプレイで解除されました。",
  "chat.activity.event.clanAchievementDetail": "クランでのプレイで解除されました。",
  "chat.activity.unavailableTitle": "アクティビティを利用できません",
  "chat.activity.unavailableBody": "レシートを読み込めませんでした。しばらくしてから非公開フィードをもう一度お試しください。",
  "chat.activity.retry": "再試行",
  "chat.activity.emptyTitle": "まだ何もありません",
  "chat.activity.emptyBody": "確定したパック、ベット、報酬、実績、クランの操作がここに表示されます。",
  "chat.unlock.eyebrow": "実績解除",
  "chat.unlock.clanEyebrow": "クラン実績解除",
  "chat.unlock.dismiss": "実績通知を閉じる",
} as Record<string, string>;
