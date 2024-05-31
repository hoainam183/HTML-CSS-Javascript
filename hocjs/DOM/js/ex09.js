var btn = document.querySelector(".btn");
var handleDrag = function(e){
    // console.log(e.clientX, e.clientY);
    var left = e.clientX;
    var top = e.clientY;
    var css = {
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
    };
    Object.assign(btn.style,css);
}

var isDrag = false;
btn.addEventListener("mousedown",function(e){
    if(e.which === 1){
        isDrag = true;
    }
    console.log(isDrag);
})

document.addEventListener("mouseup",function(){
    isDrag = false;
})
document.addEventListener("mousemove",function(e){
    if(isDrag){
        handleDrag(e);
    }
})
