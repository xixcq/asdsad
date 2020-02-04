const Discord = require('discord.js');

exports.run = (client,message,args) => {
	const yağmurum = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setAuthor(`${message.author.username}`,message.author.avatarURL)
	.setFooter(`${message.author.username}`,message.author.avatarURL)
	.setTitle(">>Eğlence Komutlarım<<")
	.setTimestamp()
	.setThumbnail(client.user.avatarURL)
	//.addField("``👑>kral-ol(bakımda)``","Kral olursunuz.")
	.addField("``⛔rc!banned``","Dene ve Gör :D ")
	//.addField("``🚬>sigara``","Bot sigara içer.")
	//.addField("``👺>korsan``","Korsanlar her zaman kötü değildir.")
	.addField("``☕rc!herkesebendençay``","Koca yüreğinle herkese Çay ısmarlarsın.")
	.addField("``💨rc!koş``","Koşmak iyidir zayıflarsın:d")
	.addField("``☕rc!çayiç``","Çay içersiniz Afiyet olsun.")
	.addField("``🔨rc!çekiç``","Denemelisiniz bence :d")
	.addField("``☕rc!çayaşekerat``","Çaya şeker atarsınız Az atında hasta olmayın :D ")
	.addField("``👊rc!yumrukat``","Vur yumruğu suratına !!")
	.addField("``🖋rc!yaz``","Bota istediğinizi yazdırın.")
	.addField("``☸rc!stresçarkı``","Stres Çarkı cevirirsiniz.")
	//.addField("``😘>öp``","Dene bence <3")
	.addField("``👊rc!tokat``","Tokat atarsınız.")
	.addField("``😋rc!sarıl``","Etiketlediğiniz kisiye sarılırsınız.")
	//.addField("``😂>espiri``","Soğuk yada sıcak espiri işte.")
	.addField("``🥌💷✂rc!tkm``","Bot ile taş kağıt makas oynarsınız")
	//.addField("``👨‍❤️‍👨>aşkölçer``","Etiketlediğiniz kişi ile aşkınızı ölçer")
  return message.channel.send(yağmurum)
  console.log(`Eğlence Yardım komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['eğlence'],
	permlevel: 0
};


exports.help = {
	name: 'eğlence',
	description: '',
	usage: ''
};


