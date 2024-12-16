const modalOpenButton = document.querySelector('[data-modal-open]');
const modalCloseButton = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.backdrop');

function openModal() {
    backdrop.classList.remove('is__hidden', 'is__closing');
    backdrop.classList.add('is__visible');

    backdrop.addEventListener('animationend', () => {
        backdrop.classList.add('is__active');
    }, { once: true });
}

function closeModal() {
    backdrop.classList.remove('is__active');
    backdrop.classList.add('is__closing');

    backdrop.addEventListener('animationend', () => {
        backdrop.classList.remove('is__visible', 'is__closing');
        backdrop.classList.add('is__hidden');
    }, { once: true });
}

modalOpenButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
