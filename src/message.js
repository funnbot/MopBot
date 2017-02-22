const bot = require('./bot')

const Message = require('./struct/Message')

const checks = require('./func/checks')

const commands = require('./func/commands').get()

const permissions = require('./func/permissions')

const args = require('./func/args')

const Alias = require('./func/alias')

const mention = require('./func/mention')

bot.on('message', message => {

    message = Message(message)

    if (mention(message)) return

    let alias = Alias(commands)

    if (alias[message.command]) message.command = alias[message.command]

    let cmd = commands[message.command]

    if (checks(message)) return

    //Command Handler

    if (message.channel.type === "dm" && !cmd.dm) return message.channel.sendMessage(text.message.dm)

    if (message.channel.type === "text") {

        let check = {

            b: permissions.botCheck(cmd.botPermissions, message),
            u: permissions.userCheck(cmd.userPermissions, message)

        }

        if (check.b.has) return check.b.miss.length > 0 ? message.channel.sendMessage(text.message.missbot + '`' + check.b.miss.join(", ") + '`') : 0

        if (check.u.has) return check.u.miss.length > 0 ? message.channel.sendMessage(text.message.missuser + '`' + check.u.miss + '`') : 0

        if (cmd.deleteCommand && message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission("MANAGE_MESSAGES")) message.delete()

    } else {

        if (cmd.userPermissions.indexOf('dev') > -1 && cmd.userPermissions.indexOf('DEV') > -1 && message.author.id !== "163735744995655680") return

    }

    args(message, cmd).then(msg => {

        try {

            cmd.exec(msg, bot)

        } catch(err) {

            console.log(err)

        }
        
    }).catch(err => 0)

})