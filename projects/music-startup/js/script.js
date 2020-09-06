'use strict';
var sliderContainerWidth = document.querySelector('.slider__list-wrapper').clientWidth;
var sliderListWidth = document.querySelector('.slider__list').clientWidth;

var swiperMain = new Swiper('.main-slider', {
    navigation: {
        nextEl: '.main-slider__btn--next',
        prevEl: '.main-slider__btn--prev',
    },
});

if (sliderListWidth > sliderContainerWidth) {
    var swiperNew = new Swiper('.slider__list-wrapper', {
            slidesPerView: (sliderListWidth / sliderContainerWidth) - 1 < 0.5 ? 3 : 2,
            freeMode: true
    });
}