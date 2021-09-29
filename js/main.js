$(function () {
    const swiper = new Swiper('.main-screen__cards', {
        // Default parameters
        slidesPerView: 5,
        spaceBetween: 13,
        slideClass: 'main-screen__cards-card',
        wrapperClass: 'main-screen__cards-wrapper',
        // Responsive breakpoints
        breakpoints: {
            320: {
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 20,
            } ,
            640: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 20,
            } ,
            800: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 20,
            } ,
            990:{
                slidesPerView: 5,
                spaceBetween: 14
            }
            
        }
      })
})