const Discord = require("discord.js");
var bot = new Discord.Client();
var isReady = true;



module.exports.run = async (bot, message, args) => {

     
    

message.member.voiceChannel.join()

message.channel.send("connected (╯°□°）╯︵ ┻━┻")
}

module.exports.help = {
  name: "join"
}
