const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
module.exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("Falcon")
  .addField(`sahip bey dmden davet gönderdim 😜`,` Falcon`)
    if (message.author.id !== "481121978426589184") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Botun Ekli Olan Sunucu ID Giriniz`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))
message.channel.send(embed)
console.log(`Davet al komutu ${message.author.username} Tarafından kullanıldı`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 3
};

exports.help = {
  name: 'invite',
  description: 'davet sistemi .',
  usage: 'invite'
};