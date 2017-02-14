const Command = require('../struct/Command')
const cows = require('cows')
const rn = require('random-number')

module.exports = new Command('cow')
    .setCategory('fun')
    .setUsage('Get an ascii cow')
    .alias([])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {
        var options = {
            min: 0,
            max: cows().length - 1,
            integer: true
        }
        let random = rn(options);
        message.channel.sendCode("", cows()[random])

    })