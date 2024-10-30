document.addEventListener('DOMContentLoaded', function() {
    const buttons = window.document.querySelectorAll('[data-tab-button]');
    const header = document.querySelector('.header');

    for (let c = 0; c < buttons.length; c++) {
        buttons[c].addEventListener('click', function(botao) {
            const button = botao.target.dataset.tabButton;
            const paginaAberta = window.document.querySelector(`[data-tab-menu="${button}"]`);
            tabRemove();
            paginaAberta.classList.add('tab__menu--is-open');
            botaoRemove();
            botao.target.classList.add('personagens__buttons--is-open');
        });
    }

    window.addEventListener('scroll', function() {
        const scroll = window.scrollY;
        if (scroll < 650) {
            header.classList.add('header__hidden');
        }else{
            header.classList.remove('header__hidden');
        }
    });
});

function tabRemove() {
    const paginaAberta = window.document.querySelectorAll('[data-tab-menu]');
    for (let c = 0; c < paginaAberta.length; c++) {
        paginaAberta[c].classList.remove('tab__menu--is-open');
    }
}

function botaoRemove() {
    const botaoAberto = window.document.querySelectorAll('[data-tab-button]');
    for (let c = 0; c < botaoAberto.length; c++) {
        botaoAberto[c].classList.remove('personagens__buttons--is-open');
    }
}
