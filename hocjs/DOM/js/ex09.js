var btn = document.querySelector(".btn");
var handleDrag = function(e){
    // console.log(e.clientX, e.clientY);
    // console.log(offsetX,offsetY);
    var left = e.clientX;
    var top = e.clientY;
    var css = {
        position: "relative",
        top: `${top - offsetY -10}px`,
        left: `${left - offsetX -10}px`,
    };
    Object.assign(btn.style,css);
}

var isDrag = false;
var offsetX,offsetY;
btn.addEventListener("mousedown",function(e){
    if(e.which === 1){
        // btn.style.cursor = "move";
        isDrag = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    }
    console.log(isDrag);
})

document.addEventListener("mouseup",function(){
    isDrag = false;
})
document.addEventListener("mousemove",function(e){
    if(isDrag){
        handleDrag(e);
        btn.style.cursor = "move";
        // document.querySelector('html').style.cursor = "move";
    }
})

btn.addEventListener("mouseover",function(){
    btn.style.cursor = "move";
})