//!Strings

// const str = 'Hi i'm john -> This produce an error';
// const str = "Hi i'm john but people call me "Johnny" .";-> This is also produce an error;

//Solution - 1 use \ before the ' or "

// const str = "Hi i\'m john but people call me \"Johnny\".";
// console.log(str);

// Solution - 2 use `backticks`

// const str2 = `Hi i'm john but people call me "Johnny".`;
// console.log(str2);

// new line with backtics

// const newLine = `1
// 2
// 3
// 4
// 5`;



// const newLine_1 = "1\n2\n3\n4\n5"
// const tabLine = "1\t2\t3\t4\t5"
// console.log(tabLine);


//!String length basic properties 

// const str  = 'tarikul';

// //Calculate the length of string

// console.log(str.length);

// //First and last charecter of this string

// const first = str[0];
// const last = str[str.length - 1];

// console.log(first, last);


//UPPERCASE and lowercase

// const str = 'Tarikul, is a good boy.';

// const lowercase = str.toLowerCase();
// const UPPERCASE = str.toUpperCase();

// console.log(lowercase);
// console.log(UPPERCASE);


//!Searching for a substring

// const hobbies = 'I love HTML, CSS and JavaScript CSS';

//? indexOf()

// String.indexOf(seachingString, startSearchingIndex) 

// const firstOcurance = hobbies.indexOf('CSS');

// console.log(firstOcurance);


//? lastIndexOf()

// String.lastIndexOf(seachingString, startSearchingIndex from the end) 

// const lastOccu = hobbies.lastIndexOf('CSS');

// console.log(lastOccu);

//? includes()

// const isStr = hobbies.includes("CSS");

// String.includes('String', Seacrhing Position)

// console.log(isStr);

//? startsWith() -> to check is the string is starts with the given sub-string or not

// console.log(hobbies.startsWith('I'))

//?  endsWith() -> to check is the string is ends with the given sub-string or not

// console.log(hobbies.endsWith('CSS'))


//! Getting a Substring - slice()

// const str = "Tarikul";

// console.log(str.slice(0,3)); -> Tar

//! split() a string

// const str = 'Tarikul';
// const sentence = 'Tarikul is a good boy';

// split each charecters

// const charecters = str.split('');

// console.log(charecters);

// split each words from senttence

// const words = sentence.split(' ');//-> split by space

// console.log(words);


//! reverse(), repeat(), trim()


//? Reverse a String -> 1
// const str = 'Tarikul';

// let newStr = '';

// for(let i = str.length-1; i >= 0;i--){
//     newStr += str[i];
// }

// console.log(`Before: ${str} and After: ${newStr}.`)

//? Reverse a String -> 2

// const str = 'Tarikul';

// const revStr = str.split('').reverse().join('');

// console.log(revStr);


//!Repeat

// const str = "SayHi ";

// console.log(str.repeat(5));

//! Trim -> To remove unwanted or Extra spaces from strings

// const email = "    contact@hello.com ";

// console.log(email.trim());



//!String Exercises -> 



// const str = 'Our guets are: tarikul, tuhin, prasad, shradha';

// const length = str.length;
// console.log(length);

// const upperCaseList = str.toUpperCase();
// console.log(upperCaseList);

// const isThere = upperCaseList.includes('TUHIN');
// console.log(isThere);

// const subString = upperCaseList.slice(15);
// console.log(subString);

// const strArr = subString.split(',');
// console.log(strArr);



