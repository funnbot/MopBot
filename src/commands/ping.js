const Command = require('../struct/Command');

module.exports = new Command('ping')
    .setCategory('fun')
    .setUsage('Ping the bot')
    .alias(["pong"])
    .userPerms([])
    .inDm(true)
    .botPerms(["SEND_MESSAGES"])
    .setArgs([])
    .setExec((message, bot) => {
        message.channel.sendMessage("Ping")
            .then(msg => msg.edit(`Pong! (took: ${bot.ping}ms)`))
    });