var users = [
    'item1',
    'item2',
    'item3',
    'item4'
];

Array.prototype.map2 = function(callback){
    var newArr = [];
    var arr = this;
    for(var index = 0; index < arr.length;index++){
        var result = callback(arr[index],index);
        newArr.push(result);
    }
    return newArr;

};
var result = users.map2(function(user,index){
    return `<h3>${index} - ${user}</h3>`
});
console.log(result);