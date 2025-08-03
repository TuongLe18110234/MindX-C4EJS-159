console.log('Lesson 12 - DOM, Events');

let mainTitle = document.getElementById('main-title'); // Get the element with id 'main-title'
console.log(mainTitle);
let secondary = document.getElementsByClassName("secondary"); // Get all elements with class 'secondary'
console.log(secondary);
const paragraphs = document.getElementsByTagName('p'); // Get all <p> elements
console.log(paragraphs);
const firstDivParent = document.querySelector('p.secondary');
console.log(firstDivParent);
const flexItems = document.querySelectorAll('p.secondary');
console.log(flexItems);

// Thao tác với DOM
// Văn bản - tức các dạng văn bản chữ bình thường: element.innerText
// Nội dung HTML - tức các thẻ lồng bên trong thẻ: element.innerHTML

const p = document.querySelector('p.text');
console.log(p.innerText); // Lấy văn bản bên trong thẻ <p>
console.log(p.innerHTML); // Lấy nội dung HTML bên trong thẻ <p>

// Thay đổi với innerText
p.innerText = 'Hello MindX, This is lesson 12 - Changed Text';

// Thay đổi với innerHTML
p.innerHTML = '<a href="https://mindx.edu.vn">Hello MindX, This is lesson 12 - Changed HTML</a>';


// Thuộc tính thẻ
// p.className = 'text-secondary'; // Thay đổi class của thẻ
p.classList.add('text-secondary'); // Thêm class mới vào thẻ

// Thay đổi css:
let textOnly =  document.getElementById('text-only');
console.log(textOnly);
textOnly.style.color = 'red'; // Thay đổi màu chữ
textOnly.style.fontSize = '30px'; // Thay đổi kích thước chữ
textOnly.style.backgroundColor = 'yellow'; // Thay đổi màu nền
textOnly.style.fontWeight = 'bold'; // Thay đổi độ đậm của chữ

// Events
let sayHelloBtn = document.getElementById('say-hello-btn');
// Truy cập sự kiện
sayHelloBtn.onclick = function() {
    console.log('Say Hello button clicked!');
}

sayHelloBtn.onclick = function() {
    let productList = document.getElementById('product-list');
    let newProduct = document.createElement('li'); // Tạo một thẻ <li
    newProduct.innerText = 'Sản phẩm mới'; // Thêm văn bản vào thẻ <li>
    productList.appendChild(newProduct); // Thêm thẻ <li> vào danh sách
    console.log('Sản phẩm mới đã được thêm vào danh sách');
}

// Lắng nghe sự kiện
sayHelloBtn.addEventListener('click', function() {
    console.log('Button clicked!');
    alert('Hello MindX! This is a listener.');
});

// Lắng nghe sự kiện
sayHelloBtn.addEventListener('click', function() {
    console.log('Button clicked! This is a second listener.');
});

// Đối tượng Window (Giới thiệu thêm)
console.log(window.innerWidth); // Lấy chiều rộng của cửa sổ trình duyệt
console.log(window.innerHeight); // Lấy chiều cao của cửa sổ trình duyệt
console.log(window.location.href); // Lấy URL hiện tại của trang web

// Một số phương thức của đối tượng Window
// alert('Hello MindX!'); // Hiển thị hộp thoại cảnh báo
// window.alert('Hello MindX! This is an alert box.'); // Hiển thị hộp thoại cảnh báo
// prompt('Please enter your name:'); // Hiển thị hộp thoại nhập liệu

window.setTimeout(function() {
    console.log('This is a delayed alert after 3 seconds!');
}, 3000)

window.setTimeout(function() {
    console.log('This is a delayed alert after 5 seconds!');
}, 5000)

let i = 0;
window.setInterval(function() {
    console.log('This is a delayed alert after 2 seconds!', i);
    i++;

    if (i === 5) {
        console.log('Stopping the interval after 5 iterations.');
        clearInterval(this); // Dừng interval sau 5 lần lặp
        // clearTimeout(this); // Dừng timeout nếu cần
    }
}, 2000);

window.onload = function() {
    console.log('Window has loaded completely!');
    // Thực hiện các thao tác sau khi trang đã tải xong
    let mainTitle = document.getElementById('main-title');
    mainTitle.style.color = 'green'; // Thay đổi màu chữ của tiêu đề chính
}

window.onresize = function() {
    console.log('Window has been resized!');
    // Thực hiện các thao tác khi cửa sổ trình duyệt được thay đổi kích thước
    let mainTitle = document.getElementById('main-title');
    mainTitle.style.fontSize = '30px'; // Thay đổi kích thước chữ của tiêu đề chính khi cửa sổ được thay đổi kích thước
}

window.onscroll = function() {
  console.log("Page scrolled!");
};


// localStorage.setItem("lastname", "Smith");