function faktorial(n) {
  if (n <= 1) return 1; // base case
  return n * faktorial(n - 1); // recursive case
}

console.log(faktorial(5)); // 120
