
let a , b, c;
a=10,b=20,c=30;

function sum(value1, value2, value3)
{
 return value1+value2+value3;
}
function subtraction(value3, value1)
{
return value3 - value1;
}
console.log(subtraction(c, a));
console.log(sum(a,b,c));
let e = sum(a,b,c);
console.log("value of e "+ e);
let name="Sameer";
function greet(name)
{
    
    let greeting = `Good Morning ${name}`;
    return greeting;
}
console.log(greet(name));

/// Best example of using function is to make a Calculator 
/// Logarithm , add, subtraction , division