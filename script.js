document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.step-toggle');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Alterna a classe 'active' no botão e no conteúdo
            this.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
});