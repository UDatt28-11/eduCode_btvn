function taxSalary() {
    // Xử lý và in ra kết quả
   let salary =  parseFloat(window.prompt("Thu Nhập Cá Nhân"));
    if(salary > 0 && salary <= 11000000){
        console.log("Không tính thuế");
    }else if(salary >= 11000000 && salary <= 25000000){
        console.log("5% thuế");
        
    }else if(salary >= 25000000 && salary <= 50000000){
        console.log("10% thuế");
    }else if(salary >= 50000000 && salary <= 80000000){
        console.log("20% thuế");
    }else if(salary >= 80000000){
        console.log("30% thuế");
    }else{
        console.log("Không hợp lệ");
    }
}
taxSalary()