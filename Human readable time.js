function humanReadable(seconds) {
  let a = function (x) {
    return (x < 10) ? "0" + x : x;
  }
  return a(parseInt(seconds / (60 * 60))) + ":" + a(parseInt(seconds / 60 % 60)) + ":" +
    a(seconds % 60)
}