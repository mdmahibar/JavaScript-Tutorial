// Variables 

const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');

// variables for time values 
let s = 0;
let m = 0;
let h = 0;

//Variables for leading zeros
let ls = 0;
let lm = 0;
let lh = 0;

//vaariable for setInterval & timerstatus
let timerInterval = null;
let timerStatus = 'stop';

const stopWatch = () => {
    s++;
    if(s === 60){
        s=0;
        m++;
    }
    if(m === 60){
        m=0;
        h++;
    }
    //if one digit
    if(s<10){
        ls = '0' + s.toString();
    } else {
        ls = s;
    }
    if(m<10){
        lm = '0' + m.toString();
    } else {
        lm = m;
    }
    if(h<10){
        lh = '0' + h.toString();
    } else {
        lh = h;
    }
    document.querySelector('.timer').innerText = `${lh}:${lm}:${ls}`;
}

// window.setInterval(stopWatch, 1000);

btn_1.addEventListener('click', () => {
    if(timerStatus === 'stop'){
        timerInterval = window.setInterval(stopWatch, 1000);
        btn_1.innerHTML = '<span class="material-symbols-outlined">pause</span>';
        btn_1.classList.add('btn-3');
        timerStatus = 'start';
    } else {
        window.clearInterval(timerInterval);
        btn_1.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>'
        btn_1.classList.remove('btn-3');
        timerStatus = 'stop';
    }
});

btn_2.addEventListener('click', () => {
    window.clearInterval(timerInterval);
    s=0,m=0,h=0;
    document.querySelector('.timer').innerText = `00:00:00`;
    btn_1.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>'
    btn_1.classList.remove('btn-3');
});