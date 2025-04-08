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

function removeDuplicate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const result = removeDuplicate(fruits);
console.log(result);