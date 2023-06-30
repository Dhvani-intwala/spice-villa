// (function () {
//     "use strict";

//     /**
//      * Easy selector helper function
//      */
//     new window().init();

//     // couter-up

//     $('#temp').counterUp({
//         delay: 10,
//         time: 2000
//     });

// })(jQuery);

// menu functions

// (function () {
//     // Load the script
//     const script = document.createElement("script");
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
//     script.type = 'text/javascript';
//     script.addEventListener('load', () => {
//         console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
//         // use jQuery below
//     });
//     document.head.appendChild(script);
// })();
jQuery(document).ready(function ($) {
    if ($('.counter').counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000,
        });
    }
});


function startersAll() {
    document.getElementById('allfood').className = 'd-none';
    document.getElementById('starter').classList.remove("d-none");
}

function saladsAll() {
    document.getElementById('allfood').className = 'd-none';
    document.getElementById('starter').className = 'd-none';
    document.getElementById('salads').classList.remove("d-none");
}


let slideIndex = 0;
showSlides();
function showSlides() {
    let i = 1;
    let slides = document.getElementsByClassName('item');
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.remove("animate__slideOutLeft");
  slides[slideIndex-1].classList.add("animate_slideInRight");
  slides[slideIndex].classList.remove('animate_slideInRight');
  slideIndex[slideIndex].classlist.add('animate_slideOutLeft');

 

  setTimeout(showSlides, 8000);
}
