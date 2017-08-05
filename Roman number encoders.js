key = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

function solution(num) {
  let letters = '';
  for (let inp in key) {
    while (num >= key[inp]) {
      letters += inp;
      num -= key[inp];
    }
  }
  return letters;
}