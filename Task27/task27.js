const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function groupBy(arr, key) {
  return arr.reduce((acc, cur) => {
    let result = cur[key];
    console.log(result);
    if (!acc[result]) {
      acc[result] = [];
      acc[result].push(cur);
    } else {
      acc[result].push(cur);
    }
    return acc;
  }, {});
}
console.log(groupBy(users, "age"));
console.log(groupBy(users, "address"));

// reduce là một phương thức trong js giúp ta tổng hợp
// các mảng thành một giá trị duy nhất thông qua một callback function
// và (acc, cur, index, array) là tham số mặc định của hàm reduce
// acc là giá trị tích lũy được trả về từ lần lặp trước đó
// cur là giá trị hiện tại trong lần lặp này
// index là chỉ số của giá trị hiện tại trong mảng
// array là mảng ban đầu mà reduce đang hoạt động trên

// callback function là một hàm được truyền như một đối số số cho một hàm khác
// và được gọi lại bên trong hàm đó
