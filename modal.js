const modalOpenButton = document.querySelector('[data-modal-open]');
const modalCloseButton = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.backdrop');

function openModal() {
    backdrop.classList.remove('is-hidden', 'is-closing');
    backdrop.classList.add('is-visible');

    backdrop.addEventListener('animationend', () => {
        backdrop.classList.add('is-active'); 
    }, { once: true });
}

function closeModal() {
    backdrop.classList.remove('is-active');
    backdrop.classList.add('is-closing');

    backdrop.addEventListener('animationend', () => {
        backdrop.classList.remove('is-visible', 'is-closing');
        backdrop.classList.add('is-hidden');
    }, { once: true });
}

modalOpenButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
