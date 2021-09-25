const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'emerald',
  description: "Embaead!",
  execute(message, args, Discord) {
    message.delete()
    const emerald = new MessageEmbed()
      .setColor('#ff4000')
      .setTitle('Emerald Block')
      .addFields(
        { name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true },
        { name: '**Thanh toán**', value: '20.000đ', inline: true },
      )
      .setImage('https://media.discordapp.net/attachments/847028159873941515/887918971205062706/Emerald.png')

    message.channel.send(emerald)
  }
}