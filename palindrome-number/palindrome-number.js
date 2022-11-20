// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString().split('');
  let j = x.length - 1;
  for (let i = 0; i < x.length; i++) {
    if (j > i) {
      if (x[i] !== x[j]) {
        return false;
      }
    }
    j--;
  }
  return true;
};

console.log(isPalindrome(12));
//console.log(isPalindrome(12121));
