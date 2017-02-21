const Command = require('../struct/Command');
const unirest = require('unirest')

module.exports = new Command('yoda')
    .setCategory('fun')
    .setUsage('Turn a message to yoda speak')
    .alias(["yodify"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([{
        type: "string",
        desc: "The text to turn to yoda speak"
    }])
    .setExec((message, bot) => {
        let these = !!message.param[1] ? message.suffix.split(" ").join("+") : "I+am+a+derp+for+not+providing+a+message."
        unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + these)
            .header("X-Mashape-Key", "JaQdLGeOlzmshQ3f2imPtIN6MziFp1SFNWfjsnK9yN89vERIM8")
            .header("Accept", "text/plain")
            .end(function (result) {
                message.send(result.body);
            });
    })