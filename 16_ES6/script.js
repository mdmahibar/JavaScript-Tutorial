//! const and let

//var 

// var age = 22;
// console.log(age);
// var age = 'string';
// console.log(age);

//let 

// let age = 22;
// console.log(age);
//  let age = 'string';//This cause aerror age is already defined
// age = 'string';
// console.log(age);

//const 

// const age = 22;
// age = 20;// we do not reassign value to const variable
// console.log(age);

//! Arrow functions

//Normal function
// function multiply (x) {
//     return x * x;
// }

// Arrow function

// const multiply = (x) => x * x;
// console.log(multiply(6));

//! Defult parameters

// const addition = ( a = 0, b = 0 , c = 0) => {
//     return a+b+c;
// }
// console.log(addition(10,20));

//! Template Strings 

//We want to show order details to customer 

// const customer = 'Tarikul';
// const order = {
//     id: 'Mobile',
//     price: 10000,
// }
// Old way
// const massege = 'Hello ' + customer + ' You want to buy a ' + order.id + ' for price of ' + order.price + ' ruppes.';
//new way
// const massege = `Hello ${customer} you want to buy a ${order.id} for price of ${order.price}.`;
// console.log(massege);
