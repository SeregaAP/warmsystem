$(document).ready(function(){
    $(".fancybox").fancybox();
    if($(".phone").length){
      $(".phone").mask("+7-(999) 999-99-99");
    }

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

    $('.view_product_sl-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      fade: true,
      asNavFor: '.view_product_sl-nav',
    });

    $('.view_product_sl-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.view_product_sl-for',
      focusOnSelect: true,
      prevArrow: $('.btn_view-sl-back'),
      nextArrow: $('.btn_view-sl-next'),
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

    $('.basket_itm-btn').on('click',function(){
      var direction = $(this).data('dir');
      var val = $(this).parent();
      var inp = $(val).children('input');
      val = $(val).children('input').val();
      if(direction === "plus"){
        val++;
      }else{
        val--;
        if(val <= 1){
          val = 1;
        }
      }
      $(inp).val(val);
      console.log(val);
    });

    $('.placing-manager').on('click',function(){
      $('.form_placing').addClass('active');
    });

    $('.form_placing_close').on('click',function(){
      $('.form_placing').removeClass('active');
    });

    $('.form_manager_close').on('click',function(){
      $('.form_manager').removeClass('active');
    });

    $('.open-manager').on('click',function(){
      $('.form_manager').addClass('active');
    });

    $('.view_btn-close').on('click',function(){
      $('.view_product').removeClass('active');
    });
    $('.open-btn-view').on('click',function(){
        $('.view_product').addClass('active');
    });

    $('.view-btn-detail').on('click',function(){
      $('.view_desc').addClass('active');
    });

    $('.close-btn-desc-v').on('click',function(){
      $('.view_desc').removeClass('active');
    });


   
    /////////////////////////////////////////
    (function(){
      $(function () {
          $(".about_brend_list img").slice(0, 5).show();
          $(".about_brend_btn-list").on('click', function (e) {
              e.preventDefault();
              $(".about_brend_list img:hidden").slice(0, 5).slideDown(300);
              if ($(".about_brend_list img:hidden").length == 0) {
                  $("#load").fadeOut('slow');
              }
          });
          $(".sertificate_all__list img").slice(0, 4).show();
          $(".add-count-btn").on('click', function (e) {
              e.preventDefault();
              $(".sertificate_all__list img:hidden").slice(0, 5).slideDown(300);
              if ($(".sertificate_all__list img:hidden").length == 0) {
                  $("#load").fadeOut('slow');
              }
          });
      });
    })();
    ////////////////////////////////////////////
    initsl('.service-gl-sl-for','.service-gl-sl-nav');
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


function initsl(sl_for,sl_nav){
  var fors = $(sl_for);
  var navs = $(sl_nav);
$(navs).each(function(i, e){
  var parent = $(e).parent();
    var btn_back = $(parent).children('.serv-btn-back');
    var btn_next = $(parent).children('.serv-btn-next');
    $(fors[i]).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      fade: true,
      asNavFor: navs[i],
    });
    $(e).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: fors[i],
      focusOnSelect: true,
      prevArrow: $(btn_back),
      nextArrow: $(btn_next),
      responsive: [
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    });
})
  if($(sl_for).length && $(sl_nav).length){
    
  }
}