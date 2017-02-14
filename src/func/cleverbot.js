const Cleverbot = require('cleverbot-node')

let cleverbot = new Cleverbot

module.exports = (message) => {
    message.channel.startTyping()

    Cleverbot.prepare(() => {

        cleverbot.write(message.suffix, (res) => {

            message.channel.sendMessage(":speech_balloon: " + res.message).then((msg) => {
                msg.channel.stopTyping(true)
            })

        })

    })

}