function deleteNth(arr, x) {
  let bag = {};
  return arr.filter((n) => {
    bag[n] = (bag[n] || 0) + 1;
    return bag[n] <= x;
  });
}