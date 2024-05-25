var a = 1123456789;
var dv = [
    "",
    "Nghìn",
    "Triệu",
    "Tỷ"
];
var read2 = function(x){
    switch(x) {
        case 1: return "Một"
        break;
        case 2: return "Hai"
        break;
        case 3: return "Ba"
        break;
        case 4: return "Bốn"
        break;
        case 5: return "Năm"
        break;
        case 6: return "Sáu"
        break;
        case 7: return "Bảy"
        break;
        case 8: return "Tám"
        break;
        case 9: return "Chín"
        break;
        case 0: return"Không"
        break;
    }
}
var read = function(x){
    x=+x;
    var dv = [
        "",
        "Mươi",
        "Trăm"
    ];
    var result="";
    var i=0;
    while(x > 0){
        var y = x%10;
        result = read2(y)+ dv[i]+" " + result;
        // console.log(result);
        x=parseInt(x/10);
        i++;
    }
     return result;
}
console.log(read(123));
var result = "";
var i=0;
while(a>0){
    a=+a;
    var x = a %1000;
    result = read(x)+dv[i]+" "+ result;
    a=parseInt(a/1000);
    i++;
}
console.log(result+"Đồng");