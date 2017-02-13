const commands = require('./commands').get()

const bot = require('../bot')

const checks = (message) => {

    if (message.author.bot) return true

    if (!message.content.startsWith(message.prefix)) return true

    if (!commands[message.command]) return true

    if (message.channel.type === "text" && !message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission("SEND_MESSAGES")) return true

    return false

}

module.exports = checks