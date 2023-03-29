//! DOM Selectors

// Select element by id
// const ids = document.getElementById('heading');
// console.log(ids);

// Select element by class
// const classes = document.getElementsByClassName('test');
// console.log(classes);

//Select element by TagName
// const tag = document.getElementsByTagName('h1');
// console.log(tag);

//Select element by CSS-selector
// const css_selector = document.querySelector('.test');//-> Select only first element with .test classname
// const css_selectors = document.querySelectorAll('.test');//-> elect all classes with .test classname
// console.log(css_selectors); 

//! DOM properties 

// const el = document.querySelector('#heading');

//classList
// console.log(el.classList);
//className
// console.log(el.className);
//id
// console.log(el.id);
//Inner HTML
// console.log(el.innerHTML);

//! DOM Methods
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     alert('Button Clicked');
// })

// const allDetails= button.getBoundingClientRect();
// console.log(allDetails);

// const hasAttri = button.hasAttribute('type');
// console.log(hasAttri);

// const removeAttri = button.removeAttribute('type');
// console.log(removeAttri);//-> undefined

//! Extra Practice
//Styling
// const h1 = document.getElementById('heading');
// h1.addEventListener('click', () => {
//     h1.style.color = "blue";
// })

//! simple counter with DOM

// let counter = 0;
// const box = document.querySelector('.box');
// const minus = document.getElementById('button1');
// const plus = document.getElementById('button2');
// const reset = document.getElementById('reset');
// const change_color = document.getElementById('change-color');
// minus.addEventListener('click', () => {
//     box.innerHTML = --counter;
// })
// plus.addEventListener('click', () => {
//     box.innerHTML = ++counter;
// })
// reset.addEventListener('click', () => {
//     box.innerHTML = counter = 0;
//     box.style.background = 'radial-gradient(whitesmoke,aqua)'
// })
// change_color.addEventListener('click', () => {
//     box.style.background = 'whitesmoke';
// })


//! Woriking with classes

// const menuClicked  = (curr) => {
//     const menuList = document.getElementsByClassName('menu-item');
//     Remove active class for each iteration
//     for(let i=0; i<menuList.length; i++){
//         menuList[i].classList.remove('active');
//     }
//     add active class for curr iteration
//     curr.classList.add('active');
// }

//! Create, Traverse, removeing Nodes

//? Create

// const heading = document.createElement('h1');
// const body = document.querySelector('body');
// body.appendChild(heading);
// heading.innerHTML = Math.random();

//? Traversing between nodes

// const subjects = document.querySelector('.subject');

// console.log(subjects.firstElementChild);//First child
// console.log(subjects.lastElementChild);//Last child

// const favSubject = document.querySelector('.fav-subject');

// console.log(favSubject.previousElementSibling);//previous sibling
// console.log(favSubject.nextElementSibling);//next sibling

// console.log(favSubject.parentElement);// Parent element

//? Removing elements

// const remove = favSubject.remove();




