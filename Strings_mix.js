function mix(s1, s2) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    arr1 = [],
    arr2 = [];
  alphabet.map(function (x) {
    let char = x,
      reg = new RegExp(char, 'g');
    arr1.push(s1.match(reg) || []);
    arr2.push(s2.match(reg) || []);
  });
  const max1 = [],
    max2 = [],
    eql = [];
  arr1.forEach(function (x, ind) {
    if (x.length > arr2[ind].length && x.length > 1) max1.push('1:' + x.join(''));
    if (x.length < arr2[ind].length && arr2[ind].length > 1) max2.push('2:' + arr2[ind].join(''));
    if (x.length == arr2[ind].length && x.length > 1) eql.push('=:' + x.join(''))
  });
  let str = max1.concat(max2).concat(eql).sort(function (a, b) {
    if (b.length == a.length) {
      if (a.charCodeAt(0) == b.charCodeAt(0)) return a.charCodeAt(2) - b.charCodeAt(2);
      else return a.charCodeAt(0) - b.charCodeAt(0)
    } else return b.length - a.length
  })
  return str.join('/')
}