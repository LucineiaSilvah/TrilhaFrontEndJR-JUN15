const menuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu__lista');
const mode = document.querySelector('.mode');
const modeIcon = document.querySelector('.fa-toggle-off');
const sessoes = document.querySelectorAll('.darkMode');
/* funcao abrir e fechar menu */
menuIcon.addEventListener('click',()=>{
menu.classList.toggle('open');
});
/* funcao modo dark ou ligth */

mode.addEventListener('click', ()=>{
sessoes.forEach(sessao =>{
    sessao.classList.toggle('whiteMode');
    
})
modeIcon.classList.toggle(`fa-toggle-on`)
 
})
