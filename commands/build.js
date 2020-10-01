const Discord = require("discord.js");
module.exports = {
	name: "build",
	description: "Current build info.",
	execute(message, args) {
        var aboutBuild = new Discord.RichEmbed()
        .setTitle("Build Information")
        .addField("Current Build:", "PTB alpha v2.0.15")
        .addField("Current Patch", "Patch PTB-7")
        .setImage("https://i.imgur.com/XpZA1TU.png")
        .setColor(0x3399FF)
        .setTimestamp()
        .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
        message.channel.send(aboutBuild);
	},
};