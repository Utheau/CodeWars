function passed(list) {
  let ok = 0;
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < 19) {
      total += list[i];
      ok++
    };
  }
  if (ok === 0) {
    return 'No pass scores registered.'
  };
  return Math.round(total / ok);
}