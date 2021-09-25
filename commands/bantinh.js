const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'bantinh',
    description: "bantinh command!",
    execute(message, args){
     
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.send();
            message.channel.send(`${message.author} đã bantinh vào trong ${member}`);
        } else {
            const Embed20 = new MessageEmbed()
            .setColor('#00ff06')
            .setDescription('Nhập tên người bạn muốn bantinh (@)')

            message.channel.send(Embed20)
        }
    }
}