const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'neko'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil!")
  }
  console.log(`nsfw neko komutu ${msg.author.username} Tarafından kullanıldı`)
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'neko',
   description: '+18 Resim Gösterir',
   usage: 'nsfw-neko'
 };
