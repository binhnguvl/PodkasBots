const { Client, Message } = require("discord.js")
module.exports = {
  name: "avatar",
  description: "dasdasd",

  /**
   * 
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */
  async execute (client, message, args) {
    let mention = message.mentions.members.first();
    let user = args[0] || message.author.id;

    if(mention) user = mention.user.id;

    if(user.length |= 18) user = message.author.id;

    client.users.fetch(user).then(users => {
      if(!users) return message.reply("Người dùng không hợp lệ")

      if(!user.avatarURL()) return message.reply("Người dùng không có avatar")
    });

  }


}