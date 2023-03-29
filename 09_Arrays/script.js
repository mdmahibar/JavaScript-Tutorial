//! Array intro

// const arr = ['January', 'February', 'March', 'April'];

//  const arr2 = [
//     () => {

//     },
//     true,
//     {age: 20},
//     78,
// ]

//  console.log(arr);
//  console.log(arr2)

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

//! Array Methods

// const names = ['John', 'Bob', 'David', 'Mark'];

//? Array Push -> Push element in last
// names.push('Tarikul');

//? Array Pop -> Remove last element from an array
// names.pop();

//? Array Shift -> Remove firsr element from an array
// names.shift();

//? Array Unshift -> Adds a new element in front of an array
// names.unshift('Tuhin');

//? Array spilce -> To add or delete elemetns in a certin index
// names.splice(2, 0, 'Shardhha');
// names.splice(2,2,'Joe');

//? Array slice -> Copies certain parts of an array into a newly created array

// const newArray = names.slice(1);
// const newArray = names.slice(1, 3);

// console.log(newArray);


//! Array forEach

// const arr = ['John', 'Bob', 'David', 'Mark'];

//norml loop

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i],i);
// }

//forEach


// arr.forEach( (value, index) => {
//     console.log(value, index);
// })

//Same as forEach
// const func = (value, index) => {
//     console.log(value, index);
// }
// arr.forEach(func);

//forEach in one line

// arr.forEach( (val, i) => console.log(i, val));

//Sum of all numbers

// const arr = [2,5,3,5,6,4];
// let sum =0;
// arr.forEach((val) => sum+=val);
// console.log(sum);


//! Array Map

// const Pair = [
//     {key: 1, name: 'Tarkul', age: 18},
//     {key: 2, name: 'Tuhin', age: 20},
//     {key: 3, name: 'Shraddha', age: 22},
//     {key: 4, name: 'Tarikul', age: 19},
// ];

//Lets map through Pair array and get only names
// const names= Pair.map((item) => item.name);
//Lets map through Pair array and get only ages
// const ages= Pair.map((item) => item.age);
// const keys= Pair.map((item) => item.key);

// console.log(keys);

//Find the largest and smallest numbers in an unsorted array

// const arr = [2,3,1,5,6]; //-> ans is (6+1)/2 = 3.5

// const getAvg = (arr) => {
//     let max_val = Number.MIN_VALUE;
//     let min_val = Number.MAX_VALUE;

//     for(let i=0; i<arr.length;i++){
//         max_val = Math.max(arr[i],max_val);
//         min_val = Math.min(arr[i],min_val);
//     }

//     let avg = (max_val+min_val)/2;
//     return avg;
// }

// console.log(`Avg of largest and smallest elements are: ${getAvg(arr)}`);




//*Practice


// const arr = ['Tarikul', 'Tuhin', 'Aftab', 'Shardhha'];

// const x = arr.push('John');
// const removeValue = arr.pop();
// const removeValue = arr.shift();
// const x = arr.unshift('newMember');
// const x = arr.splice(1,arr.length-1);
// const newArray = arr.slice(1);

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// const printArr = (val, i) => {
//     console.log(i, val);
// }

// arr.forEach((val, i) => {
//     console.log(val, i);
// });

// arr.forEach((val, i) => console.log(val, i));

// const people = [
//     {name: 'Tarikul', age: 18},
//     {name: 'Tuhin', age: 19},
//     {name: 'Aftab', age: 20},
//     {name: 'Shradha', age: 21},
// ];

// const names = people.map((item) => item.name);
// const ages = people.map((item) => item.age );
// console.log(names);
// console.log(ages);


//! Array Filter

// const numbers = [1, -23, 45, 56, 98, 12, -45];
//Filter the numbrs which divisible bt 5
// const div_by_5 = numbers.filter((number) => number%5==0);
// console.log(div_by_5);

//Lets do this with normal for loop

