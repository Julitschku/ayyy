const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
  const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const konversation = require("./commands/konversation.js");
var vg = false;
const viergewinntt = require("./commands/viergewinnttttt.js")
var standartchannel = "552612122765295677";
var servers = {};



fs.readdir("./commands/", (err, files) => {
////VIERGewinNT KANN MAN NICHT ÜBER COMMANDfILE AUFRUFEN
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Does Gay, Is Gay, Makes Gay", {type: "playing"});
//channel.send("Ich bin da!");

});






bot.on("message", async message => {
//console.log(message.content)
  if(message.guild.id== 596934529927741442) return;
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
 
 
  let prefix = botconfig.prefix; 
 
 
 if (!message.content.startsWith(prefix)) return;


  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  //console.log(commandfile);



  if(commandfile === viergewinntt || vg)
  {

    if(args[0]==="stop")
    {
      vg=false
      message.channel.send("Spiel beendet Nerds");
    }
    else
    {
      console.log("VierGewinntEventStart");
      viergewinntt.run(bot , message , args , vg)
      vg = true;

    }

  }
   if(commandfile) {
  		commandfile.run(bot,message,args);
	}
	else
	{
		konversation.run(bot,message,args);
	}
  //if(commandfile = )

});


bot.login(tokenfile.token);
