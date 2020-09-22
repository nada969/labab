$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").toggle(2000);
    });
  });
  
$(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
});
});
$(function() {  
    $("body").niceScroll({cursorcolor:"orange"});
});
$('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');