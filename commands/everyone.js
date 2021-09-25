module.exports = {
    name: 'everyone',
    description: "link youtube",
    execute(message, args){
        if (message.member.hasPermission('ADMINISTRATOR')) { 
        message.channel.send('@everyone')
        } else {
            message.channel.send('ping con cặk djt me mày')
        }
    }
}