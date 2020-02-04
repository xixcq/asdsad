const Discord = require("discord.js");
const client = new Discord.Client()
const ayarlar = require('../ayarlar.json')


exports.run = async (bot, message, args, color, prefix,msg) => {
    if (message.author.id !== '481121978426589184')  return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval Sonucu;')
        .setColor('RANDOM')
        .addField(':inbox_tray: Giriş:', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Çıkış', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['evalma', 'evsat'],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denersiniz.',
  usage: 'eval <kod>'
};  