const Discord = require("discord.js");
module.exports = {
	name: "meme",
	description: "Send a random meme",
	execute(message, args) {
        const { memes } = require("../register/memes.json");
        var memeEmbed = new Discord.RichEmbed()
        .setTitle("laugh.exe")
        .setImage(memes[Math.floor(Math.random() * memes.length)])
        .setColor(0x3399FF)
        .setTimestamp()
        .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
        message.channel.send(memeEmbed);  
	},
};