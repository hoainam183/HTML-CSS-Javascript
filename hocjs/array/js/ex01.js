var users = ["An","Tam","A","B"];
console.log(users);
console.log(Array.prototype);
console.log(Array);
console.log([Array]);

if(Array.isArray(users)){
    console.log("Day la mang");
} else{
    console.log("Day khong la mang");
}

//1. them phan tu moi
users[4]="C";
// console.log(users);

// for(var index in users){
//     console.log(users[index]);
// }

for(var user of users){
    console.log(user);
}