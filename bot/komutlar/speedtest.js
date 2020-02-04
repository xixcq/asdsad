const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (client, message) => {
  const emoji = (client.emojis.find("name", "yukleniyor").toString())
   //const emoji1 = (client.emojis.find("name", "gerisayım").toString())
 //  const emoji2 = (client.emojis.find("name", "delirmis").toString())
  var osType = os.type();
    
   // message.channel.send(`${emoji1} | Bilgiler özel mesaj yoluyla iletiyor ${emoji1}`).then(m => m.delete(6000));
     message.channel.send(`${emoji} | İnternet Hızınız Yükleniyor, lütfen bekleyin.`).then(m => m.delete(3000));
     message.channel.send(`${emoji} | Pinginiz Hesaplanıyor, lütfen bekleyin.`).then(m => m.delete(9000));
     message.channel.send(`${emoji} | Host Aranıyor, lütfen bekleyin.`).then(m => m.delete(9000));
     message.channel.send(`${emoji} | İşletim Sistemi Bulunuyor, lütfen bekleyin.`).then(m => m.delete(12000));
      //message.channel.send(`:white_check_mark: | Bilgilerimi özelden ilettim!`).then(m => m.delete(1000000));
  
  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
 .setColor('#000000')
//.setTitle(`${emoji2} Hız Testi ${emoji2}`)
.addField(`:arrow_down: İndirme: **${data.speeds.download}** `,`:arrow_up: Yükleme: **${data.speeds.upload} **`)
.addField(`💻 Botun pingi : **${client.ping}**`,`İşletim sistemi : ${osType}`)
.addField(`💻İnternet sağlayıcısı ${data.client.isp}`,`:file_cabinet: Host: **${data.server.host}**`)
//.addField(`💻 İnternet Sağlayıcısı: **${data.client.isp}** \n \n `,`:file_cabinet: Host: **${data.server.host}**`)
.addField(`💻İnternet Port İp`,`*${data.client.ip}*`)

  return message.channel.send(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
  console.log(`speed-test komutu ${message.author.username} Tarafından kullanıldı`)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sahip"
};

exports.help = {
  name: 'hız-test',
  description: 'speedtest yapar',
  usage: 'speedtest'
};