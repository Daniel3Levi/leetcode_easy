//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
//Time Limit Exceeded

var maxArea = function (height) {
  let maxArea = 0;

  for (let i = 0; i < height.length; i++) {
    if (i < height.length - 1) {
      let current = height[i];
      let position = i + 1;

      for (let j = i + 1; j < height.length; j++) {
        let next = height[j];
        let next_position = j + 1;
        let pos_diff = next_position - position;
        let smallest = current > next ? next : current;
        if (smallest * pos_diff > maxArea) {
          maxArea = smallest * pos_diff;
        }
      }
    }
  }
  return maxArea;
};

//console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([4, 3, 2, 1, 4])); // 16

//console.log(maxArea([0, 2])); // 0
//console.log(maxArea([1, 1])); // 1
