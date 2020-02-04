const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {

      if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }

     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     let mesaj = args.join(' ');
     if (!mesaj) return message.channel.send("⛔ Ototag ayarlamak için bir değer belirtmelisiniz.  `f!ototag | - `"); 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
      await db.set(`ototag_${message.guild.id}`, mesaj)
  const basari = new Discord.RichEmbed()
  .setColor("RANDOM")
      .setDescription(`Sunucunuz otomatik olarak verilecek tag \`${mesaj}\` olarak belirlenmiştir. log mesajlarını açmak isterseniz f!ototag-kanal <#kanal>`)
  return message.channel.send(basari)

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ototag',
}