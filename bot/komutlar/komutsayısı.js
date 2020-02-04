const Discord = require('discord.js')

exports.run = (client, message, args) => {
	let komut = new Discord.RichEmbed()
	.setColor('BLUE')
	.setThumbnail(client.user.avatarURL)
	.setTitle(`${message.guild.name}  - Bottaki komutsayısı`)
	.setDescription('**\n Botta Toplam:**' + client.commands.size + '**\nkomut vardır.**')
	.setTimestamp()
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	return message.channel.send(komut);
console.log(`Komut sayısı komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['komutlar'],
	permlevel: 4
};

exports.help = {
	name: 'komutlar'
}