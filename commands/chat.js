module.exports = {
    name: 'chat',
    description: "link youtudbe",
    execute(message, args)
    {
        message.delete()

        message.channel.send(`làm cái j mà chat mỗi khu luôn vậy`)
        }
    }
