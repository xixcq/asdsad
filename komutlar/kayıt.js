const Discord = require('discord.js');
const db = require('quick.db');

const harfler = ["q","w","r","t","y","u","ı","o","p","ğ","ğ","ü","a","s","d","f","g","h","j","k","l","i","z","x","c","v","b","n","m","ö","ç","1","2","3","6","8","10","4"];

const harfler2 = ["A","B","C","D","E","F","G","H","I","İ","J","K","L","M","N","o","ö","p","r","s","1","2","3","4","7","9","8","4"];

const harfler3 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]

const harfler4 = ["a","b","c","d","e","f","g","i","h","j","k","k","l","m","n","o","p","s","t","u","v","y","z","1","2","3","4","5","6","7","8","9","0","A","C","B","D","E","F","G","M","H","I","J","K","L","N","O","P","S","T","U","V","Y","Z"]


exports.run = (client, message, params) => {

    var random = Math.floor(Math.random() * (harfler.length-0+1)+0);
    var random2 = Math.floor(Math.random() * (harfler2.length-0+1)+0);
    var random3 = Math.floor(Math.random() * (harfler3.length-0+1)+0);
    var random4 = Math.floor(Math.random() * (harfler4.length-0+1)+0);

    var h1 = harfler[random]
    var h2 = harfler2[random2]
    var h3 = harfler3[random3]
    var h4 = harfler4[random4]


    var hepsi = h1 + h2 + h3 + h4
    db.set(`kod_{message.author.id}`, hepsi)
    message.delete()
    message.author.send(hepsi)
    message.reply("Özel mesajlardan gelen kodu f!kayıtonay kod Şeklinde yazın.")

}

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kayıt',
  };