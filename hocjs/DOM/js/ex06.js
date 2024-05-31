var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var closeModal = modalBox.querySelector(".close");
var modalOverlay = modalBox.querySelector(".overlay");

btn.addEventListener('click',function(){
    modalBox.classList.add("show");
})

closeModal.addEventListener("click",function(){
    modalBox.classList.remove("show");
})

modalOverlay.addEventListener("click",function(){
    modalBox.classList.remove("show");
})