//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "MISS-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ///////@prem-babu3608
	description: "THIS BOT IS MR PREM BABU",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Miss") ||
     react.includes("I miss") || react.includes("miSS") || react.includes("miSs") ||
react.includes("miss") ||
react.includes("Miss")) {
		var msg = {
				body: `‌𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑱𝑨𝑨𝑵 😌🤘`,attachment: fs.createReadStream(__dirname + `/ZOYA/missyou.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }