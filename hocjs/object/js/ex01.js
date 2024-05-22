var user = {
    name: "Hoai Nam",
    email: "nam@gmail.com",
    age:18,
    getName: function(){
        return "Hoai Nam";
    },
};
// Them key moi cho object
user.country = "VietNam";
user['address'] = "NgheAn";

// Xoa key trong Object
delete user.age;

//Truy cap key trong Object
// console.log(user.name);
// console.log(user['address']);

// console.log(user);

//Lay danh sach key trong Object
// for(var key in user){
//     // console.log(key);
//     console.log(user[key]);
// }

// console.log(Object.keys(user));

Object.keys(user).forEach(function(key){
    console.log((user[key]));
});

// Kiem tra 1 bien co phai Object hay khong

// var a = {};
// if(typeof a === 'object' && !Array.isArray(a) && a!==null){
//     console.log("La Object");
// } else{
//     console.log("Khong la Object");
// }

// var customer = {
//     name: "HoaiNam",
//     email: "HoaiNam@gmail.com",
//     getName: function(){
//         return this.name;
//     },
//     getEmail: function(){
//         return this.email;
//     },
//     getInfo: function(){
//         console.log(this);
//         return `
//         - Name: ${this.getName()}
//         - Email: ${this.getEmail()}
//         `;
//     },
// }


var user = {
    name: "Hoai Nam",
    email: "hoainam@gmail.com",
    jobs: {
        name: "giang vien",
        salary: 50000000,
        currency: "vnd",
        per: "month",
        students: [
            {
                id: 1,
                name: "HV1"
            },
            {
                id: 2,
                name: "HV2"
            },
            {
                id: 3,
                name: "HV3"
            },
        ]
    }
}

// console.log(user.jobs.students[0].name);
// user.jobs.students.forEach(function(key){
//     console.log(key.name);
// })

var user = {
    name: "Hoai Nam",
    email: "hoainam@gmail.com",
    getInfo: function(){
        var current = this;
        return{
            getName: function(){
                return current.name;
            }
        }
    }
}

console.log(user.getInfo().getName());
// console.log(customer.getInfo());
// var user = new Object();
// console.log(user);