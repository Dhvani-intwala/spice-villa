
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

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
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
        temp = '3';
    }
    else if (tableCode === 'A3') {
        temp = '4';
    }
    else if (tableCode === 'B1') {
        temp = '5';
    }
    else if (tableCode === 'B2') {
        temp = '6';
    }
    else if (tableCode === 'B3') {
        temp = '7';
    }
    document.getElementById('tablePersons').value = temp;
}
