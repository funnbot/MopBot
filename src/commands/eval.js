const Command = require('../struct/Command');

const util = require('util')

module.exports = new Command('eval')
    .setCategory('dev')
    .setUsage('Evaluate Code')
    .alias(["ev"])
    .inDm(true)
    .userPerms(["DEV"])
    .botPerms([])
    .setArgs([{
        type: "code",
        desc: "code"
    }])
    .setExec((message, bot) => {

        try {
            let toeval = eval(message.suffix);
            let inspect = util.inspect(toeval);

            if (inspect.length > 1900) {
                inspect = inspect.substr(0, 1900);
            }
            message.channel.sendMessage("**Input**\n" + message.suffix + "\n\n**Output**\n```js\n" + inspect + "```")
                .then(m => m.delete(20000)).catch(console.log);
        } catch (err) {
            message.channel.sendMessage("**```prolog\nError:\n\n" + err + "```**")
                .then(m => m.delete(20000)).catch(console.log);
        }

    })