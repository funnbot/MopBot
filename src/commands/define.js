const Command = require('../struct/Command');
const Dictionary = require('mw-dictionary');

module.exports = new Command('define')
    .setCategory('fun')
    .setUsage('Get the definition of a word from Webster\'s Dictionary.')
    .alias(["dict"])
    .inDm(true)
    .userPerms([])
    .botPerms([])
    .setArgs([{
        type: "string",
        desc: "The word to define"
    }])
    .setExec((message, bot) => {

        let dict = new Dictionary({
            key: process.env.DICT
        })

        dict.define(message.param[1], (err, res) => {

            if (err || !res || !res[0]) return message.channel.sendMessage("Thats not a word silly :joy:")

            let text = []

            try {

            

            res.forEach(part => {

                let keys = Object.keys(part)

                let def = part[keys[1]].replace(/:/g, "")

                text.push({

                    name: part[keys[0]].join(""),
                    value: def.length > 1020 ? def : def.slice(-1010)

                })

            })

            let embed = {

                author: {

                    name: message.param[1],
                    icon_url: "http://cdn.theatlantic.com/static/mt/assets/science/websters.jpg"

                },
                fields: text,
                footer: {

                    text: "Powered By Webster's Dictionary",
                    icon_url: "https://assets2.merriam-webster.com/mw/static/shop/books/collegiate-dictionary-eleventh-edition.jpg"

                }
                
            }

            message.channel.sendMessage("", {embed})

            } catch(err) {
                console.log(err)
            }

        })

    })