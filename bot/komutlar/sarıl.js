const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete();
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(' :x: Sarılmak İstediğin birisini etiketlemelisin:x: ');
    const embed = new Discord.RichEmbed()
    .setAuthor('RealityCheats')
    .setColor("RANDOM")
    .setDescription(message.author.username + ` ${mesaj}'a ` + ' Sarıldı. 🤗')
    .setImage("http://25.media.tumblr.com/2c90ff69131765c309ceba07bae26ef0/tumblr_n0mbfqjQkO1seqamso1_500.gif")
    return message.channel.sendEmbed(embed);
console.log(`sarıl komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sarıl'],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'İstediğiniz Kişiye sarılırsınız.',
  usage: 'sarıl'
};