const Command = require('../struct/Command');
const request = require('request')

module.exports = new Command('cat')
    .setCategory('fun')
    .setUsage('Look at cats')
    .alias(["kitty"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {
        var r = request.get('http://thecatapi.com/api/images/get.php/gif.php?type=gif', function (err, res, body) {
            if (err) {
                message.channel.sendMessage("**Unable to fetch kitty, please try again**");
                return;
            }
            message.channel.sendFile(r.uri.href);
        });
    })