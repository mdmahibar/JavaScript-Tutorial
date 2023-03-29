// Variables 
let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');
let container = document.getElementById('modal-container');

openBtn.addEventListener('click', () => {
    container.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    container.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if(e.target === container){
        container.style.display = 'none';
    }
})