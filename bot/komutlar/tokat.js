const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Kime vuracağım Bana Vahiy Mi Gelecek? hayır, Öyleyse Bilmeliyim?');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(255, 165, 0)
    .setImage(`https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif`)
    .setDescription(` ${mesaj} ` + 'Oww Bu Kötüydü İşte . . .' + message.author.username + ' Fena Tokat Attı ama nasıl attı uff')
    return message.channel.sendEmbed(embed);
  console.log(`tokat komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tokatat', 'tokatla'],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'İstediğiniz kişiyi Öpersiniz',
  usage: 'tokat'
};
