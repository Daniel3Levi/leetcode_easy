// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid1 = function (s) {
  // Check if even
  if (s.length % 2 !== 0) {
    return false;
  }

  // Quantity comparison
  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }

  const opposite_paren = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  const OPEN = 'open';
  const CLOSE = 'close';

  const paren_state = new Map([
    ['(', OPEN],
    ['[', OPEN],
    ['{', OPEN],
    [')', CLOSE],
    [']', CLOSE],
    ['}', CLOSE],
  ]);

  s = s.split('');

  //   const half = Math.ceil(s.length / 2);
  //   const firstHalf = s.slice(0, half);
  //   const secondHalf = s.slice(half);

  //   let start = firstHalf.map((p) => {
  //     return paren_state.get(p);
  //   });
  //   let end = secondHalf.map((p) => {
  //     return paren_state.get(p) === CLOSE ? OPEN : CLOSE;
  //   });

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let current_paren_state = paren_state.get(current); // paren state - open or close?
    let op_paren = opposite_paren.get(current); // opposite paren of current
    let next; // next paren
    if (i + 1 < s.length) {
      next = s[i + 1];
    }
    let next_paren_state = paren_state.get(next); // next paren state

    if (current_paren_state === OPEN) {
      let num_paren = getOccurrence(s, current);
      let num_op_paren = getOccurrence(s, op_paren);
      /* 
    Checks whether the amount of opening brackets is equal
    to the amount of closing brackets of the same shape.
     */
      if (num_paren !== num_op_paren) {
        return false;
      }
    }

    /**
     * Checks whether the closing brackets appear
     * before the opening brackets.
     */
    let op_paren_index;
    // if its open paren
    // open -> true -> 1===1  || close -> false -> 1 !== 1
    if (current_paren_state === OPEN) {
      // get the close paren index
      op_paren_index = s.indexOf(op_paren);
      // if op_paren index < i || op_paren index = -1 => return false
      if (op_paren_index < i) {
        return false;
      }
    }

    // check if the next is open or close

    if (
      current_paren_state === OPEN &&
      next_paren_state === CLOSE &&
      next !== op_paren
    ) {
      return false;
    }
  }

  return true;
};

/*********************************************************************************** */

// var isValid = function (s) {
//   // Check if even
//   if (s.length % 2 !== 0) {
//     return false;
//   }

//   const opposite_paren = new Map([
//     ['(', ')'],
//     ['[', ']'],
//     ['{', '}'],
//     [')', '('],
//     [']', '['],
//     ['}', '{'],
//   ]);

//   const OPEN = 'open';
//   const CLOSE = 'close';

//   const paren_state = new Map([
//     ['(', OPEN],
//     ['[', OPEN],
//     ['{', OPEN],
//     [')', CLOSE],
//     [']', CLOSE],
//     ['}', CLOSE],
//   ]);

//   const split_s = s.split('');

//   if (
//     paren_state.get(split_s[0]) === CLOSE ||
//     paren_state.get(split_s[s.length - 1]) === CLOSE
//   ) {
//     return false;
//   }

//   let open = [];

//   for (let i = 0; i < split_s.length; i++) {
//     if (paren_state.get(split_s[i]) === OPEN) {
//       open.push(split_s[i]);
//       if (open.length === split_s.length) {
//         return false;
//       }
//     } else {
//       let open_op = open.map((o) => {
//         return opposite_paren.get(o);
//       });
//       open_op = open_op.reverse().join('');
//       if (open_op === '') {
//         continue;
//       }
//       let index = s.indexOf(open_op);
//       if (index < i - 1) {
//         return false;
//       }
//       if (index === -1) {
//         return false;
//       } else {
//         open = [];
//         open_op = [];
//       }
//     }
//   }
//   return true;
// };

/***************************************************************************** */

// var isValid = function (s) {
//   let check;
//   do {
//     check = s.length;

//     s = s.replaceAll('()', '');
//     s = s.replaceAll('[]', '');
//     s = s.replaceAll('{}', '');
//   } while (s.length !== check);

//   return s.length === 0;
// };

/****************************************************************************/

// var isValid = function (s) {
//   const opposite_paren = new Map([
//     ['(', ')'],
//     ['[', ']'],
//     ['{', '}'],
//     [')', '('],
//     [']', '['],
//     ['}', '{'],
//   ]);

//   const OPEN = 'open';
//   const CLOSE = 'close';

//   const paren_state = new Map([
//     ['(', OPEN],
//     ['[', OPEN],
//     ['{', OPEN],
//     [')', CLOSE],
//     [']', CLOSE],
//     ['}', CLOSE],
//   ]);

//   const update_s = (current, next, arr) => {
//     let is_open = paren_state.get(current) === OPEN;
//     let next_is_close = paren_state.get(next) === CLOSE;

//     if (is_open) {
//       if (next_is_close) {
//         let opposite = opposite_paren.get(current);
//         if (opposite == next) {
//           arr = arr.replace(current + next, '');
//         }
//       }
//     } // end of is open
//     return arr;
//   };

//   for (let i = 0; i < s.length; i++) {
//     let current = s[i];
//     let next_i_exists = i + 1 < s.length;
//     if (next_i_exists) {
//       let next = s[i + 1];
//       let update = update_s(current, next, s);
//       if (update.length !== s.length) {
//         i = 0;
//       }
//     }
//   } // end of for loop
//   return s.length === 0;
// };

/********************************************************************/

var isValid = function (s) {
  for (i = 0; i < s.length; i++) {
    if (']})'.indexOf(s[i]) != -1) {
      if (i == 0) {
        return false;
      } else {
        if (
          (s[i] == '}' && s[i - 1] != '{') ||
          (s[i] == ')' && s[i - 1] != '(') ||
          (s[i] == ']' && s[i - 1] != '[')
        ) {
          return false;
        } else {
          s = s.replace(s[i - 1] + s[i], '');
          i -= 2;
        }
      }
    }
  }
  return s.length == 0;
};

console.log(isValid('){')); // false
console.log(isValid('((')); // false
console.log(isValid('([])[]{}')); // true
console.log(isValid('({})')); // true
console.log(isValid('(}{})')); // false
console.log(isValid('([)]')); // false
console.log(isValid('[([]])')); // false
console.log(isValid('([[()[[({[]})]]])]([])')); // false

/**
 * ([{[{([])}]}])
 *
 */
