function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function (a) {
      return {
        val: a,
        key: a.split("").reduce(function (previous, current) {
          return parseInt(previous) + parseInt(current);
        }, 0)
      };
    })
    .sort(function (z, y) {
      return z.key == y.key ?
        z.val.localeCompare(y.val) :
        (z.key - y.key);
    })
    .map(function (v) {
      return v.val;
    })
    .join(" ");
}