// Criando a função de menu sanduiche, usando o toggle para menu mobile .(toggle) - adicine caso não tenha e remova caso tenha. 



let btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', toggleMenu); // Evento de click para o botão sanduiche, que ao ser clicado ativa a segunte função de exibição dos links do menu.


 // o que vai ocorrer dentro dessa função? a navegação é selecionada quando o evento de click acontece. 
function toggleMenu(){
    let nav = document.getElementById('nav');
    nav.classList.toggle('active')
}