const Command = require('../struct/Command');
const Embed = require('discord.js').RichEmbed
const commands = require('../func/commands')

module.exports = new Command('help')
    .setCategory('misc')
    .setUsage('Get this help message')
    .alias(['helpme'])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        let embed = new Embed()

        let cmds = commands.get()

        let category = {
            fun: ":tada:",
            games: ":video_game:",
            meme: ":frog:",
            utility: ":gear:",
            moderation: ":hammer:",
            misc: ":open_file_folder:"
        }

        let cat = {}

        let text = []

        Object.keys(cmds).forEach((c, i) => {

            if (cmds[c].category !== "dev") {

                if (!cat[cmds[c].category]) cat[cmds[c].category] = []

                cat[cmds[c].category].push("`" + cmds[c].name + "`")

            }

        })

        Object.keys(cat).forEach((c, i) => {

            let f = c[0]
            let name = f.toUpperCase() + c.slice(1)

            embed.addField(category[c] + " | " + name, cat[c].join(', '))

        })

        embed.setTitle("`Commands`")
        embed.setFooter("Generated with <3 on " + (new Date))
        embed.setColor("#50fffa")

        message.channel.sendMessage({
            embed
        })

        /* let cmds = commands.get()

        let text = ['```asciidoc', 'Welcome To The Help Menu!', '========'];

        let cat = {}

        Object.keys(cmds).forEach((c, i) => {

            if (cmds[c].category !== "dev") {

                if (!cat[cmds[c].category]) cat[cmds[c].category] = ["\`" + cmds[c].category + "\'"]

                cat[cmds[c].category].push("  • " + cmds[c].name + ":: " + cmds[c].usage)

            }

        })

        Object.keys(cat).forEach((c, i) => {

            text.push(cat[c].join('\n'))

        })

        text.push('```')

        message.channel.sendMessage(text, {
            split: {
                prepend: "```asciidoc\n",
                append: "```"
            }
        })
*/
    })