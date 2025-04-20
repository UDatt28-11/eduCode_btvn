// Input
const arrayString = ["JavaScript", "java", "Python", "Ruby"];
let keyWord = "ja";

function filterByKeyword(arrayString, keyWord) {
  // Logic bài toán và trả về kết quả
  return arrayString.reduce((acc, cur) => {
    if(cur.toLowerCase().includes(keyWord)){
        acc.push(cur)
    }
    return acc
  },[])
}
// Test
console.log(filterByKeyword(arrayString, keyWord))
; //["JavaScript", "java"]