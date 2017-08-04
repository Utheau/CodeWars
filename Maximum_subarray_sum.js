var maxSequence = function (arr) {
  let now = 0,
    prev = 0;
  for (let i = 0; i < arr.length; i++) {
    prev = Math.max(0, prev + arr[i]);
    now = Math.max(prev, now);
  }
  return now;
}