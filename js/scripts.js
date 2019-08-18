$(document).ready(function(){


    var $status = $('.lc-dots-number');
    var $slickElement = $('.hero-carousel');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text('0' + i);
    });

    $('.hero-carousel').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: '.lc-dots'
    });
  });
          