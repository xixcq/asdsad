const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`uyar` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('**Kimi uyaracağımı yazmadın!**');
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komutu kullanmak için gerekli yetkiye sahip değilsin : ``BAN_MEMBERS``")
  if (message.mentions.users.size < 1) return message.reply('**Uyarı sebebini yazmalısın!**').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('➳Eylem:', 'Uyarı verme')
  .addField('➳Kullanıcı:', `@` + `${user.username}#${user.discriminator}`)
  .addField('➳Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('➳Sebep', reason);
  return message.channel.sendEmbed(embed);
  console.log(`uyar komutu ${message.author.username} Tarafından kullanıldı`)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};
