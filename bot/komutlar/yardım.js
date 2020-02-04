const Discord = require('discord.js');//la çıkmayı unutmuşum xd
const db = require('quick.db')
exports.run = (client,message,args) => {
  

	const elif = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(`Yardım menüm`)
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setTimestamp()
  .setThumbnail(client.user.avatarURL)
	//.setThumbnail(`${messag}`)
	.addField("💠t!anakomutlar","``` Botun Ana komutlarını gösterir.```")
	.addField("🕹t!eğlence","```Botun eğlence komutlarını gösterir.```")
	.addField("🛠t!yetkili","```Botun yetkili komutlarını gösterir.```")
	.addField("🔞t!nsfw-yardım","```Botun nsfw komutlarını 🔞 gösterir.```")
	//.addField(">>💻Bot Bilgileri.💻<<","--------------------")
	.addField(` Botun pingi` + client.ping +  "ms",">>💻Bot Bilgileri.💻<<")
	//.addField(` Bota Oy verme.`,`[**Oy Ver**](https://top.gg/bot/578667039531466753/vote)`)
	.addField("💌Davet","[**📥Davet Linki**](https://discordapp.com/oauth2/authorize?client_id=658238299512504330&scope=bot&permissions=2146958847)")
	.addField("💌Destek Sunucusu","[**📤Destek Sunucum**](https://discord.gg/tgWkYSc)")
  return message.channel.send(elif);
  console.log(`Yardım menüsü komutu ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['yardım'],
	permlevel: 0
};

exports.help = {
	name: 'yardım',
	description: '',
	usage: ''
}; 