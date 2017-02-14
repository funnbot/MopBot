const Command = require('../struct/Command');
const jimp = require('jimp')

module.exports = new Command('createcard')
    .setCategory('fun')
    .setUsage('Create a Cards Against Humanity card')
    .alias(["cahcard"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        if (!message.param[1]) return message.channel.sendMessage("**To create a card**: `" + message.prefix + "question card text | answer card text`")

        let text = message.suffix.split("|")

        if (!text[1]) return message.channel.sendMessage("*Missing text after the delimeter `|`\n**To create a card**: `" + message.prefix + "question card text | answer card text`")

        jimp.read('./src/images/cah.png', (err, image) => {
            if (err) return console.log(err);
            jimp.loadFont(jimp.FONT_SANS_64_WHITE).then(font => {
                image.print(font, 70, 70, text[0], 500)
                jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(font2 => {
                    image.print(font2, 680, 70, text[1], 500)
                    image.getBuffer(jimp.AUTO, (err, buf) => {
                        if (err) return console.log(err);
                        message.channel.sendFile(buf).catch(console.log)
                    })
                })
            })
        })
    })