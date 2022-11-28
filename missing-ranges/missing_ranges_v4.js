/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  let arr_missing_parts = [];
  let nums_length = nums.length;

  if (nums_length == 0) {
    if (lower == upper) {
      arr_missing_parts.push(`${lower}`);
    } else {
      arr_missing_parts.push(`${lower}->${upper}`);
    }
    return arr_missing_parts;
  }

  if (lower != nums[0]) {
    nums.unshift(lower - 1);
  }
  if (upper != nums[nums_length - 1]) {
    nums.push(upper + 1);
  }

  nums_length = nums.length;

  for (let i = 0; i < nums_length - 1; i++) {
    if (nums[i] + 2 < nums[i + 1]) {
      arr_missing_parts.push(`${nums[i] + 1}->${nums[i + 1] - 1}`);
    } else if (nums[i] + 1 != nums[i + 1]) {
      arr_missing_parts.push(`${nums[i] + 1}`);
    }
  }

  return arr_missing_parts;
};

console.log(findMissingRanges([3, 5, 7], 1, 9));
