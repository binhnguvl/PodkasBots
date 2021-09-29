const { Message } = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'addrole',
  description: 'adsd',
  run : async(message, args, client) => {
    /**
     * @param { Message } message
     */
    const addrole1 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription('Bạn không có quyền sử dụng lệnh này')

    const addrole2 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription('Không tìm thấy người chơi này')

    const addrole3 = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription('Không tìm thấy vai trò này')

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`dasd`)

    const target = message.mentions.members.first()
    if(!target) return message.channel.send('dasdasd')
    const role = message.mentions.roles.first()
    if(!role) return message.channel.send('dasdads')

    await target.roles.add(role)
    message.channel.send(`${target.user.username} has obtain a role`)
}
}