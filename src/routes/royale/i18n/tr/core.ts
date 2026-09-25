// Turkish (Türkçe): "core" segment. Same key set as en/core.ts. See
// royaleI18n.ts's file header for the key-naming and {token} interpolation
// convention, and the "no em dash" rule.
//
// Namespaces: settings.* (the language picker), common.* (shared switch/
// button words), gear.<section>.* (the settings overlay's grouped fields),
// nav.* (RoyaleSurfaceNav), mobileNav.* (RoyaleMobileTabBar),
// shell.* (the /lab/royale BOARD ROUTE shell) and runtime.* (copy produced by
// the plain, non-component .ts modules).
//
// Terminology (binding across every tr segment - fix ONE Turkish rendering
// per concept and hold it everywhere): "tur" = round, "havuz" = the round's
// pool/pot, "Kovalamaca" = The Chase's rolling jackpot (proper-noun style,
// capitalized, every one of its ~50 occurrences across every segment),
// "kare" = tile, "destekçi(ler)" = backer(s), "en büyük destekçi" = top
// backer, "bahis/bahis yapmak" = bet/bid/stake, "desteklemek" = to back a
// tile, "geri satmak/geri satış" = sell back, "geri alım oranı" = buyback
// rate, "çekiliş/çekmek" = pull/draw, "kasa" = vault, "banka" = "the house"
// (the platform/operator entity, kept distinct from "kasa" so the two never
// blur), "dereceli kart" = graded card/slab, "kanıtlanabilir adillik" =
// provably fair, "makbuz" = receipt, "emanet" = custody. "Replay" renders as
// "Tekrar izle" (sentence-case link text), "TEKRAR İZLE" (all-caps button)
// or "TEKRAR İZLEME" (all-caps watermark noun) depending on the surface -
// held consistently across pages.results.replayLink / pages.common.replay /
// cinema.replay.watermarkTag. Register is FORMAL throughout ("Siz", never
// "sen"), matching fr's vouvoiement-throughout precedent. The brand word
// "pack"/"packs" keeps its literal English spelling everywhere (never
// "paket"); a required Turkish case suffix attaches after an apostrophe,
// using front-vowel harmony ("pack'e", "pack'ten", "pack'ler"). The five
// pack-tier brand names (Starter, Elite, Legendary, Grail, Mythic) plus attn
// ROYALE, ATTN Protocol, USDC, X, Privy and CollectorCrypt stay in English
// everywhere, including mid-sentence; a required case suffix on a tier name
// likewise attaches after an apostrophe ("Grail'den").
export default {
  // --- Language picker (settings.language is the FIRST setting) ----------
  "settings.language": "Dil",
  "settings.languageSectionAria": "Dil ayarları",
  "settings.languageSearchPlaceholder": "Dil ara",
  "settings.languageNoResults": "Eşleşen dil yok",
  "settings.languageHint": "Anında uygulanır. İsme göre arayın veya filtrelemek için yazın.",
  "settings.languageInputAria": "Dil, arama ve seçim",
  // --- Settings navigator (side-tab restructure, 2026-08-06) --------------
  "settings.groupsAria": "Ayar grupları",
  "settings.searchPlaceholder": "Ayarlarda ara",
  "settings.searchClear": "Aramayı temizle",
  "settings.searchResultsAria": "Eşleşen ayarlar",
  "settings.searchNoResults": "“{query}” ile eşleşen bir şey yok. Değiştirmek istediğiniz şeyin adını deneyin.",
  "settings.backToGroups": "Tüm ayarlar",
  "gear.cards.heading": "Kartlar",
  "gear.cards.sectionAria": "Kart ayarları",
  "gear.section.summary.language": "{language}",
  "gear.section.summary.betting": "Bahisler {bids} · minimum {amount}",
  "gear.section.summary.display": "Açılır bildirimler {popups} · portreler {portraits}",
  "gear.section.summary.reveals": "Turbo {turbo}",
  "gear.section.summary.sound": "Müzik {music} · efektler {sfx}",
  "gear.section.summary.autosell": "{count} etkin otomatik satış kuralı",
  "gear.section.summary.hotkeys": "{count} bahis kısayolu ayarlandı",

  // --- Shared words --------------------------------------------------------
  "common.on": "AÇIK",
  "common.off": "KAPALI",
  "common.set": "AYARLA",
  "common.clear": "TEMİZLE",
  // Server tile identifiers ("Tile 3") localize ONLY at presentation, through
  // these two keys (royaleTileLabel.ts) - the wire string never changes.
  // tileShort is the compact form for dense grids (session ledger, wager-ladder
  // mini grid, round-core strip).
  "common.tileLabel": "Kare {n}",
  "common.tileShort": "K{n}",

  // --- Betting ---------------------------------------------------------------
  "gear.betting.heading": "Bahis",
  "gear.betting.sectionAria": "Bahis ayarları",
  "gear.betting.provider.label": "Paket sağlayıcısı",
  "gear.betting.provider.automatic": "Otomatik (Collector Crypt tercih edilir)",
  "gear.betting.provider.hint": "Otomatik mod, kullanılabildiğinde Collector Crypt'i tercih eder ve yalnızca doğrulanmış bir yedeği kullanabilir. Belirli bir sağlayıcı seçmek katıdır: sağlayıcı kullanılamıyorsa bahis reddedilir.",
  "gear.betting.provider.automaticHint": "Otomatik · Collector Crypt tercih edilir",
  "gear.betting.provider.strictHint": "Yalnızca {provider} · yedek yok",
  "gear.betting.provider.unavailable": "{provider} (kullanılamıyor)",
  "gear.betting.provider.selectedUnavailable": "{provider} kullanılamıyor. Katı bahisler reddedilir ve seçim asla değiştirilmez.",
  "gear.betting.provider.actual": "{provider} tarafından karşılandı",
  "gear.betting.provider.accepted": "{provider} tarafından kabul edildi",
  "gear.betting.disableBids.label": "Bahisleri devre dışı bırak",
  "gear.betting.disableBids.hint":
    "Bahislerinizi kilitler: kareye dokunmak artık bahis koymaz, böylece yanlışlıkla bahis yapmadan izleyebilir (ya da ekranı birine verebilirsiniz). Oyunun geri kalanı canlı kalmaya devam eder.",
  "gear.betting.minBid.label": "Minimum bahis",
  "gear.betting.minBid.hint":
    "Bir dokunuşun koyabileceği en küçük bahis. Bahis miktarınız bunun altına düşemez, böylece hızlı bir dokunuş asla niyetinizden azını bahis etmez (sahte bahisleri önlemek için $5'te taban yapılmıştır).",
  "gear.betting.upgradeCap.label": "Yükseltme maliyeti tavanı",
  "gear.betting.upgradeCap.placeholder": "sınırsız",
  "gear.betting.upgradeCap.hint":
    "Tek bir yükseltme tıklamasının size en fazla mal olacağı miktar. Daha pahalı yükseltmeler soluk gösterilir, böylece yoğun bir kare sizi büyük bir faturayla şaşırtamaz.",

  // --- Display -----------------------------------------------------------
  "gear.display.heading": "Görünüm",
  "gear.display.sectionAria": "Görünüm ayarları",
  "gear.display.chipFloats.label": "Bahis balonları",
  "gear.display.chipFloats.hint": "Biri bir kareye bahis yaptığında yukarı süzülen küçük \"+$X · isim\" balonlarını gösterir.",
  "gear.display.floatThreshold.label": "Şu tutarın altındaki bahisleri gizle",
  "gear.display.floatThreshold.placeholder": "her bahsi göster",
  "gear.display.floatThreshold.hint":
    "Yalnızca bu tutarda veya daha büyük bahisler için balon çıkar. Her bahsi göstermek için temizleyin (veya $0 yapın), çok sayıda küçük bahis geldiğinde tahtayı sakin tutar.",
  "gear.display.hidePortraits.label": "Oyuncu portrelerini gizle",
  "gear.display.hidePortraits.hint": "Diğer oyuncuların karelerdeki portre dairelerini gizler. Kendi işaretiniz görünür kalır.",
  "gear.display.fullscreenLandscape.label": "Yatayda tam ekran",
  "gear.display.fullscreenLandscape.hint":
    "Mobilde yatay konumda yapacağınız sonraki dokunuş tarayıcı çubuğunu gizler. iPhone Safari çubuğu küçültür; Ana Ekrana Ekle gerçek tam ekranı sağlar.",
  "gear.display.replayTour.label": "Hoş geldin turunu tekrarla",
  "gear.display.replayTour.hint": "Hoş geldin turunu ilk adımdan yeniden açar.",
  "gear.display.couch.label": "Büyük yazı (TV/koltuk)",
  "gear.display.headerCollapse.label": "Başlığı daralt",
  "gear.display.headerCollapse.hint": "Üst çubuğu katlar, böylece tahta ve kartlar ekranı doldurur. Başlıktaki ok onu geri getirir.",
  "gear.display.couch.hint":
    "Oyun genelinde daha büyük okuma yazısı: sohbet, dokümanlar, etiketler ve para tutarları, koltuktan oynamaya uygun boyutta. Tahta düzenini korur. Adrese ?couch=1 eklenerek de açılabilir.",
  "gear.display.couch.suggested": "Bu bir TV veya konsol tarayıcısına benziyor. Büyük yazı tam bu ekran için yapıldı.",

  // --- Reveals -----------------------------------------------------------
  "gear.reveals.heading": "Açılışlar",
  "gear.reveals.sectionAria": "Açılış ayarları",
  "gear.reveals.turbo.label": "Turbo açılış",
  "gear.reveals.turbo.hint":
    "Açılış gösterisini hızlandırarak sonucunuza daha çabuk ulaşmanızı sağlar. Büyük anlar yine de bir nefeslik durur. Varsayılan olarak kapalıdır, diğer herkes için tam gösteri oynar.",

  // --- Sound ---------------------------------------------------------------
  "gear.sound.heading": "Ses",
  "gear.sound.sectionAria": "Ses ayarları",
  "gear.sound.sfx.label": "Ses efektleri",
  "gear.sound.sfx.hint":
    "Jeton tıklamaları, turun açılışı ve kilitlenmesi, kazanan çarkı ve açılış gösterisi. Hepsi tarayıcınızda anlık üretilir, yüklenecek hiçbir şey yok.",
  "gear.sound.music.label": "Müzik",
  "gear.sound.music.hint":
    "Turu takip eder: bahis sırasında yükselir, son saniyelerde tırmanır ve açılış için düşer. İlk dokunuşunuzdan veya tuşa basışınızdan sonra başlar, sekme değiştirdiğinizde duraklar.",
  "gear.sound.musicStyle.label": "Müzik tarzı",
  "gear.sound.musicStyle.piano": "Sakin piyano",
  "gear.sound.musicStyle.snowmelt": "Kar erimesi",
  "gear.sound.musicStyle.hearthfire": "Ocak ateşi",
  "gear.sound.musicStyle.grotto": "Yaldızlı mağara",
  "gear.sound.musicStyle.arcade": "Arcade telaşı",
  "gear.sound.musicStyle.kart": "Kart rallisi",
  "gear.sound.musicStyle.galaxy": "Yıldız valsi",
  "gear.sound.musicStyle.hint": "Sakin piyano, yumuşak ve aceleci olmayan bir melodidir. Arcade telaşı ise parlak ve hızlıdır. Tur ortasında bir sonraki ölçüde geçiş yapar.",
  "gear.sound.musicVolume.label": "Müzik ses düzeyi",
  "gear.sound.sfxVolume.label": "Efekt ses düzeyi",
  "gear.sound.volume.label": "Ses düzeyi",
  "gear.sound.volume.aria": "Ana ses düzeyi",
  "gear.sound.volume.hint": "Efektler ve müzik için tek bir ana ses düzeyi.",

  // --- Auto-sell rules -----------------------------------------------------
  "gear.autosell.heading": "Otomatik satış kuralları",
  "gear.autosell.sectionAria": "Otomatik satış kuralları",
  "gear.autosell.intro":
    "Bunları bir kez ayarlayın, eşleşen her kazanç kendini otomatik olarak geri satar: sakla/sat sorusu çıkmaz. Eşleşmeyen her şey bugün olduğu gibi size sorulmaya devam eder.",
  "gear.autosell.everyWin.label": "Her kazancı otomatik sat",
  "gear.autosell.everyWin.hint":
    "Kazandığınız her kartı, geldiği anda geri alım oranından nakde çevirir, sakla-veya-sat sorusu çıkmaz. Grail'ler asla otomatik satılmaz. Bu, aşağıdaki dört nadirlik anahtarının tümünü açmanın kısayoludur.",
  "gear.autosell.belowValue.label": "Değer şunun altındaysa sat",
  "gear.autosell.placeholderOff": "kapalı",
  "gear.autosell.rarity.label": "Nadirliğe göre sat",
  "gear.autosell.rarity.aria": "Nadirliğe göre otomatik satış",
  "gear.autosell.rarity.hint":
    "CollectorCrypt nadirlik bantları, kartın geldiği pack makinesinden okunur. Bir bandın tam dolar aralığı pack'e göre değişir, bu yüzden $200'lık bir kart bir makinede nadir, daha pahalı bir makinede sıradan olabilir.",
  "gear.autosell.nonVintage.label": "Vintage olmayan kartları sat",
  "gear.autosell.belowGrade.label": "Derece şunun altındaysa sat",
  "gear.autosell.grader.label": "Derecelendirme kuruluşuna göre sat",
  "gear.autosell.grader.hint":
    "Bir derecelendirme kuruluşunu işaretli bırakın, yalnızca belirlediğiniz sayının altında derecelenen kartlarını otomatik satar. Bir kuruluşun işaretini kaldırarak ondan gelen her kartı otomatik satın. Hepsinin işaretini kaldırarak kazandığınız her şeyi otomatik satın. Kuruluşlar farklı ölçekler kullanır, bu yüzden her taban kendine özeldir.",
  "gear.autosell.grader.aria": "Derecelendirme kuruluşuna göre otomatik satış",
  "gear.autosell.grader.keep": "SAKLA",
  "gear.autosell.grader.sellAll": "HEPSİNİ SAT",
  "gear.autosell.grader.other": "Diğer / derecesiz",
  "gear.autosell.grader.placeholderKeepAll": "hepsini sakla",
  "gear.autosell.grader.placeholderSellAll": "hepsini sat",
  "gear.autosell.grader.ariaGradeSuffix": "şu derecenin altında sat",
  "gear.autosell.summaryActive": "Etkin:",
  "gear.autosell.summaryNone": "Otomatik satış kuralı ayarlanmadı. Her kazançta sizden hâlâ sakla veya sat seçimi istenir.",
  "gear.autosell.turnOffAll": "HEPSİNİ KAPAT",

  // --- Bet hotkeys -----------------------------------------------------------
  "gear.hotkeys.heading": "Bahis kısayol tuşları",
  "gear.hotkeys.sectionAria": "Bahis kısayol tuşları",
  "gear.hotkeys.intro":
    "Bir karenin tuşuna basarak mevcut bahis tutarınızla o kareye bahis yapın. Fareye gerek yok. Aşağıdan bir tuşa tıklayın, ardından istediğiniz tuşa basın. İki kare aynı tuşu paylaşamaz, yeniden atama tuşu taşır. Esc iptal eder, Backspace temizler.",
  "gear.hotkeys.enabled.label": "Sayı tuşuyla bahis",
  "gear.hotkeys.enabled.hintOn": "Tuşlar bahis sırasında etkindir. Bir karenin tuşuna basmak bahsinizi anında yerleştirir.",
  "gear.hotkeys.enabled.hintOff": "Tuşlar kapalı. Bir karenin tuşuna basmak bahis yerleştirmez.",
  "gear.hotkeys.enabled.hintUnset": "Henüz karar verilmedi. Tuşları buradan açın veya bahis sırasında bir karenin tuşuna basıp Etkinleştir'i seçin.",
  "gear.hotkeys.listAria": "Kare bahis kısayol tuşları",
  "gear.hotkeys.tileLabel": "Kare {n}",
  "gear.hotkeys.pressKeyPrompt": "Bir tuşa basın…",
  "gear.hotkeys.setKey": "Tuş ayarla",
  "gear.hotkeys.clear": "Temizle",
  "gear.hotkeys.ariaPressToBind": "Kare {n} için bir tuş atamak üzere basın",
  "gear.hotkeys.ariaShortcut": "Kare {n} kısayolu {key}. Yeniden atamak için tıklayın.",
  "gear.hotkeys.ariaNoShortcut": "Kare {n} için kısayol yok. Ayarlamak için tıklayın.",
  "gear.hotkeys.ariaClearShortcut": "Kare {n} kısayolunu temizle",
  "gear.hotkeys.unboundWarning": "{list} için tuş ayarlanmadı. Siz bir tuş ayarlayana kadar bu karelerin klavye kısayolu olmaz.",
  "gear.hotkeys.resetButton": "Varsayılanlara sıfırla",

  // --- Cross-surface nav (RoyaleSurfaceNav.tsx) ---------------------------
  "nav.ariaLabel": "attn ROYALE bölümleri",
  "nav.board": "TAHTA",
  "nav.results": "SONUÇLAR",
  "nav.rankingsFull": "SIRALAMA",
  "nav.rankingsShort": "SIRA",
  "nav.collectionFull": "KOLEKSİYON",
  "nav.collectionShort": "KARTLAR",
  "nav.profile": "PROFİL",

  // --- Mobile tab bar (RoyaleMobileTabBar.tsx) ----------------------------
  "mobileNav.board": "Tahta",
  "mobileNav.results": "Sonuçlar",
  "mobileNav.ladder": "Sıralama",
  "mobileNav.collection": "Koleksiyon",
  "mobileNav.profile": "Profil",
  // Added alongside the DOCS nav pill (owner 2026-07-24: onboarding faq/docs
  // link) - the phone dock's 6th slot label.
  "mobileNav.docs": "Dokümanlar",

  // --- Board-route shell (NoChainRoyaleLabRoute.tsx) -----------------------
  // The /lab/royale route chrome: the fixed header status cluster, the classic
  // board's KPI rail, the board panel's own region label + phase line, the
  // logged-out invitation, and the phone-only drawer toggles. "attn ROYALE"
  // is a BRAND term and stays verbatim inside these values.
  "shell.route.aria": "attn ROYALE laboratuvarı",
  "shell.header.statusAria": "Tur durumu",
  "shell.header.collapse": "Başlığı gizle",
  "shell.header.expand": "Başlığı göster",
  "shell.header.round": "Tur #{n}",
  "shell.header.turboTitle": "Hızlandırılmış tur süresi",
  "shell.header.turboBadge": "TURBO",
  "shell.metrics.aria": "Tur özeti",
  "shell.metrics.totalPool": "Toplam havuz",
  "shell.metrics.packsLive": "Canlı pack",
  "shell.metrics.yourStake": "Bahsiniz",
  "shell.metrics.selectedBet": "Seçili bahis",
  "shell.board.aria": "attn ROYALE tahtası",
  "shell.board.label": "Tahta",
  "shell.board.phaseOpen": "Desteklemek için herhangi bir kareye tıklayın, bahis en iyi pack yığınına yeniden bölünür",
  "shell.board.phaseLock": "Kilitli · pack'ler açılıyor",
  "shell.board.phaseSettled": "Tur sonuçlandı",
  "shell.board.metaOpen": "{pool} havuz · %3 Kovalamaca'yı besler · pack'ler kilitte açılır",
  "shell.board.metaClosed": "Havuzu, kanıtlanabilir ağırlıklı şansla tek bir kare kazanır.",
  "shell.board.reopenReveal": "↗ Açılışı yeniden aç",
  "shell.connectNudge":
    "Kareleri desteklemeye başlamak için oyuna girin ve bakiye yatırın. Turlar arka planda çalışmaya devam eder.",
  "shell.decision.cardFallback": "kartınız",
  "shell.mobile.close": "Kapat",
  "shell.mobile.chat": "Sohbet",
  "shell.mobile.chatOpenAria": "Masa sohbetini aç",
  "shell.mobile.chatCloseAria": "Masa sohbetini kapat",
  "shell.mobile.cards": "Kartlar",
  "shell.mobile.cardsOpenAria": "Satmak veya çekmek için kartlarınızı açın",
  "shell.mobile.cardsCloseAria": "Kartlarınızı kapatın",
  "shell.mobile.players": "Oyuncular",
  "shell.mobile.playersOpenAria": "Bahse göre sıralanmış oyuncuları aç",
  "shell.mobile.playersCloseAria": "Oyuncuları kapat",

  // --- Runtime modules (plain .ts, not components) -------------------------
  // Copy built by the non-component modules under routes/royale/. Each group
  // is runtime.<module>.<field>. These are resolved INSIDE the function that
  // runs at render/event time, never captured in a module-level const, so a
  // language switch is not frozen at import time.
  //
  // runtime.rail.* : royaleRailCopy.ts (playable-USDC rail + prize modal money
  // copy). "Privy" and "USDC" are BRAND terms and stay verbatim.
  "runtime.rail.gameUsdc": "Oyun USDC'si",
  "runtime.rail.privySessionCredit": "Privy oturum kredisi",
  "runtime.rail.houseCredit": "banka kredisi",
  "runtime.rail.connectPrivy": "Oyun USDC'si eklemek için Privy'yi bağlayın",
  "runtime.rail.privySession": "Privy oturumu",
  "runtime.rail.depositAction": "+{amount} {label} ekle · {source}",
  "runtime.rail.privyAccount": "Privy hesabı",
  "runtime.rail.house": "Banka",
  "runtime.rail.depositReceipt": "Makbuz {id} · {backing} · +{amount} {label}",
  "runtime.rail.selectedChip": "{amount} bahis yapmak için herhangi bir pack'e dokunun. Her kare kendi +{low} / +{high} seçeneklerini de korur.",
  "runtime.rail.sellBack": "Geri sat → +{amount} bakiye",

  // runtime.recap.* : royaleSpectatorRecap.ts (the Round Theatre's spectator
  // gallery: who holds each settled card and what happened to it). "ATTN
  // Protocol" is a BRAND term.
  "runtime.recap.you": "Siz",
  "runtime.recap.topBacker": "En büyük destekçi",
  "runtime.recap.topCardOutcome": "en iyi kart · sakla/sat kararı",
  "runtime.recap.backer": "Destekçi",
  "runtime.recap.cardWon": "kart kazanıldı",
  "runtime.recap.chaseLootReleased": "Kovalamaca ganimeti serbest bırakıldı",
  "runtime.recap.theChase": "Kovalamaca",
  "runtime.recap.sweptIntoVault": "kasaya süpürüldü",
  "runtime.recap.attnProtocol": "ATTN Protocol",
  "runtime.recap.protocolFee": "protokol ücreti",
  "runtime.recap.soldBack": "Geri satıldı",
  "runtime.recap.intoSplit": "+{amount} paylaşıma",

  // runtime.xProfile.* : royaleXProfile.ts (linked X portrait).
  "runtime.xProfile.connectUnavailable": "X bağlantısı henüz kullanılamıyor.",
  "runtime.xProfile.connected": "Bağlandı",

  // runtime.sellBack.* : royaleSellBackApi.ts (custody sell-back client).
  "runtime.sellBack.unknownCard": "Bilinmeyen kart",

  // runtime.winShare.* : royaleWinShareModel.ts (the share card headline + the
  // image-share caption lines). "GRAIL" is the pack TIER brand name and stays
  // English; only "PULL" translates.
  "runtime.winShare.headlineWon": "KAZANILDI",
  "runtime.winShare.headlineGrailPull": "GRAIL ÇEKİLİŞİ",
  "runtime.winShare.headlineCardsWon": "KAZANILAN KARTLAR",
  "runtime.winShare.cardInImage": "Kart görselde.",
  "runtime.winShare.receiptInImage": "Makbuz görselde.",

  // runtime.serverWallet.* : royaleServerWallet.ts (devnet USDC rail).
  "runtime.serverWallet.withdrawalsOffline": "Para çekme işlemleri şu anda çevrimdışı. Hiçbir bakiye hareket etmedi.",
  "runtime.serverWallet.noSigner": "Bu oturum için bağlı bir cüzdan imzalayıcısı yok. Hiçbir bakiye hareket etmedi.",
  "runtime.serverWallet.nonceUnavailable": "Sunucudan para çekme yetkilendirme nonce'u alınamadı.",
  "runtime.serverWallet.signatureUnavailable": "Cüzdan, para çekme nonce'u için bir imza döndürmedi.",
  "runtime.serverWallet.boundaryLabel": "Masa kredileri ile sunucu cüzdanı USDC'si ayrı bakiyelerdir.",

  // runtime.video.* : royaleRoundVideoExport.ts (round replay video export).
  "runtime.video.noScreenCapture": "Bu tarayıcıda ekran kaydı kullanılamıyor.",
  "runtime.video.noRecorderFormat": "Bu tarayıcının MediaRecorder video biçimi yok.",
  "runtime.video.canceled": "İşleme iptal edildi.",
  "runtime.video.unreachable": "{url} adresindeki işleme hizmetine ulaşılamadı.",
  "runtime.video.rejected": "İşleme hizmeti bu turu reddetti: {detail}",
  "runtime.video.requestFailed": "İşleme isteği başarısız oldu ({status}).",
  "runtime.video.noJobId": "İşleme hizmeti bir görev kimliği döndürmedi.",
  "runtime.video.lostJob": "İşleme görevi kayboldu ({status}).",
  "runtime.video.lostContact": "İşleme sırasında işleme hizmetiyle bağlantı kesildi.",
  "runtime.video.renderFailed": "İşleme başarısız oldu: {error}.",
  "runtime.video.unknownError": "bilinmeyen hata",
  "runtime.video.downloadFailed": "Video tamamlandı ancak indirilemedi.",
  "runtime.video.downloadHttpFailed": "Video tamamlandı ancak indirme başarısız oldu ({status}).",
  "runtime.video.emptyVideo": "İşleme hizmeti boş bir video döndürdü.",
  "runtime.video.shareTagline": "Pack savaşı, her çekiliş kanıtlanabilir. Turu izleyin:",

  // runtime.game.* : useRoyaleGame.ts (the sandbox game hook's feed lines and
  // fallback labels). These are pushed into the persisted feed AT EVENT TIME,
  // so an already-written line keeps the language it was written in.
  "runtime.game.roomLive": "Oda canlı. Turlar otomatik başlar - {seconds} sn açık, ardından açılış.",
  "runtime.game.chaseVault": "Kovalamaca kasası",
  "runtime.game.aTile": "bir kare",
  "runtime.game.aPack": "bir pack",
  "runtime.game.theCard": "kart",
  "runtime.game.collectedSplit": "Tur {round} · paylaşımdan {amount} USDC tahsil edildi.",
  "runtime.game.chaseDropSplit": "Tur {round} · Kovalamaca karenize {award} bıraktı · payınız: {amount} USDC.",
  "runtime.game.grailSecured": "Grail güvence altında: {card} ({amount}) koleksiyonunuzda saklandı.",
  "runtime.game.keptCard": "{card} ({amount}) saklandı → koleksiyonunuza eklendi.",
  "runtime.game.soldCardSettle": "{card}, {amount} USDC karşılığında geri satıldı ({value} değerinin %{pct}'si).",
  "runtime.game.roundVoidedRefund":
    "Tur {round} iptal edildi. Hiçbir pack açılmadığı için kart-değeri çekilişi olmadı. {amount} bahsiniz iade edildi.",
  "runtime.game.roundVoidedAll":
    "Tur {round} iptal edildi. Hiçbir pack açılmadığı için kart-değeri çekilişi olmadı. Tüm bahisler iade edildi.",
  "runtime.game.chaseFiredYours.one": "Kovalamaca tetiklendi: {n} kart ({amount}) karenize {tile} bırakıldı.",
  "runtime.game.chaseFiredYours.other": "Kovalamaca tetiklendi: {n} kart ({amount}) karenize {tile} bırakıldı.",
  "runtime.game.chaseFiredTable.one":
    "Kovalamaca Tur {round}'da tetiklendi: {award} + {n} kart {tile} üzerine düştü, destekçileri arasında paylaşıldı.",
  "runtime.game.chaseFiredTable.other":
    "Kovalamaca Tur {round}'da tetiklendi: {award} + {n} kart {tile} üzerine düştü, destekçileri arasında paylaşıldı.",
  "runtime.game.cardsAssigned.one": "{n} kart size atandı ({amount}) → koleksiyon.",
  "runtime.game.cardsAssigned.other": "{n} kart size atandı ({amount}) → koleksiyon.",
  "runtime.game.cardPoolsLive": "Kart havuzları canlı: {pools} CollectorCrypt makine havuzunda {cards} kart.",
  "runtime.game.minBid": "Minimum bahis {amount}. Bahsi yükseltip tekrar deneyin.",
  "runtime.game.resolveFailed": "Bu tur sonuçlandırılamadı, bu yüzden ödeme yapılmadı. Sonraki tur normal başlar.",
  "runtime.game.stakeRefused": "Bu bahis {tile} için fazla büyük. Hiçbir tutar tahsil edilmedi. Düşürüp tekrar deneyin.",
  "runtime.game.shortfallBack":
    "{tile} karesini {amount} ile desteklemek için yeterli USDC yok. Elinizde {held} var. Devam etmek için bakiye ekleyin.",
  "runtime.game.shortfallNextPack":
    "{tile} üzerindeki bir sonraki pack'i tamamlamak için yeterli USDC yok. {amount} gerekiyor, elinizde {held} var. Devam etmek için bakiye ekleyin.",
  "runtime.game.youBacked": "{tile} karesini {amount} ile desteklediniz.",
  "runtime.game.packCompleted": "{tile} üzerindeki bir sonraki pack'i tamamladınız (+{amount}) → {tier}.",
  "runtime.game.soldToFundBid": "Bir bahsi finanse etmek için {cards}, {amount} USDC karşılığında satıldı (CC geri alımı).",
  "runtime.game.backedFunded": "{tile} karesi {amount} ile desteklendi (envanterden finanse edildi).",
  "runtime.game.demoStakesRefunded":
    "Demo bahisleri temizlendi: tıklayarak koyduğunuz {amount} iade edildi. $0'dan başlıyorsunuz.",
  "runtime.game.demoStakesCleared": "Demo bahisleri temizlendi: bir kareyi destekleyene kadar her turu $0'dan başlarsınız.",
  "runtime.game.deposited": "Cüzdanınıza {amount} USDC yatırıldı.",
  "runtime.game.referralBonus": "Referans bonusu yatırıldı: +{amount} USDC.",
  "runtime.game.signedAndSent": "{cluster} üzerinde {amount} USDC imzalandı ve gönderildi · imza {sig}….",
  "runtime.game.signedNoBroadcast":
    "{cluster} üzerinde {amount} USDC imzalandı ({method}, zincire yayınlanmadı) · imza {sig}….",
  "runtime.game.soldCard": "{card}, {amount} USDC karşılığında satıldı (%{pct} geri alım).",
} as Record<string, string>;
