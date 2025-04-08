function countElement(arr) {
    // Sử dụng reduce để tạo ra một object đếm số lần xuất hiện
    const frequencyMap = arr.reduce((accumulator, currentValue) => {
      // Kiểm tra xem phần tử hiện tại đã tồn tại trong accumulator chưa
      if (accumulator.hasOwnProperty(currentValue)) {
        // Nếu có rồi thì tăng giá trị đếm lên 1
        accumulator[currentValue] += 1;
      } else {
        // Nếu chưa có thì khởi tạo giá trị đếm là 1
        accumulator[currentValue] = 1;
      }
  
      // Trả về accumulator để tiếp tục vòng lặp reduce
      return accumulator;
    }, {}); // Khởi tạo accumulator là một object rỗng
  
    // Trả về kết quả cuối cùng
    return frequencyMap;
  }
  
  const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
  ];
  
  const result = countElement(fruits);
  
  console.log(result);
  // Output: { apple: 2, banana: 2, kiwi: 3, orange: 1 }