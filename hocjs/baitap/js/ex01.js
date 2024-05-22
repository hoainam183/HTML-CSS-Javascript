var arr1 = [3,5,6,1,7];
var x = 4;
arr1.sort();
if(x<=arr1[0]) arr1.unshift(x);
else if(x>=arr1[arr1.length]) arr1.push(x);
else for(var i=1;i<arr1.length;i++){
    if(x>=arr1[i-1] && x<=arr1[i]) {
        for(var j = arr1.length;j>=i+1;j--){
            arr1[j] = arr1[j-1];
        }
        arr1[i] = x;
        break;
    }
}
console.log(arr1);