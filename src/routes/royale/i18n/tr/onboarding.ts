// Turkish (Türkçe): "onboarding" segment. Owns RoyaleOnboardingGate.tsx (the
// invite + $25 Starter pack + profile gate), RoyaleWelcomeTour.tsx (the
// how-it-works tour), RoyaleRotateGate.tsx (the mobile-portrait rotate
// prompt), and RoyaleSettingsOverlay.tsx's two chrome strings. It also owns
// royaleProfile.ts's profile-form validation reasons, RoyalePresenceChip.tsx,
// RoyaleLiveStreamHud.tsx, RoyaleDevnetBadge.tsx, RoyaleCardCarousel.tsx and
// RoyaleFundShortfallToast.tsx. Same key set as en/onboarding.ts.
//
// Terminology: "davet" = invite (the onboarding invite code), "rumuz" =
// handle (kept distinct from "Görünen ad" = display name), "tanıtım turu" =
// the onboarding walkthrough (a compound noun, deliberately not bare "tur" -
// that word is reserved for a game round everywhere in this locale).
// "attn ROYALE" (the wordmark) and "Starter" (the pack tier name) are brand
// terms and stay English inside translated sentences. Register is FORMAL
// throughout ("Siz").
export default {
  // --- RoyaleOnboardingGate.tsx: "invite" step (no invite yet) ------------
  "onboarding.invite.medallionLabel": "davet",
  "onboarding.invite.title": "Yalnızca davetle",
  // {amount} is the ONLY token - the component bolds just the dollar figure
  // (matches the eachClickAdds/statusHitRest convention elsewhere), so the
  // surrounding words stay free-flowing per language.
  "onboarding.invite.ledeStake": "attn ROYALE şimdilik yalnızca davetle açık. {amount} bahis almak ve masaya oturmak için kodunuzu girin.",
  "onboarding.invite.ledeStarter": "attn ROYALE şimdilik yalnızca davetle açık. Ücretsiz {amount} Starter pack almak ve masaya oturmak için kodunuzu girin.",
  "onboarding.invite.inputPlaceholder": "DAVET KODU",
  "onboarding.invite.inputAriaLabel": "Davet kodu",
  "onboarding.invite.unlockButton": "Kilidi aç",
  // {link} is replaced with the bolded literal "attn.markets/r/..." (a URL
  // fragment, never translated) - only the surrounding sentence localizes.
  "onboarding.invite.hint": "Henüz kodunuz yok mu? Sizi davet eden kişiye sorun veya {link} bağlantınızı yapıştırın.",
  "onboarding.invite.errorInvalidCode": "Davetiyenizdeki davet kodunu girin.",

  // --- RoyaleOnboardingGate.tsx: "welcome" step ---------------------------
  "onboarding.welcome.grantLabelCredit": "kredi",
  "onboarding.welcome.grantLabelStarterPack": "starter pack",
  "onboarding.welcome.titleBack": "Tekrar hoş geldiniz",
  "onboarding.welcome.title": "Masaya hoş geldiniz",
  "onboarding.welcome.backLede": "Kaldığınız yerden devam edin, {name}. Profiliniz ve bakiyeniz bu cihazda kayıtlı.",
  "onboarding.welcome.fallbackName": "oyuncu",
  "onboarding.welcome.ledeStake": "Davetiniz {amount} bahis değerinde. Bir isim belirleyip yerinizi alın.",
  "onboarding.welcome.ledeStarter": "Davetiniz ücretsiz {amount} Starter pack değerinde. Pack bahis edip yerinizi alın.",
  "onboarding.welcome.continueWithX": "X ile devam et",
  "onboarding.welcome.optionalHint": "isteğe bağlı",
  "onboarding.welcome.connectWallet": "Bir cüzdan bağla",
  "onboarding.welcome.playFreeNote": "Şimdi ücretsiz oynayın. Cüzdan veya giriş gerekmez.",
  "onboarding.welcome.or": "veya",
  "onboarding.welcome.continueAsTemplate": "{name} olarak devam et",
  "onboarding.welcome.fallbackProfileName": "profiliniz",
  "onboarding.welcome.close": "Kapat",
  "onboarding.welcome.createProfile": "Profilinizi oluşturun",
  "onboarding.welcome.skipGuest": "Atla ve misafir olarak oyna",
  // P0 2026-08-08: the control that STARTS THE GAME (gold, primary). Its
  // retired label is welcome.skipGuest above, which reads as an escape hatch
  // rather than the way in. welcome.optionalHint is retired with it: it sat
  // on both sign-in buttons and was the only word a landscape phone showed.
  "onboarding.welcome.playNow": "Şimdi oyna",
  "onboarding.welcome.pickNameFirst": "Ya da önce bir ad seç",

  // --- RoyaleOnboardingGate.tsx: "profile" step ---------------------------
  "onboarding.profile.title": "Profilinizi ayarlayın",
  "onboarding.profile.xPhotoAlt": "X profil fotoğrafınız",
  "onboarding.profile.connectedAsTemplate": "{handle} olarak bağlandı",
  "onboarding.profile.xAccountFallback": "X hesabı",
  "onboarding.profile.walletLabelTemplate": "Cüzdan {address}",
  "onboarding.profile.displayNameLabel": "Görünen ad",
  "onboarding.profile.displayNamePlaceholder": "Size nasıl seslenelim?",
  "onboarding.profile.handleLabel": "Rumuz",
  "onboarding.profile.handlePlaceholder": "rumuzunuz",
  "onboarding.profile.handleHint": "Masadaki eşsiz kimliğiniz. Harfler, sayılar ve alt çizgi.",
  "onboarding.profile.handleTaken": "Bu rumuz bu cihazda zaten kullanılıyor.",
  "onboarding.profile.startButtonTemplate": "Oynamaya başla · {amount} evden hediye",
  "onboarding.profile.back": "Geri",
  "onboarding.profile.skip": "Atla",

  // --- RoyaleWelcomeTour.tsx (4-step how-it-works, skippable) -------------
  "onboarding.tour.ariaLabel": "attn ROYALE nasıl çalışır",
  "onboarding.tour.skip": "Atla",
  "onboarding.tour.step1.eyebrow": "01 · Bir kareyi destekle",
  "onboarding.tour.step1.titleUsdc": "Beğendiğiniz karelere USDC koyun",
  "onboarding.tour.step1.titlePacks": "Beğendiğiniz kareleri pack ile destekleyin",
  "onboarding.tour.step1.bodyUsdc": "Her kare, USDC ile desteklediğiniz bir yuvadır. Bir kareye ne kadar çok koyarsanız, kazancından payınız o kadar büyük olur. Bir tanesine yığın veya birkaçına dağıtın.",
  "onboarding.tour.step1.bodyPacks": "Her kare, pack ile desteklediğiniz bir yuvadır. Bir kareye ne kadar çok yığarsanız, kazancından payınız o kadar büyük olur. Bir tanesine yüklenin veya birkaçına dağıtın.",
  "onboarding.tour.step2.eyebrow": "02 · Kilit ve açılış",
  "onboarding.tour.step2.title": "Kilitte, her kare pack'lerini açar",
  "onboarding.tour.step2.body": "Tur kilitlenince, desteklenen her kare pack'lerini yırtıp açar ve gözünüzün önünde, kanıtlanabilir bir çekilişle gerçek dereceli kartlar çeker.",
  "onboarding.tour.step3.eyebrow": "03 · En iyi değer kazanır",
  "onboarding.tour.step3.title": "En zengin kare havuzu alır",
  "onboarding.tour.step3.bodyUsdc": "Her karenin ağırlığı, çektiği kart değeri artı USDC'sidir. Kare ne kadar ağırsa şansı o kadar iyidir. Kazanırsanız, turun tüm havuzunu paylaşırsınız.",
  "onboarding.tour.step3.bodyPacks": "Her karenin ağırlığı, çektiği kart değeri artı üzerine bahis edilen pack'lerdir. Kare ne kadar ağırsa şansı o kadar iyidir. Kazanırsanız, turun tüm havuzunu paylaşırsınız.",
  "onboarding.tour.step4.eyebrow": "04 · Sakla, sat, kovala",
  "onboarding.tour.step4.title": "Nakde çevirin ve Kovalamaca'yı izleyin",
  "onboarding.tour.step4.body": "Kazandığınız kartları dereceli kart olarak saklayın ya da geri alım oranından geri satın. Kovalamaca ise herhangi bir karede, herhangi bir turda düşebilen katlanarak büyüyen bir jackpot'tur.",
  "onboarding.tour.back": "Geri",
  "onboarding.tour.next": "İleri",
  "onboarding.tour.enterBoard": "Tahtaya gir",

  // --- RoyaleWelcomeTour.tsx v2: SPOTLIGHT guided tour (owner 2026-07-31:
  // "highlight the sections, darken the others that arent being introduced,
  // and show the items with an arrow and a description"). Seven coach-mark
  // steps anchored to the LIVE board. The v1 step1-step4 keys above stay
  // (append-only contract) but are no longer rendered. {amount} in spot7 is
  // the free Starter grant, currency-formatted by the component. spot3 ships
  // touch variants: the component picks *Touch on coarse pointers, where
  // betting is tap-to-arm then tap-to-confirm. PACKS framing only.
  "onboarding.tour.stepTag": "Adım {n} / {total}",
  "onboarding.tour.spot1.eyebrow": "Bahsiniz",
  "onboarding.tour.spot1.title": "Pack'inizi seçin",
  "onboarding.tour.spot1.body": "Pack'lerle bahis yaparsınız. Her biri, Collector Crypt tarafından desteklenen derecelendirilmiş TCG kartları içeren mühürlü bir pack'tir. Oynamak istediğiniz pack'i seçin.",
  "onboarding.tour.spot2.eyebrow": "Yığın boyutu",
  "onboarding.tour.spot2.title": "Kaç tane olacağını seçin",
  "onboarding.tour.spot2.body": "Bu sayaç, her bahsin kaç pack koyacağını belirler. Başlamak için bir tane yeterlidir. Daha büyük bahis yapmak istediğinizde artırın.",
  "onboarding.tour.spot3.eyebrow": "Bahsinizi yerleştirin",
  "onboarding.tour.spot3.title": "Bahis etmek için bir kareye tıklayın",
  "onboarding.tour.spot3.titleTouch": "Bahis etmek için bir kareye dokunun",
  "onboarding.tour.spot3.body": "Bir kareye tıklamak pack'lerinizi oraya koyar. Bir karede ne kadar çok pack yığarsanız, kazanırsa payınız o kadar büyük olur. Birine ağırlık verin veya birkaçına dağıtın.",
  "onboarding.tour.spot3.bodyTouch": "Bir kareye bir kez dokunarak hazırlayın, ardından bahsi onaylamak için tekrar dokunun. Bir karede ne kadar çok pack yığarsanız, kazanırsa payınız o kadar büyük olur.",
  "onboarding.tour.spot4.eyebrow": "Tur",
  "onboarding.tour.spot4.title": "Havuz ve saat",
  "onboarding.tour.spot4.body": "Tahtaya bahis edilen her pack bu havuzu besler. Saat sıfıra ulaşınca bahis kilitlenir ve desteklenen her kare pack'lerini canlı olarak açar.",
  "onboarding.tour.spot5.eyebrow": "Çekiliş",
  "onboarding.tour.spot5.title": "Ağır kareler daha sık kazanır",
  "onboarding.tour.spot5.body": "Değere göre ağırlıklandırılmış rastgele bir çekiliş tek bir kare seçer. Kaybeden kareler kartlarını ve bahislerini bırakır; kazanan karenin destekçileri turun dağıtılabilir değerini yatırdıkları tutarla orantılı paylaşır.",
  "onboarding.tour.spot6.eyebrow": "Paranız",
  "onboarding.tour.spot6.title": "Bakiye ve yatırımlar",
  "onboarding.tour.spot6.body": "Bakiyeniz burada yaşar. Yatır ile bakiye ekleyin ve istediğiniz zaman çekin. Kazançlar, tur sonuçlanır sonuçlanmaz buraya düşer.",
  "onboarding.tour.spot7.eyebrow": "Evden hediye",
  "onboarding.tour.spot7.title": "Ücretsiz {amount} Starter pack'iniz",
  "onboarding.tour.spot7.body": "Ücretsiz {amount} Starter pack ile başlıyorsunuz. Seçicide zaten yüklü. Beğendiğiniz bir kareyi seçin ve başlayın.",
  "onboarding.tour.finish": "Oynamaya başla",
 "onboarding.tour.paused": "Tur başlıyor - hemen ardından devam edeceğiz.",
  "onboarding.tour.act2.choice": "Bir turun oynanışını izle",
  "onboarding.tour.act2.choiceHint": "Yaklaşık 30 saniye, reveal dahil",
  "onboarding.tour.act2.bettingTitle": "Yatırılan her pack tek bir havuz olur",
  "onboarding.tour.act2.bettingBody": "Oyuncular karelere pack yığar. Masadaki her pack tek bir havuzu besler ve tek bir kare hepsini alır.",
  "onboarding.tour.act2.drawTitle": "Değer, ihtimale dönüşür",
  "onboarding.tour.act2.drawBody": "Her karenin çekilen tüm kartların değerindeki payı, kazanma şansıdır. Doğrulanabilir ve değere göre ağırlıklandırılmış tek bir rastgele çekiliş kazananı seçer.",
  "onboarding.tour.act2.losersTitle": "Kaybeden her kare kartlarını bırakır",
  "onboarding.tour.act2.losersBody": "Tüm tahtadaki dağıtılabilir kartlar ve nakit, kazanan karenin destekçilerine geçer.",
  "onboarding.tour.act2.splitTitle": "Yatırdığın miktar payını belirler",
  "onboarding.tour.act2.splitBody": "Kazanan karenin destekçileri, tüm karelerden gelen turun dağıtılabilir nakit ve kartlarını herkesin o kareye yatırdığı tutarla orantılı paylaşır.",
  "onboarding.tour.act2.grailCaption": "Grail töreni",
  "onboarding.tour.act2.yourTurnEyebrow": "Sıra sende",
  "onboarding.tour.act2.yourTurnTitle": "Starter pack'in hazır",
  "onboarding.tour.act2.yourTurnBody": "Tahta yeniden canlı. Bir karo seç ve ilk pack bahsini yerleştir.",
  "onboarding.tour.act2.continue": "Tura gir",

  // --- RoyaleRotateGate.tsx (mobile-portrait rotate prompt) ---------------
  "onboarding.rotate.ariaLabel": "attn ROYALE oynamak için telefonunuzu döndürün",
  "onboarding.rotate.title": "Telefonunuzu yan çevirin",
  "onboarding.rotate.body": "Tahta en iyi yatay modda oynanır. Tura girmek için döndürün.",

  // --- RoyaleSettingsOverlay.tsx chrome (title + close only - the fields
  // grid lives in RoyaleGearSettingsFields, a different surface) ----------
  "onboarding.settingsTitle": "Ayarlar",
  "onboarding.settingsClose": "Ayarları kapat",

  // --- royaleProfile.ts: profile-form validation reasons ------------------
  // Rendered under the handle/name inputs on the gate's "profile" step
  // (validateHandle / validateDisplayName return them as `reason`).
  // {n} is the display-name character cap (DISPLAY_NAME_MAX), injected by the
  // validator so the limit is never baked into a translated value.
  "onboarding.profileValidation.handleRequired": "Diğer oyuncuların sizi bulabilmesi için bir rumuz seçin.",
  "onboarding.profileValidation.handleTooShort": "Rumuzlar en az 3 karakter olmalı.",
  "onboarding.profileValidation.handleCharset": "Yalnızca harf, sayı ve alt çizgi kullanın.",
  "onboarding.profileValidation.nameRequired": "Masada gösterilecek bir isim ekleyin.",
  "onboarding.profileValidation.nameTooLong": "{n} karakterin altında tutun.",

  // --- RoyalePresenceChip.tsx (the "N watching / N playing" chip) ---------
  // tierWatching/tierPlaying are the headline WORD next to the count, and are
  // reused inside presence.ariaLabel's {tier}.
  "onboarding.presence.tierWatching": "izliyor",
  "onboarding.presence.tierPlaying": "oynuyor",
  // {amount} is the player's own stake this round, already currency-formatted.
  "onboarding.presence.youPlaying": "Oynuyorsunuz: bu tur {amount} bahis edildi",
  "onboarding.presence.youWatching": "İzliyorsunuz",
  "onboarding.presence.youWatchingBackground": "İzliyorsunuz (arka plan sekmesi)",
  // Full screen-reader readout: {count} headline figure, {tier} the word above,
  // {you} one of the three you* lines. "attn ROYALE" is the wordmark, never
  // translated.
  "onboarding.presence.ariaLabel": "Şu anda attn ROYALE'de {count} kişi {tier}. {you}.",
  // Hover breakdown, first row. The component bolds the part before {status}.
  "onboarding.presence.popYou": "Siz: {status}",
  // Plural pairs (royaleI18n.ts header, "PLURAL KEYS"): ".one" when n === 1.
  // Turkish nouns do not inflect for plural after a numeral, so the two forms
  // below are identical text - that is correct Turkish, not a missed
  // translation.
  "onboarding.presence.otherTabs.one": "+{n} sekmeniz daha açık",
  "onboarding.presence.otherTabs.other": "+{n} sekmeniz daha açık",
  "onboarding.presence.othersBacking.one": "bu tur {n} kişi daha bir kareyi destekliyor",
  "onboarding.presence.othersBacking.other": "bu tur {n} kişi daha bir kareyi destekliyor",

  // --- RoyaleLiveStreamHud.tsx (compact stream-health pill) ---------------
  "onboarding.streamHud.ariaLabel": "attn ROYALE yayın durumu",
  "onboarding.streamHud.eyebrow": "Yayın",
  "onboarding.streamHud.statusConnecting": "Bağlanıyor",
  "onboarding.streamHud.statusLive": "Canlı",
  "onboarding.streamHud.statusReconnecting": "Yeniden bağlanıyor",
  "onboarding.streamHud.statusError": "Senkronizasyon sorunu",
  "onboarding.streamHud.reconnects.one": "{n} yeniden bağlanma",
  "onboarding.streamHud.reconnects.other": "{n} yeniden bağlanma",

  // --- RoyaleDevnetBadge.tsx (the "USDC" settlement badge tooltip) --------
  // The badge's own label is the literal "USDC" ticker and stays English.
  "onboarding.devnet.badgeTitle": "Bu oda USDC ile sonuçlanır.",

  // --- RoyaleCardCarousel.tsx (opened-pack card row) ----------------------
  "onboarding.carousel.ariaLabel": "Açılan kartlar",
  "onboarding.carousel.prevCard": "Önceki kart",
  "onboarding.carousel.nextCard": "Sonraki kart",
  // {name} is the card's own name (never translated).
  "onboarding.carousel.showCard": "{name} göster",

  // --- RoyaleFundShortfallToast.tsx (out-of-USDC toast) -------------------
  // "USDC" is the ticker and stays English inside the headline.
  "onboarding.fundShortfall.title": "YETERSİZ USDC",
  // {slot} the tile label, {needed}/{balance} already currency-formatted.
  "onboarding.fundShortfall.detail": "{slot} karesini desteklemek {needed} gerektiriyor. Elinizde {balance} var.",
  "onboarding.fundShortfall.addFunds": "Bakiye ekle",
  "onboarding.fundShortfall.dismiss": "Kapat",

  // --- RoyaleInstallHint.tsx (A2HS / fullscreen install hint) -------------
  // Owner: "in portrait mode can we force the phone to remove the url?" -
  // Safari cannot, so the hint sells Add to Home Screen (iOS Safari) or the
  // Fullscreen API (Android). {icon} is the inline iOS share glyph SVG; the
  // component splits the sentence around the token, so every locale keeps its
  // own word order. Each locale mirrors the device's OWN Share-menu label for
  // "Add to Home Screen".
  "onboarding.installHint.ios": "Gerçek tam ekran için {icon} simgesine dokunun, ardından Ana Ekrana Ekle'yi seçin.",
  "onboarding.installHint.fullscreen": "Tam ekrana geçin ve tarayıcı çubuğunu gizleyin.",
  "onboarding.installHint.fullscreenCta": "Tam ekrana geç",
  "onboarding.installHint.dismiss": "Kapat",
} as Record<string, string>;
