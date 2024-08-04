
document.addEventListener('DOMContentLoaded', function () {
    const cheddar = document.querySelector('.molho-derramado');
    const lista = document.querySelector('.link-title');
    const menu = document.querySelector('.menu-i');
    const sideBar = document.querySelector('.sidebar');
    const closeSidebar = document.querySelector('.close-i');
    const cardapioList = document.querySelector('.cardapio-list');
    const cardapio = document.querySelector('.cardapio')
    const mais = document.querySelector('.mais-i');
    const mais2 = document.querySelector('.mais-i2');
    const mais3 = document.querySelector('.mais-i3');
    const quemSomos = document.querySelector('.quemsomos');
    const quemSomosList = document.querySelector('.quemsomos-list');
    const familia = document.querySelector('.familia');
    const familiaList = document.querySelector('.familia-list');


    //Cheddar Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cheddar.classList.add('derramando');
                cheddar.classList.remove('sem-derramar');
                cheddar.style.transition = '1s';
            }
        });
    });
    observer.observe(lista);

    /* Resposivity scripts */

    menu.addEventListener('click', () => {
        sideBar.style.display = 'flex';
    });

    closeSidebar.addEventListener('click', () => {
        sideBar.style.display = 'none';
    });

    cardapio.addEventListener('click', () => {
        if (cardapioList.style.display == 'none') {
            cardapioList.style.display = 'flex';
            mais.classList.remove('bi-plus');
            mais.classList.add('bi-arrow-left');
        } else {
            cardapioList.style.display = 'none';
            mais.classList.remove('bi-arrow-left');
            mais.classList.add('bi-plus');
        }
    });


    quemSomos.addEventListener('click', () => {
        if(quemSomosList.style.display == 'none') {
            quemSomosList.style.display = 'flex';
            mais2.classList.remove('bi-plus');
            mais2.classList.add('bi-arrow-left');
        } else {
            quemSomosList.style.display = 'none';
            mais2.classList.remove('bi-arrow-left');
            mais2.classList.add('bi-plus');
        } 
    });

    familia.addEventListener('click', () => {
        if(familiaList.style.display == 'none') {
            familiaList.style.display = 'flex';
            mais3.classList.add('bi-arrow-left');
            mais3.classList.remove('bi-plus');
        } else {
            familiaList.style.display = 'none';
            mais3.classList.add('bi-plus');
            mais3.classList.remove('bi-arrow-left');
        }
    });
    

});




