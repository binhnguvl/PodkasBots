const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'armor',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const armor = new MessageEmbed()
        .setColor('#fff100')
        .setTitle('Armor Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ / 10.000đ', inline: true},
        )
        .setImage('https://cdn.discordapp.com/attachments/847028159873941515/881156753557979178/netherite_armor.png')
        .setFooter('Armor Kit Diamond: 5.000đ / Armor Kit Netherite: 10.000đ');

        message.channel.send(armor)
    }
}