const Discord = require('discord.js');

exports.run = async(client, message) => {
   if(!message.guild) {
        const özel = new Discord.RichEmbed()
        .setTitle("Tavsiye Adlı komut özel mesajlarda kullanıma kapalıdır.")
        return message.author.send(özel)
    } if(message.author.bot == false) {
        return;
    }
    
    
    let args = message.content.split(' ').slice(1)
    let tavsiye = args.slice(0).join('  ');
    if(!tavsiye) return message.reply("Bir tavsiye belirtin.")

    message.reply("Tavsiyen başarı ile iletildi!")

    var web = new Discord.WebhookClient("653565308975448064","zWreUMKbnkoVqMHbXJXKnSapGoxhELymHX51KkJFZ42B26pr0Wn1nbqJXY7-1MNFGyOO")

    const tavsiyes = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Yeni bir tavsiye var!")
    .addField("Tavsiye eden kişinin ismi", `<@${message.author.tag}>`)
    .addField("Tavsiye edildiği sunucunun adı", message.guild.name)
    .addField("Tavsiye", tavsiye)
    web.send(tavsiyes)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};

exports.help = {
	name: 'tavsiye'
};
