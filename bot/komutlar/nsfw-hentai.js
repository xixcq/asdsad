const Discord = require('discord.js');
const superagent = require('superagent');
const DBL = require('dblapi.js')

exports.run = (client, message, args) => {

  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'}) 
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("Bu kanal bir NSFW kanalı değil!")
  }
  
//gelince bana yaz
console.log(`hentai komutu ${message.author.username} Tarafından kullanıldı`)
};
 exports.conf = {
   enabled: false,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'hentai',
   description: '+18 Resim Gösterir',
   usage: 'nsfw-anal'
 };
