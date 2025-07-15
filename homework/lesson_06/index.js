// Câu 1: Tính diện tích và chu vi hình chữ nhật
let length = 10;
let width = 5;
let area = length * width; // Diện tích = chiều dài * chiều rộng
let perimeter = 2 * (length + width); // Chu vi = 2 * (chiều dài + chiều rộng)
console.log("Câu 1: Diện tích =", area, ", Chu vi =", perimeter);

// Câu 2: Chuyển đổi số giây sang giờ-phút-giây
let S = 12345;
let gio = Math.floor(S / 3600);
let phut = Math.floor((S % 3600) / 60);
let giay = S % 60;
console.log(`Câu 2: ${gio}h ${phut}m ${giay}s`);

// Câu 3: Tính lũy thừa
let coSo = 5;
let luyThua = 2;
let ketQua = Math.pow(coSo, luyThua); // hoặc dùng coSo ** luyThua
console.log("Câu 3:", `${coSo}^${luyThua} = ${ketQua}`);

// Câu 4: Tính trung bình 3 số
let a = 7, b = 9, c = 13;
let average = (a + b + c) / 3;
console.log("Câu 4: Average =", average);

// Câu 5: Tính khoảng cách giữa 2 điểm trong 2D
let x1 = 1, y1 = 2, x2 = 6, y2 = 5;
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log("Câu 5: Distance =", distance);

// Câu 6: Kiểm tra số đầu tiên có phải lớn nhất
let num1 = 10, num2 = 5, num3 = 8;
let isMaxFirst = num1 > num2 && num1 > num3;
console.log("Câu 6:", isMaxFirst);

// Câu 7: So sánh hai chuỗi (phân biệt kiểu dữ liệu)
let str1 = "Tôi là ai?";
let str2 = "Tôi là ai?";
let result = str1 === str2; // So sánh cả giá trị và kiểu
console.log("Câu 7:", result);

// Câu 8: Kiểm tra số dương
let inputNum = 5;
let isPositive = inputNum > 0;
console.log("Câu 8:", inputNum, isPositive);

// Câu 9: Kiểm tra năm nhuận
let year = 2024;
let isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
console.log("Câu 9:", year, isLeapYear);

// Câu 10: So sánh 2 thời gian (giờ và phút)
let h1 = 23, m1 = 30;
let h2 = 19, m2 = 50;
let isLater = h1 > h2 || (h1 === h2 && m1 > m2);
console.log(`Câu 10: ${h1}h:${m1}m ${isLater ? '>' : '<='} ${h2}h:${m2}m →`, isLater);

let inputNumber = prompt("Nhập một số nguyên dương:");
inputNumber = Number(inputNumber); // Chuyển đổi chuỗi nhập vào thành số
inputNumber = isNaN(inputNumber) ? 0 : inputNumber; // Kiểm tra nếu không phải là số thì gán 0
console.log("Số bạn đã nhập là:", inputNumber);