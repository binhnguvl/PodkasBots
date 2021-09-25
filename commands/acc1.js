const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'acc1',
    description: "Embaead!",
    execute(message, args, Discord) {
        message.delete()
        const acc1 = new MessageEmbed()
        .setColor('#00a6ff')
        .setTitle('Random Account 2Y2C Full Kit')
        .addFields(
            {name: '**Thông tin sản phẩm**', value: 'Bạn sẽ nhận 1 Account 2y2c gồm có 27 kit ngẫu nhiên',},
            {name: '**Quyền lợi**', value: 'Không được custom tên\nVị trí account tại spawn',},
            {name: '**Thanh toán**', value: '5.000đ', inline: true},
        )
        .setImage('https://i.imgur.com/rZPai9k.png')
        .setFooter('Mua 2 Golden Apple Kit tặng thêm 1 Golden Apple Kit');

        message.channel.send(acc1)
    }
}