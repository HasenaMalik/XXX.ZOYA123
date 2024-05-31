//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "Bye",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU",  ///////////@prem-babu3608
	description: "THIS BOT IS ME PREM SHARMA KO",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("BY") ||
     react.includes("bye") || react.includes("by") || react.includes("Allah hafiz") ||
react.includes("bye") ||
react.includes("BYE")) {
		var msg = {
				body: `𝐁𝐘𝐄 𝐁𝐘𝐄 🙋‍♂️ 𝐓𝐀𝐊𝐄 𝐂𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 😇`,attachment: fs.createReadStream(__dirname + `/ZOYA/Bye.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }