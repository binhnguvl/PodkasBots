const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'djt',
    description: "djt command!",
    execute(message, args){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.send();
                message.channel.send(`${message.author} đã djt ${member}`)
            } else {
                const Embed13 = new MessageEmbed()
                .setColor('#00ff06')
                .setDescription('Nhập tên người bạn muốn djt (@)')
    
                message.channel.send(Embed13)
            } 
        }
    }