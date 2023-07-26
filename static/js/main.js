
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

// testimonial 

function scurrentSlide() {
    var button = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.color = "orange";
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

// Image slider

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}



// form validation 

const datePicker = document.querySelector("#datePicker");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");

const checkDate = () => {

    let valid = false;

    const date = datePicker.value.trim();

    if (!isRequired(date)) {
        showError(datePicker, 'Please choose a date');
    } else if (!isDateValueValid(date)) {
        showError(datePicker, 'A date before current day is not valid');
    } else {
        showSuccess(datePicker);
        valid = true;
    }
    return valid;
};

// CHECK START TIME AND SET ERROR MESSAGES
const checkStartTime = () => {

    var currentTime = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

    let valid = false;

    const time = startTime.value.trim();

    if (!isRequired(time)) {
        showError(startTime, 'Please choose a start time');
    } else if (!isBetween(time, "09:00", "23:00")) {
        showError(startTime, 'Choose a time between 09:00 and 23:00');
    } else if (!isStartTimeTodayValid(time)) {
        showError(startTime, 'Please choose a time after ' + currentTime);
    } else {
        showSuccess(startTime);
        valid = true;
    }
    return valid;
};

// CHECK END TIME AND SET ERROR MESSAGES;
const checkEndTime = () => {

    let valid = false;

    const start = startTime.value.trim();
    const end = endTime.value.trim();

    if (!isRequired(end)) {
        showError(endTime, 'Please choose an end time');
    } else if (!isBetween(end, "09:00", "23:00")) {
        showError(endTime, 'Choose a time between 09:00 and 23:00');
    } else if (!isTimeIntervalValid(start, end)) {
        showError(endTime, 'End hour must be grater than start hour');
    } else if (!isTimeIntervalCorrect(start, end)) {
        showError(endTime, 'Booking must be for at least an hour');
    } else {
        showSuccess(endTime);
        valid = true;
    }
    return valid;
}; 
