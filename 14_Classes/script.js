//! new Keyword -> Create a new Empty object

//?  When we creating an array, objects even number, you actually creatiing an object that extandeed different constractors. with create a number with new keyword packed with some littele function

// const myNum = new Number(10/3);

// console.log(myNum.toFixed(2)); // upto 2 decimal value

//All are function the return an object;
// console.log(Array);
// console.log(Date);
// console.log(Number);

//Both are same. above one is shorter syntax of below one this is called literal syntax
// const arr = [];
// const newArray = new Array();

//My date does not have literal syntax so we have to use new keyword here
// const myDate = new Date();

//Digital clock
// console.log(`${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`);

//! this keyword -> Refers current object

// const person = {
//     name: 'tarikul',
//     get() {
//         console.log(this);
//     }
// }

// person.get();

// function Mobile(brand, price, generaation) {
//     this.brand = brand;
//     this.price = price;
//     this.generaation = generaation;

//     console.log(this);
// }

// const realme = new Mobile('Realme', 10000, '5G');
// const oppo = new Mobile('Oppo', 11000, '5G');

//! Class -> Class is a blueprint of an object

// const person = {
//     name: 'shradha',
//     age: 20,
//     isCool: true,
// }

//Make blueprint of above object with class

// class Person {
//     constructor(name, age, isCool) {
//         this.name = name;
//         this.age = age;
//         this.isCool = isCool;
//     }

//     getters function this is optional
//     getName() {
//         return this.name;
//     }
// }

// const person = new Person('Shradha', 20, true);
// console.log(person);


//Make this with a function

// parameter and objets key name are same so we use as it is.
// const Person = (name, age, isCool) => { 
//     const user = {
//         name,
//         age,
//         isCool,
//     }
//     return user;
// }

//OR
// const Person = (name, age, isCool) => {
//     return {name, age, isCool};
// }
// const person = Person('Tarikul', 20, true);
// console.log(person);

//OR
// const Person = (name, age, isCool) => ({name, age, isCool});
// const person = Person('Tarikul', 20, true);
// console.log(person);


//Practice some dom

// const changeColor = (curr) => {
//     curr.classList.add('change');
// }

// const times = () => {
//     return `${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
// }

// const box = document.querySelector('.box');
// const myDate = new Date();
// box.innerHTML = times();

// const refresh = document.querySelector('.button');

// refresh.addEventListener('click', () => {
//     location.reload();
// })

// // const body = document.querySelector('.body');

// // body.addEventListener('click', () => {
// //     body.classList.add('random');
// // })

// const heading  = document.createElement('h1');
// const body = document.querySelector('body');

// box.appendChild(heading);
// heading.innerHTML = 'Clock';


//Class

// const person = {
//     name: 'tarikul',
//     age: 20,
// }
// console.log(person);

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const person1 = new Person('Tuhin', 20);
// const person2 = new Person('Tuhin1', 20);
// const person3 = new Person('Tuhin2', 20);
// console.log(person1);
// console.log(person2);
// console.log(person3);

// const Person = (name, age) => {
//     const user = {
//         name: name,
//         age: age,
//     }
//     return user;
// }

// const Person = (name, age) => {
//     return { name, age };
// }

// const Person = (name, age) => ({name, age});

// const person4 = Person('Shradha', 21);
// console.log(person4);
