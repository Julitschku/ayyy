const Discord = require("discord.js");
var bot = new Discord.Client();
var isReady = true;



module.exports.run = async (bot, message, args) => {


 

     message.member.voiceChannel.leave();

message.channel.send("disconnected ┬─┬ ノ( ゜-゜ノ)")
}

module.exports.help = {
  name: "dc"
}
