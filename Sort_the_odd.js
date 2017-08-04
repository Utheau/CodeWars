function sortArray(array) {
  let odd = array.filter(isOdd).sort(up);
  return array.map(replaceOdd);

  function up(x, y) {
    return x > y;
  }

  function isOdd(num) {
    return num % 2;
  }

  function replaceOdd(num) {
    return isOdd(num) ? odd.shift() : num;
  }
}