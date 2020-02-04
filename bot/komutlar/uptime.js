const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client()
const ayarlar = require('../ayarlar.json');

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};

exports.run = (bot, message, args) => {

    let prefix = ayarlar.prefix;
    if (!message.content.startsWith(prefix)) return;

    let u = convertMS(bot.uptime);
    let uptime = u.d + " gün : " + u.h + " saat : " + u.m + " dakika : " + u.s + " saniye"

    const duration = moment.duration(bot.uptime)
    let onlycode = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .addBlankField()
        .setTitle("Açık kalma sürem")
        .setColor(`RANDOM`)
        .addField(`:recycle:`, `**Uptime :**  ${uptime}`)
//        .setThumbnail(client.user.avatarURL);

   return message.channel.send(botembed);
  console.log(`uptime komutu ${message.author.username} Tarafından kullanıldı`)
}

exports.conf = {
 enabled: false,
 guildOnly: false,
 aliases: ['ak-s'],
 permLevel: 4
};

exports.help = {
 name: 'aktiflik',
 description: 'Botun açık kalma süresini öğrenirsiniz.',
 usage: 'uptime'
};