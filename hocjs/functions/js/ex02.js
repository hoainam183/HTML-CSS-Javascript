// function max(){
//     console.log(arguments);
//     // console.log(a,b);
// }

// max(1,2,3,4,5);

// function max(result,...args){
//     console.log(result);
//     console.log(arguments);
// }
// max("MAX =",1,2,3,4,5);

// var getMsg = function(){
//     console.log("xin chao");
// };

// getMsg();

// if(typeof getMsg === "function"){
//     console.log("day la function");
// }
// IIFE
// (function(value){
//     console.log("Hoai Nam " + value);
// })("Fullstack");

var getA = function(fn,...args){
    // console.log(a);
    console.log("getA");
    if(typeof fn === "function") fn(...args);
}

var getB = function(name,email){
    console.log("getB: " + name +" " + email);
}

getA(getB,"Nam","gmail.com");//callback
// getA();
// getB();