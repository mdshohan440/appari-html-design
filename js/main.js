(function ($) {
    
    "use strict";


    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991",
      meanContract: " "
    });

//data-background
$("[data-background]").each(function(){
    $(this).css("background-image", "url(" + $(this).attr("data-background")+ ")")
})

// // //counter 
// $('.counter').counterUp({
//    delay: 10,
//     time: 1000
//  });

// image popup 
$(document).ready(function() {
    $('.popup-link').magnificPopup({type:'image'});   });

// video popup
$('.video-popup').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'dailymotion.com',
        
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                  
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        
        src: 'https://www.dailymotion.com/embed/video/%id%'
        
      }
    }
  }
  
});

// slick slider for testimonal


$('.testimonial-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.test-img-active'
});
$('.test-img-active').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-active',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  arrows:false,
});

// owl-carosoul
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


})(jQuery);