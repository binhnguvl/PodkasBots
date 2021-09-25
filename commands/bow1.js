const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'bow1',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const bow1 = new MessageEmbed()
        .setColor('#00ff06')
        .setTitle('Eagle Bow')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/27RqmEB.png')
        .setFooter('Mua 2 Eagle Bow tặng thêm 1 Kit Mũi Tên Độc');

        message.channel.send(bow1)
    }
}