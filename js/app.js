function bindScrollHandler() {
    window.addEventListener('scroll', toggleNav);
}

function toggleNav() {
    const nav = document.querySelector('nav');
    const intro = document.querySelector('.intro');
    const profile = document.querySelector('.profile');
    if (window.scrollY > (intro.clientHeight - profile.clientHeight)) {
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