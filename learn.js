const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let msgs = require("../../readerbot/msgs.json");

module.exports.run = async (bot, message, args) => {

console.log();
if(message.author.bot){return;}
if(message.content.charAt(0).toLowerCase() === message.content.charAt(0).toUpperCase()){return;}

	let chat = [];


	if(!bot.msgs[message.channel.id])
	{
		mm = 0;
	}
	else{
		mm = bot.msgs[message.channel.id].nummer + 1;
	}

	message.content = message.content.toLowerCase();
	if(!bot.msgs[message.channel.id])
	{
		chat[0] = message.content;
	}
	else
	{
		chat = bot.msgs[message.channel.id].message;
	}

	chat[mm ] =  message.content;

	if(chat[mm] === chat [mm - 1] && chat[mm - 2] === chat [mm - 1])
	{

		return;
	}

  bot.msgs [message.channel.id] = {
    message: chat,
		nummer: mm
  }
  fs.writeFile ("./msgs.json", JSON.stringify(bot.msgs, null , 3), err =>{
      if(err)throw err;
  });
	console.log("message : " + message.content.toUpperCase() + "// server : " + message.guild.name + " // channel : "+ message.channel.name);


}

module.exports.help = {
  name: "learn"
}
