const Discord = require('discord.js')

const loadDB = require('../func/loadDB')

const GuildConfig = require('../struct/GuildConfig')

const Bot = () => {

    return new Promise((resolve, reject) => {

        loadDB().then((data) => {

            let bot = new Discord.Client({

                disabledEvents: ['TYPING_START'],
                fetchAllMembers: true
                
            })

            bot.config = new GuildConfig(data)

            bot.embed = Discord.RichEmbed

            bot.on('ready', () => {
                console.log("Shard #"+bot.shard.id+" active with "+bot.guilds.size+" guilds")
            })

            return resolve(bot);

        }).catch(err => reject(err))

    })

}

module.exports = Bot;