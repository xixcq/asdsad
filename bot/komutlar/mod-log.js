const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:590136777155543040>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`mlog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Modlog Kanalı Zaten ayarlı değil`).setColor("BLACK"));
    
    db.delete(`mlog_${message.guild.id}`)
   message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`ModLog Kanalı başarıyla sıfırlandı`).setColor("BLACK"));
 message.react('602370840280956937')
  
    return
  }
  
if (!logk) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bir modlog kanalı belirt`).setColor("BLACK"));
 

db.set(`mlog_${message.guild.id}`, logk.id)

message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı`).setColor("BLACK"));
 message.react('602370840280956937')
console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};