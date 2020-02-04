const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
  console.log(`yaz-bot komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazbot', 'yazdırbot'],
  permLevel: 0
};

exports.help = {
  name: 'yaz-bot',
  description: '[Admin Komutu]',
  usage: 'yaz-bot [yazdırmak istediğiniz şey]'
};
