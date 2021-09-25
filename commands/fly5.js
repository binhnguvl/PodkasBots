const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fly5',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const fly5 = new MessageEmbed()
        .setColor('#ffeb0d')
        .setTitle('Deluxe Flying')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/8cCs7vx.png')
        .setFooter('Mua 3 Deluxe Flying tặng thêm 1 cái nịt');

        message.channel.send(fly5)
    }
}