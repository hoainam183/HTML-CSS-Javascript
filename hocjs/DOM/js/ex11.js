// DOM Navigation

var btn = document.querySelector(".btn")
console.log(btn);
console.log(btn.parentElement);

var removeBtnList = document.querySelectorAll(".todo .remove");
removeBtnList.forEach(function(removeBtn){
    removeBtn.addEventListener("click",function(){
        this.parentElement.remove();
    })
})
var menu = document.querySelector(".menu");
var menuList = menu.children;
console.log(typeof(menuList));
for(var i=0;i<menuList.length;i++){
    if(menuList[i].children.length>1) console.log(menuList[i].querySelector("a").innerText);
}

for(var i=0;i<menuList.length;i++){
    if(menuList[i].classList.contains("has-children")) console.log(menuList[i].querySelector("a").innerText);
}