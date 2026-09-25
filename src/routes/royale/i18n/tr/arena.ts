// Turkish (Türkçe): "arena" segment - every user-visible string from
// pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel surface: the rail,
// the wheel stage + leader-line callouts, the clock, the snipe tray, the
// double-bid opt-in dialog, and the lock->reveal cinema's three beats).
//
// {token} interpolation follows royaleI18n.ts's file-header convention.
//
// Terminology notes for this segment: "pot" and "pool" both render as
// "havuz", matching core/board's binding glossary. "The Chase" is
// "Kovalamaca" (same rendering everywhere in this locale). "Snipe" (the
// last-second auto-bet mechanic) is kept as an established loanword, the
// way Turkish gaming slang already keeps "snipe" untranslated. The wheel's
// SPIN renders as "çark dönüşü" / "dönüş", deliberately NOT "çekiliş", which
// every other segment reserves for a card pull or the winner draw. Register
// is FORMAL throughout ("Siz").
export default {
  "arena.you": "SİZ",
  "arena.youAvatarLetter": "S",
  "arena.common.card": "kart",
  "arena.common.cards": "kart",
  "arena.matchLabel": "MAÇ #{n}",
  "arena.pageTitle": "Kart arenası",
  "arena.backToBoard": "← Tahtaya dön",

  "arena.rail.ariaLabel": "Koleksiyonunuz",
  "arena.rail.heading": "KOLEKSİYONUNUZ",
  "arena.rail.practiceNote": "Deneme seti. Bu rafı kendi kartlarınızla doldurmak için tahtada tur kazanın.",
  "arena.rail.emptyNote": "Elinizde kart yok. Payınızı geri almak için havuzu kazanın.",
  "arena.rail.enterWheel": "ÇARKA GİR",
  "arena.rail.armSnipe": "SNIPE KUR",
  "arena.rail.hint": "Bir kartı bahis etmek için çift tıklayın. Ya da kartları seçip ÇARKA GİR'e basın. Boşluk seçer, A snipe'ı kurar.",

  "arena.railCard.armedSuffix": "Snipe için kuruldu.",
  "arena.railCard.hint": "Boşluk seçer, A snipe'ı kurar. Arenaya bahis etmek için çift tıklayın.",
  "arena.railCard.armedTag": "KURULU",

  "arena.snipe.trayHeading": "SNIPE KURULU",
  "arena.snipe.disarm": "KALDIR",
  "arena.snipe.firesAt": "T eksi 2 sn'de tetiklenir",
  "arena.snipe.carries": "Sıradaki maça taşınır",

  "arena.board.sectionAriaLabel": "Arena çarkı",
  "arena.board.noCap": "Kart tavanı yok. Tek kilit saattir.",
  "arena.board.wheelDecides": "Çark karar verir",
  "arena.board.nextMatchLabel": "Sıradaki maç",
  "arena.board.potLabel": "HAVUZ",
  "arena.board.wheelAriaEnter": "Seçili {count} {cardWord} çarka gir",
  "arena.board.wheelAriaIdle": "Çark. Girmek için koleksiyonunuzdan kart seçin.",
  "arena.board.youWin": "SİZ KAZANDINIZ",
  "arena.board.nameWins": "{name} KAZANIYOR",
  "arena.board.emptyWheelNote": "Çark açık. Nakit değil kart bahis edin: değer payınız yayınınızı ve şansınızı belirler. Kovalamaca %0 alır. Protokol tam kartlarla %7 ücret kuralı uygular; kazanan kalan tüm kartları alır.",
  "arena.board.tableHint": "Girişleriniz çarkta değer payınız kadar yer kaplar. Yayınız şansınızdır.",
  "arena.board.resultsLink": "Son tur sonuçlarını gör →",

  "arena.clock.locked": "KİLİTLİ",
  "arena.clock.settled": "SONUÇLANDI",
  "arena.clock.locksIn": "KİLİTLENMEYE",
  "arena.countdown.secondsSuffix": "sn",

  "arena.cinema.closeAriaLabel": "Gösterimi kapat",
  "arena.cinema.closeTitle": "Kapat (Esc)",
  "arena.cinema.beatCopy.contestants": "YARIŞMACILAR",
  "arena.cinema.beatCopy.spin": "ÇARK DÖNÜŞÜ",
  "arena.cinema.beatCopy.settle": "SONUÇLANMA",
  "arena.cinema.beatCopyShort.contestants": "OYUNCULAR",
  "arena.cinema.beatCopyShort.spin": "DÖNÜŞ",
  "arena.cinema.beatCopyShort.settle": "SONUÇLAN",
  "arena.cinema.contestantsAriaLabel": "Yarışmacılar",
  "arena.cinema.contestantsHeadline": "YARIŞMACILAR",
  "arena.cinema.oddsToWin": "KAZANMA ŞANSI %{pct}",
  "arena.cinema.hintContestants": "Çark karar verir. Şimdi döndürmek için tıklayın.",
  "arena.cinema.spinAriaLabel": "Çark dönüşü",
  "arena.cinema.lockedOn": "KİLİTLENDİ",
  "arena.cinema.hintSpin": "Dönüşü atlamak için tıklayın.",
  "arena.cinema.settleAriaLabel": "Sonuçlanma",
  "arena.cinema.winnerTag": "KAZANAN",
  "arena.cinema.youTakePot": "HAVUZU ALIYORSUNUZ",
  "arena.cinema.takesPot": "HAVUZU ALIYOR",
  "arena.cinema.shelfWinner": "KAZANANA",
  "arena.cinema.shelfChase": "KOVALAMACA",
  "arena.cinema.shelfProtocol": "PROTOKOL",
  "arena.cinema.smallPotNote": "Kovalamaca hiçbir şey almaz. Protokolün %7 kuralı {count} {cardWord} seçti; kazanan kalan tüm kartları alır.",
  "arena.cinema.resultsLink": "Son tur sonuçlarını gör",
  "arena.cinema.hintSettle": "Arenaya dönmek için herhangi bir yere tıklayın.",
  "arena.cinema.barToWinner": "{value} · kazanana {count} {cardWord}",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Çift tıklamada otomatik bahis?",
  "arena.doubleBid.body": "Koleksiyonunuzdaki bir karta çift tıklayarak doğrudan arenaya bahis edin. Bunu açalım mı?",
  "arena.doubleBid.enable": "Etkinleştir",
  "arena.doubleBid.dismiss": "Şimdi değil",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "CARD ARENA'YA BAĞLANILIYOR",
  "arena.backend.loadingBody": "Arena'nın yayındaki sürümü ve oyuncu oturumunuz denetleniyor…",
  "arena.backend.loadingCollection": "Koleksiyonunuz denetleniyor…",
  "arena.backend.mainnetPreparingTitle": "MAINNET ARENA BAĞLANDI",
  "arena.backend.mainnetPreparingBody": "Bu tam salt okunur sürüm sağlıklı. Fonlama, kart edinme, giriş, çekiliş ve uzlaşma devre dışı kalır.",
  "arena.backend.mainnetPreparingCollection": "Hiçbir Mainnet kartı satın alınmadı veya taşınmadı. Ayrı olarak yetkilendirilen envanter hazır olana kadar Arena salt okunur kalır.",
  "arena.backend.mainnetRelease": "Sürüm {commit} · dağıtım {deployment} · sıfır imza, yayın, etki veya kopya",
  "arena.backend.unavailableTitle": "CARD ARENA GÜNCELLENİYOR",
  "arena.backend.unavailableBody": "Bu oyun sürümü hazır olana kadar girişler duraklatıldı. Kartlarınız yerinde duruyor.",
  "arena.backend.unavailableCollection": "Arena güncellenirken koleksiyon görüntülenemez.",
  "arena.backend.connectTitle": "OYNAMAK İÇİN BAĞLAN",
  "arena.backend.connectBody": "Sağlayıcıya bağlı kartlarınızı yüklemek ve çarka girmek için doğrulanmış bir Privy oturumu gerekir.",
  "arena.backend.connectCollection": "Kartlarınızı yüklemek için oyuncu oturumunuzu bağlayın.",
  "arena.backend.retry": "TEKRAR DENE",
} as Record<string, string>;
