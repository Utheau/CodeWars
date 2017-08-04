function repeatStr(n, s) {
  let bag = [];
  while (bag.length < n) {
    bag.push(s);
  }
  return bag.join('');
}