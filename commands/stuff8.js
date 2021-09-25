const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stuff8',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff8 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Crystal Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887912773856669767/Crystal.png')
        .setFooter('Mua 2 Crystal Kit tặng thêm 1 Crystal Kit');

        message.channel.send(stuff8)
    }
}