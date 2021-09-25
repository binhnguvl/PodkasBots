const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'fullpic',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const fullpic = new MessageEmbed()
        .setColor('#00ff06')
        .setTitle('Netherite Pickaxe')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '15.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/jyt2ib2.png')
        .setFooter('Mua 2 Netherite Pickaxe tặng thêm cái nịt');

        message.channel.send(fullpic)
    }
}