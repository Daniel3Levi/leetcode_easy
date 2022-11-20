// https://leetcode.com/problems/climbing-stairs/

// work just when n <= 5
var climbStairs1 = function (n) {
  let counter = 0;
  let mod = n % 2;

  n = n - mod;

  n = n / 2;

  let s = '2'.repeat(n);

  if (mod != 0) {
    s = s + '1';
  }

  const combo = (s) => {
    let arr = [s];
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
      let end = s.pop();
      s.unshift(end);
      let current = s.join('');
      console.log(current);
      if (!arr.includes(current)) {
        arr.push(current);
      }
    }
    console.log(arr.length);
    return arr.length;
  };
  counter = combo(s);
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '2') {
      arr[i] = '11';
      let c = arr.join('');
      counter += combo(c);
    }
  }
  return counter;
};

// fibonacci sequence

var climbStairs = function (n) {
  let a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n + 1; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

console.log(climbStairs(7));
