const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require('fs');


let kanal = JSON.parse(fs.readFileSync('./jsonlar/davetlog.json','utf8'))

    var prefix = ayarlar.prefix


exports.run = async(client,message,args)=> {

   if(!message.member.hasPermission("MANAGE_GUİLD")) return message.reply("Bu komutu kullanabilmek için ``Sunucuyu yönet`` yetkisine sahip olmalısın.");

   let channel = message.mentions.channels.first();

   if(!channel) {
       const channel = new Discord.RichEmbed()
       .setTitle(":x: Bir kanal etiketleyin")
       return message.channel.send(channel)
   }
   if(!kanal[message.guild.id]) {
       kanal[message.guild.id] = {
           kanals: channel.id
       };
   }

fs.writeFile("./jsonlar/davetlog.json", JSON.stringify(kanal), (err) => {
console.log(err)
});

const başarı = new Discord.RichEmbed()
.setTitle(`Davet-log kanalı başarıyla ${channel} olarak ayarlandı`)
return message.channel.send(başarı);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davet-kanal"],
    permlevel: 0
};
exports.help = {
    name: "davet-log"
};