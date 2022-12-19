//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let current_area = 0;

  let right = 0;
  let left = height.length - 1;
  let maxArea = 0;

  while (right < left) {
    let diff_pos = left + 1 - (right + 1);
    let minHeight = height[right] > height[left] ? height[left] : height[right];

    current_area = diff_pos * minHeight;
    if (current_area > maxArea) {
      maxArea = current_area;
    }
    height[right] > height[left] ? left-- : right++;
  }

  return maxArea;
};

//console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
//console.log(maxArea([4, 3, 2, 1, 4])); // 16

//console.log(maxArea([0, 2])); // 0
//console.log(maxArea([1, 1])); // 1

console.log(maxArea([2, 3, 4, 5, 18, 17, 6])); //17
