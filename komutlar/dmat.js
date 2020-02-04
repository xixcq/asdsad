const Discord = require('discord.js');


exports.run = (client, message, args) => {     
  if (!message.guild) {
  const dmuyari = new Discord.RichEmbed()
  .setDescription(`:x: Bu komut özel mesajlarda kullanıma kapatılmıştır.`)
  return message.author.send(dmuyari); }
if (message.author.bot === true) {
  return;
}
  let guild = message.guild;
  let mesaj = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (mesaj.length < 1) return message.channel.send('Ne mesajı göndereceğim?');
  if (message.mentions.users.size < 1) return message.channel.send('Peki ya kime mesaj atacağım?').catch(console.error);
  message.channel.send('Mesajını kullanıcıya başarıyla ilettim.')
  const mesajla = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`Sana bir mesaj geldi!`)
  .setFooter(`Gönderildiği Sunucu: ${guild.name}`)
  .setTimestamp()
  .setDescription(`Mesaj İçeriği: ${mesaj}`);
  return user.send(mesajla);
console.log(`Dm-at komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mesajgönder', 'mesajyolla'],
  permlevel: 0
};

exports.help = {
  name: 'mesajat',
  description: 'Bir kullanıcıya özel mesaj atarsınız.',
  usage: 'mesajat'
};