//! setInterval 

// const printHello = () => console.log(Math.random().toFixed(2));
// It print a random number in every 1000 milisecond
// const interval = setInterval(printHello, 1000);
// it clear the interval
// clearInterval(interval);

//! setTimeout

// const printHello = () => console.log('Hello , world 1');
// const timeout = setTimeout(printHello, 3000);
// console.log('Hello world 2')

//! synchronous JS Example

//* Defination: synchronous JS is one in which the code is esecuted line by line thier tasks are completed instantly. That is there is no time delay in the compilation of the tasks for those of code.

// const functionOne = () => {
//     console.log('Function one');
//     functionTwo();
//     console.log('Function one , Part 2');
// }

// const functionTwo = () => {
//     console.log('Function two');
// }
// functionOne();

//?---------OUTPUT-----------//
//Function one
//Function two 
//Function one , Part 2

//! asynchronous JS Example

//* Defination: asynchronous is one in which some lines of code take time to run. These tasks are run in the background while the JS engine keeps executing other lines of code.when the result of the asynchronous tasks gets available is then used in the program.

// const functionOne = () => {
//     console.log('Function one');
//     functionTwo();
//     console.log('Function one , Part 2');
// }

// const functionTwo = () => {
//     setTimeout(() => console.log('Function two'), 2000);
// }
// functionOne();

//?--------------OUTPUT-------------//
//Function one
//Function one , Part 2
//Function two 

//Practice

// const printRandom = () => {
//     console.log(Math.random().toFixed(3));
// }
// const interval = setInterval(printRandom, 2000);
// clearInterval(interval);

// const timeout = setTimeout(() => console.log('First Line'), 2000);
// console.log('Second Line');
// clearTimeout(timeout);

// synchronous example

// const one = () => {
//     console.log('First Line');
//     two();
//     console.log('Second Line');
// }
// const two = () => {
//     console.log('Third Line');
// }
// one();

// asynchronous example

// const one = () => {
//     console.log('First Line');
//     two();
//     console.log('Second Line');
// }
// const two = () => {
//     setTimeout(() => console.log('Third Line'), 2000);
// }
// one();

//! Callbacks

//without callback

// const fetchUser = (userName) => {
//     setTimeout(() => {
//         return {userName};
//     }, 2000)
// }

// const user = fetchUser('Tuhin');
// console.log(`Your name is : ${user.userName}`); // => Error

//with callback

// const fetchUser = (userName, callback) => {
//     setTimeout(() => {
//         console.log('Now we have the user: ');
//         callback({userName});
//     }, 2000)
// }

// fetchUser('Tarikul', (user) => {
//     console.log(`Your name is: ${user.userName}.`);
// })

// const sum = (a,b, callback) => {
//     console.log('Calculation...');
//     setTimeout(() => {
//         let result = a+b;
//         callback(result);
//     }, 2000);
// }

// const ans = sum(10, 20, (res) => {
//     console.log(`sum is = ${res}.`);
// })

// console.log('Finish');


//! callback hell

//? make a project where we can get user details 

// const fetchUser = (userName, callback) => {
//     console.log('User is Fetching...');
//     setTimeout(() => {
//         callback({userName});
//     }, 2000);
// }

// const fetchUserFamily = (familyMembers, callback) => {
//     console.log(`Fetching ${familyMembers} family members...`);
//     setTimeout(() => {
//         console.log(`Succesfully fetched family members`);
//         callback(['Tarikul', 'Sufiyan', 'Tanjima', 'Tuhin']);
//     },2000);
// }

// const fetchUserFamilyDetails = (familyDetails, callback) => {
//     console.log(`Fetching ${familyDetails} details...`);
//     setTimeout(() => {
//         console.log('Details Found')
//         callback('Tarikul is a good boy');
//     }, 2000);
// }

// This nest multiple callbacks within a function is called callback hell

// fetchUser('Tarikul', (user) => {
//     console.log(`UserName is ${user.userName}`);
//     fetchUserFamily(user.userName, (members) => {
//         console.log(members);
//         fetchUserFamilyDetails(members[0], (str) => {
//             console.log(str);
//         } )
//     })
// })

//! Promises -> To avoid nested callbacks in a function we use promises -> Promises are objeccts that either return the succesfully fetch data, or the error

//Declaroation
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({userName: 'Tarikul'});
//         reject('Not Found');
//     })
// });
//Call promise
// promise.then((user) => console.log(user.userName)).catch((err) => console.log(err));

//? Callback hell example with promises

// const fetchUser = (userName) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('User is found');
//             resolve({userName});
//         },2000)
//     })
// }
// const fetchUserFamily = (familyMembers) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`${familyMembers} family details found.`);
//             resolve(['Tarikul', 'Tuhin', 'Sofiyan', 'Tanjima']);
//         },2000)
//     })
// }
// const fetchUserFamilyDetails = (familyMembersDetails) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Member of tuhin's family ${familyMembersDetails} details found.`);
//             resolve('Tarikul is a good boy');
//         },2000)
//     })
// }

// Now fetch the data 

// fetchUser('Tuhin')
//     .then((user) => fetchUserFamily(user.userName))
//     .then((members) => fetchUserFamilyDetails(members[0]))
//     .then((details) => console.log(details));

//? Practice callbacks and promises

