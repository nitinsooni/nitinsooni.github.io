/*
    Author: Nitin Soni
    Website: nitinsooni.github.io
    © Nitin Soni. All rights reserved.
    This code is proprietary and confidential. Any unauthorized use or distribution is strictly prohibited.
*/

// Disable preloader screen when website fully loaded with fade-out animation and then start website animations
document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.querySelector('.preloader');

    document.fonts.ready.then(function () {
        preloader.classList.add('preloader-hide');
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 350);

        document.body.classList.remove('no-scroll-touch');

        if (document.body.classList.contains('index-page')) {
            document.querySelector('#home .title svg path').classList.add('stroke-draw');
            document.getElementById('home').classList.add('gradient-effect');
        }
    });
});

// Trigger animation when user scrolled to gradient-ruler
const gradientRuler = document.querySelectorAll('.gradient-ruler');
const rulerObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    {
        root: null,
        rootMargin: '-15% 0px',
        threshold: 0,
    }
);

gradientRuler.forEach((el) => rulerObserver.observe(el));

// Toggle hamburger activation and nav menu display when user click hamburger
const hamburger = document.querySelector('nav .nav-l .hamburger');
const navMenu = document.querySelector('nav .nav-overlay');

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Disable hamburger and nav menu when user click nav menu's link
const navLink = document.querySelectorAll('nav .nav-overlay .nav-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

window.location.hostname !== atob('bml0aW5zb29uaS5naXRodWIuaW8=') && (document.body.innerHTML = '');

// Show the scroll-to-top button when user scrolls down 300px
let btnTop = document.querySelector('.scroll-to-top');

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.classList.add('scroll-to-top-show');
    } else {
        btnTop.classList.remove('scroll-to-top-show');
    }
};

// Scroll to the top of document when the user clicks scroll-to-top button
function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, ie and opera
}

// Dynamically change year in copyright text
document.querySelector('footer .container .wrapper-l p .year').textContent = new Date().getFullYear();

// Print text on console
console.log('%cCrafted & Coded by Nitin Soni', 'color: white; background: black; padding: 5px 20px');
