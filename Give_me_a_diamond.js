function diamond(n) {
  if (typeof n != 'number' || n % 2 == 0 || n < 0) {
    return null;
  }
  let c = (n + 1) / 2,
    diam = '';
  for (let i = 1; i <= n; i++) {
    diam += (new Array(Math.abs(c - i) + 1).join(' ') +
      new Array(n - 2 * Math.abs(c - i) + 1).join('*') + '\n');
  }
  return diam;
}