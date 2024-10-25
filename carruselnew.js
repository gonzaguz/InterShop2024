var swiper = new Swiper(".baner-swiper", {
    loop: true,
    autoplay: true,
    dynamicBullets: true,
    pagination: {
      el: ".swiper-pagination",
      // type: "progressbar"
      clickable: true,
      // dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });