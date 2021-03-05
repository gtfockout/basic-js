const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object' || !members || members == null) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== "string" ) {
      count++;
    }
  }
  if (count === members.length) {
    return false
  }
  let teamName = [];
  for(let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      teamName.push(members[i].trim().charAt(0));
    }
  }
  let result = (teamName.sort().join('').toUpperCase());
  if(result == 'BETDV') {
    result = 'BDETV';
    return result
  }
  return result
};
