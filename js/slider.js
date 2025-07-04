const swiper1 = new Swiper('#swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 7.5,

  breakpoints: {
    640: {
      slidesPerView: 3,

    },
    1200: {
      slidesPerView: 5,

    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



const swiper2 = new Swiper('#swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 7.5,

  breakpoints: {
    640: {
      slidesPerView: 3,

    },
    1200: {
      slidesPerView: 5,

    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const swiper3 = new Swiper('#swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  
  slidesPerView: 2,
  

  breakpoints: {
    640: {
      slidesPerView: 3,

    },
    1200: {
      slidesPerView: 5,

    },
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});