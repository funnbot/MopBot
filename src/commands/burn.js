const Command = require('../struct/Command');

module.exports = new Command('burn')
    .setCategory('meme')
    .setUsage('Get burned son')
    .alias([])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([{type:"mention", desc:"The user you are burning"}])
    .setExec((message, bot) => {
        if (!message.mentions.users.first()) return message.channel.sendMessage("**Mention a user to burn them**")

        message.channel.sendMessage(`**${message.author.username}** *burned* **${message.mentions.users.first().username}**\nYou need some ice for that bud? :snowflake:\nhttps://cdn.discordapp.com/attachments/186920285285384192/262348996784291840/image.gif`)

    })