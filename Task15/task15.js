//Kiểm tra số cùng dấu
// Cho trước 2 số a, b. Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình.

function isSameSign(a, b) {
   // Vì a nhân với b mà dương thì sẽ lớn hơn 0
    if(a * b > 0){
        console.log(true);
    }
    // Vì a nhân với b mà âm thì sẽ nhỏ hơn 0
    if(a * b < 0){
        console.log(false);
     }
}
  

  isSameSign(10, 20); // true
  isSameSign(-10, -20); // true
  isSameSign(10, -20); // false