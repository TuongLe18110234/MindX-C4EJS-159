console.log("Hello, World!");
console.log("This is lesson 10 of the Code For Everyone course.");

// Bài toán tính chu vi hình chữ nhật
const width = 10;
const height = 20;

const perimete = (width + height) * 2;
console.log(`Chu vi hình chữ nhật có chiều rộng ${width} và chiều cao ${height} là: ${perimete}`);

// Khai báo, gọi hàm
// function functionName() {
//     console.log("This is a function.");
// }
// functionName(); // Gọi hàm

function count0To100() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}
// count0To100();

function parameterReg() {
    const result = (width + height) * 2;
    console.log(`Chu vi hình chữ nhật có chiều rộng ${width} và chiều cao ${height} là: ${result}`);
}
parameterReg();


// Tham số hàm
// Khai báo hàm với tham số
// khai báo
// function functionName(parameterA, parameterB) {
//     // code...
// }

// // gọi hàm - thực thi các đoạn code logic bên trong khối lệnh của hàm đã được khai báo
// functionName(5, 10);

// Hàm tính chu vi hình chữ nhật với tham số
function caculatePerimeter(width, height) {
    const perimete = (width + height) * 2;
    console.log(`Chu vi hình chữ nhật có chiều rộng ${width} và chiều cao ${height} là: ${perimete}`);
    return perimete; // Trả về giá trị
}

caculatePerimeter(10, 20);
caculatePerimeter(5, 10);
caculatePerimeter(2, 4);
caculatePerimeter(width, height);


// Trả về giá trị
console.log("Trả về giá trị");
console.log(caculatePerimeter(width, height));

// function functionName(){
//     // code ...
//     return value; // value là giá trị muốn trả về
// }

function sum(a, b) {
    const result = a + b;
    // return {
    //     bienA: a,
    //     bienB: b,
    //     sum: result
    // }
    // return [a, b, result]; // Trả về mảng chứa các giá trị
    return result; // Trả về giá trị kết quả
}
const result = sum(5, 10); // Gọi hàm và lưu giá trị trả về vào biến result
console.log(result); // Gọi hàm và in ra kết quả


function buildStudent(name, age, height, weight) {
    return {
        name: name,
        age: age,
        height: height,
        weight: weight
    };
}

const student1 = buildStudent("Nguyen Van A", 20, 170, 60);
console.log(student1);


let name = "Nguyen Van A";
let age = 30;
let height_1 = 175;
let weight_1 = 70;
const student2 = buildStudent(name, age, height_1, weight_1);
// constt student2 = buildStudent("Nguyen Van A", 30, 175, 70);
console.log(student2);


// Arrow function
// const functionName = (argv1, agrv2) => {
//     console.log("This is an arrow function.");
//     // code
// }
// functionName(); // Gọi hàm

const laSoChan = number => number % 2 === 0;
console.log(laSoChan(1));
console.log(laSoChan(2));

const nhanHaiSo = (a, b) => a * b;
console.log(nhanHaiSo(2,4));

// Kiem ta số âm, dương
const isPositive = (num) => num > 0 ? 'Positive' : 'Non-positive';
console.log(isPositive(10));
console.log(isPositive(-1));


// Anonymous function
// khai báo hàm
// const newFunction = function() {
//     // code..
// }
// newFunction(); // gọi hàm


// Rest operator
// Tạo ra hàm có vô hạn tham số truyền vào
function sum(...args) {
    console.log(args);
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total = total + args[i];
    }
    return total;
}
console.log(sum([1,2,3,4,5], {a: 1}, 4));


function sum2(array) {
    console.log(array);
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}
console.log(sum2([1,2,3,4,5]));