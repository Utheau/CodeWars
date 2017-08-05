let list = {
  '3.85': 40,
  '1.93': 20,
  '0.97': 10,
  '0.49': 5,
  '0.10': 1
};

function cheapestQuote(num) {
  let total = 0;
  for (let val in list) {
    while (num >= list[val]) {
      total += +val;
      num -= list[val];
    }
  }
  return +total.toFixed(2);
}