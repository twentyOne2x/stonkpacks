// Turkish (Türkçe): "cinema" segment. Same key set as en/cinema.ts. See
// royaleI18n.ts's file header for the key-naming and {token} interpolation
// convention, and the no-em-dash / brand-terms-stay-English rules that apply
// to every locale.
//
// Segment: cinema. Owns RoyaleRevealCinema.tsx, RoyalePhaseAnnounce.tsx,
// revealCinemaTypes.ts, RoyaleRoundCardWall.tsx, RoyaleVaultLockBand.tsx,
// RoyaleRoundTheatre.tsx, RoyalePrizeModal.tsx, RoyaleWinShareCard.tsx,
// RoyaleProfilePnlShareCard.tsx, RoyaleSpectatorRecapSection.tsx,
// RoyaleRoundReplay.tsx and ../RoyaleReplayRoute.tsx.
//
// Terminology: matches core/board's binding glossary ("tur" = round,
// "havuz" = the round's pool/pot, "Kovalamaca" = The Chase (a proper-noun
// style rendering, apostrophe before any case suffix: "Kovalamaca'ya"),
// "jackpot" = the Chase's own accumulating cash figure - kept as a distinct,
// well-established Turkish loanword so it never blurs with "havuz" (the
// round's own pot), "kare" = tile, "destekçi(ler)" = backer(s),
// "dereceli kart" = graded card/slab, "çekiliş" = pull/draw, "kasa" = vault,
// "tohum" = the VRF draw seed. cinema.theatre.* deliberately mirrors
// board.settlement.*'s wording wherever the English is the same sentence.
// The five pack-tier brand names (Starter, Elite, Legendary, Grail, Mythic)
// stay in English, including the ALL-CAPS rarity stamps below that reuse
// those exact names, as do attn ROYALE, ATTN, USDC, X, SLABZ and
// CollectorCrypt. Register is FORMAL throughout ("Siz").
//
// NBSP NOTE: cinema.tileValue.cardValueLabel carries a literal NBSP (U+00A0,
// not a plain space) between its two Turkish words ("kart değeri"), to
// stop an orphan word at a line break, same intent as en.ts's "card value" /
// "on tile" pair. cinema.tileValue.onTileLabel's natural Turkish rendering
// is a single word ("karede"), so no orphan risk exists and no NBSP applies.
export default {
  // --- RoyalePhaseAnnounce.tsx: center-stage phase explainer stamp --------
  "cinema.phaseAnnounce.packsOpening.title": "PACK'LER AÇILIYOR",
  "cinema.phaseAnnounce.packsOpening.subtitle": "kartlar açılıyor · her kare yeniden fiyatlanıyor",
  "cinema.phaseAnnounce.winnerDraw.title": "KAZANAN ÇEKİLİYOR",
  "cinema.phaseAnnounce.winnerDraw.subtitle": "kare toplamına göre ağırlıklı",

  // --- revealCinemaTypes.ts: REVEAL_CINEMA_SEQUENCE per-phase `copy` -----
  // Currently not rendered anywhere (the top status bar shows the shorter
  // PHASE_SHORT_NAME group label instead, see cinema.phaseShort.* below) but
  // kept translatable per the segment spec so a future consumer (a11y live
  // region, log, replay caption, ...) reads translated text for free.
  "cinema.phase.lockFreeze.copy": "Kilitli: gösteri artık tahtadır",
  "cinema.phase.packsEnter.copy": "Pack'ler tahtaya giriyor",
  "cinema.phase.packsOpening.copy": "Pack'ler yırtılıyor: kartlar açılıyor, kareler yeniden fiyatlanıyor",
  "cinema.phase.cardsByTile.copy": "Kartlar açıldı: her kare, önce değer",
  "cinema.phase.valueScan.copy": "Tahta okunuyor: en büyük çekilişler parlıyor",
  "cinema.phase.winnerDraw.copy": "Kazanan çekiliyor: kare toplamına göre ağırlıklı",
  "cinema.phase.winnerLock.copy": "Kazanan kilitlendi",
  "cinema.phase.loserValueConverge.copy": "Kaybeden çekilişler kasaya döner: değerleri kazanana geçer",
  "cinema.phase.winnerPotCountUp.copy": "Havuz kazanan kareye düşüyor",
  "cinema.phase.chaseFeed.copy": "Kovalamaca payını alıyor",
  "cinema.phase.chasePayout.copy": "Kovalamaca düşüyor: bir kare büyük kazanıyor",
  "cinema.phase.allocation.copy": "Kazandığınız",
  "cinema.phase.keepSellDecision.copy": "Sakla veya sat: karar sıradaki tura taşınır",

  // --- RoyaleVaultLockBand.tsx: the shared vault-door lock --------------
  "cinema.vaultLock.plateWord": "KASADA",
  "cinema.vaultLock.plateSub": "KOVALAMACA",
  "cinema.vaultLock.status": "KİLİTLİ",

  // --- RoyaleRoundCardWall.tsx: round-results card wall -------------------
  "cinema.cardWall.empty": "BU TUR HİÇBİR KART AÇILMADI",
  "cinema.cardWall.won": "KAZANILDI",
  "cinema.cardWall.rarity.grail": "GRAIL",
  "cinema.cardWall.rarity.top": "EN İYİ ÇEKİLİŞ",
  "cinema.cardWall.rarity.common": "SIRADAN",
  "cinema.cardWall.rarity.rare": "NADİR",
  "cinema.cardWall.rarity.epic": "EPİK",
  "cinema.cardWall.rarity.legendary": "LEGENDARY",
  "cinema.cardWall.rarity.mythic": "MYTHIC",
  "cinema.cardWall.status.kept": "SAKLANDI",
  "cinema.cardWall.status.sold": "SATILDI",
  "cinema.cardWall.status.toTheChase": "KOVALAMACA'YA",
  "cinema.cardWall.status.rake": "KOMİSYON",
  "cinema.cardWall.owner.vault": "KASA",
  "cinema.cardWall.owner.you": "SİZ",
  "cinema.cardWall.cardAriaLabel": "{name}, {value}. Enter tuşu kart ayrıntılarını açar.",
  "cinema.cardWall.sectionAriaLabel": "Bu tur açılan her kart, en değerliden başlayarak",
  "cinema.cardWall.eyebrow": "Açılan her kart",
  "cinema.cardWall.rake.title": "Protokol ücreti",
  "cinema.cardWall.rake.metaOne": "1 kart komisyona",
  "cinema.cardWall.rake.metaMany": "{n} kart komisyona",
  "cinema.cardWall.rake.hide": "Gizle",
  "cinema.cardWall.rake.show": "Göster",

  // --- RoyaleRevealCinema.tsx: always-available close button --------------
  "cinema.close.ariaLabel": "Açılışı kapat",
  "cinema.close.title": "Açılışı kapat (Esc)",

  // --- RoyaleRevealCinema.tsx: shareable-clip provenance caption ----------
  "cinema.provCaption.winnerOfRecord": "Resmi kazanan",
  "cinema.provCaption.round": "Tur",
  "cinema.provCaption.verifyAt": "Doğrulama adresi",

  // --- RoyaleRevealCinema.tsx: top status bar -----------------------------
  "cinema.bar.round": "Tur #{n}",
  "cinema.bar.vrfBadge": "CollectorCrypt VRF ile çalışır",
  "cinema.bar.chaseFeed": "Kovalamaca +{value}",

  // --- RoyaleRevealCinema.tsx: ONE broad label per phase group ------------
  "cinema.phaseShort.opening": "AÇILIYOR",
  "cinema.phaseShort.drawing": "ÇEKİLİYOR",
  "cinema.phaseShort.results": "SONUÇLAR",

  // --- RoyaleRevealCinema.tsx: center core cell ---------------------------
  "cinema.core.winnerTag": "KAZANAN",
  "cinema.core.tileWins": "{tile} kazanıyor",
  "cinema.core.inCards": " KARTLARDA",
  "cinema.core.poolSuffix": " HAVUZ",
  "cinema.core.totalCardValue": "TOPLAM KART DEĞERİ",
  "cinema.core.totalPool": "TOPLAM HAVUZ",
  "cinema.core.tilesLive": "{n} KARE CANLI",
  "cinema.core.packsSuffix": " · {n} PACK",
  "cinema.core.yourStake": "Bahsiniz",

  // --- RoyaleRevealCinema.tsx: idle / heat-only tile ----------------------
  "cinema.idleCell.noStake": "Bahis yok",
  "cinema.heatOnly.note": "Yalnızca USDC · bu tur pack yok",

  // --- RoyaleRevealCinema.tsx: per-tile pack count ------------------------
  "cinema.tile.packCountOne": "{n} pack",
  "cinema.tile.packCountMany": "{n} pack",

  // --- RoyaleRevealCinema.tsx: vault / heat-only notes under a tile -------
  "cinema.vaultNote.lostDraw": "Çekilişi kaybetti. Kartlar kazanan karenin destekçilerine gider.",
  "cinema.vaultNote.heatOnlyNoPack": "Bu tur pack yok · bozukluk havuza taşınır",

  // --- RoyaleRevealCinema.tsx: grail card + pull-rate tooltip -------------
  "cinema.grail.tag": "GRAIL",
  "cinema.grail.fromPack": "{pack}'ten",
  "cinema.grail.fromPackRate": "{pack}'ten · %{pct} çekiliş",
  "cinema.grail.pullTitle": "GRAIL ÇEKİLİŞİ",
  "cinema.grail.fromPackVisible": "bir {pack} pack'inden",
  "cinema.grail.provenanceAriaLabel": "{tile}, bir {pack} pack'inden",
  "cinema.grail.multiTitle": "BU TUR {n} GRAIL",
  "cinema.grail.galleryTileFromPack": "{tile} · {pack}'ten",
  "cinema.grail.galleryMore": "+{n} daha",
  "cinema.card.openInNewTab": "{name} kart sayfasını yeni sekmede aç",
  "cinema.card.ariaLabelWithOdds": "{name}, {value}. {pack} pack'inden, %{pct} çekiliş oranı. Enter tuşu kart ayrıntılarını açar.",
  // Provider RARITY-BAND variant (2026-07-22 product contract): {bandLine} is
  // the pre-composed sentence from rarityBandLine (royaleRarityBands.ts) -
  // locale-wired via the misc.rarityBand.* keys (misc.ts), so the token
  // arrives already localized; only the pack TIER name inside it stays
  // English (brand term).
  "cinema.card.ariaLabelWithBand": "{name}, {value}. {bandLine}. Enter tuşu kart ayrıntılarını açar.",
  "cinema.card.bandChancePct": "{pack} pack'inden %{pct} şans",

  // --- RoyaleRevealCinema.tsx: winner banner ------------------------------
  "cinema.winnerBanner": "{tile} KAZANIYOR",

  // --- RoyaleRevealCinema.tsx: keep/sell SELL WINDOW countdown ------------
  "cinema.sellWindow.open": "SATIŞ PENCERESİ AÇIK",
  "cinema.sellWindow.secToDecide": "KARAR İÇİN SANİYE",
  "cinema.sellWindow.noActionAutoSells": "İŞLEM YOKSA SIRADAKİ KİLİTTE OTOMATİK SATILIR",
  "cinema.sellWindow.noActionKeeps": "İŞLEM YOKSA KART SAKLANIR · KARTLARINIZDAN İSTEDİĞİNİZ ZAMAN SATIN",

  // --- RoyaleRevealCinema.tsx: per-tile value/odds strip ------------------
  "cinema.tileValue.cardValueLabel": "kart değeri",
  "cinema.tileValue.onTileLabel": "karede",
  "cinema.tileValue.oddsWord": "şans",

  // --- RoyaleRevealCinema.tsx: THE CHASE beats -----------------------------
  "cinema.chase.struckTileFallback": "vurulan kare",
  "cinema.chase.fires": "KOVALAMACA TETİKLENİYOR",
  "cinema.chase.jackpotReleasingTo": "JACKPOT {tile} KARESİNE SALINIYOR",
  "cinema.chase.winningTileFallback": "KAZANAN KARE",
  "cinema.chase.feedThisRound": "Kovalamaca bu tur +{value}",
  "cinema.chase.cardToChase": "KART KOVALAMACA'YA",
  "cinema.chase.bestLosingCardNamed": "En iyi kaybeden kart · {name} · {value} kilitlendi",
  "cinema.chase.bestLosingCardVault": "En iyi kaybeden kart kasaya kilitlendi",
  "cinema.chase.jackpotGrows": "Kovalamaca +{value} · jackpot büyüyor",
  "cinema.chase.hitsAriaLabel": "Kovalamaca {tile} karesini {value} ile vuruyor",
  "cinema.chase.alsoHolds": "Kovalamaca ayrıca elinde tutuyor",
  "cinema.chase.alsoHoldsAriaOne": "Kovalamaca ayrıca {value} değerinde 1 kart tutuyor",
  "cinema.chase.alsoHoldsAriaMany": "Kovalamaca ayrıca {value} değerinde {n} kart tutuyor",
  "cinema.chase.more": "daha",
  "cinema.chase.cardsTotalOne": "1 kart · dereceli kartlarda {value}",
  "cinema.chase.cardsTotalMany": "{n} kart · dereceli kartlarda {value}",
  "cinema.chase.hitsKicker": "KOVALAMACA VURUYOR",
  "cinema.chase.winsBig": "BÜYÜK KAZANIYOR",
  "cinema.chase.yourCut": "SİZİN PAYINIZ",
  "cinema.chase.otherBackerOne": "{n} diğer destekçi · orantılı",
  "cinema.chase.otherBackerMany": "{n} diğer destekçi · orantılı",
  "cinema.chase.backerOne": "{n} destekçi · orantılı",
  "cinema.chase.backerMany": "{n} destekçi · orantılı",
  "cinema.chase.alsoWonRound": "Turu da kazandı",
  "cinema.chase.backedTileNote": "Desteklenen bir kare · tur kazananı değil",
  "cinema.chase.heldCardsSpillOne": "Tutulan 1 kart dışarı taşıyor",
  "cinema.chase.heldCardsSpillMany": "Tutulan {n} kart dışarı taşıyor",

  // --- RoyaleRevealCinema.tsx: "You get" allocation screen ----------------
  "cinema.you.potSuffix": "havuz",
  "cinema.you.get": "Kazandığınız",
  "cinema.you.lost": "Kaybettiniz!",
  "cinema.you.noStakeThisRound": "Bu tura bahis yapmadınız",
  "cinema.you.mathLine": "{usdc} USDC havuz payı + kartlardan {cards} = size {total}",
  "cinema.you.sold": "{value} satıldı",
  "cinema.you.kept": "Saklandı · koleksiyonunuzda",
  "cinema.you.keepButton": "Sakla",
  "cinema.you.sellButton": "{value} sat",
  "cinema.you.yours": "sizin",
  "cinema.you.noCardThisRound": "Bu tur kart yok.",
  "cinema.you.usdcPaidInstantly": "USDC · bakiyenize yatırıldı",
  "cinema.you.keepAll": "Hepsini sakla",
  "cinema.you.sellAllButton": "Hepsini sat {value}",
  "cinema.you.sellAllConfirm": "Emin misiniz? Hepsini sat {value}",
  "cinema.you.noOtherBackers": "Bu tur başka destekçi yok",
  "cinema.you.oneOtherSplits": "1 diğer kişi {value} paylaşıyor",
  "cinema.you.othersSplit": "{n} diğer kişi {value} paylaşıyor",
  "cinema.you.oneWinningBackerTakes": "1 kazanan destekçi {value} alıyor",
  "cinema.you.winningBackersSplit": "{n} kazanan destekçi {value} paylaşıyor",
  "cinema.you.viewFullResults": "Tam sonuçları gör",
  "cinema.you.howItWorks": "Nasıl çalışır",

  // --- RoyaleRoundTheatre.tsx (SHARED with RoyalePrizeModal.tsx) ----------
  // The inline round theatre and the full-screen prize modal render the same
  // settled panel word for word, so both read these keys (see the SHARED
  // SUB-NAMESPACES note in this file's header).
  //
  // GRAIL DISPOSITION rule copy, one per RoyaleGrailDisposition.
  "cinema.theatre.disposition.noGrail": "Standart dereceli kart, karenin en büyük destekçisi onu saklar ya da orantılı olarak geri satar.",
  "cinema.theatre.disposition.sellBackSplit":
    "Grail kuralı: tek bir destekçi diğerlerini orantılı olarak karşılayamaz, bu yüzden grail varsayılan olarak geri satılır ve USDC kare genelinde paylaştırılır.",
  "cinema.theatre.disposition.topBackerKeeps":
    "Grail kuralı: en büyük destekçinin orantılı payı diğerlerini satın almaya zaten yetiyor, bu yüzden grail'i saklar ve herkese kart payını USDC olarak öder.",
  // Spectator "players deciding" wait row. {count} is the emphasised "X / N"
  // pair; the caller splits the sentence at the token so any word order works.
  "cinema.theatre.decidingAriaLabel": "{total} diğer oyuncunun {decided} tanesi karar verdi; sıradaki tur {seconds} saniye sonra",
  "cinema.theatre.playersDeciding": "Karar veren oyuncular {count}",
  "cinema.theatre.nextRoundIn": "sıradaki tur {seconds} sonra",
  "cinema.theatre.secondsShort": "{n}sn",
  // Compact strip while the board reveals in place.
  "cinema.theatre.stripAriaLabel": "Tur sonuçlanıyor",
  "cinema.theatre.stageLockingBoard": "Tahta kilitleniyor…",
  "cinema.theatre.stagePacksOpening": "Tahtada pack'ler açılıyor",
  "cinema.theatre.stageWinnerDrawn": "Kazanan çekildi",
  "cinema.theatre.headlineNoEntries": "Bu tur katılım yok",
  "cinema.theatre.headlineRevealing": "Pack'ler açılıyor…",
  "cinema.theatre.headlineTileWins": "{tile} {value} kazanıyor",
  "cinema.theatre.tileFallback": "Kare",
  "cinema.theatre.youWon": "{value} kazandınız",
  "cinema.theatre.youLostNoStake": "Kaybettiniz, {tile} karesinde bahsiniz yoktu",
  "cinema.theatre.winnerFallback": "kazanan",
  "cinema.theatre.tileWonNoStake": "{tile} kazandı · bahsiniz yoktu",
  "cinema.theatre.aTileFallback": "Bir kare",
  // Leading separator/space is part of the value (same convention as
  // cinema.core.inCards above): these two append to the meta line.
  "cinema.theatre.stripMeta": "{tiles} kare oynandı · havuz {pool}",
  "cinema.theatre.stripMetaCards": " · {value} kart",
  "cinema.theatre.stripMetaCash": " + {value} nakit",
  "cinema.theatre.drawingWinner": "kazanan çekiliyor",
  // Settled panel.
  "cinema.theatre.panelAriaLabel": "Tur sonucu",
  "cinema.theatre.roundSettled": "Tur sonuçlandı",
  "cinema.theatre.winner": "Kazanan",
  "cinema.theatre.seedNote":
    "{tile} karesindeki {value} başlangıç bahsinizi içerir, $0'dan oynamak için başlangıç bahislerini bahis panelinden temizleyin.",
  "cinema.theatre.lossNoteStaked":
    "Bu tur diğer karelere {value} bahis yaptınız. Bu panelin arkasındaki herhangi bir karenin üzerine gelerek ne açtığını ve neden kaybettiğini görün.",
  "cinema.theatre.lossNoteNoStake":
    "Bu tur bir kareyi desteklemediniz, bu yüzden ödenecek bir şey yok. Sıradaki turda bir bahis miktarı seçip bir kareye tıklayın.",
  "cinema.theatre.bonusGrails.one":
    "Bu tur {n} grail daha düştü: kazanan karenin destekçilerine bonus ganimet olarak gider (saklanır, ya da tutulamayacak kadar değerliyse orantılı olarak geri satılır), asla ATTN ücretine veya Kovalamaca'ya gitmez.",
  "cinema.theatre.bonusGrails.other":
    "Bu tur {n} grail daha düştü: kazanan karenin destekçilerine bonus ganimet olarak gider (saklanır, ya da tutulamayacak kadar değerliyse orantılı olarak geri satılır), asla ATTN ücretine veya Kovalamaca'ya gitmez.",
  "cinema.theatre.noPacksBacked": "Bu tur hiçbir pack desteklenmedi. Sıradaki tur otomatik başlar.",
  // Payout split table.
  "cinema.theatre.payoutSplitTitle": "Ödeme paylaşımı · {tile}",
  "cinema.theatre.payoutSplitMeta": "Havuz {pool} · Kovalamaca beslemesi {feed}",
  "cinema.theatre.payoutSplitChase": " · KOVALAMACA +{value}",
  "cinema.theatre.you": "Siz",
  "cinema.theatre.physicalCard": "Fiziksel kart →",
  "cinema.theatre.grailSecured": " (grail güvence altında)",
  "cinema.theatre.grailSoldBack": "Grail geri satıldı ({value}) → yukarıdaki USDC paylaşımına.",
  // Chase result. The lead is bold on its own line of markup; the body carries
  // the emphasised {value} inside the sentence, so the caller splits at the
  // token and every language keeps its own word order.
  "cinema.theatre.chaseHitLead": "Kovalamaca TUTTU!",
  "cinema.theatre.chaseHitBody":
    "Kovalamaca kendi nadir çekilişiyle tetiklendi, bu yüzden Kovalamaca'dan {value} bu kazanca ödendi, yukarıdaki paylaşıma eklendi. Sıradaki Kovalamaca yeniden birikmeye başlıyor.",
  "cinema.theatre.chaseMissLead": "Bu tur Kovalamaca düşmedi.",
  "cinema.theatre.chaseMissBody": "Kovalamaca kendi nadir çekilişiyle tetiklenir, bu yüzden büyümeye devam ediyor, şimdi {value}.",
  // Draw receipt / VRF disclosure.
  "cinema.theatre.vrfSummary": "Çekilişi doğrula",
  "cinema.theatre.vrfSummaryNote": "kanıtlanabilir çekiliş · çekiliş makbuzunu gör",
  "cinema.theatre.vrfRoundId": "tur kimliği",
  "cinema.theatre.vrfWinningDraw": "kazanan çekiliş",
  "cinema.theatre.vrfDrawSeed": "çekiliş tohumu",
  "cinema.theatre.vrfProofId": "kanıt kimliği",
  "cinema.theatre.vrfTicket": "{total} biletten #{n}",
  "cinema.theatre.vrfVerifying": "Doğrulanıyor…",
  "cinema.theatre.vrfRecheck": "Çekilişi yeniden denetle",
  "cinema.theatre.vrfVerifierLink": "Doğrulayıcı ↗",
  "cinema.theatre.vrfVerified": "✓ Çekiliş doğrulandı, bu kazanan yayımlanan çekiliş tohumune göre yeniden denetleniyor.",
  "cinema.theatre.vrfFailed": "✗ Bu çekiliş kendi tohumuna göre doğrulanamadı, güvenmeyin.",
  "cinema.theatre.vrfNote": "Her tur, yeniden denetleyebileceğiniz yayımlanmış bir tohumdan tek bir kazanan çeker.",
  "cinema.theatre.vrfNoDraw": "Bu tur hiçbir pack desteklenmedi, çekilecek bir şey yok.",
  // Footer actions + the keep/sell hint.
  "cinema.theatre.keepCard": "Kartı sakla → koleksiyon",
  "cinema.theatre.sellBackFor": "{value} karşılığında geri sat",
  "cinema.theatre.continueNextRound": "Sıradaki tura devam et",
  "cinema.theatre.continue": "Devam et",
  "cinema.theatre.settleHint":
    "Sakla, kartı koleksiyonunuza ekler. Geri sat, bakiyenize {sell} yatırır ({value} değerinin %{pct}'i, bu pack'in CC geri alımı). İşlem yapılmazsa = tur kapanınca varsayılan olarak geri satılır.",

  // --- RoyalePrizeModal.tsx: only what the modal does NOT share ------------
  "cinema.prizeModal.stageLocked": "Kilitli",
  "cinema.prizeModal.stageReveal": "Açılış",
  "cinema.prizeModal.betterLuck": "Sıradaki turda şansınız açık olsun",

  // --- Share-overlay chrome (RoyaleWinShareCard + RoyaleProfilePnlShareCard)
  "cinema.share.preparingCard": "Kartınız hazırlanıyor…",
  "cinema.share.renderingPng": "PNG oluşturuluyor…",
  "cinema.share.renderFailed": "Görsel oluşturulamadı. Tekrar deneyin.",
  "cinema.share.captionOpened": "Açıklama X'te açıldı. Kaydedilen PNG'yi ekleyin.",
  "cinema.share.close": "Kapat",
  "cinema.share.downloadPng": "PNG indir",
  "cinema.share.shareToX": "X'te paylaş",
  "cinema.share.done": "Tamam",
  "cinema.share.provablyFair": "PACK SAVAŞLARI · HER ÇEKİLİŞ KANITLANABİLİR",

  // --- RoyaleWinShareCard.tsx: the portrait + wide win cards ---------------
  // "attn ROYALE" (the wordmark and its aria-label), "SLABZ" and "X" are brand
  // terms: they stay English inside these values and the bare wordmark carries
  // no key at all.
  "cinema.winShare.multiplierAriaLabel": "çarpan {value}",
  "cinema.winShare.multiplier": "ÇARPAN",
  "cinema.winShare.inCards": "KARTLARDA",
  "cinema.winShare.cashWon": "KAZANILAN NAKİT",
  "cinema.winShare.tileHit": "· KARE VURULDU",
  "cinema.winShare.entry": "GİRİŞ",
  "cinema.winShare.winOdds": "KAZANMA ŞANSI",
  "cinema.winShare.totalValue": "TOPLAM DEĞER",
  "cinema.winShare.certLine": "SLABZ İLE ÇALIŞIR · SERTİFİKA #{n}",
  "cinema.winShare.roundLine": "TUR #{n} · KANITLANABİLİR VRF ÇEKİLİŞİ",
  "cinema.winShare.takeHomeAriaLabel": "eve götürülen {value}",
  "cinema.winShare.totalTakeHome": "TOPLAM ELE GEÇEN",
  "cinema.winShare.breakdown.one": "{cash} NAKİT + {n} KART ({value})",
  "cinema.winShare.breakdown.other": "{cash} NAKİT + {n} KART ({value})",
  "cinema.winShare.deposited": "YATIRILDI",
  "cinema.winShare.wonBy": "{name} KAZANDI",
  "cinema.winShare.theGrail": "GRAIL",
  "cinema.winShare.topPull": "EN İYİ ÇEKİLİŞ",
  "cinema.winShare.topCardOfRound": "TURUN EN İYİ KARTI",
  "cinema.winShare.poweredBySlabz": "SLABZ İLE ÇALIŞIR",
  "cinema.winShare.cert": "SERTİFİKA #{n}",
  // Overlay: the label doubles as the trigger button's text and the dialog's
  // aria-label, so both read the one key.
  "cinema.winShare.shareYourWin": "Kazancınızı paylaşın",
  "cinema.winShare.pngSaved": "PNG kaydedildi. Gönderinize ekleyin, X sizin için ekleyemez.",
  "cinema.winShare.renderingHdVideo": "HD tur videosu oluşturuluyor…",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.winShare.renderingHdVideoProgress": "HD tur videosu oluşturuluyor - {seconds}sn{pct}",
  "cinema.winShare.hdVideoSaved": "HD video kaydedildi. Görsel yerine bunu gönderinize ekleyin.",
  "cinema.winShare.hdRenderFailed": "HD oluşturma başarısız oldu. Tekrar deneyin.",
  "cinema.winShare.hdVideoButton": "HD tur videosu",
  "cinema.winShare.hdVideoTitle": "Bu turu HD mp4 olarak oluşturun (yerel işleme hizmeti) ve kaydedin.",
  "cinema.winShare.tweetTriggerLabel": "Kazancı X'te paylaş",

  // --- RoyaleProfilePnlShareCard.tsx: the run's PnL card -------------------
  "cinema.pnlShare.returnAriaLabel": "bahiste {value} getiri",
  "cinema.pnlShare.onStake": "BAHİSTE",
  "cinema.pnlShare.certifiedRun": "SERTİFİKALI OTURUM · NET K/Z",
  "cinema.pnlShare.heroSub.one": "{n} tur boyunca · %{pct} kazanma oranı",
  "cinema.pnlShare.heroSub.other": "{n} tur boyunca · %{pct} kazanma oranı",
  "cinema.pnlShare.collection": "KOLEKSİYON",
  "cinema.pnlShare.change30d": "30G DEĞİŞİM",
  "cinema.pnlShare.ribbonAriaLabel.one": "Son {n} bahis yapılan tur için tur başına sonuç",
  "cinema.pnlShare.ribbonAriaLabel.other": "Son {n} bahis yapılan tur için tur başına sonuç",
  "cinema.pnlShare.bestPull": "EN İYİ ÇEKİLİŞ",
  "cinema.pnlShare.tier.grail": "GRAIL",
  "cinema.pnlShare.tier.top": "EN İYİ",
  "cinema.pnlShare.tier.common": "SIRADAN",
  "cinema.pnlShare.rounds": "TURLAR",
  "cinema.pnlShare.winRate": "KAZANMA ORANI",
  "cinema.pnlShare.roi": "ROI",
  "cinema.pnlShare.bestRound": "EN İYİ TUR",
  "cinema.pnlShare.rank": "SIRA #{n}",
  "cinema.pnlShare.rankOf": "SIRA #{n} / {total}",
  "cinema.pnlShare.staked": "{value} BAHİS EDİLDİ",
  "cinema.pnlShare.overlayAriaLabel": "Oturumunuzu paylaşın",
  "cinema.pnlShare.saved": "Kaydedildi. Gönderinize ekleyin.",
  "cinema.pnlShare.triggerLabel": "K/Z paylaş",

  // --- RoyaleSpectatorRecapSection.tsx: "where every card landed" ----------
  // The holder name "attn" (the lower-case protocol brand) stays English and
  // carries no key; its kicker and note below do.
  "cinema.recap.keepSell": "Sakla / sat",
  "cinema.recap.secondsShort": "{n}sn",
  "cinema.recap.dest.yourCall": "Kararınız",
  "cinema.recap.dest.deciding": "Karar veriliyor",
  "cinema.recap.dest.you": "Siz",
  "cinema.recap.dest.topBacker": "En büyük destekçi",
  "cinema.recap.dest.yourCard": "Kartınız",
  "cinema.recap.dest.wonBy": "Kazanan",
  "cinema.recap.dest.aBacker": "Bir destekçi",
  "cinema.recap.dest.yourChaseLoot": "Kovalamaca ganimetiniz",
  "cinema.recap.dest.chaseLoot": "Kovalamaca ganimeti",
  "cinema.recap.dest.releasedFromVault": "kasadan serbest bırakıldı",
  "cinema.recap.dest.sweptTo": "Süpürüldü",
  "cinema.recap.dest.chaseVault": "Kovalamaca kasası",
  "cinema.recap.dest.fundsJackpot": "jackpot'u besler",
  "cinema.recap.dest.protocolFee": "Protokol ücreti",
  "cinema.recap.dest.tableRake": "masa komisyonu",
  "cinema.recap.dest.soldBack": "Geri satıldı",
  "cinema.recap.dest.intoTheSplit": "Paylaşıma",
  "cinema.recap.dest.toThePool": "havuza +{value}",
  "cinema.recap.sublineYours": "Bu turun tüm masa kartları. Sizinki aşağıda işaretli.",
  "cinema.recap.sublineLost": "Bu turun tüm masa kartları. Hiçbiri sizin değil.",
  "cinema.recap.sublineNoStake": "Bu turun tüm masa kartları. Bu tura katılmadınız.",
  "cinema.recap.sectionAriaLabel": "Bu turun her kartının nereye gittiği",
  "cinema.recap.eyebrow": "Tur sonuçları",
  "cinema.recap.headline": "Her kart nereye düştü",
  "cinema.recap.theatreHeader": "Turun hikayesi · her kartın gittiği yer",
  "cinema.recap.openCardTitle": "Kart sayfasını yeni sekmede açar",
  "cinema.recap.fromPack": "{pack}'ten",
  "cinema.recap.railAriaLabel": "Bu turdaki tüm kartlar, en değerliden başlayarak",
  "cinema.recap.tierRule.one": "Diğer kart · {value}",
  "cinema.recap.tierRule.other": "Diğer {n} kart · {value}",
  "cinema.recap.showMore": "{n} tane daha göster",
  "cinema.recap.showAll": "Tümünü göster ({n})",
  "cinema.recap.showing": "{total} karttan {n} tanesi · {totalValue} içinden {value}",
  "cinema.recap.allShown": "Tüm {n} kart · toplam {value}",

  // --- RoyaleRoundReplay.tsx: the full-round replayer ----------------------
  // "SEKMEYİ KAYDET" inside the two service sentences is this same panel's
  // button label: keep the two in step when translating.
  "cinema.replay.finishingVideo": "Video tamamlanıyor...",
  "cinema.replay.recordingEmpty": "Kayıt boş döndü. Tekrar deneyin.",
  "cinema.replay.checkingService": "HD işleme hizmeti kontrol ediliyor...",
  "cinema.replay.serviceUnreachable":
    "HD işleme hizmetine ulaşılamıyor, bu yüzden HD oluşturulamıyor. SEKMEYİ KAYDET bunun yerine bu sekmeyi kaydeder (tarayıcı istemi).",
  // {pct} is an already-composed " · 42%" tail (empty until progress is known).
  "cinema.replay.renderingHd": "HD video oluşturuluyor: {seconds}sn{pct}",
  "cinema.replay.hdRenderFailed": "HD oluşturma başarısız oldu. Tekrar deneyin veya bunun yerine SEKMEYİ KAYDET ile bu sekmeyi kaydedin.",
  "cinema.replay.cannotRecord":
    "Bu tarayıcı burada video kaydedemiyor. Bunun yerine tur dosyası kaydediliyor, tekrar izlemek için tekrar izleme sayfasına bırakın.",
  "cinema.replay.pickThisTab": "Turu kaydetmek için \"Bu sekme\" seçeneğini seçin.",
  "cinema.replay.recorderFailed": "Kaydedici başlatılamadı.",
  "cinema.replay.watermarkAriaLabel": "Tur {n} tekrar izlemesi",
  "cinema.replay.watermarkAriaLabelDated": "Tur {n} tekrar izlemesi, {date} tarihinde kaydedildi",
  "cinema.replay.watermarkTag": "TEKRAR İZLEME",
  "cinema.replay.watermarkRound": "TUR #{n}",
  "cinema.replay.headerSeed": "TOHUM {seed}",
  "cinema.replay.phaseBidding": "BAHİS",
  "cinema.replay.phaseReveal": "AÇILIŞ",
  "cinema.replay.phaseDone": "TAMAMLANDI",
  "cinema.replay.boardAriaLabel": "Tekrar izleme tahtası",
  "cinema.replay.controlsAriaLabel": "Tur {n} için tekrar izleme kontrolleri",
  "cinema.replay.pause": "Duraklat",
  "cinema.replay.play": "Oynat",
  "cinema.replay.pauseButton": "DURAKLAT",
  "cinema.replay.playButton": "OYNAT",
  "cinema.replay.restart": "YENİDEN BAŞLAT",
  "cinema.replay.scrubAriaLabel": "Turun tamamında gezinin: bahisten açılışa",
  "cinema.replay.lockMark": "Kilit",
  "cinema.replay.seeking": "ARANIYOR",
  "cinema.replay.speedAriaLabel": "Oynatma hızı",
  "cinema.replay.speedOption": "{n}x",
  "cinema.replay.saveVideo": "VİDEOYU KAYDET",
  "cinema.replay.saveVideoTitle":
    "Bu turu HD mp4 olarak oluşturun (yerel işleme hizmeti; ekranınızdan hiçbir şey kaydedilmez)",
  "cinema.replay.recordTab": "SEKMEYİ KAYDET",
  "cinema.replay.recordTabTitle":
    "Yedek yöntem: bu sekmeyi tarayıcınızın ekran kaydı istemiyle kaydedin (gerçek zamanlı kalite)",
  "cinema.replay.saveRound": "TURU KAYDET",
  "cinema.replay.saveRoundTitle":
    "Bu turu küçük bir veri dosyası olarak indirin, herkes bu turu tekrar izlemek için tekrar izleme sayfasına bırakabilir",
  "cinema.replay.close": "KAPAT",
  "cinema.replay.backToGame": "OYUNA DÖN",
  "cinema.replay.shareOverlayAriaLabel": "Bu turu paylaş",
  "cinema.replay.videoReady": "TUR VİDEOSU HAZIR",
  "cinema.replay.formatWebm": ".webm olarak kaydedildi, X yüklemek için mp4 ister, bu yüzden önce bağlantıyı paylaşın veya dosyayı dönüştürün.",
  "cinema.replay.formatMp4": ".mp4 olarak kaydedildi, X'e eklemeye hazır.",
  "cinema.replay.shareOnX": "X'te paylaş",
  "cinema.replay.saveAgain": "Tekrar kaydet",
  "cinema.replay.shareHint": "X, web üzerinden video ekleyemez, gönderiniz önceden doldurulmuş şekilde açılır; kaydedilen dosyayı ekleyin.",
  "cinema.replay.xOpened": "X, açıklamanızla açıldı. Kaydedilen dosyayı ({filename}) ekleyin, web düzenleyici sizin için ekleyemez.",

  // --- RoyaleReplayRoute.tsx: the standalone /lab/royale/replay shell ------
  "cinema.replayRoute.documentTitle": "attn ROYALE Tur Tekrar İzleme",
  "cinema.replayRoute.noRecordingParam": "Kayıt sağlanmadı. ?rec=<encoded-json-or-url> geçirin.",
  "cinema.replayRoute.unreadable": "?rec= içinden kayıt okunamadı.",
  "cinema.replayRoute.loadFailed": "Kayıt yüklenemedi ({error}).",
  "cinema.replayRoute.badge": "TUR TEKRARI",
  "cinema.replayRoute.loading": "KAYIT YÜKLENİYOR",
  "cinema.replayRoute.noRecording": "Oynatılacak kayıt yok.",
  "cinema.replayRoute.hint":
    "Tekrar izlemeler, tahtanın geçmiş turlar şeridinden (sonuçlanmış bir turda TEKRAR İZLE) veya paylaşılan bir ?rec= bağlantısından açılır.",
  "cinema.replayRoute.roundResults": "TUR SONUÇLARI",
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
  "cinema.share.shareFile": "Dosyayı paylaş",
  "cinema.share.shareSheetOpened": "Paylaşım paneli açıldı.",
  "cinema.winShare.lossHeadline": "TUR KAYBI",
  "cinema.winShare.lossResult": "KAYIP",
  "cinema.winShare.returned": "İADE",
  "cinema.winShare.bestPull": "EN İYİ ÇEKİM",
  "cinema.winShare.playedBy": "{name} OYNADI",
  "cinema.winShare.lossCaption": "Tur #{n}: {stake} yatırdım. Bu turdan kazanç yok.",
  "cinema.winShare.lossCardCaption": "Masadaki en iyi çekim, ama benim değil.",
  "cinema.winShare.lossNoCardCaption": "Tur sonucu dürüstçe kaydedildi.",
  "cinema.winShare.roundResultTop": "TUR",
  "cinema.winShare.roundResultMain": "KAYIP",
  "cinema.winShare.shareRoundCard": "Kartı paylaş",
  "cinema.replay.shareVideo": "Videoyu paylaş",
  "cinema.replay.shareVideoTitle": "Tur videosunu paylaş",
  "cinema.replay.shareVideoSheetOpened": "Video ile paylaşım paneli açıldı.",
  "cinema.replay.shareVideoFailed": "Video paylaşılamadı. Tekrar deneyin.",
  "cinema.replay.shareSheetHint": "Cihazınız bu videoyu paylaşım panelinden X’e gönderebilir.",
  "cinema.replay.shareRoundTitle": "attn royale · Tur #{n}",
  "cinema.replay.shareRoundTable": "Masada {amount}.",
  "cinema.replay.shareRoundWin": "Taşım {pool} masasını aldı · {amount} geri geldi.",
  "cinema.replay.shareRoundCardsOnly": "Taş {tile}, {pool} masasını aldı · taşım kaybetti ama {amount} geri geldi.",
  "cinema.replay.shareRoundWinner": "Taş {tile}, {pool} masasını aldı.",
  "cinema.share.shareVideo": "Videoyu paylaş",
  "cinema.share.preparingOutput": "Paylaşım hazırlanıyor…",
  "cinema.share.cancelled": "Paylaşım iptal edildi.",
  "cinema.share.shareSheetHint": "Cihazınız bu videoyu paylaşım panelinden X’e gönderebilir.",
  "cinema.personalReveal.sectionAria": "Açtığın kartlar",
  "cinema.personalReveal.title": "AÇTIĞIN KARTLAR",
  "cinema.personalReveal.progress.eyebrow": "SENKRONİZE AÇILIŞ",
  "cinema.personalReveal.progress.title": "KARTLAR AÇILIYOR",
  "cinema.personalReveal.progress.body": "Masada kartlar açılıyor. Bu aşama bittiğinde ortak açılış devam edecek.",
  "cinema.personalReveal.normal.label": "NORMAL AÇILIŞ",
  "cinema.personalReveal.normalHint": "Önce kartın arka yüzü görünür. Kartı çevirmek için tıkla veya dokun; açtığın kartlar senindir. Kapalı kalan kartlar 5 saniye sonra otomatik çevrilir.",
  "cinema.personalReveal.hardcore.label": "ZORLU AÇILIŞ",
  "cinema.personalReveal.hardcoreHint": "Önce kartın arka yüzü görünür. Kartı çevirmek için tıkla veya dokun; sahiplik çekilişten sonra belirlenir. Kapalı kalan kartlar 5 saniye sonra otomatik çevrilir.",
  "cinema.personalReveal.yourCard": "SENİN KARTIN",
  "cinema.personalReveal.youOpened": "SEN AÇTIN",
  "cinema.personalReveal.otherCards": "DİĞER KARTLAR",
  "cinema.personalReveal.allOpen": "Tüm kartlar açıldı",
  "cinema.personalReveal.autoOpenIn": "Kalan kartlar {n} sn içinde otomatik açılır",
  "cinema.personalReveal.revealCardAria": "Kart {n} çevir",
  "cinema.personalReveal.revealedCardAria": "Kart {n} açıldı: {name}, {value}",
  "cinema.personalReveal.sort.group": "Kart sırası",
  "cinema.personalReveal.sort.pack": "Paket",
  "cinema.personalReveal.sort.packAria": "Pack fiyatına göre sırala, en ucuzdan başlayarak",
  "cinema.personalReveal.sort.rarity": "Nadirlik",
  "cinema.personalReveal.sort.revealFirst": "Nadirliğe göre sıralama, tüm kartlar açıldıktan sonra etkinleşir",
  "cinema.personalReveal.sort.bestAria": "Nadirliğe göre sırala, en iyiler önce",
  "cinema.personalReveal.sort.worstAria": "Nadirliğe göre sırala, en kötüler önce",
  "cinema.personalReveal.sort.packStatus": "Kartlar pack fiyatına göre sıralandı, en ucuzdan başlayarak",
  "cinema.personalReveal.sort.bestStatus": "Kartlar nadirliğe göre sıralandı, en iyiler önce",
  "cinema.personalReveal.sort.worstStatus": "Kartlar nadirliğe göre sıralandı, en kötüler önce",
  "cinema.personalReveal.rarity": "Nadirlik",
  "cinema.personalReveal.year": "Yıl",
  "cinema.personalReveal.yearUnknown": "Yıl bilinmiyor",
  "cinema.personalReveal.grade": "Derece",
  "cinema.personalReveal.ungraded": "Derecelendirilmemiş",
  "cinema.personalReveal.pageNavigation": "Kart sayfaları",
  "cinema.personalReveal.previousPage": "Önceki kartlar",
  "cinema.personalReveal.nextPage": "Sonraki kartlar",
  "cinema.personalReveal.pageStatus": "Sayfa {page} / {pages}",
  "cinema.personalReveal.live.revealed": "{name} açıldı",
  "cinema.personalReveal.live.all": "{n} kartın tümü açıldı",
} as Record<string, string>;
