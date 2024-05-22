// var user = {
//     name: "Hoai Nam",
//     email: "hoainam@gmail.com",
//     getName: function(){
//         return this.name;
//     },
// };

// var customer = {
//     name: "Nam Nguyen",
//     email: "nguyennam@gmail.com",
//     getName: function(){
//         return this.name;
//     },
// }
// console.log(user);
// console.log(customer);

// function constructer
// Tên hàm tạo : Viết theo cú pháp PascalCase
var Person = function(name,email){
    this.name = name;
    this.email = email;
    this.getName = function(){
        return this.name;
    };
};

Person.prototype.message = "123";
console.log(Person.prototype);
// console.log(Person());
var person = new Person("Hoai Nam","hoainam@gmail.com");
var user = new Person("Nam Nguyen","namnguyen@gmail.com");
console.log(person.message);
console.log(user.message);
// console.log(person.name,person.email);

Array.prototype.first = function(){
    return this[0];
}
var a = ["A","b","c","d"];
console.log(a.first());

String.prototype.end = function(){
    return this.slice(-1);
}
var b = "Nguyen Hoai Nam";
console.log(b.end());

// Kiem tra object thuoc ham tao nao
console.log(person.constructor.name);
var a= null;
if(!undefined) console.log("Number");

// Xây dựng một hàm nội bộ từ hàm tạo
// var getMsg = function(){
//     console.log("Xin chao");
// };
// getMsg();

Person.isPerson = function(variable){
    return variable && variable.constructor.name==="Person";
}

if(isPerson(person)){
    console.log("Day la Person");
} else {
    console.log("Khong phai la Person");
}