const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Bu komutu kullanabilmek için ``Kullanıcı adlarını yönet`` Yetkisine sahip olmalısın!")

    let isim = args.slice(1).join(' ')

    var kullanici = message.mentions.users.first()

    if(!kullanici) return message.reply("Lütfen bir kullanıcı etiketleyiniz ``Falcon#9299 <isim>``")
    if(!isim) return message.reply("Lütfen bir isim giriniz.")
    if(isim.length > 32) return message.reply("Belirttiginiz isim 32 karakterden az olmalı")
    message.guild.members.get(kullanici.id).setNickname(`${isim}`) 
    const basari = new Discord.RichEmbed()
    .setColor("green")
    .setTitle(`:white_check_mark: Başarılı bir şekilde \`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi.`)
    return message.channel.send(basari)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'isimdeğiştir',
}