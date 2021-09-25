module.exports = {
    name: 'clear',
    description: "Xóa tin nhắn!",
    execute(message, args){
        if (message.member.hasPermission('ADMINISTRATOR')) {
        if(!args[0]) return message.channel.send("Nhập số lượng tin nhắn bạn muốn xóa");
        if(isNaN(args[0])) return message.channel.send("Đề nghị anh bạn nhập số thật!");

        if(args[0] > 100) return message.channel.send("Bạn không thể xóa hơn 100 tin nhắn");
        if(args[0] < 1) return message.channel.send("Bạn phải xóa ít nhất 1 tin nhắn");

        message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            return message.channel.send("Xóa thành công tin nhắn")
        });
    } else {
        message.channel.send('Bạn không có quyền thực hiện lệnh này')
    }
    }
}
