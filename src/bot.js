const Bot = require('./struct/Bot')

Bot().then(bot => {

    module.exports = bot

    require('./message')

    require('./text')

    require('./func/commands').load()

    bot.login(process.env.TOKEN)

}).catch(err => console.log(err));