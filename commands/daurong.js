const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'daurong',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const daurong = new MessageEmbed()
        .setColor('#ff4000')
        .setTitle('Đầu Rồng')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '20.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887912830181970010/Head_Dragon.png')
        .setFooter('Mua 2 Đầu rồng Kit tặng thêm 1 Kit Random');

        message.channel.send(daurong)
    }
}