function MySliderBox1__init() {
    let swiper = new Swiper(".my-slider-box-1 .swiper", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: ".my-slider-box-1 .swiper-button-next",
        prevEl: ".my-slider-box-1 .swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      
    });
  }
  
  MySliderBox1__init();
  
  $(".my-slider-box-1 .swiper").each(function(elem, target){
      var swp = target.swiper;
      $(this).hover(function() {
          swp.autoplay.stop();
      }, function() {
          swp.autoplay.start();
      });
  });