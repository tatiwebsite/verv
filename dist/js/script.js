'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.reviews__slider-wrapper'),
          slides = slidesWrapper.querySelectorAll('.reviews__slide'),
          slidesField = slidesWrapper.querySelector('.reviews__slider-inner'),
          slideWidth = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.width = slideWidth;
    });

    slidesWrapper.addEventListener('click', () => {

        if(offset == +slideWidth.slice(0, slideWidth.length - 2) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += +slideWidth.slice(0, slideWidth.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });
});