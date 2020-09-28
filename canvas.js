const Discord = require("discord.js");
const Jimp = require('jimp');

module.exports.run = async (bot, message, args) => {

    message.attachments.forEach(attachment => {
        const url = attachment.proxyURL;
       
       
        console.log (args)

        var args2=args

        var   width= parseInt(args2[0])
        var   height = parseInt(args2[1])

        console .log(height);

   Jimp.read(url, (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(height, width) // resize
      .write('D:/Users/sheesh/Desktop/resize/GetTheFuckOutOfHere.jpg'); 
 
      message.channel.send("Maße: " + width + " x " + height, {
    file:('D:/Users/sheesh/Desktop/resize/GetTheFuckOutOfHere.jpg')
});
});


  });
}


module.exports.help = {
  name: "resize"
}
