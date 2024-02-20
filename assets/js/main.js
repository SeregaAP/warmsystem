$(document).ready(function(){
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        infinite: true,
        pauseOnHover: false,
        prevArrow: $('.btn-hero-sl_next'),
        nextArrow: $('.btn-hero-sl_prev'),
    });
});