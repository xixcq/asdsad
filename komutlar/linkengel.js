const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  if (!args[0]) return message.channel.send(`Link engelleme fitresini ne yapacağım? Aç ya da kapat yaz. \`${prefix}link-engel <aç/kapat>\``)
  
  if (args[0] == 'aç') {
    db.set(`link_${message.guild.id}`, true)
   message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Link engelleme filtresi başarıyla açıldı.<a:okey:602370840280956937>').setColor("Black")); 

  };
  if (args[0] == 'kapat') {
    db.set(`link_${message.guild.id}`, false)  
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Link engelleme filtresi başarıyla kapatıldı.<a:okey:602370840280956937>').setColor("Black")); 
  };
console.log(`Link-engel komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['link','link-engelle'],
  permLevel: 0,
    kategori:'modersayon'
};

exports.help = {
  name: 'link-engelleme',
  description: 'Klink engelleme sistemini açarsınız/kapatırsınız.',
  usage: 'link-engelleme'
};