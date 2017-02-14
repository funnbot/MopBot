const Command = require('../struct/Command')
const fs = require('fs')
const wrapper = require('canvas-text-wrapper').CanvasTextWrapper
const Canvas = require('canvas')

module.exports = new Command('nut')
    .setCategory('meme')
    .setUsage('The nut meme')
    .alias([])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([{
        type: "string",
        desc: "The text to write"
    }])
    .setExec((message, bot) => {

        let canvas = new Canvas(640, 640)
        let ctx = canvas.getContext('2d')

        let Img = Canvas.Image
        let img = new Img

        fs.readFile('./src/images/nut.png', (err, file) => {
            if (err) return console.log(err)
            
            img.src = file

            ctx.drawImage(img, 0, 0, 640, 640)
            ctx.strokeStyle = "#000000"
            ctx.font = "40x Blippo, fantasy"

            let te = ctx.measureText(message.suffix)

            if (te.width > 597) return message.channel.sendMessage("**Your message was too long**")

            wrapper(canvas, message.suffix, {
                font: "40px Blippo, fantasy",
                paddingX: 13,
                paddingY: 13
            })

            canvas.toBuffer((err, buff) => {
                if (err) return console.log(err)

                message.channel.sendFile(buff)
            })

        })

    })