const Cleverbot = require('cleverbot-node')

let cleverbot = new Cleverbot

module.exports = (message) => {

    Cleverbot.prepare(() => {
        cleverbot.write(message.suffix, (res) => {
            message.channel.sendMessage(":speech_balloon: " + res.message)
        })
    })

}