const Command = require('../struct/Command');

module.exports = new Command('purge')
    .setCategory('moderation')
    .setUsage('Delete messages in a channel')
    .alias(["prune", "clear"])
    .inDm(false)
    .userPerms(['MANAGE_MESSAGES'])
    .botPerms(['MANAGE_MESSAGES'])
    .setArgs([])
    .setExec((message, bot) => {

        let num = parse

    })