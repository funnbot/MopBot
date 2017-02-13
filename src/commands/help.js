const Command = require('../struct/Command');

module.exports = new Command('help')
    .setCategory('other')
    .setUsage('Get this help message')
    .alias(['helpme'])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        

    })