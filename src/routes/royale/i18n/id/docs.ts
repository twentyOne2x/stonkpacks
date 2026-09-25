// Indonesian (Bahasa Indonesia): "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// MACHINE-CONSISTENT QUALITY, FLAGGED FOR NATIVE PASS (see core.ts's header
// for the full id terminology glossary and the pack/packs English-loanword
// rule). Same key set as en/docs.ts.
//
// Interpolation tokens ({starter}, {take}, etc.) are always filled in by the
// component with literal, locale-invariant values (pack tier names + USD
// prices, or bare percentages/durations) - never with translated text.
//
// BOLD EMPHASIS (docs.howItWorks.* only): values carry inline `**bold**`
// markers that the route renders as <b>. The marker pairs stay balanced but
// may move onto whichever words carry the emphasis in Indonesian, and the
// sentence may reorder around the {token}s. `**{token}**` (a bolded number)
// is normal and expected. `**` has no meaning in the other docs.* keys.
//
// NO SOURCE-FILE CITATIONS and NO "HEAT" (owner directives, 2026-07-29):
// nothing in this file names a filename, path or module in player copy, and
// the LOOSE CHANGE mechanic is never called "heat" or a transliteration of
// it. The Indonesian term is "uang receh" (small/leftover change), used
// consistently everywhere the mechanic is described, including inside the
// `docs.how.heatRemainder.*` KEYS (key names are never rendered, so they stay
// as-is for cross-locale parity; only their values changed).
export default {
  "docs.header.title": "Dokumen",
  "docs.header.back": "← Kembali ke papan",

  "docs.tabs.ariaLabel": "Tampilan dokumen",
  "docs.tabs.how": "Cara kerjanya",
  "docs.tabs.technical": "Teknis",

  "docs.how.intro": "Versi bahasa sederhana. Baca ini dulu, lalu buka Teknis untuk mekanisme persisnya.",
  "docs.technical.intro": "Mekanisme persisnya, dalam angka yang jelas.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "Apa itu attn ROYALE?",
  "docs.how.whatIsRoyale.a":
    "Permainan pembukaan pack secara langsung. Setiap ronde, pemain mendukung kotak dengan pack. Saat ronde terkunci, setiap kotak yang didukung merobek pack-nya secara langsung, dan pendukung satu kotak membagi seluruh pot.",

  "docs.how.whatIsPack.q": "Apa itu pack?",
  "docs.how.whatIsPack.a":
    "Tier berharga yang terbuka menjadi satu kartu grading asli begitu kotaknya terbuka. Tangganya adalah {starter}, {elite}, {legendary}, {grail}, dan {mythic}. Pack yang lebih besar menarik kartu yang lebih besar.",

  "docs.how.howBacking.q": "Bagaimana cara mendukung sebuah kotak?",
  "docs.how.howBacking.a":
    "Pilih kotak yang Anda sukai dan pertaruhkan pack padanya. Bertaruh bersama pemain lain pada kotak yang sama dan Anda berbagi kotak itu: bagian Anda dari kemenangan kotak itu sesuai dengan bagian pack yang Anda tambahkan sendiri.",

  "docs.how.heatRemainder.q": "Bagaimana jika taruhan saya tidak cukup untuk satu pack penuh?",
  "docs.how.heatRemainder.a":
    "Apa pun yang di bawah harga pack termurah tetap berada di kotak sebagai uang receh. Ia ikut bersama sisa taruhan Anda, tapi tidak membuka kartunya sendiri sampai tumbuh menjadi satu pack penuh, dan kartu yang terbukalah yang menentukan peluang.",

  "docs.how.howWheelPicks.q": "Bagaimana roda memilih pemenang?",
  "docs.how.howWheelPicks.a":
    "Saat terkunci, setiap kotak yang didukung merobek pack-nya secara langsung. Roda kemudian mendarat pada satu kotak, dan semakin kaya kartu yang terbuka di kotak itu, semakin besar bagiannya pada roda. Satu tarikan besar bisa membuat kotak kecil menjadi favorit. Pemilihan itu sendiri berasal dari undian acak yang dapat diverifikasi, tidak pernah dari seseorang.",

  "docs.how.whatDoIWin.q": "Apa yang saya menangkan?",
  "docs.how.whatDoIWin.aBefore": "Pendukung kotak pemenang membagi",
  "docs.how.whatDoIWin.aEmphasis": "seluruh pot ronde itu",
  "docs.how.whatDoIWin.aAfter":
    ", bukan hanya taruhan pada kotak itu saja, sebanding dengan apa yang masing-masing dari Anda pertaruhkan padanya. Pendukung terbesar kotak itu juga mendapat klaim pertama atas satu kartu terbaik kotak itu.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Simpan atau jual, apa bedanya?",
  "docs.how.keepOrSell.keepLabel": "Simpan",
  "docs.how.keepOrSell.keepBody": "menambahkan kartu ke koleksi Anda secara gratis.",
  "docs.how.keepOrSell.sellLabel": "Jual kembali",
  "docs.how.keepOrSell.sellBody": "membayarkan sebagian nilai kartu langsung ke saldo Anda dalam USDC, tanpa menunggu.",

  "docs.how.decisionTimeout.q": "Apa yang terjadi jika saya tidak memutuskan tepat waktu?",
  "docs.how.decisionTimeout.a":
    "Anda mendapat jendela waktu singkat untuk memilih. Biarkan waktu itu lewat dan kartu akan dijual kembali secara otomatis pada tarifnya saat itu, jadi apa pun yang Anda menangkan tidak akan pernah tersendat.",

  "docs.how.whatIsChase.q": "Apa itu Perburuan?",
  "docs.how.whatIsChase.a":
    "Jackpot bergulir yang diisi dari sebagian kecil pot setiap ronde. Bisa meletus di ronde mana pun, lewat undiannya sendiri yang independen, dan tarikan grail tidak memicunya. Saat meletus, seluruh jackpot dibayarkan ke pembagian pemenang ronde itu.",

  "docs.how.howToStartFree.q": "Bagaimana cara mulai gratis?",
  "docs.how.howToStartFree.a":
    "Bergabung dengan kode undangan dan klaim saldo gratis seukuran pack Starter. Tidak perlu dompet atau masuk akun, Anda bisa langsung main sebagai tamu.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Tangga pack",
  "docs.tech.packLadder.body":
    "Lima pack yang bisa Anda beli: {starter}, {elite}, {legendary}, {grail}, {mythic}. Satu taruhan menyusun pack terbesar yang mampu dibayarnya, yang terbesar lebih dulu. Sisa yang ada di bawah harga pack termurah tetap berada di kotak sebagai uang receh dan tidak membuka kartu apa pun. Taruhan yang ditempatkan sebagai satu pack tertentu tetap menjadi pack itu persis, hanya uang receh yang tersusun ke atas seiring bertambahnya taruhan.",

  "docs.tech.oddsWeighting.title": "Apa yang menentukan peluang: kartu yang terbuka pada sebuah kotak",
  "docs.tech.oddsWeighting.body":
    "Peluang menang sebuah kotak bukanlah apa yang dipertaruhkan padanya. Saat terkunci, setiap kotak yang didanai membuka pack-nya, dan bagian kotak itu dalam undian adalah nilai kartu yang baru saja dibukanya, diukur terhadap nilai semua kartu yang terbuka ronde itu. Satu tarikan besar membuat kotak kecil menjadi favorit. Kotak yang tidak membuka kartu apa pun sama sekali tidak punya peluang, dan uang receh saja tidak pernah membuka kartu. Jika satu ronde penuh tidak membuka kartu sama sekali, tidak ada yang bisa diundi: ronde itu dibatalkan dan setiap taruhan dikembalikan sepenuhnya.",

  "docs.tech.vrfDraw.title": "Undian pemenang berbasis seed VRF dan deterministik",
  "docs.tech.vrfDraw.body":
    "Setiap ronde menurunkan satu angka acak yang dapat diverifikasi dari resep tetap: id ronde, batas waktunya, papan yang dibekukan, jumlah tiket, dan entropi chain yang diambil setelah terkunci. Kotak pemenang adalah satu penelusuran deterministik dari angka itu di seluruh bobot kotak. Input yang sama selalu menghasilkan pemenang yang sama, bobot kotak dipublikasikan dan dikunci sebelum penelusuran terjadi, dan siapa pun bisa memeriksa ulang seluruh undian dari struk ronde itu setelahnya.",

  "docs.tech.settlementMath.title": "Perhitungan penyelesaian",
  "docs.tech.settlementMath.body":
    "Pendukung kotak pemenang membagi seluruh pot ronde, bukan hanya taruhan pada kotak mereka sendiri, sebanding dengan apa yang masing-masing pertaruhkan pada kotak itu. Potongan rumah sebesar {take} diambil dari atas: {chaseCut} membangun jackpot Perburuan, {protocolCut} mendanai protokol. Potongan itu dibayar dengan kartu sebisa mungkin, kartu cadangan termurah lebih dulu, dan kartu yang terlalu berharga untuk masuk potongan itu dilewati alih-alih dijual, jadi tarikan besar bukan yang diambil. Hanya yang tidak bisa ditutup oleh kartu yang keluar dari uang tunai pot.",

  "docs.tech.cardAllocation.title": "Siapa yang mendapat kartunya",
  "docs.tech.cardAllocation.body":
    "Hanya satu kartu terbaik kotak pemenang yang membawa keputusan simpan-atau-jual, dan itu milik pendukung terbesar kotak itu. Setiap kartu lain yang dibuka kotak itu dibagi ke pendukungnya sebanding dengan apa yang masing-masing pertaruhkan, kartu terbaik lebih dulu. Mengambil satu kartu memotong harga jual-kembalinya dari bagian tunai Anda sendiri, jadi ini pertukaran, bukan biaya: Anda tetap mengakhiri ronde dengan nilai yang sama baik dengan cara apa pun. Jika bagian tidak ada seorang pun yang bisa menutupi harga sebuah kartu, rumah membelinya dan uang tunai itu tetap berada di dalam pembagian, jadi kartu tidak pernah dipaksakan kepada siapa pun. Grail kedua di ronde yang sama tidak diperlakukan khusus di sini, ia dibagi bersama jarahan lainnya, dan Perburuan tidak pernah mengambil grail.",

  "docs.tech.sellBackRates.title": "Tarif jual kembali",
  "docs.tech.sellBackRates.body":
    "Setiap kartu membawa harga jual-kembali tetap yang ditentukan oleh pack asalnya: {entryRate} pada tingkat awal, {midRate} di tingkat menengah, {topRate} di tingkat atas. Menjual langsung membayarkan harga itu ke saldo Anda saat itu juga, dan menyimpan kartu tidak dikenakan biaya apa pun. Tarif ini mencerminkan tarif beli-kembali instan yang dipublikasikan untuk mesin yang sama di CollectorCrypt.",

  "docs.tech.chaseJackpot.title": "Jackpot Perburuan",
  "docs.tech.chaseJackpot.body":
    "Jackpot bergulir yang diisi {chaseCut} dari pot setiap ronde. Ia meletus lewat undiannya sendiri yang independen, kira-kira sekali seminggu pada kecepatan ronde normal, dan tarikan grail tidak memicunya. Saat meletus, seluruh jackpot dibayarkan ke pembagian pemenang ronde itu, lalu direset dan mulai terbangun kembali. Perburuan juga mengambil satu kartu per ronde bila memungkinkan, tapi hanya dari kotak yang kalah, tidak pernah kartu paling berharga ronde itu, dan tidak pernah grail.",

  "docs.tech.decisionWindow.title": "Jendela keputusan",
  "docs.tech.decisionWindow.body":
    "Memenangkan kartu utama sebuah kotak membuka jendela simpan-atau-jual selama {window} detik. Tidak ada jawaban sampai jendela itu tertutup, atau sampai terkunci di ronde berikutnya, akan menjual kartu itu pada tarifnya saat itu, jadi apa pun yang Anda menangkan tidak akan pernah tersendat.",

  "docs.tech.devnetCustody.title": "Kustodian USDC devnet",
  "docs.tech.devnetCustody.body":
    "Saldo berpindah sebagai transaksi USDC nyata di Solana devnet. Kustodian berjalan lewat dompet tertanam Privy Anda atau, sebagai cadangan, sepasang kunci khusus devnet yang tersimpan di peramban Anda sendiri, keduanya menandatangani jalur transfer persis sama yang dipakai kustodian produksi.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  // Derived from the COMMITTED engine at HEAD, same ground-truth rule as the
  // 2026-07-29 Technical rewrite: the money rails (deposit verify-then-credit,
  // debit-first withdrawals, refund-exactly-once), the card custody path
  // (win-time quote, delivery with retry, exercise-once sell-back), the
  // verified-identity account gate, and the void/refund rule.
  "docs.tech.voidRefund.title": "Pembatalan dan pengembalian dana",
  "docs.tech.voidRefund.body":
    "Sebuah ronde hanya bisa dimenangkan lewat kartu yang terbuka, jadi ronde di mana tidak ada kotak yang membuka kartu tidak punya apa pun untuk diundi. Ronde itu langsung dibatalkan: setiap taruhan di papan kembali sepenuhnya, rumah tidak mengambil apa pun, dan Perburuan tidak diisi apa pun. Catatan undian yang dipublikasikan dari ronde yang dibatalkan menunjukkan total kartu nol, itulah bukti bahwa pembatalan dipaksa oleh papan dan bukan dipilih oleh siapa pun.",

  "docs.tech.cardExits.title": "Kartu yang dimenangkan masuk ke dompet Anda",
  "docs.tech.cardExits.body":
    "Simpan sebuah kartu dan ia ditransfer ke dompet Anda sendiri sebagai transaksi bertanda tangan, dengan biaya jaringan dibayarkan untuk Anda. Jika dompet Anda belum bisa menerimanya, pengiriman itu ditahan dan dicoba lagi sampai berhasil, tidak pernah dijatuhkan. Jual sebuah kartu kembali dan Anda dibayar tepat sesuai harga yang dikutip pada saat Anda memenangkannya, tidak pernah dikutip ulang, dan kutipan itu hanya bisa dilaksanakan sekali: ia ditandai terpakai sebelum uangnya berpindah, jadi kartu yang sama tidak pernah bisa dibayarkan dua kali.",

  "docs.tech.deposits.title": "Setoran USDC",
  "docs.tech.deposits.body":
    "Setoran adalah transfer USDC di Solana yang Anda tanda tangani dari dompet Anda sendiri. Saldo Anda dikreditkan hanya setelah transfer itu dikonfirmasi on-chain ke perbendaharaan permainan, dengan jumlah dan tujuan dibaca dari chain itu sendiri, tidak pernah dari permintaannya. Setiap tanda tangan transaksi hanya bisa mengkredit tepat sekali, jadi memutar ulang sebuah setoran tidak bisa mengkredit dua kali, dan transfer yang datang melebihi batas per-transaksi dicatat sebagai utang yang harus dikembalikan kepada Anda, bukan menghilang.",

  "docs.tech.withdrawals.title": "Penarikan USDC",
  "docs.tech.withdrawals.body":
    "Penarikan mendebit saldo Anda lebih dulu, lalu mengirim USDC dari perbendaharaan ke tujuan yang Anda setujui: login terverifikasi Anda menandatangani persetujuan atas jumlah dan tujuan persis itu, dan permintaan yang tidak cocok dengan buktinya akan ditolak. Struk menyimpan tanda tangan transaksinya. Jika chain benar-benar menolak transfer itu, saldo Anda dikembalikan tepat sekali. Jika transfer sudah keluar tapi belum dikonfirmasi, tidak ada yang dikembalikan sampai chain memberi jawaban akhir, jadi satu penarikan tidak akan pernah dibayar dua kali, bahkan lewat sebuah restart sekalipun.",

  "docs.tech.identity.title": "Satu akun, bagaimana pun Anda masuk",
  "docs.tech.identity.body":
    "Masuk dengan Privy atau buktikan sebuah dompet Solana dengan menandatangani tantangan server satu-kali: kedua jalan itu menuju akun tetap yang sama, dikunci berdasarkan identitas terverifikasi dan tidak ada yang lain. Apa pun yang menggerakkan uang berjalan atas akun identitas yang membuktikan dirinya sendiri pada permintaan itu, dan nama, id, serta header yang diklaim dibuang begitu saja, jadi tidak seorang pun bisa mengarahkan setoran, taruhan, atau penarikan ke saldo orang lain.",

  "docs.tech.reconnect.title": "Sambung ulang dan mulai ulang",
  "docs.tech.reconnect.body":
    "Keluar akun dan uang berhenti bergerak: pada jalur USDC, setoran, taruhan, atau penarikan tanpa bukti kepemilikan akan ditolak. Masuk kembali dan akun yang sama sudah menunggu, dengan saldo dan kartu yang sama, karena semua yang Anda miliki hidup dalam buku besar yang tetap, bukan di halaman ini. Restart server memutar ulang buku besar itu dan mendarat pada angka yang sama, dan transfer yang sudah keluar tidak akan pernah dikirim kedua kalinya.",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  // The desktop sidebar/pager chrome: section headings and one short label
  // per page. Section and page SLUGS (the URL parts) live in
  // royaleDocsContent.tsx and never translate; these labels do.
  "docs.nav.ariaLabel": "Bagian dokumen",
  "docs.nav.overview": "Ringkasan",
  "docs.nav.prev": "Sebelumnya",
  "docs.nav.next": "Berikutnya",

  "docs.nav.section.introduction": "Pengantar",
  "docs.nav.section.gameplay": "Cara bermain",
  "docs.nav.section.cards": "Kartu dan kustodian",
  "docs.nav.section.money": "Uang",
  "docs.nav.section.fairness": "Keadilan",
  "docs.nav.section.account": "Akun",

  "docs.nav.page.whatIsRoyale": "Apa itu attn ROYALE",
  "docs.nav.page.packs": "Pack dan tangganya",
  "docs.nav.page.startFree": "Mulai gratis",
  "docs.nav.page.backing": "Mendukung sebuah kotak",
  "docs.nav.page.theDraw": "Undiannya",
  "docs.nav.page.winning": "Apa yang Anda menangkan",
  "docs.nav.page.chase": "Perburuan",
  "docs.nav.page.keepOrSell": "Simpan atau jual",
  "docs.nav.page.cardAllocation": "Siapa yang mendapat kartunya",
  "docs.nav.page.sellBack": "Tarif jual kembali",
  "docs.nav.page.cardDelivery": "Pengiriman kartu",
  "docs.nav.page.deposits": "Setoran",
  "docs.nav.page.withdrawals": "Penarikan",
  "docs.nav.page.settlement": "Perhitungan penyelesaian",
  "docs.nav.page.custody": "Kustodian USDC",
  "docs.nav.page.odds": "Apa yang menentukan peluang",
  "docs.nav.page.vrf": "Undian VRF",
  "docs.nav.page.voidRefund": "Pembatalan dan pengembalian dana",
  "docs.nav.page.identity": "Satu akun",
  "docs.nav.page.reconnect": "Sambung ulang dan mulai ulang",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE - ke mana setiap dolar bergerak",
  "docs.howItWorks.lead": "Aturan lengkap permainan ini. Bagaimana pemenang diundi, dan siapa yang mendapat kartunya.",
  "docs.howItWorks.backToBoard": "Kembali ke papan →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Bagaimana sebuah ronde berjalan",
  "docs.howItWorks.round.pickBet":
    "Pilih besar taruhan, lalu klik sebuah kotak: setiap klik menambahkan jumlah itu ke pot kotak tersebut.",
  "docs.howItWorks.round.yourShare":
    "**Bagian Anda** dari sebuah kotak = taruhan Anda ÷ total kotak itu. {stake} pada kotak {tile} adalah bagian **{pct}**. Jika kotak itu menang, Anda mendapat {pct} dari pembayarannya.",
  // ODDS CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // draw is weighted by REVEALED CARD VALUE, not by staked totals, and a
  // card-less board is voided and refunded. The old "tile total ÷ pool" and
  // "every whole dollar staked is one ticket" claims described a retired rule.
  "docs.howItWorks.round.winChance":
    "**Peluang menang** ditentukan saat pack robek, bukan saat bertaruh: saat ronde terkunci, setiap kotak yang didukung membuka pack-nya, dan bagian sebuah kotak dalam roda adalah nilai kartu yang baru saja dibukanya, diukur terhadap setiap kartu yang terbuka ronde itu.",
  "docs.howItWorks.round.tickets":
    "Kotak yang tidak membuka **kartu apa pun** tidak punya bagian sama sekali, dan jika satu ronde penuh tidak membuka kartu, ronde itu **dibatalkan** dan setiap taruhan kembali sepenuhnya.",
  "docs.howItWorks.round.vrf":
    "Saat terkunci, sebuah **VRF** (fungsi acak yang dapat diverifikasi) mengundi satu tiket pemenang dari angka-angka terkunci ronde itu: id ronde, batas waktunya, total setiap kotak, jumlah tiket. Tidak seorang pun, bahkan rumah, bisa mengarahkannya.",
  "docs.howItWorks.round.oddsAreReal": "Peluang yang ditampilkan pada setiap kotak adalah perhitungan undian yang persis itu, bukan sekadar rasa.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Apa yang dibeli taruhan Anda",
  "docs.howItWorks.buys.ladderLead": "Total sebuah kotak tersusun ulang menjadi pack, yang terbesar lebih dulu:",
  "docs.howItWorks.buys.example":
    "Contoh: kotak senilai **{amount}** membeli satu Legendary, satu Elite, dan satu Starter.",
  "docs.howItWorks.buys.change":
    "Uang yang terlalu kecil untuk pack berikutnya adalah **uang receh**: tetap dihitung ke pot dan bagian kemenangan Anda, tapi tidak membuka pack, dan kartu yang terbukalah yang menentukan peluang.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Sudah memegang Mythic? Tombol peningkatan menargetkan **satu Mythic penuh lagi** alih-alih pack yang lebih kecil. Tangganya tidak pernah turun kembali.",
  "docs.howItWorks.buys.cardsPerPack":
    "Saat terkunci, setiap kotak yang didanai membuka **satu kartu per pack penuh** yang dimilikinya, hingga **{max} kartu** ditampilkan di papan (sisanya tercantum di halaman hasil). Kotak yang hanya berisi uang receh tidak membuka apa pun.",
  "docs.howItWorks.buys.undeliverable":
    "Jika sebuah pack ternyata tidak bisa dikirimkan (habis, gangguan teknis, kehabisan waktu), biayanya dikembalikan kepada Anda sebagai uang tunai, bukan tersendat.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Apa yang didapat pemenang",
  "docs.howItWorks.winner.entirePool":
    "Pendukung kotak pemenang membagi **seluruh pot ronde**, bukan hanya pot kotak itu sendiri.",
  "docs.howItWorks.winner.proRata":
    "Pembagiannya **pro-rata**: masukkan {pct} dari kotak itu, dapatkan **{pct}** dari pembayarannya.",
  "docs.howItWorks.winner.take":
    "**{take}** dari setiap pot diambil dari atas sebelum pembagian: **{chaseCut}** mengisi jackpot Perburuan, **{protocolCut}** mendanai protokol (referral, pembelian kartu Perburuan, operasional, buyback token).",
  // TAKE CORRECTION (2026-07-29, aligned with the corrected /docs copy): the
  // committed fee path walks spare cards CHEAPEST first and SKIPS a card too
  // valuable to fit the take; there is no explicit headline/grail protection
  // rule, that mechanism is what keeps the big pulls off the block.
  "docs.howItWorks.winner.takeFunding":
    "Potongan {take} itu dibayar dengan kartu sebisa mungkin, kartu cadangan termurah lebih dulu, dan kartu yang terlalu berharga untuk masuk potongan itu dilewati alih-alih dijual, jadi tarikan besar bukan yang diambil. Hanya yang tidak bisa ditutup oleh kartu yang keluar dari uang tunai pot.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "Perburuan",
  "docs.howItWorks.chase.feed": "Perburuan adalah jackpot bergulir, diisi **{cut}** dari setiap pot.",
  "docs.howItWorks.chase.cardCut":
    "Bila memungkinkan, Perburuan mengambil bagiannya sebagai kartu alih-alih uang tunai, tapi hanya kartu dari kotak yang kalah bernilai **tidak lebih dari {cut}** dari pot, tidak pernah kartu paling berharga di ronde itu, dan tidak pernah grail.",
  "docs.howItWorks.chase.independentDraw":
    "Jackpot itu meletus lewat **undian acak independennya sendiri**, rata-rata sekitar **sekali seminggu** pada kecepatan ronde normal. Tarikan grail tidak memicunya.",
  "docs.howItWorks.chase.payout":
    "Saat meletus, **seluruh jackpot** dibayarkan ke pembagian pemenang ronde itu, lalu direset dan terbangun kembali dari asupan ronde berikutnya.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grail",
  "docs.howItWorks.grails.what":
    "**Grail** adalah tarikan paling langka dan paling berharga yang bisa dijatuhkan pack mana pun. Bahkan Starter seharga {price} pun bisa mengenainya.",
  "docs.howItWorks.grails.headlineGrail":
    "Jika kartu utama kotak pemenang itu sendiri adalah grail: **Simpan** mengharuskan pendukung teratas membeli bagian pendukung lain kotak itu (dipotong dari uang tunai mereka); **Jual** membagi pembayarannya **pro-rata ke seluruh kotak**, bukan hanya ke pendukung teratas.",
  "docs.howItWorks.grails.otherGrails":
    "Grail lain mana pun yang tertarik ronde itu (pada kotak berbeda, atau sebagai kartu tambahan) adalah jarahan bonus untuk pendukung pemenang, diperlakukan persis seperti kartu tambahan lainnya. Ia tidak pernah disapu ke Perburuan, dan karena potongan itu dibayar dengan kartu termurah lebih dulu, grail adalah kartu terakhir yang akan pernah dijangkaunya.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Siapa yang mendapat kartunya",
  "docs.howItWorks.cards.headline":
    "**Kartu utama** kotak pemenang (tarikan bernilai tertinggi tunggalnya) hanya milik pendukung terbesar kotak itu: Simpan gratis, atau Jual seharga tarif beli-kembalinya dalam uang tunai, dibayarkan kepadanya, tidak dibagi dengan sisa kotak.",
  "docs.howItWorks.cards.rest":
    "Setiap kartu lain yang ditarik kotak itu, ditambah jarahan bonus mana pun yang diserahkan dari kotak yang kalah, dibagi mulai dari nilai terbesar, sebanding dengan taruhan. Pendukung terbesar kotak itu biasanya berakhir dengan yang terbanyak, dan yang terbaik, di antaranya.",
  "docs.howItWorks.cards.deduction":
    "Mengambil salah satu kartu itu memotong harga beli-kembalinya dari bagian tunai Anda sendiri. Itu uang tunai yang sama yang akan Anda dapat dengan menjualnya, jadi Anda tidak kehilangan apa pun.",
  "docs.howItWorks.cards.neverForced":
    "Tidak mampu membelinya? Tidak pernah dipaksakan kepada Anda. Rumah membelinya sebagai gantinya, dan uang tunai itu tetap berada di dalam pembagian.",
  "docs.howItWorks.cards.workedExample":
    "**Contoh perhitungan.** Pot {pool}. **{take}** ({takeAmount}: {chaseAmount} Perburuan, {protocolAmount} protokol) diambil dari atas, biasanya dibayar oleh kartu cadangan alih-alih uang tunai Anda. **{split}** tersisa untuk dibagi: Anda mempertaruhkan {yourPct} dari kotak itu ({yourStake}), Sam mempertaruhkan {samPct} ({samStake}). Kotak itu menarik kartu utama {headline} (pack Legendary, beli-kembali **{buyback}**) dan satu kartu tambahan {extra}. Anda menyimpan kartu {headline} secara gratis. Itu milik Anda apa pun yang terjadi. Kartu {extra} jatuh ke Sam: **{buyback}** darinya, **{samCash}**, dipotong dari bagian Sam. Hasil akhir: Anda pulang dengan **uang tunai {yourStake} + kartu {headline}**; Sam mendapat **uang tunai {samCash} + kartu {extra}**.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Simpan atau jual",
  "docs.howItWorks.keepSell.buttons":
    "Setiap kartu yang Anda terima datang dengan dua tombol: **Simpan** menaruh kartu grading itu di koleksi Anda; **Jual** membayarkan tarif beli-kembali pack itu dalam USDC, langsung ke saldo Anda.",
  "docs.howItWorks.keepSell.usdc": "USDC adalah dolar digital: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Beli-kembali ditentukan oleh pack kartu itu sendiri: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** Grail ke atas.",
  "docs.howItWorks.keepSell.window":
    "Anda mendapat jendela **{seconds} detik** tepat setelah Anda menang, dan jika Anda tidak memutuskan, itu sederhananya terbawa ke seluruh ronde berikutnya: hidup di bawah papan dan di Kartu Anda.",
  "docs.howItWorks.keepSell.autoSell":
    "Masih belum diputuskan saat ronde berikutnya terkunci? Kartu itu **terjual otomatis** pada tarif beli-kembalinya saat itu. Uang tidak pernah tersendat.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Glosarium",
  "docs.howItWorks.glossary.change":
    "**Uang receh**: uang pada sebuah kotak yang terlalu kecil untuk membeli pack berikutnya. Tetap dihitung ke pot dan bagian kemenangan Anda, tapi hanya kartu yang terbuka yang membawa peluang menang.",
  "docs.howItWorks.glossary.house":
    "**Rumah**: brankas yang mendanai beli-kembali kartu dan menyerap kartu mana pun yang tidak mampu dibeli siapa pun.",
  "docs.howItWorks.glossary.chase":
    "**Perburuan**: jackpot bergulir yang diisi oleh {cut} dari setiap pot; meletus lewat undiannya sendiri yang independen, bukan berdasarkan hasil kartu tertentu.",
  "docs.howItWorks.glossary.grail": "**Grail**: kartu paling langka dan paling berharga yang bisa dijatuhkan pack mana pun.",
  "docs.howItWorks.glossary.buyback":
    "**Beli-kembali**: penawaran tetap untuk mencairkan sebuah kartu senilai {low} sampai {high} dari nilainya, tergantung tier pack.",
  "docs.howItWorks.glossary.proRata": "**Pro-rata**: dibagi sebanding dengan apa yang masing-masing orang masukkan.",
  "docs.howItWorks.glossary.vrf": "**VRF**: undian acak yang bisa diverifikasi siapa pun setelahnya.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "API taruhan (akses tertutup)",
  "docs.howItWorks.api.what":
    "API programatik untuk membaca ronde yang berlangsung, berlangganan aliran peristiwa, dan memasang taruhan dari kode atau sebuah agen. API ini menjalankan peluang dan penyelesaian yang sama seperti papan.",
  "docs.howItWorks.api.access":
    "Akses **tertutup** dan hanya berdasarkan permintaan: nonaktif secara default, dan setiap panggilan butuh kunci API yang terdaftar di allowlist.",
  "docs.howItWorks.api.realBets":
    "Memasang taruhan sungguhan butuh satu pemeriksaan lagi: bukti bahwa itu benar-benar Anda (login yang sama seperti di situs), dan mengikuti batas taruhan yang sama seperti semua pemain lain.",
  "docs.howItWorks.api.contact": "Lihat dokumen pengembang di {path} dan kirim email ke {email} untuk meminta kunci.",
  "docs.how.controls.q": "How do I control a bet?",
  "docs.how.controls.a":
    "Open Gear to find grouped settings. On wide screens, each section can collapse. In Display, the landscape fullscreen toggle helps hide browser chrome where the browser allows it. The bet rail puts the full dollar total first, then the pack name and count. Tap the selected pack again to un-arm it without placing another bet.",
  "docs.how.chat.q": "Can I read table chat in my language?",
  "docs.how.chat.a":
    "Chat auto-translates bot and round messages into your selected language. Use \"show original\" on a translated line to see its source wording. Player-written messages stay as written.",
  "docs.how.collectors.q": "Where can I see the collector leaderboard?",
  "docs.how.collectors.a":
    "Open Ladder and choose Collectors. Top betters stays the first tab. Collectors ranks held cards by collection value and shows cards held, Grails pulled, and each collector's best pull.",
  "docs.how.replay.q": "Can I replay a finished round?",
  "docs.how.replay.a":
    "Yes. Open a finished round's replay to scrub from betting through the reveal, pause or restart it, and choose up to 5x speed.",

  "docs.tech.controls.title": "Settings, pack selection, and bet labels",
  "docs.tech.controls.body":
    "Gear groups Language, Betting, Display, Reveals, Sound, Auto-sell, and Hotkeys into sections. On wide screens each section can collapse, and the collapsed state is remembered. Display includes a landscape fullscreen toggle that requests the browser's supported chrome-free mode, with a compact-bar fallback on iPhone Safari. The bet rail makes the full dollar total the headline before the pack name and count. A pack button sets one exact pack choice; clicking that same selected pack again clears the armed choice and its persisted intent, so the next tile click cannot place that pack by accident.",
  "docs.tech.chat.title": "Chat translation and original copy",
  "docs.tech.chat.body":
    "Chat auto-translates keyed bot and table-event messages into the selected locale without rewriting the stored history. A translated row exposes a \"show original\" control that switches that row back to its source wording. Player-authored free text remains exactly as written when no translation service is available, so the feature never invents a translation.",
  "docs.tech.collectors.title": "Collector leaderboard",
  "docs.tech.collectors.body":
    "The Ladder surface keeps Top betters as its default tab and adds a Collectors tab. Collector rows rank the held cards in a player's collection by collection value and expose cards held, Grails pulled, and the best pull name with its value. The client builds the view from stored rounds, the local collection, and the signed-in profile, then keeps the player's row linked to their profile.",
  "docs.tech.replay.title": "Full-round replay speeds",
  "docs.tech.replay.body":
    "A finished round replay covers the recorded betting timeline and the reveal cinema on one playhead. Play, pause, seek, restart, and export remain available, with playback choices of 1x, 2x, 4x, and 5x. A speed click changes the playback rate for the timeline and the next reveal entry; it does not remount or rewrite a reveal already in progress.",

  "docs.nav.section.tools": "Tools",
  "docs.nav.page.controls": "Settings and controls",
  "docs.nav.page.chat": "Table chat",
  "docs.nav.page.collectors": "Collector leaderboard",
  "docs.nav.page.replay": "Round replay",

  "docs.howItWorks.tools.title": "Controls and extras",
  "docs.howItWorks.tools.controls":
    "Gear keeps the settings readable: wide layouts let you collapse sections, Display owns the landscape fullscreen toggle, and the bet rail leads with the full dollar total before the pack name and count. Tap the selected pack again to un-arm it.",
  "docs.howItWorks.tools.chat":
    "Chat auto-translates bot and round messages into your selected language. Use show original on a translated row to return to its source wording; player-written lines stay as written.",
  "docs.howItWorks.tools.collectors":
    "Ladder keeps Top betters first and adds Collectors as a second tab, ranking held cards by collection value with cards held, Grails pulled, and best-pull detail.",
  "docs.howItWorks.tools.replay":
    "Finished rounds replay from betting through the reveal with play, pause, seek, restart, and 1x, 2x, 4x, or 5x speed.",
} as Record<string, string>;
