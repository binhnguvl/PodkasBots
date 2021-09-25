const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'command',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed1 = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Podkas đẹp trai nhất hệ mặt trời')
        .setDescription('POdkasngu vlPodkas đẹp trai nhất hệ mặt trời \n đẹp trai nhất hệ mặt trời \n nhấn để tạo đơn')
        .addFields(
            {name: 'a', value: 'Câm'},
            {name: 'a', value: 'im'},
            {name: 'a', value: 'podkas đẹp trai nhất'},
        )
        .setImage('https://i.imgur.com/Jv3USuL.jpg')
        .setFooter('The Holden');

        message.channel.send(newEmbed1)
    }
}