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
		    { name: 'Viếng Chùa Online', value: 'Viếng chùa tịnh tâm'},
	     )
        .setImage('')
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