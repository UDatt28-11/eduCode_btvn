
function swapNumber(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a,b];
  }
  
 console.log(swapNumber(3,5))