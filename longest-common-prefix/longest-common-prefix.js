// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let short = Math.min.apply(
    Math,
    strs.map(function (word) {
      return word.length;
    })
  );

  let prefix = '';

  const allEqual = (arr) => {
    return new Set(arr).size == 1;
  };
  for (let i = 0; i < short; i++) {
    let current_letters = strs.map((word) => {
      let arr = word.split('');
      return arr[i];
    });

    if (allEqual(current_letters)) {
      prefix += current_letters[0];
    } else {
      break;
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
