//! Value vs Referance

//JS Primitive Data Type -> [numbers, string, ....] pass by values
//JS Non- Primitive Data Type -> [Objects -> Arrays] pass by reference

// Primitive data type

// let x = 1;
// let y= x;
// x=90;
// console.log(x);//90
// console.log(y);//1

// let name = 'Tarikul';
// let newName = name;
// name = 'Tuhin';
// console.log(name);//Tuhin
// console.log(newName);//Tarikul


//Non - primitive data type

// const arr = [1,2,3];
// let newArr = arr;
// arr.push(4);
// console.log(arr);-> [1,2,3,4]
// console.log(newArr);-> [1,2,3,4]

// const pair = {
//     banana: 20,
//     apple: 10,
// }
// const newPiar = pair;
// pair.banana = 100;
// console.log(pair); -> {banana: 100, apple: 10}
// console.log(newPiar);-> {banana: 100, apple: 10}


// const person = { name: 'tarikul' };
// const otherPerson = { name: 'tarikul' };

// console.log( person === otherPerson); // -> False due to both obj point to different locations


// const person = { name: 'tarikul' };
// const otherPerson = person;
// console.log(person === otherPerson);// -> True due to both obj points to same location

//! Shallow Clone
//? Cloning an array
//1st method -> ... Spreaad operartor
// const numbers = [1,2,3,4,5];//-> addres = #112ABC
// const copyNumbers = numbers;//-> adsres = #112ABC
// const newNumbers = [...numbers];//-> addres = #211CBA

// copyNumbers.push(0);

// console.log(numbers);
// console.log(copyNumbers);
// console.log(newNumbers);

//2nd Method slice() operator
// const numbers = [1,2,3,4,5];//-> address = #112ABC
// const copyNumbers = numbers;//-> address = #112ABC
// const newNumbers = numbers.slice();//-> address = #211CBA

// copyNumbers.push(0);

// console.log(numbers);
// console.log(copyNumbers);
// console.log(newNumbers);

//? Cloning an objects
//1st way with ...spread operartor
// const person = { name:'tarikul', age:20 };
// const newPerson = { ...person };
// person.age = 22;
// console.log(person);
// console.log(newPerson);
//2nd way with Object.assign()
// const person = { name:'tarikul', age:20 };
// const newPerson = Object.assign({}, person);
// person.age = 22;
// console.log(person);
// console.log(newPerson);

//! Deep Clone

// const person = {
//     firstName: 'Tarikul',
//     lastName: 'Islam',
//     mobile: {
//         brand: 'realme',
//         price: 10000,
//     }
// }

//copy person with ...spread operator
// const newPerson = {...person};
// const newPerson = {...person, mobile: {...person.mobile}}; // we this we copies 2nd level also
// person.firstName = 'Tuhin';
//In this case mobile not copies so we copy mobule also
// person.mobile.price= 20000;
// console.log(person.mobile);
// console.log(newPerson.mobile);

// ? But what about the more deeper levels ?????
//Deep cloning with JSON.stringify and JSON.prse method

// const newPerson = JSON.parse(JSON.stringify(person));

// person.firstName = 'Tuhin';
// person.mobile.price = 20000;
// console.log(person);
// console.log(newPerson);


//Practice

// let str = 'Hello';
// let newStr = str;
// str = 'Not Hello';

// console.log(str);
// console.log(newStr);

// const pair = {
//     banana: 30,
//     apple: 40,
// }
// const newPair = pair;

// pair.apple = 90;
// console.log(pair);
// console.log(newPair);

// const arr = [1,2,3];
// const newArr = [1,2,3];
// const newArr = arr;
// console.log(arr===newArr);

//Shallow Cloning

// clone arrays
// const arr = [1,2,3,4];
// const newArr = [...arr];//-> Spread operator
// const newArr = arr.slice();//-> array.slice(operator)
// arr.push(5);

// console.log(arr);
// console.log(newArr);

//clone objects
// const pair = { name: 'Tarikul', age: 22};
// const newPair = {...pair};//-> Spred operaator
// const newPair = Object.assign({}, pair);
// pair.name = 'Tuhin';

// console.log(pair);
// console.log(newPair);

//Deep Cloning

// const person = {
//     name: 'Tarikul',
//     age: 20,
//     mobile: {
//         brand: 'Realme',
//         price: 10000,
//     }
// }

// const newPerson = {...person, mobile: {...person.mobile}}; // Deep cloning with spread operator

// But this objects only have 2 levels what about the n levels in this type deep cloning come to play

// const str = JSON.stringify(person);
// const newPerson = JSON.parse(str);

// person.name = 'Tuhin';
// person.mobile.brand = 'Oppo';

// console.log(person);
// console.log(newPerson);


