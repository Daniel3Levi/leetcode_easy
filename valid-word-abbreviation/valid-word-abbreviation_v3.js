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

  let i = 0;
  let k = 0;
  for (; i < word.length && k < abbr.length; i++, k++) {
    console.log('--------------------\ni = ' + i);
    c1 = word[i];
    c2 = abbr[k];
    console.log('c1 = ' + c1);
    console.log('c2 = ' + c2);
    if (isNaN(c2)) {
      if (c1 != c2) {
        console.log('if (c1 != c2)');
        return false;
      }
    } else {
      let cn = c2;
      console.log('cn -> ' + cn);
      for (j = k + 1; j < abbr.length; j++) {
        console.log('j = ' + j);
        console.log('abbr[j] -> ' + abbr[j]);
        if (!isNaN(abbr[j])) {
          cn += abbr[j];
        } else {
          console.log('break');
          k = j - 1;
          break;
        }
      }
      n = cn * 1;
      console.log('n = cn * 1; -> ' + n);

      if (i + n > word.length) {
        console.log('i + n > word.length');
        return false;
      } else {
        i += n - 1;
        console.log('i += n - 1; -> ' + i);
      }
    }
  }

  console.log('i -> ' + i);
  console.log('word.length -> ' + word.length);
  console.log('k -> ' + k);
  console.log('abbr.length -> ' + abbr.length);

  if (i < word.length || k < abbr.length) {
    console.log('i < word.length || k < abbr.length');
    return false;
  }

  return true;
};

console.log(validWordAbbreviation('internationalization', 'i5a11o1'));
