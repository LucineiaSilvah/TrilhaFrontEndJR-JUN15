const menuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu__lista');
menuIcon.addEventListener('click',()=>{
menu.classList.toggle('menu__close');
});