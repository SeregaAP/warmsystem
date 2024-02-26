$(document).ready(function(){
    $(".fancybox").fancybox();

    $('.fotorama').fotorama({
        maxwidth: '100%',
        //ratio: 16/9,
        //allowfullscreen: true,
        nav: 'thumbs'
    });
    
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

    if($('.swiper-container').length){
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows : true,
            },
            navigation:{ nextEl: ".arrow-left", prevEl: ".arrow-right" },
            //pagination: {
            //el: '.swiper-pagination',
           // clickable: true,
            //},
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                },
                // when window width is >= 640px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slideToClickedSlide: true,
                    loop: true,
                    loopedSlides: 5,
                    slidesPerView: 2,
                    modifier: 5,
                }
            }
        });
    }


    maps();
});


function maps() {
    var map,myDivIcon;

    DG.then(function () {
        map = DG.map('map', {
            center: [43.272505,76.925266],
            zoom: 13
        });

        myDivIcon = DG.divIcon({
            iconSize: [50, 80],
            html: '<button class="myDivIcon" type="button"><i class="fa-sharp fa-solid fa-location-dot"></i></button>'
        });
        DG.marker([43.272505,76.925266], {
            icon: myDivIcon
        }).addTo(map);

        $('.contact-gl-btn-close').on('click',function(){
            $('.contact-gl-info').removeClass('active');
        });
    
        $('.myDivIcon').on('click',function(){
            $('.contact-gl-info').addClass('active');
        });

    });
}