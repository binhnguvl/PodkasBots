const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stuff6',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff6 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Enderpearl Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/KNZuUK6.png')
        .setFooter('Mua 2 Enderpearl Kit tặng thêm 1 Enderpearl Kit');

        message.channel.send(stuff6)
    }
}