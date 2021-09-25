const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'random',
    execute(message, args, Discord) {
        message.delete()

        if (!args.length || !args[1]) {
            message.channel.send('Bạn cần nhập số nhỏ nhất và số lớn nhất (VD: -random 1 10)')
        }

        else {
            let min = args[1]
            let max = args[0]

        let random = Math.round(Math.random() * min + max)

        const random1 = new MessageEmbed()
        .setTitle("Số ngẫu nhiên của bạn: ")
        .setDescription(random)
        .setColor('#ffeb0d')
        .setFooter("Quay số ngẫu nhiên")
        .setTimestamp()

        message.reply(random1)

        }
    }
}