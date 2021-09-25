const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'tools',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const tools = new MessageEmbed()
        .setColor('#00ff06')
        .setTitle('Tools Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Bộ dụng cụ.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ / 10.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/Hk8pBkB.png')
        .setFooter('Tools Kit Diamond: 5.000đ / Tools Kit Netherite: 10.000đ');

        message.channel.send(tools)
    }
}