const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stuff2',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff2 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Shulker And Chest')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/1XFlgjS.png')
        .setFooter('Mua 1 Kit Tặng 1 Kit');

        message.channel.send(stuff2)
    }
}