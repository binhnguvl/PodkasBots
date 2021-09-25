const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fly2',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const fly2 = new MessageEmbed()
        .setColor('#ffeb0d')
        .setTitle('Flying Box')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Kit tiêu chuẩn cho việc bay lượn.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/gNkL7XP.png')
        .setFooter('Mua 3 Flying Box tặng thêm 1 Flying Box');

        message.channel.send(fly2)
    }
}