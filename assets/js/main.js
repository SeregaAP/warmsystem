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
        speed: 1000,
        infinite: true,
        pauseOnHover: false,
        prevArrow: $('.btn-hero-sl_next'),
        nextArrow: $('.btn-hero-sl_prev'),
    });

    $('.report__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.report-sl-back'),
        nextArrow: $('.report-sl-next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 300,
                autoplay: false,
                swipeToSlide: true,
                centerMode: true,
                infinite: true
              }
            }
          ]
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

    $('.reviews_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: false,
        swipeToSlide: true,
        centerMode: true,
        prevArrow: $('.review-left'),
        nextArrow: $('.review-right'),
    });

    



    $('.burger').on('click',function(){
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('.header').toggleClass('dark');
    });

    $('.btn-mob-link').on('click',function(){
        var ul = $(this).parent();
        var ul = $(ul).parent();
        var ul = $(ul).children('ul');
        $(ul).toggleClass('active');
        $(this).toggleClass('active');
    });

    maps();
});


window.addEventListener("scroll", function(e) {
    if($('.burger').hasClass('active') && $('.mobile-menu').hasClass('active')){
        $('.burger').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('.header').toggleClass('dark');
    }
    if (window.pageYOffset > 50) {
        $('.to-top' ).addClass('active');
        //$('.mobile-fixed_menu').addClass('active');
    } else {
        $('.to-top' ).removeClass('active');
        //$('.mobile-fixed_menu').removeClass('active');
    }
});

const menu_links = document.querySelectorAll('.menu-link[data-goto]');
if(menu_links.length > 0){
    menu_links.forEach(menu_link =>{
      menu_link.addEventListener("click",onMenuClick);
    });
    function onMenuClick(e) {
      const menuLink = e.target;
      const menu_bottom_item = document.querySelectorAll('.h-item');
      menu_bottom_item.forEach(menu_itm =>{
        $(menu_itm).removeClass('active');
      });
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        $(menuLink).parent().addClass('active');
        if(menuLink.dataset.goto !='.offer'){
          if(menuLink.dataset.goto !='.page-section-33'){
            if($(".basic__btn-mobile").hasClass("active")){
                $(".basic__btn-mobile").toggleClass("active");
                $(".menu-mob").toggleClass("active");
            }
          }
        }
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    }
}


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