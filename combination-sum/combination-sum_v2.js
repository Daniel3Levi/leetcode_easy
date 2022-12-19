// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.filter((num) => num <= target);
  candidates = candidates.sort((a, b) => a - b);
  let all_options = [];
  let options = [];
  const getOptions = (num) => {
    for (let i = 0; i < candidates.length; i++) {
      if (num - candidates[i] > 0) {
        options.push(candidates[i]);
        if (candidates.includes(num - candidates[i])) {
          let index = candidates.indexOf(num - candidates[i]);
          options.push(num - candidates[i]);
          if (num - candidates[i] - candidates[index] == 0) {
            all_options.push(options);
            options = [];
            return;
          }
        }
      }
      getOptions(num - candidates[i]);
    }
    all_options.push(options);
  };
  getOptions(target);
  console.log(all_options);
};

console.log(combinationSum([3, 4, 5, 7], 14));
