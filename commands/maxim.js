const Discord = require("discord.js");
module.exports = {
	name: "maxim",
	description: "Just a blyat command.",
	execute(message, args) {
        var maximMessage = new Discord.RichEmbed()
        .setTitle("Maxim Mode")
        .addField("сука блять")
        .addField("ARE YOU GQY :OTHQRFUCKER")
        .setColor(0x3399FF)
        .setTimestamp()
        message.channel.send(maximMessage);
	},
};