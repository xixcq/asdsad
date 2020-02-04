const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var sans = ["Abdurrahman Kara", "Namık Yavuz","Namık Çivi","Eren Gümüş","Pelin Çiftçi","Pınar Taş","ilyas Çiftçi", "Emir Tarlacı", "Alp Babacan", "Selahatttin Enes", "Enes Kara"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];

    return message.channel.send(`İşte ismin ve soy ismin:**${sonuc}**`)
  console.log(`İsim türet komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permlevel: 0,
};

exports.help = {
    name: 'isim-türet'
}