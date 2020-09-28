const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    
  var filelist = fs.readdirSync('.../commands');

    message.channel.send(filelist);

}
 
module.exports.help = {
  name: "help"
}
