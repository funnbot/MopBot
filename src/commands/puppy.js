const Command = require('../struct/Command');
const random = require('random-puppy')

module.exports = new Command('puppy')
    .setCategory('fun')
    .setUsage('Look at puppies')
    .alias(["puppies"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        random().then(url => {
            message.channel.sendFile(url)
        }).catch(err => message.channel.sendMessage("**Unable to fetch puppy, please try again**"))

    })