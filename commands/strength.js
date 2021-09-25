const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'strength',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const strength = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Strength - Thuốc Sức Mạnh II')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887912772640317450/Strength.png')
        .setFooter('Mua 2 Kit Strength Tặng 1 Kit Strength');

        message.channel.send(strength)
    }
}