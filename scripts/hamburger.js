const menu = document.querySelector('nav');
const burger = document.querySelector('.fa-bars');


burger.addEventListener('click', () => {
    menu.classList.add('active');
    burger.style.display = 'none';

});
document.querySelector('.fa-times-circle').addEventListener('click', () => {
    menu.classList.remove('active');
    burger.style.display = 'block';

});