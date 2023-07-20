
// back to top button
window.onscroll = function () {
    showBackToTopButton();
};

function showBackToTopButton() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Function to scroll back to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


jQuery(document).ready(function ($) {
    if ($('.counter').counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000,
        });
    }


});

let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName('item');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.remove("animate__slideOutLeft");
    slides[slideIndex - 1].classList.add("animate_slideInRight");
    slides[slideIndex].classList.remove('animate_slideInRight');
    slides[slideIndex].classList.add('animate_slideOutLeft');
    setTimeout(showSlides, 5000);
}

// sticky  bar

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var stickyNav = document.querySelector('.sticky-nav');

    if (scrollTop > 100) {
        stickyNav.classList.add('hidden');
    } else {
        stickyNav.classList.remove('hidden');
    }
});


function setPerson() {
    var tableCode = document.getElementById('tableCode').value;
    console.log('here' + tableCode);
    var temp = 0;
    if (tableCode === 'A1') {
        temp = '2';
    }
    else if (tableCode === 'A2') {
        temp = '2';
    }
    else if (tableCode === 'B1') {
        temp = '4';
    }
    else if (tableCode === 'B2') {
        temp = '4';
    }
    else if (tableCode === 'C1') {
        temp = '6';
    }
    else if (tableCode === 'C2') {
        temp = '6';
    }
    document.getElementById('tablePersons').value = temp;
}


// Add active class to the current link
var header = document.getElementById("navbarSupportedContent");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//preloader

let preloader = select('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove();
    });
}

// form validation 
