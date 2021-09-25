const { MessageEmbed } = require("discord.js")
const { MessageButton } = require('discord-buttons')
module.exports = {
    name: 'viengchua',
    description: "Lệnh dùng để help mdsaember",
    execute(message, args){
        message.delete()
        const viengchua = new MessageEmbed()
        .setColor('#f43213')
        .addFields(
		    { name: 'Viếng Pé ROD', value: 'Pay khỏi clan vào lúc 9 giờ 12 phút ngày 24/09/2021 vì bị ngu'},
	     )
        .setImage('')
        .setFooter('Tưởng niệm ROD pay khỏi clan')
        .setTimestamp()
        
      client.on('clickButton', async (button) => {
        if(button.id === "cungRODs"){
           await button.reply.defer()
           await button.message.channel.send("button green")
          }  
        })

          const cungRODs = new MessageButton()
          .setStyle("red")
          .setLabel("🙏")
          .setID("cungRODs")
          
       message.channel.send({
        buttons: cungRODs,
        embed: viengchua
      })
    }
}