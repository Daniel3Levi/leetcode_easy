//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let maxArea = 0;

  const oneHeightCalc = (current_height, pos) => {
    let result = 0;
    for (let i = pos; i < height.length; i++) {
      let currnt_pos = i + 1;
      let current = height[i];

      let small = current_height > current ? current : current_height;

      let current_result = (currnt_pos - pos) * small;

      if (current_result > result) {
        result = current_result;
      }
    }
    return result;
  };

  for (let i = 0; i < height.length; i++) {
    let currentArea = oneHeightCalc(height[i], i + 1);
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
  }

  return maxArea;
};

//console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
//console.log(maxArea([4, 3, 2, 1, 4])); // 16

//console.log(maxArea([0, 2])); // 0
//console.log(maxArea([1, 1])); // 1
