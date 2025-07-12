// 1. Biến
// Khai báo biến và gán giá trị: let / var / const
// Comment Control + /

// console.log(name, age, PI);
// var name = "John"; // Biến có thể thay đổi
// let age = 30; // Biến có thể thay đổi
const PI = 3.14; // Biến không thể thay đổi

let x = 10;
let y = 50;

x = 18;
y = 56;
// PI = 3.14159; // Không thể thay đổi giá trị của PI vì nó được khai báo với const
console.log(x, y, PI);


// 2. Kiểu dữ liệu
// Kiểu dữ liệu cơ bản: Number, String, Boolean, Null, Undefined, Symbol
let name = 'John'; // Kiểu String, Chuỗi ký tự, ví dụ: 'Hello world!'
console.log('name', typeof name); // Kiểu dữ liệu của biến name

let age = 30; // Kiểu Number, Số (bao gồm cả số nguyên và số thực), ví dụ: 5 10 3.14
console.log('age', typeof age); // Kiểu dữ liệu của biến age

let isStudent = true; // Kiểu Boolean, Chỉ có hai giá trị: true hoặc false
console.log('isStudent', typeof isStudent); // Kiểu dữ liệu của biến isStudent

let address = null; // Kiểu Null, Biến không có giá trị hiện tại
console.log('address', typeof address); // Kiểu dữ liệu của biến address

let undefinedValue; // Kiểu Undefined, Biến chưa được gán giá trị
console.log('undefinedValue', typeof undefinedValue); // Kiểu dữ liệu của biến undefinedValue

let uniqueSymbol = Symbol('unique'); // Kiểu Symbol, Biến duy nhất và không thể thay đổi
console.log('uniqueSymbol', typeof uniqueSymbol); // Kiểu dữ liệu của biến uniqueSymbol


// 3. Toán tử toán học
// Toán tử cộng (+), trừ (-), nhân (*), chia (/), chia lấy phần dư (%)
let a = 10;
let b = 6;

let result = a + b; // Cộng
console.log('result of addition:', result);

result = a - b; // Trừ
console.log('result of subtraction:', result);

result = a * b; // Nhân
console.log('result of multiplication:', result);

result = a / b; // Chia
console.log('result of division:', result);

result = a % b; // Chia lấy phần dư
console.log('result of modulus:', result);

a += b; // Tương đương với a = a + b
console.log('result of a += b:', a); // Tương đương với a = a + b

a -= b; // Tương đương với a = a - b
console.log('result of a -= b:', a); // Tương đương với a = a - b

// *=, /=, %= // Tương tự như trên


// 4. Nối chuỗi
// Toán tử nối chuỗi (+)
let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + ' ' + lastName; // Nối chuỗi
console.log('Full Name:', fullName);

// literal template
fullName = `${firstName} ${lastName}, I'm ${age} years old`; // Sử dụng template literal
console.log('Full Name with template literal:', fullName);


// 5. Toán tử so sánh
// Toán tử so sánh: ==, ===, !=, !==, >, <, >=, <=
let num1 = 10;
let num2 = '104';
let num3 = 10;

console.log('num1 == num2:', num1 == num2); // So sánh giá trị (chuyển đổi kiểu nếu cần)
console.log('num1 === num2:', num1 === num2); // So sánh giá trị và kiểu (không chuyển đổi kiểu)
console.log('num1 === num3:', num1 === num3); // So sánh giá trị và kiểu (không chuyển đổi kiểu)

console.log('num1 != num2:', num1 != num2); // So sánh giá trị (chuyển đổi kiểu nếu cần)
console.log('num1 !== num2:', num1 !== num2); // So sánh giá trị và kiểu (không chuyển đổi kiểu)
console.log('num1 !== num3:', num1 !== num3); // So sánh giá trị và kiểu (không chuyển đổi kiểu

console.log('num1 > num2:', num1 > num2); // So sánh lớn hơn
console.log('num1 < num2:', num1 < num2); // So sánh nhỏ hơn
console.log('num1 >= num2:', num1 >= num2); // So sánh lớn hơn hoặc bằng
console.log('num1 <= num2:', num1 <= num2); // So sánh nhỏ hơn hoặc bằng


// 6. Toán tử logic
// Toán tử logic: && (AND), || (OR), ! (NOT)
let condition1 = true;
let condition2 = false;

console.log('condition1 && condition2:', condition1 && condition2 && 3 > 4); // AND: true nếu cả hai đều true
console.log('condition1 || condition2:', condition1 || condition2); // OR: true nếu ít nhất một trong hai là true
console.log('!condition1:', !condition1); // NOT: đảo ngược giá trị của điều kiện