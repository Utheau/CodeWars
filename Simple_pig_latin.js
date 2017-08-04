function pigIt(str) {
  let check = "";
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (i == start) {
      i += 1;
    }
    if (str[i] != ' ') {
      check += str[i];
    } else {
      check += str[start] + 'ay ';
      start = i + 1;
    }
  }
  check += str[start] + 'ay ';
  return check.trim();
}