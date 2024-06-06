 const fs = require("fs");
module.exports.config = {
	name: "zoya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner ") ||
     react.includes("Zoya") || 
react.includes("@️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️︻ཧྱེཬྃ༅面๏ߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺὃ  T.T THE  LEGEND ᵔᴥᵔ FROM DEHLIཆྎྎྏྏཾ༵ ๏ ՁΟՁᏎ ๏ O.o ︻ཧྱེཬྃ༅面๏ߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺߺὃὃ O.o ︱ZOYA︱7R1CK3R︱〖ホ〗ヽ・　T.T")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆 ★\n\n✦🌸===『*★🌸===ज़ोया बाबू✦\n\n★★᭄𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 :\n\n✦/https://www.facebook.com/mian.838794?mibextid=ZbWKwL=  ✦ \n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 😁\n 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐀 𝐋𝐔𝐊 😁?https://www.facebook.com/profile.php?id=61559376917911&mibextid=ZbWKwL`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }