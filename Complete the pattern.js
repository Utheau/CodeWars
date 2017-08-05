function pattern(n) {
  let str = "";
  if (n < 1) {
    return str;
  } else {
    for (let j = n; j > 0; j--) {
      for (let i = n; i > (n - j); i--) {
        str = str.concat(i.toString());
      }
      str = str.concat("\n");
    }
    str = str.slice(0, -1);
    return str;
  }
}