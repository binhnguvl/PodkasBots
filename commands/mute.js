const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'mute',
    description: "Lệnh dùng để mute member",
    execute(message, args){
        if (message.member.hasPermission('MUTE_MEMBERS')) {

        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> đã bị khóa mõm `);
        } else {
            const Embed18 = new MessageEmbed()
            .setColor('#fff100')
            .setDescription('Không thể tìm thấy người cần muted!')

            message.channel.send(Embed18);
        }
    } else {
        const Embed17 = new MessageEmbed()
        .setColor('#fff100')
        .setDescription('Bạn không có quyền thực hiện lệnh này')
       
        message.channel.send(Embed17)
    }
    }
}
