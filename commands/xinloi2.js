module.exports = {
    name: 'xinloi2',
    description: " command!",
    execute(message, args){
        message.delete()
     
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.send();
            message.channel.send(
            `Mình là ${message.author} đây
            Các bạn lo lắng lắm rồi đúng không? Bản thân ${message.author} lúc này không có gì khác hơn ngoài hai từ XIN LỖI.
            ${message.author} và ${member} có biết nhau khi cùng hoạt động và làm việc vào năm 2019. Đến khi ${message.author} tách ra hoạt động riêng thì có gặp lại, từ sự đồng cảm ban đầu, cả hai có phát sinh quan hệ tình cảm tự nguyện. Nhưng chuyện tình cảm thì chỉ có người trong cuộc mới hiểu rõ tận tường, mọi thứ đã không diễn tiến như mong đợi của cả ${member} và ${message.author}. Thời gian này ${message.author} không còn trong một mối quan hệ tình cảm nào. Mong các bạn loại trừ những câu chuyện gán ghép với những người không liên quan, họ phải chịu gièm pha trên mạng xã hội
            Cuối cùng, XIN LỖI VÌ TẤT CẢ
            Trân trọng,
            ${message.author} 28/08/2021`);
        } else {
            message.channel.send('Nhập người cần xin lũi=)')
        }
    }
}