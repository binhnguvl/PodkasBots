const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pvp2',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const pvp2 = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Legends Box')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '10.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/E521ZYE.png')
        .setFooter('Mua 2 Legends Box tặng thêm 1 Legends Box');

        message.channel.send(pvp2)
    }
}