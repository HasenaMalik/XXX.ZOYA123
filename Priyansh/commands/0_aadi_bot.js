const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Prem Bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "prem bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["🌸====『 हाय मैं मर जावा तेरी मासूम शकल पे_____😗  " , "🌸====『 बॉट बॉट ना बोल ओए जानू बोल____😝🙈🦋 " , "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा_______😁😈" , "🌸====『 मैं गरीबों से बात नहीं करता ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 बोलो बाबू तुम मुझे प्यार करते हो ना______🙈 " , "🌸====『 अरे मेरी जान मजाक के मूड में नहीं हूं मैं जो काम है बोलो शर्माओ नहीं _______🎸🎭━━•☆°•°•💗" , "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 तुम बंद नहीं करोगे क्या?_____🙂" , "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलोगे की नहीं____🙂" , "🌸====『 मैं हाथ जोड़ के मोदी से गुजारिश करता हूं मेरी मदद करेगा_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 तुमको कोई और कम नहीं पूरे दिन मेसेंजर पे बॉट बॉट करते हो___😁" , " 🌸====『 आदि बाबू तेरा baind बजा देंगे गलत आदेश मत देना________🙈😜 " , "🌸====『 अभी बोला तो दोबारा मत बोलना____🙂" , "🌸====『 बोल दे कोई नहीं देख रहा हे___ 🙄☢━💛🌹💛" , "🌸====『 हाय मैं मर जावा एके चुम्मा तो देदो काफी दिन से चुम्मी नहीं मिली_____😝🦋" , "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" , "🌸====『 बोलो मेरी जान क्या हाल है आपका _____😚 " , "🌸====『 चुप रह नहीं बाहर आके तेरा दांत तोड़ दूंगा___♡• || •___'[💔]~~🖤 " , "🌸====『 हां मेरी जान चलो तारों के शहर में रोमांस करेंगे _____😹🙈", "🌸====『 तेरी याद ना आये ऐसा कोई दिन नहीं ___😝🙈🙈🙈 " , "🌸====『 जिंदगी में लगने लगे कि कोई अपना नहीं है तो आ जाना मेरे पास में रख लूंगा _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 कल हवेली मिल जरा तू कुछ कम है___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान Mat करो आदि बाबू जी देख लेंगे_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『 बाबू तुम तो वही हो ना मेरे आदि बाबू बोस की चप्पल लेकर भाग गए चप्पल 420_________😹😹","🌸====『 चलो जानी हम सदी कर लेते हे भाग के______🙈😁", "🌸====『 हम मेरी जान बोलो क्या कम था ____🙂" , "💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो जाएगी...😍👈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("😝─MOYE─ •💜•─MOYE─😝", threadID);
   };
  
     if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("𝐒𝐚𝐝 𝐍𝐚𝐡 𝐡𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧.🫂 𝐉𝐨 𝐃𝐚𝐫𝐝 𝐃𝐢𝐤𝐡𝐭𝐞 𝐍𝐚𝐡𝐢 𝐕𝐨 𝐃𝐮𝐤𝐡𝐭𝐞 𝐁𝐚𝐡𝐮𝐭 𝐇𝐚𝐢 🤧", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️𝐇𝐌𝐌 𝐇𝐌𝐌 𝐍𝐀 𝐊𝐀𝐑𝐊𝐄 𝐒𝐈𝐃𝐇𝐀 𝐒𝐈𝐃𝐇𝐀 𝐁𝐎𝐋𝐎 𝐇𝐄𝐘 𝐌𝐀𝐑𝐑𝐘 𝐌𝐄 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🥺🥺🥺") || (event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺🥺🥺")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐊𝐘𝐀 , 𝐑𝐎 𝐊𝐘𝐔 𝐑𝐄𝐇𝐄 𝐇𝐎 , 𝐌𝐄 𝐇𝐔 𝐍𝐀 𝐓𝐎 𝐅𝐇𝐈𝐑 𝐊𝐘𝐔 𝐑𝐎𝐍𝐀 . 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐃𝐄𝐓𝐀 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐀𝐁𝐔 🤔🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐇𝐎𝐎𝐓 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀 𝐊𝐘𝐀 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };
  
  if ((event.body.toLowerCase() == "KavYa") || (event.body.toLowerCase() == "Ji")) {
     return api.sendMessag("𝐇𝐌𝐌 𝐁𝐀𝐁𝐘 😘😗", threadID);
   };

   if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🤦")) {
     return api.sendMessage("𝐀𝐑𝐄 𝐀𝐏𝐍𝐄 𝐌𝐔𝐇 𝐏𝐄 𝐊𝐘𝐔 𝐌𝐀𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐊𝐘𝐀 𝐇𝐔𝐀 ?😬", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("𝐇𝐘𝐄 𝐀𝐀𝐏𝐊𝐀 𝐂𝐇𝐀𝐒𝐇𝐌𝐀 𝐁𝐈𝐋𝐊𝐔𝐋 𝐁𝐄𝐊𝐀𝐑 𝐇𝐀𝐈  🤣", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("𝐉𝐘𝐀𝐃𝐀 𝐌𝐀𝐓 𝐇𝐀𝐍𝐒𝐎 𝐕𝐀𝐑𝐍𝐀 𝐃𝐀𝐍𝐓 𝐓𝐎𝐃 𝐃𝐔𝐍𝐆𝐀 🙂🤟", threadID);
   };
   
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("𝐄𝐍𝐍𝐈 𝐇𝐀𝐒𝐈 𝐊𝐘𝐔 𝐀𝐀 𝐑𝐄𝐇𝐈 𝐇𝐀𝐈 🤣 𝐄𝐒 𝐇𝐀𝐒𝐈 𝐊𝐀 𝐑𝐀𝐀𝐙 𝐊𝐘𝐀 𝐇𝐀𝐈𝐍 𝐁𝐀𝐓𝐀𝐎", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍😍😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("Haaye Rabba inna pyar🙊🙊", threadID);
   };

   if ((event.body.toLowerCase() == "@Rishika Sharma ") || (event.body.toLowerCase() == "BESTI") || (event.body.toLowerCase() == "@Kavya Sharma") || (event.body.toLowerCase() == "KA") || (event.body.toLowerCase() == "RA")) {
     return api.sendMessage("𝐌𝐄𝐑𝐈 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐊𝐘𝐔 𝐁𝐎𝐋𝐀 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐀𝐀𝐏 𝐁𝐎 𝐁𝐔𝐒𝐘 𝐇𝐎𝐆𝐈 🤐🤐", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("𝐒𝐀𝐀𝐋𝐎 𝐂𝐇𝐈𝐃𝐃𝐀 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 🙁👈", threadID);
   };
  
   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐓𝐀𝐁𝐈𝐘𝐀𝐓 𝐊𝐇𝐀𝐑𝐀𝐁 𝐇𝐀𝐈 𝐊𝐘𝐀 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐌𝐄𝐃𝐈𝐂𝐈𝐍𝐄 💊💉𝐋𝐄 𝐀𝐀𝐓𝐀 𝐇𝐔 😇", threadID);
   };

   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒😒")) {
    return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("𝐊𝐇𝐔𝐃 𝐁𝐀𝐍𝐀 𝐋𝐎 𝐓𝐔𝐌𝐊𝐎 𝐊𝐔𝐂𝐇 𝐍𝐀𝐇𝐈 𝐀𝐀𝐓𝐀 𝐊𝐘𝐀 😏👈", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️𝐌𝐀𝐍 𝐓𝐎𝐇 𝐀𝐂𝐂𝐇𝐀 𝐍𝐀𝐇𝐈 𝐊𝐀𝐌 𝐒𝐄 𝐊𝐀𝐌 𝐒𝐇𝐀𝐊𝐀𝐋 𝐓𝐎 𝐀𝐂𝐂𝐇𝐀 𝐊𝐀𝐑 𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 😝", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️𝐁𝐇𝐀𝐈 𝐓𝐄𝐑𝐈 𝐓𝐎 𝐍𝐀𝐀𝐊 𝐇𝐈 𝐄𝐓𝐍𝐈 𝐋𝐀𝐌𝐁𝐈 𝐇𝐀𝐈 𝐔𝐒𝐊𝐈 𝐉𝐀𝐑𝐔𝐑𝐀𝐓  𝐇𝐈 𝐍𝐀𝐇𝐈 𝐏𝐀𝐃𝐓𝐈 𝐇𝐎𝐆𝐈 𝐓𝐔𝐉𝐇𝐄 𝐓𝐎 🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️𝐀𝐀𝐍𝐊𝐇 𝐊𝐘𝐔 𝐌𝐀𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐄 𝐁𝐇𝐔𝐓 𝐒𝐇𝐀𝐑𝐄𝐄𝐅 𝐇𝐔 🥺🤟", threadID);
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("Hmm..Love you too baby 💋😘:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("️𝐍𝐀𝐌𝐄 𝐌 𝐊𝐘𝐀 𝐑𝐀𝐊𝐊𝐇𝐀 𝐇𝐀𝐈 𝐓𝐔𝐌 𝐊𝐀𝐌 𝐏𝐄 𝐃𝐇𝐘𝐀𝐍 𝐃𝐎 😝👈", threadID);
   };
  
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐊𝐘𝐀 , 𝐑𝐎 𝐊𝐘𝐔 𝐑𝐄𝐇𝐄 𝐇𝐎 , 𝐌𝐄 𝐇𝐔 𝐍𝐀 𝐓𝐎 𝐅𝐇𝐈𝐑 𝐊𝐘𝐔 𝐑𝐎𝐍𝐀 . 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐃𝐄𝐓𝐀 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️𝐌𝐀𝐓 𝐃𝐄𝐊𝐇𝐎 𝐌𝐄𝐑𝐈 𝐏𝐇𝐎𝐓𝐎 𝐌𝐀𝐈𝐍 𝐁𝐇𝐔𝐓 𝐊𝐀𝐋𝐀 𝐇𝐔 😢👈", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("BOT") == 0 || (event.body.indexOf("BOT") == 0)) {
    var msg = {
      body: `🍁🌼🌹 ${name} 🌹🌼🍁\n\n 
      
      
      ${rand} \n\n                       
    🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍𝐙𝐎𝐘𝐀`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }