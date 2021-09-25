const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'rut',
    description: "rut1",
    execute(message, args){
     
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.send();
            message.channel.send(`${message.author} đã bantinh lên mặt ${member}`);
        } else {
            const Embed21 = new MessageEmbed()
            .setColor('#00ff06')
            .setDescription('Nhập tên người bạn muốn rut ra (@)')

            message.channel.send(Embed21)
        }
    }
}