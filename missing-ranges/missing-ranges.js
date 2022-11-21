//https://leetcode.com/problems/missing-ranges/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

var findMissingRanges_1 = function (nums, lower, upper) {
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
/********************************************************************************* */

var findMissingRanges_2 = function (nums, lower, upper) {
  let result_arr_range = [];

  const numberOpetions = (num) => {
    let np1 = num + 1;
    let nm1 = num - 1;

    return [nm1, np1];
  };

  const getRange = (low, up) => {
    return `${low}->${up}`;
  };

  console.log(numberOpetions(nums[0]));

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 == nums.length) {
      result_arr_range.push(getRange(nums[i], upper));
    }
  }
  return result_arr_range;
};

// console.log(findMissingRanges_2([-1], -2, -1));

/********************************************************************************* */

var findMissingRanges = function (nums, lower, upper) {
  let nums_copy = [...nums];
  let result_range = [];
  let update = [];

  function compareNumbers(a, b) {
    return a - b;
  }
  if (nums[0] !== lower) {
    nums.unshift(lower);
  }

  if (nums[nums.length - 1] !== upper) {
    nums.push(upper);
  }
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (nums_copy.includes(nums[i])) {
      if (!update.includes(nums[i])) {
        if (i == 0) {
          nums.splice(i + 1, 0, nums[i] + 1);
        } else {
          nums.splice(i + 1, 0, current - 1);
          nums.splice(i + 1, 0, current + 1);
        }
      }
    }
    update.push(nums[i]);
  }

  nums.sort(compareNumbers);

  const nums_filtered = nums.filter(function (e) {
    return this.indexOf(e) < 0;
  }, nums_copy);

  update = [];
  for (let i = 0; i < nums_filtered.length; i++) {
    let current = nums_filtered[i];

    let index = nums_filtered.indexOf(current);
    let last = nums_filtered.lastIndexOf(current);

    if (index !== last) {
      nums_filtered.splice(last, 1);
      result_range.push(`${current}`);
    } else {
      if (nums_filtered[i + 1] != undefined) {
        if (!update.includes(current)) {
          result_range.push(`${current}->${nums_filtered[i + 1]}`);
          update.push(current);
          update.push(nums_filtered[i + 1]);
        }
      } else {
        if (current == upper || current == lower) {
          result_range.push(`${current}`);
        }
      }
      if (nums_filtered[i + 1] == upper) {
        if (update.includes(upper)) {
          break;
        } else {
          result_range.push(`${upper}`);
          break;
        }
      }
    }
  }
  return result_range;
};

console.log(findMissingRanges([8], 0, 9));
