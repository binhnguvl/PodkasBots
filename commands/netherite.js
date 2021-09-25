const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'netherite',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const netherite = new MessageEmbed()
        .setColor('#ff4000')
        .setTitle('Netherite Block')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '20.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887918972857647124/Netherite.png')

        message.channel.send(netherite)
    }
}