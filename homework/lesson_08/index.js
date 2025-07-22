console.log("Lessson 8");

// Tìm Số Lớn Nhất Trong Mảng:
// const numbers = [5, 2, 9, 3, 7, 11, 8];
// result: 11

const numbers = [5, 2, 9, 3, 7, 11, 8];
let maxNumber = numbers[0]; // Giả sử số đầu tiên là lớn nhất

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log("Số lớn nhất trong mảng là:", maxNumber);

// namxber: numbers[0] = 5,
// for: i = 1, 2, 3, 4, 5, 6
// maxNumber: 11
// i = 1: 2 < 5 => maxNumber = 5
// i = 2: 9 > 5 => maxNumber = 9
// i = 3: 3 < 9 => maxNumber = 9
// i = 4: 7 < 9 => maxNumber = 9
// i = 5: 11 > 9 => maxNumber = 11
// i = 6: 8 < 11 => maxNumber = 11

const array = [1, 2, 3, 4, 5];
// Đảo ngược mảng
const reversedArray = [];
for (let i = array.length - 1; i > 0; i--) {
    reversedArray.push(array[i]);
}
console.log("Mảng đảo ngược:", reversedArray);


const duplicatesArray = [1, 2, 2, 3, 4, 4, 5, 2, 3, 4];
// Xóa các phần tử trùng lặp
const uniqueArray = [];
for (let i = 0; i < duplicatesArray.length; i++) {
    let isDuplicated = false;
    for (let j = 0; j < uniqueArray.length; j++) {
        if (duplicatesArray[i] === uniqueArray[j]) {
            isDuplicated = true;
            break;
        }
    }
    if (!isDuplicated) {
        uniqueArray.push(duplicatesArray[i]);
    }
}
console.log("Mảng không trùng lặp:", uniqueArray);