$(function () {
    const swiper = new Swiper('.main-screen__cards', {
        // Default parameters
        slidesPerView: 5,
        spaceBetween: 13,
        slideClass: 'main-screen__cards-card',
        wrapperClass: 'main-screen__cards-wrapper',
        // Responsive breakpoints
        breakpoints: {
            480:{
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 0,
                spaceBetween: 10,
                loop: true,
                loopAdditionalSlides: 3,
            },
            
            720: {
                centeredSlides: false,
                slidesPerView: 5,
                spaceBetween: 10,
                loop: false
            },
            1024:{
                slidesPerView: 5,
                spaceBetween: 14
            }
            
        }
      })
})