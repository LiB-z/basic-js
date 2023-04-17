const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let counter = 1;
  let result = '';
  console.debug(counter);
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i+1]) {
      counter++;
    } else {
      if(counter > 1) {
        result += counter + arr[i];
        counter = 1;
      } else {
        result += arr[i];
      }
    }
  }
  return result
}

module.exports = {
  encodeLine
};
