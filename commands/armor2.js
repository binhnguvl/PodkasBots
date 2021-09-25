const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'armor2',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const armor2 = new MessageEmbed()
        .setColor('#fff100')
        .setTitle('Legends Armor Kit (Netherite)')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '10.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887912828609122364/Armor_v2.png')
        .setFooter('Mua 3 Legends Armor Kit (Netherite) tặng thêm 1 Kit');

        message.channel.send(armor2)
    }
}