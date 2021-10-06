

$(function () {

    const swiper = new Swiper('.main-screen__cards', {
        // Default parameters
        slidesPerView: 5,
        spaceBetween: 13,
        slideClass: 'main-screen__cards-card',
        wrapperClass: 'main-screen__cards-wrapper',
        loop: false,
        autoplay: {
            delay: 2000,
        },
        // Responsive breakpoints
        breakpoints: {
            320:{
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                loopAdditionalSlides: 3,
                
               
            },
            
            780: {
                centeredSlides: false,
                slidesPerView: 5,
                spaceBetween: 10,
                loop: false,
                
            },
            1024:{
                slidesPerView: 5,
                spaceBetween: 14,

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
        wrapperClass: 'qa__tabs-wrap',
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
      const swiperTabs = new Swiper('.news-page .tabs', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        slideClass: 'tabs-item',
        wrapperClass: 'tabs-wrap',
        // Responsive breakpoints
        breakpoints: {
            320:{
                slidesPerView: 1,
            },
          

            1040:{
                slidesPerView: 6,
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


      const aboutSlider = new Swiper('.quality-slider', {
        slidesPerView: 3,
        spaceBetween: 85,
        slideClass: 'quality-slide',
        wrapperClass: 'quality-wrapper',
        breakpoints: {
            320:{
                slidesPerView: 1,
                spaceBetween: 30
                
            },
            780:{
                slidesPerView: 3,
                spaceBetween: 70
                
            },
            1040:{
                slidesPerView: 3,
            }
            
        }
      });


      

      $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 250; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });

    $( ".accordion" ).accordion({
        heightStyle: 'content'
      });


})