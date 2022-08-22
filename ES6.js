// Arrow functions allows you to write shorter syntax.
// function addition(a ,b) 
// {
// return a+b;
// }

let addition = (a,b ) => {return a+b;}

console.log(addition(5,7));
console.log(addition(6,10));



let multiplication = (a,b) => a * b;

console.log(multiplication(5,6));

const hellofunction = (val ="Sunil") => {
    return "Hello "+ val;
}

console.log(hellofunction());

// Extended parameter Handling

//const addition = (a=2,b=3,c=4) => a+b+c;

//console.log(addition());

// Template literal

let name="The Coder Hack!!";

console.log(`Hello ${name}`);

// Destructuring assignment

var a,b;
[a,b] = [10,20];
console.log(a,b);

var fruits = ["apple","banana","mango","pomengranate"];
var [fruit1 , fruit2] = fruits;

console.log("Fruit 1 "+fruit1);
console.log("Fruit 2 "+fruit2);

