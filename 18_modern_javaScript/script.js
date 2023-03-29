//! Rest operator

//without rest operator

//return sum of all arguments

// const add = (a, b) => {
//     return a+b;
// }

// console.log(add(1,2));//-> ans- 3

// but what about if we dont know how much argumets are coming. Here we use rest operator

// withh rest operator

// const add = (...args) => {
//     return args.reduce((acc, val) => acc+val, 0);// 0 is initial acc value
// }

// console.log(add(2,3,6));// now we pass as many arguments we like

//! spread operator

//with out spread operator our original array also muted and this is not a good practice
// const arr = [1,2,3,4,5];
// const newArr = arr;
// newArr.push(6);
// console.log(arr);
// console.log(newArr);

//Now we make a clone of original array with help of spraad operator and work with new arr
// const arr = [1,2,3,4,5];
// const newArr = [...arr, 6]; //This line means arr clone and push 6;

// console.log(arr);
// console.log(newArr);

//Print array elements individually
// console.log(...arr);

// Objects


//with out spread operator

// const pair = {
//     name: 'Tarikul',
//     age: 20,
// }

// const newPair = pair;

// newPair.name = 'Tuhin';

// console.log(pair);
// console.log(newPair);

//with spread operator

// const pair = {
//     name: 'Tarikul',
//     age: 20,
// }

// const newPair = {...pair, name: 'Thuin'};// this line means clone original array and modifired newPair.name = 'Tuhin';

// console.log(pair);
// console.log(newPair);

//! Object Destructuring

// const person = {
//     firstName: 'Gary',
//     lastName: 'Vee',
//     car: {
//         color: 'red',
//         wheels: 4,
//     },
//     animals: {
//         dogs: {
//             name: 'Fluffy',
//             age: 3,
//         },
//         cat: {
//             name: 'Kitty',
//             age: 3
//         }
//     }
// }

//Now print all details individually

//Normal wal

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.car.color);
// console.log(person.car.wheels);
// console.log(person.animals.dogs.name);
// console.log(person.animals.dogs.age);
// console.log(person.animals.cat.name);
// console.log(person.animals.cat.age);

//with object destruring
// const { firstName, lastName, car, animals } = person; // in {} we put things which we get off from object

//now we also get off the car properties
// const { firstName, lastName, car: {color, wheels}, animals } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(color);
// console.log(wheels);
// console.log(animals.dogs.name);
// console.log(animals.dogs.age);
// console.log(animals.cat.name);
// console.log(animals.cat.age);

//Now we work with animals
// const { animals: {dogs, cat} } = person;

// console.log(dogs.name);
// console.log(dogs.age);
// console.log(cat.name);
// console.log(cat.age);

//? Practice Object Destructring 
// const person = {
//     firstName: 'Gary',
//     lastName: 'Vee',
//     car: {
//         color: 'red',
//         wheels: 4,
//     },
//     animals: {
//         dogs: {
//             name: 'Fluffy',
//             age: 3,
//         },
//         cat: {
//             name: 'Kitty',
//             age: 3
//         }
//     }
// }
//print all properties individually with Destructring

// const { firstName, lastName, car: { color, wheels }, animals: {dogs : {name, age}, cat} } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(color);
// console.log(wheels);
// console.log(name);
// console.log(age);
// console.log(cat.name);
// console.log(cat.age);

//! Array destrucring

// const arr = ['Hello', 'you', 'are', 'good'];

//Now our work is print 1st and last elements from arr

//Normal way

// const first = arr[0];
// const last = arr[3];

// console.log(first, last);

//Now with array destructuring

// const [first,,,last] = arr;
// console.log(first,last);

