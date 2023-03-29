//Global scope

// const name = 'tarikul';

// let x = 3.14;

// const firstName = () => {
//     console.log(name);
//     console.log(x);//3.14
//     x= 5.66;
// }

// firstName();
// console.log(x); //5.66

//Local scope

// const outerFunction = () => {
//     const age = 20;// Local scope #1
//     console.log(`Outer function ${age}.`);
//     const innerFunction = () => {
//         const age = 12; // Local scope #2
//         console.log(`inner function ${age}.`);
//     }
//     innerFunction();
// }

// outerFunction();


//Block scope

// if(true) {
//     let x = 'tarkul';
//     console.log(x);
// }

// console.log(x);


// Hoising In Javascript 



// console.log(x);
// var x = 20;-> undefined

//Behind the seen of above code is

// var x;
// console.log(x);
// x=20;

//Now lets see hoising in functions
// hoist();
// function hoist() {
//     var x = 20;
//     console.log(x);
// }

//But in moder js with let, const and arrow funtion hoising are not supported

// console.log(x);

// let x = 20; -> Error
// hoist(); -> Error
// const hoist = () => {
//     let x = 20;
//     console.log(x);
// }


//Closures in JavaScript


// const outer = () => {
//     let count = 0;

//     const inner = () => {
//         count+=1;
//         return count;
//     }
//     return inner;
// }
// const myFunc = outer();


// console.log(myFunc());
// console.log(myFunc());
// console.log(myFunc());



// const outer = () => {
//     const parent = 'Parent';
//     const inner = () => {
//         const child = 'Child';
//         console.log(parent , child);
//     }
//     return inner;
// }

// const myFunc = outer();
// myFunc();


// const init = () => {
//     const name = 'Tarikul';
//     const displayName = () => {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = init();

// myFunc();

// const outer = () => {
//     let counter = 0;
//     const inner = () => {
//         counter++;
//         console.log(counter);
//     }
//     return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();
// counter();
// counter();

//--------------------------------------------------//
//Practice

//Make a functio that return sum of first n numbers

// const sum = (n) => {
//     let add = 0;
//     for(let i=1; i<=n;i++){
//         add+=i;
//     }
//     return add;
// }

// const ans = sum(4);
// console.log(ans);

//Factorial with recursion
// const fact = (n) => {
//     if(n==1){
//         return 1;
//     }
//     return n* fact(n-1);
// }

// const n = 5;
// console.log(`Factorial of ${n} is ${fact(n)}`);

//Make a simple clculator using function and switch case

// const calc = (a,b,op) => {
//     switch(op) {
//         case '+':
//             return a+b;
//             break;
//         case '-':
//             return a-b;
//             break;
//         case '*':
//             return a*b;
//             break;
//         case '/':
//             return a/b;
//             break;
//         case '%':
//             return a%b;
//             break;
//         default:
//             return 'Erro!!!! Put a valid Operator';
//     }
// }
// const a = 6;
// const b = 10;
// const op = '*';

// console.log(`The result of ${a} ${op} ${b} = ${calc(a,b,op)}.`);


//Pracrice -> 2

// const outer = () => {
//     const parent = 'parent';
//     const inner = () => {
//         console.log(parent);
//     }
//     return inner;
// }

// const myFunc = outer();
// myFunc();
// myFunc();
