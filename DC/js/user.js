$(document).ready(function () {
    $('.header-burger').on('click', function () {
        $('.user-menu').toggleClass('user-menu_active');
        $('body').toggleClass('modal-open');
    });
    $('.user-menu__top-back').on('click', function () {
        $('.user-menu').removeClass('user-menu_active');
        $('body').removeClass('modal-open');
    });
    $('.textItem').on('click', function (event) {
        let target = event.target;
        if (target.matches('div.textItem-btn')) {
            $(this).children('.textItem-text').toggleClass('textItem-text_active');
        }
    });
    $('.user-investment__content-text').on('click', function (event) {
        let target = event.target;
        if (target.matches('span.user-investment__content-text__learnMore')) {
            $(this).children('.user-investment__content-text__text').toggleClass('user-investment__content-text__text_active');
        }
    });
});