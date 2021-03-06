exports.run = (client, message, args) => {

  let command;
  if (client.commands.has(args[4])) {
    command = args[0];
  } else if (client.aliases.has(args[4])) {
    command = client.aliases.get(args[4]);
  }
  if (!command) {
    return message.channel.send("`" + args[4] + "` adında bir komut yok.");
  } else {
    message.channel.send("`" + command + "` adlı komut devre dışı bırakılıyor...")
      .then(m => {
        client.unload(command)
          .then(() => {
            m.edit("`" + command + "` adlı komut başarıyla devre dışı bırakıldı.");
          })
          .catch(e => {
            m.edit(`Komut devre dışı bırakılırken  bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
console.log(`unload komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['u'],
  permLevel: 4
};

exports.help = {
  name: 'unload',
  description: 'İstediğiniz bir komutu devre dışı bırakır.',
  usage: 'unload <komut adı>'
};
