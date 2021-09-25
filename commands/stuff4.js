const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stuff4',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff4 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('TNT Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/uqSIL7X.png')
        .setFooter('Mua 2 TNT Kit tặng thêm 1 TNT Kit');

        message.channel.send(stuff4)
    }
}