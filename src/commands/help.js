const Command = require('../struct/Command');

const commands = require('../func/commands')

module.exports = new Command('help')
    .setCategory('other')
    .setUsage('Get this help message')
    .alias(['helpme'])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        let cmds = commands.get()

        let text = ['```asciidoc', 'Welcome To The Help Menu!', '========'];

        let cat = {}

        Object.keys(cmds).forEach((c, i) => {

            if (!cat[cmds[c].category]) cat[cmds[c].category] = ["\`"+cmds[c].category+"\'"]

            cat[cmds[c].category].push("  • "+cmds[c].name+":: "+ cmds[c].usage)
            
        })

        Object.keys(cat).forEach((c, i) => {

            text.push(cat[c].join('\n'))
            
        })

        text.push('```')

        message.channel.sendMessage(text, {split:{ prepend:"```asciidoc\n", append:"```"}})

    })