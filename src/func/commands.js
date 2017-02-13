let fs = require('fs');

let Commands = {}

exports.load = () => {

    fs.readdir('./src/commands', (err, folder) => {

        if (err) return console.log(err);

        folder.forEach(f => {

            try {

                let cmd = require(`../commands/${f}`);

                Commands[cmd.name] = cmd;

            } catch (err) {

                console.log(err);

            }

        })

    })

}



exports.reload = (file) => {

            if (Commands[file]) {

                try {

                    delete require.cache[require.resolve(`../commands/${file}`)]

                    let cmd = require('../commands/' + file);

                    Commands[cmd.name] = cmd;

                    return "Reload Successful";

                } catch (err) {

                    delete Commands[file];

                    return err;

                }

            }

    return "Unknown Command";

}

exports.get = () => {
    return Commands;
}