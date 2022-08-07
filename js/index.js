$(document).ready(function() {
    new WOW().init();

   $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     autoplayTimeout: 2500,
     responsiveClass: true,
     nav:false,
       dots: false,
       navText: ['<span class="fa fa-chevron-left"></span>','<span class="fa fa-chevron-right"></span>'],

     responsive: {
       0: {
         items: 1,
         autoplay:true
       },
       600: {
         items: 3,
         autoplay:true
       },
       1000: {
         items: 4,
         autoplay:true,
         loop: true,
         margin: 20
       }
     }
   });
 });