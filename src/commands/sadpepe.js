const Command = require('../struct/Command');
const fs = require('fs')
let cycle = 0

module.exports = new Command('sadpepe')
    .setCategory('meme')
    .setUsage('Feels bad man')
    .alias(["feelsbad"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        fs.readdir('./src/images/sadpepe/', (err, files) => {
            if (err) return console.log(err);
            message.channel.sendFile('./src/images/sadpepe/' + files[cycle]);
            cycle++
            if (cycle > files.length - 1) cycle = 0
        })

    })