// const positiveNums = [];
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]%5==0){
//         positiveNums.push(numbers[i]);
//     }
// }
// console.log(positiveNums);


//A start up wants to reward the employess with 7 or more hours of overtime

// const employess = [
//     {name: 'Tarikul', overtime: 5},
//     {name: 'Tuhin', overtime: 8},
//     {name: 'Sharadha', overtime: 10},
// ];

// const rewards = employess.filter((employe) => {
//     if(employe.overtime >= 7){
//         return true; // If return is true then its add on rewards otherwise not
//     }
// })

//So we use direct in comparison expresiion because it returns true or false
// const rewards = employess.filter((employe) => employe.overtime>=7);
// console.log(rewards);

//?Task is print only name of employees which has overtime greater than 7 or equal and greet them with a message
// const data = [
//     {name: 'Tarikul', overtime: 5},
//     {name: 'Tuhin', overtime: 8},
//     {name: 'Sharadha', overtime: 10},
// ];

// const rewards = data.filter((employe) => employe.overtime >= 7);
// const names = rewards.map((employe) => employe.name);
// names.forEach((val) => console.log(`Congratulations ${val} for Reward`));


//! Array Find

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const value = numbers.find((number) => number>6);
// console.log(value);

//Print stte that has start with w

// const states = ['Maharastra', 'Bihar', 'UP', 'West Bengal'];
// const startWith_C = states.find((state) => state.startsWith('W')); //state[0]=='W'
// console.log(startWith_C);

//! Array Includes

// const arr = [1,2,3,4,5,6];
// if(arr.includes(2)){
//     console.log("Searching find the elemesnts is there!!")
// } else {
//     console.log("Element is not in array.")
// }

//Remove duplicates from an array

// const arr = [2,3,3,2,1,5,6];
// const newArr = [];

// arr.forEach((val) => {
//     if(!newArr.includes(val)){
//         newArr.push(val);
//     }
// })

// console.log(newArr);

//! Array sort

//sort strings

// const strArr = ['Tarikul', 'Tuhin', 'Aftab', 'Sharadha'];
// strArr.sort();
// console.log(strArr);

//Sort numbers- without comparator

// const numbers = [1,5,3,11,67,6,5,55,2,99];
// numbers.sort();
// console.log(numbers);

//Sort arrays - with compoarator
//Accending ordeer
// numbers.sort((a,b) => a-b);
// console.log(numbers);
//Decending ordeer
// numbers.sort((a,b) => b-a);
// console.log(numbers);


//Sort Objects in an array

// const Pairs = [
//     {name: 'Tarikul', age: 18},
//     {name: 'Tuhin', age: 9},
//     {name: 'Aftab', age: 19},
//     {name: 'Shardha', age: 20},
// ]
// console.log(Pairs.map((pair) => pair.age).sort((a,b) => a-b));


//* Practice 2

// 1-> Print all positive numbers from an array
// const numbers = [1,-23,4,7,-9,34,-5];
// const positiveNums = numbers.filter((number) => number>=0);
// console.log(positiveNums);
// 2-> print all employee names which is age is more than 15
// const employees = [
//     {name: 'Tarikul', age: 16},
//     {name: 'Tuhin', age: 20},
//     {name: 'Aftab', age: 21},
//     {name: 'Shradha', age: 22},
// ];

// const adults = employees.filter((employee) => employee.age>=18);
// const names = adults.map((employee) => employee.name);
// names.forEach((val) => console.log(`${val} congratulation you are adult now`));

//Print the city name which is start by 'M'

// const citys = ['Kolkata', 'Bengaluru', 'Malda', 'Hyderabad'];

// const city = citys.find((city) => city.startsWith('M'));
// console.log(city);

// const isThere = citys.includes('Malda');

// if(isThere){
//     console.log('City is there');
// } else {
//    console.log('City is not there');
// }

// const numbers = [1,76,825,45,98,34];
// numbers.sort((a,b) => a-b);
// console.log(numbers);


//! Array some 

// const arr = [1,2,3,4,5];

// const isPositive = (number) => {
//     return number>=0;
// }
// console.log(arr.some((number) => number>3));


//! Array every

// const arr = [1,2,3,4,5];
// console.log(arr.every((number) => number>=0));


//! Array Reduce
// const prices = [ 29, 12, 45, 35, 87, 110 ];
//  Print total price 
// let sum = 0;
// prices.forEach((val) => sum += val);
// console.log(sum);

//Practice -> 3

// const numbers = [1,2,3,4,5,6];

// let sum = 0;

// numbers.forEach((i) => sum+=i);

// console.log(sum);

// Method -> 2

// const total = numbers.reduce((prev, curr) => prev+curr, 0);

// console.log(total);