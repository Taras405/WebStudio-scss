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

(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();
