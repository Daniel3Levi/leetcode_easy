/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  let missingRanges = [];

  if (!nums.includes(lower)) {
    nums.unshift(lower - 1);
  }

  if (!nums.includes(upper)) {
    nums.push(upper + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let next = nums[i + 1];

    if (current < next) {
      let current_p1 = current + 1;
      let next_m1 = next - 1;

      if (!nums.includes(current_p1) && !nums.includes(next_m1)) {
        if (current_p1 == next_m1) {
          missingRanges.push(`${current_p1}`);
        } else {
          missingRanges.push(`${current_p1}->${next_m1}`);
        }
      }
    }
  }

  return missingRanges;
};

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
