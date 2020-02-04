  const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client,message,args) => {
var sahip = message.guild.members.get("481121978426589184")
if (message.member !== sahip)return message.channel.send("**Hey, `" + message.author.username + "` Sahibimin komutunu kullanamazsın.!**");

    try {
        if (!/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i.test(args.join(' '))) {

          return message.channel.send("Geçersiz Link.");
        }
    
        await client.user.setAvatar(args.join(' '));

        let embed = new Discord.RichEmbed()
        .setDescription(`${client.user.username} Avatar Değiştirildi`)
        .setImage(args.join(' '));
        
        message.channel.send(embed);
      }
      catch (e) {
        console.error(e);
      }
console.log(`Bot avatar komutu ${message.author.username} Tarafından kullanıldı`)
}

module.exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ["bavatar","avatarbot"],
   permLevel: 0
 };

 module.exports.help = {
   name: 'botavatar',
   description: 'Botun avatarını değiştirir.',
   usage: 'botavatar'
 };