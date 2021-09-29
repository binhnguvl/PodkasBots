const prefixSchema = require('../commands/prefix')

module.exports = {
  name: 'setprefix',
  description: "Embaead!",
  async execute(message, args, Discord) {
    const res = args.join(" ")
    if(!res) return message.channel.send('Chọn prefix đi dmm')

    prefixSchema.findOne({ Guild: message.guild.id }, async(err,data) => {
      if(err) throw err;
      if(data) {
        await prefixSchema.findOneAndDelete({ Guild: message.guild.id })
        data = new prefixSchema({
          Guild: message.guild.id,
          Prefix: res
        })
        data.save()
        message.channel.send(`Prefix đã được set thành **${res}**`)} else {
          data = new prefixSchema({
            Guild: message.guild.id,
            Prefix: res
          })
          data.save()
          message.channel.send(`Prefix has been set to **${res}**`)
        }
    })
  }
}