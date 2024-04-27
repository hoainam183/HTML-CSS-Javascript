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