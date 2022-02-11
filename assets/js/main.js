// slider
$('.slider .owl-carousel').owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    stagePadding: 0,
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    nav: true,
    dots: false,
    navText: ['<button type="button" class="btn btn-slider btn-slider-prev"> <i class="far fa-chevron-left"></i> </button>', '<button type="button" class="btn btn-slider btn-slider-next"><i class="far fa-chevron-right"></i> </button>'],
})

// datepicker

// $("#check-in").datepicker({
//     nextText: "NEXT",
//     prevText: "PREV",
//     changeMonth: false,
//     numberOfMonths: 1,
//     onClose: function() {  
//         console.log('hello')
//      }
//  });

// header navbar

$('.header-content-icon').click(function () {
    $('.navbar-menu').addClass('active');
})
$('.navbar-menu-close').click(function () {
    $('.navbar-menu').removeClass('active');

})

// page rooms toggle slide 


$(document).ready(function () {
    $('.checkbox-list').slideUp()
    $('.sidebar-service .sidebar-service-option ').click(function () {
        $(this).next("").slideToggle("slow");
        $(this).prev("").slideUp("slow");
        $(this).toggleClass('active');
    })


    // page gallery slide

    $('.slide-list-mode').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-list-nav',
        speed: 300,
    });

    $('.slide-list-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slide-list-mode',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});


// filter rooms list 

$('.rooms-filter-display .icon').click(function () {
    $('.rooms-filter-display .icon').removeClass('active')
    $(this).addClass('active')
})

$('.rooms-filter-display .icon-list').click(function () {
    $('.content .item').removeClass('col-lg-6')
    $('.content .item').addClass('col-lg-12')
})

$('.rooms-filter-display .icon-grid').click(function () {
    $('.content .item').removeClass('col-lg-12')
    $('.content .item').addClass('col-lg-6')
})




// gallery slide 
$('.gallery-slide-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    draggable: false,
    asNavFor: '.gallery-slide-nav'
})

$('.gallery-slide-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.gallery-slide-list',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    draggable: false,
})