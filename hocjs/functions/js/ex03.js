// var sum = function (a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(sum(5)(20));

// setTimeout

// setTimeout(
//     function(name){
//         console.log(`Hoai Nam` + name);
//     },
//     2000,
//     "Hoai Nam"
// )

//setInterval: lặp lại sau một khoảng thời gian 
// var count =0;
// var id = setInterval(function(){
//     console.log(++count);
//     if(count===10){
//         clearInterval(id);
//     }
// },1000)

// var showNumber = function(n){
//     console.log(n);
//     if(n>1) {
//         showNumber(n-1);
//     }
// }
// showNumber(10);

// var s =0;
// var solve = function(n){
//     if(n==1) return 1;
//     return n + solve(n-1);
// }
// console.log(solve(10));

//fibonaci
var fibonaci = function(n){
    // if(n<0) return 0;
    if(n==1) return 1;
    if(n==2) return 1;
    return fibonaci(n-1) + fibonaci(n-2);
}

console.log(fibonaci(6));