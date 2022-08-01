let btn_close= document.querySelector(".btn_close");
let navbar_collapse=document.querySelector(".navbar-collapse");



btn_close.addEventListener('click',()=>{
  navbar_collapse.classList.remove("show");
  
})


const swiper = new Swiper('.swiper_desktop', {
    // Optional parameters
    // loop: true,
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
        },
        768: {
          slidesPerView: 1,

        },
        1024: {
          slidesPerView: "auto",
        },
      },
  });


  var swiper_mobile = new Swiper(".swiper_mobile", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


