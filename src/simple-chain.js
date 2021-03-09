const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainValue: [],

  getLength() {
    return this.chainValue.length;
  },

  addLink(value) {
    if(typeof value == 'undefined') {
      this.chainValue.push('( )');
    } else {
      this.chainValue.push(`~( ${value} )~`);
    }
    return this;
  },

  removeLink(position) {
    if (position >= 0 && position <= this.getLength()-1) {
      this.chainValue.splice(position-1, 1);
      return this;
    } else {
      this.chainValue.length = 0;
      throw new Error();
    }
  },

  reverseChain() {
    this.chainValue.reverse();
    return this;
  },

  finishChain() {
    let result = this.chainValue.join('').slice(1, this.chainValue.join('').length-1);
    this.chainValue.length = 0;
    return result;
  }
};

module.exports = chainMaker;