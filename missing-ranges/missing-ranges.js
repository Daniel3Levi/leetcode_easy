//https://leetcode.com/problems/missing-ranges/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

var findMissingRanges = function (nums, lower, upper) {
  let range = [];

  let c = upper - lower + 1;
  while (c--) {
    range[c] = upper--;
  }

  for (let i = 0; i < nums.length; i++) {
    if (range.includes(nums[i])) {
      let index = range.indexOf(nums[i]);
      range[index] = ' ';
    }
  }

  let str_arr = ',' + range.join(',') + ',';
  str_arr = str_arr.split(' ');

  const createRange = (str) => {
    str = str.split(',');
    return `${str[0]}->${str[str.length - 1]}`;
  };

  range = [];

  for (let i = 0; i < str_arr.length; i++) {
    let current = str_arr[i];
    current = current.slice(1, -1);
    let start = current.indexOf(',');
    let end = current.lastIndexOf(',');

    if (start == -1 && end == -1) {
      if (current !== '') {
        range.push(`${current}`);
      }
    } else {
      let str = createRange(current);
      range.push(str);
    }
  }

  return range;
};
