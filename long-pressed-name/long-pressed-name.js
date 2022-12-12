//https://leetcode.com/problems/long-pressed-name/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

// daniel , ddaniel
var isLongPressedName = function (name, typed) {
  for (let i = 0; i < typed.length; i++) {
    let current_char = typed[i];
    if (current_char === name[i]) {
      let j = i;
      while (current_char === name[i]) {
        j++;
        current_char = typed[j];
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(isLongPressedName('daniel', 'ddaniel'));
