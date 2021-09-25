const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'tools2',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const tools2 = new MessageEmbed()
        .setColor('#00ff06')
        .setTitle('Foundation Tools Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/p8WGsEs.png')
        .setFooter('Nâng cấp Foundation Tools Kit lên Netherite giá 10.000đ');

        message.channel.send(tools2)
    }
}