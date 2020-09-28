const Discord = require("discord.js");
var len = 10;
var wid = 5;
var a = [];
var p1 ="";
var p2 ="";
var runde = 0; // erste runde ist schon das declaren zweite runde ist das annehmen
var p1r = true;
var p2r = false;
var steins = '0';
const mglkt = [];
var neu = false;
const p1_stein = '8';
const p2_stein = '9';
const p1_steinemoj = '🔵';
const p2_steinemoj = ':red_circle:';
const bg = ':white_circle:';
const spalte = '\n:one::two::three::four::five::six::seven::eight::nine::keycap_ten:\n \n';





function sieg(tss, poss2 , stein){
  var reihe = 0;



  while( a[poss2] === stein && reihe <= 4 ){
        poss2 += tss;
        reihe++;
        console.log(a[poss2]);
    }
  if(reihe > 3){

        game = false;
        runde = -1;
        return true;
  }
  else {
    return false;
  }

}

function output2()
{

  output = "";
  len2 = len;
  var einr = 0;
  var wid2 = 0;

  while(wid2 < wid)
  {

  while (len2 >  0)
  {
      if(a[len2+einr] === '0')
      {
        output += bg;
      }
      if(a[len2+einr] === '8')
      {
        output += p1_steinemoj;
      }
      if(a[len2+einr] === '9')
      {
        output += p2_steinemoj;
      }

      len2--;
  }
  output += ' \n';
  len2 = len;
  wid2++;
  einr += len;


  }


  var spalte2 = spalte;
   spalte2 += output;
   output = spalte2;
   output += '\n \n Dieser alte Sack ist nun Dran:' ;
   output = ":large_blue_circle: VIERGEWINNT :red_circle:  \n \n" + output;
   return output;



}

module.exports.run = async (bot, message, args , game) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//console.log(a);
message.content = message.content.toLowerCase();
if(message.content === "!viergewinnt stop")
{
  neu = true;
}

if(game === false)
{
  p1 = message.author.id;
  message.channel.send("Spieler 1: " + message.author);
  console.log(p1);
  message.channel.send('Spieler 2 melde dich mit "v viergewinnt"')

}

if(runde === 1 && message.content === "v viergewinnt")
{
  p2 = message.author.id;
  message.channel.send(message.author + " hat die EPISCHE Herrausforderung angenommen");
  runde++;
  return;

}
else if(runde === 1 )
{
  return;
}

if(message.content.charAt(0) === 'v' || game === false)
{

}
else
{
  return;
}

///////////////////////////////




console.log(game);
    if(game){}
    else
    {

      if(args[0] === "l" && args[1]){
        len = parseInt(args[1]);
      }
      if(args[0] === "t" && args[1]){
        wid = parseInt(args[1]);
      }
      if(args[2] === "l" && args[3]){
        len = parseInt(args[3]);
      }
      if(args[2] === "t" && args[3]){
        wid = parseInt(args[3]);
      }
    }



    if(args[0]  >= (len + 1) || args[0] < 1){
      message.channel.send("Einfach NÖ!");

      return;
    }

    var len2 = len;
    var wid2 = 0;
    var zV = len * wid;

    var output = '';
    var einr = 0;
    var poss = undefined;


    if(runde === 0 || neu )
    {
      while (zV >= 0 )
      {
        a[zV] = einr.toString();
        zV--;
      }
      neu = false;
      message.channel.send(output2());
    }
    zV = 0;




      einr = (wid - 1) * len;

      console.log("runde : " + runde)


      if(p1r && p1 === message.author.id && runde > 0)
      {

        poss = parseInt(args[0]);
        if(!poss)
        {
          return;
        }
        poss = 1 + len - poss ;
        p1r = false;
        p2r = true;
        steins = p1_stein ;
      }
      else if (p2r && p2 === message.author.id && runde > 0)
      {
        poss = parseInt(args[0]);
        if(!poss)
        {
          return;
        }
        poss = 1 + len - poss;
        p2r = false;
        p1r = true;
        steins = p2_stein;
      }
      else
      {
        runde ++;
        return;

      }

      //poss = parseInt(args[0]);
      var poss3 = poss;

      wid2 = wid;

      if(!poss){
        steins = '0';
        poss = 1;

      }
        while (a[poss] === '0' && wid2 > 0) {
            poss += len;
            wid2--;
        }

         poss -= len;
          console.log("poss : " + poss);
        a[poss] = steins;

      //  console.log(a);
      einr = 0;

    output += output2();

    len2 = len;

 let l = a.length;
var reihe = 0;

 console.log("runde : "+runde);
    message.channel.send(output);

var nnn = false;

    if(poss3 < len - 2)
    {
      if(sieg(1,poss,steins))
      {
        nnn = true;
      }
      else if(sieg(len + 1, poss,steins))
      {
        nnn = true;
      }
      else if (sieg(-1 * len + 1, poss,steins) )
      {
        nnn = true;
      }


    }

    console.log("poss3 : " + poss3);

    if(poss3 > 3)
    {
      if( sieg(-1,poss,steins) >= 4)
      {

        nnn = true;
      }
      else if(sieg(len - 1, poss,steins))
      {
        nnn = true;

      }else if (sieg(-1 * len - 1, poss,steins))
      {
        nnn = true;
      }
    }

    if(sieg(len , poss,steins))
    {
      nnn = true;
    }
    else if(sieg(-1 * len , poss,steins))
    {
      nnn = true;
    }




      if(nnn)
      {
        game = true;
        runde = 3;
        message.channel.send("GEWONNEN" + message.author);
        neu = true;
      }
      else
      {
        runde++;
      }


}




module.exports.help = {
  name: "viergewinnt"
}
