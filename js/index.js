/*
    Author: Nitin Soni
    Website: nitinsooni.github.io
    © Nitin Soni. All rights reserved.
    This code is proprietary and confidential. Any unauthorized use or distribution is strictly prohibited.
*/
// Trigger animation when user scrolled to paragraphs
const paragraphs = document.querySelectorAll('.paragraph');
const paraObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    {
        root: null,
        rootMargin: '-25% 0px',
        threshold: 0,
    }
);

paragraphs.forEach((el) => paraObserver.observe(el));

// Navbar links gets in focus according to which section is in view
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .nav-l ul .nav-link a');

    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('gold-text');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('gold-text');
        }
    });
});

// Open default email client with pre-filled message of input tag
function sendEmail() {
    const message = document.querySelector('#home .contact-box .contact-bar .text-field').value;
    const mailtoLink = `mailto:nitinsoooni@gmail.com?body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}

// 1st nav button of portfolio card container gets in focus on site load
window.onload = function () {
    document.getElementById('nav-button1').classList.add('nav-button-focus');
};

// Portfolio card button gets in focus with scroll
document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('#portfolio .table .table-l .card-container');
    const buttons = document.querySelectorAll('#portfolio .table .table-l .nav-button-container .nav-button');

    cardContainer.addEventListener('scroll', function () {
        const scrollLeft = cardContainer.scrollLeft;
        const cardWidth = document.querySelector('#portfolio .table .table-l .card-container .card').offsetWidth;
        const marginBetweenItems = parseInt(getComputedStyle(cardContainer).gap);
        const currentIndex = Math.floor((scrollLeft + marginBetweenItems * 4) / (cardWidth + marginBetweenItems));

        document.getElementById('nav-button1').classList.remove('nav-button-focus');
        document.getElementById('nav-button2').classList.remove('nav-button-focus');
        document.getElementById('nav-button3').classList.remove('nav-button-focus');

        if (buttons[currentIndex]) {
            buttons[currentIndex].classList.add('nav-button-focus');
        }
    });
});

// Click nav button to scroll cards in portfolio
function scrollToCard(index) {
    const cardContainer = document.querySelector('#portfolio .table .table-l .card-container');
    const cardWidth = document.querySelector('#portfolio .table .table-l .card-container .card').offsetWidth;
    const marginBetweenItems = parseInt(getComputedStyle(cardContainer).gap);

    cardContainer.scrollTo({ left: index * (cardWidth + marginBetweenItems) });
}

// Swap cards when user click non-front card
const cardOne = document.querySelector('#contact .table .table-r .container .card.one');
const cardTwo = document.querySelector('#contact .table .table-r .container .card.two');
let frontCard = cardOne;

cardOne.addEventListener('click', function () {
    if (frontCard !== cardOne) {
        swapCards(cardOne);
    }
});

cardTwo.addEventListener('click', function () {
    if (frontCard !== cardTwo) {
        swapCards(cardTwo);
    }
});

function swapCards(selectedCard) {
    selectedCard.classList.add('front');
    frontCard.classList.remove('front');
    frontCard = selectedCard;
}

// Swap cards when user click swap-card button
function swapButton() {
    event.stopPropagation();
    swapCards(frontCard === cardOne ? cardTwo : cardOne);
}

// Swap cards when user horizontal swipe on front card
let touchStartX = 0;
let touchEndX = 0;
let touchStartTime = 0;
let touchEndTime = 0;
const minSwipeDistance = 100; // minimum swipe distance in pixels
const maxSwipeTime = 300; // maximum time for a swipe (in milliseconds)

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
    const timeTaken = touchEndTime - touchStartTime;

    if (Math.abs(distance) > minSwipeDistance && timeTaken < maxSwipeTime) {
        swapCards(frontCard === cardOne ? cardTwo : cardOne);
    }
}
