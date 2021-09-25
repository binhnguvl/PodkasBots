const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fullsword',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const fullsword = new MessageEmbed()
        .setColor('#00ff06')
        .setTitle('Netherite Sword')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '15.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/HA0y7jr.png')
        .setFooter('Mua 2 Netherite Sword tặng thêm cái nịt');

        message.channel.send(fullsword)
    }
}