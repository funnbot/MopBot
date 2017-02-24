const Discord = require('discord.js')

const Manager = new Discord.ShardingManager('./src/bot.js')

Manager.spawn(1)