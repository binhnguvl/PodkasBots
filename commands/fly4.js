const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fly4',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const fly4 = new MessageEmbed()
        .setColor('#ffeb0d')
        .setTitle('Essentials Flying')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/N7XbL4h.png')
        .setFooter('© GoCrybabe Tour Kit');

        message.channel.send(fly4)
    }
}