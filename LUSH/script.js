function MySliderBox2__init() {
  let swiper = new Swiper(".my-slider-box-2 .swiper", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      pagination: {
          el: ".my-slider-box-2 .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + Tab[index] + "</span>";
          }
      }
  });
}

MySliderBox2__init();