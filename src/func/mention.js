const bot = require('../bot')

const help = require('../commands/help')

const cleverbot = require('./cleverbot')

module.exports = (message) => {

    if (message.content.startsWith("<@" + bot.user.id + ">") || message.content.startsWith("<@!" + bot.user.id + ">")) {

        if (message.param[1] === "prefix") {

            message.channel.sendMessage("**The prefix for this guild is** `" + message.prefix + "`")

            return true

        }

        if (message.suffix === "help") {

            help.exec(message, bot)

            return true

        }

        if (message.param[1]) {

            cleverbot(message)

            return true

        }

    }

    return false

}