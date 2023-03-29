// console.log('Objects');

// const age = 20;

// const Person = {
//     firstName : 'Tarikul',
//     lastName: 'Khan',
//     age, //=> variable name are same so we can we like this also
//     mobile : { //=> nested objects
//         brand: 'Realme',
//         price: 10000,
//         color: 'Blue',
//     }
// }

// console.log(Person);

//!Adding, updating objects 

// const obj = {
//     name: 'Tarikul',
//     age: 20,
//     'this is a long line' : true, // we can't access it throgh Dot notations
// }

// ?NOT NOTATION

//access
// console.log(obj.age);
//addong
// obj.mobile = {brand: 'realme', price: 10000};
// console.log(obj.mobile.brand);

//? Square bracekts Notation

//acceses

// console.log(obj['age']);
// property = 'age';
// console.log(obj[property]);
// console.log(obj['this is a long line']);

//! Object Methods

// const Dog = {
//     name: 'Tom',
//     bark: () => {
//         console.log('Wolf wolf!!!');
//     }
// }

// Dog.bark();

//? Built in methods

// const person = {
//     name: 'Tarikul',
//     age: 20,
//     hobby: 'Bgmi',
// };

// print keys
// const keys = Object.keys(person);
// print values
// const values = Object.values(person);
// print keys and values
// const entris = Object.entries(person);

// entris.forEach((entri) => {
//     let key = entri[0];
//     let value = entri[1];
//     console.log(`key = ${key}, Value = ${value}`);
// })

// const user = {
//     userName: 'Tarikul',
//     passWord: '123123',
// };
//  const admin = Object.freeze(user);
//  console.log(admin);

// const noAdd = Object.seal(user);

// noAdd.passWord = 'Changed';
// noAdd.newatt = true;
// console.log(noAdd);

//? Practice

// const age = 16;

// const Person = {
//     name: 'Tarikul',
//     age: 16,// we can put age only also
//     mobile: {
//         brand: 'Realme',
//         price: 10000,
//     },
//     isCool: () => {
//         console.log('COOL');
//     },
//     printAll:  function () { //For using this keyword we have to use normal function
//         console.log(this.name, this.age, this.mobile.brand, this.mobile.price);
//     }
// };

// Person.isCool = true;
// Person.age = 20;
// Person.mobile.color = 'Blue';

// console.log(Person.age);
// console.log(Person.mobile.color);

// Person['isCool'] = true;
// Person['age'] = 20;
// Person['mobile'['brand']] = 'Oppo';
// const property = 'name';
// console.log(Person[property]);

// Person.printAll();

// const pair = {
//     mango: 25,
//     apple: 80,
//     orange: 56,
//     banana: 20,
// };

// const keys = Object.keys(pair);
// const values = Object.values(pair);
// const entries = Object.entries(pair);

// entries.forEach((arr) => {
//     let key = arr[0];
//     let value = arr[1];
//     console.log(`${key} : ${value}`);
// })

// const frozen = Object.freeze(pair);

// frozen.mango = 90;
// frozen.litchi = 100;

// console.log(frozen);

// const seal = Object.seal(pair);

// seal.litchi = 100;
// seal.banana = 30;

// console.log(seal);











