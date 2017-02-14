const Command = require('../struct/Command')
const fs = require('fs')
const wrapper = require('canvas-text-wrapper')
const Canvas = require('canvas'),
    Image = Canvas.Image

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

        fs.readFile('./src/images/nut.jpg', (err, file) => {
            if (err) return console.log(err)

            let img = new Image
            img.src = file

            if (img.onload === null) return 

            let canvas = new Canvas(img.width, img.height)
            let ctx = canvas.getContext('2d')

            ctx.drawImage(img, 0, 0, img.width, img.height)
            ctx.strokeStyle = "#000000"

            wrapper(canvas, message.suffix, {
                font: "100px Blippo, fantasy"
            })

            canvas.toBuffer((err, buff) => {
                if (err) return console.log(err)

                message.channel.sendFile(buff)
            })

        })

    })