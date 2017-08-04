function descendingOrder(n) {
  const arr = n.toString().split("").sort(
    (a, b) => {
      return b - a
    });
  return parseInt(arr.join(""));
}