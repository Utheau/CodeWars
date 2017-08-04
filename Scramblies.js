function scramble(str1, str2) {
  let arr = str1.split("").sort();
  let arr2 = str2.split("").sort();
  let y = 0;
  for (var x = 0; y < arr2.length && x <= arr.length; x++) {
    if (arr2[y] === arr[x]) {
      y++;
    }
  }
  return (x <= arr.length);
}