const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'beacon',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const beacon = new MessageEmbed()
        .setColor('#ff4000')
        .setTitle('Beacon Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '10.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887912775085604915/Beacon.png')
        .setFooter('Mua 2 Beacon Kit tặng thêm 1 Beacon Kit');

        message.channel.send(beacon)
    }
}