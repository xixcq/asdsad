const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>> Oynuyor kısmı başarıyla güncellendi. <<');
console.log(`TITAN BOT| : ${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
console.log('>> TITAN BOT | : Bot Hazır Giriş Yapıldı! <<');

    var Games = [

        "t!yardım",
  
        
        `TITAN GUARD`,
      
      //`Bakımda!!`
      
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setActivity(Games[random], `Twich linkiniz`)
        }, 2 * 5500);

}; 