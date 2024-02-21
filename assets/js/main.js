$(document).ready(function(){
    $(".fancybox").fancybox();
    
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        infinite: true,
        pauseOnHover: false,
        prevArrow: $('.btn-hero-sl_next'),
        nextArrow: $('.btn-hero-sl_prev'),
    });

    $('.report__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        infinite: true,
        pauseOnHover: false,
        prevArrow: $('.report-sl-back'),
        nextArrow: $('.report-sl-next'),
    });

    $('.sertificate_lsider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        infinite: true,
        pauseOnHover: false,
        prevArrow: $('.sert-sl-back'),
        nextArrow: $('.sert-sl-next'),
    });
});