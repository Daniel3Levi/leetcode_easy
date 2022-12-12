// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  sorted_nums = [...nums];
  sorted_nums = sorted_nums.sort((a, b) => a - b);

  if (sorted_nums.join('') !== nums.join('')) {
    return false;
  } else {
    for (let i = 0; i < nums.length; i++) {}
  }
};

//console.log(canBeIncreasing([1, 2, 10, 5, 7]));
//console.log(canBeIncreasing([2, 3, 1, 2]));
//console.log(canBeIncreasing([1, 1, 1]));
console.log(canBeIncreasing([100, 21, 3]));
