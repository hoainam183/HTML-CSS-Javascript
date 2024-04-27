var email = "hoainam.nh123@gmail.com";
console.log(email.slice(0,email.indexOf("@")));

var fullname = "HOAI Nam";
var check = fullname===fullname.toUpperCase();
console.log(check);

var fullname = "hoAi nAM NAM";
fullname = fullname.toLowerCase();
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
for(var i=1;i<fullname.length;i++){
    if(fullname.charAt(i-1)==' ') 
        fullname = fullname.slice(0,i) + fullname.charAt(i).toUpperCase() + fullname.slice(i+1);
}
console.log(fullname);
