// Animação de bolhas no fundo
// Reutilizando o mesmo padrão do quadro_deploy.js
document.addEventListener('DOMContentLoaded', function () {
    const numBubbles = 18;
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '0';
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';
    container.id = 'bubble-bg';

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        const size = Math.random() * 60 + 30;
        bubble.style.position = 'absolute';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.bottom = '-' + size + 'px';
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.borderRadius = '50%';
        bubble.style.background = `rgba(99,102,241,${Math.random() * 0.18 + 0.08})`;
        bubble.style.boxShadow = `0 0 24px 8px rgba(99,102,241,0.08)`;
        bubble.style.animation = `bubbleUp ${6 + Math.random() * 10}s linear infinite`;
        bubble.style.animationDelay = `${Math.random() * 8}s`;
        container.appendChild(bubble);
    }
    document.body.appendChild(container);
});
