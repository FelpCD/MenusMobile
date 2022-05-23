

let btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(){
    let nav = document.querySelector('.nav-menu');
    nav.classList.toggle('active');
}




//Jquery
let link = $('.nav-links')

link.on('click', marcaAtivo)

function marcaAtivo(){
    link.removeClass("ativo")
    $(this).addClass("ativo")
}
    

