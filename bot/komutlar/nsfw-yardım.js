const Discord = require('discord.js');

exports.run = (client,message,args) => {
	const yağmurumm = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(">>NSFW 🔞 İÇERİKLERİ")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setThumbnail(`https://image.shutterstock.com/image-vector/nsfw-red-stamp-260nw-1168478428.jpg`)
	.setTimestamp()
	.addField("``🔞rc!nsfw-4k``","4k Fotoğraflar atar.")
	.addField("``🔞rc!anal``","Anal Fotoğraflar atar.")
	.addField("``🔞rc!ass``","Ass türü fotoğraflar atar.")
	.addField("``🔞rc!nsfw-gif``","nsfw Giffleri atar.")
	.addField("``🔞rc!hentai_anal``","Hentai anal icerikleri atar.")
  .addField("``🔞rc!hentai``","Hentai icerikleri atar.")
	.addField("``🔞rc!pussy``","Pussy türü fotoğraflar atar.")
	return message.channel.send(yağmurumm);
console.log(`nsfw-yardım komutu ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};

exports.help = {
	name: 'nsfw-yardım',
	description: '',
	usage: ''
};