const Command = require('../struct/Command');

let special = {
    "0": ":zero:",
    "1": ":one:",
    "2": ":two:",
    "3": ":three:",
    "4": ":four:",
    "5": ":five:",
    "6": ":six:",
    "7": ":seven:",
    "8": ":eight:",
    "9": ":nine:",
    "<": ":arrow_backward:",
    ">": ":arrow_forward:",
    "!": ":exclamation:",
    "?": ":question:",
    "^": ":arrow_up_small:",
    "+": ":heavy_plus_sign:",
    "-": ":heavy_minus_sign:",
    "÷": ":heavy_division_sign:",
    ".": ":radio_button:"
}

module.exports = new Command('emojify')
    .setCategory('fun')
    .setUsage('Turn text into emojis')
    .alias(["emoji"])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([{
        type: "string",
        desc: "The text to emojify"
    }])
    .setExec((message, bot) => {

        let emoji = message.suffix.toLowerCase().split("");
        let done = "";

        for (c = 0; c < emoji.length; c++) {
            if (/\s/g.test(emoji[c])) {
                done += "   ";
            } else if (/[abcdefghijklmnopqrstuvwxyz]/g.test(emoji[c])) {
                done += emoji[c].replace(emoji[c], " :regional_indicator_" + emoji[c] + ":");
            } else if (special[emoji[c]]) {
                done += " " + special[emoji[c]]
            } else {
                done += " " + emoji[c] + " "
            }

        }

        message.send(done)

    })