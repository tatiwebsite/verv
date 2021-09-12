'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.reviews__slider-wrapper'),
          slides = slidesWrapper.querySelectorAll('.reviews__slide'),
          slidesField = slidesWrapper.querySelector('.reviews__slider-inner'),
          slideWidth = window.getComputedStyle(slidesWrapper).width,
          plansInner = document.querySelector('.plans__inner'),
          plans = plansInner.querySelectorAll('.plan'),
          plansButton = document.querySelector('.plans__btn');

    designPlan();

    let timerId = setInterval(() => moveRightSlider(), 5000);
    
    //PlansChecking
    plansInner.addEventListener('click', (e) => {
        if(e.target){
            plans.forEach((plan) => {
                plan.querySelector('.plan__info').classList.remove('active');
            });
            let targetPlan = e.target.closest('.plan__info');
            targetPlan.classList.add('active');
        }
    });

    //Go To Continue
    plansButton.addEventListener('click', () => {
        plansButton.setAttribute('href', '');
        plans.forEach((plan) => {
            if(plan.querySelector('.plan__info.active')){
               let activePlan = plan.querySelector('.plan__info.active');
               let link = activePlan.getAttribute('data-link'); 
               plansButton.setAttribute('href', link);
            }
        });
    });

    ///Slider
    let offset = 0;
    let slideIndex = 1;
    slidesField.style.width = 100 * slides.length + '%';
    
    function moveRightSlider(){
        slides.forEach(slide => {
            slide.style.width = slideWidth;
        });

        if (offset == (+slideWidth.slice(0, slideWidth.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +slideWidth.slice(0, slideWidth.length - 2); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    }

    slidesWrapper.addEventListener('touchstart', () => {
        clearInterval(timerId);
        moveRightSlider();
    });
    
    //PlansDesign
    function designPlan(){
        plans.forEach((plan) => {
            if(!plan.querySelector('.plan__header')){
                plan.querySelector('.plan__info').classList.add('radius'); 
            } else if(plan.querySelector('.plan__footer') && plan.querySelector('.plan__header')){
                plan.querySelector('.plan__header').classList.add('bright'); 
            }
        });
    }


   

    

});