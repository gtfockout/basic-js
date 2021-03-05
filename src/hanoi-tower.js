const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let t = Math.pow(2, disksNumber) - 1;
  let s = Math.floor(((Math.pow(2, disksNumber) - 1) * 3600) / turnsSpeed);
  return {
    turns: t,
    seconds: s
  }
};
