const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'serverinfo',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const stuff1 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Golden Apple')
        .addFields(
            {name: ``, value: 'Trống.', inline: true},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/F9sxwgq.png')
        .setFooter('Mua 2 Golden Apple Kit tặng thêm 1 Golden Apple Kit');

        message.channel.send(stuff1)
    }
}