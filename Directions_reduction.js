function dirReduc(arr) {
  let index = 0;
  while (index < arr.length) {
    if ((arr[index] === "NORTH" && arr[index + 1] === "SOUTH") ||
      (arr[index] === "SOUTH" && arr[index + 1] === "NORTH") ||
      (arr[index] === "EAST" && arr[index + 1] === "WEST") ||
      (arr[index] === "WEST" && arr[index + 1] === "EAST")) {
      arr.splice(index, 2);
      index--;
    } else {
      index++;
    }
  }
  return arr;
}