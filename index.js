const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

const ms = require('ms');

const map = new Map()

const snipes = new Discord.Collection()

client.commands = new Discord.Collection();

require('discord-buttons')(client);

const { MessageButton } = require('discord-buttons')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('bot is online!');
    client.user.setPresence({ activity: { name: 'Podkas đẹp trai <3' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const vaildPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS_AND_STICKERS",
        "USE_APPLICATION_COMMANDS",
        "REQUEST_TO_SPEAK",
        "MANAGE_THREADS",
        "USE_PUBLIC_THREADS",
        "USE_PRIVATE_THREADS",
        "USE_EXTERNAL_STICKERS",
    ]

    if(command.permissions){
        let invalidPerms = []
        for(const perm of command.permissions){
            if(!validPermissions.includes(perm)){
                return console.log(`Invalid Permission ${perm}`);
            }
            if(!message.member.hasPermission(perm)){
                invalidPerms.push(perm);
                break;
            }
        }
        if (invalidPerms.length){
            return message.channel.send(`Missing Permission: ${invalidPerms}`);
        }
    }


    if(command === 'theholden'){
        client.commands.get('theholden').execute(message, args);
    } else if (command == 'backdoorsv'){
        client.commands.get('backdoorsv').execute(message, args);
    } else if (command == 'command'){
        client.commands.get('command').execute(message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'servers'){
        client.commands.get('servers').execute(message, args);
    } else if (command == 'members'){
        client.commands.get('members').execute(message, args);
    } else if (command == 'djt'){
        client.commands.get('djt').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'status'){
        client.commands.get('status').execute(message, args);
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'userinfo'){
        client.commands.get('userinfo').execute(message, args);
    } else if (command == 'busku'){
        client.commands.get('busku').execute(message, args);
    } else if (command == 'emoji'){
        client.commands.get('emoji').execute(message, args);
    } else if (command == 'bantinh'){
        client.commands.get('bantinh').execute(message, args);
    } else if (command == 'rut'){
        client.commands.get('rut').execute(message, args);
    } else if (command == 'xinloi'){
        client.commands.get('xinloi').execute(message, args);
    } else if (command == 'xinloi2'){
        client.commands.get('xinloi2').execute(message, args);
    } else if (command == 'pvp1'){
        client.commands.get('pvp1').execute(message, args);
    } else if (command == 'pvp2'){
        client.commands.get('pvp2').execute(message, args);
    } else if (command == 'pvp3'){
        client.commands.get('pvp3').execute(message, args);
    } else if (command == 'pvp4'){
        client.commands.get('pvp4').execute(message, args);
    } else if (command == 'pvp5'){
        client.commands.get('pvp5').execute(message, args);
    } else if (command == 'armor'){
        client.commands.get('armor').execute(message, args);
    } else if (command == 'tools'){
        client.commands.get('tools').execute(message, args);
    } else if (command == 'bow1'){
        client.commands.get('bow1').execute(message, args);
    } else if (command == 'bow2'){
        client.commands.get('bow2').execute(message, args);
    } else if (command == 'fullpic'){
        client.commands.get('fullpic').execute(message, args);
    } else if (command == 'fullsword'){
        client.commands.get('fullsword').execute(message, args);
    } else if (command == 'tools2'){
        client.commands.get('tools2').execute(message, args);
    } else if (command == 'xin'){
        client.commands.get('xin').execute(message, args);
    } else if (command == 'chat'){
        client.commands.get('chat').execute(message, args);
    } else if (command == 'everyone'){
        client.commands.get('everyone').execute(message, args);
    } else if (command == 'xinloi3'){
        client.commands.get('xinloi3').execute(message, args);
    } else if (command == 'fly1'){
        client.commands.get('fly1').execute(message, args);
    } else if (command == 'fly2'){
        client.commands.get('fly2').execute(message, args);
    } else if (command == 'fly3'){
        client.commands.get('fly3').execute(message, args);
    } else if (command == 'fly4'){
        client.commands.get('fly4').execute(message, args);
    } else if (command == 'fly5'){
        client.commands.get('fly5').execute(message, args);
    } else if (command == 'stuff1'){
        client.commands.get('stuff1').execute(message, args);
    } else if (command == 'stuff2'){
        client.commands.get('stuff2').execute(message, args);
    } else if (command == 'stuff3'){
        client.commands.get('stuff3').execute(message, args);
    } else if (command == 'stuff4'){
        client.commands.get('stuff4').execute(message, args);
    } else if (command == 'stuff5'){
        client.commands.get('stuff5').execute(message, args);
    } else if (command == 'stuff6'){
        client.commands.get('stuff6').execute(message, args);
    } else if (command == 'stuff7'){
        client.commands.get('stuff7').execute(message, args);
    } else if (command == 'stuff8'){
        client.commands.get('stuff8').execute(message, args);
    } else if (command == 'acc1'){
        client.commands.get('acc1').execute(message, args);
    } else if (command == 'queue'){
        client.commands.get('queue').execute(message, args);
    } else if (command == 'xoso'){
        client.commands.get('xoso').execute(message, args);
    } else if (command == 'random'){
        client.commands.get('random').execute(message, args);
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args);
    } else if (command == 'add'){
        client.commands.get('add').execute(message, args);    
    } else if (command == 'uongtinh'){
        client.commands.get('uongtinh').execute(message, args);
    } else if (command == 'reactions'){
        client.commands.get('reactions').execute(message, args);
    } else if (command == 'vieng'){
        client.commands.get('vieng').execute(message, args);
    } else if (command == 'cm'){
        client.commands.get('cm').execute(message, args);
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args);
    } else if (command == 'daurong'){
        client.commands.get('daurong').execute(message, args);
    } else if (command == 'membercount'){
        client.commands.get('membercount').execute(message, args);
    }
});  

