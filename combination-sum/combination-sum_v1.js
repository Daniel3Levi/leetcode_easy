// https://leetcode.com/problems/combination-sum/

var combinationSum = function (candidates, target) {
  let sum_arr = [];
  let sums_arr = [];

  candidates = candidates.filter((num) => num <= target);
  candidates = candidates.sort((a, b) => a - b);
  let result = target - candidates[0];
  let base_arr = [];
  if (result !== 0) {
    l;
  } else {
    sums_arr.push([target]);
  }
  tar;

  if (target % 2 == 0) {
    let even_candidates = candidates.filter((num) => target % num == 0);
    if (even_candidates.length >= 1) {
      even_candidates.array.forEach((current) => {
        sum_arr = Array(target / current).fill(current);
        sums_arr.push(sum_arr);
        sum_arr = [];
      });
    }
  } else {
  }

  console.log(even_candidates);

  for (let i = 0; i < candidates.length; i++) {
    let current = candidates[i]; //2

    if (target % current == 0) {
    }
  }

  return sums_arr;
};

console.log(combinationSum([2, 4], 8));
