const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  let discardN = "--discard-next";
  let discardP = "--discard-prev";
  let doubleN = "--double-next";
  let doubleP = "--double-prev";
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        if (arr[i] === discardP || arr[i] === doubleP) {
          continue;
        }
      }
      if (i === arr.length - 1) {
        if (arr[i] === doubleN || arr[i] === discardN) {
          continue;
        }
      }
      if (arr[i] === discardN) {
        i++;
      }
      else if (arr[i] === discardP) {
        if (!(arr[i - 2] === discardN)) {
          newArr.pop();
        }
      }
      else if (arr[i] === doubleN) {
        newArr.push(arr[i + 1]);
      }
      else if (arr[i] === doubleP) {
        if (!(arr[i - 2] === discardN)) {
          newArr.push(arr[i - 1]);
        }
      }
      else {
        newArr.push(arr[i]);
      }
    }
  }
  else {
    throw new Error()
  }
  return newArr
};
