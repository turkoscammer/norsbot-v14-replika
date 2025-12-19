const Discord = require("discord.js");
const { PermissionFlagsBits } = require("discord.js");
exports.run = async (client, message, args) => {

    if (!message.member.permissions.has(PermissionFlagsBits.ManageGuild))
    return message.channel.send("Gerekli Yetkin Yok!")

  if (!message.member.voice.channel)
    return message.reply("ses kanalında degilsin");
  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı)
    return message.reply(
      "birini etiketle"
    );
  if (!kullanıcı.voice.channel)
    return message.reply("etiketledigin kisi bir ses kanalinda degil");

  kullanıcı.voice.setChannel(message.member.voice.channelId)
  message.channel.send("çektim");
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "ses-çek"
};