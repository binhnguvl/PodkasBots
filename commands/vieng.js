const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'vieng',
  description: "Embaead!",
  execute(message, args, Discord) {
    message.delete()
    const vieng = new MessageEmbed()
      .setColor('#00ff06')
      .setDescription(`${message.author} đã viếng 1 nén nhang :pray: `)
      .setImage('https://i.imgur.com/Syr3ugx.jpg')
      .setFooter('Viếng chùa Online')
      .setTimestamp()

    message.channel.send(vieng)
  }
}