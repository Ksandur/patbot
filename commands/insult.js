const Discord = require("discord.js");
module.exports = {
	name: "insult",
	description: "Insult yourself",
	execute(message, args) {
        const { insults } = require("../register/insults.json");
        const insult = new Discord.RichEmbed()
        .addField("Hey you", insults[Math.floor(Math.random() * insults.length)])
        .setColor(0x3399FF)
        .setTimestamp()
        .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
        message.reply(insult);
	},
};