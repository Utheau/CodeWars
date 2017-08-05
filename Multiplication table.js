function multiplicationTable(row, col) {
  let result = [];
  for (let i = 0; i < row; i++) {
    result.push([]);
    for (let j = 0; j < col; j++) {
      result[i].push((i + 1) * (j + 1));
    }
  }
  return result;
}