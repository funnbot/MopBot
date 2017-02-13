module.exports = (cmds) => {
  let keys = Object.keys(cmds);
  let alias = {};
  keys.forEach(c => {
    cmds[c].aliases.forEach(a => {
      alias[a] = c;
    })
  })
  return alias
}
