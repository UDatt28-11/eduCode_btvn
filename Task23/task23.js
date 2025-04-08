const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];

function reverseArr(arr) {
  let arrReversed = [];

  for (let i = 0; i < arr.length; i++) {
    const reversedIndex = arr.length - 1 - i;
    const currentValue = arr[reversedIndex];

    if (
      currentValue !== null &&
      currentValue !== undefined &&
      !arrReversed.includes(currentValue) // kiểm tra trùng
    ) {
      arrReversed.push(currentValue);
    }
  }

  return arrReversed;
}

const result = reverseArr(arrNumber);
console.log(result);
