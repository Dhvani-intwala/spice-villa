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

    console.log('here');
}

// document.getElementById('startersAll').addEventListener('click', () => {
//     document.getElementById('allfood').className = 'd-none';
//     document.getElementById('starter').classList.remove("d-none");
//     console.log('here');
// });