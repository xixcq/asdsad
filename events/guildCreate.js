const Discord = require('discord.js')
const client = new Discord.Client()
client.on('guildCreate', (guild) => {
    guild.channels.find(t => t.name == 'mod-log').send('Selam tostlar ben geldim.'); 
}); //sen gelme amk