Object.prototype.combine = function(...args){
    var current = this;
    if(args.length){
        return args.map(function(key){
            return current[key];
        })
    }
}

Object.prototype.message = "F8";


var user = {
    name: "Hoai Nam",
    email: "Hoainam@gmail.com",
    combine: function(...args){
        var current = this;
        if(args.length){
            return args.map(function(key){
                return current[key];
            })
        }
    }
};

var customer = {
    name: "Hoai Nam",
    age: 19,
    position: 1,
};
console.log(user);
// var result1 = user.combine("name","email");

// var result2 = customer.combine("name","age","position");
// console.log(result2);

var a = "F8";
// console.log(String.prototype);
console.log(a.message);

var b = [];
console.log(b.message);

var c = 10;
console.log(c.message);

var today = new Date();
console.log(today);