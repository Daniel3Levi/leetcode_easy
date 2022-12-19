// https://leetcode.com/problems/combination-sum/

var combinationSum = function (candidates, target) {
  let sum_arr = [];
  let sums_arr = [];

  candidates = candidates.filter((num) => num <= target);
  candidates = candidates.sort((a, b) => a - b).reverse();
  console.log(candidates);
  if (candidates[0] == target) {
    candidates.shift();
    sum_arr.push(target);
    sums_arr.push(sum_arr);
    sum_arr = [];
  }

  for (let i = 0; i < candidates.length; i++) {
    current_num = candidates[i];
    let result = target;
    //7
    while (result >= current_num) {
      // 7-3 =4
      // 7-3 = 1

      result = result - current_num;
      if (result <= 1) {
        current_num = candidates[i];
      }
      sum_arr.push(current_num);
    }
    if (candidates.includes(result)) {
      //false
      sum_arr.push(result);
      sums_arr.push(sum_arr);
    }
    sum_arr = [];
  }
  console.log(sums_arr);
};

console.log(combinationSum([2, 3, 6, 7], 7));
