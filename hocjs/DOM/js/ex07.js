// DOM CSS: Can thiệp CSS vào các element thông qua thuộc tính style

var content = document.querySelector(".content");

// content.style = "color:red; font-weight: bold";

// console.log(content.style);
// content.style.color = "red";
// content.style.fontWeight = "bold";
// content.style.textDecoration = "line-through";

// var css = {
//     color: "red",
//     fontWeight: "bold",
//     textDecoration: "line-through",
//     fontStyle: "italic",
//     backgroundImage: "url(https://fastly.picsum.photos/id/53/200/300.jpg?hmac=KbEX4oNyVO15M-9S4xMsefrElB1uiO3BqnvVqPnhPgE)",
//     transition: "all 0.4s ease",
//     transform: "translateX(20px)",
// };

// Object.assign(content.style,css);

var btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    if(btn.innerText==="an"){
        content.style.display = "none";
        btn.innerText = "hien";
    }
    else{
        content.style.display = "";
        btn.innerText = "an";
    }
})