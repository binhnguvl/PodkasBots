const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue',
    description: "Embaead!",
    execute(message, args, Discord) {
        const queue = new MessageEmbed()
        .setColor('#ff0000')
        .addFields(
            {name: 'Hàng chờ', value: 'Ưu Tiên: 0 - Bình Thường: 3', inline: true},
        )

        message.channel.send(queue)
    }
}