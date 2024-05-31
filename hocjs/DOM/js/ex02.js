/*
DOM Event
- Mỗi thẻ HTML có các Event nhất định(có sẵn)
- Có event xuất hiện trong tất cả các thẻ
- Có event chỉ xuất hiện trong 1 số thẻ nhất định

Ví dụ: 
- Click
- dblClick
- mouseover
- mouseout
- mousemove
=> Thẻ HTML nào cũng có

- submit: Chỉ có trong thẻ form
- keyup, keydown: Thường xuất hiện trong các ô nhập liệu
- play, pause, timeupdate: Xuất hiện trong thẻ audio, video

*/
// Bước 1: Tạo element
var btn = document.querySelector(".btn");
console.log([btn]);

//Bước 2: Gán sự kiện
btn.onclick = function(){
    console.log("Đăng ký thành công");
}
btn.onmouseover = function(){
    console.log("Over");
}
btn.onmouseout = function(){
    console.log("Out");
}
btn.onmousemove = function(){
    console.log("Move");
}

var email = document.querySelector(".email");
email.onchange = function(){
    console.log("Đã xong");
}
email.onfocus = function(){
    console.log("Focus");
}
email.onblur = function(){
    console.log("Ra ngoài");
}
email.onkeyup = function(){
    console.log("Đang gõ phím");
}