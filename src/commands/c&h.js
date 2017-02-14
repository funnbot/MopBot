const Command = require('../struct/Command');
const request = require('request')

module.exports = new Command('c&h')
    .setCategory('meme')
    .setUsage('Cyanide and happiness comic')
    .alias(["ch"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        var r = request.get('http://explosm.net/comics/random', function (err, res, body) {
            message.channel.sendMessage(r.uri.href);
        });

    })