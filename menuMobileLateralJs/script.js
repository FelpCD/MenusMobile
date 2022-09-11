
var subMenu = document.querySelector('.sub-produtos')

subMenu.addEventListener('click', addSub)

function addSub(){
    var sub = document.querySelector('.sub-produtos')
    sub.classList.toggle('active')
}

/* Lógica: 
Quando eu clicar em Produtos ele recebe a class active, e quando estiver active ele exibe o subMenu */


/* ============================================= */

let btnMobile = document.querySelector('.btn-mobile')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    let nav = document.querySelector('.nav-menu')
    nav.classList.toggle('ativo')
}