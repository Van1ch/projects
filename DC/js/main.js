$(document).ready(function () {

    $('.header-burger').on('click', function () {
        $(this).closest('.header-burger').toggleClass('header-burger_active');
        $('.main-menu').toggleClass('main-menu_active');
        $('body').toggleClass('modal-open');
    });

    $('.hide_modal').on('click', function () {
        $('.modal').modal('hide');
        setTimeout(function () {
            $('body').addClass('modal-open');
        },500);
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    $('.review-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        prevArrow:'<div class="review-slider__arrow arrow arrow-left"></div>',
        nextArrow:'<div class="review-slider__arrow arrow arrow-right"></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.reviewVid-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow:'<div class="reviewVid-slider__arrow arrow arrow-left"></div>',
        nextArrow:'<div class="reviewVid-slider__arrow arrow arrow-right"></div>'
    });
    $('.investor-payments__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
        prevArrow:'<div class="reviewVid-slider__arrow arrow arrow-left"></div>',
        nextArrow:'<div class="reviewVid-slider__arrow arrow arrow-right"></div>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.textItem-block__bottom').on('click', function (event) {
        let target = event.target;
        if (target.matches('div.textItem-block__bottom-button')) {
            $(this).children('.textItem-block__bottom-text').toggleClass('textItem-block__bottom-text_active');
        }
    });

    $('.about-faq__tabs-content__item').on('click', function () {
        $(this).toggleClass('about-faq__tabs-content__item-header_active');
    });
});