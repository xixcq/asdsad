const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('📢 Duyuru!')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x1aff00)
    .setDescription(`\n➤  ${mesaj}`)
    return message.channel.sendEmbed(embed);
console.log(`Duyuru komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
