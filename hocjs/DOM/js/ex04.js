// var content = document.querySelector(".content");
//1. Lấy nội dung trong thẻ html(Tất cả)
// console.log(content.innerHTML);
//2. Lấy nội dung trong thẻ html (Chỉ lấy text)
// console.log(content.innerText);
//3. Lấy nội dung trong thẻ html (Chỉ lấy text, giữ nguyên khoảng trắng)
// console.log(content.textContent);
//4. Lấy nội dung vao gồm element đang tác động
// console.log(content.outerHTML);
// Cập nhật nội dung HTML
// content.innerHTML = `<h1>Javascipt không khó<h1>`;
// content.innerText = `<h1>Javascipt không khó<h1>`;
// content.innerText = `<h1>Javascipt không khó<h1>`;

var content = document.querySelector(".number");
number = content.innerText;
var clickDown = document.querySelector(".down");
var clickUp = document.querySelector(".up");
console.log(clickUp.querySelector("span").innerText);
var countUp = 0;
var countDown =0;
clickUp.onclick = function(){
    ++number;
    countUp++;
    content.innerText = number;
    this.querySelector("span").innerText = countUp;
};
clickDown.onclick = function(){
    --number;
    content.innerText = number;
    countDown++;
    this.querySelector("span").innerText = countDown;
};
