
// Viết hàm in ra các số chính phương từ 2 đến n
// Thực hiện viết hàm printSquareNumber(n) để in ra các số chính phương từ 2 đến n.

// Input:
function printSquareNumber(n) {
  // Xử lý và in ra kết quả
  for(let i = 2;i * i <= n ; i++ ){
    console.log(i*i);
  }
}

// Output:
printSquareNumber(10); // 4 9
printSquareNumber(20); // 4 9 16
