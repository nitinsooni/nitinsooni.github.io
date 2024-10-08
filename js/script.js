// Disable preloader screen when website fully loaded with fade-out animation and then start website animations
const loadingScreen = document.querySelector('.preloader');

window.addEventListener('load', function() {
    loadingScreen.classList.add('preloader-hide');

    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 250);

    document.querySelector('#home .title svg path').classList.add('stroke-draw');
    document.getElementById('home').classList.add('gradient-effect');
});

// Navbar links gets in focus according to which section is in view
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .nav-l ul .nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Show the scroll-to-top button when user scrolls down 20px
let btnTop = document.querySelector('#home .scroll-to-top');
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

// 1st nav button of portfolio card container gets in focus on site load
window.onload = function(){
    document.getElementById('button1').classList.add('button-focus');
}

// Portfolio card button gets in focus with scroll
document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('#portfolio .table .table-l .scroll-container .card-container');
    const buttons = document.querySelectorAll('#portfolio .table .table-l .nav-buttons .button');

    cardContainer.addEventListener('scroll', function () {
        const scrollLeft = cardContainer.scrollLeft;
        const cardWidth = document.querySelector('#portfolio .table .table-l .scroll-container .card-container .card').offsetWidth;
        const marginBetweenItems = parseInt(getComputedStyle(cardContainer).gap);
        const currentIndex = Math.floor((scrollLeft + marginBetweenItems * 4) / (cardWidth + marginBetweenItems));

        document.getElementById('button1').classList.remove('button-focus');
        document.getElementById('button2').classList.remove('button-focus');
        document.getElementById('button3').classList.remove('button-focus');

        if (buttons[currentIndex]) {
            buttons[currentIndex].classList.add('button-focus');
        }
    });
});

// Click nav button to scroll cards in portfolio
function scrollToCard(index) {
    const cardContainer = document.querySelector('#portfolio .table .table-l .scroll-container .card-container');
    const cardWidth = document.querySelector('#portfolio .table .table-l .scroll-container .card-container .card').offsetWidth;
    const marginBetweenItems = parseInt(getComputedStyle(cardContainer).gap);

    cardContainer.scrollTo({ left: index * (cardWidth + marginBetweenItems) });
}

// Swap cards when user click non-front card
const cardOne = document.querySelector('#contact .table .table-r .container .card.one');
const cardTwo = document.querySelector('#contact .table .table-r .container .card.two');
let frontCard = cardOne;

cardOne.addEventListener('click', function() {
    if (frontCard !== cardOne) {
        swapCards(cardOne);
    }
});

cardTwo.addEventListener('click', function() {
    if (frontCard !== cardTwo) {
        swapCards(cardTwo);
    }
});

function swapCards(selectedCard) {
    selectedCard.classList.add('front');
    frontCard.classList.remove('front');
    frontCard = selectedCard;
}

// Swap cards when user horizontal swipe on front card
let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 100;   // minimum swipe distance in pixels
const maxSwipeTime = 300;   // maximum time for a swipe (in milliseconds)

cardOne.addEventListener('touchstart', (event) => {
    if (frontCard === cardOne) {
        touchStartX = event.changedTouches[0].screenX;
        touchStartTime = new Date().getTime();
    }
});

cardOne.addEventListener('touchend', (event) => {
    if (frontCard === cardOne) {
        touchEndX = event.changedTouches[0].screenX;
        touchEndTime = new Date().getTime();
        handleSwipe();
    }
});

cardTwo.addEventListener('touchstart', (event) => {
    if (frontCard === cardTwo) {
        touchStartX = event.changedTouches[0].screenX;
        touchStartTime = new Date().getTime();
    }
});

cardTwo.addEventListener('touchend', (event) => {
    if (frontCard === cardTwo) {
        touchEndX = event.changedTouches[0].screenX;
        touchEndTime = new Date().getTime();
        handleSwipe();
    }
});

function handleSwipe() {
    const distance = touchEndX - touchStartX;
    const timeTaken = touchEndTime  - touchStartTime;

    if (Math.abs(distance) > minSwipeDistance && timeTaken < maxSwipeTime) {
        swapCards(frontCard === cardOne ? cardTwo : cardOne);
    }
}

// Dynamically change year in copyright text
document.querySelector('footer .container .wrapper-l p .year').textContent = new Date().getFullYear();
