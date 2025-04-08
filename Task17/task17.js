function taxSalary() {
  let salary = parseFloat(window.prompt("Thu Nhập Cá Nhân"));

  if (salary > 0 && salary <= 11000000) {
    console.log("Không tính thuế");
  } else if (salary > 11000000 && salary <= 25000000) {
    let tax = (salary - 11000000) * 0.05;
    console.log("5% thuế: " + tax + "đ");
  } else if (salary > 25000000 && salary <= 50000000) {
    let tax = (25000000 - 11000000) * 0.05 + (salary - 25000000) * 0.1;
    console.log("10% thuế: " + tax + "đ");
  } else if (salary > 50000000 && salary <= 80000000) {
    let tax =
      (25000000 - 11000000) * 0.05 +
      (50000000 - 25000000) * 0.1 +
      (salary - 50000000) * 0.2;
    console.log("20% thuế: " + tax + "đ");
  } else if (salary > 80000000) {
    let tax =
      (25000000 - 11000000) * 0.05 +
      (50000000 - 25000000) * 0.1 +
      (80000000 - 50000000) * 0.2 +
      (salary - 80000000) * 0.3;
    console.log("30% thuế: " + tax + "đ");
  } else {
    console.log("Thu nhập không hợp lệ");
  }
}

taxSalary();
