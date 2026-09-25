// Indonesian (Bahasa Indonesia): "onboarding" segment. MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (see core.ts's header for the full id
// terminology glossary and the pack/packs English-loanword rule). Owns
// RoyaleOnboardingGate.tsx (the invite + $25 Starter pack + profile gate),
// RoyaleWelcomeTour.tsx (the 4-step how-it-works tour), RoyaleRotateGate.tsx
// (the mobile-portrait rotate prompt), and RoyaleSettingsOverlay.tsx's two
// chrome strings. Also owns royaleProfile.ts's profile-form validation
// reasons, RoyalePresenceChip.tsx, RoyaleLiveStreamHud.tsx,
// RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx and
// RoyaleFundShortfallToast.tsx. Same key set as en/onboarding.ts.
//
// NOTE: the "attn ROYALE" wordmark itself is never translated anywhere in
// the app - it stays hardcoded English in the component even inside an
// otherwise-translated sentence. "Starter" (the pack tier name) is a brand
// term and also stays English inside onboarding.invite.ledeStarter /
// onboarding.welcome.ledeStarter.
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "undangan",
  "onboarding.invite.title": "Khusus undangan",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "attn ROYALE saat ini masih khusus undangan. Masukkan kode Anda untuk mengklaim taruhan {amount} dan ambil kursi Anda.",
  "onboarding.invite.ledeStarter": "attn ROYALE saat ini masih khusus undangan. Masukkan kode Anda untuk mengklaim pack Starter gratis senilai {amount} dan ambil kursi Anda.",
  "onboarding.invite.inputPlaceholder": "KODE UNDANGAN",
  "onboarding.invite.inputAriaLabel": "Kode undangan",
  "onboarding.invite.unlockButton": "Buka",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "Belum punya kode? Tanya orang yang mengundang Anda, atau tempel tautan {link} Anda.",
  "onboarding.invite.errorInvalidCode": "Masukkan kode undangan dari undangan Anda.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "kredit",
  "onboarding.welcome.grantLabelStarterPack": "pack starter",
  "onboarding.welcome.titleBack": "Selamat datang kembali",
  "onboarding.welcome.title": "Selamat datang di meja",
  "onboarding.welcome.backLede": "Lanjutkan dari terakhir kali, {name}. Profil dan saldo Anda tersimpan di perangkat ini.",
  "onboarding.welcome.fallbackName": "pemain",
  "onboarding.welcome.ledeStake": "Undangan Anda berlaku untuk taruhan {amount}. Atur nama dan ambil kursi Anda.",
  "onboarding.welcome.ledeStarter": "Undangan Anda berlaku untuk pack Starter gratis senilai {amount}. Pertaruhkan pack dan ambil kursi Anda.",
  "onboarding.welcome.continueWithX": "Lanjutkan dengan X",
  "onboarding.welcome.optionalHint": "opsional",
  "onboarding.welcome.connectWallet": "Hubungkan dompet",
  "onboarding.welcome.playFreeNote": "Main gratis sekarang juga. Tidak perlu dompet atau masuk akun.",
  "onboarding.welcome.or": "atau",
  "onboarding.welcome.continueAsTemplate": "Lanjutkan sebagai {name}",
  "onboarding.welcome.fallbackProfileName": "profil Anda",
  "onboarding.welcome.close": "Tutup",
  "onboarding.welcome.createProfile": "Buat profil Anda",
  "onboarding.welcome.skipGuest": "Lewati dan main sebagai tamu",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Main sekarang",
  "onboarding.welcome.pickNameFirst": "Atau pilih nama dulu",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Atur profil Anda",
  "onboarding.profile.xPhotoAlt": "Foto profil X Anda",
  "onboarding.profile.connectedAsTemplate": "Terhubung sebagai {handle}",
  "onboarding.profile.xAccountFallback": "akun X",
  "onboarding.profile.walletLabelTemplate": "Dompet {address}",
  "onboarding.profile.displayNameLabel": "Nama tampilan",
  "onboarding.profile.displayNamePlaceholder": "Bagaimana kami harus memanggil Anda?",
  "onboarding.profile.handleLabel": "Handel",
  "onboarding.profile.handlePlaceholder": "namaanda",
  "onboarding.profile.handleHint": "Id meja unik Anda. Huruf, angka, dan garis bawah.",
  "onboarding.profile.handleTaken": "Handel itu sudah dipakai di perangkat ini.",
  "onboarding.profile.startButtonTemplate": "Mulai bermain · {amount} ditanggung rumah",
  "onboarding.profile.back": "Kembali",
  "onboarding.profile.skip": "Lewati",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "Cara kerja attn ROYALE",
  "onboarding.tour.skip": "Lewati",
  "onboarding.tour.step1.eyebrow": "01 · Dukung sebuah kotak",
  "onboarding.tour.step1.titleUsdc": "Taruh USDC pada kotak yang Anda sukai",
  "onboarding.tour.step1.titlePacks": "Dukung kotak yang Anda sukai dengan pack",
  "onboarding.tour.step1.bodyUsdc": "Setiap kotak adalah slot yang Anda dukung dengan USDC. Semakin besar yang Anda taruh pada sebuah kotak, semakin besar bagian Anda dari kemenangannya. Tumpuk pada satu kotak, atau sebar ke beberapa.",
  "onboarding.tour.step1.bodyPacks": "Setiap kotak adalah slot yang Anda dukung dengan pack. Semakin banyak yang Anda tumpuk pada sebuah kotak, semakin besar bagian Anda dari kemenangannya. Muat penuh satu kotak, atau sebar ke beberapa.",
  "onboarding.tour.step2.eyebrow": "02 · Terkunci & terbuka",
  "onboarding.tour.step2.title": "Saat terkunci, setiap kotak membuka pack-nya",
  "onboarding.tour.step2.body": "Saat ronde terkunci, setiap kotak yang didukung merobek pack-nya dan menarik kartu grading asli secara langsung, lewat undian yang dapat diverifikasi, tepat di depan Anda.",
  "onboarding.tour.step3.eyebrow": "03 · Nilai terbaik menang",
  "onboarding.tour.step3.title": "Kotak paling kaya mengambil pot",
  "onboarding.tour.step3.bodyUsdc": "Bobot setiap kotak adalah nilai kartu yang ditariknya ditambah USDC-nya. Semakin berat kotaknya, semakin baik peluangnya. Menang, dan Anda membagi seluruh pot ronde itu.",
  "onboarding.tour.step3.bodyPacks": "Bobot setiap kotak adalah nilai kartu yang ditariknya ditambah pack yang dipertaruhkan padanya. Semakin berat kotaknya, semakin baik peluangnya. Menang, dan Anda membagi seluruh pot ronde itu.",
  "onboarding.tour.step4.eyebrow": "04 · Simpan, jual, kejar",
  "onboarding.tour.step4.title": "Cairkan, dan pantau Perburuan",
  "onboarding.tour.step4.body": "Simpan kartu kemenangan Anda sebagai kartu grading atau jual kembali pada tarif beli kembalinya. Dan Perburuan adalah jackpot bergulir yang bisa jatuh pada kotak mana pun, ronde mana pun.",
  "onboarding.tour.back": "Kembali",
  "onboarding.tour.next": "Berikutnya",
  "onboarding.tour.enterBoard": "Masuk ke papan",

  // --- RoyaleWelcomeTour.tsx v2: SPOTLIGHT guided tour (owner 2026-07-31:
  // "highlight the sections, darken the others that arent being introduced,
  // and show the items with an arrow and a description"). Seven coach-mark
  // steps anchored to the LIVE board. The v1 step1-step4 keys above stay
  // (append-only contract) but are no longer rendered. {amount} in spot7 is
  // the free Starter grant (FREE_PLAY_STARTING_USD, currency-formatted by the
  // component). spot3 ships touch variants: the component picks *Touch on
  // coarse pointers, where betting is tap-to-arm then tap-to-confirm.
  // PACKS framing only (owner: "its not chip usdc for now ... its bet packs");
  // a USDC-live pass would add Usdc variants like the v1 keys had.
  "onboarding.tour.stepTag": "Langkah {n} dari {total}",
  "onboarding.tour.spot1.eyebrow": "Taruhan Anda",
  "onboarding.tour.spot1.title": "Pilih pack Anda",
  "onboarding.tour.spot1.body": "Anda bertaruh dengan pack. Setiap pack tersegel berisi kartu TCG bergred, didukung oleh Collector Crypt. Pilih pack yang ingin Anda mainkan.",
  "onboarding.tour.spot2.eyebrow": "Ukuran tumpukan",
  "onboarding.tour.spot2.title": "Pilih berapa banyak",
  "onboarding.tour.spot2.body": "Penghitung ini mengatur berapa banyak pack yang ditaruhkan tiap kali bertaruh. Satu sudah cukup untuk memulai. Naikkan saat Anda ingin bertaruh lebih besar.",
  "onboarding.tour.spot3.eyebrow": "Pasang taruhan Anda",
  "onboarding.tour.spot3.title": "Klik sebuah kotak untuk mempertaruhkannya",
  "onboarding.tour.spot3.titleTouch": "Ketuk sebuah kotak untuk mempertaruhkannya",
  "onboarding.tour.spot3.body": "Mengklik sebuah kotak menaruh pack Anda padanya. Semakin banyak pack yang Anda tumpuk pada sebuah kotak, semakin besar bagian Anda jika kotak itu menang. Dukung habis-habisan satu kotak atau sebar ke beberapa.",
  "onboarding.tour.spot3.bodyTouch": "Ketuk sebuah kotak sekali untuk menyiapkannya, lalu ketuk lagi untuk mengonfirmasi taruhan. Semakin banyak pack yang Anda tumpuk pada sebuah kotak, semakin besar bagian Anda jika kotak itu menang.",
  "onboarding.tour.spot4.eyebrow": "Ronde ini",
  "onboarding.tour.spot4.title": "Pot dan jamnya",
  "onboarding.tour.spot4.body": "Setiap pack yang dipertaruhkan di papan mengisi pot ini. Saat jam menyentuh nol, taruhan terkunci dan setiap kotak yang didukung merobek pack-nya secara langsung.",
  "onboarding.tour.spot5.eyebrow": "Undiannya",
  "onboarding.tour.spot5.title": "Kotak yang berat lebih sering menang",
  "onboarding.tour.spot5.body": "Satu undian acak berbobot nilai memilih satu kotak. Kotak yang kalah menyerahkan kartu dan taruhannya; pendukung kotak pemenang membagi nilai ronde yang dapat didistribusikan sebanding dengan jumlah yang mereka masukkan.",
  "onboarding.tour.spot6.eyebrow": "Uang Anda",
  "onboarding.tour.spot6.title": "Saldo dan setoran",
  "onboarding.tour.spot6.body": "Saldo Anda ada di sini. Tambah dana lewat Setor dan tarik kapan saja Anda suka. Kemenangan mendarat di sini begitu sebuah ronde selesai.",
  "onboarding.tour.spot7.eyebrow": "Ditanggung rumah",
  "onboarding.tour.spot7.title": "pack Starter gratis senilai {amount} milik Anda",
  "onboarding.tour.spot7.body": "Anda mulai dengan pack Starter gratis senilai {amount}. Sudah dimuat di pemilih pack. Pilih kotak yang Anda sukai dan mulai.",
  "onboarding.tour.finish": "Mulai bermain",
 "onboarding.tour.paused": "Ronde dimulai - tur dilanjutkan tepat setelahnya.",
  "onboarding.tour.act2.choice": "Lihat satu ronde berjalan",
  "onboarding.tour.act2.choiceHint": "Sekitar 30 detik, termasuk reveal",
  "onboarding.tour.act2.bettingTitle": "Setiap pack yang dipasang jadi satu pot",
  "onboarding.tour.act2.bettingBody": "Pemain menumpuk pack di kotak-kotak. Setiap pack di papan mengisi satu pot, dan satu kotak mengambil semuanya.",
  "onboarding.tour.act2.drawTitle": "Nilai berubah jadi peluang",
  "onboarding.tour.act2.drawBody": "Porsi setiap kotak dari nilai semua kartu yang ditarik adalah peluangnya. Satu undian acak yang dapat diverifikasi dan berbobot nilai memilih pemenang.",
  "onboarding.tour.act2.losersTitle": "Setiap kotak yang kalah menyerahkan kartunya",
  "onboarding.tour.act2.losersBody": "Kartu dan uang tunai yang dapat didistribusikan dari seluruh papan berpindah ke pendukung kotak pemenang.",
  "onboarding.tour.act2.splitTitle": "Taruhanmu menentukan bagianmu",
  "onboarding.tour.act2.splitBody": "Pendukung kotak pemenang membagi uang tunai dan kartu ronde yang dapat didistribusikan dari semua kotak, sebanding dengan jumlah yang dimasukkan masing-masing ke kotak itu.",
  "onboarding.tour.act2.grailCaption": "Upacara grail",
  "onboarding.tour.act2.yourTurnEyebrow": "Giliran Anda",
  "onboarding.tour.act2.yourTurnTitle": "Starter pack Anda siap",
  "onboarding.tour.act2.yourTurnBody": "Papan kembali live. Pilih ubin dan pasang taruhan pack pertama Anda.",
  "onboarding.tour.act2.continue": "Masuk ke ronde",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "Putar ponsel Anda untuk bermain attn ROYALE",
  "onboarding.rotate.title": "Putar ponsel Anda ke samping",
  "onboarding.rotate.body": "Papan bermain paling baik dalam mode landscape. Putar untuk masuk ke ronde.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "Pengaturan",
  "onboarding.settingsClose": "Tutup pengaturan",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "Pilih handel agar pemain lain bisa menemukan Anda.",
  "onboarding.profileValidation.handleTooShort": "Handel minimal 3 karakter.",
  "onboarding.profileValidation.handleCharset": "Gunakan hanya huruf, angka, dan garis bawah.",
  "onboarding.profileValidation.nameRequired": "Tambahkan nama untuk ditampilkan di meja.",
  "onboarding.profileValidation.nameTooLong": "Batasi hingga {n} karakter.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "menonton",
  "onboarding.presence.tierPlaying": "bermain",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "Anda sedang bermain: {amount} dipertaruhkan ronde ini",
  "onboarding.presence.youWatching": "Anda sedang menonton",
  "onboarding.presence.youWatchingBackground": "Anda sedang menonton (tab latar belakang)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "{count} {tier} attn ROYALE saat ini. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "Anda: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  "onboarding.presence.otherTabs.one": "+{n} tab Anda sendiri lagi terbuka",
  "onboarding.presence.otherTabs.other": "+{n} tab Anda sendiri lagi terbuka",
  "onboarding.presence.othersBacking.one": "{n} orang lain mendukung sebuah kotak ronde ini",
  "onboarding.presence.othersBacking.other": "{n} orang lain mendukung sebuah kotak ronde ini",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "Kesehatan siaran attn ROYALE",
  "onboarding.streamHud.eyebrow": "Siaran",
  "onboarding.streamHud.statusConnecting": "Menghubungkan",
  "onboarding.streamHud.statusLive": "Live",
  "onboarding.streamHud.statusReconnecting": "Menghubungkan ulang",
  "onboarding.streamHud.statusError": "Masalah sinkronisasi",
  "onboarding.streamHud.reconnects.one": "{n} kali menghubungkan ulang",
  "onboarding.streamHud.reconnects.other": "{n} kali menghubungkan ulang",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "Ruangan ini diselesaikan dalam USDC.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Kartu yang terbuka",
  "onboarding.carousel.prevCard": "Kartu sebelumnya",
  "onboarding.carousel.nextCard": "Kartu berikutnya",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "Tampilkan {name}",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "USDC TIDAK CUKUP",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "Mendukung {slot} butuh {needed}. Anda punya {balance}.",
  "onboarding.fundShortfall.addFunds": "Tambah dana",
  "onboarding.fundShortfall.dismiss": "Tutup",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen" (Indonesian iOS: "Tambah ke Layar Utama").
  "onboarding.installHint.ios": "Ketuk {icon} lalu Tambah ke Layar Utama untuk layar penuh yang sebenarnya.",
  "onboarding.installHint.fullscreen": "Aktifkan layar penuh dan sembunyikan bilah peramban.",
  "onboarding.installHint.fullscreenCta": "Aktifkan layar penuh",
  "onboarding.installHint.dismiss": "Tutup",
} as Record<string, string>;
