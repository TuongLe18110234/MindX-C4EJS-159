// Array method

let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names);

// Hàm push
names.push('MindX');
console.log(names);

// map()
// array.map(function(currentValue, index, array) {
//   // code...
// });
let arr = [1, 2, 3];
let newArray = arr.map((item, index, array) => {
    console.log(item, index, array);
    return item * 2;
})
console.log('newArray', newArray);
console.log(arr);

arr.forEach(currentValue => {
    console.log(currentValue);
})

// let newForArr = [];
// for (i = 0; i < arr.length; i++) {
//     newForArr.push(arr[i] * 2);
// }
// console.log(newForArr);

let students = names.map((studentName, number) => {
    return {
        name: studentName,
        no: number
    }
})
console.log('students', students);


newArray = arr.map(value => {
    return value;
});
console.log('newArray', newArray);


// filter()
// array.filter(function(currentValue, index, array) {
//   // code...
// });
let numbers = [1, 2, 3, 4, 5];

let eventNumbers = numbers.filter(number => {
    return number % 2 == 0;
})
console.log('eventNumbers', eventNumbers);


// find()
numbers = [5, 12, 8, 130, 44];
let found = numbers.find(cunrentValue => {
    return cunrentValue > 10; 
})
console.log('found', found);

found = numbers.filter(curentValue => curentValue > 10);
console.log('found', found);


// Find Index
let findIndex = numbers.findIndex(curentValue => curentValue > 10);
console.log('findIndex', findIndex, numbers[findIndex]);


// splice()
// Xóa phần từ trong mảng
// Thêm, xóa, thay thế phần tử trong mảng
// Thay đổi trực tiếp mảng gốc
// array.splice(startIndex, deleteCount, item1, item2, ...);

numbers = [1, 2, 3, 4, 5];

// Xóa phần tử
numbers.splice(1, 2); // Xóa từ vị trí số 1, xóa 2 phần tử [1, 4, 5]
console.log('numbers', numbers);

// Thêm phần tử
numbers.splice(1, 0, 2, 3); // Thêm lại thành mảng ban đầu
console.log('numbers', numbers);

// Thay thế - Phần tử 3 thành 8
numbers.splice(2, 1);
console.log('numbers', numbers);

numbers.splice(2, 0, 8);
console.log('numbers', numbers);

numbers.splice(2, 1, 8);
console.log('numbers', numbers);

numbers.splice(8, 2);
console.log('numbers', numbers);



// Object method
// Object.keys()
let obj = { key_a: 1, key_b: 2, key_c: 3 }; // key - value
console.log(Object.keys(obj));
Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
})

// Object.values()
console.log(Object.values(obj));

// Object.assign()
let obj1 = { a: 1 };
let obj2 = { b: 2 };

obj = Object.assign({}, obj1, obj2);
console.log('obj', obj);


//Spread operator ...

let obj3 = {...obj1, ...obj2, c: 3};
console.log('obj3', obj3);


let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2, 2, 5, 6];
console.log('arr3', arr3);