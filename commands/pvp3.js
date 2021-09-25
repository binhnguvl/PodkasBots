const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pvp3',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const pvp3 = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('AOD Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '10.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/8Ttnuub.png')
        .setFooter('Mua 2 AOD Kit tặng thêm 1 AOD Kit');

        message.channel.send(pvp3)
    }
}