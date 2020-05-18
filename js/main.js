$(function () {

    $('.slider__inner').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next-arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev-arrow"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav',

    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        variableWidth: true,
        focusOnSelect: true,
        arrows: false,




    });






    document.querySelector('.header__menu-btn').onclick = function () {
        document.querySelector('.header__btn').classList.toggle('header__btn-active');
    }
    $('.header__menu-btn').on('click', function () {
        $('.header__menu-list').slideToggle();

    });

});