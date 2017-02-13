const Command = require('../struct/Command');

module.exports = new Command('restart')
    .setCategory('dev')
    .setUsage('Restart the bot')
    .alias(["re"])
    .inDm(true)
    .userPerms(["DEV"])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {
        message.channel.sendMessage("`Restarting...`").then(() => {
            bot.destroy().then(() => {
                process.exit("Restarting")
            })
        })
    })