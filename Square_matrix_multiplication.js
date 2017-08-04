function matrixMultiplication(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    let middle = [];
    for (let j = 0; j < b[0].length; j++) {
      let d = 0;
      for (let k = 0; k < b.length; k++)
        d += a[i][k] * b[k][j];
      middle.push(d);
    }
    c.push(middle);
  }
  return c;
}