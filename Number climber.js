function climb(n) {
  let total = [];
  while (n >= 1) {
    total.unshift(n);
    n = Math.floor(n / 2);
  }
  return total;
}