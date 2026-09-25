// Turkish (Türkçe): "board" segment. Same key set as en/board.ts. See
// royaleI18n.ts's file header for the key-naming and {token} interpolation
// convention, and the no-em-dash / brand-terms-stay-English / packs-framing
// rules that apply to every locale.
//
// Segment: board. Owns RoyaleBoardV2.tsx, RoyaleBoard.tsx (legacy v1),
// RoyaleStakeControl.tsx, RoyaleBetRail.tsx, RoyaleRoundCore.tsx,
// RoyaleClock.tsx, RoyaleSettlementPanel.tsx, RoyaleBetTooBigPopover.tsx,
// RoyaleWagerLadder.tsx, RoyaleBidFundConfirm.tsx, RoyaleHotkeyOptIn.tsx,
// RoyaleLeaderboard.tsx, RoyaleConnectXControl.tsx and
// RoyalePackCompositionChips.tsx.
//
// Terminology: matches core.ts's binding glossary ("tur" = round, "havuz" =
// pool/pot, "Kovalamaca" = The Chase, "kare" = tile, "destekçi(ler)" =
// backer(s), "en büyük destekçi" = top backer, "bahis" = bet/stake,
// "desteklemek" = to back a tile, "kur/kurulu/kaldır" = arm/armed/disarm an
// auto-bet strategy, "geri sat/geri satış" = sell back, "geri alım oranı" =
// buyback rate, "çekiliş" = pull/draw, "kasa" = vault, "bozukluk" = the loose
// change sitting on a tile). "pack"/"packs" keep the English loanword
// literally (never "paket"); the five pack-tier brand names stay English and
// are never inflected without an apostrophe. Register is FORMAL throughout
// ("Siz").
export default {
  // --- Hold-Tab player scoreboard + chat mute controls --------------------
  "board.playerScoreboard.ariaLabel": "Oyuncular ve nakit PnL",
  "board.playerScoreboard.title": "Oyuncular",
  "board.playerScoreboard.open": "İstatistikler ve sessize alma",
  "board.playerScoreboard.pinnedHint": "Sabitlendi · Esc kapatır",
  "board.playerScoreboard.holdHint": "Göz atmak için Tab tuşunu basılı tut · sabitlemek için tıkla",
  "board.playerScoreboard.close": "Oyuncu skor tablosunu kapat",
  "board.playerScoreboard.windowAria": "PnL penceresi",
  "board.playerScoreboard.window.24h": "24H",
  "board.playerScoreboard.window.7d": "7D",
  "board.playerScoreboard.window.30d": "30D",
  "board.playerScoreboard.window.all": "Tümü",
  "board.playerScoreboard.partialHistory": "Geçmişin bir kısmı gösteriliyor. Sıralamalarda saklanan, sonuçlandırılmış nakit aralığı kullanılır.",
  "board.playerScoreboard.statsUnavailable": "PnL geçmişi burada kullanılamıyor. Mevcut bahisler hâlâ aktif.",
  "board.playerScoreboard.playerColumn": "Oyuncu",
  "board.playerScoreboard.pnlColumn": "Nakit PnL",
  "board.playerScoreboard.voiceColumn": "Sohbet",
  "board.playerScoreboard.loading": "Oyuncular yükleniyor…",
  "board.playerScoreboard.empty": "Bu turda henüz kimse bir kareye bahis yapmadı.",
  "board.playerScoreboard.bot": "Bot",
  "board.playerScoreboard.tiles": "Kareler {tiles}",
  "board.playerScoreboard.stake": "Bahis {amount}",
  "board.playerScoreboard.notAvailable": "Kullanılamıyor",
  "board.playerScoreboard.rounds": "{n} tur",
  "board.playerScoreboard.youBadge": "Sen",
  "board.playerScoreboard.mute": "Mesajları gizle",
  "board.playerScoreboard.unmute": "Mesajları göster",
  "board.playerScoreboard.muteAria": "Sohbette {name} adlı kişinin mesajlarını gizle",
  "board.playerScoreboard.unmuteAria": "Sohbette {name} adlı kişinin mesajlarını göster",

  // --- Shared across 2+ files in this segment -----------------------------
  "board.common.you": "Siz",
  "board.common.noWin": "kazanç yok",
  "board.common.roundSettled": "Tur sonuçlandı",
  "board.common.youWon": "{amount} kazandınız",
  "board.common.pack": "pack",
  "board.common.packs": "packs",
  "board.common.secondsSuffix": "sn",

  // --- RoyaleBoardV2: the lock-flash stamp --------------------------------
  "board.tile.lockedStamp": "KİLİTLİ",
  "board.tile.lockedStampSub": "artık bahis yok",

  // --- RoyaleBoardV2: tile aria-label / hover clue ------------------------
  "board.tile.ariaOverBalance": "{label}: {bet} bahsiniz {balance} nakdinizin üzerinde. Bahsi düşürün veya bakiye yatırın.",
  "board.tile.ariaBack": "{label} karesini {amount} ile destekle",
  "board.tile.ariaBackShortcutSuffix": ", kısayol {shortcut}",
  "board.tile.ariaOddsChance": "%{pct} kazanma şansı",
  "board.tile.ariaBackers": "{count} destekçi",
  "board.tile.yourPortraitAlt": "Sizin portreniz",
  "board.tile.backerPopLine": "{name} · {amount}",
  "board.tile.noPackYet": "USDC · henüz pack yok",
  "board.tile.noStake": "Bahis yok",
  "board.tile.youOwn": "Bahis {amount}",
  "board.tile.youOwnShareSuffix": " · {pct}",
  "board.tile.packsOpenAtLock": "Pack'ler kilitte açılır",
  "board.tile.resultOpened": "Açıldı · kartlarda {amount}",
  "board.tile.resultWinner": "KAZANAN · kartlarda {amount}",
  "board.tile.resultLost": "Çekilişi kaybetti · kartlarda {amount}",
  // MONEY IS SACRED split (2026-07-24): the settled tile's outcome word and
  // its dollar amount now render as two separate, independently-shrinkable
  // spans, so a wide figure never clips mid-digit. These are the WORD-ONLY
  // variants plus the SHORT fallback words the label swaps to when even the
  // plain word would overflow its lane.
  "board.tile.resultOpenedWord": "Açıldı",
  "board.tile.resultWinnerWord": "KAZANAN",
  "board.tile.resultLostWord": "Çekilişi kaybetti",
  "board.tile.resultShortWon": "KAZANDI",
  "board.tile.resultShortLost": "Kaybetti",
  "board.tile.overBalance": "Bakiye üstü",
  "board.tile.overBalanceTitle": "{needed} gerekiyor · elinizde {have} var. Bahsi düşürün veya bakiye yatırın.",
  "board.tile.overCap": "{amount} tavanınızın üzerinde (ayarlar)",
  "board.tile.needHave": "{needed} gerekiyor · elinizde {have} var",
  "board.tile.clueExactCardOdds": "tam olarak bu kart · %{pct} çekiliş",

  // --- RoyaleStakeControl --------------------------------------------------
  "board.stakeControl.betSizeLabel": "Bahis miktarı",
  "board.stakeControl.packMatchTitle": "Her kare tıklaması bütün bir {packName} pack'i bahis eder.",
  "board.stakeControl.packMatchTag": "tıklama başına 1 {packName} pack bahsi",
  // PACK COUNT stepper (owner ask 2026-07-24: bid several packs of the armed
  // tier per click) - the count-aware siblings of packMatchTitle/
  // packMatchTag/packChipTitle above, used once `packCount` can be > 1.
  // Turkish nouns do not inflect for plural after a numeral, so the .one and
  // .other forms below are identical text - that is correct Turkish, not a
  // missed translation.
  "board.stakeControl.packMatchTitleOne": "Her kare tıklaması {n} bütün {packName} pack'i bahis eder.",
  "board.stakeControl.packMatchTitleOther": "Her kare tıklaması {n} bütün {packName} pack'i bahis eder.",
  "board.stakeControl.packMatchTagOne": "tıklama başına {n} {packName} pack bahsi",
  "board.stakeControl.packMatchTagOther": "tıklama başına {n} {packName} pack bahsi",
  "board.stakeControl.packAmountSentence": "tıklama başına {n} x {packAmount} {packName} paketi",
  "board.stakeControl.bidPackGroupAria": "Bir kareye bütün bir pack bahis et",
  "board.stakeControl.bidPackTag": "Pack bahis et",
  "board.stakeControl.bidPackInfoTitle":
    "Tek bir tıklama, mühürlü bütün bir pack'i bir kareye koyar. Pack o pack olarak kalır, asla daha büyük birine karışmaz.",
  // The pack-count-stepper redesign expanded the "?" tooltip with the odds
  // breakdown + hotkey callout - a genuinely new/longer string, so it gets
  // its own key rather than overwriting bidPackInfoTitle's shorter text.
  "board.stakeControl.bidPackInfoTitleDetailed":
    "Bir pack ve kaç tane seçin. Tek tıklama o yığının tamamını bir kareye bahis eder, büyük pack'ler daha büyük kartlar çeker. 1'den 8'e kadar sayı tuşları kareyi seçer.",
  "board.stakeControl.bidPackInfoAria": "Pack bahis etmek nedir?",
  "board.stakeControl.packSelectedTitle": "Seçildi. {amount} bahse geri dönmek için tekrar tıklayın.",
  "board.stakeControl.packChipTitle": "Her kare tıklaması bir {packName} pack bahis eder ({amount}).",
  // Count-aware siblings of packSelectedTitle/packChipTitle.
  "board.stakeControl.packSelectedCountOne": "Seçildi. Her kare tıklaması {n} {packName} pack bahis eder ({amount}).",
  "board.stakeControl.packSelectedCountOther": "Seçildi. Her kare tıklaması {n} {packName} pack bahis eder ({amount}).",
  "board.stakeControl.packChipTitleCountOne": "Her kare tıklaması {n} {packName} pack bahis eder ({amount}).",
  "board.stakeControl.packChipTitleCountOther": "Her kare tıklaması {n} {packName} pack bahis eder ({amount}).",
  "board.stakeControl.overBalanceHeading": "BAKİYE ÜSTÜ",
  "board.stakeControl.overBalanceBody": "{amount} nakdinizden fazlasını gerektiriyor.",
  "board.stakeControl.bidAmountTag": "Tutar bahis et",
  "board.stakeControl.bidAmountInfoTitle":
    "Bir kareye istediğiniz tutarda dolar ekleyin. Bozukluk, her pack fiyatını geçtikçe daha büyük pack'lere dönüşür.",
  "board.stakeControl.bidAmountInfoAria": "Tutar bahis etmek nedir?",
  // "Chip USDC" framing is banned project-wide (packs framing only) - this
  // group aria describes the +$5/+$25/... row without that phrase.
  "board.stakeControl.incrementsGroupAria": "Bir karenin bahsine ekle",
  // The current component's .royaleStakeIncrements group aria reads "Bid an
  // amount on a tile" rather than incrementsGroupAria's text above - kept as
  // its own key since the two group-arias now say different things.
  "board.stakeControl.bidAmountGroupAria": "Bir kareye tutar bahis et",
  // PACK COUNT stepper controls (owner ask 2026-07-24).
  "board.stakeControl.packCountGroupAria": "Tıklama başına bahis edilen pack",
  "board.stakeControl.packCountDecAria": "Tıklama başına daha az pack bahis et",
  "board.stakeControl.packCountIncAria": "Tıklama başına daha çok pack bahis et",
  "board.stakeControl.packCountValueTitleOne": "Tıklama başına seçili katmandan {n} pack",
  "board.stakeControl.packCountValueTitleOther": "Tıklama başına seçili katmandan {n} pack",
  "board.stakeControl.incrementTitle": "Seçili bahsi {amount} tutarına yükselt",
  "board.stakeControl.customAriaLabel": "USDC cinsinden özel bahis tutarı, Enter'a basınca veya başka yere tıklayınca uygulanır",
  "board.stakeControl.customOverBalanceTitle": "{amount} nakdinizin üzerinde. Bakiye yatırın veya bahsi düşürün.",
  "board.stakeControl.customTitle": "İstediğiniz tutarı yazın, Enter veya başka yere tıklamak uygular",
  "board.stakeControl.resetTitle": "Seçili bahsi {amount} tutarına sıfırla",
  "board.stakeControl.reset": "Sıfırla",

  // --- RoyaleBetRail: auto-bet strategy cluster ---------------------------
  "board.betRail.strategyGroupAria": "Otomatik bahis stratejisi, tur kapanışında kurulur",
  "board.betRail.strategyArmedTip": "Kurulu, {seconds} sn içinde tetiklenir",
  "board.betRail.strategyAriaArmed": "{name}, kurulu, {seconds} saniye içinde tetiklenir",
  "board.betRail.strategyAriaArmedClickDisarm": "{name}, kurulu, {seconds} saniye içinde tetiklenir. Kaldırmak için tıklayın.",
  "board.betRail.strategyAriaClickArm": "{name}. Kurmak için tıklayın.",
  "board.betRail.moreStrategiesAria": "Daha fazla otomatik bahis stratejisi",
  "board.betRail.moreStrategiesTitle": "Daha fazla strateji",
  "board.betRail.cancelArmedAria": "Kurulu otomatik bahsi iptal et",
  "board.betRail.autoBetCancelled": "Otomatik bahis iptal edildi.",
  "board.betRail.roundLockedSkip": "Otomatik bahis tetiklenemeden tur kilitlendi.",
  "board.betRail.notEnoughBalanceSkip": "Yeterli bakiye yok, otomatik bahis tetiklenmedi.",
  "board.betRail.firedAtClose": "{name} tur kapanışında tetiklendi.",
  "board.betRail.firedAtClosePartial": "{name} tur kapanışında tetiklendi: {total} karenin {covered} tanesi.",
  "board.betRail.strategyGuideAria": "Otomatik bahis strateji kılavuzu",
  "board.betRail.strategyGuideTitle": "Strateji kılavuzu",
  "board.betRail.autoBetEyebrow": "Otomatik bahis",
  "board.betRail.firesInSeconds": "{seconds} sn içinde tetiklenir",
  "board.betRail.strategiesDialogAria": "Otomatik bahis stratejileri",
  "board.betRail.closeStrategiesAria": "Otomatik bahis stratejilerini kapat",
  "board.betRail.strategiesHeading": "Otomatik bahis stratejileri",
  "board.betRail.strategiesIntro":
    "Seçili bahsinizle ({amount}) kurmak için birine dokunun. Tur kilitlenmeden hemen önce, o anda her karede ne kadar para olduğuna göre sıralanarak tetiklenir, kalabalığın sinyaline göre.",
  "board.betRail.contrarianHeading": "Ters yönlü seçimler",
  "board.betRail.contrarianIntro":
    "Herkes en düşük kareyi kovaladığında orası kalabalıklaşır, bu yüzden ikinci en düşük daha iyi ödeyebilir. Bunlar ana çubuğu sade tutmak için ayrı durur.",

  // --- RoyaleBetRail: account money model ----------------------------------
  "board.betRail.railAria": "Hesabınız ve bahis miktarınız",
  "board.betRail.balance": "Bakiye",
  "board.betRail.activeStakes": "Aktif bahisler",
  "board.betRail.collection": "Koleksiyon",
  "board.betRail.cardCountViewAllSingular": "{count} KART · HEPSİNİ GÖR",
  "board.betRail.cardCountViewAllPlural": "{count} KART · HEPSİNİ GÖR",
  "board.betRail.moreCount": "+{count} DAHA",
  "board.betRail.noCardsYet": "Koleksiyonda henüz kart yok, bir kare kazanın ve kartını saklayın.",
  "board.betRail.lastResult": "Son sonuç",
  "board.betRail.eachClickAdds": "Her tıklama {amount} ekler",
  "board.betRail.depositToPlay": "Oynamak için bakiye yatırın",
  // AFFORDABILITY GATE (owner 2026-07-22) + COUNT-AWARE copy (owner ask
  // 2026-07-24): the auto-bet strategy row's tooltip when the globally
  // selected stake can't be covered, or when "all tiles" can only afford
  // some of the 8.
  "board.betRail.affordShortfall": "{unit} gerekiyor, elinizde {balance} var",
  "board.betRail.allTilesPartialCover": "{name} - {unit} ile 8 karenin {covered} tanesini kapsar",
  // LANDSCAPE-DOCK account readout (audit 2026-07): compact "Bal"/"Stakes"
  // abbreviations for the landscape-strip dock stats.
  "board.betRail.dockBalance": "Bky",
  "board.betRail.dockStakes": "Bahis",

  // --- RoyaleRoundCore ------------------------------------------------------
  "board.core.nextRoundAria": "{seconds} saniye sonra sıradaki tur",
  "board.core.nextRoundLine": "Sıradaki tur {secs} sonra",
  "board.core.playersDecidingAria": "{total} diğer oyuncunun {decided} tanesi karar verdi",
  "board.core.playersDecidingLine": "Karar veren oyuncular {ratio}",
  "board.core.pastRoundResultsAria": "Geçmiş tur sonuçları",
  "board.core.pastRounds": "Geçmiş turlar",
  "board.core.winsAmount": "{label} {amount} kazanıyor",
  "board.core.youLost": "Kaybettiniz!",
  "board.core.didNotStake": "Bu tura bahis yapmadınız",
  "board.core.keepCard": "Kartı sakla ({amount})",
  "board.core.sellAmount": "{amount} sat",
  "board.core.decideHint": "Şimdi veya sıradaki tur sırasında karar verin",
  "board.core.roundResultLink": "Tur #{roundId} sonucu",
  "board.core.fullReceiptHint": "Tam makbuz → Tur sonuçları",
  "board.core.splitReceiptHint": "Paylaşım · makbuz → Tur sonuçları",
  "board.core.eyebrowDrawing": "Kazanan çekiliyor",
  "board.core.eyebrowPullsIn": "Çekilişler tamam",
  "board.core.eyebrowLocked": "Kilitli",
  "board.core.headlineDrawing": "Tek bir bilet karar veriyor",
  "board.core.headlinePullsIn": "Her pack açık",
  "board.core.headlineRoundLocked": "Tur kilitlendi",
  "board.core.headlinePacksOpening": "Pack'ler açılıyor…",
  "board.core.subDrawing": "kanıtlanabilir ağırlıklı çekiliş",
  "board.core.subPullsIn": "sırada kazanan çekilişi var",
  "board.core.subIntro": "ortada {count} {noun}",
  "board.core.subOpening": "tahtada {count} {noun} açılıyor",
  "board.core.pool": "Havuz",
  "board.core.totalPool": "Toplam havuz",

  // --- RoyaleClock.tsx: the [BOARD-FPS #1] round-phase timer leaf ----------
  // Neither reconciliation source tree ever wired this file - added directly
  // during live QA of this i18n pass because it renders the board's most
  // prominent phase label. See RoyaleClock.tsx's own comment for why this
  // leaf's re-render isolation is performance-critical: only a bare
  // useRoyaleLocale() subscription was added, no memo/effect restructuring.
  "board.core.clockRoundOpen": "Tur açık",
  "board.core.clockLockedRevealing": "Kilitli · açılıyor",
  "board.core.clockSettled": "Sonuçlandı",
  "board.core.clockAriaLabel": "{label}, {seconds} saniye",

  // --- RoyaleSettlementPanel: disposition copy -----------------------------
  "board.settlement.dispositionNoGrail": "Standart dereceli kart, en büyük destekçi onu saklar ya da orantılı olarak geri satar.",
  "board.settlement.dispositionSellBackSplit": "Grail kuralı: varsayılan olarak geri satılır, USDC kare genelinde paylaştırılır.",
  "board.settlement.dispositionTopBackerKeeps": "Grail kuralı: en büyük destekçi onu saklar ve diğerlerine paylarını öder.",

  // --- RoyaleSettlementPanel: chrome ---------------------------------------
  "board.settlement.decisionClock": "karar için {seconds} sn",
  "board.settlement.panelAria": "Kare ayrıntıları ve sonuçlanma",
  "board.settlement.collapsePanelAria": "Paneli daralt",
  "board.settlement.expandPanelAria": "Paneli genişlet",
  "board.settlement.roundResultsLink": "Tur sonuçları",

  // --- RoyaleSettlementPanel: inspector (round open) -----------------------
  "board.settlement.roundPanelEyebrow": "Tur paneli",
  "board.settlement.clickTileToBack": "Kazançlar buraya düşer. Herhangi bir kareyi {amount} ile desteklemek için tıklayın.",
  "board.settlement.lastResultLine": "Son sonuç · Tur #{roundId}, {outcome}",
  "board.settlement.youWonOutcome": "{amount} kazandınız",
  "board.settlement.view": "gör",

  // --- RoyaleSettlementPanel: loser detail ----------------------------------
  "board.settlement.losingTileEyebrow": "Kaybeden kare · neden kaybetti",
  "board.settlement.losingTileTitle": "{label} · karede {amount}",
  "board.settlement.loserWhy":
    "{cardName} ({amount}) açıldı, çekiliş {winnerLabel} üzerine düştü. Biletlerin %{pct}'i hiçbir şey ödemedi{suffix}",
  "board.settlement.loserWhySuffixWithStake": ", {amount} bahsiniz dahil.",
  "board.settlement.loserWhySuffixNone": ".",
  "board.settlement.emptyTileNote": "Bu kare boştu, ne bahis ne de çekiliş bileti vardı.",
  "board.settlement.backToSettlement": "Sonuçlanmaya dön · {winnerLabel} kazandı",

  // --- RoyaleSettlementPanel: openedPulls() card-carousel captions ---------
  "board.settlement.pullCaptionMulti": "{label} · kart {index}/{total} · karede {amount}",
  "board.settlement.pullCaptionSingle": "{label} · karede {amount}",

  // --- RoyaleSettlementPanel: reveal (lock, pre-winner) ---------------------
  "board.settlement.packsOpeningEyebrow": "Pack'ler açılıyor",
  "board.settlement.revealOpenedTitle": "{label}, {cardName} açtı",
  "board.settlement.revealOddsLine": "{amount} · {poolAmount} havuzunu alma şansı %{pct}. Kazanan şu an çekiliyor.",
  "board.settlement.revealEmpty": "Pack'ler tahtada açılıyor, kazanan çekilişi az sonra düşecek.",

  // --- RoyaleSettlementPanel: settlement body -------------------------------
  "board.settlement.eyebrowLastResult": "Son sonuç · Tur #{roundId}",
  "board.settlement.tileTakesTable": "{label}, masayı {amount} karşılığında alıyor",
  "board.settlement.whyWon": "Kanıtlanabilir ağırlıklı biletle çekildi, {label} kilit anında havuzun %{pct}'ini tutuyordu.",
  "board.settlement.lostNoStakeIn": "Kaybettiniz, {label} karesinde bahsiniz yoktu",
  "board.settlement.theWinnerFallback": "kazanan",
  "board.settlement.wonNoStake": "{label} kazandı · bahsiniz yoktu",
  "board.settlement.aTileFallback": "Bir kare",
  "board.settlement.lossNoteWithStake": "{amount} bahsiniz diğer karelerdeydi, hikayesini görmek için birinin üzerine gelin.",
  "board.settlement.lossNoteNone": "Bu tur bir kareyi desteklemediniz.",
  "board.settlement.topCardOfRound": "Turun en iyi kartı · {label}",
  "board.settlement.keepCardTo": "Kartı sakla ({amount}) → koleksiyon",
  "board.settlement.sellBackFor": "{amount} karşılığında geri sat",
  "board.settlement.continueNextRound": "Sıradaki tura devam et",
  "board.settlement.continue": "Devam et",
  "board.settlement.keepSellHint":
    "Sakla = kart koleksiyona · sat = şimdi {amount} (kart değerinin %{pct}'i, bu pack'in CC geri alımı) · {noAction}",
  "board.settlement.noActionKept": "işlem yapılmazsa = kart sizin için saklanır.",
  "board.settlement.noActionAutoSell": "işlem yapılmazsa = sıradaki tur bitince otomatik satılır.",
  "board.settlement.revealOnlyNote":
    "Bu deneme sürümünde kaybeden kareler yalnızca gösterim amaçlıdır, çekilişleri kasaya döner. Yalnızca kazanan karenin kartı ödeme yapar.",
  "board.settlement.payoutSplit": "Ödeme paylaşımı",
  "board.settlement.poolChaseFeedLine": "Havuz {pool} · Kovalamaca beslemesi {feed}",
  "board.settlement.chaseAddSuffix": " · KOVALAMACA +{amount}",
  "board.settlement.physicalCardArrow": "Fiziksel kart →",
  "board.settlement.grailSecuredSuffix": " (grail güvence altında)",
  "board.settlement.grailSoldBack": "Grail geri satıldı ({amount}) → yukarıdaki USDC paylaşımına.",
  "board.settlement.cardAssignmentHead": "Kart ataması",
  "board.settlement.cardLabel": "{amount} kart",
  "board.settlement.soldToVault": "kasaya satıldı · gelir paylaşımda",
  "board.settlement.decisionTopBackerSuffix": " (en büyük destekçi · sakla veya sat)",
  "board.settlement.offTheirUsdcSuffix": " · USDC'sinden {amount} düşer",
  "board.settlement.cardsSpreadNote":
    "Kartlar mümkün olduğunca çok destekçiye dağıtılır, atanan bir kart o destekçinin USDC'sinden CC geri alım fiyatı kadar (pack'e göre %85-93) düşer (satmakla aynı nakit değeri, yükseliş potansiyeli onlarda kalır). Yalnızca üstlenilemeyen kartlar kasaya satılır.",
  "board.settlement.chaseHitLabel": "Kovalamaca TUTTU!",
  "board.settlement.chasePaidLine": "Bu paylaşıma {amount} ödendi.",
  "board.settlement.chaseMissLabel": "KOVALAMACA DÜŞMEDİ.",
  "board.settlement.chaseNowLine": "Kovalamaca şimdi {amount}.",

  // --- RoyaleSettlementPanel: VRF disclosure --------------------------------
  "board.settlement.verifyDrawSummary": "Çekilişi doğrula",
  "board.settlement.verifyDrawSub": "kanıtlanabilir çekiliş · çekiliş makbuzunu gör",
  "board.settlement.roundIdLabel": "tur kimliği",
  "board.settlement.winningDrawLabel": "kazanan çekiliş",
  "board.settlement.drawSeedLabel": "çekiliş tohumu",
  "board.settlement.proofIdLabel": "kanıt kimliği",
  "board.settlement.ticketOfCount": "{count} biletten #{index}",
  "board.settlement.verifying": "Doğrulanıyor…",
  "board.settlement.recheckDraw": "Çekilişi yeniden denetle",
  "board.settlement.verifierLink": "Doğrulayıcı ↗",
  "board.settlement.verifiedOk": "✓ Çekiliş doğrulandı, bu kazanan yayımlanan çekiliş tohumune göre yeniden denetleniyor.",
  "board.settlement.verifiedBad": "✗ Bu çekiliş kendi tohumuna göre doğrulanamadı, güvenmeyin.",
  "board.settlement.everyRoundNote": "Her tur, yeniden denetleyebileceğiniz yayımlanmış bir tohumdan tek bir kazanan çeker.",
  "board.settlement.noPacksNote": "Bu tur hiçbir pack desteklenmedi, çekilecek bir şey yok.",
  "board.settlement.settledHoverHint": "Sonuçlandı, incelemek için bir karenin üzerine gelin.",

  // --- RoyaleBetTooBigPopover ------------------------------------------------
  "board.betTooBig.title": "Bahis bakiyeniz için çok büyük",
  "board.betTooBig.dismissAria": "Kapat",
  "board.betTooBig.gotIt": "Anladım",
  "board.betTooBig.body": "{slotLabel} karesini desteklemek {needed} gerektiriyor, elinizde {held} var. {shortfall} eksiğiniz var.",
  "board.betTooBig.deposit": "{amount}+ yatır",

  // --- RoyaleWagerLadder: right-rail "Players" header -----------------------
  "board.wagerLadder.ariaLabel": "Toplam bahse göre sıralanmış oyuncular",
  "board.wagerLadder.title": "Oyuncular",
  "board.wagerLadder.countZero": "Henüz bahis yok",
  "board.wagerLadder.countOther": "turda {n} kişi · toplam bahse göre",

  // --- RoyaleWagerLadder.tsx (rows, mini-grid popover, last-round tab) ------
  // The header keys above shipped in the first board pass; these are the rest
  // of the surface (collapse control, the "See last round results" tab, the
  // empty state, and the hover mini-grid's own head).
  "board.wagerLadder.collapseAria": "Oyuncular panelini daralt",
  "board.wagerLadder.lastRoundAria": "Son tur sonuçlarını gör, tur #{n}",
  "board.wagerLadder.lastRoundLabel": "Son tur sonuçlarını gör",
  "board.wagerLadder.empty": "Bu tur henüz kimse bir kareyi desteklemedi.",
  "board.wagerLadder.leaderAria": "Lider",
  "board.wagerLadder.openProfileTitle": "{name} profilini yeni sekmede aç",
  "board.wagerLadder.miniGridTotal": "toplam {amount}",
  // The mini-grid's cell-group aria names WHOSE tiles are lit. Two keys, not
  // a {name} token plus board.common.you, since the third-party sentence
  // avoids a possessive suffix directly on the variable name.
  "board.wagerLadder.miniGridTilesAria": "{name} tarafından desteklenen kareler",
  "board.wagerLadder.miniGridTilesAriaYou": "Sizin desteklediğiniz kareler",

  // --- RoyaleBidFundConfirm.tsx: the out-of-USDC sell-to-fund dialog --------
  // The ON/OFF state words on the auto-sell switch deliberately reuse the
  // shared common.on / common.off pair (core.ts) rather than minting a third
  // spelling of the same two words.
  "board.bidFund.dialogAria": "Bu bahsi finanse etmek için envanteri sat",
  "board.bidFund.eyebrow": "USDC YETERSİZ",
  "board.bidFund.titleOne": "Bu bahsi karşılamak için kartınızı satalım mı?",
  "board.bidFund.titleMany": "Bu bahsi karşılamak için bu kartları satalım mı?",
  // {cards} is either the comma-joined card names or bodyCardsMany below;
  // {buyback} and {amount} each render inside their own <b> at the call site,
  // so the emphasis survives any word order a locale prefers.
  "board.bidFund.body": "{cards} satmak {buyback} kazandırır, {tile} karesine {amount} desteklemeye yeter.",
  "board.bidFund.bodyCardsMany": "bu kartlar",
  "board.bidFund.note":
    "{amount} eksiğiniz var. Kartlar, pack'lerinin CC geri alım oranından satılır (%85 ile %93 arası). Bu geri alınamaz.",
  "board.bidFund.keepCards": "Kartları sakla",
  "board.bidFund.sellAndBid": "Sat ve {amount} bahis et",
  "board.bidFund.autoSellSwitch": "Kazançlarımı otomatik olarak USDC'ye çevir",
  "board.bidFund.autoSellNoteOn":
    "Her kazanç, geldiği anda geri alım oranından nakde çevrilir. Sakla veya sat sorusu çıkmaz. Grail'ler asla otomatik satılmaz. Ayarlar'dan istediğiniz zaman değiştirin.",
  "board.bidFund.autoSellNoteOff":
    "Bunu açın, kazandığınız her kart soru sorulmadan geri alım oranından USDC'ye çevrilsin. Grail'ler asla otomatik satılmaz. Ayarlar'dan istediğiniz zaman değiştirin.",

  // --- RoyaleHotkeyOptIn.tsx: first-press keyboard-betting opt-in ----------
  // NOT gear.hotkeys.* (core.ts): that namespace owns the SETTINGS rows where
  // a player rebinds keys. This is the board's own first-press dialog, a
  // different surface with different copy, so it keeps its own namespace.
  "board.hotkeys.optInTitle": "Sayı tuşlarıyla bahis yapılsın mı?",
  "board.hotkeys.optInBody":
    "Bir tuşa basmak o kareyi anında mevcut bahsinizle destekler. Az önce hiçbir bahis yerleştirilmedi.",
  "board.hotkeys.notNow": "Şimdi değil",
  "board.hotkeys.enableKeys": "Tuşları etkinleştir",
  "board.hotkeys.turnOff": "Kapat",
  "board.hotkeys.turnOffTitle": "Ayarlar'dan yeniden etkinleştirene kadar tuşlar kapalı kalır.",
  "board.hotkeys.changeKeys": "Tuşları değiştir",

  // --- RoyaleBoard.tsx: the LEGACY v1 board (?boardv1=1) -------------------
  // A separate namespace from board.tile.* (which owns RoyaleBoardV2, the
  // live board): the two surfaces word the same beats differently and must be
  // free to diverge. Where the wording is byte-identical the v1 board reuses
  // the v2 key instead - only genuinely v1-only copy lives here.
  "board.boardV1.openTile": "Açık kare",
  "board.boardV1.onTile": "karede",
  "board.boardV1.changeAmount": "bozukluk {amount}",
  "board.boardV1.oddsSuffix": "%{pct} şans",
  "board.boardV1.openedOdds": "Açıldı · %{pct} şans",
  "board.boardV1.emptyNeverInDraw": "Boş · hiç çekilişte değildi",
  "board.boardV1.winnerYourShare": "KAZANAN · payınız ödeniyor",
  "board.boardV1.winnerNoStake": "KAZANAN · bahsiniz yoktu",
  "board.boardV1.lostOdds": "Çekilişi kaybetti · %{pct} şans",
  "board.boardV1.tileClickTitle": "{label} karesini {amount} ile desteklemek için herhangi bir yere tıklayın",
  "board.boardV1.youAmount": "Siz {amount}",
  "board.boardV1.youNone": "Siz -",
  "board.boardV1.pctOfTile": "karenin %{pct}'i",
  "board.boardV1.noStakeYet": "henüz bahis yok",
  "board.boardV1.grailPrefix": "GRAIL · ",
  "board.boardV1.topPrefix": "EN BÜYÜK · ",
  "board.boardV1.backerPopStake": "{amount} bahis edildi · karenin %{pct}'i",
  "board.boardV1.statusWaitingDraw": "Çekiliş bekleniyor…",
  "board.boardV1.statusWonSplit": "Paylaşımdan {amount} kazandı",
  "board.boardV1.statusOnWinningTile": "Kazanan karede",
  "board.boardV1.statusNoPayout": "Bu tur ödeme yok",
  "board.boardV1.statusYourStake": "Canlı bahsiniz",
  "board.boardV1.statusBacking": "Bu kareyi destekliyor",
  "board.boardV1.backerCount.one": "{n} destekçi",
  "board.boardV1.backerCount.other": "{n} destekçi",
  "board.boardV1.noBackersYet": "Henüz destekçi yok",
  // {amount} renders inside its own <b> at the call site (the component splits
  // on the token), so the figure keeps its weight in any word order.
  "board.boardV1.backAmount": "{amount} destekle",
  "board.boardV1.backBtnTitle": "{label} karesini {amount} USDC ile destekle",
  "board.boardV1.evolveTitle": "{label} karesine tam olarak {amount} daha destek ekler",
  "board.boardV1.hoverTitle": "{label} · karede {amount}",
  "board.boardV1.opensAs": "Şu şekilde açılır · {summary}",
  "board.boardV1.noPacksYet": "Henüz pack yok, ilk pack'i finanse etmek için destekleyin",
  "board.boardV1.whyOpenedDrawing":
    "{cardName} ({amount}) %{pct} şansla açıldı, kazanan şu an çekiliyor.",
  "board.boardV1.whyWon":
    "%{pct} şansla ağırlıklı çekilişi kazandı. {cardName} ({amount}) açıldı; havuz destekçileri arasında orantılı paylaştırıldı.",
  "board.boardV1.whyLost":
    "Ağırlıklı çekilişi kaybetti, %{pct} şans ({poolAmount} havuzunun {amount}'i). Yine de {cardName} ({cardAmount}) açtı, ama yalnızca kazanan kare öder.",
  "board.boardV1.whyEmpty": "Boş kare, ne bahis ne de çekiliş bileti.",
  // Both suffixes are appended to a whyX sentence above, hence the leading
  // space (same convention as board.tile.youOwnShareSuffix).
  "board.boardV1.whyYourStakeSuffix": " Buradaki bahsiniz: {amount}.",
  "board.boardV1.whyNoStakeSuffix": " Burada bahsiniz yoktu.",
  "board.boardV1.ifWins": "Bu kare kazanırsa: {poolAmount} havuzundan ~{amount} alırsınız.",
  "board.boardV1.clickToBack": "Seçili bahisle desteklemek ve kilitte ilk pack'ini açmak için tıklayın.",

  // --- RoyaleLeaderboard.tsx: Top Betters standings ------------------------
  // The section chrome (title, timeframe tabs, empty states) already lives in
  // pages.ladder.leaderboard.* - these are the row/podium/hover-popover
  // internals that pass never reached.
  "board.leaderboard.rowAria": "Sıra {rank}, {name}, bahis {wagered}, net {net}, kazanma oranı yüzde {pct}",
  "board.leaderboard.youTag": "SİZ",
  "board.leaderboard.youRankTag": "SİZ · #{n}",
  "board.leaderboard.statWagered": "BAHİS",
  "board.leaderboard.statNetPl": "NET K/Z",
  "board.leaderboard.statWinRate": "KAZANMA ORANI",
  "board.leaderboard.statRounds": "TURLAR",
  "board.leaderboard.statPoolShare": "HAVUZ PAYI",
  "board.leaderboard.statFirstSeen": "İLK GÖRÜLME",
  "board.leaderboard.statBiggestPull": "EN BÜYÜK ÇEKİLİŞ",
  "board.leaderboard.shareOfToday": "bugünün bahislerinin",
  "board.leaderboard.shareOfAllTime": "tüm zamanların bahislerinin",
  "board.leaderboard.noneYet": "HENÜZ YOK",
  "board.leaderboard.viewFullProfile": "Tam profili gör",
  "board.leaderboard.live": "CANLI",
  "board.leaderboard.fullRankings": "Tam sıralama",
  // The count line renders each number inside its own <b>: the component
  // splits these templates on {n}, so a locale may put the figure anywhere.
  "board.leaderboard.playerCount.one": "{n} oyuncu",
  "board.leaderboard.playerCount.other": "{n} oyuncu",
  "board.leaderboard.roundCount.one": "{n} tur",
  "board.leaderboard.roundCount.other": "{n} tur",
  "board.leaderboard.colPlayer": "Oyuncu",
  "board.leaderboard.colWagered": "Bahis",
  "board.leaderboard.colNet": "Net K/Z",
  "board.leaderboard.colWin": "Kazanma",
  "board.leaderboard.colBiggestPull": "En büyük çekiliş",
  "board.leaderboard.sortGroupAria": "Sıralamayı sırala",
  "board.leaderboard.sortBy": "{col} ölçütüne göre sırala",
  "board.leaderboard.podiumNet": "net {amount}",
  "board.leaderboard.podiumTopPull": "En iyi çekiliş",
  "board.leaderboard.fullStandings": "Tam sıralama · {n} bahisçi",

  // --- RoyaleBetRail.tsx: the affordability copy's pack-count unit ---------
  // Feeds the {unit} token of board.betRail.affordShortfall /
  // allTilesPartialCover above, so a bare dollar figure never stands in for
  // "3 Starter packs" once the pack-count stepper is past 1.
  "board.betRail.stakeUnitPackOne": "{n} {packName} pack ({amount})",
  "board.betRail.stakeUnitPackOther": "{n} {packName} pack ({amount})",

  // --- RoyaleConnectXControl.tsx: the connected-identity chrome ------------
  // The button label itself is misc.connectX.button; these two are the
  // connected state's portrait alt text and handle tooltip.
  "board.connectX.avatarAlt": "{handle} kişisinin X profil fotoğrafı",
  "board.connectX.connectedTitle": "X üzerinden bağlandı · {handle}",

  // --- RoyalePackCompositionChips.tsx: pill-row titles + the "+N" fold -----
  // Shared by the board tile caption and the reveal cinema caption (one
  // implementation, see that file's header), so these keys are deliberately
  // surface-neutral.
  "board.packChips.slotEmptyTitle": "{packName} yuvası (bu karede yok)",
  "board.packChips.fixedChipTitle": "her biri {amount} olan {n} x {packName}",
  "board.packChips.fixedChipTitleTotalSuffix": " - toplam {amount}",
  "board.packChips.usdcChange": "usdc {amount}",
  "board.packChips.pooledAll": "Karenin ortak parasıyla oluştu - bu pack'e kimse doğrudan bahis yapmadı",
  "board.packChips.pooledSome": "{total} pack'in {n} tanesi karenin ortak parasıyla oluştu",
  "board.packChips.bidWhole": "Bütün bir pack olarak bahis edildi",
  // {list} is a comma-joined run of these two, one per folded tier.
  "board.packChips.foldedUnitWithCount": "x{n} {packName} {amount}",
  "board.packChips.foldedUnit": "{packName} {amount}",
  "board.packChips.alsoOnTile": "Bu karede ayrıca: {list}",
  "board.packChips.morePacks.one": "{n} pack daha",
  "board.packChips.morePacks.other": "{n} pack daha",
  "board.packChips.morePacksWithList.one": "{n} pack daha: {list}",
  "board.packChips.morePacksWithList.other": "{n} pack daha: {list}",

  // --- POOL-VS-BID SPLIT + LOOSE-BASED EVOLVE HINTS (RoyaleBoardV2 tile) ----
  // A tile composes packs from TWO sources: direct whole-pack bids (frozen as
  // that pack by the no-fuse rule) and the tile's POOLED loose money (the only
  // money that evolves). These name the split on the money row / composition
  // row, and the evolve CTA's tooltip now says which money is climbing.
  // Pack TIER NAMES ({tier}) stay English brand terms in every locale.
  "board.tile.splitBidsPool": "Bahisler {bids} · havuz {pool}",
  "board.tile.splitAllBids": "{bids} tamamı bütün pack olarak bahis edildi",
  "board.tile.splitAllPool": "{pool} tamamı karenin ortak bozukluğu",
  "board.tile.splitPoolNote": "Kesikli çizgili pack'ler havuzdan oluştu, kimse onlara bahis yapmadı.",
  "board.tile.evolveLooseTitle": "Bu karedeki {loose} bozukluk, {target} tutarında {tier} pack'ine dönüşüyor",
  "board.tile.evolveNoLooseTitle":
    "Bu karede henüz bozukluk yok. Bozukluk, {target} tutarında {tier} pack'ine dönüşür",

  // --- AUTO-BET ALL-TILES BALANCE GUARD ------------------------------------
  // Arming "All" can ask for stake x tileCount. The guard degrades honestly
  // (whole stakes only, the prefix of the strategy's own priority order) and
  // the rail SAYS what it will do before it fires; the engine repeats the
  // outcome in the round log. {total} is the real board size, never a baked 8.
  "board.betRail.allTilesPartialCoverOf": "{name} - {unit} ile {total} karenin {covered} tanesini kapsar",
  "board.betRail.allTilesPlanFull": "Tur kapanışında {unit} ile {total} karenin tamamını destekler. Toplam {spend}.",
  "board.betRail.allTilesPlanShort.one":
    "Tur kapanışında {unit} ile {total} karenin {covered} tanesini destekler. {balance} bakiyeniz {spend} karşılar.",
  "board.betRail.allTilesPlanShort.other":
    "Tur kapanışında {unit} ile {total} karenin {covered} tanesini destekler. {balance} bakiyeniz {spend} karşılar.",
  "board.betRail.allTilesPlanNone": "{balance} bakiyeniz tek bir {unit} bahsini bile karşılamıyor, bu yüzden hiçbir kare desteklenmeyecek.",
  "board.betRail.allTilesShortHistory.one":
    "Tüm kareleri otomatik bahis, {unit} ile {tiles} kare için {needed} gerektiriyordu. Elinizde {balance} vardı, bu yüzden {covered} kareyi destekledi.",
  "board.betRail.allTilesShortHistory.other":
    "Tüm kareleri otomatik bahis, {unit} ile {tiles} kare için {needed} gerektiriyordu. Elinizde {balance} vardı, bu yüzden {covered} kareyi destekledi.",
  "board.betRail.allTilesNoneHistory":
    "Tüm kareleri otomatik bahis, {unit} ile {tiles} kare için {needed} gerektiriyordu. Elinizde {balance} vardı, bu yüzden hiçbir kare desteklenmedi.",

  // --- ALL-TILES PLAN SLIP (owner 2026-08-15: "make that window more
  // readable") -------------------------------------------------------------
  // The keys above stay the full sentence for assistive tech and the armed
  // chip's title. These five are what the plate SHOWS: fields, not prose.
  // Keep them FRAGMENTS — the slip gives each one its own line inside a ~286px
  // rail, and a translator who expands one back into a clause re-creates the
  // wrap the slip exists to remove. `×` is U+00D7, the multiplication sign.
  "board.betRail.planWhen": "Tur kapanışında",
  "board.betRail.planTotal": "Toplam",
  "board.betRail.planMathFull": "{total} kare × {amount}",
  "board.betRail.planMathShort": "{total} kareden {covered} × {amount}",
  "board.betRail.planPerTile": "kare başına {unit}",

  // --- royaleAutoBetRules.ts (auto-bet strategy copy) -----------------------
  // Extracted from QUICK_BET_STRATEGY_META, which used to hold these sentences
  // inline as a module-level const: built once at import, so the auto-bet rail
  // stayed English in all locales. The map now reads each of these through a
  // t() getter at property access. Six keys x five strategies; `glyph` is a
  // symbol, not copy.
  //   .label     the narrow rail chip caption (HARD width budget: it sits
  //              three-across in a ~250px rail)
  //   .name      hover tooltip + aria-label, also substituted into the {name}
  //              token of board.betRail.strategyAria* / firedAtClose
  //   .detail    the ⓘ popover's longer explanation
  //   .rowTitle  short tile name, bolded half of the desktop row
  //   .closeLine rendered after rowTitle as "rowTitle, closeLine"
  //   .gridLine  compact plain-words line, must stay a few words
  // ARM framing everywhere: a click ARMS the strategy and it fires itself just
  // before the round locks, so the ranking always resolves "at round close",
  // never "now".
  "board.strategy.highest.label": "Üst",
  "board.strategy.highest.name": "Kur: tur kapanışında en yüksek kareyi destekle",
  "board.strategy.highest.detail":
    "Bahsinizi en çok parayı taşıyan kareye kurar, tur kapanmadan hemen önce sonuçlanır.",
  "board.strategy.highest.rowTitle": "En yüksek kare",
  "board.strategy.highest.closeLine": "tur kapanışında en büyük kareyi destekler",
  "board.strategy.highest.gridLine": "kapanışta en çok para",

  "board.strategy.lowest.label": "Alt",
  "board.strategy.lowest.name": "Kur: tur kapanışında en düşük kareyi destekle",
  "board.strategy.lowest.detail":
    "Bahsinizi en az kalabalık kareye kurar, tur kapanmadan hemen önce sonuçlanır. Herkes en düşük kareye yığılırsa, o zamana kadar en düşük olmaktan çıkar.",
  "board.strategy.lowest.rowTitle": "En düşük kare",
  "board.strategy.lowest.closeLine": "tur kapanışında en küçük kareyi destekler",
  "board.strategy.lowest.gridLine": "kapanışta en az para",

  "board.strategy.secondHighest.label": "2. üst",
  "board.strategy.secondHighest.name": "Kur: tur kapanışında ikinci en yüksek kareyi destekle",
  "board.strategy.secondHighest.detail":
    "Bahsinizi liderin bir basamak altına kurar, tur kapanmadan hemen önce sonuçlanır.",
  "board.strategy.secondHighest.rowTitle": "İkinci en yüksek kare",
  "board.strategy.secondHighest.closeLine": "tur kapanışında liderin hemen altındaki kareyi destekler",
  "board.strategy.secondHighest.gridLine": "liderin bir basamak altı",

  "board.strategy.secondLowest.label": "2. alt",
  "board.strategy.secondLowest.name": "Kur: tur kapanışında ikinci en düşük kareyi destekle",
  "board.strategy.secondLowest.detail":
    "Kalabalık teorisi seçimi: herkes en düşük kareyi kovaladığında orası kalabalıklaşır, bu yüzden ikinci en düşük daha iyi ödeyebilir. Şimdi kurulur, tur kapanmadan hemen önce sonuçlanır.",
  "board.strategy.secondLowest.rowTitle": "İkinci en düşük kare",
  "board.strategy.secondLowest.closeLine": "tur kapanışında kalabalık alt karenin bir üstünü destekler",
  "board.strategy.secondLowest.gridLine": "alt karenin bir basamak üstü",

  "board.strategy.allTiles.label": "Tümü",
  "board.strategy.allTiles.name": "Kur: tur kapanışında her kareyi destekle",
  "board.strategy.allTiles.detail":
    "Bahsinizi uygun her kareye kurar, tur kapanmadan hemen önce sonuçlanır. Toplam harcama = bahis miktarınız x o andaki kare sayısı.",
  "board.strategy.allTiles.rowTitle": "Tüm kareler",
  "board.strategy.allTiles.closeLine": "tur kapanışında bahsinizi dağıtır",
  "board.strategy.allTiles.gridLine": "her karede bahsiniz",
  "board.packStackCursor.stack": "{packName} ×{n}",
  // --- Bet input mode + no-default-pack (owner 2026-07-31) -----------------
  // gear.betInput/cardOpen keys live in this segment (not core.ts, where the
  // other gear.* keys sit) deliberately: core.ts was mid-flight in a
  // concurrent lane when these landed, and the parity gate only requires a
  // key to keep the SAME segment file across locales.
  "board.tile.confirmTapAgain": "Tekrar dokun: {unit}",
  "board.tile.confirmClickAgain": "Tekrar tıkla: {unit}",
  "board.tile.betOffNotice": "Bahis, ayarlarda kapalı",
  "board.stakeControl.pickPackHint": "Bahis için bir pack seçin",
  "board.stakeControl.emptyStakeLead": "Bir pack seçin",
  "board.stakeControl.emptyStakeHint": "Bahsiniz o olur",
  "gear.betInput.label": "Bahis yerleştirme",
  "gear.betInput.hint":
    "Bir kareye basmanın (ve sayı tuşunun) bahsinizi nasıl yerleştireceği. Çift dokunma önce bir onay dokunuşu ister, dokunmatik ekran varsayılanı budur. Kapalı, izleyici modudur: hiçbir şey bahis yerleştiremez.",
  "gear.betInput.optionSingle": "Tek dokunuş",
  "gear.betInput.optionDouble": "Çift dokunuş",
  "gear.betInput.optionOff": "Kapalı",
  "gear.cardOpen.label": "Kart açma",
  "gear.cardOpen.hint":
    "Çift dokunma, bir kart yüzü sayfasını açmadan önce onay dokunuşu ister, dokunmatik ekran varsayılanı budur.",
} as Record<string, string>;
