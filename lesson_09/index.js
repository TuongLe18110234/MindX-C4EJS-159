console.log('Lesson 9: Object');

let arrayPerson = ["John", 30, "Developer"];
console.log("Age: ", arrayPerson[1])

// Object {key: value, key: value, ...}
const person = {
    name: "John",
    age: 30,
    job: "Developer",
    parrents: {
        father: "Doe",
        mother: "Jane"
    },
    hobbies: ["reading", "gaming", "coding"]
}

console.log(typeof person); // object
console.log(person);

// Lấy giá trị của các thuộc tính trong object
console.log("Age: ", person["age"]); // 30
console.log("Age: ", person.age); // 30
console.log("Hobbies: ", person.hobbies); // ["reading", "gaming", "coding"]

// Lấy giá trị với destructuring
const {name, parrents} = person;
console.log("Name: ", name); // John
console.log("Parrents: ", parrents); // {father: "Doe", mother: "Jane"}


person.name = "Tran Minh Quang";
person.height = 1.68; // Thêm thuộc tính mới
console.log(person);

// Phần tử không tôn tại sẽ trả về undefined
console.log(person?.class ? "Class exists" : "Class does not exist"); // Class does not exist


// Xóa key trong object
person.age = undefined; // Đặt giá trị là undefined
delete person.age; // Xóa key
console.log(person);

// const person2 = {} // Địa chỉ của bộ nhớ
// person2 = { name: "New House" }; // Lỗi: Assignment to constant variable, không thể gán lại giá trị cho biến đã khai báo là const



// Duyệt object
const product = {
    "id": "66970e17d21b5d446c4434aa",
    "index_id": "66970e17d21b5d446c4434aa-e1cf0931-ayqSRvEgj3",
    "title": "Quần Shorts Daily Casual",
    "seo_alias": "quan-shorts-daily-casual",
    "quantity": 1,
    "giveaway_all": false,
    "images": {
      "id": "e7a4b51f",
      "src": "/image/June2025/quan-short-daily-casual-1-8-navy_56.jpg"
    },
    "collections": [
      "643e4a2b1c88ae681353e0e0",
      "60768dbd25430321167da164",
      "5c6d1590000c6932aa41baf3",
      "61124b791ca40a2bae28de43",
      "619b39719b90f2023140f512",
      "642a844f08f3e5267d7e978f",
      "66bf25458d18064b5b453aa4",
      "64e421c3c0de366fae637b81",
      "66f3e06ee60d5613f360d608",
      "6740053c247aed176734bd3b",
      "6740229474050316951c83d4",
      "67cabfc309193a4a734ed5ca",
      "67e24040aa8167278930d133",
      "68674d6cfe2db13c66203857"
    ],
    "pricing_apply": true,
    "variants": {
      "_id": "66970e185f00755da40a3be1",
      "id": "e1cf0931",
      "title": "Xanh Navy / L",
      "regular_price": 233000,
      "compare_price": 399000,
      "product_title": "Quần Shorts Daily Casual",
      "product_id": "66970e17d21b5d446c4434aa",
      "sync_product": [
        {
          "label": "24CMCW.QS001.NVY.L_Quần Shorts Daily Casual - Navy - L",
          "value": "1000009027",
          "nhanh_id": "1000009027",
          "item_name": "Quần Shorts Daily Casual - Navy - L",
          "item_category2": "",
          "item_category": "Shorts"
        }
      ]
    }
}

// key là tên của thuộc tính trong object
console.log('Keys: ', Object.keys(product)); // Lấy tất cả các key trong object
for (let key in product) {
    console.log('key: ', key); // key: id, key: index_id, ...
    console.log('value: ', product[key]); // value: 66970e17d21b5d446c4434aa, value: 66970e17d21b5d446c4434aa-e1cf0931-ayqSRvEgj3, ...
}


// Kết hợp Object với Array
const techProducts = [
  {
    name: "Laptop Dell XPS 13",
    price: 1500,
    description: "Laptop mỏng nhẹ với màn hình 13.4 inch, vi xử lý Intel Core i7 thế hệ 11 và ổ cứng SSD 512GB.",
    quantity: 10
  },
  {
    name: "Apple iPhone 13 Pro",
    price: 1200,
    description: "Điện thoại iPhone 13 Pro với màn hình Super Retina XDR 6.1 inch, chip A15 Bionic và hệ thống camera ba ống kính.",
    quantity: 25
  },
  {
    name: "Tai nghe Sony WH-1000XM4",
    price: 350,
    description: "Tai nghe chống ồn chủ động cao cấp từ Sony, với thời lượng pin lên đến 30 giờ và khả năng kết nối không dây Bluetooth.",
    quantity: 15
  },
  {
    name: "Apple Watch Series 7",
    price: 500,
    description: "Đồng hồ thông minh với màn hình lớn hơn, chống nước và theo dõi sức khỏe toàn diện.",
    quantity: 30
  },
  {
    name: "Máy tính bảng Samsung Galaxy Tab S7",
    price: 700,
    description: "Máy tính bảng với màn hình 11 inch, hỗ trợ bút S Pen, chạy hệ điều hành Android 11.",
    quantity: 20
  },
  {
    name: "Loa thông minh Google Nest Audio",
    price: 100,
    description: "Loa thông minh tích hợp trợ lý ảo Google Assistant, âm thanh sống động và kết nối với hệ thống nhà thông minh.",
    quantity: 50
  },
  {
    name: "Camera GoPro HERO9",
    price: 450,
    description: "Camera hành trình GoPro HERO9 với khả năng quay video 5K, chống nước và ổn định hình ảnh mạnh mẽ.",
    quantity: 12
  },
  {
    name: "Bàn phím cơ Keychron K2",
    price: 80,
    description: "Bàn phím cơ không dây với layout 75%, hỗ trợ kết nối đa thiết bị và các phím chuyển đổi Mac/Windows.",
    quantity: 40
  }
];

console.log(techProducts);

for (let i = 0; i < techProducts.length; i++) {
    console.log(`Sản phẩm ${i + 1}:`, techProducts[i].name);
}

// forEach là một phương thức của mảng, nó sẽ lặp qua từng phần tử trong mảng và thực hiện một hàm callback cho mỗi phần tử.
techProducts.forEach((techProduct, index) => {
    console.log(`Sản phẩm ${index + 1}:`, techProduct.name);
})

Object.keys(person).forEach(key => {
    console.log(`Key: ${key}`);
})