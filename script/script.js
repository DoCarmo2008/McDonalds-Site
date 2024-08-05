
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
    const mais4 = document.querySelector('.mais-i4');
    const mais5 = document.querySelector('.mais-i5');
    const mais6 = document.querySelector('.mais-i6');
    const quemSomos = document.querySelector('.quemsomos');
    const quemSomosList = document.querySelector('.quemsomos-list');
    const familia = document.querySelector('.familia');
    const familiaList = document.querySelector('.familia-list');
    const promocoes = document.querySelector('.promocoes');
    const promocoesList = document.querySelector('.promocoes-list');
    const paraVoceList = document.querySelector('.pravc-list');
    const paraVoce = document.querySelector('.mcpravc');
    const mcDiaList = document.querySelector('.mcdia-list');
    const mcDia = document.querySelector('.mcdia');


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
    
    promocoes.addEventListener('click', () => {
        if(promocoesList.style.display == 'none') {
            promocoesList.style.display = 'flex';
            mais4.classList.add('bi-arrow-left');
            mais4.classList.remove('bi-plus');
        } else {
            promocoesList.style.display = 'none';
            mais4.classList.add('bi-plus');
            mais4.classList.remove('bi-arrow-left');
        }
    });

    paraVoce.addEventListener('click', () => {
        if(paraVoceList.style.display == 'none') {
            paraVoceList.style.display = 'flex';
            mais5.classList.add('bi-arrow-left');
            mais5.classList.remove('bi-plus');
        } else {
            paraVoceList.style.display = 'none';
            mais5.classList.add('bi-plus');
            mais5.classList.remove('bi-arrow-left');
        }
    });

    mcDia.addEventListener('click', () => {
        if(mcDiaList.style.display == 'none') {
            mcDiaList.style.display = 'flex';
            mais6.classList.add('bi-arrow-left');
            mais6.classList.remove('bi-plus');
        } else {
            mcDiaList.style.display = 'none';
            mais6.classList.add('bi-plus');
            mais6.classList.remove('bi-arrow-left');
        }
    })
});




