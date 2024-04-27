// console.log(String, typeof String);
// console.log(String.prototype);

// var fullname = "Hoai Nam";
// console.log(typeof fullname);
// console.log(fullname.length);


var str = "Hoai Nam"
//1. length
// console.log(str.length);

//2. charAt(index) At(index) str[index] Lấy kí tự của chuỗi theo index
console.log(str.charAt(0));

// 3. charCodeAt(index) Lay ma ASCII cua ky tu index
console.log(str.charCodeAt(0));

//4. concat(chuoi 1, chuoi 2...)
console.log(str.concat("A","B","c"));

//5. indexOf(sub): Tìm vị trí xuất hiện của chuỗi trong chuỗi cha, nếu không tìm thấy trả về -1
console.log(str.indexOf("Na"));

//6. lastIndexOf()

//7. includes(sub) : Tìm chuooixi con trong chuỗi cha, trả về true false
console.log(str.includes("NA"));

//8. slice(start,end): Cắt chuỗi từ .. 
console.log(str.slice(-4));

//9. replace(): Thay thế chuỗi
console.log(str.replace("m","mm"));

//10. replaceAll()
console.log(str.replaceAll("a","A"));

//11. split(char): Tách chuỗi thành mảng
console.log(str.split(" "));

//12. strim(): Xóa khoảng trắng đầu và cuối
console.log("    HOai NAm     ".trim());

//13. trimStart() trimEnd()

//14. match()
var content = `Lorem ipsum dolor si 0123141341 t amet consectetur adipisicing elit. Repellat nobis quis 0123456789 nesciunt expedita sed aliquid sit quia dolorem, natus est fuga ipsam provident perferendis corporis labore beatae quam tempore earum?`

var pattern =/0\d{9}/g;
var phones = content.match(pattern);
console.log(phones);

//15. toLowerCase() toUpperCase()