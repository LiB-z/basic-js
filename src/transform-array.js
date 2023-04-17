const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
  let method = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
  if (!Array.isArray(arr)) {
    throw Error('\'arr\' parameter must be an instance of the Array!');
  }
  if(arr.length == 0) {
    return newArr;
  }
  for (let i = 0; i < arr.length; i++) {
    if((arr[i] == method[0] || arr[i] == method[2]) && newArr.length == 0) {
      i++;
    }
    if (i == arr.length-1 && (arr[i] == method[1] || arr[i] == method[3])) {
      return newArr;
    }
    if(arr[i] == method[0]) {
      newArr.splice(newArr.length-1,1);
    } else if (arr[i] == method[1]) {
      i++;
      if(arr[i+1] == method[0] || arr[i+1] == method[2]) {
        i++;
      }
    } else if(arr[i] == method[2]) {
      newArr.push(newArr[newArr.length-1]);
    } else if(arr[i] == method[3]) {
      newArr.push(arr[i+1]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

module.exports = {
  transform
};
