/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  let word_length = word.length;

  const getCharCout = (char) => {
    let char_countr = 0;
    if (char === undefined) {
      return undefined;
    } else {
      word = word.replaceAll(char, '');
      char_countr = word_length - word.length;
      word_length = word.length;
      return char_countr;
    }
  };

  let word_arr = word.split('');

  let count = word_arr.map((char) => {
    return getCharCout(char);
  });

  count = count.sort().reverse().join('');
  let count_length = count.length;

  console.log(count);
};

console.log(equalFrequency('dddbbb'));

console.log(equalFrequency('dddabbbccc'));
console.log(equalFrequency('aaabbbbccc'));

console.log(equalFrequency('aaaabbbbccc'));

console.log(equalFrequency('bbbcccaa'));
console.log(equalFrequency('aaabbbccc'));
