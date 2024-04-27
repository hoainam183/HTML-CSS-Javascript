// var a="10";
// var b=20;
// // parseInt() parseFloat()
// var c=parseInt(a)**b;
// console.log(c);
// var count = 1;
// count++;
// console.log(count);

// var a=9;
// var b = a>=10 ? "F8" : "Hoai Nam";
// console.log(b);
// document.write(`${a>=10 ? "F8" : "Hoai Nam"}`);

// Toan tu nullish: ??

var a = undefined;
var b = a ?? "F8"; // check khac null va undifined
var c = (a==null || a==undefined) ? "F8" : a;
console.log(c);