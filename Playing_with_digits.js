function digPow(n, p) {
  let digits, result, i, num;
  digits = Math.floor(Math.log10(n)) + p;
  result = 0;
  num = n;
  while (digits >= p) {
    result += Math.pow((num % 10), digits--);
    num = Math.floor(num / 10);
  }
  if (result % n === 0) {
    return result / n;
  }
  return -1;
}