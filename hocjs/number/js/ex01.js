//Number: Kieu du lieu nguyen thuy
console.log([Number]);
var a = 10;
console.log(a,typeof a);

//Kiểm tra 1 biến có phải là number k
if(typeof a === "number"){
    console.log("La so");
} else{
    console.log("Khong la so");
};

// So NaN (Not a number)
/*
- Ép kiểu thất bại
- Tính toán các biểu thức số học mà có một toán hạng mang giá trị NaN hoặc do quá trình tự động ép kiểu khi thực hiện phép toán
 */
var a = "Nam";
var b = 10;
var c = a - b;
if(!Number.isNaN(c)) console.log(c);
else console.log("No");

// a = +a;
// console.log(a,typeof a);

// infinity
// var a = 1000 ** 1000;
// console.log(10/0);
// kiem tra so infinity
// if(a === Infinity){
//     console.log("INFINITY");
// }
// var a =10;
// if(typeof a ==="number" && !Number.isNaN(a) && a!== Infinity){
//     console.log("So nguyen");
// }

// Ép kiểu
var a = "10";
// a = Number.parseInt(a);
// console.log(a);

// a = Number.parseFloat(a);

//Ép thành một kiểu số nói chung
a = Number(a);
console.log(a);
var a = 10.567;
a = a.toFixed(0);

// toString()
a = 1234;
a = a.toString();
console.log(a);

//Định dạng số
var price = 1299000;
console.log(Math.sqrt(price));
price = price.toLocaleString("vi",{
    style: "currency",
    currency: "NDT",
});
console.log(price);