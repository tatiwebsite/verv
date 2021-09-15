'use strict';

window.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        spaceBetween: 6,  
        loop: true,
        slidesPerView: 1.1,
        centeredSlides: true
      });
    const plansInner = document.querySelector('.plans__inner'),
          plans = plansInner.querySelectorAll('.plan'),
          plansButton = document.querySelector('.plans__btn');

    designPlan();   
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