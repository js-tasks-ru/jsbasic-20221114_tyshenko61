function factorial(n) {
  let result = 1;
  while (n) {
    result *= n;
    n--;
  }
  return result;
}
