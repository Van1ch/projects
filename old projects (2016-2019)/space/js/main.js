$(document).ready(function () {
    $('.header-right__nav').click(function () {
        $('.header-right__nav-spans').toggleClass('nav-open');
        $('.header-right__nav-main').toggleClass('nav-open');
        $('.purple').toggleClass('purple-active');
    });
    $('.purple').click(function () {
        $('.header-right__nav-spans').removeClass('nav-open');
        $('.header-right__nav-main').removeClass('nav-open');
        $('.purple').removeClass('purple-active');
        $('.form').removeClass('form-active');
    });
    $('.main-button').click(function () {
        $('.menu-wrapper').toggleClass('menu-active');
        $('.content').toggleClass('content-change');
    });
    $('.menu-links__current').click(function () {
        $('.menu-wrapper').removeClass('menu-active');
        $('.content').removeClass('content-change');
    });
    $('.header-right__faq').click(function () {
        $('.faq').toggleClass('form-active');
        $('.purple').toggleClass('purple-active');
    });
    $('.header-right__news').click(function () {
        $('.news').toggleClass('form-active');
        $('.purple').toggleClass('purple-active');
    });
    $('.header-right__rules').click(function () {
        $('.rules').toggleClass('form-active');
        $('.purple').toggleClass('purple-active');
    });
    $('.form-close').click(function () {
        $('.purple').removeClass('purple-active');
        $('.form').removeClass('form-active');
    });
    $('.rulesOfProject').click(function () {
        $('.rules').toggleClass('form-active');
        $('.purple').toggleClass('purple-active');
    });
    function HellYeah() {
        let NumberOfItems = $('.user-main__item').length;
        if (parseInt(NumberOfItems % 2) === 1) $('.user-main__item').last().css('width', '100%');
        console.log();
    }
    HellYeah();
});
