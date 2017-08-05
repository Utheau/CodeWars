function sum(num) {
  let store = [];
  for (let i = 0; i < num + 1; i++) {
    store.push([]);
    for (let j = 0; j < num + 1; j++)
      store[i].push(null);
  }

  function calc(n1, n2) {
    if (n2 == 0)
      return 0;
    if (n1 == 0)
      return 1;
    if (n1 < 0)
      return 0;
    if (!store[n1][n2])
      store[n1][n2] = calc(n1 - n2, n2) + calc(n1, n2 - 1);
    return store[n1][n2];
  }
  return calc(num, num);
}