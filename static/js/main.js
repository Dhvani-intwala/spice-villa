
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
function allFood() {
    document.getElementById('starter').className = 'd-none';
    document.getElementById('allfood').classList.remove("d-none");
    document.getElementById('salads').className = 'd-none';
    document.getElementById('desserts').className = 'd-none';
    document.getElementById('specialty').className = 'd-none';
}


function startersAll() {
    document.getElementById('allfood').className = 'd-none';
    document.getElementById('starter').classList.remove("d-none");
    document.getElementById('salads').className = 'd-none';
    document.getElementById('desserts').className = 'd-none';
    document.getElementById('specialty').className = 'd-none';
}

function saladsAll() {
    document.getElementById('allfood').className = 'd-none';
    document.getElementById('starter').className = 'd-none';
    document.getElementById('salads').classList.remove("d-none");
    document.getElementById('desserts').className = 'd-none';
    document.getElementById('specialty').className = 'd-none';
}

function dessertAll() {
    document.getElementById('allfood').className = 'd-none';
    document.getElementById('desserts').classList.remove("d-none");
    document.getElementById('starter').className = 'd-none';
    document.getElementById('salads').className = 'd-none';
    document.getElementById('specialty').className = 'd-none';
}

function specialtyAll() {
    document.getElementById('allfood').className = 'd-none';
    document.getElementById('specialty').classList.remove("d-none");
    document.getElementById('salads').className = 'd-none';
    document.getElementById('desserts').className = 'd-none';
    document.getElementById('starter').className = 'd-none';
}

// testimonial slider 

let slideIndex = 0;
showSlides();
function showSlides() {
    let i = 1;
    let slides = document.getElementsByClassName('item');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.remove("animate__slideOutLeft");
    slides[slideIndex - 1].classList.add("animate_slideInRight");
    slides[slideIndex].classList.remove('animate_slideInRight');
    slideIndex[slideIndex].classlist.add('animate_slideOutLeft');



    setTimeout(showSlides, 8000);
}

// $(document).ready(function(){
//   $('.testimonial-slider').slick({
//     dots: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   });
// });
