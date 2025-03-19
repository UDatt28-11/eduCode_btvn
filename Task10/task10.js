// Input:
function sortNumber(a, b, c) {
    if(a > b){
        a = a + b; // a=5
        b = a - b; // b = 3
        a = a - b; // a=2
    }
    if(a > c){
        a = a + c; // a =3
        c = a - c; // c = 2
        a = a - c; // a = 1
    }
    if(b > c){
        b = b + c; // 5
        c = b - c; // 3
        b = b - c; // 2
    }
    
    return [a,b,c];
    // Xử lý và in ra kết quả
  }
  
  // Output:
console.log(sortNumber(3, 2, 1)); // 1 2 3
