/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates_1 = function (nums) {
  nums = nums.filter((c, index) => {
    return nums.indexOf(c) === index;
  });
  return nums;
};

var removeDuplicates_2 = function (nums) {
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (num === nums[i]) {
      nums.splice(i, 1);
      i--;
    } else {
      num = nums[i];
    }
  }

  return nums;
};

var removeDuplicates_3 = function (nums) {
  t = nums[0];
  for (i = 1; i < nums.length; i++) {
    if (nums[i] == t) {
      nums[i] = '';
    } else {
      t = nums[i];
    }
  }
  nums.sort();

  return nums;
};

console.log(removeDuplicates_3([1, 1, 2, 2, 33, 33, 44, 55]));
