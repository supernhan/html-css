

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const hinhanhSwiper = new Swiper('.hinhanh_swiper,.product_swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 350px
      350: {
        slidesPerView: 1,
        
      },
      // when window width is >= 500px
      1024: {
        slidesPerView: 3,
      },

      
      1434: {
        slidesPerView: 4,
      },
      // Additional breakpoints if needed
      // For example:
      // 768: {
      //   slidesPerView: 3,
      // },
      // 1024: {
      //   slidesPerView: 4,
      // },
    },
  });



  
  document.getElementById('arrow_len').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





