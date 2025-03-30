function taxiBill() {
    let km = parseFloat(prompt("Nhập số km đã đi: "));
    if(km > 0 && km <= 1){
        console.log("so tiền cần trả là 10000đ");
    } else if( km > 1 && km <= 30){
        console.log("so tiền cần trả là " + ((km-1) * 8000 + 10000) + "đ" );   
    }else if( km > 30){
        console.log("so tiền cần trả là " + ((km-1) * 7000 + 10000) + "đ" );
  }else{
      console.log("Số km không hợp lệ");
  }
 
}
taxiBill();
//   taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
//   taxiBill(1); // Output: Số tiền cần trả: 10000đ
//   taxiBill(10); // Output: Số tiền cần trả: 82000đ
//   taxiBill(-5); // Output: Số km không hợp lệ
//   taxiBill("abc"); // Output: Số km không hợp lệ