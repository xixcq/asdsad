const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  //const embed = new Discord.RichEmbed()
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    //msg.channel.send(embed);
    .query({ type: 'pgif'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    //  msg.channel.send(embed);
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil!")
    //msg.channel.send(embed);
  }
  console.log(`nsfw gif komutu ${msg.author.username} Tarafından kullanıldı`)
};
//msg.channel.send(embed);
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'nsfw-gif',
   description: '+18 Resim Gösterir',
   usage: 'nsfw-gif'
 };