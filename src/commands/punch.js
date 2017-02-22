const Command = require('../struct/Command');
const jimp = require('jimp')

module.exports = new Command('punch')
    .setCategory('fun')
    .setUsage('Punch someone')
    .alias(["suckerpunch"])
    .inDm(false)
    .userPerms([])
    .botPerms([])
    .setArgs([{
        type: "mention",
        desc: "The user you are punching"
    }])
    .setExec((message, bot) => {
        if (!message.mentions.users.first()) return message.channel.sendMessage("Good job you punched the air, maybe try mentioning someone next time.")
        let authorURL = (message.author.avatarURL !== null) ? message.author.avatarURL : "http://stp-wordpress.s3.amazonaws.com/wp-content/uploads/2015/09/985746746-discord-chat-for-gamers-2015-09-14-13-34-36-icon.jpg";
        let targetURL = (message.mentions.users.first().avatarURL !== null) ? message.mentions.users.first().avatarURL : "http://stp-wordpress.s3.amazonaws.com/wp-content/uploads/2015/09/985746746-discord-chat-for-gamers-2015-09-14-13-34-36-icon.jpg";
        targetURL = targetURL.slice(0, -10)
        if (targetURL.endsWith("gif")) {
            targetURL = targetURL.slice(0, -3);
            targetURL = targetURL + "jpg";
        }
        authorURL = authorURL.slice(0, -10)
        if (authorURL.endsWith("gif")) {
            authorURL = authorURL.slice(0, -3);
            authorURL = authorURL + "jpg";
        }
        jimp.read("https://image.freepik.com/free-icon/person-fight-punch_318-29637.jpg", (err, image) => {
            if (err) return console.log(err);
            jimp.read(authorURL, (err, author) => {
                if (err) return console.log(err);
                author.resize(100, 100);
                jimp.read(targetURL, (err, target) => {
                    if (err) return console.log(err);
                    target.resize(100, 100);
                    target.rotate(-4)
                    image.composite(author, 110, 30);
                    image.composite(target, 400, 40);
                    image.getBuffer(jimp.AUTO, (err, buff) => {
                        if (err) return console.log(err);
                        message.channel.sendMessage(`**${message.author.username}** *sucker punches* **${message.mentions.users.first().username}**`);
                        message.channel.sendFile(buff);
                    })
                })
            })
        })
    })