const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let şikayet = args.slice(0).join(' ');
	
	if(!şikayet) {
		return message.channel.send("Yanlış kullanım algılandı,Doğru kullanım **>şikayet </şikayetiniz>**")
	} else {
		const öneriembed = new Discord.RichEmbed()
		.setTimestamp()
		.setFooter('')
		.setColor('RED')
		.addField("Eylem : Şikayet",`Yapan kişi **${message.author.username}** \n - İD **${message.author.id}** \n - TAG **${message.author.tag}**`)
		.addField("Önerisi : ",şikayet)
		.setThumbnail(message.author.avatarURL)
		client.channels.get('611282129338368000').send(öneriembed)
		return message.channel.send("Şikayetiniz başarıyla iletilmiştir.")
    message.delete()
    console.log(`sikayet komutu ${message.author.username} Tarafından kullanıldı`)
	}
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};

exports.help = {
	name: 'şikayet'
};