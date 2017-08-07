function permutations(string) {
  let array = string.split(''),
    insideObj = array.slice(),
    top = [],
    bottom = [];
  if (string.length == 1) return [string];
  array.forEach(function (value, i, array) {
    if (top.indexOf(value) == -1) {
      top.push(value);
      insideObj.splice(insideObj.indexOf(value), 1);
      permutations(insideObj.join('')).forEach(function (w) {
        bottom.push(value + w);
      });
      insideObj.push(value);
    }
  });
  return bottom;
}