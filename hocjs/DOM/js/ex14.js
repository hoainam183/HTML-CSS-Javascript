var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var item = document.querySelectorAll(".item");

var totalWidth = 0;
var itemWidth = carouselInner.clientWidth;

item.forEach(function(element){
    element.style.width = `${carouselInner.clientWidth}px`;
    totalWidth += carouselInner.clientWidth;
})
carouselInner.style.width = `${totalWidth}px`;
console.log(itemWidth);

var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

var position = 0;
nextBtn.addEventListener("click",function(){
    if(Math.abs(position) < totalWidth - itemWidth){
        position -= itemWidth;
        carouselInner.style.translate = `${position}px`;
    }
})

prevBtn.addEventListener("click",function(){
    if(Math.abs(position) > 0){
        position += itemWidth;
        carouselInner.style.translate = `${position}px`;
    }
})

