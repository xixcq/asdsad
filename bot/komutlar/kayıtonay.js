const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
	db.fetch(`kod_${message.author.id}`).then(kod => {
		if(args[0] !== kod) message.channel.send("Hata :x: Kodunu kontrol et!").then(msg => msg.delete(10000))
			else {
				message.delete()

				var verrol = message.guild.roles.get("612706943743688764")

				var alrol = message.guild.roles.get("613071494414598172")

				message.member.removeRole(alrol)

				message.member.addRole(verrol)

				message.channel.send("Başarıyla kayıt oldun !").then(msg => msg.delete(10000))

				db.delete(`kod_${message.author.id}`)
			}
	})
}

exports.conf = {
	enabled: false,
	guildOnly: true,
	aliases: [],
	permlevel : 0
};

exports.help = {
	name : 'kayıtonay'
};