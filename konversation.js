const Discord = require("discord.js");
var erschießen = false;
let coins = require("./dat/coins.json")
const fs = require("fs");
allowedchannels = require ("./dat/allowedchannels.json");

var owos = 0;
var ppp = false;
let answ = require("./dat/answ.json");
let mess = [];
var zuff = 0;

function indemhalt(Inhalt)
{
//console.log(Inhalt);
	return Inhalt;
}

function antwort (Inhalt)
{
	let lulu = 0;

	while(lulu < answ.length)
	{
		if(answ[lulu].m === Inhalt)
		{

				zuff += Math.ceil(Math.random() * 3);
				if(zuff > 1000)
				{
					zuff = 0;
				}
				let mn = zuff %  answ[lulu].l.length ;
				console.log(mn+" zuff "+ zuff);

				return answ[ answ[lulu].l[mn] ].m;
		}

		lulu++;
	}

	return ;

}


module.exports.run = async (bot, message, args) => {

  

	var z = false;

   let Inhalt = "";
    
       let fghj = 0;
    var messi = "";
	
	
	for( n = 0; message.content.length >= n; n++)
	{
		if(message.content.charAt(n).toLowerCase() != message.content.charAt(n).toUpperCase() || message.content.charAt(n) === " " || message.content.charAt(n) === "?")
		{
			Inhalt = Inhalt + message.content.charAt(n);
			fghj++;
		}
	}

    
    Inhalt = Inhalt.toLowerCase();
    
    

    if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}

let coinAmt = Math.floor(Math.random() * 15) + 1;
let baseAmt   = Math.floor(Math.random() * 15) + 1;


if(coinAmt === baseAmt){
  coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinAmt
  };
fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
  if (err) {console.log(err)}
});
let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#0000FF")
.addField("💸", `${coinAmt} coins added!`);

//message.channel.send(coinEmbed);
}

at_bot = toString(bot.user.username);

let forbid = true;
	let allow = allowedchannels.allow;
	let ufufu = allowedchannels.anzahl;
	while(ufufu >= 0)
	{
		if(message.channel.name === allow[ufufu] && forbid)
		{
			forbid = false;
		}

		//console.log(forbid);
		//console.log(message.channel.name);
		//console.log(allow[ufufu]);
		ufufu--;
	}


	if(forbid)
	{
	return;
	}



	//indemhalt(Inhalt);
	a = antwort(Inhalt);
	if(!a){
		return;
	}

    message.channel.send(a);

    return ;

}

module.exports.help = {
  name: "konversation"
}
