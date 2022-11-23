//https://leetcode.com/problems/missing-ranges/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

// out of memory

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
// work

var findMissingRanges_2 = function (nums, lower, upper) {
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

/********************************************************************************* */
/// work

var findMissingRanges_3 = function (nums, lower, upper) {
  let missingRanges = [];

  /********************************** */
  const getRange = (num, low, up) => {
    let num_plus_1 = num + 1; // 0

    let num_minus_1 = num - 1; // -2

    if (num === undefined && low !== up) {
      missingRanges.push(`${low}->${up}`);
    } else if (low === up && nums.length <= 1) {
      if (up != num) {
        missingRanges.push(`${low}`);
      }
    }

    if (num_minus_1 > low) {
      missingRanges.push(`${low}->${num_minus_1}`);
    } else if (num_minus_1 === low) {
      missingRanges.push(`${low}`);
    }

    if (num_plus_1 < up) {
      missingRanges.push(`${num_plus_1}->${up}`);
    } else if (num_plus_1 === up) {
      missingRanges.push(`${up}`);
    }
  };

  /********************************** */
  if (nums.length == 0) {
    getRange(undefined, lower, upper);
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]; //0
    let next = nums[i + 1]; //1

    if (i == 0) {
      if (next == undefined) {
        getRange(current, lower, upper);
      } else {
        getRange(current, lower, next - 1);
      }
    }
    if (i == nums.length - 1 && nums.length !== 1) {
      getRange(current, current, upper);
    }
    if (i > 0) {
      getRange(current, current, next - 1);
    }
  }

  return missingRanges;
};

/********************************************************************************* */
/// work

var findMissingRanges_v1_s1 = function (nums, lower, upper) {
  let missingRanges = [];
  let nums_length = nums.length;
  let current_num;

  const add_range_string = (low, up) => {
    if (low == up) {
      missingRanges.push(low.toString());
    } else {
      missingRanges.push(low.toString() + '->' + up.toString());
    }
  };

  if (lower == upper) {
    if (nums_length == 0) {
      add_range_string(lower, upper);
    } else {
      //do nothing
    }
  } else {
  }

  if (nums_length == 0) {
    add_range_string(lower, upper);
  } else if (nums_length == 1) {
    current_num = nums[0];

    if (lower == upper) {
      //do nothing
    } else {
      if (current_num == lower) {
        if (current_num + 1 == upper) {
        }
      } else {
      }
    }
  } else {
  }

  return missingRanges;
};

/********************************************************************************* */

function findMissingRanges_v2_s1(nums, lower, upper) {
  // All possibole ranges
  let ranges = [];

  const add_sides = (num) => {
    if (!ranges.includes(num - 1)) {
      ranges.push(num - 1);
    }
    if (!ranges.includes(num + 1)) {
      ranges.push(num + 1);
    }
  };

  for (let i = 0; i < nums.length; i++) {
    add_sides(nums[i]);
  }

  let result_ranges = [];
  console.log(ranges);

  if (nums.length == 0) {
    if (lower == upper) {
      result_ranges.push(`${upper}`);
    } else {
      // if(lower==upper){
      result_ranges.push(`${lower}->${upper}`);
    }
  } else {
    // if(nums.length == 0)
    //do nothing
  }

  if (!ranges.includes(lower)) {
    result_ranges.push(`${lower}->${ranges[0]}`);
  } else {
    if (!nums.includes(lower)) {
      result_ranges.push(`${lower}`);
    }
  }

  for (let j = 1; j < ranges.length; j += 2) {
    let current = ranges[j];
    let next = ranges[j + 1];
    if (next !== undefined) {
      result_ranges.push(`${current}->${next}`);
    }
  }

  if (!ranges.includes(upper)) {
    result_ranges.push(`${ranges[ranges.length - 1]}->${upper}`);
  } else {
    if (!nums.includes(upper)) {
      result_ranges.push(`${upper}`);
    }
  }

  return result_ranges;
}

console.log(findMissingRanges_v2_s1([0, 1, 3, 50, 75], 0, 99));

/********************************************************************************* */
