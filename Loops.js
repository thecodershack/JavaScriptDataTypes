// while loop to print the table of 5
let i=0;
while(++i<=10) 
{
    console.log(` 5  *  ${i} = ` + (i*5));
}
console.log(" ");
let j=1;
do 
{
console.log(` 6 * ${j} = `+ (j*6));
}while(++j<=10);
console.log(" ");

for(let i=1;i<=10;i++)
{
    console.log(` 7 * ${i} = ` + (i *7));
}

console.log(" ");

var student = {name : 'surender' , age : 10};
for(var prop in student) 
{
    console.log(" Keys in object are " + prop);
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