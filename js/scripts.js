const btnElement = document.querySelector('#hamburgerBtn');
const navElement = document.querySelector('#primaryNav');

btnElement.addEventListener('click', ()=> {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');


})

// inject currnet year in footers
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()