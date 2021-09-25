const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stuff3',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff3 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Totem Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/PBDjPO9.png')
        .setFooter('Mua 2 Totem Kit tặng thêm 1 Totem Kit');

        message.channel.send(stuff3)
    }
}