const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const Client = new Discord.Client()

module.exports = {
    name: 'membercount',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const membercount = new MessageEmbed()
        .setColor('#00a6ff')
        .addFields(
            {name: `Total Members`, value: `${message.guild.memberCount}`, inline: true},
        )
        .setTimestamp()

        message.channel.send(membercount)
      }
}