function notVisibleCubes(n) {
  if (n < 3) {
    return 0;
  } else {
    return (n - 2) * (n - 2) * (n - 2);
  }
}