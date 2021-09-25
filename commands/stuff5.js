const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stuff5',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff5 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('EXP Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/OJz7Cnu.png')
        .setFooter('Mua 2 EXP Kit tặng thêm 1 EXP Kit');

        message.channel.send(stuff5)
    }
}