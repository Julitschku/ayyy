const Discord = require("discord.js");
let coins = require("./dat/coins.json");


module.exports.run = async (bot, message, args) => {

if(message.author.id != "343816056600657932" && message.author.id != "314849369801097236")return;
      coins[message.author.id] = {
        coins: coins [message.author.id].coins + parseInt((args))

    }
    message.channel.send("Ich habe dir " + args + " Coins hinzugefügt!");
}

module.exports.help = {
  name: "add"
}
