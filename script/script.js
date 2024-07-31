

/* Cheddar animation (Footer) */
document.addEventListener('DOMContentLoaded', function(){
    const cheddar = document.querySelector('.molho-derramado');
    const lista = document.querySelector('.link-title');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                cheddar.classList.add('derramando');
                cheddar.classList.remove('sem-derramar');
                cheddar.style.transition = '1s';  
            }
        });
    });
    observer.observe(lista);
});