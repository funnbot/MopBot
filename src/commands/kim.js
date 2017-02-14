const Command = require('../struct/Command');
const fs = require('fs')
let cycle = 0

module.exports = new Command('kim')
    .setCategory('meme')
    .setUsage('Break the internet kim')
    .alias(["breaktheinternet"])
    .inDm(true) 
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        fs.readdir('./src/images/kim/', (err, files) => {
            if (err) return console.log(err);
            message.channel.sendFile('./src/images/kim/' + files[cycle]);
            cycle++
            if (cycle > files.length - 1) cycle = 0
        })

    })