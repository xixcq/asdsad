const Discord = require('discord.js');


exports.run = (client,message,args) => {
	const yetkili = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(">>Yetkili<<")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
  .setFooter(`${message.author.username}`,message.author.avatarURL)
  .setThumbnail(`${message.author.avatarURL}`)
  .setTimestamp()
	.addField("`☯rc!temizle`","Belirtilen miktarda mesaji siler.")
	.addField("`☯rc!ban`","Belirtilen kullanıcıyı banlar.")
	.addField("`☯rc!kick`","Belirtilen kullanıcıyı kickler.")
	.addField("`☯rc!unban`","Yasaklanan kullanıcının banını kaldırır.")
	.addField("`☯rc!sustur`","Belirtilen kullanıcıya mute atar.")
	.addField("`☯rc!oylama`","Oylama yaparsınız.")
	.addField("`☯rc!duyuru`","Sunucuda duyuru yapmanızı sağlar.")
	.addField("`☯rc!giriş-çıkış-ayarla`","Resimli giriş çıkış belirler.")
	.addField("`☯rc!küfür-engel`","Küfür engelleme sistemini açar/kapatır.")
	.addField("`☯rc!link-engel`","Link engelleme sistemi.")
  .addField("`☯rc!sayaç`","Sayaç sistemi. kullanım :\n ``rc!sayaç-ayarla <sayı> #kanal``")
  .addField("`☯rc!şayaç`","Sayaç sıfırlama kullanım :\n ``rc!sayaç-sıfırla``")
  .addField("`☯rc!otorol`","Otorol Komududur kullanım : \n ``rc!otorol @roladı #kanal``")
  .addField("`☯rc!otorol`","Otorol sıfırlama komudu kullanım : \n ``rc!kapatotorol``")
  .addField("``☯rc!mod-log``","Log mesajlarınnı gideceği kanalı belirlersiniz. Kullanım : ``rc!mod-log #kanal``")
  .addField("``☯rc!mod-log sıfırla``","Log mesajlarını sıfırlarsınız.")
  .addField("`☯rc!ototag-ayarla`","Sunucuya girenlere verilecek tag'ı ayarlar. Kullanım : ``rc!ototag-ayarla <tag>``")
  .addField("`☯rc!ototag-kanal`","Ototag sisteminin log mesaj kanalını ayarlar. Kullanım : ``rc!ototag-kanal #kanal``")
  .addField("`☯rc!isimdeğiştir`","Etiketlediğiniz bir kişinin ismini değişir. Kullanım : ``rc!isimdeğiştir `")
  return message.channel.send(yetkili);
  console.log(`yetkili yardım menüsü komutu ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['yetkili'],
	permlevel: 0
};

exports.help = {
	name: 'yetkili',
	description: '',
	usage: ''
};