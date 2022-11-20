//https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const end = digits.length - 1;
  let zeros = [];
  for (let i = end; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
      zeros.push(0);
    } else {
      digits[i] += 1;
      return digits;
    }
  }

  if (zeros.length == digits.length) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
