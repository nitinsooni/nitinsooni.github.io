// Navbar links gets in focus according to which section is in view
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

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
let btnTop = document.getElementById('scroll-to-top');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
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
    const cardContainer = document.querySelector('.card-container');
    const buttons = document.querySelectorAll('.button');

    cardContainer.addEventListener('scroll', function () {
        const scrollLeft = cardContainer.scrollLeft;
        const cardWidth = document.querySelector('.card').offsetWidth;
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

// Click nav button to scroll cards
function scrollToCard(index) {
    const cardContainer = document.querySelector('.card-container');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const marginBetweenItems = parseInt(getComputedStyle(cardContainer).gap);

    cardContainer.scrollTo({ left: index * (cardWidth + marginBetweenItems) });
}


// Swap cards when user click non-front card
const one = document.querySelector('.one');
const two = document.querySelector('.two');

one.addEventListener('click', function() {
    if (!this.classList.contains('front')) {
        this.classList.add('front');
        two.classList.remove('front');
    }
});

two.addEventListener('click', function() {
    if (!this.classList.contains('front')) {
        this.classList.add('front');
        one.classList.remove('front');
    }
});
