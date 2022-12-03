//https://leetcode.com/problems/valid-word-abbreviation/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let abbr_arr = abbr.match(/[a-z]+|[0-9]+/g);
  console.log(abbr_arr);
  for (let i = 0; i < abbr_arr.length; i++) {
    let current_abbr = abbr_arr[i];
    console.log(current_abbr);
    let abbr_index = word.indexOf(current_abbr);
    if (abbr_index == 0) {
      word = word.slice(abbr_index + current_abbr.length, word.length);
    } else {
      console.log('is number?' + abbr_arr[i]);
      if (Number(current_abbr) <= word.length && current_abbr[0] !== '0') {
        word = word.slice(Number(abbr_arr[i]), word.length);
      } else {
        return false;
      }
    }
    console.log(word);
  }
  return word.length == 0;
};

//console.log(validWordAbbreviation('applepie', '3le2e'));
//console.log(validWordAbbreviation('internationalization', 'i12iz4n'));

console.log(validWordAbbreviation('ssubstitution', '11sub3u4'));
