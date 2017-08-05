function strongEnough(earthquake, age) {
  earthquake = earthquake.reduce((s, v) => s * v.reduce((x, s) => x + s, 0), 1);
  let potenza = 1000 * Math.pow(.99, age);
  return potenza > earthquake ? 'Safe!' : 'Needs Reinforcement!';
}