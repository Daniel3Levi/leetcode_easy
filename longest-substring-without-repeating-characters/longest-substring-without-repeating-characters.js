// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Get all possible combinations
  let getCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        combinations.push(str.slice(i, j));
      }
    }
    return combinations;
  };
  // Filter/Remove all combinations with repeating letters
  const checkSub = (sub, index) => {
    if (sub.length - index == 0) {
      //stop condition
      return false;
    } else {
      return (
        checkSub(sub, index + 1) ||
        sub.substr(0, index).indexOf(sub[index]) != -1
      );
    }
  };
  let all_subs = getCombinations(s);
  console.log(all_subs);
  all_subs = all_subs.filter((sub) => {
    return !checkSub(sub, 0);
  });
  // Find longest sub
  if (all_subs.length > 1) {
    let longest_sub = all_subs.reduce((a, b) => {
      return a.length > b.length ? a : b;
    });
    return longest_sub.length;
  } else if (all_subs.length === 1) {
    return all_subs[0].length;
  } else {
    return 0;
  }
};
console.log(lengthOfLongestSubstring());

// const getCombinations = (str) => {
//   let combinations = [];

//   const findCombinations = (expression, str) => {
//     combinations.push(expression);
//     for (let i = 0; i < str.length; i++) {
//       let current_new_expression = expression + str.charAt(i);
//       let left = str.slice(0, i);
//       let right = str.slice(i + 1);
//       findCombinations(current_new_expression, left + right);
//     }
//     return combinations;
//   };

//   return findCombinations('', str);
// };
