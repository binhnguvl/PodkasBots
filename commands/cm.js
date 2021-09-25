const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'cm',
    execute(message, args, Discord) {
        let random13 = Math.round(Math.random() * 25 + 1)

        const cm = new MessageEmbed()
        .setDescription(`${message.author} Cu của bạn dài ${random13} cm`)
        .setColor('#ffeb0d')
        message.reply(cm)

        }
}