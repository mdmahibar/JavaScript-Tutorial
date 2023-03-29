// console.log("Data Types");

// Strings

//There is not difference between single ans double quotes
const singleQuote = 'Hello!';
const doubleQuote = "Hello!!";

const name_1 = "Tuhin";

//When you working with dynamic data use this in ${in this area we can run javascript code}
const backticks = `Hello, ${name_1}`;

const backticks_example = `2 + 2`;
// console.log(backticks_example);

const backticks_example2 = `${2+2}`
// console.log(backticks_example2);
// console.log(backticks);
// console.log(typeof backticks);


//NUMBERS

const integer_number = 5;
const float_number = 0.333;

const result = integer_number + float_number;

//add a string with number
const string = 'Hello';
const number = 5;
const res = string / number;
// console.log(res); // NaN

//Type of Nan is number
// console.log(typeof res);

// console.log(result);



//BOOLEANS

const isCool = true;

if(isCool) {
    // console.log("Yes, You'r a cool person");
}else {
    // console.log("Oh no!!!")
}

const age = 20;
// console.log(age > 18);

// console.log(typeof isCool);



//NULL
/*This type has only one value:
The special null value does not belong to any of
the types described above.
It forms a separate type of its own which contains only he null value
null
*/

//Typeof null variable is an object
let age_2 = null;
age_2 = 20;
// console.log(age_2);

//Undefined
let x;

let y = undefined; //this is not recomended
// console.log(typeof x);
// console.log(typeof undefined);



//**OBJECT

const person = {
    surName : 'tarikul',
    bois : 23,
}

// console.log(typeof person);

//Dot notation

// console.log(person.surName);

//Array

const arr = [1,2,3,4];
// console.log(typeof arr);

//Date object

const date = new Date();
// console.log(typeof date);


// Statically Typed 
// int number = 6;

// number = "hello";

// it cannot be change in statically typed languages.


//Dynamaically Typed

let typed = 78;

console.log(typeof typed);

typed = 'hello';

console.log(typeof typed);