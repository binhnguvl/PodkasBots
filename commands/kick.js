const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'kick',
    description: "Lệnh dùng để kicks member",
    execute(message, args){  
        if (message.member.hasPermission('KICK_MEMBERS')) { 
        const Embed9 = new MessageEmbed()
        .setColor('#fff100')
        .setDescription('Vui lòng nhập người chơi cần kick, hoặc bạn không thể kick người này')

        const Embed10 = new MessageEmbed()
        .setColor('#fff100')
        .setDescription('Người chơi này đã bị đuổi khỏi servers')
           
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(Embed10)
        } else {
            message.channel.send(Embed9)
        }
    } else {
        const Embed11 = new MessageEmbed()
        .setColor('#fff100')
        .setDescription('Bạn không có quyền thực hiện lệnh này')
        message.channel.send(Embed11)
    }
}
}
