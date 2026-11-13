document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animação de entrada das seções ao rolar a página
    const cartoes = document.querySelectorAll('.card-futuro');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                // Adiciona a classe que dispara a transição rápida
                entrada.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.2 // Dispara quando 20% do cartão aparece na tela
    });

    cartoes.forEach((cartao) => {
        observador.observe(cartao);
    });

    // 2. Barra de progresso/velocidade no topo da tela
    const barraProgresso = document.getElementById('barraProgresso');

    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollTop;
        const alturaPagina = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Calcula a porcentagem de rolagem
        const porcentagem = (scrollTotal / alturaPagina) * 100;
        
        barraProgresso.style.width = porcentagem + '%';
    });
});