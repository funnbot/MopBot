const Command = require('../struct/Command');

module.exports = new Command('say')
    .setCategory('fun')
    .setUsage('Make MopBot say a message')
    .alias([])
    .inDm(true)
    .deleteCmd(true)
    .userPerms([])
    .botPerms([])
    .setArgs([{type:"string", desc:"The message to make mopbot repeat"}])
    .setExec((message, bot) => {
        message.send(":speech_balloon: "+message.suffix)
    })