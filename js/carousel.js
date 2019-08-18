$(document).ready(function(){

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

    $('.hero-carousel').on('init', function(event, slick){
    setCurrentSlideNumber(slick.currentSlide);
    });

    $('.hero-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setCurrentSlideNumber(nextSlide);
    });

    function setCurrentSlideNumber(currentSlide) {
        $('.lc-dots-number').text('0' + (currentSlide + 1));
    }

  });
          


