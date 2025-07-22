console.log("Hello, World!");

let student_1 = 'Nguyen Van A';
let student_2 = 'Nguyen Van B';
let student_3 = 'Nguyen Van C';
let student_4 = 'Nguyen Van D';
let student_5 = 'Nguyen Van E';

console.log(student_1);
console.log(student_2);
console.log(student_3);
console.log(student_4);
console.log(student_5);

// Using an array to store students
// This is a more efficient way to handle multiple students
// instead of creating separate variables for each student.
// Arrays allow us to store multiple values in a single variable.
// const|let variableName = [ ....  ]
let students = ['Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C', 'Nguyen Van D', 'Nguyen Van E'];
console.log(students);

let studentInformation = ['Nguyen Van A', 18, 'Ha Noi', true];
console.log(studentInformation);



// Làm việc với mảng
//Truy xuất phần tử
// arrayName[index]
console.log(students[3]); // Truy xuất phần tử thứ 3 trong mảng (chỉ số bắt đầu từ 0)

const arrayNumber = [0, 1, 2]
const [x, y, z] = arrayNumber; // Destructuring assignment
console.log(x, y, z); // 0 1 2


// Gán giá trị
studentInformation[3] = false; // Thay đổi giá trị của phần tử thứ 3
console.log(studentInformation);


// Kết hợp vòng lặp
console.log("Danh sách sinh viên:");
console.log("Độ dài mảng = Số lượng sinh viên:", students.length);

// lastIndex = arrayLength - 1
for(let i = 0; i < students.length; i++) {
    console.log("Sinh viên thứ", i + 1, "là:", students[i]);   
}


// Thêm phần tử vào mảng
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Thêm Mindx và phần tử thứ 3
names[5] = names[4] // Name i + 1 = Name i
console.log("Danh sách tên sau khi thêm phần tử thứ 3:", names);
names[4] = names[3];
console.log("Danh sách tên sau khi thêm phần tử thứ 4:", names);
names[3] = "MindX";
console.log("Danh sách tên sau khi thêm MindX:", names);

const newValue = "New Student"; // Giá trị mới muốn chèn vào mảng
const insertIndex = 2; // Vị trí muốn chèn
for (let i = names.length - 1; i >= insertIndex; i--) {
    names[i + 1] = names[i]; // Di chuyển các phần tử từ vị trí chèn trở đi
}
console.log(names);
names[insertIndex] = newValue; // Chèn giá trị mới vào vị trí mong muốn
console.log("Danh sách tên sau khi chèn giá trị mới:", names);

// Thêm phần tử vào cuối mảng
names[names.length] = "New Last Student"; // Thêm phần tử mới vào cuối mảng
console.log("Danh sách tên sau khi thêm phần tử mới vào cuối:", names);


// Hàm hỗ trơợ làm việc với mảng
// push() - Thêm phần tử vào cuối mảng
names.push("New Student at End");
console.log("Danh sách tên sau khi sử dụng push:", names);
// splice() - Thêm vào vị trí bất kỳ 
names.splice(2, 0, "Inserted Splice Student"); // Thêm "Inserted Student" vào vị trí thứ 2
console.log("Danh sách tên sau khi sử dụng splice:", names);
// unshift() - Thêm phần tử vào đầu mảng
names.unshift("New First Student"); // Thêm phần tử mới vào đầu mảng
console.log("Danh sách tên sau khi sử dụng unshift:", names);


// Bài toán xoá phần tử
const removeIndex = 2; // Vị trí muốn xoá
for(let i = removeIndex; i < names.length - 1; i++) {
    names[i] = names[i + 1]; // Di chuyển các phần tử từ vị trí xoá trở đi
}

names.length = names.length - 1; // Giảm độ dài mảng đi 1 để xoá phần tử cuối cùng
console.log("Danh sách tên sau khi xoá phần tử tại vị trí 2:", names);

// Hàm hỗ trợ xoá phần tử
// pop() - Xoá phần tử cuối cùng
names.pop();
console.log("Danh sách tên sau khi sử dụng pop:", names);
// splice() - Xoá phần tử tại vị trí bất kỳ
names.splice(1, 2); // Xoá phần tử tại vị trí thứ 1
console.log("Danh sách tên sau khi sử dụng splice để xoá:", names);
// shift() - Xoá phần tử đầu tiên
names.shift(); // Xoá phần tử đầu tiên
console.log("Danh sách tên sau khi sử dụng shift để xoá phần tử đầu tiên:", names);


// Tìm kiếm phần tử trong mảng
const searchName = "Charlie"; // Tên cần tìm
for (let i = 0; i < names.length; i++) {
    if (names[i] === searchName) {
        console.log("Tìm thấy tên:", searchName, "tại vị trí:", i);
        break; // Dừng vòng lặp khi tìm thấy
    }
}