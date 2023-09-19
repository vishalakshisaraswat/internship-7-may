
function add(a,b){
    return a+b;
}

console.log(add(10,20));
console.log(add(100,20));
console.log(add(45,28));

function isEven(input){
    var out;
    if(input%2 == 0){
        out= (`The Number ${input} is even`);
    }
    else{
        out=(`The Number ${input} is not even`);
    }
    return out;
}

console.log(isEven(20));
console.log(isEven(15));

//Arrow functions

let age = 70;
let greet = age>40 ? () => console.log("Adult") : () => console.log("Teenager") ;
greet();


let sum1 = (a,b) => a+b;

console.log(sum1(2,5));