/* Preloader */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* Team */

/*$(document).ready(function () {
    $('.owl-carousal').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class ="fa fa-angle-right"></i>']
    });
});*/


$(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class ="fa fa-angle-right"></i>']
    });
});




$(function () {
    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

$(window).on('load', function () {

    var addressString = '203 Suan Siam Rd, Khan Na Yao, Bangkok 10230, Thailand';
    var myLating = {
        lat: 13.798400,
        lng: 100.689060
    };

    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 11,
        center: myLating
    });

});
