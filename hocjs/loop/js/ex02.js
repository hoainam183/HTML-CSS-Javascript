var i=1;
var s=0;
while(i<=10){
    // console.log("lan lap thu "+i);
    i++;
    s+=i;
}
console.log(`Tong =${s}`);

do{
    console.log(i);
}while(i<10)

// for(var i=1;i<=10;i++){
//     console.log(i);
//     if(i==5) break;
// }
for(var i=1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
}