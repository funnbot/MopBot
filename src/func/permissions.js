const bot = require('../bot')

const botCheck = (perms, message) => {

    let r = {has: false, miss: []}

    perms.forEach(p => {

        if (!message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission(p)) {

            r.has = true

            r.miss.push(p)

        }

    })

    return r
    
}

const userCheck = (perms, message) => {
    
    let r = {has: false, miss: []}

    perms.forEach(p => {

        if (message.author.id === "163735744995655680") return {has: false, miss: []}

        if (p.toLowerCase() === 'dev' && message.author.id === "163735744995655680") return {has: false, miss: []}
        
        if (!message.channel.permissionsFor(message.member).hasPermission(p)) {

            r.has = true

            r.miss.push(p)

        }

    })

    return r

}

exports.botCheck = botCheck
exports.userCheck = userCheck