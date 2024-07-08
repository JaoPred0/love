document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('change-message');
    const message = document.querySelector('.container p');
    const messages = [
        'Você é a razão do meu sorriso e a inspiração do meu coração. Te amo mais do que palavras podem expressar.',
        'Cada momento com você é uma preciosidade. Te amo infinitamente.',
        'Seu amor me completa e me faz feliz todos os dias. Te amo!',
        'A vida ao seu lado é simplesmente maravilhosa. Te amo muito!',
        'Você é meu mundo, meu tudo. Te amo eternamente!'
    ];
    let currentMessageIndex = 0;

    button.addEventListener('click', function () {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        message.textContent = messages[currentMessageIndex];
    });
});
