/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const countInstances = (str, val) => {
    return str.split(val).length - 1;
  };

  let chars = [];
  let nums = '';
  for (let i = 0; i < word.length; i++) {
    let char_instance;
    if (!chars.includes(word[i])) {
      char_instance = countInstances(word, word[i]);
      nums += char_instance;
      chars.push(word[i]);
    }
  }

  let num_count = countInstances(nums, nums[0]);
  let one_count = countInstances(nums, '1');

  if (one_count === nums.length) {
    return true;
  }

  if (one_count === nums.length - 1) {
    if (nums.includes(2)) {
      return true;
    }
  }

  if (one_count == 1) {
    nums = nums.replace('1', '');
    console.log(nums);
    num_count = countInstances(nums, nums[0]);
    if (num_count == nums.length) {
      return true;
    } else {
      return false;
    }
  }

  if (num_count === nums.length - 1) {
    if (nums.includes(Number(nums[0]) + 1)) {
      return true;
    }
  }

  if (nums.length == 2) {
    if (Number(nums[0]) + 1 == nums[1] || Number(nums[0]) - 1 == nums[1]) {
      return true;
    }
  }

  return false;
};

console.log(equalFrequency('cccd'));
