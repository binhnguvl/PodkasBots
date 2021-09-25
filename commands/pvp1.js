const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pvp1',
    description: "Embead!",
    execute(message, args, Discord) {
        message.delete()
        const pvp1 = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Foundation Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/5VpjCQS.png')
        .setFooter('Nâng cấp Foundation Kit lên đồ Netherite giá 10.000đ');

        message.channel.send(pvp1)
    }
}