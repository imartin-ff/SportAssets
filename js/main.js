$(function () {
    const swiper = new Swiper('.main-screen__cards', {
        // Default parameters
        slidesPerView: 5,
        spaceBetween: 13,
        slideClass: 'main-screen__cards-card',
        wrapperClass: 'main-screen__cards-wrapper',
        // Responsive breakpoints
        breakpoints: {
            320:{
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 0,
                spaceBetween: 10,
                loop: true,
                loopAdditionalSlides: 3,
            },
            
            780: {
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


      const swiperReviews = new Swiper('.reviews__slider', {
        // Default parameters
        slidesPerView: 4,
        spaceBetween: 70,
        slideClass: 'reviews__slide',
        wrapperClass: 'reviews__slider-wrapper',

        breakpoints: {
            320:{
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 0,
                spaceBetween: 30,
                loop: true,
                loopAdditionalSlides: 3,
            },
            
            780: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 30,
                loop: false
            },
            1024:{
                slidesPerView: 4,
                spaceBetween: 70
            }
            
        }
        
      })


      const swiperVideos = new Swiper('.videos__slider', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 15,
        slideClass: 'videos__slider-slide',
        wrapperClass: 'videos__slider-wrapper',

        breakpoints: {
            320:{
                centeredSlides: true,
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 3,
            },
            
        }
        
      })

      
      const swiperPartners = new Swiper('.partners__slider', {
        // Default parameters
        slidesPerView: 3,
        spaceBetween: 16,
        slideClass: 'partners__slide',
        wrapperClass: 'partners__slider-wrapper',

        breakpoints: {
            320:{
                centeredSlides: true,
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 3,
            },
             
            780: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 16,
                loop: false
            },            
            
        }
        
      })


})