client.on('message', async message => {
  let args = message.content.substring(prefix.length).split(" ")
  if(message.content.startsWith(`${prefix}dasdgdfw`)) {
    let time = args[1]
  if (!time) return message.channel.send('You did not specify a time')

  if (
    !args[1].endsWith("d") &&
    !args[1].endsWith("h") &&
    !args[1].endsWith("m") &&
    !args[1].endsWith("s")
  )
  return message.channel.send('Bạn cần sử dụng d (ngày), h (giờ), m (phút), s (giây)')

  let gchannel = message.mentions.channels.first();
  if (!gchannel) return message.channel.send('Không thể tìm thấy kênh đó trong server!')

  let prize = args.slice(3).join(" ")
  if (!prize) return message.channel.send('abc')

  message.delete()
  let gembed = new Discord.MessageEmbed()
  .setTitle(`${prize}`)
  .setDescription(`Nhấn vào biểu tượng 🎉 để tham gia giveaways!\n Tổ chức bởi: **${message.author}**\nThời gian: **${time}**\nPhần thưởng: **${prize}**`)
  .setTimestamp(Date.now + ms(args[1]))
  .setColor('#f12030')
  .setFooter('Giveaways')
  .setTimestamp()
  let n = await gchannel.send(gembed)
  n.react("🎉")
  setTimeout(() => {
    if(n.reactions.cache.get("🎉").count <= 1) {
      return message.channel.send("Không đủ người tham gia để tiến hành giveaways")
    }
   let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
   gchannel.send(`🎁 Chúc mừng **${winner}** đã trúng thưởng **${prize}** 🎁\nLiên hệ ${message.author} hoặc tạo ticket để nhận phần thưởng 🎉`);
  }, ms(args[1]));
  }
})

client.snipes = new Map()


client.on('messageDelete', function (message, channel) {
   client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})

client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ")
  if (message.content.startsWith(`${prefix}snipe`)) {
    const msg = client.snipes.get(message.channel.id);
    const SnipeEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(message.content)
    .setColor("f12030")
    .setImage(message.image)

    message.channel.send(SnipeEmbed)
  }
})

client.on('message', message => {
 let args = message.content.substring(prefix.length).split(" ")
 if (message.content.startsWith(`${prefix}avatar`)) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('f12030')
        .setTitle(`Avatar của ${user.tag}`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 256 }))
    message.channel.send(avatarEmbed);
}
})

client.on('clickButton', async (button) => {
  if(button.id === "smarts"){
    await button.reply.defer()
    await button.message.channel.send("button green")
  }
})

client.on('message', message => {
 let args = message.content.substring(prefix.length).split(" ")
 if (message.content.startsWith(`${prefix}adsad`)) {
   const help2 = new Discord.MessageEmbed()
   .setDescription('Bạn có chấp nhận bú cu tôi không?')
   .setColor('#ff0000')

   const yes = new MessageButton()
   .setStyle("blurple")
   .setLabel("Đồng ý")
   .setID("smardasdt")

   const no = new MessageButton()
   .setStyle("red")
   .setLabel("Từ chối")
   .setID("smarts")

   message.channel.send({
     buttons: [yes, no],
     embed: help2
   })
 }
})

 
client.on('message', message => {
 let args = message.content.substring(prefix.length).split(" ")
 if (message.content.startsWith(`${prefix}viengchua`)) {
    const viengchua1 = new Discord.MessageEmbed()
    .setColor('#f43213')
    .addFields(
		    { name: 'Viếng Pé ROD', value: 'Pay khỏi clan vào lúc 9 giờ 12 phút ngày 24/09/2021 vì bị ngu'},
	  )
    .setImage('')
    .setFooter('Tưởng niệm ROD pay khỏi clan')
    .setTimestamp()
      
    const cungRODs = new MessageButton()
    .setStyle("green")
    .setLabel("🙏")
    .setID("cungRODs")
          
    message.channel.send({
      buttons: cungRODs,
      embed: viengchua1
    })
  }
})

client.on('clickButton', async (button) => {
  if (button.id === 'cungRODs') {
    button.reply.defer()
    button.channel.send(`**${button.clicker.user.tag}** vừa viếng pé ROD 1 nén nhang 🙏`);
  }
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")
    if (message.content.startsWith(`${prefix}serverinfo`)) {
    const serverinfo3 = new Discord.MessageEmbed()
      .setTitle(`Thông tin máy chủ ${message.guild.name}`)
      .setDescription(`❯ Bao gồm các thông tin về máy chủ ${message.guild.name}`)
      .setAuthor(`Podkas Bots`, message.author.displayAvatarURL())
      .setThumbnail(`${message.guild.iconURL()}`)
      .addFields({
        name: '**● GENERAL INFO**', value: `**Tên máy chủ**: ${message.guild.name}\n**Trùm máy chủ**: ${message.guild.owner.user.tag}\n**Tổng số thành viên**: ${message.guild.memberCount}\n**Mức độ bảo mật máy chủ**: ${message.guild.mfaLevel}\n**Tổng số nâng cấp (boost)**: ${message.guild.premiumSubscriptionCount}`,
      })
    
    message.channel.send(serverinfo3)
    }
  })

client.login('ODc3NTMxMjkyNzY0MzYwNzA3.YRz-sw.y0TvChMzKT1UGtD1ROnauL5nxSg');
