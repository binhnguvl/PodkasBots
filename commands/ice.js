const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ice',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const ice = new MessageEmbed()
        .setColor('#ff4000')
        .setTitle('Băng Xanh')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887912771461709904/Bang_Xanh.png')
        .setFooter('Mua 2 Kit tặng thêm 1 Kit');

        message.channel.send(ice)
    }
}