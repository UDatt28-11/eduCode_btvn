const item = document.getElementsByClassName("item");
const list = document.getElementById("list");
// console.log(item);
function addItem() {
  const newItem = document.createElement("div"); // tạo một phần tử div mới
  newItem.classList.add("item"); // thêm class item cho phần tử mới
  newItem.textContent = `Phần tử ${item.length + 1}`; // thêm nội dung cho phần tử mới
  list.appendChild(newItem); // thêm phần tử mới vào danh sách
}

function removeItem() {
  if (item.length > 0) {
    list.removeChild(item[item.length - 1]);
    console.log(item);
  } else {
    alert("Không còn gì để xóa");
  }
}
