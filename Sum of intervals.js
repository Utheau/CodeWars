function sumIntervals(firstInterval) {
  let num = [];
  firstInterval.forEach(function (secondInterval) {
    for (let i = secondInterval[0]; i < secondInterval[1]; i++) {
      if (num.indexOf(i) == -1) num.push(i);
    }
  });
  return num.length;
}