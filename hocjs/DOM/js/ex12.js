// Next toi 1 element moi
// Pre ve 1 element truoc
var products = document.querySelector(".products");
var productsActive = document.querySelector(".active");
// console.log(productsActive);
// console.log(productsActive.nextElementSibling);
// console.log(productsActive.previousElementSibling);

var btnPre = document.querySelector(".pre");
var btnNext = document.querySelector(".next");

var handleNext = function(){
    if(productsActive.nextElementSibling!==null){
        productsActive.nextElementSibling.className = "active";
        productsActive.className="";
        productsActive = productsActive.nextElementSibling;
    }
    else{
        productsActive.className="";
        productsActive = products.children[0];
        productsActive.className = "active";
    }
}

var handlePre = function(){
    if(productsActive.previousElementSibling!==null){
        productsActive.previousElementSibling.className = "active";
        productsActive.className="";
        productsActive = productsActive.previousElementSibling;
    }
    else{
        productsActive.className="";
        productsActive = products.children[3];
        productsActive.className = "active";
    }
}
btnNext.addEventListener("click",handleNext);
btnPre.addEventListener("click",handlePre);

document.addEventListener("keydown",function(e){
    // console.log(e);
    if(e.key === "ArrowRight"){
        // console.log(1);
        handleNext();
    }
    if(e.key === "ArrowLeft"){
        handlePre();
    }
})