//! Select an element from dom tree

//?getElementById() 

// const title = document.getElementById('main-heading');
// console.log(title);

//?getElementByClassName()

// const listitems = document.getElementsByClassName('list-items');
// console.log(listitems);

//?getElementsByTagName()

// const bytags = document.getElementsByTagName('li');
// console.log(bytags);

//?querySelector()

// const single = document.querySelector('.container');
// console.log(single);

//?querySelectorAll()

// const multiply = document.querySelectorAll('li');
// console.log(multiply);

//! Styling an Elements

//lets style our h1 tag

// const heading = document.querySelector('#main-heading');
// console.log(heading);

//for single elemens color
// heading.style.color = 'red';

//now lets color all list items

// const listitems = document.querySelectorAll('.list-items');
// console.log(listitems);

// listitems.forEach((list) => {
//     list.style.fontSize = '2.5rem';
// })


//! Creating elements, Modifying innerText

//Lest create a list under ul

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

//adding element
// ul.append(li);

//Modifying the text

//ways to see inner text
// const firstList = document.querySelector('.list-items');
// console.log(firstList.innerText); // User this
// console.log(firstList.innerHTML);

// li.innerText = 'X-Men';


//! Modifying Elements attributes & classes

//?Modifying Attributes

//setAttribute
// li.setAttribute('id', 'main-heading');
//removeattribute
// li.removeAttribute('id');

//get Attribute name
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

//?Modifying classes

//add a class list
// li.classList.add('list-items');
//remove a claasslist
// li.classList.remove('list-items');

//to check if classList is contain or not
// console.log(li.classList.contains('list-items'));

//!Remove an element

// li.remove();


//! Dom traversal

//? Parent node traversal

const ul = document.querySelector('ul');

//access parent element
// console.log(ul.parentNode);
// console.log(ul.parentElement);

//access grand parent element
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html  = document.documentElement;

// console.log(html.parentNode);//Document
// console.log(html.parentElement);//Null

//? Chiled node traversal

// way 1
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'red';

//way 2
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// ul.firstElementChild.style.backgroundColor = 'blue';

//? Sibling traversal

// const div = document.querySelector('div');
// console.log(div.childNodes);
//way 1
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

//way 2
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);



//! Dom Event

//? Evenet lisners

//Click evnet 

// const buttonTwo = document.querySelector('.btn-2');

// buttonTwo.addEventListener('click', () => {
//     alert('I also Love Javascript');
// });

//Mouse over event

//task is when we mouse over on 3rd box it background should chnge to blue

// const box_3 = document.querySelector('.box-3');
// console.log(box_3);

// box_3.addEventListener('mouseover', () => {
//     box_3.style.backgroundColor = 'blue';
// })

//? More on Event

// const revelButton = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');

// console.log(hiddenContent);

// revelButton.addEventListener('click', () => {
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn');
//     } else {
//         hiddenContent.classList.add('reveal-btn');
//     }
// })

//? Practice

// const btn_1 = document.querySelector('.btn-1');
// const result = document.querySelector('.result');

// const showHide = () => {
//     if(result.classList.contains('result-hide')){
//         result.classList.remove('result-hide');
//         btn_1.innerText = 'Hide';
//         btn_1.style.backgroundColor = 'red';
//     }else{
//         result.classList.add('result-hide');
//         btn_1.innerText = 'Show';
//         btn_1.style.backgroundColor = 'green';
//     }
// }

// btn_1.addEventListener('click', showHide);

// showHide();

// const result = document.querySelector('.result');
// const btn = document.querySelector('.btn-1');
// const showOrhide = () => {
//     if(result.classList.contains('hide')){
//         result.classList.remove('hide');
//         btn.innerText = 'Show';
//     } else {
//         result.classList.add('hide');
//         btn.innerText = 'Hide';
//     }
// }

// showOrhide();


//! Event Propagation

// window.addEventListener('click', () => {
//     console.log('Window');
// }, false);

// document.addEventListener('click', ()=> {
//     console.log('Document');
// }, false);

// document.querySelector('.div2').addEventListener('click', (e) => {
//     // e.stopPropagation();// for stop propagation
//     console.log('Div 2');
// }, {once : true});// to run only ones user {once: true}

// document.querySelector('.div1').addEventListener('click', () => {
//     console.log('Div 1');
// }, false); 

// document.querySelector('button').addEventListener('click', (e) => {
//     let x= e.target.innerText = 'clicked!';
//     e.target.style.backgroundColor = 'green';
//     console.log(x);
// }, false);

// //? preventDeafult
// when we click on this link it automaticlly reload to prevent this we use prefeantDeafualt
// document.querySelector('.link').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.innerText = 'Linked!');
// }, false);

//? Practice -> Random color picker
// const colors = ['red','blue','black','green','gray','aqau'];
// const body = document.querySelector('body');
// const button = document.querySelector('button');



// const counter = () => {
//     let count = 0;
//     const inner = () => {
//         return count++;
//     }
//     return inner;
// }

// const count = counter();

// button.addEventListener('click', () => {
//     let i = count();
//     body.style.backgroundColor = colors[i];
// });


//! Event Delegation


// document.getElementById('football').addEventListener('click', (e) => {
//     console.log('Football Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });
// document.getElementById('basketball').addEventListener('click', (e) => {
//     console.log('basketball Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });
// document.getElementById('boxing').addEventListener('click', (e) => {
//     console.log('boxing Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });
// document.getElementById('tennis').addEventListener('click', (e) => {
//     console.log('tennis Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });
// document.getElementById('golf').addEventListener('click', (e) => {
//     console.log('golf Clicked!');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });

//? Same thing doing with event delegation

document.querySelector('.sports').addEventListener('click', (e) => {
    if(e.target.getAttribute('id') != null){
        console.log(`${e.target.getAttribute('id')} clicked!`);
    }

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
});

//? now our taks is create a new list item with cricket

const listitems = document.querySelector('.sports');
const cricket = document.createElement('li');
cricket.innerText = 'Cricket';
cricket.setAttribute('id', 'cricket');
listitems.append(cricket);




