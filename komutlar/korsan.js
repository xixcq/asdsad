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
    .setAuthor('Korsan Her Zaman Kötü Olmak Zorunda Değiller, Hadi Biraz Gülelim ;)')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.giphy.com/media/3ohhwMMUQDGUvJn6rC/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
  console.log(`Korsan komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['korsan'],
  permLevel: 0
};

exports.help = {
  name: 'korsan',
  description: 'korsan',
  usage: 'korsan'
};
