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


      const swiperQa = new Swiper('.qa__tabs', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        slideClass: 'qa__tabs-item',
        wrapperClass: 'qa__tabs-wrapper',
        // Responsive breakpoints
        breakpoints: {
            320:{
                slidesPerView: 1,
            },
          

            1040:{
                slidesPerView: 7,
                spaceBetween: 10
            }
            
        }
      })

      const swiperEducation= new Swiper('.education__videos', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        slideClass: 'education__video',
        wrapperClass: 'education__videos-wrapper',
        touchRatio: 0,
        breakpoints: {
            320:{
                slidesPerView: 1,
                loop: true,
                touchRatio: 1,
                centeredSlides: true,
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 2,
                spaceBetween: 30
                
            },
            1040:{
                slidesPerView: 3,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                slidesPerGroup: 3,
            }
            
        }
      })



      $( "#accordion" ).accordion({
        heightStyle: 'content'
      });
})