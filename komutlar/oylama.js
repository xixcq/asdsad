const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('Sunucu Oylaması, Chate Alttakileri Yazarak Veriniz!')
        .setColor(0x2eff00)
    .setDescription(`\n\n ➤** ${mesaj} ** \n\n\ Evet İçin: :thumbsup: Hayır İçin: :thumbsdown: `)
  
    return message.channel.send(embed);
console.log(`oylama komutu ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};
