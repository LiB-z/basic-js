const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  if (domains.length == 0) {
    return {}
  }
  for (let i = 0; i < domains.length; i++) {
    let first = domains[i].slice(domains[i].lastIndexOf('.'), domains[i].length);
    let second = domains[i].indexOf('.') == domains[i].lastIndexOf('.') ? '' : first + domains[i].slice(domains[i].indexOf('.'), domains[i].lastIndexOf('.'));
    let third = second == ''? first + '.' + domains[i].slice(domains[i][0], domains[i].indexOf('.')) : second + '.' + domains[i].slice(domains[i][0], domains[i].indexOf('.'));

    result[first] ? result[first]++ : result[first] = 1;
    result[third] ? result[third]++ : result[third] = 1;
    if(second == '') {
      continue;
    } else {
      result[second] && second != '' ? result[second]++ : result[second] = 1;
    }
  }
  return result;
}
module.exports = {
  getDNSStats
};
