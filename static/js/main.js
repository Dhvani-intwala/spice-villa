
// back to top button
document.addEventListener("DOMContentLoaded", function (event) {

    if (performance.getEntriesByType('navigation')[0].type != 'navigate') {
        if (window.location.hash) {
            history.pushState("", document.title, window.location.pathname);
            window.location = history.state;
            sessionStorage.setItem('pageHasBeenLoaded', 'true');
        }
    }
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
        if ($(".counter").counterUp) {
            $(".counter").counterUp({
                delay: 10,
                time: 1000,
            });
        }
        //preloader
        if ($("#preloader")) {
            $('#preloader').remove();
        }
    });





    // Testimonial slider


    // vars
    'use strict';
    if (window.location.pathname == '') {
        var testim = document.getElementById("Testimonial"),
            testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
            testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
            testimLeftArrow = document.getElementById("left-arrow"),
            testimRightArrow = document.getElementById("right-arrow"),
            testimSpeed = 4500,
            currentSlide = 0,
            currentActive = 0,
            testimTimer,
            touchStartPos,
            touchEndPos,
            touchPosDiff,
            ignoreTouch = 30;
        ;

        window.onload = function () {

            // Testim Script
            function playSlide(slide) {
                for (var i = 0; i < testimDots.length; i++) {
                    testimContent[i].classList.remove("active");
                    testimContent[i].classList.remove("inactive");
                    testimDots[i].classList.remove("active");
                }

                if (slide < 0) {
                    slide = currentSlide = testimContent.length - 1;
                }

                if (slide > testimContent.length - 1) {
                    slide = currentSlide = 0;
                }

                if (currentActive != currentSlide) {
                    testimContent[currentActive].classList.add("inactive");
                }
                testimContent[slide].classList.add("active");
                testimDots[slide].classList.add("active");

                currentActive = currentSlide;

                clearTimeout(testimTimer);
                testimTimer = setTimeout(function () {
                    playSlide(currentSlide += 1);
                }, testimSpeed);
            }

            testimLeftArrow.addEventListener("click", function () {
                playSlide(currentSlide -= 1);
            });

            testimRightArrow.addEventListener("click", function () {
                playSlide(currentSlide += 1);
            });

            for (var l = 0; l < testimDots.length; l++) {
                testimDots[l].addEventListener("click", function () {
                    playSlide(currentSlide = testimDots.indexOf(this));
                });
            }

            playSlide(currentSlide);

            // keyboard shortcuts
            document.addEventListener("keyup", function (e) {
                switch (e.keyCode) {
                    case 37:
                        testimLeftArrow.click();
                        break;

                    case 39:
                        testimRightArrow.click();
                        break;

                    case 39:
                        testimRightArrow.click();
                        break;

                    default:
                        break;
                }
            });

            testim.addEventListener("touchstart", function (e) {
                touchStartPos = e.changedTouches[0].clientX;
            });

            testim.addEventListener("touchend", function (e) {
                touchEndPos = e.changedTouches[0].clientX;

                touchPosDiff = touchStartPos - touchEndPos;

                console.log(touchPosDiff);
                console.log(touchStartPos);
                console.log(touchEndPos);


                if (touchPosDiff > 0 + ignoreTouch) {
                    testimLeftArrow.click();
                } else if (touchPosDiff < 0 - ignoreTouch) {
                    testimRightArrow.click();
                } else {
                    return;
                }

            });
        };
    }

    // setperson for table

    function setPerson() {
        var tableCode = document.getElementById("tableCode").value;
        console.log("here" + tableCode);
        var temp = 0;
        if (tableCode === "A1") {
            temp = "8";
        } else if (tableCode === "A2") {
            temp = "2";
        } else if (tableCode === "B1") {
            temp = "4";
        } else if (tableCode === "B2") {
            temp = "4";
        } else if (tableCode === "C1") {
            temp = "6";
        } else if (tableCode === "C2") {
            temp = "6";
        }
        document.getElementById("tablePersons").value = temp;
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
    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;

        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;

        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    };



    if (window.location.pathname == '/booking/') {
        const datePicker = document.querySelector("#datePicker");
        const startTime = document.querySelector("#startTime");
        const endTime = document.querySelector("#endTime");
        const selectTable = document.getElementById('selectTable');
        ContinueButton = document.getElementById('continue');
        RestartButton = document.getElementById('restart');
        FinishButton = document.getElementById('finish');
        OverviewCollapse = document.getElementById('overviewCollapse');
        OverviewText = document.getElementById('overviewText');

        datePicker.min = new Date().toLocaleDateString('en-ca');

        var currentDay = new Date();
        var dd = String(currentDay.getDate()).padStart(2, '0');
        var MM = String(currentDay.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = currentDay.getFullYear();
        currentDay = yyyy + '-' + MM + '-' + dd;
        datePicker.value = currentDay;


        startTime.addEventListener("change", function (evt) {
            var match = this.value.match(/^(\d{2})/);
            if (match) this.value = match[1] + ":00";
        });

        endTime.addEventListener("change", function (evt) {
            var match = this.value.match(/^(\d{2})/);
            if (match) this.value = match[1] + ":00";
        });

        const isRequired = value => value === '' ? false : true;

        const isBetween = (length, min, max) => length < min || length > max ? false : true;

        const isDateValueValid = (date) => {

            // get input value date 
            var inputDate = new Date(date);
            inputDate.setHours(0, 0, 0, 0);

            // get current day
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            if (inputDate >= today)
                return true;
            else
                return false;
        };

        // --------------------------CHECK IF START TIME IS AFTER CURRENT TIME FOR TODAY BOOKINGS--------------------------
        const isStartTimeTodayValid = (startTime) => {


            // get input value date 
            var inputDate = new Date(datePicker.value);
            inputDate.setHours(0, 0, 0, 0);

            // get current day
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            if (inputDate.getTime() == today.getTime()) {

                // get system local time
                var d = new Date();
                var m = d.getMinutes();
                var h = d.getHours();
                if (h == '0') { h = 24; }

                var currentTime;
                if (h < 10)
                    if (m < 10)
                        currentTime = "0" + h + ":0" + m;
                    else
                        currentTime = "0" + h + ":" + m;
                else
                    if (m < 10)
                        currentTime = h + ":0" + m;
                    else
                        currentTime = h + ":" + m;



                if (startTime <= currentTime)
                    return false;
                else
                    return true;
            }
            else
                return true;
        };
        // --------------------------CHECK IF END TIME IS GREATER THAN START TIME--------------------------
        const isTimeIntervalValid = (startTime, endTime) => {
            if (startTime >= endTime)
                return false;
            else
                return true;
        };

        // --------------------------CHECK IF BOOKING TIME IS GREATER THAN 60 MIN--------------------------
        const isTimeIntervalCorrect = (startTime, endTime) => {
            let startInMinutes = (parseInt(startTime.split(":")[0]) * 60 + parseInt(startTime.split(":")[1]));
            let endInMinutes = (parseInt(endTime.split(":")[0]) * 60 + parseInt(endTime.split(":")[1]));
            let diffInMin = endInMinutes - startInMinutes;
            if (diffInMin < 60)
                return false;
            else
                return true;
        };


        const checkDate = () => {
            let valid = false;

            const date = datePicker.value.trim();

            if (!isRequired(date)) {
                showError(datePicker, "Please choose a date");
            } else if (!isDateValueValid(date)) {
                showError(datePicker, "A date before current day is not valid");
            } else {
                showSuccess(datePicker);
                valid = true;
            }
            return valid;
        };

        // CHECK START TIME AND SET ERROR MESSAGES
        const checkStartTime = () => {
            var currentTime = new Date().toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
            });

            let valid = false;

            const time = startTime.value.trim();

            if (!isRequired(time)) {
                showError(startTime, "Please choose a start time");
            } else if (!isBetween(time, "09:00", "23:00")) {
                showError(startTime, "Choose a time between 09:00 and 23:00");
            } else if (!isStartTimeTodayValid(time)) {
                showError(startTime, "Please choose a time after " + currentTime);
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
                showError(endTime, "Please choose an end time");
            } else if (!isBetween(end, "09:00", "23:00")) {
                showError(endTime, "Choose a time between 09:00 and 23:00");
            } else if (!isTimeIntervalValid(start, end)) {
                showError(endTime, "End hour must be grater than start hour");
            } else if (!isTimeIntervalCorrect(start, end)) {
                showError(endTime, "Booking must be for at least an hour");
            } else {
                showSuccess(endTime);
                valid = true;
            }
            return valid;
        };

        findTableButton = document.getElementById('FindTable');
        findTableButton.addEventListener("click", () => {
            console.log('findtable');
            let isDateValid = checkDate();
            let isStartTimeValid = checkStartTime();
            let isEndTimeValid = checkEndTime();

            if (isDateValid && isStartTimeValid && isEndTimeValid) {
                findTableButton.style.display = 'none';
                selectTable.style.display = 'block';
                window.location = '/booking/#selectTable';

            }


        });

        ContinueButton.addEventListener("click", () => {
            flexButtons.style.display = 'none';
            bookingContactCollapse.style.display = 'block';

        });

        RestartButton.addEventListener("click", () => {
            window.location = '/booking';
        });

        FinishButton.addEventListener("click", () => {
            finish.style.display = 'none';
            OverviewCollapse.style.display = 'block';
            const start = startTime.value.trim();
            const end = endTime.value.trim();
            const date = datePicker.value.trim();
            const numberOfPersons = document.getElementById("tablePersons").value;
            OverviewText.textContent = "You have booked Table on " + date + ", starts on " + start + " and ends on " + end + " for " + numberOfPersons + " persons.";
            OverviewText.style.color = 'white';
        });






    }

});