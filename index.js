const fs = require("fs");
const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("PatBot is active!")
    client.user.setActivity("p?help", { type: "LISTENING" });
})

client.on("message", message=>{
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if(command === "ab"){
        if(message.author.id !== "177809247827001345"){
            return;
        }
        else {
            if(args[0] === "g"){
                var devabPing = new Discord.RichEmbed()
                    .setTitle("Dev About Stats")
                    .addField("Guild Count:", "`" + client.guilds.size + "`")
                    .setColor(0x3399FF)
                    .setTimestamp()
                            .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
            
                message.channel.send(devabPing);
            }
            else if(args[0] === "p"){
                var devabPing = new Discord.RichEmbed()
                    .setTitle("Dev About Stats")
                    .addField("Current Latency", "`" + `${Date.now() - message.createdTimestamp}` + " ms`")
                    .setColor(0x3399FF)
                    .setTimestamp()
                .setFooter("PatBot PTB alpha v2.0 by accurates#0001 😎", "https://i.imgur.com/XpZA1TU.png");            
                message.channel.send(devabPing);
            }
            else{
                message.channel.send("**Error** ```args[0] was not defined.```");
            }
        }
    }
    
    if (!client.commands.has(command)) return;

    try {
	    client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("This command failed to execute! Sending errorcode.")
	    message.channel.send("```" + error + "```");
    }
});

client.login(config.token);