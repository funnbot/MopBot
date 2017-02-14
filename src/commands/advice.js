const Command = require('../struct/Command');
const request = require('request')

module.exports = new Command('advice')
    .setCategory('fun')
    .setUsage('Need a little advice?')
    .alias([])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {
        let cn = request("http://api.adviceslip.com/advice", function (err, res, body) {
            let cnj = JSON.parse(body)
            message.channel.sendMessage(cnj.slip.advice)
        });
    })