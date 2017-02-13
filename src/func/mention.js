const bot = require('../bot')

module.exports = (message) {

    if (!message.content.startsWith("<@"+bot.id+">") || !message.content.startsWith("<@!"+bot.id+">")) return false

    
}