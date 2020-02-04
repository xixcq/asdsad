const Discord = require('discord.js');
//const ayarlar  require('./ayarlar.json');

exports.run = (client,message,args) => {
	const yagmurum = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(">>TITAN Bot Bilgi.<<")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter("TITAN Bilgi.")
	.setThumbnail(client.user.avatarURL)
	.addField("Tüm Komutlarım için","``t!yardım``")
	.addField("Prefixim :","``t!``")
  .addField("Yapılmaya Başlandığı Zaman", "**22.12.2019 **")
	.addField("Pingim:" + client.ping + "ms",">>Botun Linkleri<<")
	.addField("📥Destek Sunucusu","[Destek Sunucusu](https://discord.gg/tgWkYSc)")
	.addField("📤Davet Linkim","[Davet linki](hhttps://discordapp.com/oauth2/authorize?client_id=658238299512504330&scope=bot&permissions=2146958847)")
//	.addField("Pingim:" + client.ping + "ms","")
  return message.channel.send(yagmurum)
console.log(`Bot bilgi komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};


exports.help = {
	name: 'bilgi',
};