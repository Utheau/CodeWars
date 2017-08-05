function isValidWalk(walk) {
  let southNorth = 0,
    westEast = 0;
  for (let dir of walk) {
    if (dir == 'n') southNorth += 1;
    if (dir == 's') southNorth -= 1;
    if (dir == 'w') westEast += 1;
    if (dir == 'e') westEast -= 1;
  }
  return walk.length == 10 && southNorth === 0 && westEast === 0;
}