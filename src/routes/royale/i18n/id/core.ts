// Indonesian (Bahasa Indonesia): MACHINE-CONSISTENT QUALITY, FLAGGED FOR
// NATIVE PASS (same convention as ja/ko/zh-Hans/zh-Hant). Same key set as
// en/core.ts. See royaleI18n.ts for the {token} interpolation convention and
// the "no em dash" rule.
//
// Segment: core (the original Phase-1 flat dictionary) PLUS the two
// cross-surface namespaces shell.* (the /lab/royale board-route chrome:
// header status, round-metrics rail, board region labels, the logged-out
// invitation, the phone drawer toggles) and runtime.* (copy produced by the
// plain, non-component .ts modules: rail / recap / xProfile / sellBack /
// winShare / serverWallet / video / game). Do NOT add new SURFACE keys to
// this file, add them to the segment file for the surface they belong to
// instead (board, cinema, arena, onboarding, docs, pages, chat, misc in this
// same directory).
//
// Terminology (binding across every id segment): "ronde" = round, "pot" =
// the round's pool/pot, "Perburuan" = The Chase's rolling jackpot (the word
// "jackpot" itself stays "jackpot", an established loanword), "kotak" =
// tile, "pendukung" = backer(s)/the player who bids on a tile, "taruhan" =
// bet/stake (noun), "bertaruh" = bet/bid/back (verb), "jual kembali" = sell
// back / sell-back, "tarikan" = pull/draw (a card pull from a pack;
// "undian" is reserved for the winner draw/lottery-style draw itself),
// "brankas" = vault, "kartu grading" = graded/slab card, "terbukti adil" =
// provably fair, "pendukung teratas" = top backer, "Anda" = "You" (the
// player's own seat, kept formal throughout). "uang receh" = the LOOSE
// CHANGE mechanic (never "heat", see docs.ts's own header for the full rule).
// Ordinary rarity words (Common/Uncommon/Rare/Epic) DO translate (Umum/Tidak
// Umum/Langka/Epik) - only the five pack TIER NAMES below stay English.
//
// BRAND WORD "pack"/"packs" (owner rule for id, 2026-07-31): the Indonesian
// word "paket" is BANNED here (it normally means parcel/package, not a TCG
// pack). Every value that names the generic pack noun keeps the English
// loanword verbatim: singular "pack", plural "packs" (the English plural
// spelling is kept as-is, no Indonesian "-s" is invented) - the same
// convention fr / es-419 / pt-BR already use for this exact rule.
//
// The five pack TIER NAMES (Starter, Elite, Legendary, Grail, Mythic) plus
// attn ROYALE, ATTN Protocol, USDC, X, Privy and CollectorCrypt stay in
// English everywhere, including mid-sentence. See royaleI18n.ts's file
// header for the key/interpolation convention.
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Bahasa",
  "settings.languageSectionAria": "Pengaturan bahasa",
  "settings.languageSearchPlaceholder": "Cari bahasa",
  "settings.languageNoResults": "Tidak ada bahasa yang cocok",
  "settings.languageHint": "Berlaku langsung. Cari berdasarkan nama atau ketik untuk menyaring.",
  "settings.languageInputAria": "Bahasa, cari dan pilih",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Grup pengaturan",
  "settings.searchPlaceholder": "Cari pengaturan",
  "settings.searchClear": "Hapus pencarian",
  "settings.searchResultsAria": "Pengaturan yang cocok",
  "settings.searchNoResults": "Tidak ada yang cocok dengan “{query}”. Coba nama hal yang ingin Anda ubah.",
  "settings.backToGroups": "Semua pengaturan",
  "gear.cards.heading": "Kartu",
  "gear.cards.sectionAria": "Pengaturan kartu",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Taruhan {bids} · minimum {amount}",
  "gear.section.summary.display": "Pop-up {popups} · potret {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Musik {music} · efek {sfx}",
  "gear.section.summary.autosell": "{count} aturan jual otomatis aktif",
  "gear.section.summary.hotkeys": "{count} hotkey ditetapkan",

  // --- Shared words --------------------------------------------------------
  "common.on": "AKTIF",
  "common.off": "NONAKTIF",
  "common.set": "ATUR",
  "common.clear": "HAPUS",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "Kotak {n}",
  "common.tileShort": "T{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Taruhan",
  "gear.betting.sectionAria": "Pengaturan taruhan",
  "gear.betting.provider.label": "Penyedia pack",
  "gear.betting.provider.automatic": "Otomatis (utamakan Collector Crypt)",
  "gear.betting.provider.hint": "Mode otomatis mengutamakan Collector Crypt saat tersedia dan hanya boleh memakai fallback yang terverifikasi. Memilih penyedia tertentu bersifat ketat: jika tidak tersedia, taruhan ditolak.",
  "gear.betting.provider.automaticHint": "Otomatis · utamakan Collector Crypt",
  "gear.betting.provider.strictHint": "Hanya {provider} · tanpa fallback",
  "gear.betting.provider.unavailable": "{provider} (tidak tersedia)",
  "gear.betting.provider.selectedUnavailable": "{provider} tidak tersedia. Taruhan ketat ditolak dan pilihan tidak pernah diganti.",
  "gear.betting.provider.actual": "Dipenuhi oleh {provider}",
  "gear.betting.provider.accepted": "Diterima oleh {provider}",
  "gear.betting.disableBids.label": "Nonaktifkan taruhan",
  "gear.betting.disableBids.hint":
    "Mengunci taruhan Anda: ketukan pada kotak tidak lagi memasang taruhan, jadi Anda bisa menonton (atau menyerahkan layar ke orang lain) tanpa risiko bertaruh tanpa sengaja. Bagian permainan lainnya tetap berjalan.",
  "gear.betting.minBid.label": "Taruhan minimum",
  "gear.betting.minBid.hint":
    "Taruhan terkecil yang bisa dipasang lewat satu ketukan. Besar taruhan Anda tidak bisa turun di bawah ini, jadi ketukan cepat tidak pernah memasang lebih kecil dari yang Anda maksud (batas bawah $5 untuk mencegah taruhan palsu).",
  "gear.betting.upgradeCap.label": "Batas biaya peningkatan",
  "gear.betting.upgradeCap.placeholder": "tanpa batas",
  "gear.betting.upgradeCap.hint":
    "Biaya maksimum yang bisa dikenakan dari satu klik peningkatan. Peningkatan yang lebih mahal akan ditampilkan pudar, jadi kotak yang ramai tidak bisa mengejutkan Anda dengan tagihan besar.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Tampilan",
  "gear.display.sectionAria": "Pengaturan tampilan",
  "gear.display.chipFloats.label": "Munculan taruhan",
  "gear.display.chipFloats.hint": "Tampilkan gelembung kecil \"+$X · nama\" yang muncul mengambang saat seseorang bertaruh pada sebuah kotak.",
  "gear.display.floatThreshold.label": "Sembunyikan taruhan di bawah",
  "gear.display.floatThreshold.placeholder": "tampilkan semua taruhan",
  "gear.display.floatThreshold.hint":
    "Hanya munculkan gelembung untuk taruhan sebesar ini atau lebih besar. Kosongkan (atau atur $0) untuk menampilkan semua taruhan, ini membuat papan tetap tenang saat banyak taruhan kecil berdatangan.",
  "gear.display.hidePortraits.label": "Sembunyikan potret pemain",
  "gear.display.hidePortraits.hint": "Menyembunyikan lingkaran potret pemain lain di atas kotak. Penanda Anda sendiri tetap terlihat.",
  "gear.display.fullscreenLandscape.label": "Layar penuh dalam lanskap",
  "gear.display.fullscreenLandscape.hint":
    "Di ponsel, ketukan berikutnya dalam lanskap menyembunyikan bilah peramban. Di iPhone Safari bilahnya tetap ringkas; Tambahkan ke Layar Utama memberi layar penuh yang sebenarnya.",
  "gear.display.replayTour.label": "Putar ulang tur sambutan",
  "gear.display.replayTour.hint": "Buka lagi tur sambutan dari langkah pertama.",
  "gear.display.couch.label": "Teks besar (TV/sofa)",
  "gear.display.headerCollapse.label": "Ciutkan header",
  "gear.display.headerCollapse.hint": "Melipat bilah atas agar papan dan kartu memenuhi layar. Panah di header mengembalikannya.",
  "gear.display.couch.hint":
    "Memperbesar teks bacaan di seluruh permainan: obrolan, dokumen, label, dan angka uang, berukuran nyaman untuk bermain dari sofa. Tata letak papan tidak berubah. Juga bisa diaktifkan dengan ?couch=1 pada alamat.",
  "gear.display.couch.suggested": "Ini tampak seperti peramban TV atau konsol. Teks besar dibuat untuk layar seperti ini.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Pengungkapan",
  "gear.reveals.sectionAria": "Pengaturan pengungkapan",
  "gear.reveals.turbo.label": "Pengungkapan turbo",
  "gear.reveals.turbo.hint":
    "Mempercepat pertunjukan pengungkapan sehingga Anda lebih cepat sampai ke hasil Anda. Momen-momen besar tetap mendapat jeda. Nonaktif secara default, pertunjukan lengkap tetap tampil untuk pemain lain.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Suara",
  "gear.sound.sectionAria": "Pengaturan suara",
  "gear.sound.sfx.label": "Efek suara",
  "gear.sound.sfx.hint":
    "Bunyi klik chip, pembukaan dan penguncian ronde, roda pemenang, dan pertunjukan pengungkapan. Semuanya disintesis langsung di peramban Anda, tidak ada yang perlu dimuat.",
  "gear.sound.music.label": "Musik",
  "gear.sound.music.hint":
    "Mengikuti alur ronde: membangun selama fase taruhan, memuncak di detik-detik terakhir, lalu turun saat pengungkapan. Mulai setelah ketukan atau tombol pertama Anda dan berhenti sejenak saat Anda berpindah tab.",
  "gear.sound.musicStyle.label": "Gaya musik",
  "gear.sound.musicStyle.piano": "Piano tenang",
  "gear.sound.musicStyle.snowmelt": "Salju mencair",
  "gear.sound.musicStyle.hearthfire": "Api perapian",
  "gear.sound.musicStyle.grotto": "Gua keemasan",
  "gear.sound.musicStyle.arcade": "Arcade cepat",
  "gear.sound.musicStyle.kart": "Reli kart",
  "gear.sound.musicStyle.galaxy": "Waltz bintang",
  "gear.sound.musicStyle.hint": "Piano tenang adalah melodi lembut dan santai. Arcade cepat cerah dan bertempo tinggi. Perpindahan terjadi pada birama berikutnya, di tengah ronde.",
  "gear.sound.musicVolume.label": "Volume musik",
  "gear.sound.sfxVolume.label": "Volume efek",
  "gear.sound.volume.label": "Volume",
  "gear.sound.volume.aria": "Volume utama",
  "gear.sound.volume.hint": "Satu volume utama untuk efek dan musik sekaligus.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Aturan jual otomatis",
  "gear.autosell.sectionAria": "Aturan jual otomatis",
  "gear.autosell.intro":
    "Atur sekali, dan setiap kemenangan yang cocok akan otomatis dijual kembali: tanpa perlu memilih simpan/jual. Yang tidak cocok tetap akan menanyakan Anda, seperti biasa.",
  "gear.autosell.everyWin.label": "Jual otomatis setiap kemenangan",
  "gear.autosell.everyWin.hint":
    "Mencairkan setiap kartu yang Anda menangkan pada tarif beli kembali begitu kartu itu didapat, tanpa perlu memilih simpan atau jual. Grail tidak pernah dijual otomatis. Ini adalah cara cepat untuk mengaktifkan keempat sakelar rarity di bawah sekaligus.",
  "gear.autosell.belowValue.label": "Jual jika nilainya di bawah",
  "gear.autosell.placeholderOff": "nonaktif",
  "gear.autosell.rarity.label": "Jual berdasarkan rarity",
  "gear.autosell.rarity.aria": "Jual otomatis berdasarkan rarity",
  "gear.autosell.rarity.hint":
    "Kategori rarity CollectorCrypt, dibaca dari mesin pack asal setiap kartu. Rentang dolar pastinya untuk satu kategori berbeda-beda tiap pack, jadi kartu $200 bisa saja rare di satu mesin, tapi common di mesin lain yang lebih mahal.",
  "gear.autosell.nonVintage.label": "Jual kartu non-vintage",
  "gear.autosell.belowGrade.label": "Jual jika grade di bawah",
  "gear.autosell.grader.label": "Jual berdasarkan grader",
  "gear.autosell.grader.hint":
    "Pertahankan satu grader dan hanya jual otomatis kartu darinya yang grade-nya di bawah angka yang Anda atur. Hapus centang satu grader untuk menjual otomatis semua kartu darinya. Hapus centang semuanya untuk menjual otomatis semua yang Anda menangkan. Setiap grader memakai skala berbeda, jadi setiap batas bawah berdiri sendiri.",
  "gear.autosell.grader.aria": "Jual otomatis berdasarkan grader",
  "gear.autosell.grader.keep": "SIMPAN",
  "gear.autosell.grader.sellAll": "JUAL SEMUA",
  "gear.autosell.grader.other": "Lainnya / tanpa grade",
  "gear.autosell.grader.placeholderKeepAll": "simpan semua",
  "gear.autosell.grader.placeholderSellAll": "jual semua",
  "gear.autosell.grader.ariaGradeSuffix": "jual di bawah grade",
  "gear.autosell.summaryActive": "Aktif:",
  "gear.autosell.summaryNone": "Belum ada aturan jual otomatis. Setiap kemenangan tetap akan menanyakan Anda untuk simpan atau jual.",
  "gear.autosell.turnOffAll": "NONAKTIFKAN SEMUA",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Tombol pintas taruhan",
  "gear.hotkeys.sectionAria": "Tombol pintas taruhan",
  "gear.hotkeys.intro":
    "Tekan tombol suatu kotak untuk bertaruh padanya sebesar taruhan Anda saat ini. Tidak perlu mouse. Klik salah satu tombol di bawah, lalu tekan tombol yang Anda inginkan. Dua kotak tidak bisa berbagi tombol yang sama, jadi menetapkan ulang akan memindahkannya. Esc membatalkan, Backspace menghapus.",
  "gear.hotkeys.enabled.label": "Taruhan dengan tombol angka",
  "gear.hotkeys.enabled.hintOn": "Tombol aktif selama fase taruhan. Menekan tombol suatu kotak langsung memasang taruhan Anda.",
  "gear.hotkeys.enabled.hintOff": "Tombol nonaktif. Menekan tombol suatu kotak tidak memasang taruhan apa pun.",
  "gear.hotkeys.enabled.hintUnset": "Belum ditentukan. Aktifkan tombol di sini, atau tekan tombol suatu kotak selama fase taruhan lalu pilih Aktifkan.",
  "gear.hotkeys.listAria": "Tombol pintas taruhan kotak",
  "gear.hotkeys.tileLabel": "Kotak {n}",
  "gear.hotkeys.pressKeyPrompt": "Tekan sebuah tombol…",
  "gear.hotkeys.setKey": "Atur tombol",
  "gear.hotkeys.clear": "Hapus",
  "gear.hotkeys.ariaPressToBind": "Tekan sebuah tombol untuk mengikat Kotak {n}",
  "gear.hotkeys.ariaShortcut": "Pintasan Kotak {n} adalah {key}. Klik untuk mengikat ulang.",
  "gear.hotkeys.ariaNoShortcut": "Kotak {n} belum punya pintasan. Klik untuk mengaturnya.",
  "gear.hotkeys.ariaClearShortcut": "Hapus pintasan Kotak {n}",
  "gear.hotkeys.unboundWarning": "Belum ada tombol untuk {list}. Kotak-kotak itu tidak punya pintasan papan ketik sampai Anda mengaturnya.",
  "gear.hotkeys.resetButton": "Kembalikan ke bawaan",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "Bagian attn ROYALE",
  "nav.board": "PAPAN",
  "nav.results": "HASIL",
  "nav.rankingsFull": "PERINGKAT",
  "nav.rankingsShort": "RANK",
  "nav.collectionFull": "KOLEKSI",
  "nav.collectionShort": "KARTU",
  "nav.profile": "PROFIL",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Papan",
  "mobileNav.results": "Hasil",
  "mobileNav.ladder": "Peringkat",
  "mobileNav.collection": "Koleksi",
  "mobileNav.profile": "Profil",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "Dokumen",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "Lab attn ROYALE",
  "shell.header.statusAria": "Status ronde",
  "shell.header.collapse": "Sembunyikan header",
  "shell.header.expand": "Tampilkan header",
  "shell.header.round": "Ronde #{n}",
  "shell.header.turboTitle": "Waktu ronde dipercepat",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Ringkasan ronde",
  "shell.metrics.totalPool": "Total pot",
  "shell.metrics.packsLive": "Pack aktif",
  "shell.metrics.yourStake": "Taruhan Anda",
  "shell.metrics.selectedBet": "Taruhan terpilih",
  "shell.board.aria": "Papan attn ROYALE",
  "shell.board.label": "Papan",
  "shell.board.phaseOpen": "Klik kotak mana pun untuk mendukungnya, taruhan akan tersusun ulang menjadi tumpukan pack terbaik",
  "shell.board.phaseLock": "Terkunci · pack sedang dibuka",
  "shell.board.phaseSettled": "Ronde selesai",
  "shell.board.metaOpen": "Pot {pool} · 3% mengisi Perburuan · pack terbuka saat terkunci",
  "shell.board.metaClosed": "Satu kotak memenangkan pot berdasarkan peluang berbobot yang dapat diverifikasi.",
  "shell.board.reopenReveal": "↗ Buka ulang pengungkapan",
  "shell.connectNudge":
    "Masuk ke permainan dan setor dana untuk mulai mendukung kotak. Ronde tetap berjalan di latar belakang.",
  "shell.decision.cardFallback": "kartu Anda",
  "shell.mobile.close": "Tutup",
  "shell.mobile.chat": "Obrolan",
  "shell.mobile.chatOpenAria": "Buka obrolan meja",
  "shell.mobile.chatCloseAria": "Tutup obrolan meja",
  "shell.mobile.cards": "Kartu",
  "shell.mobile.cardsOpenAria": "Buka kartu Anda untuk menjual atau menarik",
  "shell.mobile.cardsCloseAria": "Tutup kartu Anda",
  "shell.mobile.players": "Pemain",
  "shell.mobile.playersOpenAria": "Buka pemain, diurutkan berdasarkan taruhan",
  "shell.mobile.playersCloseAria": "Tutup pemain",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* — royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "USDC permainan",
  "runtime.rail.privySessionCredit": "Kredit sesi Privy",
  "runtime.rail.houseCredit": "kredit rumah",
  "runtime.rail.connectPrivy": "Hubungkan Privy untuk menambah USDC permainan",
  "runtime.rail.privySession": "Sesi Privy",
  "runtime.rail.depositAction": "Tambah +{amount} {label} · {source}",
  "runtime.rail.privyAccount": "Akun Privy",
  "runtime.rail.house": "Rumah",
  "runtime.rail.depositReceipt": "Struk {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "Ketuk pack mana pun untuk bertaruh {amount}. Setiap kotak juga punya +{low} / +{high} sendiri.",
  "runtime.rail.sellBack": "Jual kembali → +{amount} saldo",

  // runtime.recap.* — royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "Anda",
  "runtime.recap.topBacker": "Pendukung teratas",
  "runtime.recap.topCardOutcome": "kartu teratas · keputusan simpan/jual",
  "runtime.recap.backer": "Pendukung",
  "runtime.recap.cardWon": "kartu dimenangkan",
  "runtime.recap.chaseLootReleased": "Jarahan Perburuan dilepas",
  "runtime.recap.theChase": "Perburuan",
  "runtime.recap.sweptIntoVault": "disapu ke brankas",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "biaya protokol",
  "runtime.recap.soldBack": "Dijual kembali",
  "runtime.recap.intoSplit": "+{amount} ke dalam pembagian",

  // runtime.xProfile.* — royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "Koneksi X belum tersedia.",
  "runtime.xProfile.connected": "Terhubung",

  // runtime.sellBack.* — royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Kartu tidak dikenal",

  // runtime.winShare.* — royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "MENANG",
  "runtime.winShare.headlineGrailPull": "TARIKAN GRAIL",
  "runtime.winShare.headlineCardsWon": "KARTU DIMENANGKAN",
  "runtime.winShare.cardInImage": "Kartu ada di gambar.",
  "runtime.winShare.receiptInImage": "Struk ada di gambar.",

  // runtime.serverWallet.* — royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Penarikan sedang offline saat ini. Tidak ada dana yang berpindah.",
  "runtime.serverWallet.noSigner": "Tidak ada penanda tangan dompet yang terhubung untuk sesi ini. Tidak ada dana yang berpindah.",
  "runtime.serverWallet.nonceUnavailable": "Tidak bisa mendapatkan nonce otorisasi penarikan dari server.",
  "runtime.serverWallet.signatureUnavailable": "Dompet tidak mengembalikan tanda tangan atas nonce penarikan.",
  "runtime.serverWallet.boundaryLabel": "Kredit meja dan USDC dompet server adalah saldo yang terpisah.",

  // runtime.video.* — royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Perekaman layar tidak tersedia di peramban ini.",
  "runtime.video.noRecorderFormat": "Peramban ini tidak memiliki format video MediaRecorder.",
  "runtime.video.canceled": "Render dibatalkan.",
  "runtime.video.unreachable": "Tidak dapat menjangkau layanan render di {url}.",
  "runtime.video.rejected": "Layanan render menolak ronde ini: {detail}",
  "runtime.video.requestFailed": "Permintaan render gagal ({status}).",
  "runtime.video.noJobId": "Layanan render tidak mengembalikan id tugas.",
  "runtime.video.lostJob": "Tugas render hilang ({status}).",
  "runtime.video.lostContact": "Kehilangan kontak dengan layanan render di tengah proses.",
  "runtime.video.renderFailed": "Render gagal: {error}.",
  "runtime.video.unknownError": "kesalahan tidak diketahui",
  "runtime.video.downloadFailed": "Video selesai tetapi tidak dapat diunduh.",
  "runtime.video.downloadHttpFailed": "Video selesai tetapi pengunduhan gagal ({status}).",
  "runtime.video.emptyVideo": "Layanan render mengembalikan video kosong.",
  "runtime.video.shareTagline": "Pertarungan pack, setiap undian dapat diverifikasi. Tonton rondenya:",

  // runtime.game.* — useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "Ruangan aktif. Ronde dimulai otomatis - {seconds}s terbuka, lalu pengungkapan.",
  "runtime.game.chaseVault": "Brankas Perburuan",
  "runtime.game.aTile": "sebuah kotak",
  "runtime.game.aPack": "sebuah pack",
  "runtime.game.theCard": "kartu itu",
  "runtime.game.collectedSplit": "Ronde {round} · mengumpulkan {amount} USDC dari pembagian.",
  "runtime.game.chaseDropSplit": "Ronde {round} · Perburuan menjatuhkan {award} pada kotak Anda · bagian Anda: {amount} USDC.",
  "runtime.game.grailSecured": "Grail diamankan: menyimpan {card} ({amount}) di koleksi Anda.",
  "runtime.game.keptCard": "Menyimpan {card} ({amount}) → ditambahkan ke koleksi Anda.",
  "runtime.game.soldCardSettle": "Menjual kembali {card} seharga {amount} USDC ({pct}% dari {value}).",
  "runtime.game.roundVoidedRefund":
    "Ronde {round} dibatalkan. Tidak ada pack yang dibuka, jadi tidak ada undian nilai kartu. Taruhan {amount} Anda telah dikembalikan.",
  "runtime.game.roundVoidedAll":
    "Ronde {round} dibatalkan. Tidak ada pack yang dibuka, jadi tidak ada undian nilai kartu. Semua taruhan dikembalikan.",
  "runtime.game.chaseFiredYours.one": "Perburuan meletus: {n} kartu ({amount}) dilepas ke kotak Anda {tile}.",
  "runtime.game.chaseFiredYours.other": "Perburuan meletus: {n} kartu ({amount}) dilepas ke kotak Anda {tile}.",
  "runtime.game.chaseFiredTable.one":
    "Perburuan meletus pada Ronde {round}: {award} + {n} kartu jatuh pada {tile}, dibagi oleh para pendukungnya.",
  "runtime.game.chaseFiredTable.other":
    "Perburuan meletus pada Ronde {round}: {award} + {n} kartu jatuh pada {tile}, dibagi oleh para pendukungnya.",
  "runtime.game.cardsAssigned.one": "{n} kartu diberikan kepada Anda ({amount}) → koleksi.",
  "runtime.game.cardsAssigned.other": "{n} kartu diberikan kepada Anda ({amount}) → koleksi.",
  "runtime.game.cardPoolsLive": "Pool kartu aktif: {cards} kartu di {pools} pool mesin CollectorCrypt.",
  "runtime.game.minBid": "Taruhan minimum adalah {amount}. Naikkan taruhan dan coba lagi.",
  "runtime.game.resolveFailed": "Ronde ini tidak dapat diselesaikan, jadi tidak ada yang dibayarkan. Ronde berikutnya dimulai seperti biasa.",
  "runtime.game.stakeRefused": "Taruhan itu terlalu besar untuk {tile}. Tidak ada yang ditagih. Turunkan lalu coba lagi.",
  "runtime.game.shortfallBack":
    "USDC tidak cukup untuk mendukung {tile} dengan {amount}. Anda memiliki {held}. Tambahkan dana untuk melanjutkan.",
  "runtime.game.shortfallNextPack":
    "USDC tidak cukup untuk melengkapi pack berikutnya di {tile}. Butuh {amount}, Anda memiliki {held}. Tambahkan dana untuk melanjutkan.",
  "runtime.game.youBacked": "Anda mendukung {tile} dengan {amount}.",
  "runtime.game.packCompleted": "Anda melengkapi pack berikutnya di {tile} (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Menjual {cards} seharga {amount} USDC (beli kembali CC) untuk mendanai taruhan.",
  "runtime.game.backedFunded": "Mendukung {tile} dengan {amount} (didanai dari inventaris).",
  "runtime.game.demoStakesRefunded":
    "Taruhan demo dihapus: {amount} yang telah Anda klik telah dikembalikan. Anda mulai dari $0.",
  "runtime.game.demoStakesCleared": "Taruhan demo dihapus: Anda mulai setiap ronde dari $0 sampai Anda mendukung sebuah kotak.",
  "runtime.game.deposited": "Menyetor {amount} USDC ke dompet Anda.",
  "runtime.game.referralBonus": "Bonus referral dikreditkan: +{amount} USDC.",
  "runtime.game.signedAndSent": "Menandatangani & mengirim {amount} USDC di {cluster} · sig {sig}….",
  "runtime.game.signedNoBroadcast":
    "Menandatangani {amount} USDC di {cluster} ({method}, tanpa siaran chain) · sig {sig}….",
  "runtime.game.soldCard": "Menjual {card} seharga {amount} USDC (beli kembali {pct}%).",
} as Record<string, string>;
