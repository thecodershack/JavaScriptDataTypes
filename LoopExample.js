// Print table in while loop
let i=0;
while(++i<=10)
{
console.log(` 5  * ${i} = `+ i*5);
}

// Print table in do while loop 
console.log(" ");
let j=1;
do
{
    console.log(` 6  * ${j} = `+ j*6);  
}while(++j<=10);

// Print table in for loop
console.log(" ");
for(k=1;k<=10;k++)
{
    console.log(` 7 * ${k} = `+ k*7);
}
console.log(" ");
let student = {name : 'Manish', age : 20};
for(let val in student)
{
    console.log("keys in object " + val);
}

console.log(" ");
let name="HelloWorld";
for(let character of name) 
{
    console.log(character);
}

console.log(" ");
let sum=0;
const numbers = [1,2,3,4,5];
numbers.forEach(myFunction);

function myFunction(item) 
{
    sum+=item;
}
console.log(sum);