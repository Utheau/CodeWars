function separateLiquids(glass) {
  let importanza = {
    "O": 1,
    "A": 2,
    "W": 3,
    "H": 4
  };
  nuovoG = [];
  if (glass.length === 0) return [];
  let sorted = glass.toString().split(",").sort(function (a, b) {
    return (importanza[a] - importanza[b]);
  });
  for (let i = 0; i < sorted.length; i += glass[0].length)
    nuovoG.push(sorted.slice(i, i + glass[0].length));
  return nuovoG;
}