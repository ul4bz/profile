document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey || e.metaKey) {
        if (e.shiftKey) {
            if (['KeyI', 'KeyC', 'KeyJ'].includes(e.code)) {
                e.preventDefault();
                return false;
            }
        }
        
        if (['KeyU', 'KeyS', 'KeyP'].includes(e.code)) {
            e.preventDefault();
            return false;
        }
    }
});

document.documentElement.classList.replace('no-js', 'js');

const card = document.querySelector('.card');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (card && !reduceMotion) {
    const maxTilt = 6;

    card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `rotateY(${px * maxTilt}deg) rotateX(${-py * maxTilt}deg)`;
    });

    card.addEventListener('pointerleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
}
