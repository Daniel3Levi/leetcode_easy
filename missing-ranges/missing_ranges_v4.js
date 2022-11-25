/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  let arr_missing_parts = [];

  const add_missing_parts = (low, high) => {
    if (low == high) {
      arr_missing_parts.push(`${low}`);
    } else {
      arr_missing_parts.push(`${low}->${high}`);
    }
  };

  if (nums.length == 0) {
    add_missing_parts(lower, upper);
    return arr_missing_parts;
  }

  if (lower != nums[0]) {
    add_missing_parts(lower, nums[0] - 1);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 != nums[i + 1]) {
      add_missing_parts(nums[i] + 1, nums[i + 1] - 1);
    }
  }

  if (upper != nums[nums.length - 1]) {
    add_missing_parts(nums[nums.length - 1] + 1, upper);
  }

  return arr_missing_parts;
};

console.log(findMissingRanges([1, 2, 4], 1, 10));
