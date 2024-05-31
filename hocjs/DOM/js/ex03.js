// var handleClick = function(){
//     console.log("Dang ky khoa hoc thanh cong");
// }
// var handleInput = function(){
//     console.log("Dang go");
// }

var btn = document.querySelector(".btn");
// btn.onclick = function(){
//     console.log("Hanh dong 1");
// };
// btn.onclick = function(){
//     console.log("Hanh dong 2");
// }

//1. Event Listener
var handleClick = function(){
    console.log("Hanh dong 1");
}
btn.addEventListener('click',handleClick);

//2. removeEventListener (type,listener): Loại bỏ listener khỏi element
var finishBtn = document.querySelector(".finish");
finishBtn.addEventListener("click",function(){
    console.log("Da hoan thanh");
    btn.removeEventListener('click',handleClick);
})