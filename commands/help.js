const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");
module.exports = {
    name: 'help',
    description: "Lệnh dùng để help member",
    execute(message, args){
        message.delete()
        const Embedhelp = new MessageEmbed()
        .setColor('#05a8ff')
        .setTitle('Các loại lệnh Podkas Bots')
        .setThumbnail('https://cdn.discordapp.com/avatars/877531292764360707/170bb30c81205b28cd0befb8a82793db.png?size=1024')
	      .setAuthor('Help Command', 'https://i.imgur.com/edqGGoZ.jpg')
        .setDescription('》Danh sách lệnh của Podkas Bots\n》Prefix Bot "-" (Không thể thay đổi)')
        .addFields(
		    { name: '❯ MODERATION [8]', value: '`kick`: Dùng để kick member\n`mute`: Dùng để mute người chơi\n`unmute`: Dùng để tắt mute người bị mute\n`ban`: Dùng để cấm người chơi\n`unban`: Dùng để bỏ cấm người bị cấm\n`clear`: Dùng để clear message\n`warn`: Dùng để cảnh cáo người chơi\n`addrole`: Dùng để addrole\n`removerole`: Dùng để xóa vai trò'},
        { name: '❯ INFO [4]', value: '`avatar`: Dùng để xem avatar\n`membercount`: Dùng để xem số người trong máy chủ\n`serverinfo`: Dùng để xem thông tin máy chủ\n`server-avatar`: Dùng để xem avatar máy chủ'},
        { name: '❯ FUN [12]', value: '`bantinh`: Dùng để bắn t*nh\n`busku`: Dùng để bú cu\n`chat`: Làm cái gì mà chat mỗi 1 khu vậy?\n`cm`: Dùng để kiểm tra độ dài cu\n`djt`: Dùng để djt người chơi\n`rut`: Dùng để rút cu và bantinh lên mặt\n`uongtinh`: Dùng để uống t*nh\n`vieng`: Viếng chùa\n`xin`: Dùng để ăn xin\n`xinloi`: Dùng để xin lổi Onii\n`xinloi2`: Dùng để xin lổi\n`xinloi3`: Dùng để xin lỗi onii pt2'},
        { name: '❯ GIVEAWAYS [1]', value: '`giveaways`: Dùng để mở giveaway'},
        { name: '❯ MISC [4]', value: '`everyone`: Dùng để ping everyone\n`queue`: Dùng để check queue 2y2c (fake)\n`random`: Dùng để random number\n`say`: say command'},
	     )
        .setImage('')
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()

        const link = new MessageButton()
        .setLabel('🚀  Podkas Bot Server')
        .setURL("https://discord.gg/tZuPgvYSVW")
        .setStyle('url')

        message.channel.send({
          buttons: link,
          embed: Embedhelp
        })
       }

    }

