console.log(Array.prototype);
var users = ["A","B","C","D"];

//1. fill: Cap nhat tat ca phan tu cua mang thanh mot gia tri
// users.fill(1);
// console.log(users);

//2. forEach(callback): Duyet qua tung phan tu va tra ve element, index trong callback
// users.forEach(function(users,index){
//     console.log(users,index);
// })

//3. map(callback) 
var newArr = users.map(function(user,index){
    console.log(user,index);
    return index;
})
console.log(newArr);