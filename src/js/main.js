$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000

    });
});

$('#demoDefaultSelection').ddslick({
    defaultSelectedIndex:2
});


$('.mobile-btn').on('click', function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__nav').toggleClass('show-menu');
    $('.header__nav-link').toggleClass('show-link');
});


$('.menu a nav').on('click', function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__nav').removeClass('show-menu');
    $('.header__nav-link').removeClass('show-link');
});
