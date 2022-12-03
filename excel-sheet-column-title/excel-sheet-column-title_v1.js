//https://leetcode.com/problems/excel-sheet-column-title/

/* 
I didn't like the above problem, in my opinion there is 
no aspect of logical thinking in it, only general knowledge, although it is also comforting. 
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let columnLetter = '',
    t;

  while (columnNumber > 0) {
    t = (columnNumber - 1) % 26;
    columnLetter = String.fromCharCode(65 + t) + columnLetter;
    columnNumber = ((columnNumber - t) / 26) | 0;
  }
  return columnLetter || undefined;
};

//https://www.codegrepper.com/tpc/jvascript+number+to+column+letter
//https://stackoverflow.com/questions/45787459/convert-number-to-alphabet-string-javascript/45787487
