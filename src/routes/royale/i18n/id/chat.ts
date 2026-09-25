// Indonesian (Bahasa Indonesia): "chat" segment. MACHINE-CONSISTENT QUALITY,
// FLAGGED FOR NATIVE PASS (see core.ts's header for the full id terminology
// glossary and the pack/packs English-loanword rule). Source of truth for
// every user-visible string owned by RoyaleChatPanel.tsx,
// RoyaleChatMessageBody.tsx, royaleChatModel.ts (ambient chatter pool + the
// table-event copy) and royaleChatLinks.ts (chatPlatformLinkLabel). Same key
// set as en/chat.ts.
//
// LOCALE-FROZEN NOTE: chat messages (ambient bot lines + table-event rows)
// are composed ONCE at post time and stored as plain strings. Switching the
// UI language mid session translates all NEW chat activity but never
// rewrites messages already sitting in the feed/history.
//
// "Mythic" in chat.chatter.line17 is the Starter/Elite/Legendary/Grail/
// Mythic PACK TIER brand name and stays English.
export default {
  "chat.rooms.table": "Meja",
  "chat.rooms.sendTo": "Kirim ke",
  "chat.rooms.joinHint": "Pasang taruhan pada petak untuk membuka ruangnya.",
  "chat.rooms.messageTargets": "Ruang pesan",
  "chat.composer.sendFailed": "Pesan gagal dikirim. Coba lagi.",
  "chat.composer.audienceChanged": "Ruang berubah. Pesan yang belum dikirim telah dihapus.",
  "chat.composer.sessionUnavailable": "Sesi chat tidak tersedia. Muat ulang dan coba lagi.",
  "chat.auth.tileLeadBold": "Pasang taruhan pada petak untuk chat",
  "chat.auth.tileBody": ". Meja dan ruang petak terbuka setelah pack pertama Anda diterima.",
  "chat.auth.sessionUnavailableBold": "Sesi chat tidak tersedia",
  "chat.auth.sessionUnavailableBody": ". Muat ulang untuk memulihkan pengiriman aman.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Obrolan meja",
  "chat.header.title": "Obrolan meja",
  "chat.header.fontControlAriaLabel": "Ukuran teks obrolan",
  "chat.header.fontSmaller": "Kecilkan ukuran teks obrolan",
  "chat.header.fontLarger": "Besarkan ukuran teks obrolan",
  "chat.header.collapseShow": "Tampilkan obrolan",
  "chat.header.collapseHide": "Sembunyikan obrolan",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "TARIKAN GRAIL",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "RONDE #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Membuka hasil ronde di tab baru.",
  // JSX composition: "won by " (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "dimenangkan oleh",
  "chat.event.wonBy": "dimenangkan oleh {name}",
  "chat.event.foldedIntoPot": "masuk ke dalam pot",
  "chat.event.roundWinsTitle": "{tile} menang {pot}",
  "chat.event.bestPull": "tarikan terbaik {name} ({value})",
  "chat.event.chaseAward": "Perburuan +{amount}",
  "chat.event.youWon": "Anda +{amount}",
  "chat.event.youLost": "Anda kalah",
  "chat.message.showOriginal": "diterjemahkan · lihat asli",
  "chat.message.showTranslation": "lihat terjemahan",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "Lompat ke terbaru",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Hanya tautan attn yang tampil di sini.",
  "chat.composer.rateLimitNotice": "Terlalu cepat mengirim. Coba lagi sesaat lagi.",
  "chat.composer.placeholder": "Katakan sesuatu…",
  "chat.composer.inputAriaLabel": "Pesan obrolan",
  "chat.composer.sendAriaLabel": "Kirim pesan",
  "chat.composer.sendLabel": "Kirim",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Masuk untuk mengobrol",
  "chat.auth.body": ", ruangan ini hanya bisa dibaca sampai Anda terhubung (kanan atas).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Membuka halaman kartu di tab baru",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Membuka halaman kartu di tab latar belakang.",
  "chat.messageBody.viewCard": "Lihat kartu",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Halaman kartu",
  "chat.link.roundResult": "Hasil ronde",
  "chat.link.profile": "Profil",
  "chat.link.collection": "Koleksi",
  "chat.link.theBoard": "Papan",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "kotak 3 cepat sekali penuhnya",
  "chat.chatter.line02": "siapa terus nyaplok pemimpin tiap ronde",
  "chat.chatter.line03": "tarikan grail ronde kemarin gila banget",
  "chat.chatter.line04": "rally gampang - semua numpuk ke pemimpin",
  "chat.chatter.line05": "kotak 7 yang baru kelihatannya kemurahan",
  "chat.chatter.line06": "nyimpen pack saya buat lima detik terakhir",
  "chat.chatter.line07": "ada yang baru taruh $250 di kotak 2, salut",
  "chat.chatter.line08": "bagian pot di kotak 6 sekarang kemahalan",
  "chat.chatter.line09": "satu pack lagi kotak itu naik ke tier yang lebih kaya",
  "chat.chatter.line10": "sniper ngerusak peluang saya lagi",
  "chat.chatter.line11": "saya terus dapat kartu recehan, harusnya udah waktunya tarikan besar",
  "chat.chatter.line12": "liatin si whale - dia selalu nyium kotak yang menang",
  "chat.chatter.line13": "kotak 1 belum kena sepanjang sesi, udah waktunya",
  "chat.chatter.line14": "langsung jual tarikan terakhir saya, beli-kembalinya adil kok",
  "chat.chatter.line15": "counter-snipe segera datang, catat aja",
  "chat.chatter.line16": "pemimpin ganti dua kali dalam sepuluh detik terakhir",
  "chat.chatter.line17": "ada lagi yang ngejar tangga Mythic malam ini",
  "chat.chatter.line18": "kartunya saya simpan - artnya kebagusan buat dijual",
  "chat.chatter.line19": "pack yang telat ga pernah reset jamnya, suka banget",
  "chat.chatter.line20": "pot kotak 8 baru aja dobel, ada yang lagi masak",
  "chat.chatter.line21": "pack kecil di awal, pack besar di akhir - satu-satunya cara main",
  "chat.chatter.line22": "timer simpan/jual itu selalu berhasil bikin saya kelabakan",
  "chat.chatter.line23": "penantang keliatan lebih worth it dibanding pemimpin sekarang",
  "chat.chatter.line24": "snipe mulus di kotak 5, presisi banget",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Panel pendamping meja",
  "chat.surface.chat": "Obrolan",
  "chat.surface.activity": "Aktivitas saya",
  "chat.activity.ariaLabel": "Aktivitas pribadi saya",
  "chat.activity.filtersAria": "Filter aktivitas",
  "chat.activity.filter.all": "Semua",
  "chat.activity.filter.packs": "Pack",
  "chat.activity.filter.bids": "Taruhan",
  "chat.activity.filter.rewards": "Hadiah",
  "chat.activity.filter.feats": "Pencapaian",
  "chat.activity.filter.clan": "Klan",
  "chat.activity.today": "Hari ini",
  "chat.activity.yesterday": "Kemarin",
  "chat.activity.status.pending": "Tertunda",
  "chat.activity.status.finalized": "Final",
  "chat.activity.status.reversed": "Dibatalkan",
  "chat.activity.finalizedAria": "Struk final",
  "chat.activity.signInTitle": "Masuk untuk melihat riwayat Anda",
  "chat.activity.signInBody": "Struk pribadi untuk pack, taruhan, hadiah, pencapaian, dan klan Anda akan muncul di sini.",
  "chat.activity.loading": "Memuat struk Anda",
  "chat.activity.loadOlder": "Muat yang lebih lama",
  "chat.activity.points": "{points} poin",
  "chat.activity.event.packBid.title": "Pack dimainkan",
  "chat.activity.event.packBid.detail": "Entri kotak {tile} sudah final.",
  "chat.activity.event.roundWon.title": "Kotak pemenang",
  "chat.activity.event.roundWon.detail": "Kotak {tile} memenangkan papan.",
  "chat.activity.event.roundLost.title": "Ronde selesai",
  "chat.activity.event.roundLost.detail": "Kotak {tile} tidak memenangkan papan ini.",
  "chat.activity.event.roundRefunded.title": "Dana pack dikembalikan",
  "chat.activity.event.roundRefunded.detail": "Taruhan kotak {tile} dikembalikan.",
  "chat.activity.event.chaseWon.title": "Perburuan berhasil",
  "chat.activity.event.chaseWon.detail": "Hadiah Perburuan di papan telah dibayarkan.",
  "chat.activity.event.achievementDetail": "Terbuka lewat permainan Anda.",
  "chat.activity.event.clanAchievementDetail": "Terbuka bersama klan Anda.",
  "chat.activity.unavailableTitle": "Aktivitas tidak tersedia",
  "chat.activity.unavailableBody": "Struk Anda tidak dapat dimuat. Coba muat lagi feed pribadi sebentar lagi.",
  "chat.activity.retry": "Coba lagi",
  "chat.activity.emptyTitle": "Belum ada apa-apa",
  "chat.activity.emptyBody": "Tindakan pack, taruhan, hadiah, pencapaian, dan klan yang sudah final akan muncul di sini.",
  "chat.unlock.eyebrow": "Pencapaian terbuka",
  "chat.unlock.clanEyebrow": "Pencapaian klan terbuka",
  "chat.unlock.dismiss": "Tutup notifikasi pencapaian",
} as Record<string, string>;
