const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let Command = []
  if(!Array.isArray(members) || members.length == 0) {
    return false;
  }
  if(members.length == 0) {
    return;
  }
  for (let i = 0; i < members.length; i++) {
    if(typeof members[i] !== "string") {
      continue;
    }
    members[i] = members[i].trim();
    Command.push(members[i][0].toUpperCase());
  }
  Command = Command.sort();
  return Command.join('');
}

module.exports = {
  createDreamTeam
};
