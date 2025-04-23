const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];
let student = document.getElementById("dataTable");
let result = `<tr>
  <th>ID</th>
  <th>Tên</th>
  <th>Tuổi</th>
  <th>Thành Phố</th>
</tr>`;
students.forEach((item, index) => {
  result += `<tr>
  <td>${index + 1}</td>
  <td>${item.name}</td>
  <td>${item.age}</td>
  <td>${item.city}</td>
</tr>`;
});
student.innerHTML = result;
