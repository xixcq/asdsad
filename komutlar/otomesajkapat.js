const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  	let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
		if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Otorolü Ayarlamadığın İçin Otorol Mesajını Kapatamazsın!`)
				.setColor("RED")
				.setTimestamp('Ayarlamak İçin >otorol @Rol #Kanal')
			message.channel.send({embed})
			return
		}
  exports.run = async (client, message, args, member) => {
      	let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
		delete giriscikis[message.guild.id]
		fs.writeFile("./otorol.json", JSON.stringify(giriscikis), (err) => {

		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Otorol Mesajları Başarıyla Kapatıldı.`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
    console.log(`otorol msj kapat komutu ${message.author.username} Tarafından kullanıldı`)
	}}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kapatotoyazı"],
  permLevel: 0
};

exports.help = {
  name: 'kapatotoyazı',
  description: 'Slots oyunu oynar',
  usage: 'otorolmesajkapat'
};