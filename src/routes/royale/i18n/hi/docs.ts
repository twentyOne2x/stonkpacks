// Hindi (हिन्दी): "docs" segment translation. Same house terms as core.ts's
// glossary block. LOOSE CHANGE mechanic renders as छुट्टा / छुट्टा पैसा
// everywhere below - never as a word literally meaning "heat" (गर्मी/ताप are
// banned). No source-file/path/module reference is introduced anywhere in
// this file, matching en's own compliance. `**bold**` marker pairs are kept
// balanced and moved onto the Hindi words that carry the emphasis; {token}s
// keep their exact name/casing.
export default {
  "docs.header.title": "डॉक्स",
  "docs.header.back": "← बोर्ड पर वापस",

  "docs.tabs.ariaLabel": "डॉक्स व्यू",
  "docs.tabs.how": "कैसे काम करता है",
  "docs.tabs.technical": "तकनीकी",

  "docs.how.intro": "सीधी-सादी भाषा वाला वर्शन। पहले यह पढ़ें, फिर सटीक मैकेनिक्स के लिए तकनीकी पर जाएं।",
  "docs.technical.intro": "सटीक मैकेनिक्स, सीधे नंबरों में।",

  // --- How it works (ELI5) -------------------------------------------------
  "docs.how.whatIsRoyale.q": "attn ROYALE क्या है?",
  "docs.how.whatIsRoyale.a":
    "एक लाइव पैक-ओपनिंग गेम। हर राउंड में, खिलाड़ी पैक से टाइलों पर दांव लगाते हैं। जब राउंड लॉक होता है, हर बैक्ड टाइल अपने पैक लाइव फाड़ती है, और एक टाइल के बैकर्स पूरा पॉट बांट लेते हैं।",

  "docs.how.whatIsPack.q": "पैक क्या है?",
  "docs.how.whatIsPack.a":
    "एक कीमत वाली टियर जो अपनी टाइल खुलते ही एक असली ग्रेडेड कार्ड में बदल जाती है। लैडर {starter}, {elite}, {legendary}, {grail} और {mythic} तक जाती है। बड़े पैक बड़े कार्ड निकालते हैं।",

  "docs.how.howBacking.q": "टाइल पर दांव लगाना कैसे काम करता है?",
  "docs.how.howBacking.a":
    "पसंदीदा टाइल चुनें और उस पर पैक से दांव लगाएं। उसी टाइल पर दूसरे खिलाड़ियों के साथ दांव लगाएं और आप उसे शेयर करते हैं: उस टाइल की जीत में आपका हिस्सा वही होगा जो आपने खुद जोड़े पैक का शेयर है।",

  "docs.how.heatRemainder.q": "अगर मेरा दांव पूरे पैक के बराबर नहीं होता तो?",
  "docs.how.heatRemainder.a":
    "सबसे सस्ते पैक की कीमत से कम कुछ भी टाइल पर छुट्टे पैसे के रूप में रहता है। यह बाकी दांव के साथ चलता है, लेकिन जब तक यह पूरे पैक जितना नहीं बढ़ता तब तक खुद का कोई कार्ड नहीं निकालता, और ऑड्स तय करने वाले खुले हुए कार्ड ही होते हैं।",

  "docs.how.howWheelPicks.q": "व्हील विजेता कैसे चुनता है?",
  "docs.how.howWheelPicks.a":
    "लॉक पर, हर बैक्ड टाइल अपने पैक लाइव फाड़ती है। फिर व्हील एक टाइल पर आकर रुकता है, और उस टाइल के खुले कार्ड जितने बेहतर होंगे, व्हील में उसका हिस्सा उतना बड़ा होगा। एक बड़ी हिट किसी छोटी टाइल को फ़ेवरेट बना सकती है। चुनाव खुद एक वेरिफायेबल रैंडम ड्रॉ से आता है, कभी किसी इंसान से नहीं।",

  "docs.how.whatDoIWin.q": "मुझे क्या मिलता है?",
  "docs.how.whatDoIWin.aBefore": "जीतने वाली टाइल के बैकर्स",
  "docs.how.whatDoIWin.aEmphasis": "पूरे राउंड का पॉट",
  "docs.how.whatDoIWin.aAfter":
    " बांटते हैं, सिर्फ़ उस एक टाइल के दांव नहीं, हर किसी ने उस पर जो लगाया उसके अनुपात में। टाइल के सबसे बड़े बैकर को टाइल के सबसे अच्छे कार्ड पर पहला दावा भी मिलता है।",

  "docs.how.keepOrSell.q": "रखें या बेचें, फ़र्क क्या है?",
  "docs.how.keepOrSell.keepLabel": "रखें",
  "docs.how.keepOrSell.keepBody": "कार्ड मुफ़्त में आपके कलेक्शन में जुड़ जाता है।",
  "docs.how.keepOrSell.sellLabel": "वापस बेचें",
  "docs.how.keepOrSell.sellBody": "कार्ड की वैल्यू का एक हिस्सा सीधे आपके बैलेंस में USDC में देता है, बिना इंतज़ार के।",

  "docs.how.decisionTimeout.q": "समय पर फ़ैसला न करूं तो क्या होगा?",
  "docs.how.decisionTimeout.a":
    "आपको चुनने के लिए एक छोटी विंडो मिलती है। इसे गुज़र जाने दें और कार्ड अपने आप अपने मौजूदा रेट पर वापस बिक जाता है, ताकि आपकी कोई भी जीत कभी अटकी न रहे।",

  "docs.how.whatIsChase.q": "The Chase क्या है?",
  "docs.how.whatIsChase.a":
    "हर राउंड के पॉट के एक छोटे हिस्से से बनने वाला एक चलता हुआ जैकपॉट। यह किसी भी राउंड में, अपने अलग स्वतंत्र ड्रॉ पर चल सकता है, और एक grail हिट इसे नहीं चलाती। जब यह चलता है, पूरा जैकपॉट उस राउंड की जीतने वाली स्प्लिट में चला जाता है।",

  "docs.how.howToStartFree.q": "मुफ़्त में कैसे शुरू करूं?",
  "docs.how.howToStartFree.a":
    "इनवाइट कोड से जुड़ें और मुफ़्त Starter-पैक जितना बैलेंस पाएं। किसी वॉलेट या साइन-इन की ज़रूरत नहीं, आप सीधे गेस्ट के रूप में शुरू कर सकते हैं।",

  // --- Technical -------------------------------------------------------
  "docs.tech.packLadder.title": "पैक लैडर",
  "docs.tech.packLadder.body":
    "पांच पैक जो आप खरीद सकते हैं: {starter}, {elite}, {legendary}, {grail}, {mythic}। दांव जितने बड़े पैक ख़रीद सके, उतने बड़े पैक बनाता है, सबसे बड़ा पहले। सबसे सस्ते पैक की कीमत से जो नीचे बचता है वह टाइल पर छुट्टे पैसे के रूप में रहता है और खुद का कोई कार्ड नहीं निकालता। एक खास पैक के रूप में लगाया गया दांव वही पैक बना रहता है, सिर्फ़ छुट्टा पैसा और जोड़े जाने पर ऊपर बढ़ता है।",

  "docs.tech.oddsWeighting.title": "ऑड्स कौन तय करता है: टाइल के खुले कार्ड",
  "docs.tech.oddsWeighting.body":
    "किसी टाइल के जीतने का चांस यह नहीं है कि उस पर कितना दांव लगा। लॉक पर हर फंडेड टाइल अपने पैक खोलती है, और ड्रॉ में टाइल का हिस्सा उसके अभी खुले कार्ड की वैल्यू है, उस राउंड में खुले हर कार्ड की वैल्यू के मुक़ाबले नापा हुआ। एक बड़ी हिट किसी छोटी टाइल को फ़ेवरेट बना देती है। जिस टाइल ने कोई कार्ड नहीं खोला उसका कोई चांस नहीं होता, और अकेला छुट्टा पैसा कभी अपना कार्ड नहीं खोलता। अगर पूरे राउंड में कोई कार्ड नहीं खुलता, तो ड्रॉ करने के लिए कुछ नहीं बचता: राउंड रद्द हो जाता है और हर दांव पूरा वापस हो जाता है।",

  "docs.tech.vrfDraw.title": "विजेता का ड्रॉ VRF-सीडेड और डेटरमिनिस्टिक है",
  "docs.tech.vrfDraw.body":
    "हर राउंड एक तय रेसिपी से एक वेरिफायेबल रैंडम नंबर निकालता है: राउंड आईडी, उसकी डेडलाइन, फ़्रोज़न बोर्ड, टिकट काउंट और लॉक के बाद लिया गया चेन एंट्रॉपी। जीतने वाली टाइल उस नंबर का टाइलों के वज़न पर एक ही डेटरमिनिस्टिक वॉक है। एक जैसे इनपुट हमेशा एक जैसा विजेता देते हैं, टाइल के वज़न वॉक होने से पहले ही पब्लिश और लॉक हो चुके होते हैं, और कोई भी बाद में राउंड की रसीद से पूरे ड्रॉ की दोबारा जांच कर सकता है।",

  "docs.tech.settlementMath.title": "सेटलमेंट का हिसाब",
  "docs.tech.settlementMath.body":
    "जीतने वाली टाइल के बैकर्स पूरा राउंड पॉट बांटते हैं, सिर्फ़ अपनी टाइल के दांव नहीं, हर किसी ने उस टाइल पर जो लगाया उसके अनुपात में। ऊपर से एक {take} हाउस टेक निकलता है: {chaseCut} The Chase जैकपॉट बनाता है, {protocolCut} प्रोटोकॉल को फ़ंड करता है। यह टेक जहां तक हो सके कार्ड से चुकाया जाता है, सबसे सस्ता बचा कार्ड पहले, और जो कार्ड टेक में फ़िट होने के लिए बहुत महंगा है उसे बेचा नहीं जाता बल्कि छोड़ दिया जाता है, ताकि बड़ी हिट कभी न ली जाए। सिर्फ़ जो कार्ड कवर नहीं कर पाते वही पॉट के कैश से आता है।",

  "docs.tech.cardAllocation.title": "कार्ड किसे मिलते हैं",
  "docs.tech.cardAllocation.body":
    "सिर्फ़ जीतने वाली टाइल के सबसे अच्छे कार्ड पर रखें-या-बेचें का फ़ैसला होता है, और यह उस टाइल के सबसे बड़े बैकर का है। उस टाइल के खोले बाकी हर कार्ड को उसके बैकर्स में उनके दांव के अनुपात में बांटा जाता है, सबसे अच्छे कार्ड पहले। कोई एक लेने पर उसकी बिक्री कीमत आपके अपने कैश स्प्लिट से घट जाती है, तो यह एक स्वैप है, कोई खर्च नहीं: आप दोनों ही तरह से राउंड के आखिर में उतनी ही वैल्यू लेकर निकलते हैं। अगर किसी का स्प्लिट किसी कार्ड को कवर नहीं करता, तो हाउस उसे ख़रीद लेता है और वह कैश स्प्लिट के अंदर ही रहता है, ताकि कोई कार्ड कभी किसी पर ज़बरदस्ती न थोपा जाए। उसी राउंड में दूसरा grail कोई खास ट्रीटमेंट नहीं पाता, वह बाकी लूट के साथ ही बांटा जाता है, और The Chase कभी grail नहीं लेता।",

  "docs.tech.sellBackRates.title": "वापस बेचने की दरें",
  "docs.tech.sellBackRates.body":
    "हर कार्ड की एक तय वापस-बेचने की कीमत होती है जो उसके पैक से तय होती है: एंट्री रंग पर {entryRate}, बीच में {midRate}, टॉप पर {topRate}। बेचने पर तुरंत यह कीमत आपके बैलेंस में आ जाती है, और कार्ड रखने में आपका कुछ खर्च नहीं होता। ये दरें CollectorCrypt पर उन्हीं मशीनों की पब्लिश इंस्टेंट-बायबैक दरों जैसी हैं।",

  "docs.tech.chaseJackpot.title": "The Chase जैकपॉट",
  "docs.tech.chaseJackpot.body":
    "हर राउंड के पॉट के {chaseCut} से बनने वाला एक चलता हुआ जैकपॉट। यह अपने स्वतंत्र ड्रॉ पर चलता है, सामान्य राउंड स्पीड पर करीब हफ़्ते में एक बार, और एक grail हिट इसे नहीं चलाती। जब यह चलता है, पूरा जैकपॉट उस राउंड की जीतने वाली स्प्लिट में जाता है, फिर रीसेट होकर दोबारा बनना शुरू करता है। जब हो सके, The Chase एक कार्ड भी हर राउंड लेता है, लेकिन सिर्फ़ हारने वाली टाइल से, कभी राउंड के सबसे कीमती कार्ड से नहीं, और कभी grail से नहीं।",

  "docs.tech.decisionWindow.title": "डिसीज़न विंडो",
  "docs.tech.decisionWindow.body":
    "टाइल का सबसे अच्छा कार्ड जीतने पर {window} सेकंड की रखें-या-बेचें विंडो खुलती है। इसके बंद होने तक, या अगले राउंड के लॉक तक कोई जवाब न आने पर, कार्ड अपने मौजूदा रेट पर बिक जाता है, ताकि आपकी कोई भी जीत कभी अटकी न रहे।",

  "docs.tech.devnetCustody.title": "Devnet USDC कस्टडी",
  "docs.tech.devnetCustody.body":
    "बैलेंस Solana devnet पर असली USDC ट्रांज़ैक्शन के रूप में चलते हैं। कस्टडी आपके Privy एम्बेडेड वॉलेट से, या फ़ॉलबैक के तौर पर आपके अपने ब्राउज़र में रखी devnet-ओनली कीपेयर से चलती है, दोनों वही ट्रांसफ़र पाथ साइन करते हैं जो प्रोडक्शन कस्टडी इस्तेमाल करती है।",

  // --- Technical: lifecycle cards -----------------------
  "docs.tech.voidRefund.title": "रद्द और रिफ़ंड",
  "docs.tech.voidRefund.body":
    "एक राउंड सिर्फ़ खुले कार्ड से ही जीता जा सकता है, इसलिए जिस राउंड में कोई टाइल कार्ड नहीं खोलती उसके पास ड्रॉ करने के लिए कुछ नहीं होता। वह राउंड उसी वक़्त रद्द हो जाता है: बोर्ड पर हर दांव पूरा वापस आता है, हाउस कुछ नहीं लेता, और The Chase को कुछ नहीं मिलता। रद्द राउंड का पब्लिश ड्रॉ रिकॉर्ड शून्य कार्ड टोटल दिखाता है, यही सबूत है कि रद्द होना बोर्ड की मजबूरी थी, किसी के चुनने से नहीं हुआ।",

  "docs.tech.cardExits.title": "जीते कार्ड आपके वॉलेट में जाते हैं",
  "docs.tech.cardExits.body":
    "कार्ड रखें तो वह एक साइन्ड ट्रांज़ैक्शन के रूप में आपके अपने वॉलेट में ट्रांसफ़र होता है, नेटवर्क फ़ीस आपकी तरफ़ से चुकाई जाती है। अगर आपका वॉलेट अभी उसे नहीं ले सकता, तो डिलीवरी रुककर तब तक दोबारा कोशिश करती रहती है जब तक वह पहुंच नहीं जाती, कभी छूटती नहीं। कोई कार्ड वापस बेचें तो आपको ठीक वही कीमत मिलती है जो जीतने के पल कोट हुई थी, कभी नई कोट नहीं, और वह कोट सिर्फ़ एक बार ही इस्तेमाल हो सकता है: पैसा हिलने से पहले ही इसे खर्च हुआ मार्क कर दिया जाता है, ताकि एक ही कार्ड दो बार कभी न बिके।",

  "docs.tech.deposits.title": "USDC डिपॉज़िट",
  "docs.tech.deposits.body":
    "डिपॉज़िट Solana पर एक USDC ट्रांसफ़र है जिसे आप अपने वॉलेट से साइन करते हैं। आपका बैलेंस सिर्फ़ तभी क्रेडिट होता है जब वह ट्रांसफ़र गेम की तिजोरी में ऑन-चेन कन्फ़र्म हो जाता है, राशि और डेस्टिनेशन खुद चेन से पढ़े जाते हैं, कभी रिक्वेस्ट से नहीं। हर ट्रांज़ैक्शन सिग्नेचर सिर्फ़ एक बार क्रेडिट कर सकता है, इसलिए डिपॉज़िट दोहराने से डबल-क्रेडिट नहीं हो सकता, और पर-ट्रांज़ैक्शन सीमा से ऊपर आया ट्रांसफ़र गायब होने के बजाय आपके नाम बकाया दर्ज हो जाता है।",

  "docs.tech.withdrawals.title": "USDC निकासी",
  "docs.tech.withdrawals.body":
    "निकासी पहले आपके बैलेंस से डेबिट होती है, फिर तिजोरी से USDC आपके अप्रूव किए डेस्टिनेशन को भेजी जाती है: आपका वेरिफ़ाइड लॉगिन उसी सटीक राशि और डेस्टिनेशन पर साइन-ऑफ़ करता है, और जो रिक्वेस्ट अपने प्रूफ़ से मेल नहीं खाती वह अस्वीकार हो जाती है। रसीद में ट्रांज़ैक्शन सिग्नेचर रहता है। अगर चेन ट्रांसफ़र को पक्के तौर पर रिजेक्ट कर देती है, तो आपका बैलेंस सिर्फ़ एक बार रिफ़ंड होता है। अगर ट्रांसफ़र भेजा जा चुका है पर अभी कन्फ़र्म नहीं हुआ, तो जब तक चेन का आख़िरी जवाब न आए तब तक कुछ रिफ़ंड नहीं होता, ताकि निकासी कभी दो बार, रीस्टार्ट के बाद भी, पेमेंट न कर दे।",

  "docs.tech.identity.title": "एक अकाउंट, चाहे साइन-इन किसी भी तरह करें",
  "docs.tech.identity.body":
    "Privy से साइन इन करें या एक बार के सर्वर चैलेंज पर साइन करके Solana वॉलेट साबित करें: दोनों रास्ते एक ही टिकाऊ अकाउंट तक पहुंचते हैं, जो सिर्फ़ वेरिफ़ाइड आइडेंटिटी से पहचाना जाता है, किसी और चीज़ से नहीं। पैसा हिलाने वाला हर काम उसी आइडेंटिटी के अकाउंट पर चलता है जिसने ठीक उसी रिक्वेस्ट पर खुद को साबित किया, और दावा किए गए नाम, आईडी और हेडर नज़रअंदाज़ कर दिए जाते हैं, ताकि कोई किसी डिपॉज़िट, दांव या निकासी को किसी और के बैलेंस की तरफ़ न मोड़ सके।",

  "docs.tech.reconnect.title": "फिर से कनेक्ट और रीस्टार्ट",
  "docs.tech.reconnect.body":
    "लॉग आउट करते ही पैसा रुक जाता है: USDC रेल पर, बिना मालिकाना हक़ के प्रूफ़ के कोई डिपॉज़िट, दांव या निकासी अस्वीकार हो जाती है। वापस लॉग इन करें और वही अकाउंट, वही बैलेंस और वही कार्ड आपका इंतज़ार कर रहे होते हैं, क्योंकि आपकी हर चीज़ एक टिकाऊ लेजर में रहती है, पेज में नहीं। सर्वर रीस्टार्ट उसी लेजर को दोबारा चलाकर वही नंबर देता है, और जो ट्रांसफ़र पहले ही भेजा जा चुका है वह दूसरी बार कभी नहीं भेजा जाता।",

  // --- Docs navigation ----------------------------------------------------
  "docs.nav.ariaLabel": "डॉक्स सेक्शन",
  "docs.nav.overview": "ओवरव्यू",
  "docs.nav.prev": "पिछला",
  "docs.nav.next": "अगला",

  "docs.nav.section.introduction": "परिचय",
  "docs.nav.section.gameplay": "गेमप्ले",
  "docs.nav.section.cards": "कार्ड और कस्टडी",
  "docs.nav.section.money": "पैसा",
  "docs.nav.section.fairness": "फ़ेयरनेस",
  "docs.nav.section.account": "अकाउंट",

  "docs.nav.page.whatIsRoyale": "attn ROYALE क्या है",
  "docs.nav.page.packs": "पैक और लैडर",
  "docs.nav.page.startFree": "मुफ़्त शुरू करें",
  "docs.nav.page.backing": "टाइल पर दांव लगाना",
  "docs.nav.page.theDraw": "ड्रॉ",
  "docs.nav.page.winning": "आपको क्या मिलता है",
  "docs.nav.page.chase": "The Chase",
  "docs.nav.page.keepOrSell": "रखें या बेचें",
  "docs.nav.page.cardAllocation": "कार्ड किसे मिलते हैं",
  "docs.nav.page.sellBack": "वापस बेचने की दरें",
  "docs.nav.page.cardDelivery": "कार्ड डिलीवरी",
  "docs.nav.page.deposits": "डिपॉज़िट",
  "docs.nav.page.withdrawals": "निकासी",
  "docs.nav.page.settlement": "सेटलमेंट का हिसाब",
  "docs.nav.page.custody": "USDC कस्टडी",
  "docs.nav.page.odds": "ऑड्स कौन तय करता है",
  "docs.nav.page.vrf": "VRF ड्रॉ",
  "docs.nav.page.voidRefund": "रद्द और रिफ़ंड",
  "docs.nav.page.identity": "एक अकाउंट",
  "docs.nav.page.reconnect": "फिर से कनेक्ट और रीस्टार्ट",

  // =========================================================================
  // RoyaleHowItWorksRoute.tsx - /lab/royale/how-it-works
  // =========================================================================

  "docs.howItWorks.title": "attn ROYALE - हर डॉलर कैसे चलता है",
  "docs.howItWorks.lead": "गेम के पूरे नियम। विजेता कैसे तय होता है, और कार्ड किसे मिलते हैं।",
  "docs.howItWorks.backToBoard": "बोर्ड पर वापस →",

  "docs.howItWorks.round.title": "एक राउंड कैसे काम करता है",
  "docs.howItWorks.round.pickBet":
    "एक दांव साइज़ चुनें, फिर किसी टाइल पर क्लिक करें: हर क्लिक उस राशि को टाइल के पॉट में जोड़ता है।",
  "docs.howItWorks.round.yourShare":
    "**आपका हिस्सा** किसी टाइल का = आपका दांव ÷ उस टाइल का टोटल। किसी {tile} टाइल पर {stake} लगाना **{pct}** हिस्सा है। अगर वह टाइल जीतती है, आपको उसके पेआउट का {pct} मिलता है।",
  "docs.howItWorks.round.winChance":
    "**जीतने का चांस** दांव पर नहीं, रिप पर तय होता है: जब राउंड लॉक होता है, हर बैक्ड टाइल अपने पैक खोलती है, और व्हील में टाइल का हिस्सा उसके अभी खुले कार्ड की वैल्यू है, उस राउंड में खुले हर कार्ड के मुक़ाबले नापा हुआ।",
  "docs.howItWorks.round.tickets":
    "जो टाइल **कोई कार्ड** नहीं खोलती उसका कोई हिस्सा नहीं होता, और अगर पूरा राउंड कोई कार्ड नहीं खोलता, तो राउंड **रद्द** हो जाता है और हर दांव पूरा वापस आता है।",
  "docs.howItWorks.round.vrf":
    "लॉक पर, एक **VRF** (वेरिफायेबल रैंडम फ़ंक्शन) राउंड के लॉक्ड नंबरों से एक जीतने वाला टिकट निकालता है: राउंड आईडी, डेडलाइन, हर टाइल का टोटल, टिकट काउंट। कोई भी, यहां तक कि हाउस भी, इसे नहीं मोड़ सकता।",
  "docs.howItWorks.round.oddsAreReal": "हर टाइल पर दिखने वाले ऑड्स यही सटीक ड्रॉ हिसाब हैं, कोई अंदाज़ा नहीं।",

  "docs.howItWorks.buys.title": "आपका दांव क्या ख़रीदता है",
  "docs.howItWorks.buys.ladderLead": "टाइल का टोटल पैक में बदल जाता है, सबसे बड़ा पहले:",
  "docs.howItWorks.buys.example":
    "उदाहरण: एक **{amount}** की टाइल एक Legendary, एक Elite, और एक Starter ख़रीदती है।",
  "docs.howItWorks.buys.change":
    "अगले पैक के लिए बहुत छोटा पैसा **छुट्टा** है: यह फिर भी पॉट और जीत में आपके हिस्से में गिनता है, पर कोई पैक नहीं खोलता, और ऑड्स तय खुले कार्ड ही करते हैं।",
  "docs.howItWorks.buys.mythicUpgrade":
    "पहले से एक Mythic रखे हैं? अपग्रेड बटन छोटे पैक के बजाय **एक और पूरा Mythic** टारगेट करता है। लैडर कभी नीचे नहीं उतरती।",
  "docs.howItWorks.buys.cardsPerPack":
    "लॉक पर, हर फंडेड टाइल अपने पास मौजूद हर पूरे पैक से **एक कार्ड** खोलती है, बोर्ड पर ज़्यादा से ज़्यादा **{max} कार्ड** दिखते हैं (बाकी नतीजों वाले पेज पर लिस्ट होते हैं)। सिर्फ़ छुट्टा पैसा रखने वाली टाइल कुछ नहीं खोलती।",
  "docs.howItWorks.buys.undeliverable":
    "अगर कोई पैक असल में डिलीवर नहीं हो सकता (सोल्ड आउट, तकनीकी दिक्कत, समय ख़त्म), तो उसकी कीमत अटकने के बजाय कैश के रूप में आपको वापस मिल जाती है।",

  "docs.howItWorks.winner.title": "विजेता को क्या मिलता है",
  "docs.howItWorks.winner.entirePool":
    "जीतने वाली टाइल के बैकर्स **पूरा राउंड पॉट** बांटते हैं, सिर्फ़ उस टाइल का अपना पॉट नहीं।",
  "docs.howItWorks.winner.proRata":
    "बंटवारा **प्रो-रेटा** है: टाइल का {pct} डालें, पेआउट का **{pct}** पाएं।",
  "docs.howItWorks.winner.take":
    "बंटवारे से पहले हर पॉट में से **{take}** निकाला जाता है: **{chaseCut}** The Chase जैकपॉट को खिलाता है, **{protocolCut}** प्रोटोकॉल को फ़ंड करता है (रेफरल, Chase कार्ड ख़रीद, ऑपरेशंस, टोकन बायबैक)।",
  "docs.howItWorks.winner.takeFunding":
    "वह {take} जहां तक हो सके कार्ड से चुकाया जाता है, सबसे सस्ता बचा कार्ड पहले, और जो कार्ड टेक में फ़िट होने के लिए बहुत महंगा है उसे बेचा नहीं जाता बल्कि छोड़ दिया जाता है, ताकि बड़ी हिट कभी न ली जाए। सिर्फ़ जो कार्ड कवर नहीं कर पाते वही पॉट के कैश से आता है।",

  "docs.howItWorks.chase.title": "The Chase",
  "docs.howItWorks.chase.feed": "The Chase एक चलता हुआ जैकपॉट है, जो हर पॉट के **{cut}** से बनता है।",
  "docs.howItWorks.chase.cardCut":
    "जब हो सके, The Chase अपना हिस्सा कैश की जगह कार्ड के रूप में लेता है, पर सिर्फ़ हारने वाली टाइल का वह कार्ड जिसकी वैल्यू पॉट के **{cut} से ज़्यादा नहीं**, कभी राउंड के सबसे कीमती कार्ड का नहीं, और कभी grail का नहीं।",
  "docs.howItWorks.chase.independentDraw":
    "जैकपॉट अपने **स्वतंत्र रैंडम ड्रॉ** पर चलता है, सामान्य राउंड स्पीड पर औसतन **करीब हफ़्ते में एक बार**। एक grail हिट इसे नहीं चलाती।",
  "docs.howItWorks.chase.payout":
    "जब यह चलता है, **पूरा जैकपॉट** उस राउंड की जीतने वाली स्प्लिट में जाता है, फिर रीसेट होकर अगले राउंड के फ़ीड से दोबारा बनना शुरू करता है।",

  "docs.howItWorks.grails.title": "Grails",
  "docs.howItWorks.grails.what":
    "एक **grail** किसी भी पैक की सबसे दुर्लभ, सबसे कीमती हिट है। एक {price} का Starter भी इसे निकाल सकता है।",
  "docs.howItWorks.grails.headlineGrail":
    "अगर जीतने वाली टाइल का अपना सबसे अच्छा कार्ड एक grail है: **रखें** के लिए टॉप बैकर को बाकी बैकर्स का हिस्सा ख़रीदना पड़ता है (उनके कैश से घटाकर); **बेचें** पूरे पेआउट को सिर्फ़ टॉप बैकर तक नहीं, **पूरी टाइल में प्रो-रेटा** बांटता है।",
  "docs.howItWorks.grails.otherGrails":
    "उस राउंड में निकला कोई और grail (किसी दूसरी टाइल पर, या एक्स्ट्रा कार्ड के रूप में) जीतने वाले बैकर्स के लिए बोनस लूट है, बिल्कुल किसी और एक्स्ट्रा कार्ड जैसा। यह कभी The Chase में नहीं जाता, और चूंकि टेक सबसे सस्ता कार्ड पहले चुकाया जाता है, grail वह आख़िरी कार्ड है जिस तक यह कभी पहुंचेगा।",

  "docs.howItWorks.cards.title": "कार्ड किसे मिलते हैं",
  "docs.howItWorks.cards.headline":
    "जीतने वाली टाइल का **हेडलाइन कार्ड** (उसकी सबसे ज़्यादा वैल्यू वाली हिट) सिर्फ़ टाइल के सबसे बड़े बैकर का है: इसे मुफ़्त में रखें, या इसकी बायबैक दर पर कैश में बेचें, यह सिर्फ़ उन्हें मिलता है, टाइल के बाकी लोगों में नहीं बंटता।",
  "docs.howItWorks.cards.rest":
    "टाइल ने जो भी और कार्ड निकाले, साथ ही हारने वाली टाइलों से मिली कोई भी बोनस लूट, सबसे बड़ी वैल्यू पहले, दांव के अनुपात में बांटी जाती है। टाइल का सबसे बड़ा बैकर आमतौर पर उनमें से सबसे ज़्यादा और सबसे अच्छे कार्ड पाता है।",
  "docs.howItWorks.cards.deduction":
    "उन कार्डों में से कोई एक लेने पर उसकी बायबैक कीमत आपके अपने कैश स्प्लिट से घट जाती है। यह वही कैश है जो बेचने पर मिलता, इसलिए आपका कुछ नहीं जाता।",
  "docs.howItWorks.cards.neverForced":
    "अफ़ोर्ड नहीं कर सकते? यह कभी आप पर थोपा नहीं जाता। इसकी जगह हाउस इसे ख़रीद लेता है, और वह कैश स्प्लिट के अंदर ही रहता है।",
  "docs.howItWorks.cards.workedExample":
    "**काम किया उदाहरण।** पॉट {pool}। **{take}** ({takeAmount}: {chaseAmount} Chase, {protocolAmount} प्रोटोकॉल) ऊपर से निकलता है, ज़्यादातर आपके कैश की बजाय एक बचे कार्ड से चुकाया जाता है। बांटने के लिए **{split}** बचता है: आपने टाइल का {yourPct} लगाया ({yourStake}), Sam ने {samPct} लगाया ({samStake})। टाइल ने एक {headline} हेडलाइन कार्ड निकाला (एक Legendary पैक, **{buyback}** बायबैक) और एक {extra} एक्स्ट्रा कार्ड। आप {headline} कार्ड मुफ़्त में रखते हैं। यह वैसे भी आपका है। {extra} कार्ड Sam को जाता है: उसका **{buyback}**, यानी **{samCash}**, Sam के स्प्लिट से निकलता है। आख़िर में: आप **{yourStake} कैश + {headline} कार्ड** लेकर जाते हैं; Sam को **{samCash} कैश + {extra} कार्ड** मिलता है।",

  "docs.howItWorks.keepSell.title": "रखें या बेचें",
  "docs.howItWorks.keepSell.buttons":
    "आपको मिलने वाले हर कार्ड के साथ दो बटन आते हैं: **रखें** स्लैब को आपके कलेक्शन में डालता है; **बेचें** पैक की बायबैक दर सीधे आपके बैलेंस में USDC में देता है।",
  "docs.howItWorks.keepSell.usdc": "USDC एक डिजिटल डॉलर है: **{rate}**।",
  "docs.howItWorks.keepSell.rates":
    "बायबैक कार्ड के अपने पैक से तय होता है: **{entryRate}** Starter/Elite, **{midRate}** Legendary, **{topRate}** Grail और उससे ऊपर।",
  "docs.howItWorks.keepSell.window":
    "जीतने के फ़ौरन बाद आपको एक **{seconds}-सेकंड** की विंडो मिलती है, और अगर आप तय नहीं करते, तो यह बस पूरे अगले राउंड में साथ चली जाती है: बोर्ड के नीचे और आपके कार्ड में लाइव।",
  "docs.howItWorks.keepSell.autoSell":
    "अगले राउंड के लॉक होने तक अब भी तय नहीं किया? कार्ड तब अपनी बायबैक दर पर **ऑटो-सेल** हो जाता है। पैसा कभी अटकता नहीं।",

  "docs.howItWorks.glossary.title": "शब्दकोश",
  "docs.howItWorks.glossary.change":
    "**छुट्टा**: टाइल पर वह पैसा जो अगला पैक ख़रीदने के लिए बहुत कम है। यह पॉट और जीत में आपके हिस्से में गिनता है, पर सिर्फ़ खुले कार्ड ही जीतने का चांस रखते हैं।",
  "docs.howItWorks.glossary.house":
    "**हाउस**: वह तिजोरी जो कार्ड बायबैक को फ़ंड करती है और किसी के अफ़ोर्ड न कर पाने वाला कार्ड ख़ुद ले लेती है।",
  "docs.howItWorks.glossary.chase":
    "**The Chase**: हर पॉट के {cut} से बनने वाला एक चलता हुआ जैकपॉट; यह अपने स्वतंत्र ड्रॉ पर चलता है, किसी ख़ास कार्ड नतीजे पर नहीं।",
  "docs.howItWorks.glossary.grail": "**Grail**: किसी भी पैक की सबसे दुर्लभ, सबसे कीमती कार्ड।",
  "docs.howItWorks.glossary.buyback":
    "**बायबैक**: कार्ड को उसकी वैल्यू के {low} से {high} में कैश करने की तय पेशकश, पैक टियर के हिसाब से।",
  "docs.howItWorks.glossary.proRata": "**प्रो-रेटा**: हर किसी ने जो लगाया उसके अनुपात में बंटवारा।",
  "docs.howItWorks.glossary.vrf": "**VRF**: एक रैंडम ड्रॉ जिसे कोई भी बाद में जांच सकता है।",

  "docs.howItWorks.api.title": "बेटिंग API (क्लोज़्ड बीटा)",
  "docs.howItWorks.api.what":
    "एक लाइव राउंड पढ़ने, इवेंट स्ट्रीम सब्सक्राइब करने और कोड या एजेंट से दांव लगाने के लिए एक प्रोग्रामेटिक API। यह बोर्ड जैसे ही ऑड्स और सेटलमेंट पर चलता है।",
  "docs.howItWorks.api.access":
    "एक्सेस **क्लोज़्ड** है और सिर्फ़ रिक्वेस्ट पर मिलती है: डिफ़ॉल्ट रूप से बंद, और हर कॉल के लिए एक अलाउलिस्टेड API की चाहिए।",
  "docs.howItWorks.api.realBets":
    "असली दांव लगाने के लिए एक और जांच चाहिए: यह साबित करना कि यह वाक़ई आप हैं (साइट जैसा ही लॉगिन), और यह हर खिलाड़ी की तरह उन्हीं दांव सीमाओं में चलता है।",
  "docs.howItWorks.api.contact": "{path} पर डेवलपर डॉक देखें और की के लिए {email} पर ईमेल करें।",
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
