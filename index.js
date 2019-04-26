let num1 = 45;
let num2 = 8;

num1 = 99;
console.log("+:", num1 + num2);
console.log("-:", num1 - num2);
console.log("*:", num1 * num2);
console.log("/:", num1 / num2);

let str1 = "Hello ";
let str2 = "World";
console.log("+:", str1 + str2);

console.log("1 + 2:", 1 + "2");
console.log("str1 + num1:", str1 + num1);
console.log("True + 1:", true + 1);
console.log("false + 1:", false + 1);

console.log("5 % 2:", 5 % 2);
console.log("8 % 3:", 8 % 3);
console.log("15 % 5:", 15 % 5);

let i = 1;
// i = 1 + 9;
i += 9;
i++; // увеличить на 1
// i--; уменьшить на 1
console.log("i", i);
console.log("i", i++); // постфиксная запись, сначала выводится результат, а потом происходит сложенеи
console.log("i", ++i); //префиксная: сначала сложение, потом результат
