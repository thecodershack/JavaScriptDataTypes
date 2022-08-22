let stringvar = "The Coders Hack";

console.log(stringvar);

stringvar = stringvar.replace('h','a');

console.log(stringvar);

// stringvar = stringvar.search('a');
// console.log(" value of stringvar "+ stringvar);

var st = stringvar.indexOf("T");
console.log(" value of stringvar " + st);
let value;
value = stringvar.includes('Hack');
console.log(" value of value "+ value );

console.log(stringvar.endsWith('k'));

console.log(stringvar.concat(' hello world'));

console.log(stringvar.charAt(2));

console.log(stringvar.toLowerCase());

console.log(stringvar.toUpperCase());


/// template literal
let name = 'Sachin';
let temp= `hello ${name}`;
console.log(temp);


// Object;
const student = {
    name : 'Lovepreet',
    age : 20
}

console.log(typeof(student));

console.log(student.name);
console.log(student["age"]);

