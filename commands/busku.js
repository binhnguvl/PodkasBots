module.exports = {
    name: 'busku',
    description: "busku command!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.send();
            message.channel.send(`${member} Đã busku ${message.author}`);
        } else {
            message.channel.send('Nhập người bạn muốn busku (use @)');
        }
    }
}