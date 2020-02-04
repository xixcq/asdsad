const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
    if(!message.guild) {
        const hata = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(":x: Bu komut özel mesajlarda kullanılamaz.")
        .setTimestamp()
        return message.channel.send(hata)
    }
if(message.author.bot) return; 
if(message.channel.type = "dm") return;

db.delete(`ototag_${message.guild.id}`);

return message.reply("Tag başarıyla sıfırlanmıştır.")
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permlevel : 0
};

exports.help = {
    name: "ototag-sıfırla"
};