function houseOfCards(floors) {
  if (typeof floors != 'number' || floors < 1 || parseInt(floors) != floors)
    throw new Error("Error");
  let a = 2
  let b = 1
  let t = 0;
  for (let i = 1; i <= floors; i++)
    t += i;
  return b * t + a * (t + floors + 1)
}