const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'armor3',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const armor3 = new MessageEmbed()
        .setColor('#fff100')
        .setTitle('Legends Armor Kit (Diamond)')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://media.discordapp.net/attachments/847028159873941515/887912770304081920/Armor_Diamond_v2.png')
        .setFooter('Mua 3 Legends Armor Kit (Diamond) tặng thêm 1 Kit');

        message.channel.send(armor3)
    }
}