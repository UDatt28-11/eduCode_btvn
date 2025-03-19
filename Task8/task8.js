const w = prompt("Vui lòng nhập cân nặng");
const h = prompt("Vui lòng nhập chiều cao");
function calcBmi(w,h){
    let BMI = w / h**2;
    BMI = BMI.toFixed(3);
    if(BMI < 18.5){
        console.log(`BMI = ${BMI}, Thiếu cân`);
    }else if(18.5 <= BMI && BMI < 22){
        console.log(`BMI = ${BMI}, Bình thường`);
    }else if(23 <= BMI && BMI < 25){
        console.log(`BMI = ${BMI}, Thừa cân`);
    }else{
        console.log(`BMI = ${BMI}, Béo phì`);
    }
}
calcBmi(w,h)