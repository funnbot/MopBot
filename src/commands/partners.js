const Command = require('../struct/Command');
const Discord = require('discord.js')

module.exports = new Command('partners')
    .setCategory('misc')
    .setUsage('List the people who helped me with MopBot')
    .alias(["contributors"])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        let embed = new Discord.RichEmbed()

        embed.setDescription("A Thank You to all the wonderful people that have helped me with MopBot.")
        embed.addField("RobotUnderscore", "Graphical Design\nYoutube: https://www.youtube.com/user/RobotUnderscore", true)
        embed.setColor("#ff7f50")

        message.channel.send({embed}).catch(console.log)

    })