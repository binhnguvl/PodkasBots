const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stuff7',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff7 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Enderchest Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '10.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/ulVtyT7.png')
        .setFooter('Mua 2 Enderchest Kit tặng thêm 1 Enderchest Kit');

        message.channel.send(stuff7)
    }
}