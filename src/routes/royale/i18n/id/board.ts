// Indonesian (Bahasa Indonesia): "board" segment. MACHINE-CONSISTENT
// QUALITY, FLAGGED FOR NATIVE PASS (see core.ts's header for the full id
// terminology glossary: ronde/pot/Perburuan/kotak/pendukung/taruhan/
// bertaruh/jual kembali/tarikan/brankas/kartu grading/terbukti adil/Anda,
// and the pack/packs English-loanword rule). Owns RoyaleBoardV2.tsx,
// RoyaleBoard.tsx (the legacy v1 board), RoyaleStakeControl.tsx,
// RoyaleBetRail.tsx, RoyaleRoundCore.tsx, RoyaleClock.tsx,
// RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx (the right-rail "Players" panel),
// RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx, RoyaleLeaderboard.tsx,
// RoyaleConnectXControl.tsx and RoyalePackCompositionChips.tsx. Same key set
// as en/board.ts. See royaleI18n.ts's file header for the key-naming and
// {token} interpolation convention, and the no-em-dash /
// brand-terms-stay-English / packs-framing rules that apply to every locale.
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Pemain dan PnL tunai",
  "board.playerScoreboard.title": "Pemain",
  "board.playerScoreboard.open": "Statistik dan bisukan",
  "board.playerScoreboard.pinnedHint": "Disematkan · Esc untuk menutup",
  "board.playerScoreboard.holdHint": "Tahan Tab untuk mengintip · klik untuk menyematkan",
  "board.playerScoreboard.close": "Tutup papan skor pemain",
  "board.playerScoreboard.windowAria": "Jendela PnL",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Semua",
  "board.playerScoreboard.partialHistory": "Riwayat parsial. Peringkat menggunakan rentang kas terselesaikan yang dipertahankan.",
  "board.playerScoreboard.statsUnavailable": "Riwayat PnL tidak tersedia di sini. Taruhan saat ini masih berlangsung.",
  "board.playerScoreboard.playerColumn": "Pemain",
  "board.playerScoreboard.pnlColumn": "PnL tunai",
  "board.playerScoreboard.voiceColumn": "Obrolan",
  "board.playerScoreboard.loading": "Memuat pemain…",
  "board.playerScoreboard.empty": "Belum ada yang bertaruh pada petak di ronde ini.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Petak {tiles}",
  "board.playerScoreboard.stake": "Taruhan {amount}",
  "board.playerScoreboard.notAvailable": "Tidak tersedia",
  "board.playerScoreboard.rounds": "{n} ronde",
  "board.playerScoreboard.youBadge": "Anda",
  "board.playerScoreboard.mute": "Bisukan",
  "board.playerScoreboard.unmute": "Batalkan bisu",
  "board.playerScoreboard.muteAria": "Bisukan {name} di obrolan",
  "board.playerScoreboard.unmuteAria": "Batalkan bisu {name} di obrolan",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Anda",
  "board.common.noWin": "tidak menang",
  "board.common.roundSettled": "Ronde selesai",
  "board.common.youWon": "Anda menang {amount}",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "s",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "TERKUNCI",
  "board.tile.lockedStampSub": "tidak ada taruhan lagi",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: taruhan {bet} Anda melebihi saldo tunai {balance} Anda. Kecilkan taruhan atau setor dana.",
  "board.tile.ariaBack": "Dukung {label} dengan {amount}",
  "board.tile.ariaBackShortcutSuffix": ", pintasan {shortcut}",
  "board.tile.ariaOddsChance": "peluang menang {pct}",
  "board.tile.ariaBackers": "{count} pendukung",
  "board.tile.yourPortraitAlt": "Potret Anda",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · belum ada pack",
  "board.tile.noStake": "Tidak ada taruhan",
  "board.tile.youOwn": "Anda memiliki {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Pack terbuka saat terkunci",
  "board.tile.resultOpened": "Terbuka · {amount} dalam kartu",
  "board.tile.resultWinner": "PEMENANG · {amount} dalam kartu",
  "board.tile.resultLost": "Kalah undian · {amount} dalam kartu",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans (see RoyaleBoardV2's royaleT2ResultLabel/royaleT2ResultAmt) so a
  // wide figure never clips mid-digit. These are the WORD-ONLY variants (no
  // amount, no "in cards") plus the SHORT fallback words the label swaps to
  // when even the plain word would overflow its lane.
  "board.tile.resultOpenedWord": "Terbuka",
  "board.tile.resultWinnerWord": "PEMENANG",
  "board.tile.resultLostWord": "Kalah undian",
  "board.tile.resultShortWon": "MENANG",
  "board.tile.resultShortLost": "Kalah",
  "board.tile.overBalance": "Melebihi saldo",
  "board.tile.overBalanceTitle": "Butuh {needed} · Anda punya {have}. Kecilkan taruhan atau setor dana.",
  "board.tile.overCap": "melebihi batas {amount} Anda (pengaturan)",
  "board.tile.needHave": "Butuh {needed} · Anda punya {have}",
  "board.tile.clueExactCardOdds": "kartu persis ini · tarikan {pct}",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Besar taruhan",
  "board.stakeControl.packMatchTitle": "Setiap klik kotak memasang taruhan satu pack {packName} penuh.",
  "board.stakeControl.packMatchTag": "bertaruh 1 pack {packName} per klik",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click, "snipe with many starters and not just one grail") - the
  // count-aware siblings of packMatchTitle/packMatchTag/packChipTitle above,
  // used once `packCount` can be > 1. One/Other pair (see
  // pages.winningsStrip's withdrawAllOne/Other for the same convention);
  // CJK locales may carry identical text in both slots since they don't mark
  // plural.
  "board.stakeControl.packMatchTitleOne": "Setiap klik kotak memasang taruhan {n} pack {packName} penuh.",
  "board.stakeControl.packMatchTitleOther": "Setiap klik kotak memasang taruhan {n} pack {packName} penuh.",
  "board.stakeControl.packMatchTagOne": "bertaruh {n} pack {packName} per klik",
  "board.stakeControl.packMatchTagOther": "bertaruh {n} pack {packName} per klik",
  "board.stakeControl.packAmountSentence": "{n} x {packAmount} pack {packName} per klik",
  "board.stakeControl.bidPackGroupAria": "Pasang taruhan satu pack penuh pada sebuah kotak",
  "board.stakeControl.bidPackTag": "Taruhkan satu pack",
  "board.stakeControl.bidPackInfoTitle":
    "Satu klik menaruh satu pack tersegel penuh pada sebuah kotak. Pack itu tetap pack itu, tidak pernah menyatu menjadi pack yang lebih besar.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Pilih sebuah pack dan berapa banyak. Satu klik menaruhkan seluruh tumpukan itu pada sebuah kotak - pack yang lebih besar menarik kartu yang lebih besar. Tombol angka 1 sampai 8 memilih kotaknya.",
  "board.stakeControl.bidPackInfoAria": "Apa itu bertaruh satu pack?",
  "board.stakeControl.packSelectedTitle": "Terpilih. Klik lagi untuk kembali ke taruhan {amount}.",
  "board.stakeControl.packChipTitle": "Setiap klik kotak memasang taruhan satu pack {packName} ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle (PACK-ONLY mode's
  // "Selected. Each tile click bids..." tooltip, and the non-active chip
  // tooltip once packCount > 1 makes the static "one" wrong).
  "board.stakeControl.packSelectedCountOne": "Terpilih. Setiap klik kotak memasang taruhan {n} pack {packName} ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Terpilih. Setiap klik kotak memasang taruhan {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Setiap klik kotak memasang taruhan {n} pack {packName} ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Setiap klik kotak memasang taruhan {n} pack {packName} ({amount}).",
  "board.stakeControl.overBalanceHeading": "MELEBIHI SALDO",
  "board.stakeControl.overBalanceBody": "Butuh lebih dari saldo tunai {amount} Anda.",
  "board.stakeControl.bidAmountTag": "Taruhkan sejumlah uang",
  "board.stakeControl.bidAmountInfoTitle":
    "Tambahkan dolar berapa pun ke sebuah kotak. Uang receh tumbuh menjadi pack yang lebih besar begitu melewati tiap harga pack.",
  "board.stakeControl.bidAmountInfoAria": "Apa itu bertaruh sejumlah uang?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Tambahkan ke taruhan sebuah kotak",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" (parallels bidPackGroupAria's "Bid a whole pack on a
  // tile") rather than incrementsGroupAria's text above - kept as its own key
  // since the two group-arias now say different things in the live component.
  "board.stakeControl.bidAmountGroupAria": "Taruhkan sejumlah uang pada sebuah kotak",
  // PACK COUNT stepper controls (owner ask 2026-07-24, see packMatchTitleOne
  // above) - entirely new UI, no stray precedent.
  "board.stakeControl.packCountGroupAria": "Jumlah pack yang ditaruhkan per klik",
  "board.stakeControl.packCountDecAria": "Kurangi jumlah pack per klik",
  "board.stakeControl.packCountIncAria": "Tambah jumlah pack per klik",
  "board.stakeControl.packCountValueTitleOne": "{n} pack dari tier yang dipilih per klik",
  "board.stakeControl.packCountValueTitleOther": "{n} pack dari tier yang dipilih per klik",
  "board.stakeControl.incrementTitle": "Naikkan taruhan terpilih menjadi {amount}",
  "board.stakeControl.customAriaLabel": "Jumlah taruhan kustom dalam USDC, berlaku saat Enter atau saat Anda mengklik di luar",
  "board.stakeControl.customOverBalanceTitle": "Melebihi saldo tunai {amount} Anda. Setor dana atau kecilkan taruhan.",
  "board.stakeControl.customTitle": "Ketik jumlah berapa pun, Enter atau klik di luar untuk menetapkannya",
  "board.stakeControl.resetTitle": "Kembalikan taruhan terpilih ke {amount}",
  "board.stakeControl.reset": "Atur ulang",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Strategi taruhan otomatis, aktif saat ronde ditutup",
  "board.betRail.strategyArmedTip": "Siap, akan aktif dalam {seconds}s",
  "board.betRail.strategyAriaArmed": "{name}, siap, akan aktif dalam {seconds} detik",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, siap, akan aktif dalam {seconds} detik. Klik untuk membatalkan.",
  "board.betRail.strategyAriaClickArm": "{name}. Klik untuk menyiapkan.",
  "board.betRail.moreStrategiesAria": "Strategi taruhan otomatis lainnya",
  "board.betRail.moreStrategiesTitle": "Strategi lainnya",
  "board.betRail.cancelArmedAria": "Batalkan taruhan otomatis yang sudah disiapkan",
  "board.betRail.autoBetCancelled": "Taruhan otomatis dibatalkan.",
  "board.betRail.roundLockedSkip": "Ronde terkunci sebelum taruhan otomatis sempat aktif.",
  "board.betRail.notEnoughBalanceSkip": "Saldo tidak cukup, taruhan otomatis tidak aktif.",
  "board.betRail.firedAtClose": "{name} aktif saat ronde ditutup.",
  "board.betRail.firedAtClosePartial": "{name} aktif saat ronde ditutup: {covered} dari {total} kotak.",
  "board.betRail.strategyGuideAria": "Panduan strategi taruhan otomatis",
  "board.betRail.strategyGuideTitle": "Panduan strategi",
  "board.betRail.autoBetEyebrow": "Taruhan otomatis",
  "board.betRail.firesInSeconds": "aktif dalam {seconds}s",
  "board.betRail.strategiesDialogAria": "Strategi taruhan otomatis",
  "board.betRail.closeStrategiesAria": "Tutup strategi taruhan otomatis",
  "board.betRail.strategiesHeading": "Strategi taruhan otomatis",
  "board.betRail.strategiesIntro":
    "Ketuk salah satu untuk menyiapkannya dengan taruhan terpilih Anda ({amount}). Strategi ini aktif tepat sebelum ronde terkunci, diurutkan berdasarkan seberapa besar uang ada pada tiap kotak saat itu, sinyal dari keramaian.",
  "board.betRail.contrarianHeading": "Pilihan berlawanan arus",
  "board.betRail.contrarianIntro":
    "Saat semua orang mengejar kotak termurah, kotak itu jadi ramai, sehingga kotak kedua termurah bisa membayar lebih baik. Pilihan ini sengaja tidak ditaruh di bilah utama agar tetap rapi.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Akun dan besar taruhan Anda",
  "board.betRail.balance": "Saldo",
  "board.betRail.activeStakes": "Taruhan aktif",
  "board.betRail.collection": "Koleksi",
  "board.betRail.cardCountViewAllSingular": "{count} KARTU · LIHAT SEMUA",
  "board.betRail.cardCountViewAllPlural": "{count} KARTU · LIHAT SEMUA",
  "board.betRail.moreCount": "+{count} LAGI",
  "board.betRail.noCardsYet": "Belum ada kartu di koleksi, menangkan sebuah kotak dan simpan kartunya.",
  "board.betRail.lastResult": "Hasil terakhir",
  "board.betRail.eachClickAdds": "Setiap klik menambah {amount}",
  "board.betRail.depositToPlay": "Setor dana untuk bermain",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake (now possibly count x pack price) can't be covered, or
  // when "all tiles" can only afford some of the 8. New copy, no stray
  // precedent (stray predates both the affordability gate and pack counts).
  "board.betRail.affordShortfall": "Butuh {unit} - Anda punya {balance}",
  "board.betRail.allTilesPartialCover": "{name} - mencakup {covered} dari 8 kotak pada {unit}",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats, new surface with no
  // stray precedent.
  "board.betRail.dockBalance": "Saldo",
  "board.betRail.dockStakes": "Taruhan",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "Ronde berikutnya dalam {seconds} detik",
  "board.core.nextRoundLine": "Ronde berikutnya dalam {secs}",
  "board.core.playersDecidingAria": "{decided} dari {total} pemain lain sudah memutuskan",
  "board.core.playersDecidingLine": "Pemain memutuskan {ratio}",
  "board.core.pastRoundResultsAria": "Hasil ronde sebelumnya",
  "board.core.pastRounds": "Ronde sebelumnya",
  "board.core.winsAmount": "{label} menang {amount}",
  "board.core.youLost": "Anda kalah!",
  "board.core.didNotStake": "Anda tidak bertaruh di ronde ini",
  "board.core.keepCard": "Simpan kartu ({amount})",
  "board.core.sellAmount": "Jual {amount}",
  "board.core.decideHint": "Putuskan sekarang atau pada ronde berikutnya",
  "board.core.roundResultLink": "Hasil Ronde #{roundId}",
  "board.core.fullReceiptHint": "Struk lengkap → Hasil ronde",
  "board.core.splitReceiptHint": "Pembagian · struk → Hasil ronde",
  "board.core.eyebrowDrawing": "Mengundi pemenang",
  "board.core.eyebrowPullsIn": "Semua tarikan masuk",
  "board.core.eyebrowLocked": "Terkunci",
  "board.core.headlineDrawing": "Satu tiket memutuskan semuanya",
  "board.core.headlinePullsIn": "Setiap pack sudah terbuka",
  "board.core.headlineRoundLocked": "Ronde terkunci",
  "board.core.headlinePacksOpening": "Pack sedang dibuka…",
  "board.core.subDrawing": "undian berbobot yang dapat diverifikasi",
  "board.core.subPullsIn": "mengundi pemenang berikutnya",
  "board.core.subIntro": "{count} {noun} dipertaruhkan",
  "board.core.subOpening": "{count} {noun} sedang dibuka di papan",
  "board.core.pool": "Pot",
  "board.core.totalPool": "Total pot",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "Ronde terbuka",
  "board.core.clockLockedRevealing": "Terkunci · mengungkap",
  "board.core.clockSettled": "Selesai",
  "board.core.clockAriaLabel": "{label}, {seconds} detik",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Kartu grading standar, pendukung teratas menyimpannya atau menjual kembali secara pro-rata.",
  "board.settlement.dispositionSellBackSplit": "Aturan Grail: dijual kembali secara default, USDC dibagi ke seluruh kotak.",
  "board.settlement.dispositionTopBackerKeeps": "Aturan Grail: pendukung teratas menyimpannya dan membayar bagian pemain lain.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "{seconds}s untuk memutuskan",
  "board.settlement.panelAria": "Detail kotak dan penyelesaian",
  "board.settlement.collapsePanelAria": "Ciutkan panel",
  "board.settlement.expandPanelAria": "Bentangkan panel",
  "board.settlement.roundResultsLink": "Hasil ronde",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Panel ronde",
  "board.settlement.clickTileToBack": "Kemenangan mendarat di sini. Klik kotak mana pun untuk mendukungnya dengan {amount}.",
  "board.settlement.lastResultLine": "Hasil terakhir · Ronde #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "Anda menang {amount}",
  "board.settlement.view": "lihat",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Kotak kalah · alasan kekalahannya",
  "board.settlement.losingTileTitle": "{label} · {amount} pada kotak",
  "board.settlement.loserWhy":
    "Membuka {cardName} ({amount}), undian jatuh pada {winnerLabel}. {pct} tiket tidak membayar apa pun{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", termasuk taruhan {amount} Anda.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Kotak ini kosong - tidak ada taruhan, tidak ada tiket undian.",
  "board.settlement.backToSettlement": "Kembali ke penyelesaian · {winnerLabel} menang",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · kartu {index}/{total} · {amount} pada kotak",
  "board.settlement.pullCaptionSingle": "{label} · {amount} pada kotak",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Pack sedang dibuka",
  "board.settlement.revealOpenedTitle": "{label} membuka {cardName}",
  "board.settlement.revealOddsLine": "{amount} · peluang {pct} untuk mengambil pot {poolAmount}. Pemenang sedang diundi sekarang.",
  "board.settlement.revealEmpty": "Pack sedang terbuka satu per satu di papan, undian pemenang akan segera muncul.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Hasil terakhir · Ronde #{roundId}",
  "board.settlement.tileTakesTable": "{label} mengambil seluruh meja senilai {amount}",
  "board.settlement.whyWon": "Diundi lewat tiket berbobot yang dapat diverifikasi, {label} memegang {pct}% dari pot saat terkunci.",
  "board.settlement.lostNoStakeIn": "Anda kalah, tidak ada taruhan di {label}",
  "board.settlement.theWinnerFallback": "sang pemenang",
  "board.settlement.wonNoStake": "{label} menang · Anda tidak bertaruh",
  "board.settlement.aTileFallback": "Sebuah kotak",
  "board.settlement.lossNoteWithStake": "Taruhan {amount} Anda ada pada kotak lain, arahkan kursor ke salah satunya untuk melihat ceritanya.",
  "board.settlement.lossNoteNone": "Anda tidak mendukung kotak mana pun di ronde ini.",
  "board.settlement.topCardOfRound": "Kartu terbaik ronde ini · {label}",
  "board.settlement.keepCardTo": "Simpan kartu ({amount}) → koleksi",
  "board.settlement.sellBackFor": "Jual kembali seharga {amount}",
  "board.settlement.continueNextRound": "Lanjut ke ronde berikutnya",
  "board.settlement.continue": "Lanjut",
  "board.settlement.keepSellHint":
    "Simpan = kartu masuk koleksi · jual = {amount} sekarang ({pct}% dari nilai kartu, tarif beli kembali CC pack ini) · {noAction}",
  "board.settlement.noActionKept": "tanpa tindakan = kartu disimpan untuk Anda.",
  "board.settlement.noActionAutoSell": "tanpa tindakan = jual otomatis saat ronde berikutnya berakhir.",
  "board.settlement.revealOnlyNote":
    "Kotak yang kalah hanya untuk pengungkapan pada canary ini, tarikannya kembali ke brankas. Hanya kartu kotak pemenang yang dibayarkan.",
  "board.settlement.payoutSplit": "Pembagian hasil",
  "board.settlement.poolChaseFeedLine": "Pot {pool} · asupan chase {feed}",
  "board.settlement.chaseAddSuffix": " · PERBURUAN +{amount}",
  "board.settlement.physicalCardArrow": "Kartu fisik →",
  "board.settlement.grailSecuredSuffix": " (grail diamankan)",
  "board.settlement.grailSoldBack": "Grail dijual kembali ({amount}) → pembagian USDC di atas.",
  "board.settlement.cardAssignmentHead": "Penetapan kartu",
  "board.settlement.cardLabel": "kartu {amount}",
  "board.settlement.soldToVault": "dijual ke brankas · hasilnya masuk pembagian",
  "board.settlement.decisionTopBackerSuffix": " (pendukung teratas · simpan atau jual)",
  "board.settlement.offTheirUsdcSuffix": " · {amount} dari USDC miliknya",
  "board.settlement.cardsSpreadNote":
    "Kartu disebar ke sebanyak mungkin pendukung - kartu yang ditetapkan dikenakan biaya sebesar tarif beli kembali CC-nya (85-93% tergantung pack) dari USDC pendukung itu (nilai tunai yang sama seperti menjualnya, mereka tetap menyimpan potensi kenaikannya). Hanya kartu yang tidak terserap yang dijual ke brankas.",
  "board.settlement.chaseHitLabel": "Perburuan MELETUS!",
  "board.settlement.chasePaidLine": "{amount} dibayarkan ke pembagian ini.",
  "board.settlement.chaseMissLabel": "TIDAK ADA JATUHAN PERBURUAN.",
  "board.settlement.chaseNowLine": "Perburuan sekarang {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Verifikasi undian",
  "board.settlement.verifyDrawSub": "undian dapat diverifikasi · lihat struk undian",
  "board.settlement.roundIdLabel": "id ronde",
  "board.settlement.winningDrawLabel": "undian pemenang",
  "board.settlement.drawSeedLabel": "seed undian",
  "board.settlement.proofIdLabel": "id bukti",
  "board.settlement.ticketOfCount": "#{index} dari {count}",
  "board.settlement.verifying": "Memverifikasi…",
  "board.settlement.recheckDraw": "Periksa ulang undian",
  "board.settlement.verifierLink": "Verifikator ↗",
  "board.settlement.verifiedOk": "✓ Undian terverifikasi, pemenang ini cocok dengan seed undian yang dipublikasikan.",
  "board.settlement.verifiedBad": "✗ Undian ini tidak cocok dengan seed-nya, jangan percayai ini.",
  "board.settlement.everyRoundNote": "Setiap ronde mengundi satu pemenang dari seed yang dipublikasikan dan bisa Anda periksa ulang.",
  "board.settlement.noPacksNote": "Tidak ada pack yang didukung ronde ini, tidak ada yang bisa diundi.",
  "board.settlement.settledHoverHint": "Selesai, arahkan kursor ke sebuah kotak untuk memeriksanya.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Taruhan terlalu besar untuk saldo Anda",
  "board.betTooBig.dismissAria": "Tutup",
  "board.betTooBig.gotIt": "Mengerti",
  "board.betTooBig.body": "Mendukung {slotLabel} butuh {needed}, dan Anda punya {held}. Anda kurang {shortfall}.",
  "board.betTooBig.deposit": "Setor {amount}+",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Pemain, diurutkan berdasarkan total taruhan",
  "board.wagerLadder.title": "Pemain",
  "board.wagerLadder.countZero": "Belum ada taruhan",
  "board.wagerLadder.countOther": "{n} dalam ronde ini · berdasarkan total taruhan",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "Ciutkan panel pemain",
  "board.wagerLadder.lastRoundAria": "Lihat hasil ronde sebelumnya, ronde #{n}",
  "board.wagerLadder.lastRoundLabel": "Lihat hasil ronde sebelumnya",
  "board.wagerLadder.empty": "Belum ada yang mendukung kotak mana pun di ronde ini.",
  "board.wagerLadder.leaderAria": "Pemimpin",
  "board.wagerLadder.openProfileTitle": "Buka profil {name} di tab baru",
  "board.wagerLadder.miniGridTotal": "total {amount}",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not a
  // {name} token plus board.common.you, because the source phrasing uses the
  // lowercase object pronoun ("Tiles you backed") where a third party gets a
  // proper noun ("Tiles Mika Vale backed") - a distinction most locales also
  // resolve with two different sentences.
  "board.wagerLadder.miniGridTilesAria": "Kotak yang didukung {name}",
  "board.wagerLadder.miniGridTilesAriaYou": "Kotak yang Anda dukung",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "Jual inventaris untuk mendanai taruhan ini",
  "board.bidFund.eyebrow": "USDC HABIS",
  "board.bidFund.titleOne": "Jual kartu Anda untuk menutupi taruhan ini?",
  "board.bidFund.titleMany": "Jual kartu-kartu ini untuk menutupi taruhan ini?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site
  // (the component splits this template on the two money tokens), so the
  // emphasis survives any word order a locale prefers.
  "board.bidFund.body": "Menjual {cards} menghasilkan {buyback}, cukup untuk mendukung {amount} pada {tile}.",
  "board.bidFund.bodyCardsMany": "kartu-kartu ini",
  "board.bidFund.note":
    "Anda kurang {amount}. Kartu dijual pada tarif beli kembali CC pack-nya (85 sampai 93%). Ini tidak bisa dibatalkan.",
  "board.bidFund.keepCards": "Simpan kartu",
  "board.bidFund.sellAndBid": "Jual dan taruhkan {amount}",
  "board.bidFund.autoSellSwitch": "Jual kemenangan saya untuk USDC secara otomatis",
  "board.bidFund.autoSellNoteOn":
    "Setiap kemenangan langsung dicairkan pada tarif beli kembali begitu diterima. Tanpa perlu memilih simpan atau jual. Grail tidak pernah dijual otomatis. Ubah kapan saja di Pengaturan.",
  "board.bidFund.autoSellNoteOff":
    "Aktifkan ini dan setiap kartu yang Anda menangkan langsung dicairkan ke USDC pada tarif beli kembali, tanpa perlu memilih. Grail tidak pernah dijual otomatis. Ubah kapan saja di Pengaturan.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "Bertaruh dengan tombol angka?",
  "board.hotkeys.optInBody":
    "Menekan sebuah tombol langsung mendukung kotak itu dengan taruhan Anda saat ini. Belum ada yang dipasang barusan.",
  "board.hotkeys.notNow": "Nanti saja",
  "board.hotkeys.enableKeys": "Aktifkan tombol",
  "board.hotkeys.turnOff": "Matikan",
  "board.hotkeys.turnOffTitle": "Tombol tetap nonaktif sampai Anda mengaktifkannya kembali di Pengaturan.",
  "board.hotkeys.changeKeys": "Ubah tombol",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead (board.tile.ariaBack, board.tile.packsOpenAtLock,
  // board.common.you) - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "Kotak terbuka",
  "board.boardV1.onTile": "pada kotak",
  "board.boardV1.changeAmount": "ubah {amount}",
  "board.boardV1.oddsSuffix": "peluang {pct}",
  "board.boardV1.openedOdds": "Terbuka · peluang {pct}",
  "board.boardV1.emptyNeverInDraw": "Kosong · tidak pernah ikut undian",
  "board.boardV1.winnerYourShare": "PEMENANG · bagian Anda dibayarkan",
  "board.boardV1.winnerNoStake": "PEMENANG · Anda tidak bertaruh",
  "board.boardV1.lostOdds": "Kalah undian · peluang {pct}",
  "board.boardV1.tileClickTitle": "Klik di mana saja untuk mendukung {label} dengan {amount}",
  "board.boardV1.youAmount": "Anda {amount}",
  "board.boardV1.youNone": "Anda -",
  "board.boardV1.pctOfTile": "{pct} dari kotak",
  "board.boardV1.noStakeYet": "belum ada taruhan",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "TOP · ",
  "board.boardV1.backerPopStake": "{amount} ditaruhkan · {pct} dari kotak",
  "board.boardV1.statusWaitingDraw": "Menunggu undian…",
  "board.boardV1.statusWonSplit": "Menang {amount} dari pembagian",
  "board.boardV1.statusOnWinningTile": "Berada di kotak pemenang",
  "board.boardV1.statusNoPayout": "Tidak ada pembayaran ronde ini",
  "board.boardV1.statusYourStake": "Taruhan aktif Anda",
  "board.boardV1.statusBacking": "Mendukung kotak ini",
  "board.boardV1.backerCount.one": "{n} pendukung",
  "board.boardV1.backerCount.other": "{n} pendukung",
  "board.boardV1.noBackersYet": "Belum ada pendukung",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "Dukung {amount}",
  "board.boardV1.backBtnTitle": "Dukung {label} dengan {amount} USDC",
  "board.boardV1.evolveTitle": "Menambah tepat {amount} lagi pada {label}",
  "board.boardV1.hoverTitle": "{label} · {amount} pada kotak",
  "board.boardV1.opensAs": "Terbuka sebagai · {summary}",
  "board.boardV1.noPacksYet": "Belum ada pack, dukung untuk mendanai pack pertama",
  "board.boardV1.whyOpenedDrawing":
    "Membuka {cardName} ({amount}) dengan peluang {pct}, pemenang sedang diundi sekarang.",
  "board.boardV1.whyWon":
    "Menang undian berbobot dengan peluang {pct}. Membuka {cardName} ({amount}); pot dibagi pro-rata ke semua pendukungnya.",
  "board.boardV1.whyLost":
    "Kalah undian berbobot, peluang {pct} ({amount} dari pot {poolAmount}). Tetap membuka {cardName} ({cardAmount}), tapi hanya kotak pemenang yang dibayar.",
  "board.boardV1.whyEmpty": "Kotak kosong - tidak ada taruhan, tidak ada tiket undian.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " Taruhan Anda di sini: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Anda tidak bertaruh di sini.",
  "board.boardV1.ifWins": "Jika kotak ini menang: Anda akan mengambil ~{amount} dari pot {poolAmount}.",
  "board.boardV1.clickToBack": "Klik untuk mendukung dengan taruhan terpilih dan membuka pack pertamanya saat terkunci.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "Peringkat {rank}, {name}, bertaruh {wagered}, bersih {net}, tingkat menang {pct} persen",
  "board.leaderboard.youTag": "ANDA",
  "board.leaderboard.youRankTag": "ANDA · #{n}",
  "board.leaderboard.statWagered": "TARUHAN",
  "board.leaderboard.statNetPl": "P&L BERSIH",
  "board.leaderboard.statWinRate": "TINGKAT MENANG",
  "board.leaderboard.statRounds": "RONDE",
  "board.leaderboard.statPoolShare": "BAGIAN POT",
  "board.leaderboard.statFirstSeen": "PERTAMA TERLIHAT",
  "board.leaderboard.statBiggestPull": "TARIKAN TERBESAR",
  "board.leaderboard.shareOfToday": "dari taruhan hari ini",
  "board.leaderboard.shareOfAllTime": "dari taruhan sepanjang masa",
  "board.leaderboard.noneYet": "BELUM ADA",
  "board.leaderboard.viewFullProfile": "Lihat profil lengkap",
  "board.leaderboard.live": "LIVE",
  "board.leaderboard.fullRankings": "Peringkat lengkap",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} pemain",
  "board.leaderboard.playerCount.other": "{n} pemain",
  "board.leaderboard.roundCount.one": "{n} ronde",
  "board.leaderboard.roundCount.other": "{n} ronde",
  "board.leaderboard.colPlayer": "Pemain",
  "board.leaderboard.colWagered": "Taruhan",
  "board.leaderboard.colNet": "P&L Bersih",
  "board.leaderboard.colWin": "Menang",
  "board.leaderboard.colBiggestPull": "Tarikan terbesar",
  "board.leaderboard.sortGroupAria": "Urutkan peringkat",
  "board.leaderboard.sortBy": "Urutkan menurut {col}",
  "board.leaderboard.podiumNet": "{amount} bersih",
  "board.leaderboard.podiumTopPull": "Tarikan terbaik",
  "board.leaderboard.fullStandings": "Klasemen lengkap · {n} pemain",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} pack {packName} ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} pack {packName} ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "Foto profil X milik {handle}",
  "board.connectX.connectedTitle": "Terhubung lewat X · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "slot {packName} (kosong di kotak ini)",
  "board.packChips.fixedChipTitle": "{n} x {packName} seharga {amount} masing-masing",
  "board.packChips.fixedChipTitleTotalSuffix": " - total {amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Terbentuk dari uang receh terkumpul kotak ini - tidak ada yang menaruhkan pack ini secara langsung",
  "board.packChips.pooledSome": "{n} dari {total} terbentuk dari uang receh terkumpul kotak ini",
  "board.packChips.bidWhole": "Ditaruhkan sebagai satu pack penuh",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Juga ada di kotak ini: {list}",
  "board.packChips.morePacks.one": "{n} pack lagi",
  "board.packChips.morePacks.other": "{n} pack lagi",
  "board.packChips.morePacksWithList.one": "{n} pack lagi: {list}",
  "board.packChips.morePacksWithList.other": "{n} pack lagi: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "Taruhan {bids} · uang receh {pool}",
  "board.tile.splitAllBids": "Seluruh {bids} ditaruhkan sebagai pack penuh",
  "board.tile.splitAllPool": "Seluruh {pool} adalah uang receh terkumpul kotak ini",
  "board.tile.splitPoolNote": "Pack bergaris putus-putus terbentuk dari uang receh terkumpul, tidak ada yang menaruhkannya.",
  "board.tile.evolveLooseTitle": "{loose} uang receh pada kotak ini berkembang menjadi pack {tier} pada {target}",
  "board.tile.evolveNoLooseTitle":
    "Belum ada uang receh pada kotak ini. Uang receh berkembang menjadi pack {tier} pada {target}",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - mencakup {covered} dari {total} kotak pada {unit}",
  "board.betRail.allTilesPlanFull": "Saat ronde ditutup, akan mendukung semua {total} kotak pada {unit}. Total {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Saat ronde ditutup, akan mendukung {covered} dari {total} kotak pada {unit}. Saldo {balance} Anda mencakup {spend}.",
  "board.betRail.allTilesPlanShort.other":
    "Saat ronde ditutup, akan mendukung {covered} dari {total} kotak pada {unit}. Saldo {balance} Anda mencakup {spend}.",
  "board.betRail.allTilesPlanNone": "Saldo {balance} Anda tidak mencakup satu taruhan {unit}, jadi tidak ada kotak yang akan didukung.",
  "board.betRail.allTilesShortHistory.one":
    "Taruhan otomatis semua kotak butuh {needed} untuk {tiles} kotak pada {unit}. Anda punya {balance}, jadi mendukung {covered} kotak.",
  "board.betRail.allTilesShortHistory.other":
    "Taruhan otomatis semua kotak butuh {needed} untuk {tiles} kotak pada {unit}. Anda punya {balance}, jadi mendukung {covered} kotak.",
  "board.betRail.allTilesNoneHistory":
    "Taruhan otomatis semua kotak butuh {needed} untuk {tiles} kotak pada {unit}. Anda punya {balance}, jadi tidak ada kotak yang didukung.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Saat ronde ditutup",
  "board.betRail.planTotal": "Total",
  "board.betRail.planMathFull": "{total} kotak × {amount}",
  "board.betRail.planMathShort": "{covered} dari {total} kotak × {amount}",
  "board.betRail.planPerTile": "{unit} per kotak",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // Extracted from QUICK_BET_STRATEGY_META, which used to hold these sentences
  // inline as a module-level const: built once at import, so the auto-bet rail
  // stayed English in all ten locales (a Japanese board rendered "Top | Bottom
  // | All"). The map now reads each of these through a t() getter at property
  // access. Six keys x five strategies; `glyph` is a symbol, not copy.
  //   .label     the narrow rail chip caption (3 to 6 chars in en, HARD width
  //              budget: it sits three-across in a ~250px rail)
  //   .name      hover tooltip + aria-label, also substituted into the {name}
  //              token of board.betRail.strategyAria* / firedAtClose
  //   .detail    the ⓘ popover's longer explanation
  //   .rowTitle  short tile name, bolded half of the desktop row
  //   .closeLine rendered after rowTitle as "rowTitle, closeLine"
  //   .gridLine  compact plain-words line, must stay a few words
  // ARM framing everywhere: a click ARMS the strategy and it fires itself just
  // before the round locks, so the ranking always resolves "at round close",
  // never "now".
  "board.strategy.highest.label": "Atas",
  "board.strategy.highest.name": "Siapkan: dukung kotak tertinggi saat ronde ditutup",
  "board.strategy.highest.detail":
    "Menyiapkan taruhan Anda pada kotak yang membawa uang terbanyak, ditentukan tepat sebelum ronde ditutup.",
  "board.strategy.highest.rowTitle": "Kotak teratas",
  "board.strategy.highest.closeLine": "mendukung kotak terbesar saat ronde ditutup",
  "board.strategy.highest.gridLine": "uang terbanyak saat ditutup",

  "board.strategy.lowest.label": "Bawah",
  "board.strategy.lowest.name": "Siapkan: dukung kotak terendah saat ronde ditutup",
  "board.strategy.lowest.detail":
    "Menyiapkan taruhan Anda pada kotak paling sepi, ditentukan tepat sebelum ronde ditutup. Jika semua orang menumpuk ke kotak terendah, kotak itu berhenti menjadi yang terendah pada saat itu.",
  "board.strategy.lowest.rowTitle": "Kotak terbawah",
  "board.strategy.lowest.closeLine": "mendukung kotak terkecil saat ronde ditutup",
  "board.strategy.lowest.gridLine": "uang tersedikit saat ditutup",

  "board.strategy.secondHighest.label": "2 Atas",
  "board.strategy.secondHighest.name": "Siapkan: dukung kotak tertinggi kedua saat ronde ditutup",
  "board.strategy.secondHighest.detail":
    "Menyiapkan taruhan Anda satu tingkat di bawah pemimpin, ditentukan tepat sebelum ronde ditutup.",
  "board.strategy.secondHighest.rowTitle": "Kotak tertinggi kedua",
  "board.strategy.secondHighest.closeLine": "mendukung kotak tepat di bawah pemimpin saat ronde ditutup",
  "board.strategy.secondHighest.gridLine": "satu tingkat di bawah pemimpin",

  "board.strategy.secondLowest.label": "2 Bawah",
  "board.strategy.secondLowest.name": "Siapkan: dukung kotak terendah kedua saat ronde ditutup",
  "board.strategy.secondLowest.detail":
    "Pilihan teori keramaian: saat semua orang mengejar kotak terendah, kotak itu jadi ramai, sehingga kotak terendah kedua bisa membayar lebih baik. Siap sekarang, ditentukan tepat sebelum ronde ditutup.",
  "board.strategy.secondLowest.rowTitle": "Kotak terendah kedua",
  "board.strategy.secondLowest.closeLine": "mendukung kotak tepat di atas dasar yang ramai saat ronde ditutup",
  "board.strategy.secondLowest.gridLine": "satu tingkat di atas dasar",

  "board.strategy.allTiles.label": "Semua",
  "board.strategy.allTiles.name": "Siapkan: dukung setiap kotak saat ronde ditutup",
  "board.strategy.allTiles.detail":
    "Menyiapkan taruhan Anda pada setiap kotak yang memenuhi syarat, ditentukan tepat sebelum ronde ditutup. Total pengeluaran = besar taruhan Anda x jumlah kotak saat itu.",
  "board.strategy.allTiles.rowTitle": "Semua kotak",
  "board.strategy.allTiles.closeLine": "menyebarkan taruhan Anda saat ronde ditutup",
  "board.strategy.allTiles.gridLine": "taruhan Anda pada setiap kotak",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "Ketuk lagi: {unit}",
  "board.tile.confirmClickAgain": "Klik lagi: {unit}",
  "board.tile.betOffNotice": "Taruhan dinonaktifkan di pengaturan",
  "board.stakeControl.pickPackHint": "Pilih pack untuk dipertaruhkan",
  "board.stakeControl.emptyStakeLead": "Pilih pack",
  "board.stakeControl.emptyStakeHint": "Itu jadi taruhanmu",
  "gear.betInput.label": "Memasang taruhan",
  "gear.betInput.hint":
    "Bagaimana tekanan pada kotak (dan tombol angkanya) memasang taruhan Anda. Double meminta satu ketukan konfirmasi lebih dulu - default untuk layar sentuh. Off adalah mode penonton: tidak ada yang bisa memasang taruhan.",
  "gear.betInput.optionSingle": "Satu ketukan",
  "gear.betInput.optionDouble": "Ketuk dua kali",
  "gear.betInput.optionOff": "Nonaktif",
  "gear.cardOpen.label": "Membuka kartu",
  "gear.cardOpen.hint":
    "Double meminta satu ketukan konfirmasi sebelum sisi kartu membuka halamannya - default untuk layar sentuh.",
} as Record<string, string>;
