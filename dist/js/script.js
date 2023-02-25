$(document).ready(function(){
    $('.review__items').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/review/slider-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/review/slider-right.png"></button>',
      });
  });

// hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger-active');
        menu.classList.toggle('header__menu-active');
    });
});
