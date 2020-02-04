const Discord = require('discord.js');
//const ayarlar = require('ayarlar.json');

exports.run = (client,message,args) => {
	const ana = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTimestamp()
	.setTitle(">>Ana Komutlarım<<")
	//.setFooter(`${message.author.usarname}`,message.author.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField("``t!atam``","Atatürk Gifleri")
  .addField("``t!afk``","Afk moduna girersiniz kullanım : ``f!afk sebep``")
 // .addField("``>atatürksözleri``","Atatürk sözleri")
  .addField("``t!bilgi``","Bot hakkında kısa bilgi")
  .addField("``t!canlıdestek``","Canlı destek talebi açarsınız.")
	.addField("``t!ping``","Bot Gecikme süresi.")
	.addField("``t!kullanıcıbilgim``","Yazan kisi hakkında bilgi.")
	.addField("``t!sunucubilgi``","Sunucu hakkında bilgi.")
//	.addField("``>atam``","Atatürk Gifleri")
	.addField("``t!istatistik``","Bot istatistikleri.")
  .addField("``t!instagram``","f!instagram <k.adı>")
	.addField("``t!davet``","Botun davet linki.")
	.addField("``t!kısalt``","Yazılan url yi kısaltma.")
  .addField("``t!şikayet``","Botun kurucusuna şikayetinizi iletir.")
  .addField("``t!öneri``","Botun kurucusuna önerinizi iletir.")
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	return message.channel.send(ana)
console.log(`Ana yardım menüsü ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['anakomutlar'],
	permlevel: 0
};

exports.help = {
	name: 'anakomutlar',
	description: '+anakomutlar',
	usage: 'anakomutlar'
};


