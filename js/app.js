function bindScrollHandler() {
    window.addEventListener('scroll', toggleNav);
}

function toggleNav() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 210) {
        nav.classList.remove('d-none');
        nav.classList.replace('nav-hide', 'nav-show');
    } else {
        nav.classList.replace('nav-show', 'nav-hide');
    }
}

function _init() {
    bindScrollHandler();
}

_init();