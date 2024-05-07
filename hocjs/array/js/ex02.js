console.log(Array.prototype);
var users = ["A","B","C","D"];

//at() truy cap vao mot phan tu trong index
// console.log(users.at(1));

//concat(arr1,arr2...) noi mang
console.log(users.concat([1,2,3],[4,5,6]));
users = users.concat([1,2,3],[4,5,6]);

//3. indexOf(value) tim vi tri dau tien
console.log(users.indexOf(1));

//includes(value) : Tim phan tu trong mang va tra ve true false

//4. join(): Noi mang thanh chuoi
console.log(users.join(" "));

//5. push(): Them phan tu vao cuoi mang
users.push("E","F");
console.log(users);

//9. unshift(): Them phan tu vao dau
users.unshift("Nam");
console.log(users);

//10. pop()

//11. shift(): Xoa phan tu dau mang
var value = users.shift();
console.log(users);
console.log(value);

//12. splice(index,count): Xoa count phan tu tu index
users.splice(1,2,"M","N");
console.log(users);

//13. reverse()
// users.reverse();

//14. sort()
// users.sort().reverse();
// var numbers = [1,2,5,4,6,3];
// numbers.sort(function(a,b){
//     return a-b;
// })
// console.log(numbers);

var fullname = "Nguyen Hoai Nam";
var arr = fullname.split(" ");
// fullname.split(" ");
// for(var str of fullname){
//     console.log(fullname.split(" "));
// }
// console.log(arr[arr.length-1]);
// var firstname = fullname.split(" ").slice(-1);
// console.log(firstname[0]);

var customers = [
    "Nguyễn Hoài Nam",
    "Trần Xuân Bách",
    "Dương Đức Hiệp",
    "Đỗ Văn Khoa",
    "Tạ Hoàng An",
];
customers.sort(function(a,b){
    var fi1 = a.split(" ");
    var fi2 = b.split(" ");
    if(fi1[fi1.length-1]>fi2[fi2.length-1]) return 1;
    return -1;
});
// customers.sort();
console.log(customers);



