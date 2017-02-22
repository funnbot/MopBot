const Command = require('../struct/Command');

module.exports = new Command('robohash')
    .setCategory('fun')
    .setUsage('Generate a robot from text')
    .alias(["robot"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([{type:"string", desc:"The text to be used for the robohash"}])
    .setExec((message, bot) => {
        message.channel.sendFile(`https://robohash.org/${message.suffix}.png`)
    })