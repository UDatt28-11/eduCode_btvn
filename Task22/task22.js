const arrayNumber = [null, NaN];

function checkSymmetricalArr(arr) {
  // Kiểm tra dữ liệu đầu vào có phải là một mảng không
  if (!Array.isArray(arr)) {
    return "Dữ liệu không hợp lệ";
  }

  // Kiểm tra nếu mảng chỉ có 1 phần tử
  if (arr.length === 1) {
    return "Mảng có 1 phần tử, không thể kiểm tra được";
  }

  // Kiểm tra mảng đối xứng
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const result = checkSymmetricalArr(arrayNumber);
console.log(result);
