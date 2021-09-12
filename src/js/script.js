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
    createSlider();


    

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

    //AdaptiveLines
    // let display = document.documentElement.clientWidth;
    // document.querySelectorAll('.accent-offer__line>svg').forEach((line) => {
    //     line.style.width = display;
    // });

    //Slider
    function createSlider(){
        let slideIndex = 1;
        let offset = 0;
        let display = document.documentElement.clientWidth;
        console.log(display);
        let slideMargin = 0;

        slides.forEach(slide => {
            slide.style.width = +display / 100 * 90 + 'px';
        });

        slidesField.style.width = 90 * slides.length + '%';


        slidesWrapper.addEventListener('click', () => {
            if(offset == +slideWidth.slice(0, slideWidth.length - 2) * (slides.length - 1)){
                console.log(slideWidth);
                offset = 0;
            } else {
                console.log(slideWidth);
                offset += +slideWidth.slice(0, slideWidth.length - 2);
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;
        });

        let count = 1;
        
    }
    
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