const Command = require('../struct/Command');

module.exports = new Command('cah')
    .setCategory('games')
    .setUsage('Play cards against humanity')
    .alias(["cards"])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        if (!message.param[1]) return message.send("**InvalidArgumemt: try `start`, `end`, `join`, `leave`, or `stats`**")

        

    })