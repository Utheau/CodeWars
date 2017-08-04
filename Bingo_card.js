function getCard() {
  let number = [];
  while (number.length < 5) {
    let random = 'B' + Math.floor((Math.random() * 15) + 1).toString();
    if (number.indexOf(random) == -1)
      number.push(random);
  }
  while (number.length < 10) {
    let random = 'I' + Math.floor((Math.random() * 15) + 16).toString();
    if (number.indexOf(random) == -1)
      number.push(random);
  }
  while (number.length < 14) {
    let random = 'N' + Math.floor((Math.random() * 15) + 31).toString();
    if (number.indexOf(random) == -1)
      number.push(random);
  }
  while (number.length < 19) {
    let random = 'G' + Math.floor((Math.random() * 15) + 46).toString();
    if (number.indexOf(random) == -1)
      number.push(random);
  }
  while (number.length < 24) {
    let random = 'O' + Math.floor((Math.random() * 15) + 61).toString();
    if (number.indexOf(random) == -1)
      number.push(random);
  }
  return number;
}