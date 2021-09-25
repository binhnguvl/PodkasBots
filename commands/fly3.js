const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fly3',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const fly3 = new MessageEmbed()
        .setColor('#ffeb0d')
        .setTitle('Fireworks Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/dnVSQAE.png')
        .setFooter('Mua 2 Fireworks Kit tặng thêm 1 Flying Box');

        message.channel.send(fly3)
    }
}