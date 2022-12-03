//https://leetcode.com/problems/valid-word-abbreviation/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  if (('a' + abbr).match(/[a-z]0/) != null) {
    return false;
  }

  abbr = abbr.match(/[a-z]+|[0-9]+/g);

  for (let i = 0, j = 0, l = abbr.length; i < l; i++) {
    if (isNaN(abbr[i])) {
      j++;
    } else {
      j += abbr[i] * 1;
      if (j > word.length) {
        return false;
      }
      abbr[i] = '?'.repeat(abbr[i]);
    }
  }

  console.log(abbr);
  abbr = abbr.join('');

  console.log(abbr);
  if (word.length != abbr.length) {
    return false;
  }
  for (let i = 0, l = word.length; i < l; i++) {
    if (word[i] != abbr[i] && abbr[i] != '?') {
      return false;
    }
  }

  return true;
};

//console.log(validWordAbbreviation('applepie', '3le2e'));
//console.log(validWordAbbreviation('internationalization', 'i12iz4n'));

console.log(validWordAbbreviation('internationalization', 'i12iz4n'));
