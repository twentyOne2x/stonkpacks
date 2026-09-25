// Turkish (Türkçe): "chat" segment. Same key set as en/chat.ts. See
// royaleI18n.ts's file header for the key-naming and {token} interpolation
// convention, and the no-em-dash / brand-terms-stay-English rules that
// apply to every locale.
//
// Terminology notes: "pull" (the card a pack opening reveals) renders as
// "çekiliş", matching every other segment. "pot"/"Chase" follow the same
// choices as the arena/core segments ("havuz" / "Kovalamaca"). "attn" is
// the product's own lowercase brand name and is never translated. "snipe"
// is kept as the established loanword (see arena.ts's note). Register is
// FORMAL throughout ("Siz").
//
// LOCALE-FROZEN NOTE: chat messages (ambient bot lines + table-event rows)
// are composed ONCE at post time and stored as plain strings. Switching the
// UI language mid session translates all NEW chat activity but never
// rewrites messages already sitting in the feed/history - same as any other
// historical log. This is expected, not a bug.
//
// "Mythic" in chat.chatter.line17 is a PACK TIER brand name (owner hard
// rule: stays English in every locale) - left untranslated below.
export default {
  "chat.rooms.table": "Masa",
  "chat.rooms.sendTo": "Şuraya gönder",
  "chat.rooms.joinHint": "Odasını açmak için bir kareye bahis yap.",
  "chat.rooms.messageTargets": "Mesaj odaları",
  "chat.composer.sendFailed": "Mesaj gönderilemedi. Tekrar deneyin.",
  "chat.composer.audienceChanged": "Oda değişti. Gönderilmemiş mesajınız temizlendi.",
  "chat.composer.sessionUnavailable": "Sohbet oturumu kullanılamıyor. Yenileyip tekrar deneyin.",
  "chat.auth.tileLeadBold": "Sohbet etmek için bir kareye bahis yapın",
  "chat.auth.tileBody": ". Masa ve kare odaları ilk kabul edilen pack'inizden sonra açılır.",
  "chat.auth.sessionUnavailableBold": "Sohbet oturumu kullanılamıyor",
  "chat.auth.sessionUnavailableBody": ". Güvenli göndermeyi geri yüklemek için yenileyin.",
  // --- Header ----------------------------------------------------------
  "chat.header.ariaLabel": "Masa sohbeti",
  "chat.header.title": "Masa sohbeti",
  "chat.header.fontControlAriaLabel": "Sohbet yazı boyutu",
  "chat.header.fontSmaller": "Sohbet yazı boyutunu küçült",
  "chat.header.fontLarger": "Sohbet yazı boyutunu büyüt",
  "chat.header.collapseShow": "Sohbeti göster",
  "chat.header.collapseHide": "Sohbeti gizle",

  // --- Feed: table-event rows (grail pulls / round settles) ------------
  "chat.event.grailTag": "GRAIL ÇEKİLİŞİ",
  "chat.event.grailTitle": "{name} · {value}",
  "chat.event.grailDetail": "{grade} · {valueTier} · {tile}",
  "chat.event.roundTag": "TUR #{roundId}",
  "chat.event.ariaOpensResult": "{tag}: {text}. Tur sonucunu yeni sekmede açar.",
  // JSX composition: "kazanan" (prefix, own key so the interactive name
  // popover can be inserted right after it) vs. the flat-text `{name}`
  // template used for chatMessageForEvent's plain-string fallback (aria
  // labels / persisted history / tests).
  "chat.event.wonByPrefix": "kazanan",
  "chat.event.wonBy": "kazanan {name}",
  "chat.event.foldedIntoPot": "havuza katıldı",
  "chat.event.roundWinsTitle": "{tile} {pot} kazanıyor",
  "chat.event.bestPull": "en iyi çekiliş {name} ({value})",
  "chat.event.chaseAward": "Kovalamaca +{amount}",
  "chat.event.youWon": "siz +{amount}",
  "chat.event.youLost": "kaybettiniz",
  "chat.message.showOriginal": "çevrildi · orijinali göster",
  "chat.message.showTranslation": "çeviriyi göster",

  // --- Feed: jump-to-latest pill -----------------------------------------
  "chat.list.jump": "En yeniye git",

  // --- Composer ----------------------------------------------------------
  "chat.composer.linkNotice": "Burada yalnızca attn bağlantıları görüntülenir.",
  "chat.composer.rateLimitNotice": "Biraz hızlı gönderiyorsunuz. Birazdan tekrar deneyin.",
  "chat.composer.placeholder": "Bir şeyler yazın…",
  "chat.composer.inputAriaLabel": "Sohbet mesajı",
  "chat.composer.sendAriaLabel": "Mesajı gönder",
  "chat.composer.sendLabel": "Gönder",

  // --- Signed-out note -----------------------------------------------------
  "chat.auth.leadBold": "Sohbet etmek için giriş yapın",
  "chat.auth.body": ", bağlanana kadar oda salt okunurdur (sağ üstte).",

  // --- RoyaleChatMessageBody: card-embed + inline platform links ---------
  "chat.messageBody.cardEmbedTitle": "Kart sayfasını yeni sekmede açar",
  "chat.messageBody.cardEmbedAriaLabel": "{name}, {value}. Kart sayfasını arka plan sekmesinde açar.",
  "chat.messageBody.viewCard": "Kartı gör",

  // --- royaleChatLinks.ts: chatPlatformLinkLabel anchor text --------------
  "chat.link.cardPage": "Kart sayfası",
  "chat.link.roundResult": "Tur sonucu",
  "chat.link.profile": "Profil",
  "chat.link.collection": "Koleksiyon",
  "chat.link.theBoard": "Tahta",

  // --- royaleChatModel.ts: ambient table-talk pool (24 lines) -------------
  "chat.chatter.line01": "3 numaralı kare hızla doluyor",
  "chat.chatter.line02": "her tur lideri kim snipe'lıyor",
  "chat.chatter.line03": "geçen turdaki grail çekilişi inanılmazdı",
  "chat.chatter.line04": "kolay kazanç, herkes lidere yığılsın",
  "chat.chatter.line05": "yeni 7 numaralı kare bana ucuz görünüyor",
  "chat.chatter.line06": "pack'lerimi son beş saniyeye saklıyorum",
  "chat.chatter.line07": "biri az önce 2 numaralı kareye $250 koydu, saygılar",
  "chat.chatter.line08": "6 numaralı karedeki havuz payı artık çok pahalı",
  "chat.chatter.line09": "bir pack daha ve o kare daha zengin bir katmana geçer",
  "chat.chatter.line10": "sniper'lar yine şansımı mahvediyor",
  "chat.chatter.line11": "hep taban kart çekiyorum, büyük bir çekiliş yaklaşıyor",
  "chat.chatter.line12": "balinayı izleyin, hep kazanan kareyi işaret ediyor",
  "chat.chatter.line13": "1 numaralı kare tüm oturum boyunca çıkmadı, sırası geldi",
  "chat.chatter.line14": "son çekilişimi hemen sattım, geri alım adil geldi",
  "chat.chatter.line15": "karşı snipe geliyor, not edin",
  "chat.chatter.line16": "lider son on saniyede iki kez değişti",
  "chat.chatter.line17": "bu akşam Mythic merdivenini kovalayan başka var mı",
  "chat.chatter.line18": "kartı sakladım, çizimi satmak için fazla güzeldi",
  "chat.chatter.line19": "geç pack'ler saati asla sıfırlamıyor, bu harika",
  "chat.chatter.line20": "8 numaralı kare havuzu az önce ikiye katlandı, bir şeyler oluyor",
  "chat.chatter.line21": "erken küçük pack, geç büyük pack, oynamanın tek yolu bu",
  "chat.chatter.line22": "o sakla/sat sayacı her seferinde beni yakalıyor",
  "chat.chatter.line23": "şu an takipçiler liderden daha değerli görünüyor",
  "chat.chatter.line24": "5 numaralı karede temiz bir snipe, adeta ameliyat gibi",
  // --- Companion Activity + unlock presenter -------------------------------
  "chat.surface.ariaLabel": "Masa paneli",
  "chat.surface.chat": "Sohbet",
  "chat.surface.activity": "Etkinliklerim",
  "chat.activity.ariaLabel": "Özel etkinliklerim",
  "chat.activity.filtersAria": "Etkinlikleri filtrele",
  "chat.activity.filter.all": "Tümü",
  "chat.activity.filter.packs": "Pack'ler",
  "chat.activity.filter.bids": "Bahisler",
  "chat.activity.filter.rewards": "Ödüller",
  "chat.activity.filter.feats": "Başarımlar",
  "chat.activity.filter.clan": "Klan",
  "chat.activity.today": "Bugün",
  "chat.activity.yesterday": "Dün",
  "chat.activity.status.pending": "Beklemede",
  "chat.activity.status.finalized": "Kesinleşti",
  "chat.activity.status.reversed": "Geri alındı",
  "chat.activity.finalizedAria": "Kesinleşen makbuz",
  "chat.activity.signInTitle": "Geçmişinizi görmek için giriş yapın",
  "chat.activity.signInBody": "Pack, bahis, ödül, başarım ve klan işlemlerinize ait özel makbuzlar burada görünür.",
  "chat.activity.loading": "Makbuzlarınız yükleniyor",
  "chat.activity.loadOlder": "Daha eskileri yükle",
  "chat.activity.points": "{points} puan",
  "chat.activity.event.packBid.title": "Pack oynandı",
  "chat.activity.event.packBid.detail": "Kare {tile} için giriş kesinleşti.",
  "chat.activity.event.roundWon.title": "Kazanan kare",
  "chat.activity.event.roundWon.detail": "Kare {tile} bu turu kazandı.",
  "chat.activity.event.roundLost.title": "Tur sonuçlandı",
  "chat.activity.event.roundLost.detail": "Kare {tile} bu turu kazanmadı.",
  "chat.activity.event.roundRefunded.title": "Pack iade edildi",
  "chat.activity.event.roundRefunded.detail": "Kare {tile} bahsi iade edildi.",
  "chat.activity.event.chaseWon.title": "Kovalamaca isabeti",
  "chat.activity.event.chaseWon.detail": "Tahtadaki Kovalamaca ödeme yaptı.",
  "chat.activity.event.achievementDetail": "Oyununuzla açıldı.",
  "chat.activity.event.clanAchievementDetail": "Klanınızla birlikte açıldı.",
  "chat.activity.unavailableTitle": "Etkinlik kullanılamıyor",
  "chat.activity.unavailableBody": "Makbuzlarınız yüklenemedi. Özel akışı birazdan tekrar deneyin.",
  "chat.activity.retry": "Tekrar deneyin",
  "chat.activity.emptyTitle": "Henüz burada bir şey yok",
  "chat.activity.emptyBody": "Kesinleşmiş pack, bahis, ödül, başarım ve klan işlemleri burada görünecek.",
  "chat.unlock.eyebrow": "Başarımın kilidi açıldı",
  "chat.unlock.clanEyebrow": "Klan başarımının kilidi açıldı",
  "chat.unlock.dismiss": "Başarımı kapat",
} as Record<string, string>;
