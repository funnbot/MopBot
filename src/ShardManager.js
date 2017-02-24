const Discord = require('discord.js')

const Manager = new Discord.ShardingManager('./src/bot.js')

Manager.spawn(2)

Manager.on('launch', (shard) => {
    
})