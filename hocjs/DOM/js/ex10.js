// event object

// 1. event.target
var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click",function(e){
    // console.log(this);
    // console.log(e.target);
    content.innerHTML = `<button class = "remove">Xoa</button>`;
})
// var removeBtn = document.querySelector(".remove");
//     removeBtn.addEventListener("click",function(){
//         this.remove();
//     })

content.addEventListener("click",function(e){
    console.log(e.target);
    if(e.target.classList.contains("remove")) e.target.remove();
})

//2. event.preventDefault(): NGăn hành động mặc định của thẻ HTML

var link = document.querySelector(".link");
link.addEventListener("click",function(e){
    e.preventDefault();
    console.log(this.href);
})
var menu = document.querySelector(".context-menu");
document.addEventListener("contextmenu",function(e){
    e.preventDefault();
    menu.style.display="block";
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
})

//3. event.stopPropagation(): Ngăn hành động nổi bọt của HTML con
document.addEventListener("click",function(){
    menu.style.display = "none";
})

menu.addEventListener("click",function(e){
    console.log(e.target);
    e.stopPropagation();
})