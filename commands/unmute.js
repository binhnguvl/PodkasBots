module.exports = {
    name: 'unmute',
    description: "Lệnh dùng để unmute member",
    execute(message, args){
        if (message.member.hasPermission('MUTE_MEMBERS')) {
    
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.id === '880087341614641212');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> đã được mở rọ mõm`);
        } else {
            message.channel.send('Không thể tìm thấy người cần unmute!');
        }
    } else {
        message.channel.send('Bạn không có quyền unmute người khác')
    }
    }
}
