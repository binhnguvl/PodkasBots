const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'kick',
    description: "Lệnh dùng để kicks member",
    execute(message, args){  
        if (message.member.hasPermission('KICK_MEMBERS')) { 
        const Embed9 = new MessageEmbed()
        .setColor('#0fff17')
        .setDescription('Vui lòng nhập người chơi cần kick')
        .setFooter('VD: -kick <tag> [reason]')
        .setTimestamp()

        const Embed10 = new MessageEmbed()
        .setColor('#0fff17')
        .setDescription(`<:CheckMark:892600574418227230> ***${message.member.user.tag} đã bị kick***`)
           
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
        .setColor('#0fff17')
        .setDescription('Bạn không có quyền thực hiện lệnh này')
        message.channel.send(Embed11)
    }
}
}
