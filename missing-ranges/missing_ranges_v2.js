/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  let missingRanges = '';

  const getNumfollow = (num) => {
    missingRanges += `${num - 1},${num + 1}->`;
  };

  if (nums[0] !== lower) {
    //undifined
    if (nums[0] == undefined) {
      if (lower == upper) {
        missingRanges = `${lower}`;
      } else {
        missingRanges = `${lower}->${upper}`;
      }
    } else {
      //if(nums[0]==undefined)
      // nums[0] > lower
      if (nums[0] - 1 == lower) {
        missingRanges = `${lower}`;
      } else {
        missingRanges = `${lower}->`;
      }
    }
  } else {
    //if (nums[0] !== lower)
    if (lower == upper) {
      return [];
    } else if (lower < upper - 1) {
      missingRanges = `${lower + 1}->${upper}`;
    }
  }

  let last_num = nums[nums.length - 1];

  const addRange = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      console.log('i: ' + i + ' num: ' + nums[i]);

      getNumfollow(nums[i]);

      if (nums[i] == upper || nums[i] + 1 == upper) {
        let last = missingRanges.lastIndexOf(','); // get last ","
        missingRanges = missingRanges.slice(0, last); // slice from start to last ","
      }
      last_num = nums[i];
    }
  };

  addRange(nums);

  if (last_num !== undefined) {
    if (last_num <= upper - 1) {
      missingRanges += `${upper}`;
    } else {
      missingRanges += `,${upper}`;
    }
  }

  return missingRanges.split(',');
};

console.log(findMissingRanges([0], -1, 1));
