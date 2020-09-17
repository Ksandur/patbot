const Discord = require("discord.js");
module.exports = {
	name: "help",
	description: "Help menu",
	execute(message, args) {
        const helpMenu = new Discord.RichEmbed()
        .setTitle("Help Menu")
        .addField("p?build", "Gives more info on the current build.")
        .addField("p?help", "Opens this menu")
        .addField("p?insult", "Feeling good? Time to ruin it for you!")
        .addField("p?rick", "Do it right or it will 'nope' you. Stakes are high.")
        .addField("p?meme", "Only deepest of fried memes to satisfy your depression.")
        .setColor(0x3399FF)
        .setTimestamp()
        .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
        message.channel.send(helpMenu);
	},
};