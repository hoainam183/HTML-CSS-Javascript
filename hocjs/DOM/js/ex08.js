//Event Object

var btn = document.querySelector(".btn");
btn.addEventListener("mousedown",function(e){
    //e = event object => Trả về thông tin của sự kiện
    // Mỗi sự kiện lại có thông tin khác nhau
    // console.log("clicked");
    // console.log(this);
    // console.log(e);
    if(e.which === 1){
        this.style.background = "red";
    }
})

var nameEl = document.querySelector(".name");
nameEl.addEventListener("keyup",function(e){
    // console.log(e.key);
    if(e.key === "Enter"){
        console.log(this.value);
    }
})

document.addEventListener("keyup",function(e){
    // console.log(e);
    if(e.ctrlKey === true && e.key === "Enter"){
        document.body.style.background = "red";
    }
    else if(e.key==="Enter"){
        document.body.style.background = "initial";
    }
})