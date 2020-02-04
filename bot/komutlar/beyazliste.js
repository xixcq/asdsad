const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
	if(message.author.id != ayarlar.sahip) {
		const sahip = new Discord.RichEmbed()
		.setColor("RED")
		.setTitle("Bu komutu kullanabilmek için Sahibim olmalısın !")
		return message.channel.send(sahip)
	} else {
		let nesne= args[0]
		if(!nesne) {
			const kullanıcı1 = new Discord.RichEmbed()
			.setColor("RED")
			.setTitle(":x: Bir kullanıcı İD'si belirtiniz.")
			return message.channel.send(kullanıcı1)
		} 
		db.delete(`kullanicikaraliste_${nesne}`)
		const engelaçma = new Discord.RichEmbed()
		.setColor("GREEN")
		.setTitle("Falcon | Beyaz liste")
		.setTimestamp()
		.setDescription(":tada: Beyaz liste`" + nesne + "`kullanıcı için aktif edildi !")
		return message.channel.send(engelaçma) 
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 5
};

exports.help = {
	name: 'beyazliste'
};