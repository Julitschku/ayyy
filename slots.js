const Discord = require("discord.js");
var slots = ["<:eggplan:554095417546244097>","<:hearth:554092925404053514>","<:cherry:554092948191576066>","<:Cowoncy:538820482917597184>","<:o_:554092905560539156>","<:w_:554095980077907988>"];
var moving = "<a:slot:538832678766641152>";
let coins = require("./dat/coins.json");

module.exports.run = async (bot, message, args) => {

    let uCoins = coins[message.author.id].coins;

    var amount;
    amount = parseInt(args[0]);
    if(!amount){
		message.channel.send("**🚫 | **, Please specify the slot amount!");
		return;
    }
    if(amount<=0){
		message.channel.send("**🚫 | **, Invalid arguments!");
		return;
    }
    if(amount>=uCoins){
		message.channel.send("Du hast nicht so viel!!!");
		return;
    }


var win = 0;

//Decide results

var rslots = [];
var rand = Math.random();
var win = 0;
var logging = 0;
if(rand<=.20){//1x 20%
    win=amount;
    rslots.push(slots[0]);
    rslots.push(slots[0]);
    rslots.push(slots[0]);
    logging = 0;

}else if(rand<=.40){ //2x 20%
    win=amount*2;
    rslots.push(slots[1]);
    rslots.push(slots[1]);
    rslots.push(slots[1]);
    logging = 1;
}else if(rand<=.45){ //3x 5%
    win=amount*3;
    rslots.push(slots[2]);
    rslots.push(slots[2]);
    rslots.push(slots[2]);
    logging = 2;
}else if(rand<=.475){ //4x 2.5%
    win=amount*4;
    rslots.push(slots[3]);
    rslots.push(slots[3]);
    rslots.push(slots[3]);
    logging = 3;

}else if(rand<=.485){ //10x 1%
    win=amount*10;
    rslots.push(slots[4]);
    rslots.push(slots[5]);
    rslots.push(slots[4]);
    logging = 9;

}else{
    logging = -1;
    var slot1 = Math.floor(Math.random()*(slots.length-1));
    var slot2 = Math.floor(Math.random()*(slots.length-1));
    var slot3 = Math.floor(Math.random()*(slots.length-1));
    if(slot3==slot1)
        slot2 = (slot1+Math.ceil(Math.random()*(slots.length-2)))%(slots.length-1);
    if(slot2==slots.length-2)
        slot2++;
    rslots.push(slots[slot1]);
    rslots.push(slots[slot2]);
    rslots.push(slots[slot3]);
}




    coins[message.author.id] = {
      coins: coins[message.author.id].coins + (amount*logging)
    }



//Display slots
var machine = "**`___SLOTS___  `**\n"+moving+" "+moving+" "+moving+"   "+" \n`|         |`\n`|         |`";
message.channel.send(machine)
.then(message => setTimeout(function(){


var machine = "**`___SLOTS___  `**\n"+rslots[0]+" "+moving+" "+moving+"   "+"   "+"\n`|         |`\n`|         |`";
message.edit(machine)
				.then(message => setTimeout(function(){


var machine = "**`___SLOTS___  `**\n"+rslots[0]+" "+moving+" "+rslots[2]+"   "+"  "+"\n`|         |`\n`|         |`";
message.edit(machine)
				.then(message => setTimeout(function(){


var machine = "**`___SLOTS___  `**\n"+rslots[0]+" "+rslots[1]+" "+rslots[2]+"   "+"   "+"\n`|You won:" +win+"|`  "+"\n`|         |`";
message.edit(machine);


},1000));
},700));
},1000))}

module.exports.help = {
  name: "slot"
}
