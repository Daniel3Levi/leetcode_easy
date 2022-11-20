// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let index;
  for (let i = 0; i < nums.length; i++) {
    let wanted_result = target - nums[i];
    index = nums.indexOf(wanted_result);
    if (index !== -1) {
      if (i === index) {
        index = nums.indexOf(wanted_result, i + 1);
        if (index == -1) {
          continue;
        }
        return [i, index];
      }
      return [i, index];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
