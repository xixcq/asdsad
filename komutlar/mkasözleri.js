const Discord = require('discord.js');
const superagent = require('superagent');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
    let {body} = await superagent 
    .get('https://api.ysfteams.cf/api/ataturksoz/112a95e5-fb3c-46d5-87ca-b1cb0b77eef8');
    if(!{body}) return message.channel.send("Bir hata oluştu. Tekrar deneyiniz.")
    const embed = new Discord.RichEmbed()
    .addField(`***___ATAMIZIN SÖZÜ___***`, `${body.sözler}`)
    .setFooter("API | https://api.ysfteams.cf")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürksözleri',
  description: 'Mustafa Kemal Atatürkün Sözlerinden Rastgele Atar',
  usage: '.atamınsözleri'
};