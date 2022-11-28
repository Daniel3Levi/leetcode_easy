/**
 * @param {string[]} strs
 * @return {string}
 */
const test_case1 = ['flower', 'flow', 'flight'];
const test_case2 = ['dog', 'racecar', 'car'];
const test_case3 = ['reflower', 'flow', 'flight'];

var longestCommonPrefix = function (strs) {
  let perfix = '';
  let str = ',' + strs.join(',');
  let word = strs[0];

  let strs_length = strs.length;
  let str_length = str.length;

  let j = 0;
  for (let i = 0; i < word.length; i++) {
    let current_perfix = ',' + word.substring(j, i + 1);
    j++;

    str = str.split(current_perfix);
    str = str.join(',');

    if (str_length - str.length == strs_length) {
      perfix += current_perfix;
      str_length = str.length;
    } else {
      break;
    }
  }

  perfix = perfix.replaceAll(',', '');
  return perfix;
};

console.log(longestCommonPrefix(test_case2));
