const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  breakpoints: {
      // when window width is >= 320px
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      1000: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true
});
