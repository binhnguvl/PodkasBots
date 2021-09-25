const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pvp4',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const pvp4 = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Kit PVP v3')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/zbtpdwE.png')
        .setFooter('Nâng cấp Kit PVP v3 lên Netherite giá 10.000đ');

        message.channel.send(pvp4)
    }
}