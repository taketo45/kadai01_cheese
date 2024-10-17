'use strict';

$(()=>{
  
  $('#about').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      //要素が見えたときに実行する処理
      $('.clicklogo').hide();
      // $('.clicklogo img').show();
    } else {
      //要素が見えなくなったときに実行する処理
      $('.clicklogo').hide();

    }
});

  $('#contact').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      //要素が見えたときに実行する処理
      $('.clicklogo').show();
      // $('.clicklogo img').show();
    } else {
      //要素が見えなくなったときに実行する処理
      $('.clicklogo').hide();

    }
});
});

//Slick用

$('.imgs-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerPadding: '25%',
  responsive: [
    {
      breakpoint: 1024,
      // centerPadding: '25%',
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});