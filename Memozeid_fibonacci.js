let fibonacci = (function () {
  let mem = [0, 1];
  let fib = function (n) {
    let result = mem[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      mem[n] = result;
    }
    return result;
  };
  return fib;
}());