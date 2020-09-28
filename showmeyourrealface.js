const Discord = require("discord.js");
var bot = new Discord.Client();
var isReady = true;

const wikbot = 'commands/dat/maul.mp3';
const wikbild = 'commands/dat/proxy.duckduckgo.com.jpeg';

module.exports.run = async (bot, message, args) => {

  var spiel = wikbot;
  if(!args[0])
  {
   message.channel.send("NÖ")
    
  }

  message.channel.send("Ich bin ein Wikingerbot und ich bin hier um euch zu triggern! REEEEEEE", {
      file: wikbild // Or replace with FileOptions object
  });


  if(!message.member.voiceChannel)
  {
    message.channel.send("Go inn voice to get full expirience")
    return;
  }


    message.member.voiceChannel.join().then(function(connection){
      const dispatcher = connection.playFile(wikbot);
      console.log("na min");
     dispatcher.on("end", end => {
       message.member.voiceChannel.leave();
});

    });



}

module.exports.help = {
  name: "showmeyourrealface"
}
