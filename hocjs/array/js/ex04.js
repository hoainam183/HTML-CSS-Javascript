/*
Vòng lặp reduce, có 2 tham số
-callback
+preValue
+currentValue
+index
-initialValue

Giá trị trả về của reduce là kết quả của lần return cuối cùng trong callback
 */

var numbers = [6,5,3,9,8,7,1];
// console.log(numbers);
// var result = numbers.reduce(function(pre,cur){
//     console.log(pre,cur);
//     return cur;
// },0);

// var s = 0;
// var result = numbers.reduce(function(pre,cur){
//     return pre + cur;
// });

var result = numbers.reduce(function(pre,cur){
    return pre < cur ? cur : pre;
})

var arr1 = [2,5,1,9,8];
var arr2 = [3,2,9,8];
var diff = arr1.reduce(function(pre,cur){
    console.log(pre,cur);
    if(!arr2.includes(cur)){
        pre.push(cur);
    }
    return pre;
},[])
console.log(diff);