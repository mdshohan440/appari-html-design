$(document).ready(function(){
   

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
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
      
  });