// const fetchUser = (userName, callback) => {
//     console.log('Featching user...')
//     setTimeout(() => {
//         callback({userName});
//     }, 2000);
// }
// const fetchUserMobile = (mobileName, callback) => {
//     console.log('Fetching userMobileName...');
//     setTimeout(() => {
//         callback(mobileName);
//     }, 2000);
// }
// const fetchUserAge = (age, callback) => {
//     console.log('Fetching userAge...');
//     setTimeout(() => {
//         callback(age);
//     }, 2000)
// }

// fetchUser('Tarikul', (user) => {
//     console.log(`User name is ${user.userName}`);
//     fetchUserMobile('Realme', (name) => {
//         console.log(name);
//         fetchUserAge(22, (age) => {
//             console.log(age);
//         })
//     })
// })

// Implement this with promises

// const fetchUser = new Promise((resolve, reject) => {
//     console.log('Fetching user...');
//     setTimeout(() => {
//         reject('User is not Found!!!');
//     }, 2000);
// })

// fetchUser.then((user) => {
//     console.log(user);
// }).catch((err) => {
//     console.log(err);
// })

// const fetchUser = (userName) => {
//     return new Promise((resolve, reject) => {
//         console.log('Fetching userName...');
//         setTimeout(() => {
//             resolve({userName});
//             reject('Error');
//         }, 2000);
//     })
// }

// const fetchUserMobile = (mobileName) => {
//     return new Promise((resolve, reject) => {
//         console.log('Fetching User Mobile details...');
//         setTimeout(() => {
//             resolve(mobileName);
//             reject('Error');
//         }, 2000);
//     })
// }

// const fetchUserAge = (age) => {
//     return new Promise((resolve, reject) => {
//         console.log('Fetching user Age...');
//         setTimeout(() => {
//             resolve(age);
//             reject('Error');
//         }, 2000);
//     })
// }

// fetchUser('Tarikul')
//     .then((user) => fetchUserMobile('Realme'))
//     .then((mobileName) => fetchUserAge('20'))
//     .then((age) => console.log(`age is ${age}.`));

//! async and await -> async functions return promises

// const fetchNumber = () => {
//     return 25;
// }

//To make above function asunchronize we put async keyword before () this

// const fetchNumber = async () => {
//     return 25;
// }

// console.log(fetchNumber());// now it return a Promise

//We can access this with .then method also
// fetchNumber().then((number) => console.log(number));// output 25

//? we get output with await keyword also

// const getNumber = async () => {
//     const number = await fetchNumber();
//     console.log(number);
// }
// getNumber();

//Now Creat above example with async await 

// const fetchUser = async (userName) => {
//     return new Promise((resolve, reject) => {
//         console.log('Fetching user details...');
//         setTimeout(() => {
//             resolve({userName});
//         }, 2000);
//     });
// }
// const fetchUserPhotos = async (photos) => {
//     return new Promise((resolve, reject) => {
//         console.log('Fetching user Photos...');
//         setTimeout(() => {
//             resolve(['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4']);
//         }, 2000);
//     });
// }
// const fetchUserPhotosDetails = async (details) => {
//     return new Promise((resolve, reject) => {
//         console.log('Fetching user Photo details...');
//         setTimeout(() => {
//             resolve('Photo is awesome.');
//         }, 2000);
//     });
// }

// const getData = async () => {
//     const user = await fetchUser('Tarikul');
//     console.log(`User name is: ${user.userName}`);
//     const userPhotos = await fetchUserPhotos(user.userName);
//     console.log(`${user.userName} photos are: ${userPhotos}.`);
//     const userPhotosDetails = await fetchUserPhotosDetails(userPhotos[0]);
//     console.log(userPhotosDetails);
// }

// getData();

//Practice

//?callback
// const fetchUser = (UserName, callback) => {
//     console.log('User name Fething...');
//     setTimeout(() => {
//         callback({UserName});
//     }, 2000);
// }

//?Promise
// const fetchUser = (userName) => {
//     return new Promise((resolve, reject) => {
//         console.log('User name Fetching...');
//         setTimeout(() => {
//             resolve({userName});
//             reject('Error');
//         }, 2000);
//     })
// }

//?async await
const fetchUser = (userName) => {
    return new Promise((resolve, reject) => {
        console.log('User name Fetching...');
        setTimeout(() => {
            resolve({userName});
            reject('Error');
        }, 2000);
    })
}
const fetchUserPhotos = (userPhotos) => {
    return new Promise((resolve, reject) => {
        console.log(`${userPhotos} Photos is Fetching...`);
        setTimeout(() => {
            resolve(['p1', 'p2', 'p3']);
            reject('Error');
        }, 2000);
    })
}
const fetchUserPhotosDetails = (photoDetails) => {
    return new Promise((resolve, reject) => {
        console.log(`User ${photoDetails} details Fetching...`);
        setTimeout(() => {
            resolve(`That is a good photo.`);
            reject('Error');
        }, 2000);
    })
}

const printUser = (userName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(console.log(`User Name is ${userName}.`));
            resolve();
        }, 2000);
    })
}

//?callback- call
// fetchUser('Tarikul', (user) => {
//     console.log(`User name is : ${user.UserName}.`);
// })

//?Promise - call
// fetchUser('Tarikul')
//     .then((user) => console.log(`User name is : ${user.userName}.`))
//     .catch((err) => console.log(err));

//?async call
const getUser = async () => {
    const user = await fetchUser('Tarikul');
    console.log(`User name is ${user.userName}`);
    await printUser(user.userName);
    const userPhotos = await fetchUserPhotos(user.userName);
    const photoDetails = await fetchUserPhotosDetails(userPhotos[0]);
    console.log(photoDetails);
}
getUser();
