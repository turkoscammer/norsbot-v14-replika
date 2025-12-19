const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async(client, message) => {
  let kullanıcı = message.mentions.members.first()
   
   if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
   const kayıtlar = db.get(`public_${kullanıcı.id}_${message.guild.id}`) || [];
   let puan = kayıtlar.length;
   const embed = new Discord.EmbedBuilder()
   .setTitle("Nors - Sorgu Sistemi!")
   .setDescription(`Kullanıcı: ${kullanıcı}\nKayıt Ettiği Kişi Sayısı: ${puan}\nSorgulayan: ${message.author}`)
   .setImage("https://cdn.discordapp.com/attachments/1379924584018612314/1450586474977300480/image.png?ex=69465f2e&is=69450dae&hm=96b95499caa4c3e290c45824be15d6420f9ede9a6e229ec73857fdb95255bf05&")
   message.reply({embeds: [embed]})


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'public-kayıt-puan'
}   