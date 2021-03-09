const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof(options.separator) === 'undefined') {
    options.separator = '+';
  } 
	if (typeof(options.additionSeparator) === 'undefined') {
    options.additionSeparator = '|';
  } 
	let result = '';
  if (typeof(options.addition) !== 'undefined') {
    let i = 0;
    do {
      if (i !== options.additionRepeatTimes-1 && typeof(options.additionRepeatTimes) === 'number') {
        str += `${options.addition}${options.additionSeparator}`;
      }
      else {
        str += `${options.addition}`;
      }
      i++;
    } while (i < options.additionRepeatTimes)
  }
	let j = 0;
	do {
		if (j !== options.repeatTimes-1 && typeof(options.repeatTimes) === 'number') {
      result += `${str}${options.separator}`;
    }
		else {
      result += `${str}`;
    }
		j++;
	} while (j < options.repeatTimes)
	return result
};
  