const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'uongtinh',
    description: "bantinh command!",
    execute(message, args){
      message.delete()
     
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.send();
            message.channel.send(`${message.author} đã uống t*nh của ${member}`);
        }
    }
}