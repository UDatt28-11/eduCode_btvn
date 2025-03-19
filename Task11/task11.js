function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
  
  // Test cases:
  console.log(isTriangle(3, 4, 5)); // true
  console.log(isTriangle(3, 4, 7)); // false