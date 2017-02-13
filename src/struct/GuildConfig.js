const r = require('rethinkdb')

class GuildConfig {
  constructor(n) {

    this.guild = {};

    n.data.forEach(d => {
      this.guild[d.id] = d.data;
    })

    this.conn = n.connection;

  }

  update(id) {
    r.table('config').filter({
      id
    }).run(this.conn, (err, res) => {
      res.toArray((err, data) => {
        if (err) return console.log(err);
        if (data.length < 1) {
          r.table('config').insert({
            id,
            data: this.guild[id]
          }).run(this.conn, (err, succ) => {
            if (err) console.error(err);
          })
        } else if (data.length > 1) return console.error("Duplicate Guilds Found In Database for id: " + id)
        else {
          r.table('config').filter({
            id
          }).update({
            data: this.guild[id]
          }).run(this.conn, (err, res) => {
            if (err) return console.log(err);
          })
        }
      })
    })
  }

  getString(id, name, def) {
    if (this.guild[id] && this.guild[id][name]) return this.guild[id][name]
    else return def
  }

  setString(id, name, n, def) {
    if (!this.guild[id]) this.guild[id] = {};
    this.guild[id][name] = n;
    this.update(id);
  }

  setObject(id, name, n) {
    if (!this.guild[id]) this.guild[id] = {};
    this.guild[id][name] = n;
    this.update(id)
  }

  setArray(id, name, n) {
    if (!this.guild[id]) this.guild[id] = {};
    this.guild[id][name] = n;
    this.update(id)
  }

  getPrefix(id) {
    return this.getString(id, 'prefix', '!!');
  }

  setPrefix(id, prefix) {
    this.setString(id, 'prefix', prefix, '!!');
  }

  getModLog(id) {
    return this.getString(id, 'modlog', false);
  }

  setModLog(id, modlog) {
    this.setString(id, 'modlog', modlog, false);
  }

  getAnnounce(id) {
    return this.getString(id, 'announce', {})
  }

  setAnnounce(id, announce) {
    this.setObject(id, 'announce', announce);
  }

  getDisabledCommands(id) {
    return this.getString(id, 'disabledcommands', []);
  }

  setDisabledCommands(id, disabledcommands) {
    this.setArray(id, 'disabledcommands', disabledcommands)
  }

  getAutoRole(id) {
    return this.getString(id, 'autorole', []);
  }

  setAutoRole(id, autorole) {
    this.setArray(id, 'autorole', autorole)
  }

}

module.exports = GuildConfig;