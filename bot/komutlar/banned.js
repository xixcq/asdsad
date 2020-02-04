const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Admin Hazırlanıyor, Hazırlanıyor, ve Mükkemmel Bir Atlayış Alkış (şak şak şak şak)')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.giphy.com/media/qPD4yGsrc0pdm/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
  console.log(`Banned komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'banned',
  description: 'Dene ve Gör :D',
  usage: 'banned'
};
