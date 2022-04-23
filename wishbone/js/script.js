const hamburger = document.querySelector('.hamburger'),
    nav = document.querySelector('.header__nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('header__nav_active');
    });