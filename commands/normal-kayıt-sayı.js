const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async(client, message) => {
  let kullanıcı = message.mentions.members.first()
   
   if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
   const kayıtlar = db.get(`normal_kayıt${kullanıcı.id}_${message.guild.id}`) || [];
   let puan = kayıtlar.length;
   if (puan === 0) {
     return message.reply("Bu kullanıcı kimseyi kayıt etmemiş!");
   }
   const embed = new Discord.EmbedBuilder()
   .setTitle("Nors - Sorgu Sistemi!")
   .setDescription(`Kullanıcı: ${kullanıcı}\nKayıt Ettiği Kişi Sayısı: ${puan}\nSorgulayan: ${message.author}`)
   .setImage("")
   message.reply({embeds: [embed]})


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'normal-kayıt-puan'
}   