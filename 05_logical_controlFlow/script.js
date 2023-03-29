/*
const age = 18;

if(age > 18) {
    console.log("You may enter!!");
}else if(age === 18) {
    console.log("You are just turned at 18!!!");
}else {
    console.log("Sorry Grow Up!!!");
}
*/



//Truthy and Falsy

//All Falsy Values

//false
//0
//''
//null
//undefined
//NaN

// Example

// const dogs = 6;

// if(dogs) {
//     console.log(`You have a ${dogs} dogs.`);
// }else {
//     console.log("You dont have dogs!!");
// }

// if(1) {
//     console.log("This is truthy.")
// }else {
//     console.log("This is falsy")
// }


//Logical operators Part-2

//AND

// console.log('truthy' && 1 && 999 && true && 100);
//In the above case js check all values from left to right if no falsy values there it simply return last one

// console.log('truthy' && 0 && 999 && true && 100);
//In this case 0 is falsy value to js return direct falsy value which is 0

//OR

// console.log('truthy' || 1 || 999 || true || 100);
//In this case js return firsr truthy value

// console.log('' || 0 || false || null || undefined);
//Js check from left to right is no truthy values are there its simply return last one

//NOT

// console.log(!'');
//! is convert truthy or falsy to opposite

// const value = 1;

// if(!!value) {
//     console.log("value is truthy");
// } else {
//     console.log("Value is false");
// }

// !! is work like first its convert ones then its again converts
//In above example -> 1 is truthy values it become falsy then again become truthy

//Swith statement


//Make a simple calculator in js with switch case

// const num1 = 10;
// const num2 = 20;

// const operator = '+';


// switch(operator) {
//     case '+' :
//         console.log(num1+num2);
//         break;
//     case '-' :
//         console.log(num1-num2);
//         break;
//     case '*' :
//         console.log(num1*num2);
//         break;
//     case '/' :
//         console.log(num1/num2);
//         break;
//     default:
//         console.log("Enter a valid operator!!!");
// }

//Make above calculater with if-else

// const a = 10;
// const b = 20;
// const op = '+';

// if(op==='+'){
//     console.log(a + b);
// } else if(op === '-'){
//     console.log(a - b);
// } else if(op === '*'){
//     console.log(a * b);
// } else if(op === '/'){
//     console.log(a / b);
// } else {
//     console.log("Enter a valid operator!!");
// }


//Ternary Operator

// const age  = 18;
// let isDrive;

// if(age >= 18) {
//     console.log("You can drive!!");
// } else {
//     console.log("You can't drive")
// }

//Let's do this with ternary operator

// (age >= 18) ? console.log("You can drive!!") : console.log("You can't drive");
// isDrive= (age >= 18) ? 'Yes' : 'No';

// console.log(isDrive);



//Loops

// print numbers from 1 to 10 
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//While loop
// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

//For loop

// for(let i=10; i>=1; i--){
//     console.log(i);
// }


//print all even numbers from 1 to 20

// for(let i=1; i<=20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

