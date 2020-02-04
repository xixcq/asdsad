const Discord = require('discord.js');

exports.run = (client,message,args) => {
	const emoji = (client.emojis.find("name","wifi").toString())


	const ping = new Discord.RichEmbed()
	.setColor("RANDOM")
  .setThumbnail()
	.addField(`${emoji}Pingim`, `${client.ping}`)
	return message.channel.send(ping)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};

exports.help = {
	name: 'ping'
}