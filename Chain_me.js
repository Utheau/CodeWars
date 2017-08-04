function chain(input, fs) {
  let result = input;
  for (let i = 0; i < fs.length; i++)
    result = fs[i](result);
  return result;
}