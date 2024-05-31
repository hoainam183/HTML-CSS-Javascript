var link = document.querySelector(".link");
console.log(link);

// Thuộc tính
/*
Khi làm việc với Js => Có 2 loại thuộc tính
1. Thuộc tính có sẵn của thẻ html
2. Thuộc tính tự tạo (Data Attribute)

*/
// Lấy giá trị thuộc tính: element.tenthuoctinh

console.log(link.href);
console.log(link.id);
console.log(link.target);

// Riêng thuộc tính Class: element.className
console.log(link.className);

// Cập nhật giá trị thuộc tính: element.tenthuoctinh = giatri

link.href = "https://www.google.com/";
console.log(link.href);

// Giá trị mặc định của 1 thuộc tính sẽ là chuỗi rỗng

//Thuộc tính tự tạo
//Lấy data attribute

console.log(link.getAttribute("data-count"));
console.log(link.dataset.count); // data-count
console.log(link.dataset.indexNumber);// data-index-number

// Thêm data attribute
link.setAttribute("data-count",10);
console.log(link.getAttribute("data-count"));
link.dataset.indexNumber = 'ahihi';
console.log(link.dataset.indexNumber);
link.dataset.animationDuration = "2s";

var content = document.querySelector(".content");
// content.className = content.className + "abc";
// console.log(content.classList);

// Thêm class mới
content.classList.add("abc","ahihi");
// Xóa class
content.classList.remove("ahihi")
// Kiểm tra class tồn tại
console.log(content.classList.contains("abc"));

// Class toggle
content.classList.toggle("element");
content.classList.toggle("element");

// Xóa element
content.remove();

// Xóa thuộc tính
link.removeAttribute("title");