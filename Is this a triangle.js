function isTriangle(a, b, c) {
  if (b + c <= a || a + c <= b || a + b <= c) {
    return false;
  } else {
    return true;
  }
}