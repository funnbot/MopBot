const Command = require('../struct/Command');
const request = require('request')
const Embed = require('discord.js').RichEmbed

module.exports = new Command('trivia')
    .setCategory('fun')
    .setUsage('I\'ll ask a trivia question in chat')
    .alias(["quiz"])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        request("http://jservice.io/api/random", (err, res, body) => {
            if (err) return console.log(err)
            let quiz = JSON.parse(body)

            let collect = message.channel.createCollector(m => m.author.bot === false, {
                time: 30000
            })

            collect.on('message', m => {
                if (m.content.toLowerCase().includes(quiz[0].answer.toLowerCase())) collect.stop(m.author.username)
            })

            collect.on('end', (col, reason) => {
                if (reason === "time") {
                    message.channel.sendMessage("The 30 seconds are up, the correct answer was: " + quiz[0].answer)
                } else {
                    message.channel.sendMessage("**Correct!** " + reason + " has answered the question.")
                }
            })

            let embed = new Embed()
            embed.setTitle("`Random Trivia`")
            embed.setColor(0x50FF38)
            embed.setDescription("You have 30 seconds to anwser the question.")
            embed.setAuthor(message.guild.name, message.guild.iconURL)
            embed.addField("Category", quiz[0].category.title)
            embed.addField("Question", quiz[0].question)

            message.send({embed})
        })
    })