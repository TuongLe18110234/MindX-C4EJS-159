// 1.  If else
let isRanning = false;
let isSunny = false;

if (isRanning) {
    console.log("Hôm nay trời mưa, ở nhà thôi");
} else if (isSunny) {
    console.log("Nắng quá, ở nhà thôi");
} else {
    console.log("Hôm nay trời nắng, đi chơi thôi");
}

if (!isRanning && isSunny) {
    console.log("Nắng quá, ở nhà thôi");
} else if (!isRanning && !isSunny) {
    console.log("Hôm nay trời nắng, đi chơi thôi");
} else {
    console.log("Hôm nay trời mưa, ở nhà thôi");
}

let number = 0;
if (number == 0) {
    console.log("Số 0");
} else if (number % 2 == 0) {
    console.log("Số chẵn");
} else {
    console.log("Số lẻ");
}

// 2. Switch case
let day = 1;
switch (day) {
    case 0:
        console.log("Hôm nay là chủ nhật");
        break;
    case 1:
        console.log("Hôm nay là thứ hai");
        break;
    case 2:
        console.log("Hôm nay là thứ ba");
        break;
    case 3:
        console.log("Hôm nay là thứ tư");
        break;
    case 4:
        console.log("Hôm nay là thứ năm");
        break;
    case 5:
        console.log("Hôm nay là thứ sáu");
        break;
    case 6:
        console.log("Hôm nay là thứ bảy");
        break;
    default:
        console.log("Không phải ngày trong tuần");
        break;
}

// 3.  Toán tử ba ngôi
let age = 10;
const result = age >= 18 ? "Đủ tuổi lái xe" : "Chưa đủ tuổi lái xe";
console.log(result);

const err = age < 18 ? "Chưa đủ tuổi đăng ký tài khoản" : "Đủ tuổi đăng ký tài khoản";
console.log(err);

if (age < 18) {
    console.log("Chưa đủ tuổi đăng ký tài khoản");
} else {
    console.log("Đủ tuổi đăng ký tài khoản");
}

// 4. Vòng lặp for
// i++ = i = i + 1
for (let i = 0; i < 10; i++) {
    console.log("Anh yêu em " + i + " lần");
}

/*
    i = 0; 0 < 10 => true, In "Anh yêu em 0 lần", i = 1
    i = 1; 1 < 10 => true, In "Anh yêu em 1 lần", i = 2
    i = 2; 2 < 10 => true, In "Anh yêu em 2 lần", i = 3
    i = 3; 3 < 10 => true, In "Anh yêu em 3 lần", i = 4
    i = 4; 4 < 10 => true, In "Anh yêu em 4 lần", i = 5
    i = 5; 5 < 10 => true, In "Anh yêu em 5 lần", i = 6
    i = 6; 6 < 10 => true, In "Anh yêu em 6 lần", i = 7
    i = 7; 7 < 10 => true, In "Anh yêu em 7 lần", i = 8
    i = 8; 8 < 10 => true, In "Anh yêu em 8 lần", i = 9
    i = 9; 9 < 10 => true, In "Anh yêu em 9 lần", i = 10
    i = 10; 10 < 10 => false, Dừng vòng lặp
*/


for (let i = 10; i > 0; i = i = i - 3) {
    console.log("Anh yêu em " + i + " lần");
}

/*
    Điều kiện dừng vòng lặp là i != 0
    i = 10; 10 != 0 => true, In "Anh yêu em 10 lần", i = 7
    i = 7; 7 != 0 => true, In "Anh yêu em 7 lần", i = 4
    i = 4; 4 != 0 => true, In "Anh yêu em 4 lần", i = 1
    i = 1; 1 != 0 => true, In "Anh yêu em 1 lần", i = -2
    -5, -8, -11, -14, -17, -20, -23, -26, -29, -32, -35, -38, -41, -44, -47, -50,.....
*/

// 5. break và continue
// 5.1. break


for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Dừng vòng lặp tại i = " + i);
        break; // Dừng vòng lặp khi i = 5
    }
    console.log("i = " + i);
}

// 1, 5, 7, 9, 11, 13, 2, 4, 5, 6

// 5.2. continue
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log("Bỏ qua vòng lặp tại i = " + i);
        continue; // Bỏ qua vòng lặp khi i = 5
    }
    console.log("i = " + i);
}