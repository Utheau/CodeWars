function stringy(size) {
  let str = '';
  for (let i = 1; i <= size; i++)
    str += i % 2;
  return str;
}