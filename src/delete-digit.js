const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let Arr = [];
  for (let i = 0; i < (n + "").length; i++) {
    let Number = (n + "").split('');
    Number.splice(i, 1);
    Arr.push(Number.join(''))
  }
  return +Arr.sort()[Arr.length-1];
}

module.exports = {
  deleteDigit
};
