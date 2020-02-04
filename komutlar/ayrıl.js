const Discord = require('discord.js')

exports.run = async (client, message) => {
    if (!message.member.voiceChannel) { return message.channel.send('Beni kanaldan çıkarabilmen için öncelikle aynı kanalda olman lazım.'); }
  
    message.member.voiceChannel.leave();
    return message.channel.send(`${message.member.voiceChannel}`` kanalından başarıyla ayrıldım.`);
console.log(`Ayrıl komutu ${message.author.username} Tarafından kullanıldı`)  
};
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ayrıl', 'git'],
   permlevel: 0
 };
  
  exports.help = {
    name: "çık",
    description: "Botu olduğu odadan çıkartır.",
    usage: "çık"
  };