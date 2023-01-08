const slides = document.querySelectorAll('.slider-line');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const n = document.getElementById('s');
const out = document.querySelector('.out');
const h = document.getElementById('h');

let count = 1;
let start;

btnNext.addEventListener('click',() => {
     start = setInterval(function() { 
        out.innerHTML = `время пошло [ ${count++} ]`;
    },1000);
    btnNext.classList.add('start');
    btnPrev.classList.remove('stop');
    n.classList.remove('reset');
    h.classList.remove('hh');
    h.innerHTML = 'Timer';
});


btnPrev.addEventListener('click', () => {
    clearInterval(start);
    btnNext.classList.remove('start');
    btnPrev.classList.add('stop');
    n.classList.remove('reset');
    out.innerHTML = `время остановилось [ ${count++} ]`;
    h.classList.remove('hh');
    h.innerHTML = 'Timer';
})

n.addEventListener('click', () => {
    count = 0;
    out.innerHTML = 0;
    btnNext.classList.remove('start');
    btnPrev.classList.remove('stop');
    n.classList.add('reset');
    clearInterval(start);
    out.innerHTML = `время обнулилось [ ${count++} ]`;
    h.classList.remove('hh');
    h.innerHTML = 'Timer';
})

h.addEventListener('click', () => {
    h.innerHTML = 'ну это любопытство)))';
    h.classList.add('hh');
})