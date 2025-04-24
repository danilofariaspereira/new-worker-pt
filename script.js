document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.language-switcher button');
    const langElements = document.querySelectorAll('[class^="lang-"]'); // Seleciona elementos com classes que começam com "lang-"

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');

            // Desativa todos os botões e esconde todos os textos
            langButtons.forEach(btn => btn.classList.remove('active'));
            langElements.forEach(el => el.classList.add('hidden'));

            // Ativa o botão selecionado e mostra os textos no idioma correspondente
            this.classList.add('active');
            document.querySelectorAll(`.lang-${selectedLang}`).forEach(el => el.classList.remove('hidden'));

            // Atualiza o atributo lang do HTML para acessibilidade (opcional)
            document.documentElement.lang = selectedLang;
        });
    });
});