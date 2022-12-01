//https://leetcode.com/problems/valid-word-abbreviation/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let abbr_arr = abbr.match(/[a-z]+|[0-9]+/g);
  console.log(abbr_arr);
  let j = 0;
  for (let i = 0; i < word.length; i++) {
    let current_abbr;
    if (!isNaN(abbr_arr[j])) {
      i += Number(abbr_arr[j]);
      j++;
      current_abbr = abbr_arr[j];
      if (!current_abbr[0] === word[i]) {
        return false;
      }
    } else {
      current_abbr_length = current_abbr.length;
      j++;
    }
  }

  return true;
};

console.log(validWordAbbreviation('applepie', '3le2e'));
//validWordAbbreviation('internationalization', 'i12iz4n');

//validWordAbbreviation('substitution', 'sub4u4');
