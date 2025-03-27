// In ra các số nguyên tố từ 2 đến n. Sử dụng hàm printPrimeNumber(n) để thực hiện điều đó.
function printPrimeNumber(n) {
   for(let i = 2; i <= n; i++){
   let checkSNT = true;
   for(let j = 2; j < i; j++){
    if(i % j == 0){
        checkSNT = false;
    }
    }
    if(checkSNT){
        console.log(i);
  }
}
}
  printPrimeNumber(10); // 2 3 5 7