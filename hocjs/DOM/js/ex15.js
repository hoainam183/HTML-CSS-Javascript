var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressBtn = progress.querySelector("span")
var initial = 0;
var move = 0;

var isDrag = false;

var current = 0;
var currentWidth = 0;

var handleChange = function(width){
    progress.style.width = `${width*100/progressBar.clientWidth}%`; 
    currentWidth = width;
}


progressBar.addEventListener("mousedown",function(e){
    if(e.which === 1){
        handleChange(e.offsetX);
    }
}
)
progressBtn.addEvPropagation();
    isDrag = true;
    initial = e.clientX;
})

document.addEventListener("mouseup",function(){
    isDrag = false;
    current = currentWidth;
})

document.addEventListener("mousemove",function(e){  
    if(isDrag){
        move = e.clientX - initial;
        handleChange(move + current);
    }
})


