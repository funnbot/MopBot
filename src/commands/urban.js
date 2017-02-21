const Command = require('../struct/Command');
const urban = require('urban')
const Embed = require('discord.js').RichEmbed

module.exports = new Command('urban')
    .setCategory('fun')
    .setUsage('Define a word on urban dictionary')
    .alias([])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([{type:"string", desc:"The word to define"}])
    .setExec((message, bot) => {
        
        let search = urban(message.suffix)
        search.first(json => {
            if (!json) return message.send("**There were no results for this search term**")

            json.definition = json.definition.length > 2040 ? json.definition.slice(0, 2039) : json.definition
            json.example = json.example.length > 1020 ? json.example.slice(0, 1019) : json.example

            let embed = new Embed()
            embed.setTitle("`"+message.suffix+"`")
            embed.setColor(0xD71A75)
            embed.setDescription(json.definition)
            embed.addField("**Examples**", json.example)
            embed.setFooter("Powered By Urban Dictionary", "http://www.extension.zone/wp-content/uploads/2015/11/Urban-Dictionary-logo.png")

            message.send({embed})

        })
    })