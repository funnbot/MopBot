class Command {

    constructor(name) {

        if (!name) throw new Error("Command Name Undefined")

        this.name = name

        this.category = ""

        this.usage = ""

        this.deleteCommand = false

        this.aliases = []

        this.userPermissions = []

        this.botPermissions = []

        this.args = []

        this.dm = false

        this.cooldown = 0

        this.exec = (message, bot) => {}

        return this;

    }

    setCategory (category = "") {
        if (typeof category !== 'string') throw new Error("Category must be typeof string");
        this.category = category;
        return this;
    }

    setUsage (usage = "") {
        if (typeof usage !== 'string') throw new Error("Usage must be typeof string");
        this.usage = usage;
        return this;
    }

    deleteCmd(deleteCommand = false) {
        if (typeof deleteCommand !== 'boolean') throw new Error("deleteCommand must be typeof boolean");
        this.deleteCommand = deleteCommand;
        return this;
    }

    alias(aliases = []) {
        if (!Array.isArray(aliases)) throw new Error("alias must be typeof array");
        this.aliases = aliases;
        return this;
    }

    userPerms(userPermissions = []) {
        if (!Array.isArray(userPermissions)) throw new Error("userPermissions must be typeof array");
        this.userPermissions = userPermissions;
        return this;
    }

    botPerms(botPermissions = []) {
        if (!Array.isArray(botPermissions)) throw new Error("botPermissions must be typeof array");
        this.botPermissions = botPermissions;
        return this;
    }

    setArgs(args = []) {
        if (!Array.isArray(args)) throw new Error("args must be typeof array");
        this.args = args;
        return this
    }

    inDm(dm = false) {
        if (typeof dm !== "boolean") throw new Error("dm must be typeof boolean");
        this.dm = dm;
        return this;
    }

    coolDown(cooldown = 0) {
        if (typeof cooldown !== "number") throw new Error("cooldown must be typeof number");
        this.cooldown = cooldown;
        return this;
    }

    setExec(exec = () => {}) {
        if (typeof exec !== "function") throw new Error("exec must be typeof function.");
        this.exec = exec;
        return this;
    }
    
}

module.exports = Command;