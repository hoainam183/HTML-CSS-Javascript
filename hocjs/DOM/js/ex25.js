// const total = (a) => (b) => a+b
// const add = total(10);
// console.log(add(20));

const total = function(a){
    return function (b){
        return a+b;
    }
}

let add = total(10);
console.log(add(25));
