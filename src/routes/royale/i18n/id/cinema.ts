// Indonesian (Bahasa Indonesia): "cinema" segment. MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (see core.ts's header for the full id
// terminology glossary and the pack/packs English-loanword rule).
// Owns: RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx, revealCinemaTypes.ts
// (the copy: fields of REVEAL_CINEMA_SEQUENCE), RoyaleRoundCardWall.tsx,
// RoyaleVaultLockBand.tsx, RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx,
// RoyaleWinShareCard.tsx, RoyaleProfilePnlShareCard.tsx,
// RoyaleSpectatorRecapSection.tsx, RoyaleRoundReplay.tsx and
// ../RoyaleReplayRoute.tsx. Same key set as en/cinema.ts. See royaleI18n.ts's
// file header for the key-naming and {token} interpolation convention, and
// the no-em-dash / brand-terms-stay-English rules that apply to every
// locale. Ordinary rarity words (Common/Rare/Epic) DO translate (Umum/
// Langka/Epik); GRAIL/LEGENDARY/MYTHIC stay English pack TIER brand names.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "PACK TERBUKA",
  "cinema.phaseAnnounce.packsOpening.subtitle": "mengungkap kartu · menghitung ulang harga tiap kotak",
  "cinema.phaseAnnounce.winnerDraw.title": "MENGUNDI PEMENANG",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "berbobot berdasarkan total kotak",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Terkunci: papan menjadi pertunjukan utama",
  "cinema.phase.packsEnter.copy": "Pack masuk ke papan",
  "cinema.phase.packsOpening.copy": "Pack terbuka: kartu terungkap, harga tiap kotak dihitung ulang",
  "cinema.phase.cardsByTile.copy": "Kartu terungkap: setiap kotak, nilai lebih dulu",
  "cinema.phase.valueScan.copy": "Membaca papan: tarikan terbesar bersinar",
  "cinema.phase.winnerDraw.copy": "Mengundi pemenang: berbobot berdasarkan total kotak",
  "cinema.phase.winnerLock.copy": "Pemenang terkunci",
  "cinema.phase.loserValueConverge.copy": "Tarikan yang kalah kembali ke brankas: nilainya mengalir ke pemenang",
  "cinema.phase.winnerPotCountUp.copy": "Pot mendarat pada kotak pemenang",
  "cinema.phase.chaseFeed.copy": "Perburuan mengambil bagiannya",
  "cinema.phase.chasePayout.copy": "Perburuan meletus: sebuah kotak menang besar",
  "cinema.phase.allocation.copy": "Anda mendapat",
  "cinema.phase.keepSellDecision.copy": "Simpan atau jual: keputusan ini berlanjut ke ronde berikutnya",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "TERSIMPAN",
  "cinema.vaultLock.plateSub": "PERBURUAN",
  "cinema.vaultLock.status": "TERKUNCI",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "TIDAK ADA KARTU TERBUKA RONDE INI",
  "cinema.cardWall.won": "MENANG",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "TARIKAN TERBAIK",
  "cinema.cardWall.rarity.common": "UMUM",
  "cinema.cardWall.rarity.rare": "LANGKA",
  "cinema.cardWall.rarity.epic": "EPIK",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "DISIMPAN",
  "cinema.cardWall.status.sold": "TERJUAL",
  "cinema.cardWall.status.toTheChase": "KE PERBURUAN",
  "cinema.cardWall.status.rake": "POTONGAN",
  "cinema.cardWall.owner.vault": "BRANKAS",
  "cinema.cardWall.owner.you": "ANDA",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter membuka detail kartu.",
  "cinema.cardWall.sectionAriaLabel": "Setiap kartu yang terbuka ronde ini, nilai tertinggi lebih dulu",
  "cinema.cardWall.eyebrow": "Setiap kartu yang terbuka",
  "cinema.cardWall.rake.title": "Biaya protokol",
  "cinema.cardWall.rake.metaOne": "1 kartu untuk potongan",
  "cinema.cardWall.rake.metaMany": "{n} kartu untuk potongan",
  "cinema.cardWall.rake.hide": "Sembunyikan",
  "cinema.cardWall.rake.show": "Tampilkan",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Tutup pengungkapan",
  "cinema.close.title": "Tutup pengungkapan (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Pemenang tercatat",
  "cinema.provCaption.round": "Ronde",
  "cinema.provCaption.verifyAt": "Verifikasi di",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Ronde #{n}",
  "cinema.bar.vrfBadge": "Didukung oleh CollectorCrypt VRF",
  "cinema.bar.chaseFeed": "Perburuan +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "TERBUKA",
  "cinema.phaseShort.drawing": "MENGUNDI",
  "cinema.phaseShort.results": "HASIL",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "PEMENANG",
  "cinema.core.tileWins": "{tile} menang",
  "cinema.core.inCards": " DALAM KARTU",
  "cinema.core.poolSuffix": " POT",
  "cinema.core.totalCardValue": "TOTAL NILAI KARTU",
  "cinema.core.totalPool": "TOTAL POT",
  "cinema.core.tilesLive": "{n} KOTAK AKTIF",
  "cinema.core.packsSuffix": " · {n} PACK",
  "cinema.core.yourStake": "Taruhan Anda",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Tidak ada taruhan",
  "cinema.heatOnly.note": "Hanya USDC · tidak ada pack ronde ini",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} pack",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Kalah undian. Kartu berpindah ke pendukung kotak pemenang.",
  "cinema.vaultNote.heatOnlyNoPack": "Tidak ada pack ronde ini · uang receh terbawa ke pot",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "dari {pack}",
  "cinema.grail.fromPackRate": "dari {pack} · tarikan {pct}",
  "cinema.grail.pullTitle": "TARIKAN GRAIL",
  "cinema.grail.fromPackVisible": "dari pack {pack}",
  "cinema.grail.provenanceAriaLabel": "{tile}, dari pack {pack}",
  "cinema.grail.multiTitle": "{n} GRAIL RONDE INI",
  "cinema.grail.galleryTileFromPack": "{tile} · dari {pack}",
  "cinema.grail.galleryMore": "+{n} lagi",
  "cinema.card.openInNewTab": "Buka halaman kartu {name} di tab baru",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. Dari pack {pack}, tingkat tarikan {pct}. Enter membuka detail kartu.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed "{band} - {pct}% chance from {pack} pack" sentence from
  // rarityBandLine (royaleRarityBands.ts) - locale-wired since the i18n
  // follow-up pass via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter membuka detail kartu.",
  "cinema.card.bandChancePct": "peluang {pct}% dari pack {pack}",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} MENANG",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "JENDELA JUAL TERBUKA",
  "cinema.sellWindow.secToDecide": "DETIK UNTUK MEMUTUSKAN",
  "cinema.sellWindow.noActionAutoSells": "TANPA TINDAKAN AKAN TERJUAL OTOMATIS SAAT TERKUNCI BERIKUTNYA",
  "cinema.sellWindow.noActionKeeps": "TANPA TINDAKAN KARTU TETAP DISIMPAN · JUAL KAPAN SAJA DARI KARTU ANDA",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  // NBSP (U+00A0, not a plain space) between the two words in each, AUDIT-
  // FIX-4: keeps "card value" / "on tile" from breaking to an orphan "on" /
  // "card" at a line end. Preserve the NBSP in every locale's translation.
  "cinema.tileValue.cardValueLabel": "nilai kartu",
  "cinema.tileValue.onTileLabel": "pada kotak",
  "cinema.tileValue.oddsWord": "peluang",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "kotak yang terkena",
  "cinema.chase.fires": "PERBURUAN MELETUS",
  "cinema.chase.jackpotReleasingTo": "JACKPOT DILEPAS KE {tile}",
  "cinema.chase.winningTileFallback": "KOTAK PEMENANG",
  "cinema.chase.feedThisRound": "Perburuan +{value} ronde ini",
  "cinema.chase.cardToChase": "KARTU KE PERBURUAN",
  "cinema.chase.bestLosingCardNamed": "Kartu terbaik yang kalah · {name} · {value} terkunci",
  "cinema.chase.bestLosingCardVault": "Kartu terbaik yang kalah terkunci di brankas",
  "cinema.chase.jackpotGrows": "Perburuan +{value} · jackpot bertambah",
  "cinema.chase.hitsAriaLabel": "Perburuan mengenai {tile} sebesar {value}",
  "cinema.chase.alsoHolds": "Perburuan juga menyimpan",
  "cinema.chase.alsoHoldsAriaOne": "Perburuan juga menyimpan 1 kartu senilai {value}",
  "cinema.chase.alsoHoldsAriaMany": "Perburuan juga menyimpan {n} kartu senilai {value}",
  "cinema.chase.more": "lagi",
  "cinema.chase.cardsTotalOne": "1 kartu · {value} dalam kartu grading",
  "cinema.chase.cardsTotalMany": "{n} kartu · {value} dalam kartu grading",
  "cinema.chase.hitsKicker": "PERBURUAN MENGENAI",
  "cinema.chase.winsBig": "MENANG BESAR",
  "cinema.chase.yourCut": "BAGIAN ANDA",
  "cinema.chase.otherBackerOne": "{n} pendukung lain · pro-rata",
  "cinema.chase.otherBackerMany": "{n} pendukung lain · pro-rata",
  "cinema.chase.backerOne": "{n} pendukung · pro-rata",
  "cinema.chase.backerMany": "{n} pendukung · pro-rata",
  "cinema.chase.alsoWonRound": "Juga memenangkan ronde ini",
  "cinema.chase.backedTileNote": "Kotak yang didukung · bukan pemenang ronde",
  "cinema.chase.heldCardsSpillOne": "1 kartu tersimpan tumpah keluar",
  "cinema.chase.heldCardsSpillMany": "{n} kartu tersimpan tumpah keluar",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "pot",
  "cinema.you.get": "Anda dapat",
  "cinema.you.lost": "Anda kalah!",
  "cinema.you.noStakeThisRound": "Anda tidak bertaruh di ronde ini",
  "cinema.you.mathLine": "bagian pot {usdc} USDC + {cards} dari kartu = {total} untuk Anda",
  "cinema.you.sold": "Terjual {value}",
  "cinema.you.kept": "Disimpan · di koleksi Anda",
  "cinema.you.keepButton": "Simpan",
  "cinema.you.sellButton": "Jual {value}",
  "cinema.you.yours": "milik Anda",
  "cinema.you.noCardThisRound": "Tidak ada kartu ronde ini.",
  "cinema.you.usdcPaidInstantly": "USDC · dikreditkan ke saldo Anda",
  "cinema.you.keepAll": "Simpan semua",
  "cinema.you.sellAllButton": "Jual semua {value}",
  "cinema.you.sellAllConfirm": "Yakin? Jual semua {value}",
  "cinema.you.noOtherBackers": "Tidak ada pendukung lain ronde ini",
  "cinema.you.oneOtherSplits": "1 orang lain membagi {value}",
  "cinema.you.othersSplit": "{n} orang lain membagi {value}",
  "cinema.you.oneWinningBackerTakes": "1 pendukung pemenang mengambil {value}",
  "cinema.you.winningBackersSplit": "{n} pendukung pemenang membagi {value}",
  "cinema.you.viewFullResults": "Lihat hasil lengkap",
  "cinema.you.howItWorks": "Cara kerjanya",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Kartu grading standar - pendukung teratas kotak ini menyimpannya atau menjual kembali secara pro-rata.",
  "cinema.theatre.disposition.sellBackSplit":
    "Aturan Grail: tidak ada satu pendukung pun yang bisa menutupi bagian pemain lain secara pro-rata, jadi grail dijual kembali secara default dan USDC dibagi ke seluruh kotak.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Aturan Grail: pot pro-rata pendukung teratas sudah cukup untuk membeli bagian pemain lain, jadi mereka menyimpan grail-nya dan membayar bagian kartu semua orang lain dalam USDC.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{decided} dari {total} pemain lain sudah memutuskan; ronde berikutnya dalam {seconds} detik",
  "cinema.theatre.playersDeciding": "Pemain memutuskan {count}",
  "cinema.theatre.nextRoundIn": "ronde berikutnya dalam {seconds}",
  "cinema.theatre.secondsShort": "{n}s",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Ronde sedang diselesaikan",
  "cinema.theatre.stageLockingBoard": "Mengunci papan…",
  "cinema.theatre.stagePacksOpening": "Pack sedang dibuka di papan",
  "cinema.theatre.stageWinnerDrawn": "Pemenang terundi",
  "cinema.theatre.headlineNoEntries": "Tidak ada taruhan ronde ini",
  "cinema.theatre.headlineRevealing": "Mengungkap pack…",
  "cinema.theatre.headlineTileWins": "{tile} menang {value}",
  "cinema.theatre.tileFallback": "Kotak",
  "cinema.theatre.youWon": "Anda menang {value}",
  "cinema.theatre.youLostNoStake": "Anda kalah, tidak ada taruhan di {tile}",
  "cinema.theatre.winnerFallback": "sang pemenang",
  "cinema.theatre.tileWonNoStake": "{tile} menang · Anda tidak bertaruh",
  "cinema.theatre.aTileFallback": "Sebuah kotak",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} kotak dimainkan · pot {pool}",
  "cinema.theatre.stripMetaCards": " · {value} kartu",
  "cinema.theatre.stripMetaCash": " + {value} tunai",
  "cinema.theatre.drawingWinner": "mengundi pemenang",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Hasil ronde",
  "cinema.theatre.roundSettled": "Ronde selesai",
  "cinema.theatre.winner": "Pemenang",
  "cinema.theatre.seedNote":
    "Termasuk taruhan awal Anda sebesar {value} pada {tile}, hapus taruhan awal di panel taruhan untuk bermain dari $0.",
  "cinema.theatre.lossNoteStaked":
    "Anda bertaruh {value} pada kotak lain di ronde ini. Arahkan kursor ke kotak mana pun di belakang panel ini untuk melihat apa yang terbuka dan mengapa kalah.",
  "cinema.theatre.lossNoteNoStake":
    "Anda tidak mendukung kotak mana pun di ronde ini, jadi tidak ada yang dibayarkan. Pilih besar taruhan dan klik sebuah kotak di ronde berikutnya.",
  "cinema.theatre.bonusGrails.one":
    "{n} grail lagi mendarat di ronde ini: ini masuk ke pendukung kotak pemenang sebagai jarahan bonus (disimpan, atau dijual kembali secara pro-rata jika terlalu berharga untuk disimpan), tidak pernah masuk ke biaya ATTN atau Perburuan.",
  "cinema.theatre.bonusGrails.other":
    "{n} grail lagi mendarat di ronde ini: semuanya masuk ke pendukung kotak pemenang sebagai jarahan bonus (disimpan, atau dijual kembali secara pro-rata jika terlalu berharga untuk disimpan), tidak pernah masuk ke biaya ATTN atau Perburuan.",
  "cinema.theatre.noPacksBacked": "Tidak ada pack yang didukung ronde ini. Ronde berikutnya dimulai otomatis.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Pembagian hasil · {tile}",
  "cinema.theatre.payoutSplitMeta": "Pot {pool} · asupan chase {feed}",
  "cinema.theatre.payoutSplitChase": " · PERBURUAN +{value}",
  "cinema.theatre.you": "Anda",
  "cinema.theatre.physicalCard": "Kartu fisik →",
  "cinema.theatre.grailSecured": " (grail diamankan)",
  "cinema.theatre.grailSoldBack": "Grail dijual kembali ({value}) → pembagian USDC di atas.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "Perburuan MELETUS!",
  "cinema.theatre.chaseHitBody":
    "Perburuan meletus lewat undian langkanya sendiri, jadi {value} dari Perburuan dibayarkan ke kemenangan ini, ditambahkan ke pembagian di atas. Perburuan berikutnya mulai terbangun lagi.",
  "cinema.theatre.chaseMissLead": "Tidak ada jatuhan Perburuan ronde ini.",
  "cinema.theatre.chaseMissBody": "Perburuan meletus lewat undian langkanya sendiri, jadi terus bertambah, sekarang {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Verifikasi undian",
  "cinema.theatre.vrfSummaryNote": "undian dapat diverifikasi · lihat struk undian",
  "cinema.theatre.vrfRoundId": "id ronde",
  "cinema.theatre.vrfWinningDraw": "undian pemenang",
  "cinema.theatre.vrfDrawSeed": "seed undian",
  "cinema.theatre.vrfProofId": "id bukti",
  "cinema.theatre.vrfTicket": "#{n} dari {total}",
  "cinema.theatre.vrfVerifying": "Memverifikasi…",
  "cinema.theatre.vrfRecheck": "Periksa ulang undian",
  "cinema.theatre.vrfVerifierLink": "Verifikator ↗",
  "cinema.theatre.vrfVerified": "✓ Undian terverifikasi, pemenang ini cocok dengan seed undian yang dipublikasikan.",
  "cinema.theatre.vrfFailed": "✗ Undian ini tidak cocok dengan seed-nya, jangan percayai ini.",
  "cinema.theatre.vrfNote": "Setiap ronde mengundi satu pemenang dari seed yang dipublikasikan dan bisa Anda periksa ulang.",
  "cinema.theatre.vrfNoDraw": "Tidak ada pack yang didukung ronde ini, tidak ada yang bisa diundi.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Simpan kartu → koleksi",
  "cinema.theatre.sellBackFor": "Jual kembali seharga {value}",
  "cinema.theatre.continueNextRound": "Lanjut ke ronde berikutnya",
  "cinema.theatre.continue": "Lanjut",
  "cinema.theatre.settleHint":
    "Simpan menambahkan kartu ke koleksi Anda. Jual kembali mengkreditkan {sell} ({pct}% dari {value}, tarif beli kembali CC pack ini) ke saldo Anda. Tanpa tindakan = dijual kembali secara default saat ronde ditutup.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Terkunci",
  "cinema.prizeModal.stageReveal": "Pengungkapan",
  "cinema.prizeModal.betterLuck": "Semoga beruntung di ronde berikutnya",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Menyiapkan kartu Anda…",
  "cinema.share.renderingPng": "Merender PNG…",
  "cinema.share.renderFailed": "Gambar tidak bisa dirender. Coba lagi.",
  "cinema.share.captionOpened": "Keterangan terbuka di X. Lampirkan PNG yang tersimpan.",
  "cinema.share.close": "Tutup",
  "cinema.share.downloadPng": "Unduh PNG",
  "cinema.share.shareToX": "Bagikan ke X",
  "cinema.share.done": "Selesai",
  "cinema.share.provablyFair": "PERTARUNGAN PACK · SETIAP UNDIAN DAPAT DIVERIFIKASI",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "pengganda {value}",
  "cinema.winShare.multiplier": "PENGGANDA",
  "cinema.winShare.inCards": "DALAM KARTU",
  "cinema.winShare.cashWon": "TUNAI DIMENANGKAN",
  "cinema.winShare.tileHit": "· KOTAK KENA",
  "cinema.winShare.entry": "TARUHAN MASUK",
  "cinema.winShare.winOdds": "PELUANG MENANG",
  "cinema.winShare.totalValue": "TOTAL NILAI",
  "cinema.winShare.certLine": "DIDUKUNG OLEH SLABZ · SERTIFIKAT #{n}",
  "cinema.winShare.roundLine": "RONDE #{n} · UNDIAN VRF TERVERIFIKASI",
  "cinema.winShare.takeHomeAriaLabel": "total dibawa pulang {value}",
  "cinema.winShare.totalTakeHome": "TOTAL DIBAWA PULANG",
  "cinema.winShare.breakdown.one": "{cash} TUNAI + {n} KARTU ({value})",
  "cinema.winShare.breakdown.other": "{cash} TUNAI + {n} KARTU ({value})",
  "cinema.winShare.deposited": "DISETOR",
  "cinema.winShare.wonBy": "DIMENANGKAN OLEH {name}",
  "cinema.winShare.theGrail": "SANG GRAIL",
  "cinema.winShare.topPull": "TARIKAN TERBAIK",
  "cinema.winShare.topCardOfRound": "KARTU TERBAIK RONDE INI",
  "cinema.winShare.poweredBySlabz": "DIDUKUNG OLEH SLABZ",
  "cinema.winShare.cert": "SERTIFIKAT #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Bagikan kemenangan Anda",
  "cinema.winShare.pngSaved": "PNG tersimpan. Lampirkan ke postingan Anda - X tidak bisa menambahkannya untuk Anda.",
  "cinema.winShare.renderingHdVideo": "Merender video ronde HD…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "Merender video ronde HD - {seconds}s{pct}",
  "cinema.winShare.hdVideoSaved": "Video HD tersimpan. Lampirkan ke postingan Anda sebagai ganti gambar.",
  "cinema.winShare.hdRenderFailed": "Render HD gagal. Coba lagi.",
  "cinema.winShare.hdVideoButton": "Video ronde HD",
  "cinema.winShare.hdVideoTitle": "Render ronde ini sebagai mp4 HD (layanan render lokal) dan simpan.",
  "cinema.winShare.tweetTriggerLabel": "Bagikan kemenangan di X",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "hasil {value} dari taruhan",
  "cinema.pnlShare.onStake": "DARI TARUHAN",
  "cinema.pnlShare.certifiedRun": "SESI TERSERTIFIKASI · P&L BERSIH",
  "cinema.pnlShare.heroSub.one": "dari {n} ronde · tingkat menang {pct}%",
  "cinema.pnlShare.heroSub.other": "dari {n} ronde · tingkat menang {pct}%",
  "cinema.pnlShare.collection": "KOLEKSI",
  "cinema.pnlShare.change30d": "PERUBAHAN 30H",
  "cinema.pnlShare.ribbonAriaLabel.one": "Hasil per ronde untuk {n} ronde bertaruh terakhir",
  "cinema.pnlShare.ribbonAriaLabel.other": "Hasil per ronde untuk {n} ronde bertaruh terakhir",
  "cinema.pnlShare.bestPull": "TARIKAN TERBAIK",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "TOP",
  "cinema.pnlShare.tier.common": "UMUM",
  "cinema.pnlShare.rounds": "RONDE",
  "cinema.pnlShare.winRate": "TINGKAT MENANG",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "RONDE TERBAIK",
  "cinema.pnlShare.rank": "PERINGKAT #{n}",
  "cinema.pnlShare.rankOf": "PERINGKAT #{n} DARI {total}",
  "cinema.pnlShare.staked": "{value} DIPERTARUHKAN",
  "cinema.pnlShare.overlayAriaLabel": "Bagikan sesi Anda",
  "cinema.pnlShare.saved": "Tersimpan. Lampirkan ke postingan Anda.",
  "cinema.pnlShare.triggerLabel": "Bagikan P&L",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Simpan / jual",
  "cinema.recap.secondsShort": "{n}s",
  "cinema.recap.dest.yourCall": "Keputusan Anda",
  "cinema.recap.dest.deciding": "Sedang memutuskan",
  "cinema.recap.dest.you": "Anda",
  "cinema.recap.dest.topBacker": "Pendukung teratas",
  "cinema.recap.dest.yourCard": "Kartu Anda",
  "cinema.recap.dest.wonBy": "Dimenangkan oleh",
  "cinema.recap.dest.aBacker": "Seorang pendukung",
  "cinema.recap.dest.yourChaseLoot": "Jarahan Perburuan Anda",
  "cinema.recap.dest.chaseLoot": "Jarahan Perburuan",
  "cinema.recap.dest.releasedFromVault": "dilepas dari brankas",
  "cinema.recap.dest.sweptTo": "Disapu ke",
  "cinema.recap.dest.chaseVault": "Brankas Perburuan",
  "cinema.recap.dest.fundsJackpot": "mendanai jackpot",
  "cinema.recap.dest.protocolFee": "Biaya protokol",
  "cinema.recap.dest.tableRake": "potongan meja",
  "cinema.recap.dest.soldBack": "Dijual kembali",
  "cinema.recap.dest.intoTheSplit": "Ke dalam pembagian",
  "cinema.recap.dest.toThePool": "+{value} ke pot",
  "cinema.recap.sublineYours": "Semua kartu meja ronde ini. Milik Anda ditandai di bawah.",
  "cinema.recap.sublineLost": "Semua kartu meja ronde ini. Tidak ada satu pun milik Anda.",
  "cinema.recap.sublineNoStake": "Semua kartu meja ronde ini. Anda tidak ikut di ronde ini.",
  "cinema.recap.sectionAriaLabel": "Ke mana setiap kartu ronde ini pergi",
  "cinema.recap.eyebrow": "Hasil ronde",
  "cinema.recap.headline": "Ke mana setiap kartu mendarat",
  "cinema.recap.theatreHeader": "Cerita ronde · tujuan setiap kartu",
  "cinema.recap.openCardTitle": "Membuka halaman kartu di tab baru",
  "cinema.recap.fromPack": "Dari {pack}",
  "cinema.recap.railAriaLabel": "Semua kartu ronde ini, paling bernilai dulu",
  "cinema.recap.tierRule.one": "Kartu lainnya · {value}",
  "cinema.recap.tierRule.other": "{n} kartu lainnya · {value}",
  "cinema.recap.showMore": "Tampilkan {n} lagi",
  "cinema.recap.showAll": "Tampilkan semua {n}",
  "cinema.recap.showing": "Menampilkan {n} dari {total} kartu · {value} dari {totalValue}",
  "cinema.recap.allShown": "Semua {n} kartu · total {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "RECORD TAB" inside the two service sentences is this same panel's button
  // label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "Menyelesaikan video...",
  "cinema.replay.recordingEmpty": "Rekaman kembali kosong. Coba lagi.",
  "cinema.replay.checkingService": "Memeriksa layanan render HD...",
  "cinema.replay.serviceUnreachable":
    "Layanan render HD tidak dapat dijangkau, jadi ini tidak bisa dirender dalam HD. REKAM TAB akan merekam tab ini sebagai gantinya (prompt peramban).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "Merender video HD: {seconds}s{pct}",
  "cinema.replay.hdRenderFailed": "Render HD gagal. Coba lagi, atau gunakan REKAM TAB untuk merekam tab ini sebagai gantinya.",
  "cinema.replay.cannotRecord":
    "Peramban ini tidak bisa merekam video di sini. Menyimpan berkas ronde sebagai gantinya - jatuhkan berkas itu di halaman replay untuk menonton lagi.",
  "cinema.replay.pickThisTab": "Pilih \"Tab ini\" untuk merekam ronde.",
  "cinema.replay.recorderFailed": "Tidak bisa memulai perekam.",
  "cinema.replay.watermarkAriaLabel": "Replay ronde {n}",
  "cinema.replay.watermarkAriaLabelDated": "Replay ronde {n}, direkam {date}",
  "cinema.replay.watermarkTag": "PUTAR ULANG",
  "cinema.replay.watermarkRound": "RONDE #{n}",
  "cinema.replay.headerSeed": "SEED {seed}",
  "cinema.replay.phaseBidding": "TARUHAN",
  "cinema.replay.phaseReveal": "PENGUNGKAPAN",
  "cinema.replay.phaseDone": "SELESAI",
  "cinema.replay.boardAriaLabel": "Papan replay",
  "cinema.replay.controlsAriaLabel": "Kontrol replay untuk ronde {n}",
  "cinema.replay.pause": "Jeda",
  "cinema.replay.play": "Putar",
  "cinema.replay.pauseButton": "JEDA",
  "cinema.replay.playButton": "PUTAR",
  "cinema.replay.restart": "ULANGI",
  "cinema.replay.scrubAriaLabel": "Cari di seluruh ronde: dari taruhan sampai pengungkapan",
  "cinema.replay.lockMark": "Kunci",
  "cinema.replay.seeking": "MENCARI",
  "cinema.replay.speedAriaLabel": "Kecepatan putar",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "SIMPAN VIDEO",
  "cinema.replay.saveVideoTitle":
    "Render ronde ini sebagai mp4 HD (layanan render lokal; tidak ada yang direkam dari layar Anda)",
  "cinema.replay.recordTab": "REKAM TAB",
  "cinema.replay.recordTabTitle":
    "Cadangan: rekam tab ini lewat prompt tangkapan layar peramban Anda (kualitas realtime)",
  "cinema.replay.saveRound": "SIMPAN RONDE",
  "cinema.replay.saveRoundTitle":
    "Unduh ronde ini sebagai berkas data kecil - siapa pun bisa menjatuhkannya di halaman replay untuk menonton ronde persis ini",
  "cinema.replay.close": "TUTUP",
  "cinema.replay.backToGame": "KEMBALI KE PERMAINAN",
  "cinema.replay.shareOverlayAriaLabel": "Bagikan ronde ini",
  "cinema.replay.videoReady": "VIDEO RONDE SIAP",
  "cinema.replay.formatWebm": "Tersimpan sebagai .webm - X butuh mp4 untuk diunggah, jadi bagikan tautannya atau ubah dulu berkasnya.",
  "cinema.replay.formatMp4": "Tersimpan sebagai .mp4 - siap dilampirkan di X.",
  "cinema.replay.shareOnX": "Bagikan di X",
  "cinema.replay.saveAgain": "Simpan lagi",
  "cinema.replay.shareHint": "X tidak bisa melampirkan video dari web - postingan Anda terbuka dengan teks terisi; lampirkan berkas yang tersimpan.",
  "cinema.replay.xOpened": "X terbuka dengan keterangan Anda. Lampirkan berkas yang tersimpan ({filename}) - composer web tidak bisa menambahkannya untuk Anda.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "Replay Ronde attn ROYALE",
  "cinema.replayRoute.noRecordingParam": "Tidak ada rekaman yang diberikan. Sertakan ?rec=<json-atau-url-terenkode>.",
  "cinema.replayRoute.unreadable": "Tidak bisa membaca rekaman dari ?rec=.",
  "cinema.replayRoute.loadFailed": "Tidak bisa memuat rekaman ({error}).",
  "cinema.replayRoute.badge": "REPLAY RONDE",
  "cinema.replayRoute.loading": "MEMUAT REKAMAN",
  "cinema.replayRoute.noRecording": "Tidak ada rekaman untuk diputar.",
  "cinema.replayRoute.hint":
    "Replay dibuka dari strip ronde-sebelumnya di papan (REPLAY pada ronde yang selesai) atau tautan ?rec= yang dibagikan.",
  "cinema.replayRoute.roundResults": "HASIL RONDE",
  "cinema.replay.viewpointLabel": "VIEWPOINT",
  "cinema.replay.viewpointAriaLabel": "Choose a replay viewpoint",
  "cinema.replay.viewpointTable": "TABLE VIEW",
  "cinema.replay.viewpointTickerAriaLabel": "{name}'s bid timeline",
  "cinema.replay.viewpointStory": "{name}'s story",
  "cinema.replay.viewpointTile": "Tile {n}",
  "cinema.replay.viewpointStake": "Stake",
  "cinema.replay.viewpointBidAction": "{tile} · {pack} x{count} · {amount}",
  "cinema.replay.viewpointBidTotal": "{time} · total {total}",
  "cinema.replay.viewpointNoBids": "No bids yet",
  "cinema.share.shareFile": "Bagikan file",
  "cinema.share.shareSheetOpened": "Panel berbagi dibuka.",
  "cinema.winShare.lossHeadline": "KALAH DI RONDE",
  "cinema.winShare.lossResult": "KALAH",
  "cinema.winShare.returned": "DIKEMBALIKAN",
  "cinema.winShare.bestPull": "PULL TERBAIK",
  "cinema.winShare.playedBy": "DIMAINKAN OLEH {name}",
  "cinema.winShare.lossCaption": "Ronde #{n}: saya memasang {stake}. Tidak ada hasil dibawa pulang ronde ini.",
  "cinema.winShare.lossCardCaption": "Pull terbaik di meja, tapi bukan milik saya.",
  "cinema.winShare.lossNoCardCaption": "Hasil ronde ini dicatat dengan jujur.",
  "cinema.winShare.roundResultTop": "RONDE",
  "cinema.winShare.roundResultMain": "KALAH",
  "cinema.winShare.shareRoundCard": "Bagikan kartu",
  "cinema.replay.shareVideo": "Bagikan video",
  "cinema.replay.shareVideoTitle": "Bagikan video ronde",
  "cinema.replay.shareVideoSheetOpened": "Panel berbagi dibuka dengan video.",
  "cinema.replay.shareVideoFailed": "Video tidak dapat dibagikan. Coba lagi.",
  "cinema.replay.shareSheetHint": "Perangkatmu dapat mengirim video ini ke X dari panel berbagi.",
  "cinema.replay.shareRoundTitle": "attn royale · Ronde #{n}",
  "cinema.replay.shareRoundTable": "{amount} di meja.",
  "cinema.replay.shareRoundWin": "Tile saya mengambil meja senilai {pool} · {amount} kembali.",
  "cinema.replay.shareRoundCardsOnly": "Tile {tile} mengambil meja senilai {pool} · tile saya kalah, tetapi {amount} kembali.",
  "cinema.replay.shareRoundWinner": "Tile {tile} mengambil meja senilai {pool}.",
  "cinema.share.shareVideo": "Bagikan video",
  "cinema.share.preparingOutput": "Menyiapkan berbagi…",
  "cinema.share.cancelled": "Berbagi dibatalkan.",
  "cinema.share.shareSheetHint": "Perangkatmu dapat mengirim video ini ke X dari panel berbagi.",
  "cinema.personalReveal.sectionAria": "Kartu yang kamu buka",
  "cinema.personalReveal.title": "KARTU YANG KAMU BUKA",
  "cinema.personalReveal.progress.eyebrow": "PENGUNGKAPAN TERSINKRONISASI",
  "cinema.personalReveal.progress.title": "PEMBUKAAN BERLANGSUNG",
  "cinema.personalReveal.progress.body": "Meja sedang membuka kartunya. Pengungkapan bersama berlanjut setelah tahap ini selesai.",
  "cinema.personalReveal.normal.label": "UNGKAP NORMAL",
  "cinema.personalReveal.normalHint": "Bagian belakang kartu tampil lebih dulu. Klik atau ketuk kartu untuk membaliknya; kartu yang kamu buka menjadi milikmu. Kartu yang masih tertutup akan terbuka otomatis setelah 5 detik.",
  "cinema.personalReveal.hardcore.label": "UNGKAP EKSTREM",
  "cinema.personalReveal.hardcoreHint": "Bagian belakang kartu tampil lebih dulu. Klik atau ketuk kartu untuk membaliknya; kepemilikan ditentukan setelah undian. Kartu yang masih tertutup akan terbuka otomatis setelah 5 detik.",
  "cinema.personalReveal.yourCard": "KARTUMU",
  "cinema.personalReveal.youOpened": "KAMU YANG MEMBUKA",
  "cinema.personalReveal.otherCards": "KARTU LAIN",
  "cinema.personalReveal.allOpen": "Semua kartu sudah terbuka",
  "cinema.personalReveal.autoOpenIn": "Kartu yang tersisa terbuka otomatis dalam {n} dtk",
  "cinema.personalReveal.revealCardAria": "Balik kartu {n}",
  "cinema.personalReveal.revealedCardAria": "Kartu {n} terungkap: {name}, {value}",
  "cinema.personalReveal.sort.group": "Urutan kartu",
  "cinema.personalReveal.sort.pack": "Paket",
  "cinema.personalReveal.sort.packAria": "Urutkan berdasarkan harga paket, termurah lebih dulu",
  "cinema.personalReveal.sort.rarity": "Kelangkaan",
  "cinema.personalReveal.sort.revealFirst": "Pengurutan berdasarkan kelangkaan akan terbuka setelah semua kartu terungkap",
  "cinema.personalReveal.sort.bestAria": "Urutkan berdasarkan kelangkaan, paling langka lebih dulu",
  "cinema.personalReveal.sort.worstAria": "Urutkan berdasarkan kelangkaan, kelangkaan terendah lebih dulu",
  "cinema.personalReveal.sort.packStatus": "Kartu diurutkan berdasarkan harga paket, termurah lebih dulu",
  "cinema.personalReveal.sort.bestStatus": "Kartu diurutkan berdasarkan kelangkaan, paling langka lebih dulu",
  "cinema.personalReveal.sort.worstStatus": "Kartu diurutkan berdasarkan kelangkaan, kelangkaan terendah lebih dulu",
  "cinema.personalReveal.rarity": "Kelangkaan",
  "cinema.personalReveal.year": "Tahun",
  "cinema.personalReveal.yearUnknown": "Tahun tidak diketahui",
  "cinema.personalReveal.grade": "Nilai",
  "cinema.personalReveal.ungraded": "Belum dinilai",
  "cinema.personalReveal.pageNavigation": "Halaman kartu",
  "cinema.personalReveal.previousPage": "Kartu sebelumnya",
  "cinema.personalReveal.nextPage": "Kartu berikutnya",
  "cinema.personalReveal.pageStatus": "Halaman {page} dari {pages}",
  "cinema.personalReveal.live.revealed": "{name} terungkap",
  "cinema.personalReveal.live.all": "Semua {n} kartu terungkap",
} as Record<string, string>;
