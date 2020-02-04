const Discord = require('discord.js');
const { get } = require('snekfetch')

exports.run = async(client, message, args) => {
    if(!message.guild) {
        const özel = new Discord.RichEmbed()
        .setTitle("Atam Adlı komut özel mesajlarda kullanıma kapalıdır.")
        return message.channel.send(özel)
    } if(message.author.bot == true) {
        return;
    }
    const resim = await get('https://api.emirkabal.com/ataturk').set('Authorization','f2b9z47f33m2g6skwo1-f3w5wf0dv2fl2ky48b2hbq02-ur8fd29jq3bnoyhshw5')
    if(!resim || resim.body || resim.body.mesaj ) console.log(`Atatürk komutu ${message.author.username} Tarafından kullanıldı`)
  const atam = new Discord.RichEmbed()
  .setAuthor(`${message.author.username} Türkiyenin kurucusu o `)
  .setColor("RANDOM")
  .setTimestamp()
  .setImage(resim.body.mesaj)
  return message.channel.send(atam)

}

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permlevel: 0
};

exports.help = {
    name: 'atam'
}