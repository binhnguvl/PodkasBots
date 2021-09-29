const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'clear',
    description: "Xóa tin nhắn!",
    execute(message, args){
      const clear1 = new MessageEmbed()
      .setColor('#ff5959')
      .setDescription('Nhập số lượng tin nhắn bạn muốn xóa')
      .setFooter('VD: -clear <số tin nhắn [1 - 100]>')
      const clear2 = new MessageEmbed()
      .setColor('#ff5959')
      .setDescription('Bạn cần nhập 1 con số nào đó')
      .setFooter('VD: -clear <số tin nhắn [1 - 100]>')

      const clear3 = new MessageEmbed()
      .setColor('#ff5959')
      .setDescription('Bạn không thể xóa hơn 100 tin nhắn')
      .setFooter('VD: -clear <số tin nhắn [1 - 100]>')

      const clear4 = new MessageEmbed()
      .setColor('#ff5959')
      .setDescription('Bạn phải xóa ít nhất 1 tin nhắn')
      .setFooter('VD: -clear <số tin nhắn [1 - 100]>')

      const clear5 = new MessageEmbed()
      .setColor('#ff5959')
      .setDescription(`Xóa thành công **${args[0]}** tin nhắn`)

        if (message.member.hasPermission('ADMINISTRATOR')) {
        if(!args[0]) return message.channel.send(clear1);
        if(isNaN(args[0])) return message.channel.send(clear2);

        if(args[0] > 100) return message.channel.send(clear3);
        if(args[0] < 1) return message.channel.send(clear4);
        message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            return message.channel.send(clear5)
        });
    } else {
        message.channel.send('Bạn không có quyền thực hiện lệnh này')
    }
    }
}
