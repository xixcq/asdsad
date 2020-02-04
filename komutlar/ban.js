const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
 if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yeterli yekiye sahip değilsin ``BAN_MEMBERS``")
  if (reason.length < 1) return message.reply('Kimi banlayacagımı yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Ban sebebini yazmalısın.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);
console.log(`Ban komutu ${message.author.username} Tarafından kullanıldı`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yasakla'],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban [kullanıcı] [sebep]'
};
