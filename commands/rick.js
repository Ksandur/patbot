const Discord = require("discord.js");
module.exports = {
	name: "rick",
	description: "The white or green rick roll.",
	execute(message, args) {
        if(args[0] === 'white'){
            message.delete
            message.channel.send("Please wait...")
            .then(message => {
                message.delete(3500);
            });
            var whiteRick = new Discord.RichEmbed()        
            .addField('[Intro]', '*music*')
            .addField('[Verse 1]', "We're no strangers to love \n You know the rules and so do I \n A full commitment's what I'm thinking of \n You wouldn't get this from any other guy")
            .addField('[Pre-Chorus 1]', "I just wanna tell you how I'm feeling Gotta make you understand")
            .addField('[Chorus]', 'Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you')
            .addField('[Verse 2]', "We've known each other for so long \n Your heart's been aching but you're too shy to say it \n Inside we both know what's been going on \n We know the game and we're gonna play it")
            .addField('[Pre-Chorus 2]', "And if you ask me how I'm feeling \n Don't tell me you're too blind to see")
            .addField('[Chorus]', 'Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you')
            .addField('[Bridge]', "(Ooh give you up) \n (Ooh give you up) \n (Ooh) Never gonna give, never gonna give (give you up) \n (Ooh) Never gonna give, never gonna give (give you up)")     
            .addField('[Verse 2]', "We've known each other for so long \n Your heart's been aching but you're too shy to say it \n Inside we both know what's been going on \n We know the game and we're gonna play it")
            .addField('[Pre-Chorus 1]', "I just wanna tell you how I'm feeling \n Gotta make you understand")
            .addField('[Chorus]', "Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you \n Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you \n Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you")  
            .attachFiles(['files/rrck.mp4'])   
            .setColor(0x3399FF)
            .setTimestamp()
            .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");      
            message.channel.send(whiteRick);
        }
        else if(args[0] === "green"){
            message.delete
            var greenRick = new Discord.RichEmbed()
            .addField('PICKLE RIIIIICK', "Omg pickle rick is so funny I was up really late on a school nite and my mom was asleep and I laughed so hard I peed my pants!!!! She woke up and said I was grounded and I said, 'I'm too smart for school I'm pickle rickkkkkkkk!!!' and then the next day she packed all her things and left without saying goodbye idc though moms are dumb anyway not anyways most people get that confuzed hahahaha 🥒")
            .setColor(0x3399FF)
            .setTimestamp()
            .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
            message.channel.send(greenRick);
        }
        else{
            var negativeEmbed = new Discord.RichEmbed()
            .addField('Nope', 'You failed')
            .setColor(0x3399FF)
            .setTimestamp()
            .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
            message.channel.send(negativeEmbed);
        }
	},
};