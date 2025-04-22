// Navbar Fix
window.onscroll = function (){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav){
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMeneu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active');
    navMeneu.classList.toggle('hidden');
});