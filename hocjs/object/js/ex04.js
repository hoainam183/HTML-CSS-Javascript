// var a ={
//     name: "Dao tao lap trinh",
//     email: "Hoainam@gmail.com"
// };

// var b = {
//     teacher: "Hoai Nam",
//     salary: 500,
// }

// Object.keys(b).forEach(function(key){
//     a[key] = b[key];
// })
// console.log(a);

var query = {
    name: "Hoai Nam",
    keyword: "Fullstack",
    catagory: 1,
};

// Object.entries()
// console.log(Object.entries(query));
var queryString = Object.entries(query).map(function(item){
    return item.join("=");
})
queryString=queryString.join("&").replaceAll(" ","+");;
// queryString.replaceAll(" ","+");
// console.log(queryString);

// var a ={
//     name: "Dao tao lap trinh",
//     email: "Hoainam@gmail.com"
// };

// var b = {
//     teacher: "Hoai Nam",
//     salary: 500,
// };
// var result = Object.assign(a,b);
// console.log(a);
// console.log(result);

// Object.create(null) => Tao Object khong co prototype
// var a = Object.create(null);
// console.log(a);

// var a = {
//     name: "hoai Nam",
//     email: "Hoainam@gmail.com",
//     job: {
//         salary: 100,
//         rank: 2,
//     }
// }
// var b={};
// Object.assign(b,a);
// b.name = "Nam Nguyen";
// b.job.rank = 5;
// console.log(a);
// console.log(b);

// var a = ["Hoai Nam", "Hoainam@gmail.com"];
// // var b = a;
// var b = a.map(function(item){
//     return item;
// })
// b[0] = "Nam Nguyen";
// console.log(a);
// console.log(b);

// Optional Chaining (?.)

//1. Optional Chaining voi properties

// var a = undefined;
// console.log(a?.name);
// var fullname =[];
// if(fullname?.lenngth){
//     console.log("ok");
// }

//2. Optional Chaining voi Methods
// var a = {};
// console.log(a.getName?.());

var fullname = "Nam";
if(fullname?.length){
    fullname.forEach?.(function(item){
        console.log(item);
    });
}