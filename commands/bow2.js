const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'bow2',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const bow2 = new MessageEmbed()
        .setColor('#00ff06')
        .setTitle('God Bow')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/fTG3L1S.png')
        .setFooter('Mua 3 God Bow tặng thêm 1 Kit Mũi Tên Độc');

        message.channel.send(bow2)
    }
}