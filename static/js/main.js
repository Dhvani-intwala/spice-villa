(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    new window().init();

    // couter-up

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

})(jQuery);