const Command = require('../struct/Command');
const commands = require('../func/commands');

module.exports = new Command('reload')
    .setCategory('')
    .setUsage('')
    .alias([])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([{type:"string", desc:"Command Name"}])
    .setExec((message, bot) => {

        message.channel.sendMessage(commands.reload(message.param[1]))

    })