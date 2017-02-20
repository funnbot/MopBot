module.exports = class Cah {

    constructor(message) {

        this.messageObject = message

        this.id = message.guild.id

        this.channel = message.channel.id

        this.czar = {
            member: {},
            number: 1
        }

        this.chosen = {}

        this.answerCards = {}

        this.members = {
            [message.author.id]: {
                id: message.author.id,
                name: message.author.username,
                score: 0,
                isCzar: false
            }
        }
    }

    addMember(message) {

        if (this.members[message.author.id]) return false

        this.members[message.author.id] = {
            id: message.author.id,
            name: message.author.username,
            score: 0,
            isCzar: false
        }

        return this.members[message.author.id]

    }

    removeMember = (message) => !this.members[message.author.id] ? delete this.members[message.author.id] : false



}