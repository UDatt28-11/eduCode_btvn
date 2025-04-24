const item = document.getElementsByClassName("item");
const list = document.getElementById("list");
// console.log(item);

function addItem() {
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.textContent = `Phần tử ${item.length + 1}`;
  list.appendChild(newItem);
}

function removeItem() {
  if (item.length > 0) {
    list.removeChild(item[item.length - 1]);
    console.log(item);
  } else {
    alert("Không còn gì để xóa");
  }
}
