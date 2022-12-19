//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  const isHeightIsValid = (current_height, position) => {
    let index = position - current_height - 1; //

    if (index > -1) {
      if (height[index] >= current_height) {
        console.log(true);
        return true;
      }
    }

    return false;
  };

  let result = 0;
  for (let i = 0; i < height.length; i++) {
    //7     /9
    if (isHeightIsValid(height[i], i + 1)) {
      let mult = height[i] * height[i];
      if (height[i] == 1) {
        mult = mult * i;
      }

      if (mult > result) {
        result = mult;
      }
    }
  }
  return result;
};

//console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
//console.log(maxArea([4, 3, 2, 1, 4])); // 16

//console.log(maxArea([0, 2])); // 0
//console.log(maxArea([1, 1])); // 1
//console.log(maxArea([1, 2, 1])); //2
console.log(maxArea([1, 2])); //1
