// Disable preloader screen when website fully loaded with fade-out animation and then start website animations
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add('preloader-hide');

    setTimeout(function() {
        preloader.style.display = 'none';
    }, 250);

    document.body.classList.remove('no-scroll-touch');

    if (document.body.classList.contains('index-page')) {
        document.querySelector('#home .title svg path').classList.add('stroke-draw');
        document.getElementById('home').classList.add('gradient-effect');
    }
});

// Toggle hamburger activation and nav menu display when user click hamburger
const hamburger = document.querySelector('nav .nav-l .hamburger');
const navMenu = document.querySelector('nav .nav-overlay');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll-touch');
}

// Disable hamburger and nav menu when user click nav menu's link
const navLink = document.querySelectorAll('nav .nav-overlay .nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.toggle('no-scroll-touch');
}

// Show the scroll-to-top button when user scrolls down 20px
let btnTop = document.querySelector('.scroll-to-top');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.classList.add('scroll-to-top-show');
    } else {
        btnTop.classList.remove('scroll-to-top-show');
    }
}

// Scroll to the top of document when the user clicks scroll-to-top button
function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, ie and opera
}

// Dynamically change year in copyright text
document.querySelector('footer .container .wrapper-l p .year').textContent = new Date().getFullYear();
