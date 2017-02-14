const Command = require('../struct/Command');
const fs = require('fs')
let cycle = 0

module.exports = new Command('gladpepe')
    .setCategory('meme')
    .setUsage('Smug pepe is smug')
    .alias(["smugpepe"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        fs.readdir('./src/images/gladpepe/', (err, files) => {
            if (err) return console.log(err);
            message.channel.sendFile('./src/images/gladpepe/' + files[cycle]);
            cycle++
            if (cycle > files.length - 1) cycle = 0
        })

    })