// Turkish (Türkçe): "docs" segment - two surfaces:
//   docs.header/tabs/how/tech.*  -> /lab/royale/docs (RoyaleDocsRoute.tsx),
//                                   the ELI5 + "Technical" onboarding page.
//   docs.howItWorks.*            -> /lab/royale/how-it-works
//                                   (RoyaleHowItWorksRoute.tsx), the long-form
//                                   "how every dollar moves" explainer.
// See royaleI18n.ts's file header for the key-naming and {token}
// interpolation convention, and the no-em-dash / brand-terms-stay-English /
// numbers-stay-$-USD rules that apply to every locale. Same key set as
// en/docs.ts.
//
// Terminology (binding across every tr segment): "destekçi(ler)" = backer(s),
// "en büyük destekçi" = top backer, "havuz" = pool/pot, "jackpot" = the
// Chase's own rolling cash figure (kept distinct from "havuz"), "tur" =
// round, "kare" = tile, "bozukluk" = the loose change sitting on a tile,
// "geri alım" = buyback, "geri satış" = sell back, "banka" = "the house".
//
// "Heat" is RETIRED as a player-facing term (owner directive 2026-07-29). The
// mechanic is described as BOZUKLUK (loose change) in every locale; do not
// reintroduce "Heat", a transliteration of it, or a gloss of it into any
// rendered value. The docs.how.heatRemainder.* KEY names are kept only so
// the locales stay in key parity; key names are never rendered.
//
// BOLD EMPHASIS (docs.howItWorks.* only): the `**bold**` marker pairs are
// kept balanced and moved onto whichever words carry the emphasis in
// Turkish. No source-file/path/module reference is reintroduced anywhere in
// this file (docs.howItWorks.api.contact's {path}/{email} tokens are the
// component's own literal values, never translated text).
export default {
  "docs.header.title": "Dokümanlar",
  "docs.header.back": "← Tahtaya dön",

  "docs.tabs.ariaLabel": "Dokümanlar görünümü",
  "docs.tabs.how": "Nasıl çalışır",
  "docs.tabs.technical": "Teknik",

  "docs.how.intro": "Sade dilde anlatım. Önce bunu okuyun, tam mekanikler için Teknik sekmesine geçin.",
  "docs.technical.intro": "Tam mekanikler, sade sayılarla.",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "attn ROYALE nedir?",
  "docs.how.whatIsRoyale.a":
    "Canlı bir pack açma oyunu. Her turda oyuncular kareleri pack ile destekler. Tur kilitlenince, desteklenen her kare pack'lerini canlı olarak açar ve bir karenin destekçileri tüm havuzu paylaşır.",

  "docs.how.whatIsPack.q": "Pack nedir?",
  "docs.how.whatIsPack.a":
    "Karesi açıldığı anda gerçek bir dereceli karta dönüşen fiyatlı bir katman. Merdiven şöyle ilerler: {starter}, {elite}, {legendary}, {grail} ve {mythic}. Büyük pack'ler daha büyük kartlar çeker.",

  "docs.how.howBacking.q": "Bir kareyi desteklemek nasıl çalışır?",
  "docs.how.howBacking.a":
    "Beğendiğiniz bir kareyi seçin ve üzerine pack bahis edin. Aynı karede başka oyuncularla birlikte bahis yaparsanız onu paylaşırsınız: o karenin kazancından payınız, kişisel olarak eklediğiniz pack payıyla eşleşir.",

  "docs.how.heatRemainder.q": "Bahsim bütün bir pack'e denk gelmezse ne olur?",
  "docs.how.heatRemainder.a":
    "En ucuz pack fiyatının altındaki her şey karede bozukluk olarak kalır. Bahsinizin geri kalanıyla birlikte taşınır, ama bütün bir pack'e dönüşene kadar kendi başına kart açmaz, şansı belirleyen ise açılan kartlardır.",

  "docs.how.howWheelPicks.q": "Çark kazananı nasıl seçer?",
  "docs.how.howWheelPicks.a":
    "Kilitte, desteklenen her kare pack'lerini canlı olarak açar. Çark ardından bir karenin üzerine düşer; o karenin açılan kartları ne kadar zenginse, çarktaki payı da o kadar büyük olur. Tek bir büyük çekiliş küçük bir kareyi favori yapabilir. Seçimin kendisi kanıtlanabilir rastgele bir çekilişten gelir, asla bir kişiden değil.",

  "docs.how.whatDoIWin.q": "Ne kazanırım?",
  "docs.how.whatDoIWin.aBefore": "Kazanan karenin destekçileri",
  "docs.how.whatDoIWin.aEmphasis": "turun tüm havuzunu",
  "docs.how.whatDoIWin.aAfter":
    " paylaşır, yalnızca o karenin bahislerini değil, her birinizin üzerine koyduğu bahisle orantılı olarak. Karenin en büyük destekçisi ayrıca karenin en iyi tek kartında ilk hak sahibi olur.",

  // NOTE: "Keep" / "Sell back" duplicate the card-decision action labels
  // used elsewhere in the app (the keep-or-sell decision window, owned by a
  // different segment). Kept here as their own keys per the epic's "if a
  // shared string is genuinely cross-segment, put it in your segment and
  // note it for dedup" rule - flag for a later cross-segment dedup pass.
  "docs.how.keepOrSell.q": "Sakla mı sat mı, fark nedir?",
  "docs.how.keepOrSell.keepLabel": "Sakla",
  "docs.how.keepOrSell.keepBody": "kartı ücretsiz olarak koleksiyonunuza ekler.",
  "docs.how.keepOrSell.sellLabel": "Geri sat",
  "docs.how.keepOrSell.sellBody": "kartın değerinden bir payı beklemeden doğrudan bakiyenize USDC olarak öder.",

  "docs.how.decisionTimeout.q": "Zamanında karar vermezsem ne olur?",
  "docs.how.decisionTimeout.a":
    "Seçim yapmak için kısa bir süreniz olur. Süre geçerse kart geçerli oranından otomatik olarak geri satılır, böylece kazandığınız hiçbir şey takılı kalmaz.",

  "docs.how.whatIsChase.q": "Kovalamaca nedir?",
  "docs.how.whatIsChase.a":
    "Her turun havuzundan küçük bir payla beslenen, katlanarak büyüyen bir jackpot. Herhangi bir turda, kendi bağımsız çekilişiyle tetiklenebilir ve bir grail çekilişi onu tetiklemez. Tetiklendiğinde, jackpot'un tamamı o turun kazanan paylaşımına ödenir.",

  "docs.how.howToStartFree.q": "Ücretsiz nasıl başlarım?",
  "docs.how.howToStartFree.a":
    "Bir davet koduyla katılın ve ücretsiz bir Starter pack büyüklüğünde bakiye alın. Cüzdan veya giriş gerekmez, doğrudan misafir olarak başlayabilirsiniz.",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "Pack merdiveni",
  "docs.tech.packLadder.body":
    "Satın alabileceğiniz beş pack: {starter}, {elite}, {legendary}, {grail}, {mythic}. Bir bahis, karşılayabildiği en büyük pack'lerden başlayarak oluşur. En ucuz pack fiyatının altında kalan her şey karede bozukluk olarak kalır ve kendi başına kart açmaz. Belirli bir pack olarak yerleştirilen bir bahis tam olarak o pack olarak kalır, yalnızca bozukluk daha fazla eklendikçe yukarı doğru büyür.",

  "docs.tech.oddsWeighting.title": "Şansı ne belirler: bir karenin açtığı kartlar",
  "docs.tech.oddsWeighting.body":
    "Bir karenin kazanma şansı, üzerine yatırılan bahis değildir. Kilitte, finanse edilmiş her kare pack'lerini açar ve bir karenin çekilişteki payı, o tur açılan tüm kartların değerine karşı, az önce açtığı kartların değeridir. Tek bir büyük çekiliş küçük bir kareyi favori yapar. Hiçbir kart açmayan bir karenin hiçbir şansı yoktur ve bozukluk tek başına asla kart açmaz. Bütün bir tur hiçbir kart açmazsa, çekilecek bir şey yoktur: tur iptal edilir ve her bahis tam olarak iade edilir.",

  "docs.tech.vrfDraw.title": "Kazanan çekilişi VRF tohumlu ve deterministiktir",
  "docs.tech.vrfDraw.body":
    "Her tur, sabit bir tarifeden kanıtlanabilir rastgele bir sayı türetir: tur kimliği, son teslim tarihi, dondurulmuş tahta, bilet sayısı ve kilitten sonra alınan zincir entropisi. Kazanan kare, bu sayının kare ağırlıkları üzerinde tek bir deterministik yürüyüşüdür. Aynı girdiler her zaman aynı kazananı üretir, kare ağırlıkları yürüyüş gerçekleşmeden önce yayımlanır ve kilitlenir, ve herkes daha sonra turun makbuzundan tüm çekilişi yeniden denetleyebilir.",

  "docs.tech.settlementMath.title": "Sonuçlanma matematiği",
  "docs.tech.settlementMath.body":
    "Kazanan karenin destekçileri, yalnızca kendi karelerinin bahislerini değil, o karede her birinin bahsettiği tutarla orantılı olarak turun tüm havuzunu paylaşır. En üstten {take} oranında bir banka payı alınır: {chaseCut} Kovalamaca jackpot'unu büyütür, {protocolCut} protokolü finanse eder. Bu pay mümkün olduğunca kartlarla ödenir, önce en ucuz fazla kart, ve payı karşılamak için çok değerli bir kart satılmak yerine atlanır, böylece büyük çekilişler alınmaz. Yalnızca kartların karşılayamadığı kısım havuzun nakdinden çıkar.",

  "docs.tech.cardAllocation.title": "Kartları kim alır",
  "docs.tech.cardAllocation.body":
    "Yalnızca kazanan karenin en iyi tek kartı sakla-veya-sat kararı taşır ve bu karenin en büyük destekçisine aittir. O karenin açtığı diğer tüm kartlar, her birinin bahsettiği tutarla orantılı olarak, en iyi kartlar önce olmak üzere destekçileri arasında paylaştırılır. Birini almak, geri satış fiyatını kendi nakit payınızdan düşer, bu yüzden bu bir maliyet değil bir takastır: turu her iki durumda da aynı değeri tutarak bitirirsiniz. Hiç kimsenin payı bir kartı karşılayamıyorsa, banka onu satın alır ve o nakit paylaşımın içinde kalır, bu yüzden bir kart hiç kimseye zorla verilmez. Aynı turdaki ikinci bir grail burada özel muamele görmez, ganimetin geri kalanıyla birlikte paylaştırılır ve Kovalamaca asla bir grail almaz.",

  "docs.tech.sellBackRates.title": "Geri satış oranları",
  "docs.tech.sellBackRates.body":
    "Her kart, çıktığı pack'in belirlediği kalıcı bir geri satış fiyatı taşır: giriş basamağında {entryRate}, orta basamaklarda {midRate}, en üstte {topRate}. Satmak bu fiyatı anında bakiyenize öder, kartı saklamak ise hiçbir şeye mal olmaz. Oranlar, CollectorCrypt'teki aynı makineler için yayımlanan anlık geri alım oranlarını yansıtır.",

  "docs.tech.chaseJackpot.title": "Kovalamaca jackpot'u",
  "docs.tech.chaseJackpot.body":
    "Her turun havuzunun {chaseCut} ile beslenen, katlanarak büyüyen bir jackpot. Kendi bağımsız çekilişiyle, normal tur hızında ortalama haftada bir kez tetiklenir ve bir grail çekilişi onu tetiklemez. Tetiklendiğinde, jackpot'un tamamı o turun kazanan paylaşımına ödenir, ardından sıfırlanır ve yeniden birikmeye başlar. Kovalamaca ayrıca, yapabildiğinde tur başına bir kart alır, ama yalnızca kaybeden bir kareden, asla turun en değerli kartını ve asla bir grail'i almaz.",

  "docs.tech.decisionWindow.title": "Karar penceresi",
  "docs.tech.decisionWindow.body":
    "Karenin en iyi kartını kazanmak, {window} saniyelik bir sakla-veya-sat penceresi açar. Kapanana kadar veya sıradaki turun kilidine kadar yanıt verilmezse, kart geçerli oranından satılır, böylece kazandığınız hiçbir şey takılı kalmaz.",

  "docs.tech.devnetCustody.title": "Devnet USDC emaneti",
  "docs.tech.devnetCustody.body":
    "Bakiyeler, Solana devnet üzerinde gerçek USDC işlemleri olarak hareket eder. Emanet, Privy gömülü cüzdanınız üzerinden veya yedek olarak kendi tarayıcınızda tutulan yalnızca devnet'e özel bir anahtar çifti üzerinden işler, ikisi de üretim emanetinin kullandığı tam olarak aynı transfer yolunu imzalar.",

  // --- Technical: lifecycle cards (2026-07-29 restructure) -----------------
  "docs.tech.voidRefund.title": "İptal ve iade",
  "docs.tech.voidRefund.body":
    "Bir tur yalnızca açılan kartlarla kazanılabilir, bu yüzden hiçbir karenin kart açmadığı bir turda çekilecek bir şey yoktur. O tur anında iptal edilir: tahtadaki her bahis tam olarak geri döner, banka hiçbir şey almaz ve Kovalamaca hiçbir şeyle beslenmez. İptal edilen bir turun yayımlanan çekiliş kaydı sıfır kart toplamı gösterir, bu, iptalin tahta tarafından zorlandığının ve kimse tarafından seçilmediğinin kanıtıdır.",

  "docs.tech.cardExits.title": "Kazanılan kartlar cüzdanınıza gider",
  "docs.tech.cardExits.body":
    "Bir kartı saklarsanız, ağ ücretleri sizin yerinize ödenerek imzalı bir işlemle kendi cüzdanınıza aktarılır. Cüzdanınız onu henüz alamıyorsa, teslimat beklemeye alınır ve ulaşana kadar tekrar denenir, asla düşürülmez. Bir kartı geri satarsanız, onu kazandığınız anda belirlenen tam fiyat ödenir, asla yeniden fiyatlandırılmaz, ve o teklif yalnızca bir kez kullanılabilir: para hareket etmeden önce harcanmış olarak işaretlenir, böylece aynı kart asla iki kez ödenmez.",

  "docs.tech.deposits.title": "USDC yatırma işlemleri",
  "docs.tech.deposits.body":
    "Yatırma işlemi, kendi cüzdanınızdan imzaladığınız bir Solana USDC transferidir. Bakiyeniz, ancak bu transfer zincir üzerinde oyunun hazinesine onaylandıktan sonra, tutar ve hedef zincirin kendisinden okunarak (asla istekten değil) yatırılır. Her işlem imzası tam olarak bir kez yatırılabilir, bu yüzden bir yatırma işlemini tekrarlamak iki kez yatırım yapamaz, ve işlem başına tavanın üzerinde gelen bir transfer, kaybolmak yerine size borçlu olarak kaydedilir.",

  "docs.tech.withdrawals.title": "USDC çekme işlemleri",
  "docs.tech.withdrawals.body":
    "Bir çekme işlemi önce bakiyenizden düşer, ardından USDC'yi hazineden onayladığınız hedefe gönderir: doğrulanmış girişiniz tam olarak o tutarı ve hedefi onaylar, ve kanıtıyla eşleşmeyen bir istek reddedilir. Makbuz, işlem imzasını saklar. Zincir transferi kesin olarak reddederse, bakiyeniz tam olarak bir kez iade edilir. Transfer gönderildi ama henüz onaylanmadıysa, zincir kesin bir yanıt verene kadar hiçbir şey iade edilmez, böylece bir çekme işlemi, yeniden başlatma sonrasında bile asla iki kez ödeme yapamaz.",

  "docs.tech.identity.title": "Nasıl giriş yaparsanız yapın, tek bir hesap",
  "docs.tech.identity.body":
    "Privy ile giriş yapın ya da tek seferlik bir sunucu doğrulamasını imzalayarak bir Solana cüzdanını kanıtlayın: her iki yol da aynı kalıcı hesaba çıkar, yalnızca doğrulanmış kimlikle anahtarlanır. Parayı hareket ettiren her şey, o isteğin tam olarak kendini kanıtladığı kimliğin hesabında çalışır, ve iddia edilen isimler, kimlikler ve başlıklar göz ardı edilir, böylece kimse bir yatırımı, bahsi veya çekme işlemini başka birinin bakiyesine yönlendiremez.",

  "docs.tech.reconnect.title": "Yeniden bağlanma ve yeniden başlatma",
  "docs.tech.reconnect.body":
    "Çıkış yapın, para durur: USDC hatlarında, mülkiyet kanıtı olmayan bir yatırım, bahis veya çekme işlemi reddedilir. Tekrar giriş yapın, aynı hesap aynı bakiye ve aynı kartlarla sizi bekliyor olur, çünkü sahip olduğunuz her şey sayfada değil kalıcı bir defterde yaşar. Bir sunucu yeniden başlatması bu defteri yeniden oynatır ve aynı sayılara ulaşır, ve zaten gönderilmiş bir transfer asla ikinci kez gönderilmez.",

  // --- Docs navigation (2026-07-29 restructure) ----------------------------
  "docs.nav.ariaLabel": "Dokümanlar bölümleri",
  "docs.nav.overview": "Genel bakış",
  "docs.nav.prev": "Önceki",
  "docs.nav.next": "Sonraki",

  "docs.nav.section.introduction": "Giriş",
  "docs.nav.section.gameplay": "Oynanış",
  "docs.nav.section.cards": "Kartlar ve emanet",
  "docs.nav.section.money": "Para",
  "docs.nav.section.fairness": "Adillik",
  "docs.nav.section.account": "Hesap",

  "docs.nav.page.whatIsRoyale": "attn ROYALE nedir",
  "docs.nav.page.packs": "Pack'ler ve merdiven",
  "docs.nav.page.startFree": "Ücretsiz başlayın",
  "docs.nav.page.backing": "Bir kareyi destekleme",
  "docs.nav.page.theDraw": "Çekiliş",
  "docs.nav.page.winning": "Ne kazanırsınız",
  "docs.nav.page.chase": "Kovalamaca",
  "docs.nav.page.keepOrSell": "Sakla veya sat",
  "docs.nav.page.cardAllocation": "Kartları kim alır",
  "docs.nav.page.sellBack": "Geri satış oranları",
  "docs.nav.page.cardDelivery": "Kart teslimatı",
  "docs.nav.page.deposits": "Yatırma işlemleri",
  "docs.nav.page.withdrawals": "Çekme işlemleri",
  "docs.nav.page.settlement": "Sonuçlanma matematiği",
  "docs.nav.page.custody": "USDC emaneti",
  "docs.nav.page.odds": "Şansı ne belirler",
  "docs.nav.page.vrf": "VRF çekilişi",
  "docs.nav.page.voidRefund": "İptal ve iade",
  "docs.nav.page.identity": "Tek hesap",
  "docs.nav.page.reconnect": "Yeniden bağlanma ve yeniden başlatma",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // The long-form rules explainer. Section titles below are rendered after a
  // hardcoded "1 · " numeral prefix, so the numbering never enters a value.
  // Remember the `**bold**` convention documented in the file header.
  // =========================================================================

  // --- RoyaleHowItWorksRoute.tsx: page header ------------------------------
  "docs.howItWorks.title": "attn ROYALE, her dolar nasıl hareket eder",
  "docs.howItWorks.lead": "Oyunun tam kuralları. Kazananın nasıl çekildiği ve kartları kimin aldığı.",
  "docs.howItWorks.backToBoard": "Tahtaya dön →",

  // --- RoyaleHowItWorksRoute.tsx: 1 · How a round works --------------------
  "docs.howItWorks.round.title": "Bir tur nasıl çalışır",
  "docs.howItWorks.round.pickBet":
    "Bir bahis miktarı seçin, ardından bir kareye tıklayın: her tıklama o tutarı karenin havuzuna ekler.",
  "docs.howItWorks.round.yourShare":
    "Bir karedeki **payınız** = bahsiniz ÷ o karenin toplamı. {tile} karesine {stake} koymak **{pct}**'lik bir paydır. O kare kazanırsa, ödemesinin {pct}'ini alırsınız.",
  "docs.howItWorks.round.winChance":
    "**Kazanma şansı** bahiste değil, açılışta belirlenir: tur kilitlenince, desteklenen her kare pack'lerini açar ve bir karenin çarktaki payı, o tur açılan tüm kartlara karşı, az önce açtığı kartların değeridir.",
  "docs.howItWorks.round.tickets":
    "**Hiçbir kart** açmayan bir karenin hiçbir payı yoktur, ve bütün bir tur hiçbir kart açmazsa, tur **iptal edilir** ve her bahis tam olarak geri döner.",
  "docs.howItWorks.round.vrf":
    "Kilitte, bir **VRF** (kanıtlanabilir rastgele fonksiyon), turun kilitlenmiş sayılarından tek bir kazanan bilet çeker: tur kimliği, son teslim tarihi, her karenin toplamı, bilet sayısı. Hiç kimse, banka bile, onu yönlendiremez.",
  "docs.howItWorks.round.oddsAreReal": "Her karede gösterilen şans, tam olarak bu çekiliş matematiğidir, bir his değil.",

  // --- RoyaleHowItWorksRoute.tsx: 2 · What your bet buys -------------------
  "docs.howItWorks.buys.title": "Bahsiniz ne satın alır",
  "docs.howItWorks.buys.ladderLead": "Bir karenin toplamı, en büyükten başlayarak pack'lere yeniden bölünür:",
  "docs.howItWorks.buys.example":
    "Örnek: **{amount}**'lık bir kare bir Legendary, bir Elite ve bir Starter satın alır.",
  "docs.howItWorks.buys.change":
    "Sıradaki pack için çok küçük olan para **bozukluktur**: yine de havuza ve kazançtaki payınıza sayılır, ama hiçbir pack açmaz, şansı belirleyen ise açılan kartlardır.",
  "docs.howItWorks.buys.mythicUpgrade":
    "Zaten bir Mythic mi tutuyorsunuz? Yükseltme düğmesi, daha küçük bir pack yerine **başka bir bütün Mythic**'i hedefler. Merdiven asla geriye adım atmaz.",
  "docs.howItWorks.buys.cardsPerPack":
    "Kilitte, finanse edilmiş her kare tuttuğu **her bütün pack için bir kart** açar, tahtada gösterilen en fazla **{max} kart**'a kadar (kalanı sonuçlar sayfasında listelenir). Yalnızca bozukluk tutan bir kare hiçbir şey açmaz.",
  "docs.howItWorks.buys.undeliverable":
    "Bir pack gerçekten teslim edilemezse (stok tükendi, teknik aksaklık, süre doldu), maliyeti takılı kalmak yerine size nakit olarak geri döner.",

  // --- RoyaleHowItWorksRoute.tsx: 3 · What the winner gets -----------------
  "docs.howItWorks.winner.title": "Kazanan ne alır",
  "docs.howItWorks.winner.entirePool":
    "Kazanan karenin destekçileri, yalnızca o karenin kendi havuzunu değil, **turun tüm havuzunu** paylaşır.",
  "docs.howItWorks.winner.proRata":
    "Paylaşım **orantılıdır**: karenin {pct}'ini koyarsanız, ödemenin **{pct}**'ini alırsınız.",
  "docs.howItWorks.winner.take":
    "Her havuzun **{take}**'i paylaşımdan önce en üstten alınır: **{chaseCut}** Kovalamaca jackpot'unu besler, **{protocolCut}** protokolü finanse eder (davetler, Kovalamaca kart alımları, operasyonlar, token geri alımları).",
  "docs.howItWorks.winner.takeFunding":
    "Bu {take}, mümkün olduğunca kartlarla ödenir, önce en ucuz fazla kart, ve payı karşılamak için çok değerli bir kart satılmak yerine atlanır, böylece büyük çekilişler alınmaz. Yalnızca kartların karşılayamadığı kısım havuzun nakdinden çıkar.",

  // --- RoyaleHowItWorksRoute.tsx: 4 · The Chase ----------------------------
  "docs.howItWorks.chase.title": "Kovalamaca",
  "docs.howItWorks.chase.feed": "Kovalamaca, her havuzun **{cut}**'i ile beslenen, katlanarak büyüyen bir jackpot'tur.",
  "docs.howItWorks.chase.cardCut":
    "Yapabildiğinde, Kovalamaca payını nakit yerine kart olarak alır, ama yalnızca havuzun **{cut}**'inden fazla olmayan, kaybeden bir karenin kartını, asla turun en değerli tek kartını ve asla bir grail'i almaz.",
  "docs.howItWorks.chase.independentDraw":
    "Jackpot, kendi **bağımsız rastgele çekilişiyle** tetiklenir, tipik tur hızında ortalama **haftada bir kez**. Bir grail çekilişi onu tetiklemez.",
  "docs.howItWorks.chase.payout":
    "Tetiklendiğinde, **jackpot'un tamamı** o turun kazanan paylaşımına ödenir, ardından sıfırlanır ve sıradaki turun beslemesinden yeniden birikir.",

  // --- RoyaleHowItWorksRoute.tsx: 5 · Grails -------------------------------
  "docs.howItWorks.grails.title": "Grail'ler",
  "docs.howItWorks.grails.what":
    "Bir **grail**, herhangi bir pack'in düşürebileceği en nadir, en değerli çekiliştir. {price}'lık bir Starter bile birini vurabilir.",
  "docs.howItWorks.grails.headlineGrail":
    "Kazanan karenin kendi en iyi kartı bir grail ise: **Sakla**, en büyük destekçinin karenin diğer destekçilerinin payını satın almasını gerektirir (nakitlerinden düşülür); **Sat**, ödemeyi yalnızca en büyük destekçiye değil, **tüm kare genelinde orantılı olarak** paylaştırır.",
  "docs.howItWorks.grails.otherGrails":
    "O tur çekilen başka bir grail (farklı bir karede veya ekstra bir kart olarak) kazanan destekçiler için bonus ganimettir, tıpkı başka herhangi bir ekstra kart gibi işlem görür. Asla Kovalamaca'ya süpürülmez ve pay önce en ucuz kartla ödendiği için, bir grail'e asla uzanılmayacak son karttır.",

  // --- RoyaleHowItWorksRoute.tsx: 6 · Who gets the cards -------------------
  "docs.howItWorks.cards.title": "Kartları kim alır",
  "docs.howItWorks.cards.headline":
    "Kazanan karenin **en iyi kartı** (en yüksek değerli tek çekilişi) yalnızca karenin en büyük destekçisine aittir: onu ücretsiz Saklar ya da geri alım oranından nakit olarak Satar, kendisine ödenir, karenin geri kalanıyla paylaşılmaz.",
  "docs.howItWorks.cards.rest":
    "Karenin çektiği diğer tüm kartlar, artı kaybeden karelerden devredilen bonus ganimet, bahisle orantılı olarak, önce en büyük değer olmak üzere paylaştırılır. Karenin en büyük destekçisi genellikle bunların en çoğuna ve en iyisine sahip olur.",
  "docs.howItWorks.cards.deduction":
    "Bu kartlardan birini almak, geri alım fiyatını kendi nakit payınızdan düşer. Bu, onu satarak alacağınız aynı nakittir, bu yüzden hiçbir şey kaybetmezsiniz.",
  "docs.howItWorks.cards.neverForced":
    "Birini karşılayamıyor musunuz? Asla size zorla verilmez. Bunun yerine banka onu satın alır ve o nakit paylaşımın içinde kalır.",
  "docs.howItWorks.cards.workedExample":
    "**Uygulamalı örnek.** Havuz {pool}. **{take}** ({takeAmount}: {chaseAmount} Kovalamaca, {protocolAmount} protokol) en üstten alınır, genellikle nakdiniz yerine fazla bir kartla ödenir. Paylaşılacak **{split}** kalır: karenin {yourPct}'ini siz bahis ettiniz ({yourStake}), Sam {samPct} bahis etti ({samStake}). Kare, bir {headline} en iyi kart (bir Legendary pack, **{buyback}** geri alım) ve bir {extra} ekstra kart çekti. {headline} kartını ücretsiz saklarsınız, her halükarda sizindir. {extra} kartı Sam'e gider: değerinin **{buyback}**'i, yani **{samCash}**, Sam'in payından çıkar. Sonuç: siz **{yourStake} nakit + {headline} kartı** ile ayrılırsınız; Sam **{samCash} nakit + {extra} kartı** alır.",

  // --- RoyaleHowItWorksRoute.tsx: 7 · Keep or sell -------------------------
  "docs.howItWorks.keepSell.title": "Sakla veya sat",
  "docs.howItWorks.keepSell.buttons":
    "Aldığınız her kart iki düğmeyle gelir: **Sakla**, dereceli kartı koleksiyonunuza koyar; **Sat**, pack'in geri alım oranını USDC olarak doğrudan bakiyenize öder.",
  "docs.howItWorks.keepSell.usdc": "USDC dijital bir dolardır: **{rate}**.",
  "docs.howItWorks.keepSell.rates":
    "Geri alım, kartın kendi pack'i tarafından belirlenir: Starter/Elite için **{entryRate}**, Legendary için **{midRate}**, Grail ve üzeri için **{topRate}**.",
  "docs.howItWorks.keepSell.window":
    "Kazandığınız anda **{seconds} saniyelik** bir pencereniz olur, ve karar vermezseniz sıradaki tura taşınır: tahtanın altında ve Kartlarınız'da canlı kalır.",
  "docs.howItWorks.keepSell.autoSell":
    "Sıradaki tur kilitlendiğinde hâlâ karar vermediniz mi? Kart o zaman geri alım oranından **otomatik satılır**. Para asla takılı kalmaz.",

  // --- RoyaleHowItWorksRoute.tsx: 8 · Glossary -----------------------------
  "docs.howItWorks.glossary.title": "Sözlük",
  "docs.howItWorks.glossary.change":
    "**Bozukluk**: karede sıradaki pack'i satın almak için çok küçük olan para. Havuza ve kazançtaki payınıza sayılır, ama yalnızca açılan kartlar kazanma şansı taşır.",
  "docs.howItWorks.glossary.house":
    "**Banka**: kart geri alımlarını finanse eden ve kimsenin karşılayamadığı her kartı üstlenen kasa.",
  "docs.howItWorks.glossary.chase":
    "**Kovalamaca**: her havuzun {cut}'i ile beslenen, katlanarak büyüyen bir jackpot; belirli bir kart sonucunda değil, kendi bağımsız çekilişiyle tetiklenir.",
  "docs.howItWorks.glossary.grail": "**Grail**: herhangi bir pack'in düşürebileceği en nadir, en değerli kart.",
  "docs.howItWorks.glossary.buyback":
    "**Geri alım**: pack katmanına göre, bir kartı değerinin {low} ila {high} karşılığında nakde çevirme teklifi.",
  "docs.howItWorks.glossary.proRata": "**Orantılı**: her kişinin koyduğu tutarla orantılı olarak paylaşılır.",
  "docs.howItWorks.glossary.vrf": "**VRF**: herkesin sonradan doğrulayabileceği rastgele bir çekiliş.",

  // --- RoyaleHowItWorksRoute.tsx: 9 · Betting API --------------------------
  // "{path}" is a repo file path and "{email}" a mailto address: both are
  // rendered by the component (a <code>-style chip and a link) and stay
  // untranslated, exactly like the "docs.tech.*.source" citations above.
  "docs.howItWorks.api.title": "Bahis API'si (kapalı erişim)",
  "docs.howItWorks.api.what":
    "Canlı bir turu okumak, olay akışına abone olmak ve koddan veya bir ajandan bahis yerleştirmek için programlanabilir bir API. Tahtayla aynı şans ve sonuçlanmayı çalıştırır.",
  "docs.howItWorks.api.access":
    "Erişim **kapalıdır** ve yalnızca talep üzerinedir: varsayılan olarak devre dışıdır ve her çağrı izin listesine alınmış bir API anahtarı gerektirir.",
  "docs.howItWorks.api.realBets":
    "Gerçek bir bahis yerleştirmek bir kontrol daha gerektirir: gerçekten siz olduğunuzun kanıtı (siteyle aynı giriş) ve her oyuncunun sahip olduğu aynı bahis sınırlarını izler.",
  "docs.howItWorks.api.contact": "{path} adresindeki geliştirici dokümanına bakın ve bir anahtar talep etmek için {email} adresine e-posta gönderin.",
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
