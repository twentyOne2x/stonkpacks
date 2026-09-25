// Turkish (Türkçe): "pages" segment. Covers the six standalone-route surfaces
// owned by this segment: RoyaleProfileRoute, RoyaleLadderRoute,
// RoyaleRoundResultsRoute, RoyaleCollectionRoute, RoyaleWinningsStrip,
// RoyaleSessionHistory, plus pages/RoyaleWithdrawPanel.tsx and
// RoyaleSellBackPanel.tsx. Same key set as en/pages.ts.
//
// Terminology: matches core/board/cinema's binding glossary ("tur" = round,
// "havuz" = the round's pot, "destekçi(ler)" = backers, "çekiliş" =
// pull/draw, "geri sat/geri satış" = sell back, "sakla/saklandı" =
// keep/kept). pages.ladder.*'s "pool" is a CollectorCrypt machine's card
// inventory (not the round's cash pot), so it renders as "rezerv"/"havuz"
// contextually as "havuz" too since Turkish naturally reuses "havuz" for any
// inventory pool - the surrounding words (pack, machine) keep the two
// concepts apart. "P&L" renders as "K/Z" (kâr/zarar), matching
// misc.nameStats.netPnl. Win/Loss form letters use the standard Turkish
// sports abbreviation "G" (Galibiyet) / "M" (Mağlubiyet), not literal W/L.
// The "R{n}" round abbreviation renders as "T{n}" (Tur) to stay consistent
// with "tur" everywhere else. Pack-tier brand names (Starter, Elite,
// Legendary, Grail, Mythic), USDC, X, Solana and CollectorCrypt stay in
// English. Digits and currency stay exactly as authored. Register is FORMAL
// throughout ("Siz").
export default {
  // ===== pages.common.* : reused across 2+ files in this segment ===========
  "pages.common.goToBoard": "TAHTAYA GİT",
  "pages.common.backToBoard": "← Tahtaya dön",
  "pages.common.replay": "TEKRAR İZLE",
  "pages.common.replayTitle": "Tur {n}'i ilk bahisten açılışa kadar tekrar izleyin",
  "pages.common.you": "Siz",
  "pages.common.cancel": "İptal",
  "pages.common.close": "×",
  "pages.common.withdrawToWallet": "Cüzdana çek",
  "pages.common.withdrawnToWallet": "Cüzdana çekildi",
  "pages.common.chase": "KOVALAMACA",
  "pages.common.roundNumber": "Tur #{n}",
  "pages.common.share": "Paylaş",
  "pages.common.noCardsKeptTitle": "HENÜZ SAKLANAN KART YOK",
  "pages.common.noCardsKeptBody": "Kazanan bir çekilişi geri satmak yerine saklayın, buraya dereceli bir kart olarak düşer.",

  // ===== pages.sessionHistory.* (RoyaleSessionHistory.tsx) ==================
  "pages.sessionHistory.log.ariaLabel": "Oturum geçmişi",
  "pages.sessionHistory.log.title": "Oturum geçmişi",
  "pages.sessionHistory.log.emptyHint": "Makbuzlarınız burada görünür",
  "pages.sessionHistory.log.hint": "Makbuzlarınız ve işlemleriniz",

  "pages.sessionHistory.ledger.ariaLabel": "Tur ve kare geçmişi",
  "pages.sessionHistory.ledger.title": "Tur ve kare geçmişi",
  "pages.sessionHistory.ledger.empty": "Geçmiş turlar burada görünür",
  "pages.sessionHistory.ledger.summaryOne": "{n} sonuçlanan tur · ayrıntı için bir satıra tıklayın",
  "pages.sessionHistory.ledger.summaryOther": "{n} sonuçlanan tur · ayrıntı için bir satıra tıklayın",
  "pages.sessionHistory.ledger.emptyBody":
    "Henüz tamamlanan tur yok, ilk açılış her kare, kazanan kare ve paylaşımla buraya düşer.",
  "pages.sessionHistory.ledger.showMore": "{n} DAHA GÖSTER · {hidden} DAHA ESKİ",

  "pages.sessionHistory.row.noWinner": "-",
  "pages.sessionHistory.row.wonSuffix": "{label} kazandı",
  "pages.sessionHistory.row.pull": "{name} · {amount}",
  "pages.sessionHistory.row.poolSuffix": "havuz {amount}",
  "pages.sessionHistory.row.noPull": "çekiliş yok",
  "pages.sessionHistory.row.youWon": "siz +{amount}",
  "pages.sessionHistory.row.noWin": "kazanç yok",

  "pages.sessionHistory.detail.splitAria": "Ödeme paylaşımı",
  "pages.sessionHistory.detail.splitOf": "{amount} paylaşımı",
  "pages.sessionHistory.detail.yourStake": "Bahsiniz {amount}",
  "pages.sessionHistory.detail.noStakeFromYou": "Sizden bahis yok",
  "pages.sessionHistory.detail.cardKeptGrail": "Kart → {name} (grail saklandı)",
  "pages.sessionHistory.detail.cardSoldBack": "Kart → {name} · geri satıldı",
  "pages.sessionHistory.detail.cardKept": "Kart → {name} · saklandı",
  "pages.sessionHistory.detail.grailSoldSplit": "Grail geri satıldı → yukarıdaki paylaşım",

  "pages.sessionHistory.tile.labelAmount": "{label} · {amount}",
  "pages.sessionHistory.tile.grailPrefix": "GRAIL · ",
  "pages.sessionHistory.tile.topPrefix": "EN BÜYÜK · ",
  "pages.sessionHistory.tile.wonSuffix": " · KAZANDI",
  "pages.sessionHistory.tile.lostSuffix": " · çekilişi kaybetti",

  // ===== pages.winningsStrip.* (RoyaleWinningsStrip.tsx) ====================
  "pages.winningsStrip.ariaLabel": "Kazançlarınız",
  "pages.winningsStrip.title": "Kazançlarınız",
  "pages.winningsStrip.decisionClock": "karar için {n} sn",
  "pages.winningsStrip.withdrawBalance": "{amount} bakiyeyi çek",
  "pages.winningsStrip.howItWorks": "Oyun nasıl çalışır, şans, VRF, kartlar →",
  "pages.winningsStrip.decisionOpen": "Kart kararınız açık",
  "pages.winningsStrip.decisionNoActionKeep": "işlem yapılmazsa saklanır (kartlarınızdan istediğiniz zaman satın)",
  "pages.winningsStrip.decisionNoActionSell": "işlem yapılmazsa sıradaki kilitte otomatik satılır",
  "pages.winningsStrip.keep": "Sakla ({amount})",
  "pages.winningsStrip.sell": "{amount} sat",
  "pages.winningsStrip.sellWithPct": "{amount} sat · %{pct}",
  "pages.winningsStrip.yourCards": "Kartlarınız",
  "pages.winningsStrip.heldValue": "{amount} tutuluyor",
  "pages.winningsStrip.keptByDefault": "Varsayılan olarak saklandı",
  "pages.winningsStrip.withdrawAllOne": "Hepsini çek: {n} kart · {amount}",
  "pages.winningsStrip.withdrawAllOther": "Hepsini çek: {n} kart · {amount}",
  "pages.winningsStrip.withdrawAllConfirm": "Emin misiniz? {n} kartı çek",
  "pages.winningsStrip.selectToWithdraw": "Çekmek için seçin",
  "pages.winningsStrip.sellAll": "Hepsini sat {amount} · %{pct}",
  "pages.winningsStrip.selectedForWithdrawal": "Çekim için seçildi",
  "pages.winningsStrip.tapCardToSelect": "Seçmek için karta dokunun",
  "pages.winningsStrip.selectCardsToWithdraw": "Çekilecek kartları seçin",
  "pages.winningsStrip.selectedSummaryOne": "{n} kart seçildi · {amount}",
  "pages.winningsStrip.selectedSummaryOther": "{n} kart seçildi · {amount}",
  "pages.winningsStrip.withdrawSelectedOne": "{n} kartı çek · {amount}",
  "pages.winningsStrip.withdrawSelectedOther": "{n} kartı çek · {amount}",
  "pages.winningsStrip.withdrawBalanceDialogAria": "Bakiyeyi çek",
  "pages.winningsStrip.closeWithdrawAria": "Çekmeyi kapat",
  "pages.winningsStrip.pastRounds": "Geçmiş turlar",
  "pages.winningsStrip.shareLastWin": "Son kazancı paylaş",
  "pages.winningsStrip.roundId": "T{n}",
  "pages.winningsStrip.tileTook": "{n} numaralı kare masayı aldı · {amount}",
  "pages.winningsStrip.chaseAward": "Kovalamaca +{amount}",
  "pages.winningsStrip.noRound": "tur yok",
  "pages.winningsStrip.roundNetWin": "+{amount}",
  "pages.winningsStrip.roundNetLost": "Kaybetti",
  "pages.winningsStrip.kept": "Saklandı",
  "pages.winningsStrip.sold": "Satıldı",
  "pages.winningsStrip.activity": "Etkinlik",

  // ===== pages.sellConfirm.* (RoyaleSellCardConfirm.tsx) ====================
  // First confirmation in front of the per-card sell back in "Your cards"
  // (owner 2026-08-15). {value} is the card's face value, {amount}/{pct} the
  // HONORED buyback quote the sale actually pays.
  "pages.sellConfirm.dialogAria": "Kart geri satışını onayla",
  "pages.sellConfirm.eyebrow": "Geri satış",
  "pages.sellConfirm.title": "{name} satılsın mı?",
  "pages.sellConfirm.payoutLabel": "Alacağınız",
  "pages.sellConfirm.rateNote": "{value} tutarının {pct}%",
  "pages.sellConfirm.irreversible": "Kart koleksiyonunuzdan çıkar. Bu geri alınamaz.",
  "pages.sellConfirm.keep": "Kartı tut",
  "pages.sellConfirm.confirm": "{amount} karşılığında sat",

  // ===== pages.collection.* (RoyaleCollectionRoute.tsx) =====================
  "pages.collection.title": "Koleksiyonunuz",
  "pages.collection.summaryCardOne": "kart",
  "pages.collection.summaryCardOther": "kart",
  "pages.collection.totalValueSuffix": "toplam değer",
  "pages.collection.tierGrail": "GRAIL",
  "pages.collection.tierTop": "EN İYİ",
  "pages.collection.tierCommon": "SIRADAN",
  "pages.collection.viaKept": "SAKLANDI",
  "pages.collection.viaWon": "KAZANILDI",
  "pages.collection.cardAriaLabel": "{name}, {amount}. Enter tuşu kart ayrıntılarını açar.",

  // ===== pages.ladder.* (RoyaleLadderRoute.tsx) ==============================
  "pages.ladder.title": "Sıralama",
  "pages.ladder.tabAriaLabel": "Sıralama görünümü",
  "pages.ladder.tabBetters": "En iyi bahisçiler",
  "pages.ladder.tabPacks": "Pack şansları",
  "pages.ladder.tabCollectors": "Collectors",
  "pages.ladder.sectionAriaLabel": "Pack sıralaması",
  "pages.ladder.intro":
    "Her dolar, karşılayabildiği en büyük pack'i doldurur. Her basamak gerçek bir CollectorCrypt makinesidir, en iyi kartlara göz atın, ardından tüm havuzu açın.",
  "pages.ladder.sourceLive": "Canlı CollectorCrypt havuzları ({count}/{total} makine) · {age} önce güncellendi{backlogNote}",
  "pages.ladder.sourceBundled": "Referans havuzlar: gruplanmış CollectorCrypt dereceli kartları, gerçek sigortalı değerler (canlı ilanlar değil)",
  "pages.ladder.sourceFixtures": "Referans örnekler: gruplanmış veri kümeleri",
  "pages.ladder.footNote": "Şans, değer bantları ve geri alım, CollectorCrypt'in yayımlanan gacha makinesi özelliklerini yansıtır (anlık görüntü {date}).",
  "pages.ladder.footNoteLive":
    "Kartlar, her makinenin bantları içindeki canlı pazar yeri envanteridir, turlar arasında her 5 dakikada bir güncellenir.",
  "pages.ladder.footNoteBundled": "Gösterilen kartlar, gerçek dereceli CollectorCrypt kartlarından oluşan gruplanmış bir settir, canlı ilanlar değildir.",
  "pages.ladder.stepUp": "Bir üst basamak",
  "pages.ladder.stepUpFromPrefix": "{name}'den",
  "pages.ladder.stepUpEntryPrefix": "giriş basamağı, altındaki bozukluk",
  "pages.ladder.stepUpEntrySuffix": "bozuk kalır",
  "pages.ladder.valueRange": "Değer aralığı",
  "pages.ladder.ceiling": "tavan",
  "pages.ladder.floor": "taban",
  "pages.ladder.machineOdds": "Makine şansı",
  "pages.ladder.buybackPrefix": "geri alım",
  "pages.ladder.grailOddsPrefix": "grail",
  "pages.ladder.poolLoading": "Havuz yükleniyor…",
  "pages.ladder.viewMore": "{n} tane daha gör",
  "pages.ladder.cardPool": "{n} kartlık havuz",
  "pages.ladder.priciestFirst": "önce en pahalı",
  "pages.ladder.machineCardsOnly": "{n} kart",
  "pages.ladder.machineNameCards": "{shortName} · {n} kart",
  "pages.ladder.collector.ariaLabel": "Collector leaderboard",
  "pages.ladder.collector.title": "Collector leaderboard",
  "pages.ladder.collector.description": "Collection value leads. Hold more cards, chase Grails, and show your best pull.",
  "pages.ladder.collector.playerCount.one": "{n} collector",
  "pages.ladder.collector.playerCount.other": "{n} collectors",
  "pages.ladder.collector.cardCount.one": "{n} card held",
  "pages.ladder.collector.cardCount.other": "{n} cards held",
  "pages.ladder.collector.tableAriaLabel": "Collector standings by collection value",
  "pages.ladder.collector.collectionValue": "Collection value",
  "pages.ladder.collector.cardsHeld": "Cards held",
  "pages.ladder.collector.cardsShort": "cards",
  "pages.ladder.collector.grailsPulled": "Grails pulled",
  "pages.ladder.collector.grailsShort": "Grails",
  "pages.ladder.collector.bestPull": "Best pull",
  "pages.ladder.collector.noPull": "None yet",
  "pages.ladder.collector.youRankTag": "YOU · #{n}",
  "pages.ladder.collector.viewCollection": "View collection",
  "pages.ladder.collector.empty": "No cards are held yet.",
  "pages.ladder.collector.emptyCta": "Open a pack to enter the standings",
  "pages.ladder.collector.footnote": "Collection value is the sum of cards still held on this device. Rankings refresh as rounds settle.",
  "pages.ladder.collector.rowAria": "Rank {rank}, {name}, collection value {value}, {cards} cards held, {grails} Grails pulled",

  // ===== pages.ladder.leaderboard.* (RoyaleLeaderboard.tsx, the "Top betters"
  // panel this route's "betters" tab renders - also mounted as a compact rail
  // on the board landing, see board segment's usage) =========================
  "pages.ladder.leaderboard.ariaLabel": "En iyi bahisçiler lider tablosu",
  "pages.ladder.leaderboard.title": "En iyi bahisçiler",
  "pages.ladder.leaderboard.emptyNoSettled": "Henüz sonuçlanan tur yok",
  "pages.ladder.leaderboard.emptyNoBetsToday": "Bugün henüz bahis sonuçlanmadı.",
  "pages.ladder.leaderboard.emptyNoBetsAll": "Henüz bahis sonuçlanmadı.",
  "pages.ladder.leaderboard.emptyCta": "Listeye girmek için tahtada bahis yapın",
  "pages.ladder.leaderboard.timeframeAriaLabel": "Zaman aralığı",
  "pages.ladder.leaderboard.today": "Bugün",
  "pages.ladder.leaderboard.allTime": "Tüm zamanlar",

  // ===== pages.ladderViewer.* (pages/RoyaleLadderCardViewer.tsx, the modal a
  // ladder row's "View {n} more" button opens over the full machine pool). Its
  // own "view more" button reuses pages.ladder.viewMore above (same wording,
  // same surface). Counts arrive pre-formatted, digits stay as authored. ======
  "pages.ladderViewer.eyebrow": "Pack havuzu",
  "pages.ladderViewer.showing": "{total} içinden {n} gösteriliyor",
  "pages.ladderViewer.closeAria": "Pack havuzunu kapat",
  "pages.ladderViewer.remainingFoot": "görülecek {n} daha · taban {amount}",
  "pages.ladderViewer.wholePool": "İşte {n} kartlık havuzun tamamı.",

  // ===== pages.results.* (RoyaleRoundResultsRoute.tsx) ======================
  "pages.results.title": "Tur sonuçları",
  // Plural pair (see royaleI18n.ts header, "PLURAL KEYS"): ".one" for n===1,
  // ".other" for every other count, chosen by the calling component. Turkish
  // nouns do not inflect for plural after a numeral, so identical text below
  // is correct Turkish, not a missed translation.
  "pages.results.count.one": "{n} TUR",
  "pages.results.count.other": "{n} TUR",
  "pages.results.emptyTitle": "HENÜZ SONUÇLANAN TUR YOK",
  "pages.results.emptyBody": "Tahtada bir tur oynayın, açtığı her kart tur tur buraya düşer.",
  "pages.results.tileWins": "{winner} {amount} kazanıyor",
  "pages.results.tileFallback": "Kare",
  "pages.results.youWon": "{amount} kazandınız",
  "pages.results.noWinForYou": "sizin için kazanç yok",
  "pages.results.replayLink": "Tekrar izle",
  // Bare "Payout split" (no amount) : the upgraded payout-split header (owner
  // 2026-07-22) shows the eyebrow label and the pool amount as two separate
  // nodes, unlike pages.results.payoutSplit below which bakes the amount in.
  "pages.results.payoutSplitLabel": "Ödeme paylaşımı",
  "pages.results.payoutSplit": "Ödeme paylaşımı · havuz {amount}",
  "pages.results.yourPullPrefix": "Çekilişiniz ·",
  "pages.results.noPull": "yok",
  "pages.results.youKeptIt": "sakladınız",
  "pages.results.youSoldItForCash": "nakit karşılığında sattınız",
  "pages.results.chaseAward": "KOVALAMACA +{amount}",
  "pages.results.potLedgerFull": "{amount} havuz tam olarak ödendi",
  "pages.results.pool": "havuz",
  "pages.results.potLedgerWithheld": "alıkonuldu",
  "pages.results.potLedgerPaidIn": "yatırıldı",
  "pages.results.potLedgerCashToBackers": "destekçilere nakit",
  "pages.results.theChase": "Kovalamaca",
  "pages.results.protocol": "protokol",
  "pages.results.jackpot": "jackpot",
  "pages.results.cardTrades": "kart satışları",
  "pages.results.statsAriaLabel": "Oturum toplamları",
  "pages.results.roundsPlayed": "OYNANAN TUR",
  "pages.results.winRate": "KAZANMA ORANI",
  "pages.results.cashWon": "KAZANILAN NAKİT",
  "pages.results.biggestPackPull": "EN BÜYÜK PACK ÇEKİLİŞİ",
  "pages.results.noneYet": "HENÜZ YOK",

  // --- ROUNDS-LIST UI WAVE (owner burst 2026-07-29): the winning tile's draw
  // odds, the per-round collapse toggle, and the "other participants" disclosure.
  "pages.results.tileOdds": "%{pct} şans",
  "pages.results.oddsUnavailable": "şans bilgisi yok",
  "pages.results.collapseRoundAria": "Tur {n}'i daralt",
  "pages.results.expandRoundAria": "Tur {n}'i genişlet",
  "pages.results.playersTitle": "DİĞER OYUNCULAR",
  "pages.results.playersCount.one": "{n} oyuncu",
  "pages.results.playersCount.other": "{n} oyuncu",
  "pages.results.playersShow": "Göster",
  "pages.results.playersHide": "Gizle",
  "pages.results.playerBid": "BAHİS",
  "pages.results.playerResult": "SONUÇ",
  "pages.results.playerCash": "{amount} nakit",
  "pages.results.playerNoCards": "kart yok",

  // ===== pages.sellBack.* (RoyaleSellBackPanel.tsx header banner - mounted by
  // both RoyaleCollectionRoute and RoyaleWinningsStrip) ======================
  "pages.sellBack.ariaLabel": "Kartlarınızı geri satın",
  "pages.sellBack.title": "Geri sat",
  "pages.sellBack.hint": "Kazandığınız andan itibaren kilitli fiyat, asla yeniden fiyatlandırılmaz.",
  "pages.sellBack.quietState": "Geri satış, canlı turlarla açılır.",

  // --- royaleSellBack.ts: the quote countdown (formatSellBackCountdown). The
  // {d}/{h}/{m} tokens are already-formatted integers - a locale reorders the
  // sentence around them, it never re-formats the digits.
  "pages.sellBack.countdownExpired": "Süresi doldu",
  "pages.sellBack.countdownDaysHours": "{d}g {h}s kaldı",
  "pages.sellBack.countdownHoursMinutes": "{h}s {m}d kaldı",
  "pages.sellBack.countdownMinutes": "{m}d kaldı",
  "pages.sellBack.countdownSubMinute": "<1d kaldı",

  // --- royaleSellBack.ts: custody badges (sellBackCustodyBadge). Informational
  // only, sell-back stays allowed in both states.
  "pages.sellBack.badgeDeliveryPending": "Teslimat bekleniyor",
  "pages.sellBack.badgeNeedsWallet": "Cüzdan gerekli",

  // --- royaleSellBack.ts: player-facing copy for every domain error code
  // (sellBackErrorCopy). Each pair is a title + the detail rendered under it.
  "pages.sellBack.error.quoteExpired.title": "Bu teklifin süresi doldu",
  "pages.sellBack.error.quoteExpired.detail":
    "Geri satış penceresi kapandı. Kart hâlâ sizin. Şimdi çıkış yolu açık piyasa.",
  "pages.sellBack.error.alreadyExercised.title": "Zaten geri satıldı",
  "pages.sellBack.error.alreadyExercised.detail": "Bu kart zaten geri satıldı. O satışın makbuzu gösteriliyor.",
  "pages.sellBack.error.quoteVoid.title": "Teklif geri çekildi",
  "pages.sellBack.error.quoteVoid.detail":
    "Bu geri satış teklifi operasyon tarafından geri çekildi. Bir ödeme bekliyorsanız destekle iletişime geçin.",
  "pages.sellBack.error.notQuoteOwner.title": "Sizin kartınız değil",
  "pages.sellBack.error.notQuoteOwner.detail": "Bu geri satış teklifi başka bir hesaba ait.",
  "pages.sellBack.error.cardNotDelivered.title": "Kart hâlâ yolda",
  "pages.sellBack.error.cardNotDelivered.detail":
    "Kart henüz cüzdanınıza tamamen teslim edilmedi. Birazdan tekrar deneyin.",
  "pages.sellBack.error.cardNotHeld.title": "Kart cüzdanınızda değil",
  "pages.sellBack.error.cardNotHeld.detail":
    "Cüzdanınız artık bu tam kartı tutmuyor. Bu teklifi yalnızca orijinal kart kullanabilir.",
  "pages.sellBack.error.returnTxRequired.title": "İmza gerekli",
  "pages.sellBack.error.returnTxRequired.detail":
    "Bu geri satış, kartı iade etmek için imzanızı gerektiriyor. İmzalayıp tekrar deneyin.",
  "pages.sellBack.error.returnNotConfirmed.title": "İade onaylanmadı",
  "pages.sellBack.error.returnNotConfirmed.detail":
    "Kart iadesi zincir üzerinde onaylanmadı. Teklif hâlâ aktif. Hazır olduğunuzda tekrar deneyin.",
  "pages.sellBack.error.rateLimited.title": "Çok fazla deneme",
  "pages.sellBack.error.rateLimited.detail": "Biraz yavaşlayıp tekrar deneyin.",
  "pages.sellBack.error.accountRequired.title": "Giriş gerekli",
  "pages.sellBack.error.accountRequired.detail": "Bir kartı geri satmak için hesabınızı bağlayın.",
  "pages.sellBack.error.quoteNotFound.title": "Teklif bulunamadı",
  "pages.sellBack.error.quoteNotFound.detail": "Bu geri satış teklifi artık mevcut değil.",
  "pages.sellBack.error.quoteIdRequired.title": "Bir şeyler ters gitti",
  "pages.sellBack.error.quoteIdRequired.detail": "Geri satış isteğinde gerekli bilgiler eksikti.",
  "pages.sellBack.error.unknown.title": "Geri satış başarısız oldu",
  "pages.sellBack.error.unknown.detail": "Bizim tarafımızda bir şeyler ters gitti. Birazdan tekrar deneyin.",

  // --- RoyaleSellBackPanel.tsx: load/empty states.
  "pages.sellBack.syncNote": "Canlı senkronizasyon otomatik olarak tekrar dener. Kilitlenen teklifler fiyatlarını korur.",
  "pages.sellBack.offlineTitle": "Çevrimdışısınız",
  "pages.sellBack.offlineBody": "Tekrar bağlanın, kilitlenen teklifleriniz tam burada.",
  "pages.sellBack.loadFailedTitle": "Teklifler yüklenemedi",
  "pages.sellBack.loadFailedBody": "Kilitlenen teklifler fiyatlarını korur. Birazdan tekrar açın.",
  "pages.sellBack.tryAgain": "Tekrar dene",
  "pages.sellBack.emptyTitle": "Henüz geri satılacak kart yok",
  "pages.sellBack.emptyBody": "Bir pack kazanın, tur sonuçlanır sonuçlanmaz geri alım teklifi buraya düşer.",
  "pages.sellBack.pastSellBacks": "Geçmiş geri satışlar",

  // --- RoyaleSellBackPanel.tsx: one ticket, from offer to receipt.
  "pages.sellBack.localOffer": "Yerel teklif",
  "pages.sellBack.noExpiry": "Süresi yok",
  "pages.sellBack.preparing": "Hazırlanıyor…",
  "pages.sellBack.sellBackAmount": "{amount} geri sat",
  "pages.sellBack.waitingSignature": "İmzanız bekleniyor…",
  "pages.sellBack.signatureUnwired": "Bu kartı geri satmak bir cüzdan imzası gerektiriyor. Kilitlenen teklifiniz aktif kalır.",
  "pages.sellBack.confirmInWallet": "Cüzdanınızda onaylayın…",
  "pages.sellBack.sellingBack": "Geri satılıyor…",
  "pages.sellBack.receiptAlreadySold": "Zaten geri satıldı",
  "pages.sellBack.receiptSoldBack": "Geri satıldı",
  // {rail} is either "USDC" (a brand term, English everywhere) or
  // pages.sellBack.railGameBalance below.
  "pages.sellBack.receiptPaid": "{amount} ödendi · {rail}",
  "pages.sellBack.railGameBalance": "oyun bakiyesi",

  // --- RoyaleSellBackPanel.tsx: the "Past sell-backs" history rows.
  "pages.sellBack.historySoldBack": "Geri satıldı · {amount}",
  "pages.sellBack.historyExpired": "Teklifin süresi doldu",
  "pages.sellBack.historyWithdrawn": "Teklif geri çekildi",

  // ===== pages.profile.* (RoyaleProfileRoute.tsx) ============================
  "pages.profile.relTime.never": "hiç",
  "pages.profile.relTime.justNow": "az önce",
  "pages.profile.relTime.minutesAgo": "{n}dk önce",
  "pages.profile.relTime.hoursAgo": "{n}s önce",
  "pages.profile.relTime.daysAgo": "{n}g önce",
  "pages.profile.relTime.monthsAgo": "{n}ay önce",
  "pages.profile.noDate": "–",

  "pages.profile.count.settledRoundOne": "{n} sonuçlanan tur",
  "pages.profile.count.settledRoundOther": "{n} sonuçlanan tur",
  "pages.profile.count.roundOne": "{n} tur",
  "pages.profile.count.roundOther": "{n} tur",
  "pages.profile.count.settledOutcomeOne": "{n} kesinleşmiş sonuç",
  "pages.profile.count.settledOutcomeOther": "{n} kesinleşmiş sonuç",
  "pages.profile.xOfRoundsOne": "{n} turun {x} tanesi",
  "pages.profile.xOfRoundsOther": "{n} turun {x} tanesi",

  "pages.profile.follow": "Takip et",
  "pages.profile.following": "Takip ediliyor",
  "pages.profile.linkCopied": "Bağlantı kopyalandı",
  "pages.profile.headlineStatsAria": "Öne çıkan istatistikler",

  "pages.profile.chartWindow7d": "7G",
  "pages.profile.chartWindow30d": "30G",
  "pages.profile.chartWindowAll": "Tümü",
  "pages.profile.chartValueAria": "Bu dönemde {from} ile {to} arasındaki koleksiyon değeri",
  // Right-hand end of the value chart's x-axis caption (the left end is a date).
  "pages.profile.chartFootNow": "şimdi",
  "pages.profile.viewRoundResultsAria": "Tur #{n} sonuçlarını gör",

  "pages.profile.collectionViewAll": "Tüm kartlar",
  "pages.profile.collectionViewVault": "Kasada",
  "pages.profile.collectionViewOffers": "Teklifler",
  "pages.profile.collectionViewHistory": "Geçmiş",
  "pages.profile.collectionStateAria": "Koleksiyon durumu",
  "pages.profile.openCollection": "Koleksiyonu aç ↗",
  "pages.profile.collectionEmptyHistoryTitle": "HENÜZ GERİ SATIŞ YOK",
  "pages.profile.collectionEmptyHistoryBody": "Sakladığınız bir kartı geri satın, makbuz buraya düşer.",
  "pages.profile.inVault": "Kasada · Tur #{n}",
  "pages.profile.sellBackOffer": "Geri satış teklifi · {amount}",
  "pages.profile.soldBack": "Geri satıldı",
  "pages.profile.soldAtSettlement": "Sonuçlanmada satıldı",
  "pages.profile.soldFooter": "{via} · {amount} · {rel}",
  "pages.profile.sellBackNote": "Geri satış işlemleri ve canlı teklifler koleksiyon sayfasında yürütülür.",

  "pages.profile.pnlByRound": "TUR BAŞINA K/Z",
  "pages.profile.pnlSubtitle": "son {n} bahis edilen tur · kazançlar yukarı, kayıplar aşağı · {wins}G {losses}M",
  "pages.profile.pnlAria": "Tur başına net sonuç, son {n} tur",
  "pages.profile.pnlColAria": "Tur {n}: {signed}",
  "pages.profile.pnlTooltip": "T{n} · {signed}",

  "pages.profile.recentForm": "SON FORM",
  "pages.profile.recentFormSubtitle": "son {n} bahis edilen tur, en eskiden başlayarak",
  "pages.profile.formColAria": "Tur {n}: {result} {amount}",
  "pages.profile.won": "kazandı",
  "pages.profile.lost": "kaybetti",
  "pages.profile.formW": "G",
  "pages.profile.formL": "M",

  "pages.profile.leaderboardEyebrow": "LİDER TABLOSU · {mode}",
  "pages.profile.modeMostProfitable": "EN KÂRLI",
  "pages.profile.modeHighestVolume": "EN YÜKSEK HACİM",
  "pages.profile.topPlayers": "en iyi {n} oyuncu",
  "pages.profile.metricProfit": "KÂR",
  "pages.profile.metricVolume": "HACİM",
  "pages.profile.metricNetPnl": "NET K/Z",
  "pages.profile.filtersAria": "Lider tablosu filtreleri",
  "pages.profile.metricFilterAria": "Ölçüt",
  "pages.profile.windowFilterAria": "Dönem",
  "pages.profile.window1d": "1G",
  "pages.profile.window7d": "7G",
  "pages.profile.window30d": "30G",
  "pages.profile.windowAll": "TÜMÜ",
  "pages.profile.thRank": "#",
  "pages.profile.thPlayer": "OYUNCU",
  "pages.profile.thRounds": "TURLAR",
  "pages.profile.you": "SİZ",
  "pages.profile.leaderboardEmpty": "BU DÖNEMDE HENÜZ OYUNCU YOK. Bahisler ve ödemeler kaydedildikçe tablo dolar.",

  "pages.profile.notFoundTitle": "HENÜZ DİZİNLENMİŞ TUR YOK",
  "pages.profile.notFoundBody": "{wallet}, sunucunun dizinlediği bir turu henüz sonuçlandırmadı.",
  "pages.profile.offlineTitle": "PROFİLE ULAŞILAMIYOR",
  "pages.profile.offlineBody": "Oyuncu aramaları canlı bağlantı gerektirir. Bu kaydı almak için tekrar deneyin.",
  "pages.profile.retry": "TEKRAR DENE",

  "pages.profile.collectorSince": "{month} tarihinden beri koleksiyoncu",
  "pages.profile.lastActive": "son etkinlik {rel}",
  "pages.profile.rankAllTime": "Sıra #{n} · tüm zamanlar",
  "pages.profile.netPnl": "Net K/Z",
  "pages.profile.lifetime": "tüm zamanlar",
  "pages.profile.bidWinRate": "Bahis kazanma oranı",
  "pages.profile.cardsWon": "Kazanılan kartlar",
  "pages.profile.grailsOne": "{n} grail",
  "pages.profile.grailsOther": "{n} grail",
  "pages.profile.totalStaked": "Toplam bahis",
  "pages.profile.betsCount": "{n} bahis",
  "pages.profile.biggestRound": "En büyük tur",
  "pages.profile.singleRoundSwing": "tek turluk değişim",
  "pages.profile.playerStatsAria": "Oyuncu istatistikleri",
  "pages.profile.winsLosses": "KAZANÇ / KAYIP",
  "pages.profile.roundsPlayed": "OYNANAN TUR",
  "pages.profile.betsPlaced": "YAPILAN BAHİS",
  "pages.profile.voidedRounds": "İPTAL EDİLEN TUR",

  "pages.profile.tablePlayer": "Masa oyuncusu",
  "pages.profile.playerFallback": "Oyuncu",
  "pages.profile.localEmptyTitle": "BU OTURUMDA HENÜZ TUR YOK",
  "pages.profile.localEmptyBody": "{name} bu oturumda henüz bir kareyi desteklemedi.",
  "pages.profile.sessionNet": "Oturum net",
  "pages.profile.cashSplitsOnly": "yalnızca nakit paylaşımlar",
  "pages.profile.thisSession": "bu oturum",
  "pages.profile.packsOpened": "Açılan pack",
  "pages.profile.onBackedTiles": "desteklenen karelerde",
  "pages.profile.biggestPull": "En büyük çekiliş",
  "pages.profile.noneYet": "Henüz yok",
  "pages.profile.recentActivity": "Son etkinlik",
  "pages.profile.noSettledOutcomesPlayer": "Bu oyuncu için bu oturumda henüz sonuçlanan bir şey yok.",

  "pages.profile.pageTitle": "Profil",
  "pages.profile.followingCount": "{n} takip",
  "pages.profile.collectionValue": "Koleksiyon değeri",
  "pages.profile.updatedAgo": "{rel} güncellendi",
  "pages.profile.noCardsYet": "henüz kart yok",
  "pages.profile.change30d": "30G değişim",
  "pages.profile.allNewIn30": "son 30 günde tamamen yeni",
  "pages.profile.noChange": "değişim yok",
  "pages.profile.cardsOwned": "Sahip olunan kartlar",
  "pages.profile.realizedProceeds": "Gerçekleşen gelir",
  "pages.profile.sellBackOne": "{n} geri satış",
  "pages.profile.sellBackOther": "{n} geri satış",
  "pages.profile.tabHighlights": "Öne çıkanlar",
  "pages.profile.tabCollection": "Koleksiyon",
  "pages.profile.tabActivity": "Etkinlik",
  "pages.profile.tabStats": "İstatistikler",
  "pages.profile.tabsAria": "Profil bölümleri",
  "pages.profile.emptyHighlightsTitle": "HENÜZ KAYITLI TUR YOK",
  "pages.profile.emptyHighlightsBody":
    "Tahtada bir kareyi destekleyin, pasaportunuz dolsun: değer eğrisi, etkinlik, koleksiyon ve sıra.",
  "pages.profile.collectionPerformance": "Koleksiyon performansı",
  "pages.profile.chartWindowAria": "Grafik dönemi",
  "pages.profile.chartEmpty": "Henüz koleksiyon değeri yok. Kazanan bir çekilişi saklayın, eğri buradan başlasın.",
  "pages.profile.thisWindow": "bu dönem",
  "pages.profile.chartNoChanges": "Bu dönemde koleksiyon değişimi yok.",
  "pages.profile.viewAll": "Tümünü gör ({n})",
  "pages.profile.collectionHighlights": "Koleksiyon öne çıkanları",
  "pages.profile.seeAll": "Tümünü gör ({n})",
  "pages.profile.noCardsInVault": "Kasada henüz kart yok. Bir çekilişi saklayın, burada dereceli kart olarak görünsün.",
  "pages.profile.activityAria": "Etkinlik",
  "pages.profile.roundHistoryAria": "Tur geçmişi",
  "pages.profile.onThisDevice": "bu cihazda {count}",
  "pages.profile.noActivityYet": "Henüz etkinlik yok. Bahis yaptığınız turlar ve sakladığınız veya sattığınız kartlar buraya düşer.",
  "pages.profile.performanceAria": "Performans",
  "pages.profile.walletAria": "Cüzdan",
  "pages.profile.walletEyebrow": "CÜZDAN",
  "pages.profile.emptyStatsBody": "Tahtada bir kareyi destekleyin, K/Z'niz, kazanma oranınız ve tur defteriniz burada birikmeye başlasın.",
  "pages.profile.findPlayerAria": "Bir oyuncu bul",
  "pages.profile.lookUpWallet": "BİR CÜZDAN ARA",
  "pages.profile.walletPlaceholder": "Bir cüzdan adresi veya misafir kimliği yapıştırın",
  "pages.profile.view": "GÖR",
  "pages.profile.myProfile": "PROFİLİM",

  // ===== pages.profile.withdraw.* (pages/RoyaleWithdrawPanel.tsx, mounted in
  // the #wallet section right below the walletEyebrow/walletAria header
  // above) - LOCAL/PROOF ONLY, no money moves off a money runtime, but the
  // copy is written in real-money voice since it is the real-money flow's UI.
  "pages.profile.withdraw.ariaLabel": "Kazançları çek",
  "pages.profile.withdraw.title": "Çek",
  "pages.profile.withdraw.subtitle": "Bakiyenizin bir kısmını veya tamamını bir Solana cüzdanına çekin.",
  "pages.profile.withdraw.available": "Kullanılabilir",
  "pages.profile.withdraw.amountLabel": "Tutar (USDC)",
  "pages.profile.withdraw.presetsAriaLabel": "Çekim tutarı seçenekleri",
  "pages.profile.withdraw.destinationLabel": "Hedef cüzdan",
  "pages.profile.withdraw.destinationPlaceholder": "Solana adresi",
  "pages.profile.withdraw.submit": "Çek",
  "pages.profile.withdraw.submitBusy": "İsteniyor...",
  "pages.profile.withdraw.note":
    "Her çekim işlemini bir cüzdan imzasıyla onaylarsınız ve USDC'niz verdiğiniz Solana adresine ödenir.",
  "pages.profile.withdraw.errorInvalidAmount": "GEÇERLİ BİR TUTAR GİRİN (0.01 İLA 10.000).",
  "pages.profile.withdraw.errorInvalidDestination": "GEÇERLİ BİR SOLANA HEDEF ADRESİ GİRİN.",
  "pages.profile.withdraw.requesting": "{amount} ÇEKİM İSTEĞİ GÖNDERİLİYOR...",
  "pages.profile.withdraw.sent": "ÇEKİM GÖNDERİLDİ - {amount}, {destShort} ADRESİNE...",
  "pages.profile.withdraw.signatureRequired":
    "CÜZDAN İMZASI GEREKLİ - ÇEKİM NONCE'UNU CÜZDANINIZLA İMZALAYIN (YALNIZCA PRIVY JETONU REDDEDİLİR).",
  "pages.profile.withdraw.refused": "ÇEKİM REDDEDİLDİ ({error}).",

  // ===== pages.stats.* (RoyaleStatsPanel.tsx, the collapsible PLAYER STATS
  // dashboard mounted by the profile route's Stats tab). CAPS micro-labels are
  // a deliberate house style: keep a locale's own caps convention, never
  // lowercase them just because the source shouts. The GRAIL tier row keeps its
  // brand name in English and needs no key (see royaleI18n.ts's rules). ======
  "pages.stats.title": "OYUNCU İSTATİSTİKLERİ",
  // Two independent counts in one line, so this is a single tokenized string
  // rather than a .one/.other pair (a pair cannot inflect two nouns at once).
  "pages.stats.summaryMeta": "{rounds} TUR · {packs} PACK",
  "pages.stats.noRoundsYet": "HENÜZ TUR YOK",
  "pages.stats.emptyBody": "HENÜZ TUR YOK. Net K/Z'nizi, kazanma oranınızı ve çekilişlerinizi izlemeye başlamak için bir kareyi destekleyin.",
  "pages.stats.netPnl": "NET K/Z",
  "pages.stats.roi": "ROI",
  "pages.stats.winRate": "KAZANMA ORANI",
  "pages.stats.totalStaked": "TOPLAM BAHİS",
  "pages.stats.totalWon": "TOPLAM KAZANÇ",
  "pages.stats.holdings": "VARLIKLAR",
  "pages.stats.cardsHeld.one": "{n} kart",
  "pages.stats.cardsHeld.other": "{n} kart",
  "pages.stats.packsOpened": "AÇILAN PACK",
  "pages.stats.chaseHits": "KOVALAMACA VURUŞLARI",
  "pages.stats.bestRound": "EN İYİ TUR",
  "pages.stats.worstRound": "EN KÖTÜ TUR",
  "pages.stats.biggestPackPull": "EN BÜYÜK PACK ÇEKİLİŞİ",
  "pages.stats.noneYet": "HENÜZ YOK",
  "pages.stats.perTierHits": "KATMAN BAŞINA VURUŞ",
  "pages.stats.tierTop": "EN İYİ",
  "pages.stats.tierCommon": "SIRADAN",

  // ===== pages.arenaResults.* (pages/RoyaleArenaResultsRoute.tsx, the CARD
  // ARENA's "see last round results" record page) ============================
  "pages.arenaResults.title": "Arena sonuçları",
  "pages.arenaResults.backToArena": "← Arenaya dön",
  "pages.arenaResults.emptyBody": "Henüz sonuçlanan arena turu yok.",
  "pages.arenaResults.enterArena": "Arenaya gir →",
  "pages.arenaResults.matchNumber": "MAÇ #{n}",
  // The headline reads "<player name> takes the pot"; the self view uses the
  // second-person verb. The name itself is rendered as a separate node.
  "pages.arenaResults.youTakeThePot": "havuzu alıyorsunuz",
  "pages.arenaResults.takesThePot": "havuzu alıyor",
  "pages.arenaResults.potCards.one": "havuz · {n} kart",
  "pages.arenaResults.potCards.other": "havuz · {n} kart",
  "pages.arenaResults.winner": "KAZANAN",
  "pages.arenaResults.theChase": "KOVALAMACA",
  "pages.arenaResults.protocol": "PROTOKOL",
  "pages.arenaResults.cardsValue.one": "{n} kart · {amount}",
  "pages.arenaResults.cardsValue.other": "{n} kart · {amount}",
  "pages.arenaResults.cardsWonAria": "Kazanılan kartlar",
  "pages.arenaResults.toTheWinner": "KAZANANA",
  "pages.arenaResults.smallPot": "{n} karttan az havuz: kazanan hepsini aldı. Kovalamaca ve protokol payları hiçbir şey almadı.",

  // ===== pages.cardDetailRoute.* (routes/RoyaleCardDetailRoute.tsx, the
  // shareable standalone /lab/royale/card/<key> dossier page. Its back link and
  // empty-state CTA reuse pages.common.backToBoard / pages.common.goToBoard.)
  "pages.cardDetailRoute.title": "Kart dosyası",
  "pages.cardDetailRoute.notFoundTitle": "KART BULUNAMADI",
  "pages.cardDetailRoute.notFoundBody":
    "Bu bağlantı, bu tarayıcının henüz görmediği bir karta işaret ediyor. Kartlar kendi turlarınızdan ve mevcut CollectorCrypt havuzu anlık görüntüsünden çözülür.",
  "pages.collection.viewRound": "Turu gör ↗",
  "pages.sellBack.showAllOffers": "{n} teklifin tümünü göster",
  "pages.sellBack.showFewerOffers": "Daha az teklif göster",
  "pages.common.shareCard": "Kartı paylaş",
} as Record<string, string>;
