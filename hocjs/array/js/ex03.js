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
// var newArr = users.map(function(user,index){
//     console.log(user,index);
//     return index;
// })
// console.log(newArr);

// var customers = [
//     "Nguyen Duong",
//     "Tran Xuan Bach",
//     "Nguyễn Hoàng Anh",
//     "Dương Đức Hiệp",
//     "Đỗ Văn Khoa",
//     "Tạ Hoàng AN",
// ];
// var keyword = "an";

// var result = customers.filter(function(customer){
//     customer = customer.toLowerCase();
//     if(customer.includes(keyword)===true) return true;
// });
// console.log(result);

/*
7. find(callback)
-Giong filter nhung chi tra ve phan tu dau tien
8. findLast(callback)
*/

var customers = [
    "Nguyen Duong",
    "Tran Xuan Bach",
    "Nguyễn Hoàng Anh",
    "Dương Đức Hiệp",
    "Đỗ Văn Khoa",
    "Tạ Hoàng AN",
];
var keyword = "an";

var result = customers.find(function(customer){
    customer = customer.toLowerCase();
    if(customer.includes(keyword)===true) return true;
});
// console.log(result);

/*
9. findIndex(callback)
-Tra ve phan tu dau tien
10. findLastIndex(callback)
*/

var users = [
    ["Hoàng An", "xx@gmail.com",20],
    ["Nguyễn Dường", "xxfff@gmail.com",19],
    ["Trần Xuân Bách", "txb@gmail.com",25],
];

var newArr = users.map(function(user){
    if(user[1]==='xx@gmail.com') user[2]+=2;
    return user;
});
console.log(newArr);