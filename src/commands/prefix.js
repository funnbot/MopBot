const Command = require('../struct/Command');

module.exports = new Command('prefix')
    .setCategory('utility')
    .setUsage('Set your servers prefix')
    .alias(['setprefix'])
    .inDm(false)
    .userPerms(["MANAGE_GUILD"])
    .botPerms([])
    .setArgs([{type: "string", desc:"The new prefix"}])
    .setExec((message, bot) => {

        let prefix = message.suffix

        if (prefix.length > 10) return message.channel.sendMessage("**Prefixes should not be longer than 10 characters**")

        bot.config.setPrefix(message.guild.id, prefix)

        message.channel.sendMessage("**This guilds prefix has been set to** `"+prefix+"`")
    })