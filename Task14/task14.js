

function findMaxNumber(a, b, c) {
   //Gán 1 giá trị bất kì cho max rồi dùng điều kiện 
 let max = a;
 if(b> max){
    max =b;
 }
 if(c> max){
    max=c;
 }
 if(max == a){
    console.log(a);
 }
 console.log(max);
 
  }
  
  
  findMaxNumber(3, 5, 2); 