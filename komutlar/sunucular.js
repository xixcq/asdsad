const Discord = require("discord.js")
exports.run = (bot, message) => {
  
  
  
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}**\n - Üye Sayısı: **${guild.memberCount}** \n - Sunucu ID : **${guild.id}** \n - Sunucu Sahibi ID: **${guild.ownerID}**`,"---------------")
     // embed.setTitle('Turbo Botun bulunduğu sunucuların listesi!')
      embed.setDescription(`**${bot.guilds.size}**  tane sunucu, **${bot.users.array().length}** kişi beni kullanıyor.`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "sunucu-listesi",
  description: "Botun olduğu sunucuları görüntülersiniz.",
  usage: "sunucular"
};