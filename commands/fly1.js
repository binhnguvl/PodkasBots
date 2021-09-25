const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fly1',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const fly1 = new MessageEmbed()
        .setColor('#ffeb0d')
        .setTitle('Elytra Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Kit Full Cánh cứng.', inline: true},
            {name: '**Thanh toán**', value: '10.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/thdYixM.png')
        .setFooter('Mua 2 Elytra Kit tặng thêm 1 Kit Fireworks');

        message.channel.send(fly1)
    }
}