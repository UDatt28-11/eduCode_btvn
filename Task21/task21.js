
function printIsoscelesTriangle(n, character) {
  const print = parseFloat(window.prompt("Nhập chiều cao của tam giác: "));
    const characterInput = window.prompt("Nhập ký tự để in ra tam giác: ");
    let result = "";
    for (let i = 1; i <= print; i++) {
        // In khoảng trắng
        for (let j = 1; j <= print - i; j++) {
            result += " ";
        }
        // In ký tự
        for (let k = 1; k <= 2 * i - 1; k++) {
            result += characterInput;
        }
        result += "\n";
    }
    console.log(result);
}
printIsoscelesTriangle();

