const Command = require('../struct/Command');
const CardsAgainstHumanity = require('../struct/Cah')

let id = (m) => m.guild.id

let games = {}

let functions = {

    start: (msg, bot) => {

        if (!games[id(msg)]) {

            if (checkPermission(msg)) return msg.send("**You need the `MANAGE_MESSAGES` permission to start a CAH game.")

            games[id(msg)] = new CardsAgainstHumanity(message)

        } else {

           return msg.channel.sendMessage("**A game is already running on this server. Use `"+msg.prefix+"cah join` to join.**")

        }
    },
    end: (msg, bot) => {

    },
    join: (msg, bot) => {

    },
    leave: (msg, bot) => {

    },
    stats: (msg, bot) => {

    }
}

function checkPermission(message) {
    if (message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES")) return false
    return true
}

module.exports = new Command('cah')
    .setCategory('games')
    .setUsage('Play cards against humanity')
    .alias(["cards"])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([])
    .setExec((message, bot) => {

        if (!message.param[1] || !functions[message.param[1]]) return message.send("**InvalidArgumemt: try `start`, `end`, `join`, `leave`, or `stats`**")

        functions[message.param[1]](message, bot)

    })