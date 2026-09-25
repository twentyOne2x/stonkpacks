// Indonesian (Bahasa Indonesia): "arena" segment — every user-visible string
// from pages/RoyaleArenaRoute.tsx (the /lab/royale/arena wheel surface: the
// rail, the wheel stage + leader-line callouts, the clock, the snipe tray,
// the double-bid opt-in dialog, and the lock->reveal cinema's three beats).
// MACHINE-CONSISTENT QUALITY, FLAGGED FOR NATIVE PASS (see core.ts's header
// for the full id terminology glossary). "roda" is fixed as the id word for
// "the wheel" (arena's own gacha-wheel mechanic, distinct from "ronde" =
// round). Same key set as en/arena.ts.
//
// {token} interpolation follows royaleI18n.ts's file-header convention: the
// CALLER does a plain .replace("{token}", String(x)) — this file never
// changes shape for a dynamic value.
export default {
  "arena.you": "ANDA",
  "arena.youAvatarLetter": "A",
  "arena.common.card": "kartu",
  "arena.common.cards": "kartu",
  "arena.matchLabel": "PERTANDINGAN #{n}",
  "arena.pageTitle": "Arena kartu",
  "arena.backToBoard": "← Kembali ke papan",

  "arena.rail.ariaLabel": "Koleksi Anda",
  "arena.rail.heading": "KOLEKSI ANDA",
  "arena.rail.practiceNote": "Set latihan. Menangkan ronde di papan untuk mengisi rail ini dengan kartu Anda sendiri.",
  "arena.rail.emptyNote": "Tidak ada kartu di tangan. Menangkan pot untuk mengambil kembali bagian Anda.",
  "arena.rail.enterWheel": "MASUK KE RODA",
  "arena.rail.armSnipe": "SIAPKAN SNIPE",
  "arena.rail.hint": "Klik dua kali sebuah kartu untuk mempertaruhkannya. Atau pilih kartu dan tekan MASUK KE RODA. Spasi memilih, A menyiapkan snipe.",

  "arena.railCard.armedSuffix": "Disiapkan untuk snipe.",
  "arena.railCard.hint": "Spasi memilihnya, A menyiapkan snipe. Klik dua kali untuk mempertaruhkannya ke arena.",
  "arena.railCard.armedTag": "SIAP",

  "arena.snipe.trayHeading": "SNIPE SIAP",
  "arena.snipe.disarm": "BATALKAN",
  "arena.snipe.firesAt": "Aktif pada T-minus 2s",
  "arena.snipe.carries": "Terbawa ke pertandingan berikutnya",

  "arena.board.sectionAriaLabel": "Roda arena",
  "arena.board.noCap": "Tidak ada batas kartu. Jam adalah satu-satunya penguncinya.",
  "arena.board.wheelDecides": "Roda yang memutuskan",
  "arena.board.nextMatchLabel": "Pertandingan berikutnya dalam",
  "arena.board.potLabel": "POT",
  "arena.board.wheelAriaEnter": "Masukkan {count} {cardWord} terpilih ke roda",
  "arena.board.wheelAriaIdle": "Roda. Pilih kartu dari koleksi Anda untuk memasukkannya.",
  "arena.board.youWin": "ANDA MENANG",
  "arena.board.nameWins": "{name} MENANG",
  "arena.board.emptyWheelNote": "Roda sedang terbuka. Pertaruhkan kartu, bukan uang tunai: bagian nilai Anda menentukan busur dan peluang Anda. Perburuan mengambil 0%. Protokol menerapkan aturan biaya 7% dalam kartu utuh; pemenang menerima semua kartu lainnya.",
  "arena.board.tableHint": "Kartu yang Anda masukkan naik di roda sebagai bagian nilai Anda. Busur Anda adalah peluang Anda.",
  "arena.board.resultsLink": "Lihat hasil ronde sebelumnya →",

  "arena.clock.locked": "TERKUNCI",
  "arena.clock.settled": "SELESAI",
  "arena.clock.locksIn": "TERKUNCI DALAM",
  "arena.countdown.secondsSuffix": "s",

  "arena.cinema.closeAriaLabel": "Tutup pengungkapan",
  "arena.cinema.closeTitle": "Tutup (Esc)",
  "arena.cinema.beatCopy.contestants": "PARA PESERTA",
  "arena.cinema.beatCopy.spin": "PUTARAN",
  "arena.cinema.beatCopy.settle": "PENYELESAIAN",
  "arena.cinema.beatCopyShort.contestants": "PEMAIN",
  "arena.cinema.beatCopyShort.spin": "PUTAR",
  "arena.cinema.beatCopyShort.settle": "SELESAI",
  "arena.cinema.contestantsAriaLabel": "Para peserta",
  "arena.cinema.contestantsHeadline": "PARA PESERTA",
  "arena.cinema.oddsToWin": "PELUANG MENANG {pct}%",
  "arena.cinema.hintContestants": "Roda yang memutuskan. Klik untuk memutar sekarang.",
  "arena.cinema.spinAriaLabel": "Putaran roda",
  "arena.cinema.lockedOn": "TERKUNCI PADA",
  "arena.cinema.hintSpin": "Klik untuk melewati putaran.",
  "arena.cinema.settleAriaLabel": "Penyelesaian",
  "arena.cinema.winnerTag": "PEMENANG",
  "arena.cinema.youTakePot": "ANDA MENGAMBIL POT",
  "arena.cinema.takesPot": "MENGAMBIL POT",
  "arena.cinema.shelfWinner": "KE PEMENANG",
  "arena.cinema.shelfChase": "PERBURUAN",
  "arena.cinema.shelfProtocol": "PROTOKOL",
  "arena.cinema.smallPotNote": "Perburuan tidak mengambil apa pun. Aturan protokol 7% memilih {count} {cardWord}; pemenang menerima semua kartu lainnya.",
  "arena.cinema.resultsLink": "Lihat hasil ronde sebelumnya",
  "arena.cinema.hintSettle": "Klik di mana saja untuk kembali ke arena.",
  "arena.cinema.barToWinner": "{value} · {count} {cardWord} untuk pemenang",
  "arena.cinema.barOpen": "{value} · {count} {cardWord}",

  "arena.doubleBid.title": "Taruhan otomatis saat klik dua kali?",
  "arena.doubleBid.body": "Klik dua kali sebuah kartu di koleksi Anda untuk langsung mempertaruhkannya ke arena. Aktifkan ini?",
  "arena.doubleBid.enable": "Aktifkan",
  "arena.doubleBid.dismiss": "Nanti saja",

  // ARENA BACKEND GATE (arena.backend.*) — added 2026-08-15. These 10 keys
  // existed only in en, so the Card Arena connect / updating / loading gate
  // read English in all 19 other locales. "Card Arena" and "Privy" are proper
  // names and stay as they are.

  "arena.backend.loadingTitle": "MENGHUBUNGKAN KE CARD ARENA",
  "arena.backend.loadingBody": "Memeriksa rilis Arena yang sedang tayang dan sesi pemain Anda…",
  "arena.backend.loadingCollection": "Memeriksa koleksi Anda…",
  "arena.backend.mainnetPreparingTitle": "ARENA MAINNET TERSAMBUNG",
  "arena.backend.mainnetPreparingBody": "Rilis baca-saja yang tepat ini sehat. Pendanaan, perolehan kartu, masuk, pengundian, dan penyelesaian tetap dinonaktifkan.",
  "arena.backend.mainnetPreparingCollection": "Belum ada kartu Mainnet yang dibeli atau dipindahkan. Arena tetap baca-saja sampai inventaris yang diotorisasi secara terpisah siap.",
  "arena.backend.mainnetRelease": "Rilis {commit} · deployment {deployment} · nol penandatanganan, siaran, efek, atau duplikat",
  "arena.backend.unavailableTitle": "CARD ARENA SEDANG DIPERBARUI",
  "arena.backend.unavailableBody": "Pendaftaran dijeda sampai rilis permainan ini tersedia. Kartu Anda tidak berpindah.",
  "arena.backend.unavailableCollection": "Koleksi tidak tersedia selama Arena diperbarui.",
  "arena.backend.connectTitle": "HUBUNGKAN UNTUK BERMAIN",
  "arena.backend.connectBody": "Sesi Privy terverifikasi diperlukan untuk memuat kartu Anda yang terikat penyedia dan masuk ke roda.",
  "arena.backend.connectCollection": "Hubungkan sesi pemain Anda untuk memuat kartu.",
  "arena.backend.retry": "COBA LAGI",
} as Record<string, string>;
