const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "Lệnh dùng để banned member",
    execute(message, args){
    if (message.member.hasPermission('BAN_MEMBERS')) {  
        
        const Embed14 = new MessageEmbed()
        .setColor('#0fff17')
        .setTitle('Banned')
        .setDescription('Nhập người chơi cần banned')
        .setFooter('-ban <tag> <reason>')
        .setTimestamp()

        const Embed15 = new MessageEmbed()
        .setColor('#0fff17')
        .setDescription(`<:CheckMark:892600574418227230> ***${message.member.user.tag} đã bị banned***`)
        
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(Embed15);
        } else {
            message.channel.send(Embed14);
        }
    } else {
        const Embed16 = new MessageEmbed()
        .setColor('#0fff17')
        .setDescription('Bạn không có quyền sử dụng lệnh này')

        message.channel.send(Embed16)
    }
    }
}