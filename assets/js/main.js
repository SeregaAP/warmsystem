$(document).ready(function(){
    $(".fancybox").fancybox();

    $('.fotorama').fotorama({
        maxwidth: '100%',
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

    const swiper = new Swiper('.report__slider', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.report-sl-back',
          prevEl: '.report-sl-next',
        },
        breakpoints: {
            1201: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
              }
          },
    });

    const swiper2 = new Swiper('.review_sl', {
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.review-left',
          prevEl: '.review-right',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
              }
          },
    });

    $('.sertificate_lsider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        infinite: true,
        pauseOnHover: false,
        prevArrow: $('.sert-sl-back'),
        nextArrow: $('.sert-sl-next'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
    });

    $('.cart-sl-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      fade: true,
      asNavFor: '.cart-sl-nav',
      responsive: [
        {
          breakpoint: 525,
          settings: {
            dots: true,
            fade:false,
          }
        }
      ]
    });

    $('.cart-sl-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      asNavFor: '.cart-sl-for',
      focusOnSelect: true,
      prevArrow: $('.cart-btn-up'),
      nextArrow: $('.cart-btn-down'),
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

    $('.questions_itm-btn').on('click',function(){
        $('.questions-answer').removeClass('active');
        $('.questions_itm-btn').removeClass('active');
        $(this).addClass('active');
        var list = $(this).parent();
        list = $(list).parent();
        list = $(list).children('.questions-answer');
        $(list).addClass('active');
    });

    $('.close-filter-bar').on('click',function(){
      $('.catalog_side-bar').removeClass('active');
    });

    $('.btn-open-filter').on('click',function(){
      $('.catalog_side-bar').addClass('active');
    });

    $('.inp-attr').on('click',function(){
      $('.input-list').removeClass('active');
      var inp = $(this).parent();
      inp = $(inp).parent();
      inp = $(inp).children('input');
      $(inp).val($(this).text());
    });

    $('.tab-btn').on('click',function(){
      $('.tab__item').removeClass('active');
      $('.tab-btn').removeClass('active');
      var tab = '.tab__item-' +  $(this).data('tab');
      $(this).addClass('active');
      $(tab).addClass('active');
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