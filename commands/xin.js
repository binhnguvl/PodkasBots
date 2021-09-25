module.exports = {
    name: 'xin',
    description: "link youtudbe",
    execute(message, args)
    {
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.send();
        message.channel.send(`${member}, cho mình xin kit exp để sữa chữa đồ dc ko`)
    } else {
        message.channel.send('Nhập người cần xin=))') 
    }
    }
}