const Discord = require("discord.js");
var bot = new Discord.Client();
let x = true;
const shutup1 = 'commands/dat/shutup1.mp3';
const shutup2 = 'commands/dat/shutup2.mp3';
const shutup3 = 'commands/dat/shutup3.mp3';
const shutup4 = 'commands/dat/shutup4.mp3';

var rand = 1

module.exports.run = async (bot, message, args) => {


  const talkedRecently = new Set();


  if(!args[0])
  {
        message.channel.send("Du solltest einen Nutzer eingeben!");
        return;weils 
  }



  if(!message.member.voiceChannel)
  {
    message.channel.send("you not in voize")
  return;
  }
 //message.channel.send("er ist nun still")
  let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
  message.member.voiceChannel.join();

  bot.on('guildMemberSpeaking', (user, speaking) => {


    if( user==User)
    {
      console.log(talkedRecently);
      if (talkedRecently.has(user.id)) {
       console.log("cooldown triggered")
} else {

      

      message.member.voiceChannel.join().then(connection => {
        var arr = ['commands/dat/shutup4.mp3','commands/dat/shutup3.mp3','commands/dat/shutup2.mp3' ,'commands/dat/shutup1.mp3'];
    rand = Math.random()*3;  
   // rand =rand; 
  
        const dispatcher = connection.playFile(arr[parseInt(Math.floor(rand))]);
        const receiver = connection.createReceiver();

        dispatcher.on("end", end => {
              

        });
    });
       
    talkedRecently.add(user.id);
    setTimeout(() => {
      //entfernt user nach ner minute wieder
      talkedRecently.delete(user.id);
    }, 2000);
}

    }

  });

}
module.exports.help = {
  name: "shutup"
}