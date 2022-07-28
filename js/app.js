const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    centeredSlides: true,
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,

        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 100
        },
      },
  });